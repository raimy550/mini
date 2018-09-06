// pages/menu/menu.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    selected: 0,
    toView: "id0",
    cost: 0,
    fooditem_title: 25,
    fooditem_content: 170,
    menuSrcollTop: [],
    trolleyNumb: 0,
    foodScroolHeight: 0,
    menu: [{
        "typeName": "快餐类",
        "id": "id0",
        "menuContent": [{
            "name": "炸鸡",
            "src": "http://i4.piimg.com/null.jpg",
            "sales": 22,
            "rating": 3,
            "price": 15,
            "numb": 0
          },
          {
            "name": "汉堡",
            "src": "http://i4.piimg.com/null.jpg",
            "sales": 22,
            "rating": 3,
            "price": 10,
            "numb": 0
          },
          {
            "name": "鸡翅",
            "src": "http://i4.piimg.com/null.jpg",
            "sales": 22,
            "rating": 3,
            "price": 11,
            "numb": 0
          },
          {
            "name": "薯条",
            "src": "http://i4.piimg.com/null.jpg",
            "sales": 22,
            "rating": 3,
            "price": 32,
            "numb": 0
          }
        ]
      },
      {
        "typeName": "盖浇饭类",
        "id": "id1",
        "menuContent": [{
            "name": "土豆牛肉盖浇饭",
            "src": "http://i4.piimg.com/null.jpg",
            "sales": 22,
            "rating": 3,
            "price": 9,
            "numb": 0
          },
          {
            "name": "肉末茄子盖浇饭",
            "src": "http://i4.piimg.com/null.jpg",
            "sales": 22,
            "rating": 3,
            "price": 21,
            "numb": 0
          },
          {
            "name": "番茄炒蛋盖浇饭",
            "src": "http://i4.piimg.com/null.jpg",
            "sales": 22,
            "rating": 3,
            "price": 50,
            "numb": 0
          }
        ]
      },
      {
        "typeName": "养生粥类",
        "id": "id2",
        "menuContent": [{
            "name": "桂圆莲子粥",
            "src": "http://i4.piimg.com/null.jpg",
            "sales": 22,
            "rating": 3,
            "price": 15,
            "numb": 0
          },
          {
            "name": "皮蛋瘦肉粥",
            "src": "http://i4.piimg.com/601998/da9e00c0bccd6fb0.jpg",
            "sales": 22,
            "rating": 3,
            "price": 12,
            "numb": 0
          }
        ]
      },
      {
        "typeName": "小吃类",
        "id": "id3",
        "menuContent": [{
          "name": "肉夹馍",
          "src": "http://i4.piimg.com/601998/473847a250bb0186.jpg",
          "sales": 22,
          "rating": 3,
          "price": 4,
          "numb": 0
        }]
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
      toView: this.data.menu[e.currentTarget.dataset.index].id
    })
    console.log(e.currentTarget.dataset.index + ":" + this.data.toView);
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
      writer.id = menu[i].id
      if (i > 0) {
        writer.scrollTop = menuSrcollTop[i - 1].scrollTop + (menu[i - 1].menuContent.length * 170 + 25) * windowWidth / 750
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
    console.log(e.detail)
    var index = this.data.selected
    var menuSrcollTop = this.data.menuSrcollTop
    for (var i = 0; i < menuSrcollTop.length; i++) {
      if (i + 1 <= menuSrcollTop.length) {
        if (menuSrcollTop[i].scrollTop < e.detail.scrollTop && menuSrcollTop[i + 1].scrollTop > e.detail.scrollTop) {
          index = i
        }
      }

    }
    var curTop = e.detail.scrollTop + this.data.foodScroolHeight
    var maxTop = e.detail.scrollHeight
    console.log("curTop:" + curTop + " maxTop:" + maxTop + " app.globalData.windowwidth:" + app.globalData.windowWidth)
    if (curTop+1 < maxTop) {
      this.setData({
        selected: index
      })
    }

  },

  addToTrolley: function(e) {
    var info = this.data.menu;
    var num = this.data.trolleyNumb;
    var foodItem = info[e.currentTarget.dataset.menuindex].menuContent[e.currentTarget.dataset.index];
    foodItem.numb++
    num++;
    var sum = this.data.cost + foodItem.price;
    this.setData({
      menu: info,
      trolleyNumb: num,
      cost: sum
    })
  },

  removeFromTrolley: function(e) {
    var info = this.data.menu;
    var num = this.data.trolleyNumb;

    var foodItem = info[e.currentTarget.dataset.menuindex].menuContent[e.currentTarget.dataset.index];
    var sum = this.data.cost - foodItem.price;
    if (foodItem.numb > 0) {
      foodItem.numb--
        num--;
    }

    this.setData({
      menu: info,
      trolleyNumb: num,
      cost: sum
    })
  }
})