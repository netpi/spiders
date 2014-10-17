var wt = require('../index');

function weather() {
    wt.weather('uD67wmZzhi3RFcmTkGoks2Dr', '北京', function(err, data) {
        if (err) {
            console.warn('err.....');
            console.warn(err.toString());
        } else {
            console.log("msg..........");
            console.log(data);
        }
    });
}
weather();