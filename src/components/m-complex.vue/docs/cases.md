### Basic Usage

``` html
<m-complex>
    <m-complex-item>Water Cup</m-complex-item>
    <m-complex-item>Coffee</m-complex-item>
    <m-complex-item>Nut</m-complex-item>
    <m-complex-item>Towel</m-complex-item>
    <m-complex-item>Sofa</m-complex-item>
</m-complex>
```

### Option Value

#### Single Selection Mode

``` vue
<template>
<m-complex v-model="value">
    <m-complex-item value="cup">Water Cup</m-complex-item>
    <m-complex-item value="coffee">Coffee</m-complex-item>
    <m-complex-item value="nut">Nut</m-complex-item>
    <m-complex-item value="towel">Towel</m-complex-item>
    <m-complex-item value="sofa">Sofa</m-complex-item>
</m-complex>
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

#### Multiple Selection Mode

``` vue
<template>
<m-complex multiple v-model="values">
    <m-complex-item value="cup">Water Cup</m-complex-item>
    <m-complex-item value="coffee">Coffee</m-complex-item>
    <m-complex-item value="nut">Nut</m-complex-item>
    <m-complex-item value="towel">Towel</m-complex-item>
    <m-complex-item value="sofa">Sofa</m-complex-item>
</m-complex>
</template>
<script>
export default {
    data() {
        return {
            values: ['nut', 'towel'],
        };
    },
};
</script>
```

### Read-Only, Disable, Disable a Certain Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-complex value="towel" readonly>
            <m-complex-item value="cup">Water Cup</m-complex-item>
            <m-complex-item value="coffee">Coffee</m-complex-item>
            <m-complex-item value="nut">Nut</m-complex-item>
            <m-complex-item value="towel">Towel</m-complex-item>
            <m-complex-item value="sofa">Sofa</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-complex value="towel" disabled>
            <m-complex-item value="cup">Water Cup</m-complex-item>
            <m-complex-item value="coffee">Coffee</m-complex-item>
            <m-complex-item value="nut">Nut</m-complex-item>
            <m-complex-item value="towel">Towel</m-complex-item>
            <m-complex-item value="sofa">Sofa</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-complex value="towel">
            <m-complex-item value="cup">Water Cup</m-complex-item>
            <m-complex-item value="coffee">Coffee</m-complex-item>
            <m-complex-item value="nut" disabled>Nut</m-complex-item>
            <m-complex-item value="towel" disabled>Towel</m-complex-item>
            <m-complex-item value="sofa">Sofa</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
</u-grid-layout>
```

### Cancelable

Try clicking on the same option twice.

``` html
<m-complex value="towel" cancelable>
    <m-complex-item value="cup">Water Cup</m-complex-item>
    <m-complex-item value="coffee" disabled>Coffee</m-complex-item>
    <m-complex-item value="nut">Nut</m-complex-item>
    <m-complex-item value="towel">Towel</m-complex-item>
    <m-complex-item value="sofa">Sofa</m-complex-item>
</m-complex>
```

### Automatic Selection

Automatically selects the first non-disabled item.

``` html
<m-complex auto-select>
    <m-complex-item value="cup" disabled>Water Cup</m-complex-item>
    <m-complex-item value="coffee" disabled>Coffee</m-complex-item>
    <m-complex-item value="nut">Nut</m-complex-item>
    <m-complex-item value="towel">Towel</m-complex-item>
    <m-complex-item value="sofa">Sofa</m-complex-item>
</m-complex>
```