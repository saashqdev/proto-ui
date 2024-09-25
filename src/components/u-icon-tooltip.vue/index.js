import MPopper from '../m-popper.vue';
import pick from 'lodash/pick';

/**
 * A button is displayed by default, and there is a prompt when hovering up.
 */
export const UIconTooltip = {
    name: 'u-icon-tooltip',
    props: {
        type: { type: String, default: 'info' }, // Button name
        size: { type: String, default: 'normal' }, // Tip size
        content: String,
        trigger: { type: String, default: 'hover' },
        placement: { type: String, default: 'bottom' },
        ...pick(MPopper.props, [
            'opened',
            'reference',
            'hideDelay',
            'boundariesElement',
            'followCursor',
            'offset',
            'disabled',
        ]),
    },
};

export default UIconTooltip;
