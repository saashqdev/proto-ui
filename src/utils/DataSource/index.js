import Vue from 'vue';

export const solveCondition = (condition, obj) => {
    if (Array.isArray(condition))
        return condition.some((cond) => solveCondition(cond, obj));
    else if (typeof condition === 'object') {
        return Object.keys(condition).every((key) => {
            let expression = condition[key];
            if (typeof expression !== 'object')
                expression = ['=', expression];
            if (Array.isArray(expression)) {
                expression = {
                    operator: expression[0],
                    value: expression[1],
                };
            }

            let sourceValue = obj[key];
            let targetValue = expression.value;
            if (expression.caseInsensitive) {
                sourceValue = typeof sourceValue === 'string' ? sourceValue.toLowerCase() : sourceValue;
                targetValue = typeof targetValue === 'string' ? targetValue.toLowerCase() : targetValue;
            }

            if (typeof expression.operator === 'function')
                return expression.operator(sourceValue, targetValue, expression);
            else if (expression.operator === '=' || expression.operator === '==' || expression.operator === 'eq')
                return sourceValue === targetValue;
            else if (expression.operator === '!=' || expression.operator === 'neq')
                return sourceValue !== targetValue;
            else if (expression.operator === '<' || expression.operator === 'lt')
                return sourceValue < targetValue;
            else if (expression.operator === '<=' || expression.operator === 'lte')
                return sourceValue <= targetValue;
            else if (expression.operator === '>' || expression.operator === 'gt')
                return sourceValue > targetValue;
            else if (expression.operator === '>=' || expression.operator === 'gte')
                return sourceValue >= targetValue;
            else if (expression.operator === 'includes')
                return String(sourceValue).includes(targetValue);
            else if (expression.operator === 'startsWith')
                return String(sourceValue).startsWith(targetValue);
            else if (expression.operator === 'endsWith')
                return String(sourceValue).endsWith(targetValue);
            else
                throw new TypeError('Unknown operator in conditions!');
        });
    } else
        throw new TypeError('Condition must be a Object or Array!');
};

/**
 * @example as a simple query
 * const dataSource = new DataSource();
 * dataSource.query({
 *     paging,
 *     sorting,
 *     filtering,
 * }).then();
 *
 * @example as state storage
 * const dataSource = new DataSource();
 * dataSource.filter();
 *
 */

