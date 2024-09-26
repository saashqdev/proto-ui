### Control Visibility

If you want to control the visibility of table components, please try to use `v-if` instead of `v-show`.

Because some sizes are calculated dynamically and some values   calculated during initial hiding are incorrect, `v-if` can trigger the `handleResize` method through `mounted`, but `v-show` cannot.

For example, in the following example, when `max-height` is used, `v-show` will have some minor problems.

#### v-if

``` vue
<template>
<div>
    <u-link @click="visible = !visible">Expand/Collapse</u-link>
    <div>
        <u-table-view v-if="visible" striped :data="data" style="max-height: 300px;">
            <u-table-view-column title="Serial Number" field="id"></u-table-view-column>
            <u-table-view-column title="Name" field="name"></u-table-view-column>
            <u-table-view-column title="Province" field="province"></u-table-view-column>
            <u-table-view-column title="City" field="city"></u-table-view-column>
        </u-table-view>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            data: [
                { id: 1, name: 'Homer Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz, 1931 Norris Avenue', birthday: '19910528' },
                { id: 2, name: 'Marge Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Skunkhollow Technology Park, 1901 Norris Avenue', birthday: '19920914' },
                { id: 3, name: 'John Doe', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Camden Science and Technology Park, 29 Barclay Street', birthday: '19900228' },
                { id: 4, name: 'Bart Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane', birthday: '19891210' },
                { id: 5, name: 'Dave Cork', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz, 1931 Norris Avenue', birthday: '19930716' },
                { id: 1, name: 'Homer Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz, 1931 Norris Avenue', birthday: '19910528' },
                { id: 2, name: 'Marge Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Skunkhollow Technology Park, 1901 Norris Avenue', birthday: '19920914' },
                { id: 3, name: 'John Doe', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Camden Science and Technology Park, 29 Barclay Street', birthday: '19900228' },
                { id: 4, name: 'Bart Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane', birthday: '19891210' },
                { id: 5, name: 'Dave Cork', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz, 1931 Norris Avenue', birthday: '19930716' },
            ],
        };
    },
};
</script>
```

#### v-show

``` vue
<template>
<div>
    <u-link @click="visible = !visible">Expand/Collapse</u-link>
    <div>
        <u-table-view v-show="visible" striped :data="data" style="max-height: 300px;">
            <u-table-view-column title="Serial Number" field="id"></u-table-view-column>
            <u-table-view-column title="Name" field="name"></u-table-view-column>
            <u-table-view-column title="Province" field="province"></u-table-view-column>
            <u-table-view-column title="City" field="city"></u-table-view-column>
        </u-table-view>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            data: [
                { id: 1, name: 'Homer Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz, 1931 Norris Avenue', birthday: '19910528' },
                { id: 2, name: 'Marge Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Skunkhollow Technology Park, 1901 Norris Avenue', birthday: '19920914' },
                { id: 3, name: 'John Doe', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Camden Science and Technology Park, 29 Barclay Street', birthday: '19900228' },
                { id: 4, name: 'Bart Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane', birthday: '19891210' },
                { id: 5, name: 'Dave Cork', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz, 1931 Norris Avenue', birthday: '19930716' },
                { id: 1, name: 'Homer Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz, 1931 Norris Avenue', birthday: '19910528' },
                { id: 2, name: 'Marge Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Skunkhollow Technology Park, 1901 Norris Avenue', birthday: '19920914' },
                { id: 3, name: 'John Doe', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Camden Science and Technology Park, 29 Barclay Street', birthday: '19900228' },
                { id: 4, name: 'Bart Simpson', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane', birthday: '19891210' },
                { id: 5, name: 'Dave Cork', province: 'Ontario', city: 'Fort Erie', district: 'Peele', address: 'Kubeworkz, 1931 Norris Avenue', birthday: '19930716' },
            ],
        };
    },
};
</script>
```
