// pages/user/userinfo/userinfo.js
var util = require('../../../utils/util.js')
const app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    custominfo: {},
    birthday:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date(app.globalData.homeData.custominfo.birthday * 1000)
    var strTime = util.formatDate(date)

    this.setData({
      custominfo: app.globalData.homeData.custominfo,
      birthday: strTime
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