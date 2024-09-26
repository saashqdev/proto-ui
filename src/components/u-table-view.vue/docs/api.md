## UTableView

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | Table title |
| title-alignment | String | `'center'` | Table title alignment |
| border | Boolean | | Whether to display the border |
| line | Boolean | `false` | Whether to display separator lines between cells |
| striped | Boolean | `false` | Whether the table rows are displayed with zebra stripes |
| hover | Boolean | `false` | Whether the table row is highlighted when hovering |
| show-head | Boolean | `true` | Whether to display the table header |
| loading | Boolean | | Manually set whether loading is in progress |
| loading-text | String | `'Loading'` | The text of the loading text |
| error | Boolean | | Manually set whether loading failed |
| error-text | String | `'Loading failed, please try again'` | Text when loading failed |
| empty-text | String | `'No data yet'` | Text when there is no data |
| **Data Props/Attrs** |
| data | Array\<{ \[field\]: string, ... }\> | | Tabular data |
| data-source | Object, Function, DataSource | | Multi-function data source |
| initial-load | Boolean | `true` | Whether to load immediately at the initialization |
| pageable | Boolean | `false` | Whether paging is required |
| page-size.sync | Number | `20` | Paging size |
| page-size-options | Array | `[10, 20, 50]` | List of page size options |
| show-total | Boolean | `false` | Whether to display the total number of entries |
| show-sizer | Boolean | `false` | Whether to display the option to switch the size of each page |
| show-jumper | Boolean | `false` | Whether to display the page jump input box |
| sorting.sync | Object<{ field: string, order: string, compare: Function }> | `{ field: undefined, order: 'desc' }` | Current sorting field and order |
| default-order | String | `'asc'` | The sort order of all columns when first clicked |
| filtering.sync | Object | | Filter item |
| remote-paging | Boolean | `false` | Whether to use backend paging |
| remote-sorting | Boolean | `false` | Whether to use backend sorting |
| remote-filtering | Boolean | `false` | Whether to use backend filtering |
| **Selection Props/Attrs** |
| value-field | String | | In single-select and multi-select operations, the field that specifies the unique value of the data |
| value.sync, v-model | Any | | The currently selected value |
| values.sync | Array | | Values of multiple selections |
| selectable | Boolean | `false` | Whether the row can be selected |
| cancelable | Boolean | `false` | Whether the selection can be canceled |
| readonly | Boolean | `false` | Read-only |
| disabled | Boolean | `false` | Disabled |
| **Other Props/Attrs** |
| accordion | Boolean | `false` | When there is an `expander` column, whether to collapse other rows when expanding a row |
| resizable | Boolean | `false` | Whether the column width can be adjusted |
| resize-remaining | Boolean | `'sequence'` | Adjust the column width effect. Optional values: `sequence` means keeping the total width unchanged, and the next column will make up the width first; `average` means keeping the total width unchanged, and all the following columns will make up the width evenly; `none` means no processing is done, and the table width changes. |


### Slots

#### (default)

Insert the `<u-table-view-column>` child component into the table.

#### Loading

Customization loading.

#### Error

Custom error.

#### Empty

Custom empty state.

### Data Events

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

#### @before-page

Triggered before switching pages

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.size | Number | Paging size |
| $event.oldSize | Number | Paging size |
| $event.number | Number | Current page number |
| $event.oldNumber | Number | Old page number |
| $event.preventDefault | Function | Prevent paging process from switching |
| senderVM | UTableView | Send event instance |

#### @page

Triggered when switching pages or changing page size

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.size | Number | Paging size |
| $event.oldSize | Number | Paging size |
| $event.number | Number | Current page number |
| $event.oldNumber | Number | Old page number |
| senderVM | UTableView | Send event instance |

#### @before-sort

Triggered before sorting

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | String | Sort order |
| $event.order | String | Sort field |
| $event.compare | Function | Sorting comparison function |
| $event.preventDefault | Function | Prevent the sorting process |
| senderVM | UTableView | Send event instance |

#### @sort

