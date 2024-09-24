<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# FForbidden Disable

Disable some of the browser's default functions and shortcut keys.

## Example
### Basic Usage

In the following example, the right-click menu, text selection, copy function, Save As key, and Developer Tools key are disabled.

``` html
<f-forbidden contextmenu select copy save-key devtools-key></f-forbidden>
```

## API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| contextmenu | boolean | | `false` | Whether to disable the pop-up right-click menu |
| select | boolean | | `false` | Whether to prohibit text selection |
| copy | boolean | | `false` | Whether to prohibit copying |
| save-key | boolean | | `false` | Whether to prohibit saving as key |
| devtools-key | boolean | | `false` | Whether to disable the developer tools key |
| senderVM | FForbidden | | `'Send event instance'` | |

### Events

#### @contextmenu

Triggered when the right-click menu pops up

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | Mouse event object |
| senderVM | FForbidden | Sending event instance |

#### @select

Fires when text is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | Focus event object |
| senderVM | FForbidden | Sending event instance |

#### @copy

Triggered when copying

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | ClipboardEvent | Clipboard event object |
| senderVM | FForbidden | Sending event instance |

#### @save-key

Triggered when the Save button is pressed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | KeyboardEvent | Keyboard event object |
| senderVM | FForbidden | Sending event instance |

#### @devtools-key

Fired when the developer tools key is pressed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | KeyboardEvent | Keyboard event object |
| senderVM | FForbidden | Sending event instance |