Sometimes you need `slot` for other components in the template. Commonly used methods are to rewrite the entire template using the `slot` function, or to write a partial component. These methods are more expensive.

`<f-slot>` is more convenient than `<f-render>`. It supports passing attributes to scope slots and supports the judgment of scope slots, ordinary slots, and backup content.

``` htm
<f-slot name="cell" :vm="columnVM" :props="{ item, value, index }">
    <span>{{ value }}</span>
</f-slot>
```
