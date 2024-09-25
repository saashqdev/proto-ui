<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UListView List View

## BasicExample
### Basic Usage

``` html
<u-list-view>
    <u-list-view-item>Water Cup</u-list-view-item>
    <u-list-view-item>Nut</u-list-view-item>
    <u-list-view-item>Towel</u-list-view-item>
    <u-list-view-item>Sofa</u-list-view-item>
</u-list-view>
```

### Option Value

``` html
<u-list-view value="towel">
    <u-list-view-item value="cup">Water Cup</u-list-view-item>
    <u-list-view-item value="nut">Nut</u-list-view-item>
    <u-list-view-item value="towel">Towel</u-list-view-item>
    <u-list-view-item value="sofa">Sofa</u-list-view-item>
</u-list-view>
```

### Read Only, Disable, Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel" readonly>
            <u-list-view-item value="cup">Water Cup</u-list-view-item>
            <u-list-view-item value="nut">Nut</u-list-view-item>
            <u-list-view-item value="towel">Towel</u-list-view-item>
            <u-list-view-item value="sofa">Sofa</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel" disabled>
            <u-list-view-item value="cup">Water Cup</u-list-view-item>
            <u-list-view-item value="nut">Nut</u-list-view-item>
            <u-list-view-item value="towel">Towel</u-list-view-item>
            <u-list-view-item value="sofa">Sofa</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel">
            <u-list-view-item value="cup">Water Cup</u-list-view-item>
            <u-list-view-item value="nut" disabled>Nut</u-list-view-item>
            <u-list-view-item value="towel">Towel</u-list-view-item>
            <u-list-view-item value="sofa">Sofa</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
```

### Separator

``` html
<u-list-view value="nut">
    <u-list-view-item value="cup">Water Cup</u-list-view-item>
    <u-list-view-item value="toothbrush">Toothbrush</u-list-view-item>
    <u-list-view-divider></u-list-view-divider>
    <u-list-view-item value="nut">Nut</u-list-view-item>
    <u-list-view-item value="towel">Towel</u-list-view-item>
    <u-list-view-item value="sofa">Sofa</u-list-view-item>
</u-list-view>
```

### Group

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Default, No Folding Function</p>
            <u-list-view>
                <u-list-view-group title="Washing Utensils">
                    <u-list-view-item>Towel</u-list-view-item>
                    <u-list-view-item>Toothbrush</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Cups">
                    <u-list-view-item>Dental Cylinder</u-list-view-item>
                    <u-list-view-item>Water Cup</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Tableware">
                    <u-list-view-item>Chopsticks</u-list-view-item>
                    <u-list-view-item>Bowl</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Turn On the Folding Function</p>
            <u-list-view collapsible>
                <u-list-view-group title="Washing Utensils">
                    <u-list-view-item>Towel</u-list-view-item>
                    <u-list-view-item>Toothbrush</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Cups" expanded disabled>
                    <u-list-view-item>Dental Cylinder</u-list-view-item>
                    <u-list-view-item>Water Cup</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Tableware" :collapsible="false">
                    <u-list-view-item>Chopsticks</u-list-view-item>
                    <u-list-view-item>Bowl</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Accordian Mode</p>
            <u-list-view collapsible accordion value="cup">
                <u-list-view-group title="Washing Utensils">
                    <u-list-view-item value="towel">Towel</u-list-view-item>
                    <u-list-view-item value="toothbrush">Toothbrush</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Cups">
                    <u-list-view-item value="toothcup">Dental Cylinder</u-list-view-item>
                    <u-list-view-item value="cup">Water Cup</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Tableware">
                    <u-list-view-item value="chopsticks">Chopsticks</u-list-view-item>
                    <u-list-view-item value="bowl">Bowl</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Click on the Entire Row can Trigger (default)</p>
            <u-list-view collapsible expand-trigger="click">
                <u-list-view-group title="Washing Utensils">
                    <u-list-view-item>Towel</u-list-view-item>
                    <u-list-view-item>Toothbrush</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Cups">
                    <u-list-view-item>Dental Cylinder</u-list-view-item>
                    <u-list-view-item>Water Cup</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Only Triggered when the Small Arrow is Clicked</p>
            <u-list-view collapsible expand-trigger="click-expander">
                <u-list-view-group title="Washing Utensils">
                    <u-list-view-item>Towel</u-list-view-item>
                    <u-list-view-item>Toothbrush</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Cups">
                    <u-list-view-item>Dental Cylinder</u-list-view-item>
                    <u-list-view-item>Water Cup</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### Cancel

Try clicking twice on the same option.

``` html
<u-list-view value="towel" cancelable>
    <u-list-view-item value="cup">Water Cup</u-list-view-item>
    <u-list-view-item value="nut">Nut</u-list-view-item>
    <u-list-view-item value="towel">Towel</u-list-view-item>
    <u-list-view-item value="sofa">Sofa</u-list-view-item>
