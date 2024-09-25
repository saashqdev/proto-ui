### Basic Usage

``` html
<u-combo-slider></u-combo-slider>
```

### Maximum and Minimum Values

``` html
<u-combo-slider :value="36" :min="10" :max="50"></u-combo-slider>
```

### Precision and Interval

The precision indicates the smallest unit to be retained for the number. It can be an integer or a decimal. The input box will round based on it. Defaults to `1`, which is reserved to integers.

The interval represents the amount increased or decreased by clicking the button or pressing the up and down keys, preferably an integer multiple of the precision.

When the interval is `0`, the slider is dragged continuously and the value is retained to the accuracy.

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-combo-slider :value="20" :precision="5" :step="5"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-combo-slider :value="20" :precision="5" :step="20"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-combo-slider :value="20" :step="0"></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### Scope

Use `range` to further limit `value`, usually passing in an array, the first value represents the starting value of the range, and the second value represents the end value of the range.

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="50" :range="[20, 85]"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="40" :step="10" :range="[30]"></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### Synchronization Timing

Use the `sync-on` attribute to set when to synchronize the value to the `<u-slider>` component after input.

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-combo-slider :value="20" :precision="10" :step="20"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-combo-slider :value="20" :precision="10" :step="20" sync-on="blur"></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### Formatting

You can usually use the following characters to form a format string:

- `0` represents a numeric placeholder. If the length of the integer part is less than the number of placeholders, it is padded with `0`. If the fractional part is longer than the number of placeholders, it is rounded off.
- `#` represents a numeric placeholder. Only meaningful zeros are displayed and meaningless zeros are not displayed.
- `.` represents the decimal point.
- `,` means thousandths.

You can also pass in a format object containing `get` and `set` methods.

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-combo-slider :value="6" formatter="000"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-combo-slider :value="20" formatter="0%" hide-buttons></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### Read Only and Disabled

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="36" readonly></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="36" disabled></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```
