### Basic Usage

``` html
<m-multiplex>
    <m-multiplex-item>Water Cup</m-multiplex-item>
    <m-multiplex-item>Coffee</m-multiplex-item>
    <m-multiplex-item>Nut</m-multiplex-item>
    <m-multiplex-item>Towel</m-multiplex-item>
    <m-multiplex-item>Sofa</m-multiplex-item>
</m-multiplex>
```

### Two-Way Binding

Two-Way Binding can be performed using `v-model` or `:value.sync`.

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <m-multiplex v-model="values">
        <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
        <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
        <m-multiplex-item value="nut">Nut</m-multiplex-item>
        <m-multiplex-item value="towel">Towel</m-multiplex-item>
        <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
    </m-multiplex>
    <m-multiplex :value.sync="values">
        <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
        <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
        <m-multiplex-item value="nut">Nut</m-multiplex-item>
        <m-multiplex-item value="towel">Towel</m-multiplex-item>
        <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
    </m-multiplex>
</u-linear-layout>
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

#### Selected One-Way Binding

``` vue
<template>
<m-multiplex>
    <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
    <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
    <m-multiplex-item value="nut" selected>Nut</m-multiplex-item>
    <m-multiplex-item value="towel" selected>Towel</m-multiplex-item>
    <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
</m-multiplex>
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

#### Selected Two-Way Binding

``` vue
<template>
<m-multiplex>
    <m-multiplex-item v-for="item in list"
        :key="item.value" :value="item.value" :selected.sync="item.selected">
        {{ item.text }}</m-multiplex-item>
</m-multiplex>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { text: 'Water Cup', value: 'cup', selected: false },
                { text: 'Coffee', value: 'coffee', selected: false },
                { text: 'Nut', value: 'nut', selected: true },
                { text: 'Towel', value: 'towel', selected: true },
                { text: 'Sofa', value: 'sofa', selected: false },
            ],
        };
    },
};
</script>
```

### Keep Order

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <m-multiplex v-model="values1">
        <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
        <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
        <m-multiplex-item value="nut">Nut</m-multiplex-item>
        <m-multiplex-item value="towel">Towel</m-multiplex-item>
        <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
    </m-multiplex>
    <m-multiplex v-model="values2" keep-order>
        <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
        <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
        <m-multiplex-item value="nut">Nut</m-multiplex-item>
        <m-multiplex-item value="towel">Towel</m-multiplex-item>
        <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
    </m-multiplex>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            values1: ['towel', 'nut'],
            values2: ['towel', 'nut'],
        };
    },
};
</script>
```

### Read Only, Disable, Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-multiplex :value="['nut', 'towel']" readonly>
            <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
            <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
            <m-multiplex-item value="nut">Nut</m-multiplex-item>
            <m-multiplex-item value="towel">Towel</m-multiplex-item>
            <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-multiplex :value="['nut', 'towel']" disabled>
            <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
            <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
            <m-multiplex-item value="nut">Nut</m-multiplex-item>
            <m-multiplex-item value="towel">Towel</m-multiplex-item>
            <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-multiplex :value="['nut', 'towel']">
            <m-multiplex-item value="cup">Water Cup</m-multiplex-item>
            <m-multiplex-item value="coffee">Coffee</m-multiplex-item>
            <m-multiplex-item value="nut" disabled>Nut</m-multiplex-item>
            <m-multiplex-item value="towel" disabled>Towel</m-multiplex-item>
            <m-multiplex-item value="sofa">Sofa</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
</u-grid-layout>
```

#### Update List

``` vue
<template>
<div>
    <m-multiplex v-model="values">
        <m-multiplex-item v-for="item in list" :key="item.value" :value="item.value">{{ item.text }}</m-multiplex-item>
    </m-multiplex>
    <u-button @click="updateList">Update List</u-button>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { value: 'cup', text: 'Water Cup' },
                { value: 'coffee', text: 'Coffee' },
                { value: 'nut', text: 'Nut' },
                { value: 'towel', text: 'Towel' },
                { value: 'sofa', text: 'Sofa' },
            ],
            values: ['nut', 'towel', 'toothbrush'],
        };
    },
    methods: {
        updateList() {
            this.list = [
                { value: 'cup', text: 'Water Cup' },
                { value: 'coffee', text: 'Coffee' },
                { value: 'nut', text: 'Nut' },
                { value: 'toothbrush', text: 'Toothbrush' },
            ];
        },
    },
};
</script>
```
