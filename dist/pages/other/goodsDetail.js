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

var GoodsDetail = function (_wepy$page) {
  _inherits(GoodsDetail, _wepy$page);

  function GoodsDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsDetail.__proto__ || Object.getPrototypeOf(GoodsDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {
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

          that.animation.translate(res[0].left - 16, 0).step();
          that.lineAnimation = that.animation.export();
          that.selectTab = index;
          that.$apply();
        });
      },
      toEdit: function toEdit() {
        this.$navigate({ url: "/pages/supplier/goodsEdit" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodsDetail, [{
    key: 'onLoad',
    value: function onLoad() {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease'
      });

      this.animation = animation;
    }
  }]);

  return GoodsDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(GoodsDetail , 'pages/other/goodsDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzRGV0YWlsLmpzIl0sIm5hbWVzIjpbIkdvb2RzRGV0YWlsIiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRhdGEiLCJzZWxlY3RUYWIiLCJsaW5lQW5pbWF0aW9uIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic2V0U2VsZWN0VGFiIiwiaW5kZXgiLCJ0aGF0IiwiaWQiLCJxdWVyeSIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImV4ZWMiLCJyZXMiLCJhbmltYXRpb24iLCJ0cmFuc2xhdGUiLCJsZWZ0Iiwic3RlcCIsImV4cG9ydCIsIiRhcHBseSIsInRvRWRpdCIsIiRuYXZpZ2F0ZSIsInVybCIsImV2ZW50cyIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVMsRSxRQUVUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsaUJBQVcsQ0FETjtBQUVMQyxxQkFBZTtBQUZWLEssUUFJUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1I7QUFDQUMsb0JBQWMsc0JBQVNDLEtBQVQsRUFBZ0I7QUFDMUIsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsS0FBSyxTQUFTRixLQUFsQjtBQUNBLFlBQU1HLFFBQVFDLEdBQUdDLG1CQUFILEVBQWQ7QUFDQUYsY0FBTUcsTUFBTixDQUFhSixFQUFiLEVBQWlCSyxrQkFBakI7QUFDQUosY0FBTUssSUFBTixDQUFXLFVBQVNDLEdBQVQsRUFBYTs7QUFFdEJSLGVBQUtTLFNBQUwsQ0FBZUMsU0FBZixDQUF5QkYsSUFBSSxDQUFKLEVBQU9HLElBQVAsR0FBYyxFQUF2QyxFQUEyQyxDQUEzQyxFQUE4Q0MsSUFBOUM7QUFDQVosZUFBS0wsYUFBTCxHQUFxQkssS0FBS1MsU0FBTCxDQUFlSSxNQUFmLEVBQXJCO0FBQ0FiLGVBQUtOLFNBQUwsR0FBaUJLLEtBQWpCO0FBQ0FDLGVBQUtjLE1BQUw7QUFFRCxTQVBEO0FBUUgsT0FmTztBQWdCUkMsY0FBUSxrQkFBVztBQUNqQixhQUFLQyxTQUFMLENBQWUsRUFBQ0MsS0FBSSwyQkFBTCxFQUFmO0FBQ0Q7QUFsQk8sSyxRQW9CVkMsTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1AsVUFBSVQsWUFBWU4sR0FBR2dCLGVBQUgsQ0FBbUI7QUFDakNDLGtCQUFVLEdBRHVCO0FBRWpDQyx3QkFBZ0I7QUFGaUIsT0FBbkIsQ0FBaEI7O0FBS0EsV0FBS1osU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OztFQXhDc0NhLGVBQUtDLEk7O2tCQUF6QmpDLFciLCJmaWxlIjoiZ29vZHNEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHb29kc0RldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2VsZWN0VGFiOiAwLFxuICAgICAgbGluZUFuaW1hdGlvbjoge31cbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvKlRhYuWIh+aNoiovXG4gICAgICBzZXRTZWxlY3RUYWI6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgICAgICAgbGV0IGlkID0gJyN0YWInICsgaW5kZXhcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgIHF1ZXJ5LnNlbGVjdChpZCkuYm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICBxdWVyeS5leGVjKGZ1bmN0aW9uKHJlcyl7XG5cbiAgICAgICAgICAgIHRoYXQuYW5pbWF0aW9uLnRyYW5zbGF0ZShyZXNbMF0ubGVmdCAtIDE2LCAwKS5zdGVwKClcbiAgICAgICAgICAgIHRoYXQubGluZUFuaW1hdGlvbiA9IHRoYXQuYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICAgICAgICB0aGF0LnNlbGVjdFRhYiA9IGluZGV4XG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpXG4gICAgICAgICAgICBcbiAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvRWRpdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvc3VwcGxpZXIvZ29vZHNFZGl0XCJ9KVxuICAgICAgfVxuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHZhciBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxuICAgICAgfSlcblxuICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICB9XG4gIH1cbiJdfQ==