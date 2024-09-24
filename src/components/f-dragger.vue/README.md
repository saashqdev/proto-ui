<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# FDragger Dragger

## Example
### Basic Usage

``` html
<f-dragger>
    <u-block size="normal" style="position: relative;">Drag Me</u-block>
</f-dragger>
```

### Axial Constraints

``` html
<f-dragger axis="horizontal">
    <u-block size="normal" inline style="position: relative;">Horizontal</u-block>
</f-dragger>
<f-dragger axis="vertical">
    <u-block size="normal" inline style="position: relative;">Vertical</u-block>
</f-dragger>
```

### Grid Constraints

``` html
<f-dragger :grid="{ x: 40, y: 30 }">
    <u-block size="normal" color="primary" inline style="position: relative;">Grid</u-block>
</f-dragger>
```

### Scope Constraint

``` vue
<template>
<div>
    <div :class="$style.well">
        <f-dragger :range="{ left: 0, top: 0, right: 200, bottom: 200 }">
            <u-block :class="$style.block" size="normal" color="primary" inline>Object</u-block>
        </f-dragger>
    </div>
    <div :class="$style.well">
        <f-dragger range="offset-parent">
            <u-block :class="$style.block" size="normal" color="primary" inline>Offset-parent</u-block>
        </f-dragger>
    </div>
</div>
</template>

<style module>
.well {
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    width: 300px;
    height: 300px;
    padding: 20px;
    background: #f4f4f4;
    border: 2px solid #ccc;
}

.block {
    position: absolute;
}
</style>
```

### Range Constraint Mode

``` vue
<template>
<div>
    <div :class="$style.well">
        <f-dragger range="offset-parent" range-mode="inside">
            <u-block :class="$style.block" size="normal" color="primary" inline>Object</u-block>
        </f-dragger>
    </div>
    <div :class="$style.well">
        <f-dragger range="offset-parent" range-mode="center">
            <u-block :class="$style.block" range-mode="center" size="normal" color="primary" inline>Offset-parent</u-block>
        </f-dragger>
    </div>
</div>
</template>

<style module>
.well {
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    width: 300px;
    height: 300px;
    padding: 20px;
    background: #f4f4f4;
    border: 2px solid #ccc;
}

.block {
    position: absolute;
}

.block[range-mode="center"] {
    margin-left: -32px;
    margin-top: -32px;
}
</style>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| axis | string | | `'both'` | The constraint axis of the moving path when dragging. Optional values: `both` means it can move in any direction, `horizontal` means it is restricted to move in the horizontal direction, `vertical` means it is restricted to move in the vertical direction. |
| grid | object | | `'{ x: 0, y: 0 }'` | The constraint grid of the moving path when dragging. The value is an object in {x,y} format, indicating the size of the horizontal and vertical grid. |
| range | string, object | | | Drag range. The value can be an object in the format {left, top, right, bottom}, indicating the upper, lower, left and right boundaries of the proxy element movement. When the value is `offset-parent`, the proxy element is restricted to move in offsetParent, which is only applicable when `position` is `absolute`. |
| range-mode | string | | `'inside'` | Drag range mode. Optional values: `inside` means moving inside the drag range, `center` means moving on the edge and inside the drag range, `outside` means moving outside and inside the drag range. |
| value | any | | | The value to be passed |
| transfer | string, Element | | `'self'` | Move element when dragging. Optional values: `'clone'` means dragging up a copy of itself when dragging, `'self'` means dragging itself up when dragging, you can also directly pass in an element, or use slot to set it. |
| immediate | boolean | | `false` | Whether to drag immediately when the mouse is pressed. The default is `false`, which is to prevent events such as mouse clicks from frequently triggering drag operations. |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert only one element that needs to be dragged.

#### transfer

Custom mobile elements.

### Events

#### @dragstart

Triggered when dragging starts

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | Drag source, which is the current `<f-draggable>` |
| $event.sourceEl | Element | Drag the starting element |
| $event.transferEl | Element | Drag and drop to move element |
| $event.value | any | The value to be passed |
| $event.screenX | number | The horizontal coordinate of the mouse pointer relative to the screen |
| $event.screenY | number | The vertical coordinate of the mouse pointer relative to the screen |
| $event.clientX | number | The horizontal coordinate of the mouse pointer relative to the browser |
| $event.clientY | number | The vertical coordinate of the mouse pointer relative to the browser |
| $event.pageX | number | The horizontal coordinate of the mouse pointer relative to the page |
| $event.pageY | number | The vertical coordinate of the mouse pointer relative to the page |
| $event.startX | number | The horizontal coordinate of the mouse pointer when dragging starts |
| $event.startY | number | The vertical coordinate of the mouse pointer when dragging starts |
| $event.dragX | number | The horizontal displacement of the mouse pointer relative to the starting coordinate when dragging |
| $event.dragY | number | The vertical displacement of the mouse pointer relative to the starting coordinate when dragging |
| $event.startLeft | number | The left value of the proxy element when dragging starts |
| $event.startTop | number | The top value of the proxy element when dragging starts |
| $event.left | number | The left value of the proxy element when dragging |
| $event.top | number | The top value of the proxy element when dragging |
| $event.preventDefault | Function | Prevent drag and drop process |
| senderVM | FDragger | Send event instance |

#### @drag

Triggered while dragging

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | Drag source, which is the current `<f-draggable>` |
| $event.sourceEl | Element | Drag the starting element |
| $event.transferEl | Element | Drag and drop to move element |
| $event.value | any | The value to be passed |
| $event.screenX | number | The horizontal coordinate of the mouse pointer relative to the screen |
| $event.screenY | number | The vertical coordinate of the mouse pointer relative to the screen |
| $event.clientX | number | The horizontal coordinate of the mouse pointer relative to the browser |
| $event.clientY | number | The vertical coordinate of the mouse pointer relative to the browser |
| $event.pageX | number | The horizontal coordinate of the mouse pointer relative to the page |
| $event.pageY | number | The vertical coordinate of the mouse pointer relative to the page |
| $event.startX | number | The horizontal coordinate of the mouse pointer when dragging starts |
| $event.startY | number | The vertical coordinate of the mouse pointer when dragging starts |
| $event.dragX | number | The horizontal displacement of the mouse pointer relative to the starting coordinate when dragging |
| $event.dragY | number | The vertical displacement of the mouse pointer relative to the starting coordinate when dragging |
| $event.startLeft | number | The left value of the proxy element when dragging starts |
| $event.startTop | number | The top value of the proxy element when dragging starts |
| $event.left | number | The left value of the proxy element when dragging |
| $event.top | number | The top value of the proxy element when dragging |
| $event.preventDefault | Function | Prevent drag and drop process |
| senderVM | FDragger | Send event instance |

#### @dragend

Triggered when dragging ends

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | Drag source, which is the current `<f-draggable>` |
| $event.sourceEl | Element | Drag the starting element |
| $event.transferEl | Element | Drag and drop to move element |
| $event.value | any | The value to be passed |
| senderVM | FDragger | Send event instance |

### Methods

#### cancel()

Cancel drag.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
