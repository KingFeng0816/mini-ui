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

var SupplierMine = function (_wepy$page) {
  _inherits(SupplierMine, _wepy$page);

  function SupplierMine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SupplierMine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SupplierMine.__proto__ || Object.getPrototypeOf(SupplierMine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {
      toSupplierCenter: function toSupplierCenter() {
        this.$parent.$navigate({ url: "/pages/supplier/supplierCenter" });
      },
      toSalesStatistics: function toSalesStatistics() {
        this.$parent.$navigate({ url: "/pages/supplier/salesStatistics" });
      },
      toInventoryOverview: function toInventoryOverview() {
        this.$parent.$navigate({ url: "/pages/supplier/inventoryOverview" });
      },
      toDataAnalysis: function toDataAnalysis() {
        this.$parent.$navigate({ url: "/pages/supplier/dataAnalysis" });
      },
      toPriceMaintain: function toPriceMaintain() {
        this.$parent.$navigate({ url: "/pages/supplier/priceMaintain" });
      },
      toNeedPay: function toNeedPay() {
        this.$parent.$navigate({ url: "/pages/other/needPay" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SupplierMine, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SupplierMine;
}(_wepy2.default.page);

exports.default = SupplierMine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyTWluZS5qcyJdLCJuYW1lcyI6WyJTdXBwbGllck1pbmUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b1N1cHBsaWVyQ2VudGVyIiwiJHBhcmVudCIsIiRuYXZpZ2F0ZSIsInVybCIsInRvU2FsZXNTdGF0aXN0aWNzIiwidG9JbnZlbnRvcnlPdmVydmlldyIsInRvRGF0YUFuYWx5c2lzIiwidG9QcmljZU1haW50YWluIiwidG9OZWVkUGF5IiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTyxFLFFBRVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyx3QkFBa0IsNEJBQVc7QUFDM0IsYUFBS0MsT0FBTCxDQUFhQyxTQUFiLENBQXVCLEVBQUNDLEtBQUksZ0NBQUwsRUFBdkI7QUFDRCxPQUhPO0FBSVJDLHlCQUFtQiw2QkFBVztBQUM1QixhQUFLSCxPQUFMLENBQWFDLFNBQWIsQ0FBdUIsRUFBQ0MsS0FBSSxpQ0FBTCxFQUF2QjtBQUNELE9BTk87QUFPUkUsMkJBQXFCLCtCQUFXO0FBQzlCLGFBQUtKLE9BQUwsQ0FBYUMsU0FBYixDQUF1QixFQUFDQyxLQUFJLG1DQUFMLEVBQXZCO0FBQ0QsT0FUTztBQVVSRyxzQkFBZ0IsMEJBQVc7QUFDekIsYUFBS0wsT0FBTCxDQUFhQyxTQUFiLENBQXVCLEVBQUNDLEtBQUksOEJBQUwsRUFBdkI7QUFDRCxPQVpPO0FBYVJJLHVCQUFpQiwyQkFBVztBQUMxQixhQUFLTixPQUFMLENBQWFDLFNBQWIsQ0FBdUIsRUFBQ0MsS0FBSSwrQkFBTCxFQUF2QjtBQUNELE9BZk87QUFnQlJLLGlCQUFXLHFCQUFXO0FBQ3BCLGFBQUtQLE9BQUwsQ0FBYUMsU0FBYixDQUF1QixFQUFDQyxLQUFJLHNCQUFMLEVBQXZCO0FBQ0Q7QUFsQk8sSyxRQW9CVk0sTSxHQUFTLEU7Ozs7OzZCQUVBLENBQ1I7Ozs7RUFqQ3VDQyxlQUFLQyxJOztrQkFBMUJsQixZIiwiZmlsZSI6InN1cHBsaWVyTWluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBsaWVyTWluZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1N1cHBsaWVyQ2VudGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50LiRuYXZpZ2F0ZSh7dXJsOlwiL3BhZ2VzL3N1cHBsaWVyL3N1cHBsaWVyQ2VudGVyXCJ9KVxuICAgICAgfSxcbiAgICAgIHRvU2FsZXNTdGF0aXN0aWNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50LiRuYXZpZ2F0ZSh7dXJsOlwiL3BhZ2VzL3N1cHBsaWVyL3NhbGVzU3RhdGlzdGljc1wifSlcbiAgICAgIH0sXG4gICAgICB0b0ludmVudG9yeU92ZXJ2aWV3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50LiRuYXZpZ2F0ZSh7dXJsOlwiL3BhZ2VzL3N1cHBsaWVyL2ludmVudG9yeU92ZXJ2aWV3XCJ9KVxuICAgICAgfSxcbiAgICAgIHRvRGF0YUFuYWx5c2lzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50LiRuYXZpZ2F0ZSh7dXJsOlwiL3BhZ2VzL3N1cHBsaWVyL2RhdGFBbmFseXNpc1wifSlcbiAgICAgIH0sXG4gICAgICB0b1ByaWNlTWFpbnRhaW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvc3VwcGxpZXIvcHJpY2VNYWludGFpblwifSlcbiAgICAgIH0sXG4gICAgICB0b05lZWRQYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvb3RoZXIvbmVlZFBheVwifSlcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=