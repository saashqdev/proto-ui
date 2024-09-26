<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UTableView Table View

## Basic Example
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


## Data Related
### Data and Data Sources

When the amount of data is not large, you can use the `data` attribute to pass it in at once. The format of the `data` attribute is `Array<{ [field]: string, ... }>`, such as the example in the basic Example.

It is recommended to use `data-source` when the amount of data is large, or when back-end paging, sorting, filtering and other operations need to be performed.

### Pagination

#### Front-end Paging

``` vue
<template>
<u-table-view striped :data="data" pageable :page-size="10">
    <u-table-view-column title="Username" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
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

#### Disposable Backend Data, Frontend Paging

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10">
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
            // Promise and setTimeout are used here to simulate a backend request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 400);
            });
        },
    },
};
</script>
```

#### Backend Paging

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10" remote-paging>
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

#### Page Turner Function

Using the attributes `show-total`, `show-sizer`, and `show-jumper`, you can enable the translator's functions of displaying the total number of pages, switching the size of each page, and page jumping.

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

### Sort

Add the `sortable` attribute to the sortable column on `<u-table-view-column>`, and use the `sorting` attribute on `<u-table-view>` to specify the default sort field and order.

#### Front-End Sorting

``` vue
<template>
<u-table-view striped :data="data" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }">
    <u-table-view-column sortable title="Username" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column sortable title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
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

#### One-Time Back-End Data, Front-End Sorting

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }">
    <u-table-view-column sortable title="Username" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column sortable title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
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
            // Promise and setTimeout are used here to simulate a backend request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 400);
            });
        },
    },
};
</script>
```

#### Backend Sorting, Frontend Paging

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }" remote-sorting>
    <u-table-view-column sortable title="Username" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column sortable title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
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
        load({ sorting }) {
            // Promise and setTimeout are used here to simulate a backend request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve(remoteData.sort((item1, item2) => {
                        if (item1[sorting.field] === item2[sorting.field])
                            return 0;
                        else
                            return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                    }));
                }, 400);
            });
        },
    },
};
</script>
```

#### Backend Sorting and Paging

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10" remote-paging
    :sorting="{ field: 'loginTime', order: 'asc' }" remote-sorting>
    <u-table-view-column sortable title="Username" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address"></u-table-view-column>
    <u-table-view-column sortable title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
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
        load({ paging, sorting }) {
            // Promise and setTimeout are used here to simulate a backend request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve({
                        total: remoteData.length,
                        data: remoteData.sort((item1, item2) => {
                            if (item1[sorting.field] === item2[sorting.field])
                                return 0;
                            else
                                return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                        }).slice(paging.offset, paging.offset + paging.limit),
                    });
                }, 400);
            });
        },
    },
};
</script>
```

### Filter

#### Front-end Filtering

``` vue
<template>
<u-table-view striped :data="data" pageable :page-size="10"
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

#### Disposable Backend Data，Front-end Filtering

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }"
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
    <u-table-view-column sortable title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
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
            // Promise and setTimeout are used here to simulate a backend request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 400);
            });
        },
    },
};
</script>
```

#### Back-end Filtering, Front-End Paging

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }" remote-sorting
    :filtering="{ address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario' }" remote-filtering>
    <u-table-view-column sortable title="Username" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address" :filters="[
        { text: 'All' },
        { text: 'Kubeworkz Building', value: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario' },
        { text: 'Springfield Technology Park', value: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario' },
        { text: 'Skunkhollow Technology Park', value: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario' },
        { text: 'Camden Science and Technology Park', value: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario' },
    ]"></u-table-view-column>
    <u-table-view-column sortable title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
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
        load({ sorting, filtering }) {
            // Promise and setTimeout are used here to simulate a backend request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const filteredData = filtering ? remoteData.filter((item) => item.address === filtering.address) : remoteData;

                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve(filteredData.sort((item1, item2) => {
                        if (item1[sorting.field] === item2[sorting.field])
                            return 0;
                        else
                            return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                    }));
                }, 400);
            });
        },
    },
};
</script>
```

#### Backend Filtering, Sorting and Paging

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10" remote-paging
    :sorting="{ field: 'loginTime', order: 'asc' }" remote-sorting
    :filtering="{ address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario' }" remote-filtering>
    <u-table-view-column sortable title="Username" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="Address" field="address" :filters="[
        { text: 'All' },
        { text: 'Kubeworkz Building', value: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario' },
        { text: 'Springfield Technology Park', value: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario' },
        { text: 'Skunkhollow Technology Park', value: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario' },
        { text: 'Camden Science and Technology Park', value: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario' },
    ]"></u-table-view-column>
    <u-table-view-column sortable title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
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
        load({ paging, sorting, filtering }) {
            // Promise and setTimeout are used here to simulate a backend request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const filteredData = filtering ? remoteData.filter((item) => item.address === filtering.address) : remoteData;

                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve({
                        total: filteredData.length,
                        data: filteredData.sort((item1, item2) => {
                            if (item1[sorting.field] === item2[sorting.field])
                                return 0;
                            else
                                return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                        }).slice(paging.offset, paging.offset + paging.limit),
                    });
                }, 400);
            });
        },
    },
};
</script>
```

