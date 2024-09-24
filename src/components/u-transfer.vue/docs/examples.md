### Basic Usage

``` vue
<template>
<u-transfer :source="source" :target="target">
</u-transfer>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: 'Water Cup', value: 'cup' },
                { text: 'Nut', value: 'nut' },
                { text: 'Towel', value: 'towel' },
                { text: 'Sofa', value: 'sofa' },
                { text: 'Toothbrush', value: 'toothbrush' },
                { text: 'Bowl', value: 'bowl' },
            ],
            target: [],
        };
    },
};
</script>
```

### 禁用某一项

``` vue
<template>
<u-transfer :source="source" :target="target">
</u-transfer>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: 'Water Cup', value: 'cup' },
                { text: 'Nut', value: 'nut' },
                { text: 'Towel', value: 'towel' },
                { text: 'Sofa', value: 'sofa', disabled: true },
                { text: 'Toothbrush', value: 'toothbrush', disabled: true },
                { text: 'Bowl', value: 'bowl' },
            ],
            target: [],
        };
    },
};
</script>
```
