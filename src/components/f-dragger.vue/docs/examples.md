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
    <u-block size="normal" color="primary" inline style="position: relative;">Grid</u-block></f-dragger>
```

### Scope Constraints

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
            <u-block :class="$style.block" size="normal" color="primary" inline>Offset-Parent</u-block>
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
            <u-block :class="$style.block" range-mode="center" size="normal" color="primary" inline>Offset-Parent</u-block>
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
