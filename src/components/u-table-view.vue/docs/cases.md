### Too Long Text Problem

#### Default Multi-Line Display

``` html
<u-table-view line="horizontal" striped :data="[
    { id: 1, name: 'Homer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer Simpson', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', birthday: '19910528' },
    { id: 2, name: 'Marge Simpson', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', birthday: '19920914' },
    { id: 3, name: 'John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', birthday: '19900228' },
    { id: 4, name: 'Bart Simpson', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', birthday: '19891210' },
    { id: 5, name: 'Dave Cork', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', birthday: '19930716' },
]">
    <u-table-view-column title="Serial Number" field="id" width="10%"></u-table-view-column>
    <u-table-view-column title="Name" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Date of Birth" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### Omit Display

``` html
<u-table-view line="horizontal" striped :data="[
    { id: 1, name: 'Homer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer SimpsonHomer Simpson', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', birthday: '19910528' },
    { id: 2, name: 'Marge Simpson', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', birthday: '19920914' },
    { id: 3, name: 'John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', birthday: '19900228' },
    { id: 4, name: 'Bart Simpson', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', birthday: '19891210' },
    { id: 5, name: 'Dave Cork', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', birthday: '19930716' },
]">
    <u-table-view-column title="Serial Number" field="id" width="10%"></u-table-view-column>
    <u-table-view-column ellipsis title="Name" field="name" width="20%"></u-table-view-column>
    <u-table-view-column ellipsis title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Date of Birth" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### Column Distribution

#### All Percentages

``` html
<u-table-view striped :data="[
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
]" style="max-height: 300px;">
    <u-table-view-column title="Serial Number" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="Name" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Province" field="province" width="20%"></u-table-view-column>
    <u-table-view-column title="City" field="city" width="20%"></u-table-view-column>
    <u-table-view-column title="District and County" field="district" width="40%"></u-table-view-column>
    <u-table-view-column title="Address" field="address" width="40%"></u-table-view-column>
    <u-table-view-column title="Date of Birth" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### Combining Percentages with Numbers, Scrolling Horizontally

``` html
<u-table-view striped :data="[
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
]" style="max-height: 300px;">
    <u-table-view-column title="Serial Number" field="id" width="10%"></u-table-view-column>
    <u-table-view-column title="Name" field="name" width="30%"></u-table-view-column>
    <u-table-view-column title="Province" field="province" width="200"></u-table-view-column>
    <u-table-view-column title="City" field="city" width="200"></u-table-view-column>
    <u-table-view-column title="District and County" field="district" width="200"></u-table-view-column>
    <u-table-view-column title="Address" field="address" width="400"></u-table-view-column>
    <u-table-view-column title="Date of Birth" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### Fixed Column

``` html
<u-table-view striped :data="[
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
]" style="max-height: 300px;">
    <u-table-view-column fixed title="Serial Number" field="id" width="5%"></u-table-view-column>
    <u-table-view-column fixed title="Name" field="name" width="10%"></u-table-view-column>
    <u-table-view-column title="Province" field="province" width="200"></u-table-view-column>
    <u-table-view-column title="City" field="city" width="200"></u-table-view-column>
    <u-table-view-column fixed title="Date of Birth" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### Sort

Add the `sortable` attribute to columns that can be sorted.

``` html
<u-table-view :data="[
    { id: 1, name: 'Homer Simpson', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', birthday: '19910528' },
    { id: 2, name: 'Marge Simpson', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', birthday: '19920914' },
    { id: 3, name: 'John Doe', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', birthday: '19900228' },
    { id: 4, name: 'Bart Simpson', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', birthday: '19891210' },
    { id: 5, name: 'Dave Cork', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', birthday: '19930716' },
]">
    <u-table-view-column sortable title="Serial Number" field="id" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="Name" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column sortable title="Date of Birth" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

Use the `sorting` attribute on `<u-table-view>` to specify the default sort order.

``` html
<u-table-view :sorting="{ field: 'birthday', order: 'asc' }" :data="[
    { id: 1, name: 'Homer Simpson', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', birthday: '19910528' },
    { id: 2, name: 'Marge Simpson', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', birthday: '19920914' },
    { id: 3, name: 'John Doe', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', birthday: '19900228' },
    { id: 4, name: 'Bart Simpson', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', birthday: '19891210' },
    { id: 5, name: 'Dave Cork', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', birthday: '19930716' },
]">
    <u-table-view-column sortable title="Serial Number" field="id" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="Name" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column sortable title="Date of Birth" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### Multiple Choice Questions

The other is to specify the unique value field in the data through the `value-field` attribute, and then perform Two-Way Binding on the selected value through `:values.sync`.

``` vue
<template>
<u-table-view striped value-field="id" :values="values" :data="data">
    <u-table-view-column type="checkbox" title="Select" width="8%"></u-table-view-column>
    <u-table-view-column title="Username" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            values: ['5cd49be8f65c4738', 'f799a0467c494601'],
            data: [
                { id: '07cdcb8ed5e94cec', name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
        };
    },
};
</script>
```

### Local Error Reporting

Local errors should not cause the entire form to crash.

``` vue
<template>
<u-table-view striped value-field="id" :values="values" :data="data">
    <u-table-view-column type="checkbox" title="Select" width="8%"></u-table-view-column>
    <u-table-view-column title="Username" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address">
        <template slot="cell" slot-scope="{ item, value }">
            <div>{{ value | someFilter }}</div>
        </template>
    </u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    filters: {
        someFilter(value) {
            throw Error('[ERROR] some errors');
        },
    },
    data() {
        return {
            values: ['5cd49be8f65c4738', 'f799a0467c494601'],
            data: [
                { id: '07cdcb8ed5e94cec', name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
        };
    },
};
</script>
```

### Value-Field

When the value-field needs to be edited, it is recommended to use another field.

``` vue
<template>
<u-table-view striped value-field="name" :values="values" :data="data">
    <u-table-view-column type="checkbox" title="Select" width="8%"></u-table-view-column>
    <u-table-view-column title="Username" field="name" width="12%">
        <template slot="cell" slot-scope="{ item, value }">
            <u-input v-model="item.name"></u-input>
        </template>
    </u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address">
        <template slot="cell" slot-scope="{ item, value }">
            <u-input v-model="item.address"></u-input>
        </template>
    </u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            values: ['5cd49be8f65c4738', 'f799a0467c494601'],
            data: [
                { id: '07cdcb8ed5e94cec', name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
        };
    },
};
</script>
```
###  When the Data is Later Loaded in, the Height Should be Recalculated

``` vue
<template>
<u-table-view striped :data="data">
    <u-table-view-column type="checkbox" title="Select" width="8%"></u-table-view-column>
    <u-table-view-column title="Username" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            data: undefined,
        };
    },
    created() {
        this.load();
    },
    methods: {
        load() {
            setTimeout(() => {
                this.data = [
                    { id: '07cdcb8ed5e94cec', name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
                    { id: '5cd49be8f65c4738', name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
                    { id: 'f799a0467c494601', name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
                    { id: '40e8ca488a1c4bce', name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
                    { id: '150823cc351642b6', name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
                ];
            }, 2000);
        },
    },
};
</script>
```

#### Data-Source Error Case

``` vue
<template>
<u-table-view striped :data-source="load">
    <u-table-view-column title="Username" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
];

// Construct a larger number of 500 pieces of data
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.name += '-' + (Math.random() * 20 >> 0);
    item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
    item.createdTime += i * 1000 * 3600 * 24;
    item.loginTime += i * 1000 * 3600 * 24;
    remoteData.push(item);
}

export default {
    methods: {
        load() {
            // Use Promise and Settimeout to simulate a back -end request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('error');
                }, 400);
            });
        },
    },
};
</script>
```

### Used in Step Bar
``` vue
<template>
<u-steps :value="value">
    <u-step title="Step1">
        Content1
    <u-linear-layout>
        <u-button @click="onNext">Next</u-button>
    </u-linear-layout>
    </u-step>
    <u-step title="Step2">
        <u-table-view striped :data="data">
            <u-table-view-column type="checkbox" title="Select" width="8%"></u-table-view-column>
            <u-table-view-column title="Username" field="name" width="12%"></u-table-view-column>
            <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
            <u-table-view-column title="Address" field="address"></u-table-view-column>
            <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        </u-table-view>
        <u-linear-layout>
            <u-button @click="onPrev">Previous Step</u-button>
            <u-button @click="onNext">Next</u-button>
        </u-linear-layout>
    </u-step>
    <u-step title="Step3">
        Content3
        <u-linear-layout>
            <u-button @click="onPrev">Previous Step</u-button>
            <u-button>Create</u-button>
        </u-linear-layout>
    </u-step>
</u-steps>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { id: '07cdcb8ed5e94cec', name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
            value: 0,
        };
    },
    methods: {
        onNext() {
            this.value += 1;
        },
        onPrev() {
            this.value -= 1;
        },
    },
};
</script>
```

### Sort + Adjust Column Width

``` vue
<template>
<u-table-view resizable striped :data="data" pageable :page-size="10"
    :filtering="{ address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario' }">
    <u-table-view-column sortable title="Username" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address" :filters="[
        { text: 'All' },
        { text: 'Kubeworkz Building', value: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario' },
        { text: 'Springfield Technology Park', value: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario' },
        { text: 'Skunkhollow Technology Park', value: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario' },
        { text: 'Camden Science and Technology Park', value: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario' },
    ]"></u-table-view-column>
    <u-table-view-column sortable title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"
></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];

        // Construct a larger number of 500 pieces of data
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.name += '-' + (Math.random() * 20 >> 0);
            item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

### The Paging Adjustment does not Come Back when Switching, and Paging Errors are Reported.

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10" remote-paging show-total show-sizer>
    <u-table-view-column title="Username" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
];

// Construct a larger number of 500 pieces of data
const remoteData = [];
for (let i = 0; i < 15; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.name += '-' + (Math.random() * 20 >> 0);
    item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
    item.createdTime += i * 1000 * 3600 * 24;
    item.loginTime += i * 1000 * 3600 * 24;
    remoteData.push(item);
}

export default {
    methods: {
        load({ paging }) {
            // Promise and setTimeout are used here to simulate a backend request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        total: remoteData.length,
                        data: remoteData.slice(paging.offset, paging.offset + paging.limit),
                    });
                }, 400);
            });
        },
    },
};
</script>
```
