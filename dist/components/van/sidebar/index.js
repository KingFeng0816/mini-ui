'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        name: 'sidebar-item',
        type: 'descendant',
        linked: function linked(target) {
            this.children.push(target);
            this.setActive(this.data.activeKey);
        },
        unlinked: function unlinked(target) {
            this.children = this.children.filter(function (item) {
                return item !== target;
            });
            this.setActive(this.data.activeKey);
        }
    },
    props: {
        activeKey: {
            type: Number,
            value: 0,
            observer: 'setActive'
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
        this.currentActive = -1;
    },

    methods: {
        setActive: function setActive(activeKey) {
            var children = this.children,
                currentActive = this.currentActive;

            if (!children.length) {
                return Promise.resolve();
            }
            this.currentActive = activeKey;
            var stack = [];
            if (currentActive !== activeKey && children[currentActive]) {
                stack.push(children[currentActive].setActive(false));
            }
            if (children[activeKey]) {
                stack.push(children[activeKey].setActive(true));
            }
            return Promise.all(stack);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsInB1c2giLCJzZXRBY3RpdmUiLCJkYXRhIiwiYWN0aXZlS2V5IiwidW5saW5rZWQiLCJmaWx0ZXIiLCJpdGVtIiwicHJvcHMiLCJOdW1iZXIiLCJ2YWx1ZSIsIm9ic2VydmVyIiwiYmVmb3JlQ3JlYXRlIiwiY3VycmVudEFjdGl2ZSIsIm1ldGhvZHMiLCJsZW5ndGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0YWNrIiwiYWxsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLGNBQVU7QUFDTkMsY0FBTSxjQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxjQUhNLGtCQUdDQyxNQUhELEVBR1M7QUFDWCxpQkFBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CRixNQUFuQjtBQUNBLGlCQUFLRyxTQUFMLENBQWUsS0FBS0MsSUFBTCxDQUFVQyxTQUF6QjtBQUNILFNBTks7QUFPTkMsZ0JBUE0sb0JBT0dOLE1BUEgsRUFPVztBQUNiLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY00sTUFBZCxDQUFxQixVQUFDQyxJQUFEO0FBQUEsdUJBQVVBLFNBQVNSLE1BQW5CO0FBQUEsYUFBckIsQ0FBaEI7QUFDQSxpQkFBS0csU0FBTCxDQUFlLEtBQUtDLElBQUwsQ0FBVUMsU0FBekI7QUFDSDtBQVZLLEtBREE7QUFhVkksV0FBTztBQUNISixtQkFBVztBQUNQUCxrQkFBTVksTUFEQztBQUVQQyxtQkFBTyxDQUZBO0FBR1BDLHNCQUFVO0FBSEg7QUFEUixLQWJHO0FBb0JWQyxnQkFwQlUsMEJBb0JLO0FBQ1gsYUFBS1osUUFBTCxHQUFnQixFQUFoQjtBQUNBLGFBQUthLGFBQUwsR0FBcUIsQ0FBQyxDQUF0QjtBQUNILEtBdkJTOztBQXdCVkMsYUFBUztBQUNMWixpQkFESyxxQkFDS0UsU0FETCxFQUNnQjtBQUFBLGdCQUNUSixRQURTLEdBQ21CLElBRG5CLENBQ1RBLFFBRFM7QUFBQSxnQkFDQ2EsYUFERCxHQUNtQixJQURuQixDQUNDQSxhQUREOztBQUVqQixnQkFBSSxDQUFDYixTQUFTZSxNQUFkLEVBQXNCO0FBQ2xCLHVCQUFPQyxRQUFRQyxPQUFSLEVBQVA7QUFDSDtBQUNELGlCQUFLSixhQUFMLEdBQXFCVCxTQUFyQjtBQUNBLGdCQUFNYyxRQUFRLEVBQWQ7QUFDQSxnQkFBSUwsa0JBQWtCVCxTQUFsQixJQUErQkosU0FBU2EsYUFBVCxDQUFuQyxFQUE0RDtBQUN4REssc0JBQU1qQixJQUFOLENBQVdELFNBQVNhLGFBQVQsRUFBd0JYLFNBQXhCLENBQWtDLEtBQWxDLENBQVg7QUFDSDtBQUNELGdCQUFJRixTQUFTSSxTQUFULENBQUosRUFBeUI7QUFDckJjLHNCQUFNakIsSUFBTixDQUFXRCxTQUFTSSxTQUFULEVBQW9CRixTQUFwQixDQUE4QixJQUE5QixDQUFYO0FBQ0g7QUFDRCxtQkFBT2MsUUFBUUcsR0FBUixDQUFZRCxLQUFaLENBQVA7QUFDSDtBQWZJO0FBeEJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAnc2lkZWJhci1pdGVtJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuZGF0YS5hY3RpdmVLZXkpO1xuICAgICAgICB9LFxuICAgICAgICB1bmxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuZGF0YS5hY3RpdmVLZXkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBhY3RpdmVLZXk6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRBY3RpdmUnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmUgPSAtMTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0QWN0aXZlKGFjdGl2ZUtleSkge1xuICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgY3VycmVudEFjdGl2ZSB9ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlID0gYWN0aXZlS2V5O1xuICAgICAgICAgICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aXZlICE9PSBhY3RpdmVLZXkgJiYgY2hpbGRyZW5bY3VycmVudEFjdGl2ZV0pIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkcmVuW2N1cnJlbnRBY3RpdmVdLnNldEFjdGl2ZShmYWxzZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2FjdGl2ZUtleV0pIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkcmVuW2FjdGl2ZUtleV0uc2V0QWN0aXZlKHRydWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjayk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==