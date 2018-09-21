module.exports={
  getTestData: testData
}

function testData(){
  var data = {
    shopinfo: {
      shop_id: "S3001",
      shop_name: "真功夫南山店",
      classify_name: "快餐店",
      telephone: "0755-12345678",
      address: "南山区学府路D123号",
      open_time: ["09:00", "23:30"],
      praise_num: 10,
      good_rate: 0.821,
      img_list: ["http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"],
      broadcast_content: [
        "好消息，订饭送美女啦...",
        "买二送一"
      ],
      is_support_vat: 1,
      meal_after: 1,
      is_time: 1
    },
    custominfo: {
      customer_id: 1082,
      customer_name: "李四",
      customer_portrait: "e9b98d90be99247ca96290ea5f59ee64.jpg",
      phone: "13855556666",
      weixin_account: "sailing123",
      is_vip: 1,
      vip_level: 1,
      birthday: 1506053731,
      sex: 1
    },
    seatinfo: {
      seat_id: "SE2019",
      price: 1.5,
      name: "C108"
    },
    menuinfo: [
      {
        category_id: "C1036",
        category_name: "主食",
        type: 1,
        food_list: [
          {
            food_id: "F1076",
            food_name: "炒饭",
            food_num_mon: 12,
            praise_num: 10,
            food_intro: "",
            food_img_list: [
              "/pages/image/no_pic.png"
            ],
            food_unit: "份",
            food_price: {
              type: 1,
              original_price: 898.6,
              discount_price: 80.2,
              vip_price: 90.3,
              festival_price: 70.4,
            },
            spec: [
              {
                type: 1,
                title: "口味",
                list: [
                  {
                    title: "口味"
                  }
                ]
              },
              {
                type: 2,
                title: "份量",
                list: [
                  {
                    spec_type: 1,
                    original_price: 100.1,
                    discount_price: 80.2,
                    vip_price: 90.3,
                    festival_price: 70.4
                  }
                ]
              }
            ],
            composition: [
              "牛肉",
              "蒜"
            ],
            feature: [
              "清淡",
              "补阳"
            ],
            evaluation: {
              customer_info: {
                customer_id: 1033,
                customer_name: "张三",
                customer_portrait: "http://i4.piimg.com/null.jpg"
              },
              content: "很好吃",
              ctime: 1504523024,
              good_rate: 0.821
            }
          }, 
          {
            food_id: "F1077",
            food_name: "炒饭",
            food_num_mon: 12,
            praise_num: 10,
            food_intro: "",
            food_img_list: [
              "/pages/image/no_pic.png"
            ],
            food_unit: "份",
            food_price: {
              type: 1,
              original_price: 10.1,
              discount_price: 80.2,
              vip_price: 90.3,
              festival_price: 70.4,
            },
            spec: [
              {
                type: 1,
                title: "口味",
                list: [
                  {
                    title: "口味"
                  }
                ]
              },
              {
                type: 2,
                title: "份量",
                list: [
                  {
                    spec_type: 1,
                    original_price: 100.1,
                    discount_price: 80.2,
                    vip_price: 90.3,
                    festival_price: 70.4
                  }
                ]
              }
            ],
            composition: [
              "牛肉",
              "蒜"
            ],
            feature: [
              "清淡",
              "补阳"
            ],
            evaluation: {
              customer_info: {
                customer_id: 1033,
                customer_name: "张三",
                customer_portrait: "http://i4.piimg.com/null.jpg"
              },
              content: "很好吃",
              ctime: 1504523024,
              good_rate: 0.821
            }
          },
          {
            food_id: "F1078",
            food_name: "炒饭",
            food_num_mon: 12,
            praise_num: 10,
            food_intro: "",
            food_img_list: [
              "/pages/image/no_pic.png"
            ],
            food_unit: "份",
            food_price: {
              type: 1,
              original_price: 10.1,
              discount_price: 80.2,
              vip_price: 90.3,
              festival_price: 70.4,
            },
            spec: [
              {
                type: 1,
                title: "口味",
                list: [
                  {
                    title: "口味"
                  }
                ]
              },
              {
                type: 2,
                title: "份量",
                list: [
                  {
                    spec_type: 1,
                    original_price: 100.1,
                    discount_price: 80.2,
                    vip_price: 90.3,
                    festival_price: 70.4
                  }
                ]
              }
            ],
            composition: [
              "牛肉",
              "蒜"
            ],
            feature: [
              "清淡",
              "补阳"
            ],
            evaluation: {
              customer_info: {
                customer_id: 1033,
                customer_name: "张三",
                customer_portrait: "http://i4.piimg.com/null.jpg"
              },
              content: "很好吃",
              ctime: 1504523024,
              good_rate: 0.821
            }
          },
          {
            food_id: "F1076",
            food_name: "炒饭",
            food_num_mon: 12,
            praise_num: 10,
            food_intro: "",
            food_img_list: [
              "/pages/image/no_pic.png"
            ],
            food_unit: "份",
            food_price: {
              type: 1,
              original_price: 10.1,
              discount_price: 80.2,
              vip_price: 90.3,
              festival_price: 70.4,
            },
            spec: [
              {
                type: 1,
                title: "口味",
                list: [
                  {
                    title: "口味"
                  }
                ]
              },
              {
                type: 2,
                title: "份量",
                list: [
                  {
                    spec_type: 1,
                    original_price: 100.1,
                    discount_price: 80.2,
                    vip_price: 90.3,
                    festival_price: 70.4
                  }
                ]
              }
            ],
            composition: [
              "牛肉",
              "蒜"
            ],
            feature: [
              "清淡",
              "补阳"
            ],
            evaluation: {
              customer_info: {
                customer_id: 1033,
                customer_name: "张三",
                customer_portrait: "http://i4.piimg.com/null.jpg"
              },
              content: "很好吃",
              ctime: 1504523024,
              good_rate: 0.821
            }
          }
        ]
      },

      {
        category_id: "C1035",
        category_name: "酒水",
        type: 1,
        food_list: [
          {
            food_id: "F1074",
            food_name: "森美尔啤酒",
            food_num_mon: 12,
            praise_num: 10,
            food_intro: "",
            food_img_list: [
              "/pages/image/no_pic.png"
            ],
            food_unit: "瓶",
            food_price: {
              type: 1,
              original_price: 100.1,
              discount_price: 80.2,
              vip_price: 90.3,
              festival_price: 70.4,
            },
            spec: [
              {
                type: 1,
                title: "口味",
                list: [
                  {
                    title: "口味"
                  }
                ]
              },
              {
                type: 2,
                title: "份量",
                list: [
                  {
                    spec_type: 1,
                    original_price: 100.1,
                    discount_price: 80.2,
                    vip_price: 90.3,
                    festival_price: 70.4
                  }
                ]
              }
            ],
            composition: [
              "牛肉",
              "蒜"
            ],
            feature: [
              "清淡",
              "补阳"
            ],
            evaluation: {
              customer_info: {
                customer_id: 1033,
                customer_name: "张三",
                customer_portrait: "e9b98d90bed8247ca96290ea5f59ee64.jpg"
              },
              content: "很好吃",
              ctime: 1504523024,
              good_rate: 0.821
            }
          },
          {
            food_id: "F1073",
            food_name: "森美尔啤酒",
            food_num_mon: 12,
            praise_num: 10,
            food_intro: "",
            food_img_list: [
              "/pages/image/no_pic.png"
            ],
            food_unit: "瓶",
            food_price: {
              type: 1,
              original_price: 100.1,
              discount_price: 80.2,
              vip_price: 90.3,
              festival_price: 70.4,
            },
            spec: [
              {
                type: 1,
                title: "口味",
                list: [
                  {
                    title: "口味"
                  }
                ]
              },
              {
                type: 2,
                title: "份量",
                list: [
                  {
                    spec_type: 1,
                    original_price: 100.1,
                    discount_price: 80.2,
                    vip_price: 90.3,
                    festival_price: 70.4
                  }
                ]
              }
            ],
            composition: [
              "牛肉",
              "蒜"
            ],
            feature: [
              "清淡",
              "补阳"
            ],
            evaluation: {
              customer_info: {
                customer_id: 1033,
                customer_name: "张三",
                customer_portrait: "e9b98d90bed8247ca96290ea5f59ee64.jpg"
              },
              content: "很好吃",
              ctime: 1504523024,
              good_rate: 0.821
            }
          },
          {
            food_id: "F1072",
            food_name: "森美尔啤酒",
            food_num_mon: 12,
            praise_num: 10,
            food_intro: "",
            food_img_list: [
              "/pages/image/no_pic.png"
            ],
            food_unit: "瓶",
            food_price: {
              type: 1,
              original_price: 100.1,
              discount_price: 80.2,
              vip_price: 90.3,
              festival_price: 70.4,
            },
            spec: [
              {
                type: 1,
                title: "口味",
                list: [
                  {
                    title: "口味"
                  }
                ]
              },
              {
                type: 2,
                title: "份量",
                list: [
                  {
                    spec_type: 1,
                    original_price: 100.1,
                    discount_price: 80.2,
                    vip_price: 90.3,
                    festival_price: 70.4
                  }
                ]
              }
            ],
            composition: [
              "牛肉",
              "蒜"
            ],
            feature: [
              "清淡",
              "补阳"
            ],
            evaluation: {
              customer_info: {
                customer_id: 1033,
                customer_name: "张三",
                customer_portrait: "e9b98d90bed8247ca96290ea5f59ee64.jpg"
              },
              content: "很好吃",
              ctime: 1504523024,
              good_rate: 0.821
            }
          },
          {
            food_id: "F1071",
            food_name: "森美尔啤酒",
            food_num_mon: 12,
            praise_num: 10,
            food_intro: "",
            food_img_list: [
              "/pages/image/no_pic.png"
            ],
            food_unit: "瓶",
            food_price: {
              type: 1,
              original_price: 100.1,
              discount_price: 80.2,
              vip_price: 90.3,
              festival_price: 70.4,
            },
            spec: [
              {
                type: 1,
                title: "口味",
                list: [
                  {
                    title: "口味"
                  }
                ]
              },
              {
                type: 2,
                title: "份量",
                list: [
                  {
                    spec_type: 1,
                    original_price: 100.1,
                    discount_price: 80.2,
                    vip_price: 90.3,
                    festival_price: 70.4
                  }
                ]
              }
            ],
            composition: [
              "牛肉",
              "蒜"
            ],
            feature: [
              "清淡",
              "补阳"
            ],
            evaluation: {
              customer_info: {
                customer_id: 1033,
                customer_name: "张三",
                customer_portrait: "e9b98d90bed8247ca96290ea5f59ee64.jpg"
              },
              content: "很好吃",
              ctime: 1504523024,
              good_rate: 0.821
            }
          },
          {
            food_id: "F1070",
            food_name: "森美尔啤酒",
            food_num_mon: 12,
            praise_num: 10,
            food_intro: "",
            food_img_list: [
              "/pages/image/no_pic.png"
            ],
            food_unit: "瓶",
            food_price: {
              type: 1,
              original_price: 100.1,
              discount_price: 80.2,
              vip_price: 90.3,
              festival_price: 70.4,
            },
            spec: [
              {
                type: 1,
                title: "口味",
                list: [
                  {
                    title: "口味"
                  }
                ]
              },
              {
                type: 2,
                title: "份量",
                list: [
                  {
                    spec_type: 1,
                    original_price: 100.1,
                    discount_price: 80.2,
                    vip_price: 90.3,
                    festival_price: 70.4
                  }
                ]
              }
            ],
            composition: [
              "牛肉",
              "蒜"
            ],
            feature: [
              "清淡",
              "补阳"
            ],
            evaluation: {
              customer_info: {
                customer_id: 1033,
                customer_name: "张三",
                customer_portrait: "e9b98d90bed8247ca96290ea5f59ee64.jpg"
              },
              content: "很好吃",
              ctime: 1504523024,
              good_rate: 0.821
            }
          }
        ]
      }
    ]
  }

  return data;
}