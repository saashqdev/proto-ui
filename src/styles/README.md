# Base Base

### Design Principles

Kubevue's component library is different from traditional pure CSS component libraries. It pays more attention to the relationship between styles, templates and logic. Therefore, it is recommended to encapsulate styles into basic components as much as possible instead of using a simple `class` to replace.

<!-- @TODO: For example, for common lists: -->

Each independent component does not have a default `margin` because their behavior in the actual scene is uncertain. It is recommended to use `<u-linear-layout>` and `<u-grid-layout>` to control the layout between components.

### Unified Style

The Prototype Component library is based on [normalize.css](http://necolas.github.io/normalize.css) to keep the initial style consistent across browsers, and then further optimizes the default style of HTML elements.

Similar to [Bootstrap](https://getbootstrap.com), apply `box-sizing: border-box` to all elements, so the width and height of the elements will not be affected by `padding`.

Use Vue's `preserveWhitespace: false` to clear the spaces between all elements, so that there will be no gaps between `inline-block` elements.

### Blacklist

In order to support semantics and satisfy orthogonality (the principle that component elements do not affect each other), the following elements are pulled into the blacklist: `<a>`, `<dl>`, `<dt>`, `<dd>`, `<ul>`, `<ol>`, `<li>`. Their styles are cleared and required to be used after encapsulation in the component, rather than directly in the business.

### Style Extension

The colors of components in Proto UI only extend `default`, `primary` and `error`. It is recommended to continue to expand according to these words: `default`, `primary`, `info`, `success`, `warning`, ` error`, `disabled`, ...

The size of components in Proto UI only extends `small`, `base` and `large`. It is recommended to continue expanding according to these words: `mini`, `small`, `base`, `large`, `huge`, ...
