// 引入 wepy
import wepy from 'wepy'
/** wx.request服务封装 */
export class RequestService {
  /**
   * create by wq
   * info 请求完成后返回信息
   * callBack 回调函数
   * errTip 自定义错误信息
   */

  static ServiceURL ='http://172.16.16.47:8019';

  static httpHandlerError(info, callBack, errTip) {
    wepy.hideLoading()
    /** 请求成功，退出该函数 可以根据项目需求来判断是否请求成功。这里判断的是status为200的时候是成功*/
    if (info.statusCode === 200) {
      return false
    } else {
      /** 401 没有权限时，重新登录 */
      if (info.data.status === 401) {
        wepy.redirectTo({
          url: 'index'
        })
      }
      /** 判断是否有自定义错误信息，如果有，优先使用自定义错误信息，其次曝出后台返回错误信息 */
      let errorInfo = ''
      if (errTip) {
        errorInfo = errTip
      } else {
        if (info.data.errMsg) {
          errorInfo = info.data.errMsg
        } else {
          errorInfo = '也许服务器忙!'
        }
      }
      wepy.showToast({
        title: errorInfo,
        icon: 'loading',
        duration: 3000
      })
      /** 发生错误信息时，如果有回调函数，则执行回调 */
      if (callBack) {
        callBack()
      }
      return true
    }
  }
  /**
   * create by wq
   *请求封装
   * 主要是使用return this 可以进行链式调用，也可以自己传值来进行更改
   *method 请求方式
   *data 发送请求数据
   *url 请求路径
   *fail 请求失败，执行该函数
   *success 请求成功，执行该函数
   * send 发送请求
   * header设置请求头
   */
  static sendRequest() {
    const that = this
    return {
      _sucCallback: null,
      _failCallback: null,
      _method: 'GET',
      _data: {},
      _header: {'content-type': 'application/json'},
      _url: '',
      send: function() {
        wepy.request({
          header: this._header,
          data: this._data,
          url: this._url,
          method: this._method,
          success: (res) => {
            let error = that.httpHandlerError(res, this._failCallback)
            if (error) return
            this._sucCallback(res)
          },
          fail: (res) => {
            this._failCallback()
          }
        })
        return this
      },
      success: function(callback) {
        this._sucCallback = callback
        return this
      },
      fail: function(callback) {
        this._failCallback = callback
        return this
      },
      url: function(url) {
        this._url = url
        return this
      },
      data: function(data) {
        this._data = data
        return this
      },
      header: function(header) {
        this._header = header
        return this
      },
      method: function(method) {
        this._method = method
        return this
      }
    }
  }
}
