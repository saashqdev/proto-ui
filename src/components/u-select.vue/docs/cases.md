
## Radio Selection Mode

### Basic Usage

The default is radio mode. Placeholders can be set via the `placeholder` attribute.

``` html
<u-linear-layout>
    <u-select>
        <u-select-item>Water Cup</u-select-item>
        <u-select-item>Coffee</u-select-item>
        <u-select-item>Nut</u-select-item>
    </u-select>
    <u-select placeholder="Please select">
        <u-select-item>Water Cup</u-select-item>
        <u-select-item>Coffee</u-select-item>
        <u-select-item>Nut</u-select-item>
    </u-select>
    <u-select>
        <u-select-item>Please select</u-select-item>
        <u-select-item>Compatible with 0.3.x</u-select-item>
        <u-select-item>Coffee</u-select-item>
        <u-select-item>Nut</u-select-item>
    </u-select>
</u-linear-layout>
```

### Two-Way Binding

Use `v-model` or `:value.sync` for Two-Way Binding.

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

### Clearable

``` html
<u-select value="coffee" clearable>
    <u-select-item value="cup">Water Cup</u-select-item>
    <u-select-item value="coffee">Coffee</u-select-item>
    <u-select-item value="nut">Nut</u-select-item>
</u-select>
```

### Data Source

#### Asynchronous One-Time Data Source

#### Asynchronous Paging Data Source (backend paging)

## Multiple Selection Mode

### Basic Usage

``` html
<u-linear-layout>
    <u-select multiple>
        <u-select-item>Water Cup</u-select-item>
        <u-select-item>Coffee</u-select-item>
        <u-select-item>Nut</u-select-item>
    </u-select>
    <u-select multiple placeholder="Please select">
        <u-select-item>Water Cup</u-select-item>
        <u-select-item>Coffee</u-select-item>
        <u-select-item>Nut</u-select-item>
    </u-select>
    <u-select multiple>
        <u-select-item>Please select</u-select-item>
        <u-select-item>Compatible with 0.3.x</u-select-item>
        <u-select-item>Coffee</u-select-item>
        <u-select-item>Nut</u-select-item>
    </u-select>
</u-linear-layout>
```

### Two-Way Binding

Use `v-model` or `:value.sync` for Two-Way Binding.

``` vue
<template>
<u-linear-layout>
    <u-select multiple v-model="value">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select multiple :value.sync="value">
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
            value: ['nut', 'towel'],
        };
    },
};
</script>
```

### Tags Style

``` vue
<template>
<u-linear-layout>
    <u-select multiple multiple-appearance="tags" v-model="value" placeholder="Omit if Too Many">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select multiple multiple-appearance="tags" tags-overflow="collapse" v-model="value" placeholder="Shrink when Too Much">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select multiple multiple-appearance="tags" tags-overflow="visible" v-model="value" placeholder="Display when there are Too Many">
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

#### Alignment and Clearing Issues

``` vue
<template>
<u-linear-layout>
    <u-select clearable multiple multiple-appearance="tags" v-model="value" placeholder="Omit if Too Many">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select clearable multiple multiple-appearance="tags" tags-overflow="collapse" v-model="value" placeholder="Shrink when Too Much">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <span>Align to Text</span>
    <u-select clearable multiple multiple-appearance="tags" tags-overflow="visible" v-model="value" placeholder="Display when there are Too Many">
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

### Keep Order

Turn on the `keep-order` attribute, and the options will maintain the order in the list.

``` vue
<template>
<u-linear-layout>
    <u-select multiple multiple-appearance="tags" tags-overflow="visible" v-model="value1" placeholder="No Keep Order（default）">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select multiple multiple-appearance="tags" tags-overflow="visible" keep-order v-model="value2" placeholder="Keep Order">
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
            value1: ['nut', 'towel'],
            value2: ['nut', 'towel'],
        };
    },
};
</script>
```


## Filter Mode

