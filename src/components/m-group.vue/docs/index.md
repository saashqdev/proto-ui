### Usage

- Components that inherit MParent must also inherit MGroupParent and supplement the `groupName` field of the declared group component
- In the component Options that inherits MChild, add the `groupName` field of the grouped component.
- In the Options of the component that inherits MGroup, add the `parentName` field of the parent component and add the `childName` field of the parent component.

The parent component will collect multiple grouped components in the `groupVMs` array, and the grouped component will collect multiple child components in the `itemVMs` array, and mark the parent component as a `parentVM` variable. This process occurs in the `created` phase of the component. This data is recovered during the `destroyed` phase.
