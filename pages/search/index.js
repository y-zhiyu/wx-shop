// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { "name": '商品',
      "index":'0'},
      {
        "name": '商家',
        "index": '1'
      }],
    selected:0,
  },
  onLoad: function(options) {

  },
  NametypeId: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.setData({
      'selected': index,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})