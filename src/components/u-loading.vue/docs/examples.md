### Basic Usage

``` html
<u-loading></u-loading>
```

### Add Text

``` html
<u-loading>Loading...</u-loading>
```

### Size Expansion

``` html
<u-linear-layout direction="vertical">
    <div><u-loading size="small">Loading...</u-loading></div>
    <div><u-loading>Loading...</u-loading></div>
    <div><u-loading size="large">Loading...</u-loading></div>
</u-linear-layout>
```

### Display Method

#### Inline Display

``` html
<u-loading size="small" display="inline"></u-loading> Defaults to inline...
```

#### Block Level Display

``` html
<u-loading>Loading...</u-loading>
```

#### Fill Parent Element

Set the `display` attribute to `full` to fill the positioned parent element (offsetParent).

``` html
<u-list-view>
    <u-list-view-item>Water Cup</u-list-view-item>
    <u-list-view-item>Nut</u-list-view-item>
    <u-list-view-item>Towel</u-list-view-item>
    <u-list-view-item>Sofa</u-list-view-item>
    <u-loading display="full">Loading...</u-loading>
</u-list-view>
```

#### Fill the Full Window

Setting the `display` attribute to `fullWindow` will fill the entire browser.

``` vue
<template>
<div>
<u-button @click="load">Load</u-button>
<u-loading v-if="loading" display="fullWindow">Loading...</u-loading>
</div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        load() {
            this.loading = true;
            setTimeout(() => this.loading = false, 2000);
        },
    },
};
</script>
```
