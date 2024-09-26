### Basic Usage

Most of the attributes are consistent with the `<textarea>` element.

``` html
<u-textarea placeholder="Details" autofocus></u-textarea>
```

### Two-Way Binding

Use `v-model` or `:value.sync` for Two-Way Binding.

```vue
<template>
<u-linear-layout>
    <u-textarea v-model="value" placeholder="Please enter"></u-textarea>
    <u-textarea :value.sync="value" placeholder="Please enter"></u-textarea>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: 'A very long text',
        };
    },
};
</script>
```

### Read Only and Disabled

``` html
<u-linear-layout>
    <u-textarea value="readonly" readonly></u-textarea>
    <u-textarea value="disabled" disabled></u-textarea>
</u-linear-layout>
```

### Resize

By setting the `resize` attribute, determine whether the size can be resized horizontally and vertically.

``` html
<u-linear-layout direction="vertical">
    <div><u-textarea placeholder="None" resize="none"></u-textarea></div>
    <div><u-textarea placeholder="Vertical (default)" resize="vertical"></u-textarea></div>
    <div><u-textarea placeholder="Horizontal" resize="horizontal"></u-textarea></div>
    <div><u-textarea placeholder="Both" resize="both"></u-textarea></div>
</u-linear-layout>
```

### Can be Cleared

Turn on the `clearable` attribute, and the clear button will be displayed when the input box has content.

``` html
<u-textarea value="clearable" clearable></u-textarea>
```

### Display Method

The default is inline display, and `display` can be set to block-level display.

``` html
<u-linear-layout direction="vertical" gap="small">
    <u-textarea placeholder="Inline display (default)"></u-textarea> Align to Text
    <u-textarea display="block" placeholder="Block-level display"></u-textarea>
</u-linear-layout>
```
