'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    classes: ['active-class', 'disabled-class'],
    relation: {
        type: 'ancestor',
        name: 'sidebar',
        linked: function linked(target) {
            this.parent = target;
        }
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean
    },
    methods: {
        onClick: function onClick() {
            var _this = this;

            var parent = this.parent;

            if (!parent || this.data.disabled) {
                return;
            }
            var index = parent.children.indexOf(this);
            parent.setActive(index).then(function () {
                _this.$emit('click', index);
                parent.$emit('change', index);
            });
        },
        setActive: function setActive(selected) {
            return this.setData({ selected: selected });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJyZWxhdGlvbiIsInR5cGUiLCJuYW1lIiwibGlua2VkIiwidGFyZ2V0IiwicGFyZW50IiwicHJvcHMiLCJkb3QiLCJCb29sZWFuIiwiaW5mbyIsInRpdGxlIiwiU3RyaW5nIiwiZGlzYWJsZWQiLCJtZXRob2RzIiwib25DbGljayIsImRhdGEiLCJpbmRleCIsImNoaWxkcmVuIiwiaW5kZXhPZiIsInNldEFjdGl2ZSIsInRoZW4iLCIkZW1pdCIsInNlbGVjdGVkIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxhQUFTLENBQ0wsY0FESyxFQUVMLGdCQUZLLENBREM7QUFLVkMsY0FBVTtBQUNOQyxjQUFNLFVBREE7QUFFTkMsY0FBTSxTQUZBO0FBR05DLGNBSE0sa0JBR0NDLE1BSEQsRUFHUztBQUNYLGlCQUFLQyxNQUFMLEdBQWNELE1BQWQ7QUFDSDtBQUxLLEtBTEE7QUFZVkUsV0FBTztBQUNIQyxhQUFLQyxPQURGO0FBRUhDLGNBQU0sSUFGSDtBQUdIQyxlQUFPQyxNQUhKO0FBSUhDLGtCQUFVSjtBQUpQLEtBWkc7QUFrQlZLLGFBQVM7QUFDTEMsZUFESyxxQkFDSztBQUFBOztBQUFBLGdCQUNFVCxNQURGLEdBQ2EsSUFEYixDQUNFQSxNQURGOztBQUVOLGdCQUFJLENBQUNBLE1BQUQsSUFBVyxLQUFLVSxJQUFMLENBQVVILFFBQXpCLEVBQW1DO0FBQy9CO0FBQ0g7QUFDRCxnQkFBTUksUUFBUVgsT0FBT1ksUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsSUFBeEIsQ0FBZDtBQUNBYixtQkFBT2MsU0FBUCxDQUFpQkgsS0FBakIsRUFBd0JJLElBQXhCLENBQTZCLFlBQU07QUFDL0Isc0JBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CTCxLQUFwQjtBQUNBWCx1QkFBT2dCLEtBQVAsQ0FBYSxRQUFiLEVBQXVCTCxLQUF2QjtBQUNILGFBSEQ7QUFJSCxTQVhJO0FBWUxHLGlCQVpLLHFCQVlLRyxRQVpMLEVBWWU7QUFDaEIsbUJBQU8sS0FBS0MsT0FBTCxDQUFhLEVBQUVELGtCQUFGLEVBQWIsQ0FBUDtBQUNIO0FBZEk7QUFsQkMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFtcbiAgICAgICAgJ2FjdGl2ZS1jbGFzcycsXG4gICAgICAgICdkaXNhYmxlZC1jbGFzcycsXG4gICAgXSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICB0eXBlOiAnYW5jZXN0b3InLFxuICAgICAgICBuYW1lOiAnc2lkZWJhcicsXG4gICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBkb3Q6IEJvb2xlYW4sXG4gICAgICAgIGluZm86IG51bGwsXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICBjb25zdCB7IHBhcmVudCB9ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghcGFyZW50IHx8IHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBwYXJlbnQuc2V0QWN0aXZlKGluZGV4KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGluZGV4KTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuJGVtaXQoJ2NoYW5nZScsIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRBY3RpdmUoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldERhdGEoeyBzZWxlY3RlZCB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19