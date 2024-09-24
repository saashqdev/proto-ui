# Quickstart

Proto UI is a prototype component library launched by the Kubeworkz Cloud Computing front-end team in the Kubevue system, which is used to quickly expand the business component library.

### Features

- Simple and efficient
- Rich in quantity and complete in functions
- Flexible expansion

### Supported Environments

- Support for Vue.js 2.x
- Supports modern browsers and IE9+

### How to Contribute

- If you have any problems during use, you can [report bugs](https://github.com/saashqdev/proto-ui/issues)
- If you want to contribute, welcome to [Pull Request](https://github.com/saashqdev/proto-ui/pulls)

## Installation and Import

There are three ways to install and import component libraries. The npm installation method is recommended, which can be well combined with Webpack and other npm ecosystems.

### npm installation, import all

Use npm to install the component library `proto-ui.kubevue`

``` shell
npm i --save proto-ui.kubevue
```

Import JS and CSS files in the `dist` directory

``` js
import Vue from 'vue';
import * as ProtoUI from 'proto-ui.kubevue/dist';
import 'proto-ui.kubevue/dist/index.css';

Vue.use(ProtoUI); // Globally install components, instructions, etc. in the component library
```

- advantage:
    - Convenient and fast, you can easily use all the functions of the component library
    - Faster development time
    - The project does not need to use kubevue CLI, and the Webpack configuration does not need to follow the kubevue system configuration
    - No need to consider dependencies between components
- shortcoming:
    - The overall library size is large
    - Component styles cannot be changed based on `global.css` in the project
    - Resource files (fonts, images, etc.) in the component library will not be automatically packaged with the resource files in the project

### npm installation, import as needed

Use npm to install the component library `proto-ui.kubevue`

``` shell
npm i --save proto-ui.kubevue
```

Introduce the `install` function for installation

``` js
import Vue from 'vue';
import { install, directives, UButton, UText, UInput } from 'proto-ui.kubevue';

install(Vue, { directives, UButton, UText, UInput }); // Globally install components, directives, etc. in the component library
```

- advantage:
    - When packaging, you can use the TreeShaking effect to remove unnecessary components and reduce the packaging size
    - Component styles can be changed according to `global.css` in the project
    - Resource files (fonts, images, etc.) in the component library can be packaged together with resource files in the project
- shortcoming:
    - The project needs to be started using kubevue CLI, or the Webpack configuration needs to completely follow the kubevue system configuration
    - When importing, you need to consider the implicit dependencies of components. For example, if `<u-select>` is used in `<u-cascade-select>`, if USelect is not imported when UCascadeSelect is imported, there will be problems. (Implicit dependencies are to support the interchangeability of components)
    - Development is slower because the source files in the component library need to be compiled

### CDN introduction

You can see the latest version of Proto UI resources at [unpkg.com/proto-ui.kubevue](https://unpkg.com/proto-ui.kubevue). You can start using it by importing JS and CSS files on the page:

``` htm
<link rel="stylesheet" href="https://unpkg.com/proto-ui.kubevue/dist/index.css">
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/proto-ui.kubevue/dist/index.js"></script>
<script>
Vue.use(ProtoUI);
</script>
```

``` htm
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>kubevue Example</title>
    <link rel="stylesheet" href="https://unpkg.com/proto-ui.kubevue/dist/index.css">
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/proto-ui.kubevue/dist/index.js"></script>
</head>
<body>
<div id="app">
    <u-button @click="show">Click me!</u-button>
</div>
<script>
    Vue.use(ProtoUI);
    new View({
        the: '#app',
        methods: {
            show: function () {
                this.$alert('Hello World!');
            },
        },
    });
</script>
</body>
</html>
```