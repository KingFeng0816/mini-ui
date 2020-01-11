"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _supplierRowView = require('./supplierRowView.js');

var _supplierRowView2 = _interopRequireDefault(_supplierRowView);

var _purchaser = require('./../store/actions/purchaser.js');

var _request = require('./../store/actions/request.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Purchaser = function (_wepy$page) {
  _inherits(Purchaser, _wepy$page);

  function Purchaser() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Purchaser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Purchaser.__proto__ || Object.getPrototypeOf(Purchaser)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$repeat = {}, _this.$props = { "supplierRowView": { "xmlns:v-bind": "", "v-bind:canshu1.sync": "storeListData[index]", "xmlns:bind": "", "bind:supplierRowViewTap": "supplierRowViewTap" } }, _this.$events = {}, _this.components = {
      supplierRowView: _supplierRowView2.default
    }, _this.data = {
      storeListData: [],
      bannerList: [],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 2000,
      duration: 500
    }, _this.computed = {}, _this.methods = {
      selectSupplier: function selectSupplier(item) {
        console.log('selectSupplier: ', item.canshu1);
        this.$parent.$navigate({ url: "/pages/purchaser/chooseGoodsFromSupplier?storeId=" });
      },
      testAction: function testAction() {
        this.$parent.$navigate({ url: "/pages/other/order/tracingSource" });
      },
      onItemClick: function onItemClick(event) {
        var that = this;
        console.log(event.currentTarget.dataset.title);
      },
      supplierRowViewTap: function supplierRowViewTap(e) {
        console.log(e);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Purchaser, [{
    key: "onLoad",
    value: function onLoad() {
      var that = this;

      //加载banner数据
      (0, _purchaser.GetSwiperData)(function (myData) {
        console.log(myData.data.data);
        that.bannerList = myData.data.data;
        that.$apply();
      });
      //加载店铺列表数据
      (0, _purchaser.GetStoreListData)(function (myData) {
        console.log(myData.data.data);
        that.storeListData = myData.data.data;
        that.$apply();
      });
    }
  }]);

  return Purchaser;
}(_wepy2.default.page);

exports.default = Purchaser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlci5qcyJdLCJuYW1lcyI6WyJQdXJjaGFzZXIiLCJjb25maWciLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzdXBwbGllclJvd1ZpZXciLCJTdXBwbGllclJvd1ZpZXciLCJkYXRhIiwic3RvcmVMaXN0RGF0YSIsImJhbm5lckxpc3QiLCJpbmRpY2F0b3JEb3RzIiwidmVydGljYWwiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzZWxlY3RTdXBwbGllciIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiY2Fuc2h1MSIsIiRwYXJlbnQiLCIkbmF2aWdhdGUiLCJ1cmwiLCJ0ZXN0QWN0aW9uIiwib25JdGVtQ2xpY2siLCJldmVudCIsInRoYXQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRpdGxlIiwic3VwcGxpZXJSb3dWaWV3VGFwIiwiZSIsImV2ZW50cyIsIm15RGF0YSIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTLEUsUUFFVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsbUJBQWtCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLHNCQUF6QyxFQUFnRSxjQUFhLEVBQTdFLEVBQWdGLDJCQUEwQixvQkFBMUcsRUFBbkIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsdUJBQWlCQztBQURULEssUUFHVkMsSSxHQUFPO0FBQ0xDLHFCQUFjLEVBRFQ7QUFFTEMsa0JBQVcsRUFGTjtBQUdMQyxxQkFBZSxJQUhWO0FBSUxDLGdCQUFVLEtBSkw7QUFLTEMsZ0JBQVUsSUFMTDtBQU1MQyxnQkFBVSxJQU5MO0FBT0xDLGdCQUFVO0FBUEwsSyxRQVNQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsc0JBQWdCLHdCQUFTQyxJQUFULEVBQWU7QUFDN0JDLGdCQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0NGLEtBQUtHLE9BQXJDO0FBQ0EsYUFBS0MsT0FBTCxDQUFhQyxTQUFiLENBQXVCLEVBQUNDLEtBQUksbURBQUwsRUFBdkI7QUFDRCxPQUpPO0FBS1JDLGtCQUFZLHNCQUFXO0FBQ3JCLGFBQUtILE9BQUwsQ0FBYUMsU0FBYixDQUF1QixFQUFDQyxLQUFJLGtDQUFMLEVBQXZCO0FBQ0QsT0FQTztBQVFSRSxtQkFBYSxxQkFBU0MsS0FBVCxFQUFlO0FBQzFCLFlBQUlDLE9BQU8sSUFBWDtBQUNBVCxnQkFBUUMsR0FBUixDQUFZTyxNQUFNRSxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkMsS0FBeEM7QUFDRCxPQVhPO0FBWVJDLHdCQVpRLDhCQVlXQyxDQVpYLEVBWWM7QUFDcEJkLGdCQUFRQyxHQUFSLENBQVlhLENBQVo7QUFDRDtBQWRPLEssUUFnQlZDLE0sR0FBUyxFOzs7Ozs2QkFHVDtBQUNFLFVBQUlOLE9BQU8sSUFBWDs7QUFFQTtBQUNBLG9DQUFjLFVBQVNPLE1BQVQsRUFBaUI7QUFDN0JoQixnQkFBUUMsR0FBUixDQUFZZSxPQUFPNUIsSUFBUCxDQUFZQSxJQUF4QjtBQUNBcUIsYUFBS25CLFVBQUwsR0FBaUIwQixPQUFPNUIsSUFBUCxDQUFZQSxJQUE3QjtBQUNBcUIsYUFBS1EsTUFBTDtBQUVELE9BTEQ7QUFNQTtBQUNBLHVDQUFpQixVQUFTRCxNQUFULEVBQWlCO0FBQ2hDaEIsZ0JBQVFDLEdBQVIsQ0FBWWUsT0FBTzVCLElBQVAsQ0FBWUEsSUFBeEI7QUFDQXFCLGFBQUtwQixhQUFMLEdBQW9CMkIsT0FBTzVCLElBQVAsQ0FBWUEsSUFBaEM7QUFDQXFCLGFBQUtRLE1BQUw7QUFFRCxPQUxEO0FBU0Q7Ozs7RUEzRG9DQyxlQUFLQyxJOztrQkFBdkJ2QyxTIiwiZmlsZSI6InB1cmNoYXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgU3VwcGxpZXJSb3dWaWV3IGZyb20gXCIuL3N1cHBsaWVyUm93Vmlld1wiO1xuICBpbXBvcnQge0dldFN3aXBlckRhdGF9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3B1cmNoYXNlci5qc1wiO1xuICBpbXBvcnQge0dldFN0b3JlTGlzdERhdGF9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3B1cmNoYXNlci5qc1wiO1xuICBpbXBvcnQgeyBSZXF1ZXN0U2VydmljZSB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvcmVxdWVzdC5qcydcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVyY2hhc2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzdXBwbGllclJvd1ZpZXdcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNhbnNodTEuc3luY1wiOlwic3RvcmVMaXN0RGF0YVtpbmRleF1cIixcInhtbG5zOmJpbmRcIjpcIlwiLFwiYmluZDpzdXBwbGllclJvd1ZpZXdUYXBcIjpcInN1cHBsaWVyUm93Vmlld1RhcFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBzdXBwbGllclJvd1ZpZXc6IFN1cHBsaWVyUm93Vmlld1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc3RvcmVMaXN0RGF0YTpbXSxcbiAgICAgIGJhbm5lckxpc3Q6W10sXG4gICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBpbnRlcnZhbDogMjAwMCxcbiAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2VsZWN0U3VwcGxpZXI6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdFN1cHBsaWVyOiAnLCBpdGVtLmNhbnNodTEpXG4gICAgICAgIHRoaXMuJHBhcmVudC4kbmF2aWdhdGUoe3VybDpcIi9wYWdlcy9wdXJjaGFzZXIvY2hvb3NlR29vZHNGcm9tU3VwcGxpZXI/c3RvcmVJZD1cIn0pXG4gICAgICB9LFxuICAgICAgdGVzdEFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJHBhcmVudC4kbmF2aWdhdGUoe3VybDpcIi9wYWdlcy9vdGhlci9vcmRlci90cmFjaW5nU291cmNlXCJ9KVxuICAgICAgfSxcbiAgICAgIG9uSXRlbUNsaWNrOiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpdGxlKTtcbiAgICAgIH0sXG4gICAgICBzdXBwbGllclJvd1ZpZXdUYXAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfVxuICAgIH07XG4gICAgZXZlbnRzID0ge1xuICAgIH07XG4gICAgb25Mb2FkKClcbiAgICB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgIC8v5Yqg6L29YmFubmVy5pWw5o2uXG4gICAgICBHZXRTd2lwZXJEYXRhKGZ1bmN0aW9uKG15RGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhteURhdGEuZGF0YS5kYXRhKTtcbiAgICAgICAgdGhhdC5iYW5uZXJMaXN0ID1teURhdGEuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuXG4gICAgICB9KTtcbiAgICAgIC8v5Yqg6L295bqX6ZO65YiX6KGo5pWw5o2uXG4gICAgICBHZXRTdG9yZUxpc3REYXRhKGZ1bmN0aW9uKG15RGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhteURhdGEuZGF0YS5kYXRhKTtcbiAgICAgICAgdGhhdC5zdG9yZUxpc3REYXRhID1teURhdGEuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuXG4gICAgICB9KTtcblxuXG5cbiAgICB9O1xuXG5cbiAgfVxuIl19