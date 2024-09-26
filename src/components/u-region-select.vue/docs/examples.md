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

### Hide Empty List

``` html
<u-region-select hide-empty :categories="[
    { label: 'Province', placeholder: 'Please select a province' },
    { label: 'City', placeholder: 'Please select a city' },
    { label: 'District', placeholder: 'Please select a county' },
]"></u-region-select>
```
