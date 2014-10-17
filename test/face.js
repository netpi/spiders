var wt = require('../index');

function face() {
  var option = {
    api_key : '0ef14fa726ce34d820c5a44e57fef470',
    api_secret : '4Y9YXOMSDvqu1Ompn9NSpNwWQFHs1hYD',
    imgurl : 'http://mmbiz.qpic.cn/mmbiz/s7dKUUicDUVutPZ2BiaymBXicVTNPIKuk2J5z19bicJkbmpliaORoMuAhUgCxzgN1yAM3RfHoZibNSkD4icdlurWicAgCg/0'
  };
  wt.face(option , function (err,data) {
    if(err){
      console.log('err.........');
      console.warn(err);
    }else{
      // console.log('suc....');
      // if(err || !JSON.parse(data).face[0]){
      //   console.log('Kong kong kong ')
      // }
      var face1 = JSON.parse(data).face[0];
      console.log(face1.attribute.age); // => { range: 7, value: 33 } （33岁 偏差 7）
      console.log(face1.attribute.gender); // => { confidence: 99.94, value: 'Male' } （女 可信度99.94/%）
      console.log(face1.attribute.race); // => { confidence: 99.6939, value: 'White' } (白种人 可信度99.6939%)
      console.log(face1.attribute);
    }
  });
}
face();