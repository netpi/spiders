var urllib = require('urllib');

var weather = function(ak, city, callback) {
  var url = 'http://api.map.baidu.com/telematics/v3/weather?location=' + city.toString() + '&output=json&ak=' + ak;
  urllib.request(url, function(error, data, res1) {

    var str = "";
    var err = null;
    if (error) {
      this.err = error.toString();
    }
    if (JSON.parse(data).status === 'success') {
      str += JSON.parse(data).results[0].currentCity + '\n';
      var weatherAttr = JSON.parse(data).results[0].weather_data;
      str += weatherAttr[0].date + '\n';
      str += weatherAttr[0].temperature + '\n';
      str += weatherAttr[0].weather + '\n';
      str += weatherAttr[0].wind + '\n';
      str += '\n';

      str += weatherAttr[1].date + '\n';
      str += weatherAttr[1].temperature + '\n';
      str += weatherAttr[1].weather + '\n';
      str += weatherAttr[1].wind + '\n';
      str += '\n';

      str += weatherAttr[2].date + '\n';
      str += weatherAttr[2].temperature + '\n';
      str += weatherAttr[2].weather + '\n';
      str += weatherAttr[2].wind + '\n';
    } else {
      this.err = data;
    }
    callback(this.err, str.toString());
  });
};
module.exports = weather;