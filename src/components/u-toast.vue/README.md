<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# UToast Toast Tips

## Example
### Basic Usage

```html
<u-button @click="$refs.toast.show()">Components</u-button>
<u-toast ref="toast">2s</u-toast>
```

### Shortcuts

``` view
<template>
<u-button @click="show">Toast</u-button>
</template>

<script>
export default {
    methods: {
        show() {
            this.$toast.show('This is a text.');
        },
    },
};
</script>
```

### Location Extension

``` view
<template>
<u-linear-layout>
    <u-button @click="show('top-center')">Top Center</u-button>
    <u-button @click="show('top-left')">Top Left</u-button>
    <u-button @click="show('top-right')">Top Right</u-button>
    <u-button @click="show('bottom-center')">Bottom Center</u-button>
    <u-button @click="show('bottom-left')">Bottom Left</u-button>
    <u-button @click="show('bottom-right')">Bottom Right</u-button>
</u-linear-layout>
</template>

<script>
export default {
    methods: {
        show(position) {
            this.$toast.position = position;
            this.$toast.show('position: ' + position);
        },
    },
};
</script>
```

### Embedding Document Flow

The above toasts are fixed in the browser in the form of `fixed`. You can also embed the toast in the document flow. Just use the `u-toast` tag and set `position="static"`.

``` html
<p><u-button @click="$refs.staticToast.show()">Static</u-button></p>
<u-toast ref="staticToast" position="static" text="Static Toast"></u-toast>
```

### Can be Closed

``` html
<p><u-button @click="$refs.closableToast.show()">Static</u-button></p>
<u-toast ref="closableToast" position="static" text="Closable" :duration="0" closable></u-toast>
```

### Prompt Stay Time

You can set the duration of all prompts by setting the `duration` parameter of toast, or you can set the duration of a single prompt during `show`, in milliseconds.

``` view
<template>
<u-linear-layout>
    <u-button @click="show(500)">0.5s</u-button>
    <u-button @click="show(1000)">1s</u-button>
    <u-button @click="show(2000)">2s</u-button>
    <u-button @click="show(0)">常驻</u-button>
</u-linear-layout>
</template>

<script>
export default {
    methods: {
        show(duration) {
            this.$toast.show('duration: ' + duration + ' ms', duration);
        },
    },
};
</script>
```

### Always Show One

Set `single` to `true` to make the toast always show only one prompt.

``` view
<template>
<u-button @click="show()">Single</u-button>
</template>

<script>
export default {
    data() {
        return {
            number: 1,
        };
    },
    methods: {
        show() {
            this.$toast.single = true;
            this.$toast.show('number: ' + this.number);
            this.number++;
        },
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| position | string | | `'top-center'` | Display position, optional values: `'top-center'`, `'top-left'`, `'top-right'`, `'bottom-center'`, `'bottom-left'`, `'bottom-right'`, `static` |
| duration | number | | `2000` | How long the prompt stays. `0` means permanent. |
| single | boolean | | `false` | Multiple prompts will be merged into one |
| text | string | | `''` | Default prompt content |
| color | string | | `'default'` | The color of the prompt |
| closable | boolean | | `false` | Whether to close the prompt |

### Events

#### @open

Triggered when a prompt pops up

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.text | string | Prompt content |
| $event.color | string | The color of the prompt |
| $event.duration | number | How long the prompt stays |
| senderVM | UToast | Send event instance |

#### @before-close

Fires before closing the prompt

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.text | string | Prompt content |
| $event.color | string | The color of the prompt |
| $event.duration | number | How long the prompt stays |
| $event.preventDefault | Function | Prevent the shutdown process |
| senderVM | UToast | Send event instance |

#### @close

Fired when the prompt is closed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.text | string | Prompt content |
| $event.color | string | The color of the prompt |
| $event.duration | number | How long the prompt stays |
| senderVM | UToast | Send event instance |