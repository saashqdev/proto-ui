/**
 * Automatically add a `title` hint to elements containing the `ellipsis` style and with too long text
 */
export const ellipsisTitle = {
    bind(el, binding) {
        el.__ellipsisTitleHandler = (e) => {
            // If it is judged that the `title` attribute already exists without adding `title`, it will cause `<u-select>` to remain unchanged and `text` change in some scenarios, but `title` will not be updated.
            const style = window.getComputedStyle(el);
            const title = binding.value || el.innerText;
            if (style.overflow === 'hidden' && style.textOverflow === 'ellipsis' && style.whiteSpace === 'nowrap' && el.scrollWidth > el.offsetWidth)
                el.setAttribute('title', title);
        };
        el.addEventListener('mouseenter', el.__ellipsisTitleHandler);
    },
    unbind(el) {
        el.removeEventListener('mouseenter', el.__ellipsisTitleHandler);
        delete el.__ellipsisTitleHandler;
    },
};
