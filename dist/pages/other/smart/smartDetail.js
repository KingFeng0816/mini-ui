'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _orderItemView = require('./../../../components/orderItemView.js');

var _orderItemView2 = _interopRequireDefault(_orderItemView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SmartDetail = function (_wepy$page) {
  _inherits(SmartDetail, _wepy$page);

  function SmartDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SmartDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmartDetail.__proto__ || Object.getPrototypeOf(SmartDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '订单详情'
    }, _this.components = {
      orderItemView: _orderItemView2.default
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      toShowAll: function toShowAll() {
        this.$navigate({ url: "../smart/smartDetailAll" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SmartDetail, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SmartDetail;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(SmartDetail , 'pages/other/smart/smartDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0RGV0YWlsLmpzIl0sIm5hbWVzIjpbIlNtYXJ0RGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJvcmRlckl0ZW1WaWV3IiwiT3JkZXJJdGVtVmlldyIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b1Nob3dBbGwiLCIkbmF2aWdhdGUiLCJ1cmwiLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMscUJBQWVDO0FBREosSyxRQUdiQyxJLEdBQU8sRSxRQUVQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsaUJBQVcscUJBQVc7QUFDcEIsYUFBS0MsU0FBTCxDQUFlLEVBQUNDLEtBQUkseUJBQUwsRUFBZjtBQUNEO0FBSE8sSyxRQUtWQyxNLEdBQVMsRTs7Ozs7NkJBRUEsQ0FDUjs7OztFQW5Cc0NDLGVBQUtDLEk7O2tCQUF6QmQsVyIsImZpbGUiOiJzbWFydERldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgT3JkZXJJdGVtVmlldyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcmRlckl0ZW1WaWV3XCI7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hcnREZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLljZXor6bmg4UnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBvcmRlckl0ZW1WaWV3OiBPcmRlckl0ZW1WaWV3XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9TaG93QWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe3VybDpcIi4uL3NtYXJ0L3NtYXJ0RGV0YWlsQWxsXCJ9KVxuICAgICAgfVxuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==