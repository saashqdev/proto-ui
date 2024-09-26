## Placeholder Formatter

This function is used to eliminate unfriendly experiences such as `NaN` or `[Object object]` when empty or abnormal data is passed in.

### Basic Usage

``` view
<template>
<div>
    <div>The string abc is displayed as: {{ formattedString }}</div>
    <div>The number 12 is displayed as: {{ formattedNumber }}</div>
    <div>NaN is displayed as: {{ formattedNaN }}</div>
    <div>Object is displayed as: {{ formattedObject }}</div>
    <div>Array is displayed as: {{ formattedArray }}</div>
</div>
</template>
<script>
import { utils } from 'library';

export default {
    data() {
        return {
            formattedString: utils.placeholderFormatter.format('abc'),
            formattedNumber: utils.placeholderFormatter.format(12),
            formattedNaN: utils.placeholderFormatter.format(NaN),
            formattedObject: utils.placeholderFormatter.format({}),
            formattedArray: utils.placeholderFormatter.format([]),
        };
    },
};
</script>
```

### Customization

It is also possible to create custom placeholder formatters.

``` view
<template>
<div>
    <div>The string abc is displayed as: {{ formattedString }}</div>
    <div>The number 12 is displayed as: {{ formattedNumber }}</div>
    <div>NaN is displayed as: {{ formattedNaN }}</div>
    <div>Object is displayed as: {{ formattedObject }}</div>
    <div>Array is displayed as: {{ formattedArray }}</div>
</div>
</template>
<script>
import { utils } from 'library';

const placeholderFormatter = new utils.PlaceholderFormatter('Load failed');

export default {
    data() {
        return {
            formattedString: placeholderFormatter.format('abc'),
            formattedNumber: placeholderFormatter.format(12),
            formattedNaN: placeholderFormatter.format(NaN),
            formattedObject: placeholderFormatter.format({}),
            formattedArray: placeholderFormatter.format([]),
        };
    },
};
</script>
```

### Params

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| value | Any | | Value to be formatted |
| placeholder | String | `'-'` | placeholder |

## Date Formatter

Used to convert a `Date` object or date string to the specified format.

### Basic Usage

``` view
<template>
<div>
    <div><code>new Date()</code> displays as: {{ formattedDate }}</div>
    <div><code>'2018-08-08'</code> displays as: {{ formattedString }}</div>
</div>
</template>
<script>
import { utils } from 'library';

export default {
    data() {
        return {
            formattedDate: utils.dateFormatter.format(new Date()),
            formattedString: utils.dateFormatter.format('2018-08-08'),
        };
    },
};
</script>
```

### Params

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| value | Date, String | | The value to be formatted. Can be a date object or a valid string |
| pattern | String | `'YYYY-MM-DD HH:mm:ss'` | Formatting template |

## Number Formatter

Converts a number to the specified format.

### Basic Usage

``` view
<template>
<div>
    <div>20 is displayed in the <code>'0000'</code> format as: {{ formattedNumber }}</div>
    <div>1234 is displayed in the format of <code>'$ #,##0.00'</code> as: {{ formattedCurrency }}</div>
</div>
</template>
<script>
import { utils } from 'library';

export default {
    data() {
        return {
            formattedNumber: utils.numberFormatter.format(20, '0000'),
            formattedCurrency: utils.numberFormatter.format(1234, '$ #,##0.00'),
        };
    },
};
</script>
```

### Params

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| value | Number, String | | The value to be formatted. Can be a number or a valid string |
| pattern | String | `'0'` | Format template |