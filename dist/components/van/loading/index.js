'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    props: {
        color: String,
        vertical: Boolean,
        type: {
            type: String,
            value: 'circular'
        },
        size: {
            type: String,
            observer: 'setSizeWithUnit'
        },
        textSize: {
            type: String,
            observer: 'setTextSizeWithUnit'
        }
    },
    methods: {
        setSizeWithUnit: function setSizeWithUnit(size) {
            this.setData({
                sizeWithUnit: (0, _utils.addUnit)(size)
            });
        },
        setTextSizeWithUnit: function setTextSizeWithUnit(size) {
            this.set({
                textSizeWithUnit: (0, _utils.addUnit)(size)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiY29sb3IiLCJTdHJpbmciLCJ2ZXJ0aWNhbCIsIkJvb2xlYW4iLCJ0eXBlIiwidmFsdWUiLCJzaXplIiwib2JzZXJ2ZXIiLCJ0ZXh0U2l6ZSIsIm1ldGhvZHMiLCJzZXRTaXplV2l0aFVuaXQiLCJzZXREYXRhIiwic2l6ZVdpdGhVbml0Iiwic2V0VGV4dFNpemVXaXRoVW5pdCIsInNldCIsInRleHRTaXplV2l0aFVuaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTztBQUNIQyxlQUFPQyxNQURKO0FBRUhDLGtCQUFVQyxPQUZQO0FBR0hDLGNBQU07QUFDRkEsa0JBQU1ILE1BREo7QUFFRkksbUJBQU87QUFGTCxTQUhIO0FBT0hDLGNBQU07QUFDRkYsa0JBQU1ILE1BREo7QUFFRk0sc0JBQVU7QUFGUixTQVBIO0FBV0hDLGtCQUFVO0FBQ05KLGtCQUFNSCxNQURBO0FBRU5NLHNCQUFVO0FBRko7QUFYUCxLQURHO0FBaUJWRSxhQUFTO0FBQ0xDLHVCQURLLDJCQUNXSixJQURYLEVBQ2lCO0FBQ2xCLGlCQUFLSyxPQUFMLENBQWE7QUFDVEMsOEJBQWMsb0JBQVFOLElBQVI7QUFETCxhQUFiO0FBR0gsU0FMSTtBQU1MTywyQkFOSywrQkFNZVAsSUFOZixFQU1xQjtBQUN0QixpQkFBS1EsR0FBTCxDQUFTO0FBQ0xDLGtDQUFrQixvQkFBUVQsSUFBUjtBQURiLGFBQVQ7QUFHSDtBQVZJO0FBakJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhZGRVbml0IH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2NpcmN1bGFyJ1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldFNpemVXaXRoVW5pdCdcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dFNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0VGV4dFNpemVXaXRoVW5pdCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRTaXplV2l0aFVuaXQoc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBzaXplV2l0aFVuaXQ6IGFkZFVuaXQoc2l6ZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRUZXh0U2l6ZVdpdGhVbml0KHNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICB0ZXh0U2l6ZVdpdGhVbml0OiBhZGRVbml0KHNpemUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19