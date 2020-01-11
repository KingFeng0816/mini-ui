'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['field-class', 'input-class', 'cancel-class'],
    props: {
        label: String,
        focus: Boolean,
        error: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        inputAlign: String,
        showAction: Boolean,
        useActionSlot: Boolean,
        useLeftIconSlot: Boolean,
        useRightIconSlot: Boolean,
        leftIcon: {
            type: String,
            value: 'search'
        },
        rightIcon: String,
        placeholder: String,
        placeholderStyle: String,
        actionText: {
            type: String,
            value: '取消'
        },
        background: {
            type: String,
            value: '#ffffff'
        },
        maxlength: {
            type: Number,
            value: -1
        },
        shape: {
            type: String,
            value: 'square'
        },
        clearable: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onChange: function onChange(event) {
            this.setData({ value: event.detail });
            this.$emit('change', event.detail);
        },
        onCancel: function onCancel() {
            var _this = this;

            /**
             * 修复修改输入框值时，输入框失焦和赋值同时触发，赋值失效
             * https://github.com/youzan/@vant/weapp/issues/1768
             */
            setTimeout(function () {
                _this.setData({ value: '' });
                _this.$emit('cancel');
                _this.$emit('change', '');
            }, 200);
        },
        onSearch: function onSearch() {
            this.$emit('search', this.data.value);
        },
        onFocus: function onFocus() {
            this.$emit('focus');
        },
        onBlur: function onBlur() {
            this.$emit('blur');
        },
        onClear: function onClear() {
            this.$emit('clear');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwibGFiZWwiLCJTdHJpbmciLCJmb2N1cyIsIkJvb2xlYW4iLCJlcnJvciIsImRpc2FibGVkIiwicmVhZG9ubHkiLCJpbnB1dEFsaWduIiwic2hvd0FjdGlvbiIsInVzZUFjdGlvblNsb3QiLCJ1c2VMZWZ0SWNvblNsb3QiLCJ1c2VSaWdodEljb25TbG90IiwibGVmdEljb24iLCJ0eXBlIiwidmFsdWUiLCJyaWdodEljb24iLCJwbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyU3R5bGUiLCJhY3Rpb25UZXh0IiwiYmFja2dyb3VuZCIsIm1heGxlbmd0aCIsIk51bWJlciIsInNoYXBlIiwiY2xlYXJhYmxlIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJzZXREYXRhIiwiZGV0YWlsIiwiJGVtaXQiLCJvbkNhbmNlbCIsInNldFRpbWVvdXQiLCJvblNlYXJjaCIsImRhdGEiLCJvbkZvY3VzIiwib25CbHVyIiwib25DbGVhciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPLElBREc7QUFFVkMsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsYUFBaEIsRUFBK0IsY0FBL0IsQ0FGQztBQUdWQyxXQUFPO0FBQ0hDLGVBQU9DLE1BREo7QUFFSEMsZUFBT0MsT0FGSjtBQUdIQyxlQUFPRCxPQUhKO0FBSUhFLGtCQUFVRixPQUpQO0FBS0hHLGtCQUFVSCxPQUxQO0FBTUhJLG9CQUFZTixNQU5UO0FBT0hPLG9CQUFZTCxPQVBUO0FBUUhNLHVCQUFlTixPQVJaO0FBU0hPLHlCQUFpQlAsT0FUZDtBQVVIUSwwQkFBa0JSLE9BVmY7QUFXSFMsa0JBQVU7QUFDTkMsa0JBQU1aLE1BREE7QUFFTmEsbUJBQU87QUFGRCxTQVhQO0FBZUhDLG1CQUFXZCxNQWZSO0FBZ0JIZSxxQkFBYWYsTUFoQlY7QUFpQkhnQiwwQkFBa0JoQixNQWpCZjtBQWtCSGlCLG9CQUFZO0FBQ1JMLGtCQUFNWixNQURFO0FBRVJhLG1CQUFPO0FBRkMsU0FsQlQ7QUFzQkhLLG9CQUFZO0FBQ1JOLGtCQUFNWixNQURFO0FBRVJhLG1CQUFPO0FBRkMsU0F0QlQ7QUEwQkhNLG1CQUFXO0FBQ1BQLGtCQUFNUSxNQURDO0FBRVBQLG1CQUFPLENBQUM7QUFGRCxTQTFCUjtBQThCSFEsZUFBTztBQUNIVCxrQkFBTVosTUFESDtBQUVIYSxtQkFBTztBQUZKLFNBOUJKO0FBa0NIUyxtQkFBVztBQUNQVixrQkFBTVYsT0FEQztBQUVQVyxtQkFBTztBQUZBO0FBbENSLEtBSEc7QUEwQ1ZVLGFBQVM7QUFDTEMsZ0JBREssb0JBQ0lDLEtBREosRUFDVztBQUNaLGlCQUFLQyxPQUFMLENBQWEsRUFBRWIsT0FBT1ksTUFBTUUsTUFBZixFQUFiO0FBQ0EsaUJBQUtDLEtBQUwsQ0FBVyxRQUFYLEVBQXFCSCxNQUFNRSxNQUEzQjtBQUNILFNBSkk7QUFLTEUsZ0JBTEssc0JBS007QUFBQTs7QUFDUDs7OztBQUlBQyx1QkFBVyxZQUFNO0FBQ2Isc0JBQUtKLE9BQUwsQ0FBYSxFQUFFYixPQUFPLEVBQVQsRUFBYjtBQUNBLHNCQUFLZSxLQUFMLENBQVcsUUFBWDtBQUNBLHNCQUFLQSxLQUFMLENBQVcsUUFBWCxFQUFxQixFQUFyQjtBQUNILGFBSkQsRUFJRyxHQUpIO0FBS0gsU0FmSTtBQWdCTEcsZ0JBaEJLLHNCQWdCTTtBQUNQLGlCQUFLSCxLQUFMLENBQVcsUUFBWCxFQUFxQixLQUFLSSxJQUFMLENBQVVuQixLQUEvQjtBQUNILFNBbEJJO0FBbUJMb0IsZUFuQksscUJBbUJLO0FBQ04saUJBQUtMLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FyQkk7QUFzQkxNLGNBdEJLLG9CQXNCSTtBQUNMLGlCQUFLTixLQUFMLENBQVcsTUFBWDtBQUNILFNBeEJJO0FBeUJMTyxlQXpCSyxxQkF5Qks7QUFDTixpQkFBS1AsS0FBTCxDQUFXLE9BQVg7QUFDSDtBQTNCSTtBQTFDQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgY2xhc3NlczogWydmaWVsZC1jbGFzcycsICdpbnB1dC1jbGFzcycsICdjYW5jZWwtY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgICBmb2N1czogQm9vbGVhbixcbiAgICAgICAgZXJyb3I6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICByZWFkb25seTogQm9vbGVhbixcbiAgICAgICAgaW5wdXRBbGlnbjogU3RyaW5nLFxuICAgICAgICBzaG93QWN0aW9uOiBCb29sZWFuLFxuICAgICAgICB1c2VBY3Rpb25TbG90OiBCb29sZWFuLFxuICAgICAgICB1c2VMZWZ0SWNvblNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIHVzZVJpZ2h0SWNvblNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIGxlZnRJY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3NlYXJjaCdcbiAgICAgICAgfSxcbiAgICAgICAgcmlnaHRJY29uOiBTdHJpbmcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGU6IFN0cmluZyxcbiAgICAgICAgYWN0aW9uVGV4dDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICflj5bmtognXG4gICAgICAgIH0sXG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2ZmZmZmZidcbiAgICAgICAgfSxcbiAgICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogLTFcbiAgICAgICAgfSxcbiAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnc3F1YXJlJ1xuICAgICAgICB9LFxuICAgICAgICBjbGVhcmFibGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyB2YWx1ZTogZXZlbnQuZGV0YWlsIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DYW5jZWwoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOS/ruWkjeS/ruaUuei+k+WFpeahhuWAvOaXtu+8jOi+k+WFpeahhuWkseeEpuWSjOi1i+WAvOWQjOaXtuinpuWPke+8jOi1i+WAvOWkseaViFxuICAgICAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL3lvdXphbi9AdmFudC93ZWFwcC9pc3N1ZXMvMTc2OFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyB2YWx1ZTogJycgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgJycpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TZWFyY2goKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZvY3VzKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZm9jdXMnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CbHVyKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xlYXInKTtcbiAgICAgICAgfSxcbiAgICB9XG59KTtcbiJdfQ==