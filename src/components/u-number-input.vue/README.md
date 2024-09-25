<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UNumberInput Numeric Input

**UI Components**, **Form Controls**, **Inline Display**

## Example
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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | number | | `0` | The value of the input box |
| min | number | | `-Infinity` | Minimum value |
| max | number | | `Infinity` | Maximum value |
| step | number | | `1` | Interval, indicating the amount of increase or decrease by clicking the button or pressing the up and down keys |
| precision | number | | `1` | Precision, indicating the smallest unit of numbers to be retained, either integers or decimals |
| formatter | string, object | | | Format string, see Example for details. You can also pass in a format object containing `get` and `set` methods. |
| placeholder | string | | | Native attributes |
| autofocus | boolean | | | Native properties |
| hide-buttons | boolean | | `false` | Whether to hide buttons |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |
| size | string | | `'normal'` | Size extension, supports one value: `'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'`, ` 'full'`, or a combination of two values, the former represents height and the latter represents width, similar to CSS padding writing format |

### Events

#### @input

Fires on input

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Value of input box |
| senderVM | UNumberInput | Send event instance |

#### @validate

Triggered on input validation

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.rawValue | string | The raw value entered by the user |
| $event.value | number | Verify the repaired value |
| $event.valid | boolean | Whether the original value is legal |
| senderVM | UNumberInput | Send event instance |

#### @change

Triggered when the value changes (different from native events)

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | number | Changed value |
| $event.oldValue | number | Old value |
| $event.formattedValue | string | Formatted value |
| $event.valid | boolean | Whether the changed value is legal |
| senderVM | UNumberInput | Send event instance |

#### @focus

Triggered when focus is obtained

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Native event object |
| senderVM | UNumberInput | Send event instance |

#### @blur

Triggered when focus is lost

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Native event object |
| senderVM | UNumberInput | Send event instance |

### ARIA and Keyboard

| Key | Description |
| --- | ----------- |
| ↑ | Increase the value by `step` |
| ↓ | Decrease value by `step` |
| Enter | Automatically fix to legal value and apply changes |
