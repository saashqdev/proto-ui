<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# FCollapseTransition Collapse Transition

If you want to add an expand/collapse animation effect to some nodes, but you don't know the height of the node, the animation cannot be achieved by the CSS `transition` attribute alone, and you need to use JS to calculate it.

This component encapsulates this kind of animation, making it easy to quickly achieve this effect. The following steps need to be completed:

- Wrap the node that needs animation with the `<f-collapse-transition>` component;
- Add `transition` animations for the `height`, `padding-top`, and `padding-bottom` properties in CSS to the nodes that need animation;
- Use `v-show` or `v-if` to control the display/hide of nodes.

## Example
### Basic Usage

``` view
<template>
<div :class="$style.root">
    <u-button @click="toggle">Expand/Collapse</u-button>
    <f-collapse-transition>
        <u-menu v-show="expanded" :class="$style.menu" value="3" :router="false" style="width: 128px;">
            <u-menu-item to="/guides/">Guides</u-menu-item>
            <u-menu-item to="/api/">API</u-menu-item>
            <u-menu-item to="/components/">Components</u-menu-item>
            <u-menu-item href="https://github.com/saashqdev/kubevue">GitHub</u-menu-item>
        </u-menu>
    </f-collapse-transition>
</div>
</template>
<script>
export default {
    data() {
        return { expanded: false };
    },
    methods: {
        toggle() {
            this.expanded = !this.expanded;
        },
    },
};
</script>
<style module>
.root {}

.menu {
    transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
</style>
```

## API
### Slots

#### (default)

Elements or components that need to be animated