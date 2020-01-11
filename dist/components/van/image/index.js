'use strict';

var _utils = require('./../common/utils.js');

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

var FIT_MODE_MAP = {
    none: 'center',
    fill: 'scaleToFill',
    cover: 'aspectFill',
    contain: 'aspectFit'
};
(0, _component.VantComponent)({
    mixins: [_button.button, _openType.openType],
    classes: ['custom-class', 'loading-class', 'error-class', 'image-class'],
    props: {
        src: String,
        round: Boolean,
        width: {
            type: null,
            observer: 'setStyle'
        },
        height: {
            type: null,
            observer: 'setStyle'
        },
        radius: null,
        lazyLoad: Boolean,
        useErrorSlot: Boolean,
        useLoadingSlot: Boolean,
        showMenuByLongpress: Boolean,
        fit: {
            type: String,
            value: 'fill',
            observer: 'setMode'
        },
        showError: {
            type: Boolean,
            value: true
        },
        showLoading: {
            type: Boolean,
            value: true
        }
    },
    data: {
        error: false,
        loading: true
    },
    watch: {
        src: function src() {
            this.setData({
                error: false,
                loading: true
            });
        }
    },
    mounted: function mounted() {
        this.setMode();
        this.setStyle();
    },

    methods: {
        setMode: function setMode() {
            this.setData({
                mode: FIT_MODE_MAP[this.data.fit]
            });
        },
        setStyle: function setStyle() {
            var _data = this.data,
                width = _data.width,
                height = _data.height,
                radius = _data.radius;

            var style = '';
            if ((0, _utils.isDef)(width)) {
                style += 'width: ' + (0, _utils.addUnit)(width) + ';';
            }
            if ((0, _utils.isDef)(height)) {
                style += 'height: ' + (0, _utils.addUnit)(height) + ';';
            }
            if ((0, _utils.isDef)(radius)) {
                style += 'overflow: hidden;';
                style += 'border-radius: ' + (0, _utils.addUnit)(radius) + ';';
            }
            this.setData({ style: style });
        },
        onLoad: function onLoad(event) {
            this.setData({
                loading: false
            });
            this.$emit('load', event.detail);
        },
        onError: function onError(event) {
            this.setData({
                loading: false,
                error: true
            });
            this.$emit('error', event.detail);
        },
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZJVF9NT0RFX01BUCIsIm5vbmUiLCJmaWxsIiwiY292ZXIiLCJjb250YWluIiwibWl4aW5zIiwiYnV0dG9uIiwib3BlblR5cGUiLCJjbGFzc2VzIiwicHJvcHMiLCJzcmMiLCJTdHJpbmciLCJyb3VuZCIsIkJvb2xlYW4iLCJ3aWR0aCIsInR5cGUiLCJvYnNlcnZlciIsImhlaWdodCIsInJhZGl1cyIsImxhenlMb2FkIiwidXNlRXJyb3JTbG90IiwidXNlTG9hZGluZ1Nsb3QiLCJzaG93TWVudUJ5TG9uZ3ByZXNzIiwiZml0IiwidmFsdWUiLCJzaG93RXJyb3IiLCJzaG93TG9hZGluZyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ3YXRjaCIsInNldERhdGEiLCJtb3VudGVkIiwic2V0TW9kZSIsInNldFN0eWxlIiwibWV0aG9kcyIsIm1vZGUiLCJzdHlsZSIsIm9uTG9hZCIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiLCJvbkVycm9yIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSxJQUFNQSxlQUFlO0FBQ2pCQyxVQUFNLFFBRFc7QUFFakJDLFVBQU0sYUFGVztBQUdqQkMsV0FBTyxZQUhVO0FBSWpCQyxhQUFTO0FBSlEsQ0FBckI7QUFNQSw4QkFBYztBQUNWQyxZQUFRLENBQUNDLGNBQUQsRUFBU0Msa0JBQVQsQ0FERTtBQUVWQyxhQUFTLENBQUMsY0FBRCxFQUFpQixlQUFqQixFQUFrQyxhQUFsQyxFQUFpRCxhQUFqRCxDQUZDO0FBR1ZDLFdBQU87QUFDSEMsYUFBS0MsTUFERjtBQUVIQyxlQUFPQyxPQUZKO0FBR0hDLGVBQU87QUFDSEMsa0JBQU0sSUFESDtBQUVIQyxzQkFBVTtBQUZQLFNBSEo7QUFPSEMsZ0JBQVE7QUFDSkYsa0JBQU0sSUFERjtBQUVKQyxzQkFBVTtBQUZOLFNBUEw7QUFXSEUsZ0JBQVEsSUFYTDtBQVlIQyxrQkFBVU4sT0FaUDtBQWFITyxzQkFBY1AsT0FiWDtBQWNIUSx3QkFBZ0JSLE9BZGI7QUFlSFMsNkJBQXFCVCxPQWZsQjtBQWdCSFUsYUFBSztBQUNEUixrQkFBTUosTUFETDtBQUVEYSxtQkFBTyxNQUZOO0FBR0RSLHNCQUFVO0FBSFQsU0FoQkY7QUFxQkhTLG1CQUFXO0FBQ1BWLGtCQUFNRixPQURDO0FBRVBXLG1CQUFPO0FBRkEsU0FyQlI7QUF5QkhFLHFCQUFhO0FBQ1RYLGtCQUFNRixPQURHO0FBRVRXLG1CQUFPO0FBRkU7QUF6QlYsS0FIRztBQWlDVkcsVUFBTTtBQUNGQyxlQUFPLEtBREw7QUFFRkMsaUJBQVM7QUFGUCxLQWpDSTtBQXFDVkMsV0FBTztBQUNIcEIsV0FERyxpQkFDRztBQUNGLGlCQUFLcUIsT0FBTCxDQUFhO0FBQ1RILHVCQUFPLEtBREU7QUFFVEMseUJBQVM7QUFGQSxhQUFiO0FBSUg7QUFORSxLQXJDRztBQTZDVkcsV0E3Q1UscUJBNkNBO0FBQ04sYUFBS0MsT0FBTDtBQUNBLGFBQUtDLFFBQUw7QUFDSCxLQWhEUzs7QUFpRFZDLGFBQVM7QUFDTEYsZUFESyxxQkFDSztBQUNOLGlCQUFLRixPQUFMLENBQWE7QUFDVEssc0JBQU1wQyxhQUFhLEtBQUsyQixJQUFMLENBQVVKLEdBQXZCO0FBREcsYUFBYjtBQUdILFNBTEk7QUFNTFcsZ0JBTkssc0JBTU07QUFBQSx3QkFDMkIsS0FBS1AsSUFEaEM7QUFBQSxnQkFDQ2IsS0FERCxTQUNDQSxLQUREO0FBQUEsZ0JBQ1FHLE1BRFIsU0FDUUEsTUFEUjtBQUFBLGdCQUNnQkMsTUFEaEIsU0FDZ0JBLE1BRGhCOztBQUVQLGdCQUFJbUIsUUFBUSxFQUFaO0FBQ0EsZ0JBQUksa0JBQU12QixLQUFOLENBQUosRUFBa0I7QUFDZHVCLHFDQUFtQixvQkFBUXZCLEtBQVIsQ0FBbkI7QUFDSDtBQUNELGdCQUFJLGtCQUFNRyxNQUFOLENBQUosRUFBbUI7QUFDZm9CLHNDQUFvQixvQkFBUXBCLE1BQVIsQ0FBcEI7QUFDSDtBQUNELGdCQUFJLGtCQUFNQyxNQUFOLENBQUosRUFBbUI7QUFDZm1CLHlCQUFTLG1CQUFUO0FBQ0FBLDZDQUEyQixvQkFBUW5CLE1BQVIsQ0FBM0I7QUFDSDtBQUNELGlCQUFLYSxPQUFMLENBQWEsRUFBRU0sWUFBRixFQUFiO0FBQ0gsU0FwQkk7QUFxQkxDLGNBckJLLGtCQXFCRUMsS0FyQkYsRUFxQlM7QUFDVixpQkFBS1IsT0FBTCxDQUFhO0FBQ1RGLHlCQUFTO0FBREEsYUFBYjtBQUdBLGlCQUFLVyxLQUFMLENBQVcsTUFBWCxFQUFtQkQsTUFBTUUsTUFBekI7QUFDSCxTQTFCSTtBQTJCTEMsZUEzQkssbUJBMkJHSCxLQTNCSCxFQTJCVTtBQUNYLGlCQUFLUixPQUFMLENBQWE7QUFDVEYseUJBQVMsS0FEQTtBQUVURCx1QkFBTztBQUZFLGFBQWI7QUFJQSxpQkFBS1ksS0FBTCxDQUFXLE9BQVgsRUFBb0JELE1BQU1FLE1BQTFCO0FBQ0gsU0FqQ0k7QUFrQ0xFLGVBbENLLG1CQWtDR0osS0FsQ0gsRUFrQ1U7QUFDWCxpQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELE1BQU1FLE1BQTFCO0FBQ0g7QUFwQ0k7QUFqREMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZFVuaXQsIGlzRGVmIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4uL21peGlucy9idXR0b24nO1xuaW1wb3J0IHsgb3BlblR5cGUgfSBmcm9tICcuLi9taXhpbnMvb3Blbi10eXBlJztcbmNvbnN0IEZJVF9NT0RFX01BUCA9IHtcbiAgICBub25lOiAnY2VudGVyJyxcbiAgICBmaWxsOiAnc2NhbGVUb0ZpbGwnLFxuICAgIGNvdmVyOiAnYXNwZWN0RmlsbCcsXG4gICAgY29udGFpbjogJ2FzcGVjdEZpdCdcbn07XG5WYW50Q29tcG9uZW50KHtcbiAgICBtaXhpbnM6IFtidXR0b24sIG9wZW5UeXBlXSxcbiAgICBjbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcycsICdsb2FkaW5nLWNsYXNzJywgJ2Vycm9yLWNsYXNzJywgJ2ltYWdlLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc3JjOiBTdHJpbmcsXG4gICAgICAgIHJvdW5kOiBCb29sZWFuLFxuICAgICAgICB3aWR0aDoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0U3R5bGUnXG4gICAgICAgIH0sXG4gICAgICAgIGhlaWdodDoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0U3R5bGUnXG4gICAgICAgIH0sXG4gICAgICAgIHJhZGl1czogbnVsbCxcbiAgICAgICAgbGF6eUxvYWQ6IEJvb2xlYW4sXG4gICAgICAgIHVzZUVycm9yU2xvdDogQm9vbGVhbixcbiAgICAgICAgdXNlTG9hZGluZ1Nsb3Q6IEJvb2xlYW4sXG4gICAgICAgIHNob3dNZW51QnlMb25ncHJlc3M6IEJvb2xlYW4sXG4gICAgICAgIGZpdDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdmaWxsJyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0TW9kZSdcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0Vycm9yOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0xvYWRpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgc3JjKCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0TW9kZSgpO1xuICAgICAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldE1vZGUoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIG1vZGU6IEZJVF9NT0RFX01BUFt0aGlzLmRhdGEuZml0XSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRTdHlsZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgcmFkaXVzIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSAnJztcbiAgICAgICAgICAgIGlmIChpc0RlZih3aWR0aCkpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBgd2lkdGg6ICR7YWRkVW5pdCh3aWR0aCl9O2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNEZWYoaGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHN0eWxlICs9IGBoZWlnaHQ6ICR7YWRkVW5pdChoZWlnaHQpfTtgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGVmKHJhZGl1cykpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSArPSAnb3ZlcmZsb3c6IGhpZGRlbjsnO1xuICAgICAgICAgICAgICAgIHN0eWxlICs9IGBib3JkZXItcmFkaXVzOiAke2FkZFVuaXQocmFkaXVzKX07YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHN0eWxlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkxvYWQoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnbG9hZCcsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3IoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZXJyb3InLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==