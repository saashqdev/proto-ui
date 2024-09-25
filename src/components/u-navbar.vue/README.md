<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UNavbar Navigation Bar

**UI Components**, **Route Links**, **Block Level Display**

Usually used for the navigation menu at the top of the page to place logo, navigation links, user information, etc.

## Example
### Basic Usage

The following shows some basic features of the navigation bar, such as configuring links, adding dividers, disabling options, etc.

``` html
<u-navbar>
    <u-navbar-item to="/components">Components</u-navbar-item>
    <u-navbar-item>Concept</u-navbar-item>
    <u-navbar-item disabled>Command</u-navbar-item>
    <u-navbar-divider></u-navbar-divider>
    <u-navbar-item>Configuration</u-navbar-item>
    <u-navbar-item href="https://github.com/saashqdev/proto-ui">GitHub</u-navbar-item>
</u-navbar>
```

### Select Control

Use the `router` attribute switch to decide whether the navigation bar selection is directly bound to the route, or whether it is controlled by the `value` attribute.

#### Routing Mode

The default is this mode, that is, the navigation bar selection is directly bound to the route through the `to` attribute, so there is no need to operate additional variables. In this mode, each `<u-navbar-item>` is similar to VueRouter's `<router-link>`.

``` html
<u-navbar>
    <u-navbar-item to="/components">Components</u-navbar-item>
    <u-navbar-item>Concept</u-navbar-item>
    <u-navbar-item disabled>Command</u-navbar-item>
    <u-navbar-item href="https://github.com/saashqdev/proto-ui">GitHub</u-navbar-item>
</u-navbar>
```

#### Value Mode

When the `router` attribute is set to `false`, the navigation bar selection is controlled by the `value` attribute. Similar to the commonly used `<u-select>` operation, `value` can use `v-model` or `.sync` for Two-Way Binding.

``` html
<u-navbar value="Concepts" :router="false">
    <u-navbar-item value="Components">Components</u-navbar-item>
    <u-navbar-item value="Concepts">Concept</u-navbar-item>
    <u-navbar-item value="Directives" disabled>Instructions</u-navbar-item>
    <u-navbar-item value="GitHub">GitHub</u-navbar-item>
</u-navbar>
```

### Layout
#### Left and Right Slots

The content of the navigation bar has three areas: left, middle and right.

Through the two slots `left` and `right`, layout can be quickly carried out.

``` html
<u-navbar>
    <u-logo slot="left"></u-logo>
    <u-navbar-item to="/components">Components</u-navbar-item>
    <u-navbar-item>Concept</u-navbar-item>
    <u-navbar-item disabled>Command</u-navbar-item>
    <u-navbar-item slot="right" href="https://github.com/saashqdev/proto-ui" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item>
</u-navbar>
```

#### Alignment

By setting the `alignment` property, you can adjust the alignment of the middle area.

``` html
<u-linear-layout direction="vertical">
    <u-navbar alignment="left">
        <u-logo slot="left"></u-logo>
        <u-navbar-item>Multi-Level Menu</u-navbar-item>
        <u-navbar-item>Concept</u-navbar-item>
        <u-navbar-item to="/proto-ui">Components</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/saashqdev/proto-ui" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item>
    </u-navbar>
    <u-navbar alignment="center">
        <u-logo slot="left"></u-logo>
        <u-navbar-item>Multi-Level Menu</u-navbar-item>
        <u-navbar-item>Concept</u-navbar-item>
        <u-navbar-item to="/proto-ui">Components</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/saashqdev/proto-ui" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item>
    </u-navbar>
    <u-navbar alignment="right">
        <u-logo slot="left"></u-logo>
        <u-navbar-item>Multi-Level Menu</u-navbar-item>
        <u-navbar-item>Concept</u-navbar-item>
        <u-navbar-item to="/proto-ui">Components</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/saashqdev/proto-ui" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item>
    </u-navbar>
</u-linear-layout>
```

### Dropdown Menus and Selections

Use `<u-navbar-menu>` with `<u-navbar-dropdown>` to implement the drop-down menu, and use `<u-navbar-select>` to implement the drop-down selection.

