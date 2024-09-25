<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UCascadeSelect Cascade Selection

**UI Component**, **Form Control**, **Block Level Display**

## Example
### Basic Usage

``` html
<u-cascade-select :categories="[
    { label: 'Subject Category' },
    { label: 'First-level Discipline' },
    { label: 'Secondary Discipline' },
]" :data="[
    { text: 'Geography', value: 'Geography', children: [
        { text: 'Physics', value: 'Physics', children: [
            { text: 'Theoretical Physics', value: 'Theoretical Physics' },
            { text: 'Condensed Matter Physics', value: 'Condensed Matter Physics' },
            { text: 'Material Physics', value: 'Material Physics' },
        ] },
        { text: 'Mathematics', value: 'Mathematics', children: [
            { text: 'Basic Mathematics', value: 'Basic Mathematics' },
            { text: 'Computational Mathematics', value: 'Computational Mathematics' },
            { text: 'Applied Mathematics', value: 'Applied Mathematics' },
        ] },
        { text: 'Chemistry', value: 'Chemistry' },
    ]},
    { text: 'Engineering', value: 'Engineering', children: [
        { text: 'Computer Science and Technology', value: 'Computer Science and Technology', children: [
            { text: 'Computer System Structure', value: 'Computer System Structure' },
            { text: 'Computer Software and Theory', value: 'Computer Software and Theory', disabled: true },
            { text: 'Computer Application Technology', value: 'Computer Application Technology' },
        ] },
        { text: 'Software Engineering', value: 'Software Engineering', disabled: true },
        { text: 'Mechanical Engineering', value: 'Mechanical Engineering', children: [
            { text: 'Mechanical Manufacturing and Automation', value: 'Mechanical Manufacturing and Automation' },
            { text: 'Mechatronics Engineering', value: 'Mechatronics Engineering' },
            { text: 'Mechanical Design and Theory', value: 'Mechanical Design and Theory', disabled: true },
            { text: 'Vehicle Engineering', value: 'Vehicle Engineering', disabled: true },
        ] },
    ] },
]">
</u-cascade-select>
```

### Placeholder

``` html
<u-cascade-select :categories="[
    { label: 'Subject Category', placeholder: 'Subject Category' },
    { label: 'First-level Discipline', placeholder: 'First-level Discipline' },
    { label: 'Secondary Discipline', placeholder: 'Secondary Discipline' },
]" :data="[
    { text: 'Geography', value: 'Geography', children: [
        { text: 'Physics', value: 'Physics', children: [
            { text: 'Theoretical Physics', value: 'Theoretical Physics' },
            { text: 'Condensed Matter Physics', value: 'Condensed Matter Physics' },
            { text: 'Material Physics', value: 'Material Physics' },
        ] },
        { text: 'Mathematics', value: 'Mathematics', children: [
            { text: 'Basic Mathematics', value: 'Basic Mathematics' },
            { text: 'Computational Mathematics', value: 'Computational Mathematics' },
            { text: 'Applied Mathematics', value: 'Applied Mathematics' },
        ] },
        { text: 'Chemistry', value: 'Chemistry' },
    ]},
    { text: 'Engineering', value: 'Engineering', children: [
        { text: 'Computer Science and Technology', value: 'Computer Science and Technology', children: [
            { text: 'Computer System Structure', value: 'Computer System Structure' },
            { text: 'Computer Software and Theory', value: 'Computer Software and Theory', disabled: true },
            { text: 'Computer Application Technology', value: 'Computer Application Technology' },
        ] },
        { text: 'Software Engineering', value: 'Software Engineering', disabled: true },
        { text: 'Mechanical Engineering', value: 'Mechanical Engineering', children: [
            { text: 'Mechanical Manufacturing and Automation', value: 'Mechanical Manufacturing and Automation' },
            { text: 'Mechatronics Engineering', value: 'Mechatronics Engineering' },
            { text: 'Mechanical Design and Theory', value: 'Mechanical Design and Theory', disabled: true },
            { text: 'Vehicle Engineering', value: 'Vehicle Engineering', disabled: true },
        ] },
    ] },
]">
</u-cascade-select>
```

### 隐藏空列表

