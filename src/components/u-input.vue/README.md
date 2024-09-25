<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UInput Single Line Input

**UI Components**, **Form Controls**, **Inline Display**

The basic form input component has some functional extensions based on the native `<input>` control.

## Example
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
    <u-input value="read only" readonly></u-input>
    <u-input value="disable" disabled></u-input>
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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| type | string | | `'text'` | The type of input box, currently supports two types: `'text'` and `'password'` |
| value.sync, v-model | string | | | The value of the input box |
| clearable | boolean | | | Whether it can be cleared. Enable and display a clear button when the input box contains content. |
| placeholder | string | | | Native attributes. Compatible with IE9. |
| minlength | number | | | Native properties |
| maxlength | number | | | Native properties |
| spellcheck | boolean | | | Native properties |
| autofocus | boolean | | | Whether to automatically obtain focus |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Events

#### @input

Fires on input.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Value of input box |
| senderVM | UInput | Send event instance |

#### @change

Fires when the value changes. (Note: Different from native events)

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | Changed value |
| $event.oldValue | string | Old value |
| senderVM | UInput | Send event instance |

#### @focus

Triggered when focus is obtained.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | Native event object |
| senderVM | UInput | Send event instance |

#### @blur

Fired when focus is lost.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | Native event object |
| senderVM | UInput | Send event instance |

#### @before-clear

Triggered before clearing.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | Cleared value |
| $event.oldValue | string | The value to be cleared |
| $event.preventDefault | Function | Prevent the clearing process |
| senderVM | UInput | Send event instance |

#### @clear

Triggered when cleared.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | Cleared value |
| $event.oldValue | string | Old value |
| senderVM | UInput | Send Event instance |

### Methods

#### focus()

Let the input box get focus.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### blur()

Let the input box lose focus.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### clear()

Clear the input box.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
