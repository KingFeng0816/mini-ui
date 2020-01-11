'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        name: 'row',
        type: 'ancestor'
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        style: ''
    },
    methods: {
        setGutter: function setGutter(gutter) {
            var padding = gutter / 2 + 'px';
            var style = gutter ? 'padding-left: ' + padding + '; padding-right: ' + padding + ';' : '';
            if (style !== this.data.style) {
                this.setData({ style: style });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsInNwYW4iLCJOdW1iZXIiLCJvZmZzZXQiLCJkYXRhIiwic3R5bGUiLCJtZXRob2RzIiwic2V0R3V0dGVyIiwiZ3V0dGVyIiwicGFkZGluZyIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsY0FBVTtBQUNOQyxjQUFNLEtBREE7QUFFTkMsY0FBTTtBQUZBLEtBREE7QUFLVkMsV0FBTztBQUNIQyxjQUFNQyxNQURIO0FBRUhDLGdCQUFRRDtBQUZMLEtBTEc7QUFTVkUsVUFBTTtBQUNGQyxlQUFPO0FBREwsS0FUSTtBQVlWQyxhQUFTO0FBQ0xDLGlCQURLLHFCQUNLQyxNQURMLEVBQ2E7QUFDZCxnQkFBTUMsVUFBYUQsU0FBUyxDQUF0QixPQUFOO0FBQ0EsZ0JBQU1ILFFBQVFHLDRCQUEwQkMsT0FBMUIseUJBQXFEQSxPQUFyRCxTQUFrRSxFQUFoRjtBQUNBLGdCQUFJSixVQUFVLEtBQUtELElBQUwsQ0FBVUMsS0FBeEIsRUFBK0I7QUFDM0IscUJBQUtLLE9BQUwsQ0FBYSxFQUFFTCxZQUFGLEVBQWI7QUFDSDtBQUNKO0FBUEk7QUFaQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3JvdycsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcidcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNwYW46IE51bWJlcixcbiAgICAgICAgb2Zmc2V0OiBOdW1iZXJcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc3R5bGU6ICcnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEd1dHRlcihndXR0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSBgJHtndXR0ZXIgLyAyfXB4YDtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZ3V0dGVyID8gYHBhZGRpbmctbGVmdDogJHtwYWRkaW5nfTsgcGFkZGluZy1yaWdodDogJHtwYWRkaW5nfTtgIDogJyc7XG4gICAgICAgICAgICBpZiAoc3R5bGUgIT09IHRoaXMuZGF0YS5zdHlsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHN0eWxlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=