<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# MPublisher publish-subscribe mode

In Vue's native functions, whether it is `$emit` and `$on`, or `provide` and `inject`, there are some limitations in passing variables between components, especially between two unrelated components.

This component contains two Mixins: MPublisher and MSubscriber, which are used to transfer data between any two components through the publish-subscribe mode.

One usage is to directly use the four methods `$publish`, `$unpublish`, `$subscribe` and `$unsubscribe` after Mixin.

Another usage is that Mixin supports the option `publish` as an object, the key is the topic that needs to be published, and the value is the expression or function that needs to be listened to. When Mixin MSubscriber, the option `subscribe` is an object, the key is the topic to be subscribed, and the value is the method to be executed when subscribing.

> Note: The difference between this pair of Mixins and the ordinary publish-subscribe model is that the result of the last publish will be executed when subscribing, which is convenient for some asynchronous subscription scenarios.

## Example

### How to Use

The following example shows how to pass data or status in one instance to another instance through the publish-subscriber pattern.

``` vue
<template>
<u-button @click="onClick">Release</u-button>
</template>
<script>
import { MPublisher } from '@@';

export default {
    mixins: [MPublisher],
    data() {
        return {
            value: undefined,
        };
    },
    methods: {
        onClick() {
            this.value = this.value === 'red' ? 'blue' : 'red';
            this.$publish('color', this.value);
        },
    },
};
</script>
```

``` vue
<template>
<div :class="$style.root" :style="{ background: received }">{{ String(received) }}</div>
</template>
<script>
import { MSubscriber } from '@@';

export default {
    mixins: [MSubscriber],
    data() {
        return {
            received: undefined,
        };
    },
    created() {
        this.$subscribe('color', (value) => {
            this.received = value;
        });
    },
};
</script>
<style module>
.root {
    color: white;
    padding: 10px;
}
</style>
```

### Using Option

The following example shows how to pass data or status in one instance to another instance through the publish-subscriber pattern.

```vue
<template>
<u-button @click="onClick">Publish</u-button>
</template>
<script>
import { MPublisher } from '@@';

export default {
    mixins: [MPublisher],
    data() {
        return {
            value: undefined,
        };
    },
    publish: {
        someTopic: 'value',
    },
    methods: {
        onClick() {
            this.value = this.value === 'red' ? 'blue' : 'red';
        },
    },
};
</script>
```

``` vue
<template>
<div :class="$style.root" :style="{ background: received }">{{ String(received) }}</div>
</template>
<script>
import { MSubscriber } from '@@';

export default {
    mixins: [MSubscriber],
    data() {
        return {
            received: undefined,
        };
    },
    subscribe: {
        someTopic(value) {
            this.received = value;
        },
    },
};
</script>
<style module>
.root {
    color: white;
    padding: 10px;
}
</style>
```

## MPublisher API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| publish | { \[prop: string\]: string \| Function \| object } | | The key is the topic that needs to be published, and the value is the expression or function that needs to be monitored. The value can also be an object `{ expOrFn: String \| Function, deep: Boolean, immediate: Boolean }`, `deep` and `immediate` have the same meaning as in the official `watch`. |

### Methods

#### $publish(topic, data)

Post topic

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| topic | string | | Topic name |
| data | any | | Topic data |

#### $unpublish(topic)

Unpublish topic

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| topic | string | | Topic name |

## MSubscriber API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| subscribe | { \[prop: string\]: string \| Function \| object } | | The key is the topic that needs to be subscribed, and the value is the method to be executed when subscribing. The value can also be an object `{ handler: String \| Function, once: Boolean }`. If `once` is turned on, it will only be subscribed once. |

### Methods

#### $subscribe(topic, func)

Subscribe to topics

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| topic | string | | Topic name |
| func | Function | | Subscription method |

#### $unsubscribe(topic, func)

Unsubscribe from topic

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| topic | string | | Topic name |
| func | Function | | Subscription method |
