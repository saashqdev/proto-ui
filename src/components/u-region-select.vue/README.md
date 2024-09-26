<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# URegionSelect Region Selection

**UI Component**, **Form Control**, **Block Level Display**

This component inherits from UCascadeSelect and only fills in the administrative region data of China. Other functions are the same as UCascadeSelect.

## Example
### Basic Usage

``` html
<u-linear-layout direction="vertical">
    <u-region-select></u-region-select>
    <u-region-select value="Ontario,Fort Erie,Peele"></u-region-select>
</u-linear-layout>
```

### Two-Way Binding

Use `v-model` for Two-Way Binding.

```vue
<template>
    <u-region-select v-model="address"></u-region-select>
</template>
<script>
export default {
    data() {
        return {
            address: '',
        };
    },
};
</script>
```

### Placeholder

``` html
<u-region-select :categories="[
    { label: 'Province', placeholder: 'Please select a province' },
    { label: 'City', placeholder: 'Please select a city' },
    { label: 'District', placeholder: 'Please select a county' },
]"></u-region-select>
```

### Hide empty list

``` html
<u-region-select hide-empty :categories="[
    { label: 'Province', placeholder: 'Please select a province' },
    { label: 'City', placeholder: 'Please select a city' },
    { label: 'District', placeholder: 'Please select a county' },
]"></u-region-select>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | Array\<{ text, value }\> | | `'data'` | Data list |
| value.sync, v-model | any | | | Currently selected value |
| categories | Array\<{ label, key, placeholder }\> | | `'data'` | Multi-level classification |
| hide-empty | boolean | | `false` | Whether to hide the empty list |
| converter | string, object | | `'join'` | Converter between value and values. Optional value: `'join'` means joining the values   array into value. `'join.number'` is similar to `join`, except that it will be considered as a number. You can also use `:` to modify the separator, similar to Vue's command parameters. `'last-value'` means using the value of the last item as the value. You can also pass in an object containing { get, set } |
| field | string | | `'value'` | Display text field |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Events

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Value of selection |
| senderVM | URegionSelect | Send event instance |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.level | number | Selected level |
| $event.value | any | Changed value |
| $event.values   | Array | Array of changed values of each item |
| $event.item | object | Object related to selection item |
| $event.itemVM | ListViewItem | Selection subcomponent |
| senderVM | URegionSelect | Send event instance |

#### @change

Fires when the selection value changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Changed value |
| $event.oldValue | any | Old value |
| $event.values   | Array | Array of changed values of each item |
| $event.oldValues   | Array | Array of old values for each item |
| senderVM | URegionSelect | Send event instance |
