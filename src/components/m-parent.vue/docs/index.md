This pair of Mixins: MParent and MChild abstracts common scenarios like a pair of nested parent-child components like `<u-tabs>` and `<u-tab>` for rapid development and code reference.

### Usage

- In the component Options that inherits MParent, additionally declare the `childName` field of the child component
- In the component Options that inherits MChild, additionally declare the `parentName` field of the parent component

The parent component will collect multiple child components in the `itemVMs` array, and the child component will mark the parent component as the `parentVM` variable. This process occurs in the `created` phase of the component. This data is recovered during the `destroyed` phase.
