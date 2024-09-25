import Popper from '@kubevue/popper.js';
import MEmitter from '../m-emitter.vue';
import ev from '../../utils/event';
import single from '../../utils/event/single';

export const MPopper = {
    name: 'm-popper',
    mixins: [MEmitter],
    isPopper: true,
    props: {
        opened: { type: Boolean, default: false },
        trigger: { type: String, default: 'click' },
        triggerElement: { type: [String, HTMLElement, Function], default: 'reference' },
        reference: { type: [String, HTMLElement, Function], default: 'context-parent', validator: (value) => {
            if (typeof value !== 'string')
                return true;
            else
                return ['parent', '$parent', 'context-parent', 'prev', 'next'].includes(value);
        } },
        placement: {
            type: String, default: 'bottom-start',
            validator: (value) => /^(top|bottom|left|right)(-start|-end)?$/.test(value),
        },
        HoverDelay: { type: Number, default: 0 },
        hideDelay: { type: Number, default: 0 },
        appendTo: { type: String, default: 'body', validator: (value) => ['body', 'reference'].includes(value) },
        boundariesElement: { default: 'window' },
        arrowElement: { type: String, default: '[u-arrow]' },
        escapeWithReference: { type: Boolean, default: true },
        followCursor: { type: [Boolean, Number, Object], default: false },
        offset: { type: [Number, String], default: 0 },
        options: {
            type: Object,
            default() {
                return {
                    modifiers: {},
                };
            },
        },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentOpened: this.opened,
            referenceEl: undefined,
            triggers: [], // For all triggers, for convenience, the first item is always the default
            // popper: undefined,
            // Special handling is required when the scroll bar appears.
            offEvents: [],
        };
    },
    computed: {
        currentFollowCursor() {
            if (typeof this.followCursor === 'object')
                return this.followCursor;
            else {
                let followCursor;

                if (typeof this.followCursor === 'boolean')
                    followCursor = { offsetX: 10, offsetY: 10 };
                else if (typeof this.followCursor === 'number')
                    followCursor = { offsetX: this.followCursor, offsetY: this.followCursor };

                if (this.placement.startsWith('top'))
                    followCursor.offsetY = -followCursor.offsetY;
                if (this.placement.startsWith('left'))
                    followCursor.offsetX = -followCursor.offsetX;
                if (this.placement === 'top' || this.placement === 'bottom')
                    followCursor.offsetX = 0;
                if (this.placement === 'top-end' || this.placement === 'bottom-end')
                    followCursor.offsetX = -followCursor.offsetX;
                if (this.placement === 'left' || this.placement === 'right')
                    followCursor.offsetY = 0;
                if (this.placement === 'left-end' || this.placement === 'right-end')
                    followCursor.offsetY = -followCursor.offsetY;

                return followCursor;
            }
        },
    },
    watch: {
        opened(opened) {
            this.currentOpened = opened;
        },
        currentOpened(currentOpened) {
            // Instead of using the style display directly, use popper's create and destroy because popper may be triggered from different places and the reference object will change.
            if (currentOpened) {
                this.createPopper();
                this.$emit('open', undefined, this);
            } else {
                this.destroyPopper();
                this.$emit('close', undefined, this);
            }
        },
        reference() {
            /**
            * Problem: The current popper does not support dynamically changing the reference, causing problems with the popper's position display.
            * Solution: The ideal solution has not been found in the popper.js document for the time being. Please delete the popper first and then create a new popper to fix the location problem.
            * We need to study the source code create and destroy of popper.js later because popper may be triggered from different places and the reference object will change.
            */
            this.destroyPopper();
            this.referenceEl = this.getReferenceEl();
            this.createPopper();
        },
    },
    mounted() {
        // The reference of string type is only valid for the first time, because the node will be inserted elsewhere later.
        this.referenceEl = this.getReferenceEl();
        const triggerEl = this.getTriggerEl(this.referenceEl);
        this.addTrigger(triggerEl, this.trigger);

        this.currentOpened && this.createPopper();
    },
    beforeDestroy() {
        this.destroyPopper();
        // Unbind event
        this.offEvents.forEach((off) => off());
        this.timers.forEach((timer) => {
            clearTimeout(timer);
        });
    },
    methods: {
        getOptions() {
            const options = Object.assign({}, this.options, {
                placement: this.placement,
            });

            // Customize options and pass in offset value
            if (!options.modifiers.offset && this.offset) {
                options.modifiers.offset = {
                    offset: this.offset,
                };
            }

            options.escapeWithReference = this.escapeWithReference;

            options.modifiers.arrow = { element: this.arrowElement };
            options.modifiers.preventOverflow = { boundariesElement: this.boundariesElement };

            return options;
        },
        getReferenceEl() {
            if (this.reference instanceof HTMLElement)
                return this.reference;
            else if (this.reference instanceof Function)
                return this.reference(this.$el);
            else if (this.$el) {
                if (this.reference === 'parent')
                    return this.$el.parentElement;
                else if (this.reference === '$parent')
                    return this.$parent.$el;
                else if (this.reference === 'context-parent') {
                    // Find parent in context
                    if (this.$parent === this.$vnode.context)
                        return this.$el.parentElement;

                    // Vue's vnode.parent is not connected. You need to find it yourself. I don't know if there is a better way.
                    let parentVNode = this.$parent._vnode;
                    while (parentVNode && !parentVNode.children.includes(this.$vnode))
                        parentVNode = parentVNode.children.find((child) => child.elm.contains(this.$el));
                    // if (!parentVNode)
                    if (parentVNode.context === this.$vnode.context)
                        return parentVNode.elm;

                    // Otherwise, find the first contextually consistent component
                    let parentVM = this.$parent;
                    while (parentVM && parentVM.$vnode.context !== this.$vnode.context)
                        parentVM = parentVM.$parent;
                    return parentVM.$el;
                } else if (this.reference === 'prev')
                    return this.$el.previousElementSibling;
                else if (this.reference === 'next')
                    return this.$el.nextElementSibling;
            }
        },
        getTriggerEl(referenceEl) {
            if (this.triggerElement === 'reference')
                return referenceEl;
            else if (this.triggerElement instanceof HTMLElement)
                return this.triggerElement;
            else if (this.triggerElement instanceof Function)
                return this.triggerElement(referenceEl);
        },
        /**
         * When adding a trigger, bind the event
         */
        addTrigger(el, event) {
            const popperEl = this.$el;
            // @TODO: support directives
            const arr = event.split('.');
            event = arr[0];

            this.triggers.push({ el, event });

            //Collect setTimeout
            this.timers = this.timers || [];

            // Binding event
            this.followCursor && this.offEvents.push(
                single.on('m-popper-proto', {
                    el,
                    self: this,
                }, document, 'mousemove', (e, datas) => {
                    Object.values(datas).forEach(({ el, self }) => {
                        self.updatePositionByCursor(e, el);
                    });
                })
            );

            if (event === 'click')
                this.offEvents.push(ev.on(el, 'click', (e) => {
                    if (arr[1] === 'stop')
                        e.stopPropagation();
                    else if (arr[1] === 'prevent')
                        e.preventDefault();
                    this.toggle();
                    this.followCursor && this.$nextTick(() => this.updatePositionByCursor(e, el));
                }));
            else if (event === 'hover') {
                let timer;
                this.offEvents.push(ev.on(el, 'mouseenter', (e) => {
                    timer = clearTimeout(timer);
                    this.timers[0] = setTimeout(() => {
                        this.open();
                        this.followCursor && this.$nextTick(() => this.updatePositionByCursor(e, el));
                    }, this.hoverDelay);
                }));
                this.offEvents.push(
                    single.on('m-popper-proto', {
                        self: this,
                        el,
                        popperEl,
                        timer,
                    }, document, 'mousemove', (e, datas) => {
                        Object.values(datas).forEach(({ el, popperEl, self, timer }) => {
                            if (self.currentOpened && !timer && !el.contains(e.target) && !popperEl.contains(e.target)) {
                                self.timers[1] = setTimeout(() => self.close(), self.hideDelay);
                            }
                        });
                    })
                );
            } else if (event === 'double-click')
                this.offEvents.push(ev.on(el, 'dblclick', (e) => {
                    this.toggle();
                    this.followCursor && this.$nextTick(() => this.updatePositionByCursor(e, el));
                }));
            else if (event === 'right-click') {
                this.offEvents.push(ev.on(el, 'contextmenu', (e) => {
                    e.preventDefault();
                    this.toggle();
                    this.followCursor && this.$nextTick(() => this.updatePositionByCursor(e, el));
                }));
            }
            // @TODO: Is it necessary to do focus-in?
            this.offEvents.push(
                single.on('m-popper-proto', {
                    el,
                    popperEl,
                    self: this,
                }, document, 'mousedown', (e, datas) => {
                    Object.values(datas).forEach(({ el, popperEl, self }) => {
                        !el.contains(e.target) && !popperEl.contains(e.target) && self.close();
                    });
                })
            );
        },
        createPopper() {
            const referenceEl = this.referenceEl;
            const popperEl = this.$el;
            if (this.appendTo === 'body')
                document.body.appendChild(popperEl);
            else if (this.appendTo === 'reference')
                referenceEl.appendChild(popperEl);

            const options = this.getOptions();
            this.popper = new Popper(referenceEl, popperEl, options);
        },
        update() {
            this.popper && this.popper.update();
        },
        scheduleUpdate() {
            this.popper && this.popper.scheduleUpdate();
        },
        destroyPopper() {
            const referenceEl = this.referenceEl;
            const popperEl = this.$el;
            if (this.appendTo === 'body')
                popperEl.parentElement === document.body && document.body.removeChild(popperEl);
            else if (this.appendTo === 'reference')
                popperEl.parentElement === referenceEl && referenceEl.removeChild(popperEl);

            this.popper && this.popper.destroy();
            this.popper = undefined;
        },
        updatePositionByCursor(e, el) {
            //@TODO: The two offset properties are somewhat redundant
            if (e.target !== el || !this.popper)
                return;

            const top = e.clientY + this.currentFollowCursor.offsetY;
            const left = e.clientX + this.currentFollowCursor.offsetX;
            const right = e.clientX + this.currentFollowCursor.offsetX;
            const bottom = e.clientY + this.currentFollowCursor.offsetY;

            this.popper.reference = {
                getBoundingClientRect: () => ({
                    width: 0,
                    height: 0,
                    Top,
                    Left,
                    Right,
                    Bottom,
                }),
                clientWidth: 0,
                clientHeight: 0,
            };
            this.popper.scheduleUpdate();
        },
        open() {
            // Check if enabled
            if (this.disabled)
                return;

            // Prevent replication
            if (this.currentOpened)
                return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-open', undefined, this))
                return;

            // Assign and sync `opened`
            this.currentOpened = true;
            this.$emit('update:opened', true, this);

            // Emit `after-` events
            // this.$emit('open', undefined, this);
        },
        close() {
            // Check if enabled
            if (this.disabled)
                return;

            // Prevent replication
            if (!this.currentOpened)
                return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-close', undefined, this))
                return;

            // Assign and sync `opened`
            this.currentOpened = false;
            this.$emit('update:opened', false, this);

            // Emit `after-` events
            // this.$emit('close', undefined, this);
        },
        toggle(opened) {
            // Method overloading
            if (opened === undefined)
                opened = !this.currentOpened;

            // @deprecated start
            if (this.disabled)
                return;
            const oldOpened = this.currentOpened;
            if (opened === oldOpened)
                return;

            if (this.$emitPrevent('before-toggle', { opened }, this))
                return;

            opened ? this.open() : this.close();

            this.$emit('toggle', { opened }, this);
            // @deprecated end
        },
    },
};

export default MPopper;
