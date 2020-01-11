'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // 引入 wepy


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** wx.request服务封装 */
var RequestService = exports.RequestService = function () {
  function RequestService() {
    _classCallCheck(this, RequestService);
  }

  _createClass(RequestService, null, [{
    key: 'httpHandlerError',
    value: function httpHandlerError(info, callBack, errTip) {
      _wepy2.default.hideLoading();
      /** 请求成功，退出该函数 可以根据项目需求来判断是否请求成功。这里判断的是status为200的时候是成功*/
      if (info.statusCode === 200) {
        return false;
      } else {
        /** 401 没有权限时，重新登录 */
        if (info.data.status === 401) {
          _wepy2.default.redirectTo({
            url: 'index'
          });
        }
        /** 判断是否有自定义错误信息，如果有，优先使用自定义错误信息，其次曝出后台返回错误信息 */
        var errorInfo = '';
        if (errTip) {
          errorInfo = errTip;
        } else {
          if (info.data.errMsg) {
            errorInfo = info.data.errMsg;
          } else {
            errorInfo = '也许服务器忙!';
          }
        }
        _wepy2.default.showToast({
          title: errorInfo,
          icon: 'loading',
          duration: 3000
        });
        /** 发生错误信息时，如果有回调函数，则执行回调 */
        if (callBack) {
          callBack();
        }
        return true;
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

    /**
     * create by wq
     * info 请求完成后返回信息
     * callBack 回调函数
     * errTip 自定义错误信息
     */

  }, {
    key: 'sendRequest',
    value: function sendRequest() {
      var that = this;
      return {
        _sucCallback: null,
        _failCallback: null,
        _method: 'GET',
        _data: {},
        _header: { 'content-type': 'application/json' },
        _url: '',
        send: function send() {
          var _this = this;

          _wepy2.default.request({
            header: this._header,
            data: this._data,
            url: this._url,
            method: this._method,
            success: function success(res) {
              var error = that.httpHandlerError(res, _this._failCallback);
              if (error) return;
              _this._sucCallback(res);
            },
            fail: function fail(res) {
              _this._failCallback();
            }
          });
          return this;
        },
        success: function success(callback) {
          this._sucCallback = callback;
          return this;
        },
        fail: function fail(callback) {
          this._failCallback = callback;
          return this;
        },
        url: function url(_url) {
          this._url = _url;
          return this;
        },
        data: function data(_data) {
          this._data = _data;
          return this;
        },
        header: function header(_header) {
          this._header = _header;
          return this;
        },
        method: function method(_method) {
          this._method = _method;
          return this;
        }
      };
    }
  }]);

  return RequestService;
}();

RequestService.ServiceURL = 'http://172.16.16.47:8019';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsiUmVxdWVzdFNlcnZpY2UiLCJpbmZvIiwiY2FsbEJhY2siLCJlcnJUaXAiLCJ3ZXB5IiwiaGlkZUxvYWRpbmciLCJzdGF0dXNDb2RlIiwiZGF0YSIsInN0YXR1cyIsInJlZGlyZWN0VG8iLCJ1cmwiLCJlcnJvckluZm8iLCJlcnJNc2ciLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInRoYXQiLCJfc3VjQ2FsbGJhY2siLCJfZmFpbENhbGxiYWNrIiwiX21ldGhvZCIsIl9kYXRhIiwiX2hlYWRlciIsIl91cmwiLCJzZW5kIiwicmVxdWVzdCIsImhlYWRlciIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJlcnJvciIsImh0dHBIYW5kbGVyRXJyb3IiLCJmYWlsIiwiY2FsbGJhY2siLCJTZXJ2aWNlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3FqQkFBQTs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7SUFDYUEsYyxXQUFBQSxjOzs7Ozs7O3FDQVVhQyxJLEVBQU1DLFEsRUFBVUMsTSxFQUFRO0FBQzlDQyxxQkFBS0MsV0FBTDtBQUNBO0FBQ0EsVUFBSUosS0FBS0ssVUFBTCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQixlQUFPLEtBQVA7QUFDRCxPQUZELE1BRU87QUFDTDtBQUNBLFlBQUlMLEtBQUtNLElBQUwsQ0FBVUMsTUFBVixLQUFxQixHQUF6QixFQUE4QjtBQUM1QkoseUJBQUtLLFVBQUwsQ0FBZ0I7QUFDZEMsaUJBQUs7QUFEUyxXQUFoQjtBQUdEO0FBQ0Q7QUFDQSxZQUFJQyxZQUFZLEVBQWhCO0FBQ0EsWUFBSVIsTUFBSixFQUFZO0FBQ1ZRLHNCQUFZUixNQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSUYsS0FBS00sSUFBTCxDQUFVSyxNQUFkLEVBQXNCO0FBQ3BCRCx3QkFBWVYsS0FBS00sSUFBTCxDQUFVSyxNQUF0QjtBQUNELFdBRkQsTUFFTztBQUNMRCx3QkFBWSxTQUFaO0FBQ0Q7QUFDRjtBQUNEUCx1QkFBS1MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPSCxTQURNO0FBRWJJLGdCQUFNLFNBRk87QUFHYkMsb0JBQVU7QUFIRyxTQUFmO0FBS0E7QUFDQSxZQUFJZCxRQUFKLEVBQWM7QUFDWkE7QUFDRDtBQUNELGVBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRDs7Ozs7Ozs7Ozs7OztBQTVDQTs7Ozs7Ozs7O2tDQXdEcUI7QUFDbkIsVUFBTWUsT0FBTyxJQUFiO0FBQ0EsYUFBTztBQUNMQyxzQkFBYyxJQURUO0FBRUxDLHVCQUFlLElBRlY7QUFHTEMsaUJBQVMsS0FISjtBQUlMQyxlQUFPLEVBSkY7QUFLTEMsaUJBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBTEo7QUFNTEMsY0FBTSxFQU5EO0FBT0xDLGNBQU0sZ0JBQVc7QUFBQTs7QUFDZnBCLHlCQUFLcUIsT0FBTCxDQUFhO0FBQ1hDLG9CQUFRLEtBQUtKLE9BREY7QUFFWGYsa0JBQU0sS0FBS2MsS0FGQTtBQUdYWCxpQkFBSyxLQUFLYSxJQUhDO0FBSVhJLG9CQUFRLEtBQUtQLE9BSkY7QUFLWFEscUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQixrQkFBSUMsUUFBUWIsS0FBS2MsZ0JBQUwsQ0FBc0JGLEdBQXRCLEVBQTJCLE1BQUtWLGFBQWhDLENBQVo7QUFDQSxrQkFBSVcsS0FBSixFQUFXO0FBQ1gsb0JBQUtaLFlBQUwsQ0FBa0JXLEdBQWxCO0FBQ0QsYUFUVTtBQVVYRyxrQkFBTSxjQUFDSCxHQUFELEVBQVM7QUFDYixvQkFBS1YsYUFBTDtBQUNEO0FBWlUsV0FBYjtBQWNBLGlCQUFPLElBQVA7QUFDRCxTQXZCSTtBQXdCTFMsaUJBQVMsaUJBQVNLLFFBQVQsRUFBbUI7QUFDMUIsZUFBS2YsWUFBTCxHQUFvQmUsUUFBcEI7QUFDQSxpQkFBTyxJQUFQO0FBQ0QsU0EzQkk7QUE0QkxELGNBQU0sY0FBU0MsUUFBVCxFQUFtQjtBQUN2QixlQUFLZCxhQUFMLEdBQXFCYyxRQUFyQjtBQUNBLGlCQUFPLElBQVA7QUFDRCxTQS9CSTtBQWdDTHZCLGFBQUssYUFBU0EsSUFBVCxFQUFjO0FBQ2pCLGVBQUthLElBQUwsR0FBWWIsSUFBWjtBQUNBLGlCQUFPLElBQVA7QUFDRCxTQW5DSTtBQW9DTEgsY0FBTSxjQUFTQSxLQUFULEVBQWU7QUFDbkIsZUFBS2MsS0FBTCxHQUFhZCxLQUFiO0FBQ0EsaUJBQU8sSUFBUDtBQUNELFNBdkNJO0FBd0NMbUIsZ0JBQVEsZ0JBQVNBLE9BQVQsRUFBaUI7QUFDdkIsZUFBS0osT0FBTCxHQUFlSSxPQUFmO0FBQ0EsaUJBQU8sSUFBUDtBQUNELFNBM0NJO0FBNENMQyxnQkFBUSxnQkFBU0EsT0FBVCxFQUFpQjtBQUN2QixlQUFLUCxPQUFMLEdBQWVPLE9BQWY7QUFDQSxpQkFBTyxJQUFQO0FBQ0Q7QUEvQ0ksT0FBUDtBQWlERDs7Ozs7O0FBNUdVM0IsYyxDQVFKa0MsVSxHQUFZLDBCIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlvJXlhaUgd2VweVxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbi8qKiB3eC5yZXF1ZXN05pyN5Yqh5bCB6KOFICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdFNlcnZpY2Uge1xuICAvKipcbiAgICogY3JlYXRlIGJ5IHdxXG4gICAqIGluZm8g6K+35rGC5a6M5oiQ5ZCO6L+U5Zue5L+h5oGvXG4gICAqIGNhbGxCYWNrIOWbnuiwg+WHveaVsFxuICAgKiBlcnJUaXAg6Ieq5a6a5LmJ6ZSZ6K+v5L+h5oGvXG4gICAqL1xuXG4gIHN0YXRpYyBTZXJ2aWNlVVJMID0naHR0cDovLzE3Mi4xNi4xNi40Nzo4MDE5JztcblxuICBzdGF0aWMgaHR0cEhhbmRsZXJFcnJvcihpbmZvLCBjYWxsQmFjaywgZXJyVGlwKSB7XG4gICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgLyoqIOivt+axguaIkOWKn++8jOmAgOWHuuivpeWHveaVsCDlj6/ku6XmoLnmja7pobnnm67pnIDmsYLmnaXliKTmlq3mmK/lkKbor7fmsYLmiJDlip/jgILov5nph4zliKTmlq3nmoTmmK9zdGF0dXPkuLoyMDDnmoTml7blgJnmmK/miJDlip8qL1xuICAgIGlmIChpbmZvLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiA0MDEg5rKh5pyJ5p2D6ZmQ5pe277yM6YeN5paw55m75b2VICovXG4gICAgICBpZiAoaW5mby5kYXRhLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XG4gICAgICAgICAgdXJsOiAnaW5kZXgnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvKiog5Yik5pat5piv5ZCm5pyJ6Ieq5a6a5LmJ6ZSZ6K+v5L+h5oGv77yM5aaC5p6c5pyJ77yM5LyY5YWI5L2/55So6Ieq5a6a5LmJ6ZSZ6K+v5L+h5oGv77yM5YW25qyh5pud5Ye65ZCO5Y+w6L+U5Zue6ZSZ6K+v5L+h5oGvICovXG4gICAgICBsZXQgZXJyb3JJbmZvID0gJydcbiAgICAgIGlmIChlcnJUaXApIHtcbiAgICAgICAgZXJyb3JJbmZvID0gZXJyVGlwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5kYXRhLmVyck1zZykge1xuICAgICAgICAgIGVycm9ySW5mbyA9IGluZm8uZGF0YS5lcnJNc2dcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlcnJvckluZm8gPSAn5Lmf6K645pyN5Yqh5Zmo5b+ZISdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogZXJyb3JJbmZvLFxuICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICB9KVxuICAgICAgLyoqIOWPkeeUn+mUmeivr+S/oeaBr+aXtu+8jOWmguaenOacieWbnuiwg+WHveaVsO+8jOWImeaJp+ihjOWbnuiwgyAqL1xuICAgICAgaWYgKGNhbGxCYWNrKSB7XG4gICAgICAgIGNhbGxCYWNrKClcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBjcmVhdGUgYnkgd3FcbiAgICror7fmsYLlsIHoo4VcbiAgICog5Li76KaB5piv5L2/55SocmV0dXJuIHRoaXMg5Y+v5Lul6L+b6KGM6ZO+5byP6LCD55So77yM5Lmf5Y+v5Lul6Ieq5bex5Lyg5YC85p2l6L+b6KGM5pu05pS5XG4gICAqbWV0aG9kIOivt+axguaWueW8j1xuICAgKmRhdGEg5Y+R6YCB6K+35rGC5pWw5o2uXG4gICAqdXJsIOivt+axgui3r+W+hFxuICAgKmZhaWwg6K+35rGC5aSx6LSl77yM5omn6KGM6K+l5Ye95pWwXG4gICAqc3VjY2VzcyDor7fmsYLmiJDlip/vvIzmiafooYzor6Xlh73mlbBcbiAgICogc2VuZCDlj5HpgIHor7fmsYJcbiAgICogaGVhZGVy6K6+572u6K+35rGC5aS0XG4gICAqL1xuICBzdGF0aWMgc2VuZFJlcXVlc3QoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICByZXR1cm4ge1xuICAgICAgX3N1Y0NhbGxiYWNrOiBudWxsLFxuICAgICAgX2ZhaWxDYWxsYmFjazogbnVsbCxcbiAgICAgIF9tZXRob2Q6ICdHRVQnLFxuICAgICAgX2RhdGE6IHt9LFxuICAgICAgX2hlYWRlcjogeydjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgX3VybDogJycsXG4gICAgICBzZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICBoZWFkZXI6IHRoaXMuX2hlYWRlcixcbiAgICAgICAgICBkYXRhOiB0aGlzLl9kYXRhLFxuICAgICAgICAgIHVybDogdGhpcy5fdXJsLFxuICAgICAgICAgIG1ldGhvZDogdGhpcy5fbWV0aG9kLFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IHRoYXQuaHR0cEhhbmRsZXJFcnJvcihyZXMsIHRoaXMuX2ZhaWxDYWxsYmFjaylcbiAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuXG4gICAgICAgICAgICB0aGlzLl9zdWNDYWxsYmFjayhyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9mYWlsQ2FsbGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9zdWNDYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmFpbENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH0sXG4gICAgICB1cmw6IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB0aGlzLl91cmwgPSB1cmxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH0sXG4gICAgICBkYXRhOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9LFxuICAgICAgaGVhZGVyOiBmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5faGVhZGVyID0gaGVhZGVyXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiBmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gbWV0aG9kXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=