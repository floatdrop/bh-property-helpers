module.exports = function (object, property, value, force) {
    if (arguments.length > 2) {
        if (force || !object.hasOwnProperty(property)) {
            object[property] = value;
        }
        return this;
    }

    return object[property];
};