</u-list-view>
```

### Multiple Choice

Two-Way Binding can be performed using `v-model` or `:value.sync`.

``` vue
<template>
<u-list-view multiple v-model="values">
    <u-list-view-item value="cup">Water Cup</u-list-view-item>
    <u-list-view-item value="nut">Nut</u-list-view-item>
    <u-list-view-item value="towel">Towel</u-list-view-item>
    <u-list-view-item value="sofa">Sofa</u-list-view-item>
</u-list-view>
</template>

<script>
export default {
    data() {
        return { values: ['nut', 'towel'] };
    },
};
</script>
```

## Data related
### Data and Data Sources

The basic Example uses tags to add data, which is suitable for scenarios where the amount of data is small, data operations are simple, or the template is customized.

If the amount of data is large, or you want to use some advanced functions, it is recommended to use the `data` or `data-source` attributes. The format of the `data` attribute is `Array<{ text, value }>`, which is abbreviated as `Array<Item>` below; the `data-source` attribute generally accepts a `load` function for asynchronous loading.

#### Pure Front-End Data

``` vue
<template>
<u-list-view :data="data" style="height: 182px"></u-list-view>
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
<u-list-view :data="data" pageable :page-size="50" style="height: 182px"></u-list-view>
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

#### One-Time Back-End Data, Front-End Paging

Pass in the `load` method in the `data-source` attribute to receive complete backend data.

The `load` method requires returning a `Promise<Array<Item>>` or `Promise<{ data: Array<Item>, total: Number }>` format. This will be called once when the component is initialized. If not needed, the `initial-load` attribute can be set to `false`.

Front-end paging can be performed when the `pageable` attribute is turned on.

```vue
<template>
    <u-list-view :data-source="load" pageable :page-size="20" style="height: 182px"></u-list-view>
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

If you want to use back-end paging, enable the `remote-paging` function after passing the `load` method in the `data-source` attribute.

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

```vue
<template>
    <u-list-view :data-source="load" pageable remote-paging style="height: 182px"></u-list-view>
</template>
<script>
// Simulate and construct a large number of 500 remote data
let remoteData = [];
for (let i = 1; i <= 500; i++)
    remoteData.push('item' + i);
remoteData = remoteData.map((text) => ({ text, value: text }));

