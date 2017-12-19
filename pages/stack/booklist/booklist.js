// pages/stack/booklist/booklist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: []
  },

  bindViewTap: function(){
    wx.navigateTo({
      url: "../../logs/logs"
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
        for(var i = 0; i < res.data.data.stack.length; i++){
          if (options.id === res.data.data.stack[i].List.id) {
            wx.setNavigationBarTitle({
              title: res.data.data.stack[i].bookTypes
            });
            that.setData({ bookList: res.data.data.stack[i].List.bookList });
          };
        }
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
    wx.showToast({
      title: "加载中",
      icon: "loading",
      duration: 300
    })
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