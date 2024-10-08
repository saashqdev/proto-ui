import Vue from 'vue';

/**
 * Add `<u-tooltip>` tooltip effect to any element
 * @value The content that needs to be bound
 */
const directive = {
    handle(binding) {
        const data = {
            content: binding.value,
            trigger: 'hover',
            placement: 'bottom',
            size: 'normal',
            followCursor: binding.modifiers.cursor,
        };

        Object.keys(binding.modifiers).forEach((key) => {
            if (['click', 'hover', 'right-click', 'double-click', 'manual'].includes(key))
                data.trigger = key;
            if (/^(top|bottom|left|right)(-start|-end)?$/.test(key))
                data.placement = key;
            if (/^(mini|small|normal|large|huge|auto)(-(mini|small|normal|large|huge|auto))?$/.test(key))
                data.size = key;
        });

        return data;
    },
    bind(el, binding) {
        const data = el['v-tooltip'] = Object.assign(el['v-tooltip'] || {}, directive.handle(binding));

        const UTooltip = Vue.component('UTooltip') || Vue.component('u-tooltip');
        el.tooltipVM = new UTooltip({
            propsData: Object.assign({
                reference: el,
            }, data),
        }).$mount();
    },
    update(el, binding) {
        const data = el['v-tooltip'] = Object.assign(el['v-tooltip'] || {}, directive.handle(binding));
        if (el.tooltipVM)
            Object.assign(el.tooltipVM, data);
    },
    unbind(el, binding) {
        el.tooltipVM && el.tooltipVM.$destroy();
    },
};

export default directive;
