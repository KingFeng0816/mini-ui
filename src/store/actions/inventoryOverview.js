// 引入request
import {RequestService} from './request.js'

/*获取初始页面数据*/
export const getProductRepertoryData = function (result) {
    wx.request({
        url: RequestService.ServiceURL + '/mtp-wx/getStoreProductRepertoryDataByUser',
        data: {"business_id":2},
        method:'POST',
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            typeof result == "function" && result(res)
        }
    })
};





