'use strict';

var _component = require('./../common/component.js');

var _link = require('./../mixins/link.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
    classes: ['icon-class', 'text-class'],
    mixins: [_link.link, _button.button, _openType.openType],
    props: {
        text: String,
        dot: Boolean,
        info: String,
        icon: String,
        disabled: Boolean,
        loading: Boolean
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwiYnV0dG9uIiwib3BlblR5cGUiLCJwcm9wcyIsInRleHQiLCJTdHJpbmciLCJkb3QiLCJCb29sZWFuIiwiaW5mbyIsImljb24iLCJkaXNhYmxlZCIsImxvYWRpbmciLCJtZXRob2RzIiwib25DbGljayIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiLCJqdW1wTGluayJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxhQUFTLENBQUMsWUFBRCxFQUFlLFlBQWYsQ0FEQztBQUVWQyxZQUFRLENBQUNDLFVBQUQsRUFBT0MsY0FBUCxFQUFlQyxrQkFBZixDQUZFO0FBR1ZDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxhQUFLQyxPQUZGO0FBR0hDLGNBQU1ILE1BSEg7QUFJSEksY0FBTUosTUFKSDtBQUtISyxrQkFBVUgsT0FMUDtBQU1ISSxpQkFBU0o7QUFOTixLQUhHO0FBV1ZLLGFBQVM7QUFDTEMsZUFESyxtQkFDR0MsS0FESCxFQUNVO0FBQ1gsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxNQUFNRSxNQUExQjtBQUNBLGlCQUFLQyxRQUFMO0FBQ0g7QUFKSTtBQVhDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsaW5rIH0gZnJvbSAnLi4vbWl4aW5zL2xpbmsnO1xuaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi4vbWl4aW5zL2J1dHRvbic7XG5pbXBvcnQgeyBvcGVuVHlwZSB9IGZyb20gJy4uL21peGlucy9vcGVuLXR5cGUnO1xuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogWydpY29uLWNsYXNzJywgJ3RleHQtY2xhc3MnXSxcbiAgICBtaXhpbnM6IFtsaW5rLCBidXR0b24sIG9wZW5UeXBlXSxcbiAgICBwcm9wczoge1xuICAgICAgICB0ZXh0OiBTdHJpbmcsXG4gICAgICAgIGRvdDogQm9vbGVhbixcbiAgICAgICAgaW5mbzogU3RyaW5nLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgIHRoaXMuanVtcExpbmsoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19