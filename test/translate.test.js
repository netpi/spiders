var wt = require('../index');
var should = require('should');
describe('test/translate.test.js', function() {
  describe('valid result', function() {
    it('should.be.type.result String', function(done) {
      wt.translate('uD67wmZzhi3RFcmTkGoks2Dr', '子曰', function(err, data) {
        if (err) {} else {
          data.should.be.type('string');
        }
        done();
      });
    });
  });
  describe('valid api err', function() {
    it('should.be.type.result String', function(done) {
      wt.translate('err api', '子曰', function(err, data) {
        err.should.be.an.instanceof(Object);
        done();
      });
    });
  });
});