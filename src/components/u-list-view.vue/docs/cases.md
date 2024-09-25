#### Front-End Paging

```vue
<template>
<div>
<u-list-view :data="test" style="height: 182px"></u-list-view>
<u-button @click="onClick">Incoming</u-button>
</div>
</template>
<script>
export default {
    data() {
        // Construct a larger number of 500 pieces of data
        let data = [];
        for (let i = 1; i <= 100; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        return { data, test: null };
    },
    methods: {
        onClick() {
            this.test = this.data;
        },
    },
};
</script>
```

#### Validate When Multiple Selections

``` vue
<template>
<u-validator :rules="rules">
    <u-list-view v-model="test" multiple>
        <u-list-view-item>AAA</u-list-view-item>
        <u-list-view-item>BBB</u-list-view-item>
        <u-list-view-item>CCC</u-list-view-item>
    </u-list-view>
</u-validator>
</template>
<script>
export default {
    data() {
        return {
            test: [],
            rules: [
                { required: true, trigger: 'input', validator(rule, value, cb) {
                    cb();
                } },
            ],
        };
    },
    methods: {
        onClick() {
            this.test = this.data;
        },
    },
};
</script>
```
