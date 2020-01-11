'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transition = undefined;

var _utils = require('./../common/utils.js');

var getClassNames = function getClassNames(name) {
    return {
        enter: 'van-' + name + '-enter van-' + name + '-enter-active enter-class enter-active-class',
        'enter-to': 'van-' + name + '-enter-to van-' + name + '-enter-active enter-to-class enter-active-class',
        leave: 'van-' + name + '-leave van-' + name + '-leave-active leave-class leave-active-class',
        'leave-to': 'van-' + name + '-leave-to van-' + name + '-leave-active leave-to-class leave-active-class'
    };
};
var nextTick = function nextTick() {
    return new Promise(function (resolve) {
        return setTimeout(resolve, 1000 / 30);
    });
};
var transition = exports.transition = function transition(showDefaultValue) {
    return Behavior({
        properties: {
            customStyle: String,
            // @ts-ignore
            show: {
                type: Boolean,
                value: showDefaultValue,
                observer: 'observeShow'
            },
            // @ts-ignore
            duration: {
                type: null,
                value: 300,
                observer: 'observeDuration'
            },
            name: {
                type: String,
                value: 'fade'
            }
        },
        data: {
            type: '',
            inited: false,
            display: false
        },
        attached: function attached() {
            if (this.data.show) {
                this.enter();
            }
        },

        methods: {
            observeShow: function observeShow(value) {
                value ? this.enter() : this.leave();
            },
            enter: function enter() {
                var _this = this;

                var _data = this.data,
                    duration = _data.duration,
                    name = _data.name;

                var classNames = getClassNames(name);
                var currentDuration = (0, _utils.isObj)(duration) ? duration.enter : duration;
                this.status = 'enter';
                this.$emit('before-enter');
                Promise.resolve().then(nextTick).then(function () {
                    _this.checkStatus('enter');
                    _this.$emit('enter');
                    _this.setData({
                        inited: true,
                        display: true,
                        classes: classNames.enter,
                        currentDuration: currentDuration
                    });
                }).then(nextTick).then(function () {
                    _this.checkStatus('enter');
                    _this.transitionEnded = false;
                    _this.setData({
                        classes: classNames['enter-to']
                    });
                }).catch(function () {});
            },
            leave: function leave() {
                var _this2 = this;

                if (!this.data.display) {
                    return;
                }
                var _data2 = this.data,
                    duration = _data2.duration,
                    name = _data2.name;

                var classNames = getClassNames(name);
                var currentDuration = (0, _utils.isObj)(duration) ? duration.leave : duration;
                this.status = 'leave';
                this.$emit('before-leave');
                Promise.resolve().then(nextTick).then(function () {
                    _this2.checkStatus('leave');
                    _this2.$emit('leave');
                    _this2.setData({
                        classes: classNames.leave,
                        currentDuration: currentDuration
                    });
                }).then(nextTick).then(function () {
                    _this2.checkStatus('leave');
                    _this2.transitionEnded = false;
                    setTimeout(function () {
                        return _this2.onTransitionEnd();
                    }, currentDuration);
                    _this2.setData({
                        classes: classNames['leave-to']
                    });
                }).catch(function () {});
            },
            checkStatus: function checkStatus(status) {
                if (status !== this.status) {
                    throw new Error('incongruent status: ' + status);
                }
            },
            onTransitionEnd: function onTransitionEnd() {
                if (this.transitionEnded) {
                    return;
                }
                this.transitionEnded = true;
                this.$emit('after-' + this.status);
                var _data3 = this.data,
                    show = _data3.show,
                    display = _data3.display;

                if (!show && display) {
                    this.setData({ display: false });
                }
            }
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaXRpb24uanMiXSwibmFtZXMiOlsiZ2V0Q2xhc3NOYW1lcyIsIm5hbWUiLCJlbnRlciIsImxlYXZlIiwibmV4dFRpY2siLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJ0cmFuc2l0aW9uIiwic2hvd0RlZmF1bHRWYWx1ZSIsIkJlaGF2aW9yIiwicHJvcGVydGllcyIsImN1c3RvbVN0eWxlIiwiU3RyaW5nIiwic2hvdyIsInR5cGUiLCJCb29sZWFuIiwidmFsdWUiLCJvYnNlcnZlciIsImR1cmF0aW9uIiwiZGF0YSIsImluaXRlZCIsImRpc3BsYXkiLCJhdHRhY2hlZCIsIm1ldGhvZHMiLCJvYnNlcnZlU2hvdyIsImNsYXNzTmFtZXMiLCJjdXJyZW50RHVyYXRpb24iLCJzdGF0dXMiLCIkZW1pdCIsInRoZW4iLCJjaGVja1N0YXR1cyIsInNldERhdGEiLCJjbGFzc2VzIiwidHJhbnNpdGlvbkVuZGVkIiwiY2F0Y2giLCJvblRyYW5zaXRpb25FbmQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRDtBQUFBLFdBQVc7QUFDN0JDLHdCQUFjRCxJQUFkLG1CQUFnQ0EsSUFBaEMsaURBRDZCO0FBRTdCLDZCQUFtQkEsSUFBbkIsc0JBQXdDQSxJQUF4QyxvREFGNkI7QUFHN0JFLHdCQUFjRixJQUFkLG1CQUFnQ0EsSUFBaEMsaURBSDZCO0FBSTdCLDZCQUFtQkEsSUFBbkIsc0JBQXdDQSxJQUF4QztBQUo2QixLQUFYO0FBQUEsQ0FBdEI7QUFNQSxJQUFNRyxXQUFXLFNBQVhBLFFBQVc7QUFBQSxXQUFNLElBQUlDLE9BQUosQ0FBWTtBQUFBLGVBQVdDLFdBQVdDLE9BQVgsRUFBb0IsT0FBTyxFQUEzQixDQUFYO0FBQUEsS0FBWixDQUFOO0FBQUEsQ0FBakI7QUFDTyxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQVVDLGdCQUFWLEVBQTRCO0FBQ2xELFdB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QUFLQyxXQUFMLENBQWlCLE9BQWpCO0FBQ0EsMkJBQUtHLGVBQUwsR0FBdUIsS0FBdkI7QUFDQTVCLCtCQUFXO0FBQUEsK0JBQU0sT0FBSzhCLGVBQUwsRUFBTjtBQUFBLHFCQUFYLEVBQXlDVCxlQUF6QztBQUNBLDJCQUFLSyxPQUFMLENBQWE7QUFDVEMsaUNBQVNQLFdBQVcsVUFBWDtBQURBLHFCQUFiO0FBR0gsaUJBbEJELEVBbUJLUyxLQW5CTCxDQW1CVyxZQUFNLENBQUcsQ0FuQnBCO0FBb0JILGFBN0RJO0FBOERMSix1QkE5REssdUJBOERPSCxNQTlEUCxFQThEZTtBQUNoQixvQkFBSUEsV0FBVyxLQUFLQSxNQUFwQixFQUE0QjtBQUN4QiwwQkFBTSxJQUFJUyxLQUFKLDBCQUFpQ1QsTUFBakMsQ0FBTjtBQUNIO0FBQ0osYUFsRUk7QUFtRUxRLDJCQW5FSyw2QkFtRWE7QUFDZCxvQkFBSSxLQUFLRixlQUFULEVBQTBCO0FBQ3RCO0FBQ0g7QUFDRCxxQkFBS0EsZUFBTCxHQUF1QixJQUF2QjtBQUNBLHFCQUFLTCxLQUFMLFlBQW9CLEtBQUtELE1BQXpCO0FBTGMsNkJBTVksS0FBS1IsSUFOakI7QUFBQSxvQkFNTk4sSUFOTSxVQU1OQSxJQU5NO0FBQUEsb0JBTUFRLE9BTkEsVUFNQUEsT0FOQTs7QUFPZCxvQkFBSSxDQUFDUixJQUFELElBQVNRLE9BQWIsRUFBc0I7QUFDbEIseUJBQUtVLE9BQUwsQ0FBYSxFQUFFVixTQUFTLEtBQVgsRUFBYjtBQUNIO0FBQ0o7QUE3RUk7QUE5QkcsS0FBVCxDQUFQO0FBOEdILENBL0dNIiwiZmlsZSI6InRyYW5zaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc09iaiB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5jb25zdCBnZXRDbGFzc05hbWVzID0gKG5hbWUpID0+ICh7XG4gICAgZW50ZXI6IGB2YW4tJHtuYW1lfS1lbnRlciB2YW4tJHtuYW1lfS1lbnRlci1hY3RpdmUgZW50ZXItY2xhc3MgZW50ZXItYWN0aXZlLWNsYXNzYCxcbiAgICAnZW50ZXItdG8nOiBgdmFuLSR7bmFtZX0tZW50ZXItdG8gdmFuLSR7bmFtZX0tZW50ZXItYWN0aXZlIGVudGVyLXRvLWNsYXNzIGVudGVyLWFjdGl2ZS1jbGFzc2AsXG4gICAgbGVhdmU6IGB2YW4tJHtuYW1lfS1sZWF2ZSB2YW4tJHtuYW1lfS1sZWF2ZS1hY3RpdmUgbGVhdmUtY2xhc3MgbGVhdmUtYWN0aXZlLWNsYXNzYCxcbiAgICAnbGVhdmUtdG8nOiBgdmFuLSR7bmFtZX0tbGVhdmUtdG8gdmFuLSR7bmFtZX0tbGVhdmUtYWN0aXZlIGxlYXZlLXRvLWNsYXNzIGxlYXZlLWFjdGl2ZS1jbGFzc2Bcbn0pO1xuY29uc3QgbmV4dFRpY2sgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCAvIDMwKSk7XG5leHBvcnQgY29uc3QgdHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzaG93RGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIEJlaGF2aW9yKHtcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzaG93RGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgIG9ic2VydmVyOiAnb2JzZXJ2ZVNob3cnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAzMDAsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXI6ICdvYnNlcnZlRHVyYXRpb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZhZGUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6ICcnLFxuICAgICAgICAgICAgaW5pdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGF0dGFjaGVkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5zaG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvYnNlcnZlU2hvdyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID8gdGhpcy5lbnRlcigpIDogdGhpcy5sZWF2ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudGVyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZHVyYXRpb24sIG5hbWUgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gZ2V0Q2xhc3NOYW1lcyhuYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RHVyYXRpb24gPSBpc09iaihkdXJhdGlvbikgPyBkdXJhdGlvbi5lbnRlciA6IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ2VudGVyJztcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdiZWZvcmUtZW50ZXInKTtcbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKCdlbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdlbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXMuZW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obmV4dFRpY2spXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1N0YXR1cygnZW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXNbJ2VudGVyLXRvJ11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVhdmUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzcGxheSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZHVyYXRpb24sIG5hbWUgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gZ2V0Q2xhc3NOYW1lcyhuYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RHVyYXRpb24gPSBpc09iaihkdXJhdGlvbikgPyBkdXJhdGlvbi5sZWF2ZSA6IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ2xlYXZlJztcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdiZWZvcmUtbGVhdmUnKTtcbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKCdsZWF2ZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdsZWF2ZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NOYW1lcy5sZWF2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKCdsZWF2ZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25FbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25UcmFuc2l0aW9uRW5kKCksIGN1cnJlbnREdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBjbGFzc05hbWVzWydsZWF2ZS10byddXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrU3RhdHVzKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IHRoaXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW5jb25ncnVlbnQgc3RhdHVzOiAke3N0YXR1c31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25UcmFuc2l0aW9uRW5kKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb25FbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KGBhZnRlci0ke3RoaXMuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2hvdywgZGlzcGxheSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgICAgIGlmICghc2hvdyAmJiBkaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGRpc3BsYXk6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcbiJdfQ==