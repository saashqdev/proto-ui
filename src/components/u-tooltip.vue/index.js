import MPopper from '../m-popper.vue';

export const UTooltip = {
    name: 'u-tooltip',
    extends: MPopper,
    props: {
        content: String,
        // @inherit: opened
        trigger: { type: String, default: 'hover' },
        placement: { type: String, default: 'bottom' },
        // @inherit: reference
        // @inherit: hideDelay
        // @inherit: boundariesElement
        // @inherit: followCursor
        // @inherit: offset
        // @inherit: disabled
    },
    watch: {
        content() {
            // When the content changes, the tooltip length needs to be updated.
            this.update();
        },
    },
};

export default UTooltip;
