'use strict';

var _link = require('./../mixins/link.js');

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    relation: {
        name: 'grid',
        type: 'ancestor',
        linked: function linked(parent) {
            this.parent = parent;
        }
    },
    mixins: [_link.link],
    props: {
        icon: String,
        dot: Boolean,
        info: null,
        text: String,
        useSlot: Boolean
    },
    mounted: function mounted() {
        this.updateStyle();
    },

    methods: {
        updateStyle: function updateStyle() {
            if (!this.parent) {
                return;
            }
            var _parent = this.parent,
                data = _parent.data,
                children = _parent.children;
            var columnNum = data.columnNum,
                border = data.border,
                square = data.square,
                gutter = data.gutter,
                clickable = data.clickable,
                center = data.center;

            var width = 100 / columnNum + '%';
            var styleWrapper = [];
            styleWrapper.push('width: ' + width);
            if (square) {
                styleWrapper.push('padding-top: ' + width);
            }
            if (gutter) {
                var gutterValue = (0, _utils.addUnit)(gutter);
                styleWrapper.push('padding-right: ' + gutterValue);
                var index = children.indexOf(this);
                if (index >= columnNum) {
                    styleWrapper.push('margin-top: ' + gutterValue);
                }
            }
            var contentStyle = '';
            if (square && gutter) {
                var _gutterValue = (0, _utils.addUnit)(gutter);
                contentStyle = '\n          right: ' + _gutterValue + ';\n          bottom: ' + _gutterValue + ';\n          height: auto;\n        ';
            }
            this.setData({
                style: styleWrapper.join('; '),
                contentStyle: contentStyle,
                center: center,
                border: border,
                square: square,
                gutter: gutter,
                clickable: clickable
            });
        },
        onClick: function onClick() {
            this.$emit('click');
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJwYXJlbnQiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJpY29uIiwiU3RyaW5nIiwiZG90IiwiQm9vbGVhbiIsImluZm8iLCJ0ZXh0IiwidXNlU2xvdCIsIm1vdW50ZWQiLCJ1cGRhdGVTdHlsZSIsIm1ldGhvZHMiLCJkYXRhIiwiY2hpbGRyZW4iLCJjb2x1bW5OdW0iLCJib3JkZXIiLCJzcXVhcmUiLCJndXR0ZXIiLCJjbGlja2FibGUiLCJjZW50ZXIiLCJ3aWR0aCIsInN0eWxlV3JhcHBlciIsInB1c2giLCJndXR0ZXJWYWx1ZSIsImluZGV4IiwiaW5kZXhPZiIsImNvbnRlbnRTdHlsZSIsInNldERhdGEiLCJzdHlsZSIsImpvaW4iLCJvbkNsaWNrIiwiJGVtaXQiLCJqdW1wTGluayJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxjQUFVO0FBQ05DLGNBQU0sTUFEQTtBQUVOQyxjQUFNLFVBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1gsaUJBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIO0FBTEssS0FEQTtBQVFWQyxZQUFRLENBQUNDLFVBQUQsQ0FSRTtBQVNWQyxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsYUFBS0MsT0FGRjtBQUdIQyxjQUFNLElBSEg7QUFJSEMsY0FBTUosTUFKSDtBQUtISyxpQkFBU0g7QUFMTixLQVRHO0FBZ0JWSSxXQWhCVSxxQkFnQkE7QUFDTixhQUFLQyxXQUFMO0FBQ0gsS0FsQlM7O0FBbUJWQyxhQUFTO0FBQ0xELG1CQURLLHlCQUNTO0FBQ1YsZ0JBQUksQ0FBQyxLQUFLWixNQUFWLEVBQWtCO0FBQ2Q7QUFDSDtBQUhTLDBCQUlpQixLQUFLQSxNQUp0QjtBQUFBLGdCQUlGYyxJQUpFLFdBSUZBLElBSkU7QUFBQSxnQkFJSUMsUUFKSixXQUlJQSxRQUpKO0FBQUEsZ0JBS0ZDLFNBTEUsR0FLdURGLElBTHZELENBS0ZFLFNBTEU7QUFBQSxnQkFLU0MsTUFMVCxHQUt1REgsSUFMdkQsQ0FLU0csTUFMVDtBQUFBLGdCQUtpQkMsTUFMakIsR0FLdURKLElBTHZELENBS2lCSSxNQUxqQjtBQUFBLGdCQUt5QkMsTUFMekIsR0FLdURMLElBTHZELENBS3lCSyxNQUx6QjtBQUFBLGdCQUtpQ0MsU0FMakMsR0FLdUROLElBTHZELENBS2lDTSxTQUxqQztBQUFBLGdCQUs0Q0MsTUFMNUMsR0FLdURQLElBTHZELENBSzRDTyxNQUw1Qzs7QUFNVixnQkFBTUMsUUFBVyxNQUFNTixTQUFqQixNQUFOO0FBQ0EsZ0JBQU1PLGVBQWUsRUFBckI7QUFDQUEseUJBQWFDLElBQWIsYUFBNEJGLEtBQTVCO0FBQ0EsZ0JBQUlKLE1BQUosRUFBWTtBQUNSSyw2QkFBYUMsSUFBYixtQkFBa0NGLEtBQWxDO0FBQ0g7QUFDRCxnQkFBSUgsTUFBSixFQUFZO0FBQ1Isb0JBQU1NLGNBQWMsb0JBQVFOLE1BQVIsQ0FBcEI7QUFDQUksNkJBQWFDLElBQWIscUJBQW9DQyxXQUFwQztBQUNBLG9CQUFNQyxRQUFRWCxTQUFTWSxPQUFULENBQWlCLElBQWpCLENBQWQ7QUFDQSxvQkFBSUQsU0FBU1YsU0FBYixFQUF3QjtBQUNwQk8saUNBQWFDLElBQWIsa0JBQWlDQyxXQUFqQztBQUNIO0FBQ0o7QUFDRCxnQkFBSUcsZUFBZSxFQUFuQjtBQUNBLGdCQUFJVixVQUFVQyxNQUFkLEVBQXNCO0FBQ2xCLG9CQUFNTSxlQUFjLG9CQUFRTixNQUFSLENBQXBCO0FBQ0FTLHVEQUNHSCxZQURILDZCQUVJQSxZQUZKO0FBS0g7QUFDRCxpQkFBS0ksT0FBTCxDQUFhO0FBQ1RDLHVCQUFPUCxhQUFhUSxJQUFiLENBQWtCLElBQWxCLENBREU7QUFFVEgsMENBRlM7QUFHVFAsOEJBSFM7QUFJVEosOEJBSlM7QUFLVEMsOEJBTFM7QUFNVEMsOEJBTlM7QUFPVEM7QUFQUyxhQUFiO0FBU0gsU0F2Q0k7QUF3Q0xZLGVBeENLLHFCQXdDSztBQUNOLGlCQUFLQyxLQUFMLENBQVcsT0FBWDtBQUNBLGlCQUFLQyxRQUFMO0FBQ0g7QUEzQ0k7QUFuQkMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpbmsgfSBmcm9tICcuLi9taXhpbnMvbGluayc7XG5pbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhZGRVbml0IH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcblZhbnRDb21wb25lbnQoe1xuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdncmlkJyxcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJyxcbiAgICAgICAgbGlua2VkKHBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1peGluczogW2xpbmtdLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgZG90OiBCb29sZWFuLFxuICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICB0ZXh0OiBTdHJpbmcsXG4gICAgICAgIHVzZVNsb3Q6IEJvb2xlYW5cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlU3R5bGUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBjaGlsZHJlbiB9ID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBjb25zdCB7IGNvbHVtbk51bSwgYm9yZGVyLCBzcXVhcmUsIGd1dHRlciwgY2xpY2thYmxlLCBjZW50ZXIgfSA9IGRhdGE7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGAkezEwMCAvIGNvbHVtbk51bX0lYDtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlV3JhcHBlciA9IFtdO1xuICAgICAgICAgICAgc3R5bGVXcmFwcGVyLnB1c2goYHdpZHRoOiAke3dpZHRofWApO1xuICAgICAgICAgICAgaWYgKHNxdWFyZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlV3JhcHBlci5wdXNoKGBwYWRkaW5nLXRvcDogJHt3aWR0aH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChndXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBndXR0ZXJWYWx1ZSA9IGFkZFVuaXQoZ3V0dGVyKTtcbiAgICAgICAgICAgICAgICBzdHlsZVdyYXBwZXIucHVzaChgcGFkZGluZy1yaWdodDogJHtndXR0ZXJWYWx1ZX1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNvbHVtbk51bSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVdyYXBwZXIucHVzaChgbWFyZ2luLXRvcDogJHtndXR0ZXJWYWx1ZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29udGVudFN0eWxlID0gJyc7XG4gICAgICAgICAgICBpZiAoc3F1YXJlICYmIGd1dHRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGd1dHRlclZhbHVlID0gYWRkVW5pdChndXR0ZXIpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZSA9IGBcbiAgICAgICAgICByaWdodDogJHtndXR0ZXJWYWx1ZX07XG4gICAgICAgICAgYm90dG9tOiAke2d1dHRlclZhbHVlfTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZVdyYXBwZXIuam9pbignOyAnKSxcbiAgICAgICAgICAgICAgICBjb250ZW50U3R5bGUsXG4gICAgICAgICAgICAgICAgY2VudGVyLFxuICAgICAgICAgICAgICAgIGJvcmRlcixcbiAgICAgICAgICAgICAgICBzcXVhcmUsXG4gICAgICAgICAgICAgICAgZ3V0dGVyLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycpO1xuICAgICAgICAgICAgdGhpcy5qdW1wTGluaygpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=