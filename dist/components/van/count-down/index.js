'use strict';

var _component = require('./../common/component.js');

var _utils = require('./utils.js');

function simpleTick(fn) {
    return setTimeout(fn, 30);
}
(0, _component.VantComponent)({
    props: {
        useSlot: Boolean,
        millisecond: Boolean,
        time: {
            type: Number,
            observer: 'reset'
        },
        format: {
            type: String,
            value: 'HH:mm:ss'
        },
        autoStart: {
            type: Boolean,
            value: true
        }
    },
    data: {
        timeData: (0, _utils.parseTimeData)(0),
        formattedTime: '0'
    },
    destroyed: function destroyed() {
        clearTimeout(this.tid);
        this.tid = null;
    },

    methods: {
        // 开始
        start: function start() {
            if (this.counting) {
                return;
            }
            this.counting = true;
            this.endTime = Date.now() + this.remain;
            this.tick();
        },

        // 暂停
        pause: function pause() {
            this.counting = false;
            clearTimeout(this.tid);
        },

        // 重置
        reset: function reset() {
            this.pause();
            this.remain = this.data.time;
            this.setRemain(this.remain);
            if (this.data.autoStart) {
                this.start();
            }
        },
        tick: function tick() {
            if (this.data.millisecond) {
                this.microTick();
            } else {
                this.macroTick();
            }
        },
        microTick: function microTick() {
            var _this = this;

            this.tid = simpleTick(function () {
                _this.setRemain(_this.getRemain());
                if (_this.remain !== 0) {
                    _this.microTick();
                }
            });
        },
        macroTick: function macroTick() {
            var _this2 = this;

            this.tid = simpleTick(function () {
                var remain = _this2.getRemain();
                if (!(0, _utils.isSameSecond)(remain, _this2.remain) || remain === 0) {
                    _this2.setRemain(remain);
                }
                if (_this2.remain !== 0) {
                    _this2.macroTick();
                }
            });
        },
        getRemain: function getRemain() {
            return Math.max(this.endTime - Date.now(), 0);
        },
        setRemain: function setRemain(remain) {
            this.remain = remain;
            var timeData = (0, _utils.parseTimeData)(remain);
            if (this.data.useSlot) {
                this.$emit('change', timeData);
            }
            this.setData({
                formattedTime: (0, _utils.parseFormat)(this.data.format, timeData)
            });
            if (remain === 0) {
                this.pause();
                this.$emit('finish');
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInNpbXBsZVRpY2siLCJmbiIsInNldFRpbWVvdXQiLCJwcm9wcyIsInVzZVNsb3QiLCJCb29sZWFuIiwibWlsbGlzZWNvbmQiLCJ0aW1lIiwidHlwZSIsIk51bWJlciIsIm9ic2VydmVyIiwiZm9ybWF0IiwiU3RyaW5nIiwidmFsdWUiLCJhdXRvU3RhcnQiLCJkYXRhIiwidGltZURhdGEiLCJmb3JtYXR0ZWRUaW1lIiwiZGVzdHJveWVkIiwiY2xlYXJUaW1lb3V0IiwidGlkIiwibWV0aG9kcyIsInN0YXJ0IiwiY291bnRpbmciLCJlbmRUaW1lIiwiRGF0ZSIsIm5vdyIsInJlbWFpbiIsInRpY2siLCJwYXVzZSIsInJlc2V0Iiwic2V0UmVtYWluIiwibWljcm9UaWNrIiwibWFjcm9UaWNrIiwiZ2V0UmVtYWluIiwiTWF0aCIsIm1heCIsIiRlbWl0Iiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSxTQUFTQSxVQUFULENBQW9CQyxFQUFwQixFQUF3QjtBQUNwQixXQUFPQyxXQUFXRCxFQUFYLEVBQWUsRUFBZixDQUFQO0FBQ0g7QUFDRCw4QkFBYztBQUNWRSxXQUFPO0FBQ0hDLGlCQUFTQyxPQUROO0FBRUhDLHFCQUFhRCxPQUZWO0FBR0hFLGNBQU07QUFDRkMsa0JBQU1DLE1BREo7QUFFRkMsc0JBQVU7QUFGUixTQUhIO0FBT0hDLGdCQUFRO0FBQ0pILGtCQUFNSSxNQURGO0FBRUpDLG1CQUFPO0FBRkgsU0FQTDtBQVdIQyxtQkFBVztBQUNQTixrQkFBTUgsT0FEQztBQUVQUSxtQkFBTztBQUZBO0FBWFIsS0FERztBQWlCVkUsVUFBTTtBQUNGQyxrQkFBVSwwQkFBYyxDQUFkLENBRFI7QUFFRkMsdUJBQWU7QUFGYixLQWpCSTtBQXFCVkMsYUFyQlUsdUJBcUJFO0FBQ1JDLHFCQUFhLEtBQUtDLEdBQWxCO0FBQ0EsYUFBS0EsR0FBTCxHQUFXLElBQVg7QUFDSCxLQXhCUzs7QUF5QlZDLGFBQVM7QUFDTDtBQUNBQyxhQUZLLG1CQUVHO0FBQ0osZ0JBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNmO0FBQ0g7QUFDRCxpQkFBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNBLGlCQUFLQyxPQUFMLEdBQWVDLEtBQUtDLEdBQUwsS0FBYSxLQUFLQyxNQUFqQztBQUNBLGlCQUFLQyxJQUFMO0FBQ0gsU0FUSTs7QUFVTDtBQUNBQyxhQVhLLG1CQVdHO0FBQ0osaUJBQUtOLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQUoseUJBQWEsS0FBS0MsR0FBbEI7QUFDSCxTQWRJOztBQWVMO0FBQ0FVLGFBaEJLLG1CQWdCRztBQUNKLGlCQUFLRCxLQUFMO0FBQ0EsaUJBQUtGLE1BQUwsR0FBYyxLQUFLWixJQUFMLENBQVVSLElBQXhCO0FBQ0EsaUJBQUt3QixTQUFMLENBQWUsS0FBS0osTUFBcEI7QUFDQSxnQkFBSSxLQUFLWixJQUFMLENBQVVELFNBQWQsRUFBeUI7QUFDckIscUJBQUtRLEtBQUw7QUFDSDtBQUNKLFNBdkJJO0FBd0JMTSxZQXhCSyxrQkF3QkU7QUFDSCxnQkFBSSxLQUFLYixJQUFMLENBQVVULFdBQWQsRUFBMkI7QUFDdkIscUJBQUswQixTQUFMO0FBQ0gsYUFGRCxNQUdLO0FBQ0QscUJBQUtDLFNBQUw7QUFDSDtBQUNKLFNBL0JJO0FBZ0NMRCxpQkFoQ0ssdUJBZ0NPO0FBQUE7O0FBQ1IsaUJBQUtaLEdBQUwsR0FBV3BCLFdBQVcsWUFBTTtBQUN4QixzQkFBSytCLFNBQUwsQ0FBZSxNQUFLRyxTQUFMLEVBQWY7QUFDQSxvQkFBSSxNQUFLUCxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ25CLDBCQUFLSyxTQUFMO0FBQ0g7QUFDSixhQUxVLENBQVg7QUFNSCxTQXZDSTtBQXdDTEMsaUJBeENLLHVCQXdDTztBQUFBOztBQUNSLGlCQUFLYixHQUFMLEdBQVdwQixXQUFXLFlBQU07QUFDeEIsb0JBQU0yQixTQUFTLE9BQUtPLFNBQUwsRUFBZjtBQUNBLG9CQUFJLENBQUMseUJBQWFQLE1BQWIsRUFBcUIsT0FBS0EsTUFBMUIsQ0FBRCxJQUFzQ0EsV0FBVyxDQUFyRCxFQUF3RDtBQUNwRCwyQkFBS0ksU0FBTCxDQUFlSixNQUFmO0FBQ0g7QUFDRCxvQkFBSSxPQUFLQSxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ25CLDJCQUFLTSxTQUFMO0FBQ0g7QUFDSixhQVJVLENBQVg7QUFTSCxTQWxESTtBQW1ETEMsaUJBbkRLLHVCQW1ETztBQUNSLG1CQUFPQyxLQUFLQyxHQUFMLENBQVMsS0FBS1osT0FBTCxHQUFlQyxLQUFLQyxHQUFMLEVBQXhCLEVBQW9DLENBQXBDLENBQVA7QUFDSCxTQXJESTtBQXNETEssaUJBdERLLHFCQXNES0osTUF0REwsRUFzRGE7QUFDZCxpQkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsZ0JBQU1YLFdBQVcsMEJBQWNXLE1BQWQsQ0FBakI7QUFDQSxnQkFBSSxLQUFLWixJQUFMLENBQVVYLE9BQWQsRUFBdUI7QUFDbkIscUJBQUtpQyxLQUFMLENBQVcsUUFBWCxFQUFxQnJCLFFBQXJCO0FBQ0g7QUFDRCxpQkFBS3NCLE9BQUwsQ0FBYTtBQUNUckIsK0JBQWUsd0JBQVksS0FBS0YsSUFBTCxDQUFVSixNQUF0QixFQUE4QkssUUFBOUI7QUFETixhQUFiO0FBR0EsZ0JBQUlXLFdBQVcsQ0FBZixFQUFrQjtBQUNkLHFCQUFLRSxLQUFMO0FBQ0EscUJBQUtRLEtBQUwsQ0FBVyxRQUFYO0FBQ0g7QUFDSjtBQW5FSTtBQXpCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNTYW1lU2Vjb25kLCBwYXJzZUZvcm1hdCwgcGFyc2VUaW1lRGF0YSB9IGZyb20gJy4vdXRpbHMnO1xuZnVuY3Rpb24gc2ltcGxlVGljayhmbikge1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZuLCAzMCk7XG59XG5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICB1c2VTbG90OiBCb29sZWFuLFxuICAgICAgICBtaWxsaXNlY29uZDogQm9vbGVhbixcbiAgICAgICAgdGltZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdyZXNldCdcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ0hIOm1tOnNzJ1xuICAgICAgICB9LFxuICAgICAgICBhdXRvU3RhcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHRpbWVEYXRhOiBwYXJzZVRpbWVEYXRhKDApLFxuICAgICAgICBmb3JtYXR0ZWRUaW1lOiAnMCdcbiAgICB9LFxuICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGlkKTtcbiAgICAgICAgdGhpcy50aWQgPSBudWxsO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDlvIDlp4tcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY291bnRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbmRUaW1lID0gRGF0ZS5ub3coKSArIHRoaXMucmVtYWluO1xuICAgICAgICAgICAgdGhpcy50aWNrKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaaguWBnFxuICAgICAgICBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpZCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOmHjee9rlxuICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMucmVtYWluID0gdGhpcy5kYXRhLnRpbWU7XG4gICAgICAgICAgICB0aGlzLnNldFJlbWFpbih0aGlzLnJlbWFpbik7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmF1dG9TdGFydCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGljaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEubWlsbGlzZWNvbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1pY3JvVGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWNyb1RpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWljcm9UaWNrKCkge1xuICAgICAgICAgICAgdGhpcy50aWQgPSBzaW1wbGVUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJlbWFpbih0aGlzLmdldFJlbWFpbigpKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW1haW4gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taWNyb1RpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWFjcm9UaWNrKCkge1xuICAgICAgICAgICAgdGhpcy50aWQgPSBzaW1wbGVUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW4gPSB0aGlzLmdldFJlbWFpbigpO1xuICAgICAgICAgICAgICAgIGlmICghaXNTYW1lU2Vjb25kKHJlbWFpbiwgdGhpcy5yZW1haW4pIHx8IHJlbWFpbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFJlbWFpbihyZW1haW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW1haW4gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWNyb1RpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmVtYWluKCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuZW5kVGltZSAtIERhdGUubm93KCksIDApO1xuICAgICAgICB9LFxuICAgICAgICBzZXRSZW1haW4ocmVtYWluKSB7XG4gICAgICAgICAgICB0aGlzLnJlbWFpbiA9IHJlbWFpbjtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVEYXRhID0gcGFyc2VUaW1lRGF0YShyZW1haW4pO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS51c2VTbG90KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGltZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUaW1lOiBwYXJzZUZvcm1hdCh0aGlzLmRhdGEuZm9ybWF0LCB0aW1lRGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlbWFpbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdmaW5pc2gnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19