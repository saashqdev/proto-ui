### Basic Usage

The default is radio mode. Placeholders can be set via the `placeholder` attribute.

``` html
<u-linear-layout>
    <u-select>
        <u-select-item>Water Cup</u-select-item>
        <u-select-item>Coffee</u-select-item>
        <u-select-item>Nut</u-select-item>
    </u-select>
    <u-select placeholder="Set placeholder">
        <u-select-item>Water Cup</u-select-item>
        <u-select-item>Coffee</u-select-item>
        <u-select-item>Nut</u-select-item>
    </u-select>
</u-linear-layout>
```

### Two-Way Binding

Use `v-model` or `:value.sync` for Two-Way Binding.

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select :value.sync="value">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: 'towel',
        };
    },
};
</script>
```

### Read Only, Disable, Disable an Item

``` html
<u-linear-layout>
    <u-select value="nut" readonly>
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
    </u-select>
    <u-select value="nut" disabled>
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
    </u-select>
    <u-select value="nut">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee" disabled>Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
    </u-select>
</u-linear-layout>
```

#### Empty to Disable

Sometimes you don't want the user to make a selection when there is no data. Use the `empty-disabled` attribute to automatically disable this situation.

``` html
<u-select value="nut" empty-disabled placeholder="No options yet"></u-select>
```

### Separator

``` html
<u-select value="nut">
    <u-select-item value="cup">Water Cup</u-select-item>
    <u-select-item value="toothbrush">Toothbrush</u-select-item>
    <u-select-divider></u-select-divider>
    <u-select-item value="nut">Nut</u-select-item>
    <u-select-item value="towel">Towel</u-select-item>
    <u-select-item value="sofa">Sofa</u-select-item>
</u-select>
```

### Group

``` html
<u-select>
    <u-select-group title="Washing Utensils">
        <u-select-item>Towel</u-select-item>
        <u-select-item>Toothbrush</u-select-item>
    </u-select-group>
    <u-select-group title="Cups">
        <u-select-item>Dental Cylinder</u-select-item>
        <u-select-item>Water Cup</u-select-item>
    </u-select-group>
    <u-select-group title="Tableware">
        <u-select-item>Chopsticks</u-select-item>
        <u-select-item>Bowl</u-select-item>
    </u-select-group>
</u-select>
```

### Clearable

``` html
<u-select value="coffee" clearable>
    <u-select-item value="cup">Water Cup</u-select-item>
    <u-select-item value="coffee">Coffee</u-select-item>
    <u-select-item value="nut">Nut</u-select-item>
</u-select>
```

### Multiple Selection Mode

Enable multiple selection mode through the `multiple` attribute. Two-Way Binding can be performed using `v-model` or `:value.sync`.

``` vue
<template>
<u-select multiple v-model="values">
    <u-select-item value="cup">Water Cup</u-select-item>
    <u-select-item value="coffee">Coffee</u-select-item>
    <u-select-item value="nut">Nut</u-select-item>
    <u-select-item value="towel">Towel</u-select-item>
    <u-select-item value="sofa">Sofa</u-select-item>
</u-select>
</template>
<script>
export default {
    data() {
        return {
            values: ['nut', 'towel'],
        };
    },
};
</script>
```

### Tags Style

How to display when there are too many Tags.

``` vue
<template>
<u-linear-layout>
    <u-select multiple tags-overflow="hidden" v-model="value" placeholder="Omit if Too Many">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select multiple tags-overflow="collapse" v-model="value" placeholder="Shrink when Too Much">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
    <u-select multiple tags-overflow="visible" v-model="value" placeholder="Display when there are Too Many">
        <u-select-item value="cup">Water Cup</u-select-item>
        <u-select-item value="coffee">Coffee</u-select-item>
        <u-select-item value="nut">Nut</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
        <u-select-item value="sofa">Sofa</u-select-item>
    </u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['sofa', 'nut', 'towel'],
        };
    },
};
</script>
```

### Can be Repeated

Setting the `duplicated` attribute allows options to be duplicated.

``` vue
<template>
<u-select multiple duplicated v-model="values">
    <u-select-item value="cup">Water Cup</u-select-item>
    <u-select-item value="coffee">Coffee</u-select-item>
    <u-select-item value="nut">Nut</u-select-item>
    <u-select-item value="towel">Towel</u-select-item>
    <u-select-item value="sofa">Sofa</u-select-item>
</u-select>
</template>
<script>
export default {
    data() {
        return {
            values: ['nut', 'towel', 'nut'],
        };
    },
};
</script>
```
