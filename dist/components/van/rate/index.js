'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['icon-class'],
    props: {
        value: Number,
        readonly: Boolean,
        disabled: Boolean,
        allowHalf: Boolean,
        size: {
            type: null,
            observer: 'setSizeWithUnit'
        },
        icon: {
            type: String,
            value: 'star'
        },
        voidIcon: {
            type: String,
            value: 'star-o'
        },
        color: {
            type: String,
            value: '#ffd21e'
        },
        voidColor: {
            type: String,
            value: '#c7c7c7'
        },
        disabledColor: {
            type: String,
            value: '#bdbdbd'
        },
        count: {
            type: Number,
            value: 5
        },
        gutter: {
            type: null,
            observer: 'setGutterWithUnit'
        },
        touchable: {
            type: Boolean,
            value: true
        }
    },
    data: {
        innerValue: 0,
        gutterWithUnit: undefined,
        sizeWithUnit: null
    },
    watch: {
        value: function value(_value) {
            if (_value !== this.data.innerValue) {
                this.setData({ innerValue: _value });
            }
        }
    },
    methods: {
        setGutterWithUnit: function setGutterWithUnit(val) {
            this.setData({
                gutterWithUnit: (0, _utils.addUnit)(val)
            });
        },
        setSizeWithUnit: function setSizeWithUnit(size) {
            this.setData({
                sizeWithUnit: (0, _utils.addUnit)(size)
            });
        },
        onSelect: function onSelect(event) {
            var data = this.data;
            var score = event.currentTarget.dataset.score;

            if (!data.disabled && !data.readonly) {
                this.setData({ innerValue: score + 1 });
                this.$emit('input', score + 1);
                this.$emit('change', score + 1);
            }
        },
        onTouchMove: function onTouchMove(event) {
            var _this = this;

            var touchable = this.data.touchable;

            if (!touchable) return;
            var clientX = event.touches[0].clientX;

            this.getRect('.van-rate__icon', true).then(function (list) {
                var target = list.sort(function (item) {
                    return item.right - item.left;
                }).find(function (item) {
                    return clientX >= item.left && clientX <= item.right;
                });
                if (target != null) {
                    _this.onSelect(Object.assign(Object.assign({}, event), { currentTarget: target }));
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwidmFsdWUiLCJOdW1iZXIiLCJyZWFkb25seSIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImFsbG93SGFsZiIsInNpemUiLCJ0eXBlIiwib2JzZXJ2ZXIiLCJpY29uIiwiU3RyaW5nIiwidm9pZEljb24iLCJjb2xvciIsInZvaWRDb2xvciIsImRpc2FibGVkQ29sb3IiLCJjb3VudCIsImd1dHRlciIsInRvdWNoYWJsZSIsImRhdGEiLCJpbm5lclZhbHVlIiwiZ3V0dGVyV2l0aFVuaXQiLCJ1bmRlZmluZWQiLCJzaXplV2l0aFVuaXQiLCJ3YXRjaCIsInNldERhdGEiLCJtZXRob2RzIiwic2V0R3V0dGVyV2l0aFVuaXQiLCJ2YWwiLCJzZXRTaXplV2l0aFVuaXQiLCJvblNlbGVjdCIsImV2ZW50Iiwic2NvcmUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIiRlbWl0Iiwib25Ub3VjaE1vdmUiLCJjbGllbnRYIiwidG91Y2hlcyIsImdldFJlY3QiLCJ0aGVuIiwibGlzdCIsInRhcmdldCIsInNvcnQiLCJpdGVtIiwicmlnaHQiLCJsZWZ0IiwiZmluZCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPLElBREc7QUFFVkMsYUFBUyxDQUFDLFlBQUQsQ0FGQztBQUdWQyxXQUFPO0FBQ0hDLGVBQU9DLE1BREo7QUFFSEMsa0JBQVVDLE9BRlA7QUFHSEMsa0JBQVVELE9BSFA7QUFJSEUsbUJBQVdGLE9BSlI7QUFLSEcsY0FBTTtBQUNGQyxrQkFBTSxJQURKO0FBRUZDLHNCQUFVO0FBRlIsU0FMSDtBQVNIQyxjQUFNO0FBQ0ZGLGtCQUFNRyxNQURKO0FBRUZWLG1CQUFPO0FBRkwsU0FUSDtBQWFIVyxrQkFBVTtBQUNOSixrQkFBTUcsTUFEQTtBQUVOVixtQkFBTztBQUZELFNBYlA7QUFpQkhZLGVBQU87QUFDSEwsa0JBQU1HLE1BREg7QUFFSFYsbUJBQU87QUFGSixTQWpCSjtBQXFCSGEsbUJBQVc7QUFDUE4sa0JBQU1HLE1BREM7QUFFUFYsbUJBQU87QUFGQSxTQXJCUjtBQXlCSGMsdUJBQWU7QUFDWFAsa0JBQU1HLE1BREs7QUFFWFYsbUJBQU87QUFGSSxTQXpCWjtBQTZCSGUsZUFBTztBQUNIUixrQkFBTU4sTUFESDtBQUVIRCxtQkFBTztBQUZKLFNBN0JKO0FBaUNIZ0IsZ0JBQVE7QUFDSlQsa0JBQU0sSUFERjtBQUVKQyxzQkFBVTtBQUZOLFNBakNMO0FBcUNIUyxtQkFBVztBQUNQVixrQkFBTUosT0FEQztBQUVQSCxtQkFBTztBQUZBO0FBckNSLEtBSEc7QUE2Q1ZrQixVQUFNO0FBQ0ZDLG9CQUFZLENBRFY7QUFFRkMsd0JBQWdCQyxTQUZkO0FBR0ZDLHNCQUFjO0FBSFosS0E3Q0k7QUFrRFZDLFdBQU87QUFDSHZCLGFBREcsaUJBQ0dBLE1BREgsRUFDVTtBQUNULGdCQUFJQSxXQUFVLEtBQUtrQixJQUFMLENBQVVDLFVBQXhCLEVBQW9DO0FBQ2hDLHFCQUFLSyxPQUFMLENBQWEsRUFBRUwsWUFBWW5CLE1BQWQsRUFBYjtBQUNIO0FBQ0o7QUFMRSxLQWxERztBQXlEVnlCLGFBQVM7QUFDTEMseUJBREssNkJBQ2FDLEdBRGIsRUFDa0I7QUFDbkIsaUJBQUtILE9BQUwsQ0FBYTtBQUNUSixnQ0FBZ0Isb0JBQVFPLEdBQVI7QUFEUCxhQUFiO0FBR0gsU0FMSTtBQU1MQyx1QkFOSywyQkFNV3RCLElBTlgsRUFNaUI7QUFDbEIsaUJBQUtrQixPQUFMLENBQWE7QUFDVEYsOEJBQWMsb0JBQVFoQixJQUFSO0FBREwsYUFBYjtBQUdILFNBVkk7QUFXTHVCLGdCQVhLLG9CQVdJQyxLQVhKLEVBV1c7QUFBQSxnQkFDSlosSUFESSxHQUNLLElBREwsQ0FDSkEsSUFESTtBQUFBLGdCQUVKYSxLQUZJLEdBRU1ELE1BQU1FLGFBQU4sQ0FBb0JDLE9BRjFCLENBRUpGLEtBRkk7O0FBR1osZ0JBQUksQ0FBQ2IsS0FBS2QsUUFBTixJQUFrQixDQUFDYyxLQUFLaEIsUUFBNUIsRUFBc0M7QUFDbEMscUJBQUtzQixPQUFMLENBQWEsRUFBRUwsWUFBWVksUUFBUSxDQUF0QixFQUFiO0FBQ0EscUJBQUtHLEtBQUwsQ0FBVyxPQUFYLEVBQW9CSCxRQUFRLENBQTVCO0FBQ0EscUJBQUtHLEtBQUwsQ0FBVyxRQUFYLEVBQXFCSCxRQUFRLENBQTdCO0FBQ0g7QUFDSixTQW5CSTtBQW9CTEksbUJBcEJLLHVCQW9CT0wsS0FwQlAsRUFvQmM7QUFBQTs7QUFBQSxnQkFDUGIsU0FETyxHQUNPLEtBQUtDLElBRFosQ0FDUEQsU0FETzs7QUFFZixnQkFBSSxDQUFDQSxTQUFMLEVBQ0k7QUFIVyxnQkFJUG1CLE9BSk8sR0FJS04sTUFBTU8sT0FBTixDQUFjLENBQWQsQ0FKTCxDQUlQRCxPQUpPOztBQUtmLGlCQUFLRSxPQUFMLENBQWEsaUJBQWIsRUFBZ0MsSUFBaEMsRUFBc0NDLElBQXRDLENBQTJDLFVBQUNDLElBQUQsRUFBVTtBQUNqRCxvQkFBTUMsU0FBU0QsS0FDVkUsSUFEVSxDQUNMO0FBQUEsMkJBQVFDLEtBQUtDLEtBQUwsR0FBYUQsS0FBS0UsSUFBMUI7QUFBQSxpQkFESyxFQUVWQyxJQUZVLENBRUw7QUFBQSwyQkFBUVYsV0FBV08sS0FBS0UsSUFBaEIsSUFBd0JULFdBQVdPLEtBQUtDLEtBQWhEO0FBQUEsaUJBRkssQ0FBZjtBQUdBLG9CQUFJSCxVQUFVLElBQWQsRUFBb0I7QUFDaEIsMEJBQUtaLFFBQUwsQ0FBY2tCLE9BQU9DLE1BQVAsQ0FBY0QsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JsQixLQUFsQixDQUFkLEVBQXdDLEVBQUVFLGVBQWVTLE1BQWpCLEVBQXhDLENBQWQ7QUFDSDtBQUNKLGFBUEQ7QUFRSDtBQWpDSTtBQXpEQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgYWRkVW5pdCB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICBjbGFzc2VzOiBbJ2ljb24tY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZTogTnVtYmVyLFxuICAgICAgICByZWFkb25seTogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGFsbG93SGFsZjogQm9vbGVhbixcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0U2l6ZVdpdGhVbml0J1xuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3N0YXInXG4gICAgICAgIH0sXG4gICAgICAgIHZvaWRJY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3N0YXItbydcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2ZmZDIxZSdcbiAgICAgICAgfSxcbiAgICAgICAgdm9pZENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJyNjN2M3YzcnXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2JkYmRiZCdcbiAgICAgICAgfSxcbiAgICAgICAgY291bnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA1XG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlcjoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0R3V0dGVyV2l0aFVuaXQnXG4gICAgICAgIH0sXG4gICAgICAgIHRvdWNoYWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaW5uZXJWYWx1ZTogMCxcbiAgICAgICAgZ3V0dGVyV2l0aFVuaXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZVdpdGhVbml0OiBudWxsXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmRhdGEuaW5uZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGlubmVyVmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEd1dHRlcldpdGhVbml0KHZhbCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBndXR0ZXJXaXRoVW5pdDogYWRkVW5pdCh2YWwpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U2l6ZVdpdGhVbml0KHNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgc2l6ZVdpdGhVbml0OiBhZGRVbml0KHNpemUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TZWxlY3QoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IHsgc2NvcmUgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgIGlmICghZGF0YS5kaXNhYmxlZCAmJiAhZGF0YS5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGlubmVyVmFsdWU6IHNjb3JlICsgMSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHNjb3JlICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgc2NvcmUgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdG91Y2hhYmxlIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIXRvdWNoYWJsZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCB7IGNsaWVudFggfSA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tcmF0ZV9faWNvbicsIHRydWUpLnRoZW4oKGxpc3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBsaXN0XG4gICAgICAgICAgICAgICAgICAgIC5zb3J0KGl0ZW0gPT4gaXRlbS5yaWdodCAtIGl0ZW0ubGVmdClcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoaXRlbSA9PiBjbGllbnRYID49IGl0ZW0ubGVmdCAmJiBjbGllbnRYIDw9IGl0ZW0ucmlnaHQpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQpLCB7IGN1cnJlbnRUYXJnZXQ6IHRhcmdldCB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==