## FAQ
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

## UTableView API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Table title |
| title-alignment | string | | `'center'` | Table title alignment |
| border | boolean | | | Whether to display the border |
| line | boolean | | `false` | Whether to display separator lines between cells |
| striped | boolean | | `false` | Whether the table rows are displayed with zebra stripes |
| hover | boolean | | `false` | Whether the table row is highlighted when hovering |
| show-head | boolean | | `true` | Whether to display the table header |
| loading | boolean | | | Manually set whether loading is in progress |
| loading-text | string | | `'Loading'` | Loading text |
| error | boolean | | | Manually set whether loading failed |
| error-text | string | | `'Load failed, please try again'` | Text when loading fails |
| empty-text | string | | `'No data yet'` | Text when there is no data |
| **Data Props/Attrs** |  |  |  |  |
| data | Array\<{ \[field\]: string, ... }\> | | | Table data |
| data-source | object, Function, DataSource | | | Multi-function data source |
| initial-load | boolean | | `true` | Whether to load immediately at the initial time |
| pageable | boolean | | `false` | Whether paging is required |
| page-size.sync | number | | `20` | Paging size |
| page-size-options | Array | | `[10, 20, 50]` | List of page size options |
| show-total | boolean | | `false` | Whether to display the total number of entries |
| show-sizer | boolean | | `false` | Whether to display the option to switch the size of each page |
| show-jumper | boolean | | `false` | Whether to display the page jump input box |
| sorting.sync | object\<{ field: string, order: string, compare: Function }\> | | `'{ field: undefined, order: 'desc' }'` | Current sorting field and order |
| default-order | string | | `'asc'` | Sort order of all columns when first clicked |
| filtering.sync | object | | | Filter item |
| remote-paging | boolean | | `false` | Whether to use backend paging |
| remote-sorting | boolean | | `false` | Whether to use backend sorting |
| remote-filtering | boolean | | `false` | Whether to use backend filtering |
| **Selection Props/Attrs** |  |  |  |  |
| value-field | string | | | In single-select and multi-select operations, the field that specifies the unique value of the data |
| value.sync, v-model | any | | | The currently selected value |
| values.sync | Array | | | Values of multiple selections |
| selectable | boolean | | `false` | Whether the row can be selected |
| cancelable | boolean | | `false` | Whether the selection can be canceled |
| readonly | boolean | | `false` | Read-only |
| disabled | boolean | | `false` | Disabled |
| **Other Props/Attrs** |  |  |  |  |
| accordion | boolean | | `false` | When there is an `expander` column, whether to collapse other rows when expanding a row |
| resizable | boolean | | `false` | Whether the column width can be adjusted |
| resize-remaining | boolean | | `'sequence'` | Adjust the column width effect. Optional values: `sequence` means keeping the total width unchanged, and the next column will make up the width first; `average` means keeping the total width unchanged, and all the following columns will make up the width evenly; `none` means no processing is done, and the table width changes. |

### Slots

#### (default)

Insert the `<u-table-view-column>` child component into the table.

#### Loading

Customization loading.

#### Error

Custom error.

#### Empty

Custom empty state.

### Events

#### @before-load

Triggered before loading

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | Prevent loading process |
| senderVM | UTableView | Send event instance |

#### @load

Triggered on load

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | Empty |
| senderVM | UTableView | Send event instance |

#### @before-page

Triggered before switching pages

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.size | number | Paging size |
| $event.oldSize | number | Paging size |
| $event.number | number | Current page number |
| $event.oldNumber | number | Old page number |
| $event.preventDefault | Function | Prevent paging process from switching |
| senderVM | UTableView | Send event instance |

