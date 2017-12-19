// pages/leader/leader.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authors: []
  },

  dianZan: function(e){
    // 获取当前点击元素的位置
    var index = e.currentTarget.dataset.index;
    // 判断是否点击过
    if (this.data.authors[index].good){
      wx.showModal({
        content: "您已经点赞过了!",
        showCancel: false
      })
      return false;
    }
    // 修改数据（增加数据：concat()增加数组，前后拼接可放置首位，删除数据：找到index,splice(index, 1); 清空数据直接赋值 [];）
    this.data.authors[index].thumbUp = parseInt(this.data.authors[index].thumbUp) + 1;
    this.data.authors[index].good = true;
    // 动态更新数据显示
    this.setData({
      authors: this.data.authors
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求数据
    var that = this;
    wx.request({
      url: "https://www.easy-mock.com/mock/5a31e9eb513048307be27a9a/test/",
      success: function(res){
        that.setData({authors: res.data.data.index});
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
      // 加载提示
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        mask: true,
        duration: 500
      });
      setTimeout(function () {
        wx.hideToast();
      }, 500)
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