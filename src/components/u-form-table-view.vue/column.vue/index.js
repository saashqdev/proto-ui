import { MEmitter } from '../../m-emitter.vue';
// import UValidator from '../../u-validator.vue'; We don’t inherit it directly here, we just copy the attributes.
import { Formatter, parseFormatters, placeholderFormatter } from '../../../utils/Formatters';

export const UFormTableViewColumn = {
    name: 'u-form-table-view-column',
    parentName: 'u-form-table-view',
    mixins: [MEmitter],
    props: {
        type: String,
        startIndex: { type: Number, default: 1 },
        title: String,
        field: String,
        width: [String, Number],
        ellipsis: { type: Boolean, default: false },
        formatter: { type: [String, Object, Function, Formatter], default: 'placeholder' },
        hidden: { type: Boolean, default: false },
        label: String,
        action: String,
        rules: [String, Array, Object],
        // target: { type: String, default: 'auto' },
        // message: String,
        muted: { type: String, default: 'message' },
        ignoreRules: { type: Boolean, default: false }, // @deprecated
        ignoreValidation: { type: Boolean, default: false },
        validatingOptions: Object,
        validatingValue: null,
        validatingProcess: Function,
    },
    data() {
        const data = {
            parentVM: undefined,
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

export default UFormTableViewColumn;
