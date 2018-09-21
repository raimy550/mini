// pages/main/fooddetail/fooddetail.js
var util = require('../../../utils/util.js')
const app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    foodDetail: {},
    homeData:{},
    formatTime:'',
    cost: 889.6,
    trolleyNumb: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var food_detail = JSON.parse(decodeURI(options.food_detail))
    var home_data = app.globalData.homeData
    var time = food_detail.evaluation.ctime
    var date = new Date(time*1000)
    var strTime = util.formatTime(date)

    this.setData({
      foodDetail: food_detail,
      homeData: home_data,
      formatTime: strTime
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
  
  },

  onTrolley: function (e) {
    if (e.detail.event == "trolley") {
      wx.navigateTo({
        url: '/pages/trolley/index/index'
      })
    } else if (e.detail.event == "next") {
      //DoNext
    }

  }
})