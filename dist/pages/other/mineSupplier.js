'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _supplierRowView = require('./../../components/supplierRowView.js');

var _supplierRowView2 = _interopRequireDefault(_supplierRowView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MineSupplier = function (_wepy$page) {
  _inherits(MineSupplier, _wepy$page);

  function MineSupplier() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MineSupplier);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MineSupplier.__proto__ || Object.getPrototypeOf(MineSupplier)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的供应商'
    }, _this.components = {
      orderItemView: _supplierRowView2.default
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      selectSupplier: function selectSupplier(item) {
        console.log('selectSupplier: ', item);
        this.$navigate({ url: "../purchaser/chooseGoodsFromSupplier" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MineSupplier, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return MineSupplier;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MineSupplier , 'pages/other/mineSupplier'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmVTdXBwbGllci5qcyJdLCJuYW1lcyI6WyJNaW5lU3VwcGxpZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm9yZGVySXRlbVZpZXciLCJTdXBwbGllclJvd1ZpZXciLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic2VsZWN0U3VwcGxpZXIiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsIiRuYXZpZ2F0ZSIsInVybCIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxxQkFBZUM7QUFESixLLFFBR2JDLEksR0FBTyxFLFFBRVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxzQkFBZ0Isd0JBQVNDLElBQVQsRUFBZTtBQUM3QkMsZ0JBQVFDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ0YsSUFBaEM7QUFDQSxhQUFLRyxTQUFMLENBQWUsRUFBQ0MsS0FBSSxzQ0FBTCxFQUFmO0FBQ0Q7QUFKTyxLLFFBTVZDLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUNSOzs7O0VBcEJ1Q0MsZUFBS0MsSTs7a0JBQTFCakIsWSIsImZpbGUiOiJtaW5lU3VwcGxpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFN1cHBsaWVyUm93VmlldyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdXBwbGllclJvd1ZpZXdcIjtcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lU3VwcGxpZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTkvpvlupTllYYnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBvcmRlckl0ZW1WaWV3OiBTdXBwbGllclJvd1ZpZXdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzZWxlY3RTdXBwbGllcjogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0U3VwcGxpZXI6ICcsIGl0ZW0pXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHt1cmw6XCIuLi9wdXJjaGFzZXIvY2hvb3NlR29vZHNGcm9tU3VwcGxpZXJcIn0pXG4gICAgICB9XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19