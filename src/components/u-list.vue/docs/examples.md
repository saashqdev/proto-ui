### Basic Usage

``` html
<u-list>
    <u-list-item>List Item 1</u-list-item>
    <u-list-item>List Item 2</u-list-item>
    <u-list-item>List Item 3</u-list-item>
    <u-list-item>List Item 4</u-list-item>
    <u-list-item>List Item 5</u-list-item>
</u-list>
```

### List Prefix

Add the `type` attribute to quickly set the list prefix.

``` html
<u-grid-layout>
    <u-grid-layout-row :repeat="3">
        <u-grid-layout-column>
            <u-list type="disc">
                <u-list-item>List Item 1</u-list-item>
                <u-list-item>List Item 2</u-list-item>
                <u-list-item>List Item 3</u-list-item>
                <u-list-item>List Item 4</u-list-item>
                <u-list-item>List Item 5</u-list-item>
            </u-list>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-list type="circle">
                <u-list-item>List Item 1</u-list-item>
                <u-list-item>List Item 2</u-list-item>
                <u-list-item>List Item 3</u-list-item>
                <u-list-item>List Item 4</u-list-item>
                <u-list-item>List Item 5</u-list-item>
            </u-list>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-list type="decimal">
                <u-list-item>List Item 1</u-list-item>
                <u-list-item>List Item 2</u-list-item>
                <u-list-item>List Item 3</u-list-item>
                <u-list-item>List Item 4</u-list-item>
                <u-list-item>List Item 5</u-list-item>
            </u-list>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### List Lines

Add the `line` attribute so that list items are separated by lines.

``` html
<u-list line>
    <u-list-item>List Item 1</u-list-item>
    <u-list-item>List Item 2</u-list-item>
    <u-list-item>List Item 3</u-list-item>
    <u-list-item>List Item 4</u-list-item>
    <u-list-item>List Item 5</u-list-item>
</u-list>
```

### Stripe Display

Add the `striped` attribute to give the list rows a zebra stripe style.

``` html
<u-list striped>
    <u-list-item>List Item 1</u-list-item>
    <u-list-item>List Item 2</u-list-item>
    <u-list-item>List Item 3</u-list-item>
    <u-list-item>List Item 4</u-list-item>
    <u-list-item>List Item 5</u-list-item>
</u-list>
```

### Floating Highlight

Add the `hover` attribute so that list rows can be highlighted when hovered.

``` html
<u-list hover>
    <u-list-item>List Item 1</u-list-item>
    <u-list-item>List Item 2</u-list-item>
    <u-list-item>List Item 3</u-list-item>
    <u-list-item>List Item 4</u-list-item>
    <u-list-item>List Item 5</u-list-item>
</u-list>
```

### Combination Modification

Modifying properties of list components can be used in combination.

``` html
<u-list line hover striped>
    <u-list-item>List Item 1</u-list-item>
    <u-list-item>List Item 2</u-list-item>
    <u-list-item>List Item 3</u-list-item>
    <u-list-item>List Item 4</u-list-item>
    <u-list-item>List Item 5</u-list-item>
</u-list>
```
