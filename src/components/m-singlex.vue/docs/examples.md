### Basic Usage

下面展示了单选模式的一些基本特性，选择和禁用等功能。

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

### 可取消

`cancelable`属性开启时，在同一个选项上点击两次，会取消原来的选择。

``` html
<m-singlex value="towel" cancelable>
    <m-singlex-item value="cup">Water Cup</m-singlex-item>
    <m-singlex-item value="coffee">Coffee</m-singlex-item>
    <m-singlex-item value="nut" disabled>Nut</m-singlex-item>
    <m-singlex-item value="towel">Towel</m-singlex-item>
    <m-singlex-item value="sofa">Sofa</m-singlex-item>
</m-singlex>
```

### 自动选择

在初始化或选项变更时，自动选择第一个非禁用的项。

``` html
<m-singlex auto-select>
    <m-singlex-item value="cup" disabled>Water Cup</m-singlex-item>
    <m-singlex-item value="coffee" disabled>Coffee</m-singlex-item>
    <m-singlex-item value="nut">Nut</m-singlex-item>
    <m-singlex-item value="towel">Towel</m-singlex-item>
    <m-singlex-item value="sofa">Sofa</m-singlex-item>
</m-singlex>
```
