var wt = require('../index');
var should = require('should');

describe('test/face.test.js', function() {
  describe('vaild result', function() {
    it('should have properties ', function(done) {
      var option = {
        api_key: '0ef14fa726ce34d820c5a44e57fef470',
        api_secret: '4Y9YXOMSDvqu1Ompn9NSpNwWQFHs1hYD',
        imgurl: 'http://c.hiphotos.baidu.com/image/pic/item/aec379310a55b31951a0887141a98226cffc175c.jpg'
      };
      wt.face(option, function(err, data) {
        if (err) {
          done();
        } else {
          var face1 = JSON.parse(data).face[0];
          face1.attribute.should.have.properties('age', 'gender', 'race');
          done();
        }
      });
    });

    describe('vaild err', function() {
      it('err api_key => err.should.be.an.instanceof(Object)', function(done) {
        var option = {
          api_key: 'err api_key',
          api_secret: 'err api_secret',
          imgurl: 'http://c.hiphotos.baidu.com/image/pic/item/aec379310a55b31951a0887141a98226cffc175c.jpg'
        };
        wt.face(option, function(err, data) {
          err.should.be.an.instanceof(Object);
          done();
        });
      });
      it('no face imageurl =>err.error.should.be.eql(\'no face\')', function(done) {
        var option = {
          api_key: '0ef14fa726ce34d820c5a44e57fef470',
          api_secret: '4Y9YXOMSDvqu1Ompn9NSpNwWQFHs1hYD',
          //no face url ;face++找不到face的url
          imgurl: 'http://mmbiz.qpic.cn/mmbiz/s7dKUUicDUVutPZ2BiaymBXicVTNPIKuk2J5z19bicJkbmpliaORoMuAhUgCxzgN1yAM3RfHoZibNSkD4icdlurWicAgCg/0'
        };
        wt.face(option, function(err, data) {
          err.error.should.be.eql('no face');
          done();
        });
      });
      it('err imageurl =>err.should.be.an.instanceof(Object)', function(done) {
        var option = {
          api_key: '0ef14fa726ce34d820c5a44e57fef470',
          api_secret: '4Y9YXOMSDvqu1Ompn9NSpNwWQFHs1hYD',
          imgurl: 'bad url' //bad url
        };
        wt.face(option, function(err, data) {
          err.should.be.an.instanceof(Object);
          done();
        });
      });
    });
  });
});