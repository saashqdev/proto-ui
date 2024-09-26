#### Modify Offset Distance

``` html
<u-linear-layout>
    <u-button>
        Hover (default)
        <u-tooltip offset="10">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        Hover (default)
        <u-tooltip offset="10% 10px">Tooltip</u-tooltip>
    </u-button>
</u-linear-layout>
```

#### Update Data

```vue
<template>
<u-button>
    Hover (default)
    <u-tooltip @mousemove.native="onMouseMove">{{ count }}</u-tooltip>
</u-button>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        onMouseMove(e) {
            this.count++;
        },
    },
};
</script>
```

#### Null Value

``` html
<u-button>
    Null Value
    <u-tooltip></u-tooltip>
</u-button>
```


### Complex Positioning Problem

``` html
<u-linear-layout>
    <span>
        Span
        <u-tooltip>Span</u-tooltip>
    </span>
    <u-button>
        Button
        <u-tooltip>Button</u-tooltip>
    </u-button>
    <u-button>
        Button
        <span>
            Test
            <u-tooltip>Button</u-tooltip>
        </span>
    </u-button>
    <u-select>
        <u-select-item>Apple</u-select-item>
        <u-select-item>Banana</u-select-item>
        <u-select-item>Cake<u-tooltip>Select Item</u-tooltip></u-select-item>
        <u-tooltip>Select</u-tooltip>
        <div>Test <u-tooltip>Select</u-tooltip></div>
    </u-select>
    <input v-tooltip="'Input'">
    <u-button>Button</u-button>
    <u-tooltip reference="prev">Button Prev</u-tooltip>
    <u-tooltip reference="next">Button Next</u-tooltip>
    <u-button>Button</u-button>
</u-linear-layout>
```
