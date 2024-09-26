The basic Example shows how to initially configure data, modify styles in the table view component, and how to deal with excessive data.

### Basic Usage

Below is Basic Usage in the table view component.

Configure data from a column perspective, `title` is the title of the column, and `field` is the uniquely identified field name in the data.

Column widths are evenly distributed by default. You can use `width` to adjust the column width appropriately. Both numerical and percentage formats are supported.

``` html
<u-table-view :data="[
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### Table Lines

``` html
<u-table-view line="both" :data="[
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### Stripe Display

``` html
<u-table-view striped :data="[
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### Single Row Color

Using the `rowColor` field, you can add color to a row individually.

``` html
<u-table-view :data="[
    { name: 'Homer Simpson', rowColor: 'light', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', rowColor: 'normal', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', rowColor: 'dark', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', rowColor: 'primary', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', rowColor: 'error', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### Hide Header

``` html
<u-table-view :show-head="false" :data="[
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### State

The form will automatically determine the status based on the data type.

#### Loading

``` html
<u-table-view>
    <u-table-view-column title="Username" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### Empty State

``` html
<u-table-view :data="[]">
    <u-table-view-column title="Username" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### Formatter

You can configure the `formatter` attribute in the column component of the table, which will automatically format the column data, similar to Vue's filter.

``` html
<u-table-view :data="[
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

Supports simply passing in a function:

``` vue
<template>
<u-table-view :data="[
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address" :formatter="addressFormatter"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    methods: {
        addressFormatter(value) {
            return value.replace('OntarioFort Erie', '');
        },
    },
};
</script>
```

### Column Slot

If you need a more customized display of the data, you can use the `cell` slot of the column to customize the desired format.

This slot is a scope slot and will pass in 4 parameters `item`, `value`, `columnVM` and `index`.

``` html
<u-table-view :data="[
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" field="name" width="20%">
        <template slot="cell" slot-scope="{ value }">
            <u-link>{{ value }}</u-link>
        </template>
    </u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### Too Much Vertical Data

#### Fixed Header

You can limit the height of the table by setting the `height` or `max-height` attribute to the `<u-table-view>` style. When there is a large amount of data, the header will be automatically fixed.

``` html
<u-table-view striped :data="[
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]" style="max-height: 300px;">
    <u-table-view-column title="Username" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### Horizontal Content is Too Long

#### Default Multi-Line Display

In some cases, we will encounter the problem of too long text, and multi-line display will be performed by default.

