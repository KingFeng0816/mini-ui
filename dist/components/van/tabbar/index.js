'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        name: 'tabbar-item',
        type: 'descendant',
        linked: function linked(target) {
            this.children.push(target);
            target.parent = this;
            target.updateFromParent();
        },
        unlinked: function unlinked(target) {
            this.children = this.children.filter(function (item) {
                return item !== target;
            });
            this.updateChildren();
        }
    },
    props: {
        active: {
            type: null,
            observer: 'updateChildren'
        },
        activeColor: {
            type: String,
            observer: 'updateChildren'
        },
        inactiveColor: {
            type: String,
            observer: 'updateChildren'
        },
        fixed: {
            type: Boolean,
            value: true
        },
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },

    methods: {
        updateChildren: function updateChildren() {
            var children = this.children;

            if (!Array.isArray(children) || !children.length) {
                return Promise.resolve();
            }
            return Promise.all(children.map(function (child) {
                return child.updateFromParent();
            }));
        },
        onChange: function onChange(child) {
            var index = this.children.indexOf(child);
            var active = child.data.name || index;
            if (active !== this.data.active) {
                this.$emit('change', active);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsInB1c2giLCJwYXJlbnQiLCJ1cGRhdGVGcm9tUGFyZW50IiwidW5saW5rZWQiLCJmaWx0ZXIiLCJpdGVtIiwidXBkYXRlQ2hpbGRyZW4iLCJwcm9wcyIsImFjdGl2ZSIsIm9ic2VydmVyIiwiYWN0aXZlQ29sb3IiLCJTdHJpbmciLCJpbmFjdGl2ZUNvbG9yIiwiZml4ZWQiLCJCb29sZWFuIiwidmFsdWUiLCJib3JkZXIiLCJ6SW5kZXgiLCJOdW1iZXIiLCJzYWZlQXJlYUluc2V0Qm90dG9tIiwiYmVmb3JlQ3JlYXRlIiwibWV0aG9kcyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYWxsIiwibWFwIiwiY2hpbGQiLCJvbkNoYW5nZSIsImluZGV4IiwiaW5kZXhPZiIsImRhdGEiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxjQUFVO0FBQ05DLGNBQU0sYUFEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1gsaUJBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQkYsTUFBbkI7QUFDQUEsbUJBQU9HLE1BQVAsR0FBZ0IsSUFBaEI7QUFDQUgsbUJBQU9JLGdCQUFQO0FBQ0gsU0FQSztBQVFOQyxnQkFSTSxvQkFRR0wsTUFSSCxFQVFXO0FBQ2IsaUJBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjSyxNQUFkLENBQXFCLFVBQUNDLElBQUQ7QUFBQSx1QkFBVUEsU0FBU1AsTUFBbkI7QUFBQSxhQUFyQixDQUFoQjtBQUNBLGlCQUFLUSxjQUFMO0FBQ0g7QUFYSyxLQURBO0FBY1ZDLFdBQU87QUFDSEMsZ0JBQVE7QUFDSlosa0JBQU0sSUFERjtBQUVKYSxzQkFBVTtBQUZOLFNBREw7QUFLSEMscUJBQWE7QUFDVGQsa0JBQU1lLE1BREc7QUFFVEYsc0JBQVU7QUFGRCxTQUxWO0FBU0hHLHVCQUFlO0FBQ1hoQixrQkFBTWUsTUFESztBQUVYRixzQkFBVTtBQUZDLFNBVFo7QUFhSEksZUFBTztBQUNIakIsa0JBQU1rQixPQURIO0FBRUhDLG1CQUFPO0FBRkosU0FiSjtBQWlCSEMsZ0JBQVE7QUFDSnBCLGtCQUFNa0IsT0FERjtBQUVKQyxtQkFBTztBQUZILFNBakJMO0FBcUJIRSxnQkFBUTtBQUNKckIsa0JBQU1zQixNQURGO0FBRUpILG1CQUFPO0FBRkgsU0FyQkw7QUF5QkhJLDZCQUFxQjtBQUNqQnZCLGtCQUFNa0IsT0FEVztBQUVqQkMsbUJBQU87QUFGVTtBQXpCbEIsS0FkRztBQTRDVkssZ0JBNUNVLDBCQTRDSztBQUNYLGFBQUtyQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0gsS0E5Q1M7O0FBK0NWc0IsYUFBUztBQUNMZixzQkFESyw0QkFDWTtBQUFBLGdCQUNMUCxRQURLLEdBQ1EsSUFEUixDQUNMQSxRQURLOztBQUViLGdCQUFJLENBQUN1QixNQUFNQyxPQUFOLENBQWN4QixRQUFkLENBQUQsSUFBNEIsQ0FBQ0EsU0FBU3lCLE1BQTFDLEVBQWtEO0FBQzlDLHVCQUFPQyxRQUFRQyxPQUFSLEVBQVA7QUFDSDtBQUNELG1CQUFPRCxRQUFRRSxHQUFSLENBQVk1QixTQUFTNkIsR0FBVCxDQUFhLFVBQUNDLEtBQUQ7QUFBQSx1QkFBV0EsTUFBTTNCLGdCQUFOLEVBQVg7QUFBQSxhQUFiLENBQVosQ0FBUDtBQUNILFNBUEk7QUFRTDRCLGdCQVJLLG9CQVFJRCxLQVJKLEVBUVc7QUFDWixnQkFBTUUsUUFBUSxLQUFLaEMsUUFBTCxDQUFjaUMsT0FBZCxDQUFzQkgsS0FBdEIsQ0FBZDtBQUNBLGdCQUFNckIsU0FBU3FCLE1BQU1JLElBQU4sQ0FBV3RDLElBQVgsSUFBbUJvQyxLQUFsQztBQUNBLGdCQUFJdkIsV0FBVyxLQUFLeUIsSUFBTCxDQUFVekIsTUFBekIsRUFBaUM7QUFDN0IscUJBQUswQixLQUFMLENBQVcsUUFBWCxFQUFxQjFCLE1BQXJCO0FBQ0g7QUFDSjtBQWRJO0FBL0NDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAndGFiYmFyLWl0ZW0nLFxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudCA9IHRoaXM7XG4gICAgICAgICAgICB0YXJnZXQudXBkYXRlRnJvbVBhcmVudCgpO1xuICAgICAgICB9LFxuICAgICAgICB1bmxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGluYWN0aXZlQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGZpeGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9LFxuICAgICAgICBzYWZlQXJlYUluc2V0Qm90dG9tOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNoaWxkcmVuKCkge1xuICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbikgfHwgIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChjaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC51cGRhdGVGcm9tUGFyZW50KCkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2UoY2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGNoaWxkLmRhdGEubmFtZSB8fCBpbmRleDtcbiAgICAgICAgICAgIGlmIChhY3RpdmUgIT09IHRoaXMuZGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBhY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=