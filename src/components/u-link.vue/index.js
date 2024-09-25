export const ULink = {
    name: 'u-link',
    props: {
        href: String,
        target: { type: String, default: '_self' },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    computed: {
        /**
         * When using `to`, a link is also generated, as close as possible to the native `<a>`
         */
        currentHref() {
            if (this.href !== undefined)
                return this.href;
            else if (this.$router && this.to !== undefined)
                return this.$router.resolve(this.to, this.$route, this.append).href;
            else
                return undefined;
        },
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        },
    },
    methods: {
        onClick(e) {
            if (this.disabled)
                return e.preventDefault();

            this.$emit('click', e, this);

            if (this.target !== '_self')
                return;

            // Use `$router` when using `to`, otherwise use native
            if (this.href === undefined) {
                // When using some shortcut keys of the browser, go native
                // @TODO: Consider using shortcut keys to throw events and prevent the process.
                if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey)
                    return;

                e.preventDefault();
                this.navigate();
            }
        },
        navigate() {
            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[proto-ui]', 'Cannot find vue-router.');

            let cancel = false;
            this.$emit('before-navigate', {
                to: this.to,
                replace: this.replace,
                append: this.append,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            const $router = this.$router;
            const { location } = $router.resolve(this.to, this.$route, this.append);
            this.replace ? $router.replace(location) : $router.push(location);

            this.$emit('navigate', {
                to: this.to,
                replace: this.replace,
                append: this.append,
            }, this);
        },
    },
};

export default ULink;
