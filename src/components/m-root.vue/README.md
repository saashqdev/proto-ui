<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# MRoot root node mode

This pair of Mixins: MRoot and MNode abstracts common multi-level component nesting scenarios like `<u-tree-view>` and `<u-tree-view-node>` for rapid development and coding. Learn from.

### Usage

- In the component Options that inherits MRoot, additionally declare the `nodeName` field of the sub-component
- In the component Options that inherits MNode, additionally declare the `rootName` field of the parent component

The parent component will collect multiple child components in the `nodeVMs` array, and the child component will mark the parent component as the `parentVM` variable and the root component as `rootVM`. This process occurs in the `created` phase of the component. This data is recovered during the `destroyed` phase.

## Example
### Basic Usage

``` html
<m-root>
    <m-node text="Node 1">
        <m-node text="Node 1.1"></m-node>
        <m-node text="Node 1.2">
            <m-node text="Node 1.2.1"></m-node>
            <m-node text="Node 1.2.2"></m-node>
        </m-node>
        <m-node text="Node 1.3"></m-node>
        <m-node text="Node 1.4"></m-node>
    </m-node>
    <m-node text="Node 2"></m-node>
    <m-node text="Node 3">
        <m-node text="Node 3.1"></m-node>
        <m-node text="Node 3.2"></m-node>
    </m-node>
</m-root>
```

## MRoot API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| nodeName | string | `'m-node'` | The name of the Node component |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| nodeVMs | Array\<MNode\> | `[]` | First-level Node component collection |

### Slots

#### (default)

Insert `<m-node>` subcomponent.

### Methods

#### walk(func)

Breadth-first traversal of the tree. Stop traversing when the `func` function returns a value.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| func | Function | | Traversal processing function |

#### find(func)

Find Node instances.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| func | Function | | Find a function. Find the first instance whose return value is `true`. |

##MNodeAPI
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| rootName | string | `'m-root'` | The name of the root component |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| rootVM | MRoot | | Root component instance |
| parentVM | MNode | | Parent Node instance |
| nodeVMs | Array\<MNode\> | `[]` | Collection of child Node components |

### Slots

#### (default)

Insert `<m-node>` subcomponent.
