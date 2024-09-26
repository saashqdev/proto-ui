### Basic Usage

```html
<u-button @click="$refs.toast.show()">Components</u-button>
<u-toast ref="toast">2s</u-toast>
```

### Shortcut

``` vue
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

``` vue
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

### Embed Document Stream

The above Toasts are all fixed in the browser in the form of `fixed`, and the Toasts can also be embedded in the document stream. Just use the `u-toast` tag and set `position="static"`.

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

You can set the dwell time of all prompts by setting the `duration` parameter of toast, or you can set the dwell time of this prompt individually during `show`, in milliseconds.

``` vue
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

Setting `single` to `true` allows toast to always display only one prompt.

``` vue
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
