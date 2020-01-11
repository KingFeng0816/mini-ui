'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

var _shared = require('./../picker/shared.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var currentYear = new Date().getFullYear();
function isValidDate(date) {
    return (0, _utils.isDef)(date) && !isNaN(new Date(date).getTime());
}
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function padZero(val) {
    return ('00' + val).slice(-2);
}
function times(n, iteratee) {
    var index = -1;
    var result = Array(n < 0 ? 0 : n);
    while (++index < n) {
        result[index] = iteratee(index);
    }
    return result;
}
function getTrueValue(formattedValue) {
    if (!formattedValue) return;
    while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
    }
    return parseInt(formattedValue, 10);
}
function getMonthEndDay(year, month) {
    return 32 - new Date(year, month - 1, 32).getDate();
}
var defaultFormatter = function defaultFormatter(_, value) {
    return value;
};
(0, _component.VantComponent)({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: Object.assign(Object.assign({}, _shared.pickerProps), { value: null, filter: null, type: {
            type: String,
            value: 'datetime'
        }, showToolbar: {
            type: Boolean,
            value: true
        }, formatter: {
            type: null,
            value: defaultFormatter
        }, minDate: {
            type: Number,
            value: new Date(currentYear - 10, 0, 1).getTime()
        }, maxDate: {
            type: Number,
            value: new Date(currentYear + 10, 11, 31).getTime()
        }, minHour: {
            type: Number,
            value: 0
        }, maxHour: {
            type: Number,
            value: 23
        }, minMinute: {
            type: Number,
            value: 0
        }, maxMinute: {
            type: Number,
            value: 59
        } }),
    data: {
        innerValue: Date.now(),
        columns: []
    },
    watch: {
        value: 'updateValue',
        type: 'updateValue',
        minDate: 'updateValue',
        maxDate: 'updateValue',
        minHour: 'updateValue',
        maxHour: 'updateValue',
        minMinute: 'updateValue',
        maxMinute: 'updateValue'
    },
    methods: {
        updateValue: function updateValue() {
            var _this = this;

            var data = this.data;

            var val = this.correctValue(this.data.value);
            var isEqual = val === data.innerValue;
            if (!isEqual) {
                this.updateColumnValue(val).then(function () {
                    _this.$emit('input', val);
                });
            } else {
                this.updateColumns();
            }
        },
        getPicker: function getPicker() {
            if (this.picker == null) {
                this.picker = this.selectComponent('.van-datetime-picker');
                var picker = this.picker;
                var setColumnValues = picker.setColumnValues;

                picker.setColumnValues = function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    return setColumnValues.apply(picker, [].concat(args, [false]));
                };
            }
            return this.picker;
        },
        updateColumns: function updateColumns() {
            var _data$formatter = this.data.formatter,
                formatter = _data$formatter === undefined ? defaultFormatter : _data$formatter;

            var results = this.getOriginColumns().map(function (column) {
                return {
                    values: column.values.map(function (value) {
                        return formatter(column.type, value);
                    })
                };
            });
            return this.set({ columns: results });
        },
        getOriginColumns: function getOriginColumns() {
            var filter = this.data.filter;

            var results = this.getRanges().map(function (_ref) {
                var type = _ref.type,
                    range = _ref.range;

                var values = times(range[1] - range[0] + 1, function (index) {
                    var value = range[0] + index;
                    value = type === 'year' ? '' + value : padZero(value);
                    return value;
                });
                if (filter) {
                    values = filter(type, values);
                }
                return { type: type, values: values };
            });
            return results;
        },
        getRanges: function getRanges() {
            var data = this.data;

            if (data.type === 'time') {
                return [{
                    type: 'hour',
                    range: [data.minHour, data.maxHour]
                }, {
                    type: 'minute',
                    range: [data.minMinute, data.maxMinute]
                }];
            }

            var _getBoundary = this.getBoundary('max', data.innerValue),
                maxYear = _getBoundary.maxYear,
                maxDate = _getBoundary.maxDate,
                maxMonth = _getBoundary.maxMonth,
                maxHour = _getBoundary.maxHour,
                maxMinute = _getBoundary.maxMinute;

            var _getBoundary2 = this.getBoundary('min', data.innerValue),
                minYear = _getBoundary2.minYear,
                minDate = _getBoundary2.minDate,
                minMonth = _getBoundary2.minMonth,
                minHour = _getBoundary2.minHour,
                minMinute = _getBoundary2.minMinute;

            var result = [{
                type: 'year',
                range: [minYear, maxYear]
            }, {
                type: 'month',
                range: [minMonth, maxMonth]
            }, {
                type: 'day',
                range: [minDate, maxDate]
            }, {
                type: 'hour',
                range: [minHour, maxHour]
            }, {
                type: 'minute',
                range: [minMinute, maxMinute]
            }];
            if (data.type === 'date') result.splice(3, 2);
            if (data.type === 'year-month') result.splice(2, 3);
            return result;
        },
        correctValue: function correctValue(value) {
            var data = this.data;
            // validate value

            var isDateType = data.type !== 'time';
            if (isDateType && !isValidDate(value)) {
                value = data.minDate;
            } else if (!isDateType && !value) {
                var minHour = data.minHour;

                value = padZero(minHour) + ':00';
            }
            // time type
            if (!isDateType) {
                var _value$split = value.split(':'),
                    _value$split2 = _slicedToArray(_value$split, 2),
                    hour = _value$split2[0],
                    minute = _value$split2[1];

                hour = padZero(range(hour, data.minHour, data.maxHour));
                minute = padZero(range(minute, data.minMinute, data.maxMinute));
                return hour + ':' + minute;
            }
            // date type
            value = Math.max(value, data.minDate);
            value = Math.min(value, data.maxDate);
            return value;
        },
        getBoundary: function getBoundary(type, innerValue) {
            var _ref2;

            var value = new Date(innerValue);
            var boundary = new Date(this.data[type + 'Date']);
            var year = boundary.getFullYear();
            var month = 1;
            var date = 1;
            var hour = 0;
            var minute = 0;
            if (type === 'max') {
                month = 12;
                date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
                hour = 23;
                minute = 59;
            }
            if (value.getFullYear() === year) {
                month = boundary.getMonth() + 1;
                if (value.getMonth() + 1 === month) {
                    date = boundary.getDate();
                    if (value.getDate() === date) {
                        hour = boundary.getHours();
                        if (value.getHours() === hour) {
                            minute = boundary.getMinutes();
                        }
                    }
                }
            }
            return _ref2 = {}, _defineProperty(_ref2, type + 'Year', year), _defineProperty(_ref2, type + 'Month', month), _defineProperty(_ref2, type + 'Date', date), _defineProperty(_ref2, type + 'Hour', hour), _defineProperty(_ref2, type + 'Minute', minute), _ref2;
        },
        onCancel: function onCancel() {
            this.$emit('cancel');
        },
        onConfirm: function onConfirm() {
            this.$emit('confirm', this.data.innerValue);
        },
        onChange: function onChange() {
            var _this2 = this;

            var data = this.data;

            var value = void 0;
            var picker = this.getPicker();
            if (data.type === 'time') {
                var indexes = picker.getIndexes();
                value = +data.columns[0].values[indexes[0]] + ':' + +data.columns[1].values[indexes[1]];
            } else {
                var values = picker.getValues();
                var year = getTrueValue(values[0]);
                var month = getTrueValue(values[1]);
                var maxDate = getMonthEndDay(year, month);
                var date = getTrueValue(values[2]);
                if (data.type === 'year-month') {
                    date = 1;
                }
                date = date > maxDate ? maxDate : date;
                var hour = 0;
                var minute = 0;
                if (data.type === 'datetime') {
                    hour = getTrueValue(values[3]);
                    minute = getTrueValue(values[4]);
                }
                value = new Date(year, month - 1, date, hour, minute);
            }
            value = this.correctValue(value);
            this.updateColumnValue(value).then(function () {
                _this2.$emit('input', value);
                _this2.$emit('change', picker);
            });
        },
        updateColumnValue: function updateColumnValue(value) {
            var _this3 = this;

            var values = [];
            var _data = this.data,
                type = _data.type,
                _data$formatter2 = _data.formatter,
                formatter = _data$formatter2 === undefined ? defaultFormatter : _data$formatter2;

            var picker = this.getPicker();
            if (type === 'time') {
                var pair = value.split(':');
                values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
            } else {
                var date = new Date(value);
                values = [formatter('year', '' + date.getFullYear()), formatter('month', padZero(date.getMonth() + 1))];
                if (type === 'date') {
                    values.push(formatter('day', padZero(date.getDate())));
                }
                if (type === 'datetime') {
                    values.push(formatter('day', padZero(date.getDate())), formatter('hour', padZero(date.getHours())), formatter('minute', padZero(date.getMinutes())));
                }
            }
            return this.set({ innerValue: value }).then(function () {
                return _this3.updateColumns();
            }).then(function () {
                return picker.setValues(values);
            });
        }
    },
    created: function created() {
        var _this4 = this;

        var innerValue = this.correctValue(this.data.value);
        this.updateColumnValue(innerValue).then(function () {
            _this4.$emit('input', innerValue);
        });
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiaXNWYWxpZERhdGUiLCJkYXRlIiwiaXNOYU4iLCJnZXRUaW1lIiwicmFuZ2UiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIiwicGFkWmVybyIsInZhbCIsInNsaWNlIiwidGltZXMiLCJuIiwiaXRlcmF0ZWUiLCJpbmRleCIsInJlc3VsdCIsIkFycmF5IiwiZ2V0VHJ1ZVZhbHVlIiwiZm9ybWF0dGVkVmFsdWUiLCJwYXJzZUludCIsImdldE1vbnRoRW5kRGF5IiwieWVhciIsIm1vbnRoIiwiZ2V0RGF0ZSIsImRlZmF1bHRGb3JtYXR0ZXIiLCJfIiwidmFsdWUiLCJjbGFzc2VzIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwaWNrZXJQcm9wcyIsImZpbHRlciIsInR5cGUiLCJTdHJpbmciLCJzaG93VG9vbGJhciIsIkJvb2xlYW4iLCJmb3JtYXR0ZXIiLCJtaW5EYXRlIiwiTnVtYmVyIiwibWF4RGF0ZSIsIm1pbkhvdXIiLCJtYXhIb3VyIiwibWluTWludXRlIiwibWF4TWludXRlIiwiZGF0YSIsImlubmVyVmFsdWUiLCJub3ciLCJjb2x1bW5zIiwid2F0Y2giLCJtZXRob2RzIiwidXBkYXRlVmFsdWUiLCJjb3JyZWN0VmFsdWUiLCJpc0VxdWFsIiwidXBkYXRlQ29sdW1uVmFsdWUiLCJ0aGVuIiwiJGVtaXQiLCJ1cGRhdGVDb2x1bW5zIiwiZ2V0UGlja2VyIiwicGlja2VyIiwic2VsZWN0Q29tcG9uZW50Iiwic2V0Q29sdW1uVmFsdWVzIiwiYXJncyIsImFwcGx5IiwicmVzdWx0cyIsImdldE9yaWdpbkNvbHVtbnMiLCJtYXAiLCJ2YWx1ZXMiLCJjb2x1bW4iLCJzZXQiLCJnZXRSYW5nZXMiLCJnZXRCb3VuZGFyeSIsIm1heFllYXIiLCJtYXhNb250aCIsIm1pblllYXIiLCJtaW5Nb250aCIsInNwbGljZSIsImlzRGF0ZVR5cGUiLCJzcGxpdCIsImhvdXIiLCJtaW51dGUiLCJib3VuZGFyeSIsImdldE1vbnRoIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJvbkNoYW5nZSIsImluZGV4ZXMiLCJnZXRJbmRleGVzIiwiZ2V0VmFsdWVzIiwicGFpciIsInB1c2giLCJzZXRWYWx1ZXMiLCJjcmVhdGVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSxJQUFNQSxjQUFjLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFwQjtBQUNBLFNBQVNDLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCO0FBQ3ZCLFdBQU8sa0JBQU1BLElBQU4sS0FBZSxDQUFDQyxNQUFNLElBQUlKLElBQUosQ0FBU0csSUFBVCxFQUFlRSxPQUFmLEVBQU4sQ0FBdkI7QUFDSDtBQUNELFNBQVNDLEtBQVQsQ0FBZUMsR0FBZixFQUFvQkMsR0FBcEIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQzFCLFdBQU9DLEtBQUtGLEdBQUwsQ0FBU0UsS0FBS0QsR0FBTCxDQUFTRixHQUFULEVBQWNDLEdBQWQsQ0FBVCxFQUE2QkMsR0FBN0IsQ0FBUDtBQUNIO0FBQ0QsU0FBU0UsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDbEIsV0FBTyxRQUFLQSxHQUFMLEVBQVdDLEtBQVgsQ0FBaUIsQ0FBQyxDQUFsQixDQUFQO0FBQ0g7QUFDRCxTQUFTQyxLQUFULENBQWVDLENBQWYsRUFBa0JDLFFBQWxCLEVBQTRCO0FBQ3hCLFFBQUlDLFFBQVEsQ0FBQyxDQUFiO0FBQ0EsUUFBTUMsU0FBU0MsTUFBTUosSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZQSxDQUFsQixDQUFmO0FBQ0EsV0FBTyxFQUFFRSxLQUFGLEdBQVVGLENBQWpCLEVBQW9CO0FBQ2hCRyxlQUFPRCxLQUFQLElBQWdCRCxTQUFTQyxLQUFULENBQWhCO0FBQ0g7QUFDRCxXQUFPQyxNQUFQO0FBQ0g7QUFDRCxTQUFTRSxZQUFULENBQXNCQyxjQUF0QixFQUFzQztBQUNsQyxRQUFJLENB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UUFBUVIsS0FBS3VCLE9BQUwsRUFBUixDQUFqQixDQUFaO0FBQ0g7QUFDRCxvQkFBSVUsU0FBUyxVQUFiLEVBQXlCO0FBQ3JCa0MsMkJBQU95QixJQUFQLENBQVl2RCxVQUFVLEtBQVYsRUFBaUI3QixRQUFRUixLQUFLdUIsT0FBTCxFQUFSLENBQWpCLENBQVosRUFBdURjLFVBQVUsTUFBVixFQUFrQjdCLFFBQVFSLEtBQUttRixRQUFMLEVBQVIsQ0FBbEIsQ0FBdkQsRUFBb0c5QyxVQUFVLFFBQVYsRUFBb0I3QixRQUFRUixLQUFLb0YsVUFBTCxFQUFSLENBQXBCLENBQXBHO0FBQ0g7QUFDSjtBQUNELG1CQUFPLEtBQUtmLEdBQUwsQ0FBUyxFQUFFdkIsWUFBWXBCLEtBQWQsRUFBVCxFQUNGNkIsSUFERSxDQUNHO0FBQUEsdUJBQU0sT0FBS0UsYUFBTCxFQUFOO0FBQUEsYUFESCxFQUVGRixJQUZFLENBRUc7QUFBQSx1QkFBTUksT0FBT2tDLFNBQVAsQ0FBaUIxQixNQUFqQixDQUFOO0FBQUEsYUFGSCxDQUFQO0FBR0g7QUFuTkksS0E1Q0M7QUFpUVYyQixXQWpRVSxxQkFpUUE7QUFBQTs7QUFDTixZQUFNaEQsYUFBYSxLQUFLTSxZQUFMLENBQWtCLEtBQUtQLElBQUwsQ0FBVW5CLEtBQTVCLENBQW5CO0FBQ0EsYUFBSzRCLGlCQUFMLENBQXVCUixVQUF2QixFQUFtQ1MsSUFBbkMsQ0FBd0MsWUFBTTtBQUMxQyxtQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JWLFVBQXBCO0FBQ0gsU0FGRDtBQUdIO0FBdFFTLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpc0RlZiB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5pbXBvcnQgeyBwaWNrZXJQcm9wcyB9IGZyb20gJy4uL3BpY2tlci9zaGFyZWQnO1xuY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5mdW5jdGlvbiBpc1ZhbGlkRGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIGlzRGVmKGRhdGUpICYmICFpc05hTihuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCkpO1xufVxuZnVuY3Rpb24gcmFuZ2UobnVtLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG59XG5mdW5jdGlvbiBwYWRaZXJvKHZhbCkge1xuICAgIHJldHVybiBgMDAke3ZhbH1gLnNsaWNlKC0yKTtcbn1cbmZ1bmN0aW9uIHRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgY29uc3QgcmVzdWx0ID0gQXJyYXkobiA8IDAgPyAwIDogbik7XG4gICAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRUcnVlVmFsdWUoZm9ybWF0dGVkVmFsdWUpIHtcbiAgICBpZiAoIWZvcm1hdHRlZFZhbHVlKVxuICAgICAgICByZXR1cm47XG4gICAgd2hpbGUgKGlzTmFOKHBhcnNlSW50KGZvcm1hdHRlZFZhbHVlLCAxMCkpKSB7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0dGVkVmFsdWUuc2xpY2UoMSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChmb3JtYXR0ZWRWYWx1ZSwgMTApO1xufVxuZnVuY3Rpb24gZ2V0TW9udGhFbmREYXkoeWVhciwgbW9udGgpIHtcbiAgICByZXR1cm4gMzIgLSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIDMyKS5nZXREYXRlKCk7XG59XG5jb25zdCBkZWZhdWx0Rm9ybWF0dGVyID0gKF8sIHZhbHVlKSA9PiB2YWx1ZTtcblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFsnYWN0aXZlLWNsYXNzJywgJ3Rvb2xiYXItY2xhc3MnLCAnY29sdW1uLWNsYXNzJ10sXG4gICAgcHJvcHM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcGlja2VyUHJvcHMpLCB7IHZhbHVlOiBudWxsLCBmaWx0ZXI6IG51bGwsIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnZGF0ZXRpbWUnXG4gICAgICAgIH0sIHNob3dUb29sYmFyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSwgZm9ybWF0dGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IGRlZmF1bHRGb3JtYXR0ZXJcbiAgICAgICAgfSwgbWluRGF0ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGN1cnJlbnRZZWFyIC0gMTAsIDAsIDEpLmdldFRpbWUoKVxuICAgICAgICB9LCBtYXhEYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoY3VycmVudFllYXIgKyAxMCwgMTEsIDMxKS5nZXRUaW1lKClcbiAgICAgICAgfSwgbWluSG91cjoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSwgbWF4SG91cjoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDIzXG4gICAgICAgIH0sIG1pbk1pbnV0ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSwgbWF4TWludXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNTlcbiAgICAgICAgfSB9KSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGlubmVyVmFsdWU6IERhdGUubm93KCksXG4gICAgICAgIGNvbHVtbnM6IFtdXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZTogJ3VwZGF0ZVZhbHVlJyxcbiAgICAgICAgdHlwZTogJ3VwZGF0ZVZhbHVlJyxcbiAgICAgICAgbWluRGF0ZTogJ3VwZGF0ZVZhbHVlJyxcbiAgICAgICAgbWF4RGF0ZTogJ3VwZGF0ZVZhbHVlJyxcbiAgICAgICAgbWluSG91cjogJ3VwZGF0ZVZhbHVlJyxcbiAgICAgICAgbWF4SG91cjogJ3VwZGF0ZVZhbHVlJyxcbiAgICAgICAgbWluTWludXRlOiAndXBkYXRlVmFsdWUnLFxuICAgICAgICBtYXhNaW51dGU6ICd1cGRhdGVWYWx1ZSdcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlVmFsdWUoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLmNvcnJlY3RWYWx1ZSh0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgaXNFcXVhbCA9IHZhbCA9PT0gZGF0YS5pbm5lclZhbHVlO1xuICAgICAgICAgICAgaWYgKCFpc0VxdWFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb2x1bW5WYWx1ZSh2YWwpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbHVtbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UGlja2VyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGlja2VyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlciA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcudmFuLWRhdGV0aW1lLXBpY2tlcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGlja2VyIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2V0Q29sdW1uVmFsdWVzIH0gPSBwaWNrZXI7XG4gICAgICAgICAgICAgICAgcGlja2VyLnNldENvbHVtblZhbHVlcyA9ICguLi5hcmdzKSA9PiBzZXRDb2x1bW5WYWx1ZXMuYXBwbHkocGlja2VyLCBbLi4uYXJncywgZmFsc2VdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpY2tlcjtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ29sdW1ucygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZm9ybWF0dGVyID0gZGVmYXVsdEZvcm1hdHRlciB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuZ2V0T3JpZ2luQ29sdW1ucygpLm1hcChjb2x1bW4gPT4gKHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IGNvbHVtbi52YWx1ZXMubWFwKHZhbHVlID0+IGZvcm1hdHRlcihjb2x1bW4udHlwZSwgdmFsdWUpKVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHsgY29sdW1uczogcmVzdWx0cyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0T3JpZ2luQ29sdW1ucygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZmlsdGVyIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5nZXRSYW5nZXMoKS5tYXAoKHsgdHlwZSwgcmFuZ2UgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSB0aW1lcyhyYW5nZVsxXSAtIHJhbmdlWzBdICsgMSwgaW5kZXggPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSByYW5nZVswXSArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHR5cGUgPT09ICd5ZWFyJyA/IGAke3ZhbHVlfWAgOiBwYWRaZXJvKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gZmlsdGVyKHR5cGUsIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIHZhbHVlcyB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmFuZ2VzKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hvdXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFtkYXRhLm1pbkhvdXIsIGRhdGEubWF4SG91cl1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21pbnV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogW2RhdGEubWluTWludXRlLCBkYXRhLm1heE1pbnV0ZV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IG1heFllYXIsIG1heERhdGUsIG1heE1vbnRoLCBtYXhIb3VyLCBtYXhNaW51dGUgfSA9IHRoaXMuZ2V0Qm91bmRhcnkoJ21heCcsIGRhdGEuaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCB7IG1pblllYXIsIG1pbkRhdGUsIG1pbk1vbnRoLCBtaW5Ib3VyLCBtaW5NaW51dGUgfSA9IHRoaXMuZ2V0Qm91bmRhcnkoJ21pbicsIGRhdGEuaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAneWVhcicsXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbbWluWWVhciwgbWF4WWVhcl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vbnRoJyxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFttaW5Nb250aCwgbWF4TW9udGhdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYXknLFxuICAgICAgICAgICAgICAgICAgICByYW5nZTogW21pbkRhdGUsIG1heERhdGVdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdob3VyJyxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFttaW5Ib3VyLCBtYXhIb3VyXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWludXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFttaW5NaW51dGUsIG1heE1pbnV0ZV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ2RhdGUnKVxuICAgICAgICAgICAgICAgIHJlc3VsdC5zcGxpY2UoMywgMik7XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAneWVhci1tb250aCcpXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNwbGljZSgyLCAzKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGNvcnJlY3RWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgICAgICAgICAgLy8gdmFsaWRhdGUgdmFsdWVcbiAgICAgICAgICAgIGNvbnN0IGlzRGF0ZVR5cGUgPSBkYXRhLnR5cGUgIT09ICd0aW1lJztcbiAgICAgICAgICAgIGlmIChpc0RhdGVUeXBlICYmICFpc1ZhbGlkRGF0ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGEubWluRGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFpc0RhdGVUeXBlICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbWluSG91ciB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGAke3BhZFplcm8obWluSG91cil9OjAwYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRpbWUgdHlwZVxuICAgICAgICAgICAgaWYgKCFpc0RhdGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgbGV0IFtob3VyLCBtaW51dGVdID0gdmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBob3VyID0gcGFkWmVybyhyYW5nZShob3VyLCBkYXRhLm1pbkhvdXIsIGRhdGEubWF4SG91cikpO1xuICAgICAgICAgICAgICAgIG1pbnV0ZSA9IHBhZFplcm8ocmFuZ2UobWludXRlLCBkYXRhLm1pbk1pbnV0ZSwgZGF0YS5tYXhNaW51dGUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7aG91cn06JHttaW51dGV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRhdGUgdHlwZVxuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1heCh2YWx1ZSwgZGF0YS5taW5EYXRlKTtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4odmFsdWUsIGRhdGEubWF4RGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEJvdW5kYXJ5KHR5cGUsIGlubmVyVmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IERhdGUoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBib3VuZGFyeSA9IG5ldyBEYXRlKHRoaXMuZGF0YVtgJHt0eXBlfURhdGVgXSk7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gYm91bmRhcnkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGxldCBtb250aCA9IDE7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IDE7XG4gICAgICAgICAgICBsZXQgaG91ciA9IDA7XG4gICAgICAgICAgICBsZXQgbWludXRlID0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbWF4Jykge1xuICAgICAgICAgICAgICAgIG1vbnRoID0gMTI7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IGdldE1vbnRoRW5kRGF5KHZhbHVlLmdldEZ1bGxZZWFyKCksIHZhbHVlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBob3VyID0gMjM7XG4gICAgICAgICAgICAgICAgbWludXRlID0gNTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUuZ2V0RnVsbFllYXIoKSA9PT0geWVhcikge1xuICAgICAgICAgICAgICAgIG1vbnRoID0gYm91bmRhcnkuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmdldE1vbnRoKCkgKyAxID09PSBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlID0gYm91bmRhcnkuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuZ2V0RGF0ZSgpID09PSBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyID0gYm91bmRhcnkuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5nZXRIb3VycygpID09PSBob3VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlID0gYm91bmRhcnkuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbYCR7dHlwZX1ZZWFyYF06IHllYXIsXG4gICAgICAgICAgICAgICAgW2Ake3R5cGV9TW9udGhgXTogbW9udGgsXG4gICAgICAgICAgICAgICAgW2Ake3R5cGV9RGF0ZWBdOiBkYXRlLFxuICAgICAgICAgICAgICAgIFtgJHt0eXBlfUhvdXJgXTogaG91cixcbiAgICAgICAgICAgICAgICBbYCR7dHlwZX1NaW51dGVgXTogbWludXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBvbkNhbmNlbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbCcpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbmZpcm0oKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb25maXJtJywgdGhpcy5kYXRhLmlubmVyVmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcztcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHBpY2tlciA9IHRoaXMuZ2V0UGlja2VyKCk7XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAndGltZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleGVzID0gcGlja2VyLmdldEluZGV4ZXMoKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGAkeytkYXRhLmNvbHVtbnNbMF0udmFsdWVzW2luZGV4ZXNbMF1dfTokeytkYXRhLmNvbHVtbnNbMV0udmFsdWVzW2luZGV4ZXNbMV1dfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBwaWNrZXIuZ2V0VmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IGdldFRydWVWYWx1ZSh2YWx1ZXNbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gZ2V0VHJ1ZVZhbHVlKHZhbHVlc1sxXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4RGF0ZSA9IGdldE1vbnRoRW5kRGF5KHllYXIsIG1vbnRoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IGdldFRydWVWYWx1ZSh2YWx1ZXNbMl0pO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICd5ZWFyLW1vbnRoJykge1xuICAgICAgICAgICAgICAgICAgICBkYXRlID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0ZSA9IGRhdGUgPiBtYXhEYXRlID8gbWF4RGF0ZSA6IGRhdGU7XG4gICAgICAgICAgICAgICAgbGV0IGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBtaW51dGUgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICdkYXRldGltZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaG91ciA9IGdldFRydWVWYWx1ZSh2YWx1ZXNbM10pO1xuICAgICAgICAgICAgICAgICAgICBtaW51dGUgPSBnZXRUcnVlVmFsdWUodmFsdWVzWzRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRhdGUsIGhvdXIsIG1pbnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuY29ycmVjdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sdW1uVmFsdWUodmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHBpY2tlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ29sdW1uVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgZm9ybWF0dGVyID0gZGVmYXVsdEZvcm1hdHRlciB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgcGlja2VyID0gdGhpcy5nZXRQaWNrZXIoKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGltZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWlyID0gdmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcignaG91cicsIHBhaXJbMF0pLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXIoJ21pbnV0ZScsIHBhaXJbMV0pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXIoJ3llYXInLCBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9YCksXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcignbW9udGgnLCBwYWRaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChmb3JtYXR0ZXIoJ2RheScsIHBhZFplcm8oZGF0ZS5nZXREYXRlKCkpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZXRpbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGZvcm1hdHRlcignZGF5JywgcGFkWmVybyhkYXRlLmdldERhdGUoKSkpLCBmb3JtYXR0ZXIoJ2hvdXInLCBwYWRaZXJvKGRhdGUuZ2V0SG91cnMoKSkpLCBmb3JtYXR0ZXIoJ21pbnV0ZScsIHBhZFplcm8oZGF0ZS5nZXRNaW51dGVzKCkpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHsgaW5uZXJWYWx1ZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnVwZGF0ZUNvbHVtbnMoKSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBwaWNrZXIuc2V0VmFsdWVzKHZhbHVlcykpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBjb25zdCBpbm5lclZhbHVlID0gdGhpcy5jb3JyZWN0VmFsdWUodGhpcy5kYXRhLnZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb2x1bW5WYWx1ZShpbm5lclZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgaW5uZXJWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl19