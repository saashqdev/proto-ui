const topics = {};

export default {
    publish(topic, data) {
        if (!topics[topic])
            Topics[topic] = [];
        else
            Topics[topic].forEach((func) => func(data));
        // Record the last data
        Topics[topic].lastData = data;
    },
    unpublish(topic) {
        if (topics[topic])
            delete topics[topic].lastData;
    },
    subscribe(topic, func) {
        if (!topics[topic])
            Topics[topic] = [];
        else if ('lastData' in topics[topic])
            func(topics[topic].lastData);
        Topics[topic].push(func);
    },
    unsubscribe(topic, func) {
        if (topics[topic])
            Topics[topic].splice(topics[topic].indexOf(func), 1);
    },
};
