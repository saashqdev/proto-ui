### Basic Usage

``` html
<p>Message <u-badge :value="3"></u-badge></p>
<p>Message <u-badge value="new"></u-badge></p>
```

### Upper right corner

``` html
<u-badge :value="3" corner>
    <u-button>Comment</u-button>
</u-badge>
```

### Maximum Value

``` html
<u-badge :value="120" :max="99" corner>
    <u-button>Comment</u-button>
</u-badge>
```

### Small Dots

``` html
<p>Message <u-badge :value="3" dot></u-badge></p>
<p><u-badge :value="3" corner dot>
    <u-button>Comment</u-button>
</u-badge></p>
```
