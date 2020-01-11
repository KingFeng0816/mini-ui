'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        name: 'tabs',
        type: 'ancestor',
        linked: function linked(target) {
            this.parent = target;
        },
        unlinked: function unlinked() {
            this.parent = null;
        }
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean,
        titleStyle: String,
        name: {
            type: [Number, String],
            value: ''
        }
    },
    data: {
        active: false
    },
    watch: {
        title: 'update',
        disabled: 'update',
        dot: 'update',
        info: 'update',
        titleStyle: 'update'
    },
    methods: {
        getComputedName: function getComputedName() {
            if (this.data.name !== '') {
                return this.data.name;
            }
            return this.index;
        },
        updateRender: function updateRender(active, parent) {
            var parentData = parent.data;

            this.inited = this.inited || active;
            this.setData({
                active: active,
                shouldRender: this.inited || !parentData.lazyRender,
                shouldShow: active || parentData.animated
            });
        },
        update: function update() {
            if (this.parent) {
                this.parent.updateTabs();
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJwYXJlbnQiLCJ1bmxpbmtlZCIsInByb3BzIiwiZG90IiwiQm9vbGVhbiIsImluZm8iLCJ0aXRsZSIsIlN0cmluZyIsImRpc2FibGVkIiwidGl0bGVTdHlsZSIsIk51bWJlciIsInZhbHVlIiwiZGF0YSIsImFjdGl2ZSIsIndhdGNoIiwibWV0aG9kcyIsImdldENvbXB1dGVkTmFtZSIsImluZGV4IiwidXBkYXRlUmVuZGVyIiwicGFyZW50RGF0YSIsImluaXRlZCIsInNldERhdGEiLCJzaG91bGRSZW5kZXIiLCJsYXp5UmVuZGVyIiwic2hvdWxkU2hvdyIsImFuaW1hdGVkIiwidXBkYXRlIiwidXBkYXRlVGFicyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxjQUFVO0FBQ05DLGNBQU0sTUFEQTtBQUVOQyxjQUFNLFVBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1gsaUJBQUtDLE1BQUwsR0FBY0QsTUFBZDtBQUNILFNBTEs7QUFNTkUsZ0JBTk0sc0JBTUs7QUFDUCxpQkFBS0QsTUFBTCxHQUFjLElBQWQ7QUFDSDtBQVJLLEtBREE7QUFXVkUsV0FBTztBQUNIQyxhQUFLQyxPQURGO0FBRUhDLGNBQU0sSUFGSDtBQUdIQyxlQUFPQyxNQUhKO0FBSUhDLGtCQUFVSixPQUpQO0FBS0hLLG9CQUFZRixNQUxUO0FBTUhYLGNBQU07QUFDRkMsa0JBQU0sQ0FBQ2EsTUFBRCxFQUFTSCxNQUFULENBREo7QUFFRkksbUJBQU87QUFGTDtBQU5ILEtBWEc7QUFzQlZDLFVBQU07QUFDRkMsZ0JBQVE7QUFETixLQXRCSTtBQXlCVkMsV0FBTztBQUNIUixlQUFPLFFBREo7QUFFSEUsa0JBQVUsUUFGUDtBQUdITCxhQUFLLFFBSEY7QUFJSEUsY0FBTSxRQUpIO0FBS0hJLG9CQUFZO0FBTFQsS0F6Qkc7QUFnQ1ZNLGFBQVM7QUFDTEMsdUJBREssNkJBQ2E7QUFDZCxnQkFBSSxLQUFLSixJQUFMLENBQVVoQixJQUFWLEtBQW1CLEVBQXZCLEVBQTJCO0FBQ3ZCLHVCQUFPLEtBQUtnQixJQUFMLENBQVVoQixJQUFqQjtBQUNIO0FBQ0QsbUJBQU8sS0FBS3FCLEtBQVo7QUFDSCxTQU5JO0FBT0xDLG9CQVBLLHdCQU9RTCxNQVBSLEVBT2dCYixNQVBoQixFQU93QjtBQUFBLGdCQUNYbUIsVUFEVyxHQUNJbkIsTUFESixDQUNqQlksSUFEaUI7O0FBRXpCLGlCQUFLUSxNQUFMLEdBQWMsS0FBS0EsTUFBTCxJQUFlUCxNQUE3QjtBQUNBLGlCQUFLUSxPQUFMLENBQWE7QUFDVFIsOEJBRFM7QUFFVFMsOEJBQWMsS0FBS0YsTUFBTCxJQUFlLENBQUNELFdBQVdJLFVBRmhDO0FBR1RDLDRCQUFZWCxVQUFVTSxXQUFXTTtBQUh4QixhQUFiO0FBS0gsU0FmSTtBQWdCTEMsY0FoQkssb0JBZ0JJO0FBQ0wsZ0JBQUksS0FBSzFCLE1BQVQsRUFBaUI7QUFDYixxQkFBS0EsTUFBTCxDQUFZMkIsVUFBWjtBQUNIO0FBQ0o7QUFwQkk7QUFoQ0MsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICd0YWJzJyxcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJyxcbiAgICAgICAgbGlua2VkKHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSB0YXJnZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkKCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBkb3Q6IEJvb2xlYW4sXG4gICAgICAgIGluZm86IG51bGwsXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICB0aXRsZVN0eWxlOiBTdHJpbmcsXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdGl0bGU6ICd1cGRhdGUnLFxuICAgICAgICBkaXNhYmxlZDogJ3VwZGF0ZScsXG4gICAgICAgIGRvdDogJ3VwZGF0ZScsXG4gICAgICAgIGluZm86ICd1cGRhdGUnLFxuICAgICAgICB0aXRsZVN0eWxlOiAndXBkYXRlJ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRDb21wdXRlZE5hbWUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLm5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVJlbmRlcihhY3RpdmUsIHBhcmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBwYXJlbnREYXRhIH0gPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLmluaXRlZCA9IHRoaXMuaW5pdGVkIHx8IGFjdGl2ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgICAgIHNob3VsZFJlbmRlcjogdGhpcy5pbml0ZWQgfHwgIXBhcmVudERhdGEubGF6eVJlbmRlcixcbiAgICAgICAgICAgICAgICBzaG91bGRTaG93OiBhY3RpdmUgfHwgcGFyZW50RGF0YS5hbmltYXRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnVwZGF0ZVRhYnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19