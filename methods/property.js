module.exports = function (object, property, key, value, force) {
    object[property] = object[property] || {};
    var prop = object[property];
    if (arguments.length > 3) {
        prop[key] = !prop.hasOwnProperty(key) || force ? value : prop[key];
        return this;
    } else {
        return prop ? prop[key] : undefined;
    }
};
