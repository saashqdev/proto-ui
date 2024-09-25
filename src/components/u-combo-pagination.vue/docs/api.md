## UComboPagination API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| page.sync | Number | `1` | Current page number |
| page-size.sync | Number | `20` | Size per page |
| page-size-options | Array | `[10, 20, 50]` | List of page size options |
| total | Number | `11` | Total number of pages |
| side | Number | `2` | When there are many pages, the number always displayed on both sides |
| around | Number | `5` | When there are many pages, the number that is always displayed in the middle |
| readonly | Boolean | `false` | Whether it is read-only |
| disabled | Boolean | `false` | Whether to disable |
| show-total | Boolean | `false` | Whether to display the total number of entries |
| show-sizer | Boolean | `false` | Whether to display the option to switch the size of each page |
| show-jumper | Boolean | `false` | Whether to display the page jump input box |

### Events

#### @change

Triggered when page number changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | Number | Current page number |
| $event.oldPage | Number | Old page number |
| senderVM | UComboPagination | Send event instance |

#### @change-page-size

Triggered every time the page size changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | Number | Current page number |
| $event.oldPage | Number | Old page number |
| senderVM | UComboPagination | Send event instance |
