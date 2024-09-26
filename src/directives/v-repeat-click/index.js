import event from '../../utils/event';

export const repeatClick = {
    bind(el, binding, vnode) {
        const wait = +binding.arg || 400;
        const interval = 100;
        const handler = vnode.context[binding.expression];
        let pressing = false;
        let timer;

        const fn = () => {
            if (!pressing)
                return;

            handler();
            timer = setTimeout(fn, interval);
        };

        el.__repeatClickOff = event.on(el, 'mousedown', (e) => {
            // There is an order issue with self and prevent, so use a for loop
            const modifiers = Object.keys(binding.modifiers);
            for (let i = 0; i < modifiers.length; i++) {
                const modifier = modifiers[i];
                if (modifier === 'self' && e.target !== el)
                    return;
                else if (modifier === 'stop')
                    e.stopPropagation();
                else if (modifier === 'prevent')
                    e.preventDefault();
            }

            // @TODO: Other related custom instructions
            if (e.button !== 0)
                return;

            event.once(document, 'mouseup', () => pressing = false);
            clearTimeout(timer);
            pressing = true;
            handler();
            timer = setTimeout(fn, wait);
        }, {
            capture: binding.modifiers.capture,
            once: binding.modifiers.once,
            passive: binding.modifiers.passive,
        });
    },
    unbind(el) {
        el.__repeatClickOff();
    },
};
