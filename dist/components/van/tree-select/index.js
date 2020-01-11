'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    classes: ['main-item-class', 'content-item-class', 'main-active-class', 'content-active-class', 'main-disabled-class', 'content-disabled-class'],
    props: {
        items: {
            type: Array,
            observer: 'updateSubItems'
        },
        activeId: null,
        mainActiveIndex: {
            type: Number,
            value: 0,
            observer: 'updateSubItems'
        },
        height: {
            type: [Number, String],
            value: 300,
            observer: 'updateHeight'
        },
        max: {
            type: Number,
            value: Infinity
        }
    },
    data: {
        subItems: []
    },
    created: function created() {
        this.updateHeight();
    },

    methods: {
        // 当一个子项被选择时
        onSelectItem: function onSelectItem(event) {
            var item = event.currentTarget.dataset.item;

            var isArray = Array.isArray(this.data.activeId);
            // 判断有没有超出右侧选择的最大数
            var isOverMax = isArray && this.data.activeId.length >= this.data.max;
            // 判断该项有没有被选中, 如果有被选中，则忽视是否超出的条件
            var isSelected = isArray ? this.data.activeId.indexOf(item.id) > -1 : this.data.activeId === item.id;
            if (!item.disabled && (!isOverMax || isSelected)) {
                this.$emit('click-item', item);
            }
        },

        // 当一个导航被点击时
        onClickNav: function onClickNav(event) {
            var index = event.detail;
            var item = this.data.items[index];
            if (!item.disabled) {
                this.$emit('click-nav', { index: index });
            }
        },

        // 更新子项列表
        updateSubItems: function updateSubItems() {
            var _data = this.data,
                items = _data.items,
                mainActiveIndex = _data.mainActiveIndex;

            var _ref = items[mainActiveIndex] || {},
                _ref$children = _ref.children,
                children = _ref$children === undefined ? [] : _ref$children;

            return this.set({ subItems: children });
        },
        updateHeight: function updateHeight() {
            this.setData({
                innerHeight: (0, _utils.addUnit)(this.data.height)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsIml0ZW1zIiwidHlwZSIsIkFycmF5Iiwib2JzZXJ2ZXIiLCJhY3RpdmVJZCIsIm1haW5BY3RpdmVJbmRleCIsIk51bWJlciIsInZhbHVlIiwiaGVpZ2h0IiwiU3RyaW5nIiwibWF4IiwiSW5maW5pdHkiLCJkYXRhIiwic3ViSXRlbXMiLCJjcmVhdGVkIiwidXBkYXRlSGVpZ2h0IiwibWV0aG9kcyIsIm9uU2VsZWN0SXRlbSIsImV2ZW50IiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNBcnJheSIsImlzT3Zlck1heCIsImxlbmd0aCIsImlzU2VsZWN0ZWQiLCJpbmRleE9mIiwiaWQiLCJkaXNhYmxlZCIsIiRlbWl0Iiwib25DbGlja05hdiIsImluZGV4IiwiZGV0YWlsIiwidXBkYXRlU3ViSXRlbXMiLCJjaGlsZHJlbiIsInNldCIsInNldERhdGEiLCJpbm5lckhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxhQUFTLENBQ0wsaUJBREssRUFFTCxvQkFGSyxFQUdMLG1CQUhLLEVBSUwsc0JBSkssRUFLTCxxQkFMSyxFQU1MLHdCQU5LLENBREM7QUFTVkMsV0FBTztBQUNIQyxlQUFPO0FBQ0hDLGtCQUFNQyxLQURIO0FBRUhDLHNCQUFVO0FBRlAsU0FESjtBQUtIQyxrQkFBVSxJQUxQO0FBTUhDLHlCQUFpQjtBQUNiSixrQkFBTUssTUFETztBQUViQyxtQkFBTyxDQUZNO0FBR2JKLHNCQUFVO0FBSEcsU0FOZDtBQVdISyxnQkFBUTtBQUNKUCxrQkFBTSxDQUFDSyxNQUFELEVBQVNHLE1BQVQsQ0FERjtBQUVKRixtQkFBTyxHQUZIO0FBR0pKLHNCQUFVO0FBSE4sU0FYTDtBQWdCSE8sYUFBSztBQUNEVCxrQkFBTUssTUFETDtBQUVEQyxtQkFBT0k7QUFGTjtBQWhCRixLQVRHO0FBOEJWQyxVQUFNO0FBQ0ZDLGtCQUFVO0FBRFIsS0E5Qkk7QUFpQ1ZDLFdBakNVLHFCQWlDQTtBQUNOLGFBQUtDLFlBQUw7QUFDSCxLQW5DUzs7QUFvQ1ZDLGFBQVM7QUFDTDtBQUNBQyxvQkFGSyx3QkFFUUMsS0FGUixFQUVlO0FBQUEsZ0JBQ1JDLElBRFEsR0FDQ0QsTUFBTUUsYUFBTixDQUFvQkMsT0FEckIsQ0FDUkYsSUFEUTs7QUFFaEIsZ0JBQU1HLFVBQVVwQixNQUFNb0IsT0FBTixDQUFjLEtBQUtWLElBQUwsQ0FBVVIsUUFBeEIsQ0FBaEI7QUFDQTtBQUNBLGdCQUFNbUIsWUFBWUQsV0FBVyxLQUFLVixJQUFMLENBQVVSLFFBQVYsQ0FBbUJvQixNQUFuQixJQUE2QixLQUFLWixJQUFMLENBQVVGLEdBQXBFO0FBQ0E7QUFDQSxnQkFBTWUsYUFBYUgsVUFDYixLQUFLVixJQUFMLENBQVVSLFFBQVYsQ0FBbUJzQixPQUFuQixDQUEyQlAsS0FBS1EsRUFBaEMsSUFBc0MsQ0FBQyxDQUQxQixHQUViLEtBQUtmLElBQUwsQ0FBVVIsUUFBVixLQUF1QmUsS0FBS1EsRUFGbEM7QUFHQSxnQkFBSSxDQUFDUixLQUFLUyxRQUFOLEtBQW1CLENBQUNMLFNBQUQsSUFBY0UsVUFBakMsQ0FBSixFQUFrRDtBQUM5QyxxQkFBS0ksS0FBTCxDQUFXLFlBQVgsRUFBeUJWLElBQXpCO0FBQ0g7QUFDSixTQWRJOztBQWVMO0FBQ0FXLGtCQWhCSyxzQkFnQk1aLEtBaEJOLEVBZ0JhO0FBQ2QsZ0JBQU1hLFFBQVFiLE1BQU1jLE1BQXBCO0FBQ0EsZ0JBQU1iLE9BQU8sS0FBS1AsSUFBTCxDQUFVWixLQUFWLENBQWdCK0IsS0FBaEIsQ0FBYjtBQUNBLGdCQUFJLENBQUNaLEtBQUtTLFFBQVYsRUFBb0I7QUFDaEIscUJBQUtDLEtBQUwsQ0FBVyxXQUFYLEVBQXdCLEVBQUVFLFlBQUYsRUFBeEI7QUFDSDtBQUNKLFNBdEJJOztBQXVCTDtBQUNBRSxzQkF4QkssNEJBd0JZO0FBQUEsd0JBQ3NCLEtBQUtyQixJQUQzQjtBQUFBLGdCQUNMWixLQURLLFNBQ0xBLEtBREs7QUFBQSxnQkFDRUssZUFERixTQUNFQSxlQURGOztBQUFBLHVCQUVhTCxNQUFNSyxlQUFOLEtBQTBCLEVBRnZDO0FBQUEscUNBRUw2QixRQUZLO0FBQUEsZ0JBRUxBLFFBRkssaUNBRU0sRUFGTjs7QUFHYixtQkFBTyxLQUFLQyxHQUFMLENBQVMsRUFBRXRCLFVBQVVxQixRQUFaLEVBQVQsQ0FBUDtBQUNILFNBNUJJO0FBNkJMbkIsb0JBN0JLLDBCQTZCVTtBQUNYLGlCQUFLcUIsT0FBTCxDQUFhO0FBQ1RDLDZCQUFhLG9CQUFRLEtBQUt6QixJQUFMLENBQVVKLE1BQWxCO0FBREosYUFBYjtBQUdIO0FBakNJO0FBcENDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhZGRVbml0IH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFtcbiAgICAgICAgJ21haW4taXRlbS1jbGFzcycsXG4gICAgICAgICdjb250ZW50LWl0ZW0tY2xhc3MnLFxuICAgICAgICAnbWFpbi1hY3RpdmUtY2xhc3MnLFxuICAgICAgICAnY29udGVudC1hY3RpdmUtY2xhc3MnLFxuICAgICAgICAnbWFpbi1kaXNhYmxlZC1jbGFzcycsXG4gICAgICAgICdjb250ZW50LWRpc2FibGVkLWNsYXNzJ1xuICAgIF0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVTdWJJdGVtcydcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlSWQ6IG51bGwsXG4gICAgICAgIG1haW5BY3RpdmVJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZVN1Ykl0ZW1zJ1xuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgICAgICB2YWx1ZTogMzAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVIZWlnaHQnXG4gICAgICAgIH0sXG4gICAgICAgIG1heDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IEluZmluaXR5XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc3ViSXRlbXM6IFtdXG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDlvZPkuIDkuKrlrZDpobnooqvpgInmi6nml7ZcbiAgICAgICAgb25TZWxlY3RJdGVtKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGl0ZW0gfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRoaXMuZGF0YS5hY3RpdmVJZCk7XG4gICAgICAgICAgICAvLyDliKTmlq3mnInmsqHmnInotoXlh7rlj7PkvqfpgInmi6nnmoTmnIDlpKfmlbBcbiAgICAgICAgICAgIGNvbnN0IGlzT3Zlck1heCA9IGlzQXJyYXkgJiYgdGhpcy5kYXRhLmFjdGl2ZUlkLmxlbmd0aCA+PSB0aGlzLmRhdGEubWF4O1xuICAgICAgICAgICAgLy8g5Yik5pat6K+l6aG55pyJ5rKh5pyJ6KKr6YCJ5LitLCDlpoLmnpzmnInooqvpgInkuK3vvIzliJnlv73op4bmmK/lkKbotoXlh7rnmoTmnaHku7ZcbiAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpc0FycmF5XG4gICAgICAgICAgICAgICAgPyB0aGlzLmRhdGEuYWN0aXZlSWQuaW5kZXhPZihpdGVtLmlkKSA+IC0xXG4gICAgICAgICAgICAgICAgOiB0aGlzLmRhdGEuYWN0aXZlSWQgPT09IGl0ZW0uaWQ7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQgJiYgKCFpc092ZXJNYXggfHwgaXNTZWxlY3RlZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljay1pdGVtJywgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOW9k+S4gOS4quWvvOiIquiiq+eCueWHu+aXtlxuICAgICAgICBvbkNsaWNrTmF2KGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50LmRldGFpbDtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGEuaXRlbXNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2stbmF2JywgeyBpbmRleCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8g5pu05paw5a2Q6aG55YiX6KGoXG4gICAgICAgIHVwZGF0ZVN1Ykl0ZW1zKCkge1xuICAgICAgICAgICAgY29uc3QgeyBpdGVtcywgbWFpbkFjdGl2ZUluZGV4IH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuID0gW10gfSA9IGl0ZW1zW21haW5BY3RpdmVJbmRleF0gfHwge307XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoeyBzdWJJdGVtczogY2hpbGRyZW4gfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgaW5uZXJIZWlnaHQ6IGFkZFVuaXQodGhpcy5kYXRhLmhlaWdodClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=