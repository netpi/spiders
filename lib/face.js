var urllib =require('urllib');

var face =function (opt , callback) {

  var ak = opt.api_key;
  var sk = opt.api_secret;
  var imgurl = opt.imgurl;
  urllib.request('https://apicn.faceplusplus.com/v2/detection/detect', {
    method: 'POST',
    data: {
      api_key: ak,
      api_secret: sk,
      url: imgurl
    }
  }, function(err, data) {
    var error = null;
    if (err) {
      error = err.toString();
    } else {
      var urlerror = JSON.parse(data.toString()).error;
      if(urlerror){
        err = data.toString();
      }
      callback(err, data.toString());
    }
  });
};
module.exports = face;
