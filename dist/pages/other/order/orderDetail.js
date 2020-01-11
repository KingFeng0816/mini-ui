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

var OrderDetail = function (_wepy$page) {
  _inherits(OrderDetail, _wepy$page);

  function OrderDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderDetail.__proto__ || Object.getPrototypeOf(OrderDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      "usingComponents": {
        "van-popup": "../../components/van/popup"
      },
      navigationBarTitleText: '订单详情'
    }, _this.components = {}, _this.data = {
      /*
      0 -- 待确认
      1 -- 已完成
      2 -- 待收货
      3 -- 待验货
      4 -- 待发货
      5 -- 再次确认
      */
      state: 0,
      trackOrderViewShow: false,
      checkViewShow: false,
      changePriceViewShow: false,
      chooseTruckViewShow: false,
      addGoodsViewShow: false,
      isSupplier: true,
      pageHeight: 0
    }, _this.computed = {}, _this.methods = {
      toTracingSource: function toTracingSource() {
        this.$navigate({ url: "/pages/other/order/tracingSource" });
      },
      toTrackOrder: function toTrackOrder() {
        this.trackOrderViewShow = true;
      },
      closeTrackOrderView: function closeTrackOrderView() {
        this.trackOrderViewShow = false;
      },
      toCheckOrder: function toCheckOrder() {
        this.checkViewShow = true;
      },
      closeCheckView: function closeCheckView() {
        this.checkViewShow = false;
      },
      toEditPrice: function toEditPrice() {
        this.changePriceViewShow = true;
      },
      closeChangePriceView: function closeChangePriceView() {
        this.changePriceViewShow = false;
      },
      toChooseTruck: function toChooseTruck() {
        this.chooseTruckViewShow = true;
      },
      closeChooseTruckView: function closeChooseTruckView() {
        this.chooseTruckViewShow = false;
      },
      toAddGoods: function toAddGoods() {
        this.addGoodsViewShow = true;
      },
      closeAddGoodsView: function closeAddGoodsView() {
        this.addGoodsViewShow = false;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderDetail, [{
    key: "onLoad",
    value: function onLoad() {
      var that = this;
      var query = wx.createSelectorQuery();
      query.select('.container').boundingClientRect();
      query.exec(function (res) {
        console.log(res[0].height);
        that.pageHeight = res[0].height;
        that.$apply();
      });
    }
  }]);

  return OrderDetail;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(OrderDetail , 'pages/other/order/orderDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyRGV0YWlsLmpzIl0sIm5hbWVzIjpbIk9yZGVyRGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwic3RhdGUiLCJ0cmFja09yZGVyVmlld1Nob3ciLCJjaGVja1ZpZXdTaG93IiwiY2hhbmdlUHJpY2VWaWV3U2hvdyIsImNob29zZVRydWNrVmlld1Nob3ciLCJhZGRHb29kc1ZpZXdTaG93IiwiaXNTdXBwbGllciIsInBhZ2VIZWlnaHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b1RyYWNpbmdTb3VyY2UiLCIkbmF2aWdhdGUiLCJ1cmwiLCJ0b1RyYWNrT3JkZXIiLCJjbG9zZVRyYWNrT3JkZXJWaWV3IiwidG9DaGVja09yZGVyIiwiY2xvc2VDaGVja1ZpZXciLCJ0b0VkaXRQcmljZSIsImNsb3NlQ2hhbmdlUHJpY2VWaWV3IiwidG9DaG9vc2VUcnVjayIsImNsb3NlQ2hvb3NlVHJ1Y2tWaWV3IiwidG9BZGRHb29kcyIsImNsb3NlQWRkR29vZHNWaWV3IiwiZXZlbnRzIiwidGhhdCIsInF1ZXJ5Iiwid3giLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZXhlYyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVM7QUFDUCx5QkFBbUI7QUFDakIscUJBQWE7QUFESSxPQURaO0FBSVBDLDhCQUF3QjtBQUpqQixLLFFBTVRDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMOzs7Ozs7OztBQVFBQyxhQUFPLENBVEY7QUFVTEMsMEJBQW9CLEtBVmY7QUFXTEMscUJBQWUsS0FYVjtBQVlMQywyQkFBcUIsS0FaaEI7QUFhTEMsMkJBQXFCLEtBYmhCO0FBY0xDLHdCQUFrQixLQWRiO0FBZUxDLGtCQUFZLElBZlA7QUFnQkxDLGtCQUFZO0FBaEJQLEssUUFrQlBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyx1QkFBaUIsMkJBQVc7QUFDMUIsYUFBS0MsU0FBTCxDQUFlLEVBQUNDLEtBQUksa0NBQUwsRUFBZjtBQUNELE9BSE87QUFJUkMsb0JBQWMsd0JBQVc7QUFDdkIsYUFBS1osa0JBQUwsR0FBMEIsSUFBMUI7QUFDRCxPQU5PO0FBT1JhLDJCQUFxQiwrQkFBVztBQUM5QixhQUFLYixrQkFBTCxHQUEwQixLQUExQjtBQUNELE9BVE87QUFVUmMsb0JBQWMsd0JBQVc7QUFDdkIsYUFBS2IsYUFBTCxHQUFxQixJQUFyQjtBQUNELE9BWk87QUFhUmMsc0JBQWdCLDBCQUFXO0FBQ3pCLGFBQUtkLGFBQUwsR0FBcUIsS0FBckI7QUFDRCxPQWZPO0FBZ0JSZSxtQkFBYSx1QkFBVztBQUN0QixhQUFLZCxtQkFBTCxHQUEyQixJQUEzQjtBQUNELE9BbEJPO0FBbUJSZSw0QkFBc0IsZ0NBQVc7QUFDL0IsYUFBS2YsbUJBQUwsR0FBMkIsS0FBM0I7QUFDRCxPQXJCTztBQXNCUmdCLHFCQUFlLHlCQUFXO0FBQ3hCLGFBQUtmLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0QsT0F4Qk87QUF5QlJnQiw0QkFBc0IsZ0NBQVc7QUFDL0IsYUFBS2hCLG1CQUFMLEdBQTJCLEtBQTNCO0FBQ0QsT0EzQk87QUE0QlJpQixrQkFBWSxzQkFBVztBQUNyQixhQUFLaEIsZ0JBQUwsR0FBd0IsSUFBeEI7QUFDRCxPQTlCTztBQStCUmlCLHlCQUFtQiw2QkFBVztBQUM1QixhQUFLakIsZ0JBQUwsR0FBd0IsS0FBeEI7QUFDRDtBQWpDTyxLLFFBbUNWa0IsTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBTUMsUUFBUUMsR0FBR0MsbUJBQUgsRUFBZDtBQUNBRixZQUFNRyxNQUFOLENBQWEsWUFBYixFQUEyQkMsa0JBQTNCO0FBQ0FKLFlBQU1LLElBQU4sQ0FBVyxVQUFTQyxHQUFULEVBQWE7QUFDdEJDLGdCQUFRQyxHQUFSLENBQVlGLElBQUksQ0FBSixFQUFPRyxNQUFuQjtBQUNBVixhQUFLakIsVUFBTCxHQUFrQndCLElBQUksQ0FBSixFQUFPRyxNQUF6QjtBQUNBVixhQUFLVyxNQUFMO0FBQ0QsT0FKRDtBQUtEOzs7O0VBM0VzQ0MsZUFBS0MsSTs7a0JBQXpCMUMsVyIsImZpbGUiOiJvcmRlckRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBcInVzaW5nQ29tcG9uZW50c1wiOiB7XG4gICAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vLi4vY29tcG9uZW50cy92YW4vcG9wdXBcIlxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLljZXor6bmg4UnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICAvKlxuICAgICAgMCAtLSDlvoXnoa7orqRcbiAgICAgIDEgLS0g5bey5a6M5oiQXG4gICAgICAyIC0tIOW+heaUtui0p1xuICAgICAgMyAtLSDlvoXpqozotKdcbiAgICAgIDQgLS0g5b6F5Y+R6LSnXG4gICAgICA1IC0tIOWGjeasoeehruiupFxuICAgICAgKi9cbiAgICAgIHN0YXRlOiAwLFxuICAgICAgdHJhY2tPcmRlclZpZXdTaG93OiBmYWxzZSxcbiAgICAgIGNoZWNrVmlld1Nob3c6IGZhbHNlLFxuICAgICAgY2hhbmdlUHJpY2VWaWV3U2hvdzogZmFsc2UsXG4gICAgICBjaG9vc2VUcnVja1ZpZXdTaG93OiBmYWxzZSxcbiAgICAgIGFkZEdvb2RzVmlld1Nob3c6IGZhbHNlLFxuICAgICAgaXNTdXBwbGllcjogdHJ1ZSxcbiAgICAgIHBhZ2VIZWlnaHQ6IDBcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1RyYWNpbmdTb3VyY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOlwiL3BhZ2VzL290aGVyL29yZGVyL3RyYWNpbmdTb3VyY2VcIn0pXG4gICAgICB9LFxuICAgICAgdG9UcmFja09yZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50cmFja09yZGVyVmlld1Nob3cgPSB0cnVlXG4gICAgICB9LFxuICAgICAgY2xvc2VUcmFja09yZGVyVmlldzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudHJhY2tPcmRlclZpZXdTaG93ID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICB0b0NoZWNrT3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNoZWNrVmlld1Nob3cgPSB0cnVlXG4gICAgICB9LFxuICAgICAgY2xvc2VDaGVja1ZpZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNoZWNrVmlld1Nob3cgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIHRvRWRpdFByaWNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQcmljZVZpZXdTaG93ID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNsb3NlQ2hhbmdlUHJpY2VWaWV3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQcmljZVZpZXdTaG93ID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICB0b0Nob29zZVRydWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jaG9vc2VUcnVja1ZpZXdTaG93ID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNsb3NlQ2hvb3NlVHJ1Y2tWaWV3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jaG9vc2VUcnVja1ZpZXdTaG93ID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICB0b0FkZEdvb2RzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hZGRHb29kc1ZpZXdTaG93ID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBjbG9zZUFkZEdvb2RzVmlldzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkR29vZHNWaWV3U2hvdyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgICBjb25zdCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgcXVlcnkuc2VsZWN0KCcuY29udGFpbmVyJykuYm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHF1ZXJ5LmV4ZWMoZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgY29uc29sZS5sb2cocmVzWzBdLmhlaWdodClcbiAgICAgICAgdGhhdC5wYWdlSGVpZ2h0ID0gcmVzWzBdLmhlaWdodFxuICAgICAgICB0aGF0LiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19