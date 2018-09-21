// pages/trolley/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty: false,
    menuindex: 0,
    index:0,
    item:{numb: 4,},
    hide: false,
    pack:true,
    cost: 866.9,
    trolleyNumb: 4,
    hideTrolley: true
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

  onCleanTrolley: function(){
      this.setData({
        empty: true
      })
  },

  onTurnMenu: function(e){
      wx.switchTab({
        url: '/pages/main/menu/menu',
      })
  },
  
  onTrolley: function (e) {
    if (e.detail.event == "trolley") {
        //DoTrolley
    } else if (e.detail.event == "next") {
      //DoNext
    }

  },

  itemPackChange: function(e){
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var arr=[];
    arr = e.detail.value
    var bPack = arr.length > 0? true : false
    this.setData({
      pack: bPack
    })
  }
})