<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# USelect Selection Box

**UI Components**, **Form Controls**, **Inline Display**

The drop-down selection box supports single selection, multiple selection, search and other functions, and is used to replace the native selection box.

## Basic Example
### Basic Usage

The default is radio mode. Placeholder can be set through the `placeholder` property.

``` html
<u-linear-layout>
    <u-select>
        <u-select-item>Water Cup</u-select-item>
        <u-select-item>Coffee</u-select-item>
        <u-select-item>Nut</u-select-item>
    </u-select>
    <u-select placeholder="Set placeholder">
        <u-select-item>Water Cup</u-select-item>
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

#### Empty to Disable

Sometimes you don't want the user to make a selection when there is no data. Use the `empty-disabled` attribute to automatically disable this situation.

``` html
<u-select value="nut" empty-disabled placeholder="No options yet"></u-select>
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

### Multiple Selection Mode

Enable multiple selection mode through the `multiple` attribute. Two-Way Binding can be performed using `v-model` or `:value.sync`.

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

### Tags Style

How to display when there are too many Tags.

``` vue
<template>
<u-linear-layout>
    <u-select multiple tags-overflow="hidden" v-model="value" placeholder="Omit if Too Many">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select multiple tags-overflow="collapse" v-model="value" placeholder="Shrink when Too Much">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select multiple tags-overflow="visible" v-model="value" placeholder="Display when there are Too Many">
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

### Can be Repeated

Setting the `duplicated` attribute allows options to be duplicated.

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

## Data Related
### Data and Data Sources

The basic Example uses tags to add data, which is suitable for scenarios where the amount of data is small, data operations are simple, or the template is customized.

If the amount of data is large, or operations such as filtering are required, the `data` or `data-source` attributes need to be used. The format of the `data` attribute is `Array<{ text, value }>`, which is abbreviated as `Array<Item>` below; the `data-source` attribute generally accepts a `load` function for asynchronous loading.

#### Pure Front-End Data

```vue
<template>
<u-select :data="data" placeholder="Pure front-end data"></u-select>
</template>
<script>
export default {
    data() {
        // Construct a large number of 100 pieces of data
        let data = [];
        for (let i = 1; i <= 100; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

### Pagination

#### Front-End Paging

When the amount of data is large, front-end paging can be performed by turning on the `pageable` attribute, and the default paging size can be modified with the `page-size` attribute.

```vue
<template>
    <u-select :data="data" pageable placeholder="Front-end paging"></u-select>
</template>
<script>
export default {
    data() {
        // Construct a larger number of 500 pieces of data
        let data = [];
        for (let i = 1; i <= 500; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

#### One-time back-end data, front-end paging

Pass in the `load` method in the `data-source` attribute to receive complete backend data.

The `load` method requires returning a `Promise<Array<Item>>` or `Promise<{ data: Array<Item>, total: Number }>` format. This will be called once when the component is initialized. If not needed, the `initial-load` attribute can be set to `false`.

Front-end paging can be performed when the `pageable` attribute is turned on.

```vue
<template>
    <u-select :data-source="load" pageable :page-size="20" placeholder="Front-end paging"></u-select>
</template>
<script>
// Simulate the construction of remote data
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

export default {
    methods: {
        load() {
            // Here use Promise and setTimeout to simulate an asynchronous request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 500);
            });
        },
    },
};
</script>
```

#### Backend Paging

If you need to use back-end paging, enable the `remote-paging` function after passing the `load` method in the `data-source` attribute.

At this time, the `load` method will accept a `paging` parameter related to paging:

``` js
params.paging = {
    size: Number, // size of each page
    number: Number, //Number of pages. Count from 1
    offset: Number, // offset: (number - 1) * size
    limit: Number, // same as size
}
```

It is required to return a `Promise<Array<Item>>` or `Promise<{ data: Array<Item>, total: Number }>` format. Whether the page turns to the end is judged according to the `total` field. If not, it is judged according to the last time the array is empty.

``` vue
<template>
<u-linear-layout>
<u-select :data-source="load" pageable remote-paging placeholder="后端分页"></u-select>
<u-select multiple :data-source="load" pageable remote-paging placeholder="后端分页(multiple choice)" style="width: 240px"></u-select>
</u-linear-layout>
</template>
<script>
//Simulate the construction of 500 remote data with a large number of
let remoteData = [];
for (let i = 1; i <= 500; i++)
    remoteData.push('item' + i);
remoteData = remoteData.map((text) => ({ text, value: text }));

export default {
    methods: {
        load({ paging }) {
            // Here we use Promise and setTimeout to simulate an asynchronous request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData.slice(paging.offset, paging.offset + paging.limit));
                }, 500);
            });
        },
    },
};
</script>
```


### Filter

#### Front-end Filtering

Use the `filterable` property to enable filtering for quick search options.

``` vue
<template>
<u-linear-layout>
    <u-select :data="data" filterable clearable placeholder="Front-end Filtering"></u-select>
    <u-select multiple :data="data" filterable clearable placeholder="Front-end Filtering（Multiple choice）" style="width: 240px"></u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        const data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

