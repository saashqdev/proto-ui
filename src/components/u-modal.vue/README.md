<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UModal Popup

## Example
### Basic Usage

```vue
<template>
<div>
    <u-modal :visible.sync="visible" title="title">
        This is a piece of text content.
    </u-modal>
    <u-linear-layout>
        <u-button @click="visible = true">Modal</u-button>
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

### Shortcut

``` vue
<template>
<u-linear-layout>
    <u-button @click="alert()">Alert</u-button>
    <u-button @click="confirm()">Confirm</u-button>
</u-linear-layout>
</template>

<script>
export default {
    methods: {
        alert() {
            this.$alert('Creation failed!');
        },
        confirm() {
            this.$confirm('Do you want to delete this task?').then(() => {
                console.info('The user clicked OK.');
            }).catch(() => {
                console.info('The user clicked Cancel.');
            });
        },
    },
};
</script>
```

### Static

``` html
<u-modal visible static>Static display, this attribute is used for partial display in the document, please remove it during actual development. </u-modal>
```

### Title and Content

``` html
<u-modal title="title" visible static>Content</u-modal>
```

### Customize

``` html
<u-modal visible static>
    <div slot="title">Custom title <u-badge :value="3"></u-badge></div>
        This is a piece of text content.
    <div slot="foot">
        <u-button color="primary">Close</u-button>
    </div>
</u-modal>
```
### Size Expansion

``` html
<u-modal visible static size="small">
    Small
</u-modal>
<u-modal visible static size="normal">
    Normal
</u-modal>
<u-modal visible static size="large">
    Large
</u-modal>
<u-modal visible static size="auto">
    Auto
</u-modal>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| visible.sync | boolean | | `false` | Whether to display |
| title | string | | `'Prompt'' | The title of the pop-up window |
| ok-button | string | | `'OK'` | OK button text, if it is empty, it will not be displayed |
| cancel-button | string | | `'Cancel'` | Cancel button text, not displayed if empty |
| size | string | | `'normal'` | The size of the pop-up window. Optional values: `'small'`, `'normal'`, `'large'` |
| static | boolean | | `false` | Whether to embed the page display |
| mask-closable | boolean | | `false` | Whether to close the pop-up window when clicking on the mask |

### Slots

#### Title

Pop-up window title customization

#### Head

Pop-up window header customization

#### Foot

Pop-up window tail customization

#### (default)

Pop-up window content customization

### Events

#### @open

Triggered when a pop-up window is opened

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | Send event instance |

#### @ok

Triggered when confirmed

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | Send event instance |

#### @cancel

Triggered when canceled

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | Send event instance |

#### @before-close

Triggered before closing the pop-up window

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.ok | boolean | Are you sure |
| $event.preventDefault | Function | Prevent closing process |
| senderVM | UModal | Send event instance |

#### @close

Triggered when closing the pop-up window

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.ok | boolean | Are you sure |
| senderVM | UModal | Send event instance |
