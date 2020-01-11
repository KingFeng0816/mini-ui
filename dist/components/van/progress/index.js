'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    props: {
        inactive: Boolean,
        percentage: Number,
        pivotText: String,
        pivotColor: String,
        trackColor: String,
        showPivot: {
            type: Boolean,
            value: true
        },
        color: {
            type: String,
            value: _color.BLUE
        },
        textColor: {
            type: String,
            value: '#fff'
        },
        strokeWidth: {
            type: null,
            observer: 'setStrokeWidthUnit'
        }
    },
    data: {
        strokeWidthUnit: '4px'
    },
    methods: {
        setStrokeWidthUnit: function setStrokeWidthUnit(val) {
            this.setData({
                strokeWidthUnit: (0, _utils.addUnit)(val)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5hY3RpdmUiLCJCb29sZWFuIiwicGVyY2VudGFnZSIsIk51bWJlciIsInBpdm90VGV4dCIsIlN0cmluZyIsInBpdm90Q29sb3IiLCJ0cmFja0NvbG9yIiwic2hvd1Bpdm90IiwidHlwZSIsInZhbHVlIiwiY29sb3IiLCJCTFVFIiwidGV4dENvbG9yIiwic3Ryb2tlV2lkdGgiLCJvYnNlcnZlciIsImRhdGEiLCJzdHJva2VXaWR0aFVuaXQiLCJtZXRob2RzIiwic2V0U3Ryb2tlV2lkdGhVbml0IiwidmFsIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPO0FBQ0hDLGtCQUFVQyxPQURQO0FBRUhDLG9CQUFZQyxNQUZUO0FBR0hDLG1CQUFXQyxNQUhSO0FBSUhDLG9CQUFZRCxNQUpUO0FBS0hFLG9CQUFZRixNQUxUO0FBTUhHLG1CQUFXO0FBQ1BDLGtCQUFNUixPQURDO0FBRVBTLG1CQUFPO0FBRkEsU0FOUjtBQVVIQyxlQUFPO0FBQ0hGLGtCQUFNSixNQURIO0FBRUhLLG1CQUFPRTtBQUZKLFNBVko7QUFjSEMsbUJBQVc7QUFDUEosa0JBQU1KLE1BREM7QUFFUEssbUJBQU87QUFGQSxTQWRSO0FBa0JISSxxQkFBYTtBQUNUTCxrQkFBTSxJQURHO0FBRVRNLHNCQUFVO0FBRkQ7QUFsQlYsS0FERztBQXdCVkMsVUFBTTtBQUNGQyx5QkFBaUI7QUFEZixLQXhCSTtBQTJCVkMsYUFBUztBQUNMQywwQkFESyw4QkFDY0MsR0FEZCxFQUNtQjtBQUNwQixpQkFBS0MsT0FBTCxDQUFhO0FBQ1RKLGlDQUFpQixvQkFBUUcsR0FBUjtBQURSLGFBQWI7QUFHSDtBQUxJO0FBM0JDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBCTFVFIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yJztcbmltcG9ydCB7IGFkZFVuaXQgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgaW5hY3RpdmU6IEJvb2xlYW4sXG4gICAgICAgIHBlcmNlbnRhZ2U6IE51bWJlcixcbiAgICAgICAgcGl2b3RUZXh0OiBTdHJpbmcsXG4gICAgICAgIHBpdm90Q29sb3I6IFN0cmluZyxcbiAgICAgICAgdHJhY2tDb2xvcjogU3RyaW5nLFxuICAgICAgICBzaG93UGl2b3Q6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IEJMVUVcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJyNmZmYnXG4gICAgICAgIH0sXG4gICAgICAgIHN0cm9rZVdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRTdHJva2VXaWR0aFVuaXQnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc3Ryb2tlV2lkdGhVbml0OiAnNHB4J1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRTdHJva2VXaWR0aFVuaXQodmFsKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoVW5pdDogYWRkVW5pdCh2YWwpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19