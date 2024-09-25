import MPopper from '../m-popper.vue';

export const UPopup = {
    name: 'u-popup',
    extends: MPopper,
    props: {
        title: String,
        content: String,
        // @inherit: opened
        // @inherit: trigger: { type: String, default: 'click' },
        // @inherit: placement: { type: String, default: 'bottom-start' },
        // @inherit: reference: HTMLElement, // To facilitate the generation of instructions
        // @inherit: followCursor: { type: [Boolean, Number, Object], default: false },
        // @inherit: hideDelay: { type: Number, default: 0 },
        // @inherit: offset: { type: String, default: '0' },
        disabled: { type: Boolean, default: false },
        mergeBorders: { type: Boolean, default: true },
    },
};

export default UPopup;
