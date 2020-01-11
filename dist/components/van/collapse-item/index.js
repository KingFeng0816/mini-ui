'use strict';

var _component = require('./../common/component.js');

var nextTick = function nextTick() {
    return new Promise(function (resolve) {
        return setTimeout(resolve, 20);
    });
};
(0, _component.VantComponent)({
    classes: ['title-class', 'content-class'],
    relation: {
        name: 'collapse',
        type: 'ancestor',
        linked: function linked(parent) {
            this.parent = parent;
        }
    },
    props: {
        name: null,
        title: null,
        value: null,
        icon: String,
        label: String,
        disabled: Boolean,
        clickable: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        isLink: {
            type: Boolean,
            value: true
        }
    },
    data: {
        contentHeight: 0,
        expanded: false,
        transition: false
    },
    mounted: function mounted() {
        var _this = this;

        this.updateExpanded().then(nextTick).then(function () {
            var data = { transition: true };
            if (_this.data.expanded) {
                data.contentHeight = 'auto';
            }
            _this.setData(data);
        });
    },

    methods: {
        updateExpanded: function updateExpanded() {
            if (!this.parent) {
                return Promise.resolve();
            }
            var _parent$data = this.parent.data,
                value = _parent$data.value,
                accordion = _parent$data.accordion;
            var _parent$children = this.parent.children,
                children = _parent$children === undefined ? [] : _parent$children;
            var name = this.data.name;

            var index = children.indexOf(this);
            var currentName = name == null ? index : name;
            var expanded = accordion ? value === currentName : (value || []).some(function (name) {
                return name === currentName;
            });
            var stack = [];
            if (expanded !== this.data.expanded) {
                stack.push(this.updateStyle(expanded));
            }
            stack.push(this.set({ index: index, expanded: expanded }));
            return Promise.all(stack);
        },
        updateStyle: function updateStyle(expanded) {
            var _this2 = this;

            return this.getRect('.van-collapse-item__content').then(function (rect) {
                return rect.height;
            }).then(function (height) {
                if (expanded) {
                    return _this2.set({
                        contentHeight: height ? height + 'px' : 'auto'
                    });
                }
                return _this2.set({ contentHeight: height + 'px' }).then(nextTick).then(function () {
                    return _this2.set({ contentHeight: 0 });
                });
            });
        },
        onClick: function onClick() {
            if (this.data.disabled) {
                return;
            }
            var _data = this.data,
                name = _data.name,
                expanded = _data.expanded;

            var index = this.parent.children.indexOf(this);
            var currentName = name == null ? index : name;
            this.parent.switch(currentName, !expanded);
        },
        onTransitionEnd: function onTransitionEnd() {
            if (this.data.expanded) {
                this.setData({
                    contentHeight: 'auto'
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm5leHRUaWNrIiwiUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiY2xhc3NlcyIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJwYXJlbnQiLCJwcm9wcyIsInRpdGxlIiwidmFsdWUiLCJpY29uIiwiU3RyaW5nIiwibGFiZWwiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJjbGlja2FibGUiLCJib3JkZXIiLCJpc0xpbmsiLCJkYXRhIiwiY29udGVudEhlaWdodCIsImV4cGFuZGVkIiwidHJhbnNpdGlvbiIsIm1vdW50ZWQiLCJ1cGRhdGVFeHBhbmRlZCIsInRoZW4iLCJzZXREYXRhIiwibWV0aG9kcyIsImFjY29yZGlvbiIsImNoaWxkcmVuIiwiaW5kZXgiLCJpbmRleE9mIiwiY3VycmVudE5hbWUiLCJzb21lIiwic3RhY2siLCJwdXNoIiwidXBkYXRlU3R5bGUiLCJzZXQiLCJhbGwiLCJnZXRSZWN0IiwicmVjdCIsImhlaWdodCIsIm9uQ2xpY2siLCJzd2l0Y2giLCJvblRyYW5zaXRpb25FbmQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsSUFBTUEsV0FBVyxTQUFYQSxRQUFXO0FBQUEsV0FBTSxJQUFJQyxPQUFKLENBQVk7QUFBQSxlQUFXQyxXQUFXQyxPQUFYLEVBQW9CLEVBQXBCLENBQVg7QUFBQSxLQUFaLENBQU47QUFBQSxDQUFqQjtBQUNBLDhCQUFjO0FBQ1ZDLGFBQVMsQ0FBQyxhQUFELEVBQWdCLGVBQWhCLENBREM7QUFFVkMsY0FBVTtBQUNOQyxjQUFNLFVBREE7QUFFTkMsY0FBTSxVQUZBO0FBR05DLGNBSE0sa0JBR0NDLE1BSEQsRUFHUztBQUNYLGlCQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDtBQUxLLEtBRkE7QUFTVkMsV0FBTztBQUNISixjQUFNLElBREg7QUFFSEssZUFBTyxJQUZKO0FBR0hDLGVBQU8sSUFISjtBQUlIQyxjQUFNQyxNQUpIO0FBS0hDLGVBQU9ELE1B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d0JBSXFCLEtBQUtLLElBSjFCO0FBQUEsZ0JBSUVmLElBSkYsU0FJRUEsSUFKRjtBQUFBLGdCQUlRaUIsUUFKUixTQUlRQSxRQUpSOztBQUtOLGdCQUFNUyxRQUFRLEtBQUt2QixNQUFMLENBQVlzQixRQUFaLENBQXFCRSxPQUFyQixDQUE2QixJQUE3QixDQUFkO0FBQ0EsZ0JBQU1DLGNBQWM1QixRQUFRLElBQVIsR0FBZTBCLEtBQWYsR0FBdUIxQixJQUEzQztBQUNBLGlCQUFLRyxNQUFMLENBQVlvQyxNQUFaLENBQW1CWCxXQUFuQixFQUFnQyxDQUFDWCxRQUFqQztBQUNILFNBMUNJO0FBMkNMdUIsdUJBM0NLLDZCQTJDYTtBQUNkLGdCQUFJLEtBQUt6QixJQUFMLENBQVVFLFFBQWQsRUFBd0I7QUFDcEIscUJBQUtLLE9BQUwsQ0FBYTtBQUNUTixtQ0FBZTtBQUROLGlCQUFiO0FBR0g7QUFDSjtBQWpESTtBQTFDQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuY29uc3QgbmV4dFRpY2sgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjApKTtcblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFsndGl0bGUtY2xhc3MnLCAnY29udGVudC1jbGFzcyddLFxuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdjb2xsYXBzZScsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXG4gICAgICAgIGxpbmtlZChwYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGNsaWNrYWJsZTogQm9vbGVhbixcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgaXNMaW5rOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBjb250ZW50SGVpZ2h0OiAwLFxuICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgIHRyYW5zaXRpb246IGZhbHNlXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUV4cGFuZGVkKClcbiAgICAgICAgICAgIC50aGVuKG5leHRUaWNrKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHsgdHJhbnNpdGlvbjogdHJ1ZSB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIGRhdGEuY29udGVudEhlaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUV4cGFuZGVkKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIGFjY29yZGlvbiB9ID0gdGhpcy5wYXJlbnQuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROYW1lID0gbmFtZSA9PSBudWxsID8gaW5kZXggOiBuYW1lO1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBhY2NvcmRpb25cbiAgICAgICAgICAgICAgICA/IHZhbHVlID09PSBjdXJyZW50TmFtZVxuICAgICAgICAgICAgICAgIDogKHZhbHVlIHx8IFtdKS5zb21lKChuYW1lKSA9PiBuYW1lID09PSBjdXJyZW50TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICAgICAgaWYgKGV4cGFuZGVkICE9PSB0aGlzLmRhdGEuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHRoaXMudXBkYXRlU3R5bGUoZXhwYW5kZWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5zZXQoeyBpbmRleCwgZXhwYW5kZWQgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlU3R5bGUoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlY3QoJy52YW4tY29sbGFwc2UtaXRlbV9fY29udGVudCcpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlY3QpID0+IHJlY3QuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIC50aGVuKChoZWlnaHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRIZWlnaHQ6IGhlaWdodCA/IGAke2hlaWdodH1weGAgOiAnYXV0bydcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldCh7IGNvbnRlbnRIZWlnaHQ6IGAke2hlaWdodH1weGAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obmV4dFRpY2spXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0KHsgY29udGVudEhlaWdodDogMCB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIGV4cGFuZGVkIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TmFtZSA9IG5hbWUgPT0gbnVsbCA/IGluZGV4IDogbmFtZTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnN3aXRjaChjdXJyZW50TmFtZSwgIWV4cGFuZGVkKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25UcmFuc2l0aW9uRW5kKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRIZWlnaHQ6ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=