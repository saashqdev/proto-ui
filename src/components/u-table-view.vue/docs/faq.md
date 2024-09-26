### 控制显隐

如果要对表格组件控制显隐，请尽量使用`v-if`而不要使用`v-show`。

因为有些尺寸是动态计算得出的，初始隐藏时计算的某些值不正确，`v-if`可以通过`mounted`触发`handleResize`方法，而`v-show`则不能。

比如在下面的例子中，使用了`max-height`的情况下,`v-show`会有些小问题。

#### v-if

``` vue
<template>
<div>
    <u-link @click="visible = !visible">展开/收起</u-link>
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
    <u-link @click="visible = !visible">展开/收起</u-link>
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
