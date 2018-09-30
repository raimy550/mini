// pages/user/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    custominfo: {},
    menu:[{
      name:"我的分享",
      nav: "",
      icon: "/pages/image/icon_share.png"
    },{
        name: "我的评价",
        nav:"",
        icon: "/pages/image/icon_evaluate.png"
      }, {
        name: "我的打赏",
        nav: "",
        icon: "/pages/image/icon_praise.png"
      }, {
        name: "我的收藏",
        nav: "",
        icon: "/pages/image/icon_collect.png"
      }, {
        name: "我的地址",
        nav: "",
        icon: "/pages/image/icon_addr.png"
      }, {
        name: "历史订单",
        nav: "/pages/user/myorder/myorder",
        icon: "/pages/image/icon_order.png"
      }, {
        name: "消息中心",
        nav: "",
        icon: "/pages/image/icon_msg.png"
      }, {
        name: "发票助手",
        nav: "",
        icon: "/pages/image/icon_bill.png"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      custominfo: app.globalData.homeData.custominfo
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

  onInfo:function(){
    wx.navigateTo({
      url: "/pages/user/userinfo/userinfo",
    })
  },

  onTurnItem:function(e){
    console.log(e)
    var index = e.currentTarget.dataset.index
    var nav = this.data.menu[index].nav
    wx.navigateTo({
      url: nav,
    })
    
  }

})