'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PurchaserMine = function (_wepy$page) {
  _inherits(PurchaserMine, _wepy$page);

  function PurchaserMine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PurchaserMine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PurchaserMine.__proto__ || Object.getPrototypeOf(PurchaserMine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {
      toHelpCenter: function toHelpCenter() {
        this.$parent.$navigate({ url: "/pages/other/helpCenter" });
      },
      toMineSupplier: function toMineSupplier() {
        this.$parent.$navigate({ url: "/pages/other/mineSupplier" });
      },
      toMessageList: function toMessageList() {
        this.$parent.$navigate({ url: "/pages/other/messageList" });
      },
      toPayDataCenter: function toPayDataCenter() {
        this.$parent.$navigate({ url: "/pages/other/payDataCenter" });
      },
      toAddressCenter: function toAddressCenter() {
        this.$parent.$navigate({ url: "/pages/other/address/addressCenter" });
      },
      toOrderList: function toOrderList(state) {
        this.$parent.$navigate({ url: "/pages/other/order/orderRealLocation" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PurchaserMine, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return PurchaserMine;
}(_wepy2.default.page);

exports.default = PurchaserMine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlck1pbmUuanMiXSwibmFtZXMiOlsiUHVyY2hhc2VyTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRvSGVscENlbnRlciIsIiRwYXJlbnQiLCIkbmF2aWdhdGUiLCJ1cmwiLCJ0b01pbmVTdXBwbGllciIsInRvTWVzc2FnZUxpc3QiLCJ0b1BheURhdGFDZW50ZXIiLCJ0b0FkZHJlc3NDZW50ZXIiLCJ0b09yZGVyTGlzdCIsInN0YXRlIiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTyxFLFFBRVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxvQkFBYyx3QkFBVztBQUN2QixhQUFLQyxPQUFMLENBQWFDLFNBQWIsQ0FBdUIsRUFBQ0MsS0FBSSx5QkFBTCxFQUF2QjtBQUNELE9BSE87QUFJUkMsc0JBQWdCLDBCQUFXO0FBQ3pCLGFBQUtILE9BQUwsQ0FBYUMsU0FBYixDQUF1QixFQUFDQyxLQUFJLDJCQUFMLEVBQXZCO0FBQ0QsT0FOTztBQU9SRSxxQkFBZSx5QkFBVztBQUN4QixhQUFLSixPQUFMLENBQWFDLFNBQWIsQ0FBdUIsRUFBQ0MsS0FBSSwwQkFBTCxFQUF2QjtBQUNELE9BVE87QUFVUkcsdUJBQWlCLDJCQUFXO0FBQzFCLGFBQUtMLE9BQUwsQ0FBYUMsU0FBYixDQUF1QixFQUFDQyxLQUFJLDRCQUFMLEVBQXZCO0FBQ0QsT0FaTztBQWFSSSx1QkFBaUIsMkJBQVc7QUFDMUIsYUFBS04sT0FBTCxDQUFhQyxTQUFiLENBQXVCLEVBQUNDLEtBQUksb0NBQUwsRUFBdkI7QUFDRCxPQWZPO0FBZ0JSSyxtQkFBYSxxQkFBU0MsS0FBVCxFQUFnQjtBQUMzQixhQUFLUixPQUFMLENBQWFDLFNBQWIsQ0FBdUIsRUFBQ0MsS0FBSSxzQ0FBTCxFQUF2QjtBQUNEO0FBbEJPLEssUUFvQlZPLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUNSOzs7O0VBakN3Q0MsZUFBS0MsSTs7a0JBQTNCbkIsYSIsImZpbGUiOiJwdXJjaGFzZXJNaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVyY2hhc2VyTWluZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b0hlbHBDZW50ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvb3RoZXIvaGVscENlbnRlclwifSlcbiAgICAgIH0sXG4gICAgICB0b01pbmVTdXBwbGllcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJHBhcmVudC4kbmF2aWdhdGUoe3VybDpcIi9wYWdlcy9vdGhlci9taW5lU3VwcGxpZXJcIn0pXG4gICAgICB9LFxuICAgICAgdG9NZXNzYWdlTGlzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJHBhcmVudC4kbmF2aWdhdGUoe3VybDpcIi9wYWdlcy9vdGhlci9tZXNzYWdlTGlzdFwifSlcbiAgICAgIH0sXG4gICAgICB0b1BheURhdGFDZW50ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvb3RoZXIvcGF5RGF0YUNlbnRlclwifSlcbiAgICAgIH0sXG4gICAgICB0b0FkZHJlc3NDZW50ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvb3RoZXIvYWRkcmVzcy9hZGRyZXNzQ2VudGVyXCJ9KVxuICAgICAgfSxcbiAgICAgIHRvT3JkZXJMaXN0OiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICB0aGlzLiRwYXJlbnQuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvb3RoZXIvb3JkZXIvb3JkZXJSZWFsTG9jYXRpb25cIn0pXG4gICAgICB9XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19