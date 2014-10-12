## wechat-tools 是微信公众平台开发者的实用小工具
## 安装
```
npm install wechat-tools -save;
```
## 使用
### 1 回复天气预报
此为共享 ak = uD67wmZzhi3RFcmTkGoks2Dr,实际应用时建议去[百度开发者](developer.baidu.com/map/index.php)自行申请ak

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
### 2 回复历史上的今天
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