const eventsData = {};
let token = 0;

const getDataName = function (name, type) {
    return `${name}_${type}`;
};

const off = function (name, element, type, token) {
    const eventDataName = getDataName(name, type);
    const eventData = eventsData[eventDataName];
    delete eventData.data[token];
    if (!Object.keys(eventData).length) {
        delete eventsData[eventDataName];
        element.removeEventListener(type, eventData.listener, eventData.options);
    }
};

const initEvent = function (name, element, type, listener, options) {
    const eventDataName = getDataName(name, type);
    let eventData = eventsData[eventDataName];

    if (!eventData) {
        const listenerBack = listener;
        listener = function (e) {
            listenerBack(e, eventsData[eventDataName].data);
        };
        eventData = eventsData[eventDataName] = {
            listener,
            options,
            data: {},
        };
        element.addEventListener(type, listener, options);
    }
    return eventDataName;
};

/**
 * Avoid binding the same event multiple times to facilitate adding data
 */
export default {
    on(name, data, element, type, listener, options) {
        const eventDataName = initEvent(name, element, type, listener, options);
        token++;
        eventsData[eventDataName].data[token] = data;
        return () => off(name, element, type, token);
    },
    off,
    getToken() {
        return token;
    },
};
