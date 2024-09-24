### Basic Usage

``` html
<f-draggable>
    <u-block size="normal">Drag Me</u-block>
</f-draggable>
```

### Drag Me

If the `position` attribute of the element CSS is `static`, it will be automatically set to `relative` when dragging; if the `position` attribute is `absolute`, the `left` and `top` values will be modified directly.

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

### Custom Mobile Elements

``` html
<f-draggable>
    <u-block size="normal" color="primary">Transfer</u-block>
    <u-block slot="transfer" size="normal" color="error">Transfer</u-block>
</f-draggable>
```
