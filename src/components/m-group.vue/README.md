<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# MGroupParent Grouping Mode

In the pattern of parent-child components, you sometimes encounter scenarios of grouping and collapsing child components. MGroup abstracts this pattern for rapid development and code reference.

### Usage

- Components that inherit MParent must also inherit MGroupParent and supplement the `groupName` field of the declared group component
- In the component Options that inherits MChild, add the `groupName` field of the grouped component.
- In the Options of the component that inherits MGroup, add the `parentName` field of the parent component and add the `childName` field of the parent component.

The parent component will collect multiple grouped components in the `groupVMs` array, and the grouped component will collect multiple child components in the `itemVMs` array, and mark the parent component as a `parentVM` variable. This process occurs in the `created` phase of the component. This data is recovered during the `destroyed` phase.

## Example

### Group

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Default, No Folding Function</p>
            <m-parent>
                <m-group title="Washing Utensils">
                    <m-child>Towel</m-child>
                    <m-child>Toothbrush</m-child>
                </m-group>
                <m-group title="Cups">
                    <m-child>Dental Cylinder</m-child>
                    <m-child>Water Cup</m-child>
                </m-group>
                <m-group title="Tableware">
                    <m-child>Chopsticks</m-child>
                    <m-child>Bowl</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

## MGroupParent API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| groupName | string | `'m-group'` | The name of the group component |

### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| collapsible | boolean | | `false` | Whether the group can be collapsed |
| accordion | boolean | | `false` | Whether to expand only one group at a time |
| expand-trigger | string | | `'click'` | The trigger method for expand/collapse. Optional values: `'click'` means that the entire row can be triggered when clicked, `'click-expander'` means that it is triggered only when the small arrow is clicked |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| groupVMs | Array\<MGroup\> | `[]` | Grouped component collection |

### Events

#### @toggle

Triggered when a group is expanded/collapsed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.groupVM | MGroup | Group component |
| senderVM | MGroupParent | Send event instance |

### Methods

#### toggleAll(expanded)

Expand/collapse all groups

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| expanded | boolean | | Expand/collapse |

##MGroupAPI
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| parentName | string | `'m-parent'` | The name of the parent component |
| childName | string | `'m-child'` | The name of the child component |

### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Displayed title |
| collapsible | boolean | | | `false` |
| expanded.sync | boolean | | `false` | Expanded/collapsed state |
| disabled | boolean | | `false` | Whether to disable. Cannot expand/collapse when disabled |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| parentVM | MParent | | Parent component instance |
| itemVMs | Array\<MChild\> | `[]` | Collection of subcomponents |

### Slots

#### (default)

Insert `<m-child>` child component.

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
| $event.groupVM | MGroup | Group component |
| $event.preventDefault | Function | Prevent the expand/collapse process |
| senderVM | MGroup | Send event instance |

#### @toggle

Triggered when a group is expanded/collapsed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | Expanded/collapsed state |
| $event.groupVM | MGroup | Group component |
| senderVM | MGroup | Send event instance |

## MChild API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| groupName | string | `'m-group'` | The name of the group component |
