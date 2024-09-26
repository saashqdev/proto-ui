### Basic Usage

``` html
<u-linear-layout>
    <u-button>
        Insert Directly
        <u-tooltip>Insert <u-link>Text</u-link> or <u-link>HTML</u-link></u-tooltip> directly
    </u-button>
    <u-button v-tooltip="'Only text can be inserted in instructions'">Instructions</u-button>
</u-linear-layout>
```

### Trigger Method

``` html
<u-linear-layout>
    <u-button>
        Hover (default)
        <u-tooltip trigger="hover">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        Click
        <u-tooltip trigger="click">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        Right Click
        <u-tooltip trigger="right-click">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        Double-Click
        <u-tooltip trigger="double-click">Tooltip</u-tooltip>
    </u-button>
</u-linear-layout>
```

#### Command Form

``` html
<u-linear-layout>
    <u-button v-tooltip="'Tooltip'">Hover (default)</u-button>
    <u-button v-tooltip.click="'Tooltip'">Click</u-button>
    <u-button v-tooltip.right-click="'Tooltip'">Right-Click</u-button>
    <u-button v-tooltip.double-click="'Tooltip'">Double-Click</u-button>
</u-linear-layout>
```

#### Manual Trigger

It is also possible to manually trigger the popup/close of the tooltip:

``` vue
<template>
<u-button @click="opened = !opened">
    {{ opened ? 'hide' : 'pop' }}
    <u-tooltip trigger="manual" :opened.sync="opened">Tooltip</u-tooltip>
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
            <u-tooltip placement="top-start">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Top
            <u-tooltip placement="top">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Top-End
            <u-tooltip placement="top-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Left-Start
            <u-tooltip placement="left-start">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Left
            <u-tooltip placement="left">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Left-End
            <u-tooltip placement="left-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Right-Start
            <u-tooltip placement="right-start">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Right
            <u-tooltip placement="right">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Right-End
            <u-tooltip placement="right-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Bottom-Start
            <u-tooltip placement="bottom-start">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Bottom
            <u-tooltip placement="bottom">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Bottom-End
            <u-tooltip placement="bottom-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### Instruction Form

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button v-tooltip.top-start="'Tooltip'">Top-Start</u-button>
        <u-button v-tooltip.top="'Tooltip'">Top</u-button>
        <u-button v-tooltip.top-end="'Tooltip'">Top-End</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.left-start="'Tooltip'">Left-Start</u-button>
        <u-button v-tooltip.left="'Tooltip'">Left</u-button>
        <u-button v-tooltip.left-end="'Tooltip'">Left-End</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.right-start="'Tooltip'">Right-Start</u-button>
        <u-button v-tooltip.right="'Tooltip'">Right</u-button>
        <u-button v-tooltip.right-end="'Tooltip'">Right-End</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.bottom-start="'Tooltip'">Bottom-Start</u-button>
        <u-button v-tooltip.bottom="'Tooltip'">Bottom</u-button>
        <u-button v-tooltip.bottom-end="'Tooltip'">Bottom-End</u-button>
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
            <u-tooltip placement="top-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Top
            <u-tooltip placement="top" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Top-End
            <u-tooltip placement="top-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Left-Start
            <u-tooltip placement="left-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Left
            <u-tooltip placement="left" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Left-End
            <u-tooltip placement="left-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Right-Start
            <u-tooltip placement="right-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Right
            <u-tooltip placement="right" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Right-End
            <u-tooltip placement="right-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Bottom-Start
            <u-tooltip placement="bottom-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Bottom
            <u-tooltip placement="bottom" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            Bottom-End
            <u-tooltip placement="bottom-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

### Delay Disappears when Wovering

``` html
<u-linear-layout>
    <u-button>Hover Delay
        <u-tooltip trigger="hover" :hide-delay="300">Tooltip</u-tooltip>
    </u-button>
</u-linear-layout>
```

### Disable

``` html
<u-button disabled>
    Disabled
    <u-tooltip content="Tooltip" disabled>disabled</u-tooltip>
</u-button>
```
