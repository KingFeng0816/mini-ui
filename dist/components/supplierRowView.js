'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SupplierRowView = function (_wepy$component) {
  _inherits(SupplierRowView, _wepy$component);

  function SupplierRowView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SupplierRowView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SupplierRowView.__proto__ || Object.getPrototypeOf(SupplierRowView)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      canshu1: {
        type: Object,
        default: null
      }
    }, _this.config = {}, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {
      supplierRowViewTap: function supplierRowViewTap(e) {
        console.log(e.currentTarget.id);
        var currentID = e.currentTarget.id;
        this.triggerEvent('supplierRowViewTap', {
          currentID: currentID
        }, {});
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SupplierRowView, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SupplierRowView;
}(_wepy2.default.component);

exports.default = SupplierRowView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyUm93Vmlldy5qcyJdLCJuYW1lcyI6WyJTdXBwbGllclJvd1ZpZXciLCJwcm9wcyIsImNhbnNodTEiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic3VwcGxpZXJSb3dWaWV3VGFwIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJjdXJyZW50SUQiLCJ0cmlnZ2VyRXZlbnQiLCJldmVudHMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGNBQU1DLE1BREM7QUFFUEMsaUJBQVM7QUFGRjtBQURILEssUUFNUkMsTSxHQUFTLEUsUUFFVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPLEUsUUFFUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLHdCQURRLDhCQUNXQyxDQURYLEVBQ2M7QUFDcEJDLGdCQUFRQyxHQUFSLENBQVlGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTVCO0FBQ0EsWUFBSUMsWUFBWUwsRUFBRUcsYUFBRixDQUFnQkMsRUFBaEM7QUFDQSxhQUFLRSxZQUFMLENBQWtCLG9CQUFsQixFQUF3QztBQUN0Q0QscUJBQVVBO0FBRDRCLFNBQXhDLEVBRUcsRUFGSDtBQUdEO0FBUE8sSyxRQVNWRSxNLEdBQVMsRTs7Ozs7NkJBRUEsQ0FDUjs7OztFQTVCMENDLGVBQUtDLFM7O2tCQUE3QnJCLGUiLCJmaWxlIjoic3VwcGxpZXJSb3dWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcGxpZXJSb3dWaWV3IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgY2Fuc2h1MToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgIH1cbiAgICB9XG4gICAgY29uZmlnID0ge1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgc3VwcGxpZXJSb3dWaWV3VGFwKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmlkKVxuICAgICAgICB2YXIgY3VycmVudElEID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdzdXBwbGllclJvd1ZpZXdUYXAnLCB7XG4gICAgICAgICAgY3VycmVudElEOmN1cnJlbnRJRFxuICAgICAgICB9LCB7fSlcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=