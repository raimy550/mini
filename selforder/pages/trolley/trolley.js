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
    hideTrolley: true,
    hidePeople:false,
    row:5,
    colum:3,
    peopleNumb:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sum = 0
    var a=2000;
    sum = a;
    var count = 2;
    for (var i = 0; i < count; i++){
      a = a * 0.79;
      sum += a
    }
    console.log("count="+count+" sum="+sum+" a="+a);
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
        url: '/pages/menu/menu',
      })
  },

  onTrolley: function (e) {
    if (e.detail.event == "next") {
      //DoNext
      if (this.data.cost > 0) {
        wx.navigateTo({
          url: '/pages/orderdetail/orderdetail'
        })
      }
    }
  },

  onPeople: function(){
    var hide = !this.data.hidePeople
    this.setData({
      hidePeople: hide
    })
  },
  onPeopleNumb:function(e){
    var numb = e.currentTarget.dataset.numb
    this.setData({
      peopleNumb: numb
    })
  },
  onPeopleList: function(){

  },
  onHidePeple: function () {
    this.setData({
      hidePeople: true
    })
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