### Basic Usage

``` vue
<template>
<div>
    <u-drawer :visible.sync="visible" title="title">
        <u-sidebar slot="drawer">
            <u-sidebar-item>Guidelines</u-sidebar-item>
            <u-sidebar-item>Concept</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">Component</u-sidebar-item>
        </u-sidebar>
    </u-drawer>
    <u-linear-layout>
        <u-button @click="visible = true">Drawer</u-button>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
};
</script>
```

### Location

```vue
<template>
<div>
    <u-drawer :visible.sync="leftVisible" title="title">
        <u-sidebar slot="drawer">
            <u-sidebar-item>Guidelines</u-sidebar-item>
            <u-sidebar-item>Concept</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">Component</u-sidebar-item>
        </u-sidebar>
    </u-drawer>
    <u-drawer placement="right" :visible.sync="rightVisible" title="title">
        <u-sidebar slot="drawer">
            <u-sidebar-item>Guidelines</u-sidebar-item>
            <u-sidebar-item>Concept</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">Component</u-sidebar-item>
        </u-sidebar>
    </u-drawer>
    <u-linear-layout>
        <u-button @click="leftVisible = true">Left</u-button>
        <u-button @click="rightVisible = true">Right</u-button>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            LeftVisible: false,
            RightVisible: false,
        };
    },
};
</script>
```
