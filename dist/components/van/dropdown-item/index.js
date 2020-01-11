'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'dropdown-menu',
        type: 'ancestor',
        linked: function linked(target) {
            this.parent = target;
            this.updateDataFromParent();
        },
        unlinked: function unlinked() {
            this.parent = null;
        }
    },
    props: {
        value: {
            type: null,
            observer: 'rerender'
        },
        title: {
            type: String,
            observer: 'rerender'
        },
        disabled: Boolean,
        titleClass: {
            type: String,
            observer: 'rerender'
        },
        options: {
            type: Array,
            value: [],
            observer: 'rerender'
        }
    },
    data: {
        transition: true,
        showPopup: false,
        showWrapper: false,
        displayTitle: ''
    },
    methods: {
        rerender: function rerender() {
            var _this = this;

            wx.nextTick(function () {
                _this.parent && _this.parent.updateItemListData();
            });
        },
        updateDataFromParent: function updateDataFromParent() {
            if (this.parent) {
                var _parent$data = this.parent.data,
                    overlay = _parent$data.overlay,
                    duration = _parent$data.duration,
                    activeColor = _parent$data.activeColor,
                    closeOnClickOverlay = _parent$data.closeOnClickOverlay,
                    direction = _parent$data.direction;

                this.setData({
                    overlay: overlay,
                    duration: duration,
                    activeColor: activeColor,
                    closeOnClickOverlay: closeOnClickOverlay,
                    direction: direction
                });
            }
        },
        onClickOverlay: function onClickOverlay() {
            this.toggle();
            this.$emit('close');
        },
        onOptionTap: function onOptionTap(event) {
            var _this2 = this;

            var option = event.currentTarget.dataset.option;
            var value = option.value;

            var shouldEmitChange = this.data.value !== value;
            this.setData({ showPopup: false, value: value });
            setTimeout(function () {
                _this2.setData({ showWrapper: false });
            }, this.data.duration || 0);
            this.rerender();
            if (shouldEmitChange) {
                this.$emit('change', value);
            }
        },
        toggle: function toggle(show) {
            var _this3 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var _data = this.data,
                showPopup = _data.showPopup,
                duration = _data.duration;

            if (show == null) {
                show = !showPopup;
            }
            if (show === showPopup) {
                return;
            }
            if (!show) {
                var time = options.immediate ? 0 : duration;
                this.setData({ transition: !options.immediate, showPopup: show });
                setTimeout(function () {
                    _this3.setData({ showWrapper: false });
                }, time);
                this.rerender();
                return;
            }
            this.parent.getChildWrapperStyle().then(function () {
                var wrapperStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

                _this3.setData({
                    transition: !options.immediate,
                    showPopup: show,
                    wrapperStyle: wrapperStyle,
                    showWrapper: true
                });
                _this3.rerender();
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsInBhcmVudCIsInVwZGF0ZURhdGFGcm9tUGFyZW50IiwidW5saW5rZWQiLCJwcm9wcyIsInZhbHVlIiwib2JzZXJ2ZXIiLCJ0aXRsZSIsIlN0cmluZyIsImRpc2FibGVkIiwiQm9vbGVhbiIsInRpdGxlQ2xhc3MiLCJvcHRpb25zIiwiQXJyYXkiLCJkYXRhIiwidHJhbnNpdGlvbiIsInNob3dQb3B1cCIsInNob3dXcmFwcGVyIiwiZGlzcGxheVRpdGxlIiwibWV0aG9kcyIsInJlcmVuZGVyIiwid3giLCJuZXh0VGljayIsInVwZGF0ZUl0ZW1MaXN0RGF0YSIsIm92ZXJsYXkiLCJkdXJhdGlvbiIsImFjdGl2ZUNvbG9yIiwiY2xvc2VPbkNsaWNrT3ZlcmxheSIsImRpcmVjdGlvbiIsInNldERhdGEiLCJvbkNsaWNrT3ZlcmxheSIsInRvZ2dsZSIsIiRlbWl0Iiwib25PcHRpb25UYXAiLCJldmVudCIsIm9wdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2hvdWxkRW1pdENoYW5nZSIsInNldFRpbWVvdXQiLCJzaG93IiwidGltZSIsImltbWVkaWF0ZSIsImdldENoaWxkV3JhcHBlclN0eWxlIiwidGhlbiIsIndyYXBwZXJTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPLElBREc7QUFFVkMsY0FBVTtBQUNOQyxjQUFNLGVBREE7QUFFTkMsY0FBTSxVQUZBO0FBR05DLGNBSE0sa0JBR0NDLE1BSEQsRUFHUztBQUNYLGlCQUFLQyxNQUFMLEdBQWNELE1BQWQ7QUFDQSxpQkFBS0Usb0JBQUw7QUFDSCxTQU5LO0FBT05DLGdCQVBNLHNCQU9LO0FBQ1AsaUJBQUtGLE1BQUwsR0FBYyxJQUFkO0FBQ0g7QUFUSyxLQUZBO0FBYVZHLFdBQU87QUFDSEMsZUFBTztBQUNIUCxrQkFBTSxJQURI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QkFGRCxFQUVHd0IsSUFGSDtBQUdBLHFCQUFLckIsUUFBTDtBQUNBO0FBQ0g7QUFDRCxpQkFBS25CLE1BQUwsQ0FBWTBDLG9CQUFaLEdBQW1DQyxJQUFuQyxDQUF3QyxZQUF1QjtBQUFBLG9CQUF0QkMsWUFBc0IsdUVBQVAsRUFBTzs7QUFDM0QsdUJBQUtoQixPQUFMLENBQWE7QUFDVGQsZ0NBQVksQ0FBQ0gsUUFBUThCLFNBRFo7QUFFVDFCLCtCQUFXd0IsSUFGRjtBQUdUSyw4Q0FIUztBQUlUNUIsaUNBQWE7QUFKSixpQkFBYjtBQU1BLHVCQUFLRyxRQUFMO0FBQ0gsYUFSRDtBQVNIO0FBN0RJO0FBdkNDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAnZHJvcGRvd24tbWVudScsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXG4gICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhRnJvbVBhcmVudCgpO1xuICAgICAgICB9LFxuICAgICAgICB1bmxpbmtlZCgpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3JlcmVuZGVyJ1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdyZXJlbmRlcidcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIHRpdGxlQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAncmVyZW5kZXInXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdyZXJlbmRlcidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cnVlLFxuICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICBzaG93V3JhcHBlcjogZmFsc2UsXG4gICAgICAgIGRpc3BsYXlUaXRsZTogJydcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcmVyZW5kZXIoKSB7XG4gICAgICAgICAgICB3eC5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQudXBkYXRlSXRlbUxpc3REYXRhKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRGF0YUZyb21QYXJlbnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG92ZXJsYXksIGR1cmF0aW9uLCBhY3RpdmVDb2xvciwgY2xvc2VPbkNsaWNrT3ZlcmxheSwgZGlyZWN0aW9uIH0gPSB0aGlzLnBhcmVudC5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXksXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrT3ZlcmxheSxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tPdmVybGF5KCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uT3B0aW9uVGFwKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IG9wdGlvbiB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gb3B0aW9uO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkRW1pdENoYW5nZSA9IHRoaXMuZGF0YS52YWx1ZSAhPT0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBzaG93UG9wdXA6IGZhbHNlLCB2YWx1ZSB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHNob3dXcmFwcGVyOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0sIHRoaXMuZGF0YS5kdXJhdGlvbiB8fCAwKTtcbiAgICAgICAgICAgIHRoaXMucmVyZW5kZXIoKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRFbWl0Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0b2dnbGUoc2hvdywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgICAgICBjb25zdCB7IHNob3dQb3B1cCwgZHVyYXRpb24gfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmIChzaG93ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzaG93ID0gIXNob3dQb3B1cDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaG93ID09PSBzaG93UG9wdXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gb3B0aW9ucy5pbW1lZGlhdGUgPyAwIDogZHVyYXRpb247XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgdHJhbnNpdGlvbjogIW9wdGlvbnMuaW1tZWRpYXRlLCBzaG93UG9wdXA6IHNob3cgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHNob3dXcmFwcGVyOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZ2V0Q2hpbGRXcmFwcGVyU3R5bGUoKS50aGVuKCh3cmFwcGVyU3R5bGUgPSAnJykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICFvcHRpb25zLmltbWVkaWF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1BvcHVwOiBzaG93LFxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dXcmFwcGVyOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXJlbmRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==