``` html
<u-cascade-select hide-empty :categories="[
    { label: 'Subject Category', placeholder: 'Subject Category' },
    { label: 'First-level Discipline', placeholder: 'First-level Discipline' },
    { label: 'Secondary Discipline', placeholder: 'Secondary Discipline' },
]" :data="[
    { text: 'Geography', value: 'Geography', children: [
        { text: 'Physics', value: 'Physics', children: [
            { text: 'Theoretical Physics', value: 'Theoretical Physics' },
            { text: 'Condensed Matter Physics', value: 'Condensed Matter Physics' },
            { text: 'Material Physics', value: 'Material Physics' },
        ] },
        { text: 'Mathematics', value: 'Mathematics', children: [
            { text: 'Basic Mathematics', value: 'Basic Mathematics' },
            { text: 'Computational Mathematics', value: 'Computational Mathematics' },
            { text: 'Applied Mathematics', value: 'Applied Mathematics' },
        ] },
        { text: 'Chemistry', value: 'Chemistry' },
    ]},
    { text: 'Engineering', value: 'Engineering', children: [
        { text: 'Computer Science and Technology', value: 'Computer Science and Technology', children: [
            { text: 'Computer System Structure', value: 'Computer System Structure' },
            { text: 'Computer Software and Theory', value: 'Computer Software and Theory', disabled: true },
            { text: 'Computer Application Technology', value: 'Computer Application Technology' },
        ] },
        { text: 'Software Engineering', value: 'Software Engineering', disabled: true },
        { text: 'Mechanical Engineering', value: 'Mechanical Engineering', children: [
            { text: 'Mechanical Manufacturing and Automation', value: 'Mechanical Manufacturing and Automation' },
            { text: 'Mechatronics Engineering', value: 'Mechatronics Engineering' },
            { text: 'Mechanical Design and Theory', value: 'Mechanical Design and Theory', disabled: true },
            { text: 'Vehicle Engineering', value: 'Vehicle Engineering', disabled: true },
        ] },
    ] },
]">
</u-cascade-select>
```

### Value Converter

Converter between the component's value and the value of each selector.

#### join

