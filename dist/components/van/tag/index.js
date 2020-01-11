'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    props: {
        size: String,
        mark: Boolean,
        color: String,
        plain: Boolean,
        round: Boolean,
        textColor: String,
        type: {
            type: String,
            value: 'default'
        },
        closeable: Boolean
    },
    methods: {
        onClose: function onClose() {
            this.$emit('close');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2l6ZSIsIlN0cmluZyIsIm1hcmsiLCJCb29sZWFuIiwiY29sb3IiLCJwbGFpbiIsInJvdW5kIiwidGV4dENvbG9yIiwidHlwZSIsInZhbHVlIiwiY2xvc2VhYmxlIiwibWV0aG9kcyIsIm9uQ2xvc2UiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsY0FBTUMsT0FGSDtBQUdIQyxlQUFPSCxNQUhKO0FBSUhJLGVBQU9GLE9BSko7QUFLSEcsZUFBT0gsT0FMSjtBQU1ISSxtQkFBV04sTUFOUjtBQU9ITyxjQUFNO0FBQ0ZBLGtCQUFNUCxNQURKO0FBRUZRLG1CQUFPO0FBRkwsU0FQSDtBQVdIQyxtQkFBV1A7QUFYUixLQURHO0FBY1ZRLGFBQVM7QUFDTEMsZUFESyxxQkFDSztBQUNOLGlCQUFLQyxLQUFMLENBQVcsT0FBWDtBQUNIO0FBSEk7QUFkQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICBtYXJrOiBCb29sZWFuLFxuICAgICAgICBjb2xvcjogU3RyaW5nLFxuICAgICAgICBwbGFpbjogQm9vbGVhbixcbiAgICAgICAgcm91bmQ6IEJvb2xlYW4sXG4gICAgICAgIHRleHRDb2xvcjogU3RyaW5nLFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2RlZmF1bHQnXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlYWJsZTogQm9vbGVhblxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsb3NlKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19