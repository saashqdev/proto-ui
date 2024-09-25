### Basic Usage

``` vue
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
