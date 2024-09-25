<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UComboPagination Composite Page Turner

**UI Components**, **Block Level Display**

Based on UPagination, functions such as displaying the total number of pages, switching the size of each page, and page jumps are added.

## Example
### Basic Usage

Using the attributes `show-total`, `show-sizer`, and `show-jumper`, you can correspondingly enable the display of the total number of pages, switch the size of each page, and page jump functions.

``` html
<u-combo-pagination :total-items="75" show-total show-sizer show-jumper></u-combo-pagination>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| page.sync | number | | `1` | Current page number |
| page-size.sync | number | | `20` | Size per page |
| page-size-options | Array | | `[10, 20, 50]` | List of page size options |
| total | number | | `11` | Total number of pages |
| side | number | | `2` | When there are many pages, the number displayed on both sides is constant |
| around | number | | `5` | When there are many pages, the number that is constantly displayed in the middle |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |
| show-total | boolean | | `false` | Whether to display the total number of entries |
| show-sizer | boolean | | `false` | Whether to display the option to switch the size of each page |
| show-jumper | boolean | | `false` | Whether to display the page jump input box |

### Events

#### @change

Triggered when page number changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | number | Current page number |
| $event.oldPage | number | Old page number |
| senderVM | UComboPagination | Send event instance |

#### @change-page-size

Triggered every time the page size changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | number | Current page number |
| $event.oldPage | number | Old page number |
| senderVM | UComboPagination | Send event instance |
