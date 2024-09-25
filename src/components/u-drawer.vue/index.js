import UModal from '../u-modal.vue';

export const UDrawer = {
    name: 'u-drawer',
    extends: UModal,
    props: {
        placement: { type: String, default: 'left' },
        maskClosable: { type: Boolean, default: true },
    },
    data() {
        return {
            drawerVisible: this.visible,
        };
    },
    watch: {
        // @TODO: Temporary solution to stagger two animations
        currentVisible(currentVisible) {
            this.$nextTick(() => this.drawerVisible = currentVisible);
        },
    },
};

export default UDrawer;
