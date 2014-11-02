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
  }, function(urllib_err, data) {
    var error = null;
    if (urllib_err) {

      error = urllib_err;
    } else {
      var face_error = JSON.parse(data.toString()).error;
      if(face_error){
        error = data;
      }else if(!JSON.parse(data.toString()).face[0]){
        error = {'error' : 'no face'};
      }
      callback(error, data.toString());
    }
  });
};
module.exports = face;
