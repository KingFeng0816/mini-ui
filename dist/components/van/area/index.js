'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

var _shared = require('./../picker/shared.js');

var COLUMNSPLACEHOLDERCODE = '000000';
(0, _component.VantComponent)({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: Object.assign(Object.assign({}, _shared.pickerProps), { value: String, areaList: {
            type: Object,
            value: {}
        }, columnsNum: {
            type: null,
            value: 3
        }, columnsPlaceholder: {
            type: Array,
            observer: function observer(val) {
                this.setData({
                    typeToColumnsPlaceholder: {
                        province: val[0] || '',
                        city: val[1] || '',
                        county: val[2] || ''
                    }
                });
            }
        } }),
    data: {
        columns: [{ values: [] }, { values: [] }, { values: [] }],
        displayColumns: [{ values: [] }, { values: [] }, { values: [] }],
        typeToColumnsPlaceholder: {}
    },
    watch: {
        value: function value(_value) {
            this.code = _value;
            this.setValues();
        },

        areaList: 'setValues',
        columnsNum: function columnsNum(value) {
            this.setData({
                displayColumns: this.data.columns.slice(0, +value)
            });
        }
    },
    mounted: function mounted() {
        var _this = this;

        setTimeout(function () {
            _this.setValues();
        }, 0);
    },

    methods: {
        getPicker: function getPicker() {
            if (this.picker == null) {
                this.picker = this.selectComponent('.van-area__picker');
            }
            return this.picker;
        },
        onCancel: function onCancel(event) {
            this.emit('cancel', event.detail);
        },
        onConfirm: function onConfirm(event) {
            var index = event.detail.index;
            var value = event.detail.value;

            value = this.parseOutputValues(value);
            this.emit('confirm', { value: value, index: index });
        },
        emit: function emit(type, detail) {
            detail.values = detail.value;
            delete detail.value;
            this.$emit(type, detail);
        },

        // parse output columns data
        parseOutputValues: function parseOutputValues(values) {
            var columnsPlaceholder = this.data.columnsPlaceholder;

            return values.map(function (value, index) {
                // save undefined value
                if (!value) return value;
                value = JSON.parse(JSON.stringify(value));
                if (!value.code || value.name === columnsPlaceholder[index]) {
                    value.code = '';
                    value.name = '';
                }
                return value;
            });
        },
        onChange: function onChange(event) {
            var _this2 = this;

            var _event$detail = event.detail,
                index = _event$detail.index,
                picker = _event$detail.picker,
                value = _event$detail.value;

            this.code = value[index].code;
            this.setValues().then(function () {
                _this2.$emit('change', {
                    picker: picker,
                    values: _this2.parseOutputValues(picker.getValues()),
                    index: index
                });
            });
        },
        getConfig: function getConfig(type) {
            var areaList = this.data.areaList;

            return areaList && areaList[type + '_list'] || {};
        },
        getList: function getList(type, code) {
            var typeToColumnsPlaceholder = this.data.typeToColumnsPlaceholder;

            var result = [];
            if (type !== 'province' && !code) {
                return result;
            }
            var list = this.getConfig(type);
            result = Object.keys(list).map(function (code) {
                return {
                    code: code,
                    name: list[code]
                };
            });
            if (code) {
                // oversea code
                if (code[0] === '9' && type === 'city') {
                    code = '9';
                }
                result = result.filter(function (item) {
                    return item.code.indexOf(code) === 0;
                });
            }
            if (typeToColumnsPlaceholder[type] && result.length) {
                // set columns placeholder
                var codeFill = type === 'province' ? '' : type === 'city' ? COLUMNSPLACEHOLDERCODE.slice(2, 4) : COLUMNSPLACEHOLDERCODE.slice(4, 6);
                result.unshift({
                    code: '' + code + codeFill,
                    name: typeToColumnsPlaceholder[type]
                });
            }
            return result;
        },
        getIndex: function getIndex(type, code) {
            var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
            var list = this.getList(type, code.slice(0, compareNum - 2));
            // oversea code
            if (code[0] === '9' && type === 'province') {
                compareNum = 1;
            }
            code = code.slice(0, compareNum);
            for (var i = 0; i < list.length; i++) {
                if (list[i].code.slice(0, compareNum) === code) {
                    return i;
                }
            }
            return 0;
        },
        setValues: function setValues() {
            var _this3 = this;

            var county = this.getConfig('county');
            var code = this.code;

            if (!code) {
                if (this.data.columnsPlaceholder.length) {
                    code = COLUMNSPLACEHOLDERCODE;
                } else if (Object.keys(county)[0]) {
                    code = Object.keys(county)[0];
                } else {
                    code = '';
                }
            }
            var province = this.getList('province');
            var city = this.getList('city', code.slice(0, 2));
            var picker = this.getPicker();
            if (!picker) {
                return;
            }
            var stack = [];
            stack.push(picker.setColumnValues(0, province, false));
            stack.push(picker.setColumnValues(1, city, false));
            if (city.length && code.slice(2, 4) === '00') {
                var _city = _slicedToArray(city, 1);

                code = _city[0].code;
            }
            stack.push(picker.setColumnValues(2, this.getList('county', code.slice(0, 4)), false));
            return Promise.all(stack).catch(function () {}).then(function () {
                return picker.setIndexes([_this3.getIndex('province', code), _this3.getIndex('city', code), _this3.getIndex('county', code)]);
            }).catch(function () {});
        },
        getValues: function getValues() {
            var picker = this.getPicker();
            return picker ? picker.getValues().filter(function (value) {
                return !!value;
            }) : [];
        },
        getDetail: function getDetail() {
            var values = this.getValues();
            var area = {
                code: '',
                country: '',
                province: '',
                city: '',
                county: ''
            };
            if (!values.length) {
                return area;
            }
            var names = values.map(function (item) {
                return item.name;
            });
            area.code = values[values.length - 1].code;
            if (area.code[0] === '9') {
                area.country = names[1] || '';
                area.province = names[2] || '';
            } else {
                area.province = names[0] || '';
                area.city = names[1] || '';
                area.county = names[2] || '';
            }
            return area;
        },
        reset: function reset(code) {
            this.code = code || '';
            return this.setValues();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNPTFVNTlNQTEFDRUhPTERFUkNPREUiLCJjbGFzc2VzIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwaWNrZXJQcm9wcyIsInZhbHVlIiwiU3RyaW5nIiwiYXJlYUxpc3QiLCJ0eXBlIiwiY29sdW1uc051bSIsImNvbHVtbnNQbGFjZWhvbGRlciIsIkFycmF5Iiwib2JzZXJ2ZXIiLCJ2YWwiLCJzZXREYXRhIiwidHlwZVRvQ29sdW1uc1BsYWNlaG9sZGVyIiwicHJvdmluY2UiLCJjaXR5IiwiY291bnR5IiwiZGF0YSIsImNvbHVtbnMiLCJ2YWx1ZXMiLCJkaXNwbGF5Q29sdW1ucyIsIndhdGNoIiwiY29kZSIsInNldFZhbHVlcyIsInNsaWNlIiwibW91bnRlZCIsInNldFRpbWVvdXQiLCJtZXRob2RzIiwiZ2V0UGlja2VyIiwicGlja2VyIiwic2VsZWN0Q29tcG9uZW50Iiwib25DYW5jZWwiLCJldmVudCIsImVtaXQiLCJkZXRhaWwiLCJvbkNvbmZpcm0iLCJpbmRleCIsInBhcnNlT3V0cHV0VmFsdWVzIiwiJGVtaXQiLCJtYXAiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuYW1lIiwib25DaGFuZ2UiLCJ0aGVuIiwiZ2V0VmFsdWVzIiwiZ2V0Q29uZmlnIiwiZ2V0TGlzdCIsInJlc3VsdCIsImxpc3QiLCJrZXlzIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4T2YiLCJsZW5ndGgiLCJjb2RlRmlsbCIsInVuc2hpZnQiLCJnZXRJbmRleCIsImNvbXBhcmVOdW0iLCJpIiwic3RhY2siLCJwdXNoIiwic2V0Q29sdW1uVmFsdWVzIiwiUHJvbWlzZSIsImFsbCIsImNhdGNoIiwic2V0SW5kZXhlcyIsImdldERldGFpbCIsImFyZWEiLCJjb3VudHJ5IiwibmFtZXMiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBLElBQU1BLHlCQUF5QixRQUEvQjtBQUNBLDhCQUFjO0FBQ1ZDLGFBQVMs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R0FBZ0J5RCxNQUFNLENBQU4sS0FBWSxFQUE1QjtBQUNILGFBSEQsTUFJSztBQUNERixxQkFBS3ZELFFBQUwsR0FBZ0J5RCxNQUFNLENBQU4sS0FBWSxFQUE1QjtBQUNBRixxQkFBS3RELElBQUwsR0FBWXdELE1BQU0sQ0FBTixLQUFZLEVBQXhCO0FBQ0FGLHFCQUFLckQsTUFBTCxHQUFjdUQsTUFBTSxDQUFOLEtBQVksRUFBMUI7QUFDSDtBQUNELG1CQUFPRixJQUFQO0FBQ0gsU0E5Skk7QUErSkxHLGFBL0pLLGlCQStKQ2xELElBL0pELEVBK0pPO0FBQ1IsaUJBQUtBLElBQUwsR0FBWUEsUUFBUSxFQUFwQjtBQUNBLG1CQUFPLEtBQUtDLFNBQUwsRUFBUDtBQUNIO0FBbEtJO0FBMUNDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBwaWNrZXJQcm9wcyB9IGZyb20gJy4uL3BpY2tlci9zaGFyZWQnO1xuY29uc3QgQ09MVU1OU1BMQUNFSE9MREVSQ09ERSA9ICcwMDAwMDAnO1xuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogWydhY3RpdmUtY2xhc3MnLCAndG9vbGJhci1jbGFzcycsICdjb2x1bW4tY2xhc3MnXSxcbiAgICBwcm9wczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwaWNrZXJQcm9wcyksIHsgdmFsdWU6IFN0cmluZywgYXJlYUxpc3Q6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHZhbHVlOiB7fVxuICAgICAgICB9LCBjb2x1bW5zTnVtOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IDNcbiAgICAgICAgfSwgY29sdW1uc1BsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIG9ic2VydmVyKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVUb0NvbHVtbnNQbGFjZWhvbGRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2U6IHZhbFswXSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IHZhbFsxXSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50eTogdmFsWzJdIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gfSksXG4gICAgZGF0YToge1xuICAgICAgICBjb2x1bW5zOiBbeyB2YWx1ZXM6IFtdIH0sIHsgdmFsdWVzOiBbXSB9LCB7IHZhbHVlczogW10gfV0sXG4gICAgICAgIGRpc3BsYXlDb2x1bW5zOiBbeyB2YWx1ZXM6IFtdIH0sIHsgdmFsdWVzOiBbXSB9LCB7IHZhbHVlczogW10gfV0sXG4gICAgICAgIHR5cGVUb0NvbHVtbnNQbGFjZWhvbGRlcjoge31cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvZGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFyZWFMaXN0OiAnc2V0VmFsdWVzJyxcbiAgICAgICAgY29sdW1uc051bSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29sdW1uczogdGhpcy5kYXRhLmNvbHVtbnMuc2xpY2UoMCwgK3ZhbHVlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFBpY2tlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2tlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIgPSB0aGlzLnNlbGVjdENvbXBvbmVudCgnLnZhbi1hcmVhX19waWNrZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpY2tlcjtcbiAgICAgICAgfSxcbiAgICAgICAgb25DYW5jZWwoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2FuY2VsJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db25maXJtKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGluZGV4IH0gPSBldmVudC5kZXRhaWw7XG4gICAgICAgICAgICBsZXQgeyB2YWx1ZSB9ID0gZXZlbnQuZGV0YWlsO1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnBhcnNlT3V0cHV0VmFsdWVzKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY29uZmlybScsIHsgdmFsdWUsIGluZGV4IH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIGRldGFpbCkge1xuICAgICAgICAgICAgZGV0YWlsLnZhbHVlcyA9IGRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIGRlbGV0ZSBkZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KHR5cGUsIGRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHBhcnNlIG91dHB1dCBjb2x1bW5zIGRhdGFcbiAgICAgICAgcGFyc2VPdXRwdXRWYWx1ZXModmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbHVtbnNQbGFjZWhvbGRlciB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNhdmUgdW5kZWZpbmVkIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUuY29kZSB8fCB2YWx1ZS5uYW1lID09PSBjb2x1bW5zUGxhY2Vob2xkZXJbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmNvZGUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUubmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5kZXgsIHBpY2tlciwgdmFsdWUgfSA9IGV2ZW50LmRldGFpbDtcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IHZhbHVlW2luZGV4XS5jb2RlO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIHBpY2tlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB0aGlzLnBhcnNlT3V0cHV0VmFsdWVzKHBpY2tlci5nZXRWYWx1ZXMoKSksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q29uZmlnKHR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYXJlYUxpc3QgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHJldHVybiAoYXJlYUxpc3QgJiYgYXJlYUxpc3RbYCR7dHlwZX1fbGlzdGBdKSB8fCB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0TGlzdCh0eXBlLCBjb2RlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGVUb0NvbHVtbnNQbGFjZWhvbGRlciB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgaWYgKHR5cGUgIT09ICdwcm92aW5jZScgJiYgIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0Q29uZmlnKHR5cGUpO1xuICAgICAgICAgICAgcmVzdWx0ID0gT2JqZWN0LmtleXMobGlzdCkubWFwKGNvZGUgPT4gKHtcbiAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGxpc3RbY29kZV1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gb3ZlcnNlYSBjb2RlXG4gICAgICAgICAgICAgICAgaWYgKGNvZGVbMF0gPT09ICc5JyAmJiB0eXBlID09PSAnY2l0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9ICc5JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IGl0ZW0uY29kZS5pbmRleE9mKGNvZGUpID09PSAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlVG9Db2x1bW5zUGxhY2Vob2xkZXJbdHlwZV0gJiYgcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHNldCBjb2x1bW5zIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgY29uc3QgY29kZUZpbGwgPSB0eXBlID09PSAncHJvdmluY2UnID8gJycgOiB0eXBlID09PSAnY2l0eScgPyBDT0xVTU5TUExBQ0VIT0xERVJDT0RFLnNsaWNlKDIsIDQpIDogQ09MVU1OU1BMQUNFSE9MREVSQ09ERS5zbGljZSg0LCA2KTtcbiAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IGAke2NvZGV9JHtjb2RlRmlsbH1gLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0eXBlVG9Db2x1bW5zUGxhY2Vob2xkZXJbdHlwZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEluZGV4KHR5cGUsIGNvZGUpIHtcbiAgICAgICAgICAgIGxldCBjb21wYXJlTnVtID0gdHlwZSA9PT0gJ3Byb3ZpbmNlJyA/IDIgOiB0eXBlID09PSAnY2l0eScgPyA0IDogNjtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldExpc3QodHlwZSwgY29kZS5zbGljZSgwLCBjb21wYXJlTnVtIC0gMikpO1xuICAgICAgICAgICAgLy8gb3ZlcnNlYSBjb2RlXG4gICAgICAgICAgICBpZiAoY29kZVswXSA9PT0gJzknICYmIHR5cGUgPT09ICdwcm92aW5jZScpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlTnVtID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnNsaWNlKDAsIGNvbXBhcmVOdW0pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RbaV0uY29kZS5zbGljZSgwLCBjb21wYXJlTnVtKSA9PT0gY29kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VmFsdWVzKCkge1xuICAgICAgICAgICAgY29uc3QgY291bnR5ID0gdGhpcy5nZXRDb25maWcoJ2NvdW50eScpO1xuICAgICAgICAgICAgbGV0IHsgY29kZSB9ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY29sdW1uc1BsYWNlaG9sZGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb2RlID0gQ09MVU1OU1BMQUNFSE9MREVSQ09ERTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LmtleXMoY291bnR5KVswXSkge1xuICAgICAgICAgICAgICAgICAgICBjb2RlID0gT2JqZWN0LmtleXMoY291bnR5KVswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZSA9IHRoaXMuZ2V0TGlzdCgncHJvdmluY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGNpdHkgPSB0aGlzLmdldExpc3QoJ2NpdHknLCBjb2RlLnNsaWNlKDAsIDIpKTtcbiAgICAgICAgICAgIGNvbnN0IHBpY2tlciA9IHRoaXMuZ2V0UGlja2VyKCk7XG4gICAgICAgICAgICBpZiAoIXBpY2tlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgICAgICAgICBzdGFjay5wdXNoKHBpY2tlci5zZXRDb2x1bW5WYWx1ZXMoMCwgcHJvdmluY2UsIGZhbHNlKSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHBpY2tlci5zZXRDb2x1bW5WYWx1ZXMoMSwgY2l0eSwgZmFsc2UpKTtcbiAgICAgICAgICAgIGlmIChjaXR5Lmxlbmd0aCAmJiBjb2RlLnNsaWNlKDIsIDQpID09PSAnMDAnKSB7XG4gICAgICAgICAgICAgICAgW3sgY29kZSB9XSA9IGNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFjay5wdXNoKHBpY2tlci5zZXRDb2x1bW5WYWx1ZXMoMiwgdGhpcy5nZXRMaXN0KCdjb3VudHknLCBjb2RlLnNsaWNlKDAsIDQpKSwgZmFsc2UpKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjaylcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4geyB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHBpY2tlci5zZXRJbmRleGVzKFtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluZGV4KCdwcm92aW5jZScsIGNvZGUpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5kZXgoJ2NpdHknLCBjb2RlKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluZGV4KCdjb3VudHknLCBjb2RlKVxuICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFZhbHVlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHBpY2tlciA9IHRoaXMuZ2V0UGlja2VyKCk7XG4gICAgICAgICAgICByZXR1cm4gcGlja2VyID8gcGlja2VyLmdldFZhbHVlcygpLmZpbHRlcih2YWx1ZSA9PiAhIXZhbHVlKSA6IFtdO1xuICAgICAgICB9LFxuICAgICAgICBnZXREZXRhaWwoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgICAgICAgICAgY29uc3QgYXJlYSA9IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiAnJyxcbiAgICAgICAgICAgICAgICBwcm92aW5jZTogJycsXG4gICAgICAgICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgICAgICAgY291bnR5OiAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmVhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmFtZXMgPSB2YWx1ZXMubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpO1xuICAgICAgICAgICAgYXJlYS5jb2RlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXS5jb2RlO1xuICAgICAgICAgICAgaWYgKGFyZWEuY29kZVswXSA9PT0gJzknKSB7XG4gICAgICAgICAgICAgICAgYXJlYS5jb3VudHJ5ID0gbmFtZXNbMV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgYXJlYS5wcm92aW5jZSA9IG5hbWVzWzJdIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJlYS5wcm92aW5jZSA9IG5hbWVzWzBdIHx8ICcnO1xuICAgICAgICAgICAgICAgIGFyZWEuY2l0eSA9IG5hbWVzWzFdIHx8ICcnO1xuICAgICAgICAgICAgICAgIGFyZWEuY291bnR5ID0gbmFtZXNbMl0gfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJlYTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQoY29kZSkge1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gY29kZSB8fCAnJztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=