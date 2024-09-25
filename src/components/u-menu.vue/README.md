<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UMenumenu

**UI Components**, **Route Links**, **Block Level Display**

The menu component supports routing, trigger closing, Multi-Level Menu and other functions.

## Example
### Basic Usage

Can be combined with Popup or Popper popup menus.

``` html
<u-linear-layout>
    <u-button>
        Popup Menu
        <u-popup>
            <u-menu slot="root">
                <u-menu-item to="/guides/">Multi-Level Menu</u-menu-item>
                <u-menu-item to="/api/">API</u-menu-item>
                <u-menu-item to="/components/">Prototype Component</u-menu-item>
                <u-menu-item href="https://github.com/saashqdev">GitHub</u-menu-item>
            </u-menu>
        </u-popup>
    </u-button>
    <u-button>
        Popper Menu
        <m-popper>
            <u-menu value="3" :router="false" style="width: 128px;">
                <u-menu-item to="/guides/">Multi-Level Menu</u-menu-item>
                <u-menu-item to="/api/">API</u-menu-item>
                <u-menu-item to="/components/">Prototype Component</u-menu-item>
                <u-menu-item href="https://github.com/saashqdev">GitHub</u-menu-item>
            </u-menu>
        </m-popper>
    </u-button>
</u-linear-layout>
```

### Multi-Level Menu

``` html
<u-linear-layout direction="vertical">
    <u-menu style="width: 200px;">
        <u-menu-item>Multi-Level Menu</u-menu-item>
        <u-menu-item>API
            <u-menu slot="sub">
                <u-menu-item to="/api/cli">Command Line Tools (CLI)</u-menu-item>
                <u-menu-item to="/api/config">Configuration</u-menu-item>
            </u-menu>
        </u-menu-item>
        <u-menu-item>Components
            <u-menu slot="sub">
                <u-menu-item>Prototype Component
                    <u-menu slot="sub">
                        <u-menu-item>Basic
                            <u-menu slot="sub">
                                <u-menu-item to="/components/u-link">Link</u-menu-item>
                                <u-menu-item to="/components/u-button">Button</u-menu-item>
                                <u-menu-item to="/components/u-badge">Badge</u-menu-item>
                            </u-menu>
                        </u-menu-item>
                        <u-menu-item>Navigation
                            <u-menu slot="sub">
                                <u-menu-item to="/components/u-navbar">Navbar</u-menu-item>
                                <u-menu-item to="/components/u-sidebar">Sidebar</u-menu-item>
                                <u-menu-item to="/components/u-menu">Menu</u-menu-item>
                            </u-menu>
                        </u-menu-item>
                        <u-menu-item>Popper
                            <u-menu slot="sub">
                                <u-menu-item to="/components/m-popper">Popper</u-menu-item>
                                <u-menu-item to="/components/u-tooltip">Tooltip</u-menu-item>
                                <u-menu-item to="/components/u-popup">Popup</u-menu-item>
                            </u-menu>
                        </u-menu-item>
                    </u-menu>
                </u-menu-item>
                <u-menu-item to="/ui-design">Component Design Plan</u-menu-item>
            </u-menu>
        </u-menu-item>
        <u-menu-item target="_blank" href="https://github.com/saashqdev">GitHub</u-menu-item>
    </u-menu>
    <div>
        <u-button>
            Multi-Level Menu
            <u-popup>
                <u-menu slot="root" style="width: 200px;">
                    <u-menu-item>Multi-Level Menu</u-menu-item>
                    <u-menu-item>API
                        <u-menu slot="sub">
                            <u-menu-item to="/api/cli">Command Line Tools (CLI)</u-menu-item>
                            <u-menu-item to="/api/config">Configuration</u-menu-item>
                        </u-menu>
                    </u-menu-item>
                    <u-menu-item>Components
                        <u-menu slot="sub">
                            <u-menu-item>Prototype Component
                                <u-menu slot="sub">
                                    <u-menu-item>Basic
                                        <u-menu slot="sub">
                                            <u-menu-item to="/components/u-link">Link</u-menu-item>
                                            <u-menu-item to="/components/u-button">Button</u-menu-item>
                                            <u-menu-item to="/components/u-badge">Badge</u-menu-item>
                                        </u-menu>
                                    </u-menu-item>
                                    <u-menu-item>Navigation
                                        <u-menu slot="sub">
                                            <u-menu-item to="/components/u-navbar">Navbar</u-menu-item>
                                            <u-menu-item to="/components/u-sidebar">Sidebar</u-menu-item>
                                            <u-menu-item to="/components/u-menu">Menu</u-menu-item>
                                        </u-menu>
                                    </u-menu-item>
                                    <u-menu-item>Popper
                                        <u-menu slot="sub">
                                            <u-menu-item to="/components/m-popper">Popper</u-menu-item>
                                            <u-menu-item to="/components/u-tooltip">Tooltip</u-menu-item>
                                            <u-menu-item to="/components/u-popup">Popup</u-menu-item>
                                        </u-menu>
                                    </u-menu-item>
                                </u-menu>
                            </u-menu-item>
                            <u-menu-item to="/ui-design">Component Design Plan</u-menu-item>
                        </u-menu>
                    </u-menu-item>
                    <u-menu-item target="_blank" href="https://github.com/saashqdev">GitHub</u-menu-item>
                </u-menu>
            </u-popup>
        </u-button>
    </div>
</u-linear-layout>
```

