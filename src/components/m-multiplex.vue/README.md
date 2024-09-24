<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# MMultiplex Multiple Selection Mode

Common multi-select mode.

## Example
### Basic Usage

The following shows some basic features of multi-select mode, selection and disabling functions.

``` html
<m-multiplex>
    <m-multiplex-item>Water Cup</m-multiplex-item>
    <m-multiplex-item>Coffee</m-multiplex-item>
    <m-multiplex-item disabled>Nut</m-multiplex-item>
    <m-multiplex-item>Towel</m-multiplex-item>
    <m-multiplex-item>Sofa</m-multiplex-item>
</m-multiplex>
```

### Two-Way Binding

Two-Way Binding can be performed using `v-model` or `:value.sync`.

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <m-multiplex v-model="values">
        <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
        <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
        <m-multiplex-item value="nut">Nut</m-multiplex-item>
        <m-multiplex-item value="towel">Towel</m-multiplex-item>
        <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
    </m-multiplex>
    <m-multiplex :value.sync="values">
        <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
        <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
        <m-multiplex-item value="nut">Nut</m-multiplex-item>
        <m-multiplex-item value="towel">Towel</m-multiplex-item>
        <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
    </m-multiplex>
</u-linear-layout>
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

#### Selected Two-Way Binding

Two-Way Binding can also be performed through the selected attribute of each item.

``` vue
<template>
<m-multiplex>
    <m-multiplex-item v-for="item in list"
        :key="item.value" :value="item.value" :selected.sync="item.selected">
        {{ item.text }}</m-multiplex-item>
</m-multiplex>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { text: 'Water Cup', value: 'cup', selected: false },
                { text: 'Coffee', value: 'coffee', selected: false },
                { text: 'Nut', value: 'nut', selected: true },
                { text: 'Towel', value: 'towel', selected: true },
                { text: 'Sofa', value: 'sofa', selected: false },
            ],
        };
    },
};
</script>
```

### Read Only, Disable, Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-multiplex :value="['nut', 'towel']" readonly>
            <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
            <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
            <m-multiplex-item value="nut">Nut</m-multiplex-item>
            <m-multiplex-item value="towel">Towel</m-multiplex-item>
            <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-multiplex :value="['nut', 'towel']" disabled>
            <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
            <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
            <m-multiplex-item value="nut">Nut</m-multiplex-item>
            <m-multiplex-item value="towel">Towel</m-multiplex-item>
            <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-multiplex :value="['nut', 'towel']">
            <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
            <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
            <m-multiplex-item value="nut" disabled>Nut</m-multiplex-item>
            <m-multiplex-item value="towel" disabled>Towel</m-multiplex-item>
            <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
</u-grid-layout>
```

## MMultiplex API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | Array | | | Values   of all selected items |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert `<m-multiplex-item>` subcomponent.

### Events

#### @before-select

Trigger before selecting an item

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | boolean | Select or cancel |
| $event.item | boolean | Object related to the selected item |
| $event.itemVM | boolean | The selected item subcomponent |
| $event.oldValue | Array | The old value of all selected items |
| $event.oldItems | Array\<object\> | Array of objects related to all old selected items |
| $event.oldVMs | Array\<MMultiplexItem\> | Array of all old selected item subcomponents |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | MMultiplex | Send event instance |

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Array | Values of all selected items |
| senderVM | MMultiplex | Send event instance |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | boolean | Select or cancel |
| $event.item | boolean | Object related to the selected item |
| $event.itemVM | boolean | The selected item subcomponent |
| $event.value | Array | Changed value |
| $event.oldValue | Array | Old value |
| $event.items | Array\<object\> | Array of objects related to all selected items |
| $event.oldItems | Array\<object\> | Array of objects related to all old selected items |
| $event.itemVMs | Array\<MMultiplexItem\> | Array of all selected item subcomponents |
| $event.oldVMs | Array\<MMultiplexItem\> | Array of all old selected item subcomponents |
| senderVM | MMultiplex | Send event instance |

#### @change

Fires when the selection value changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array | Values of all selected items |
| $event.items | Array\<object\> | Array of objects related to all selected items |
| $event.itemVMs | Array\<MMultiplexItem\> | Array of all selected item subcomponents |
| senderVM | MMultiplex | Send event instance |

## MMultiplexItem API
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
| senderVM | MMultiplexItem | Send event instance |

#### @before-select

Trigger before selecting this

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of this item |
| $event.item | object | The related object of this item |
| $event.itemVM | MMultiplexItem | This component |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | MMultiplexItem | Send event instance |
