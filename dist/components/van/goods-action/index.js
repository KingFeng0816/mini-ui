'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        type: 'descendant',
        name: 'goods-action-button',
        linked: function linked(child) {
            this.children.push(child);
        },
        unlinked: function unlinked(child) {
            this.children = this.children.filter(function (item) {
                return item !== child;
            });
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },

    props: {
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwidHlwZSIsIm5hbWUiLCJsaW5rZWQiLCJjaGlsZCIsImNoaWxkcmVuIiwicHVzaCIsInVubGlua2VkIiwiZmlsdGVyIiwiaXRlbSIsImJlZm9yZUNyZWF0ZSIsInByb3BzIiwic2FmZUFyZWFJbnNldEJvdHRvbSIsIkJvb2xlYW4iLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxjQUFVO0FBQ05DLGNBQU0sWUFEQTtBQUVOQyxjQUFNLHFCQUZBO0FBR05DLGNBSE0sa0JBR0NDLEtBSEQsRUFHUTtBQUNWLGlCQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUJGLEtBQW5CO0FBQ0gsU0FMSztBQU1ORyxnQkFOTSxvQkFNR0gsS0FOSCxFQU1VO0FBQ1osaUJBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjRyxNQUFkLENBQXFCLFVBQUNDLElBQUQ7QUFBQSx1QkFBVUEsU0FBU0wsS0FBbkI7QUFBQSxhQUFyQixDQUFoQjtBQUNIO0FBUkssS0FEQTtBQVdWTSxnQkFYVSwwQkFXSztBQUNYLGFBQUtMLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSCxLQWJTOztBQWNWTSxXQUFPO0FBQ0hDLDZCQUFxQjtBQUNqQlgsa0JBQU1ZLE9BRFc7QUFFakJDLG1CQUFPO0FBRlU7QUFEbEI7QUFkRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBuYW1lOiAnZ29vZHMtYWN0aW9uLWJ1dHRvbicsXG4gICAgICAgIGxpbmtlZChjaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5saW5rZWQoY2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNhZmVBcmVhSW5zZXRCb3R0b206IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=