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

var SmartOrder = function (_wepy$page) {
  _inherits(SmartOrder, _wepy$page);

  function SmartOrder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SmartOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmartOrder.__proto__ || Object.getPrototypeOf(SmartOrder)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '智慧订货'
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {
      toCreate: function toCreate() {
        this.$parent.$navigate({ url: "/pages/other/smart/smartCreate" });
      },
      toDetail: function toDetail() {
        this.$parent.$navigate({ url: "/pages/other/smart/smartDetail" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SmartOrder, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SmartOrder;
}(_wepy2.default.page);

exports.default = SmartOrder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0T3JkZXIuanMiXSwibmFtZXMiOlsiU21hcnRPcmRlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRvQ3JlYXRlIiwiJHBhcmVudCIsIiRuYXZpZ2F0ZSIsInVybCIsInRvRGV0YWlsIiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTyxFLFFBRVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxnQkFBVSxvQkFBVztBQUNuQixhQUFLQyxPQUFMLENBQWFDLFNBQWIsQ0FBdUIsRUFBQ0MsS0FBSSxnQ0FBTCxFQUF2QjtBQUNELE9BSE87QUFJUkMsZ0JBQVUsb0JBQVc7QUFDbkIsYUFBS0gsT0FBTCxDQUFhQyxTQUFiLENBQXVCLEVBQUNDLEtBQUksZ0NBQUwsRUFBdkI7QUFDRDtBQU5PLEssUUFRVkUsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQ1I7Ozs7RUFyQnFDQyxlQUFLQyxJOztrQkFBeEJkLFUiLCJmaWxlIjoic21hcnRPcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0T3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmmbrmhaforqLotKcnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9DcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvb3RoZXIvc21hcnQvc21hcnRDcmVhdGVcIn0pXG4gICAgICB9LFxuICAgICAgdG9EZXRhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvb3RoZXIvc21hcnQvc21hcnREZXRhaWxcIn0pXG4gICAgICB9XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19