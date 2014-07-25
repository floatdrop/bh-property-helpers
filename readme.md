# bh-property-helpers [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]

This is helper for fast and nice property setter/getter creation in context object.

## Usage

```js
var Method = require('bh-property-helpers');

method = new Method({ protected: false });

funciton Context() {
    method(this)
        .before(funciton () {
            this._object = this._context.get('object');
        })
        .named('attr').changes('_object.attrs').property()
        .named('attrs').changes('_object.attrs').property()
        .named('bem').changes('_object.bem').value()
        .named('cls').changes('_object.cls').value()
        .named('content').changes('_object.content').value()
        .named('js').changes('_object.js').value()
        .named('param').changes('_object').protperty()
        .named('tag').changes('_object.tag').value()
        .named('mix').changes('_object.mix').array.value()
        .named('mod').changes('_object.mods').property()
        .named('mods').changes('_object.mods').object.value();
}
```

[npm-url]: https://npmjs.org/package/bh-property-helpers
[npm-image]: http://img.shields.io/npm/v/bh-property-helpers.svg

[travis-url]: https://travis-ci.org/floatdrop/bh-property-helpers
[travis-image]: http://img.shields.io/travis/floatdrop/bh-property-helpers.svg

[coveralls-url]: https://coveralls.io/r/floatdrop/bh-property-helpers
[coveralls-image]: http://img.shields.io/coveralls/floatdrop/bh-property-helpers/master.svg
