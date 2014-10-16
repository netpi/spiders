## wechat-tools 让您的公众平台有可以回复‘天气预报’、‘历史上的今天’ 等
源码地址 [netpi/wechat-tools](https://github.com/netpi/wechat-tools)


推荐微信公众平台的开发者配合使用 [node-webot/wechat](https://github.com/node-webot/wechat)

## 安装
```
npm install wechat-tools --save;
```
### 1 生成可以直接回复的‘天气预报’
此为共享 ak = uD67wmZzhi3RFcmTkGoks2Dr,实际应用时建议去[百度开发者](http://developer.baidu.com/map/index.php)自行申请ak

```
var wt = request('wechat-tools');
var ak = 'uD67wmZzhi3RFcmTkGoks2Dr';//
var city = '北京';
wt.weather(ak,city,function(err , data){
    if(err){
      throw err;
    }else{
     console.log(data);
   }
});
```
#### console.log(data); 结果如下图
![参考图片](http://pistatic.qiniudn.com/images/weather01.png?imageView2/1/w/500/)
### 2 生成可以直接回复的‘历史上的今天’
```
wt.history(function (err,data) {
    if(err){
      throw err;
    }else{
      console.log(data);
    }
  })
```
#### console.log(data); 结果如下图
![参考图片](http://pistatic.qiniudn.com/images/history01.png?imageView2/1/w/400/)

### 3  翻译小助手

支持语言种类：
中文、英语、日语、韩语、德语、法语、俄语、泰语、意大利语、西班牙语、葡萄牙语、阿拉伯语


翻译服务会自动检测源语言语种，并根据源语言的语种按照规则设置目标语言的语种。当源语言为非中文时，目标语言自动设置为中文。当源语言为中文时，目标语言自动设置为英文。

#### 英译汉
```
var wt = request('wechat-tools');
var ak = 'uD67wmZzhi3RFcmTkGoks2Dr';
var word = '周末放假'; // 要翻译的词汇
 wt.translate(ak, word, function(err, data) {
    if (err) {
      throw err;
    } else {
      console.log(data);// -->  The weekend holiday
    };
  });
```
#### 汉译英
```

  var wt = request('wechat-tools');
  var ak = 'uD67wmZzhi3RFcmTkGoks2Dr';
  var word = 'The weekend holiday'; // 要翻译的单词
  wt.translate(ak, word, function(err, data) {
    if (err) {
      throw err;
    } else {
      console.log(data);// -->  周末度假
    };
  });

```

##  应用
![参考图片](http://pistatic.qiniudn.com/images/history-code.jpg?imageView2/1/w/300/)