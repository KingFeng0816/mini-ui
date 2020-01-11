'use strict';

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

var _utils = require('./../common/utils.js');

var THRESHOLD = 0.3;
var ARRAY = [];
(0, _component.VantComponent)({
    props: {
        disabled: Boolean,
        leftWidth: {
            type: Number,
            value: 0
        },
        rightWidth: {
            type: Number,
            value: 0
        },
        asyncClose: Boolean,
        name: {
            type: [Number, String],
            value: ''
        }
    },
    mixins: [_touch.touch],
    data: {
        catchMove: false
    },
    created: function created() {
        this.offset = 0;
        ARRAY.push(this);
    },
    destroyed: function destroyed() {
        var _this = this;

        ARRAY = ARRAY.filter(function (item) {
            return item !== _this;
        });
    },

    methods: {
        open: function open(position) {
            var _data = this.data,
                leftWidth = _data.leftWidth,
                rightWidth = _data.rightWidth;

            var offset = position === 'left' ? leftWidth : -rightWidth;
            this.swipeMove(offset);
            this.$emit('open', {
                position: position,
                name: this.data.name
            });
        },
        close: function close() {
            this.swipeMove(0);
        },
        swipeMove: function swipeMove() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.offset = (0, _utils.range)(offset, -this.data.rightWidth, this.data.leftWidth);
            var transform = 'translate3d(' + this.offset + 'px, 0, 0)';
            var transition = this.dragging ? 'none' : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';
            this.setData({
                wrapperStyle: '\n        -webkit-transform: ' + transform + ';\n        -webkit-transition: ' + transition + ';\n        transform: ' + transform + ';\n        transition: ' + transition + ';\n      '
            });
        },
        swipeLeaveTransition: function swipeLeaveTransition() {
            var _data2 = this.data,
                leftWidth = _data2.leftWidth,
                rightWidth = _data2.rightWidth;
            var offset = this.offset;

            if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
                this.open('right');
            } else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
                this.open('left');
            } else {
                this.swipeMove(0);
            }
            this.setData({ catchMove: false });
        },
        startDrag: function startDrag(event) {
            if (this.data.disabled) {
                return;
            }
            this.startOffset = this.offset;
            this.touchStart(event);
        },
        noop: function noop() {},
        onDrag: function onDrag(event) {
            var _this2 = this;

            if (this.data.disabled) {
                return;
            }
            this.touchMove(event);
            if (this.direction !== 'horizontal') {
                return;
            }
            this.dragging = true;
            ARRAY.filter(function (item) {
                return item !== _this2;
            }).forEach(function (item) {
                return item.close();
            });
            this.setData({ catchMove: true });
            this.swipeMove(this.startOffset + this.deltaX);
        },
        endDrag: function endDrag() {
            if (this.data.disabled) {
                return;
            }
            this.dragging = false;
            this.swipeLeaveTransition();
        },
        onClick: function onClick(event) {
            var _event$currentTarget$ = event.currentTarget.dataset.key,
                position = _event$currentTarget$ === undefined ? 'outside' : _event$currentTarget$;

            this.$emit('click', position);
            if (!this.offset) {
                return;
            }
            if (this.data.asyncClose) {
                this.$emit('close', {
                    position: position,
                    instance: this,
                    name: this.data.name
                });
            } else {
                this.swipeMove(0);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRIUkVTSE9MRCIsIkFSUkFZIiwicHJvcHMiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJsZWZ0V2lkdGgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJyaWdodFdpZHRoIiwiYXN5bmNDbG9zZSIsIm5hbWUiLCJTdHJpbmciLCJtaXhpbnMiLCJ0b3VjaCIsImRhdGEiLCJjYXRjaE1vdmUiLCJjcmVhdGVkIiwib2Zmc2V0IiwicHVzaCIsImRlc3Ryb3llZCIsImZpbHRlciIsIml0ZW0iLCJtZXRob2RzIiwib3BlbiIsInBvc2l0aW9uIiwic3dpcGVNb3ZlIiwiJGVtaXQiLCJjbG9zZSIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJkcmFnZ2luZyIsInNldERhdGEiLCJ3cmFwcGVyU3R5bGUiLCJzd2lwZUxlYXZlVHJhbnNpdGlvbiIsInN0YXJ0RHJhZyIsImV2ZW50Iiwic3RhcnRPZmZzZXQiLCJ0b3VjaFN0YXJ0Iiwibm9vcCIsIm9uRHJhZyIsInRvdWNoTW92ZSIsImRpcmVjdGlvbiIsImZvckVhY2giLCJkZWx0YVgiLCJlbmREcmFnIiwib25DbGljayIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwia2V5IiwiaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUFsQjtBQUNBLElBQUlDLFFBQVEsRUFBWjtBQUNBLDhCQUFjO0FBQ1ZDLFdBQU87QUFDSEMsa0JBQVVDLE9BRFA7QUFFSEMsbUJBQVc7QUFDUEMsa0JBQU1DLE1BREM7QUFFUEMsbUJBQU87QUFGQSxTQUZSO0FBTUhDLG9CQUFZO0FBQ1JILGtCQUFNQyxNQURFO0FBRVJDLG1CQUFPO0FBRkMsU0FOVDtBQVVIRSxvQkFBWU4sT0FWVDtBQVdITyxjQUFNO0FBQ0ZMLGtCQUFNLENBQUNDLE1BQUQsRUFBU0ssTUFBVCxDQURKO0FBRUZKLG1CQUFPO0FBRkw7QUFYSCxLQURHO0FBaUJWSyxZQUFRLENB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LE1BQWpCO0FBQUEsYUFBYixFQUFvQ3FCLE9BQXBDLENBQTRDO0FBQUEsdUJBQVFyQixLQUFLTSxLQUFMLEVBQVI7QUFBQSxhQUE1QztBQUNBLGlCQUFLSSxPQUFMLENBQWEsRUFBRWhCLFdBQVcsSUFBYixFQUFiO0FBQ0EsaUJBQUtVLFNBQUwsQ0FBZSxLQUFLVyxXQUFMLEdBQW1CLEtBQUtPLE1BQXZDO0FBQ0gsU0E5REk7QUErRExDLGVBL0RLLHFCQStESztBQUNOLGdCQUFJLEtBQUs5QixJQUFMLENBQVVaLFFBQWQsRUFBd0I7QUFDcEI7QUFDSDtBQUNELGlCQUFLNEIsUUFBTCxHQUFnQixLQUFoQjtBQUNBLGlCQUFLRyxvQkFBTDtBQUNILFNBckVJO0FBc0VMWSxlQXRFSyxtQkFzRUdWLEtBdEVILEVBc0VVO0FBQUEsd0NBQzJCQSxNQUFNVyxhQUFOLENBQW9CQyxPQUQvQyxDQUNIQyxHQURHO0FBQUEsZ0JBQ0V4QixRQURGLHlDQUNhLFNBRGI7O0FBRVgsaUJBQUtFLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRixRQUFwQjtBQUNBLGdCQUFJLENBQUMsS0FBS1AsTUFBVixFQUFrQjtBQUNkO0FBQ0g7QUFDRCxnQkFBSSxLQUFLSCxJQUFMLENBQVVMLFVBQWQsRUFBMEI7QUFDdEIscUJBQUtpQixLQUFMLENBQVcsT0FBWCxFQUFvQjtBQUNoQkYsc0NBRGdCO0FBRWhCeUIsOEJBQVUsSUFGTTtBQUdoQnZDLDBCQUFNLEtBQUtJLElBQUwsQ0FBVUo7QUFIQSxpQkFBcEI7QUFLSCxhQU5ELE1BT0s7QUFDRCxxQkFBS2UsU0FBTCxDQUFlLENBQWY7QUFDSDtBQUNKO0FBdEZJO0FBNUJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyB0b3VjaCB9IGZyb20gJy4uL21peGlucy90b3VjaCc7XG5pbXBvcnQgeyByYW5nZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5jb25zdCBUSFJFU0hPTEQgPSAwLjM7XG5sZXQgQVJSQVkgPSBbXTtcblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBsZWZ0V2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHJpZ2h0V2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jQ2xvc2U6IEJvb2xlYW4sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWl4aW5zOiBbdG91Y2hdLFxuICAgIGRhdGE6IHtcbiAgICAgICAgY2F0Y2hNb3ZlOiBmYWxzZVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICBBUlJBWS5wdXNoKHRoaXMpO1xuICAgIH0sXG4gICAgZGVzdHJveWVkKCkge1xuICAgICAgICBBUlJBWSA9IEFSUkFZLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRoaXMpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvcGVuKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IGxlZnRXaWR0aCwgcmlnaHRXaWR0aCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcG9zaXRpb24gPT09ICdsZWZ0JyA/IGxlZnRXaWR0aCA6IC1yaWdodFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUob2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wZW4nLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhLm5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKDApO1xuICAgICAgICB9LFxuICAgICAgICBzd2lwZU1vdmUob2Zmc2V0ID0gMCkge1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSByYW5nZShvZmZzZXQsIC10aGlzLmRhdGEucmlnaHRXaWR0aCwgdGhpcy5kYXRhLmxlZnRXaWR0aCk7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0aGlzLm9mZnNldH1weCwgMCwgMClgO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IHRoaXMuZHJhZ2dpbmdcbiAgICAgICAgICAgICAgICA/ICdub25lJ1xuICAgICAgICAgICAgICAgIDogJ3RyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEpJztcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlOiBgXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiAke3RyYW5zZm9ybX07XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHt0cmFuc2l0aW9ufTtcbiAgICAgICAgdHJhbnNmb3JtOiAke3RyYW5zZm9ybX07XG4gICAgICAgIHRyYW5zaXRpb246ICR7dHJhbnNpdGlvbn07XG4gICAgICBgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3dpcGVMZWF2ZVRyYW5zaXRpb24oKSB7XG4gICAgICAgICAgICBjb25zdCB7IGxlZnRXaWR0aCwgcmlnaHRXaWR0aCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAocmlnaHRXaWR0aCA+IDAgJiYgLW9mZnNldCA+IHJpZ2h0V2lkdGggKiBUSFJFU0hPTEQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsZWZ0V2lkdGggPiAwICYmIG9mZnNldCA+IGxlZnRXaWR0aCAqIFRIUkVTSE9MRCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbignbGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBjYXRjaE1vdmU6IGZhbHNlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydERyYWcoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBub29wKCkgeyB9LFxuICAgICAgICBvbkRyYWcoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvdWNoTW92ZShldmVudCk7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgQVJSQVkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xvc2UoKSk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBjYXRjaE1vdmU6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLnN3aXBlTW92ZSh0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5kZWx0YVgpO1xuICAgICAgICB9LFxuICAgICAgICBlbmREcmFnKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3dpcGVMZWF2ZVRyYW5zaXRpb24oKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBrZXk6IHBvc2l0aW9uID0gJ291dHNpZGUnIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5vZmZzZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRhdGEubmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==