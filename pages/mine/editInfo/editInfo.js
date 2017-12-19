// pages/mine/editInfo/editInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  chooseImageTap: function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function(res){
        console.log(res.tempFilePaths[0]);
        var userImg = that.data.userInfo
        userImg.userImg = res.tempFilePaths[0];
        that.setData({userInfo: userImg})
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "https://www.easy-mock.com/mock/5a31e9eb513048307be27a9a/test/",
      success: function(res){
        that.setData({userInfo: res.data.data.userInfo})
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})