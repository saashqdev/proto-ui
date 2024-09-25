import MField from '../m-field.vue';
import isNumber from 'lodash/isNumber';

export const UCascadeSelect = {
    name: 'u-cascade-select',
    mixins: [MField],
    props: {
        data: Array,
        value: String,
        categories: { type: Array, default() { return []; } },
        autoSelect: { type: Boolean, default: true },
        hideEmpty: { type: Boolean, default: false },
        converter: { type: [String, Object], default: 'join' },
        field: { type: String, default: 'text' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        size: String,
        layout: { type: String, default: 'inline' },
    },
    data() {
        const data = {
            currentData: this.data,
            values: [],
            lists: [],
            currentConverter: {},
        };

        if (this.converter instanceof Object)
            data.currentConverter = this.converter;
        else if (this.converter === 'last-value') {
            data.currentConverter = {
                get(values) {
                    return values[values.length - 1];
                },
                set: (value) => {
                    const values = [];

                    const findValues = (list, level) => {
                        if (!list || level >= this.categories.length)
                            return;

                        for (let i = 0; i < list.length; i++) {
                            const item = list[i];
                            values.push(item.value);

                            if (level === this.categories.length - 1 && item.value === value) // The last element, and the values are equal, find the path
                                return true;
                            else if (item.children && findValues(item.children, level + 1))
                                return true;
                            else
                                values.pop();
                        }
                    };

                    findValues(this.currentData, 0);
                    return values;
                },
            };
        } else if (this.converter.startsWith('join')) {
            const m = this.converter.match(/^join(\.number)?(:.+)?$/);
            if (!m)
                throw new Error('converter format error');

            const number = !!m[1];
            const sep = m[2] ? m[2].slice(1) : ',';

            data.currentConverter = {
                get(values) {
                    return values.join(sep);
                },
                set(value) {
                    const values = value ? value.split(sep) : [];
                    return number ? values.map((i) => +i) : values;
                },
            };
        }

        // The first pass in requires `values` to be derived from `value`
        data.values = data.currentConverter.set(this.value);

        return data;
    },
    watch: {
        data(data, oldData) {
            this.currentData = data;
        },
        currentData(currentData) {
            // @TODO: Should I use map to find value?
            this.lists = [];
            this.values = this.currentConverter.set(this.value);
            this.setList(currentData, 0);
            const value = this.currentConverter.get(this.values);
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
        },
        value(value, oldValue) {
            if (value !== this.currentConverter.get(this.values)) {
                this.lists = [];
                this.values = this.currentConverter.set(value);
                this.setList(this.currentData, 0);
            }

            const oldValues = this.values;
            this.$emit('change', {
                value,
                oldValue,
                values: this.values,
                oldValues,
            }, this);
        },
    },
    created() {
        this.setList(this.currentData, 0);
        // If no value is passed in and autoSelect is selected, a synchronization event is automatically triggered.
        if (this.autoSelect && this.value === undefined) {
            const value = this.currentConverter.get(this.values);
            if (value !== '') {
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            }
        }
    },
    methods: {
        /**
         * Setting list
         * @param {Array} list The list to be set
         * @param {Number} level current level
         */
        setList(list, level) {
            // Recursive end condition
            // if (level >= this.categories.length)
            //     return;

            this.lists.splice(level, this.values.length, list);

            const value = this.values[level];
            let item;
            if (list && list.length) {
                item = list.find((item) => (item.exist === undefined || !!item.exist === true) && !item.disabled && item.value === value);

                // When the item corresponding to value cannot be found
                // If automatic selection is set and placeholder is not set
                // Automatically select the first displayed and non-disabled item
                if (!item && this.autoSelect && this.categories[level].placeholder === undefined) {
                    let index = 0;
                    for (let i = 0; i < list.length; i++) {
                        const item = list[i];
                        // Automatically filter disabled and non-existent items
                        if (!(item.exist === undefined || !!item.exist === true) || item.disabled)
                            continue;

                        index = i;
                        if (isNumber(value) && isNumber(item.value) && value > item.value)
                            continue;
                        else
                            break;
                    }
                    item = list[index];
                }
            }

            if (item) {
                this.values.splice(level, 1, item.value);
                // Continue to the next level
                level < this.categories.length && this.setList(item.children, level + 1);
            } else {
                this.values.splice(level, this.values.length);
            }
        },
        onSelect($event, level) {
            this.setList($event.item ? $event.item.children : undefined, level + 1);

            const value = this.currentConverter.get(this.values);
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('select', {
                level,
                value,
                values: Array.from(this.values),
                item: $event.item,
                itemVM: $event.itemVM,
            }, this);
        },
    },
};

export default UCascadeSelect;
