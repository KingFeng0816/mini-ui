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

var _supplier = require('./../store/actions/supplier.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Supplier = function (_wepy$page) {
  _inherits(Supplier, _wepy$page);

  function Supplier() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Supplier);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Supplier.__proto__ || Object.getPrototypeOf(Supplier)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {
      supplierRowView: _supplierRowView2.default
    }, _this.data = {
      flowList: [1],
      bannerList: [],
      titleStr: "",
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500
    }, _this.computed = {}, _this.methods = {

      toFollow: function toFollow() {
        this.$parent.$navigate({ url: '/pages/supplier/toFollow' });
      },
      toQuotation: function toQuotation() {
        this.$parent.$navigate({ url: '/pages/supplier/quotation' });
      },
      onItemClick: function onItemClick(event) {
        console.log(event.currentTarget.dataset.title);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Supplier, [{
    key: "onLoad",
    value: function onLoad() {
      (0, _supplier.GetSwiperData)();
    }
  }, {
    key: "loadBanner",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _supplier.GetSwiperData)();

              case 2:
                this.bannerList = _context.sent;

                console.log('title==' + this.bannerList[0].title);
                this.$apply();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadBanner() {
        return _ref2.apply(this, arguments);
      }

      return loadBanner;
    }()
  }]);

  return Supplier;
}(_wepy2.default.page);

exports.default = Supplier;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyLmpzIl0sIm5hbWVzIjpbIlN1cHBsaWVyIiwiY29uZmlnIiwiY29tcG9uZW50cyIsInN1cHBsaWVyUm93VmlldyIsIlN1cHBsaWVyUm93VmlldyIsImRhdGEiLCJmbG93TGlzdCIsImJhbm5lckxpc3QiLCJ0aXRsZVN0ciIsImluZGljYXRvckRvdHMiLCJ2ZXJ0aWNhbCIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRvRm9sbG93IiwiJHBhcmVudCIsIiRuYXZpZ2F0ZSIsInVybCIsInRvUXVvdGF0aW9uIiwib25JdGVtQ2xpY2siLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRpdGxlIiwiZXZlbnRzIiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFHbkJDLE0sR0FBUyxFLFFBRVRDLFUsR0FBYTtBQUNYQyx1QkFBaUJDO0FBRE4sSyxRQUdiQyxJLEdBQU87QUFDTEMsZ0JBQVUsQ0FBQyxDQUFELENBREw7QUFFTEMsa0JBQVksRUFGUDtBQUdMQyxnQkFBUyxFQUhKO0FBSUxDLHFCQUFlLElBSlY7QUFLTEMsZ0JBQVUsS0FMTDtBQU1MQyxnQkFBVSxLQU5MO0FBT0xDLGdCQUFVLElBUEw7QUFRTEMsZ0JBQVU7QUFSTCxLLFFBV1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTs7QUFFUkMsZ0JBQVUsb0JBQVc7QUFDbkIsYUFBS0MsT0FBTCxDQUFhQyxTQUFiLENBQXVCLEVBQUNDLEtBQUksMEJBQUwsRUFBdkI7QUFDRCxPQUpPO0FBS1JDLG1CQUFhLHVCQUFXO0FBQ3RCLGFBQUtILE9BQUwsQ0FBYUMsU0FBYixDQUF1QixFQUFDQyxLQUFJLDJCQUFMLEVBQXZCO0FBQ0QsT0FQTztBQVFSRSxtQkFBYSxxQkFBU0MsS0FBVCxFQUFlO0FBQzFCQyxnQkFBUUMsR0FBUixDQUFZRixNQUFNRyxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkMsS0FBeEM7QUFHRDtBQVpPLEssUUE4QlZDLE0sR0FBUyxFOzs7Ozs2QkFiVDtBQUNFO0FBRUQ7Ozs7Ozs7Ozs7dUJBS3lCLDhCOzs7QUFBeEIscUJBQUtyQixVOztBQUNMZ0Isd0JBQVFDLEdBQVIsQ0FBWSxZQUFVLEtBQUtqQixVQUFMLENBQWdCLENBQWhCLEVBQW1Cb0IsS0FBekM7QUFDQSxxQkFBS0UsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpEa0NDLGVBQUtDLEk7O2tCQUF0Qi9CLFEiLCJmaWxlIjoic3VwcGxpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFN1cHBsaWVyUm93VmlldyBmcm9tIFwiLi9zdXBwbGllclJvd1ZpZXdcIjtcbiAgaW1wb3J0IHtHZXRTd2lwZXJEYXRhfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy9zdXBwbGllci5qc1wiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBsaWVyIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuXG4gICAgY29uZmlnID0ge1xuICAgIH07XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIHN1cHBsaWVyUm93VmlldzogU3VwcGxpZXJSb3dWaWV3XG4gICAgfTtcbiAgICBkYXRhID0ge1xuICAgICAgZmxvd0xpc3Q6IFsxXSxcbiAgICAgIGJhbm5lckxpc3Q6IFtdLFxuICAgICAgdGl0bGVTdHI6XCJcIixcbiAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBpbnRlcnZhbDogMjAwMCxcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9O1xuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG5cbiAgICAgIHRvRm9sbG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50LiRuYXZpZ2F0ZSh7dXJsOicvcGFnZXMvc3VwcGxpZXIvdG9Gb2xsb3cnfSlcbiAgICAgIH0sXG4gICAgICB0b1F1b3RhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJHBhcmVudC4kbmF2aWdhdGUoe3VybDonL3BhZ2VzL3N1cHBsaWVyL3F1b3RhdGlvbid9KVxuICAgICAgfSxcbiAgICAgIG9uSXRlbUNsaWNrOiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aXRsZSk7XG5cblxuICAgICAgfVxuICAgIH07XG5cblxuICAgIG9uTG9hZCgpXG4gICAge1xuICAgICAgR2V0U3dpcGVyRGF0YSgpO1xuXG4gICAgfVxuXG5cbiAgICBhc3luYyBsb2FkQmFubmVyKClcbiAgICB7XG4gICAgICB0aGlzLmJhbm5lckxpc3QgPSBhd2FpdCBHZXRTd2lwZXJEYXRhKCk7XG4gICAgICBjb25zb2xlLmxvZygndGl0bGU9PScrdGhpcy5iYW5uZXJMaXN0WzBdLnRpdGxlKTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH07XG5cblxuICB9XG4iXX0=