'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

var ARRAY = [];
(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'dropdown-item',
        type: 'descendant',
        linked: function linked(target) {
            this.children.push(target);
            this.updateItemListData();
        },
        unlinked: function unlinked(target) {
            this.children = this.children.filter(function (child) {
                return child !== target;
            });
            this.updateItemListData();
        }
    },
    props: {
        activeColor: {
            type: String,
            observer: 'updateChildrenData'
        },
        overlay: {
            type: Boolean,
            value: true,
            observer: 'updateChildrenData'
        },
        zIndex: {
            type: Number,
            value: 10
        },
        duration: {
            type: Number,
            value: 200,
            observer: 'updateChildrenData'
        },
        direction: {
            type: String,
            value: 'down',
            observer: 'updateChildrenData'
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true,
            observer: 'updateChildrenData'
        },
        closeOnClickOutside: {
            type: Boolean,
            value: true
        }
    },
    data: {
        itemListData: []
    },
    beforeCreate: function beforeCreate() {
        var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
            windowHeight = _wx$getSystemInfoSync.windowHeight;

        this.windowHeight = windowHeight;
        this.children = [];
        ARRAY.push(this);
    },
    destroyed: function destroyed() {
        var _this = this;

        ARRAY = ARRAY.filter(function (item) {
            return item !== _this;
        });
    },

    methods: {
        updateItemListData: function updateItemListData() {
            this.setData({
                itemListData: this.children.map(function (child) {
                    return child.data;
                })
            });
        },
        updateChildrenData: function updateChildrenData() {
            this.children.forEach(function (child) {
                child.updateDataFromParent();
            });
        },
        toggleItem: function toggleItem(active) {
            this.children.forEach(function (item, index) {
                var showPopup = item.data.showPopup;

                if (index === active) {
                    item.toggle();
                } else if (showPopup) {
                    item.toggle(false, { immediate: true });
                }
            });
        },
        close: function close() {
            this.children.forEach(function (child) {
                child.toggle(false, { immediate: true });
            });
        },
        getChildWrapperStyle: function getChildWrapperStyle() {
            var _this2 = this;

            var _data = this.data,
                zIndex = _data.zIndex,
                direction = _data.direction;

            return this.getRect('.van-dropdown-menu').then(function (rect) {
                var _rect$top = rect.top,
                    top = _rect$top === undefined ? 0 : _rect$top,
                    _rect$bottom = rect.bottom,
                    bottom = _rect$bottom === undefined ? 0 : _rect$bottom;

                var offset = direction === 'down' ? bottom : _this2.windowHeight - top;
                var wrapperStyle = 'z-index: ' + zIndex + ';';
                if (direction === 'down') {
                    wrapperStyle += 'top: ' + (0, _utils.addUnit)(offset) + ';';
                } else {
                    wrapperStyle += 'bottom: ' + (0, _utils.addUnit)(offset) + ';';
                }
                return wrapperStyle;
            });
        },
        onTitleTap: function onTitleTap(event) {
            var _this3 = this;

            var index = event.currentTarget.dataset.index;

            var child = this.children[index];
            if (!child.data.disabled) {
                ARRAY.forEach(function (menuItem) {
                    if (menuItem && menuItem.data.closeOnClickOutside && menuItem !== _this3) {
                        menuItem.close();
                    }
                });
                this.toggleItem(index);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkFSUkFZIiwiZmllbGQiLCJyZWxhdGlvbiIsIm5hbWUiLCJ0eXBlIiwibGlua2VkIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJwdXNoIiwidXBkYXRlSXRlbUxpc3REYXRhIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJjaGlsZCIsInByb3BzIiwiYWN0aXZlQ29sb3IiLCJTdHJpbmciLCJvYnNlcnZlciIsIm92ZXJsYXkiLCJCb29sZWFuIiwidmFsdWUiLCJ6SW5kZXgiLCJOdW1iZXIiLCJkdXJhdGlvbiIsImRpcmVjdGlvbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJjbG9zZU9uQ2xpY2tPdXRzaWRlIiwiZGF0YSIsIml0ZW1MaXN0RGF0YSIsImJlZm9yZUNyZWF0ZSIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dIZWlnaHQiLCJkZXN0cm95ZWQiLCJpdGVtIiwibWV0aG9kcyIsInNldERhdGEiLCJtYXAiLCJ1cGRhdGVDaGlsZHJlbkRhdGEiLCJmb3JFYWNoIiwidXBkYXRlRGF0YUZyb21QYXJlbnQiLCJ0b2dnbGVJdGVtIiwiYWN0aXZlIiwiaW5kZXgiLCJzaG93UG9wdXAiLCJ0b2dnbGUiLCJpbW1lZGlhdGUiLCJjbG9zZSIsImdldENoaWxkV3JhcHBlclN0eWxlIiwiZ2V0UmVjdCIsInRoZW4iLCJyZWN0IiwidG9wIiwiYm90dG9tIiwib2Zmc2V0Iiwid3JhcHBlclN0eWxlIiwib25UaXRsZVRhcCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJkaXNhYmxlZCIsIm1lbnVJdGVtIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLElBQUlBLFFBQVEsRUFBWjtBQUNBLDhCQUFjO0FBQ1ZDLFdBQU8sSUFERztBQUVWQyxjQUFVO0FBQ05DLGNBQU0sZUFEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1gsaUJBQUtDLFFBQUwsQ0FBY0MsSUFB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ZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgYWRkVW5pdCB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5sZXQgQVJSQVkgPSBbXTtcblZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdkcm9wZG93bi1pdGVtJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbUxpc3REYXRhKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkKHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQgIT09IHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1MaXN0RGF0YSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBhY3RpdmVDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbkRhdGEnXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW5EYXRhJ1xuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxMFxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDIwMCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW5EYXRhJ1xuICAgICAgICB9LFxuICAgICAgICBkaXJlY3Rpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnZG93bicsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuRGF0YSdcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VPbkNsaWNrT3ZlcmxheToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbkRhdGEnXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlT25DbGlja091dHNpZGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGl0ZW1MaXN0RGF0YTogW11cbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyB3aW5kb3dIZWlnaHQgfSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93SGVpZ2h0O1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIEFSUkFZLnB1c2godGhpcyk7XG4gICAgfSxcbiAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgIEFSUkFZID0gQVJSQVkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcyk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUl0ZW1MaXN0RGF0YSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgaXRlbUxpc3REYXRhOiB0aGlzLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLmRhdGEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW5EYXRhKCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZURhdGFGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlSXRlbShhY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHNob3dQb3B1cCB9ID0gaXRlbS5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNob3dQb3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRvZ2dsZShmYWxzZSwgeyBpbW1lZGlhdGU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLnRvZ2dsZShmYWxzZSwgeyBpbW1lZGlhdGU6IHRydWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2hpbGRXcmFwcGVyU3R5bGUoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHpJbmRleCwgZGlyZWN0aW9uIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWN0KCcudmFuLWRyb3Bkb3duLW1lbnUnKS50aGVuKChyZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0b3AgPSAwLCBib3R0b20gPSAwIH0gPSByZWN0O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGRpcmVjdGlvbiA9PT0gJ2Rvd24nID8gYm90dG9tIDogdGhpcy53aW5kb3dIZWlnaHQgLSB0b3A7XG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXJTdHlsZSA9IGB6LWluZGV4OiAke3pJbmRleH07YDtcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlICs9IGB0b3A6ICR7YWRkVW5pdChvZmZzZXQpfTtgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlICs9IGBib3R0b206ICR7YWRkVW5pdChvZmZzZXQpfTtgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlclN0eWxlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVGl0bGVUYXAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICBpZiAoIWNoaWxkLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBBUlJBWS5mb3JFYWNoKG1lbnVJdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lbnVJdGVtICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbS5kYXRhLmNsb3NlT25DbGlja091dHNpZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19