<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UFormTableView Table Form View

**UI Components**, **Form Validators**, **Block Level Display**

This component is used to use complex functions such as form validation and dynamic data in forms.

## Example
### Basic Usage

``` vue
<template>
<u-form-table-view :data="list">
    <u-form-table-view-column title="URL" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Service" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-select size="huge full" v-model="item.service" :data="services"></u-select>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Port" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Description">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
};
</script>
```

### Use in Form

``` vue
<template>
<u-form>
    <u-form-item label="规则" layout="block">
        <u-form-table-view :data="list">
            <u-form-table-view-column title="URL" width="20%">
                <template slot="cell" slot-scope="{ item }">
                    <u-input size="huge full" v-model="item.url"></u-input>
                </template>
            </u-form-table-view-column>
            <u-form-table-view-column title="Service" width="20%">
                <template slot="cell" slot-scope="{ item }">
                    <u-select size="huge full" v-model="item.service" :data="services"></u-select>
                </template>
            </u-form-table-view-column>
            <u-form-table-view-column title="Port" width="20%">
                <template slot="cell" slot-scope="{ item }">
                    <u-input size="huge full" v-model="item.port"></u-input>
                </template>
            </u-form-table-view-column>
            <u-form-table-view-column title="Description">
                <template slot="cell" slot-scope="{ item }">
                    <u-input size="huge full" v-model="item.description"></u-input>
                </template>
            </u-form-table-view-column>
        </u-form-table-view>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
};
</script>
```

### Dynamic Table

``` vue
<template>
<u-form-table-view :data="list" dynamic :get-default-item="getDefaultItem">
    <u-form-table-view-column title="URL" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Service" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-select size="huge full" v-model="item.service" :data="services"></u-select>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Port" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Description">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
    methods: {
        getDefaultItem() {
            return {
                url: 'xxx',
                service: this.services[0].value,
                port: undefined,
                description: '',
            };
        },
    },
};
</script>
```

#### Limited Quantity

By setting the `max-count` attribute, up to 5 items can be added to the table below.

``` vue
<template>
<u-form-table-view :data="list" dynamic :get-default-item="getDefaultItem" :max-count="5">
    <u-form-table-view-column title="URL" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Service" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-select size="huge full" v-model="item.service" :data="services"></u-select>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Port" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Description">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
    methods: {
        getDefaultItem() {
            return {
                url: 'xxx',
                service: this.services[0].value,
                port: undefined,
                description: '',
            };
        },
    },
};
</script>
```

### Form Validation

``` vue
<template>
<u-form-table-view :data="list" dynamic :get-default-item="getDefaultItem">
    <u-form-table-view-column title="URL" width="20%"
        rules="required | pattern(/^[a-zA-Z0-9/\s]+$/)">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Service" width="20%"
        rules="required">
        <template slot="cell" slot-scope="{ item }">
            <u-select size="huge full" v-model="item.service" :data="services"></u-select>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Port" width="20%"
        rules="required | integer | range(1,65535)">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Description">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
    methods: {
        getDefaultItem() {
            return {
                url: 'xxx',
                service: this.services[0].value,
                port: undefined,
                description: '',
            };
        },
    },
};
</script>
```

Note that when adding column slots, you must use `slot-scope` or the new `#` method in Vue 2.6.x, otherwise there may be problems with template rendering.

``` vue
<template>
<u-form-table-view :data="[{}]" :getDefaultItem="getDefaultItem">
    <u-form-table-view-column title="URL" width="20%"
        rules="required | pattern(/^[a-zA-Z0-9/\s]+$/)">
        <template #cell>
            <u-input size="huge full" v-model="cluster.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Service" width="20%"
        rules="required">
        <template #cell>
            <u-select size="huge full" v-model="cluster.service" :data="services"></u-select>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Port" width="20%"
        rules="required | integer | range(1,65535)">
        <template #cell>
            <u-input size="huge full" v-model.number="cluster.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="Description">
        <template #cell>
            <u-input size="huge full" v-model="cluster.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            cluster: {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            },
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
    methods: {
        getDefaultItem() {
            return {
                url: 'xxx',
                service: this.services[0].value,
                port: undefined,
                description: '',
            };
        },
    },
};
</script>
```

