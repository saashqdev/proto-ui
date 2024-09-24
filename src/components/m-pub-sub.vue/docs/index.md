In Vue's native functions, whether it is `$emit` and `$on`, or `provide` and `inject`, there are some limitations in passing variables between components, especially between two unrelated components.

This component contains two Mixins: MPublisher and MSubscriber, which are used to transfer data between any two components through the publish-subscribe mode.

One usage is to directly use the four methods `$publish`, `$unpublish`, `$subscribe` and `$unsubscribe` after Mixin.

Another usage is that Mixin supports the option `publish` as an object, the key is the topic that needs to be published, and the value is the expression or function that needs to be listened to. When Mixin MSubscriber, the option `subscribe` is an object, the key is the topic to be subscribed, and the value is the method to be executed when subscribing.

> Note: The difference between this pair of Mixins and the ordinary publish-subscribe model is that the result of the last publish will be executed when subscribing, which is convenient for some asynchronous subscription scenarios.
