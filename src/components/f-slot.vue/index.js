export const FSlot = {
    name: 'f-slot',
    functional: true,
    props: {
        vm: null,
        name: String,
        props: Object,
        catchError: { type: Boolean, default: true },
    },
    render(h, context) {
        let { vm, name, props, catchError } = context.props;
        vm = vm || vm.context.parent; // @TODO: It may not be right, you need to verify it

        const scopedSlot = vm.$scopedSlots[name];
        const slot = vm.$slots[name];

        if (scopedSlot) {
            try {
                return scopedSlot(props);
            } catch (e) {
                if (catchError)
                    return h('div', e.message || e);
                else
                    throw e;
            }
        } else if (slot)
            return slot;
        else
            return context.children;
    },
};

export default FSlot;
