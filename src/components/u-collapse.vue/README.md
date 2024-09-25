<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UCollapse Collapse Panel

**UI Components**, **Block Level Display**

## Example
### Basic Usage

``` html
<u-collapse>
    <u-collapse-item title="Panel 1">Content1</u-collapse-item>
    <u-collapse-item title="Panel 2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="Panel 3" disabled>Content3</u-collapse-item>
</u-collapse>
```

### Accordian Mode

``` html
<u-collapse accordion>
    <u-collapse-item title="Panel 1">Content1</u-collapse-item>
    <u-collapse-item title="Panel 2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="Panel 3">Content3</u-collapse-item>
</u-collapse>
```

### Trigger Method

#### Can be Triggered by Clicking on the Entire Row (default)

<u-collapse expand-trigger="click">
    <u-collapse-item title="Panel 1">Content1</u-collapse-item>
    <u-collapse-item title="Panel 2">Content2</u-collapse-item>
    <u-collapse-item title="Panel 3">Content3</u-collapse-item>
</u-collapse>

#### Only Triggered when the Small Arrow is Clicked

<u-collapse expand-trigger="click-expander">
    <u-collapse-item title="Panel 1">Content1</u-collapse-item>
    <u-collapse-item title="Panel 2">Content2</u-collapse-item>
    <u-collapse-item title="Panel 3">Content3</u-collapse-item>
</u-collapse>

## UCollapse API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| accordion | boolean | | `false` | Whether to expand only one panel at a time |
| expand-trigger | string | | `'click'` | The trigger method for expand/collapse. Optional values: `'click'` means that the entire row can be triggered when clicked, `'click-expander'` means that it is triggered only when the small arrow is clicked |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert `<u-collapse-item>` subcomponent.

### Events

#### @toggle

Triggered when a panel is expanded/collapsed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.itemVM | UCollapseItem | Panel component |

### Methods

#### toggleAll(expanded)

Expand/collapse all panels

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| expanded | boolean | | Expand/collapse |

## UCollapseItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Displayed title |
| expanded.sync | boolean | | `false` | Expanded/collapsed state |
| disabled | boolean | | `false` | Whether to disable. Cannot expand/collapse when disabled |

### Slots

#### (default)

Insert text or HTML.

#### Title

Custom title text.

#### Extra

On the right side you can attach content.

### Events

#### @before-toggle

Triggered before expanding/collapsing this panel

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.itemVM | UCollapseItem | Panel component |
| $event.preventDefault | Function | Prevent the expand/collapse process |
| senderVM | Vue | Send event instance |

#### @toggle

Triggered when a panel is expanded/collapsed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.itemVM | UCollapseItem | Panel component |
| senderVM | Vue | Send event instance |