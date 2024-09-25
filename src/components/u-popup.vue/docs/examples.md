### Basic Usage

``` html
<u-linear-layout>
    <u-button>
        Content
        <u-popup>Add content using the content attribute</u-popup>
    </u-button>
    <u-button>
        Title
        <u-popup title="title">Add a title using the title attribute</u-popup>
    </u-button>
    <u-button>
        Use Slot
        <u-popup>
            <span slot="title">Title <u-badge :value="3"></u-badge></span>
            <span>Use <u-link>slot</u-link> to add some complex functions</span>
        </u-popup>
    </u-button>
</u-linear-layout>
```

### Customize

``` html
<u-linear-layout>
    <u-button>
        Dropdown
        <u-popup>
            <u-menu slot="root" value="3" :router="false">
                <u-menu-item value="1">Multi-Level Menu</u-menu-item>
                <u-menu-item value="2">Concept</u-menu-item>
                <u-menu-item value="3">Components</u-menu-item>
            </u-menu>
        </u-popup>
    </u-button>
    <u-button>
        Textarea
        <u-popup>
            <u-textarea slot="root"></u-textarea>
        </u-popup>
    </u-button>
    <u-button>
        TreeView
        <u-popup>
            <u-tree-view slot="root">
                <u-tree-view-node text="Node1">
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
                    <u-tree-view-node text="Node3.1"></u-tree-view-node>
                    <u-tree-view-node text="Node3.2"></u-tree-view-node>
                </u-tree-view-node>
            </u-tree-view>
        </u-popup>
    </u-button>
</u-linear-layout>
```

### Trigger Method

``` html
<u-linear-layout>
    <u-button>
        Hover
        <u-popup trigger="hover">Popup</u-popup>
    </u-button>
    <u-button>
        Click (default)
        <u-popup trigger="click">Popup</u-popup>
    </u-button>
    <u-button>
        Right Click
        <u-popup trigger="right-click">Popup</u-popup>
    </u-button>
    <u-button>
        Double-Click
        <u-popup trigger="double-click">Popup</u-popup>
    </u-button>
</u-linear-layout>
```

#### Manual Trigger

You can also manually trigger the pop-up/close of the pop-up box:

``` vue
<template>
<u-button @click="opened = !opened">
    {{ opened ? 'hide' : 'pop' }}
    <u-popup trigger="manual" :opened.sync="opened">Popup</u-popup>
</u-button>
</template>
<script>
export default {
    data() {
        return {
            opened: false,
        };
    },
};
</script>
```

### Popup Location

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            Top-Start
            <u-popup placement="top-start">Popup</u-popup>
        </u-button>
        <u-button>
            Top
            <u-popup placement="top">Popup</u-popup>
        </u-button>
        <u-button>
            Top-End
            <u-popup placement="top-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Left-Start
            <u-popup placement="left-start">Popup</u-popup>
        </u-button>
        <u-button>
            Left
            <u-popup placement="left">Popup</u-popup>
        </u-button>
        <u-button>
            Left-End
            <u-popup placement="left-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Right-Start
            <u-popup placement="right-start">Popup</u-popup>
        </u-button>
        <u-button>
            Right
            <u-popup placement="right">Popup</u-popup>
        </u-button>
        <u-button>
            Right-End
            <u-popup placement="right-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Bottom-Start
            <u-popup placement="bottom-start">Popup</u-popup>
        </u-button>
        <u-button>
            Bottom
            <u-popup placement="bottom">Popup</u-popup>
        </u-button>
        <u-button>
            Bottom-End
            <u-popup placement="bottom-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### Follow Mouse

Set the `'follow-cursor'` property to `true` to follow the mouse. You can also pass a number or object to adjust the position offset.

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            Top-Start
            <u-popup placement="top-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            Top
            <u-popup placement="top" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            Top-End
            <u-popup placement="top-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Left-Start
            <u-popup placement="left-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            Left
            <u-popup placement="left" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            Left-End
            <u-popup placement="left-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Right-Start
            <u-popup placement="right-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            Right
            <u-popup placement="right" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            Right-End
            <u-popup placement="right-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Bottom-Start
            <u-popup placement="bottom-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            Bottom
            <u-popup placement="bottom" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            Bottom-End
            <u-popup placement="bottom-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

### Disable

``` html
<u-button disabled>
    Disabled
    <u-popup disabled>Popup</u-popup>
</u-button>
```
