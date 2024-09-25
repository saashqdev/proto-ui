The combination of icon and `<u-tooltip>`.

### Basic Usage

``` html
Tip next to the text <u-icon-tooltip>This is the tip content</u-icon-tooltip>
```

### Switch Type

``` html
Information <u-icon-tooltip>This is the prompt content</u-icon-tooltip><br>
Help <u-icon-tooltip type="help">This is the prompt content</u-icon-tooltip><br>
Details <u-icon-tooltip type="detail">This is the prompt content</u-icon-tooltip>
```

### Popup Location

``` html
<u-linear-layout>
    <span>
        Top
        <u-icon-tooltip placement="top">Tooltip</u-icon-tooltip>
    </span>
    <span>
        Left
        <u-icon-tooltip placement="left">Tooltip</u-icon-tooltip>
    </span>
    <span>
        Right
        <u-icon-tooltip placement="right">Tooltip</u-icon-tooltip>
    </span>
    <span>
        Bottom
        <u-icon-tooltip placement="bottom">Tooltip</u-icon-tooltip>
    </span>
</u-linear-layout>
```
