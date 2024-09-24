### Basic Usage

``` html
<m-singlex>
    <m-singlex-item>Water Cup</m-singlex-item>
    <m-singlex-item>Coffee</m-singlex-item>
    <m-singlex-item>Nut</m-singlex-item>
    <m-singlex-item>Towel</m-singlex-item>
    <m-singlex-item>Sofa</m-singlex-item>
</m-singlex>
```

### Option Value

#### One-Way Binding

``` html
<m-singlex value="towel">
    <m-singlex-item value="cup">Water Cup</m-singlex-item>
    <m-singlex-item value="coffee">Coffee</m-singlex-item>
    <m-singlex-item value="nut">Nut</m-singlex-item>
    <m-singlex-item value="towel">Towel</m-singlex-item>
    <m-singlex-item value="sofa">Sofa</m-singlex-item>
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

### Routing Mode

``` html
<m-singlex router>
    <m-singlex-item to="/components/m-singlex">MSinglex</m-singlex-item>
    <m-singlex-item exact to="/components/m-singlex">MSinglex Exact</m-singlex-item>
    <m-singlex-item to="/components/m-singlex/cases">Cases</m-singlex-item>
    <m-singlex-item to="/components/m-multiplex">MMultiplex</m-singlex-item>
    <m-singlex-item to="/components/m-multiplex" disabled>MMultiplex Disabled</m-singlex-item>
    <m-singlex-item href="/">Href</m-singlex-item>
    <m-singlex-item href="/" disabled>Href Disabled</m-singlex-item>
</m-singlex>
```

``` html
<m-singlex router disabled>
    <m-singlex-item to="/components/m-singlex">MSinglex</m-singlex-item>
    <m-singlex-item exact to="/components/m-singlex">MSinglex Exact</m-singlex-item>
    <m-singlex-item to="/components/m-singlex/cases">Cases</m-singlex-item>
    <m-singlex-item to="/components/m-multiplex">MMultiplex</m-singlex-item>
    <m-singlex-item to="/components/m-multiplex" disabled>MMultiplex Disabled</m-singlex-item>
    <m-singlex-item href="/">Href</m-singlex-item>
    <m-singlex-item href="/" disabled>Href Disabled</m-singlex-item>
</m-singlex>
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

### Update List

``` vue
<template>
<div>
    <m-singlex v-model="value">
        <m-singlex-item v-for="item in list" :key="item.value" :value="item.value">{{ item.text }}</m-singlex-item>
    </m-singlex>
    <span>value: {{ value }}</span>
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
            value: 'toothbrush',
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

### Synchronization Sequence

``` vue
<template>
<div>
    <m-singlex v-model="value">
        <m-singlex-item v-for="item in list" :key="item.value" :value="item.value">{{ item.text }}</m-singlex-item>
    </m-singlex>
    <span>value: {{ value }}</span>
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
            ],
            value: 'toothbrush',
        };
    },
    methods: {
        updateList() {
            this.list.unshift({ value: 'towel', text: 'Towel' });
            this.list.unshift({ value: 'sofa', text: 'Sofa' });
        },
    },
};
</script>
```
