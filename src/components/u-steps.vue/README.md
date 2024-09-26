<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# USteps Step Bar

**UI Components**, **Block Level Display**

## Example
### Basic Usage

Steps start from `0`.

``` html
<u-steps :value="1">
    <u-step title="Step1">Content1</u-step>
    <u-step title="Step2">Content2</u-step>
    <u-step title="Step3">Content3</u-step>
</u-steps>
```

### Customize Title

``` html
<u-steps :value="1">
    <u-step>
        <span slot="title">Step <u-label>1</u-label></span>
        Content1
    </u-step>
    <u-step>
        <span slot="title">Step <u-label>2</u-label></span>
        Content2
    </u-step>
    <u-step>
        <span slot="title">Step <u-label>3</u-label></span>
        Content3
    </u-step>
</u-steps>
```

### Width Auto

``` html
<u-steps :value="1" size="auto">
    <u-step title="Step1">Content1</u-step>
    <u-step title="Step2">Content2</u-step>
    <u-step title="Step3">Content3</u-step>
</u-steps>
```

### Optional

Setting the `readonly` attribute to `false` enables selection.

``` html
<u-steps :value="1" :readonly="false">
    <u-step title="Step1">Content1</u-step>
    <u-step title="Step2">Content2</u-step>
    <u-step title="Step3">Content3</u-step>
</u-steps>
```

### Disable

``` html
<u-steps :value="0" :readonly="false">
    <u-step title="Step1">Content1</u-step>
    <u-step title="Step2" disabled>Content2</u-step>
    <u-step title="Step3">Content3</u-step>
</u-steps>
```

## USteps API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | number | | `0` | Current step number |
| readonly | boolean | | `false` | Whether it is read-only. You can select | if it is not read-only.
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert `<u-step>` subcomponent.

### Events

#### @before-select

Trigger before selecting a step

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selected step |
| $event.oldValue | any | Old value |
| $event.itemVM | UStep | Select step instance |
| $event.oldVM | UStep | Old selected step instance |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | USteps | Send event instance |

#### @select

Triggered when a step is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selected step |
| $event.oldValue | any | Old value |
| $event.itemVM | UStep | Select step instance |
| $event.oldVM | UStep | Old selected step instance |
| senderVM | USteps | Send event instance |

## UStep API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Step name |
| disabled | boolean | | `false` | Whether to disable this tab |

### Slots

#### (default)

Insert text or HTML.

#### Title

Custom title text.
