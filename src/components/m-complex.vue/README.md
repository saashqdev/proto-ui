<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# MComplex Composite Mode

In a component, use the `multiple` attribute to switch between single selection and Multiple Selection Mode.

## Example
### Basic Usage

Some basic features of composite patterns are shown below.

``` html
<m-complex>
    <m-complex-item>Water Cup</m-complex-item>
    <m-complex-item>Coffee</m-complex-item>
    <m-complex-item disabled>Nut</m-complex-item>
    <m-complex-item>Towel</m-complex-item>
    <m-complex-item>Sofa</m-complex-item>
</m-complex>
```

### Option value

To bind the `value` attribute, you can use `v-model` or `:value.sync`.

#### Radio Selection Mode

``` vue
<template>
<m-complex v-model="value">
    <m-complex-item value="cup">Water Cup</m-complex-item>
    <m-complex-item value="coffee">Coffee</m-complex-item>
    <m-complex-item value="nut">Nut</m-complex-item>
    <m-complex-item value="towel">Towel</m-complex-item>
    <m-complex-item value="sofa">Sofa</m-complex-item>
</m-complex>
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

#### 多选模式

``` vue
<template>
<m-complex multiple v-model="values">
    <m-complex-item value="cup">Water Cup</m-complex-item>
    <m-complex-item value="coffee">Coffee</m-complex-item>
    <m-complex-item value="nut">Nut</m-complex-item>
    <m-complex-item value="towel">Towel</m-complex-item>
    <m-complex-item value="sofa">Sofa</m-complex-item>
</m-complex>
</template>
<script>
export default {
    data() {
        return {
            values: ['nut', 'towel'],
        };
    },
};
</script>
```

### Read Only, Disable, Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-complex value="towel" readonly>
            <m-complex-item value="cup">Water Cup</m-complex-item>
            <m-complex-item value="coffee">Coffee</m-complex-item>
            <m-complex-item value="nut">Nut</m-complex-item>
            <m-complex-item value="towel">Towel</m-complex-item>
            <m-complex-item value="sofa">Sofa</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-complex value="towel" disabled>
            <m-complex-item value="cup">Water Cup</m-complex-item>
            <m-complex-item value="coffee">Coffee</m-complex-item>
            <m-complex-item value="nut">Nut</m-complex-item>
            <m-complex-item value="towel">Towel</m-complex-item>
            <m-complex-item value="sofa">Sofa</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-complex value="towel">
            <m-complex-item value="cup">Water Cup</m-complex-item>
            <m-complex-item value="coffee">Coffee</m-complex-item>
            <m-complex-item value="nut" disabled>Nut</m-complex-item>
            <m-complex-item value="towel" disabled>Towel</m-complex-item>
            <m-complex-item value="sofa">Sofa</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
</u-grid-layout>
```

Others are the same as [MSinglex](../m-singlex) and [MMultiplex](../m-multiplex).

## MComplex API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any | | | Currently selected value |
| auto-select | boolean | | `false` | Whether to automatically select the first non-disabled item |
| cancelable | boolean | | `false` | Whether the selection can be canceled |
| multiple | boolean | | `false` | Whether to switch to multiple selection mode |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert `<m-complex-item>` subcomponent.

### Events

#### @before-select

Trigger before selecting an item

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selection |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.itemVM | MComplexItem | Selection subcomponent |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | MComplex | Send event instance |

#### @input

Triggered when an item is selected, only effective in single selection mode

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Value of selection |
| senderVM | MComplex | Send event instance |

#### @select

Triggered when an item is selected. In radio selection mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Changed value |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.oldItem | object | Old selection related object |
| $event.itemVM | MComplexItem | Selection subcomponent |
| $event.oldVM | MComplexItem | Old selection subcomponent |
| senderVM | MComplex | Send event instance |

#### @select

Triggered when an item is selected. In multi-select mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | boolean | Select or cancel |
| $event.item | boolean | Object related to the selected item |
| $event.itemVM | boolean | The selected item subcomponent |
| $event.value | Array | Changed value |
| $event.oldValue | Array | Old value |
| $event.items | Array\<object\> | Array of objects related to all selected items |
| $event.oldItems | Array\<object\> | Array of objects related to all old selected items |
| $event.itemVMs | Array\<MComplexItem\> | Array of all selected item subcomponents |
| $event.oldVMs | Array\<MComplexItem\> | Array of all old selected item subcomponents |
| senderVM | MComplex | Send event instance |

#### @change

Fires when the selection value changes. In radio selection mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selection |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.oldItem | object | Old selection related object |
| $event.itemVM | MComplexItem | Selection subcomponent |
| $event.oldVM | MComplexItem | Old selection subcomponent |
| senderVM | MComplex | Send event instance |

#### @change

Fires when the selection value changes. In multi-select mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array | Values   of all selected items |
| $event.items | Array\<object\> | Array of objects related to all selected items |
| $event.itemVMs | Array\<MComplexItem\> | Array of all selected item subcomponents |
| senderVM | MComplex | Send event instance |

## MComplexItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | any | | | The value of this item |
| selected | boolean | | `false` | Whether to select this item |
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
| senderVM | MComplexItem | Send event instance |

#### @before-select

Trigger before selecting this

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of this item |
| $event.item | object | The related object of this item |
| $event.itemVM | MComplexItem | This component |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | MComplexItem | Send event instance |
