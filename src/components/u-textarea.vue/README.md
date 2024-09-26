<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UTextarea Multi-Line Input

**UI Components**, **Form Controls**, **Inline Display**

The multi-line input component has some functional extensions based on the native `<textarea>` control.

## Example
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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | string | | | The value of the input box |
| value.sync, v-model | string | | | The value of the input box |
| clearable | boolean | | | Whether it can be cleared. Enable and display a clear button when the input box contains content. |
| placeholder | string | | | Native attributes. Compatible with IE9. |
| minlength | number | | | Native attributes |
| maxlength | number | | | Native properties |
| spellcheck | boolean | | | Native properties |
| autofocus | boolean | | | Whether to automatically obtain focus |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |
| resize | string | | `'none'` | Whether it can be resized. Optional values: `'none'`, `'both'`, `'horizontal'`, `'vertical'` |

### Events

#### @input

Fires on input.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Value of input box |
| senderVM | UTextarea | Send event instance |

#### @change

Fires when the value changes. (Note: Different from native events)

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | Changed value |
| $event.oldValue | string | Old value |
| senderVM | UTextarea | Send event instance |

#### @focus

Triggered when focus is obtained.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | Native event object |
| senderVM | UTextarea | Send event instance |

#### @blur

Fired when focus is lost.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | Native event object |
| senderVM | UTextarea | Send event instance |

#### @before-clear

Triggered before clearing.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | Cleared value |
| $event.oldValue | string | The value to be cleared |
| $event.preventDefault | Function | Prevent the clearing process |
| senderVM | UTextarea | Send event instance |

#### @clear

Triggered when cleared.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | Cleared value |
| $event.oldValue | string | Old value |
| senderVM | UTextarea | Send event instance |

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
