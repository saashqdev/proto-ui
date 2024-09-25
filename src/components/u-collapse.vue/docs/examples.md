### Basic Usage

``` html
<u-collapse>
    <u-collapse-item title="Panel 1">Content1</u-collapse-item>
    <u-collapse-item title="Panel 2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="Panel 3" disabled>Content3</u-collapse-item>
</u-collapse>
```

### Accordian Mode

``` html
<u-collapse accordion>
    <u-collapse-item title="Panel 1">Content1</u-collapse-item>
    <u-collapse-item title="Panel 2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="Panel 3">Content3</u-collapse-item>
</u-collapse>
```

### Trigger Method

#### Can be Triggered by Clicking on the Entire Row (default)

<u-collapse expand-trigger="click">
    <u-collapse-item title="Panel 1">Content1</u-collapse-item>
    <u-collapse-item title="Panel 2">Content2</u-collapse-item>
    <u-collapse-item title="Panel 3">Content3</u-collapse-item>
</u-collapse>

#### Only Triggered when the Small Arrow is Clicked

<u-collapse expand-trigger="click-expander">
    <u-collapse-item title="Panel 1">Content1</u-collapse-item>
    <u-collapse-item title="Panel 2">Content2</u-collapse-item>
    <u-collapse-item title="Panel 3">Content3</u-collapse-item>
</u-collapse>
