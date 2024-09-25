<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# ULink Link

**UI Components**, **Route Links**, **Inline Display**

## Example
### Basic Usage

``` html
<u-link href="#">Link</u-link>&nbsp;<u-link href="#">View details</u-link>
```

### Disable

``` html
<u-link href="#" disabled>Disabled</u-link>
```

### Target

Using the `href` and `target` attributes, you can directly implement the functions corresponding to the `<a>` element. Using `to`, `replace` and `append` requires the introduction of vue-router, which have the same function as the corresponding properties in the `<router-link>` component.

``` html
<u-link href="https://kubevue.github.io" target="_blank">Href</u-link>&nbsp;
<u-link to="/proto-ui/u-button">Router</u-link>
```

### Display Method

``` html
<u-link href="#" display="block">Here are a Few</u-link>
<u-link href="#" display="block">Block Level</u-link>
<u-link href="#" display="block">Link Component</u-link>
<u-link href="#" display="inline">These are a Few</u-link>
<u-link href="#">Inline (default)</u-link>
<u-link href="#" display="inline">Link Component</u-link>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| href | string | | | Link address |
| target | string | | | (native attribute) |
| to | string, Location | | | Requires vue-router, same as `to` attribute of `<router-link>`. Can be a string or an object describing the target location. |
| replace | boolean | | `false` | Requires vue-router, the same as the `replace` attribute of `<router-link>`. If `true`, when clicked, `router.replace()` will be called instead of `router.push()`, so no `history` record will be left after navigation. |
| append | boolean | | `false` | Requires vue-router, the same as the `append` attribute of `<router-link>`. If `true`, append the path of `to` after the current path. |
| disabled | boolean | | `false` | Whether to disable. When disabled, the `click` event will not be responded to. |
| display | string | | `'inline'` | Display mode. Optional values: `'inline'`, `'block'` |

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
| senderVM | Vue | Send event instance |

#### @before-navigate

Triggered before switching routes using router related attributes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string, Location | The value of the `to` attribute |
| $event.replace | boolean | The value of the `replace` attribute |
| $event.append | boolean | The value of the `append` attribute |
| $event.preventDefault | Function | Prevent switching process |
| senderVM | Vue | Send event instance |

#### @navigate

Triggered when switching routes using router related attributes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string, Location | The value of the `to` attribute |
| $event.replace | boolean | The value of the `replace` attribute |
| $event.append | boolean | The value of the `append` attribute |
| senderVM | Vue | Send event instance |
