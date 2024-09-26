### Basic Usage

``` html
<u-tabs>
    <u-tab title="Template">Template Content</u-tab>
    <u-tab title="Style">Style Content</u-tab>
    <u-tab title="Logic">Logical Content</u-tab>
</u-tabs>
```

### Value

``` html
<u-tabs value="B">
    <u-tab title="Template" value="A">Template Content</u-tab>
    <u-tab title="Style" value="B">Style Content</u-tab>
    <u-tab title="Logic" value="C">Logic Content</u-tab>
</u-tabs>
```

### Read Only and Disabled

``` html
<u-tabs readonly>
    <u-tab title="Template">Template Content</u-tab>
    <u-tab title="Style">Style Content</u-tab>
    <u-tab title="Logic">Logic Content</u-tab>
</u-tabs>
<u-tabs disabled>
    <u-tab title="Template">Template Content</u-tab>
    <u-tab title="Style">Style Content</u-tab>
    <u-tab title="Logic">Logic Content</u-tab>
</u-tabs>
<u-tabs>
    <u-tab title="Template">Template Content</u-tab>
    <u-tab title="Style" disabled>Style Content</u-tab>
    <u-tab title="Logic">Logic Content</u-tab>
</u-tabs>
```

### Can be Closed

``` html
<u-tabs closable>
    <u-tab title="Template">Template Content</u-tab>
    <u-tab title="Style">Style Content</u-tab>
    <u-tab title="Logic">Logic Content</u-tab>
    <u-tab title="Document">Document Content</u-tab>
    <u-tab title="Resource">Resource Content</u-tab>
</u-tabs>
```

### Routing

``` html
<u-tabs router>
    <u-tab title="Button" to="/components/u-button"></u-tab>
    <u-tab title="Input" to="/components/u-input"></u-tab>
    <u-tab title="Tabs" to="/components/u-tabs"></u-tab>
</u-tabs>
```

### Slot Expansion

- You can use the `extra` slot on `<u-tabs>` to add extra content on the right;
- You can use the `title` slot on `<u-tab>` to customize the title of the tab page.

<p></p>

``` html
<u-tabs value="1">
    <u-tab value="0">
        <span slot="title">Template <u-label>1</u-label></span>
        Template Content
    </u-tab>
    <u-tab value="1">
        <span slot="title">Style <u-label>6</u-label></span>
        Style Content
    </u-tab>
    <u-tab value="2">
        <span slot="title">Logic <u-label>3</u-label></span>
        Logic Content
    </u-tab>
    <u-checkbox slot="extra">Select All</u-checkbox>
</u-tabs>
```
