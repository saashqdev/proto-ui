<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UBadge badge

**UI Components**, **Inline Display**

## Example
### Basic Usage

``` html
<p>Message <u-badge :value="3"></u-badge></p>
<p>Message <u-badge value="new"></u-badge></p>
```

### Upper Right Corner

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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | number, string | | | Displayed value |
| max | number | | | The maximum value. If it exceeds the maximum value, it will be displayed in the form of `max+`, and `value` is required to be of `Number` type. |
| corner | boolean | | `false` | Whether to insert into the upper right corner |
| dot | boolean | | `false` | Whether to display as small dots |

### Slots

#### (default)

Insert the element to which the badge needs to be attached.
