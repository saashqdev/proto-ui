This pair of Mixins: MRoot and MNode abstracts common multi-level component nesting scenarios like `<u-tree-view>` and `<u-tree-view-node>` for rapid development and coding. Learn from.

### Usage

- In the component Options that inherits MRoot, additionally declare the `nodeName` field of the sub-component
- In the component Options that inherits MNode, additionally declare the `rootName` field of the parent component

The parent component will collect multiple child components in the `nodeVMs` array, and the child component will mark the parent component as the `parentVM` variable and the root component as `rootVM`. This process occurs in the `created` phase of the component. This data is recovered during the `destroyed` phase.