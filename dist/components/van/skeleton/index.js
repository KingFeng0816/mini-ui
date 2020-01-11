'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    props: {
        row: {
            type: Number,
            value: 0
        },
        title: Boolean,
        avatar: Boolean,
        loading: {
            type: Boolean,
            value: true
        },
        animate: {
            type: Boolean,
            value: true
        },
        avatarSize: {
            type: String,
            value: '32px'
        },
        avatarShape: {
            type: String,
            value: 'round'
        },
        titleWidth: {
            type: String,
            value: '40%'
        },
        rowWidth: {
            type: null,
            value: '100%',
            observer: function observer(val) {
                this.setData({ isArray: val instanceof Array });
            }
        }
    },
    data: {
        isArray: false
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwicm93IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwidGl0bGUiLCJCb29sZWFuIiwiYXZhdGFyIiwibG9hZGluZyIsImFuaW1hdGUiLCJhdmF0YXJTaXplIiwiU3RyaW5nIiwiYXZhdGFyU2hhcGUiLCJ0aXRsZVdpZHRoIiwicm93V2lkdGgiLCJvYnNlcnZlciIsInZhbCIsInNldERhdGEiLCJpc0FycmF5IiwiQXJyYXkiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU87QUFDSEMsYUFBSztBQUNEQyxrQkFBTUMsTUFETDtBQUVEQyxtQkFBTztBQUZOLFNBREY7QUFLSEMsZUFBT0MsT0FMSjtBQU1IQyxnQkFBUUQsT0FOTDtBQU9IRSxpQkFBUztBQUNMTixrQkFBTUksT0FERDtBQUVMRixtQkFBTztBQUZGLFNBUE47QUFXSEssaUJBQVM7QUFDTFAsa0JBQU1JLE9BREQ7QUFFTEYsbUJBQU87QUFGRixTQVhOO0FBZUhNLG9CQUFZO0FBQ1JSLGtCQUFNUyxNQURFO0FBRVJQLG1CQUFPO0FBRkMsU0FmVDtBQW1CSFEscUJBQWE7QUFDVFYsa0JBQU1TLE1BREc7QUFFVFAsbUJBQU87QUFGRSxTQW5CVjtBQXVCSFMsb0JBQVk7QUFDUlgsa0JBQU1TLE1BREU7QUFFUlAsbUJBQU87QUFGQyxTQXZCVDtBQTJCSFUsa0JBQVU7QUFDTlosa0JBQU0sSUFEQTtBQUVORSxtQkFBTyxNQUZEO0FBR05XLG9CQUhNLG9CQUdHQyxHQUhILEVBR1E7QUFDVixxQkFBS0MsT0FBTCxDQUFhLEVBQUVDLFNBQVNGLGVBQWVHLEtBQTFCLEVBQWI7QUFDSDtBQUxLO0FBM0JQLEtBREc7QUFvQ1ZDLFVBQU07QUFDRkYsaUJBQVM7QUFEUDtBQXBDSSxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgcm93OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZTogQm9vbGVhbixcbiAgICAgICAgYXZhdGFyOiBCb29sZWFuLFxuICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGF2YXRhclNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnMzJweCdcbiAgICAgICAgfSxcbiAgICAgICAgYXZhdGFyU2hhcGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAncm91bmQnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlV2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnNDAlJ1xuICAgICAgICB9LFxuICAgICAgICByb3dXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiAnMTAwJScsXG4gICAgICAgICAgICBvYnNlcnZlcih2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBpc0FycmF5OiB2YWwgaW5zdGFuY2VvZiBBcnJheSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBpc0FycmF5OiBmYWxzZVxuICAgIH1cbn0pO1xuIl19