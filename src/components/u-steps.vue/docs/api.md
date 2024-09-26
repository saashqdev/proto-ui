## USteps
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Number | `0` | Current step number |
| readonly | Boolean | `false` | Whether it is read-only. You can select | if it is not read-only.
| disabled | Boolean | `false` | Whether to disable |

### Slots

#### (default)

Insert `<u-step>` subcomponent.

### Events

#### @before-select

Trigger before selecting a step

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | The value of the selected step |
| $event.oldValue | Any | Old value |
| $event.itemVM | UStep | Select step instance |
| $event.oldVM | UStep | Old selected step instance |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | USteps | Send event instance |

#### @select

Triggered when a step is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | The value of the selected step |
| $event.oldValue | Any | Old value |
| $event.itemVM | UStep | Select step instance |
| $event.oldVM | UStep | Old selected step instance |
| senderVM | USteps | Send event instance |

## UStep
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | Step name |
| disabled | Boolean | `false` | Whether to disable this tab |

### Slots

#### (default)

Insert text or HTML.

#### Title

Custom title text.
