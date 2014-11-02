## wechat-tools 让您的公众平台有可以回复‘天气预报’、‘历史上的今天’ 等
源码地址 [netpi/wechat-tools](https://github.com/netpi/wechat-tools)


推荐微信公众平台的开发者配合使用 [node-webot/wechat](https://github.com/node-webot/wechat)

### 功能预览

1 ，天气预报 （获取中国任意城市 三天内的天气预报）

2 ，历史上的今天 （获取历史上的今天 发生的大事件）

3 ，翻译助手（自动检查语言并且翻译-支持12种语言）

4 ，人脸识别(分析某一张照片上的人脸信息)
## 安装
```
npm install wechat-tools --save;
```
## 测试

```
  make test ;

```
### 1 天气预报 （获取中国任意城市 三天内的天气预报）
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
### 2 历史上的今天 （获取历史上的今天 发生的大事件）
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

### 3 翻译助手（自动检查语言并且翻译-支持12种语言）

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

### 4  人脸识别 (分析某一张照片上的人脸信息)

  建议去 [face++](http://www.faceplusplus.com.cn/) 官网申请api_key、api_secret

```

var wt = request('wechat-tools');

var option = {
    api_key : '0ef14fa726ce34d820c5a44e57fef470',
    api_secret : '4Y9YXOMSDvqu1Ompn9NSpNwWQFHs1hYD',
    imgurl : 'http://cn.faceplusplus.com/static/resources/python_demo/1.jpg'
  };

wt.face(option , function (err,data) {
  if(err){
    // err ...
  }else{
    var face1 = JSON.parse(data).face[0];
      console.log(face1.attribute.age); // => { range: 7, value: 33 } （33岁 偏差 7）
      console.log(face1.attribute.gender); // => { confidence: 99.94, value: 'Male' } （女 可信度99.94/%）
      console.log(face1.attribute.race); // => { confidence: 99.6939, value: 'White' } (白种人 可信度99.6939%)
  }
});
```
详细结果分析参看 [face++ api文档](http://www.faceplusplus.com.cn/detection_detect/)

##  应用
![参考图片](http://pistatic.qiniudn.com/images/history-code.jpg?imageView2/1/w/300/)