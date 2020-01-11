"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _purchaser = require('./../../components/purchaser.js');

var _purchaser2 = _interopRequireDefault(_purchaser);

var _supplier = require('./../../components/supplier.js');

var _supplier2 = _interopRequireDefault(_supplier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab0 = function (_wepy$page) {
  _inherits(Tab0, _wepy$page);

  function Tab0() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab0);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab0.__proto__ || Object.getPrototypeOf(Tab0)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$repeat = {}, _this.$props = { "purchaser": {}, "supplier": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
      purchaser: _purchaser2.default,
      supplier: _supplier2.default
    }, _this.data = {
      isSupplier: false
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab0, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return Tab0;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Tab0 , 'pages/default/tab0'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjAuanMiXSwibmFtZXMiOlsiVGFiMCIsImNvbmZpZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInB1cmNoYXNlciIsIlB1cmNoYXNlciIsInN1cHBsaWVyIiwiU3VwcGxpZXIiLCJkYXRhIiwiaXNTdXBwbGllciIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVMsRSxRQUVWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQWIsRUFBZ0IsWUFBVyxFQUFDLFlBQVcsRUFBWixFQUEzQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxpQkFBV0MsbUJBREg7QUFFUkMsZ0JBQVVDO0FBRkYsSyxRQUlWQyxJLEdBQU87QUFDTEMsa0JBQVk7QUFEUCxLLFFBR1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUNSOzs7O0VBcEIrQkMsZUFBS0MsSTs7a0JBQWxCaEIsSSIsImZpbGUiOiJ0YWIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBQdXJjaGFzZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHVyY2hhc2VyXCI7XG4gIGltcG9ydCBTdXBwbGllciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdXBwbGllclwiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYjAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInB1cmNoYXNlclwiOnt9LFwic3VwcGxpZXJcIjp7XCJ4bWxuczp3eFwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHB1cmNoYXNlcjogUHVyY2hhc2VyLFxuICAgICAgc3VwcGxpZXI6IFN1cHBsaWVyXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBpc1N1cHBsaWVyOiBmYWxzZVxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=