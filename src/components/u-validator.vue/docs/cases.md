### String Validation

#### Ordinary

``` html
<u-validator label="Username" rules="required | ^azAZ | azAZ09$ | min(4)">
    <u-input></u-input>
</u-validator>
```

#### Ordinary

``` html
<u-validator label="Username" rules="required@bi #Please enter | ^azAZ #Start with a letter | azAZ09$ | min(4) @b">
    <u-input></u-input>
</u-validator>
```

#### Ordinary

``` html
<u-validator label="Username" rules="required@bi #Please enter 'wafew' | ^azAZ #Start with a letter/%()J25 | azAZ09$ | min(4) @b #(23,40) ">
    <u-input></u-input>
</u-validator>
```

#### Ordinary

``` html
<u-validator action="Enter" label="Username" rules=" minLength(4) @b">
    <u-input></u-input>
</u-validator>
```

#### Ordinary

``` html
<u-validator label="Username" rules="required('@') | ^azAZ('#|')">
    <u-input></u-input>
</u-validator>
```

#### Ordinary

``` html
<u-validator label="Username" rules="required@bi #Please enter #wafew' | ^azAZ #Start with a letter/%()J25 | azAZ09$ | min(4) @b #@(23,40 )">
    <u-input></u-input>
</u-validator>
```

### Temp Rule

```vue
<template>
<u-validator label="Port" rules="required | port">
    <u-input></u-input>
</u-validator>
</template>
<script>
export default {
    rules: {
        port: { validate: 'range', args: [1000, 65535], trigger: 'blur', message: 'port' },
    },
};
</script>
```

### If the Variable cannot be Found, an Error Should be Reported.

```vue
<template>
<u-validator label="Port" rules="required | min(something)">
    <u-input></u-input>
</u-validator>
</template>
<script>
export default {
    data() {
        return {
            some: {
                object: {
                    number: 20,
                },
            },
        };
    },
};
</script>
```
