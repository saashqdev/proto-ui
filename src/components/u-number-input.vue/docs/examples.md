### Basic Usage

``` html
<u-linear-layout>
    <u-number-input></u-number-input>
    <u-number-input :value="6"></u-number-input>
</u-linear-layout>
```

### Two-Way Binding

``` vue
<template>
<u-number-input v-model="value"></u-number-input>
</template>
<script>
export default {
    data() {
        return {
            value: 6,
        };
    },
};
</script>
```

### Maximum and Minimum Values

``` html
<u-linear-layout>
    <u-number-input :min="4" :max="12"></u-number-input>
    <u-number-input :value="6" :min="4" :max="12"></u-number-input>
</u-linear-layout>
```

### Precision and Interval

The precision indicates the smallest unit to be retained for the number. It can be an integer or a decimal. The input box will round based on it. Defaults to `1`, which is reserved to integers.

The interval represents the amount increased or decreased by clicking the button or pressing the up and down keys, preferably an integer multiple of the precision.

``` html
<u-linear-layout>
    <u-number-input :value="6" :precision="0.1" :step="0.5"></u-number-input>
    <u-number-input :value="5" :precision="5" :step="10"></u-number-input>
    <u-number-input :value="6" :step="10"></u-number-input>
</u-linear-layout>
```

### Format

You can usually use the following characters to form a format string:

- `0` represents a numeric placeholder. If the length of the integer part is less than the number of placeholders, it is padded with `0`. If the fractional part is longer than the number of placeholders, it is rounded off.
- `#` represents a numeric placeholder. Only meaningful zeros are displayed and meaningless zeros are not displayed.
- `.` represents the decimal point.
- `,` means thousandths.

You can also pass in a format object containing `get` and `set` methods.

``` html
<u-linear-layout>
    <u-number-input :value="20" formatter="0000"></u-number-input>
    <u-number-input :value="1234" :precision="0.01" :step="0.1" formatter="$ #,##0.00"></u-number-input>
    <u-number-input :value="20" :precision="0.5" :step="0.5" formatter="0.0%"></u-number-input>
</u-linear-layout>
```

### Read Only and Disabled

``` html
<u-linear-layout>
    <u-number-input :value="6" readonly></u-number-input>
    <u-number-input :value="6" disabled></u-number-input>
</u-linear-layout>
```
