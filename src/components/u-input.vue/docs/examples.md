### Basic Usage

Most properties are consistent with the native `<input>` control.

``` html
<u-input maxlength="12" placeholder="1~12 lowercase letters" autofocus></u-input>
```

### Encryption

Set the `type` attribute to `password` to encrypt the display.

``` html
<u-input type="password" maxlength="12" placeholder="Please enter password"></u-input>
```

### Two-Way Binding

Use `v-model` or `:value.sync` for Two-Way Binding.

Tip: If you need the bound value to be automatically converted to number type, you can use the `number` modifier.

``` vue
<template>
<u-linear-layout>
    <u-input v-model="value" maxlength="12" placeholder="Please enter the port number"></u-input>
    <u-input :value.sync="value" maxlength="12" placeholder="Please enter the port number"></u-input>
    <u-input v-model.number="numberValue" maxlength="12" placeholder="Please enter the port number"></u-input>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: '3306',
            numberValue: 3306,
        };
    },
};
</script>
```

### Read Only and Disabled

``` html
<u-linear-layout>
    <u-input value="readonly" readonly></u-input>
    <u-input value="disabled" disabled></u-input>
</u-linear-layout>
```

### Clearable

Turn on the `clearable` attribute, and the clear button will be displayed when the input box has content.

``` html
<u-input value="clearable" clearable></u-input>
```

### Display Method

The default is inline display, and `display` can be set to block-level display.

``` html
<u-linear-layout direction="vertical" gap="small">
    <u-input maxlength="12" placeholder="Inline display (default)"></u-input> Align with text
    <u-input display="block" maxlength="12" placeholder="Block-level display"></u-input>
</u-linear-layout>
```
