<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UCrumb Breadcrumbs

**UI Components**, **Route Links**, **Block Level Display**

## Example
### Basic Usage

``` html
<u-crumb>
    <u-crumb-item to="/">Home</u-crumb-item>
    <u-crumb-item to="/proto-ui">Prototype Component</u-crumb-item>
    <u-crumb-item type="text">Navigation</u-crumb-item>
    <u-crumb-item type="text" to="/proto-ui/u-crumb">Breadcrumbs</u-crumb-item>
</u-crumb>
<u-crumb>
    <u-crumb-item to="/">Home</u-crumb-item>
    <u-crumb-item to="/proto-ui">Prototype Component</u-crumb-item>
    <u-crumb-item disabled>Navigation</u-crumb-item>
    <u-crumb-item type="text" to="/proto-ui/u-crumb">Breadcrumbs</u-crumb-item>
</u-crumb>
```

## UCrumb API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| None | | | | |

### Slots

#### (default)

Inserts the `<u-crumb-item>` child component.

##UCrumbItemAPI
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| type | string | | `'link'` | Type. Optional value: `'link'` indicates a link, which is clickable. `'text'` is only displayed as the default color text and cannot be clicked. |
| href | string | | | Link address |
| target | string | | | (native attribute) |
| to | string, Location | | | Requires vue-router, same as `to` attribute of `<router-link>`. Can be a string or an object describing the target location. |
| replace | boolean | | `false` | Requires vue-router, the same as the `replace` attribute of `<router-link>`. If `true`, when clicked, `router.replace()` will be called instead of `router.push()`, so no `history` record will be left after navigation. |
| append | boolean | | `false` | Requires vue-router, the same as the `append` attribute of `<router-link>`. If `true`, append the path of `to` after the current path. |
| disabled | boolean | | `false` | Whether it is not clickable. If `true`, the `click` event will not be responded to. |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @$listeners

Listen for events on all `<a>` elements.

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @click

Fires when a link is clicked. Unlike the native click event, it will only fire in a non-disabled state.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | Mouse event object |
| senderVM | UCrumb | Send event instance |

#### @before-navigate

Triggered before switching routes using router related attributes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string, Location | The value of the `to` attribute |
| $event.replace | boolean | The value of the `replace` attribute |
| $event.append | boolean | The value of the `append` attribute |
| $event.preventDefault | Function | Prevent switching process |
| senderVM | UCrumb | Send event instance |

#### @navigate

Triggered when switching routes using router related attributes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string, Location | The value of the `to` attribute |
| $event.replace | boolean | The value of the `replace` attribute |
| $event.append | boolean | The value of the `append` attribute |
| senderVM | UCrumb | Send event instance |
