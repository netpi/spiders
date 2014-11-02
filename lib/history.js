var urllib = require('urllib');
var history = function(callback) {
  urllib.request('http://www.rijiben.com/', function(error, data, res1) {
    var err = null;
    // 返回的数据
    var rdata = '';
    if (error) {
      err = error;
    } else {
      var re = /<div.+class="listren"[\d\D]+?(<\/div>)/;
      var str = data.toString().match(re)[0];
      str = str.replace(/<[^<>]+>/g, '').replace(/\s\s\s/g, "").replace(/（图）/g, "");
      var attr = str.split("&nbsp;&nbsp;");
      var date = new Date();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      rdata = "\ue513 历史上的" + m + "月" + d + "日\n\n";
      for (var i = 0; i < attr.length - 1; i++) {
        var attr2 = attr[i].trim().split(/\s/);
        // rdata +='\ue148';
        rdata += attr2[0].substring(0, 5) + " ";
        rdata += attr2[1] + "\n\n";
      }
    }
    callback(err, rdata);
  });
};
module.exports = history;