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

var ChooseGoodsFromSupplier = function (_wepy$page) {
  _inherits(ChooseGoodsFromSupplier, _wepy$page);

  function ChooseGoodsFromSupplier() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChooseGoodsFromSupplier);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChooseGoodsFromSupplier.__proto__ || Object.getPrototypeOf(ChooseGoodsFromSupplier)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {
      classes: [{
        "id": 0,
        "title": "分类1"
      }, {
        "id": 1,
        "title": "分类2"
      }, {
        "id": 2,
        "title": "分类3"
      }, {
        "id": 3,
        "title": "分类4"
      }],
      selectedClass: {
        "id": 0,
        "title": "分类1"
      }
    }, _this.computed = {}, _this.methods = {
      showSupplierDetail: function showSupplierDetail() {
        this.$navigate({ url: "../supplier/supplierDetail" });
      },
      changeSelClass: function changeSelClass(item) {
        this.selectedClass = item;
      },
      showGoodsDetail: function showGoodsDetail() {
        this.$navigate({ url: "../other/goodsDetail" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChooseGoodsFromSupplier, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return ChooseGoodsFromSupplier;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(ChooseGoodsFromSupplier , 'pages/purchaser/chooseGoodsFromSupplier'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZUdvb2RzRnJvbVN1cHBsaWVyLmpzIl0sIm5hbWVzIjpbIkNob29zZUdvb2RzRnJvbVN1cHBsaWVyIiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRhdGEiLCJjbGFzc2VzIiwic2VsZWN0ZWRDbGFzcyIsImNvbXB1dGVkIiwibWV0aG9kcyIsInNob3dTdXBwbGllckRldGFpbCIsIiRuYXZpZ2F0ZSIsInVybCIsImNoYW5nZVNlbENsYXNzIiwiaXRlbSIsInNob3dHb29kc0RldGFpbCIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSx1Qjs7Ozs7Ozs7Ozs7Ozs7d05BQ25CQyxNLEdBQVMsRSxRQUVUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsZUFBUyxDQUNQO0FBQ0UsY0FBTSxDQURSO0FBRUUsaUJBQVM7QUFGWCxPQURPLEVBS1A7QUFDRSxjQUFNLENBRFI7QUFFRSxpQkFBUztBQUZYLE9BTE8sRUFTUDtBQUNFLGNBQU0sQ0FEUjtBQUVFLGlCQUFTO0FBRlgsT0FUTyxFQWFQO0FBQ0UsY0FBTSxDQURSO0FBRUUsaUJBQVM7QUFGWCxPQWJPLENBREo7QUFtQkxDLHFCQUFlO0FBQ2IsY0FBTSxDQURPO0FBRWIsaUJBQVM7QUFGSTtBQW5CVixLLFFBd0JQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsMEJBQW9CLDhCQUFXO0FBQzdCLGFBQUtDLFNBQUwsQ0FBZSxFQUFDQyxLQUFJLDRCQUFMLEVBQWY7QUFDRCxPQUhPO0FBSVJDLHNCQUFnQix3QkFBU0MsSUFBVCxFQUFlO0FBQzdCLGFBQUtQLGFBQUwsR0FBcUJPLElBQXJCO0FBQ0QsT0FOTztBQU9SQyx1QkFBaUIsMkJBQVc7QUFDMUIsYUFBS0osU0FBTCxDQUFlLEVBQUNDLEtBQUksc0JBQUwsRUFBZjtBQUNEO0FBVE8sSyxRQVdWSSxNLEdBQVMsRTs7Ozs7NkJBRUEsQ0FDUjs7OztFQTdDa0RDLGVBQUtDLEk7O2tCQUFyQ2hCLHVCIiwiZmlsZSI6ImNob29zZUdvb2RzRnJvbVN1cHBsaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvb3NlR29vZHNGcm9tU3VwcGxpZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGNsYXNzZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMCxcbiAgICAgICAgICBcInRpdGxlXCI6IFwi5YiG57G7MVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIuWIhuexuzJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgIFwidGl0bGVcIjogXCLliIbnsbszXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMyxcbiAgICAgICAgICBcInRpdGxlXCI6IFwi5YiG57G7NFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzZWxlY3RlZENsYXNzOiB7XG4gICAgICAgIFwiaWRcIjogMCxcbiAgICAgICAgXCJ0aXRsZVwiOiBcIuWIhuexuzFcIlxuICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dTdXBwbGllckRldGFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHt1cmw6XCIuLi9zdXBwbGllci9zdXBwbGllckRldGFpbFwifSlcbiAgICAgIH0sXG4gICAgICBjaGFuZ2VTZWxDbGFzczogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2xhc3MgPSBpdGVtXG4gICAgICB9LFxuICAgICAgc2hvd0dvb2RzRGV0YWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe3VybDpcIi4uL290aGVyL2dvb2RzRGV0YWlsXCJ9KVxuICAgICAgfVxuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==