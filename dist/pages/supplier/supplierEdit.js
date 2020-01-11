"use strict";

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

var SupplierEdit = function (_wepy$page) {
  _inherits(SupplierEdit, _wepy$page);

  function SupplierEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SupplierEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SupplierEdit.__proto__ || Object.getPrototypeOf(SupplierEdit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      "usingComponents": {
        "van-popup": "../../components/van/popup"
      },
      navigationBarTitleText: '修改信息'
    }, _this.components = {}, _this.data = {
      chooseAreaViewShow: false,
      changeChooseVarietyViewShow: false
    }, _this.computed = {}, _this.methods = {
      chooseAreaAction: function chooseAreaAction() {
        this.chooseAreaViewShow = true;
      },
      closeChooseAreaAction: function closeChooseAreaAction() {
        this.chooseAreaViewShow = false;
      },
      chooseVarietyAction: function chooseVarietyAction() {
        this.changeChooseVarietyViewShow = true;
      },
      closeVarietyAction: function closeVarietyAction() {
        this.changeChooseVarietyViewShow = false;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SupplierEdit, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return SupplierEdit;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(SupplierEdit , 'pages/supplier/supplierEdit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyRWRpdC5qcyJdLCJuYW1lcyI6WyJTdXBwbGllckVkaXQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjaG9vc2VBcmVhVmlld1Nob3ciLCJjaGFuZ2VDaG9vc2VWYXJpZXR5Vmlld1Nob3ciLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjaG9vc2VBcmVhQWN0aW9uIiwiY2xvc2VDaG9vc2VBcmVhQWN0aW9uIiwiY2hvb3NlVmFyaWV0eUFjdGlvbiIsImNsb3NlVmFyaWV0eUFjdGlvbiIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUztBQUNQLHlCQUFtQjtBQUNqQixxQkFBYTtBQURJLE9BRFo7QUFJUEMsOEJBQXdCO0FBSmpCLEssUUFNVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLDBCQUFvQixLQURmO0FBRUxDLG1DQUE2QjtBQUZ4QixLLFFBSVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyx3QkFBa0IsNEJBQVc7QUFDM0IsYUFBS0osa0JBQUwsR0FBMEIsSUFBMUI7QUFDRCxPQUhPO0FBSVJLLDZCQUF1QixpQ0FBVztBQUNoQyxhQUFLTCxrQkFBTCxHQUEwQixLQUExQjtBQUNELE9BTk87QUFPUk0sMkJBQXFCLCtCQUFXO0FBQzlCLGFBQUtMLDJCQUFMLEdBQW1DLElBQW5DO0FBQ0QsT0FUTztBQVVSTSwwQkFBb0IsOEJBQVc7QUFDN0IsYUFBS04sMkJBQUwsR0FBbUMsS0FBbkM7QUFDRDtBQVpPLEssUUFjVk8sTSxHQUFTLEU7Ozs7OzZCQUVBLENBQ1I7Ozs7RUFoQ3VDQyxlQUFLQyxJOztrQkFBMUJmLFkiLCJmaWxlIjoic3VwcGxpZXJFZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcGxpZXJFZGl0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBcInVzaW5nQ29tcG9uZW50c1wiOiB7XG4gICAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vLi4vY29tcG9uZW50cy92YW4vcG9wdXBcIlxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkv67mlLnkv6Hmga8nXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBjaG9vc2VBcmVhVmlld1Nob3c6IGZhbHNlLFxuICAgICAgY2hhbmdlQ2hvb3NlVmFyaWV0eVZpZXdTaG93OiBmYWxzZVxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNob29zZUFyZWFBY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNob29zZUFyZWFWaWV3U2hvdyA9IHRydWVcbiAgICAgIH0sXG4gICAgICBjbG9zZUNob29zZUFyZWFBY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNob29zZUFyZWFWaWV3U2hvdyA9IGZhbHNlXG4gICAgICB9LFxuICAgICAgY2hvb3NlVmFyaWV0eUFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlQ2hvb3NlVmFyaWV0eVZpZXdTaG93ID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNsb3NlVmFyaWV0eUFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlQ2hvb3NlVmFyaWV0eVZpZXdTaG93ID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=