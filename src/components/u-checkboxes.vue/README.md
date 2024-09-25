<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UCheckboxes Multiple Selection Groups

**UI Component**, **Form Control**, **Block Level Display**

## Example
### Basic Usage

``` html
<u-checkbox>Multiple Checkbox</u-checkbox>
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
    <u-checkbox :value="true" readonly>Read-Only</u-checkbox>
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

## UCheckboxes API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | Array | | `[]` | Selected items of multi-select group |
| min | number | | `0` | The minimum number of checkboxes that can be checked |
| max | number | | `Infinity` | The maximum number of checkboxes that can be checked |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert the `<checkbox>` subcomponent.

## UCheckbox API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | boolean, null | | `false` | Selected state, `null` means uncertain state |
| label | any | | | Checkbox label. Value used to associate multiple selection groups |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @before-check

Triggered before switching selected state

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | boolean, null | Selected state |
| $event.oldValue | boolean, null | Old selected state |
| $event.preventDefault | Function | Prevent switching process |
| senderVM | UCheckbox | Send event instance |

#### @input

Triggered when switching the selected state

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | boolean, null | The selected state after switching |
| senderVM | UCheckbox | Send event instance |

#### @check

Triggered when switching the selected state

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | boolean, null | Selected state |
| $event.oldValue | boolean, null | Old selected state |
| $event.label | any | The label for this checkbox |
| senderVM | UCheckbox | Send event instance |

#### @change

Triggered when the selected state changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | boolean, null | Selected state |
| $event.oldValue | boolean, null | Old selected state |
| senderVM | UCheckbox | Send event instance |
