# Edit Editing Related

### select: (el: HTMLElement) => string

Select all text in the element and return the text content.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| el | HTMLElement | | The element to be selected |

#### Select Text in the Input Box

``` vue
<template>
<div>
    <input ref="input" value="This is a piece of text">
    <u-button @click="onClick">Select</u-button>
</div>
</template>
<script>
import { utils } from 'library';

export default {
    data() {
        return {
            selectedText: '',
        };
    },
    methods: {
        onClick() {
            this.selectedText = utils.select(this.$refs.input);
        },
    },
};
</script>
```

#### You can also Select the Text of Ordinary Elements

``` vue
<template>
<div>
    <div ref="container">A piece of text</div>
    <u-button @click="onClick">Select</u-button>
</div>
</template>
<script>
import { utils } from 'library';

export default {
    data() {
        return {
            selectedText: '',
        };
    },
    methods: {
        onClick() {
            this.selectedText = utils.select(this.$refs.container);
        },
    },
};
</script>
```

### copy: (text: string) => boolean

Copy text and return whether successful.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| text | String | | Text to be copied |

``` vue
<template>
<u-button @click="onClick">Copy</u-button>
</template>
<script>
import { utils } from 'library';

export default {
    data() {
        return {
            succeeded: undefined,
        };
    },
    methods: {
        onClick() {
            this.succeeded = utils.copy('A piece of text');
        },
    },
};
</script>
```
