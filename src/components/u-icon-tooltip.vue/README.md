<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UIconTooltip icon tip

**UI Components**, **Popup Layer**, **Inline Display**

The combination of icon and `<u-tooltip>`.

## Example
The combination of icon and `<u-tooltip>`.

### Basic Usage

``` html
Tip next to the text <u-icon-tooltip>This is the tip content</u-icon-tooltip>
```

### Switch Type

``` html
Information <u-icon-tooltip>This is the prompt content</u-icon-tooltip><br>
Help <u-icon-tooltip type="help">This is the prompt content</u-icon-tooltip><br>
Details <u-icon-tooltip type="detail">This is the prompt content</u-icon-tooltip>
```

### Popup Location

``` html
<u-linear-layout>
    <span>
        top
        <u-icon-tooltip placement="top">Tooltip</u-icon-tooltip>
    </span>
    <span>
        left
        <u-icon-tooltip placement="left">Tooltip</u-icon-tooltip>
    </span>
    <span>
        right
        <u-icon-tooltip placement="right">Tooltip</u-icon-tooltip>
    </span>
    <span>
        bottom
        <u-icon-tooltip placement="bottom">Tooltip</u-icon-tooltip>
    </span>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| type | string | | `'info'` | Icon type. Optional values: `'info'`, `'help'`, `'detail'` |
| size | string | | `'normal'` | Prompt size. Optional values: `'mini'`, `'normal'`, `'large'` |
| opened.sync | boolean | | `false` | Popup/closed status |
| trigger | string | | `'hover'` | How to trigger tooltips. Optional values: `'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | string | | `'bottom'` | The popup direction of the tooltip. Optional values: `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start' `, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| hide-delay | number | | `0` | Delay time for prompt content to disappear, unit is ms |
| offset | string | | `'0'` | Pop-up layer offset, such as: '10', '10px 10px', '10% 10%', the first value represents horizontal offset, the second value represents vertical Displacement, the default unit is `px` |
| follow-cursor | boolean, number, object | | `false` | Whether to follow the mouse |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert the content that needs to pop up.

### Events

#### @before-open

Triggered before pop-up.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | Prevent pop-up process |
| senderVM | UTooltip | Send event instance |

#### @open

Fired on popup.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | Empty |
| senderVM | UTooltip | Send event instance |

#### @before-close

Triggered before hiding.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | Prevent hidden process |
| senderVM | UTooltip | Send event instance |

#### @close

Triggered when hidden.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | Empty |
| senderVM | UTooltip | Send event instance |

#### @before-toggle

@deprecated

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @toggle

@deprecated

| Param | Type | Description |
| ----- | ---- | ----------- |

### Methods

#### open()

Pop up instance.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### close()

Shut down the instance.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
