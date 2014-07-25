function extend(target) {
    if (!target || typeof target !== 'object') {
        target = {};
    }
    for (var i = 1, len = arguments.length; i < len; i++) {
        var obj = arguments[i],
            key;
        if (obj) {
            for (key in obj) {
                target[key] = obj[key];
            }
        }
    }
    return target;
}

module.exports = function (object, property, values, force) {
    object[property] = object[property] || {};
    if (values !== undefined) {
        object[property] = force ? extend(object[property], values) : extend(values, object[property]);
        return this;
    }

    return object[property];
};