### Option Initial Value

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" :data="list" filterable clearable placeholder="Front-end Filtering"></u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: undefined,
            list: [],
        };
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    const data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

                    res(data);
                }, 100);
            }).then((result) => {
                this.list = result;
                this.value = 'Washington';
            });
        },
    },
};
</script>
```

### Matching Method

### Case Sensitive

### Data Source

When data is added using tags or the `data` attribute, it is static. If you want to dynamically update data, you can set the data source properties. The data source is a `DataSource` type or a normal function, and is required to return an array in the `Array<{ text, value }>` format or a `Promise` object.

#### Synchronize Data Source

#### Asynchronous Data Source

#### Asynchronous Paging Data Source

## Multiple Selection Filter Mode

### Filterable

### Data Source

#### Asynchronous Data Source

#### Asynchronous Paging Data Source

#### Clear Cache

Pass in the `load` method in the `data-source` attribute to receive complete backend data.

At this time, front-end filtering can be performed by turning on the `filterable` attribute.

``` vue
<template>
<u-linear-layout>
    <u-select ref="select" :data-source="load" filterable clearable :page-size="20" placeholder="Front-end Filtering"></u-select>
    <u-button @click="reload">Reload</u-button>
</u-linear-layout>
</template>
<script>

export default {
    methods: {
        data() {
            return {
                reverse: false,
            };
        },
        load() {
            // Simulate the construction of remote data
            const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));
            if (this.reverse)
                remoteData.reverse();

            // Here use Promise and setTimeout to simulate an asynchronous request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 300);
            });
        },
        reload() {
            this.reverse = true;
            this.$refs.select.reload();
        },
    },
};
</script>
```

## Other Questions

### List Switching

#### Tag Method

``` vue
<template>
<u-linear-layout>
    <u-select v-if="!list.length" placeholder="No options available yet" disabled></u-select>
    <u-select v-else v-model="value">
        <u-select-item v-for="item in list" :key="item.value" :value="item.value">{{ item.text }}</u-select-item>
    </u-select>
    <u-button @click="switchList">Switch</u-button>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: undefined,
            list: [],
            list1: ['A', 'B', 'C'].map((value) => ({ text: value + value, value })),
            list2: ['D', 'E', 'F', 'G'].map((value) => ({ text: value + value, value })),
        };
    },
    methods: {
        switchList() {
            if (!this.list.length)
                this.list = this.list1;
            else if (this.list === this.list1)
                this.list = this.list2;
            else
                this.list = [];
        },
    },
};
</script>
```

#### Data Method

``` vue
<template>
<u-linear-layout>
    <u-select v-if="!list.length" placeholder="No options available yet" disabled></u-select>
    <u-select v-else v-model="value" :data="list"></u-select>
    <u-button @click="switchList">Switch</u-button>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: undefined,
            list: [],
            list1: ['A', 'B', 'C'].map((value) => ({ text: value + value, value })),
            list2: ['D', 'E', 'F', 'G'].map((value) => ({ text: value + value, value })),
        };
    },
    methods: {
        switchList() {
            if (!this.list.length)
                this.list = this.list1;
            else if (this.list === this.list1)
                this.list = this.list2;
            else
                this.list = [];
        },
    },
};
</script>
```

### The Problem of Changing List and Value at the Same Time

``` vue
<template>
<div>
    <u-linear-layout direction="vertical">
        <u-linear-layout>
            <u-text size="normal">Available Zone</u-text>
            <u-radios v-model="selectedAz">
                <u-radio label="azA">Available Zone A</u-radio>
                <u-radio label="azB">Available Zone B</u-radio>
            </u-radios>
        </u-linear-layout>
        <u-linear-layout>
            <u-text size="normal">Network{{ selectedVpc }}</u-text>
            <u-select v-model="selectedVpc">
                <u-select-item v-for="item in vpcOptions" :key="item.value" :value="item.value">A {{ item.text }}</u-select-item>
            </u-select>
        </u-linear-layout>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            azMap: {
                azA: [
                    { text: 'classic', value: 'classic' },
                    { text: 'defaultVPC', value: 'defaultVPC' },
                ],
                azB: [
                    { text: 'devVPC', value: 'devVPC' },
                    { text: 'onlineVPC', value: 'onlineVPC' },
                ],
            },
            vpcOptions: [],
            selectedAz: 'azA',
            selectedVpc: 'classic',
        };
    },
    watch: {
        selectedAz(value) {
            this.vpcOptions = this.azMap[value];
            if (this.vpcOptions.length > 0) {
                this.selectedVpc = this.vpcOptions[0].value;
            }
        },
    },
    created() {
        this.vpcOptions = this.azMap[this.selectedAz];
        if (this.vpcOptions.length > 0) {
            this.selectedVpc = this.vpcOptions[0].value;
        }
    },
};
</script>
```
