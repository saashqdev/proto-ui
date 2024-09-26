# v-repeat-click Repeat Click

The browser's native click event can only be triggered once when an element is clicked.

This directive enables the method to be called repeatedly when an element is pressed. Common Examples such as [UNumberInput](../../components/u-number-input) click up and down buttons.

There will be an initial waiting period.

## Example

``` vue
<template>
<div>
    <u-button v-repeat-click="onClick">Click Me!</u-button> {{ count }}
</div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        onClick() {
            this.count++;
        },
    },
};
</script>
```

## API

### Usage

| Params | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| value | Function | | The method to be called |
| arg | Number | `400` | Initial click wait time (milliseconds) |

### Modifiers

| Modifier | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| self | Boolean | `false` | Modifier same as Vue directive |
| stop | Boolean | `false` | Modifier with the same Vue directive |
| prevent | Boolean | `false` | Modifier with the same Vue directive |
| capture | Boolean | `false` | Modifier with the same Vue directive |
| once | Boolean | `false` | Modifier with the same Vue directive |
| passive | Boolean | `false` | Modifier with the same Vue directive |
