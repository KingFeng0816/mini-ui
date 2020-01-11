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

var SupplierDetail = function (_wepy$page) {
  _inherits(SupplierDetail, _wepy$page);

  function SupplierDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SupplierDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SupplierDetail.__proto__ || Object.getPrototypeOf(SupplierDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {
      enquiryQualification: function enquiryQualification() {
        this.$navigate({ url: "/pages/supplier/qualificationEnquiry" });
      },
      incomingInquiry: function incomingInquiry() {
        this.$navigate({ url: "/pages/supplier/incomingInquiry" });
      },
      testReport: function testReport() {
        this.$navigate({ url: "/pages/supplier/testReport" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SupplierDetail, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return SupplierDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(SupplierDetail , 'pages/supplier/supplierDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyRGV0YWlsLmpzIl0sIm5hbWVzIjpbIlN1cHBsaWVyRGV0YWlsIiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJlbnF1aXJ5UXVhbGlmaWNhdGlvbiIsIiRuYXZpZ2F0ZSIsInVybCIsImluY29taW5nSW5xdWlyeSIsInRlc3RSZXBvcnQiLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxNLEdBQVMsRSxRQUVUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU8sRSxRQUVQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsNEJBQXNCLGdDQUFXO0FBQy9CLGFBQUtDLFNBQUwsQ0FBZSxFQUFDQyxLQUFJLHNDQUFMLEVBQWY7QUFDRCxPQUhPO0FBSVJDLHVCQUFpQiwyQkFBVztBQUMxQixhQUFLRixTQUFMLENBQWUsRUFBQ0MsS0FBSSxpQ0FBTCxFQUFmO0FBQ0QsT0FOTztBQU9SRSxrQkFBWSxzQkFBVztBQUNyQixhQUFLSCxTQUFMLENBQWUsRUFBQ0MsS0FBSSw0QkFBTCxFQUFmO0FBQ0Q7QUFUTyxLLFFBV1ZHLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUNSOzs7O0VBdkJ5Q0MsZUFBS0MsSTs7a0JBQTVCYixjIiwiZmlsZSI6InN1cHBsaWVyRGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcGxpZXJEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBlbnF1aXJ5UXVhbGlmaWNhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvc3VwcGxpZXIvcXVhbGlmaWNhdGlvbkVucXVpcnlcIn0pXG4gICAgICB9LFxuICAgICAgaW5jb21pbmdJbnF1aXJ5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe3VybDpcIi9wYWdlcy9zdXBwbGllci9pbmNvbWluZ0lucXVpcnlcIn0pXG4gICAgICB9LFxuICAgICAgdGVzdFJlcG9ydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHt1cmw6XCIvcGFnZXMvc3VwcGxpZXIvdGVzdFJlcG9ydFwifSlcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=