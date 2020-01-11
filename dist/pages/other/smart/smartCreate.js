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

var SmartCreate = function (_wepy$page) {
  _inherits(SmartCreate, _wepy$page);

  function SmartCreate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SmartCreate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmartCreate.__proto__ || Object.getPrototypeOf(SmartCreate)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '新建',
      usingComponents: {
        'van-popup': '../../../components/van/popup',
        'van-datetime-picker': '../../../components/van/datetime-picker/index'
      }
    }, _this.components = {}, _this.data = {
      changeDayViewShow: false,
      currentDay: 0,
      currentDate: new Date().getTime(),
      minDate: new Date().getTime()
    }, _this.computed = {}, _this.methods = {
      toChangeDay: function toChangeDay() {
        this.changeDayViewShow = true;
      },
      onConfirm: function onConfirm(event) {
        console.log(event);

        var date = new Date(event.detail);

        this.currentDay = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        this.currentDate = date;
        this.changeDayViewShow = false;
      },
      onCancel: function onCancel() {
        this.changeDayViewShow = false;
      },
      toGenerate: function toGenerate() {
        this.$navigate({ url: "smartGenerateRawMaterials" });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SmartCreate, [{
    key: 'onLoad',
    value: function onLoad() {
      var timestamp = Date.parse(new Date());
      var date = new Date(timestamp);
      this.currentDay = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }
  }]);

  return SmartCreate;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(SmartCreate , 'pages/other/smart/smartCreate'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0Q3JlYXRlLmpzIl0sIm5hbWVzIjpbIlNtYXJ0Q3JlYXRlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiY2hhbmdlRGF5Vmlld1Nob3ciLCJjdXJyZW50RGF5IiwiY3VycmVudERhdGUiLCJEYXRlIiwiZ2V0VGltZSIsIm1pbkRhdGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b0NoYW5nZURheSIsIm9uQ29uZmlybSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImRhdGUiLCJkZXRhaWwiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsIm9uQ2FuY2VsIiwidG9HZW5lcmF0ZSIsIiRuYXZpZ2F0ZSIsInVybCIsImV2ZW50cyIsInRpbWVzdGFtcCIsInBhcnNlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyx1QkFBaUI7QUFDZixxQkFBYSwrQkFERTtBQUVmLCtCQUF1QjtBQUZSO0FBRlYsSyxRQU9UQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMseUJBQW1CLEtBRGQ7QUFFTEMsa0JBQVksQ0FGUDtBQUdMQyxtQkFBYSxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFIUjtBQUlMQyxlQUFTLElBQUlGLElBQUosR0FBV0MsT0FBWDtBQUpKLEssUUFNUEUsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLG1CQUFhLHVCQUFXO0FBQ3RCLGFBQUtSLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0QsT0FITztBQUlSUyxpQkFBVyxtQkFBU0MsS0FBVCxFQUFnQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWUYsS0FBWjs7QUFFQSxZQUFJRyxPQUFPLElBQUlWLElBQUosQ0FBU08sTUFBTUksTUFBZixDQUFYOztBQUVBLGFBQUtiLFVBQUwsR0FBa0JZLEtBQUtFLFdBQUwsS0FBcUIsR0FBckIsSUFBNEJGLEtBQUtHLFFBQUwsS0FBa0IsQ0FBOUMsSUFBbUQsR0FBbkQsR0FBeURILEtBQUtJLE9BQUwsRUFBM0U7QUFDQSxhQUFLZixXQUFMLEdBQW1CVyxJQUFuQjtBQUNBLGFBQUtiLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0QsT0FaTztBQWFSa0IsZ0JBQVUsb0JBQVc7QUFDbkIsYUFBS2xCLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0QsT0FmTztBQWdCUm1CLGtCQUFZLHNCQUFXO0FBQ3JCLGFBQUtDLFNBQUwsQ0FBZSxFQUFDQyxLQUFJLDJCQUFMLEVBQWY7QUFDRDtBQWxCTyxLLFFBb0JWQyxNLEdBQVMsRTs7Ozs7NkJBRUE7QUFDUCxVQUFJQyxZQUFZcEIsS0FBS3FCLEtBQUwsQ0FBVyxJQUFJckIsSUFBSixFQUFYLENBQWhCO0FBQ0EsVUFBSVUsT0FBTyxJQUFJVixJQUFKLENBQVNvQixTQUFULENBQVg7QUFDQSxXQUFLdEIsVUFBTCxHQUFrQlksS0FBS0UsV0FBTCxLQUFxQixHQUFyQixJQUE0QkYsS0FBS0csUUFBTCxLQUFrQixDQUE5QyxJQUFtRCxHQUFuRCxHQUF5REgsS0FBS0ksT0FBTCxFQUEzRTtBQUNEOzs7O0VBNUNzQ1EsZUFBS0MsSTs7a0JBQXpCaEMsVyIsImZpbGUiOiJzbWFydENyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0Q3JlYXRlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5paw5bu6JyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAndmFuLXBvcHVwJzogJy4uLy4uLy4uL2NvbXBvbmVudHMvdmFuL3BvcHVwJyxcbiAgICAgICAgJ3Zhbi1kYXRldGltZS1waWNrZXInOiAnLi4vLi4vLi4vY29tcG9uZW50cy92YW4vZGF0ZXRpbWUtcGlja2VyL2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgY2hhbmdlRGF5Vmlld1Nob3c6IGZhbHNlLFxuICAgICAgY3VycmVudERheTogMCxcbiAgICAgIGN1cnJlbnREYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9DaGFuZ2VEYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNoYW5nZURheVZpZXdTaG93ID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIG9uQ29uZmlybTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG5cbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShldmVudC5kZXRhaWwpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudERheSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyBkYXRlLmdldERhdGUoKVxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZVxuICAgICAgICB0aGlzLmNoYW5nZURheVZpZXdTaG93ID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBvbkNhbmNlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRGF5Vmlld1Nob3cgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIHRvR2VuZXJhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOlwic21hcnRHZW5lcmF0ZVJhd01hdGVyaWFsc1wifSlcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICB2YXIgdGltZXN0YW1wID0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKTtcbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKVxuICAgICAgdGhpcy5jdXJyZW50RGF5ID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi1cIiArIGRhdGUuZ2V0RGF0ZSgpXG4gICAgfVxuICB9XG4iXX0=