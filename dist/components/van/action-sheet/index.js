'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        description: String,
        round: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        closeOnClickAction: {
            type: Boolean,
            value: true
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onSelect: function onSelect(event) {
            var index = event.currentTarget.dataset.index;

            var item = this.data.actions[index];
            if (item && !item.disabled && !item.loading) {
                this.$emit('select', item);
                if (this.data.closeOnClickAction) {
                    this.onClose();
                }
            }
        },
        onCancel: function onCancel() {
            this.$emit('cancel');
        },
        onClose: function onClose() {
            this.$emit('close');
        },
        onClickOverlay: function onClickOverlay() {
            this.$emit('click-overlay');
            this.onClose();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJ0aXRsZSIsIlN0cmluZyIsImNhbmNlbFRleHQiLCJkZXNjcmlwdGlvbiIsInJvdW5kIiwidHlwZSIsInZhbHVlIiwiekluZGV4IiwiTnVtYmVyIiwiYWN0aW9ucyIsIkFycmF5Iiwib3ZlcmxheSIsImNsb3NlT25DbGlja092ZXJsYXkiLCJjbG9zZU9uQ2xpY2tBY3Rpb24iLCJzYWZlQXJlYUluc2V0Qm90dG9tIiwibWV0aG9kcyIsIm9uU2VsZWN0IiwiZXZlbnQiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXRlbSIsImRhdGEiLCJkaXNhYmxlZCIsImxvYWRpbmciLCIkZW1pdCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIm9uQ2xpY2tPdmVybGF5Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU87QUFDSEMsY0FBTUMsT0FESDtBQUVIQyxlQUFPQyxNQUZKO0FBR0hDLG9CQUFZRCxNQUhUO0FBSUhFLHFCQUFhRixNQUpWO0FBS0hHLGVBQU87QUFDSEMsa0JBQU1OLE9BREg7QUFFSE8sbUJBQU87QUFGSixTQUxKO0FBU0hDLGdCQUFRO0FBQ0pGLGtCQUFNRyxNQURGO0FBRUpGLG1CQUFPO0FBRkgsU0FUTDtBQWFIRyxpQkFBUztBQUNMSixrQkFBTUssS0FERDtBQUVMSixtQkFBTztBQUZGLFNBYk47QUFpQkhLLGlCQUFTO0FBQ0xOLGtCQUFNTixPQUREO0FBRUxPLG1CQUFPO0FBRkYsU0FqQk47QUFxQkhNLDZCQUFxQjtBQUNqQlAsa0JBQU1OLE9BRFc7QUFFakJPLG1CQUFPO0FBRlUsU0FyQmxCO0FBeUJITyw0QkFBb0I7QUFDaEJSLGtCQUFNTixPQURVO0FBRWhCTyxtQkFBTztBQUZTLFNBekJqQjtBQTZCSFEsNkJBQXFCO0FBQ2pCVCxrQkFBTU4sT0FEVztBQUVqQk8sbUJBQU87QUFGVTtBQTdCbEIsS0FERztBQW1DVlMsYUFBUztBQUNMQyxnQkFESyxvQkFDSUMsS0FESixFQUNXO0FBQUEsZ0JBQ0pDLEtBREksR0FDTUQsTUFBTUUsYUFBTixDQUFvQkMsT0FEMUIsQ0FDSkYsS0FESTs7QUFFWixnQkFBTUcsT0FBTyxLQUFLQyxJQUFMLENBQVViLE9BQVYsQ0FBa0JTLEtBQWxCLENBQWI7QUFDQSxnQkFBSUcsUUFBUSxDQUFDQSxLQUFLRSxRQUFkLElBQTBCLENBQUNGLEtBQUtHLE9BQXBDLEVBQTZDO0FBQ3pDLHFCQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkosSUFBckI7QUFDQSxvQkFBSSxLQUFLQyxJQUFMLENBQVVULGtCQUFkLEVBQWtDO0FBQzlCLHlCQUFLYSxPQUFMO0FBQ0g7QUFDSjtBQUNKLFNBVkk7QUFXTEMsZ0JBWEssc0JBV007QUFDUCxpQkFBS0YsS0FBTCxDQUFXLFFBQVg7QUFDSCxTQWJJO0FBY0xDLGVBZEsscUJBY0s7QUFDTixpQkFBS0QsS0FBTCxDQUFXLE9BQVg7QUFDSCxTQWhCSTtBQWlCTEcsc0JBakJLLDRCQWlCWTtBQUNiLGlCQUFLSCxLQUFMLENBQVcsZUFBWDtBQUNBLGlCQUFLQyxPQUFMO0FBQ0g7QUFwQkk7QUFuQ0MsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IEJvb2xlYW4sXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgIGNhbmNlbFRleHQ6IFN0cmluZyxcbiAgICAgICAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgICAgICAgcm91bmQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICB2YWx1ZTogW11cbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlT25DbGlja092ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZU9uQ2xpY2tBY3Rpb246IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzYWZlQXJlYUluc2V0Qm90dG9tOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvblNlbGVjdChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZGF0YS5hY3Rpb25zW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChpdGVtICYmICFpdGVtLmRpc2FibGVkICYmICFpdGVtLmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBpdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNsb3NlT25DbGlja0FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2FuY2VsKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrT3ZlcmxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLW92ZXJsYXknKTtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=