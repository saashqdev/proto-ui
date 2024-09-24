```vue
<template>
<div>In this example, the component adds a blue shadow to its parent. </div>
</template>
<script>
import { MEmitter } from '@@';

export default {
    mixins: [MEmitter],
    mounted() {
        this.$contact('u-code-example', (codeExampleVM) => {
            codeExampleVM.$el.style.boxShadow = '0 2px 10px rgb(69, 124, 208)';
        });
    },
    destroyed() {
        this.$contact('u-code-example', (codeExampleVM) => {
            codeExampleVM.$el.style.boxShadow = '';
        });
    },
};
</script>
```
