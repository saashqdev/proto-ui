The general form of a Formatter is a class containing a `format(value, ...settings)` method.

``` js
class SomeFormatter {
    format(value, ...settings) {
        ...
        return result;
    }
}
```

After the data is formatted by some Formatters, the information is not lost and can still be converted into original data. This type of Formatter is called a reversible Formatter, and they also contain the `parse(value, ...settings)` method.

``` js
class SomeFormatter {
    format(value, ...settings) {
        // ...
        return result;
    }

    parse(value, ...settings) {
        // ...
        return result;
    }
}
```

### For Filters

In addition to converting data directly when called as a method, the most common usage of Formatter is that it can be configured as a Vue filter, which is conveniently used in templates.

```vue
<template>
<div>
    <div>The current date is: {{ now | date('YYYY-MM-DD') }}</div>
</div>
</template>
<script>
import { utils } from 'library';

export default {
    filters: {
        date: utils.dateFormatter.format,
    },
    data() {
        return {
            now: new Date(),
        };
    },
};
</script>
```
