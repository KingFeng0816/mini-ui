'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'radio',
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
        value: {
            type: null,
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
                value: value,
                disabled: disabled || child.data.disabled
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsImNoaWxkcmVuIiwicHVzaCIsInVwZGF0ZUNoaWxkIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJjaGlsZCIsInByb3BzIiwidmFsdWUiLCJvYnNlcnZlciIsImRpc2FibGVkIiwiQm9vbGVhbiIsIm1ldGhvZHMiLCJ1cGRhdGVDaGlsZHJlbiIsImZvckVhY2giLCJkYXRhIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPLElBREc7QUFFVkMsY0FBVTtBQUNOQyxjQUFNLE9BREE7QUFFTkMsY0FBTSxZQUZBO0FBR05DLGNBSE0sa0JBR0NDLE1BSEQsRUFHUztBQUNYLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsSUFBaUIsRUFBakM7QUFDQSxpQkFBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CRixNQUFuQjtBQUNBLGlCQUFLRyxXQUFMLENBQWlCSCxNQUFqQjtBQUNILFNBUEs7QUFRTkksZ0JBUk0sb0JBUUdKLE1BUkgsRUFRVztBQUNiLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0ksTUFBZCxDQUFxQixVQUFDQyxLQUFEO0FBQUEsdUJBQVdBLFVBQVVOLE1BQXJCO0FBQUEsYUFBckIsQ0FBaEI7QUFDSDtBQVZLLEtBRkE7QUFjVk8sV0FBTztBQUNIQyxlQUFPO0FBQ0hWLGtCQUFNLElBREg7QUFFSFcsc0JBQVU7QUFGUCxTQURKO0FBS0hDLGtCQUFVO0FBQ05aLGtCQUFNYSxPQURBO0FBRU5GLHNCQUFVO0FBRko7QUFMUCxLQWRHO0FBd0JWRyxhQUFTO0FBQ0xDLHNCQURLLDRCQUNZO0FBQUE7O0FBQ2IsYUFBQyxLQUFLWixRQUFMLElBQWlCLEVBQWxCLEVBQXNCYSxPQUF0QixDQUE4QixVQUFDUixLQUFEO0FBQUEsdUJBQVcsTUFBS0gsV0FBTCxDQUFpQkcsS0FBakIsQ0FBWDtBQUFBLGFBQTlCO0FBQ0gsU0FISTtBQUlMSCxtQkFKSyx1QkFJT0csS0FKUCxFQUljO0FBQUEsd0JBQ2EsS0FBS1MsSUFEbEI7QUFBQSxnQkFDUFAsS0FETyxTQUNQQSxLQURPO0FBQUEsZ0JBQ0FFLFFBREEsU0FDQUEsUUFEQTs7QUFFZkosa0JBQU1VLE9BQU4sQ0FBYztBQUNWUiw0QkFEVTtBQUVWRSwwQkFBVUEsWUFBWUosTUFBTVMsSUFBTixDQUFXTDtBQUZ2QixhQUFkO0FBSUg7QUFWSTtBQXhCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3JhZGlvJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDaGlsZCh0YXJnZXQpO1xuICAgICAgICB9LFxuICAgICAgICB1bmxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkICE9PSB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVDaGlsZHJlbigpIHtcbiAgICAgICAgICAgICh0aGlzLmNoaWxkcmVuIHx8IFtdKS5mb3JFYWNoKChjaGlsZCkgPT4gdGhpcy51cGRhdGVDaGlsZChjaGlsZCkpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVDaGlsZChjaGlsZCkge1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgZGlzYWJsZWQgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNoaWxkLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB8fCBjaGlsZC5kYXRhLmRpc2FibGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19