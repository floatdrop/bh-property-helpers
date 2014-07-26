/* global describe, it */

require('should');

var Methods = require('..');
var method = new Methods();

describe('.object()', function () {
    it('should return object', function () {
        var obj = { mods: { old: 1 } };
        method(obj).named('setter').changes('mods').object();
        obj.setter().should.eql(obj.mods);
    });

    it('should set property from object', function () {
        var obj = { mods: { old: 1 } };
        method(obj).named('setter').changes('mods').object();
        obj.should.have.property('setter');
        obj.setter({new: 1});
        obj.mods.should.eql({ old: 1, new: 1});
    });
});
