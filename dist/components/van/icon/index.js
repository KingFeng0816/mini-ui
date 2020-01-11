'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    props: {
        dot: Boolean,
        info: null,
        size: {
            type: null,
            observer: 'setSizeWithUnit'
        },
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: 'van-icon'
        },
        name: {
            type: String,
            observer: function observer(val) {
                this.setData({
                    isImageName: val.indexOf('/') !== -1
                });
            }
        }
    },
    data: {
        sizeWithUnit: null
    },
    methods: {
        onClick: function onClick() {
            this.$emit('click');
        },
        setSizeWithUnit: function setSizeWithUnit(size) {
            this.setData({
                sizeWithUnit: (0, _utils.addUnit)(size)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiZG90IiwiQm9vbGVhbiIsImluZm8iLCJzaXplIiwidHlwZSIsIm9ic2VydmVyIiwiY29sb3IiLCJTdHJpbmciLCJjdXN0b21TdHlsZSIsImNsYXNzUHJlZml4IiwidmFsdWUiLCJuYW1lIiwidmFsIiwic2V0RGF0YSIsImlzSW1hZ2VOYW1lIiwiaW5kZXhPZiIsImRhdGEiLCJzaXplV2l0aFVuaXQiLCJtZXRob2RzIiwib25DbGljayIsIiRlbWl0Iiwic2V0U2l6ZVdpdGhVbml0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU87QUFDSEMsYUFBS0MsT0FERjtBQUVIQyxjQUFNLElBRkg7QUFHSEMsY0FBTTtBQUNGQyxrQkFBTSxJQURKO0FBRUZDLHNCQUFVO0FBRlIsU0FISDtBQU9IQyxlQUFPQyxNQVBKO0FBUUhDLHFCQUFhRCxNQVJWO0FBU0hFLHFCQUFhO0FBQ1RMLGtCQUFNRyxNQURHO0FBRVRHLG1CQUFPO0FBRkUsU0FUVjtBQWFIQyxjQUFNO0FBQ0ZQLGtCQUFNRyxNQURKO0FBRUZGLG9CQUZFLG9CQUVPTyxHQUZQLEVBRVk7QUFDVixxQkFBS0MsT0FBTCxDQUFhO0FBQ1RDLGlDQUFhRixJQUFJRyxPQUFKLENBQVksR0FBWixNQUFxQixDQUFDO0FBRDFCLGlCQUFiO0FBR0g7QUFOQztBQWJILEtBREc7QUF1QlZDLFVBQU07QUFDRkMsc0JBQWM7QUFEWixLQXZCSTtBQTBCVkMsYUFBUztBQUNMQyxlQURLLHFCQUNLO0FBQ04saUJBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FISTtBQUlMQyx1QkFKSywyQkFJV2xCLElBSlgsRUFJaUI7QUFDbEIsaUJBQUtVLE9BQUwsQ0FBYTtBQUNUSSw4QkFBYyxvQkFBUWQsSUFBUjtBQURMLGFBQWI7QUFHSDtBQVJJO0FBMUJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhZGRVbml0IH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGRvdDogQm9vbGVhbixcbiAgICAgICAgaW5mbzogbnVsbCxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0U2l6ZVdpdGhVbml0J1xuICAgICAgICB9LFxuICAgICAgICBjb2xvcjogU3RyaW5nLFxuICAgICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgICAgICBjbGFzc1ByZWZpeDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd2YW4taWNvbidcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgb2JzZXJ2ZXIodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgaXNJbWFnZU5hbWU6IHZhbC5pbmRleE9mKCcvJykgIT09IC0xXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc2l6ZVdpdGhVbml0OiBudWxsLFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U2l6ZVdpdGhVbml0KHNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgc2l6ZVdpdGhVbml0OiBhZGRVbml0KHNpemUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19