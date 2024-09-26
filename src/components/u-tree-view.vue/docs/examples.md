### Basic Usage

There are two writing methods. The Data method is recommended here because there is sometimes a lot of data in a tree structure.

#### Tag Method

``` html
<u-tree-view>
    <u-tree-view-node text="Node 1">
        <u-tree-view-node text="Node 1.1"></u-tree-view-node>
        <u-tree-view-node text="Node 1.2">
            <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.3"></u-tree-view-node>
        <u-tree-view-node text="Node 1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node 2"></u-tree-view-node>
    <u-tree-view-node text="Node 3">
        <u-tree-view-node text="Node 3.1"></u-tree-view-node>
        <u-tree-view-node text="Node 3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

#### Data Method

``` html
<u-tree-view :data="[
    { text: 'Node 1', children: [
        { text: 'Node 1.1' },
        { text: 'Node 1.2', children: [
            { text: 'Node 1.2.1' },
            { text: 'Node 1.2.2' },
        ] },
        { text: 'Node 1.3' },
        { text: 'Node 1.4' },
    ] },
    { text: 'Node 2' },
    { text: 'Node 3', children: [
        { text: 'Node 3.1' },
        { text: 'Node 3.2' },
    ] },
]"></u-tree-view>
```

#### Customize Template

The Tag method makes it easy to customize the template, but the Data method is not easy to extend. We provide a scoped slot called `text` that can easily handle this problem.

``` html
<u-tree-view :data="[
    { text: 'Folder1', type: 'directory', children: [
        { text: 'Folder1.1', type: 'directory' },
        { text: 'Folder1.2', type: 'directory', children: [
            { text: 'Document1.2.1', type: 'file' },
            { text: 'Document1.2.2', type: 'file' },
        ] },
        { text: 'Document1.3', type: 'file' },
        { text: 'Document1.4', type: 'file' },
    ] },
    { text: 'Folder2', type: 'directory' },
    { text: 'Folder3', type: 'directory', children: [
        { text: 'Document3.1', type: 'file' },
        { text: 'Document3.2', type: 'file' },
    ] },
]">
    <span slot="text" slot-scope="{ node, expanded, text }">
        {{ node.type === 'directory' ? (expanded ? '📂' : '📁') : '📄' }}
        {{ text }}
    </span>
</u-tree-view>
```

However, the `text` scope slot only supports extending text text content. If your needs are more complex, it is recommended to directly inherit UTreeView related components to achieve it.

### Option Value

#### Tag Method

``` html
<u-tree-view value="1.2">
    <u-tree-view-node text="Node 1" value="1">
        <u-tree-view-node text="Node 1.1" value="1.1"></u-tree-view-node>
        <u-tree-view-node text="Node 1.2" value="1.2">
            <u-tree-view-node text="Node 1.2.1" value="1.2.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.2.2" value="1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.3" value="1.3"></u-tree-view-node>
        <u-tree-view-node text="Node 1.4" value="1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node 2" value="2"></u-tree-view-node>
    <u-tree-view-node text="Node 3" value="3">
        <u-tree-view-node text="Node 3.1" value="3.1"></u-tree-view-node>
        <u-tree-view-node text="Node 3.2" value="3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

#### Data Method

``` html
<u-tree-view value="1.2" :data="[
    { text: 'Node 1', value: '1', children: [
        { text: 'Node 1.1', value: '1.1' },
        { text: 'Node 1.2', value: '1.2', children: [
            { text: 'Node 1.2.1', value: '1.2.1' },
            { text: 'Node 1.2.2', value: '1.2.2' },
        ] },
        { text: 'Node 1.3', value: '1.3' },
        { text: 'Node 1.4', value: '1.4' },
    ] },
    { text: 'Node 2', value: '2' },
    { text: 'Node 3', value: '3', children: [
        { text: 'Node 3.1', value: '3.1' },
        { text: 'Node 3.2', value: '3.2' },
    ] },
]"></u-tree-view>
```

