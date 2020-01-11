'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

var indexList = function indexList() {
    var indexList = [];
    var charCodeOfA = 'A'.charCodeAt(0);
    for (var i = 0; i < 26; i++) {
        indexList.push(String.fromCharCode(charCodeOfA + i));
    }
    return indexList;
};
(0, _component.VantComponent)({
    relation: {
        name: 'index-anchor',
        type: 'descendant',
        linked: function linked() {
            this.updateData();
        },
        linkChanged: function linkChanged() {
            this.updateData();
        },
        unlinked: function unlinked() {
            this.updateData();
        }
    },
    props: {
        sticky: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        },
        highlightColor: {
            type: String,
            value: _color.GREEN
        },
        scrollTop: {
            type: Number,
            value: 0,
            observer: 'onScroll'
        },
        stickyOffsetTop: {
            type: Number,
            value: 0
        },
        indexList: {
            type: Array,
            value: indexList()
        }
    },
    data: {
        activeAnchorIndex: null,
        showSidebar: false
    },
    methods: {
        updateData: function updateData() {
            var _this = this;

            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                _this.children = _this.getRelationNodes('../index-anchor/index');
                _this.setData({
                    showSidebar: !!_this.children.length
                });
                _this.setRect().then(function () {
                    _this.onScroll();
                });
            }, 0);
        },
        setRect: function setRect() {
            return Promise.all([this.setAnchorsRect(), this.setListRect(), this.setSiderbarRect()]);
        },
        setAnchorsRect: function setAnchorsRect() {
            var _this2 = this;

            return Promise.all(this.children.map(function (anchor) {
                return anchor.getRect('.van-index-anchor-wrapper').then(function (rect) {
                    Object.assign(anchor, {
                        height: rect.height,
                        top: rect.top + _this2.data.scrollTop
                    });
                });
            }));
        },
        setListRect: function setListRect() {
            var _this3 = this;

            return this.getRect('.van-index-bar').then(function (rect) {
                Object.assign(_this3, {
                    height: rect.height,
                    top: rect.top + _this3.data.scrollTop
                });
            });
        },
        setSiderbarRect: function setSiderbarRect() {
            var _this4 = this;

            return this.getRect('.van-index-bar__sidebar').then(function (res) {
                _this4.sidebar = {
                    height: res.height,
                    top: res.top
                };
            });
        },
        setDiffData: function setDiffData(_ref) {
            var target = _ref.target,
                data = _ref.data;

            var diffData = {};
            Object.keys(data).forEach(function (key) {
                if (target.data[key] !== data[key]) {
                    diffData[key] = data[key];
                }
            });
            if (Object.keys(diffData).length) {
                target.setData(diffData);
            }
        },
        getAnchorRect: function getAnchorRect(anchor) {
            return anchor.getRect('.van-index-anchor-wrapper').then(function (rect) {
                return {
                    height: rect.height,
                    top: rect.top
                };
            });
        },
        getActiveAnchorIndex: function getActiveAnchorIndex() {
            var children = this.children;
            var _data = this.data,
                sticky = _data.sticky,
                scrollTop = _data.scrollTop,
                stickyOffsetTop = _data.stickyOffsetTop;

            for (var i = this.children.length - 1; i >= 0; i--) {
                var preAnchorHeight = i > 0 ? children[i - 1].height : 0;
                var reachTop = sticky ? preAnchorHeight + stickyOffsetTop : 0;
                if (reachTop + scrollTop >= children[i].top) {
                    return i;
                }
            }
            return -1;
        },
        onScroll: function onScroll() {
            var _this5 = this;

            var _children = this.children,
                children = _children === undefined ? [] : _children;

            if (!children.length) {
                return;
            }
            var _data2 = this.data,
                sticky = _data2.sticky,
                stickyOffsetTop = _data2.stickyOffsetTop,
                zIndex = _data2.zIndex,
                highlightColor = _data2.highlightColor,
                scrollTop = _data2.scrollTop;

            var active = this.getActiveAnchorIndex();
            this.setDiffData({
                target: this,
                data: {
                    activeAnchorIndex: active
                }
            });
            if (sticky) {
                var isActiveAnchorSticky = false;
                if (active !== -1) {
                    isActiveAnchorSticky = children[active].top <= stickyOffsetTop + scrollTop;
                }
                children.forEach(function (item, index) {
                    if (index === active) {
                        var wrapperStyle = '';
                        var anchorStyle = '\n              color: ' + highlightColor + ';\n            ';
                        if (isActiveAnchorSticky) {
                            wrapperStyle = '\n                height: ' + children[index].height + 'px;\n              ';
                            anchorStyle = '\n                position: fixed;\n                top: ' + stickyOffsetTop + 'px;\n                z-index: ' + zIndex + ';\n                color: ' + highlightColor + ';\n              ';
                        }
                        _this5.setDiffData({
                            target: item,
                            data: {
                                active: true,
                                anchorStyle: anchorStyle,
                                wrapperStyle: wrapperStyle
                            }
                        });
                    } else if (index === active - 1) {
                        var currentAnchor = children[index];
                        var currentOffsetTop = currentAnchor.top;
                        var targetOffsetTop = index === children.length - 1 ? _this5.top : children[index + 1].top;
                        var parentOffsetHeight = targetOffsetTop - currentOffsetTop;
                        var translateY = parentOffsetHeight - currentAnchor.height;
                        var _anchorStyle = '\n              position: relative;\n              transform: translate3d(0, ' + translateY + 'px, 0);\n              z-index: ' + zIndex + ';\n              color: ' + highlightColor + ';\n            ';
                        _this5.setDiffData({
                            target: item,
                            data: {
                                active: true,
                                anchorStyle: _anchorStyle
                            }
                        });
                    } else {
                        _this5.setDiffData({
                            target: item,
                            data: {
                                active: false,
                                anchorStyle: '',
                                wrapperStyle: ''
                            }
                        });
                    }
                });
            }
        },
        onClick: function onClick(event) {
            this.scrollToAnchor(event.target.dataset.index);
        },
        onTouchMove: function onTouchMove(event) {
            var sidebarLength = this.children.length;
            var touch = event.touches[0];
            var itemHeight = this.sidebar.height / sidebarLength;
            var index = Math.floor((touch.clientY - this.sidebar.top) / itemHeight);
            if (index < 0) {
                index = 0;
            } else if (index > sidebarLength - 1) {
                index = sidebarLength - 1;
            }
            this.scrollToAnchor(index);
        },
        onTouchStop: function onTouchStop() {
            this.scrollToAnchorIndex = null;
        },
        scrollToAnchor: function scrollToAnchor(index) {
            var _this6 = this;

            if (typeof index !== 'number' || this.scrollToAnchorIndex === index) {
                return;
            }
            this.scrollToAnchorIndex = index;
            var anchor = this.children.filter(function (item) {
                return item.data.index === _this6.data.indexList[index];
            })[0];
            this.$emit('select', anchor.data.index);
            anchor && wx.pageScrollTo({
                duration: 0,
                scrollTop: anchor.top
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImluZGV4TGlzdCIsImNoYXJDb2RlT2ZBIiwiY2hhckNvZGVBdCIsImkiLCJwdXNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInVwZGF0ZURhdGEiLCJsaW5rQ2hhbmdlZCIsInVubGlua2VkIiwicHJvcHMiLCJzdGlja3kiLCJCb29sZWFuIiwidmFsdWUiLCJ6SW5kZXgiLCJOdW1iZXIiLCJoaWdobGlnaHRDb2xvciIsIkdSRUVOIiwic2Nyb2xsVG9wIiwib2JzZXJ2ZXIiLCJzdGlja3lPZmZzZXRUb3AiLCJBcnJheSIsImRhdGEiLCJhY3RpdmVBbmNob3JJbmRleCIsInNob3dTaWRlYmFyIiwibWV0aG9kcyIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNoaWxkcmVuIiwiZ2V0UmVsYXRpb25Ob2RlcyIsInNldERhdGEiLCJsZW5ndGgiLCJzZXRSZWN0IiwidGhlbiIsIm9uU2Nyb2xsIiwiUHJvbWlzZSIsImFsbCIsInNldEFuY2hvcnNSZWN0Iiwic2V0TGlzdFJlY3QiLCJzZXRTaWRlcmJhclJlY3QiLCJtYXAiLCJhbmNob3IiLCJnZXRSZWN0IiwicmVjdCIsIk9iamVjdCIsImFzc2lnbiIsImhlaWdodCIsInRvcCIsInNpZGViYXIiLCJyZXMiLCJzZXREaWZmRGF0YSIsInRhcmdldCIsImRpZmZEYXRhIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJnZXRBbmNob3JSZWN0IiwiZ2V0QWN0aXZlQW5jaG9ySW5kZXgiLCJwcmVBbmNob3JIZWlnaHQiLCJyZWFjaFRvcCIsImFjdGl2ZSIsImlzQWN0aXZlQW5jaG9yU3RpY2t5IiwiaXRlbSIsImluZGV4Iiwid3JhcHBlclN0eWxlIiwiYW5jaG9yU3R5bGUiLCJjdXJyZW50QW5jaG9yIiwiY3VycmVudE9mZnNldFRvcCIsInRhcmdldE9mZnNldFRvcCIsInBhcmVudE9mZnNldEhlaWdodCIsInRyYW5zbGF0ZVkiLCJvbkNsaWNrIiwiZXZlbnQiLCJzY3JvbGxUb0FuY2hvciIsImRhdGFzZXQiLCJvblRvdWNoTW92ZSIsInNpZGViYXJMZW5ndGgiLCJ0b3VjaCIsInRvdWNoZXMiLCJpdGVtSGVpZ2h0IiwiTWF0aCIsImZsb29yIiwiY2xpZW50WSIsIm9uVG91Y2hTdG9wIiwic2Nyb2xsVG9BbmNob3JJbmRleCIsImZpbHRlciIsIiRlbWl0Iiwid3giLCJwYWdlU2Nyb2xsVG8iLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSxJQUFNQSxZQUFZLHFCQUFNO0FBQ3BCLFFBQU1BLFlBQVksRUFBbEI7QUFDQSxRQUFNQyxjQUFjLElBQUlDLFVBQUosQ0FBZSxDQUFmLENBQXBCO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0FBQ3pCSCxrQkFBVUksSUFBVixDQUFlQyxPQUFPQyxZQUFQLENBQW9CTCxjQUFjRSxDQUFsQyxDQUFmO0FBQ0g7QUFDRCxXQUFPSCxTQUFQO0FBQ0gsQ0FQRDtBQVFBLDhCQUFjO0FBQ1ZPLGNBQVU7QUFDTkMsY0FBTSxjQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxjQUhNLG9CQUdHO0FBQ0wsaUJBQUtDLFVBQUw7QUFDSCxTQUxLO0FBTU5DLG1CQU5NLHlCQU1RO0FBQ1YsaUJBQUtELFVBQUw7QUFDSCxTQVJLO0FBU05FLGdCQVRNLHNCQVNLO0FBQ1AsaUJBQUtGLFVBQUw7QUFDSDtBQVhLLEtBREE7QUFjVkcsV0FBTztBQUNIQyxnQkFBUTtBQUNKTixrQkFBTU8sT0FERjtBQUVKQyxtQkFBTztBQUZILFNBREw7QUFLSEMsZ0JBQVE7QUFDSlQsa0JBQU1VLE1BREY7QUFFSkYsbUJBQU87QUFGSCxTQUxMO0FBU0hHLHdCQUFnQjtBQUNaWCxrQkFBTUosTUFETTtBQUVaWSxtQkFBT0k7QUFGSyxTQVRiO0FBYUhDLG1CQUFXO0FBQ1BiLGtCQUFNVSxNQURDO0FBRVBGLG1C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QSxnQkFBSWhCLFFBQVEsQ0FBWixFQUFlO0FBQ1hBLHdCQUFRLENBQVI7QUFDSCxhQUZELE1BR0ssSUFBSUEsUUFBUWEsZ0JBQWdCLENBQTVCLEVBQStCO0FBQ2hDYix3QkFBUWEsZ0JBQWdCLENBQXhCO0FBQ0g7QUFDRCxpQkFBS0gsY0FBTCxDQUFvQlYsS0FBcEI7QUFDSCxTQXZLSTtBQXdLTG9CLG1CQXhLSyx5QkF3S1M7QUFDVixpQkFBS0MsbUJBQUwsR0FBMkIsSUFBM0I7QUFDSCxTQTFLSTtBQTJLTFgsc0JBM0tLLDBCQTJLVVYsS0EzS1YsRUEyS2lCO0FBQUE7O0FBQ2xCLGdCQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFBNkIsS0FBS3FCLG1CQUFMLEtBQTZCckIsS0FBOUQsRUFBcUU7QUFDakU7QUFDSDtBQUNELGlCQUFLcUIsbUJBQUwsR0FBMkJyQixLQUEzQjtBQUNBLGdCQUFNdEIsU0FBUyxLQUFLYixRQUFMLENBQWN5RCxNQUFkLENBQXFCO0FBQUEsdUJBQVF2QixLQUFLekMsSUFBTCxDQUFVMEMsS0FBVixLQUFvQixPQUFLMUMsSUFBTCxDQUFVMUIsU0FBVixDQUFvQm9FLEtBQXBCLENBQTVCO0FBQUEsYUFBckIsRUFBNkUsQ0FBN0UsQ0FBZjtBQUNBLGlCQUFLdUIsS0FBTCxDQUFXLFFBQVgsRUFBcUI3QyxPQUFPcEIsSUFBUCxDQUFZMEMsS0FBakM7QUFDQXRCLHNCQUFVOEMsR0FBR0MsWUFBSCxDQUFnQjtBQUN0QkMsMEJBQVUsQ0FEWTtBQUV0QnhFLDJCQUFXd0IsT0FBT007QUFGSSxhQUFoQixDQUFWO0FBSUg7QUF0TEk7QUE3Q0MsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IEdSRUVOIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yJztcbmNvbnN0IGluZGV4TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBpbmRleExpc3QgPSBbXTtcbiAgICBjb25zdCBjaGFyQ29kZU9mQSA9ICdBJy5jaGFyQ29kZUF0KDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjY7IGkrKykge1xuICAgICAgICBpbmRleExpc3QucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlT2ZBICsgaSkpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXhMaXN0O1xufTtcblZhbnRDb21wb25lbnQoe1xuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdpbmRleC1hbmNob3InLFxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgICAgIGxpbmtlZCgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICB9LFxuICAgICAgICBsaW5rQ2hhbmdlZCgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICB9LFxuICAgICAgICB1bmxpbmtlZCgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBzdGlja3k6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogR1JFRU5cbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsVG9wOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnb25TY3JvbGwnXG4gICAgICAgIH0sXG4gICAgICAgIHN0aWNreU9mZnNldFRvcDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgaW5kZXhMaXN0OiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmRleExpc3QoKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGFjdGl2ZUFuY2hvckluZGV4OiBudWxsLFxuICAgICAgICBzaG93U2lkZWJhcjogZmFsc2VcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2luZGV4LWFuY2hvci9pbmRleCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dTaWRlYmFyOiAhIXRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZWN0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TY3JvbGwoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9LFxuICAgICAgICBzZXRSZWN0KCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFuY2hvcnNSZWN0KCksXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMaXN0UmVjdCgpLFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2lkZXJiYXJSZWN0KClcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRBbmNob3JzUmVjdCgpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmNoaWxkcmVuLm1hcChhbmNob3IgPT4gKGFuY2hvci5nZXRSZWN0KCcudmFuLWluZGV4LWFuY2hvci13cmFwcGVyJykudGhlbigocmVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYW5jaG9yLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyB0aGlzLmRhdGEuc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0TGlzdFJlY3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWN0KCcudmFuLWluZGV4LWJhcicpLnRoZW4oKHJlY3QpID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHRoaXMuZGF0YS5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRTaWRlcmJhclJlY3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWN0KCcudmFuLWluZGV4LWJhcl9fc2lkZWJhcicpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGViYXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcmVzLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiByZXMudG9wXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXREaWZmRGF0YSh7IHRhcmdldCwgZGF0YSB9KSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmRGF0YSA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuZGF0YVtrZXldICE9PSBkYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGlmZkRhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkaWZmRGF0YSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNldERhdGEoZGlmZkRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRBbmNob3JSZWN0KGFuY2hvcikge1xuICAgICAgICAgICAgcmV0dXJuIGFuY2hvci5nZXRSZWN0KCcudmFuLWluZGV4LWFuY2hvci13cmFwcGVyJykudGhlbigocmVjdCkgPT4gKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRvcDogcmVjdC50b3BcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QWN0aXZlQW5jaG9ySW5kZXgoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgeyBzdGlja3ksIHNjcm9sbFRvcCwgc3RpY2t5T2Zmc2V0VG9wIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZUFuY2hvckhlaWdodCA9IGkgPiAwID8gY2hpbGRyZW5baSAtIDFdLmhlaWdodCA6IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhY2hUb3AgPSBzdGlja3kgPyBwcmVBbmNob3JIZWlnaHQgKyBzdGlja3lPZmZzZXRUb3AgOiAwO1xuICAgICAgICAgICAgICAgIGlmIChyZWFjaFRvcCArIHNjcm9sbFRvcCA+PSBjaGlsZHJlbltpXS50b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuICAgICAgICBvblNjcm9sbCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBzdGlja3ksIHN0aWNreU9mZnNldFRvcCwgekluZGV4LCBoaWdobGlnaHRDb2xvciwgc2Nyb2xsVG9wIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmdldEFjdGl2ZUFuY2hvckluZGV4KCk7XG4gICAgICAgICAgICB0aGlzLnNldERpZmZEYXRhKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVBbmNob3JJbmRleDogYWN0aXZlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzQWN0aXZlQW5jaG9yU3RpY2t5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVBbmNob3JTdGlja3kgPSBjaGlsZHJlblthY3RpdmVdLnRvcCA8PSBzdGlja3lPZmZzZXRUb3AgKyBzY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgd3JhcHBlclN0eWxlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5jaG9yU3R5bGUgPSBgXG4gICAgICAgICAgICAgIGNvbG9yOiAke2hpZ2hsaWdodENvbG9yfTtcbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBY3RpdmVBbmNob3JTdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSBgXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAke2NoaWxkcmVuW2luZGV4XS5oZWlnaHR9cHg7XG4gICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yU3R5bGUgPSBgXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogJHtzdGlja3lPZmZzZXRUb3B9cHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogJHt6SW5kZXh9O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke2hpZ2hsaWdodENvbG9yfTtcbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlmZkRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBhY3RpdmUgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QW5jaG9yID0gY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudE9mZnNldFRvcCA9IGN1cnJlbnRBbmNob3IudG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0T2Zmc2V0VG9wID0gaW5kZXggPT09IGNoaWxkcmVuLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMudG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZHJlbltpbmRleCArIDFdLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE9mZnNldEhlaWdodCA9IHRhcmdldE9mZnNldFRvcCAtIGN1cnJlbnRPZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gcGFyZW50T2Zmc2V0SGVpZ2h0IC0gY3VycmVudEFuY2hvci5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmNob3JTdHlsZSA9IGBcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICR7dHJhbnNsYXRlWX1weCwgMCk7XG4gICAgICAgICAgICAgIHotaW5kZXg6ICR7ekluZGV4fTtcbiAgICAgICAgICAgICAgY29sb3I6ICR7aGlnaGxpZ2h0Q29sb3J9O1xuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlmZkRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlmZkRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvclN0eWxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvQW5jaG9yKGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJMZW5ndGggPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSB0aGlzLnNpZGViYXIuaGVpZ2h0IC8gc2lkZWJhckxlbmd0aDtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoKHRvdWNoLmNsaWVudFkgLSB0aGlzLnNpZGViYXIudG9wKSAvIGl0ZW1IZWlnaHQpO1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID4gc2lkZWJhckxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHNpZGViYXJMZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0FuY2hvcihpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVG91Y2hTdG9wKCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0FuY2hvckluZGV4ID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsVG9BbmNob3IoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInIHx8IHRoaXMuc2Nyb2xsVG9BbmNob3JJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvQW5jaG9ySW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGNvbnN0IGFuY2hvciA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKGl0ZW0gPT4gaXRlbS5kYXRhLmluZGV4ID09PSB0aGlzLmRhdGEuaW5kZXhMaXN0W2luZGV4XSlbMF07XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBhbmNob3IuZGF0YS5pbmRleCk7XG4gICAgICAgICAgICBhbmNob3IgJiYgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGFuY2hvci50b3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=