#### Matching Method

In the `match-method` attribute, you can configure the string matching method. Common ones are `includes`, `startsWith`, `endsWith`, and you can also pass a function.

``` vue
<template>
<u-linear-layout>
    <u-select :data="data" filterable match-method="includes" placeholder="Just include (default)"></u-select>
    <u-select :data="data" filterable match-method="startsWith" placeholder="Only match starts"></u-select>
    <u-select :data="data" filterable match-method="endsWith" placeholder="Only match ends"></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        const data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

#### Case Sensitive

By default, it is case-insensitive, which can be enabled with the `case-sensitive` property.

``` vue
<template>
<u-linear-layout>
    <u-select :data="data" filterable placeholder="Case insensitive (default)"></u-select>
    <u-select :data="data" filterable case-sensitive placeholder="Case Sensitive"></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        const data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

#### One-time Backend Data, Front-End Filtering

Pass the `load` method in the `data-source` attribute to receive complete backend data.

At this time, turn on the `filterable` property to perform front-end filtering.

``` vue
<template>
<u-select :data-source="load" filterable clearable placeholder="Front-end Filtering"></u-select>
</template>
<script>
//Simulate the construction of remote data
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

export default {
    methods: {
        load() {
            // Here we use Promise and setTimeout to simulate an asynchronous request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 300);
            });
        },
    },
};
</script>
```

#### Backend Filtering, Backend Paging

If you want to use backend filtering, enable the remote-filtering feature based on the data-source attribute passed to the load method.

It can also be used with paging.

``` vue
<template>
<u-linear-layout>
    <u-select :data-source="load"
              pageable remote-paging
              filterable remote-filtering
              clearable placeholder="Backend filtering, backend paging">
    </u-select>
    <u-select multiple :data-source="load"
              pageable remote-paging
              filterable remote-filtering
              clearable placeholder="Backend filtering, backend paging (multiple selections)"
              style="width: 240px"></u-select>
</u-linear-layout>
</template>
<script>
//Simulate the construction of 500 remote data with a large number of
let remoteData = [];
for (let i = 1; i <= 500; i++) {
    remoteData.push('item' + i);
    remoteData.push('info' + i);
    remoteData.push('detail' + i);
}
remoteData = remoteData.map((text) => ({ text, value: text }));

export default {
    methods: {
        load({ filterText, paging }) {
            const value = filterText.toLowerCase();

            // Here we use Promise and setTimeout to simulate an asynchronous request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData.filter((item) => item.value.includes(value))
                        .slice(paging.offset, paging.offset + paging.limit)
                    );
                }, 300);
            });
        },
    },
};
</script>
```

### Automatic Replenishment

Based on the filtering,

Use the `auto-complete` attribute to enable filtering for quick search options.

