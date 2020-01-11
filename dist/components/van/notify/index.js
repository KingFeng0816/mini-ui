'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

(0, _component.VantComponent)({
    props: {
        message: String,
        background: String,
        type: {
            type: String,
            value: 'danger'
        },
        color: {
            type: String,
            value: _color.WHITE
        },
        duration: {
            type: Number,
            value: 3000
        },
        zIndex: {
            type: Number,
            value: 110
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: false
        }
    },
    created: function created() {
        var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
            statusBarHeight = _wx$getSystemInfoSync.statusBarHeight;

        this.setData({ statusBarHeight: statusBarHeight });
    },

    methods: {
        show: function show() {
            var _this = this;

            var _data = this.data,
                duration = _data.duration,
                onOpened = _data.onOpened;

            clearTimeout(this.timer);
            this.setData({
                show: true
            }, onOpened);
            if (duration > 0 && duration !== Infinity) {
                this.timer = setTimeout(function () {
                    _this.hide();
                }, duration);
            }
        },
        hide: function hide() {
            var onClose = this.data.onClose;

            clearTimeout(this.timer);
            this.setData({
                show: false
            }, onClose);
        },
        onTap: function onTap(event) {
            var onClick = this.data.onClick;

            if (onClick) {
                onClick(event.detail);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwibWVzc2FnZSIsIlN0cmluZyIsImJhY2tncm91bmQiLCJ0eXBlIiwidmFsdWUiLCJjb2xvciIsIldISVRFIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJ6SW5kZXgiLCJzYWZlQXJlYUluc2V0VG9wIiwiQm9vbGVhbiIsImNyZWF0ZWQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwic3RhdHVzQmFySGVpZ2h0Iiwic2V0RGF0YSIsIm1ldGhvZHMiLCJzaG93IiwiZGF0YSIsIm9uT3BlbmVkIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJJbmZpbml0eSIsInNldFRpbWVvdXQiLCJoaWRlIiwib25DbG9zZSIsIm9uVGFwIiwiZXZlbnQiLCJvbkNsaWNrIiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU87QUFDSEMsaUJBQVNDLE1BRE47QUFFSEMsb0JBQVlELE1BRlQ7QUFHSEUsY0FBTTtBQUNGQSxrQkFBTUYsTUFESjtBQUVGRyxtQkFBTztBQUZMLFNBSEg7QUFPSEMsZUFBTztBQUNIRixrQkFBTUYsTUFESDtBQUVIRyxtQkFBT0U7QUFGSixTQVBKO0FBV0hDLGtCQUFVO0FBQ05KLGtCQUFNSyxNQURBO0FBRU5KLG1CQUFPO0FBRkQsU0FYUDtBQWVISyxnQkFBUTtBQUNKTixrQkFBTUssTUFERjtBQUVKSixtQkFBTztBQUZILFNBZkw7QUFtQkhNLDBCQUFrQjtBQUNkUCxrQkFBTVEsT0FEUTtBQUVkUCxtQkFBTztBQUZPO0FBbkJmLEtBREc7QUF5QlZRLFdBekJVLHFCQXlCQTtBQUFBLG9DQUNzQkMsR0FBR0MsaUJBQUgsRUFEdEI7QUFBQSxZQUNFQyxlQURGLHlCQUNFQSxlQURGOztBQUVOLGFBQUtDLE9BQUwsQ0FBYSxFQUFFRCxnQ0FBRixFQUFiO0FBQ0gsS0E1QlM7O0FBNkJWRSxhQUFTO0FBQ0xDLFlBREssa0JBQ0U7QUFBQTs7QUFBQSx3QkFDNEIsS0FBS0MsSUFEakM7QUFBQSxnQkFDS1osUUFETCxTQUNLQSxRQURMO0FBQUEsZ0JBQ2VhLFFBRGYsU0FDZUEsUUFEZjs7QUFFSEMseUJBQWEsS0FBS0MsS0FBbEI7QUFDQSxpQkFBS04sT0FBTCxDQUFhO0FBQ1RFLHNCQUFNO0FBREcsYUFBYixFQUVHRSxRQUZIO0FBR0EsZ0JBQUliLFdBQVcsQ0FBWCxJQUFnQkEsYUFBYWdCLFFBQWpDLEVBQTJDO0FBQ3ZDLHFCQUFLRCxLQUFMLEdBQWFFLFdBQVcsWUFBTTtBQUMxQiwwQkFBS0MsSUFBTDtBQUNILGlCQUZZLEVBRVZsQixRQUZVLENBQWI7QUFHSDtBQUNKLFNBWkk7QUFhTGtCLFlBYkssa0JBYUU7QUFBQSxnQkFDS0MsT0FETCxHQUNpQixLQUFLUCxJQUR0QixDQUNLTyxPQURMOztBQUVITCx5QkFBYSxLQUFLQyxLQUFsQjtBQUNBLGlCQUFLTixPQUFMLENBQWE7QUFDVEUsc0JBQU07QUFERyxhQUFiLEVBRUdRLE9BRkg7QUFHSCxTQW5CSTtBQW9CTEMsYUFwQkssaUJBb0JDQyxLQXBCRCxFQW9CUTtBQUFBLGdCQUNEQyxPQURDLEdBQ1csS0FBS1YsSUFEaEIsQ0FDRFUsT0FEQzs7QUFFVCxnQkFBSUEsT0FBSixFQUFhO0FBQ1RBLHdCQUFRRCxNQUFNRSxNQUFkO0FBQ0g7QUFDSjtBQXpCSTtBQTdCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgV0hJVEUgfSBmcm9tICcuLi9jb21tb24vY29sb3InO1xuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgbWVzc2FnZTogU3RyaW5nLFxuICAgICAgICBiYWNrZ3JvdW5kOiBTdHJpbmcsXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnZGFuZ2VyJ1xuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IFdISVRFXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMzAwMFxuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxMTBcbiAgICAgICAgfSxcbiAgICAgICAgc2FmZUFyZWFJbnNldFRvcDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1c0JhckhlaWdodCB9ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgc3RhdHVzQmFySGVpZ2h0IH0pO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzaG93KCkge1xuICAgICAgICAgICAgY29uc3QgeyBkdXJhdGlvbiwgb25PcGVuZWQgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgfSwgb25PcGVuZWQpO1xuICAgICAgICAgICAgaWYgKGR1cmF0aW9uID4gMCAmJiBkdXJhdGlvbiAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGlkZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb25DbG9zZSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgfSwgb25DbG9zZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVGFwKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgb25DbGljayhldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=