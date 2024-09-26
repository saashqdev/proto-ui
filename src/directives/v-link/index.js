/**
 * Add `<a>` link effect to any element
 * This command is suitable for temporary use in certain scenarios. It is recommended to use `<u-link>` directly or inherit new components from `<m-router-item>`
 * @modifier blank - whether to open a new window
 */
export const href = {
    bind(el, binding) {
        el.dataset = el.dataset || {};
        el.dataset.href = binding.value;
        el.__hrefHandler = (e) => {
            if (binding.modifiers.blank)
                window.open(el.dataset.href);
            else
                location.href = el.dataset.href;
        };
        el.addEventListener('click', el.__hrefHandler);
    },
    update(el, binding) {
        el.dataset.href = binding.value;
    },
    unbind(el) {
        el.removeEventListener('click', el.__hrefHandler);
        delete el.__hrefHandler;
    },
};

/**
 * Add the `to` effect of `<router-link>` to any element
 * This command is suitable for temporary use in certain scenarios. It is recommended to use `<u-link>` directly or inherit new components from `<m-router-item>`
 * @modifier replace - History uses `push` method or `replace` method
 */
export const to = {
    bind(el, binding, vnode) {
        el.dataset = el.dataset || {};
        el.dataset.to = binding.value;

        const $router = vnode.componentInstance.$router;
        if (!$router)
            return console.warn('[proto-ui] Use `v-to` but cannot find vue router.');

        el.__toHandler = (e) => {
            binding.modifiers.replace ? $router.replace(el.dataset.to) : $router.push(el.dataset.to);
        };
        el.addEventListener('click', el.__toHandler);
    },
    update(el, binding) {
        el.dataset.to = binding.value;
    },
    unbind(el) {
        el.removeEventListener('click', el.__toHandler);
        delete el.__toHandler;
    },
};
