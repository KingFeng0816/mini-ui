'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

function emit(target, value) {
    target.$emit('input', value);
    target.$emit('change', value);
}
(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'checkbox-group',
        type: 'ancestor',
        linked: function linked(target) {
            this.parent = target;
        },
        unlinked: function unlinked() {
            this.parent = null;
        }
    },
    classes: ['icon-class', 'label-class'],
    props: {
        value: Boolean,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: String,
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: 'round'
        },
        iconSize: {
            type: null,
            observer: 'setSizeWithUnit'
        }
    },
    data: {
        sizeWithUnit: '20px'
    },
    methods: {
        emitChange: function emitChange(value) {
            if (this.parent) {
                this.setParentValue(this.parent, value);
            } else {
                emit(this, value);
            }
        },
        toggle: function toggle() {
            var _data = this.data,
                disabled = _data.disabled,
                value = _data.value;

            if (!disabled) {
                this.emitChange(!value);
            }
        },
        onClickLabel: function onClickLabel() {
            var _data2 = this.data,
                labelDisabled = _data2.labelDisabled,
                disabled = _data2.disabled,
                value = _data2.value;

            if (!disabled && !labelDisabled) {
                this.emitChange(!value);
            }
        },
        setParentValue: function setParentValue(parent, value) {
            var parentValue = parent.data.value.slice();
            var name = this.data.name;
            var max = parent.data.max;

            if (value) {
                if (max && parentValue.length >= max) {
                    return;
                }
                if (parentValue.indexOf(name) === -1) {
                    parentValue.push(name);
                    emit(parent, parentValue);
                }
            } else {
                var index = parentValue.indexOf(name);
                if (index !== -1) {
                    parentValue.splice(index, 1);
                    emit(parent, parentValue);
                }
            }
        },
        setSizeWithUnit: function setSizeWithUnit(size) {
            this.set({
                sizeWithUnit: (0, _utils.addUnit)(size)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImVtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIiRlbWl0IiwiZmllbGQiLCJyZWxhdGlvbiIsIm5hbWUiLCJ0eXBlIiwibGlua2VkIiwicGFyZW50IiwidW5saW5rZWQiLCJjbGFzc2VzIiwicHJvcHMiLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJ1c2VJY29uU2xvdCIsImNoZWNrZWRDb2xvciIsIlN0cmluZyIsImxhYmVsUG9zaXRpb24iLCJsYWJlbERpc2FibGVkIiwic2hhcGUiLCJpY29uU2l6ZSIsIm9ic2VydmVyIiwiZGF0YSIsInNpemVXaXRoVW5pdCIsIm1ldGhvZHMiLCJlbWl0Q2hhbmdlIiwic2V0UGFyZW50VmFsdWUiLCJ0b2dnbGUiLCJvbkNsaWNrTGFiZWwiLCJwYXJlbnRWYWx1ZSIsInNsaWNlIiwibWF4IiwibGVuZ3RoIiwiaW5kZXhPZiIsInB1c2giLCJpbmRleCIsInNwbGljZSIsInNldFNpemVXaXRoVW5pdCIsInNpemUiLCJzZXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsU0FBU0EsSUFBVCxDQUFjQyxNQUFkLEVBQXNCQyxLQUF0QixFQUE2QjtBQUN6QkQsV0FBT0UsS0FBUCxDQUFhLE9BQWIsRUFBc0JELEtBQXRCO0FBQ0FELFdBQU9FLEtBQVAsQ0FBYSxRQUFiLEVBQXVCRCxLQUF2QjtBQUNIO0FBQ0QsOEJBQWM7QUFDVkUsV0FBTyxJQURHO0FBRVZDLGNBQVU7QUFDTkMsY0FBTSxnQkFEQTtBQUVOQyxjQUFNLFVBRkE7QUFHTkMsY0FITSxrQkFHQ1AsTUFIRCxFQUdTO0FBQ1gsaUJBQUtRLE1BQUwsR0FBY1IsTUFBZDtBQUNILFNBTEs7QUFNTlMsZ0JBTk0sc0JBTUs7QUFDUCxpQkFBS0QsTUFBTCxHQUFjLElBQWQ7QUFDSDtBQVJLLEtBRkE7QUFZVkUsYUFBUyxDQUFDLFlBQUQsRUFBZSxhQUFmLENBWkM7QUFhVkMsV0FBTztBQUNIVixlQUFPVyxPQURKO0FBRUhDLGtCQUFVRCxPQUZQO0FBR0hFLHFCQUFhRixPQUhWO0FBSUhHLHNCQUFjQyxNQUpYO0FBS0hDLHVCQUFlRCxNQUxaO0FBTUhFLHVCQUFlTixPQU5aO0FBT0hPLGVBQU87QUFDSGIsa0JBQU1VLE1BREg7QUFFSGYsbUJBQU87QUFGSixTQVBKO0FBV0htQixrQkFBVTtBQUNOZCxrQkFBTSxJQURBO0FBRU5lLHNCQUFVO0FBRko7QUFYUCxLQWJHO0FBNkJWQyxVQUFNO0FBQ0ZDLHNCQUFjO0FBRFosS0E3Qkk7QUFnQ1ZDLGFBQVM7QUFDTEMsa0JBREssc0JBQ014QixLQUROLEVBQ2E7QUFDZCxnQkFBSSxLQUFLTyxNQUFULEVBQWlCO0FBQ2IscUJBQUtrQixjQUFMLENBQW9CLEtBQUtsQixNQUF6QixFQUFpQ1AsS0FBakM7QUFDSCxhQUZELE1BR0s7QUFDREYscUJBQUssSUFBTCxFQUFXRSxLQUFYO0FBQ0g7QUFDSixTQVJJO0FBU0wwQixjQVRLLG9CQVNJO0FBQUEsd0JBQ3VCLEtBQUtMLElBRDVCO0FBQUEsZ0JBQ0dULFFBREgsU0FDR0EsUUFESDtBQUFBLGdCQUNhWixLQURiLFNBQ2FBLEtBRGI7O0FBRUwsZ0JBQUksQ0FBQ1ksUUFBTCxFQUFlO0FBQ1gscUJBQUtZLFVBQUwsQ0FBZ0IsQ0FBQ3hCLEtBQWpCO0FBQ0g7QUFDSixTQWRJO0FBZUwyQixvQkFmSywwQkFlVTtBQUFBLHlCQUNnQyxLQUFLTixJQURyQztBQUFBLGdCQUNISixhQURHLFVBQ0hBLGFBREc7QUFBQSxnQkFDWUwsUUFEWixVQUNZQSxRQURaO0FBQUEsZ0JBQ3NCWixLQUR0QixVQUNzQkEsS0FEdEI7O0FBRVgsZ0JBQUksQ0FBQ1ksUUFBRCxJQUFhLENBQUNLLGFBQWxCLEVBQWlDO0FBQzdCLHFCQUFLTyxVQUFMLENBQWdCLENBQUN4QixLQUFqQjtBQUNIO0FBQ0osU0FwQkk7QUFxQkx5QixzQkFyQkssMEJBcUJVbEIsTUFyQlYsRUFxQmtCUCxLQXJCbEIsRUFxQnlCO0FBQzFCLGdCQUFNNEIsY0FBY3JCLE9BQU9jLElBQVAsQ0FBWXJCLEtBQVosQ0FBa0I2QixLQUFsQixFQUFwQjtBQUQwQixnQkFFbEJ6QixJQUZrQixHQUVULEtBQUtpQixJQUZJLENBRWxCakIsSUFGa0I7QUFBQSxnQkFHbEIwQixHQUhrQixHQUdWdkIsT0FBT2MsSUFIRyxDQUdsQlMsR0FIa0I7O0FBSTFCLGdCQUFJOUIsS0FBSixFQUFXO0FBQ1Asb0JBQUk4QixPQUFPRixZQUFZRyxNQUFaLElBQXNCRCxHQUFqQyxFQUFzQztBQUNsQztBQUNIO0FBQ0Qsb0JBQUlGLFlBQVlJLE9BQVosQ0FBb0I1QixJQUFwQixNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQ2xDd0IsZ0NBQVlLLElBQVosQ0FBaUI3QixJQUFqQjtBQUNBTix5QkFBS1MsTUFBTCxFQUFhcUIsV0FBYjtBQUNIO0FBQ0osYUFSRCxNQVNLO0FBQ0Qsb0JBQU1NLFFBQVFOLFlBQVlJLE9BQVosQ0FBb0I1QixJQUFwQixDQUFkO0FBQ0Esb0JBQUk4QixVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNkTixnQ0FBWU8sTUFBWixDQUFtQkQsS0FBbkIsRUFBMEIsQ0FBMUI7QUFDQXBDLHlCQUFLUyxNQUFMLEVBQWFxQixXQUFiO0FBQ0g7QUFDSjtBQUNKLFNBekNJO0FBMENMUSx1QkExQ0ssMkJBMENXQyxJQTFDWCxFQTBDaUI7QUFDbEIsaUJBQUtDLEdBQUwsQ0FBUztBQUNMaEIsOEJBQWMsb0JBQVFlLElBQVI7QUFEVCxhQUFUO0FBR0g7QUE5Q0k7QUFoQ0MsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IGFkZFVuaXQgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuZnVuY3Rpb24gZW1pdCh0YXJnZXQsIHZhbHVlKSB7XG4gICAgdGFyZ2V0LiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcbiAgICB0YXJnZXQuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcbn1cblZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXG4gICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gdGFyZ2V0O1xuICAgICAgICB9LFxuICAgICAgICB1bmxpbmtlZCgpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2xhc3NlczogWydpY29uLWNsYXNzJywgJ2xhYmVsLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICB1c2VJY29uU2xvdDogQm9vbGVhbixcbiAgICAgICAgY2hlY2tlZENvbG9yOiBTdHJpbmcsXG4gICAgICAgIGxhYmVsUG9zaXRpb246IFN0cmluZyxcbiAgICAgICAgbGFiZWxEaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAncm91bmQnXG4gICAgICAgIH0sXG4gICAgICAgIGljb25TaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRTaXplV2l0aFVuaXQnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc2l6ZVdpdGhVbml0OiAnMjBweCdcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZW1pdENoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJlbnRWYWx1ZSh0aGlzLnBhcmVudCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW1pdCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGlzYWJsZWQsIHZhbHVlIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCF2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tMYWJlbCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGFiZWxEaXNhYmxlZCwgZGlzYWJsZWQsIHZhbHVlIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkICYmICFsYWJlbERpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCF2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldFBhcmVudFZhbHVlKHBhcmVudCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFZhbHVlID0gcGFyZW50LmRhdGEudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgeyBtYXggfSA9IHBhcmVudC5kYXRhO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCAmJiBwYXJlbnRWYWx1ZS5sZW5ndGggPj0gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudFZhbHVlLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFZhbHVlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGVtaXQocGFyZW50LCBwYXJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnRWYWx1ZS5pbmRleE9mKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZW1pdChwYXJlbnQsIHBhcmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldFNpemVXaXRoVW5pdChzaXplKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgc2l6ZVdpdGhVbml0OiBhZGRVbml0KHNpemUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9XG59KTtcbiJdfQ==