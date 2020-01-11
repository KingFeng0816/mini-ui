'use strict';

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    mixins: [_touch.touch],
    props: {
        disabled: Boolean,
        useButtonSlot: Boolean,
        activeColor: String,
        inactiveColor: String,
        max: {
            type: Number,
            value: 100
        },
        min: {
            type: Number,
            value: 0
        },
        step: {
            type: Number,
            value: 1
        },
        value: {
            type: Number,
            value: 0
        },
        barHeight: {
            type: null,
            value: '2px'
        }
    },
    watch: {
        value: function value(_value) {
            this.updateValue(_value, false);
        }
    },
    created: function created() {
        this.updateValue(this.data.value);
    },

    methods: {
        onTouchStart: function onTouchStart(event) {
            if (this.data.disabled) return;
            this.touchStart(event);
            this.startValue = this.format(this.data.value);
            this.dragStatus = 'start';
        },
        onTouchMove: function onTouchMove(event) {
            var _this = this;

            if (this.data.disabled) return;
            if (this.dragStatus === 'start') {
                this.$emit('drag-start');
            }
            this.touchMove(event);
            this.dragStatus = 'draging';
            this.getRect('.van-slider').then(function (rect) {
                var diff = _this.deltaX / rect.width * 100;
                _this.newValue = _this.startValue + diff;
                _this.updateValue(_this.newValue, false, true);
            });
        },
        onTouchEnd: function onTouchEnd() {
            if (this.data.disabled) return;
            if (this.dragStatus === 'draging') {
                this.updateValue(this.newValue, true);
                this.$emit('drag-end');
            }
        },
        onClick: function onClick(event) {
            var _this2 = this;

            if (this.data.disabled) return;
            var min = this.data.min;

            this.getRect('.van-slider').then(function (rect) {
                var value = (event.detail.x - rect.left) / rect.width * _this2.getRange() + min;
                _this2.updateValue(value, true);
            });
        },
        updateValue: function updateValue(value, end, drag) {
            value = this.format(value);
            var _data = this.data,
                barHeight = _data.barHeight,
                min = _data.min;

            var width = (value - min) * 100 / this.getRange() + '%';
            this.setData({
                value: value,
                barStyle: '\n          width: ' + width + ';\n          height: ' + (0, _utils.addUnit)(barHeight) + ';\n          ' + (drag ? 'transition: none;' : '') + '\n        '
            });
            if (drag) {
                this.$emit('drag', { value: value });
            }
            if (end) {
                this.$emit('change', value);
            }
        },
        getRange: function getRange() {
            var _data2 = this.data,
                max = _data2.max,
                min = _data2.min;

            return max - min;
        },
        format: function format(value) {
            var _data3 = this.data,
                max = _data3.max,
                min = _data3.min,
                step = _data3.step;

            return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInRvdWNoIiwicHJvcHMiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ1c2VCdXR0b25TbG90IiwiYWN0aXZlQ29sb3IiLCJTdHJpbmciLCJpbmFjdGl2ZUNvbG9yIiwibWF4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwibWluIiwic3RlcCIsImJhckhlaWdodCIsIndhdGNoIiwidXBkYXRlVmFsdWUiLCJjcmVhdGVkIiwiZGF0YSIsIm1ldGhvZHMiLCJvblRvdWNoU3RhcnQiLCJldmVudCIsInRvdWNoU3RhcnQiLCJzdGFydFZhbHVlIiwiZm9ybWF0IiwiZHJhZ1N0YXR1cyIsIm9uVG91Y2hNb3ZlIiwiJGVtaXQiLCJ0b3VjaE1vdmUiLCJnZXRSZWN0IiwidGhlbiIsInJlY3QiLCJkaWZmIiwiZGVsdGFYIiwid2lkdGgiLCJuZXdWYWx1ZSIsIm9uVG91Y2hFbmQiLCJvbkNsaWNrIiwiZGV0YWlsIiwieCIsImxlZnQiLCJnZXRSYW5nZSIsImVuZCIsImRyYWciLCJzZXREYXRhIiwiYmFyU3R5bGUiLCJNYXRoIiwicm91bmQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsWUFBUSxDQUFDQyxZQUFELENBREU7QUFFVkMsV0FBTztBQUNIQyxrQkFBVUMsT0FEUDtBQUVIQyx1QkFBZUQsT0FGWjtBQUdIRSxxQkFBYUMsTUFIVjtBQUlIQyx1QkFBZUQsTUFKWjtBQUtIRSxhQUFLO0FBQ0RDLGtCQUFNQyxNQURMO0FBRURDLG1CQUFPO0FBRk4sU0FMRjtBQVNIQyxhQUFLO0FBQ0RILGtCQUFNQyxNQURMO0FBRURDLG1CQUFPO0FBRk4sU0FURjtBQWFIRSxjQUFNO0FBQ0ZKLGtCQUFNQyxNQURKO0FBRUZDLG1CQUFPO0FBRkwsU0FiSDtBQWlCSEEsZUFBTztBQUNIRixrQkFBTUMsTUFESDtBQUVIQyxtQkFBTztBQUZKLFNBakJKO0FBcUJIRyxtQkFBVztBQUNQTCxrQkFB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SjZCLE9BQU8sbUJBQVAsR0FBNkIsRUFIekI7QUFGUyxhQUFiO0FBUUEsZ0JBQUlBLElBQUosRUFBVTtBQUNOLHFCQUFLaEIsS0FBTCxDQUFXLE1BQVgsRUFBbUIsRUFBRWhCLFlBQUYsRUFBbkI7QUFDSDtBQUNELGdCQUFJK0IsR0FBSixFQUFTO0FBQ0wscUJBQUtmLEtBQUwsQ0FBVyxRQUFYLEVBQXFCaEIsS0FBckI7QUFDSDtBQUNKLFNBekRJO0FBMERMOEIsZ0JBMURLLHNCQTBETTtBQUFBLHlCQUNjLEtBQUt2QixJQURuQjtBQUFBLGdCQUNDVixHQURELFVBQ0NBLEdBREQ7QUFBQSxnQkFDTUksR0FETixVQUNNQSxHQUROOztBQUVQLG1CQUFPSixNQUFNSSxHQUFiO0FBQ0gsU0E3REk7QUE4RExZLGNBOURLLGtCQThERWIsS0E5REYsRUE4RFM7QUFBQSx5QkFDaUIsS0FBS08sSUFEdEI7QUFBQSxnQkFDRlYsR0FERSxVQUNGQSxHQURFO0FBQUEsZ0JBQ0dJLEdBREgsVUFDR0EsR0FESDtBQUFBLGdCQUNRQyxJQURSLFVBQ1FBLElBRFI7O0FBRVYsbUJBQU9pQyxLQUFLQyxLQUFMLENBQVdELEtBQUt0QyxHQUFMLENBQVNJLEdBQVQsRUFBY2tDLEtBQUtsQyxHQUFMLENBQVNELEtBQVQsRUFBZ0JILEdBQWhCLENBQWQsSUFBc0NLLElBQWpELElBQXlEQSxJQUFoRTtBQUNIO0FBakVJO0FBcENDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyB0b3VjaCB9IGZyb20gJy4uL21peGlucy90b3VjaCc7XG5pbXBvcnQgeyBhZGRVbml0IH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcblZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW3RvdWNoXSxcbiAgICBwcm9wczoge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgdXNlQnV0dG9uU2xvdDogQm9vbGVhbixcbiAgICAgICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICAgICAgaW5hY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAgbWluOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICBzdGVwOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYmFySGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6ICcycHgnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5kYXRhLnZhbHVlKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMudG91Y2hTdGFydChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VmFsdWUgPSB0aGlzLmZvcm1hdCh0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5kcmFnU3RhdHVzID0gJ3N0YXJ0JztcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ1N0YXR1cyA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2RyYWctc3RhcnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudG91Y2hNb3ZlKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXR1cyA9ICdkcmFnaW5nJztcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi1zbGlkZXInKS50aGVuKChyZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMuZGVsdGFYIC8gcmVjdC53aWR0aCAqIDEwMDtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1ZhbHVlID0gdGhpcy5zdGFydFZhbHVlICsgZGlmZjtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMubmV3VmFsdWUsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoRW5kKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnU3RhdHVzID09PSAnZHJhZ2luZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMubmV3VmFsdWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2RyYWctZW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgeyBtaW4gfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi1zbGlkZXInKS50aGVuKChyZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAoZXZlbnQuZGV0YWlsLnggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aCAqIHRoaXMuZ2V0UmFuZ2UoKSArIG1pbjtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVWYWx1ZSh2YWx1ZSwgZW5kLCBkcmFnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgYmFySGVpZ2h0LCBtaW4gfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gYCR7KCh2YWx1ZSAtIG1pbikgKiAxMDApIC8gdGhpcy5nZXRSYW5nZSgpfSVgO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBiYXJTdHlsZTogYFxuICAgICAgICAgIHdpZHRoOiAke3dpZHRofTtcbiAgICAgICAgICBoZWlnaHQ6ICR7YWRkVW5pdChiYXJIZWlnaHQpfTtcbiAgICAgICAgICAke2RyYWcgPyAndHJhbnNpdGlvbjogbm9uZTsnIDogJyd9XG4gICAgICAgIGAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChkcmFnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZHJhZycsIHsgdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRSYW5nZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbWF4LCBtaW4gfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBtYXggLSBtaW47XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgeyBtYXgsIG1pbiwgc3RlcCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWx1ZSwgbWF4KSkgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==