'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['node-class'],
    props: {
        checked: null,
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        size: {
            type: String,
            value: '30px'
        },
        activeValue: {
            type: null,
            value: true
        },
        inactiveValue: {
            type: null,
            value: false
        }
    },
    watch: {
        checked: function checked(value) {
            var loadingColor = this.getLoadingColor(value);
            this.setData({ value: value, loadingColor: loadingColor });
        }
    },
    created: function created() {
        var value = this.data.checked;

        var loadingColor = this.getLoadingColor(value);
        this.setData({ value: value, loadingColor: loadingColor });
    },

    methods: {
        getLoadingColor: function getLoadingColor(checked) {
            var _data = this.data,
                activeColor = _data.activeColor,
                inactiveColor = _data.inactiveColor;

            return checked ? activeColor || _color.BLUE : inactiveColor || _color.GRAY_DARK;
        },
        onClick: function onClick() {
            var _data2 = this.data,
                activeValue = _data2.activeValue,
                inactiveValue = _data2.inactiveValue;

            if (!this.data.disabled && !this.data.loading) {
                var checked = this.data.checked === activeValue;
                var value = checked ? inactiveValue : activeValue;
                this.$emit('input', value);
                this.$emit('change', value);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiY2hlY2tlZCIsImxvYWRpbmciLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJhY3RpdmVDb2xvciIsIlN0cmluZyIsImluYWN0aXZlQ29sb3IiLCJzaXplIiwidHlwZSIsInZhbHVlIiwiYWN0aXZlVmFsdWUiLCJpbmFjdGl2ZVZhbHVlIiwid2F0Y2giLCJsb2FkaW5nQ29sb3IiLCJnZXRMb2FkaW5nQ29sb3IiLCJzZXREYXRhIiwiY3JlYXRlZCIsImRhdGEiLCJtZXRob2RzIiwiQkxVRSIsIkdSQVlfREFSSyIsIm9uQ2xpY2siLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPLElBREc7QUFFVkMsYUFBUyxDQUFDLFlBQUQsQ0FGQztBQUdWQyxXQUFPO0FBQ0hDLGlCQUFTLElBRE47QUFFSEMsaUJBQVNDLE9BRk47QUFHSEMsa0JBQVVELE9BSFA7QUFJSEUscUJBQWFDLE1BSlY7QUFLSEMsdUJBQWVELE1BTFo7QUFNSEUsY0FBTTtBQUNGQyxrQkFBTUgsTUFESjtBQUVGSSxtQkFBTztBQUZMLFNBTkg7QUFVSEMscUJBQWE7QUFDVEYsa0JBQU0sSUFERztBQUVUQyxtQkFBTztBQUZFLFNBVlY7QUFjSEUsdUJBQWU7QUFDWEgsa0JBQU0sSUFESztBQUVYQyxtQkFBTztBQUZJO0FBZFosS0FIRztBQXNCVkcsV0FBTztBQUNIWixlQURHLG1CQUNLUyxLQURMLEVBQ1k7QUFDWCxnQkFBTUksZUFBZSxLQUFLQyxlQUFMLENBQXFCTCxLQUFyQixDQUFyQjtBQUNBLGlCQUFLTSxPQUFMLENBQWEsRUFBRU4sWUFBRixFQUFTSSwwQkFBVCxFQUFiO0FBQ0g7QUFKRSxLQXRCRztBQTRCVkcsV0E1QlUscUJBNEJBO0FBQUEsWUFDV1AsS0FEWCxHQUNxQixLQUFLUSxJQUQxQixDQUNFakIsT0FERjs7QUFFTixZQUFNYSxlQUFlLEtBQUtDLGVBQUwsQ0FBcUJMLEtBQXJCLENBQXJCO0FBQ0EsYUFBS00sT0FBTCxDQUFhLEVBQUVOLFlBQUYsRUFBU0ksMEJBQVQsRUFBYjtBQUNILEtBaENTOztBQWlDVkssYUFBUztBQUNMSix1QkFESywyQkFDV2QsT0FEWCxFQUNvQjtBQUFBLHdCQUNrQixLQUFLaUIsSUFEdkI7QUFBQSxnQkFDYmIsV0FEYSxTQUNiQSxXQURhO0FBQUEsZ0JBQ0FFLGFBREEsU0FDQUEsYUFEQTs7QUFFckIsbUJBQU9OLFVBQVVJLGVBQWVlLFdBQXpCLEdBQWdDYixpQkFBaUJjLGdCQUF4RDtBQUNILFNBSkk7QUFLTEMsZUFMSyxxQkFLSztBQUFBLHlCQUNpQyxLQUFLSixJQUR0QztBQUFBLGdCQUNFUCxXQURGLFVBQ0VBLFdBREY7QUFBQSxnQkFDZUMsYUFEZixVQUNlQSxhQURmOztBQUVOLGdCQUFJLENBQUMsS0FBS00sSUFBTCxDQUFVZCxRQUFYLElBQXVCLENBQUMsS0FBS2MsSUFBTCxDQUFVaEIsT0FBdEMsRUFBK0M7QUFDM0Msb0JBQU1ELFVBQVUsS0FBS2lCLElBQUwsQ0FBVWpCLE9BQVYsS0FBc0JVLFdBQXRDO0FBQ0Esb0JBQU1ELFFBQVFULFVBQVVXLGFBQVYsR0FBMEJELFdBQXhDO0FBQ0EscUJBQUtZLEtBQUwsQ0FBVyxPQUFYLEVBQW9CYixLQUFwQjtBQUNBLHFCQUFLYSxLQUFMLENBQVcsUUFBWCxFQUFxQmIsS0FBckI7QUFDSDtBQUNKO0FBYkk7QUFqQ0MsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IEJMVUUsIEdSQVlfREFSSyB9IGZyb20gJy4uL2NvbW1vbi9jb2xvcic7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICBjbGFzc2VzOiBbJ25vZGUtY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICBjaGVja2VkOiBudWxsLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICAgICAgaW5hY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJzMwcHgnXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZVZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgaW5hY3RpdmVWYWx1ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBjaGVja2VkKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkaW5nQ29sb3IgPSB0aGlzLmdldExvYWRpbmdDb2xvcih2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyB2YWx1ZSwgbG9hZGluZ0NvbG9yIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBjb25zdCB7IGNoZWNrZWQ6IHZhbHVlIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdDb2xvciA9IHRoaXMuZ2V0TG9hZGluZ0NvbG9yKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgdmFsdWUsIGxvYWRpbmdDb2xvciB9KTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0TG9hZGluZ0NvbG9yKGNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYWN0aXZlQ29sb3IsIGluYWN0aXZlQ29sb3IgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBjaGVja2VkID8gYWN0aXZlQ29sb3IgfHwgQkxVRSA6IGluYWN0aXZlQ29sb3IgfHwgR1JBWV9EQVJLO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrKCkge1xuICAgICAgICAgICAgY29uc3QgeyBhY3RpdmVWYWx1ZSwgaW5hY3RpdmVWYWx1ZSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuZGF0YS5jaGVja2VkID09PSBhY3RpdmVWYWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNoZWNrZWQgPyBpbmFjdGl2ZVZhbHVlIDogYWN0aXZlVmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=