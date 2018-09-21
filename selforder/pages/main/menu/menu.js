// pages/menu/menu.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    toView: "id0",
    cost: 0,
    fooditem_title: 65,
    fooditem_content: 201,
    menuSrcollTop: [],
    trolleyNumb: 0,
    foodScroolHeight: 0,
    homeData:{},
    shopInfo:{},
    hideTrolley: false,
    menu: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initHomeData()
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
    this.initFoodTypeScrollTop()
  },

  turnMenu: function(e) {
    this.setData({
      selected: e.currentTarget.dataset.index,
      toView: this.data.menu[e.currentTarget.dataset.index].category_id
    })
    app.log(e.currentTarget.dataset.index + ":" + this.data.toView);
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
    wx.request({
      url: 'www.baidu.com',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  initHomeData: function() {
    var menuArry = [];
    var menuinfo = app.globalData.homeData.menuinfo
    for (var i = 0; i < menuinfo.length; i++) {
      var menuinfoItem = menuinfo[i]
      var menuItem = {}
      menuItem["category_id"] = menuinfoItem.category_id
      menuItem["category_name"] = menuinfoItem.category_name
      menuItem["type"] = menuinfoItem.type
      menuItem["food_list"] = menuinfoItem.food_list
      menuItem["numb"] =0
      for (var j = 0; j < menuItem.food_list.length; j++) {
        var foodItem = menuItem.food_list[j]
        foodItem["numb"] = 0
      }
      menuArry.push(menuItem)

      var shop_info = app.globalData.homeData.shopinfo
      var home_data = app.globalData.homeData

      this.setData({
        menu: menuArry,
        shopInfo: shop_info,
        homeData: home_data
      })
    }

  },

  initFoodTypeScrollTop: function() {
    let menu = this.data.menu;
    let menuSrcollTop = this.data.menuSrcollTop;

    function ObjStory(id, scrollTop) {
      this.id = id
      this.scrollTop = scrollTop
    }

    var windowWidth
    var windowHeight
    wx.getSystemInfo({
      success: function(res) {
        windowWidth = res.windowWidth
        windowHeight = res.windowHeight
        app.globalData.windowWidth = windowWidth
        app.globalData.windowHeight = windowHeight
      },
    })
    this.data.foodScroolHeight = windowHeight * 0.77 * 0.9 * 0.95


    console.log("windowwidth=" + windowWidth + " windowHeight=" + windowHeight + " foodScroolHeight" + this.data.foodScroolHeight)

    for (let i = 0; i < menu.length; i++) {
      var writer = new ObjStory("", 0)
      writer.id = menu[i].category_id
      if (i > 0) {
        writer.scrollTop = menuSrcollTop[i - 1].scrollTop + (menu[i - 1].food_list.length * this.data.fooditem_content + this.data.fooditem_title) * windowWidth / 750
      } else {
        writer.scrollTop = 0
      }
      menuSrcollTop[i] = writer
      console.log("index:" + i + " id:" + menuSrcollTop[i].id + " scrollTop:" + menuSrcollTop[i].scrollTop)
    }

    this.setData({
      menuSrcollTop: menuSrcollTop
    })

  },

  onGoodsScroll: function(e) {
    // console.log(e.detail)
    var index = this.data.selected
    var menuSrcollTop = this.data.menuSrcollTop
    for (var i = 0; i < menuSrcollTop.length; i++) {
      if (i < menuSrcollTop.length - 1) {
        if (menuSrcollTop[i].scrollTop < e.detail.scrollTop && menuSrcollTop[i + 1].scrollTop > e.detail.scrollTop) {
          index = i
        }
      } else if (i == (menuSrcollTop.length - 1) && menuSrcollTop[i].scrollTop < e.detail.scrollTop) {
        index = i
      }

    }
    var curTop = e.detail.scrollTop + this.data.foodScroolHeight
    var maxTop = e.detail.scrollHeight
    // console.log("curTop:" + curTop + " maxTop:" + maxTop + " app.globalData.windowwidth:" + app.globalData.windowWidth)
    if (curTop + 1 < maxTop) {
      this.setData({
        selected: index
      })
    }

  },

  addToTrolley: function(e) {
    var info = this.data.menu
    var num = this.data.trolleyNumb
    var menuItem = info[e.currentTarget.dataset.menuindex]
    var foodItem = menuItem.food_list[e.currentTarget.dataset.index]
    foodItem.numb++
    menuItem.numb++;
      num++;
    var price = this.data.homeData.custominfo.is_vip == 1 ? foodItem.food_price.vip_price : foodItem.food_price.original_price
    var sum = (this.data.cost * 10 + price * 10) / 10
    
    this.setData({
      menu: info,
      trolleyNumb: num,
      cost: sum
    })
  },

  removeFromTrolley: function(e) {
    var info = this.data.menu;
    var num = this.data.trolleyNumb;
    var menuItem = info[e.currentTarget.dataset.menuindex]
    var foodItem = menuItem.food_list[e.currentTarget.dataset.index]
    var price = this.data.homeData.custominfo.is_vip == 1 ? foodItem.food_price.vip_price : foodItem.food_price.original_price
    var sum = (this.data.cost * 10 - price * 10) / 10;
    if (foodItem.numb > 0) {
      foodItem.numb--
      menuItem.numb--
        num--
    }

    this.setData({
      menu: info,
      trolleyNumb: num,
      cost: sum
    })
  },
  onTrolley: function(e) {
    if(e.detail.event == "trolley"){
      wx.navigateTo({
        url: '/pages/trolley/index/index'
      })
    } else if (e.detail.event == "next"){
        //DoNext
    }
   
  },

  turnFoodDetail: function(e) {
    var info = this.data.menu
    var menuItem = info[e.currentTarget.dataset.menuindex]
    var foodItem = menuItem.food_list[e.currentTarget.dataset.index]
    
    wx.navigateTo({
      url: '/pages/main/fooddetail/fooddetail?food_detail=' + encodeURI(JSON.stringify(foodItem))
    })
  }
})