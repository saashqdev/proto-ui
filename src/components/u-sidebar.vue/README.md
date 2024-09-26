<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# USidebar Sidebar

**UI Components**, **Route Links**, **Block Level Display**

Usually used for the navigation bar on the left side of the page.

## Example
### Basic Usage

#### Routing Mode

``` html
<u-sidebar style="width: 200px;">
    <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
    <u-sidebar-item>Concept</u-sidebar-item>
    <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
</u-sidebar>
```

#### Value Mode

``` html
<u-sidebar value="3" :router="false" style="width: 200px;">
    <u-sidebar-item value="1">Multi-Level Menu</u-sidebar-item>
    <u-sidebar-item value="2">Concept</u-sidebar-item>
    <u-sidebar-item value="3">Components</u-sidebar-item>
</u-sidebar>
```

### Read Only, Disable, Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-sidebar disabled>
            <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
            <u-sidebar-item>Concept</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-sidebar>
            <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
            <u-sidebar-item disabled>Concept</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
</u-grid-layout>
```

### Separator

``` html
<u-sidebar style="width: 200px;">
    <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
    <u-sidebar-item>Concept</u-sidebar-item>
    <u-sidebar-item>Configuration</u-sidebar-item>
    <u-sidebar-divider></u-sidebar-divider>
    <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
    <u-sidebar-item to="/libraries">Component Library</u-sidebar-item>
</u-sidebar>
```

### Group

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Default, No Folding Function</p>
            <u-sidebar>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>Link</u-sidebar-item>
                    <u-sidebar-item>Button</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>Navigation Bar</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">Sidebar</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>Single Line Input</u-sidebar-item>
                    <u-sidebar-item>Muli-Line Input</u-sidebar-item>
                    <u-sidebar-item>Select Box</u-sidebar-item>
                    <u-sidebar-item>Form</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Turn On the Folding Function</p>
            <u-sidebar collapsible>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>Link</u-sidebar-item>
                    <u-sidebar-item>Button</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation" expanded disabled>
                    <u-sidebar-item>Navigation Bar</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">Sidebar</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form" :collapsible="false">
                    <u-sidebar-item>Single Line Input</u-sidebar-item>
                    <u-sidebar-item>Muli-Line Input</u-sidebar-item>
                    <u-sidebar-item>Select Box</u-sidebar-item>
                    <u-sidebar-item>Form</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Accordian Mode</p>
            <u-sidebar collapsible accordion>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>Link</u-sidebar-item>
                    <u-sidebar-item>Button</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>Navigation Bar</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">Sidebar</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>Single Line Input</u-sidebar-item>
                    <u-sidebar-item>Muli-Line Input</u-sidebar-item>
                    <u-sidebar-item>Select Box</u-sidebar-item>
                    <u-sidebar-item>Form</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Click on the Entire Row can Trigger (default)</p>
            <u-sidebar collapsible expand-trigger="click">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>Link</u-sidebar-item>
                    <u-sidebar-item>Button</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>Navigation Bar</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">Sidebar</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Only Triggered when the Small Arrow is Clicked</p>
            <u-sidebar collapsible expand-trigger="click-expander">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>Link</u-sidebar-item>
                    <u-sidebar-item>Button</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>Navigation Bar</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">Sidebar</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### Color Extension

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <u-sidebar style="width: 200px;">
                <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
                <u-sidebar-item>Concept</u-sidebar-item>
                <u-sidebar-item>Configuration</u-sidebar-item>
                <u-sidebar-divider></u-sidebar-divider>
                <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
                <u-sidebar-item to="/libraries">Component Library</u-sidebar-item>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <u-sidebar style="width: 200px;" color="inverse">
                <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
                <u-sidebar-item>Concept</u-sidebar-item>
                <u-sidebar-item>Configuration</u-sidebar-item>
                <u-sidebar-divider></u-sidebar-divider>
                <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
                <u-sidebar-item to="/libraries">Component Library</u-sidebar-item>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

## USidebar API
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

Insert a `<u-sidebar-item>`, `<u-sidebar-divider>` or `<u-sidebar-group>` subcomponent.

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
| $event.itemVM | USidebarItem | Selection subcomponent |
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
| $event.itemVM | USidebarItem | Selection subcomponent |
| $event.oldVM | USidebarItem | Old selection subcomponent |
| senderVM | USidebar | Send event instance |

#### @toggle

Triggered when a group is expanded/collapsed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.groupVM | USidebarGroup | Group component |
| senderVM | Vue | Send event instance |

### Methods

#### toggleAll(expanded)

Expand/collapse all groups

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| expanded | boolean | | Expand/collapse |

## USidebarItem API
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
| $event.itemVM | USidebarItem | This component |
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

## USidebarGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Displayed title |
| collapsible | boolean | | | `false` |
| expanded.sync | boolean | | `false` | Expanded/collapsed state |
| disabled | boolean | | `false` | Whether to disable. Cannot expand/collapse when disabled |

### Slots

#### (default)

Insert `<u-sidebar-item>` or `<u-sidebar-divider>` subcomponent.

#### title

Custom title text.

#### extra

On the right side you can attach content.

### Events

#### @before-toggle

Triggered before expanding/collapsing this group

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.groupVM | USidebarGroup | Group component |
| $event.preventDefault | Function | Prevent the expand/collapse process |
| senderVM | Vue | Send event instance |

#### @toggle

Triggered when a group is expanded/collapsed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.groupVM | USidebarGroup | Group component |
| senderVM | Vue | Send event instance |

## USidebarDivider API

None