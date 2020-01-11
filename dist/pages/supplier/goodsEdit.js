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

var GoodsEdit = function (_wepy$page) {
  _inherits(GoodsEdit, _wepy$page);

  function GoodsEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsEdit.__proto__ || Object.getPrototypeOf(GoodsEdit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商品管理',
      "usingComponents": {
        "van-popup": "../../components/van/popup"
      }
    }, _this.components = {}, _this.data = {
      chooseTypeShow: false,
      choosePreShow: false,
      chooseUnitShow: false,
      pageHeight: 0
    }, _this.computed = {}, _this.methods = {
      toChooseType: function toChooseType() {
        this.chooseTypeShow = true;
      },
      onChooseTypeClose: function onChooseTypeClose() {
        this.chooseTypeShow = false;
      },
      choosePreAction: function choosePreAction() {
        this.choosePreShow = true;
      },
      closeChoosePreAction: function closeChoosePreAction() {
        this.choosePreShow = false;
      },
      chooseUnitAction: function chooseUnitAction() {
        this.chooseUnitShow = true;
      },
      closeChooseUnitAction: function closeChooseUnitAction() {
        this.chooseUnitShow = false;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodsEdit, [{
    key: 'onLoad',
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

  return GoodsEdit;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(GoodsEdit , 'pages/supplier/goodsEdit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzRWRpdC5qcyJdLCJuYW1lcyI6WyJHb29kc0VkaXQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjaG9vc2VUeXBlU2hvdyIsImNob29zZVByZVNob3ciLCJjaG9vc2VVbml0U2hvdyIsInBhZ2VIZWlnaHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b0Nob29zZVR5cGUiLCJvbkNob29zZVR5cGVDbG9zZSIsImNob29zZVByZUFjdGlvbiIsImNsb3NlQ2hvb3NlUHJlQWN0aW9uIiwiY2hvb3NlVW5pdEFjdGlvbiIsImNsb3NlQ2hvb3NlVW5pdEFjdGlvbiIsImV2ZW50cyIsInRoYXQiLCJxdWVyeSIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImV4ZWMiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiaGVpZ2h0IiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQLHlCQUFtQjtBQUNqQixxQkFBYTtBQURJO0FBRlosSyxRQU1UQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsc0JBQWdCLEtBRFg7QUFFTEMscUJBQWUsS0FGVjtBQUdMQyxzQkFBZ0IsS0FIWDtBQUlMQyxrQkFBWTtBQUpQLEssUUFNUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLG9CQUFjLHdCQUFXO0FBQ3ZCLGFBQUtOLGNBQUwsR0FBc0IsSUFBdEI7QUFDRCxPQUhPO0FBSVJPLHlCQUFtQiw2QkFBVztBQUM1QixhQUFLUCxjQUFMLEdBQXNCLEtBQXRCO0FBQ0QsT0FOTztBQU9SUSx1QkFBaUIsMkJBQVc7QUFDMUIsYUFBS1AsYUFBTCxHQUFxQixJQUFyQjtBQUNELE9BVE87QUFVUlEsNEJBQXNCLGdDQUFXO0FBQy9CLGFBQUtSLGFBQUwsR0FBcUIsS0FBckI7QUFDRCxPQVpPO0FBYVJTLHdCQUFrQiw0QkFBVztBQUMzQixhQUFLUixjQUFMLEdBQXNCLElBQXRCO0FBQ0QsT0FmTztBQWdCUlMsNkJBQXVCLGlDQUFXO0FBQ2hDLGFBQUtULGNBQUwsR0FBc0IsS0FBdEI7QUFDRDtBQWxCTyxLLFFBb0JWVSxNLEdBQVMsRTs7Ozs7NkJBRUE7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFNQyxRQUFRQyxHQUFHQyxtQkFBSCxFQUFkO0FBQ0FGLFlBQU1HLE1BQU4sQ0FBYSxZQUFiLEVBQTJCQyxrQkFBM0I7QUFDQUosWUFBTUssSUFBTixDQUFXLFVBQVNDLEdBQVQsRUFBYTtBQUN0QkMsZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBSSxDQUFKLEVBQU9HLE1BQW5CO0FBQ0FWLGFBQUtWLFVBQUwsR0FBa0JpQixJQUFJLENBQUosRUFBT0csTUFBekI7QUFDQVYsYUFBS1csTUFBTDtBQUNELE9BSkQ7QUFLRDs7OztFQWhEb0NDLGVBQUtDLEk7O2tCQUF2Qi9CLFMiLCJmaWxlIjoiZ29vZHNFZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZHNFZGl0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5ZOB566h55CGJyxcbiAgICAgIFwidXNpbmdDb21wb25lbnRzXCI6IHtcbiAgICAgICAgXCJ2YW4tcG9wdXBcIjogXCIuLi8uLi9jb21wb25lbnRzL3Zhbi9wb3B1cFwiXG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBjaG9vc2VUeXBlU2hvdzogZmFsc2UsXG4gICAgICBjaG9vc2VQcmVTaG93OiBmYWxzZSxcbiAgICAgIGNob29zZVVuaXRTaG93OiBmYWxzZSxcbiAgICAgIHBhZ2VIZWlnaHQ6IDBcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b0Nob29zZVR5cGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNob29zZVR5cGVTaG93ID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIG9uQ2hvb3NlVHlwZUNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jaG9vc2VUeXBlU2hvdyA9IGZhbHNlXG4gICAgICB9LFxuICAgICAgY2hvb3NlUHJlQWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jaG9vc2VQcmVTaG93ID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNsb3NlQ2hvb3NlUHJlQWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jaG9vc2VQcmVTaG93ID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBjaG9vc2VVbml0QWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jaG9vc2VVbml0U2hvdyA9IHRydWVcbiAgICAgIH0sXG4gICAgICBjbG9zZUNob29zZVVuaXRBY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNob29zZVVuaXRTaG93ID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG4gICAgICBxdWVyeS5zZWxlY3QoJy5jb250YWluZXInKS5ib3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgcXVlcnkuZXhlYyhmdW5jdGlvbihyZXMpe1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNbMF0uaGVpZ2h0KVxuICAgICAgICB0aGF0LnBhZ2VIZWlnaHQgPSByZXNbMF0uaGVpZ2h0XG4gICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=