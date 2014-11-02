var wt = require('../index');
var should = require('should');

describe('test/history.test.js', function() {
  describe('valid result', function() {
    it('should.be.type string', function(done) {
      wt.history(function(err, data) {
        if (err) {} else {
          data.should.be.type('string');
        }
        done();
      });
    });
  });
});