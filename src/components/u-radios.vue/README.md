<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# URadios Radio Group

**UI Component**, **Form Control**, **Block Level Display**

## Example
### Basic Usage

``` html
<u-radios value="Towel">
    <u-radio label="Water Cup">Water Cup</u-radio>
    <u-radio label="Nut">Nut</u-radio>
    <u-radio label="Towel">Towel</u-radio>
    <u-radio label="Sofa">Sofa</u-radio>
</u-radios>
```

### Read Only, Disable, Disable an Item

``` html
<u-linear-layout direction="vertical">
    <u-radios value="Towel" readonly>
        <u-radio label="Water Cup">Water Cup</u-radio>
        <u-radio label="Nut">Nut</u-radio>
        <u-radio label="Towel">Towel</u-radio>
        <u-radio label="Sofa">Sofa</u-radio>
    </u-radios>
    <u-radios value="Towel" disabled>
        <u-radio label="Water Cup">Water Cup</u-radio>
        <u-radio label="Nut">Nut</u-radio>
        <u-radio label="Towel">Towel</u-radio>
        <u-radio label="Sofa">Sofa</u-radio>
    </u-radios>
    <u-radios value="Nut">
        <u-radio label="Water Cup">Water Cup</u-radio>
        <u-radio label="Nut">Nut</u-radio>
        <u-radio label="Towel" disabled>Towel</u-radio>
        <u-radio label="Sofa" disabled>Sofa</u-radio>
    </u-radios>
</u-linear-layout>
```

## URadios API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any | | | Currently selected value |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert the `<u-radio>` subcomponent.

### Events

#### @before-select

Trigger before selecting an item

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selection |
| $event.oldValue | any | Old value |
| $event.itemVM | URadio | Selection subcomponent |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | URadios | Send event instance |

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Value of selection |
| senderVM | URadios | Send event instance |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Changed value |
| $event.oldValue | any | Old value |
| $event.itemVM | URadio | Selection subcomponent |
| senderVM | URadios | Send event instance |

#### @change

Fires when the selection value changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selection |
| $event.oldValue | any | Old value |
| $event.item | object | Object related to selection item |
| $event.itemVM | URadio | Selection subcomponent |
| senderVM | URadios | Send event instance |

## URadio API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| label | any | | | Radio button label. The value used to associate the radio group |
| readonly | boolean | | `false` | Disable readonly |
| disabled | boolean | | `false` | Disable this |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @before-select

Trigger before selecting this

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.label | any | The label for this item |
| $event.itemVM | URadio | This component |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | URadio | Send event instance |
