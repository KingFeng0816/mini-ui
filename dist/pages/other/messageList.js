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

var MessageList = function (_wepy$page) {
  _inherits(MessageList, _wepy$page);

  function MessageList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MessageList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MessageList.__proto__ || Object.getPrototypeOf(MessageList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '消息中心'
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MessageList, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return MessageList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MessageList , 'pages/other/messageList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VMaXN0LmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTyxFLFFBRVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUNSOzs7O0VBZnNDQyxlQUFLQyxJOztrQkFBekJULFciLCJmaWxlIjoibWVzc2FnZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a2iOaBr+S4reW/gydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19