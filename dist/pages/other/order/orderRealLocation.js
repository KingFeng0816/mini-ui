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

var OrderRealLocation = function (_wepy$page) {
  _inherits(OrderRealLocation, _wepy$page);

  function OrderRealLocation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderRealLocation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderRealLocation.__proto__ || Object.getPrototypeOf(OrderRealLocation)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '订单实时位置'
    }, _this.components = {}, _this.data = {
      latitude: 0,
      longitude: 0,
      markers: [{
        latitude: 23.099994,
        longitude: 113.324520
      }],
      includePoints: []
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderRealLocation, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      wx.getLocation({
        type: "wgs84",
        success: function success(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          that.latitude = latitude;
          that.longitude = longitude;
          that.includePoints = that.markers.concat([{
            latitude: latitude,
            longitude: longitude
          }]);
          that.$apply();
        }
      });
    }
  }]);

  return OrderRealLocation;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(OrderRealLocation , 'pages/other/order/orderRealLocation'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyUmVhbExvY2F0aW9uLmpzIl0sIm5hbWVzIjpbIk9yZGVyUmVhbExvY2F0aW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJtYXJrZXJzIiwiaW5jbHVkZVBvaW50cyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInRoYXQiLCJ3eCIsImdldExvY2F0aW9uIiwidHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJjb25jYXQiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7Ozs7Ozs7Ozs7OzRNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxnQkFBVSxDQURMO0FBRUxDLGlCQUFXLENBRk47QUFHTEMsZUFBUSxDQUFDO0FBQ1BGLGtCQUFVLFNBREg7QUFFUEMsbUJBQVc7QUFGSixPQUFELENBSEg7QUFPTEUscUJBQWU7QUFQVixLLFFBU1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFFQTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNEQyxTQUFHQyxXQUFILENBQWU7QUFDYkMsY0FBTSxPQURPO0FBRWJDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWE7QUFDbkIsY0FBSVosV0FBV1ksSUFBSVosUUFBbkI7QUFDQSxjQUFJQyxZQUFZVyxJQUFJWCxTQUFwQjtBQUNBTSxlQUFLUCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBTyxlQUFLTixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBTSxlQUFLSixhQUFMLEdBQXFCSSxLQUFLTCxPQUFMLENBQWFXLE1BQWIsQ0FBb0IsQ0FBQztBQUN4Q2IsOEJBRHdDO0FBRXhDQztBQUZ3QyxXQUFELENBQXBCLENBQXJCO0FBSUFNLGVBQUtPLE1BQUw7QUFDRjtBQVpZLE9BQWY7QUFjQTs7OztFQXJDNENDLGVBQUtDLEk7O2tCQUEvQnJCLGlCIiwiZmlsZSI6Im9yZGVyUmVhbExvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJSZWFsTG9jYXRpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLljZXlrp7ml7bkvY3nva4nXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBsYXRpdHVkZTogMCxcbiAgICAgIGxvbmdpdHVkZTogMCxcbiAgICAgIG1hcmtlcnM6W3tcbiAgICAgICAgbGF0aXR1ZGU6IDIzLjA5OTk5NCxcbiAgICAgICAgbG9uZ2l0dWRlOiAxMTMuMzI0NTIwLFxuICAgICAgfV0sXG4gICAgICBpbmNsdWRlUG9pbnRzOiBbXVxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgICB0eXBlOiBcIndnczg0XCIsXG4gICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICB2YXIgbGF0aXR1ZGUgPSByZXMubGF0aXR1ZGU7XG4gICAgICAgICAgdmFyIGxvbmdpdHVkZSA9IHJlcy5sb25naXR1ZGU7XG4gICAgICAgICAgdGhhdC5sYXRpdHVkZSA9IGxhdGl0dWRlO1xuICAgICAgICAgIHRoYXQubG9uZ2l0dWRlID0gbG9uZ2l0dWRlO1xuICAgICAgICAgIHRoYXQuaW5jbHVkZVBvaW50cyA9IHRoYXQubWFya2Vycy5jb25jYXQoW3tcbiAgICAgICAgICAgIGxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlXG4gICAgICAgICAgfV0pXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgIH1cbiAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==