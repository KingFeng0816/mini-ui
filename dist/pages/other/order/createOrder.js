'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _dialog = require('./../../../components/van/dialog/dialog.js');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateOrder = function (_wepy$page) {
  _inherits(CreateOrder, _wepy$page);

  function CreateOrder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CreateOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateOrder.__proto__ || Object.getPrototypeOf(CreateOrder)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '提交订单',
      usingComponents: {
        'van-popup': '../../../components/van/popup',
        'van-datetime-picker': '../../../components/van/datetime-picker',
        'van-dialog': '../../../components/van/dialog'
      }
    }, _this.components = {}, _this.data = {
      changeDayViewShow: false,
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      formatter: function formatter(type, value) {
        if (type === 'year') {
          return value + '\u5E74';
        } else if (type === 'month') {
          return value + '\u6708';
        } else if (type === 'day') {
          return value + '\u65E5';
        } else if (type === 'hour') {
          return value + '\u65F6';
        } else {
          return value + '\u5206';
        }
      }
    }, _this.computed = {}, _this.methods = {
      toChooseAddress: function toChooseAddress() {
        this.$navigate({ url: "../address/addressCenter" });
      },
      toChangeDay: function toChangeDay(item) {
        this.changeDayViewShow = true;
      },
      onConfirm: function onConfirm(event) {
        console.log(event);

        var date = new Date(event.detail);
        this.changeDayViewShow = false;
      },
      onCancel: function onCancel() {
        this.changeDayViewShow = false;
      },
      toSubmit: function toSubmit() {
        _dialog2.default.confirm({
          message: '提交订单后将由供应商进行订单确认，是否继续提交订单？'
        }).then(function () {
          // on confirm
        }).catch(function () {
          // on cancel
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CreateOrder, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return CreateOrder;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(CreateOrder , 'pages/other/order/createOrder'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZU9yZGVyLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZU9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiY2hhbmdlRGF5Vmlld1Nob3ciLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwibWluRGF0ZSIsImZvcm1hdHRlciIsInR5cGUiLCJ2YWx1ZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRvQ2hvb3NlQWRkcmVzcyIsIiRuYXZpZ2F0ZSIsInVybCIsInRvQ2hhbmdlRGF5IiwiaXRlbSIsIm9uQ29uZmlybSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImRhdGUiLCJkZXRhaWwiLCJvbkNhbmNlbCIsInRvU3VibWl0IiwiRGlhbG9nIiwiY29uZmlybSIsIm1lc3NhZ2UiLCJ0aGVuIiwiY2F0Y2giLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsdUJBQWlCO0FBQ2YscUJBQWEsK0JBREU7QUFFZiwrQkFBdUIseUNBRlI7QUFHZixzQkFBYztBQUhDO0FBRlYsSyxRQVFUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMseUJBQW1CLEtBRGQ7QUFFTEMsbUJBQWEsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBRlI7QUFHTEMsZUFBUyxJQUFJRixJQUFKLEdBQVdDLE9BQVgsRUFISjtBQUlMRSxlQUpLLHFCQUlLQyxJQUpMLEVBSVdDLEtBSlgsRUFJa0I7QUFDckIsWUFBSUQsU0FBUyxNQUFiLEVBQXFCO0FBQ25CLGlCQUFVQyxLQUFWO0FBQ0QsU0FGRCxNQUVPLElBQUlELFNBQVMsT0FBYixFQUFzQjtBQUMzQixpQkFBVUMsS0FBVjtBQUNELFNBRk0sTUFFQSxJQUFJRCxTQUFTLEtBQWIsRUFBb0I7QUFDekIsaUJBQVVDLEtBQVY7QUFDRCxTQUZNLE1BRUEsSUFBSUQsU0FBUyxNQUFiLEVBQXFCO0FBQzFCLGlCQUFVQyxLQUFWO0FBQ0QsU0FGTSxNQUVBO0FBQ0wsaUJBQVVBLEtBQVY7QUFDRDtBQUNGO0FBaEJJLEssUUFrQlBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyx1QkFBaUIsMkJBQVc7QUFDMUIsYUFBS0MsU0FBTCxDQUFlLEVBQUNDLEtBQUksMEJBQUwsRUFBZjtBQUNELE9BSE87QUFJUkMsbUJBQWEscUJBQVNDLElBQVQsRUFBZTtBQUMxQixhQUFLZCxpQkFBTCxHQUF5QixJQUF6QjtBQUNELE9BTk87QUFPUmUsaUJBQVcsbUJBQVNDLEtBQVQsRUFBZ0I7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlGLEtBQVo7O0FBRUEsWUFBSUcsT0FBTyxJQUFJakIsSUFBSixDQUFTYyxNQUFNSSxNQUFmLENBQVg7QUFDQSxhQUFLcEIsaUJBQUwsR0FBeUIsS0FBekI7QUFDRCxPQVpPO0FBYVJxQixnQkFBVSxvQkFBVztBQUNuQixhQUFLckIsaUJBQUwsR0FBeUIsS0FBekI7QUFDRCxPQWZPO0FBZ0JSc0IsZ0JBQVUsb0JBQVc7QUFDbkJDLHlCQUFPQyxPQUFQLENBQWU7QUFDYkMsbUJBQVM7QUFESSxTQUFmLEVBRUdDLElBRkgsQ0FFUSxZQUFNO0FBQ1o7QUFDRCxTQUpELEVBSUdDLEtBSkgsQ0FJUyxZQUFNO0FBQ2I7QUFDRCxTQU5EO0FBT0Q7QUF4Qk8sSyxRQTBCVkMsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQ1I7Ozs7RUE1RHNDQyxlQUFLQyxJOztrQkFBekJwQyxXIiwiZmlsZSI6ImNyZWF0ZU9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBEaWFsb2cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy92YW4vZGlhbG9nL2RpYWxvZyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlT3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmj5DkuqTorqLljZUnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd2YW4tcG9wdXAnOiAnLi4vLi4vLi4vY29tcG9uZW50cy92YW4vcG9wdXAnLFxuICAgICAgICAndmFuLWRhdGV0aW1lLXBpY2tlcic6ICcuLi8uLi8uLi9jb21wb25lbnRzL3Zhbi9kYXRldGltZS1waWNrZXInLFxuICAgICAgICAndmFuLWRpYWxvZyc6ICcuLi8uLi8uLi9jb21wb25lbnRzL3Zhbi9kaWFsb2cnXG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBjaGFuZ2VEYXlWaWV3U2hvdzogZmFsc2UsXG4gICAgICBjdXJyZW50RGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgIGZvcm1hdHRlcih0eXBlLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3llYXInKSB7XG4gICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfeW5tGA7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ21vbnRoJykge1xuICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX3mnIhgO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkYXknKSB7XG4gICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfeaXpWA7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2hvdXInKSB7XG4gICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfeaXtmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfeWIhmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b0Nob29zZUFkZHJlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOlwiLi4vYWRkcmVzcy9hZGRyZXNzQ2VudGVyXCJ9KVxuICAgICAgfSxcbiAgICAgIHRvQ2hhbmdlRGF5OiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRGF5Vmlld1Nob3cgPSB0cnVlXG4gICAgICB9LFxuICAgICAgb25Db25maXJtOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudClcblxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRldGFpbCk7XG4gICAgICAgIHRoaXMuY2hhbmdlRGF5Vmlld1Nob3cgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIG9uQ2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VEYXlWaWV3U2hvdyA9IGZhbHNlXG4gICAgICB9LFxuICAgICAgdG9TdWJtaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBEaWFsb2cuY29uZmlybSh7XG4gICAgICAgICAgbWVzc2FnZTogJ+aPkOS6pOiuouWNleWQjuWwhueUseS+m+W6lOWVhui/m+ihjOiuouWNleehruiupO+8jOaYr+WQpue7p+e7reaPkOS6pOiuouWNle+8nydcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gb24gY29uZmlybVxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgLy8gb24gY2FuY2VsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==