### Basic Usage

默认为单选模式。可以通过`placeholder`属性设置占位符。

``` html
<u-linear-layout>
    <u-select>
        <u-select-item>Water Cup</u-select-item>
        <u-select-item>Coffee</u-select-item>
        <u-select-item>Nut</u-select-item>
    </u-select>
    <u-select placeholder="设置占位符">
        <u-select-item>Water Cup</u-select-item>
        <u-select-item>Coffee</u-select-item>
        <u-select-item>Nut</u-select-item>
    </u-select>
</u-linear-layout>
```

### Two-Way Binding

使用`v-model`或`:value.sync`进行Two-Way Binding。

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select :value.sync="value">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
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
<u-linear-layout>
    <u-select value="nut" readonly>
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
    </u-select>
    <u-select value="nut" disabled>
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
    </u-select>
    <u-select value="nut">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee" disabled>Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
    </u-select>
</u-linear-layout>
```

#### 为空禁用

有时在没有数据的情况下，不希望用户进行选择。使用`empty-disabled`属性自动禁用掉这种情况。

``` html
<u-select value="nut" empty-disabled placeholder="暂无选项"></u-select>
```

### Separator

``` html
<u-select value="nut">
    <u-select-item value="cup">Water Cup</u-select-item>
    <u-select-item value="toothbrush">Toothbrush</u-select-item>
    <u-select-divider></u-select-divider>
    <u-select-item value="nut">Nut</u-select-item>
    <u-select-item value="towel">Towel</u-select-item>
    <u-select-item value="sofa">Sofa</u-select-item>
</u-select>
```

### Group

``` html
<u-select>
    <u-select-group title="Washing Utensils">
        <u-select-item>Towel</u-select-item>
        <u-select-item>Toothbrush</u-select-item>
    </u-select-group>
    <u-select-group title="Cups">
        <u-select-item>Dental Cylinder</u-select-item>
        <u-select-item>Water Cup</u-select-item>
    </u-select-group>
    <u-select-group title="Tableware">
        <u-select-item>Chopsticks</u-select-item>
        <u-select-item>Bowl</u-select-item>
    </u-select-group>
</u-select>
```

### 可清除

``` html
<u-select value="coffee" clearable>
    <u-select-item value="cup">Water Cup</u-select-item>
    <u-select-item value="coffee">Coffee</u-select-item>
    <u-select-item value="nut">Nut</u-select-item>
</u-select>
```

### 多选模式

通过`multiple`属性开启多选模式。Two-Way Binding can be performed using `v-model` or `:value.sync`.

``` vue
<template>
<u-select multiple v-model="values">
    <u-select-item value="cup">Water Cup</u-select-item>
    <u-select-item value="coffee">Coffee</u-select-item>
    <u-select-item value="nut">Nut</u-select-item>
    <u-select-item value="towel">Towel</u-select-item>
    <u-select-item value="sofa">Sofa</u-select-item>
</u-select>
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

### Tags 风格

Tags 过多时如何显示。

``` vue
<template>
<u-linear-layout>
    <u-select multiple tags-overflow="hidden" v-model="value" placeholder="过多时省略">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select multiple tags-overflow="collapse" v-model="value" placeholder="过多时收缩">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select multiple tags-overflow="visible" v-model="value" placeholder="过多时显示">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['sofa', 'nut', 'towel'],
        };
    },
};
</script>
```

### 可以重复

设置`duplicated`属性可以让选项重复。

``` vue
<template>
<u-select multiple duplicated v-model="values">
    <u-select-item value="cup">Water Cup</u-select-item>
    <u-select-item value="coffee">Coffee</u-select-item>
    <u-select-item value="nut">Nut</u-select-item>
    <u-select-item value="towel">Towel</u-select-item>
    <u-select-item value="sofa">Sofa</u-select-item>
</u-select>
</template>
<script>
export default {
    data() {
        return {
            values: ['nut', 'towel', 'nut'],
        };
    },
};
</script>
```
