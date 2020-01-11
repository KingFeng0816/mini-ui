'use strict';

var _component = require('./../common/component.js');

var _transition = require('./../mixins/transition.js');

(0, _component.VantComponent)({
    classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class'],
    mixins: [(0, _transition.transition)(false)],
    props: {
        round: Boolean,
        closeable: Boolean,
        customStyle: String,
        overlayStyle: String,
        transition: {
            type: String,
            observer: 'observeClass'
        },
        zIndex: {
            type: Number,
            value: 100
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeIcon: {
            type: String,
            value: 'cross'
        },
        closeIconPosition: {
            type: String,
            value: 'top-right'
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'center',
            observer: 'observeClass'
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: false
        }
    },
    created: function created() {
        this.observeClass();
    },

    methods: {
        onClickCloseIcon: function onClickCloseIcon() {
            this.$emit('close');
        },
        onClickOverlay: function onClickOverlay() {
            this.$emit('click-overlay');
            if (this.data.closeOnClickOverlay) {
                this.$emit('close');
            }
        },
        observeClass: function observeClass() {
            var _data = this.data,
                transition = _data.transition,
                position = _data.position;

            var updateData = {
                name: transition || position
            };
            if (transition === 'none') {
                updateData.duration = 0;
            }
            this.setData(updateData);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJwcm9wcyIsInJvdW5kIiwiQm9vbGVhbiIsImNsb3NlYWJsZSIsImN1c3RvbVN0eWxlIiwiU3RyaW5nIiwib3ZlcmxheVN0eWxlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJvYnNlcnZlciIsInpJbmRleCIsIk51bWJlciIsInZhbHVlIiwib3ZlcmxheSIsImNsb3NlSWNvbiIsImNsb3NlSWNvblBvc2l0aW9uIiwiY2xvc2VPbkNsaWNrT3ZlcmxheSIsInBvc2l0aW9uIiwic2FmZUFyZWFJbnNldEJvdHRvbSIsInNhZmVBcmVhSW5zZXRUb3AiLCJjcmVhdGVkIiwib2JzZXJ2ZUNsYXNzIiwibWV0aG9kcyIsIm9uQ2xpY2tDbG9zZUljb24iLCIkZW1pdCIsIm9uQ2xpY2tPdmVybGF5IiwiZGF0YSIsInVwZGF0ZURhdGEiLCJuYW1lIiwiZHVyYXRpb24iLCJzZXREYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLGFBQVMsQ0FDTCxhQURLLEVBRUwsb0JBRkssRUFHTCxnQkFISyxFQUlMLGFBSkssRUFLTCxvQkFMSyxFQU1MLGdCQU5LLENBREM7QUFTVkMsWUFBUSxDQUFDLDRCQUFXLEtBQVgsQ0FBRCxDQVRFO0FBVVZDLFdBQU87QUFDSEMsZUFBT0MsT0FESjtBQUVIQyxtQkFBV0QsT0FGUjtBQUdIRSxxQkFBYUMsTUFIVjtBQUlIQyxzQkFBY0QsTUFKWDtBQUtIRSxvQkFBWTtBQUNSQyxrQkFBTUgsTUFERTtBQUVSSSxzQkFBVTtBQUZGLFNBTFQ7QUFTSEMsZ0JBQVE7QUFDSkYsa0JBQU1HLE1BREY7QUFFSkMsbUJBQU87QUFGSCxTQVRMO0FBYUhDLGlCQUFTO0FBQ0xMLGtCQUFNTixPQUREO0FBRUxVLG1CQUFPO0FBRkYsU0FiTjtBQWlCSEUsbUJBQVc7QUFDUE4sa0JBQU1ILE1BREM7QUFFUE8sbUJBQU87QUFGQSxTQWpCUjtBQXFCSEcsMkJBQW1CO0FBQ2ZQLGtCQUFNSCxNQURTO0FBRWZPLG1CQUFPO0FBRlEsU0FyQmhCO0FBeUJISSw2QkFBcUI7QUFDakJSLGtCQUFNTixPQURXO0FBRWpCVSxtQkFBTztBQUZVLFNBekJsQjtBQTZCSEssa0JBQVU7QUFDTlQsa0JBQU1ILE1BREE7QUFFTk8sbUJBQU8sUUFGRDtBQUdOSCxzQkFBVTtBQUhKLFNBN0JQO0FBa0NIUyw2QkFBcUI7QUFDakJWLGtCQUFNTixPQURXO0FBRWpCVSxtQkFBTztBQUZVLFNBbENsQjtBQXNDSE8sMEJBQWtCO0FBQ2RYLGtCQUFNTixPQURRO0FBRWRVLG1CQUFPO0FBRk87QUF0Q2YsS0FWRztBQXFEVlEsV0FyRFUscUJBcURBO0FBQ04sYUFBS0MsWUFBTDtBQUNILEtBdkRTOztBQXdEVkMsYUFBUztBQUNMQyx3QkFESyw4QkFDYztBQUNmLGlCQUFLQyxLQUFMLENBQVcsT0FBWDtBQUNILFNBSEk7QUFJTEMsc0JBSkssNEJBSVk7QUFDYixpQkFBS0QsS0FBTCxDQUFXLGVBQVg7QUFDQSxnQkFBSSxLQUFLRSxJQUFMLENBQVVWLG1CQUFkLEVBQW1DO0FBQy9CLHFCQUFLUSxLQUFMLENBQVcsT0FBWDtBQUNIO0FBQ0osU0FUSTtBQVVMSCxvQkFWSywwQkFVVTtBQUFBLHdCQUNzQixLQUFLSyxJQUQzQjtBQUFBLGdCQUNIbkIsVUFERyxTQUNIQSxVQURHO0FBQUEsZ0JBQ1NVLFFBRFQsU0FDU0EsUUFEVDs7QUFFWCxnQkFBTVUsYUFBYTtBQUNmQyxzQkFBTXJCLGNBQWNVO0FBREwsYUFBbkI7QUFHQSxnQkFBSVYsZUFBZSxNQUFuQixFQUEyQjtBQUN2Qm9CLDJCQUFXRSxRQUFYLEdBQXNCLENBQXRCO0FBQ0g7QUFDRCxpQkFBS0MsT0FBTCxDQUFhSCxVQUFiO0FBQ0g7QUFuQkk7QUF4REMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IHRyYW5zaXRpb24gfSBmcm9tICcuLi9taXhpbnMvdHJhbnNpdGlvbic7XG5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbXG4gICAgICAgICdlbnRlci1jbGFzcycsXG4gICAgICAgICdlbnRlci1hY3RpdmUtY2xhc3MnLFxuICAgICAgICAnZW50ZXItdG8tY2xhc3MnLFxuICAgICAgICAnbGVhdmUtY2xhc3MnLFxuICAgICAgICAnbGVhdmUtYWN0aXZlLWNsYXNzJyxcbiAgICAgICAgJ2xlYXZlLXRvLWNsYXNzJ1xuICAgIF0sXG4gICAgbWl4aW5zOiBbdHJhbnNpdGlvbihmYWxzZSldLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHJvdW5kOiBCb29sZWFuLFxuICAgICAgICBjbG9zZWFibGU6IEJvb2xlYW4sXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgIG92ZXJsYXlTdHlsZTogU3RyaW5nLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ29ic2VydmVDbGFzcydcbiAgICAgICAgfSxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZUljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnY3Jvc3MnXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlSWNvblBvc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3RvcC1yaWdodCdcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VPbkNsaWNrT3ZlcmxheToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2NlbnRlcicsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ29ic2VydmVDbGFzcydcbiAgICAgICAgfSxcbiAgICAgICAgc2FmZUFyZWFJbnNldEJvdHRvbToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHNhZmVBcmVhSW5zZXRUb3A6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlQ2xhc3MoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGlja0Nsb3NlSWNvbigpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tPdmVybGF5KCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2stb3ZlcmxheScpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jbG9zZU9uQ2xpY2tPdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb2JzZXJ2ZUNsYXNzKCkge1xuICAgICAgICAgICAgY29uc3QgeyB0cmFuc2l0aW9uLCBwb3NpdGlvbiB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0cmFuc2l0aW9uIHx8IHBvc2l0aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRyYW5zaXRpb24gPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZURhdGEuZHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHVwZGF0ZURhdGEpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=