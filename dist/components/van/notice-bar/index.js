'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

var FONT_COLOR = '#ed6a0c';
var BG_COLOR = '#fffbe8';
(0, _component.VantComponent)({
    props: {
        text: {
            type: String,
            value: ''
        },
        mode: {
            type: String,
            value: ''
        },
        url: {
            type: String,
            value: ''
        },
        openType: {
            type: String,
            value: 'navigate'
        },
        delay: {
            type: Number,
            value: 1
        },
        speed: {
            type: Number,
            value: 50
        },
        scrollable: {
            type: Boolean,
            value: true
        },
        leftIcon: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: FONT_COLOR
        },
        backgroundColor: {
            type: String,
            value: BG_COLOR
        },
        wrapable: Boolean
    },
    data: {
        show: true
    },
    watch: {
        text: function text() {
            this.setData({}, this.init);
        }
    },
    created: function created() {
        this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: 'linear'
        });
    },
    destroyed: function destroyed() {
        this.timer && clearTimeout(this.timer);
    },

    methods: {
        init: function init() {
            var _this = this;

            Promise.all([this.getRect('.van-notice-bar__content'), this.getRect('.van-notice-bar__wrap')]).then(function (rects) {
                var _rects = _slicedToArray(rects, 2),
                    contentRect = _rects[0],
                    wrapRect = _rects[1];

                if (contentRect == null || wrapRect == null || !contentRect.width || !wrapRect.width) {
                    return;
                }
                var _data = _this.data,
                    speed = _data.speed,
                    scrollable = _data.scrollable,
                    delay = _data.delay;

                if (scrollable && wrapRect.width < contentRect.width) {
                    var duration = contentRect.width / speed * 1000;
                    _this.wrapWidth = wrapRect.width;
                    _this.contentWidth = contentRect.width;
                    _this.duration = duration;
                    _this.animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: 'linear',
                        delay: delay
                    });
                    _this.scroll();
                }
            });
        },
        scroll: function scroll() {
            var _this2 = this;

            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.setData({
                animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
            });
            setTimeout(function () {
                _this2.setData({
                    animationData: _this2.animation.translateX(-_this2.contentWidth).step().export()
                });
            }, 20);
            this.timer = setTimeout(function () {
                _this2.scroll();
            }, this.duration);
        },
        onClickIcon: function onClickIcon() {
            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.setData({ show: false });
        },
        onClick: function onClick(event) {
            this.$emit('click', event);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZPTlRfQ09MT1IiLCJCR19DT0xPUiIsInByb3BzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsIm1vZGUiLCJ1cmwiLCJvcGVuVHlwZSIsImRlbGF5IiwiTnVtYmVyIiwic3BlZWQiLCJzY3JvbGxhYmxlIiwiQm9vbGVhbiIsImxlZnRJY29uIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3cmFwYWJsZSIsImRhdGEiLCJzaG93Iiwid2F0Y2giLCJzZXREYXRhIiwiaW5pdCIsImNyZWF0ZWQiLCJyZXNldEFuaW1hdGlvbiIsInd4IiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsImRlc3Ryb3llZCIsInRpbWVyIiwiY2xlYXJUaW1lb3V0IiwibWV0aG9kcyIsIlByb21pc2UiLCJhbGwiLCJnZXRSZWN0IiwidGhlbiIsInJlY3RzIiwiY29udGVudFJlY3QiLCJ3cmFwUmVjdCIsIndpZHRoIiwid3JhcFdpZHRoIiwiY29udGVudFdpZHRoIiwiYW5pbWF0aW9uIiwic2Nyb2xsIiwiYW5pbWF0aW9uRGF0YSIsInRyYW5zbGF0ZVgiLCJzdGVwIiwiZXhwb3J0Iiwic2V0VGltZW91dCIsIm9uQ2xpY2tJY29uIiwib25DbGljayIsImV2ZW50IiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQSxJQUFNQSxhQUFhLFNBQW5CO0FBQ0EsSUFBTUMsV0FBVyxTQUFqQjtBQUNBLDhCQUFjO0FBQ1ZDLFdBQU87QUFDSEMsY0FBTTtBQUNGQyxrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBREg7QUFLSEMsY0FBTTtBQUNGSCxrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBTEg7QUFTSEUsYUFBSztBQUNESixrQkFBTUMsTUFETDtBQUVEQyxtQkFBTztBQUZOLFNBVEY7QUFhSEcsa0JBQVU7QUFDTkwsa0JBQU1DLE1BREE7QUFFTkMsbUJBQU87QUFGRCxT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QU1ILGFBUEQsRUFPRyxFQVBIO0FBUUEsaUJBQUtsQixLQUFMLEdBQWFtQixXQUFXLFlBQU07QUFDMUIsdUJBQUtMLE1BQUw7QUFDSCxhQUZZLEVBRVYsS0FBS2pCLFFBRkssQ0FBYjtBQUdILFNBaERJO0FBaURMdUIsbUJBakRLLHlCQWlEUztBQUNWLGlCQUFLcEIsS0FBTCxJQUFjQyxhQUFhLEtBQUtELEtBQWxCLENBQWQ7QUFDQSxpQkFBS0EsS0FBTCxHQUFhLElBQWI7QUFDQSxpQkFBS1QsT0FBTCxDQUFhLEVBQUVGLE1BQU0sS0FBUixFQUFiO0FBQ0gsU0FyREk7QUFzRExnQyxlQXRESyxtQkFzREdDLEtBdERILEVBc0RVO0FBQ1gsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxLQUFwQjtBQUNIO0FBeERJO0FBN0RDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5jb25zdCBGT05UX0NPTE9SID0gJyNlZDZhMGMnO1xuY29uc3QgQkdfQ09MT1IgPSAnI2ZmZmJlOCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHVybDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5UeXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ25hdmlnYXRlJ1xuICAgICAgICB9LFxuICAgICAgICBkZWxheToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA1MFxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbGVmdEljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IEZPTlRfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogQkdfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgd3JhcGFibGU6IEJvb2xlYW5cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc2hvdzogdHJ1ZVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdGV4dCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7fSwgdGhpcy5pbml0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5yZXNldEFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgdGhpcy50aW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLW5vdGljZS1iYXJfX2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tbm90aWNlLWJhcl9fd3JhcCcpXG4gICAgICAgICAgICBdKS50aGVuKChyZWN0cykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjb250ZW50UmVjdCwgd3JhcFJlY3RdID0gcmVjdHM7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRSZWN0ID09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgd3JhcFJlY3QgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICAhY29udGVudFJlY3Qud2lkdGggfHxcbiAgICAgICAgICAgICAgICAgICAgIXdyYXBSZWN0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzcGVlZCwgc2Nyb2xsYWJsZSwgZGVsYXkgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsYWJsZSAmJiB3cmFwUmVjdC53aWR0aCA8IGNvbnRlbnRSZWN0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gKGNvbnRlbnRSZWN0LndpZHRoIC8gc3BlZWQpICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cmFwV2lkdGggPSB3cmFwUmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50V2lkdGggPSBjb250ZW50UmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzY3JvbGwoKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhOiB0aGlzLnJlc2V0QW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIC50cmFuc2xhdGVYKHRoaXMud3JhcFdpZHRoKVxuICAgICAgICAgICAgICAgICAgICAuc3RlcCgpXG4gICAgICAgICAgICAgICAgICAgIC5leHBvcnQoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhOiB0aGlzLmFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zbGF0ZVgoLXRoaXMuY29udGVudFdpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0ZXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmV4cG9ydCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAyMCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrSWNvbigpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBzaG93OiBmYWxzZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==