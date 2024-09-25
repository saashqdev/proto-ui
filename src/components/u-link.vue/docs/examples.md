### Basic Usage

``` html
<u-link href="#">Link</u-link>&nbsp;<u-link href="#">View Details</u-link>
```

### Disable

``` html
<u-link href="#" disabled>Disabled</u-link>
```

### Target

Using the `href` and `target` attributes, you can directly implement the functions corresponding to the `<a>` element. Using `to`, `replace` and `append` requires the introduction of vue-router, which have the same function as the corresponding properties in the `<router-link>` component.

``` html
<u-link href="https://kubevue.github.io" target="_blank">Href</u-link>&nbsp;
<u-link to="/proto-ui/u-button">Router</u-link>
```

### Display Method

``` html
<u-link href="#" display="block">Here are a Few</u-link>
<u-link href="#" display="block">Block Level</u-link>
<u-link href="#" display="block">Link Component</u-link>
<u-link href="#" display="inline">These are a Few</u-link>
<u-link href="#">Inline (default)</u-link>
<u-link href="#" display="inline">Link Component</u-link>
```
