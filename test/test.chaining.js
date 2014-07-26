/* global describe, it */

require('should');

var Methods = require('..');
var method = new Methods();

describe('chaining', function () {
    it('should preserve before', function (done) {
        var obj = {};
        method(obj)
            .before(done)
            .named('setter').changes('a').value()
            .named('getter').changes('b').value();

        obj.getter();
    });

    it('should work', function () {
        var obj = {};
        method(obj)
            .named('setter').changes('a').value()
            .named('getter').changes('b').value();

        obj.should.have.property('setter');
        obj.should.have.property('getter');

        obj.setter(1);
        obj.getter(2);

        obj.should.have.property('a').which.eql(1);
        obj.should.have.property('b').which.eql(2);
    });
});