### Read Only, Disable, Disable an Item

#### Tag Method

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-tree-view readonly>
            <u-tree-view-node text="Node 1">
                <u-tree-view-node text="Node 1.1"></u-tree-view-node>
                <u-tree-view-node text="Node 1.2">
                    <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
                    <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
                </u-tree-view-node>
                <u-tree-view-node text="Node 1.3"></u-tree-view-node>
                <u-tree-view-node text="Node 1.4"></u-tree-view-node>
            </u-tree-view-node>
            <u-tree-view-node text="Node 2"></u-tree-view-node>
            <u-tree-view-node text="Node 3">
                <u-tree-view-node text="Node 3.1"></u-tree-view-node>
                <u-tree-view-node text="Node 3.2"></u-tree-view-node>
            </u-tree-view-node>
        </u-tree-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-tree-view disabled>
            <u-tree-view-node text="Node 1">
                <u-tree-view-node text="Node 1.1"></u-tree-view-node>
                <u-tree-view-node text="Node 1.2">
                    <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
                    <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
                </u-tree-view-node>
                <u-tree-view-node text="Node 1.3"></u-tree-view-node>
                <u-tree-view-node text="Node 1.4"></u-tree-view-node>
            </u-tree-view-node>
            <u-tree-view-node text="Node 2"></u-tree-view-node>
            <u-tree-view-node text="Node 3">
                <u-tree-view-node text="Node 3.1"></u-tree-view-node>
                <u-tree-view-node text="Node 3.2"></u-tree-view-node>
            </u-tree-view-node>
        </u-tree-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-tree-view>
            <u-tree-view-node text="Node 1">
                <u-tree-view-node text="Node 1.1"></u-tree-view-node>
                <u-tree-view-node text="Node 1.2" disabled>
                    <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
                    <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
                </u-tree-view-node>
                <u-tree-view-node text="Node 1.3" disabled></u-tree-view-node>
                <u-tree-view-node text="Node 1.4"></u-tree-view-node>
            </u-tree-view-node>
            <u-tree-view-node text="Node 2" disabled></u-tree-view-node>
            <u-tree-view-node text="Node 3">
                <u-tree-view-node text="Node 3.1"></u-tree-view-node>
                <u-tree-view-node text="Node 3.2"></u-tree-view-node>
            </u-tree-view-node>
        </u-tree-view>
    </u-grid-layout-column>
</u-grid-layout>
```

#### Data Method

``` html
<u-tree-view :data="[
    { text: 'Node 1', children: [
        { text: 'Node 1.1' },
        { text: 'Node 1.2', disabled: true, children: [
            { text: 'Node 1.2.1' },
            { text: 'Node 1.2.2'}
        ] },
        { text: 'Node 1.3', disabled: true  },
        { text: 'Node 1.4' },
    ] },
    { text: 'Node 2', disabled: true  },
    { text: 'Node 3', children: [
        { text: 'Node 3.1' },
        { text: 'Node 3.2'}
    ]}
]"></u-tree-view>
```


### Accordion

``` html
<u-tree-view accordion>
    <u-tree-view-node text="Node 1">
        <u-tree-view-node text="Node 1.1">
            <u-tree-view-node text="Node 1.1.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.1.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.2">
            <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.3">
            <u-tree-view-node text="Node 1.3.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.3.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node 2" expanded>
        <u-tree-view-node text="Node 2.1"></u-tree-view-node>
        <u-tree-view-node text="Node 2.2"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node 3">
        <u-tree-view-node text="Node 3.1"></u-tree-view-node>
        <u-tree-view-node text="Node 3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

