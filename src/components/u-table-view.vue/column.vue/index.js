import { MEmitter } from '../../m-emitter.vue';
import { Formatter, parseFormatters, placeholderFormatter } from '../../../utils/Formatters';

export const UTableViewColumn = {
    name: 'u-table-view-column',
    parentName: 'u-table-view',
    mixins: [MEmitter],
    props: {
        type: String,
        startIndex: { type: Number, default: 1 },
        title: String,
        field: String,
        width: [String, Number],
        fixed: { type: Boolean, default: false },
        sortable: { type: Boolean, default: false },
        sortCompare: { type: Function },
        defaultOrder: String,
        filters: { type: Array },
        ellipsis: { type: Boolean, default: false },
        formatter: { type: [String, Object, Function, Formatter], default: 'placeholder' },
        hidden: { type: Boolean, default: false },
    },
    data() {
        const data = {
            parentVM: undefined,
            filterVM: undefined,
            currentWidth: this.width === undefined ? undefined : this.width + '',
            computedWidth: this.width === undefined ? undefined : this.width + '',
            currentFormatter: undefined,
        };

        if (typeof this.formatter === 'object')
            data.currentFormatter = this.formatter;
        else if (typeof this.formatter === 'string') {
            data.currentFormatter = {
                _format: parseFormatters(this.formatter),
                format(value) {
                    return this._format(value);
                },
            };
        } else if (typeof this.formatter === 'function') {
            data.currentFormatter = {
                format: this.formatter,
            };
        } else
            data.currentFormatter = placeholderFormatter;

        return data;
    },
    created() {
        !this.parentVM && this.$contact(this.$options.parentName, (parentVM) => {
            this.parentVM = parentVM;
            parentVM.columnVMs.push(this);
        });
    },
    destroyed() {
        this.$contact(this.$options.parentName, (parentVM) => {
            parentVM.columnVMs.splice(parentVM.columnVMs.indexOf(this), 1);
            this.parentVM = undefined;
        });
    },
};

export default UTableViewColumn;
