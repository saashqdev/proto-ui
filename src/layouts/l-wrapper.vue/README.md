<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LWrapper Transparent Page

## Example
When setting up VueRouter, you often encounter such a scenario: the module needs to display some content, often redirecting to the first sub-route (such as a list page), and it only needs to be equipped with a container component that does nothing.

Its template is simple:

```htm
<div><router-view></router-view></div>
```

### Basic Usage

``` js
import { LWrapper } from 'proto-ui.kubevue';

{ path: 'blog', component: LWrapper, children: [
    { path: 'list', component: import(/* webpackChunkName: blog */ './list') },
    { path: 'detail', component: import(/* webpackChunkName: blog */ './detail') },
    { path: 'create', component: import(/* webpackChunkName: blog */ './create') },
    { path: 'modify', component: import(/* webpackChunkName: blog */ './modify') },
] };
```

## API

None