### Disable、Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-menu disabled>
            <u-menu-item>Multi-Level Menu</u-menu-item>
            <u-menu-item>Concept</u-menu-item>
            <u-menu-item to="/proto-ui">Components</u-menu-item>
        </u-menu>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-menu>
            <u-menu-item>Multi-Level Menu</u-menu-item>
            <u-menu-item disabled>Concept</u-menu-item>
            <u-menu-item to="/proto-ui">Components</u-menu-item>
        </u-menu>
    </u-grid-layout-column>
</u-grid-layout>
```

### Separator

``` html
<u-menu style="width: 200px;">
    <u-menu-item>Multi-Level Menu</u-menu-item>
    <u-menu-item>Concept</u-menu-item>
    <u-menu-item>Configuration</u-menu-item>
    <u-menu-divider></u-menu-divider>
    <u-menu-item to="/proto-ui">Components</u-menu-item>
    <u-menu-item to="/libraries">Component Library</u-menu-item>
</u-menu>
```

### Group

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Default, No Folding Function</p>
            <u-menu>
                <u-menu-group title="Basic">
                    <u-menu-item>Link</u-menu-item>
                    <u-menu-item>Button</u-menu-item>
                    <u-menu-item>Label</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Navigation">
                    <u-menu-item>Navigation Bar</u-menu-item>
                    <u-menu-item to="/components/u-menu">Sidebar</u-menu-item>
                    <u-menu-item>Label</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Form">
                    <u-menu-item>Single Line Input</u-menu-item>
                    <u-menu-item>Muli-Line Input</u-menu-item>
                    <u-menu-item>Select Box</u-menu-item>
                    <u-menu-item>Form</u-menu-item>
                </u-menu-group>
            </u-menu>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

## UMenu API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| router | boolean | | `true` | Whether to control which item to select based on vue-router |
| value.sync, v-model | any | | | Currently selected value |
| collapsible | boolean | | `false` | Whether the group can be collapsed |
| accordion | boolean | | `false` | Whether to expand only one group at a time |
| expand-trigger | string | | `'click'` | The trigger method for expand/collapse. Optional values: `'click'` means that the entire row can be triggered by clicking, `'click-expander'` means that The Entire Row can be Triggered by Clicking only the Small Arrow (default) |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert a `<u-menu-item>`, `<u-menu-divider>` or `<u-menu-group>` subcomponent.

### Events

#### @before-select

Trigger before selecting an item

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selection |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.itemVM | UMenuItem | Selection subcomponent |
| $event.preventDefault | Function | Prevent selection process |

#### @input

Triggered when an item is selected
| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Value of selection |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Changed value |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.oldItem | object | Old selection related object |
| $event.itemVM | UMenuItem | Selection subcomponent |
| $event.oldVM | UMenuItem | Old selection subcomponent |
| senderVM | UMenu | Send event instance |

#### @toggle

Triggered when a group is expanded/collapsed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.groupVM | UMenuGroup | Group component |

### Methods

#### toggleAll(expanded)

Expand/collapse all groups

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| expanded | boolean | | Expand/collapse |

## UMenuItem API
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

#### @click

Fires when this item is clicked. Unlike the native click event, it will only fire when it is not read-only and disabled.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | Mouse event object |
| senderVM | Vue | Send event instance |

#### @before-select

Trigger before selecting this

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of this item |
| $event.item | object | The related object of this item |
| $event.itemVM | UMenuItem | This component |
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

## UMenuGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Displayed title |

### Slots

#### (default)

Insert `<u-menu-item>` or `<u-menu-divider>` subcomponent.

#### Sub

Insert submenu `<u-menu>`.

#### Title

Custom title text.

#### Extra

On the right side you can attach content.

### Events

#### @before-toggle

Triggered before expanding/collapsing this group

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.groupVM | UMenuGroup | Group component |
| $event.preventDefault | Function | Prevent the expand/collapse process |
| senderVM | Vue | Send event instance |

#### @toggle

Triggered when a group is expanded/collapsed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.groupVM | UMenuGroup | Group component |
| senderVM | Vue | Send event instance |

## UMenuDivider API

None