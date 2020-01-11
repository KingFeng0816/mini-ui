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

var HelpCenter = function (_wepy$page) {
  _inherits(HelpCenter, _wepy$page);

  function HelpCenter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HelpCenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HelpCenter.__proto__ || Object.getPrototypeOf(HelpCenter)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {
      qa: [{
        "q": "如何登陆智慧安鲜系统？",
        "a": "请您使用微信公众号搜索功能，输入“智慧安鲜”，关注本公众号之后，您可通过点击下方「首页」进入智慧安鲜系统。"
      }, {
        "q": "如何在系统内下单？",
        "a": "请您使用微信公众号搜索功能，输入“智慧安鲜”，关注本公众号之后，您可通过点击下方「首页」进入智慧安鲜系统。请您使用微信公众号搜索功能，输入“智慧安鲜”，关注本公众号之后，您可通过点击下方「首页」进入智慧安鲜系统。"
      }, {
        "q": "如何联系客服？",
        "a": "您可拨打客服热线400-010-9988\n工作时间：周一至周五9:00-18:00"
      }, {
        "q": "如何联系采购方？",
        "a": "请您使用微信公众号搜索功能，输入“智慧安鲜”，关注本公众号之后，您可通过点击下方「首页」进入智慧安鲜系统。请您使用微信公众号搜索功能，输入“智慧安鲜”，关注本公众号之后，您可通过点击下方「首页」进入智慧安鲜系统。"
      }]
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HelpCenter, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return HelpCenter;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(HelpCenter , 'pages/other/helpCenter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBDZW50ZXIuanMiXSwibmFtZXMiOlsiSGVscENlbnRlciIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJkYXRhIiwicWEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVMsRSxRQUVUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsVUFBSSxDQUNGO0FBQ0UsYUFBSyxhQURQO0FBRUUsYUFBSztBQUZQLE9BREUsRUFLRjtBQUNFLGFBQUssV0FEUDtBQUVFLGFBQUs7QUFGUCxPQUxFLEVBU0Y7QUFDRSxhQUFLLFNBRFA7QUFFRSxhQUFLO0FBRlAsT0FURSxFQWFGO0FBQ0UsYUFBSyxVQURQO0FBRUUsYUFBSztBQUZQLE9BYkU7QUFEQyxLLFFBb0JQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRTs7Ozs7NkJBRUEsQ0FDUjs7OztFQWhDcUNDLGVBQUtDLEk7O2tCQUF4QlQsVSIsImZpbGUiOiJoZWxwQ2VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscENlbnRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgcWE6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwicVwiOiBcIuWmguS9leeZu+mZhuaZuuaFp+WuiemynOezu+e7n++8n1wiLFxuICAgICAgICAgIFwiYVwiOiBcIuivt+aCqOS9v+eUqOW+ruS/oeWFrOS8l+WPt+aQnOe0ouWKn+iDve+8jOi+k+WFpeKAnOaZuuaFp+WuiemynOKAne+8jOWFs+azqOacrOWFrOS8l+WPt+S5i+WQju+8jOaCqOWPr+mAmui/h+eCueWHu+S4i+aWueOAjOmmlumhteOAjei/m+WFpeaZuuaFp+WuiemynOezu+e7n+OAglwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInFcIjogXCLlpoLkvZXlnKjns7vnu5/lhoXkuIvljZXvvJ9cIixcbiAgICAgICAgICBcImFcIjogXCLor7fmgqjkvb/nlKjlvq7kv6HlhazkvJflj7fmkJzntKLlip/og73vvIzovpPlhaXigJzmmbrmhaflronpspzigJ3vvIzlhbPms6jmnKzlhazkvJflj7fkuYvlkI7vvIzmgqjlj6/pgJrov4fngrnlh7vkuIvmlrnjgIzpppbpobXjgI3ov5vlhaXmmbrmhaflronpspzns7vnu5/jgILor7fmgqjkvb/nlKjlvq7kv6HlhazkvJflj7fmkJzntKLlip/og73vvIzovpPlhaXigJzmmbrmhaflronpspzigJ3vvIzlhbPms6jmnKzlhazkvJflj7fkuYvlkI7vvIzmgqjlj6/pgJrov4fngrnlh7vkuIvmlrnjgIzpppbpobXjgI3ov5vlhaXmmbrmhaflronpspzns7vnu5/jgIJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJxXCI6IFwi5aaC5L2V6IGU57O75a6i5pyN77yfXCIsXG4gICAgICAgICAgXCJhXCI6IFwi5oKo5Y+v5ouo5omT5a6i5pyN54Ot57q/NDAwLTAxMC05OTg4XFxu5bel5L2c5pe26Ze077ya5ZGo5LiA6Iez5ZGo5LqUOTowMC0xODowMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInFcIjogXCLlpoLkvZXogZTns7vph4fotK3mlrnvvJ9cIixcbiAgICAgICAgICBcImFcIjogXCLor7fmgqjkvb/nlKjlvq7kv6HlhazkvJflj7fmkJzntKLlip/og73vvIzovpPlhaXigJzmmbrmhaflronpspzigJ3vvIzlhbPms6jmnKzlhazkvJflj7fkuYvlkI7vvIzmgqjlj6/pgJrov4fngrnlh7vkuIvmlrnjgIzpppbpobXjgI3ov5vlhaXmmbrmhaflronpspzns7vnu5/jgILor7fmgqjkvb/nlKjlvq7kv6HlhazkvJflj7fmkJzntKLlip/og73vvIzovpPlhaXigJzmmbrmhaflronpspzigJ3vvIzlhbPms6jmnKzlhazkvJflj7fkuYvlkI7vvIzmgqjlj6/pgJrov4fngrnlh7vkuIvmlrnjgIzpppbpobXjgI3ov5vlhaXmmbrmhaflronpspzns7vnu5/jgIJcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==