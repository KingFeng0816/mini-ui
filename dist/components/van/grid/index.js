'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    relation: {
        name: 'grid-item',
        type: 'descendant',
        linked: function linked(child) {
            this.children.push(child);
        },
        unlinked: function unlinked(child) {
            this.children = this.children.filter(function (item) {
                return item !== child;
            });
        }
    },
    props: {
        square: {
            type: Boolean,
            observer: 'updateChildren'
        },
        gutter: {
            type: [Number, String],
            value: 0,
            observer: 'updateChildren'
        },
        clickable: {
            type: Boolean,
            observer: 'updateChildren'
        },
        columnNum: {
            type: Number,
            value: 4,
            observer: 'updateChildren'
        },
        center: {
            type: Boolean,
            value: true,
            observer: 'updateChildren'
        },
        border: {
            type: Boolean,
            value: true,
            observer: 'updateChildren'
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },
    created: function created() {
        var gutter = this.data.gutter;

        if (gutter) {
            this.setData({
                style: 'padding-left: ' + (0, _utils.addUnit)(gutter)
            });
        }
    },

    methods: {
        updateChildren: function updateChildren() {
            this.children.forEach(function (child) {
                child.updateStyle();
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJjaGlsZCIsImNoaWxkcmVuIiwicHVzaCIsInVubGlua2VkIiwiZmlsdGVyIiwiaXRlbSIsInByb3BzIiwic3F1YXJlIiwiQm9vbGVhbiIsIm9ic2VydmVyIiwiZ3V0dGVyIiwiTnVtYmVyIiwiU3RyaW5nIiwidmFsdWUiLCJjbGlja2FibGUiLCJjb2x1bW5OdW0iLCJjZW50ZXIiLCJib3JkZXIiLCJiZWZvcmVDcmVhdGUiLCJjcmVhdGVkIiwiZGF0YSIsInNldERhdGEiLCJzdHlsZSIsIm1ldGhvZHMiLCJ1cGRhdGVDaGlsZHJlbiIsImZvckVhY2giLCJ1cGRhdGVTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxjQUFVO0FBQ05DLGNBQU0sV0FEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsY0FITSxrQkFHQ0MsS0FIRCxFQUdRO0FBQ1YsaUJBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQkYsS0FBbkI7QUFDSCxTQUxLO0FBTU5HLGdCQU5NLG9CQU1HSCxLQU5ILEVBTVU7QUFDWixpQkFBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNHLE1BQWQsQ0FBcUIsVUFBQ0MsSUFBRDtBQUFBLHVCQUFVQSxTQUFTTCxLQUFuQjtBQUFBLGFBQXJCLENBQWhCO0FBQ0g7QUFSSyxLQURBO0FBV1ZNLFdBQU87QUFDSEMsZ0JBQVE7QUFDSlQsa0JBQU1VLE9BREY7QUFFSkMsc0JBQVU7QUFGTixTQURMO0FBS0hDLGdCQUFRO0FBQ0paLGtCQUFNLENBQUNhLE1BQUQsRUFBU0MsTUFBVCxDQURGO0FBRUpDLG1CQUFPLENBRkg7QUFHSkosc0JBQVU7QUFITixTQUxMO0FBVUhLLG1CQUFXO0FBQ1BoQixrQkFBTVUsT0FEQztBQUVQQyxzQkFBVTtBQUZILFNBVlI7QUFjSE0sbUJBQVc7QUFDUGpCLGtCQUFNYSxNQURDO0FBRVBFLG1CQUFPLENBRkE7QUFHUEosc0JBQVU7QUFISCxTQWRSO0FBbUJITyxnQkFBUTtBQUNKbEIsa0JBQU1VLE9BREY7QUFFSkssbUJBQU8sSUFGSDtBQUdKSixzQkFBVTtBQUhOLFNBbkJMO0FBd0JIUSxnQkFBUTtBQUNKbkIsa0JBQU1VLE9BREY7QUFFSkssbUJBQU8sSUFGSDtBQUdKSixzQkFBVTtBQUhOO0FBeEJMLEtBWEc7QUF5Q1ZTLGdCQXpDVSwwQkF5Q0s7QUFDWCxhQUFLakIsUUFBTCxHQUFnQixFQUFoQjtBQUNILEtBM0NTO0FBNENWa0IsV0E1Q1UscUJBNENBO0FBQUEsWUFDRVQsTUFERixHQUNhLEtBQUtVLElBRGxCLENBQ0VWLE1BREY7O0FBRU4sWUFBSUEsTUFBSixFQUFZO0FBQ1IsaUJBQUtXLE9BQUwsQ0FBYTtBQUNUQywwQ0FBd0Isb0JBQVFaLE1BQVI7QUFEZixhQUFiO0FBR0g7QUFDSixLQW5EUzs7QUFvRFZhLGFBQVM7QUFDTEMsc0JBREssNEJBQ1k7QUFDYixpQkFBS3ZCLFFBQUwsQ0FBY3dCLE9BQWQsQ0FBc0IsVUFBQ3pCLEtBQUQsRUFBVztBQUM3QkEsc0JBQU0wQixXQUFOO0FBQ0gsYUFGRDtBQUdIO0FBTEk7QUFwREMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IGFkZFVuaXQgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2dyaWQtaXRlbScsXG4gICAgICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcbiAgICAgICAgbGlua2VkKGNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9LFxuICAgICAgICB1bmxpbmtlZChjaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNxdWFyZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlcjoge1xuICAgICAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcbiAgICAgICAgfSxcbiAgICAgICAgY2xpY2thYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcbiAgICAgICAgfSxcbiAgICAgICAgY29sdW1uTnVtOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGNvbnN0IHsgZ3V0dGVyIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgIGlmIChndXR0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgc3R5bGU6IGBwYWRkaW5nLWxlZnQ6ICR7YWRkVW5pdChndXR0ZXIpfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNoaWxkcmVuKCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZVN0eWxlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19