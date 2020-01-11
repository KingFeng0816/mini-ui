"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddressEditor = function (_wepy$page) {
  _inherits(AddressEditor, _wepy$page);

  function AddressEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddressEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressEditor.__proto__ || Object.getPrototypeOf(AddressEditor)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      "usingComponents": {
        "van-switch": "../../components/van/switch",
        "van-popup": "../../components/van/popup"
      },
      navigationBarTitleText: '新增地址'
    }, _this.components = {}, _this.data = {
      checked: false,
      location: "",
      chooseAreaViewShow: false
    }, _this.computed = {}, _this.methods = {
      onChange: function onChange(_ref2) {
        var detail = _ref2.detail;

        this.checked = detail;
      },
      chooseAreaAction: function chooseAreaAction() {
        this.chooseAreaViewShow = !this.chooseAreaViewShow;
      },
      closeChooseAreaAction: function closeChooseAreaAction() {
        this.chooseAreaViewShow = false;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddressEditor, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return AddressEditor;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(AddressEditor , 'pages/other/address/addressEditor'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3NFZGl0b3IuanMiXSwibmFtZXMiOlsiQWRkcmVzc0VkaXRvciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImNoZWNrZWQiLCJsb2NhdGlvbiIsImNob29zZUFyZWFWaWV3U2hvdyIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwiZGV0YWlsIiwiY2hvb3NlQXJlYUFjdGlvbiIsImNsb3NlQ2hvb3NlQXJlYUFjdGlvbiIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQLHlCQUFtQjtBQUNqQixzQkFBYyw2QkFERztBQUVqQixxQkFBYTtBQUZJLE9BRFo7QUFLUEMsOEJBQXdCO0FBTGpCLEssUUFPVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGVBQVMsS0FESjtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLDBCQUFvQjtBQUhmLEssUUFLUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGdCQUFVLHlCQUFtQjtBQUFBLFlBQVRDLE1BQVMsU0FBVEEsTUFBUzs7QUFDM0IsYUFBS04sT0FBTCxHQUFlTSxNQUFmO0FBQ0QsT0FITztBQUlSQyx3QkFBa0IsNEJBQVc7QUFDM0IsYUFBS0wsa0JBQUwsR0FBMEIsQ0FBQyxLQUFLQSxrQkFBaEM7QUFDRCxPQU5PO0FBT1JNLDZCQUF1QixpQ0FBVztBQUNoQyxhQUFLTixrQkFBTCxHQUEwQixLQUExQjtBQUNEO0FBVE8sSyxRQVdWTyxNLEdBQVMsRTs7Ozs7NkJBRUEsQ0FDUjs7OztFQS9Cd0NDLGVBQUtDLEk7O2tCQUEzQmhCLGEiLCJmaWxlIjoiYWRkcmVzc0VkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZHJlc3NFZGl0b3IgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIFwidXNpbmdDb21wb25lbnRzXCI6IHtcbiAgICAgICAgXCJ2YW4tc3dpdGNoXCI6IFwiLi4vLi4vY29tcG9uZW50cy92YW4vc3dpdGNoXCIsXG4gICAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vLi4vY29tcG9uZW50cy92YW4vcG9wdXBcIlxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlrDlop7lnLDlnYAnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIGxvY2F0aW9uOiBcIlwiLFxuICAgICAgY2hvb3NlQXJlYVZpZXdTaG93OiBmYWxzZVxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbih7ZGV0YWlsfSkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBkZXRhaWxcbiAgICAgIH0sXG4gICAgICBjaG9vc2VBcmVhQWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jaG9vc2VBcmVhVmlld1Nob3cgPSAhdGhpcy5jaG9vc2VBcmVhVmlld1Nob3dcbiAgICAgIH0sXG4gICAgICBjbG9zZUNob29zZUFyZWFBY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNob29zZUFyZWFWaWV3U2hvdyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19