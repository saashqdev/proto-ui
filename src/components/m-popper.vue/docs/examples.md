### Basic Usage

Wrap the content that needs to pop up with `<m-popper>` and insert it into the element that triggers the event.

``` html
<u-button>
    Click
    <m-popper>
        <u-block>Popper</u-block>
    </m-popper>
</u-button>
```

### Trigger Method

#### Automatically Trigger

``` html
<u-linear-layout>
    <u-button>
        Click (default)
        <m-popper trigger="click">
            <u-block>Popper</u-block>
        </m-popper>
    </u-button>
    <u-button>
        Hover
        <m-popper trigger="hover">
            <u-block>Popper</u-block>
        </m-popper>
    </u-button>
    <u-button>
        Right-Click
        <m-popper trigger="right-click">
            <u-block>Popper</u-block>
        </m-popper>
    </u-button>
    <u-button>
        Double-Click
        <m-popper trigger="double-click">
            <u-block>Popper</u-block>
        </m-popper>
    </u-button>
</u-linear-layout>
```

#### Manual Trigger

You can also manually trigger the popup/close of the popup layer:

```vue
<template>
<u-button @click="opened = !opened">
    {{ opened ? 'hide' : 'pop' }}
    <m-popper trigger="manual" :opened.sync="opened">
        <u-block>Popper</u-block>
    </m-popper>
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

#### Hover’s Appearance and Disappearance Time

``` html
<u-button>
    Hover
    <m-popper trigger="hover" :hover-delay="200" :hide-delay="1000">
        <u-block>Popper</u-block>
    </m-popper>
</u-button>
```

### Pop-Up Directions

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            Top-Start
            <m-popper placement="top-start">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Top
            <m-popper placement="top">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Top-End
            <m-popper placement="top-end">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Left-Start
            <m-popper placement="left-start">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Left
            <m-popper placement="left">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Left-End
            <m-popper placement="left-end">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Right-Start
            <m-popper placement="right-start">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Right
            <m-popper placement="right">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Right-End
            <m-popper placement="right-end">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Bottom-Start
            <m-popper placement="bottom-start">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Bottom
            <m-popper placement="bottom">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Bottom-End
            <m-popper placement="bottom-end">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

### Follow the Mouse

Set the `'follow-cursor'` property to `true` to follow the mouse. You can also pass a number or object to adjust the position offset.

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            Top-Start
            <m-popper trigger="hover" placement="top-start" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Top
            <m-popper trigger="hover" placement="top" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Top-End
            <m-popper trigger="hover" placement="top-end" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Left-Start
            <m-popper trigger="hover" placement="left-start" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Left
            <m-popper trigger="hover" placement="left" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Left-End
            <m-popper trigger="hover" placement="left-end" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Right-Start
            <m-popper trigger="hover" placement="right-start" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Right
            <m-popper trigger="hover" placement="right" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Right-End
            <m-popper trigger="hover" placement="right-end" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Bottom-Start
            <m-popper trigger="hover" placement="bottom-start" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Bottom
            <m-popper trigger="hover" placement="bottom" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Bottom-End
            <m-popper trigger="hover" placement="bottom-end" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            Custom
            <m-popper trigger="hover" placement="bottom-start" :follow-cursor="50">
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

### Disable

``` html
<u-button disabled>
    Disabled
    <m-popper disabled>
        <u-block>Popper</u-block>
    </m-popper>
</u-button>
```
