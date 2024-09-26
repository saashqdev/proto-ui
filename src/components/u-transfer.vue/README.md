<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UTransfer Transfer

## Example
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

### Disable a Certain Item

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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| source | Array\<{ text, value }\> | | | Original data list |
| target | Array\<{ text, value }\> | | | Target data list |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)


### Events

#### @transfer

Triggered when data is transferred

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.source | Array\<{ text, value }\> | Original data list |
| $event.target | Array\<{ text, value }\> | Target data list |
| $event.transfer | Array\<{ text, value }\> | Moved items |
| $event.transferValues   | Array | Values   of moved items |
| senderVM | Vue | Send event instance |

#### @change

Triggered when data changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.source | Array\<{ text, value }\> | Original data list |
| $event.target | Array\<{ text, value }\> | Target data list |
| $event.transfer | Array\<{ text, value }\> | Moved items |
| $event.transferValues   | Array | Values   of moved items |
| senderVM | Vue | Send event instance |
