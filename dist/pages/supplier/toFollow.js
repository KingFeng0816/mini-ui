'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToFollow = function (_wepy$page) {
  _inherits(ToFollow, _wepy$page);

  function ToFollow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToFollow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToFollow.__proto__ || Object.getPrototypeOf(ToFollow)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '关注商品'
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {
      toSearch: function toSearch() {
        this.$navigate({ url: "/pages/supplier/searchFollow" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToFollow, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return ToFollow;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(ToFollow , 'pages/supplier/toFollow'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvRm9sbG93LmpzIl0sIm5hbWVzIjpbIlRvRm9sbG93IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9TZWFyY2giLCIkbmF2aWdhdGUiLCJ1cmwiLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPLEUsUUFFUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGdCQUFVLG9CQUFXO0FBQ25CLGFBQUtDLFNBQUwsQ0FBZSxFQUFDQyxLQUFJLDhCQUFMLEVBQWY7QUFDRDtBQUhPLEssUUFLVkMsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQ1I7Ozs7RUFsQm1DQyxlQUFLQyxJOztrQkFBdEJaLFEiLCJmaWxlIjoidG9Gb2xsb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0ZvbGxvdyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WFs+azqOWVhuWTgSdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1NlYXJjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvc3VwcGxpZXIvc2VhcmNoRm9sbG93XCJ9KVxuICAgICAgfVxuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==