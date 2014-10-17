var urllib = require('urllib');

var face =function face() {
  urllib.request('https://apicn.faceplusplus.com/v2/detection/detect', {
    method: 'POST',

    data: {
      api_key: '0ef14fa726ce34d820c5a44e57fef470',
      api_secret: '4Y9YXOMSDvqu1Ompn9NSpNwWQFHs1hYD',
      url: 'http://cn.faceplusplus.com/static/resources/python_demo/1.jpg'
    }
  }, function(err, data1) {
    if (err) {
      console.log('err .......');
      console.log(err.toString());
    } else {
      console.log(data1.toString());
    }
  });
};
// post();