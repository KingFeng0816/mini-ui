// 引入request
import { RequestService } from './request.js'

// 获取轮播图数据
export const GetSwiperData = function (myData) {
  wx.request({
    url: RequestService.ServiceURL+'/mtp-wx/getHomeBannerData', //仅为示例，并非真实的接口地址
    data: {
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function(res) {
      typeof myData == "function" && myData(res)
    }
  })
}

// 获取店铺列表数据
export const GetStoreListData = function (myData) {
  wx.request({
    url: RequestService.ServiceURL+'/mtp-wx/getStoreListData', //仅为示例，并非真实的接口地址
    data: {
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function(res) {
      typeof myData == "function" && myData(res)
    }
  })
}






