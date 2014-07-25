/* global describe, it */

require('should');

var Methods = require('..');
var method = new Methods();

describe('.property()', function () {
    it('should set property', function () {
        var obj = {};
        method(obj).named('setter').changes('mods').property();
        obj.should.have.property('setter');
        obj.setter('key', 'value');
        obj.mods.should.eql({ key: 'value' });
    });
});
