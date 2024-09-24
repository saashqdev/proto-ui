# Pattern - Design pattern

In order to ensure that developers use and extend components as consistently as possible, we have summarized the similarities of various components into a set of component patterns. Listing them here can help you quickly understand the design concept of Kubevue components and be more efficient in actual development. Use this component library wisely. At the same time, I also hope that you will try to refer to this set of patterns when designing your own components in the project.

## Naming

### Prefix

Since the kubevue system contains a variety of components, in order to distinguish them from native HTML elements and for easy identification, a letter indicating the type is added before the component name:

- General components, starting with `u-` (UI, also the second letter of kubevue)
- Components in the business, starting with `s-` (specific)
- Components that are expected to be mixin can be considered as abstract components, starting with `m-` (mixin)
- Font icon component, starting with `i-` (icon)
- Functional components, starting with `f-` (functional), generally do not have templates
- Animation component, starting with `e-` (effect)
- Complex components encapsulated by third-party libraries, starting with `x-` (extension)

## Style

### Standardization

Based on [normalize.css](http://necolas.github.io/normalize.css), the initial style is unified across browsers, and then the default styles of some HTML elements are further optimized.

Similar to [Bootstrap](https://getbootstrap.com), apply `box-sizing: border-box` to all elements, so the width and height of the elements will not be affected by `padding` and are easier to control.

Use Vue's `preserveWhitespace: false` to clear the spaces between all elements, so that there will be no gaps between `inline-block` elements.

### Margins and Layout

The outermost layer of each kubevue component has no margin, because their margins are not very certain in actual scenarios.

In business, you can use `<u-linear-layout>` and `<u-grid-layout>` to control the margins of components. Sometimes you can also use `class` and `style` to make temporary adjustments, which will be detailed in the following link.

The advantage of this is that the margin style of each component only needs to be set from 0, avoiding confusing style overrides.

``` html
<u-linear-layout>
    <u-input></u-input>
    <u-button color="primary">Search</u-button>
    <u-link style="margin-left: 60px;">Settings</u-link>
    <u-link>Delete</u-link>
</u-linear-layout>
```

## Common Attributes

Listed below are some common properties of components to get an impression in advance.

### Color Extension

The `color` attribute is usually used to set the color extension of the component. Common values     are: `default`, `primary`, `info`, `success`, `warning`, `error`, `disabled`, `muted`, The default is `default`.

If there are special circumstances, you can use `class` or `style` to make temporary adjustments.

``` html
<u-linear-layout>
    <u-label color="primary">Primary</u-label>
    <u-label color="info">Info</u-label>
    <u-label color="success">Success</u-label>
    <u-label color="error" style="background: #c461fb;">Custom</u-label>
</u-linear-layout>
```

### Size Expansion

Usually the `size` attribute is used to set the size extension of the component. Common values   are: `mini`, `small`, `normal`, `large`, `huge`, and the default is `normal`.

Generally these 5 levels are enough in a project. Too many categories can easily cause confusion. For other sizes, it is recommended to use `class` or `style` for temporary adjustment.

``` html
<u-linear-layout>
    <u-button size="small">Small</u-button>
    <u-button>Normal</u-button>
    <u-button size="large">Large</u-button>
    <u-button style="width: 120px; height: 50px; line-height: 48px;">Custom</u-button>
</u-linear-layout>
```

`size` also supports passing two values, the former represents the height and the latter represents the width.

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-input size="small" value="small" readonly></u-input>
        <u-input size="small normal" value="small normal" readonly></u-input>
        <u-input size="small large" value="small large" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="normal small" value="normal small" readonly></u-input>
        <u-input value="normal" readonly></u-input>
        <u-input size="normal large" value="normal large" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="large small" value="large small" readonly></u-input>
        <u-input size="large normal" value="large normal" readonly></u-input>
        <u-input size="large" value="large" readonly></u-input>
    </u-linear-layout>
</u-linear-layout>
```

When designing components, it is not recommended to specifically set the `width` and `height` properties. `size` and `style` are sufficient.

### Display Method

Everyone is familiar with the fact that most HTML elements can be displayed in two ways: inline and block level. Based on some common situations of components, we have summarized several display methods, which can be set using the `display` attribute. This is different from the `display` of CSS, but mainly relies on the `display` and `position` properties of CSS.

Common values   include: `inline`, `block`, `full`, `fullWindow`, `fullScreen`. Each component does not necessarily support all values, but one of them must be used as the default value.

- `inline`: Inline display, corresponding to CSS `inline` or `inline-block`. When designing, try to align it with the surrounding text baseline.
- `block`: Block-level display, corresponding to CSS `block`, its main feature is to occupy the entire line.
- `full`: Filling the parent element will fill the positioning parent element (offsetParent) and cover it. For example, `<u-loading>` can cover the loading on the table, etc.
- `fullWindow`: fill the full window, like the default behavior of `u-modal`.
- `fullScreen`: fills the entire screen and calls the browser's `fullScreen` API.

See the example of [`<u-loading>`](u-loading).

### Temporary Adjustment

As can be seen from the previous example, in actual business development, the properties exposed by components can meet most needs, but there are always situations where the style needs to be temporarily adjusted, such as customizing width and height, temporarily adjusting margins, modifying Border styles, adding occasional shadows, etc.

At this time, you can use Vue's transparent transmission mechanism, which can transparently transmit some commonly used attributes or events from the label to the root element inside the component, such as `class`, `style` or other custom attributes.

Here is an example of temporarily extending the style of the `<u-select>` component:
``` html
<u-select style="width: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <u-select-item>Apple</u-select-item>
    <u-select-item>Banana</u-select-item>
    <u-select-item>Cake</u-select-item>
</u-select>
```

In order to prevent the problem of duplicate class names, the styles of kubevue components are localized using CSS Modules technology and encapsulated inside the components. Transparent transmission is only for the root element, and other internal elements are not open to the outside world. This is mainly to maintain the closure of the component. If you encounter the need to modify internal elements, it is often because the component has new features or the original encapsulation is not perfect. It is recommended to extend the entire component and then supplement or re-modify the component itself.

## Event

### Event Name

Form controls throw some of the following events:

- `input`: two-way binding for `v-model`
- `update:value`: two-way binding for `.sync`
- `change`: triggered when monitoring `value` changes
- `focus` and `blur`: triggered when the control is focused or out of focus
- There is an event triggered purely by the user, such as `select`, `toggle`, `slide`, etc.
- For the above user-triggered events, a preventable `before-` event will be thrown in advance, such as `before-select`, `before-toggle`, etc.
- The difference between the `change` event and the user-triggered event is that the `change` event is only judged based on whether the data has changed, and sometimes it is also triggered during the component creation phase. User-triggered events will only be triggered by user operations or manual method calls.

### Pass Data

Usually events will throw out a data object ($event) and the current instance (senderVM).

``` js
this.$emit('select', {
    value,
    item,
    itemVM: selectedVM,
}, this);

this.$emit('change', {
    value,
    oldValue,
}, this);
```


`input` and `update:*` events are special. In order to adapt to `v-model` and `.sync`, $event is a single value.

``` js
this.$emit('input', value, this);
this.$emit('update:value', value, this);
```
