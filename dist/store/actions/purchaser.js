'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetStoreListData = exports.GetSwiperData = undefined;

var _request = require('./request.js');

// 获取轮播图数据
var GetSwiperData = exports.GetSwiperData = function GetSwiperData(myData) {
  wx.request({
    url: _request.RequestService.ServiceURL + '/mtp-wx/getHomeBannerData', //仅为示例，并非真实的接口地址
    data: {},
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function success(res) {
      typeof myData == "function" && myData(res);
    }
  });
};

// 获取店铺列表数据
// 引入request
var GetStoreListData = exports.GetStoreListData = function GetStoreListData(myData) {
  wx.request({
    url: _request.RequestService.ServiceURL + '/mtp-wx/getStoreListData', //仅为示例，并非真实的接口地址
    data: {},
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function success(res) {
      typeof myData == "function" && myData(res);
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlci5qcyJdLCJuYW1lcyI6WyJHZXRTd2lwZXJEYXRhIiwibXlEYXRhIiwid3giLCJyZXF1ZXN0IiwidXJsIiwiUmVxdWVzdFNlcnZpY2UiLCJTZXJ2aWNlVVJMIiwiZGF0YSIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJHZXRTdG9yZUxpc3REYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBRUE7QUFDTyxJQUFNQSx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQVVDLE1BQVYsRUFBa0I7QUFDN0NDLEtBQUdDLE9BQUgsQ0FBVztBQUNUQyxTQUFLQyx3QkFBZUMsVUFBZixHQUEwQiwyQkFEdEIsRUFDbUQ7QUFDNURDLFVBQU0sRUFGRztBQUlUQyxZQUFRO0FBQ04sc0JBQWdCLGtCQURWLENBQzZCO0FBRDdCLEtBSkM7QUFPVEMsYUFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGFBQU9ULE1BQVAsSUFBaUIsVUFBakIsSUFBK0JBLE9BQU9TLEdBQVAsQ0FBL0I7QUFDRDtBQVRRLEdBQVg7QUFXRCxDQVpNOztBQWNQO0FBbEJBO0FBbUJPLElBQU1DLDhDQUFtQixTQUFuQkEsZ0JBQW1CLENBQVVWLE1BQVYsRUFBa0I7QUFDaERDLEtBQUdDLE9BQUgsQ0FBVztBQUNUQyxTQUFLQyx3QkFBZUMsVUFBZixHQUEwQiwwQkFEdEIsRUFDa0Q7QUFDM0RDLFVBQU0sRUFGRztBQUlUQyxZQUFRO0FBQ04sc0JBQWdCLGtCQURWLENBQzZCO0FBRDdCLEtBSkM7QUFPVEMsYUFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGFBQU9ULE1BQVAsSUFBaUIsVUFBakIsSUFBK0JBLE9BQU9TLEdBQVAsQ0FBL0I7QUFDRDtBQVRRLEdBQVg7QUFXRCxDQVpNIiwiZmlsZSI6InB1cmNoYXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOW8leWFpXJlcXVlc3RcbmltcG9ydCB7IFJlcXVlc3RTZXJ2aWNlIH0gZnJvbSAnLi9yZXF1ZXN0LmpzJ1xuXG4vLyDojrflj5bova7mkq3lm77mlbDmja5cbmV4cG9ydCBjb25zdCBHZXRTd2lwZXJEYXRhID0gZnVuY3Rpb24gKG15RGF0YSkge1xuICB3eC5yZXF1ZXN0KHtcbiAgICB1cmw6IFJlcXVlc3RTZXJ2aWNlLlNlcnZpY2VVUkwrJy9tdHAtd3gvZ2V0SG9tZUJhbm5lckRhdGEnLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunueahOaOpeWPo+WcsOWdgFxuICAgIGRhdGE6IHtcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgdHlwZW9mIG15RGF0YSA9PSBcImZ1bmN0aW9uXCIgJiYgbXlEYXRhKHJlcylcbiAgICB9XG4gIH0pXG59XG5cbi8vIOiOt+WPluW6l+mTuuWIl+ihqOaVsOaNrlxuZXhwb3J0IGNvbnN0IEdldFN0b3JlTGlzdERhdGEgPSBmdW5jdGlvbiAobXlEYXRhKSB7XG4gIHd4LnJlcXVlc3Qoe1xuICAgIHVybDogUmVxdWVzdFNlcnZpY2UuU2VydmljZVVSTCsnL210cC13eC9nZXRTdG9yZUxpc3REYXRhJywgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcbiAgICBkYXRhOiB7XG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgIHR5cGVvZiBteURhdGEgPT0gXCJmdW5jdGlvblwiICYmIG15RGF0YShyZXMpXG4gICAgfVxuICB9KVxufVxuXG5cblxuXG5cblxuIl19