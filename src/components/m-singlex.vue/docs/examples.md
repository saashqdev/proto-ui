### Basic Usage

The following shows some basic features of the radio mode, including selection and disabling functions.

``` html
<m-singlex>
    <m-singlex-item>Water Cup</m-singlex-item>
    <m-singlex-item>Coffee</m-singlex-item>
    <m-singlex-item disabled>Nut</m-singlex-item>
    <m-singlex-item>Towel</m-singlex-item>
    <m-singlex-item>Sofa</m-singlex-item>
</m-singlex>
```

#### Two-Way Binding

Two-Way Binding can be performed using `v-model` or `:value.sync`.

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <m-singlex v-model="value">
        <m-singlex-item value="cup">Water Cup</m-singlex-item>
        <m-singlex-item value="coffee">Coffee</m-singlex-item>
        <m-singlex-item value="nut">Nut</m-singlex-item>
        <m-singlex-item value="towel">Towel</m-singlex-item>
        <m-singlex-item value="sofa">Sofa</m-singlex-item>
    </m-singlex>
    <m-singlex :value.sync="value">
        <m-singlex-item value="cup">Water Cup</m-singlex-item>
        <m-singlex-item value="coffee">Coffee</m-singlex-item>
        <m-singlex-item value="nut">Nut</m-singlex-item>
        <m-singlex-item value="towel">Towel</m-singlex-item>
        <m-singlex-item value="sofa">Sofa</m-singlex-item>
    </m-singlex>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'towel',
        };
    },
};
</script>
```

### Read Only, Disable, Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel" readonly>
            <m-singlex-item value="cup">Water Cup</m-singlex-item>
            <m-singlex-item value="coffee">Coffee</m-singlex-item>
            <m-singlex-item value="nut">Nut</m-singlex-item>
            <m-singlex-item value="towel">Towel</m-singlex-item>
            <m-singlex-item value="sofa">Sofa</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel" disabled>
            <m-singlex-item value="cup">Water Cup</m-singlex-item>
            <m-singlex-item value="coffee">Coffee</m-singlex-item>
            <m-singlex-item value="nut">Nut</m-singlex-item>
            <m-singlex-item value="towel">Towel</m-singlex-item>
            <m-singlex-item value="sofa">Sofa</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel">
            <m-singlex-item value="cup">Water Cup</m-singlex-item>
            <m-singlex-item value="coffee">Coffee</m-singlex-item>
            <m-singlex-item value="nut" disabled>Nut</m-singlex-item>
            <m-singlex-item value="towel" disabled>Towel</m-singlex-item>
            <m-singlex-item value="sofa">Sofa</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
</u-grid-layout>
```

### Cancel

When the `cancelable` attribute is turned on, clicking twice on the same option will cancel the original selection.

``` html
<m-singlex value="towel" cancelable>
    <m-singlex-item value="cup">Water Cup</m-singlex-item>
    <m-singlex-item value="coffee">Coffee</m-singlex-item>
    <m-singlex-item value="nut" disabled>Nut</m-singlex-item>
    <m-singlex-item value="towel">Towel</m-singlex-item>
    <m-singlex-item value="sofa">Sofa</m-singlex-item>
</m-singlex>
```

### Automatic Selection

On initialization or option change, automatically selects the first non-disabled item.

``` html
<m-singlex auto-select>
    <m-singlex-item value="cup" disabled>Water Cup</m-singlex-item>
    <m-singlex-item value="coffee" disabled>Coffee</m-singlex-item>
    <m-singlex-item value="nut">Nut</m-singlex-item>
    <m-singlex-item value="towel">Towel</m-singlex-item>
    <m-singlex-item value="sofa">Sofa</m-singlex-item>
</m-singlex>
```
