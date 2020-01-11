'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('./../common/utils.js');

var defaultOptions = {
    type: 'text',
    mask: false,
    message: '',
    show: true,
    zIndex: 1000,
    duration: 2000,
    position: 'middle',
    forbidClick: false,
    loadingType: 'circular',
    selector: '#van-toast'
};
var queue = [];
var currentOptions = Object.assign({}, defaultOptions);
function parseOptions(message) {
    return (0, _utils.isObj)(message) ? message : { message: message };
}
function getContext() {
    var pages = getCurrentPages();
    return pages[pages.length - 1];
}
function Toast(toastOptions) {
    var options = Object.assign(Object.assign({}, currentOptions), parseOptions(toastOptions));
    var context = options.context || getContext();
    var toast = context.selectComponent(options.selector);
    if (!toast) {
        console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
        return;
    }
    delete options.context;
    delete options.selector;
    toast.clear = function () {
        toast.setData({ show: false });
        if (options.onClose) {
            options.onClose();
        }
    };
    queue.push(toast);
    toast.setData(options);
    clearTimeout(toast.timer);
    if (options.duration > 0) {
        toast.timer = setTimeout(function () {
            toast.clear();
            queue = queue.filter(function (item) {
                return item !== toast;
            });
        }, options.duration);
    }
    return toast;
}
var createMethod = function createMethod(type) {
    return function (options) {
        return Toast(Object.assign({ type: type }, parseOptions(options)));
    };
};
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = function () {
    queue.forEach(function (toast) {
        toast.clear();
    });
    queue = [];
};
Toast.setDefaultOptions = function (options) {
    Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = function () {
    currentOptions = Object.assign({}, defaultOptions);
};
exports.default = Toast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwidHlwZSIsIm1hc2siLCJtZXNzYWdlIiwic2hvdyIsInpJbmRleCIsImR1cmF0aW9uIiwicG9zaXRpb24iLCJmb3JiaWRDbGljayIsImxvYWRpbmdUeXBlIiwic2VsZWN0b3IiLCJxdWV1ZSIsImN1cnJlbnRPcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwicGFyc2VPcHRpb25zIiwiZ2V0Q29udGV4dCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuZ3RoIiwiVG9hc3QiLCJ0b2FzdE9wdGlvbnMiLCJvcHRpb25zIiwiY29udGV4dCIsInRvYXN0Iiwic2VsZWN0Q29tcG9uZW50IiwiY29uc29sZSIsIndhcm4iLCJjbGVhciIsInNldERhdGEiLCJvbkNsb3NlIiwicHVzaCIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dCIsImZpbHRlciIsIml0ZW0iLCJjcmVhdGVNZXRob2QiLCJsb2FkaW5nIiwic3VjY2VzcyIsImZhaWwiLCJmb3JFYWNoIiwic2V0RGVmYXVsdE9wdGlvbnMiLCJyZXNldERlZmF1bHRPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxpQkFBaUI7QUFDbkJDLFVBQU0sTUFEYTtBQUVuQkMsVUFBTSxLQUZhO0FBR25CQyxhQUFTLEVBSFU7QUFJbkJDLFVBQU0sSUFKYTtBQUtuQkMsWUFBUSxJQUxXO0FBTW5CQyxjQUFVLElBTlM7QUFPbkJDLGNBQVUsUUFQUztBQVFuQkMsaUJBQWEsS0FSTTtBQVNuQkMsaUJBQWEsVUFUTTtBQVVuQkMsY0FBVTtBQVZTLENBQXZCO0FBWUEsSUFBSUMsUUFBUSxFQUFaO0FBQ0EsSUFBSUMsaUJBQWlCQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQmQsY0FBbEIsQ0FBckI7QUFDQSxTQUFTZSxZQUFULENBQXNCWixPQUF0QixFQUErQjtBQUMzQixXQUFPLGtCQUFNQSxPQUFOLElBQWlCQSxPQUFqQixHQUEyQixFQUFFQSxnQkFBRixFQUFsQztBQUNIO0FBQ0QsU0FBU2EsVUFBVCxHQUFzQjtBQUNsQixRQUFNQyxRQUFRQyxpQkFBZDtBQUNBLFdBQU9ELE1BQU1BLE1BQU1FLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQ0g7QUFDRCxTQUFTQyxLQUFULENBQWVDLFlBQWYsRUFBNkI7QUFDekIsUUFBTUMsVUFBVVQsT0FBT0MsTUFBUCxDQUFjRCxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkYsY0FBbEIsQ0FBZCxFQUFpREcsYUFBYU0sWUFBYixDQUFqRCxDQUFoQjtBQUNBLFFBQU1FLFVBQVVELFFBQVFDLE9BQVIsSUFBbUJQLFlBQW5DO0FBQ0EsUUFBTVEsUUFBUUQsUUFBUUUsZUFBUixDQUF3QkgsUUFBUVosUUFBaEMsQ0FBZDtBQUNBLFFBQUksQ0FBQ2MsS0FBTCxFQUFZO0FBQ1JFLGdCQUFRQyxJQUFSLENBQWEsOENBQWI7QUFDQTtBQUNIO0FBQ0QsV0FBT0wsUUFBUUMsT0FBZjtBQUNBLFdBQU9ELFFBQVFaLFFBQWY7QUFDQWMsVUFBTUksS0FBTixHQUFjLFlBQU07QUFDaEJKLGNBQU1LLE9BQU4sQ0FBYyxFQUFFekIsTUFBTSxLQUFSLEVBQWQ7QUFDQSxZQUFJa0IsUUFBUVEsT0FBWixFQUFxQjtBQUNqQlIsb0JBQVFRLE9BQVI7QUFDSDtBQUNKLEtBTEQ7QUFNQW5CLFVBQU1vQixJQUFOLENBQVdQLEtBQVg7QUFDQUEsVUFBTUssT0FBTixDQUFjUCxPQUFkO0FBQ0FVLGlCQUFhUixNQUFNUyxLQUFuQjtBQUNBLFFBQUlYLFFBQVFoQixRQUFSLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3RCa0IsY0FBTVMsS0FBTixHQUFjQyxXQUFXLFlBQU07QUFDM0JWLGtCQUFNSSxLQUFOO0FBQ0FqQixvQkFBUUEsTUFBTXdCLE1BQU4sQ0FBYTtBQUFBLHVCQUFRQyxTQUFTWixLQUFqQjtBQUFBLGFBQWIsQ0FBUjtBQUNILFNBSGEsRUFHWEYsUUFBUWhCLFFBSEcsQ0FBZDtBQUlIO0FBQ0QsV0FBT2tCLEtBQVA7QUFDSDtBQUNELElBQU1hLGVBQWUsU0FBZkEsWUFBZSxDQUFDcEMsSUFBRDtBQUFBLFdBQVUsVUFBQ3FCLE9BQUQ7QUFBQSxlQUFhRixNQUFNUCxPQUFPQyxNQUFQLENBQWMsRUFBRWIsVUFBRixFQUFkLEVBQXdCYyxhQUFhTyxPQUFiLENBQXhCLENBQU4sQ0FBYjtBQUFBLEtBQVY7QUFBQSxDQUFyQjtBQUNBRixNQUFNa0IsT0FBTixHQUFnQkQsYUFBYSxTQUFiLENBQWhCO0FBQ0FqQixNQUFNbUIsT0FBTixHQUFnQkYsYUFBYSxTQUFiLENBQWhCO0FBQ0FqQixNQUFNb0IsSUFBTixHQUFhSCxhQUFhLE1BQWIsQ0FBYjtBQUNBakIsTUFBTVEsS0FBTixHQUFjLFlBQU07QUFDaEJqQixVQUFNOEIsT0FBTixDQUFjLGlCQUFTO0FBQ25CakIsY0FBTUksS0FBTjtBQUNILEtBRkQ7QUFHQWpCLFlBQVEsRUFBUjtBQUNILENBTEQ7QUFNQVMsTUFBTXNCLGlCQUFOLEdBQTBCLFVBQUNwQixPQUFELEVBQWE7QUFDbkNULFdBQU9DLE1BQVAsQ0FBY0YsY0FBZCxFQUE4QlUsT0FBOUI7QUFDSCxDQUZEO0FBR0FGLE1BQU11QixtQkFBTixHQUE0QixZQUFNO0FBQzlCL0IscUJBQWlCQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQmQsY0FBbEIsQ0FBakI7QUFDSCxDQUZEO2tCQUdlb0IsSyIsImZpbGUiOiJ0b2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzT2JqIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBtYXNrOiBmYWxzZSxcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBzaG93OiB0cnVlLFxuICAgIHpJbmRleDogMTAwMCxcbiAgICBkdXJhdGlvbjogMjAwMCxcbiAgICBwb3NpdGlvbjogJ21pZGRsZScsXG4gICAgZm9yYmlkQ2xpY2s6IGZhbHNlLFxuICAgIGxvYWRpbmdUeXBlOiAnY2lyY3VsYXInLFxuICAgIHNlbGVjdG9yOiAnI3Zhbi10b2FzdCdcbn07XG5sZXQgcXVldWUgPSBbXTtcbmxldCBjdXJyZW50T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKTtcbmZ1bmN0aW9uIHBhcnNlT3B0aW9ucyhtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGlzT2JqKG1lc3NhZ2UpID8gbWVzc2FnZSA6IHsgbWVzc2FnZSB9O1xufVxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgICBjb25zdCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgIHJldHVybiBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcbn1cbmZ1bmN0aW9uIFRvYXN0KHRvYXN0T3B0aW9ucykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRPcHRpb25zKSwgcGFyc2VPcHRpb25zKHRvYXN0T3B0aW9ucykpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgZ2V0Q29udGV4dCgpO1xuICAgIGNvbnN0IHRvYXN0ID0gY29udGV4dC5zZWxlY3RDb21wb25lbnQob3B0aW9ucy5zZWxlY3Rvcik7XG4gICAgaWYgKCF0b2FzdCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ+acquaJvuWIsCB2YW4tdG9hc3Qg6IqC54K577yM6K+356Gu6K6kIHNlbGVjdG9yIOWPiiBjb250ZXh0IOaYr+WQpuato+ehricpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlbGV0ZSBvcHRpb25zLmNvbnRleHQ7XG4gICAgZGVsZXRlIG9wdGlvbnMuc2VsZWN0b3I7XG4gICAgdG9hc3QuY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIHRvYXN0LnNldERhdGEoeyBzaG93OiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKG9wdGlvbnMub25DbG9zZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5vbkNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHF1ZXVlLnB1c2godG9hc3QpO1xuICAgIHRvYXN0LnNldERhdGEob3B0aW9ucyk7XG4gICAgY2xlYXJUaW1lb3V0KHRvYXN0LnRpbWVyKTtcbiAgICBpZiAob3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdG9hc3QudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRvYXN0LmNsZWFyKCk7XG4gICAgICAgICAgICBxdWV1ZSA9IHF1ZXVlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRvYXN0KTtcbiAgICAgICAgfSwgb3B0aW9ucy5kdXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0b2FzdDtcbn1cbmNvbnN0IGNyZWF0ZU1ldGhvZCA9ICh0eXBlKSA9PiAob3B0aW9ucykgPT4gVG9hc3QoT2JqZWN0LmFzc2lnbih7IHR5cGUgfSwgcGFyc2VPcHRpb25zKG9wdGlvbnMpKSk7XG5Ub2FzdC5sb2FkaW5nID0gY3JlYXRlTWV0aG9kKCdsb2FkaW5nJyk7XG5Ub2FzdC5zdWNjZXNzID0gY3JlYXRlTWV0aG9kKCdzdWNjZXNzJyk7XG5Ub2FzdC5mYWlsID0gY3JlYXRlTWV0aG9kKCdmYWlsJyk7XG5Ub2FzdC5jbGVhciA9ICgpID0+IHtcbiAgICBxdWV1ZS5mb3JFYWNoKHRvYXN0ID0+IHtcbiAgICAgICAgdG9hc3QuY2xlYXIoKTtcbiAgICB9KTtcbiAgICBxdWV1ZSA9IFtdO1xufTtcblRvYXN0LnNldERlZmF1bHRPcHRpb25zID0gKG9wdGlvbnMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRPcHRpb25zLCBvcHRpb25zKTtcbn07XG5Ub2FzdC5yZXNldERlZmF1bHRPcHRpb25zID0gKCkgPT4ge1xuICAgIGN1cnJlbnRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRvYXN0O1xuIl19