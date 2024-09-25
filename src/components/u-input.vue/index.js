import MField from '../m-field.vue';
import { focus } from '../../directives';

export const UInput = {
    name: 'u-input',
    mixins: [MField],
    directives: { focus },
    props: {
        value: [String, Number],
        color: String,
        placeholder: String,
        clearable: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            focused: false,
            currentValue: this.value,
            currentColor: this.color,
            compositionInputing: false,
        };
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            ['input', 'change', 'focus', 'blur', 'update:value'].forEach((prop) => {
                delete listeners[prop];
            });
            return listeners;
        },
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
        currentValue(value, oldValue) {
            this.$emit('change', { value, oldValue }, this);
        },
        color(color) {
            this.currentColor = color;
        },
    },
    methods: {
        onInput(e) {
            if (!this.compositionInputing) {
                this.currentValue = e.target.value;
                this.$emit('input', this.currentValue, this);
                this.$emit('update:value', this.currentValue, this);
            }
        },
        onFocus(e) {
            this.focused = true;
            this.$emit('focus', e, this);
        },
        onBlur(e) {
            this.focused = false;
            this.$emit('blur', e, this);
        },
        onCompositionEnd(e) {
            // When inputting, the onInput event will be triggered first, and then this event will be triggered, resulting in the inability to capture input.
            // Therefore special processing is required, and the compositionInputing value is true at this time
            this.compositionInputing = false;
            this.currentValue = e.target.value;
            this.$emit('input', this.currentValue, this);
            this.$emit('update:value', this.currentValue, this);
        },
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        },
        clear() {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.currentValue;

            let cancel = false;
            this.$emit('before-clear', {
                oldValue,
                value: '',
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentValue = '';
            this.$emit('input', '', this);
            this.$emit('update:value', '', this);
            this.focus();

            this.$emit('clear', {
                oldValue,
                value: '',
            }, this);
        },
    },
};

export default UInput;
