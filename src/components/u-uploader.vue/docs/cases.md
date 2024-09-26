### Upload File

``` vue
<template>
<u-uploader url="/api/upload" @before-send.prevent="onBeforeSend">
    <u-button>Upload</u-button>
</u-uploader>
</template>

<script>
export default {
    methods: {
        onBeforeSend($event) {
            console.info($event);
        },
    },
};
</script>
```
