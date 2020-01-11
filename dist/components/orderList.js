'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _orderItemView = require('./orderItemView.js');

var _orderItemView2 = _interopRequireDefault(_orderItemView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderList = function (_wepy$page) {
  _inherits(OrderList, _wepy$page);

  function OrderList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '订单列表'
    }, _this.components = {
      orderItemView: _orderItemView2.default
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      toDetail: function toDetail() {
        this.$parent.$navigate({ url: "/pages/other/order/orderDetail" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderList, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return OrderList;
}(_wepy2.default.page);

exports.default = OrderList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyTGlzdC5qcyJdLCJuYW1lcyI6WyJPcmRlckxpc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm9yZGVySXRlbVZpZXciLCJPcmRlckl0ZW1WaWV3IiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRvRGV0YWlsIiwiJHBhcmVudCIsIiRuYXZpZ2F0ZSIsInVybCIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxxQkFBZUM7QUFESixLLFFBR2JDLEksR0FBTyxFLFFBRVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxnQkFBVSxvQkFBVztBQUNuQixhQUFLQyxPQUFMLENBQWFDLFNBQWIsQ0FBdUIsRUFBQ0MsS0FBSSxnQ0FBTCxFQUF2QjtBQUNEO0FBSE8sSyxRQUtWQyxNLEdBQVMsRTs7Ozs7NkJBRUEsQ0FDUjs7OztFQW5Cb0NDLGVBQUtDLEk7O2tCQUF2QmYsUyIsImZpbGUiOiJvcmRlckxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IE9yZGVySXRlbVZpZXcgZnJvbSBcIi4vb3JkZXJJdGVtVmlld1wiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuouWNleWIl+ihqCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIG9yZGVySXRlbVZpZXc6IE9yZGVySXRlbVZpZXdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b0RldGFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJHBhcmVudC4kbmF2aWdhdGUoe3VybDpcIi9wYWdlcy9vdGhlci9vcmRlci9vcmRlckRldGFpbFwifSlcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=