#### @page

Triggered when switching pages or changing page size

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.size | number | Paging size |
| $event.oldSize | number | Paging size |
| $event.number | number | Current page number |
| $event.oldNumber | number | Old page number |
| senderVM | UTableView | Send event instance |

#### @before-sort

Triggered before sorting

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | string | Sort order |
| $event.order | string | Sort field |
| $event.compare | Function | Sorting comparison function |
| $event.preventDefault | Function | Prevent the sorting process |
| senderVM | UTableView | Send event instance |

#### @sort

Triggered when sorting

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | string | Sort order |
| $event.order | string | Sort field |
| $event.compare | Function | Sorting comparison function |
| senderVM | UTableView | Send event instance |

#### @before-filter

Trigger before filtering

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | object | Filter object |
| $event.preventDefault | Function | Prevent filtering process |
| senderVM | UTableView | Send event instance |

#### @filter

Triggered when filtering

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Filter object |
| senderVM | UTableView | Send event instance |

#### @before-select

Triggered before an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Value of the selected row |
| $event.oldValue | any | Old value |
| $event.item | object | Select row related object |
| $event.oldItem | object | Old selected row related object |
| $event.preventDefault | Function | Prevent the selection process |
| senderVM | UTableView | Send event instance |

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Select the value of the row |
| senderVM | UTableView | Send event instance |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Changed value |
| $event.oldValue | any | Old value |
| $event.item | object | Select row related object |
| $event.oldItem | object | Old selected row related object |
| $event.selectedItem | object | The object of the final selected row. Different from `$event.item` in the case of `cancelable` |
| senderVM | UTableView | Send event instance |

#### @check

In multi-select mode, triggered when a node is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.checked | boolean | Checked state |
| $event.values   | Array | Selected values   |
| $event.oldValues   | Array | Old values   |
| $event.item | object | Select row related object |
| senderVM | UTableView | Send event instance |

#### @change

Triggered when the selected value changes. In single selection mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Value of the selected row |
| $event.oldValue | any | Old value |
| $event.item | object | Select row related object |
| $event.oldItem | object | Old selected row related object |
| senderVM | UTableView | Send event instance |

#### @change

Fired when the selected value changes. In multi-select mode:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.values   | Array | The changed value |
| $event.oldValues   | any | Old value |
| senderVM | UTableView | Send event instance |

#### @resize

Triggered when the column width is adjusted

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.columnVM | UTableColumnVM | The adjusted column instance |
| $event.index | number | Column index |
| width | number | Adjusted width |
| oldWidth | number | width before adjustment |

### Methods

#### load()

Loading with cache

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### reload()

Clear cache and reload

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

## UTableViewColumn API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Column title |
| field | string | | | Field name in data |
| width | string, number | | | Specify the width of the column, which can be a number or a percentage |
| ellipsis | boolean | | `false` | Whether to omit the display. By default, the text will wrap when it exceeds the limit |
| formatter | string, object, Function, Formatter |  | `'placeholder'` | Formatter |
| - |  |  |  |  |
| sortable | boolean | | `false` | Whether the column can be sorted |
| default-order | string | | `'asc'` | The sort order when the column is first clicked |
| filters | Array\<{ text: string, value: any }\> | | `'asc'` | The sort order of the column when it is first clicked |
| hidden | boolean | | `false` | Is it hidden? |
| type | string | | | Column type. Optional values: `index` indicates serial column, `radio` indicates single-select column, `checkbox` indicates multiple-select column, `expander` indicates expanded column. |
| start-index | number | | `1` | Starting number when `type="index"` |

### Slots

#### (default)

Insert the `<u-table-view-filters>` child component into the table column.

#### Cell

Customize the display of cell data.

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | Current item in loop |
| value | any | The value corresponding to the field in item |
| columnVM | string | The column component instance |
| rowIndex | number | Row index |
| columnIndex | number | Column index |

#### Title

Customize the title.

| Prop | Type | Description |
| ---- | ---- | ----------- |
| columnVM | string | The column component instance |
| columnIndex | number | Column index |

#### Expand-Content

Expand the contents of a column

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | Current item in loop |
| value | any | The value corresponding to the field in item |
| columnVM | string | The column component instance |
| rowIndex | number | Row index |
