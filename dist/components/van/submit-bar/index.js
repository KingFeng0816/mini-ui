'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    classes: ['bar-class', 'price-class', 'button-class'],
    props: {
        tip: {
            type: null,
            observer: 'updateTip'
        },
        tipIcon: String,
        type: Number,
        price: {
            type: null,
            observer: 'updatePrice'
        },
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: '¥'
        },
        buttonType: {
            type: String,
            value: 'danger'
        },
        decimalLength: {
            type: Number,
            value: 2,
            observer: 'updatePrice'
        },
        suffixLabel: String,
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        updatePrice: function updatePrice() {
            var _data = this.data,
                price = _data.price,
                decimalLength = _data.decimalLength;

            this.setData({
                hasPrice: typeof price === 'number',
                priceStr: (price / 100).toFixed(decimalLength)
            });
        },
        updateTip: function updateTip() {
            this.setData({ hasTip: typeof this.data.tip === 'string' });
        },
        onSubmit: function onSubmit(event) {
            this.$emit('submit', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRpcCIsInR5cGUiLCJvYnNlcnZlciIsInRpcEljb24iLCJTdHJpbmciLCJOdW1iZXIiLCJwcmljZSIsImxhYmVsIiwibG9hZGluZyIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImJ1dHRvblRleHQiLCJjdXJyZW5jeSIsInZhbHVlIiwiYnV0dG9uVHlwZSIsImRlY2ltYWxMZW5ndGgiLCJzdWZmaXhMYWJlbCIsInNhZmVBcmVhSW5zZXRCb3R0b20iLCJtZXRob2RzIiwidXBkYXRlUHJpY2UiLCJkYXRhIiwic2V0RGF0YSIsImhhc1ByaWNlIiwicHJpY2VTdHIiLCJ0b0ZpeGVkIiwidXBkYXRlVGlwIiwiaGFzVGlwIiwib25TdWJtaXQiLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLGFBQVMsQ0FDTCxXQURLLEVBRUwsYUFGSyxFQUdMLGNBSEssQ0FEQztBQU1WQyxXQUFPO0FBQ0hDLGFBQUs7QUFDREMsa0JBQU0sSUFETDtBQUVEQyxzQkFBVTtBQUZULFNBREY7QUFLSEMsaUJBQVNDLE1BTE47QUFNSEgsY0FBTUksTUFOSDtBQU9IQyxlQUFPO0FBQ0hMLGtCQUFNLElBREg7QUFFSEMsc0JBQVU7QUFGUCxTQVBKO0FBV0hLLGVBQU9ILE1BWEo7QUFZSEksaUJBQVNDLE9BWk47QUFhSEMsa0JBQVVELE9BYlA7QUFjSEUsb0JBQVlQLE1BZFQ7QUFlSFEsa0JBQVU7QUFDTlgsa0JBQU1HLE1BREE7QUFFTlMsbUJBQU87QUFGRCxTQWZQO0FBbUJIQyxvQkFBWTtBQUNSYixrQkFBTUcsTUFERTtBQUVSUyxtQkFBTztBQUZDLFNBbkJUO0FBdUJIRSx1QkFBZTtBQUNYZCxrQkFBTUksTUFESztBQUVYUSxtQkFBTyxDQUZJO0FBR1hYLHNCQUFVO0FBSEMsU0F2Qlo7QUE0QkhjLHFCQUFhWixNQTVCVjtBQTZCSGEsNkJBQXFCO0FBQ2pCaEIsa0JBQU1RLE9BRFc7QUFFakJJLG1CQUFPO0FBRlU7QUE3QmxCLEtBTkc7QUF3Q1ZLLGFBQVM7QUFDTEMsbUJBREsseUJBQ1M7QUFBQSx3QkFDdUIsS0FBS0MsSUFENUI7QUFBQSxnQkFDRmQsS0FERSxTQUNGQSxLQURFO0FBQUEsZ0JBQ0tTLGFBREwsU0FDS0EsYUFETDs7QUFFVixpQkFBS00sT0FBTCxDQUFhO0FBQ1RDLDBCQUFVLE9BQU9oQixLQUFQLEtBQWlCLFFBRGxCO0FBRVRpQiwwQkFBVSxDQUFDakIsUUFBUSxHQUFULEVBQWNrQixPQUFkLENBQXNCVCxhQUF0QjtBQUZELGFBQWI7QUFJSCxTQVBJO0FBUUxVLGlCQVJLLHVCQVFPO0FBQ1IsaUJBQUtKLE9BQUwsQ0FBYSxFQUFFSyxRQUFRLE9BQU8sS0FBS04sSUFBTCxDQUFVcEIsR0FBakIsS0FBeUIsUUFBbkMsRUFBYjtBQUNILFNBVkk7QUFXTDJCLGdCQVhLLG9CQVdJQyxLQVhKLEVBV1c7QUFDWixpQkFBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJELE1BQU1FLE1BQTNCO0FBQ0g7QUFiSTtBQXhDQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogW1xuICAgICAgICAnYmFyLWNsYXNzJyxcbiAgICAgICAgJ3ByaWNlLWNsYXNzJyxcbiAgICAgICAgJ2J1dHRvbi1jbGFzcydcbiAgICBdLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRpcDoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlVGlwJ1xuICAgICAgICB9LFxuICAgICAgICB0aXBJY29uOiBTdHJpbmcsXG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcHJpY2U6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZVByaWNlJ1xuICAgICAgICB9LFxuICAgICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgYnV0dG9uVGV4dDogU3RyaW5nLFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICfCpSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uVHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdkYW5nZXInXG4gICAgICAgIH0sXG4gICAgICAgIGRlY2ltYWxMZW5ndGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAyLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVQcmljZSdcbiAgICAgICAgfSxcbiAgICAgICAgc3VmZml4TGFiZWw6IFN0cmluZyxcbiAgICAgICAgc2FmZUFyZWFJbnNldEJvdHRvbToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlUHJpY2UoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHByaWNlLCBkZWNpbWFsTGVuZ3RoIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGhhc1ByaWNlOiB0eXBlb2YgcHJpY2UgPT09ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIHByaWNlU3RyOiAocHJpY2UgLyAxMDApLnRvRml4ZWQoZGVjaW1hbExlbmd0aClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUaXAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBoYXNUaXA6IHR5cGVvZiB0aGlzLmRhdGEudGlwID09PSAnc3RyaW5nJyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3N1Ym1pdCcsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==