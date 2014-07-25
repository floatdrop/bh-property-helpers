/* global describe, it */

require('should');

var Methods = require('..');
var method = new Methods();

describe('.chagnes()', function () {
    it('should accept function as property name', function () {
        var obj = {};
        method(obj).named('setter').changes(function () { return 'a'; }).value();
        obj.setter('1');
        obj.should.have.property('a').which.eql('1');
    });

    it('should support dots in property name', function () {
        var obj = {};
        method(obj).named('setter').changes('attr.subattr').value();
        obj.setter('1');
        obj.should.have.property('attr').with.property('subattr').which.eql('1');
    });
});
