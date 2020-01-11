'use strict';

var _component = require('./../common/component.js');

var _shared = require('./shared.js');

(0, _component.VantComponent)({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: Object.assign(Object.assign({}, _shared.pickerProps), { valueKey: {
            type: String,
            value: 'text'
        }, toolbarPosition: {
            type: String,
            value: 'top'
        }, defaultIndex: {
            type: Number,
            value: 0
        }, columns: {
            type: Array,
            value: [],
            observer: function observer() {
                var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                this.simple = columns.length && !columns[0].values;
                this.children = this.selectAllComponents('.van-picker__column');
                if (Array.isArray(this.children) && this.children.length) {
                    this.setColumns().catch(function () {});
                }
            }
        } }),
    beforeCreate: function beforeCreate() {
        this.children = [];
    },

    methods: {
        noop: function noop() {},
        setColumns: function setColumns() {
            var _this = this;

            var data = this.data;

            var columns = this.simple ? [{ values: data.columns }] : data.columns;
            var stack = columns.map(function (column, index) {
                return _this.setColumnValues(index, column.values);
            });
            return Promise.all(stack);
        },
        emit: function emit(event) {
            var type = event.currentTarget.dataset.type;

            if (this.simple) {
                this.$emit(type, {
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit(type, {
                    value: this.getValues(),
                    index: this.getIndexes()
                });
            }
        },
        onChange: function onChange(event) {
            if (this.simple) {
                this.$emit('change', {
                    picker: this,
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit('change', {
                    picker: this,
                    value: this.getValues(),
                    index: event.currentTarget.dataset.index
                });
            }
        },

        // get column instance by index
        getColumn: function getColumn(index) {
            return this.children[index];
        },

        // get column value by index
        getColumnValue: function getColumnValue(index) {
            var column = this.getColumn(index);
            return column && column.getValue();
        },

        // set column value by index
        setColumnValue: function setColumnValue(index, value) {
            var column = this.getColumn(index);
            if (column == null) {
                return Promise.reject(new Error('setColumnValue: 对应列不存在'));
            }
            return column.setValue(value);
        },

        // get column option index by column index
        getColumnIndex: function getColumnIndex(columnIndex) {
            return (this.getColumn(columnIndex) || {}).data.currentIndex;
        },

        // set column option index by column index
        setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
            var column = this.getColumn(columnIndex);
            if (column == null) {
                return Promise.reject(new Error('setColumnIndex: 对应列不存在'));
            }
            return column.setIndex(optionIndex);
        },

        // get options of column by index
        getColumnValues: function getColumnValues(index) {
            return (this.children[index] || {}).data.options;
        },

        // set options of column by index
        setColumnValues: function setColumnValues(index, options) {
            var needReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var column = this.children[index];
            if (column == null) {
                return Promise.reject(new Error('setColumnValues: 对应列不存在'));
            }
            var isSame = JSON.stringify(column.data.options) === JSON.stringify(options);
            if (isSame) {
                return Promise.resolve();
            }
            return column.set({ options: options }).then(function () {
                if (needReset) {
                    column.setIndex(0);
                }
            });
        },

        // get values of all columns
        getValues: function getValues() {
            return this.children.map(function (child) {
                return child.getValue();
            });
        },

        // set values of all columns
        setValues: function setValues(values) {
            var _this2 = this;

            var stack = values.map(function (value, index) {
                return _this2.setColumnValue(index, value);
            });
            return Promise.all(stack);
        },

        // get indexes of all columns
        getIndexes: function getIndexes() {
            return this.children.map(function (child) {
                return child.data.currentIndex;
            });
        },

        // set indexes of all columns
        setIndexes: function setIndexes(indexes) {
            var _this3 = this;

            var stack = indexes.map(function (optionIndex, columnIndex) {
                return _this3.setColumnIndex(columnIndex, optionIndex);
            });
            return Promise.all(stack);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsInBpY2tlclByb3BzIiwidmFsdWVLZXkiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJ0b29sYmFyUG9zaXRpb24iLCJkZWZhdWx0SW5kZXgiLCJOdW1iZXIiLCJjb2x1bW5zIiwiQXJyYXkiLCJvYnNlcnZlciIsInNpbXBsZSIsImxlbmd0aCIsInZhbHVlcyIsImNoaWxkcmVuIiwic2VsZWN0QWxsQ29tcG9uZW50cyIsImlzQXJyYXkiLCJzZXRDb2x1bW5zIiwiY2F0Y2giLCJiZWZvcmVDcmVhdGUiLCJtZXRob2RzIiwibm9vcCIsImRhdGEiLCJzdGFjayIsIm1hcCIsImNvbHVtbiIsImluZGV4Iiwic2V0Q29sdW1uVmFsdWVzIiwiUHJvbWlzZSIsImFsbCIsImVtaXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiJGVtaXQiLCJnZXRDb2x1bW5WYWx1ZSIsImdldENvbHVtbkluZGV4IiwiZ2V0VmFsdWVzIiwiZ2V0SW5kZXhlcyIsIm9uQ2hhbmdlIiwicGlja2VyIiwiZ2V0Q29sdW1uIiwiZ2V0VmFsdWUiLCJzZXRDb2x1bW5WYWx1ZSIsInJlamVjdCIsIkVycm9yIiwic2V0VmFsdWUiLCJjb2x1bW5JbmRleCIsImN1cnJlbnRJbmRleCIsInNldENvbHVtbkluZGV4Iiwib3B0aW9uSW5kZXgiLCJzZXRJbmRleCIsImdldENvbHVtblZhbHVlcyIsIm9wdGlvbnMiLCJuZWVkUmVzZXQiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzb2x2ZSIsInNldCIsInRoZW4iLCJjaGlsZCIsInNldFZhbHVlcyIsInNldEluZGV4ZXMiLCJpbmRleGVzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLGFBQVMsQ0FBQyxjQUFELEVBQWlCLGVBQWpCLEVBQWtDLGNBQWxDLENBREM7QUFFVkMsV0FBT0MsT0FB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QTJCdEIsS0FBM0IsQ0FBbEI7QUFBQSxhQUFYLENBQWQ7QUFDQSxtQkFBT3dCLFFBQVFDLEdBQVIsQ0FBWU4sS0FBWixDQUFQO0FBQ0gsU0FoR0k7O0FBaUdMO0FBQ0FlLGtCQWxHSyx3QkFrR1E7QUFDVCxtQkFBTyxLQUFLeEIsUUFBTCxDQUFjVSxHQUFkLENBQWtCLFVBQUNxQyxLQUFEO0FBQUEsdUJBQVdBLE1BQU12QyxJQUFOLENBQVcwQixZQUF0QjtBQUFBLGFBQWxCLENBQVA7QUFDSCxTQXBHSTs7QUFxR0w7QUFDQWUsa0JBdEdLLHNCQXNHTUMsT0F0R04sRUFzR2U7QUFBQTs7QUFDaEIsZ0JBQU16QyxRQUFReUMsUUFBUXhDLEdBQVIsQ0FBWSxVQUFDMEIsV0FBRCxFQUFjSCxXQUFkO0FBQUEsdUJBQThCLE9BQUtFLGNBQUwsQ0FBb0JGLFdBQXBCLEVBQWlDRyxXQUFqQyxDQUE5QjtBQUFBLGFBQVosQ0FBZDtBQUNBLG1CQUFPdEIsUUFBUUMsR0FBUixDQUFZTixLQUFaLENBQVA7QUFDSDtBQXpHSTtBQXpCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgcGlja2VyUHJvcHMgfSBmcm9tICcuL3NoYXJlZCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbJ2FjdGl2ZS1jbGFzcycsICd0b29sYmFyLWNsYXNzJywgJ2NvbHVtbi1jbGFzcyddLFxuICAgIHByb3BzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHBpY2tlclByb3BzKSwgeyB2YWx1ZUtleToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd0ZXh0J1xuICAgICAgICB9LCB0b29sYmFyUG9zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAndG9wJ1xuICAgICAgICB9LCBkZWZhdWx0SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0sIGNvbHVtbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgb2JzZXJ2ZXIoY29sdW1ucyA9IFtdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW1wbGUgPSBjb2x1bW5zLmxlbmd0aCAmJiAhY29sdW1uc1swXS52YWx1ZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuc2VsZWN0QWxsQ29tcG9uZW50cygnLnZhbi1waWNrZXJfX2NvbHVtbicpO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRyZW4pICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1ucygpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IH0pLFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBub29wKCkgeyB9LFxuICAgICAgICBzZXRDb2x1bW5zKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMuc2ltcGxlID8gW3sgdmFsdWVzOiBkYXRhLmNvbHVtbnMgfV0gOiBkYXRhLmNvbHVtbnM7XG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IGNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiB0aGlzLnNldENvbHVtblZhbHVlcyhpbmRleCwgY29sdW1uLnZhbHVlcykpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW1pdChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICBpZiAodGhpcy5zaW1wbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KHR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29sdW1uVmFsdWUoMCksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmdldENvbHVtbkluZGV4KDApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KHR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0VmFsdWVzKCksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmdldEluZGV4ZXMoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2ltcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgICBwaWNrZXI6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldENvbHVtblZhbHVlKDApLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5nZXRDb2x1bW5JbmRleCgwKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgICBwaWNrZXI6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldFZhbHVlcygpLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCBjb2x1bW4gaW5zdGFuY2UgYnkgaW5kZXhcbiAgICAgICAgZ2V0Q29sdW1uKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltpbmRleF07XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCBjb2x1bW4gdmFsdWUgYnkgaW5kZXhcbiAgICAgICAgZ2V0Q29sdW1uVmFsdWUoaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4gJiYgY29sdW1uLmdldFZhbHVlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCBjb2x1bW4gdmFsdWUgYnkgaW5kZXhcbiAgICAgICAgc2V0Q29sdW1uVmFsdWUoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihpbmRleCk7XG4gICAgICAgICAgICBpZiAoY29sdW1uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdzZXRDb2x1bW5WYWx1ZTog5a+55bqU5YiX5LiN5a2Y5ZyoJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCBjb2x1bW4gb3B0aW9uIGluZGV4IGJ5IGNvbHVtbiBpbmRleFxuICAgICAgICBnZXRDb2x1bW5JbmRleChjb2x1bW5JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmdldENvbHVtbihjb2x1bW5JbmRleCkgfHwge30pLmRhdGEuY3VycmVudEluZGV4O1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgY29sdW1uIG9wdGlvbiBpbmRleCBieSBjb2x1bW4gaW5kZXhcbiAgICAgICAgc2V0Q29sdW1uSW5kZXgoY29sdW1uSW5kZXgsIG9wdGlvbkluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihjb2x1bW5JbmRleCk7XG4gICAgICAgICAgICBpZiAoY29sdW1uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdzZXRDb2x1bW5JbmRleDog5a+55bqU5YiX5LiN5a2Y5ZyoJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5zZXRJbmRleChvcHRpb25JbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCBvcHRpb25zIG9mIGNvbHVtbiBieSBpbmRleFxuICAgICAgICBnZXRDb2x1bW5WYWx1ZXMoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5jaGlsZHJlbltpbmRleF0gfHwge30pLmRhdGEub3B0aW9ucztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc2V0IG9wdGlvbnMgb2YgY29sdW1uIGJ5IGluZGV4XG4gICAgICAgIHNldENvbHVtblZhbHVlcyhpbmRleCwgb3B0aW9ucywgbmVlZFJlc2V0ID0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICBpZiAoY29sdW1uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdzZXRDb2x1bW5WYWx1ZXM6IOWvueW6lOWIl+S4jeWtmOWcqCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzU2FtZSA9IEpTT04uc3RyaW5naWZ5KGNvbHVtbi5kYXRhLm9wdGlvbnMpID09PSBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChpc1NhbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uLnNldCh7IG9wdGlvbnMgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5lZWRSZXNldCkge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc2V0SW5kZXgoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCB2YWx1ZXMgb2YgYWxsIGNvbHVtbnNcbiAgICAgICAgZ2V0VmFsdWVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQuZ2V0VmFsdWUoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCB2YWx1ZXMgb2YgYWxsIGNvbHVtbnNcbiAgICAgICAgc2V0VmFsdWVzKHZhbHVlcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2sgPSB2YWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHRoaXMuc2V0Q29sdW1uVmFsdWUoaW5kZXgsIHZhbHVlKSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spO1xuICAgICAgICB9LFxuICAgICAgICAvLyBnZXQgaW5kZXhlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBnZXRJbmRleGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQuZGF0YS5jdXJyZW50SW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgaW5kZXhlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBzZXRJbmRleGVzKGluZGV4ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gaW5kZXhlcy5tYXAoKG9wdGlvbkluZGV4LCBjb2x1bW5JbmRleCkgPT4gdGhpcy5zZXRDb2x1bW5JbmRleChjb2x1bW5JbmRleCwgb3B0aW9uSW5kZXgpKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjayk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==