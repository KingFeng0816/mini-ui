'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'checkbox',
        type: 'descendant',
        linked: function linked(target) {
            this.children = this.children || [];
            this.children.push(target);
            this.updateChild(target);
        },
        unlinked: function unlinked(target) {
            this.children = this.children.filter(function (child) {
                return child !== target;
            });
        }
    },
    props: {
        max: Number,
        value: {
            type: Array,
            observer: 'updateChildren'
        },
        disabled: {
            type: Boolean,
            observer: 'updateChildren'
        }
    },
    methods: {
        updateChildren: function updateChildren() {
            var _this = this;

            (this.children || []).forEach(function (child) {
                return _this.updateChild(child);
            });
        },
        updateChild: function updateChild(child) {
            var _data = this.data,
                value = _data.value,
                disabled = _data.disabled;

            child.setData({
                value: value.indexOf(child.data.name) !== -1,
                disabled: disabled || child.data.disabled
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsImNoaWxkcmVuIiwicHVzaCIsInVwZGF0ZUNoaWxkIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJjaGlsZCIsInByb3BzIiwibWF4IiwiTnVtYmVyIiwidmFsdWUiLCJBcnJheSIsIm9ic2VydmVyIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibWV0aG9kcyIsInVwZGF0ZUNoaWxkcmVuIiwiZm9yRWFjaCIsImRhdGEiLCJzZXREYXRhIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPLElBREc7QUFFVkMsY0FBVTtBQUNOQyxjQUFNLFVBREE7QUFFTkMsY0FBTSxZQUZBO0FBR05DLGNBSE0sa0JBR0NDLE1BSEQsRUFHUztBQUNYLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsSUFBaUIsRUFBakM7QUFDQSxpQkFBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CRixNQUFuQjtBQUNBLGlCQUFLRyxXQUFMLENBQWlCSCxNQUFqQjtBQUNILFNBUEs7QUFRTkksZ0JBUk0sb0JBUUdKLE1BUkgsRUFRVztBQUNiLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0ksTUFBZCxDQUFxQixVQUFDQyxLQUFEO0FBQUEsdUJBQVdBLFVBQVVOLE1BQXJCO0FBQUEsYUFBckIsQ0FBaEI7QUFDSDtBQVZLLEtBRkE7QUFjVk8sV0FBTztBQUNIQyxhQUFLQyxNQURGO0FBRUhDLGVBQU87QUFDSFosa0JBQU1hLEtBREg7QUFFSEMsc0JBQVU7QUFGUCxTQUZKO0FBTUhDLGtCQUFVO0FBQ05mLGtCQUFNZ0IsT0FEQTtBQUVORixzQkFBVTtBQUZKO0FBTlAsS0FkRztBQXlCVkcsYUFBUztBQUNMQyxzQkFESyw0QkFDWTtBQUFBOztBQUNiLGFBQUMsS0FBS2YsUUFBTCxJQUFpQixFQUFsQixFQUFzQmdCLE9BQXRCLENBQThCLFVBQUNYLEtBQUQ7QUFBQSx1QkFBVyxNQUFLSCxXQUFMLENBQWlCRyxLQUFqQixDQUFYO0FBQUEsYUFBOUI7QUFDSCxTQUhJO0FBSUxILG1CQUpLLHVCQUlPRyxLQUpQLEVBSWM7QUFBQSx3QkFDYSxLQUFLWSxJQURsQjtBQUFBLGdCQUNQUixLQURPLFNBQ1BBLEtBRE87QUFBQSxnQkFDQUcsUUFEQSxTQUNBQSxRQURBOztBQUVmUCxrQkFBTWEsT0FBTixDQUFjO0FBQ1ZULHVCQUFPQSxNQUFNVSxPQUFOLENBQWNkLE1BQU1ZLElBQU4sQ0FBV3JCLElBQXpCLE1BQW1DLENBQUMsQ0FEakM7QUFFVmdCLDBCQUFVQSxZQUFZUCxNQUFNWSxJQUFOLENBQVdMO0FBRnZCLGFBQWQ7QUFJSDtBQVZJO0FBekJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkKHRhcmdldCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkKHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQgIT09IHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG1heDogTnVtYmVyLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW4oKSB7XG4gICAgICAgICAgICAodGhpcy5jaGlsZHJlbiB8fCBbXSkuZm9yRWFjaCgoY2hpbGQpID0+IHRoaXMudXBkYXRlQ2hpbGQoY2hpbGQpKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIGRpc2FibGVkIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjaGlsZC5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUuaW5kZXhPZihjaGlsZC5kYXRhLm5hbWUpICE9PSAtMSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQgfHwgY2hpbGQuZGF0YS5kaXNhYmxlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==