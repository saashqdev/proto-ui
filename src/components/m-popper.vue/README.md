<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# MPopper Popup Layer

## Example
### Basic Usage

Wrap the content that needs to pop up with `<m-popper>` and insert it into the element that triggers the event.

``` html
<u-button>
    click
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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| opened.sync | boolean | | `false` | Popup/closed status |
| trigger | string | | `'click'` | Trigger method. Optional values: `'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| reference | string, HTMLElement, Function | | `'parent'` | Reference element. Optional values: `'parent'` represents the parent element, `'prev'` represents the previous element, and `'next'` represents the next element. You can also pass an HTML element, or a method for returning the element |
| placement | string | | `'bottom'` | Popup position. Optional values: `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start' `, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| hover-delay | number | | `0` | Delay time when trigger is `'hover'` |
| hide-delay | number | | `0` | The hide delay time when trigger is `'hover'` |
| append-to | string | | `'body'` | Set which element to add to. Optional value: `'body'` means adding to document.body, `'reference'` means adding to reference element |
| boundaries-element | Element, string | | `'window'` | Margin element. Used to define the margin of the pop-up layer, which defaults to the first scrolling parent element |
| escape-with-reference | boolean | | `true` | When the trigger element leaves the margin, the popup layer leaves/remains within the margin element |
| follow-cursor | boolean, number, object | | `false` | Whether to follow the mouse |
| offset | string | | `'0'` | Pop-up layer offset, such as: '10', '10px 10px', '10% 10%', the first value represents horizontal offset, the second value represents vertical Displacement, the default unit is `px` |
| options | object | | | Supplementary options for popper.js |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert the content that needs to pop up.

### Events

#### @before-open

Triggered before pop-up.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | Prevent pop-up process |
| senderVM | MPopper | Send event instance |

#### @open

Fired on popup.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | void | Empty |
| senderVM | MPopper | Send event instance |

#### @before-close

Triggered before hiding.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | Prevent hidden process |
| senderVM | MPopper | Send event instance |

#### @close

Triggered when hidden.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | void | Empty |
| senderVM | MPopper | Send event instance |

#### @before-toggle

@deprecated

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @toggle

@deprecated

| Param | Type | Description |
| ----- | ---- | ----------- |

### Methods

#### open()

Pop up instance.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### close()

Shut down the instance.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### toggle(opened?)

Toggle popup/closed status.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| opened? | boolean | | Optional. popup/closed status |

#### update()

Update the popper instance. Refer to [Popper.update()](https://popper.js.org/popper-documentation.html#Popper.update).

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### scheduleUpdate()

Updating the popper instance together during the next UI rendering has better performance than `update()`. Refer to [Popper.scheduleUpdate()](https://popper.js.org/popper-documentation.html#Popper.scheduleUpdate).

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
