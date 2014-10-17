var wt = require('../index');

function face() {
  var option = {
    api_key : '0ef14fa726ce34d820c5a44e57fef470',
    api_secret : '4Y9YXOMSDvqu1Ompn9NSpNwWQFHs1hYD',
    imgurl : 'http://cn.faceplusplus.com/static/resources/python_demo/1.jpg'
  };
  wt.face(option , function (err,data) {
    if(err){
      console.log('err.........');
      console.warn(err);
    }else{
      console.log('suc....');
      var face1 = JSON.parse(data).face[0];
      console.log(face1.attribute.age); // => { range: 7, value: 33 } （33岁 偏差 7）
      console.log(face1.attribute.gender); // => { confidence: 99.94, value: 'Male' } （女 可信度99.94/%）
      console.log(face1.attribute.race); // =>
      // console.log(face1.attribute);

    }
  });
}
face();