``` html
<u-navbar>
    <u-navbar-item to="/components">Components</u-navbar-item>
    <u-navbar-item disabled>Command</u-navbar-item>
    <u-navbar-dropdown title="Drop-Down Menu">
        <u-navbar-menu>
            <u-navbar-menu-item>Basic</u-navbar-menu-item>
            <u-navbar-menu-item>Layout</u-navbar-menu-item>
            <u-navbar-menu-item>Navigation
                <u-navbar-menu slot="sub">
                    <u-navbar-menu-item>Navbar</u-navbar-menu-item>
                    <u-navbar-menu-item>Sidebar</u-navbar-menu-item>
                    <u-navbar-menu-item>Menu</u-navbar-menu-item>
                </u-navbar-menu>
            </u-navbar-menu-item>
        </u-navbar-menu>
    </u-navbar-dropdown>
    <u-navbar-select>
        <u-navbar-select-item>Please select</u-navbar-select-item>
        <u-navbar-select-item>Chinese</u-navbar-select-item>
        <u-navbar-select-item>English</u-navbar-select-item>
        <u-navbar-select-item>Français</u-navbar-select-item>
        <u-navbar-select-item>Русский</u-navbar-select-item>
    </u-navbar-select>
</u-navbar>
```

### Color Extension

``` html
<u-linear-layout direction="vertical">
    <u-navbar value="3" :router="false">
        <u-navbar-item value="1">Multi-Level Menu</u-navbar-item>
        <u-navbar-item value="2">Concept</u-navbar-item>
        <u-navbar-item value="3">Components</u-navbar-item>
    </u-navbar>
    <u-navbar value="3" :router="false" color="inverse">
        <u-navbar-item value="1">Multi-Level Menu</u-navbar-item>
        <u-navbar-item value="2">Concept</u-navbar-item>
        <u-navbar-item value="3">Components</u-navbar-item>
    </u-navbar>
</u-linear-layout>
```

## UNavbar API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| router | boolean | | `true` | Whether to control the selection based on vue-router |
| value.sync, v-model | any | | | Currently selected value |
| field | string | | `'text'` | Display text field |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

In the middle area, subcomponents such as `<u-navbar-item>`, `<u-navbar-divider>`, or other HTML can be inserted.

#### Left

Left area.

#### Right

Right area.

### Events

#### @click

Fires when this item is clicked. Unlike the native click event, it will only fire when it is not read-only and disabled.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | Mouse event object |
| senderVM | Vue | Send event instance |

#### @before-select

Trigger before selecting an item

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selection |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.itemVM | NavbarItem | Selection subcomponent |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | Vue | Send event instance |

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Value of selection |
| senderVM | Vue | Send event instance |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Changed value |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.oldItem | object | Old selection related object |
| $event.itemVM | UNavbarItem | Selection subcomponent |
| $event.oldVM | UNavbarItem | Old selection subcomponent |
| senderVM | Vue | Send event instance |

#### @change

Fires when the selection value changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selection |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.oldItem | object | Old selection related object |
| $event.itemVM | UNavbarItem | Selection subcomponent |
| $event.oldVM | UNavbarItem | Old selection subcomponent |
| senderVM | UNavbar | Send event instance |

## UNavbarItem API
### Props/Attrs
| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | any | | | The value of this item |
| disabled | boolean | | `false` | Disable this |
| item | object | | | Related objects. When this is selected, the event thrown will pass the object, making it easier to develop |
| href | string | | | Link address |
| target | string | | | Open method |
| to | string, Location | | | Requires vue-router, same as `to` attribute of `<router-link>`. Can be a string or an object describing the target location. |
| replace | boolean | | `false` | Requires vue-router, the same as the `replace` attribute of `<router-link>`. If `true`, when clicked, `router.replace()` will be called instead of `router.push()`, so no `history` record will be left after navigation. |
| exact | boolean | | `false` | Requires vue-router, same as `<router-link>`'s `exact` attribute. It will be highlighted only if it is completely consistent with the route. |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @before-select

Trigger before selecting this

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of this item |
| $event.item | object | The related object of this item |
| $event.itemVM | UNavbarItem | This component |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | Vue | Send event instance |

#### @before-navigate

Triggered before switching routes using router related attributes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string, Location | The value of the `to` attribute |
| $event.replace | boolean | The value of the `replace` attribute |
| $event.exact | boolean | The value of the `exact` attribute |
| $event.preventDefault | Function | Prevent switching process |
| senderVM | Vue | Send event instance |

#### @navigate

Triggered when switching routes using router related attributes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string, Location | The value of the `to` attribute |
| $event.replace | boolean | The value of the `replace` attribute |
| $event.exact | boolean | The value of the `exact` attribute |
| senderVM | Vue | Send event instance |

## UNavbarDivider API

None

## UNavbarDropdown API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| trigger | string | | `'hover'` | Trigger mode. Optional values: `'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | string | | `'bottom'` | Popup position. Optional values: `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start' `, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| disabled | boolean | | `false` | Whether to disable |

## UNavbarMenu, UNavbarMenuGroup, UNavbarMenuItem, UNavbarMenuDivider API

None

## UNavbarSelect, UNavbarSelectGroup, UNavbarSelectItem, UNavbarSelectDivider API

None