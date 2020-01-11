'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var behavior = exports.behavior = Behavior({
    methods: {
        set: function set(data, callback) {
            var _this = this;

            return new Promise(function (resolve) {
                _this.setData(data, function () {
                    if (callback && typeof callback === 'function') {
                        callback.call(_this);
                    }
                    resolve();
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGF2aW9yLmpzIl0sIm5hbWVzIjpbImJlaGF2aW9yIiwiQmVoYXZpb3IiLCJtZXRob2RzIiwic2V0IiwiZGF0YSIsImNhbGxiYWNrIiwiUHJvbWlzZSIsInNldERhdGEiLCJjYWxsIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSw4QkFBV0MsU0FBUztBQUM3QkMsYUFBUztBQUNMQyxXQURLLGVBQ0RDLElBREMsRUFDS0MsUUFETCxFQUNlO0FBQUE7O0FBQ2hCLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxtQkFBVztBQUMxQixzQkFBS0MsT0FBTCxDQUFhSCxJQUFiLEVBQW1CLFlBQU07QUFDckIsd0JBQUlDLFlBQVksT0FBT0EsUUFBUCxLQUFvQixVQUFwQyxFQUFnRDtBQUM1Q0EsaUNBQVNHLElBQVQsQ0FBYyxLQUFkO0FBQ0g7QUFDREM7QUFDSCxpQkFMRDtBQU1ILGFBUE0sQ0FBUDtBQVFIO0FBVkk7QUFEb0IsQ0FBVCxDQUFqQiIsImZpbGUiOiJiZWhhdmlvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBiZWhhdmlvciA9IEJlaGF2aW9yKHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==