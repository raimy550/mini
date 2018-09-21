// pages/components/bottom-price/bottom-price.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hideTrolley: Boolean,
    trolleyNumb: Number,
    priceValue: Number,
    nextText:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTrolley: function(){
      this.triggerEvent('trolleyevent', {event:"trolley"})
    },
    onDoNext: function () {
      this.triggerEvent('trolleyevent', {event: "next"})
    },


  }
})
