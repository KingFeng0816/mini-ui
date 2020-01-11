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

var QualificationEnquiry = function (_wepy$page) {
  _inherits(QualificationEnquiry, _wepy$page);

  function QualificationEnquiry() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, QualificationEnquiry);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = QualificationEnquiry.__proto__ || Object.getPrototypeOf(QualificationEnquiry)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '资质查询'
    }, _this.components = {}, _this.data = {
      images: ["http://pimg.39.net/PictureLib/A/f76/20170125/org_905687.jpg", "http://baoliao.oeeee.com/upload/2/2014-0/650XH/62df72e8-a41a-4386-973b-f8b93e98d8f0.jpg"]
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(QualificationEnquiry, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return QualificationEnquiry;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(QualificationEnquiry , 'pages/supplier/qualificationEnquiry'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YWxpZmljYXRpb25FbnF1aXJ5LmpzIl0sIm5hbWVzIjpbIlF1YWxpZmljYXRpb25FbnF1aXJ5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1hZ2VzIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLG9COzs7Ozs7Ozs7Ozs7OztrTkFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsY0FBUSxDQUNOLDZEQURNLEVBRU4seUZBRk07QUFESCxLLFFBTVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUNSOzs7O0VBbkIrQ0MsZUFBS0MsSTs7a0JBQWxDVixvQiIsImZpbGUiOiJxdWFsaWZpY2F0aW9uRW5xdWlyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1YWxpZmljYXRpb25FbnF1aXJ5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LWE6LSo5p+l6K+iJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgaW1hZ2VzOiBbXG4gICAgICAgIFwiaHR0cDovL3BpbWcuMzkubmV0L1BpY3R1cmVMaWIvQS9mNzYvMjAxNzAxMjUvb3JnXzkwNTY4Ny5qcGdcIixcbiAgICAgICAgXCJodHRwOi8vYmFvbGlhby5vZWVlZS5jb20vdXBsb2FkLzIvMjAxNC0wLzY1MFhILzYyZGY3MmU4LWE0MWEtNDM4Ni05NzNiLWY4YjkzZTk4ZDhmMC5qcGdcIlxuICAgICAgXVxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=