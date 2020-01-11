'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['input-class', 'right-icon-class'],
    props: {
        size: String,
        icon: String,
        label: String,
        error: Boolean,
        fixed: Boolean,
        focus: Boolean,
        center: Boolean,
        isLink: Boolean,
        leftIcon: String,
        rightIcon: String,
        disabled: Boolean,
        autosize: Boolean,
        readonly: Boolean,
        required: Boolean,
        password: Boolean,
        iconClass: String,
        clearable: Boolean,
        clickable: Boolean,
        inputAlign: String,
        placeholder: String,
        customStyle: String,
        confirmType: String,
        confirmHold: Boolean,
        holdKeyboard: Boolean,
        errorMessage: String,
        arrowDirection: String,
        placeholderStyle: String,
        errorMessageAlign: String,
        selectionEnd: {
            type: Number,
            value: -1
        },
        selectionStart: {
            type: Number,
            value: -1
        },
        showConfirmBar: {
            type: Boolean,
            value: true
        },
        adjustPosition: {
            type: Boolean,
            value: true
        },
        cursorSpacing: {
            type: Number,
            value: 50
        },
        maxlength: {
            type: Number,
            value: -1
        },
        type: {
            type: String,
            value: 'text'
        },
        border: {
            type: Boolean,
            value: true
        },
        titleWidth: {
            type: String,
            value: '90px'
        }
    },
    data: {
        focused: false,
        system: (0, _utils.getSystemInfoSync)().system.split(' ').shift().toLowerCase()
    },
    methods: {
        onInput: function onInput(event) {
            var _this = this;

            var _ref = event.detail || {},
                _ref$value = _ref.value,
                value = _ref$value === undefined ? '' : _ref$value;

            this.setData({ value: value }, function () {
                _this.emitChange(value);
            });
        },
        onFocus: function onFocus(event) {
            this.setData({ focused: true });
            this.$emit('focus', event.detail);
        },
        onBlur: function onBlur(event) {
            this.setData({ focused: false });
            this.$emit('blur', event.detail);
        },
        onClickIcon: function onClickIcon() {
            this.$emit('click-icon');
        },
        onClear: function onClear() {
            var _this2 = this;

            this.setData({ value: '' }, function () {
                _this2.emitChange('');
                _this2.$emit('clear', '');
            });
        },
        onConfirm: function onConfirm() {
            this.$emit('confirm', this.data.value);
        },
        emitChange: function emitChange(value) {
            this.$emit('input', value);
            this.$emit('change', value);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwic2l6ZSIsIlN0cmluZyIsImljb24iLCJsYWJlbCIsImVycm9yIiwiQm9vbGVhbiIsImZpeGVkIiwiZm9jdXMiLCJjZW50ZXIiLCJpc0xpbmsiLCJsZWZ0SWNvbiIsInJpZ2h0SWNvbiIsImRpc2FibGVkIiwiYXV0b3NpemUiLCJyZWFkb25seSIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJpY29uQ2xhc3MiLCJjbGVhcmFibGUiLCJjbGlja2FibGUiLCJpbnB1dEFsaWduIiwicGxhY2Vob2xkZXIiLCJjdXN0b21TdHlsZSIsImNvbmZpcm1UeXBlIiwiY29uZmlybUhvbGQiLCJob2xkS2V5Ym9hcmQiLCJlcnJvck1lc3NhZ2UiLCJhcnJvd0RpcmVjdGlvbiIsInBsYWNlaG9sZGVyU3R5bGUiLCJlcnJvck1lc3NhZ2VBbGlnbiIsInNlbGVjdGlvbkVuZCIsInR5cGUiLCJOdW1iZXIiLCJ2YWx1ZSIsInNlbGVjdGlvblN0YXJ0Iiwic2hvd0NvbmZpcm1CYXIiLCJhZGp1c3RQb3NpdGlvbiIsImN1cnNvclNwYWNpbmciLCJtYXhsZW5ndGgiLCJib3JkZXIiLCJ0aXRsZVdpZHRoIiwiZGF0YSIsImZvY3VzZWQiLCJzeXN0ZW0iLCJzcGxpdCIsInNoaWZ0IiwidG9Mb3dlckNhc2UiLCJtZXRob2RzIiwib25JbnB1dCIsImV2ZW50IiwiZGV0YWlsIiwic2V0RGF0YSIsImVtaXRDaGFuZ2UiLCJvbkZvY3VzIiwiJGVtaXQiLCJvbkJsdXIiLCJvbkNsaWNrSWNvbiIsIm9uQ2xlYXIiLCJvbkNvbmZpcm0iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTyxJQURHO0FBRVZDLGFBQVMsQ0FBQyxhQUFELEVBQWdCLGtCQUFoQixDQUZDO0FBR1ZDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxjQUFNRCxNQUZIO0FBR0hFLGVBQU9GLE1BSEo7QUFJ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QUwsQ0FBVyxPQUFYLEVBQW9CLEVBQXBCO0FBQ0gsYUFIRDtBQUlILFNBdkJJO0FBd0JMSSxpQkF4QkssdUJBd0JPO0FBQ1IsaUJBQUtKLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLEtBQUtiLElBQUwsQ0FBVVIsS0FBaEM7QUFDSCxTQTFCSTtBQTJCTG1CLGtCQTNCSyxzQkEyQk1uQixLQTNCTixFQTJCYTtBQUNkLGlCQUFLcUIsS0FBTCxDQUFXLE9BQVgsRUFBb0JyQixLQUFwQjtBQUNBLGlCQUFLcUIsS0FBTCxDQUFXLFFBQVgsRUFBcUJyQixLQUFyQjtBQUNIO0FBOUJJO0FBekVDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBnZXRTeXN0ZW1JbmZvU3luYyB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICBjbGFzc2VzOiBbJ2lucHV0LWNsYXNzJywgJ3JpZ2h0LWljb24tY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICBzaXplOiBTdHJpbmcsXG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgICAgZXJyb3I6IEJvb2xlYW4sXG4gICAgICAgIGZpeGVkOiBCb29sZWFuLFxuICAgICAgICBmb2N1czogQm9vbGVhbixcbiAgICAgICAgY2VudGVyOiBCb29sZWFuLFxuICAgICAgICBpc0xpbms6IEJvb2xlYW4sXG4gICAgICAgIGxlZnRJY29uOiBTdHJpbmcsXG4gICAgICAgIHJpZ2h0SWNvbjogU3RyaW5nLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgYXV0b3NpemU6IEJvb2xlYW4sXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICByZXF1aXJlZDogQm9vbGVhbixcbiAgICAgICAgcGFzc3dvcmQ6IEJvb2xlYW4sXG4gICAgICAgIGljb25DbGFzczogU3RyaW5nLFxuICAgICAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGNsaWNrYWJsZTogQm9vbGVhbixcbiAgICAgICAgaW5wdXRBbGlnbjogU3RyaW5nLFxuICAgICAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgICAgICBjb25maXJtVHlwZTogU3RyaW5nLFxuICAgICAgICBjb25maXJtSG9sZDogQm9vbGVhbixcbiAgICAgICAgaG9sZEtleWJvYXJkOiBCb29sZWFuLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IFN0cmluZyxcbiAgICAgICAgYXJyb3dEaXJlY3Rpb246IFN0cmluZyxcbiAgICAgICAgcGxhY2Vob2xkZXJTdHlsZTogU3RyaW5nLFxuICAgICAgICBlcnJvck1lc3NhZ2VBbGlnbjogU3RyaW5nLFxuICAgICAgICBzZWxlY3Rpb25FbmQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAtMVxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Rpb25TdGFydDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IC0xXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dDb25maXJtQmFyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYWRqdXN0UG9zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjdXJzb3JTcGFjaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNTBcbiAgICAgICAgfSxcbiAgICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogLTFcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd0ZXh0J1xuICAgICAgICB9LFxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0aXRsZVdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJzkwcHgnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgZm9jdXNlZDogZmFsc2UsXG4gICAgICAgIHN5c3RlbTogZ2V0U3lzdGVtSW5mb1N5bmMoKS5zeXN0ZW0uc3BsaXQoJyAnKS5zaGlmdCgpLnRvTG93ZXJDYXNlKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JbnB1dChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSA9ICcnIH0gPSBldmVudC5kZXRhaWwgfHwge307XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBmb2N1c2VkOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZm9jdXMnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGZvY3VzZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tJY29uKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2staWNvbicpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgdmFsdWU6ICcnIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsZWFyJywgJycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29uZmlybSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbmZpcm0nLCB0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbWl0Q2hhbmdlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19