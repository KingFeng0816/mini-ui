'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scrollLeft = 0;

var SupplierGoodsCenter = function (_wepy$page) {
  _inherits(SupplierGoodsCenter, _wepy$page);

  function SupplierGoodsCenter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SupplierGoodsCenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SupplierGoodsCenter.__proto__ || Object.getPrototypeOf(SupplierGoodsCenter)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商品管理'
    }, _this.components = {}, _this.data = {
      selectTab: 0,
      lineAnimation: {}
    }, _this.computed = {}, _this.methods = {
      /*Tab切换*/
      setSelectTab: function setSelectTab(index) {
        var that = this;
        var id = '#tab' + index;
        var query = wx.createSelectorQuery();
        query.select(id).boundingClientRect();
        query.exec(function (res) {

          that.animation.translate(res[0].left - 8 + scrollLeft, 0).step();
          that.lineAnimation = that.animation.export();
          that.selectTab = index;
          that.$apply();
        });
      },
      onScroll: function onScroll(event) {
        scrollLeft = event.detail.scrollLeft;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SupplierGoodsCenter, [{
    key: 'onLoad',
    value: function onLoad() {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease'
      });

      this.animation = animation;
      scrollLeft = 0;
    }
  }]);

  return SupplierGoodsCenter;
}(_wepy2.default.page);

exports.default = SupplierGoodsCenter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyR29vZHNDZW50ZXIuanMiXSwibmFtZXMiOlsic2Nyb2xsTGVmdCIsIlN1cHBsaWVyR29vZHNDZW50ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJzZWxlY3RUYWIiLCJsaW5lQW5pbWF0aW9uIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic2V0U2VsZWN0VGFiIiwiaW5kZXgiLCJ0aGF0IiwiaWQiLCJxdWVyeSIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImV4ZWMiLCJyZXMiLCJhbmltYXRpb24iLCJ0cmFuc2xhdGUiLCJsZWZ0Iiwic3RlcCIsImV4cG9ydCIsIiRhcHBseSIsIm9uU2Nyb2xsIiwiZXZlbnQiLCJkZXRhaWwiLCJldmVudHMiLCJjcmVhdGVBbmltYXRpb24iLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxhQUFhLENBQWpCOztJQUNxQkMsbUI7Ozs7Ozs7Ozs7Ozs7O2dOQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxpQkFBVyxDQUROO0FBRUxDLHFCQUFlO0FBRlYsSyxRQUlQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBQyxvQkFBYyxzQkFBU0MsS0FBVCxFQUFnQjtBQUMxQixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxLQUFLLFNBQVNGLEtBQWxCO0FBQ0EsWUFBTUcsUUFBUUMsR0FBR0MsbUJBQUgsRUFBZDtBQUNBRixjQUFNRyxNQUFOLENBQWFKLEVBQWIsRUFBaUJLLGtCQUFqQjtBQUNBSixjQUFNSyxJQUFOLENBQVcsVUFBU0MsR0FBVCxFQUFhOztBQUV0QlIsZUFBS1MsU0FBTCxDQUFlQyxTQUFmLENBQXlCRixJQUFJLENBQUosRUFBT0csSUFBUCxHQUFjLENBQWQsR0FBa0J2QixVQUEzQyxFQUF1RCxDQUF2RCxFQUEwRHdCLElBQTFEO0FBQ0FaLGVBQUtMLGFBQUwsR0FBcUJLLEtBQUtTLFNBQUwsQ0FBZUksTUFBZixFQUFyQjtBQUNBYixlQUFLTixTQUFMLEdBQWlCSyxLQUFqQjtBQUNBQyxlQUFLYyxNQUFMO0FBRUQsU0FQRDtBQVFILE9BZk87QUFnQlJDLGdCQUFVLGtCQUFTQyxLQUFULEVBQWdCO0FBQ3hCNUIscUJBQWE0QixNQUFNQyxNQUFOLENBQWE3QixVQUExQjtBQUNEO0FBbEJPLEssUUFvQlY4QixNLEdBQVMsRTs7Ozs7NkJBRUE7QUFDUCxVQUFJVCxZQUFZTixHQUFHZ0IsZUFBSCxDQUFtQjtBQUNqQ0Msa0JBQVUsR0FEdUI7QUFFakNDLHdCQUFnQjtBQUZpQixPQUFuQixDQUFoQjs7QUFLQSxXQUFLWixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBckIsbUJBQWEsQ0FBYjtBQUNEOzs7O0VBMUM4Q2tDLGVBQUtDLEk7O2tCQUFqQ2xDLG1CIiwiZmlsZSI6InN1cHBsaWVyR29vZHNDZW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICB2YXIgc2Nyb2xsTGVmdCA9IDBcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcGxpZXJHb29kc0NlbnRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWTgeeuoeeQhidcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNlbGVjdFRhYjogMCxcbiAgICAgIGxpbmVBbmltYXRpb246IHt9XG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgLypUYWLliIfmjaIqL1xuICAgICAgc2V0U2VsZWN0VGFiOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICAgICAgIGxldCBpZCA9ICcjdGFiJyArIGluZGV4XG4gICAgICAgICAgY29uc3QgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICAgICAgICBxdWVyeS5zZWxlY3QoaWQpLmJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgcXVlcnkuZXhlYyhmdW5jdGlvbihyZXMpe1xuXG4gICAgICAgICAgICB0aGF0LmFuaW1hdGlvbi50cmFuc2xhdGUocmVzWzBdLmxlZnQgLSA4ICsgc2Nyb2xsTGVmdCwgMCkuc3RlcCgpXG4gICAgICAgICAgICB0aGF0LmxpbmVBbmltYXRpb24gPSB0aGF0LmFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICAgICAgdGhhdC5zZWxlY3RUYWIgPSBpbmRleFxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBvblNjcm9sbDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgc2Nyb2xsTGVmdCA9IGV2ZW50LmRldGFpbC5zY3JvbGxMZWZ0XG4gICAgICB9XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvblxuICAgICAgc2Nyb2xsTGVmdCA9IDA7XG4gICAgfVxuICB9XG4iXX0=