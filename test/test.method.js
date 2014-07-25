/* global describe, it */

require('should');

var Methods = require('..');
var method = new Methods();

describe('method()', function () {
    it('should create builder for context object', function () {
        var ctx = {};
        method(ctx).should.be.an.instanceOf(Object).and.not.equal(ctx);
    });
});