Triggered when sorting

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | String | Sort order |
| $event.order | String | Sort field |
| $event.compare | Function | Sorting comparison function |
| senderVM | UTableView | Send event instance |

#### @before-filter

Trigger before filtering

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | Object | Filter object |
| $event.preventDefault | Function | Prevent filtering process |
| senderVM | UTableView | Send event instance |

#### @filter

Triggered when filtering

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Object | Filter object |
| senderVM | UTableView | Send event instance |

### Selection Events

#### @before-select

Triggered before an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | Value of the selected row |
| $event.oldValue | Any | Old value |
| $event.item | Object | Object related to the selected row |
| $event.oldItem | Object | Old selected row related object |
| $event.preventDefault | Function | Prevent the selection process |
| senderVM | UTableView | Send event instance |

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | Select the row's value |
| senderVM | UTableView | Send event instance |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | The changed value |
| $event.oldValue | Any | Old value |
| $event.item | Object | Object related to the selected row |
| $event.oldItem | Object | Old selected row related object |
| $event.selectedItem | Object | The object of the final selected row. Different from `$event.item` in the case of `cancelable` |
| senderVM | UTableView | Send event instance |

#### @check

In multi-select mode, triggered when a node is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.checked | Boolean | Checked state |
| $event.values   | Array | Selected values   |
| $event.oldValues   | Array | Old values   |
| $event.item | Object | Object related to the selected row |
| senderVM | UTableView | Send event instance |

#### @change

Fired when the selected value changes

In single selection mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | Value of the selected row |
| $event.oldValue | Any | Old value |
| $event.item | Object | Object related to the selected row |
| $event.oldItem | Object | Old selected row related object |
| senderVM | UTableView | Send event instance |

In multiple selection mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.values   | Array | The changed value |
| $event.oldValues   | Array | Old values   |
| senderVM | UTableView | Send event instance |

#### @resize

Triggered when the column width is adjusted

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.columnVM | UTableColumnVM | The adjusted column instance |
| $event.index | Number | Column index |
| width | Number | Adjusted width |
| oldWidth | Number | Width before adjustment |

### Methods

#### load()

Loading with cache

| Param | Type | Description |
| ----- | ---- | ----------- |

#### reload()

Clear cache and reload

| Param | Type | Description |
| ----- | ---- | ----------- |

## UTableViewColumn

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | Column title |
| field | String | | Field name in data |
| width | String, Number | | Specify the width of the column, which can be a number or a percentage |
| ellipsis | Boolean | `false` | Whether to omit the display. By default, the text will wrap when it exceeds the limit |
| formatter | String, Object, Function, Formatter | `'placeholder'` | Formatter |
| - |
| sortable | Boolean | `false` | Whether the column can be sorted |
| default-order | String | `'asc'` | The sort order when the column is first clicked |
| filters | Array\<{ text: string, value: any }\> | `'asc'` | The sort order of the column when it is first clicked |
| hidden | Boolean | `false` | Is it hidden |
| type | String | | Column type. Optional values: `index` indicates a serial column, `radio` indicates a single-select column, `checkbox` indicates a multiple-select column, and `expander` indicates an expanded column. |
| start-index | Number | `1` | Starting number when `type="index"` |

### Slots

#### (default)

Insert the `<u-table-view-filters>` child component into the table column.

#### Cell

Customize the display of cell data.

| Prop/Attr | Type | Description |
| --------- | ---- | ----------- |
| item | Object | Current item in the loop |
| value | Any | The value of field in item |
| columnVM | String | The column component instance |
| rowIndex | Number | The index of the row |
| columnIndex | Number | Index of the column |

#### Title

Customize the title.

| Prop/Attr | Type | Description |
| --------- | ---- | ----------- |
| columnVM | String | The column component instance |
| columnIndex | Number | Index of the column |

#### Expand-Content

Expand the contents of a column

| Prop/Attr | Type | Description |
| --------- | ---- | ----------- |
| item | Object | Current item in the loop |
| value | Any | The value of field in item |
| columnVM | String | The column component instance |
| rowIndex | Number | The index of the row |