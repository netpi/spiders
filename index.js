function wechattools() {}
wechattools.weather = require('./lib/weather');
wechattools.history = require('./lib/history');
wechattools.translate = require('./lib/translate');
module.exports = wechattools;