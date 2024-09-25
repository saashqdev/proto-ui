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
        ]},
        { text: 'Mathematics', value: 'Mathematics', children: [
            { text: 'Basic Mathematics', value: 'Basic Mathematics' },
            { text: 'Computational Mathematics', value: 'Computational Mathematics' },
            { text: 'Applied Mathematics', value: 'Applied Mathematics' },
        ]},
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

### Hide Empty Lists

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
    ] },
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

A converter between the component's value and each selector's value.

#### join

The default is `'join'`, which means that the values   array is joined to become value. In this case, value will not be repeated, so it is recommended.

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-cascade-select converter="join" v-model="value" :categories="[
        { label: 'Subject Category' },
        { label: 'First-level Discipline' },
        { label: 'Secondary Discipline' },
    ]" :data="data">
    </u-cascade-select>
    <div>The selected value is: {{ value }}</div>
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
                ] },
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

`'join.number'` is similar to `join`, except that it considers the case where it is a number.

`'join:,'`, you can also use `:` to modify the separator, similar to Vue's instruction parameters.

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-cascade-select :value.sync="value" converter="join.number:|" :categories="[
        { label: 'CPU', key: 'cpu' },
        { label: 'memory', key: 'memory' },
        { label: 'system disk', key: 'storage' },
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

`'last-value'` means to use the value of the last item as the value. This method can be used if the value of each item is unique.

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-cascade-select converter="last-value" v-model="value" :categories="[
        { label: 'Subject Category' },
        { label: 'First-level Discipline' },
        { label: 'Secondary Discipline' },
    ]" :data="data">
    </u-cascade-select>
    <div>The selected value is: {{ value }}</div>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: '213',
            data: [
                { text: 'Geography', value: '1', children: [
                    { text: 'Physics', value: '11', children: [
                        { text: 'Theoretical Physics', value: '111' },
                        { text: 'Condensed Matter Physics', value: '112' },
                        { text: 'Material Physics', value: '113' },
                    ] },
                    { text: 'Mathematics', value: '12', children: [
                        { text: 'Basic Mathematics', value: '121' },
                        { text: 'Computational Mathematics', value: '122' },
                        { text: 'Applied Mathematics', value: '123' },
                    ] },
                    { text: 'Chemistry', value: '13' },
                ] },
                { text: 'Engineering', value: '2', children: [
                    { text: 'Computer Science and Technology', value: '21', children: [
                        { text: 'Computer system architecture', value: '211' },
                        { text: 'Computer Software and Theory', value: '212', disabled: true },
                        { text: 'Computer Application Technology', value: '213' },
                    ] },
                    { text: 'Software Engineering', value: '22', disabled: true },
                    { text: 'Mechanical Engineering', value: '23', children: [
                        { text: 'Mechanical Manufacturing and Automation', value: '231' },
                        { text: 'Mechanical and Electronic Engineering', value: '232' },
                        { text: 'Mechanical Design and Theory', value: '233', disabled: true },
                        { text: 'Vehicle Engineering', value: '234', disabled: true },
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