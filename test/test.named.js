/* global describe, it */

require('should');

var Methods = require('..');
var method = new Methods();

describe('.named()', function () {
    it.skip('should create function inside context object', function () {
        var obj = {};
        method(obj).named('setter').changes('attr');
        obj.setter.should.be.an.instanceOf(Function);
    });
});