## UFormTableView API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| border | boolean | | | Whether there is a border |
| data | Array | | | Data |
| dynamic | boolean | | `false` | Whether items can be added/removed dynamically |
| get-default-item | Function | | | Pass in the method to get the default item |
| initial-add | boolean | | `true` | Whether to automatically add items if the initial number of items in `data` is less than `min-count` |
| min-count | number | | `1` | Minimum number of items |
| max-count | number | | `Infinity` | Maximum number of items |

### Slots

#### (default)

Add text or HTML.

### Events

#### @before-add

Trigger before adding

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | Added items |
| $event.index | number | Added index |
| $event.data | Array | Current data |
| $event.preventDefault | Function | Prevent adding process |
| senderVM | UFormTableView | Send event instance |

#### @add

Triggered when added

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | Added items |
| $event.index | number | Added index |
| $event.data | Array | Current data |
| senderVM | UFormTableView | Send event instance |

#### @before-remove

Triggered before deletion

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | Deleted item |
| $event.index | number | Deleted index |
| $event.data | Array | Current data |
| $event.preventDefault | Function | Prevent deletion process |
| senderVM | UFormTableView | Send event instance |

#### @remove

Triggered when deleted

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | Deleted item |
| $event.index | number | Deleted index |
| $event.data | Array | Current data |
| senderVM | UFormTableView | Send event instance |

#### @splice

Triggered when quantity changes (add/delete)

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | Changed item |
| $event.index | number | Changed index |
| $event.data | Array | Current data |
| senderVM | UFormTableView | Send event instance |

## UFormTableViewColumn API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Column title |
| field | string | | | Field name in data |
| width | string, number | | | Specify the width of the column, which can be a number or a percentage |
| ellipsis | boolean | | `false` | Whether to omit display. By default, the text will wrap when it exceeds |
| formatter | string, object, Function, Formatter | | `'placeholder'` | Formatter |
| hidden | boolean | | `false` | Whether to hide |
| start-index | number | | `1` | The starting index when `type="index"` |
| **Validator Props/Attrs** | | | | |
| label | string | | | Label. Composition for prompt messages |
| muted | string | | | Whether to be silent during verification. Optional values: `'message'` means to silence only the message prompt, `'all'` to silence both the message prompt and the red box prompt |
| rules | string, Array | | | Validation rules. The abbreviated format is a string type, the full format or mixed format is an array type |
| ignore-validation | boolean | | `false` | Ignore validation |
| ignore-rules | boolean | | `false` | Ignore validation rules. Deprecated, same as `ignore-validation` |
| validating-options | object | | | Validation auxiliary object. Used in Rule's `validate` method. Additional `{ data: currentData, item, rowIndex }` will be injected into the table |
| validating-value | any | | | Temporarily modify the validation value |
| validating-process | Function | | | Preprocess the value before validation |

### Slots

#### (default)

Insert a `cell` slot into a table column.

#### Cell

Customize cell data display.

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | The current item in the loop |
| value | any | The value corresponding to the field field in item |
| columnVM | string | The column component instance |
| rowIndex | number | Row index |
| columnIndex | number | Index of column |

#### Title

Customize the title.

| Prop | Type | Description |
| ---- | ---- | ----------- |
| columnVM | string | The column component instance |
| columnIndex | number | Index of column |

#### expand-content

Expand column contents

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | The current item in the loop |
| value | any | The value corresponding to the field field in item |
| columnVM | string | The column component instance |
| rowIndex | number | Row index |
| columnIndex | number | Index of column |
