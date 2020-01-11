'use strict';

var _component = require('./../common/component.js');

var _link = require('./../mixins/link.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
    mixins: [_link.link, _button.button, _openType.openType],
    relation: {
        type: 'ancestor',
        name: 'goods-action',
        linked: function linked(parent) {
            this.parent = parent;
        }
    },
    props: {
        text: String,
        color: String,
        loading: Boolean,
        disabled: Boolean,
        type: {
            type: String,
            value: 'danger'
        }
    },
    mounted: function mounted() {
        this.updateStyle();
    },

    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        },
        updateStyle: function updateStyle() {
            var _parent$children = this.parent.children,
                children = _parent$children === undefined ? [] : _parent$children;

            var index = children.indexOf(this);
            this.setData({
                isFirst: index === 0,
                isLast: index === children.length - 1
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImxpbmsiLCJidXR0b24iLCJvcGVuVHlwZSIsInJlbGF0aW9uIiwidHlwZSIsIm5hbWUiLCJsaW5rZWQiLCJwYXJlbnQiLCJwcm9wcyIsInRleHQiLCJTdHJpbmciLCJjb2xvciIsImxvYWRpbmciLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJ2YWx1ZSIsIm1vdW50ZWQiLCJ1cGRhdGVTdHlsZSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCIsImp1bXBMaW5rIiwiY2hpbGRyZW4iLCJpbmRleCIsImluZGV4T2YiLCJzZXREYXRhIiwiaXNGaXJzdCIsImlzTGFzdCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxZQUFRLENBQUNDLFVBQUQsRUFBT0MsY0FBUCxFQUFlQyxrQkFBZixDQURFO0FBRVZDLGNBQVU7QUFDTkMsY0FBTSxVQURBO0FBRU5DLGNBQU0sY0FGQTtBQUdOQyxjQUhNLGtCQUdDQyxNQUhELEVBR1M7QUFDWCxpQkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7QUFMSyxLQUZBO0FBU1ZDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxlQUFPRCxNQUZKO0FBR0hFLGlCQUFTQyxPQUhOO0FBSUhDLGtCQUFVRCxPQUpQO0FBS0hULGNBQU07QUFDRkEsa0JBQU1NLE1BREo7QUFFRkssbUJBQU87QUFGTDtBQUxILEtBVEc7QUFtQlZDLFdBbkJVLHFCQW1CQTtBQUNOLGFBQUtDLFdBQUw7QUFDSCxLQXJCUzs7QUFzQlZDLGFBQVM7QUFDTEMsZUFESyxtQkFDR0MsS0FESCxFQUNVO0FBQ1gsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxNQUFNRSxNQUExQjtBQUNBLGlCQUFLQyxRQUFMO0FBQ0gsU0FKSTtBQUtMTixtQkFMSyx5QkFLUztBQUFBLG1DQUNnQixLQUFLVixNQURyQixDQUNGaUIsUUFERTtBQUFBLGdCQUNGQSxRQURFLG9DQUNTLEVBRFQ7O0FBRVYsZ0JBQU1DLFFBQVFELFNBQVNFLE9BQVQsQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLGlCQUFLQyxPQUFMLENBQWE7QUFDVEMseUJBQVNILFVBQVUsQ0FEVjtBQUVUSSx3QkFBUUosVUFBVUQsU0FBU00sTUFBVCxHQUFrQjtBQUYzQixhQUFiO0FBSUg7QUFaSTtBQXRCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgbGluayB9IGZyb20gJy4uL21peGlucy9saW5rJztcbmltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4uL21peGlucy9idXR0b24nO1xuaW1wb3J0IHsgb3BlblR5cGUgfSBmcm9tICcuLi9taXhpbnMvb3Blbi10eXBlJztcblZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW2xpbmssIGJ1dHRvbiwgb3BlblR5cGVdLFxuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXG4gICAgICAgIG5hbWU6ICdnb29kcy1hY3Rpb24nLFxuICAgICAgICBsaW5rZWQocGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGV4dDogU3RyaW5nLFxuICAgICAgICBjb2xvcjogU3RyaW5nLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdkYW5nZXInXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgdGhpcy5qdW1wTGluaygpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVTdHlsZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGlzRmlyc3Q6IGluZGV4ID09PSAwLFxuICAgICAgICAgICAgICAgIGlzTGFzdDogaW5kZXggPT09IGNoaWxkcmVuLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=