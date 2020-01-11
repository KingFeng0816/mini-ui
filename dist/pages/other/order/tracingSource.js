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

var TracingSource = function (_wepy$page) {
  _inherits(TracingSource, _wepy$page);

  function TracingSource() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TracingSource);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TracingSource.__proto__ || Object.getPrototypeOf(TracingSource)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '溯源'
    }, _this.components = {}, _this.data = {
      showMonitor: false
    }, _this.computed = {}, _this.methods = {
      toShowMonitor: function toShowMonitor() {
        this.showMonitor = true;
        var videoContext = wx.createVideoContext('myVideo');
        videoContext.play();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TracingSource, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return TracingSource;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(TracingSource , 'pages/other/order/tracingSource'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNpbmdTb3VyY2UuanMiXSwibmFtZXMiOlsiVHJhY2luZ1NvdXJjZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInNob3dNb25pdG9yIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9TaG93TW9uaXRvciIsInZpZGVvQ29udGV4dCIsInd4IiwiY3JlYXRlVmlkZW9Db250ZXh0IiwicGxheSIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsbUJBQWE7QUFEUixLLFFBR1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxxQkFBZSx5QkFBVztBQUN4QixhQUFLSCxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsWUFBSUksZUFBZUMsR0FBR0Msa0JBQUgsQ0FBc0IsU0FBdEIsQ0FBbkI7QUFDQUYscUJBQWFHLElBQWI7QUFDRDtBQUxPLEssUUFPVkMsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQ1I7Ozs7RUFyQndDQyxlQUFLQyxJOztrQkFBM0JmLGEiLCJmaWxlIjoidHJhY2luZ1NvdXJjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNpbmdTb3VyY2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmuq/mupAnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzaG93TW9uaXRvcjogZmFsc2VcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1Nob3dNb25pdG9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaG93TW9uaXRvciA9IHRydWVcbiAgICAgICAgbGV0IHZpZGVvQ29udGV4dCA9IHd4LmNyZWF0ZVZpZGVvQ29udGV4dCgnbXlWaWRlbycpXG4gICAgICAgIHZpZGVvQ29udGV4dC5wbGF5KClcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=