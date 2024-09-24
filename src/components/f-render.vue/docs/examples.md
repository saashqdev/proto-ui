Sometimes it is necessary to dynamically render some `vnode` nodes in the template, such as `slot` of other components. Commonly used methods are to rewrite the entire template using the `render` function, or to write a partial component. These methods are more expensive.

`<f-render>` can easily solve this kind of problem.

``` htm
<f-render :vnode="$slots.title"></f-render>
```