### Expand/Collapse Trigger Method

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4" expand-trigger="click">
        <p>Clicking on the Entire Row can Trigger (default)</p>
        <u-tree-view>
            <u-tree-view-node text="Node 1" expanded>
                <u-tree-view-node text="Node 1.1" expanded></u-tree-view-node>
                <u-tree-view-node text="Node 1.2" expanded>
                    <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
                    <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
                </u-tree-view-node>
                <u-tree-view-node text="Node 1.3"></u-tree-view-node>
                <u-tree-view-node text="Node 1.4"></u-tree-view-node>
            </u-tree-view-node>
            <u-tree-view-node text="Node 2"></u-tree-view-node>
            <u-tree-view-node text="Node 3">
                <u-tree-view-node text="Node 3.1"></u-tree-view-node>
                <u-tree-view-node text="Node 3.2"></u-tree-view-node>
            </u-tree-view-node>
        </u-tree-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <p>Only Triggered when the Small Arrow is Clicked</p>
        <u-tree-view expand-trigger="click-expander">
            <u-tree-view-node text="Node 1" expanded>
                <u-tree-view-node text="Node 1.1" expanded></u-tree-view-node>
                <u-tree-view-node text="Node 1.2" expanded>
                    <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
                    <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
                </u-tree-view-node>
                <u-tree-view-node text="Node 1.3"></u-tree-view-node>
                <u-tree-view-node text="Node 1.4"></u-tree-view-node>
            </u-tree-view-node>
            <u-tree-view-node text="Node 2"></u-tree-view-node>
            <u-tree-view-node text="Node 3">
                <u-tree-view-node text="Node 3.1"></u-tree-view-node>
                <u-tree-view-node text="Node 3.2"></u-tree-view-node>
            </u-tree-view-node>
        </u-tree-view>
    </u-grid-layout-column>
</u-grid-layout>
```

### Cancel

``` html
<u-tree-view cancelable>
    <u-tree-view-node text="Node 1">
        <u-tree-view-node text="Node 1.1"></u-tree-view-node>
        <u-tree-view-node text="Node 1.2">
            <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.3"></u-tree-view-node>
        <u-tree-view-node text="Node 1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node 2"></u-tree-view-node>
    <u-tree-view-node text="Node 3">
        <u-tree-view-node text="Node 3.1"></u-tree-view-node>
        <u-tree-view-node text="Node 3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

### Node Show/Hide

You can use `v-show` in Tag method, and you can use `hidden` attribute in Data Method.

``` html
<u-tree-view cancelable>
    <u-tree-view-node v-show="false" text="Node1">
        <u-tree-view-node text="Node1.1"></u-tree-view-node>
        <u-tree-view-node text="Node1.2">
            <u-tree-view-node text="Node1.2.1"></u-tree-view-node>
            <u-tree-view-node text="Node1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node1.3"></u-tree-view-node>
        <u-tree-view-node text="Node1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node2"></u-tree-view-node>
    <u-tree-view-node text="Node3">
        <u-tree-view-node text="Node3.1" hidden></u-tree-view-node>
        <u-tree-view-node text="Node3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

### Multiple Selection

Enable multi-selection mode through the `checkable` attribute.

There are two ways to control multi-selection. One is to set the `checked` attribute of each data item, which will perform Two-Way Binding with the multiple selection box. The `disabled` attribute disables the multiple selection box.

``` vue
<template>
<u-tree-view ref="treeView" checkable :data="data"></u-tree-view>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { text: 'Node 1', expanded: true, checked: false, children: [
                    { text: 'Node 1.1', expanded: false, checked: false },
                    { text: 'Node 1.2', expanded: true, checked: false, children: [
                        { text: 'Node 1.2.1', expanded: false, checked: false },
                        { text: 'Node 1.2.2', expanded: false, checked: false },
                    ] },
                    { text: 'Node 1.3', expanded: false, checked: false },
                    { text: 'Node 1.4', expanded: false, checked: false },
                ] },
                { text: 'Node 2', expanded: false, checked: false },
                { text: 'Node 3', expanded: false, checked: false },
            ],
        };
    },
};
</script>
```

The other is to perform Two-Way Binding on the selected value through `:values.sync`. This method requires that each item has `value` as the unique value. `values` will only collect the values   of leaf Nodes.

``` vue
<template>
<u-tree-view ref="treeView" checkable :values.sync="values" :data="data"></u-tree-view>
</template>

