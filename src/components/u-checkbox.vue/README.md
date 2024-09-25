<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UCheckbox Multiple Checkbox

## Example
### Basic

``` html
<u-checkbox>Checkbox</u-checkbox>
```

### v-model

``` vue
<template>
<u-checkbox v-model="value">{{ value }}</u-checkbox>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
    },
};
</script>
```

### Disabled

``` html
<u-linear-layout>
    <u-checkbox :value="true" readonly>Readonly</u-checkbox>
    <u-checkbox :value="true" disabled>Disabled</u-checkbox>
</u-linear-layout>
```

### Indeterminate

``` html
<u-checkbox :value="null">Indeterminate</u-checkbox>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | boolean, null |  | `false` | Checked status. `null` means indeterminate status. |
| readonly | boolean |  | `false` | Readonly |
| disabled | boolean |  | `false` | Disabled |

### Events

#### @input

Emit when checking.

| Param | Type | Description |
| ----- | ---- | ----------- |
| undefined | boolean, null | Checked value |

#### @change

Emit when change value.

| Param | Type | Description |
| ----- | ---- | ----------- |
| undefined | boolean, null | New value |
| undefined | boolean, null | Old value |
