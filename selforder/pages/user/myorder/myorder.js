// pages/user/myorder/myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:["全部订单","待付款","待评价","已付"],
    tabSel:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  onSelTab: function(e){
    var index = e.currentTarget.dataset.index

    this.setData({
      tabSel: index
    })
  },

  onTabChange:function(e){
    console.log(e);
    this.setData({
      tabSel: e.detail.current
    })
  }
})