<script>
export default {
    data() {
        return {
            values: ['1.2.1', '1.2.2', '1.3', '3'],
            data: [
                { text: 'Node 1', value: '1', expanded: true, checked: false, children: [
                    { text: 'Node 1.1', value: '1.1', expanded: false, checked: false },
                    { text: 'Node 1.2', value: '1.2', expanded: true, checked: false, children: [
                        { text: 'Node 1.2.1', value: '1.2.1', expanded: false, checked: false },
                        { text: 'Node 1.2.2', value: '1.2.2', expanded: false, checked: false },
                    ] },
                    { text: 'Node 1.3', value: '1.3', expanded: false, checked: false },
                    { text: 'Node 1.4', value: '1.4', expanded: false, checked: false },
                ] },
                { text: 'Node 2', value: '2', expanded: false, checked: false },
                { text: 'Node 3', value: '3', expanded: false, checked: false },
            ],
        };
    },
};
</script>
```

### Other Methods

#### Unified Operation

UTreeView has unified processing methods for the two operations of selecting/canceling and Expand/Collapse: `checkAll` and `toggleAll`, which is convenient for developers to use.

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-tree-view ref="treeView" checkable :data="data"></u-tree-view>
    <u-linear-layout>
        <u-button @click="checkAll(true)">Check All</u-button>
        <u-button @click="checkAll(false)">Cancel All</u-button>
        <u-button @click="toggleAll(true)">Expand All</u-button>
        <u-button @click="toggleAll(false)">Collapse All</u-button>
    </u-linear-layout>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { text: 'Node 1', expanded: true, checked: false, children: [
                    { text: 'Node 1.1', expanded: false, checked: false },
                    { text: 'Node 1.2', expanded: true, checked: false, disabled: true, children: [
                        { text: 'Node 1.2.1', expanded: false, checked: false },
                        { text: 'Node 1.2.2', expanded: false, checked: false },
                    ] },
                    { text: 'Node 1.3', expanded: false, checked: false },
                    { text: 'Node 1.4', expanded: false, checked: false },
                ] },
                { text: 'Node 2', expanded: false, checked: false },
                { text: 'Node 3', expanded: false, checked: false },
            ],
        };
    },
    methods: {
        checkAll(checked) {
            this.$refs.treeView.checkAll(checked);
        },
        toggleAll(expanded) {
            this.$refs.treeView.toggleAll(expanded);
        },
    },
};
</script>
```

#### Traverse and Search

UTreeView has methods for traversing and finding Node: `walk` and `find`, which are convenient for developers to use.

```vue
<template>
<u-linear-layout direction="vertical">
    <u-tree-view ref="treeView" :data="data"></u-tree-view>
    <u-linear-layout>
        <u-button @click="walk()">Traverse All Nodes</u-button>
        <u-button @click="find()">Find Node with `4` at the End</u-button>
    </u-linear-layout>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { text: 'Node 1', expanded: true, checked: false, children: [
                    { text: 'Node 1.1', expanded: false, checked: false },
                    { text: 'Node 1.2', expanded: true, checked: false, disabled: true, children: [
                        { text: 'Node 1.2.1', expanded: false, checked: false },
                        { text: 'Node 1.2.2', expanded: false, checked: false },
                    ] },
                    { text: 'Node 1.3', expanded: false, checked: false },
                    { text: 'Node 1.4', expanded: false, checked: false },
                ] },
                { text: 'Node 2', expanded: false, checked: false },
                { text: 'Node 3', expanded: false, checked: false },
            ],
        };
    },
    methods: {
        walk() {
            // Note: If there is a return value, the traversal will terminate.
            this.$refs.treeView.walk((nodeVM) => console.info(nodeVM.text));
        },
        find() {
            const nodeVM = this.$refs.treeView.find((nodeVM) => nodeVM.text.endsWith('4'));
            alert(nodeVM.text);
        },
    },
};
</script>
```
