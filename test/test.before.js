/* global describe, it */

require('should');

var Methods = require('..');
var method = new Methods();

describe('.before()', function () {
    it('should call before function', function () {
        var obj = { mix: [] };
        method(obj)
            .before(function () {
                this.mix = ['before'];
            })
            .named('setter').changes('mix').array();
        obj.should.have.property('setter');
        obj.setter('newValue');
        obj.mix.should.eql(['before', 'newValue']);
    });
});
