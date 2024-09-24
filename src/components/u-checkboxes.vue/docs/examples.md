### Basic Usage

``` html
<u-checkbox>多选框</u-checkbox>
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

### 只读和禁用

``` html
<u-linear-layout>
    <u-checkbox :value="true" readonly>只读</u-checkbox>
    <u-checkbox :value="true" disabled>禁用</u-checkbox>
</u-linear-layout>
```

### 不确定状态

``` html
<u-checkbox :value="null">不确定</u-checkbox>
```

### 多选组

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

### 数量限制

使用`min`和`max`属性可以限制选择项的数量。

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

### 全选

``` vue
<template>
<div>
    <u-checkbox v-model="allChecked" @check="checkAll($event.value)">全选</u-checkbox>
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
