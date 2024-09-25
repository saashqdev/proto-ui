<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UDrawer Drawer

## Example
### Basic Usage

```vue
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

``` vue
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
            leftVisible: false,
            rightVisible: false,
        };
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| visible.sync | boolean | | `false` | Whether to display |
| title | string | | `'Prompt'' | The title of the drawer |
| okButton | string | | `'OK'` | OK button text, if it is empty, it will not be displayed |
| cancelButton | string | | `'Cancel'` | Cancel button text, not displayed if empty |
| size | string | | `'normal'` | The size of the drawer. Optional values: `'small'`, `'normal'`, `'large'` |
| static | boolean | | `false` | Whether to embed the page display |
| maskClosable | boolean | | `true` | Whether to close the drawer when the mask is clicked |

### Events

#### @open

Triggered when drawer is opened

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UDrawer | Send event instance |

#### @ok

Triggered when confirmed
| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UDrawer | Send event instance |

#### @cancel

Triggered when canceled

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UDrawer | Send event instance |

#### @before-close

Triggered before closing the drawer

| Param | Type | Description |
| ----- | ---- | ----------- |
| ok | boolean | Are you sure |
| $event.preventDefault | Function | Prevent closing process |
| senderVM | UDrawer | Send event instance |

#### @close

Fires when the drawer is closed

| Param | Type | Description |
| ----- | ---- | ----------- |
| ok | boolean | Are you sure |
| senderVM | UDrawer | Send event instance |
