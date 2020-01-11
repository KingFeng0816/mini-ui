'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    mixins: [_touch.touch],
    classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
    relation: {
        name: 'tab',
        type: 'descendant',
        linked: function linked(target) {
            target.index = this.children.length;
            this.children.push(target);
            this.updateTabs();
        },
        unlinked: function unlinked(target) {
            this.children = this.children.filter(function (child) {
                return child !== target;
            }).map(function (child, index) {
                child.index = index;
                return child;
            });
            this.updateTabs();
        }
    },
    props: {
        color: {
            type: String,
            observer: 'setLine'
        },
        sticky: Boolean,
        animated: {
            type: Boolean,
            observer: function observer() {
                this.setTrack();
                this.children.forEach(function (child) {
                    return child.updateRender();
                });
            }
        },
        swipeable: Boolean,
        lineWidth: {
            type: [String, Number],
            value: -1,
            observer: 'setLine'
        },
        lineHeight: {
            type: [String, Number],
            value: -1,
            observer: 'setLine'
        },
        titleActiveColor: String,
        titleInactiveColor: String,
        active: {
            type: [String, Number],
            value: 0,
            observer: function observer(name) {
                if (name !== this.getCurrentName()) {
                    this.setCurrentIndexByName(name);
                }
            }
        },
        type: {
            type: String,
            value: 'line'
        },
        border: {
            type: Boolean,
            value: true
        },
        ellipsis: {
            type: Boolean,
            value: true
        },
        duration: {
            type: Number,
            value: 0.3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
            value: 4,
            observer: function observer(value) {
                this.setData({
                    scrollable: this.children.length > value || !this.data.ellipsis
                });
            }
        },
        offsetTop: {
            type: Number,
            value: 0
        },
        lazyRender: {
            type: Boolean,
            value: true
        }
    },
    data: {
        tabs: [],
        lineStyle: '',
        scrollLeft: 0,
        scrollable: false,
        trackStyle: '',
        currentIndex: null,
        container: null
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },
    mounted: function mounted() {
        var _this = this;

        this.setData({
            container: function container() {
                return _this.createSelectorQuery().select('.van-tabs');
            }
        });
        this.setLine(true);
        this.setTrack();
        this.scrollIntoView();
    },

    methods: {
        updateTabs: function updateTabs() {
            var _children = this.children,
                children = _children === undefined ? [] : _children,
                data = this.data;

            this.setData({
                tabs: children.map(function (child) {
                    return child.data;
                }),
                scrollable: this.children.length > data.swipeThreshold || !data.ellipsis
            });
            this.setCurrentIndexByName(this.getCurrentName() || data.active);
        },
        trigger: function trigger(eventName) {
            var currentIndex = this.data.currentIndex;

            var child = this.children[currentIndex];
            if (!(0, _utils.isDef)(child)) {
                return;
            }
            this.$emit(eventName, {
                index: currentIndex,
                name: child.getComputedName(),
                title: child.data.title
            });
        },
        onTap: function onTap(event) {
            var _this2 = this;

            var index = event.currentTarget.dataset.index;

            var child = this.children[index];
            if (child.data.disabled) {
                this.trigger('disabled');
            } else {
                this.setCurrentIndex(index);
                wx.nextTick(function () {
                    _this2.trigger('click');
                });
            }
        },

        // correct the index of active tab
        setCurrentIndexByName: function setCurrentIndexByName(name) {
            var _children2 = this.children,
                children = _children2 === undefined ? [] : _children2;

            var matched = children.filter(function (child) {
                return child.getComputedName() === name;
            });
            if (matched.length) {
                this.setCurrentIndex(matched[0].index);
            }
        },
        setCurrentIndex: function setCurrentIndex(currentIndex) {
            var _this3 = this;

            var data = this.data,
                _children3 = this.children,
                children = _children3 === undefined ? [] : _children3;

            if (!(0, _utils.isDef)(currentIndex) || currentIndex >= children.length || currentIndex < 0) {
                return;
            }
            children.forEach(function (item, index) {
                var active = index === currentIndex;
                if (active !== item.data.active || !item.inited) {
                    item.updateRender(active, _this3);
                }
            });
            if (currentIndex === data.currentIndex) {
                return;
            }
            var shouldEmitChange = data.currentIndex !== null;
            this.setData({ currentIndex: currentIndex });
            wx.nextTick(function () {
                _this3.setLine();
                _this3.setTrack();
                _this3.scrollIntoView();
                _this3.trigger('input');
                if (shouldEmitChange) {
                    _this3.trigger('change');
                }
            });
        },
        getCurrentName: function getCurrentName() {
            var activeTab = this.children[this.data.currentIndex];
            if (activeTab) {
                return activeTab.getComputedName();
            }
        },
        setLine: function setLine(skipTransition) {
            var _this4 = this;

            if (this.data.type !== 'line') {
                return;
            }
            var _data = this.data,
                color = _data.color,
                duration = _data.duration,
                currentIndex = _data.currentIndex,
                lineWidth = _data.lineWidth,
                lineHeight = _data.lineHeight;

            this.getRect('.van-tab', true).then(function () {
                var rects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                var rect = rects[currentIndex];
                if (rect == null) {
                    return;
                }
                var width = lineWidth !== -1 ? lineWidth : rect.width / 2;
                var height = lineHeight !== -1 ? 'height: ' + (0, _utils.addUnit)(lineHeight) + '; border-radius: ' + (0, _utils.addUnit)(lineHeight) + ';' : '';
                var left = rects.slice(0, currentIndex).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                left += (rect.width - width) / 2;
                var transition = skipTransition ? '' : 'transition-duration: ' + duration + 's; -webkit-transition-duration: ' + duration + 's;';
                _this4.setData({
                    lineStyle: '\n            ' + height + '\n            width: ' + (0, _utils.addUnit)(width) + ';\n            background-color: ' + color + ';\n            -webkit-transform: translateX(' + left + 'px);\n            transform: translateX(' + left + 'px);\n            ' + transition + '\n          '
                });
            });
        },
        setTrack: function setTrack() {
            var _data2 = this.data,
                animated = _data2.animated,
                duration = _data2.duration,
                currentIndex = _data2.currentIndex;

            if (!animated) {
                return;
            }
            this.setData({
                trackStyle: '\n          transform: translate3d(' + -100 * currentIndex + '%, 0, 0);\n          -webkit-transition-duration: ' + duration + 's;\n          transition-duration: ' + duration + 's;\n        '
            });
        },

        // scroll active tab into view
        scrollIntoView: function scrollIntoView() {
            var _this5 = this;

            var _data3 = this.data,
                currentIndex = _data3.currentIndex,
                scrollable = _data3.scrollable;

            if (!scrollable) {
                return;
            }
            Promise.all([this.getRect('.van-tab', true), this.getRect('.van-tabs__nav')]).then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    tabRects = _ref2[0],
                    navRect = _ref2[1];

                var tabRect = tabRects[currentIndex];
                var offsetLeft = tabRects.slice(0, currentIndex).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                _this5.setData({
                    scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
                });
            });
        },
        onTouchScroll: function onTouchScroll(event) {
            this.$emit('scroll', event.detail);
        },
        onTouchStart: function onTouchStart(event) {
            if (!this.data.swipeable) return;
            this.touchStart(event);
        },
        onTouchMove: function onTouchMove(event) {
            if (!this.data.swipeable) return;
            this.touchMove(event);
        },

        // watch swipe touch end
        onTouchEnd: function onTouchEnd() {
            if (!this.data.swipeable) return;
            var _data4 = this.data,
                tabs = _data4.tabs,
                currentIndex = _data4.currentIndex;
            var direction = this.direction,
                deltaX = this.deltaX,
                offsetX = this.offsetX;

            var minSwipeDistance = 50;
            if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                if (deltaX > 0 && currentIndex !== 0) {
                    this.setCurrentIndex(currentIndex - 1);
                } else if (deltaX < 0 && currentIndex !== tabs.length - 1) {
                    this.setCurrentIndex(currentIndex + 1);
                }
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInRvdWNoIiwiY2xhc3NlcyIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJpbmRleCIsImNoaWxkcmVuIiwibGVuZ3RoIiwicHVzaCIsInVwZGF0ZVRhYnMiLCJ1bmxpbmtlZCIsImZpbHRlciIsImNoaWxkIiwibWFwIiwicHJvcHMiLCJjb2xvciIsIlN0cmluZyIsIm9ic2VydmVyIiwic3RpY2t5IiwiQm9vbGVhbiIsImFuaW1hdGVkIiwic2V0VHJhY2siLCJmb3JFYWNoIiwidXBkYXRlUmVuZGVyIiwic3dpcGVhYmxlIiwibGluZVdpZHRoIiwiTnVtYmVyIiwidmFsdWUiLCJsaW5lSGVpZ2h0IiwidGl0bGVBY3RpdmVDb2xvciIsInRpdGxlSW5hY3RpdmVDb2xvciIsImFjdGl2ZSIsImdldEN1cnJlbnROYW1lIiwic2V0Q3VycmVudEluZGV4QnlOYW1lIiwiYm9yZGVyIiwiZWxsaXBzaXMiLCJkdXJhdGlvbiIsInpJbmRleCIsInN3aXBlVGhyZXNob2xkIiwic2V0RGF0YSIsInNjcm9sbGFibGUiLCJkYXRhIiwib2Zmc2V0VG9wIiwibGF6eVJlbmRlciIsInRhYnMiLCJsaW5lU3R5bGUiLCJzY3JvbGxMZWZ0IiwidHJhY2tTdHlsZSIsImN1cnJlbnRJbmRleCIsImNvbnRhaW5lciIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0Iiwic2V0TGluZSIsInNjcm9sbEludG9WaWV3IiwibWV0aG9kcyIsInRyaWdnZXIiLCJldmVudE5hbWUiLCIkZW1pdCIsImdldENvbXB1dGVkTmFtZSIsInRpdGxlIiwib25UYXAiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCJzZXRDdXJyZW50SW5kZXgiLCJ3eCIsIm5leHRUaWNrIiwibWF0Y2hlZCIsIml0ZW0iLCJpbml0ZWQiLCJzaG91bGRFbWl0Q2hhbmdlIiwiYWN0aXZlVGFiIiwic2tpcFRyYW5zaXRpb24iLCJnZXRSZWN0IiwidGhlbiIsInJlY3RzIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInNsaWNlIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJ0cmFuc2l0aW9uIiwiUHJvbWlzZSIsImFsbCIsInRhYlJlY3RzIiwibmF2UmVjdCIsInRhYlJlY3QiLCJvZmZzZXRMZWZ0Iiwib25Ub3VjaFNjcm9sbCIsImRldGFpbCIsIm9uVG91Y2hTdGFydCIsInRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsInRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJkaXJlY3Rpb24iLCJkZWx0YVgiLCJvZmZzZXRYIiwibWluU3dpcGVEaXN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLFlBQVEsQ0FBQ0MsWUFBRCxDQURFO0FBRVZDLGFBQVMsQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixrQkFBM0IsRUFBK0MsWUFBL0MsQ0FGQztBQUdWQyxjQUFVO0FBQ05DLGNBQU0sS0FEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1hBLG1CQUFPQyxLQUFQLEdBQWUsS0FBS0MsUUFBTCxDQUFjQyxNQUE3QjtBQUNBLGlCQUFLRCxRQUFMLENBQWNFLElBQWQsQ0FBbUJKLE1BQW5CO0FBQ0EsaUJBQUtLLFVBQUw7QUFDSCxTQVBLO0FBUU5DLGdCQVJNLG9CQVFHTixNQVJILEVBUVc7QUFDYixpQkFBS0UsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQ1hLLE1BRFcsQ0FDSixVQUFDQyxLQUFEO0FBQUEsdUJBQVdBLFVBQVVSLE1BQXJCO0FBQUEsYUFESSxFQUVYUyxHQUZXLENBRVAsVUFBQ0QsS0FBRCxFQUFRUCxLQUFSLEVBQWtCO0FBQ3ZCTyxzQkFBTVAsS0FBTixHQUFjQSxLQUFkO0FBQ0EsdUJBQU9PLEtBQVA7QUFDSCxhQUxlLENBQWhCO0FBTUEsaUJBQUtI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Skw7QUFDQXFDLGtCQTNKSyx3QkEySlE7QUFDVCxnQkFBSSxDQUFDLEtBQUszRCxJQUFMLENBQVVqQixTQUFmLEVBQ0k7QUFGSyx5QkFHc0IsS0FBS2lCLElBSDNCO0FBQUEsZ0JBR0RHLElBSEMsVUFHREEsSUFIQztBQUFBLGdCQUdLSSxZQUhMLFVBR0tBLFlBSEw7QUFBQSxnQkFJRHFELFNBSkMsR0FJOEIsSUFKOUIsQ0FJREEsU0FKQztBQUFBLGdCQUlVQyxNQUpWLEdBSThCLElBSjlCLENBSVVBLE1BSlY7QUFBQSxnQkFJa0JDLE9BSmxCLEdBSThCLElBSjlCLENBSWtCQSxPQUpsQjs7QUFLVCxnQkFBTUMsbUJBQW1CLEVBQXpCO0FBQ0EsZ0JBQUlILGNBQWMsWUFBZCxJQUE4QkUsV0FBV0MsZ0JBQTdDLEVBQStEO0FBQzNELG9CQUFJRixTQUFTLENBQVQsSUFBY3RELGlCQUFpQixDQUFuQyxFQUFzQztBQUNsQyx5QkFBS21CLGVBQUwsQ0FBcUJuQixlQUFlLENBQXBDO0FBQ0gsaUJBRkQsTUFHSyxJQUFJc0QsU0FBUyxDQUFULElBQWN0RCxpQkFBaUJKLEtBQUtyQyxNQUFMLEdBQWMsQ0FBakQsRUFBb0Q7QUFDckQseUJBQUs0RCxlQUFMLENBQXFCbkIsZUFBZSxDQUFwQztBQUNIO0FBQ0o7QUFDSjtBQXpLSTtBQWxIQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgdG91Y2ggfSBmcm9tICcuLi9taXhpbnMvdG91Y2gnO1xuaW1wb3J0IHsgaXNEZWYsIGFkZFVuaXQgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbdG91Y2hdLFxuICAgIGNsYXNzZXM6IFsnbmF2LWNsYXNzJywgJ3RhYi1jbGFzcycsICd0YWItYWN0aXZlLWNsYXNzJywgJ2xpbmUtY2xhc3MnXSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAndGFiJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0YXJnZXQuaW5kZXggPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYWJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkKHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAuZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQgIT09IHRhcmdldClcbiAgICAgICAgICAgICAgICAubWFwKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYWJzKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldExpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHN0aWNreTogQm9vbGVhbixcbiAgICAgICAgYW5pbWF0ZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudXBkYXRlUmVuZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzd2lwZWFibGU6IEJvb2xlYW4sXG4gICAgICAgIGxpbmVXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0TGluZSdcbiAgICAgICAgfSxcbiAgICAgICAgbGluZUhlaWdodDoge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0TGluZSdcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGVBY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgICAgICB0aXRsZUluYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBvYnNlcnZlcihuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgIT09IHRoaXMuZ2V0Q3VycmVudE5hbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRJbmRleEJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbGluZSdcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZWxsaXBzaXM6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDAuM1xuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHN3aXBlVGhyZXNob2xkOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNCxcbiAgICAgICAgICAgIG9ic2VydmVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZTogdGhpcy5jaGlsZHJlbi5sZW5ndGggPiB2YWx1ZSB8fCAhdGhpcy5kYXRhLmVsbGlwc2lzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9mZnNldFRvcDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgbGF6eVJlbmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHRhYnM6IFtdLFxuICAgICAgICBsaW5lU3R5bGU6ICcnLFxuICAgICAgICBzY3JvbGxMZWZ0OiAwLFxuICAgICAgICBzY3JvbGxhYmxlOiBmYWxzZSxcbiAgICAgICAgdHJhY2tTdHlsZTogJycsXG4gICAgICAgIGN1cnJlbnRJbmRleDogbnVsbCxcbiAgICAgICAgY29udGFpbmVyOiBudWxsXG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBjb250YWluZXI6ICgpID0+IHRoaXMuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdCgnLnZhbi10YWJzJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0TGluZSh0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRUcmFjaygpO1xuICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZVRhYnMoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuID0gW10sIGRhdGEgfSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHRhYnM6IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLmRhdGEpLFxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGU6IHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gZGF0YS5zd2lwZVRocmVzaG9sZCB8fCAhZGF0YS5lbGxpcHNpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRJbmRleEJ5TmFtZSh0aGlzLmdldEN1cnJlbnROYW1lKCkgfHwgZGF0YS5hY3RpdmUpO1xuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VyKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgeyBjdXJyZW50SW5kZXggfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgaWYgKCFpc0RlZihjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRlbWl0KGV2ZW50TmFtZSwge1xuICAgICAgICAgICAgICAgIGluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgICAgICAgbmFtZTogY2hpbGQuZ2V0Q29tcHV0ZWROYW1lKCksXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNoaWxkLmRhdGEudGl0bGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblRhcChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChjaGlsZC5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50SW5kZXgoaW5kZXgpO1xuICAgICAgICAgICAgICAgIHd4Lm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBjb3JyZWN0IHRoZSBpbmRleCBvZiBhY3RpdmUgdGFiXG4gICAgICAgIHNldEN1cnJlbnRJbmRleEJ5TmFtZShuYW1lKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuID0gW10gfSA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkID0gY2hpbGRyZW4uZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQuZ2V0Q29tcHV0ZWROYW1lKCkgPT09IG5hbWUpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50SW5kZXgobWF0Y2hlZFswXS5pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgY2hpbGRyZW4gPSBbXSB9ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghaXNEZWYoY3VycmVudEluZGV4KSB8fFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA+PSBjaGlsZHJlbi5sZW5ndGggfHxcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmUgIT09IGl0ZW0uZGF0YS5hY3RpdmUgfHwgIWl0ZW0uaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlUmVuZGVyKGFjdGl2ZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSBkYXRhLmN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEVtaXRDaGFuZ2UgPSBkYXRhLmN1cnJlbnRJbmRleCAhPT0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGN1cnJlbnRJbmRleCB9KTtcbiAgICAgICAgICAgIHd4Lm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldExpbmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRW1pdENoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDdXJyZW50TmFtZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVRhYiA9IHRoaXMuY2hpbGRyZW5bdGhpcy5kYXRhLmN1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBpZiAoYWN0aXZlVGFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVRhYi5nZXRDb21wdXRlZE5hbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0TGluZShza2lwVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS50eXBlICE9PSAnbGluZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yLCBkdXJhdGlvbiwgY3VycmVudEluZGV4LCBsaW5lV2lkdGgsIGxpbmVIZWlnaHQgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi10YWInLCB0cnVlKS50aGVuKChyZWN0cyA9IFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IHJlY3RzW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHJlY3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gbGluZVdpZHRoICE9PSAtMSA/IGxpbmVXaWR0aCA6IHJlY3Qud2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGxpbmVIZWlnaHQgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgID8gYGhlaWdodDogJHthZGRVbml0KGxpbmVIZWlnaHQpfTsgYm9yZGVyLXJhZGl1czogJHthZGRVbml0KGxpbmVIZWlnaHQpfTtgXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICAgICAgbGV0IGxlZnQgPSByZWN0c1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgY3VycmVudEluZGV4KVxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3Vyci53aWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgbGVmdCArPSAocmVjdC53aWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IHNraXBUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgOiBgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtkdXJhdGlvbn1zOyAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246ICR7ZHVyYXRpb259cztgO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZTogYFxuICAgICAgICAgICAgJHtoZWlnaHR9XG4gICAgICAgICAgICB3aWR0aDogJHthZGRVbml0KHdpZHRoKX07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bGVmdH1weCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtsZWZ0fXB4KTtcbiAgICAgICAgICAgICR7dHJhbnNpdGlvbn1cbiAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VHJhY2soKSB7XG4gICAgICAgICAgICBjb25zdCB7IGFuaW1hdGVkLCBkdXJhdGlvbiwgY3VycmVudEluZGV4IH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIWFuaW1hdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB0cmFja1N0eWxlOiBgXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkey0xMDAgKiBjdXJyZW50SW5kZXh9JSwgMCwgMCk7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAke2R1cmF0aW9ufXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtkdXJhdGlvbn1zO1xuICAgICAgICBgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc2Nyb2xsIGFjdGl2ZSB0YWIgaW50byB2aWV3XG4gICAgICAgIHNjcm9sbEludG9WaWV3KCkge1xuICAgICAgICAgICAgY29uc3QgeyBjdXJyZW50SW5kZXgsIHNjcm9sbGFibGUgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmICghc2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tdGFiJywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXRhYnNfX25hdicpXG4gICAgICAgICAgICBdKS50aGVuKChbdGFiUmVjdHMsIG5hdlJlY3RdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFiUmVjdCA9IHRhYlJlY3RzW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHRhYlJlY3RzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBjdXJyZW50SW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgKyBjdXJyLndpZHRoLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBvZmZzZXRMZWZ0IC0gKG5hdlJlY3Qud2lkdGggLSB0YWJSZWN0LndpZHRoKSAvIDJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoU2Nyb2xsKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGwnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN3aXBlYWJsZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoTW92ZShldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuc3dpcGVhYmxlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMudG91Y2hNb3ZlKGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd2F0Y2ggc3dpcGUgdG91Y2ggZW5kXG4gICAgICAgIG9uVG91Y2hFbmQoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zd2lwZWFibGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgeyB0YWJzLCBjdXJyZW50SW5kZXggfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgZGlyZWN0aW9uLCBkZWx0YVgsIG9mZnNldFggfSA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBtaW5Td2lwZURpc3RhbmNlID0gNTA7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgb2Zmc2V0WCA+PSBtaW5Td2lwZURpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhWCA+IDAgJiYgY3VycmVudEluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWx0YVggPCAwICYmIGN1cnJlbnRJbmRleCAhPT0gdGFicy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19