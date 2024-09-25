### Basic Usage

``` html
<u-checkbox>Checkbox</u-checkbox>
```

### Two-Way Binding

``` vue
<template>
<u-linear-layout>
    <u-checkbox v-model="value">{{ value }}</u-checkbox>
    <u-checkbox :value.sync="value">{{ value }}</u-checkbox>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
    },
};
</script>
```

### Read Only and Disabled

``` html
<u-linear-layout>
    <u-checkbox :value="true" readonly>Read-only</u-checkbox>
    <u-checkbox :value="true" disabled>Disabled</u-checkbox>
</u-linear-layout>
```

### Uncertain Status

``` html
<u-checkbox :value="null">Not Sure</u-checkbox>
```

### Multiple Selection Group

``` vue
<template>
<div>
    <u-checkboxes v-model="checkedList">
        <u-checkbox label="Water Cup">Water Cup</u-checkbox>
        <u-checkbox label="Nut">Nut</u-checkbox>
        <u-checkbox label="Towel">Towel</u-checkbox>
        <u-checkbox label="Sofa">Sofa</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            checkedList: ['Towel', 'Sofa'],
        };
    },
};
</script>
```

### Quantity Limit

Use the `min` and `max` attributes to limit the number of selections.

``` vue
<template>
<div>
    <u-checkboxes :min="1" :max="2" v-model="checkedList">
        <u-checkbox label="Water Cup">Water Cup</u-checkbox>
        <u-checkbox label="Nut">Nut</u-checkbox>
        <u-checkbox label="Towel">Towel</u-checkbox>
        <u-checkbox label="Sofa">Sofa</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            checkedList: ['Towel', 'Sofa'],
        };
    },
    methods: {
        add() {
            this.checkedList.push('Water Cup');
        },
    },
};
</script>
```

### Select All

``` vue
<template>
<div>
    <u-checkbox v-model="allChecked" @check="checkAll($event.value)">Select All</u-checkbox>
    <u-checkboxes v-model="checkedList" @check="onCheck($event.value)">
        <u-checkbox label="Water Cup">Water Cup</u-checkbox>
        <u-checkbox label="Nut">Nut</u-checkbox>
        <u-checkbox label="Towel">Towel</u-checkbox>
        <u-checkbox label="Sofa">Sofa</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            allChecked: false,
            checkedList: [],
        };
    },
    methods: {
        checkAll(checked) {
            this.checkedList = checked ? ['Water Cup', 'Nut', 'Towel', 'Sofa'] : [];
        },
        onCheck(value) {
            if (this.checkedList.length === 4)
                this.allChecked = true;
            else if (this.checkedList.length === 0)
                this.allChecked = false;
            else
                this.allChecked = null;
        },
    },
};
</script>
```
