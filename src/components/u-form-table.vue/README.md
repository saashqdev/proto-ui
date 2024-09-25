<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UFormTable Form Table

**UI Components**, **Block Level Display**

For tables used in forms, this component mainly implements basic styles to facilitate expansion in special scenarios. If you need to quickly use dynamic data, form validation and other functions, please use [UFormTableView](../u-form-table-view).

## Example
### Basic Usage

``` html
<u-form-table>
    <thead>
        <tr>
            <th width="20%">URL</th>
            <th width="20%">Service</th>
            <th width="20%">Port</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <u-input></u-input>
            </td>
            <td>
                <u-select>
                    <u-select-item>ABC</u-select-item>
                    <u-select-item>DDD</u-select-item>
                </u-select>
            </td>
            <td>
                <u-input></u-input>
            </td>
            <td>
                <u-input size="full normal"></u-input>
            </td>
        </tr>
    </tbody>
</u-form-table>
```

### Used in UForm

``` html
<u-form>
    <u-form-item label="Rules" layout="block">
        <u-form-table>
            <thead>
                <tr>
                    <th width="20%">URL</th>
                    <th width="20%">Service</th>
                    <th width="20%">Port</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <u-input></u-input>
                    </td>
                    <td>
                        <u-select>
                            <u-select-item>ABC</u-select-item>
                            <u-select-item>DDD</u-select-item>
                        </u-select>
                    </td>
                    <td>
                        <u-input></u-input>
                    </td>
                    <td>
                        <u-input size="full normal"></u-input>
                    </td>
                </tr>
            </tbody>
        </u-form-table>
    </u-form-item>
</u-form>
```

### Dynamically Add a Form

```vue
<template>
<u-linear-layout>
    <u-form-table>
        <thead>
            <tr>
                <th width="20%">URL</th>
                <th width="20%">Service</th>
                <th width="20%">Port</th>
                <th>Description</th>
                <th width="40"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in list" :key="index">
                <td><u-input v-model="item.url"></u-input></td>
                <td><u-select v-model="item.service"></u-select></td>
                <td><u-input v-model="item.port"></u-input></td>
                <td><u-input size="full normal" v-model="item.description"></u-input></td>
                <td><u-form-table-remove-button></u-form-table-remove-button></td>
            </tr>
        </tbody>
    </u-form-table>
    <u-form-table-add-button>Add Options</u-form-table-add-button>
</u-linear-layout>
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
        };
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| line | boolean | | `false` | Whether to display separation lines between cells |
| striped | boolean | | `false` | Whether table rows are displayed in zebra stripes |
| hover | boolean | | `false` | Whether table rows are highlighted when hovering |

### Slots

#### (default)

Insert `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` tags into the table.
