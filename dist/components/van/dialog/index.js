'use strict';

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

var _utils = require('./../common/utils.js');

var _color = require('./../common/color.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _component.VantComponent)({
    mixins: [_button.button, _openType.openType],
    props: {
        show: Boolean,
        title: String,
        message: String,
        useSlot: Boolean,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
        overlayStyle: String,
        useTitleSlot: Boolean,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        width: {
            type: null,
            observer: 'setWidthWithUnit'
        },
        zIndex: {
            type: Number,
            value: 2000
        },
        confirmButtonText: {
            type: String,
            value: '确认'
        },
        cancelButtonText: {
            type: String,
            value: '取消'
        },
        confirmButtonColor: {
            type: String,
            value: _color.BLUE
        },
        cancelButtonColor: {
            type: String,
            value: _color.GRAY
        },
        showConfirmButton: {
            type: Boolean,
            value: true
        },
        overlay: {
            type: Boolean,
            value: true
        },
        transition: {
            type: String,
            value: 'scale'
        }
    },
    data: {
        loading: {
            confirm: false,
            cancel: false
        }
    },
    watch: {
        show: function show(_show) {
            !_show && this.stopLoading();
        }
    },
    methods: {
        onConfirm: function onConfirm() {
            this.handleAction('confirm');
        },
        onCancel: function onCancel() {
            this.handleAction('cancel');
        },
        onClickOverlay: function onClickOverlay() {
            this.onClose('overlay');
        },
        handleAction: function handleAction(action) {
            if (this.data.asyncClose) {
                this.setData(_defineProperty({}, 'loading.' + action, true));
            }
            this.onClose(action);
        },
        close: function close() {
            this.setData({
                show: false
            });
        },
        stopLoading: function stopLoading() {
            this.setData({
                loading: {
                    confirm: false,
                    cancel: false
                }
            });
        },
        onClose: function onClose(action) {
            if (!this.data.asyncClose) {
                this.close();
            }
            this.$emit('close', action);
            // 把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
            this.$emit(action, { dialog: this });
            var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];
            if (callback) {
                callback(this);
            }
        },
        setWidthWithUnit: function setWidthWithUnit(val) {
            this.setData({
                widthWithUnit: (0, _utils.addUnit)(val)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImJ1dHRvbiIsIm9wZW5UeXBlIiwicHJvcHMiLCJzaG93IiwiQm9vbGVhbiIsInRpdGxlIiwiU3RyaW5nIiwibWVzc2FnZSIsInVzZVNsb3QiLCJjbGFzc05hbWUiLCJjdXN0b21TdHlsZSIsImFzeW5jQ2xvc2UiLCJtZXNzYWdlQWxpZ24iLCJvdmVybGF5U3R5bGUiLCJ1c2VUaXRsZVNsb3QiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2xvc2VPbkNsaWNrT3ZlcmxheSIsImNvbmZpcm1CdXR0b25PcGVuVHlwZSIsIndpZHRoIiwidHlwZSIsIm9ic2VydmVyIiwiekluZGV4IiwiTnVtYmVyIiwidmFsdWUiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJjb25maXJtQnV0dG9uQ29sb3IiLCJCTFVFIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJHUkFZIiwic2hvd0NvbmZpcm1CdXR0b24iLCJvdmVybGF5IiwidHJhbnNpdGlvbiIsImRhdGEiLCJsb2FkaW5nIiwiY29uZmlybSIsImNhbmNlbCIsIndhdGNoIiwic3RvcExvYWRpbmciLCJtZXRob2RzIiwib25Db25maXJtIiwiaGFuZGxlQWN0aW9uIiwib25DYW5jZWwiLCJvbkNsaWNrT3ZlcmxheSIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJzZXREYXRhIiwiY2xvc2UiLCIkZW1pdCIsImRpYWxvZyIsImNhbGxiYWNrIiwic2V0V2lkdGhXaXRoVW5pdCIsInZhbCIsIndpZHRoV2l0aFVuaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSw4QkFBYztBQUNWQSxZQUFRLENBQUNDLGNBQUQsRUFBU0Msa0JBQVQsQ0FERTtBQUVWQyxXQUFPO0FBQ0hDLGNBQU1DLE9BREg7QUFFSEMsZUFBT0MsTUFGSjtBQUdIQyxpQkFBU0QsTUFITjtBQUlIRSxpQkFBU0osT0FKTjtBQUtISyxtQkFBV0gsTUFMUjtB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IjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBidXR0b24gfSBmcm9tICcuLi9taXhpbnMvYnV0dG9uJztcbmltcG9ydCB7IG9wZW5UeXBlIH0gZnJvbSAnLi4vbWl4aW5zL29wZW4tdHlwZSc7XG5pbXBvcnQgeyBhZGRVbml0IH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IEdSQVksIEJMVUUgfSBmcm9tICcuLi9jb21tb24vY29sb3InO1xuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbYnV0dG9uLCBvcGVuVHlwZV0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2hvdzogQm9vbGVhbixcbiAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgbWVzc2FnZTogU3RyaW5nLFxuICAgICAgICB1c2VTbG90OiBCb29sZWFuLFxuICAgICAgICBjbGFzc05hbWU6IFN0cmluZyxcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICAgICAgYXN5bmNDbG9zZTogQm9vbGVhbixcbiAgICAgICAgbWVzc2FnZUFsaWduOiBTdHJpbmcsXG4gICAgICAgIG92ZXJsYXlTdHlsZTogU3RyaW5nLFxuICAgICAgICB1c2VUaXRsZVNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IEJvb2xlYW4sXG4gICAgICAgIGNsb3NlT25DbGlja092ZXJsYXk6IEJvb2xlYW4sXG4gICAgICAgIGNvbmZpcm1CdXR0b25PcGVuVHlwZTogU3RyaW5nLFxuICAgICAgICB3aWR0aDoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0V2lkdGhXaXRoVW5pdCdcbiAgICAgICAgfSxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMjAwMFxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICfnoa7orqQnXG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAn5Y+W5raIJ1xuICAgICAgICB9LFxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiBCTFVFXG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogR1JBWVxuICAgICAgICB9LFxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3NjYWxlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgICAgIGNvbmZpcm06IGZhbHNlLFxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBzaG93KHNob3cpIHtcbiAgICAgICAgICAgICFzaG93ICYmIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNvbmZpcm0oKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFjdGlvbignY29uZmlybScpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNhbmNlbCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWN0aW9uKCdjYW5jZWwnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja092ZXJsYXkoKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoJ292ZXJsYXknKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQWN0aW9uKGFjdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5hc3luY0Nsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgW2Bsb2FkaW5nLiR7YWN0aW9ufWBdOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoYWN0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcExvYWRpbmcoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbG9zZShhY3Rpb24pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScsIGFjdGlvbik7XG4gICAgICAgICAgICAvLyDmioogZGlhbG9nIOWunuS+i+S8oOmAkuWHuuWOu++8jOWPr+S7pemAmui/hyBzdG9wTG9hZGluZygpIOWcqOWklumDqOWFs+mXreaMiemSrueahCBsb2FkaW5nXG4gICAgICAgICAgICB0aGlzLiRlbWl0KGFjdGlvbiwgeyBkaWFsb2c6IHRoaXMgfSk7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuZGF0YVthY3Rpb24gPT09ICdjb25maXJtJyA/ICdvbkNvbmZpcm0nIDogJ29uQ2FuY2VsJ107XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0V2lkdGhXaXRoVW5pdCh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgd2lkdGhXaXRoVW5pdDogYWRkVW5pdCh2YWwpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19