export default {
    methods: {
        load({ paging }) {
            // Here use Promise and setTimeout to simulate an asynchronous request
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

## UListView API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any | | | Currently selected value |
| field | string | | `'text'` | Display text field |
| data | Array\<{ text, value }\> | | | List data |
| data-source | object, Function, DataSource | | | Multifunctional data source |
| cancelable | boolean | | `false` | Whether the selection can be canceled |
| multiple | boolean | | `false` | Whether multiple selections are possible |
| collapsible | boolean | | `false` | Whether the group can be collapsed |
| accordion | boolean | | `false` | Whether to expand only one group at a time |
| expand-trigger | string | | `'click'` | The trigger method for expand/collapse. Optional values: `'click'` means that the entire row can be triggered by clicking, `'click-expander'` means that The Entire Row can be Triggered by Clicking only the Small Arrow (default) |
| loading-text | string | | `'Loading...'` | Text when loading. Appears only when using paging loading |
| initial-load | boolean | | `true` | Whether to load immediately during initialization |
| pageable | boolean | | `false` | Whether paging is required |
| page-size | number | | `50` | Paging size |
| remote-paging | number | | `false` | Whether to use backend paging |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert a `<u-list-view-item>`, `<u-list-view-divider>` or `<u-list-view-group>` subcomponent.

### Events

#### @before-select

Trigger before selecting an item

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selection |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.itemVM | UListViewItem | Selection subcomponent |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | UListView | Send event instance |

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Value of selection |
| senderVM | UListView | Send event instance |

#### @select

Triggered when an item is selected. In radio selection mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Changed value |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.oldItem | object | Old selection related object |
| $event.itemVM | UListViewItem | Selection subcomponent |
| $event.oldVM | UListViewItem | Old selection subcomponent |
| senderVM | UListView | Send event instance |

#### @select

Triggered when an item is selected. In multi-select mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | boolean | Select or cancel |
| $event.item | boolean | Object related to the selected item |
| $event.itemVM | boolean | The selected item subcomponent |
| $event.value | Array | Changed value |
| $event.oldValue | Array | Old value |
| $event.items | Array\<object\> | Array of objects related to all selected items |
| $event.oldItems | Array\<object\> | Array of objects related to all old selected items |
| $event.itemVMs | Array\<UListViewItem\> | Array of all selected item subcomponents |
| $event.oldVMs | Array\<UListViewItem\> | Array of all old selected item subcomponents |
| senderVM | UListView | Send event instance |

#### @change

Fires when the selection value changes. In radio selection mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selection |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.oldItem | object | Old selection related object |
| $event.itemVM | UListViewItem | Selection subcomponent |
| $event.oldVM | UListViewItem | Old selection subcomponent |
| senderVM | UListView | Send event instance |

#### @change

Fires when the selection value changes. In multi-select mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array | Values   of all selected items |
| $event.items | Array\<object\> | Array of objects related to all selected items |
| $event.itemVMs | Array\<UListViewItem\> | Array of all selected item subcomponents |
| senderVM | UListView | Send event instance |

#### @before-load

Trigger before loading

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | Prevent loading process |
| senderVM | UTableView | Send event instance |

#### @load

Triggered when loading

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | Empty |
| senderVM | UTableView | Send event instance |

#### @toggle

Triggered when a group is expanded/collapsed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.groupVM | UListViewGroup | Group component |
| senderVM | UListView | Send event instance |

### Methods

#### toggleAll(expanded)

Expand/collapse all groups

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| expanded | boolean | | Expand/collapse |

#### load()

Load with cache

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### reload()

Clear cache and reload

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

## UListViewItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | any | | | The value of this item |
| disabled | boolean | | `false` | Disable this |
| item | object | | | Related objects. When this is selected, the event thrown will pass the object, making it easier to develop |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @click

Fires when this item is clicked. Unlike the native click event, it will only fire when it is not read-only and disabled.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | Mouse event object |
| senderVM | UListView | Send event instance |

#### @before-select

Trigger before selecting this

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of this item |
| $event.item | object | The related object of this item |
| $event.itemVM | UListViewItem | This component |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | UListView | Send event instance |

## UListViewGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Displayed title |
| collapsible | boolean | | | `false` |
| expanded.sync | boolean | | `false` | Expanded/collapsed state |
| disabled | boolean | | `false` | Whether to disable. Cannot expand/collapse when disabled |

### Slots

#### (default)

Insert `<u-list-view-item>` or `<u-list-view-divider>` subcomponent.

#### Title

Custom title text.

#### Extra

On the right side you can attach content.

### Events

#### @before-toggle

Triggered before expanding/collapsing this group

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.groupVM | UListViewGroup | Group component |
| $event.preventDefault | Function | Prevent the expand/collapse process |
| senderVM | UListView | Send event instance |

#### @toggle

Triggered when a group is expanded/collapsed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.groupVM | UListViewGroup | Group component |
| senderVM | UListView | Send event instance |

## UListViewDivider API

None