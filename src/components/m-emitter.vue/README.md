<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# MEmitter Sender

This Mixin integrates some methods related to sending events. You can use the method directly after inheriting.

## Example
```vue
<template>
<div>In this example, the component adds a blue shadow to its parent. </div>
</template>
<script>
import { MEmitter } from '@@';

export default {
    mixins: [MEmitter],
    mounted() {
        this.$contact('u-code-example', (codeExampleVM) => {
            codeExampleVM.$el.style.boxShadow = '0 2px 10px rgb(69, 124, 208)';
        });
    },
    destroyed() {
        this.$contact('u-code-example', (codeExampleVM) => {
            codeExampleVM.$el.style.boxShadow = '';
        });
    },
};
</script>
```

## API
### Methods

#### $contact(condition, callback)

Contact the qualified parent component.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| condition | string, Function\<$parent, boolean\> | | Search condition. If it is a string, it will be judged based on whether the `name` of the upper-level component is the same as it; if it is a function, the upper-level component instance will be passed in and it will be judged based on the returned Boolean value. |
| callback | Function\<$parent\> | | Callback function when contact is successful. |

#### $dispatch(condition, eventName, ...args)

Send events to qualified parent components.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| condition | string, Function\<$parent, boolean\> | | Search condition. If it is a string, it will be judged based on whether the `name` of the upper-level component is the same as it; if it is a function, the upper-level component instance will be passed in and it will be judged based on the returned Boolean value. |
| eventName | string | | The name of the event sent. |
| ...args | Array\<any\> | | Event arguments sent. |

#### $broadcast(condition, eventName, ...args)

Broadcast events to lower-level components.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| condition | string, Function\<$parent, boolean\> | | Search condition. If it is a string, it will be judged based on whether the `name` of the upper-level component is the same as it; if it is a function, the upper-level component instance will be passed in and it will be judged based on the returned Boolean value. |
| eventName | string | | The name of the event sent. |
| ...args | Array\<any\> | | Event arguments sent. |

#### $emitPrevent(name, $event, senderVM, ...args)

Throws an event containing the `preventDefault` method.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| name | string | | Event name |
| $event | object | | Event object |
| senderVM | Vue | | Component instance that sends events |
| ...args | Array\<any\> | | Other parameters |
