<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# MSinglex Radio Selection Mode

Common single-item selection mode, used to quickly derive components like `<u-navbar>` and `<u-tabs>`.

## Example
### Basic Usage

The following shows some basic features of the radio mode, including selection and disabling functions.

``` html
<m-singlex>
    <m-singlex-item>Water Cup</m-singlex-item>
    <m-singlex-item>Coffee</m-singlex-item>
    <m-singlex-item disabled>Nut</m-singlex-item>
    <m-singlex-item>Towel</m-singlex-item>
    <m-singlex-item>Sofa</m-singlex-item>
</m-singlex>
```

#### Two-Way Binding

Two-Way Binding can be performed using `v-model` or `:value.sync`.

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <m-singlex v-model="value">
        <m-singlex-item value="cup">Water Cup</m-singlex-item>
        <m-singlex-item value="coffee">Coffee</m-singlex-item>
        <m-singlex-item value="nut">Nut</m-singlex-item>
        <m-singlex-item value="towel">Towel</m-singlex-item>
        <m-singlex-item value="sofa">Sofa</m-singlex-item>
    </m-singlex>
    <m-singlex :value.sync="value">
        <m-singlex-item value="cup">Water Cup</m-singlex-item>
        <m-singlex-item value="coffee">Coffee</m-singlex-item>
        <m-singlex-item value="nut">Nut</m-singlex-item>
        <m-singlex-item value="towel">Towel</m-singlex-item>
        <m-singlex-item value="sofa">Sofa</m-singlex-item>
    </m-singlex>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'towel',
        };
    },
};
</script>
```

### Read Only, Disable, Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel" readonly>
            <m-singlex-item value="cup">Water Cup</m-singlex-item>
            <m-singlex-item value="coffee">Coffee</m-singlex-item>
            <m-singlex-item value="nut">Nut</m-singlex-item>
            <m-singlex-item value="towel">Towel</m-singlex-item>
            <m-singlex-item value="sofa">Sofa</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel" disabled>
            <m-singlex-item value="cup">Water Cup</m-singlex-item>
            <m-singlex-item value="coffee">Coffee</m-singlex-item>
            <m-singlex-item value="nut">Nut</m-singlex-item>
            <m-singlex-item value="towel">Towel</m-singlex-item>
            <m-singlex-item value="sofa">Sofa</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel">
            <m-singlex-item value="cup">Water Cup</m-singlex-item>
            <m-singlex-item value="coffee">Coffee</m-singlex-item>
            <m-singlex-item value="nut" disabled>Nut</m-singlex-item>
            <m-singlex-item value="towel" disabled>Towel</m-singlex-item>
            <m-singlex-item value="sofa">Sofa</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
</u-grid-layout>
```

### Cancel

When the `cancelable` attribute is turned on, clicking twice on the same option will cancel the original selection.

``` html
<m-singlex value="towel" cancelable>
    <m-singlex-item value="cup">Water Cup</m-singlex-item>
    <m-singlex-item value="coffee">Coffee</m-singlex-item>
    <m-singlex-item value="nut" disabled>Nut</m-singlex-item>
    <m-singlex-item value="towel">Towel</m-singlex-item>
    <m-singlex-item value="sofa">Sofa</m-singlex-item>
</m-singlex>
```

### Automatic Selection

On initialization or option change, automatically selects the first non-disabled item.

``` html
<m-singlex auto-select>
    <m-singlex-item value="cup" disabled>Water Cup</m-singlex-item>
    <m-singlex-item value="coffee" disabled>Coffee</m-singlex-item>
    <m-singlex-item value="nut">Nut</m-singlex-item>
    <m-singlex-item value="towel">Towel</m-singlex-item>
    <m-singlex-item value="sofa">Sofa</m-singlex-item>
</m-singlex>
```

## MSinglex API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any | | | Currently selected value |
| auto-select | boolean | | `false` | Whether to automatically select the first non-disabled item |
| cancelable | boolean | | `false` | Whether the selection can be canceled |
| router | boolean | | `false` | Whether to enable routing mode |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert `<m-singlex-item>` subcomponent.

### Events

#### @before-select

Trigger before selecting an item

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selection |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.oldItem | object | Old selection related object |
| $event.itemVM | MSinglexItem | Selection subcomponent |
| $event.oldVM | MSinglexItem | Old selection subcomponent |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | MSinglex | Send event instance |

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | value of selection |
| senderVM | MSinglex | Send event instance |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Changed value |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.oldItem | object | Old selection related object |
| $event.itemVM | MSinglexItem | Selection subcomponent |
| $event.oldVM | MSinglexItem | Old selection subcomponent |
| senderVM | MSinglex | Send event instance |

#### @change

Fires when the selection value changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selection |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.oldItem | object | Old selection related object |
| $event.itemVM | MSinglexItem | Selection subcomponent |
| $event.oldVM | MSinglexItem | Old selection subcomponent |
| senderVM | MSinglex | Send event instance |

## MSinglexItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | any | | | The value of this item |
| disabled | boolean | | `false` | Disable this |
| item | object | | | Related objects. When this is selected, the event thrown will pass the object, making it easier to develop |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @click

Fires when this item is clicked. Unlike the native click event, it will only fire when it is not read-only and disabled.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | Mouse event object |
| senderVM | MSinglexItem | Send event instance |

#### @before-select

Trigger before selecting this

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of this item |
| $event.item | object | The related object of this item |
| $event.itemVM | MSinglexItem | This component |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | MSinglexItem | Send event instance |
