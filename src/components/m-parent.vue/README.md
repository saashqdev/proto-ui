<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

#MParent parent-child mode

This pair of Mixins: MParent and MChild abstracts common scenarios like a pair of nested parent-child components like `<u-tabs>` and `<u-tab>` for rapid development and code reference.

### Usage

- In the component Options that inherits MParent, additionally declare the `childName` field of the child component
- In the component Options that inherits MChild, additionally declare the `parentName` field of the parent component

The parent component will collect multiple child components in the `itemVMs` array, and the child component will mark the parent component as the `parentVM` variable. This process occurs in the `created` phase of the component. This data is recovered during the `destroyed` phase.

## Example
### Basic Usage

``` html
<m-parent>
    <m-child>Water Cup</m-child>
    <m-child>Coffee</m-child>
    <m-child>Nut</m-child>
</m-parent>
```

## MParent API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| childName | string | `'m-child'` | The name of the child component |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| itemVMs | Array\<MChild\> | `[]` | Collection of subcomponents |

### Slots

#### (default)

Insert `<m-child>` child component.

## MChild API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| parentName | string | `'m-parent'` | The name of the parent component |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| parentVM | MParent | | Parent component instance |

### Slots

#### (default)

Insert text or HTML.