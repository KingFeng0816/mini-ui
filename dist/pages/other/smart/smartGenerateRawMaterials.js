'use strict';

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

var SmartGenerateRawMaterials = function (_wepy$page) {
  _inherits(SmartGenerateRawMaterials, _wepy$page);

  function SmartGenerateRawMaterials() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SmartGenerateRawMaterials);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmartGenerateRawMaterials.__proto__ || Object.getPrototypeOf(SmartGenerateRawMaterials)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '生成原材料',
      usingComponents: {
        'van-popup': '../../../components/van/popup'
      }
    }, _this.components = {}, _this.data = {
      changeSupplierViewShow: false
    }, _this.computed = {}, _this.methods = {
      toSubmit: function toSubmit() {
        this.$navigate({ url: "../order/createOrder" });
      },
      changeSupplier: function changeSupplier() {
        this.changeSupplierViewShow = true;
      },
      closeChooseAreaAction: function closeChooseAreaAction() {
        this.changeSupplierViewShow = false;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SmartGenerateRawMaterials, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SmartGenerateRawMaterials;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(SmartGenerateRawMaterials , 'pages/other/smart/smartGenerateRawMaterials'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0R2VuZXJhdGVSYXdNYXRlcmlhbHMuanMiXSwibmFtZXMiOlsiU21hcnRHZW5lcmF0ZVJhd01hdGVyaWFscyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImNoYW5nZVN1cHBsaWVyVmlld1Nob3ciLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b1N1Ym1pdCIsIiRuYXZpZ2F0ZSIsInVybCIsImNoYW5nZVN1cHBsaWVyIiwiY2xvc2VDaG9vc2VBcmVhQWN0aW9uIiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLHlCOzs7Ozs7Ozs7Ozs7Ozs0TkFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YscUJBQWE7QUFERTtBQUZWLEssUUFNVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLDhCQUF3QjtBQURuQixLLFFBR1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxnQkFBVSxvQkFBVztBQUNuQixhQUFLQyxTQUFMLENBQWUsRUFBQ0MsS0FBSSxzQkFBTCxFQUFmO0FBQ0QsT0FITztBQUlSQyxzQkFBZ0IsMEJBQVc7QUFDekIsYUFBS04sc0JBQUwsR0FBOEIsSUFBOUI7QUFDRCxPQU5PO0FBT1JPLDZCQUF1QixpQ0FBVztBQUNoQyxhQUFLUCxzQkFBTCxHQUE4QixLQUE5QjtBQUNEO0FBVE8sSyxRQVdWUSxNLEdBQVMsRTs7Ozs7NkJBRUEsQ0FDUjs7OztFQTVCb0RDLGVBQUtDLEk7O2tCQUF2Q2hCLHlCIiwiZmlsZSI6InNtYXJ0R2VuZXJhdGVSYXdNYXRlcmlhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTbWFydEdlbmVyYXRlUmF3TWF0ZXJpYWxzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55Sf5oiQ5Y6f5p2Q5paZJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAndmFuLXBvcHVwJzogJy4uLy4uLy4uL2NvbXBvbmVudHMvdmFuL3BvcHVwJ1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgY2hhbmdlU3VwcGxpZXJWaWV3U2hvdzogZmFsc2VcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1N1Ym1pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHt1cmw6XCIuLi9vcmRlci9jcmVhdGVPcmRlclwifSlcbiAgICAgIH0sXG4gICAgICBjaGFuZ2VTdXBwbGllcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlU3VwcGxpZXJWaWV3U2hvdyA9IHRydWVcbiAgICAgIH0sXG4gICAgICBjbG9zZUNob29zZUFyZWFBY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNoYW5nZVN1cHBsaWVyVmlld1Nob3cgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==