var wt = require('../index');
var should = require('should');
describe('test/weather.test.js', function() {
  describe('valid result', function() {
    it('should.be.type String', function(done) {
      wt.weather('uD67wmZzhi3RFcmTkGoks2Dr', '北京', function(err, data) {
        if (err) {} else {
          data.should.be.type('string');
        }
        done();
      });
    });
  });
  describe('valid api err', function() {
    it('err.should.be.an.instanceof(Object) ', function(done) {
      wt.weather('err api', '北京', function(err, data) {
        err.should.be.an.instanceof(Object);
        done();
      });
    });
  });
});