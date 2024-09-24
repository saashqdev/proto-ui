<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# FDraggable Drag

## Example
### Basic Usage

``` html
<f-draggable>
    <u-block size="normal">Drag Me</u-block>
</f-draggable>
```

### Drag Me

If the element's CSS `position` attribute is `static`, it will be automatically set to `relative` when dragging; if the `position` attribute is `absolute`, the `left` and `top` values   will be directly modified.

``` html
<f-draggable transfer="self">
    <u-block size="normal" color="primary" style="position: relative;">Static</u-block>
</f-draggable>
<div style="width: 200px; height: 200px; border: 1px solid #ccc; position: relative; overflow: auto; margin: 10px 0;">
<f-draggable transfer="self">
    <u-block size="normal" color="primary" style="position: absolute; top: 50px; left: 50px;">Absolute</u-block>
</f-draggable>
</div>
```

### Customizing Mobile Elements

``` html
<f-draggable>
    <u-block size="normal" color="primary">Transfer</u-block>
    <u-block slot="transfer" size="normal" color="error">Transfer</u-block>
</f-draggable>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | any | | | The value to be passed |
| transfer | string, Element | `'clone'`, `'self'` | `'clone'` | Move element when dragging. Optional values: `'clone'` means dragging a copy of itself when dragging, `'self'` means dragging itself when dragging, you can also pass in an element directly, or use slot to set it. |
| immediate | boolean | | `false` | Whether to drag immediately when the mouse is pressed. The default value is `false`, which is to prevent frequent triggering of drag operations by events such as mouse clicks. |
| disabled | boolean | | `false` | Disabled |
| constraint | function | | `'...'` | The constraint function of the moving path when dragging. You need to pass in an object, which must contain at least the following fields: `startLeft`, `startTop`, `dragX`, `dragY` |

### Slots

#### (default)

Insert the element to be dragged, only one.

#### Transfer

Customizable mobile elements.

### Events

#### @dragstart

Fired when dragging starts

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | Drag source, current `<f-draggable>` |
| $event.sourceEl | Element | Drag start element |
| $event.transferEl | Element | Drag to move element |
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
| senderVM | FDraggable | Send event instance |

#### @drag

Triggered when dragging

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | Drag source, current `<f-draggable>` |
| $event.sourceEl | Element | Drag start element |
| $event.transferEl | Element | Drag to move element |
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
| senderVM | FDraggable | Send event instance |

#### @wearing

Triggered when dragging ends

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | Drag source, current `<f-draggable>` |
| $event.sourceEl | Element | Drag start element |
| $event.transferEl | Element | Drag to move element |
| $event.value | any | The value to be passed |
| senderVM | FDraggable | Send event instance |

### Methods

#### cancel()

Cancel the drag.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |