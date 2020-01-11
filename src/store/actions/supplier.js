// 引入request
import { RequestService } from './request.js'

// 获取轮播图数据
export const GetSwiperData = function () {
  RequestService.sendRequest().url(RequestService.ServiceURL+'/mtp-wx/getHomeBannerData').header({
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }).method('GET').data({
  }).success(res => {
    console.log(res)
  }).send()
}





