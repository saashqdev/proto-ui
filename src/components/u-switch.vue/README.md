<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# USwitch Switch

**UI Components**, **Form Controls**, **Inline Display**

## Example
### Basic Usage

``` html
<u-switch></u-switch>
```

### Value Binding

``` vue
<template>
<u-switch v-model="value" width="wide">{{ value ? 'ON' : 'OFF' }}</u-switch>
</template>
<script>
export default {
    data() {
        return { value: false };
    },
};
</script>
```

### Read Only and Disabled

``` html
<u-linear-layout>
    <u-switch readonly></u-switch>
    <u-switch disabled></u-switch>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | boolean | | `false` | Switch status |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

#### Undefined

Insert text or HTML

### Events

#### @before-toggle

Triggered before switching state

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | boolean | Switch status |
| $event.oldValue | boolean | Old switch state |
| $event.preventDefault | Function | Prevent switching process |
| senderVM | USwitch | Send event instance |

#### @input

Triggered when switching state

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | boolean | Switch state after switching |
| senderVM | USwitch | Send event instance |

#### @on

Triggered when the switch is turned on

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | None |
| senderVM | USwitch | Send event instance |

#### @off

Triggered when switch is closed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | None |
| senderVM | USwitch | Send event instance |

#### @toggle

Triggered when switching state

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | boolean | Switch status |
| $event.oldValue | boolean | Old switch state |
| senderVM | USwitch | Send event instance |

#### @change

Triggered when switch state changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | boolean | Switch status |
| $event.oldValue | boolean | Old switch state |
| senderVM | USwitch | Send event instance |
