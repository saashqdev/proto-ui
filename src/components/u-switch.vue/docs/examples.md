### Basic Usage

``` html
<u-switch></u-switch>
```

### Value Binding

``` vue
<template>
<u-switch v-model="value" width="wide">{{ value ? 'ON' : 'OFF' }}</u-switch>
</template>
<script>
export default {
    data() {
        return { value: false };
    },
};
</script>
```

### Read Only and Disabled

``` html
<u-linear-layout>
    <u-switch readonly></u-switch>
    <u-switch disabled></u-switch>
</u-linear-layout>
```
