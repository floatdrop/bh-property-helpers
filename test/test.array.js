/* global describe, it */

require('should');

var Methods = require('..');
var method = new Methods();

describe('.array()', function () {
    it('should set array from value', function () {
        var obj = { mix: [] };
        method(obj).named('setter').changes('mix').array();
        obj.should.have.property('setter');
        obj.setter('newValue');
        obj.mix.should.eql(['newValue']);
    });
});
