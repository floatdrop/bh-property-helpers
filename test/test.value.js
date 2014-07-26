/* global describe, it */

require('should');

var Methods = require('..');
var method = new Methods();

describe('.value()', function () {
    it('should not override value', function () {
        var obj = { _tag: 'value' };
        method(obj).named('tag').changes('_tag').value();
        obj.tag('newValue');
        obj.tag().should.equal('value');
    });

    it('should override value with force flag', function () {
        var obj = { _tag: 'value' };
        method(obj).named('tag').changes('_tag').value();
        obj.tag('newValue', true);
        obj.tag().should.equal('newValue');
    });

    it('should set value', function () {
        var obj = {};
        method(obj).named('setter').changes('attr').value();
        obj.should.have.property('setter');
        obj.setter('newValue');
        obj.attr.should.equal('newValue');
    });
});
