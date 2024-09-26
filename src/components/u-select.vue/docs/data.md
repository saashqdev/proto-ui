### Data and Data Sources

The basic Example uses tags to add data, which is suitable for scenarios where the amount of data is small, data operations are simple, or the template is customized.

If the amount of data is large, or operations such as filtering are required, the `data` or `data-source` attributes need to be used. The format of the `data` attribute is `Array<{ text, value }>`, which is abbreviated as `Array<Item>` below; the `data-source` attribute generally accepts a `load` function for asynchronous loading.

#### Pure Front-End Data

```vue
<template>
<u-select :data="data" placeholder="Pure front-end data"></u-select>
</template>
<script>
export default {
    data() {
        // Construct a large number of 100 pieces of data
        let data = [];
        for (let i = 1; i <= 100; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

### Pagination

#### Front-End Paging

When the amount of data is large, front-end paging can be performed by turning on the `pageable` attribute, and the default paging size can be modified with the `page-size` attribute.

```vue
<template>
<u-select :data="data" pageable placeholder="Front-end paging"></u-select>
</template>
<script>
export default {
    data() {
        // Construct a larger number of 500 pieces of data
        let data = [];
        for (let i = 1; i <= 500; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

#### One-Time Back-End Data, Front-End Paging

Pass in the `load` method in the `data-source` attribute to receive complete backend data.

The `load` method requires returning a `Promise<Array<Item>>` or `Promise<{ data: Array<Item>, total: Number }>` format. This will be called once when the component is initialized. If not needed, the `initial-load` attribute can be set to `false`.

Front-end paging can be performed when the `pageable` attribute is turned on.

```vue
<template>
<u-select :data-source="load" pageable :page-size="20" placeholder="Front-end paging"></u-select>
</template>
<script>
// Simulate the construction of remote data
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

export default {
    methods: {
        load() {
            // Here use Promise and setTimeout to simulate an asynchronous request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 500);
            });
        },
    },
};
</script>
```

#### Backend Paging

If you need to use back-end paging, enable the `remote-paging` function after passing the `load` method in the `data-source` attribute.

At this time, the `load` method will accept a `paging` parameter related to paging:

``` js
params.paging = {
    size: Number, // size of each page
    number: Number, //Number of pages. Count from 1
    offset: Number, // offset: (number - 1) * size
    limit: Number, // same as size
}
```

It is required to return a `Promise<Array<Item>>` or `Promise<{ data: Array<Item>, total: Number }>` format. Whether the page turns to the end is judged according to the `total` field. If not, it is judged according to the last time the array is empty.

```vue
<template>
    <u-linear-layout>
        <u-select :data-source="load" pageable remote-paging placeholder="Backend paging"></u-select>
        <u-select multiple :data-source="load" pageable remote-paging placeholder="Backend paging (multiple selection)" style="width: 240px"></u-select>
    </u-linear-layout>
</template>
<script>
// Simulate and construct a large number of 500 remote data
let remoteData = [];
for (let i = 1; i <= 500; i++)
    remoteData.push('item' + i);
remoteData = remoteData.map((text) => ({ text, value: text }));

export default {
    methods: {
        load({ paging }) {
            // Use Promise and setTimeout here to simulate an asynchronous request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData.slice(paging.offset, paging.offset + paging.limit));
                }, 500);
            });
        },
    },
};
</script>
```


### Filter

#### Front-End Filtering

Use the `filterable` attribute to enable filtering for quick search options.

``` vue
<template>
<u-linear-layout>
    <u-select :data="data" filterable clearable placeholder="Front-end Filtering"></u-select>
    <u-select multiple :data="data" filterable clearable placeholder="Front-end Filtering（multiple selection）" style="width: 240px"></u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        const data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

#### Matching Method

In the `match-method` attribute, you can configure the string matching method. Common ones include `includes`, `startsWith`, `endsWith`, and you can also pass a function.

```vue
<template>
<u-linear-layout>
    <u-select :data="data" filterable match-method="includes" placeholder="Just include (default)"></u-select>
    <u-select :data="data" filterable match-method="startsWith" placeholder="Only match starts"></u-select>
    <u-select :data="data" filterable match-method="endsWith" placeholder="Only match ends"></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        const data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

#### case sensitive

Case-insensitive by default, can be turned on with the `case-sensitive` attribute.

```vue
<template>
<u-linear-layout>
    <u-select :data="data" filterable placeholder="Case-insensitive (default)"></u-select>
    <u-select :data="data" filterable case-sensitive placeholder="Case-sensitive"></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        const data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

#### One-Time Backend Data, Front-End Filtering

Pass in the `load` method in the `data-source` attribute to receive complete backend data.

At this time, front-end filtering can be performed by turning on the `filterable` attribute.

```vue
<template>
<u-select :data-source="load" filterable clearable placeholder="Front-end Filtering"></u-select>
</template>
<script>
// Simulate the construction of remote data
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

export default {
    methods: {
        load() {
            // Here use Promise and setTimeout to simulate an asynchronous request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 300);
            });
        },
    },
};
</script>
```

#### Backend Filtering, Backend Paging

If you want to use back-end filtering, turn on the `remote-filtering` function after passing in the `load` method in the `data-source` attribute.

It can also be used with paging.

``` vue
<template>
<u-linear-layout>
    <u-select :data-source="load"
              pageable remote-paging
              filterable remote-filtering
              clearable placeholder="Backend filtering, backend paging">
    </u-select>
    <u-select multiple :data-source="load"
              pageable remote-paging
              filterable remote-filtering
              clearable placeholder="Backend filtering, backend paging (multiple selection)"
              style="width: 240px"></u-select>
</u-linear-layout>
</template>
<script>
// Simulate the construction of a large number of 500 remote data
let remoteData = [];
for (let i = 1; i <= 500; i++) {
    remoteData.push('item' + i);
    remoteData.push('info' + i);
    remoteData.push('detail' + i);
}
remoteData = remoteData.map((text) => ({ text, value: text }));

export default {
    methods: {
        load({ filterText, paging }) {
            const value = filterText.toLowerCase();

            // Here use Promise and setTimeout to simulate an asynchronous request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData.filter((item) => item.value.includes(value))
                        .slice(paging.offset, paging.offset + paging.limit)
                    );
                }, 300);
            });
        },
    },
};
</script>
```

### Automatic Supplement

On the basis of filtering,

Use the `auto-complete` attribute to enable filtering to quickly find options.

```vue
<template>
<u-linear-layout>
    <u-select :data="data" filterable clearable auto-complete placeholder="Auto-complete"></u-select>
    <u-select multiple :data="data" filterable clearable auto-complete placeholder="Auto-complete (multiple selection)" style="width: 240px"></u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        const data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```
