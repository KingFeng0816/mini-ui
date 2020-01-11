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

var PayDataCenter = function (_wepy$page) {
  _inherits(PayDataCenter, _wepy$page);

  function PayDataCenter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PayDataCenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PayDataCenter.__proto__ || Object.getPrototypeOf(PayDataCenter)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '付款统计',
      usingComponents: {
        'van-tab': '../../components/van/tab',
        'van-tabs': '../../components/van/tabs',
        'van-popup': '../../components/van/popup',
        'van-datetime-picker': '../../components/van/datetime-picker/index'
      }
    }, _this.components = {}, _this.data = {
      active: 0,
      changeDayViewShow: false,
      currentYear: 0,
      currentMonth: 0,
      currentDate: new Date().getTime(),
      maxDate: new Date().getTime()
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PayDataCenter, [{
    key: 'onLoad',
    value: function onLoad() {
      var timestamp = Date.parse(new Date());
      var date = new Date(timestamp);

      this.currentYear = date.getFullYear();
      this.currentMonth = date.getMonth() + 1;
    }
  }]);

  return PayDataCenter;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(PayDataCenter , 'pages/other/payDataCenter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheURhdGFDZW50ZXIuanMiXSwibmFtZXMiOlsiUGF5RGF0YUNlbnRlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImFjdGl2ZSIsImNoYW5nZURheVZpZXdTaG93IiwiY3VycmVudFllYXIiLCJjdXJyZW50TW9udGgiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwibWF4RGF0ZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInRpbWVzdGFtcCIsInBhcnNlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG1CQUFXLDBCQURJO0FBRWYsb0JBQVksMkJBRkc7QUFHZixxQkFBYSw0QkFIRTtBQUlmLCtCQUF1QjtBQUpSO0FBRlYsSyxRQVNUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLHlCQUFtQixLQUZkO0FBR0xDLG1CQUFhLENBSFI7QUFJTEMsb0JBQWMsQ0FKVDtBQUtMQyxtQkFBYSxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFMUjtBQU1MQyxlQUFTLElBQUlGLElBQUosR0FBV0MsT0FBWDtBQU5KLEssUUFRUEUsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1AsVUFBSUMsWUFBWU4sS0FBS08sS0FBTCxDQUFXLElBQUlQLElBQUosRUFBWCxDQUFoQjtBQUNBLFVBQUlRLE9BQU8sSUFBSVIsSUFBSixDQUFTTSxTQUFULENBQVg7O0FBRUEsV0FBS1QsV0FBTCxHQUFtQlcsS0FBS0MsV0FBTCxFQUFuQjtBQUNBLFdBQUtYLFlBQUwsR0FBb0JVLEtBQUtFLFFBQUwsS0FBa0IsQ0FBdEM7QUFDRDs7OztFQWhDd0NDLGVBQUtDLEk7O2tCQUEzQnZCLGEiLCJmaWxlIjoicGF5RGF0YUNlbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheURhdGFDZW50ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfku5jmrL7nu5/orqEnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd2YW4tdGFiJzogJy4uLy4uL2NvbXBvbmVudHMvdmFuL3RhYicsXG4gICAgICAgICd2YW4tdGFicyc6ICcuLi8uLi9jb21wb25lbnRzL3Zhbi90YWJzJyxcbiAgICAgICAgJ3Zhbi1wb3B1cCc6ICcuLi8uLi9jb21wb25lbnRzL3Zhbi9wb3B1cCcsXG4gICAgICAgICd2YW4tZGF0ZXRpbWUtcGlja2VyJzogJy4uLy4uL2NvbXBvbmVudHMvdmFuL2RhdGV0aW1lLXBpY2tlci9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGFjdGl2ZTogMCxcbiAgICAgIGNoYW5nZURheVZpZXdTaG93OiBmYWxzZSxcbiAgICAgIGN1cnJlbnRZZWFyOiAwLFxuICAgICAgY3VycmVudE1vbnRoOiAwLFxuICAgICAgY3VycmVudERhdGU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgbWF4RGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgdmFyIHRpbWVzdGFtcCA9IERhdGUucGFyc2UobmV3IERhdGUoKSk7XG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG5cbiAgICAgIHRoaXMuY3VycmVudFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIH1cbiAgfVxuIl19