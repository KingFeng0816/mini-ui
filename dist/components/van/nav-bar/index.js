'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    classes: ['title-class'],
    props: {
        title: String,
        fixed: Boolean,
        leftText: String,
        rightText: String,
        leftArrow: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: true
        }
    },
    data: {
        statusBarHeight: 0
    },
    created: function created() {
        var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
            statusBarHeight = _wx$getSystemInfoSync.statusBarHeight;

        this.setData({ statusBarHeight: statusBarHeight });
    },

    methods: {
        onClickLeft: function onClickLeft() {
            this.$emit('click-left');
        },
        onClickRight: function onClickRight() {
            this.$emit('click-right');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwiZml4ZWQiLCJCb29sZWFuIiwibGVmdFRleHQiLCJyaWdodFRleHQiLCJsZWZ0QXJyb3ciLCJib3JkZXIiLCJ0eXBlIiwidmFsdWUiLCJ6SW5kZXgiLCJOdW1iZXIiLCJzYWZlQXJlYUluc2V0VG9wIiwiZGF0YSIsInN0YXR1c0JhckhlaWdodCIsImNyZWF0ZWQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwic2V0RGF0YSIsIm1ldGhvZHMiLCJvbkNsaWNrTGVmdCIsIiRlbWl0Iiwib25DbGlja1JpZ2h0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLGFBQVMsQ0FBQyxhQUFELENBREM7QUFFVkMsV0FBTztBQUNIQyxlQUFPQyxNQURKO0FBRUhDLGVBQU9DLE9BRko7QUFHSEMsa0JBQVVILE1BSFA7QUFJSEksbUJBQVdKLE1BSlI7QUFLSEssbUJBQVdILE9BTFI7QUFNSEksZ0JBQVE7QUFDSkMsa0JBQU1MLE9BREY7QUFFSk0sbUJBQU87QUFGSCxTQU5MO0FBVUhDLGdCQUFRO0FBQ0pGLGtCQUFNRyxNQURGO0FBRUpGLG1CQUFPO0FBRkgsU0FWTDtBQWNIRywwQkFBa0I7QUFDZEosa0JBQU1MLE9BRFE7QUFFZE0sbUJBQU87QUFGTztBQWRmLEtBRkc7QUFxQlZJLFVBQU07QUFDRkMseUJBQWlCO0FBRGYsS0FyQkk7QUF3QlZDLFdBeEJVLHFCQXdCQTtBQUFBLG9DQUNzQkMsR0FBR0MsaUJBQUgsRUFEdEI7QUFBQSxZQUNFSCxlQURGLHlCQUNFQSxlQURGOztBQUVOLGFBQUtJLE9BQUwsQ0FBYSxFQUFFSixnQ0FBRixFQUFiO0FBQ0gsS0EzQlM7O0FBNEJWSyxhQUFTO0FBQ0xDLG1CQURLLHlCQUNTO0FBQ1YsaUJBQUtDLEtBQUwsQ0FBVyxZQUFYO0FBQ0gsU0FISTtBQUlMQyxvQkFKSywwQkFJVTtBQUNYLGlCQUFLRCxLQUFMLENBQVcsYUFBWDtBQUNIO0FBTkk7QUE1QkMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFsndGl0bGUtY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBmaXhlZDogQm9vbGVhbixcbiAgICAgICAgbGVmdFRleHQ6IFN0cmluZyxcbiAgICAgICAgcmlnaHRUZXh0OiBTdHJpbmcsXG4gICAgICAgIGxlZnRBcnJvdzogQm9vbGVhbixcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9LFxuICAgICAgICBzYWZlQXJlYUluc2V0VG9wOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiAwXG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1c0JhckhlaWdodCB9ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgc3RhdHVzQmFySGVpZ2h0IH0pO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrTGVmdCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLWxlZnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja1JpZ2h0KCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2stcmlnaHQnKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19