var urllib = require('urllib');

var translate = function(ak, data, callback) {
  var url = 'http://openapi.baidu.com/public/2.0/bmt/translate?client_id='+ak+'&q='+data+'&from=auto&to=auto';
  urllib.request(url, function(error, data, res1) {

    var str = "";
    var err = null;
    if (error) {
      this.err = error.toString();
    }
    var result = JSON.parse(data).trans_result[0].dst;

    callback(this.err,result);
  });
};
module.exports = translate;