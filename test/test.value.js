/* global describe, it */

require('should');

var Methods = require('..');
var method = new Methods();

describe('.value()', function () {
    it('should set value', function () {
        var obj = {};
        method(obj).named('setter').changes('attr').value();
        obj.should.have.property('setter');
        obj.setter('newValue');
        obj.attr.should.equal('newValue');
    });
});
