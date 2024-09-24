If you want to add an expand/collapse animation effect to some nodes, but you don’t know the height of the node, then the animation cannot be achieved by relying solely on the `transition` property of CSS, and you need to use JS to calculate it.

This component encapsulates this animation to facilitate quick implementation of this effect. The following steps need to be completed:

- Wrap the `<f-collapse-transition>` component around the node that needs to be animated;
- Add `transition` animations for the `height`, `padding-top` and `padding-bottom` properties in CSS to the nodes that need to be animated;
- Use `v-show` or `v-if` to control the display/hiding of nodes.