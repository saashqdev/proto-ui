<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UButton Button

**UI Components**, **Route Links**, **Inline Display**

## Example
### Basic Usage

``` html
<u-button>Button</u-button>
```

### Disable

``` html
<u-button disabled>Disabled</u-button>
```

### Link

``` html
<u-linear-layout>
    <u-button href="https://kubevue.github.io" target="_blank">Href</u-button>
    <u-button to="/proto-ui/u-link">To</u-button>
    <u-button href="https://kubevue.github.io" disabled>Disabled</u-button>
</u-linear-layout>
```

### Display method

``` html
<u-linear-layout direction="vertical" gap="small">
    <u-button display="inline">Inline Button (default)</u-button> aligned with text
    <u-button display="block">Block Level Button</u-button>
</u-linear-layout>
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
