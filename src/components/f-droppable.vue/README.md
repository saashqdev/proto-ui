<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# FDroppable Placement

## Example
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

## API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| disabled | boolean | | `false` | Disabled |

### Slots

#### (default)

Inserts an element that can be placed, only one.

### Events

#### @transfer

Customizable mobile elements.

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @dragenter

Triggered when dragging into the element

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | Drag source, current `<f-draggable>` |
| $event.sourceEl | Element | Drag start element |
| $event.transferEl | Element | Drag to move element |
| $event.targetEl | Element | Place target element |
| $event.value | any | The value to be passed |
| $event.screenX | number | The horizontal coordinate of the mouse pointer relative to the screen |
| $event.screenY | number | The vertical coordinate of the mouse pointer relative to the screen |
| $event.clientX | number | The horizontal coordinate of the mouse pointer relative to the browser |
| $event.clientY | number | The vertical coordinate of the mouse pointer relative to the browser |
| $event.pageX | number | The horizontal coordinate of the mouse pointer relative to the page |
| $event.pageY | number | The vertical coordinate of the mouse pointer relative to the page |
| $event.startX | number | The horizontal coordinate of the mouse pointer when dragging starts |
| $event.startY | number | The vertical coordinate of the mouse pointer when dragging starts |
| $event.dragX | number | Horizontal displacement of the mouse pointer relative to the starting coordinates during dragging |
| $event.dragY | number | The vertical displacement of the mouse pointer relative to the starting coordinates during dragging |
| $event.startLeft | number | The left value of the proxy element when dragging starts |
| $event.startTop | number | The top value of the proxy element when dragging starts |
| $event.left | number | The left value of the proxy element during dragging |
| $event.top | number | The top value of the proxy element during dragging |
| $event.preventDefault | Function | Prevent the drag process |
| senderVM | FDroppable | Sending event instance |

#### @dragleave

Triggered when dragging leaves the element

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | Drag source, current `<f-draggable>` |
| $event.sourceEl | Element | Drag start element |
| $event.transferEl | Element | Drag to move element |
| $event.targetEl | Element | Place target element |
| $event.value | any | The value to be passed |
| $event.screenX | number | The horizontal coordinate of the mouse pointer relative to the screen |
| $event.screenY | number | The vertical coordinate of the mouse pointer relative to the screen |
| $event.clientX | number | The horizontal coordinate of the mouse pointer relative to the browser |
| $event.clientY | number | The vertical coordinate of the mouse pointer relative to the browser |
| $event.pageX | number | The horizontal coordinate of the mouse pointer relative to the page |
| $event.pageY | number | The vertical coordinate of the mouse pointer relative to the page |
| $event.startX | number | The horizontal coordinate of the mouse pointer when dragging starts |
| $event.startY | number | The vertical coordinate of the mouse pointer when dragging starts |
| $event.dragX | number | Horizontal displacement of the mouse pointer relative to the starting coordinates during dragging |
| $event.dragY | number | The vertical displacement of the mouse pointer relative to the starting coordinates during dragging |
| $event.startLeft | number | The left value of the proxy element when dragging starts |
| $event.startTop | number | The top value of the proxy element when dragging starts |
| $event.left | number | The left value of the proxy element during dragging |
| $event.top | number | The top value of the proxy element during dragging |
| $event.preventDefault | Function | Prevent the drag process |
| senderVM | FDroppable | Sending event instance |

#### @dragover

Triggered when dragging over this element

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | Drag source, current `<f-draggable>` |
| $event.sourceEl | Element | Drag start element |
| $event.transferEl | Element | Drag to move element |
| $event.targetEl | Element | Place target element |
| $event.value | any | The value to be passed |
| $event.ratioX | number | The ratio of the length of the mouse pointer to the receiving element |
| $event.ratioY | number | The ratio of the height of the mouse pointer relative to the receiving element |
| $event.screenX | number | The horizontal coordinate of the mouse pointer relative to the screen |
| $event.screenY | number | The vertical coordinate of the mouse pointer relative to the screen |
| $event.clientX | number | The horizontal coordinate of the mouse pointer relative to the browser |
| $event.clientY | number | The vertical coordinate of the mouse pointer relative to the browser |
| $event.pageX | number | The horizontal coordinate of the mouse pointer relative to the page |
| $event.pageY | number | The vertical coordinate of the mouse pointer relative to the page |
| $event.startX | number | The horizontal coordinate of the mouse pointer when dragging starts |
| $event.startY | number | The vertical coordinate of the mouse pointer when dragging starts |
| $event.dragX | number | Horizontal displacement of the mouse pointer relative to the starting coordinates during dragging |
| $event.dragY | number | The vertical displacement of the mouse pointer relative to the starting coordinates during dragging |
| $event.startLeft | number | The left value of the proxy element when dragging starts |
| $event.startTop | number | The top value of the proxy element when dragging starts |
| $event.left | number | The left value of the proxy element during dragging |
| $event.top | number | The top value of the proxy element during dragging |
| $event.preventDefault | Function | Prevent the drag process |
| senderVM | FDroppable | Sending event instance |

#### @drop

Triggered when dragging and dropping

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | Drag source, current `<f-draggable>` |
| $event.sourceEl | Element | Drag start element |
| $event.transferEl | Element | Drag to move element |
| $event.targetEl | Element | Place target element |
| $event.value | any | The value to be passed |
| $event.ratioX | number | The ratio of the length of the mouse pointer to the receiving element |
| $event.ratioY | number | The ratio of the height of the mouse pointer relative to the receiving element |
| $event.screenX | number | The horizontal coordinate of the mouse pointer relative to the screen |
| $event.screenY | number | The vertical coordinate of the mouse pointer relative to the screen |
| $event.clientX | number | The horizontal coordinate of the mouse pointer relative to the browser |
| $event.clientY | number | The vertical coordinate of the mouse pointer relative to the browser |
| $event.pageX | number | The horizontal coordinate of the mouse pointer relative to the page |
| $event.pageY | number | The vertical coordinate of the mouse pointer relative to the page |
| $event.startX | number | The horizontal coordinate of the mouse pointer when dragging starts |
| $event.startY | number | The vertical coordinate of the mouse pointer when dragging starts |
| $event.dragX | number | Horizontal displacement of the mouse pointer relative to the starting coordinates during dragging |
| $event.dragY | number | The vertical displacement of the mouse pointer relative to the starting coordinates during dragging |
| $event.startLeft | number | The left value of the proxy element when dragging starts |
| $event.startTop | number | The top value of the proxy element when dragging starts |
| $event.left | number | The left value of the proxy element during dragging |
| $event.top | number | The top value of the proxy element during dragging |
| $event.preventDefault | Function | Prevent the drag process |
| senderVM | FDroppable | Sending event instance |

### Methods

#### cancel()

Cancel the drag.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |