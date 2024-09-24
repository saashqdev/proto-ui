<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# FSlot Convenience Slot

## Example
Sometimes you need `slot` for other components in the template. Commonly used methods are to rewrite the entire template using the `slot` function, or to write a partial component. These methods are more expensive.

`<f-slot>` is more convenient than `<f-render>`. It supports passing attributes to scope slots and supports the judgment of scope slots, ordinary slots, and backup content.

```htm
<f-slot name="cell" :vm="columnVM" :props="{ item, value, index }">
    <span>{{ value }}</span>
</f-slot>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| vm | Vue | | | Example |
| name | string | | | Slot name |
| props | object | | | Properties that need to be passed to the scope slot |
| catchError | boolean | | `true` | Whether to catch exceptions to prevent errors from terminating the overall rendering |