``` html
<u-table-view line="horizontal" striped :data="[
    { name: 'This is a long, long, long, long, long, long, long, long name.', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'The name is just so, so, so, so long.', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" field="name" width="30%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### Single Line Omitted Display

At this time, you can set the `ellipsis` attribute on the column to omit a single line of text, and there will be a tool tip when the mouse is hovered.

``` html
<u-table-view line="horizontal" striped :data="[
    { name: 'This is a long, long, long, long, long, long, long, long name.', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'The name is just so, so, so, so long.', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" ellipsis field="name" width="30%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" ellipsis field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### Horizontal Scrolling

Sometimes omitting text is not intuitive, so consider setting a longer width for all columns. Produces horizontal scrolling.

``` html
<u-table-view striped :data="[
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]" style="max-height: 300px;">
    <u-table-view-column title="Serial Number" type="index" width="50"></u-table-view-column>
    <u-table-view-column title="Username" field="name" width="70"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="160"></u-table-view-column>
    <u-table-view-column title="电子邮箱" field="email" width="200"></u-table-view-column>
    <u-table-view-column title="Address" field="address" width="400"></u-table-view-column>
    <u-table-view-column title="创建时间" field="createdTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column title="操作" width="120">
        <template slot="cell">
            <u-link>Details</u-link>&nbsp;
            <u-link>Settings</u-link>
        </template>
    </u-table-view-column>
</u-table-view>
```

#### Fixed Columns

You can also fix important columns on the left and right edges.

``` html
<u-table-view striped :data="[
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]" style="max-height: 300px;">
    <u-table-view-column fixed title="Serial Number" type="index" width="50"></u-table-view-column>
    <u-table-view-column fixed title="Username" field="name" width="70"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="160"></u-table-view-column>
    <u-table-view-column title="电子邮箱" field="email" width="200"></u-table-view-column>
    <u-table-view-column title="Address" field="address" width="400"></u-table-view-column>
    <u-table-view-column title="创建时间" field="createdTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column fixed title="操作" width="120">
        <template slot="cell">
            <u-link>Details</u-link>&nbsp;
            <u-link>Settings</u-link>
        </template>
    </u-table-view-column>
</u-table-view>
```

### Hide Some Columns

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout display="block">
        <u-checkbox v-model="columnsVisible[0]">Serial Number</u-checkbox>
        <u-checkbox v-model="columnsVisible[1]">Username</u-checkbox>
        <u-checkbox v-model="columnsVisible[2]">Mobile Phone Number</u-checkbox>
        <u-checkbox v-model="columnsVisible[3]">Email</u-checkbox>
        <u-checkbox v-model="columnsVisible[4]">Address</u-checkbox>
        <u-checkbox v-model="columnsVisible[5]">Creation Time</u-checkbox>
        <u-checkbox v-model="columnsVisible[6]">Last Login Time</u-checkbox>
        <u-checkbox v-model="columnsVisible[7]">Operation</u-checkbox>
    </u-linear-layout>
    <u-table-view striped :data="[
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
    { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]" style="max-height: 300px;">
        <u-table-view-column :hidden="!columnsVisible[0]" title="Serial Number" type="index" width="50"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[1]" title="Username" field="name" width="70"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[2]" title="Mobile Phone Number" field="phone" width="160"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[3]" title="电子邮箱" field="email" width="200"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[4]" title="Address" field="address" width="400"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[5]" title="创建时间" field="createdTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[6]" title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[7]" title="操作" width="120">
            <template slot="cell">
                <u-link>Details</u-link>&nbsp;
                <u-link>Settings</u-link>
            </template>
        </u-table-view-column>
    </u-table-view>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            columnsVisible: [true, true, true, false, true, false, true, true],
        };
    },
};
</script>
```

### Adjust Column Width

Turn on the `resizable` attribute to adjust the column width.

According to the `resize-remaining` attribute, adjusting column width has three effects. `sequence` means to keep the total width unchanged, and give priority to the next column to make up the width; `average` means to keep the total width unchanged, and all subsequent columns to make up the width on average; `none` means no processing is done, and the table width changes.

#### Sequence

``` html
<u-table-view resizable line="horizontal" striped :data="[
    { name: 'This is a long, long, long, long, long, long, long, long name.', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'The name is just so, so, so, so long.', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" ellipsis field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" ellipsis field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### Average

``` html
<u-table-view resizable resize-remaining="average" line="horizontal" striped :data="[
    { name: 'This is a long, long, long, long, long, long, long, long name.', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'The name is just so, so, so, so long.', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" ellipsis field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" ellipsis field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### None

``` html
<u-table-view resizable resize-remaining="none" line="horizontal" striped :data="[
    { name: 'This is a long, long, long, long, long, long, long, long name.', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, OntarioSkunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: 'The name is just so, so, so, so long.', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="Username" ellipsis field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" ellipsis field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### Special Columns

There are some special columns built into UTableView, which can be enabled by setting `type`.

#### Serial Number Column

Add a `<u-table-view-column>` with `type="index"`, and the Serial Number of each row will be displayed in this column. Setting `start-index` can change the initial value, which defaults to `1`.

> Note: This method can only display the Serial Number of the current page. If the Serial Number is complex, please use column slot customization.

``` html
<u-table-view striped :data="[
    { id: '07cdcb8ed5e94cec', name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { id: '5cd49be8f65c4738', name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { id: 'f799a0467c494601', name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { id: '40e8ca488a1c4bce', name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { id: '150823cc351642b6', name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column type="index" title="#" width="8%"></u-table-view-column>
    <u-table-view-column title="Username" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### Radio Selection Column

Turn on the `selectable` attribute to select rows.

``` html
<u-table-view striped hover selectable :data="[
    { id: '07cdcb8ed5e94cec', name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
    { id: '5cd49be8f65c4738', name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
    { id: 'f799a0467c494601', name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
    { id: '40e8ca488a1c4bce', name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
    { id: '150823cc351642b6', name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column type="index" title="#" width="8%"></u-table-view-column>
    <u-table-view-column title="Username" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

You can also add a `<u-table-view-column>` with `type="radio"`. A single-item selection box will be displayed in this column, which is specially used for single-selection operations.

``` vue
<template>
<u-table-view striped value-field="id" v-model="selectedValue" :data="data">
    <u-table-view-column type="radio" title="Select" width="8%"></u-table-view-column>
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
            selectedValue: '5cd49be8f65c4738',
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

#### Multiple Selection Columns

Add a `<u-table-view-column>` with `type="checkbox"`, and multiple selection boxes will be displayed in this column for multi-selection operations.

There are two ways to control multiple selection. One is to set the `checked` attribute of the corresponding row of data. This attribute will perform Two-Way Binding with the multiple selection box. The `disabled` attribute disables the multiple selection box.####Multiple selection columns

Add a `<u-table-view-column>` with `type="checkbox"`, and multiple selection boxes will be displayed in this column for multi-selection operations.

There are two ways to control multiple selection. One is to set the `checked` attribute of the corresponding row of data. This attribute will perform Two-Way Binding with the multiple selection box. The `disabled` attribute disables the multiple selection box.

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
            data: [
                { id: '07cdcb8ed5e94cec', name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', checked: true, name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', checked: true, name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', disabled: true, name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
        };
    },
};
</script>
```

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

#### Expand Columns

``` vue
<template>
<u-table-view :data="data">
    <u-table-view-column type="expander" title="Expand" width="8%">
        <div slot="expand-content" slot-scope="{ item }">
            <u-list type="disc">
                <u-list-item>{{ item.address }} 1</u-list-item>
                <u-list-item>{{ item.address }} 2</u-list-item>
                <u-list-item>{{ item.address }} 3</u-list-item>
                <u-list-item>{{ item.address }} 4</u-list-item>
                <u-list-item>{{ item.address }} 5</u-list-item>
            </u-list>
        </div>
    </u-table-view-column>
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

It can also be placed at the end of the column.

``` vue
<template>
<u-table-view :data="data">
    <u-table-view-column title="Username" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column type="expander" title="Expand" width="8%">
        <div slot="expand-content" slot-scope="{ item }">
            <u-list type="disc">
                <u-list-item>{{ item.address }} 1</u-list-item>
                <u-list-item>{{ item.address }} 2</u-list-item>
                <u-list-item>{{ item.address }} 3</u-list-item>
                <u-list-item>{{ item.address }} 4</u-list-item>
                <u-list-item>{{ item.address }} 5</u-list-item>
            </u-list>
        </div>
    </u-table-view-column>
</u-table-view>
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
        };
    },
};
</script>
```

Use the `accordion` attribute to enable Accordian Mode. When one item is expanded, other items will be collapsed.

``` vue
<template>
<u-table-view :data="data" accordion>
    <u-table-view-column title="Username" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column type="expander" title="Expand" width="8%">
        <div slot="expand-content" slot-scope="{ item }">
            <u-list type="disc">
                <u-list-item>{{ item.address }} 1</u-list-item>
                <u-list-item>{{ item.address }} 2</u-list-item>
                <u-list-item>{{ item.address }} 3</u-list-item>
                <u-list-item>{{ item.address }} 4</u-list-item>
                <u-list-item>{{ item.address }} 5</u-list-item>
            </u-list>
        </div>
    </u-table-view-column>
</u-table-view>
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
        };
    },
};
</script>
```

#### Special Columns are Shared with Normal Functions

Special columns set using `type` can be used with ordinary `field`.

``` vue
<template>
<u-table-view :data="data">
    <u-table-view-column type="checkbox" title="Username" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column type="expander" title="Expand" width="8%">
        <span slot="cell" slot-scope="{ item }">{{ item.name }}</span>
        <div slot="expand-content" slot-scope="{ item }">
            <u-list type="disc">
                <u-list-item>{{ item.address }} 1</u-list-item>
                <u-list-item>{{ item.address }} 2</u-list-item>
                <u-list-item>{{ item.address }} 3</u-list-item>
                <u-list-item>{{ item.address }} 4</u-list-item>
                <u-list-item>{{ item.address }} 5</u-list-item>
            </u-list>
        </div>
    </u-table-view-column>
</u-table-view>
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
        };
    },
};
</script>
```

