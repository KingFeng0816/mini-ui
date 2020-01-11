'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isDef = isDef;
exports.isObj = isObj;
exports.isNumber = isNumber;
exports.range = range;
exports.nextTick = nextTick;
exports.getSystemInfoSync = getSystemInfoSync;
exports.addUnit = addUnit;
function isDef(value) {
    return value !== undefined && value !== null;
}
function isObj(x) {
    var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
    return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
    return (/^\d+(\.\d+)?$/.test(value)
    );
}
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function nextTick(fn) {
    setTimeout(function () {
        fn();
    }, 1000 / 30);
}
var systemInfo = null;
function getSystemInfoSync() {
    if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
    }
    return systemInfo;
}
function addUnit(value) {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumber(value) ? value + 'px' : value;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImlzRGVmIiwiaXNPYmoiLCJpc051bWJlciIsInJhbmdlIiwibmV4dFRpY2siLCJnZXRTeXN0ZW1JbmZvU3luYyIsImFkZFVuaXQiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsIngiLCJ0eXBlIiwidGVzdCIsIm51bSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbiIsInNldFRpbWVvdXQiLCJzeXN0ZW1JbmZvIiwid3giLCJTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBQWdCQSxLLEdBQUFBLEs7UUFHQUMsSyxHQUFBQSxLO1FBSUFDLFEsR0FBQUEsUTtRQUdBQyxLLEdBQUFBLEs7UUFHQUMsUSxHQUFBQSxRO1FBTUFDLGlCLEdBQUFBLGlCO1FBTUFDLE8sR0FBQUEsTztBQXpCVCxTQUFTTixLQUFULENBQWVPLEtBQWYsRUFBc0I7QUFDekIsV0FBT0EsVUFBVUMsU0FBVixJQUF1QkQsVUFBVSxJQUF4QztBQUNIO0FBQ00sU0FBU04sS0FBVCxDQUFlUSxDQUFmLEVBQWtCO0FBQ3JCLFFBQU1DLGNBQWNELENBQWQseUNBQWNBLENBQWQsQ0FBTjtBQUNBLFdBQU9BLE1BQU0sSUFBTixLQUFlQyxTQUFTLFFBQVQsSUFBcUJBLFNBQVMsVUFBN0MsQ0FBUDtBQUNIO0FBQ00sU0FBU1IsUUFBVCxDQUFrQkssS0FBbEIsRUFBeUI7QUFDNUIsV0FBTyxpQkFBZ0JJLElBQWhCLENBQXFCSixLQUFyQjtBQUFQO0FBQ0g7QUFDTSxTQUFTSixLQUFULENBQWVTLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUNqQyxXQUFPQyxLQUFLRixHQUFMLENBQVNFLEtBQUtELEdBQUwsQ0FBU0YsR0FBVCxFQUFjQyxHQUFkLENBQVQsRUFBNkJDLEdBQTdCLENBQVA7QUFDSDtBQUNNLFNBQVNWLFFBQVQsQ0FBa0JZLEVBQWxCLEVBQXNCO0FBQ3pCQyxlQUFXLFlBQU07QUFDYkQ7QUFDSCxLQUZELEVBRUcsT0FBTyxFQUZWO0FBR0g7QUFDRCxJQUFJRSxhQUFhLElBQWpCO0FBQ08sU0FBU2IsaUJBQVQsR0FBNkI7QUFDaEMsUUFBSWEsY0FBYyxJQUFsQixFQUF3QjtBQUNwQkEscUJBQWFDLEdBQUdkLGlCQUFILEVBQWI7QUFDSDtBQUNELFdBQU9hLFVBQVA7QUFDSDtBQUNNLFNBQVNaLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQzNCLFFBQUksQ0FBQ1AsTUFBTU8sS0FBTixDQUFMLEVBQW1CO0FBQ2YsZUFBT0MsU0FBUDtBQUNIO0FBQ0RELFlBQVFhLE9BQU9iLEtBQVAsQ0FBUjtBQUNBLFdBQU9MLFNBQVNLLEtBQVQsSUFBcUJBLEtBQXJCLFVBQWlDQSxLQUF4QztBQUNIIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzRGVmKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNPYmooeCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgeDtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gL15cXGQrKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKG51bSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZuKCk7XG4gICAgfSwgMTAwMCAvIDMwKTtcbn1cbmxldCBzeXN0ZW1JbmZvID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTeXN0ZW1JbmZvU3luYygpIHtcbiAgICBpZiAoc3lzdGVtSW5mbyA9PSBudWxsKSB7XG4gICAgICAgIHN5c3RlbUluZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgIH1cbiAgICByZXR1cm4gc3lzdGVtSW5mbztcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRVbml0KHZhbHVlKSB7XG4gICAgaWYgKCFpc0RlZih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIHJldHVybiBpc051bWJlcih2YWx1ZSkgPyBgJHt2YWx1ZX1weGAgOiB2YWx1ZTtcbn1cbiJdfQ==