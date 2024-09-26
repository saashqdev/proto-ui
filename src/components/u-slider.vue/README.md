<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# USlider Slider

**UI Component**, **Form Control**, **Block Level Display**

## Example
### Basic Usage

``` html
<u-slider :value="36"></u-slider>
```

### Maximum and Minimum Values

``` html
<u-slider :value="36" :min="10" :max="50"></u-slider>
```

### Continuous and Interval

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :step="0"></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :step="20"></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### Scope

Use `range` to further limit `value`, usually passing in an array, the first value represents the starting value of the range, and the second value represents the end value of the range.

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="50" :range="[20, 85]"></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="40" :step="10" :range="[30]"></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### Read Only and Disabled

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" readonly></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" disabled></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | number | | `0` | The value of the slider |
| min | number | | `0` | Minimum value |
| max | number | | `100` | Maximum value |
| step | number | | `1` | Interval, indicating the amount increased or decreased by clicking the button or pressing the up and down keys. `0` means continuous |
| precision | number | | `1` | Precision, indicating the smallest unit of numbers to be retained, either integers or decimals |
| range | Array | | `[]` | Further restrict `value`, usually passing in an array, the first value represents the start value of the range, and the second value represents the end value of the range. |
| readonly | boolean | | `false` | Whether it is read-only |
| disabled | boolean | | `false` | Whether to disable |

### Events

#### @input

Fires when dragging the slider

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | number | Slider value |
| senderVM | USlider | Send event instance |

#### @slide

Fires when dragging the slider

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | number | The value of the slider |
| $event.oldValue | number | Old value |
| $event.percent | number | The percentage of the slider position |
| senderVM | USlider | Send event instance |

#### @change

Fires when the slider's value changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | number | Changed value |
| $event.oldValue | number | Old value |
| senderVM | USlider | Send event instance |
