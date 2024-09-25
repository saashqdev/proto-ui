There are many ways to deal with the spacing between components on the page, but they are often stretched.

For example, a common method is to add a `margin` style between some default components such as buttons. The problem with this method is that sometimes there is excess spacing, which often requires some subtraction in subsequent style processing. Moreover, the components around the button may not continue to be buttons. There are n^2 situations of spacing between components. In the final development The author himself cannot figure out how much has been processed. Another way is to use some simple class like `margin-sm` to control the spacing. Its typical problem is that classes are often abused and pollute the html structure, because dealing with spacing was originally a style issue, but now it is often declared in html. Another problem is that the first or last item is often not added. , lacks a sense of symmetry.

Considering the above problems, we refer to some native development methods such as Android layout methods and summarize this simple and easy-to-use layout component - linear layout.

### Basic Usage

Generally, for components with the `inline` feature, you can directly put a `<u-linear-layout>` outside, which will widen the gap.

``` html
<u-linear-layout>
    <u-button>Button</u-button>
    <u-button>Button</u-button>
    <u-button>Button</u-button>
</u-linear-layout>
```

### Direction

The default direction is `horizontal`, which only processes components with the `inline` feature and opens the horizontal gap; the direction can also be set to `vertical`, which only processes components with the `block` feature.

``` html
<u-linear-layout direction="horizontal">
    <u-button>Button</u-button>
    <u-button>Button</u-button>
    <u-button>Button</u-button>
</u-linear-layout>
<p></p>
<u-linear-layout direction="vertical">
    <u-linear-progress :percent="25"></u-linear-progress>
    <u-linear-progress :percent="50"></u-linear-progress>
    <u-linear-progress :percent="75"></u-linear-progress>
</u-linear-layout>
```

### Display Method and Layout Method

The display mode `display` is used to control whether `<u-linear-layout>` itself is a block-level element or an inline element, while the layout mode `layout` is used to quickly adjust the display mode of child elements or components.

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-linear-layout display="inline">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
        <span><code>&lt;u-linear-layout&gt;</code> itself is of type <code>&lt;block&gt;</code>. Modifying <code>display</code> can have inline features. </span>
    </u-linear-layout>
    <u-linear-layout direction="vertical" layout="block">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <span>The elements in this <code>&lt;u-linear-layout&gt;</code> are originally inline elements. After adding the <code>layout</code> attribute, they can all become block-level elements. </span>
    </u-linear-layout>
</u-linear-layout>
```

### Spacing

The gap size can be adjusted both horizontally and vertically by setting the `gap` attribute.

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-linear-layout display="inline" gap="small">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
        <u-linear-layout display="inline" gap="none">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
        <u-linear-layout display="inline" gap="shrink">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
    </u-linear-layout>
    <u-linear-layout direction="vertical" gap="large">
        <u-linear-layout gap="normal">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
        <u-linear-layout gap="large">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
    </u-linear-layout>
</u-linear-layout>
```

### Horizontal Distribution Method

Considering compatibility with IE9, the common distribution method is implemented using the two features of `inline-block` and `text-align`, and only supports the horizontal direction.

> The main reasons for not using `float` are: 1. An additional parent element or successor element is required to clear the float, 2. After floating, the alignment of `vertial-align` is not controllable.
>
> But `text-align` also has a pitfall, that is, it will affect the default alignment of child elements. If there is a better solution, please provide it.

If you want to use a more flexible distribution method without pitfalls, please use the later Flex mode, but make sure your browser supports this feature.

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout justify="start">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout justify="center">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout justify="end">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout justify="space-between">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
</u-linear-layout>
```

> `space-between` currently only supports left and right elements, and there is no way to do it for compatibility.

Please don’t forget that `<u-linear-layout>` can be easily nested.

``` html
<u-linear-layout justify="space-between">
    <u-linear-layout>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout gap="shrink">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
</u-linear-layout>
```

### Flex Mode
#### Spindle Distribution Method

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout type="flex" justify="start">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="center">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="end">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="space-between">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="space-around">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### Cross Axis Alignment

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout type="flex" alignment="start">
        <u-block>Block</u-block>
        <u-block size="normal auto">Block</u-block>
        <u-block size="large auto">Block</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="center">
        <u-block>Block</u-block>
        <u-block size="normal auto">Block</u-block>
        <u-block size="large auto">Block</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="end">
        <u-block>Block</u-block>
        <u-block size="normal auto">Block</u-block>
        <u-block size="large auto">Block</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="baseline">
        <u-block>Block</u-block>
        <u-block size="normal auto">Block</u-block>
        <u-block size="large auto">Block</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="stretch">
        <u-block>Block</u-block>
        <u-block size="normal auto">Block</u-block>
        <u-block size="large auto">Block</u-block>
    </u-linear-layout>
</u-linear-layout>
```
