### Basic Usage

``` html
<u-linear-layout>
    <u-button>
        直接插入
        <u-tooltip>直接插入<u-link>文本</u-link>或<u-link>HTML</u-link></u-tooltip>
    </u-button>
    <u-button v-tooltip="'指令中只能插入文本'">Instructions</u-button>
</u-linear-layout>
```

### Trigger Method

``` html
<u-linear-layout>
    <u-button>
        Hover（默认）
        <u-tooltip trigger="hover">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        click
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

#### 指令形式

``` html
<u-linear-layout>
    <u-button v-tooltip="'Tooltip'">hover（默认）</u-button>
    <u-button v-tooltip.click="'Tooltip'">click</u-button>
    <u-button v-tooltip.right-click="'Tooltip'">right-click</u-button>
    <u-button v-tooltip.double-click="'Tooltip'">double-click</u-button>
</u-linear-layout>
```

#### Manual Trigger

也可以手动触发工具提示的弹出/关闭：

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

#### 指令形式

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button v-tooltip.top-start="'Tooltip'">top-start</u-button>
        <u-button v-tooltip.top="'Tooltip'">top</u-button>
        <u-button v-tooltip.top-end="'Tooltip'">top-end</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.left-start="'Tooltip'">left-start</u-button>
        <u-button v-tooltip.left="'Tooltip'">left</u-button>
        <u-button v-tooltip.left-end="'Tooltip'">left-end</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.right-start="'Tooltip'">right-start</u-button>
        <u-button v-tooltip.right="'Tooltip'">right</u-button>
        <u-button v-tooltip.right-end="'Tooltip'">right-end</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.bottom-start="'Tooltip'">bottom-start</u-button>
        <u-button v-tooltip.bottom="'Tooltip'">bottom</u-button>
        <u-button v-tooltip.bottom-end="'Tooltip'">bottom-end</u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### Follow Mouse

将`'follow-cursor'`属性设置为`true`可以跟随鼠标。也可以传一个数字或对象调整位置偏移。

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

### Hover 时延迟消失

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
    disabled
    <u-tooltip content="Tooltip" disabled>disabled</u-tooltip>
</u-button>
```
