<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# MDynamic dynamic list

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | Array | | | data |
| dynamic | boolean | | `true` | Whether items can be added/removed dynamically |
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
| senderVM | MDynamic | Send event instance |

#### @add

Triggered when added

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | Added items |
| $event.index | number | Added index |
| $event.data | Array | Current data |
| senderVM | MDynamic | Send event instance |

#### @before-remove

Triggered before deletion

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | Deleted item |
| $event.index | number | Deleted index |
| $event.data | Array | Current data |
| $event.preventDefault | Function | Prevent deletion process |
| senderVM | MDynamic | Send event instance |

#### @remove

Triggered when deleted

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | Deleted item |
| $event.index | number | Deleted index |
| $event.data | Array | Current data |
| senderVM | MDynamic | Send event instance |

#### @splice

Triggered when quantity changes (add/delete)

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | Changed item |
| $event.index | number | Changed index |
| $event.data | Array | Current data |
| senderVM | MDynamic | Send event instance |
