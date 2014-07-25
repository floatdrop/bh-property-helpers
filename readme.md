# bh-property-helpers [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]

This is helper for fast and nice property setter/getter creation in context object.

## Usage

```js
var Method = require('bh-property-helpers');

method = new Method({ protected: false });

funciton Context() {
    function pickModsProperty() {
        return '_object.' + (this._context.get('object').elem ? 'elemMods' : 'mods');
    }

    method(this)
        .before(function () {
            this._object = this._context.get('object');
        })
        .named('attr').changes('_object.attrs').property()
        .named('attrs').changes('_object.attrs').property()
        .named('bem').changes('_object.bem').value()
        .named('cls').changes('_object.cls').value()
        .named('content').changes('_object.content').value()
        .named('js').changes('_object.js').value()
        .named('param').changes('_object').property()
        .named('tag').changes('_object.tag').value()
        .named('mix').changes('_object.mix').array()
        .named('mod').changes(pickModsProperty).property()
        .named('mods').changes(pickModsProperty).object();
}
```

## API

### Method([options])

Constructor of method builder. 
Returns `Builder`.

### Builder(context)

Returns builder for context object. All methods will be defined on this object.
Returns `Builder`.

#### .named(name)

Defines name for the method.
Returns `Builder`.

#### .changes(propertyPath)

Points created method to propertyPath, which can be `String` or `Function`. In case of `Function` property path will be resolved each time method is called. 
Returns `Builder`.

#### .value() / .property() / .array() / .object()

This methods tells builder about value type, with which created method will be working.

| Type          | What it does                           | Setter/getter signature         |
| ------------- | -------------------------------------- | ------------------------------- |
| value()       | Just sets passed value to property     | `function (value, force)`       |
| property()    | Sets key-value in property object      | `function (key, value, force)`  |
| array()       | Appends passed value to Array property | `function (array, force)`       |
| object()      | Extends property with passed object    | `function (object, force)`      |

By default this setters will not override previous property value (unless `force` is true). 

Returns `Builder`.


[npm-url]: https://npmjs.org/package/bh-property-helpers
[npm-image]: http://img.shields.io/npm/v/bh-property-helpers.svg

[travis-url]: https://travis-ci.org/floatdrop/bh-property-helpers
[travis-image]: http://img.shields.io/travis/floatdrop/bh-property-helpers.svg

[coveralls-url]: https://coveralls.io/r/floatdrop/bh-property-helpers
[coveralls-image]: http://img.shields.io/coveralls/floatdrop/bh-property-helpers/master.svg
