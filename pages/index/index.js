//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    time: 3
  },
  
  // 三秒进入首页
  onLoad: function () {
    var that = this;
    var count = setInterval(function(){
      that.setData({
        time: that.data.time - 1
        });
      if (that.data.time <= 0){
        // 另一种跳转方法,只保留有tabBar页面
        wx.switchTab({
          url: "../leader/leader",
          complete: function(e){
            clearInterval(count);
          }
        });
      }
    }, 1000)
  }
})
