<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UPagination Pagination

**UI Components**, **Block Level Display**

## Example
### Basic Usage

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11"></u-pagination>
    <u-pagination :total="11" :page="6"></u-pagination>
</u-linear-layout>
```

### Display Quantity

When there are many pages, you can use `side` and `around` to set the constant display amount on both sides and in the middle.

``` html
<u-pagination :total="11" :page="6" :side="1" :around="3"></u-pagination>
```

### Read Only and Disabled

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11" readonly></u-pagination>
    <u-pagination :total="11" disabled></u-pagination>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| page.sync | number | | `1` | Current page number |
| total | number | | `11` | Total number of pages |
| side | number | | `2` | When there are many pages, the number displayed on both sides is constant |
| around | number | | `5` | When there are many pages, the number that is constantly displayed in the middle |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Events

#### @before-select

Trigger before selecting pagination

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | number | Selected page number |
| $event.oldPage | number | Old page number |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | UPagination | Send event instance |

#### @select

Triggered when pagination is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | number | Selected page number |
| $event.oldPage | number | Old page number |
| senderVM | UPagination | Send event instance |

#### @change

Triggered when page number changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | number | Current page number |
| $event.oldPage | number | Old page number |
| senderVM | UPagination | Send event instance |