The default is `'join'`, which means joining the values array into value. In this case, value is generally not repeated and is recommended.

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-cascade-select converter="join" v-model="value" :categories="[
        { label: 'Subject Category' },
        { label: 'First-level Discipline' },
        { label: 'Secondary Discipline' },
    ]" :data="data">
    </u-cascade-select>
    <div>The selected values are:{{ value }}</div>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'Engineering, Computer Science and Technology, Computer Application Technology',
            data: [
                { text: 'Geography', value: 'Geography', children: [
                    { text: 'Physics', value: 'Physics', children: [
                        { text: 'Theoretical Physics', value: 'Theoretical Physics' },
                        { text: 'Condensed Matter Physics', value: 'Condensed Matter Physics' },
                        { text: 'Material Physics', value: 'Material Physics' },
                    ] },
                    { text: 'Mathematics', value: 'Mathematics', children: [
                        { text: 'Basic Mathematics', value: 'Basic Mathematics' },
                        { text: 'Computational Mathematics', value: 'Computational Mathematics' },
                        { text: 'Applied Mathematics', value: 'Applied Mathematics' },
                    ] },
                    { text: 'Chemistry', value: 'Chemistry' },
                ]},
                { text: 'Engineering', value: 'Engineering', children: [
                    { text: 'Computer Science and Technology', value: 'Computer Science and Technology', children: [
                        { text: 'Computer System Structure', value: 'Computer System Structure' },
                        { text: 'Computer Software and Theory', value: 'Computer Software and Theory', disabled: true },
                        { text: 'Computer Application Technology', value: 'Computer Application Technology' },
                    ] },
                    { text: 'Software Engineering', value: 'Software Engineering', disabled: true },
                    { text: 'Mechanical Engineering', value: 'Mechanical Engineering', children: [
                        { text: 'Mechanical Manufacturing and Automation', value: 'Mechanical Manufacturing and Automation' },
                        { text: 'Mechatronics Engineering', value: 'Mechatronics Engineering' },
                        { text: 'Mechanical Design and Theory', value: 'Mechanical Design and Theory', disabled: true },
                        { text: 'Vehicle Engineering', value: 'Vehicle Engineering', disabled: true },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```

`'join.number'` is similar to `join`, except that it will be considered as a number.

`'join:,'`, you can also use `:` to modify the separator, similar to Vue's command parameters.

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-cascade-select :value.sync="value" converter="join.number:|" :categories="[
        { label: 'CPU', key: 'cpu' },
        { label: 'Memory', key: 'memory' },
        { label: 'System Disk', key: 'storage' },
    ]" :data="data">
    </u-cascade-select>
    <div>The selected value is: {{ value }}</div>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: undefined,
            data: [
                { text: '1 core', value: 1, children: [
                    { text: '1GB', value: 1, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '2GB', value: 2, children: [
                        { text: '20GB', value: 20 },
                    ] },
                ] },
                { text: '2 core', value: 2, children: [
                    { text: '2GB', value: 2, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '4GB', value: 4, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '8GB', value: 8, children: [
                        { text: '20GB', value: 20 },
                    ] },
                ] },
                { text: '4 core', value: 4, children: [
                    { text: '4GB', value: 4, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '8GB', value: 8, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '16GB', value: 16, children: [
                        { text: '20GB', value: 20 },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```

#### Last-Value

`'last-value'` means using the value of the last item as the value. This method can be used if the value of each item is unique.

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-cascade-select converter="last-value" v-model="value" :categories="[
        { label: 'Subject Category' },
        { label: 'First-level Discipline' },
        { label: 'Secondary Discipline' },
    ]" :data="data">
    </u-cascade-select>
    <div>选择的值为：{{ value }}</div>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: '213',
            data: [
                { text: 'Geography', value: 'Geography', children: [
                    { text: 'Physics', value: 'Physics', children: [
                        { text: 'Theoretical Physics', value: 'Theoretical Physics' },
                        { text: 'Condensed Matter Physics', value: 'Condensed Matter Physics' },
                        { text: 'Material Physics', value: 'Material Physics' },
                    ] },
                    { text: 'Mathematics', value: 'Mathematics', children: [
                        { text: 'Basic Mathematics', value: 'Basic Mathematics' },
                        { text: 'Computational Mathematics', value: 'Computational Mathematics' },
                        { text: 'Applied Mathematics', value: 'Applied Mathematics' },
                    ] },
                    { text: 'Chemistry', value: 'Chemistry' },
                ]},
                { text: 'Engineering', value: 'Engineering', children: [
                    { text: 'Computer Science and Technology', value: 'Computer Science and Technology', children: [
                        { text: 'Computer System Structure', value: 'Computer System Structure' },
                        { text: 'Computer Software and Theory', value: 'Computer Software and Theory', disabled: true },
                        { text: 'Computer Application Technology', value: 'Computer Application Technology' },
                    ] },
                    { text: 'Software Engineering', value: 'Software Engineering', disabled: true },
                    { text: 'Mechanical Engineering', value: 'Mechanical Engineering', children: [
                        { text: 'Mechanical Manufacturing and Automation', value: 'Mechanical Manufacturing and Automation' },
                        { text: 'Mechatronics Engineering', value: 'Mechatronics Engineering' },
                        { text: 'Mechanical Design and Theory', value: 'Mechanical Design and Theory', disabled: true },
                        { text: 'Vehicle Engineering', value: 'Vehicle Engineering', disabled: true },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```

### Size Expansion

``` html
<u-cascade-select size="large" :categories="[
    { label: 'Subject Category' },
    { label: 'First-level Discipline' },
    { label: 'Secondary Discipline' },
]" :data="[
    { text: 'Geography', value: 'Geography', children: [
        { text: 'Physics', value: 'Physics', children: [
            { text: 'Theoretical Physics', value: 'Theoretical Physics' },
            { text: 'Condensed Matter Physics', value: 'Condensed Matter Physics' },
            { text: 'Material Physics', value: 'Material Physics' },
        ] },
        { text: 'Mathematics', value: 'Mathematics', children: [
            { text: 'Basic Mathematics', value: 'Basic Mathematics' },
            { text: 'Computational Mathematics', value: 'Computational Mathematics' },
            { text: 'Applied Mathematics', value: 'Applied Mathematics' },
        ] },
        { text: 'Chemistry', value: 'Chemistry' },
    ]},
    { text: 'Engineering', value: 'Engineering', children: [
        { text: 'Computer Science and Technology', value: 'Computer Science and Technology', children: [
            { text: 'Computer System Structure', value: 'Computer System Structure' },
            { text: 'Computer Software and Theory', value: 'Computer Software and Theory', disabled: true },
            { text: 'Computer Application Technology', value: 'Computer Application Technology' },
        ] },
        { text: 'Software Engineering', value: 'Software Engineering', disabled: true },
        { text: 'Mechanical Engineering', value: 'Mechanical Engineering', children: [
            { text: 'Mechanical Manufacturing and Automation', value: 'Mechanical Manufacturing and Automation' },
            { text: 'Mechatronics Engineering', value: 'Mechatronics Engineering' },
            { text: 'Mechanical Design and Theory', value: 'Mechanical Design and Theory', disabled: true },
            { text: 'Vehicle Engineering', value: 'Vehicle Engineering', disabled: true },
        ] },
    ] },
]">
</u-cascade-select>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | Array\<{ text, value }\> | | | Data list |
| value.sync, v-model | any | | | Currently selected value |
| categories | Array\<{ label, key, placeholder }\> | | | Multi-level classification |
| hide-empty | boolean | | `false` | Whether to hide the empty list |
| converter | string, object | | `'join'` | Converter between value and values. Optional value: `'join'` means joining the values   array into value. `'join.number'` is similar to `join`, except that it will be considered as a number. You can also use `:` to modify the separator, similar to Vue's command parameters. `'last-value'` means using the value of the last item as the value. You can also pass in an object containing { get, set } |
| field | string | | `'text'` | Display text field |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Events

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Value of selection |
| senderVM | UCascadeSelect | Send event instance |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.level | number | Selected level |
| $event.value | any | Changed value |
| $event.values   | Array | Array of changed values of each item |
| $event.item | object | Object related to selection item |
| $event.itemVM | ListViewItem | Selection subcomponent |
| senderVM | UCascadeSelect | Send event instance |

#### @change

Fires when the selection value changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Changed value |
| $event.oldValue | any | Old value |
| $event.values   | Array | Array of changed values of each item |
| $event.oldValues   | Array | Array of old values for each item |
| senderVM | UCascadeSelect | Send event instance |
