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

var SupplierCenter = function (_wepy$page) {
  _inherits(SupplierCenter, _wepy$page);

  function SupplierCenter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SupplierCenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SupplierCenter.__proto__ || Object.getPrototypeOf(SupplierCenter)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '供应商管理'
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {
      editAction: function editAction() {
        this.$navigate({ url: "/pages/supplier/supplierEdit" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SupplierCenter, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SupplierCenter;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(SupplierCenter , 'pages/supplier/supplierCenter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyQ2VudGVyLmpzIl0sIm5hbWVzIjpbIlN1cHBsaWVyQ2VudGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZWRpdEFjdGlvbiIsIiRuYXZpZ2F0ZSIsInVybCIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OztzTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU8sRSxRQUVQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsa0JBQVksc0JBQVc7QUFDckIsYUFBS0MsU0FBTCxDQUFlLEVBQUNDLEtBQUksOEJBQUwsRUFBZjtBQUNEO0FBSE8sSyxRQUtWQyxNLEdBQVMsRTs7Ozs7NkJBRUEsQ0FDUjs7OztFQWxCeUNDLGVBQUtDLEk7O2tCQUE1QlosYyIsImZpbGUiOiJzdXBwbGllckNlbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBsaWVyQ2VudGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L6b5bqU5ZWG566h55CGJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGVkaXRBY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOlwiL3BhZ2VzL3N1cHBsaWVyL3N1cHBsaWVyRWRpdFwifSlcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=