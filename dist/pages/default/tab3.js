"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _cart = require('./../../components/cart.js');

var _cart2 = _interopRequireDefault(_cart);

var _supplierGoodsCenter = require('./../../components/supplierGoodsCenter.js');

var _supplierGoodsCenter2 = _interopRequireDefault(_supplierGoodsCenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab3 = function (_wepy$page) {
  _inherits(Tab3, _wepy$page);

  function Tab3() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab3);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab3.__proto__ || Object.getPrototypeOf(Tab3)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$repeat = {}, _this.$props = { "cart": {}, "supplierGoodsCenter": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
      cart: _cart2.default,
      supplierGoodsCenter: _supplierGoodsCenter2.default
    }, _this.data = {
      isSupplier: true
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab3, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return Tab3;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Tab3 , 'pages/default/tab3'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMuanMiXSwibmFtZXMiOlsiVGFiMyIsImNvbmZpZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNhcnQiLCJDYXJ0Iiwic3VwcGxpZXJHb29kc0NlbnRlciIsIlN1cHBsaWVyR29vZHNDZW50ZXIiLCJkYXRhIiwiaXNTdXBwbGllciIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVMsRSxRQUVWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxRQUFPLEVBQVIsRUFBVyx1QkFBc0IsRUFBQyxZQUFXLEVBQVosRUFBakMsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsWUFBTUMsY0FERTtBQUVSQywyQkFBcUJDO0FBRmIsSyxRQUlWQyxJLEdBQU87QUFDTEMsa0JBQVk7QUFEUCxLLFFBR1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUNSOzs7O0VBcEIrQkMsZUFBS0MsSTs7a0JBQWxCaEIsSSIsImZpbGUiOiJ0YWIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBDYXJ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcnRcIjtcbiAgaW1wb3J0IFN1cHBsaWVyR29vZHNDZW50ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3VwcGxpZXJHb29kc0NlbnRlclwiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYjMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImNhcnRcIjp7fSxcInN1cHBsaWVyR29vZHNDZW50ZXJcIjp7XCJ4bWxuczp3eFwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGNhcnQ6IENhcnQsXG4gICAgICBzdXBwbGllckdvb2RzQ2VudGVyOiBTdXBwbGllckdvb2RzQ2VudGVyXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBpc1N1cHBsaWVyOiB0cnVlXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==