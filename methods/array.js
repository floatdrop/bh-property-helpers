module.exports = function (object, property, array, force) {
    var prop = object[property];
    if (array !== undefined) {
        if (force) {
            object[property] = array;
        } else {
            if (prop) {
                object[property] = Array.isArray(prop) ?
                    prop.concat(array) :
                    [prop].concat(array);
            } else {
                object[property] = array;
            }
        }
        return this;
    }

    return prop.mix;
};