const VueDataSource = Vue.extend({
    data() {
        return {
            data: [],
            cache: true,
            viewMode: 'page',
            paging: undefined, // @TODO
            sorting: undefined, // @readonly
            filtering: undefined, // @readonly
            // grouping: undefined,
            remote: false,
            remotePaging: false,
            remoteSorting: false,
            remoteFiltering: false,
            // remoteGrouping: false,
            // ------
            arrangedData: [], // Arranged data, used for cache filtering and sorting. For example, if you get the paging multiple times, there is no need to re-arrange
            arranged: false,
            prependedData: [],
            dirty: false,
            originTotal: Infinity, // @readonly - originTotal is an important basis for judging whether all data has been loaded.
            initialLoaded: false,
            params: {},
        };
    },
    computed: {
        offset() {
            return this.paging ? (this.paging.number - 1) * this.paging.size : 0;
        },
        limit() {
            return this.paging ? this.paging.size : Infinity;
        },
        total() {
            if (this.remotePaging)
                return this.originTotal === Infinity ? this.data.length : this.originTotal;
            else
                return this.arrangedData.length;
        },
        totalPage() {
            if (!this.paging)
                return 1;
            const totalPage = Math.ceil(this.total / this.paging.size);
            if (totalPage === Infinity || totalPage === 0)
                return 1;
            else
                return totalPage;
        },
        viewData() {
            if (this.paging) {
                if (this.viewMode === 'more')
                    return this.arrangedData.slice(0, this.offset + this.limit);
                else
                    return this.arrangedData.slice(this.offset, this.offset + this.limit);
            } else
                return this.arrangedData;
        },
    },
    // paging, sorting, filtering do not use watch yet
    created() {
        this.remote = !!this._load;
        // Pass data as local data mode, all data is known at this time
        if (!this.remote) {
            this.initialLoaded = true;
            this.originTotal = this.data.length;
            this.arrange();
        }
    },
    methods: {
        arrange() {
            let arrangedData = Array.from(this.data);

            if (this.remotePaging)
                return this.arrangedData = arrangedData;

            const filtering = this.filtering;
            if (!this.remoteFiltering && filtering && Object.keys(filtering).length)
                arrangedData = arrangedData.filter((item) => solveCondition(filtering, item));

            const sorting = this.sorting;
            if (!this.remoteSorting && sorting && sorting.field) {
                const field = sorting.field;
                const orderSign = sorting.order === 'asc' ? 1 : -1;
                if (sorting.compare)
                    arrangedData.sort((item1, item2) => sorting.compare(item1[field], item2[field], orderSign));
                else
                    arrangedData.sort((item1, item2) => this.defaultCompare(item1[field], item2[field], orderSign));
            }

            this.arrangedData = arrangedData;
        },
        _process(data) {
            return data;
        },
        clearLocalData() {
            this.data = [];
            this.arrangedData = [];
            this.originTotal = Infinity;
            this.arranged = false;
            this.initialLoaded = false;
        },
        mustRemote(offset, newOffset) {
            return !this.hasAllRemoteData(offset, newOffset) // No all remote data
            || (this.params.hasOwnProperty('filtering') && this.remoteFiltering)
            || (this.params.hasOwnProperty('sorting') && this.remoteSorting);
        },
        /**
         * According to viewData, whether there is still data
         * @param {Number} offset - position
         */
        hasMore(offset) {
            if (offset === undefined || offset === Infinity)
                offset = this.offset + this.limit;
            return offset < this.prependedData.length + this.originTotal;
        },
        /**
         * Is there any remote data?
         * @param {Number} offset - position
         */
        hasAllRemoteData(offset, newOffset) {
            if (!this.remote)
                return true;
            if (!this.remotePaging)
                return this.data.length >= this.originTotal;

            offset += this.prependedData.length;
            newOffset += this.prependedData.length;
            for (let i = offset; i < newOffset; i++)
                if (!this.data[i])
                    return false;
            return true;
        },
        hasChanges() {
            return false;
        },
        defaultCompare(a, b, sign) {
            if (a === b)
                return 0;
            else
                return a > b ? sign : -sign;
        },
        _getExtraParams() {
            return undefined;
        },
        slice(offset, newOffset) {
            return this.arrangedData.slice(offset, newOffset);
        },
        // _load(params)
        load(offset, limit) {
            if (offset === undefined)
                offset = this.offset;
            if (limit === undefined)
                limit = this.limit;
            const newOffset = offset + limit;

            const queryChanged = Object.keys(this.params).length;
            //Call the front-end cache data
            if (!this.remote || this.cache && !this.mustRemote(offset, newOffset)) {
                // When there is no cached data or there are new request parameters, try to filter and sort again
                if (queryChanged) {
                    this.arrange();
                    this.params = {};
                }
                return Promise.resolve(this.arrangedData.slice(offset, newOffset));
            }

            //Call backend data
            // If there is a new query parameter change, clear the cache
            if (queryChanged) {
                this.clearLocalData();
                this.params = {};
            }
            const paging = Object.assign({ offset: offset - this.prependedData.length, limit: this.limit }, this.paging);

            const params = Object.assign({
                paging,
                sorting: this.sorting,
                filtering: this.filtering,
            }, this._getExtraParams());

            return this._load(params).then((result) => {
                this.initialLoaded = true;

                if (!this.remotePaging) { // No backend paging, all data is considered
                    if (result instanceof Array) { // Return only the array, no total field
                        this.originTotal = result.length;
                        this.data = this._process(result);
                    } else if (result instanceof Object) { // return { total, data }
                        this.originTotal = result.total;
                        this.data = this._process(result.data);
                    } // Otherwise do nothing

                    this.arrange();
                    return this.arrangedData.slice(offset, newOffset);
                } else {
                    let partialData;

                    if (result instanceof Array) { // Return only the array, no total field
                        if (!result.length) // No more data, then record the total number
                            this.originTotal = this.data.length;
                        else
                            partialData = this._process(result);
                    } else if (result instanceof Object) { // return { total, data }
                        this.originTotal = result.total;
                        partialData = this._process(result.data);
                    } // Otherwise do nothing

                    for (let i = 0; i < limit; i++) {
                        const item = partialData[i];
                        if (item)
                            this.data[offset + i] = item;
                    }

                    this.arrange();
                    return partialData;
                }
            });
        },
        loadMore() {
            if (!this.hasMore())
                return Promise.resolve([]);
            else
                return this.load(this.offset + this.limit).then(() => this.paging.number++);
        },
        reload() {
            this.clearLocalData();
            this.load();
        },
        page(paging) {
            this.paging = paging;
        },
        sort(sorting) {
            this.sorting = sorting;
            this.params.sorting = sorting;
        },
        filter(filtering) {
            this.filtering = filtering;
            this.params.filtering = filtering;
        },
        // query(params) {
        //     this.params = params;
        //     return this;
        // },
        prepend(item) {
            this.data.unshift(item);
            this.prependedData.unshift(item);
            this.arrange();
        },
        add(item) {
            this.data.push(item);
            this.arrange();
        },
        get() {
            // Get an item
        },
        update() {
            // Update an item
        },
        remove() {
            // Delete an item
        },
        save() {
            // keep
        },
    },
});

function DataSource(options) {
    const data = {};
    const methods = {};

    Object.keys(options).forEach((key) => {
        const option = options[key];
        if (typeof option === 'function')
            methods['_' + key] = option;
        else
            data[key] = option;
    });

    // if (options.data)
    //     data.data = methods._process ? methods._process(options.data) : Array.from(options.data);

    VueDataSource.call(this, {
        data() { return data; },
        methods,
    });
}

DataSource.prototype = Object.create(VueDataSource.prototype);
// DataSource.prototype.constructor = DataSource;

export default DataSource;