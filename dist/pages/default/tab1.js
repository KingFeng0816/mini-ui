"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _smartOrder = require('./../../components/smartOrder.js');

var _smartOrder2 = _interopRequireDefault(_smartOrder);

var _supplierBuy = require('./../../components/supplierBuy.js');

var _supplierBuy2 = _interopRequireDefault(_supplierBuy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab1 = function (_wepy$page) {
  _inherits(Tab1, _wepy$page);

  function Tab1() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab1.__proto__ || Object.getPrototypeOf(Tab1)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$repeat = {}, _this.$props = { "smartOrder": {}, "supplierBuy": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
      smartOrder: _smartOrder2.default,
      supplierBuy: _supplierBuy2.default
    }, _this.data = {
      isSupplier: false
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab1, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return Tab1;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Tab1 , 'pages/default/tab1'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEuanMiXSwibmFtZXMiOlsiVGFiMSIsImNvbmZpZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNtYXJ0T3JkZXIiLCJTbWFydE9yZGVyIiwic3VwcGxpZXJCdXkiLCJTdXBwbGllckJ1eSIsImRhdGEiLCJpc1N1cHBsaWVyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUyxFLFFBRVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGNBQWEsRUFBZCxFQUFpQixlQUFjLEVBQUMsWUFBVyxFQUFaLEVBQS9CLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGtCQUFZQyxvQkFESjtBQUVSQyxtQkFBYUM7QUFGTCxLLFFBSVZDLEksR0FBTztBQUNMQyxrQkFBWTtBQURQLEssUUFHUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQ1I7Ozs7RUFwQitCQyxlQUFLQyxJOztrQkFBbEJoQixJIiwiZmlsZSI6InRhYjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFNtYXJ0T3JkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc21hcnRPcmRlclwiO1xuICBpbXBvcnQgU3VwcGxpZXJCdXkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3VwcGxpZXJCdXlcIjtcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIxIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzbWFydE9yZGVyXCI6e30sXCJzdXBwbGllckJ1eVwiOntcInhtbG5zOnd4XCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgc21hcnRPcmRlcjogU21hcnRPcmRlcixcbiAgICAgIHN1cHBsaWVyQnV5OiBTdXBwbGllckJ1eVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgaXNTdXBwbGllcjogZmFsc2VcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19