'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      // 默认页面
      pages: ['pages/default/tab0', 'pages/default/tab1', 'pages/default/tab2', 'pages/default/tab3', 'pages/default/tab4'],
      subPackages: [{
        // 其他
        root: 'pages/other',
        pages: ['order/orderDetail', 'order/orderRealLocation', 'order/createOrder', 'smart/smartGenerateRawMaterials', 'smart/smartCreate', 'smart/smartDetailAll', 'smart/smartDetail', 'address/addressCenter', 'address/addressEditor', 'payDataCenter', 'helpCenter', 'mineSupplier', 'messageList', 'goodsDetail', 'order/tracingSource', 'needPay']
      }, {
        // 供应商
        root: 'pages/supplier',
        pages: ['searchFollow', 'supplierDetail', 'toFollow', 'qualificationEnquiry', 'incomingInquiry', 'incomingGoodsDetail', 'testReport', 'supplierCenter', 'supplierEdit', 'salesStatistics', 'inventoryOverview', 'dataAnalysis', 'priceMaintain', 'goodsEdit', 'quotation']
      }, {
        // 采购商
        root: 'pages/purchaser',
        pages: ['chooseGoodsFromSupplier']
      }],
      tabBar: {
        color: '#5E635A',
        selectedColor: '#000000',
        backgroundColor: '#FFFFFF',
        list: [{
          'pagePath': 'pages/default/tab0',
          'text': '首页',
          'iconPath': 'images/icon_home_tabbar_Unchecked.png',
          'selectedIconPath': 'images/icon_home_tabbar_Selected.png'
        }, {
          'pagePath': 'pages/default/tab1',
          'text': '智慧订货',
          'iconPath': 'images/icon_ai_tabbar_Unchecked.png',
          'selectedIconPath': 'images/icon_ai_tabbar_selected.png'
        }, {
          'pagePath': 'pages/default/tab2',
          'text': '订单',
          'iconPath': 'images/icon_dd_tabbar_selected.png',
          'selectedIconPath': 'images/icon_dd_tabbar_unchecked.png'
        }, {
          'pagePath': 'pages/default/tab3',
          'text': '购物车',
          'iconPath': 'images/icon_gwc_tabbar_unchecked.png',
          'selectedIconPath': 'images/icon_gwc_tabbar_selected.png'
        }, {
          'pagePath': 'pages/default/tab4',
          'text': '我的',
          'iconPath': 'images/icon_me_tabbar_unchecked.png',
          'selectedIconPath': 'images/icon_me_tabbar_selected.png'
        }]
      },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '智慧安鲜',
        navigationBarTextStyle: 'black'
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwic3ViUGFja2FnZXMiLCJyb290IiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7Ozs7O0FBaUhFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUE5R2ZDLE1BOEdlLEdBOUdOO0FBQ1A7QUFDQUMsYUFBTyxDQUNMLG9CQURLLEVBRUwsb0JBRkssRUFHTCxvQkFISyxFQUlMLG9CQUpLLEVBS0wsb0JBTEssQ0FGQTtBQVNQQyxtQkFBYSxDQUNYO0FBQ0U7QUFDQUMsY0FBTSxhQUZSO0FBR0VGLGVBQU8sQ0FDTCxtQkFESyxFQUVMLHlCQUZLLEVBR0wsbUJBSEssRUFJTCxpQ0FKSyxFQUtMLG1CQUxLLEVBTUwsc0JBTkssRUFPTCxtQkFQSyxFQVFMLHVCQVJLLEVBU0wsdUJBVEssRUFVTCxlQVZLLEVBV0wsWUFYSyxFQVlMLGNBWkssRUFhTCxhQWJLLEVBY0wsYUFkSyxFQWVMLHFCQWZLLEVBZ0JMLFNBaEJLO0FBSFQsT0FEVyxFQXVCWDtBQUNFO0FBQ0FFLGNBQU0sZ0JBRlI7QUFHRUYsZUFBTyxDQUNMLGNBREssRUFFTCxnQkFGSyxFQUdMLFVBSEssRUFJTCxzQkFKSyxFQUtMLGlCQUxLLEVBTUwscUJBTkssRUFPTCxZQVBLLEVBUUwsZ0JBUkssRUFTTCxjQVRLLEVBVUwsaUJBVkssRUFXTCxtQkFYSyxFQVlMLGNBWkssRUFhTCxlQWJLLEVBY0wsV0FkSyxFQWVMLFdBZks7QUFIVCxPQXZCVyxFQTRDWDtBQUNFO0FBQ0FFLGNBQU0saUJBRlI7QUFHRUYsZUFBTyxDQUNMLHlCQURLO0FBSFQsT0E1Q1csQ0FUTjtBQTZEUEcsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyx5QkFBaUIsU0FIWDtBQUlOQyxjQUFNLENBQ0o7QUFDRSxzQkFBWSxvQkFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSxzQkFBWSx1Q0FIZDtBQUlFLDhCQUFvQjtBQUp0QixTQURJLEVBT0o7QUFDRSxzQkFBWSxvQkFEZDtBQUVFLGtCQUFRLE1BRlY7QUFHRSxzQkFBWSxxQ0FIZDtBQUlFLDhCQUFvQjtBQUp0QixTQVBJLEVBYUo7QUFDRSxzQkFBWSxvQkFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSxzQkFBWSxvQ0FIZDtBQUlFLDhCQUFvQjtBQUp0QixTQWJJLEVBbUJKO0FBQ0Usc0JBQVksb0JBRGQ7QUFFRSxrQkFBUSxLQUZWO0FBR0Usc0JBQVksc0NBSGQ7QUFJRSw4QkFBb0I7QUFKdEIsU0FuQkksRUF5Qko7QUFDRSxzQkFBWSxvQkFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSxzQkFBWSxxQ0FIZDtBQUlFLDhCQUFvQjtBQUp0QixTQXpCSTtBQUpBLE9BN0REO0FBa0dQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsTUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCO0FBbEdELEtBOEdNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSGE7QUFJZDs7OzsrQkFFVSxDQUNWOzs7O0VBdEgwQkMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5pbXBvcnQgeyBzZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpXG5zZXRTdG9yZShzdG9yZSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICAvLyDpu5jorqTpobXpnaJcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL2RlZmF1bHQvdGFiMCcsXG4gICAgICAncGFnZXMvZGVmYXVsdC90YWIxJyxcbiAgICAgICdwYWdlcy9kZWZhdWx0L3RhYjInLFxuICAgICAgJ3BhZ2VzL2RlZmF1bHQvdGFiMycsXG4gICAgICAncGFnZXMvZGVmYXVsdC90YWI0J1xuICAgIF0sXG4gICAgc3ViUGFja2FnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgLy8g5YW25LuWXG4gICAgICAgIHJvb3Q6ICdwYWdlcy9vdGhlcicsXG4gICAgICAgIHBhZ2VzOiBbXG4gICAgICAgICAgJ29yZGVyL29yZGVyRGV0YWlsJyxcbiAgICAgICAgICAnb3JkZXIvb3JkZXJSZWFsTG9jYXRpb24nLFxuICAgICAgICAgICdvcmRlci9jcmVhdGVPcmRlcicsXG4gICAgICAgICAgJ3NtYXJ0L3NtYXJ0R2VuZXJhdGVSYXdNYXRlcmlhbHMnLFxuICAgICAgICAgICdzbWFydC9zbWFydENyZWF0ZScsXG4gICAgICAgICAgJ3NtYXJ0L3NtYXJ0RGV0YWlsQWxsJyxcbiAgICAgICAgICAnc21hcnQvc21hcnREZXRhaWwnLFxuICAgICAgICAgICdhZGRyZXNzL2FkZHJlc3NDZW50ZXInLFxuICAgICAgICAgICdhZGRyZXNzL2FkZHJlc3NFZGl0b3InLFxuICAgICAgICAgICdwYXlEYXRhQ2VudGVyJyxcbiAgICAgICAgICAnaGVscENlbnRlcicsXG4gICAgICAgICAgJ21pbmVTdXBwbGllcicsXG4gICAgICAgICAgJ21lc3NhZ2VMaXN0JyxcbiAgICAgICAgICAnZ29vZHNEZXRhaWwnLFxuICAgICAgICAgICdvcmRlci90cmFjaW5nU291cmNlJyxcbiAgICAgICAgICAnbmVlZFBheSdcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIOS+m+W6lOWVhlxuICAgICAgICByb290OiAncGFnZXMvc3VwcGxpZXInLFxuICAgICAgICBwYWdlczogW1xuICAgICAgICAgICdzZWFyY2hGb2xsb3cnLFxuICAgICAgICAgICdzdXBwbGllckRldGFpbCcsXG4gICAgICAgICAgJ3RvRm9sbG93JyxcbiAgICAgICAgICAncXVhbGlmaWNhdGlvbkVucXVpcnknLFxuICAgICAgICAgICdpbmNvbWluZ0lucXVpcnknLFxuICAgICAgICAgICdpbmNvbWluZ0dvb2RzRGV0YWlsJyxcbiAgICAgICAgICAndGVzdFJlcG9ydCcsXG4gICAgICAgICAgJ3N1cHBsaWVyQ2VudGVyJyxcbiAgICAgICAgICAnc3VwcGxpZXJFZGl0JyxcbiAgICAgICAgICAnc2FsZXNTdGF0aXN0aWNzJyxcbiAgICAgICAgICAnaW52ZW50b3J5T3ZlcnZpZXcnLFxuICAgICAgICAgICdkYXRhQW5hbHlzaXMnLFxuICAgICAgICAgICdwcmljZU1haW50YWluJyxcbiAgICAgICAgICAnZ29vZHNFZGl0JyxcbiAgICAgICAgICAncXVvdGF0aW9uJ1xuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8g6YeH6LSt5ZWGXG4gICAgICAgIHJvb3Q6ICdwYWdlcy9wdXJjaGFzZXInLFxuICAgICAgICBwYWdlczogW1xuICAgICAgICAgICdjaG9vc2VHb29kc0Zyb21TdXBwbGllcicsXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgXSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnIzVFNjM1QScsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9kZWZhdWx0L3RhYjAnLFxuICAgICAgICAgICd0ZXh0JzogJ+mmlumhtScsXG4gICAgICAgICAgJ2ljb25QYXRoJzogJ2ltYWdlcy9pY29uX2hvbWVfdGFiYmFyX1VuY2hlY2tlZC5wbmcnLFxuICAgICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJ2ltYWdlcy9pY29uX2hvbWVfdGFiYmFyX1NlbGVjdGVkLnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9kZWZhdWx0L3RhYjEnLFxuICAgICAgICAgICd0ZXh0JzogJ+aZuuaFp+iuoui0pycsXG4gICAgICAgICAgJ2ljb25QYXRoJzogJ2ltYWdlcy9pY29uX2FpX3RhYmJhcl9VbmNoZWNrZWQucG5nJyxcbiAgICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICdpbWFnZXMvaWNvbl9haV90YWJiYXJfc2VsZWN0ZWQucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2RlZmF1bHQvdGFiMicsXG4gICAgICAgICAgJ3RleHQnOiAn6K6i5Y2VJyxcbiAgICAgICAgICAnaWNvblBhdGgnOiAnaW1hZ2VzL2ljb25fZGRfdGFiYmFyX3NlbGVjdGVkLnBuZycsXG4gICAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnaW1hZ2VzL2ljb25fZGRfdGFiYmFyX3VuY2hlY2tlZC5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvZGVmYXVsdC90YWIzJyxcbiAgICAgICAgICAndGV4dCc6ICfotK3nianovaYnLFxuICAgICAgICAgICdpY29uUGF0aCc6ICdpbWFnZXMvaWNvbl9nd2NfdGFiYmFyX3VuY2hlY2tlZC5wbmcnLFxuICAgICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJ2ltYWdlcy9pY29uX2d3Y190YWJiYXJfc2VsZWN0ZWQucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2RlZmF1bHQvdGFiNCcsXG4gICAgICAgICAgJ3RleHQnOiAn5oiR55qEJyxcbiAgICAgICAgICAnaWNvblBhdGgnOiAnaW1hZ2VzL2ljb25fbWVfdGFiYmFyX3VuY2hlY2tlZC5wbmcnLFxuICAgICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJ2ltYWdlcy9pY29uX21lX3RhYmJhcl9zZWxlY3RlZC5wbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmmbrmhaflronpspwnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgfVxufVxuIl19