"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _purchaserMine = require('./../../components/purchaserMine.js');

var _purchaserMine2 = _interopRequireDefault(_purchaserMine);

var _supplierMine = require('./../../components/supplierMine.js');

var _supplierMine2 = _interopRequireDefault(_supplierMine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab4 = function (_wepy$page) {
  _inherits(Tab4, _wepy$page);

  function Tab4() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab4);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab4.__proto__ || Object.getPrototypeOf(Tab4)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$repeat = {}, _this.$props = { "purchaserMine": {}, "supplierMine": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
      purchaserMine: _purchaserMine2.default,
      supplierMine: _supplierMine2.default
    }, _this.data = {
      isSupplier: true
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab4, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return Tab4;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Tab4 , 'pages/default/tab4'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQuanMiXSwibmFtZXMiOlsiVGFiNCIsImNvbmZpZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInB1cmNoYXNlck1pbmUiLCJQdXJjaGFzZXJNaW5lIiwic3VwcGxpZXJNaW5lIiwiU3VwcGxpZXJNaW5lIiwiZGF0YSIsImlzU3VwcGxpZXIiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTLEUsUUFFVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQWpCLEVBQW9CLGdCQUFlLEVBQUMsWUFBVyxFQUFaLEVBQW5DLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLHFCQUFlQyx1QkFEUDtBQUVSQyxvQkFBY0M7QUFGTixLLFFBSVZDLEksR0FBTztBQUNMQyxrQkFBWTtBQURQLEssUUFHUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQ1I7Ozs7RUFwQitCQyxlQUFLQyxJOztrQkFBbEJoQixJIiwiZmlsZSI6InRhYjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFB1cmNoYXNlck1pbmUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHVyY2hhc2VyTWluZVwiO1xuICBpbXBvcnQgU3VwcGxpZXJNaW5lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N1cHBsaWVyTWluZVwiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYjQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInB1cmNoYXNlck1pbmVcIjp7fSxcInN1cHBsaWVyTWluZVwiOntcInhtbG5zOnd4XCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgcHVyY2hhc2VyTWluZTogUHVyY2hhc2VyTWluZSxcbiAgICAgIHN1cHBsaWVyTWluZTogU3VwcGxpZXJNaW5lXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBpc1N1cHBsaWVyOiB0cnVlXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==