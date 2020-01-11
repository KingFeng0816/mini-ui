'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'radio-group',
        type: 'ancestor',
        linked: function linked(target) {
            this.parent = target;
        },
        unlinked: function unlinked() {
            this.parent = null;
        }
    },
    classes: ['icon-class', 'label-class'],
    props: {
        value: null,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: {
            type: String,
            value: 'right'
        },
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: 'round'
        },
        iconSize: {
            type: null,
            observer: 'setIconSizeUnit'
        }
    },
    data: {
        iconSizeWithUnit: '20px'
    },
    methods: {
        setIconSizeUnit: function setIconSizeUnit(val) {
            this.setData({
                iconSizeWithUnit: (0, _utils.addUnit)(val)
            });
        },
        emitChange: function emitChange(value) {
            var instance = this.parent || this;
            instance.$emit('input', value);
            instance.$emit('change', value);
        },
        onChange: function onChange(event) {
            console.log(event);
            this.emitChange(this.data.name);
        },
        onClickLabel: function onClickLabel() {
            var _data = this.data,
                disabled = _data.disabled,
                labelDisabled = _data.labelDisabled,
                name = _data.name;

            if (!disabled && !labelDisabled) {
                this.emitChange(name);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsInBhcmVudCIsInVubGlua2VkIiwiY2xhc3NlcyIsInByb3BzIiwidmFsdWUiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ1c2VJY29uU2xvdCIsImNoZWNrZWRDb2xvciIsIlN0cmluZyIsImxhYmVsUG9zaXRpb24iLCJsYWJlbERpc2FibGVkIiwic2hhcGUiLCJpY29uU2l6ZSIsIm9ic2VydmVyIiwiZGF0YSIsImljb25TaXplV2l0aFVuaXQiLCJtZXRob2RzIiwic2V0SWNvblNpemVVbml0IiwidmFsIiwic2V0RGF0YSIsImVtaXRDaGFuZ2UiLCJpbnN0YW5jZSIsIiRlbWl0Iiwib25DaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrTGFiZWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTyxJQURHO0FBRVZDLGNBQVU7QUFDTkMsY0FBTSxhQURBO0FBRU5DLGNBQU0sVUFGQTtBQUdOQyxjQUhNLGtCQUdDQyxNQUhELEVBR1M7QUFDWCxpQkFBS0MsTUFBTCxHQUFjRCxNQUFkO0FBQ0gsU0FMSztBQU1ORSxnQkFOTSxzQkFNSztBQUNQLGlCQUFLRCxNQUFMLEdBQWMsSUFBZDtBQUNIO0FBUkssS0FGQTtBQVlWRSxhQUFTLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FaQztBQWFWQyxXQUFPO0FBQ0hDLGVBQU8sSUFESjtBQUVIQyxrQkFBVUMsT0FGUDtBQUdIQyxxQkFBYUQsT0FIVjtBQUlIRSxzQkFBY0MsTUFKWDtBQUtIQyx1QkFBZTtBQUNYYixrQkFBTVksTUFESztBQUVYTCxtQkFBTztBQUZJLFNBTFo7QUFTSE8sdUJBQWVMLE9BVFo7QUFVSE0sZUFBTztBQUNIZixrQkFBTVksTUFESDtBQUVITCxtQkFBTztBQUZKLFNBVko7QUFjSFMsa0JBQVU7QUFDTmhCLGtCQUFNLElBREE7QUFFTmlCLHNCQUFVO0FBRko7QUFkUCxLQWJHO0FBZ0NWQyxVQUFNO0FBQ0ZDLDBCQUFrQjtBQURoQixLQWhDSTtBQW1DVkMsYUFBUztBQUNMQyx1QkFESywyQkFDV0MsR0FEWCxFQUNnQjtBQUNqQixpQkFBS0MsT0FBTCxDQUFhO0FBQ1RKLGtDQUFrQixvQkFBUUcsR0FBUjtBQURULGFBQWI7QUFHSCxTQUxJO0FBTUxFLGtCQU5LLHNCQU1NakIsS0FOTixFQU1hO0FBQ2QsZ0JBQU1rQixXQUFXLEtBQUt0QixNQUFMLElBQWUsSUFBaEM7QUFDQXNCLHFCQUFTQyxLQUFULENBQWUsT0FBZixFQUF3Qm5CLEtBQXhCO0FBQ0FrQixxQkFBU0MsS0FBVCxDQUFlLFFBQWYsRUFBeUJuQixLQUF6QjtBQUNILFNBVkk7QUFXTG9CLGdCQVhLLG9CQVdJQyxLQVhKLEVBV1c7QUFDWkMsb0JBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLGlCQUFLSixVQUFMLENBQWdCLEtBQUtOLElBQUwsQ0FBVW5CLElBQTFCO0FBQ0gsU0FkSTtBQWVMZ0Msb0JBZkssMEJBZVU7QUFBQSx3QkFDK0IsS0FBS2IsSUFEcEM7QUFBQSxnQkFDSFYsUUFERyxTQUNIQSxRQURHO0FBQUEsZ0JBQ09NLGFBRFAsU0FDT0EsYUFEUDtBQUFBLGdCQUNzQmYsSUFEdEIsU0FDc0JBLElBRHRCOztBQUVYLGdCQUFJLENBQUNTLFFBQUQsSUFBYSxDQUFDTSxhQUFsQixFQUFpQztBQUM3QixxQkFBS1UsVUFBTCxDQUFnQnpCLElBQWhCO0FBQ0g7QUFDSjtBQXBCSTtBQW5DQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgYWRkVW5pdCB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAncmFkaW8tZ3JvdXAnLFxuICAgICAgICB0eXBlOiAnYW5jZXN0b3InLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHRhcmdldDtcbiAgICAgICAgfSxcbiAgICAgICAgdW5saW5rZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsYXNzZXM6IFsnaWNvbi1jbGFzcycsICdsYWJlbC1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgdXNlSWNvblNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIGNoZWNrZWRDb2xvcjogU3RyaW5nLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3JpZ2h0J1xuICAgICAgICB9LFxuICAgICAgICBsYWJlbERpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdyb3VuZCdcbiAgICAgICAgfSxcbiAgICAgICAgaWNvblNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldEljb25TaXplVW5pdCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBpY29uU2l6ZVdpdGhVbml0OiAnMjBweCdcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0SWNvblNpemVVbml0KHZhbCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBpY29uU2l6ZVdpdGhVbml0OiBhZGRVbml0KHZhbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbWl0Q2hhbmdlKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMucGFyZW50IHx8IHRoaXM7XG4gICAgICAgICAgICBpbnN0YW5jZS4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKHRoaXMuZGF0YS5uYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja0xhYmVsKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgbGFiZWxEaXNhYmxlZCwgbmFtZSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZCAmJiAhbGFiZWxEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19