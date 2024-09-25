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

### Dynamically add a form

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
