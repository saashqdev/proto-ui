### Basic Usage

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11"></u-pagination>
    <u-pagination :total="11" :page="6"></u-pagination>
</u-linear-layout>
```

### Display Quantity

When there are many pages, you can use `side` and `around` to set the constant display amount on both sides and in the middle.

``` html
<u-pagination :total="11" :page="6" :side="1" :around="3"></u-pagination>
```

### Read Only and Disabled

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11" readonly></u-pagination>
    <u-pagination :total="11" disabled></u-pagination>
</u-linear-layout>
```
