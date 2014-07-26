function Builder (ctx) {
    if (!(this instanceof Builder)) { return new Builder(ctx); }

    this._ctx = ctx;
    return this;
}

Builder.prototype.before = function before (func) {
    if (func) {
        this._before = func.bind(this._ctx);
    }
    return this;
};

Builder.prototype.after = function after (func) {
    if (func) {
        this._after = func.bind(this._ctx);
    }
    return this;
};

Builder.prototype.named = function named (name) {
    this._name = name;
    return this;
};

Builder.prototype.parseStringPath = function parseStringPath(propertyPath) {
    var path = propertyPath.split('.');
    this._property = path.pop();
    this._propertyPath = path;
};

Builder.prototype.changes = function changes (pathResolver) {
    if (typeof pathResolver === 'string') {
        this.parseStringPath(pathResolver);
    } else {
        this._pathResolver = pathResolver.bind(this._ctx);
    }
    return this;
};

Builder.prototype._generic = function _generic (builder, method) {
    return function () {
        if (builder._before) { builder._before(); }

        if (typeof builder._pathResolver === 'function') {
            builder.parseStringPath(builder._pathResolver());
        }

        var ctx = builder._getCtx(builder._ctx, builder._propertyPath);
        var result = require('./methods/' + method + '.js')
            .bind(this, ctx, builder._property)
            .apply(this, arguments);

        if (builder._after) { result = builder._after(result) || result; }
        return result;
    };
};

Builder.prototype._getCtx = function _getCtx (object, path) {
    for (var i = 0; i < path.length; i++) {
        if (!object.hasOwnProperty(path[i])) {
            object[path[i]] = {};
        }
        object = object[path[i]];
    }
    return object;
};

['value', 'property', 'object', 'array'].map(function (method) {
    Builder.prototype[method] = function () {
        Object.defineProperty(this._ctx, this._name, {
            value: this._generic(this, method),
            configurable: false,
            enumerable: false,
            writable: false
        });
        return new Builder(this._ctx).before(this._before).after(this._after);
    };
});

function Method (options) {
    return Builder;
}

module.exports = Method;