``` vue
<template>
<u-linear-layout>
    <u-select :data="data" filterable clearable auto-complete placeholder="Auto Replenish"></u-select>
    <u-select multiple :data="data" filterable clearable auto-complete placeholder="Auto Replenish (multiple choice)" style="width: 240px"></u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        const data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

## USelect API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any | | | The currently selected value |
| field | string | | `'text'` | Display text field |
| data | Array\<{ text, value }\> | | | List data |
| data-source | object, Function, DataSource | | | Multi-function data source |
| cancelable | boolean | | `false` | Whether the selection can be canceled |
| multiple | boolean | | `false` | Is it possible to select multiple items? |
| placeholder | boolean | | `'Please select'` | Placeholder for the select box |
| loading-text | string | | `'Loading...'` | The text during loading. Appears only when using paging loading |
| empty-text | string | | `'Loading...'` | Text if no match |
| empty-disabled | boolean | | `false` | Automatically disabled when no data |
| initial-load | boolean | | `true` | Whether to load immediately at the initial time |
| pageable | boolean | | `false` | Whether paging is required |
| page-size | number | | `50` | Paging size |
| remote-paging | boolean | | `false` | Whether to use backend paging |
| clearable | boolean | | `false` | Is there a clear button |
| filterable | boolean | | `false` | Whether to use the input box for filtering |
| match-method | string, Function | | `'includes'` | Matching method for filtering |
| case-sensitive | string, Function | | `'includes'` | Is filtering case sensitive |
| remote-filtering | boolean | | `false` | Whether to use backend filtering |
| auto-complete | boolean | | `false` | Whether to enable auto-complete mode to add items that are not in the list |
| readonly | boolean | | `false` | Read-only |
| disabled | boolean | | `false` | Disabled |
| opened.sync | boolean | | `false` | Popup/closed state |

### Slots

#### (default)

Inserts a <u-select-item> , <u-select-divider> , or <u-select-group> child component.

### Events

#### @before-select

Triggered before an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selected item |
| $event.oldValue | any | Old value |
| $event.item | object | Select item related object |
| $event.itemVM | SelectItem | Select item subcomponent |
| $event.preventDefault | Function | Prevent the selection process |
| senderVM | USelect | Send event instance |

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Value of the selection |
| senderVM | USelect | Send event instance |

#### @select

Triggered when an item is selected. In single-select mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Changed value |
| $event.oldValue | any | Old value |
| $event.item | object | Select item related object |
| $event.oldItem | object | Old selection item related object |
| $event.itemVM | USelectItem | Select item subcomponent |
| $event.oldVM | USelectItem | Old selection item subcomponent |
| senderVM | USelect | Send event instance |

#### @select

Triggered when an item is selected. In multi-select mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | boolean | Selected or deselected |
| $event.item | boolean | Object related to the selected item |
| $event.itemVM | boolean | The selected item subcomponent |
| $event.value | Array | The changed value |
| $event.oldValue | Array | Old value |
| $event.items | Array\<object\> | Array of objects associated with all selected items |
| $event.oldItems | Array\<object\> | An array of all old selected item related objects |
| $event.itemVMs | Array\<USelectItem\> | Array of all selected item subcomponents |
| $event.oldVMs | Array\<USelectItem\> | Array of all old selected item subcomponents |
| senderVM | USelect | Send event instance |

#### @change

Triggered when the selected value changes. In single selection mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selected item |
| $event.oldValue | any | Old value |
| $event.item | object | Select item related object |
| $event.oldItem | object | Old selection item related object |
| $event.itemVM | USelectItem | Select item subcomponent |
| $event.oldVM | USelectItem | Old selection item subcomponent |
| senderVM | USelect | Send event instance |

#### @change

Fired when the selected value changes. In multi-select mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array | Values of all selected items |
| $event.items | Array\<object\> | Array of objects associated with all selected items |
| $event.itemVMs | Array\<USelectItem\> | Array of all selected item subcomponents |
| senderVM | USelect | Send event instance |

#### @before-open

Fired before popup.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | Prevent pop-up process |
| senderVM | USelect | Send event instance |

#### @open

Fired when popping up.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | Empty |
| senderVM | USelect | Send event instance |

#### @before-close

Fired before hiding.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | Prevent hidden process |
| senderVM | USelect | Send event instance |

#### @close

Fired when hidden.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | Empty |
| senderVM | USelect | Send event instance |

#### @before-toggle

@deprecated

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @toggle

@deprecated

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @before-load

Triggered before loading

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | Prevent loading process |
| senderVM | UTableView | Send event instance |

#### @load

Triggered on load

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | Empty |
| senderVM | UTableView | Send event instance |

### Methods

#### open()

A selection box pops up.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### close()

Close the selection box.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### toggle(opened?)

Toggle popup/closed state.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| opened? | boolean | | Optional. Popup/closed state |

#### load()

Loading with cache

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### reload()

Clear cache and reload

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

## USelectItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | any | | | The value of this item |
| disabled | boolean | | `false` | Disable this item |
| item | object | | | Related object. When this option is selected, the thrown event will pass this object, which is convenient for development.

### Slots

#### (default)

Insert text or HTML.

### Events

#### @before-select

Triggered before selecting this item

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of this item |
| $event.item | object | The object associated with this item |
| $event.itemVM | SelectItem | This component |
| $event.preventDefault | Function | Prevent the selection process |
| senderVM | USelectItem | Send event instance |

## USelectGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Displayed title |

### Slots

#### (default)

Insert a <u-select-item> or a <u-select-divider> child component.

#### Title

Customize the title text.

#### Extra

Additional content can be added on the right.

## USelectDivider API

None