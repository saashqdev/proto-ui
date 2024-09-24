### Basic Usage

``` vue
<template>
<div>
    <f-draggable value="primary">
        <u-block size="normal" color="primary" inline>Drag me</u-block>
    </f-draggable>
    <f-draggable value="success">
        <u-block size="normal" color="success" inline>Drag me</u-block>
    </f-draggable>
    <f-draggable value="error">
        <u-block size="normal" color="error" inline>Drag me</u-block>
    </f-draggable>
    <p></p>
    <f-droppable @drop="color = $event.value">
        <u-block size="normal" :color="color">Drop it here</u-block>
    </f-droppable>
</div>
</template>

<script>
export default {
    data() {
        return {
            color: '',
        };
    },
};
</script>
```
