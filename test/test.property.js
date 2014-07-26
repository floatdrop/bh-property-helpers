/* global describe, it */

require('should');

var Methods = require('..');
var method = new Methods();

describe('.property()', function () {
    it('should return property', function () {
        var obj = { _mods: { test: 'value' }};
        method(obj).named('mods').changes('_mods').property();
        obj.mods('test').should.eql('value');
    });

    it('should set property', function () {
        var obj = {};
        method(obj).named('setter').changes('mods').property();
        obj.should.have.property('setter');
        obj.setter('key', 'value');
        obj.mods.should.eql({ key: 'value' });
    });
});
