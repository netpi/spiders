var wt = require('../index');

function translate() {
  wt.translate('uD67wmZzhi3RFcmTkGoks2Dr', '子曰', function(err, data) {
    if (err) {
      console.warn('err.....');
      console.warn(err.toString());
    } else {
      console.log("msg..........")
      console.log(data)
    };
  });
};
translate();