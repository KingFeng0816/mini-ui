'use strict';

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
    mixins: [_button.button, _openType.openType],
    classes: ['hover-class', 'loading-class'],
    data: {
        style: ''
    },
    props: {
        icon: String,
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        customStyle: String,
        loadingType: {
            type: String,
            value: 'circular'
        },
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        loadingSize: {
            type: String,
            value: '20px'
        },
        color: {
            type: String,
            observer: function observer(color) {
                var style = '';
                if (color) {
                    style += 'color: ' + (this.data.plain ? color : 'white') + ';';
                    if (!this.data.plain) {
                        // Use background instead of backgroundColor to make linear-gradient work
                        style += 'background: ' + color + ';';
                    }
                    // hide border when color is linear-gradient
                    if (color.indexOf('gradient') !== -1) {
                        style += 'border: 0;';
                    } else {
                        style += 'border-color: ' + color + ';';
                    }
                }
                if (style !== this.data.style) {
                    this.setData({ style: style });
                }
            }
        }
    },
    methods: {
        onClick: function onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.$emit('click');
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImJ1dHRvbiIsIm9wZW5UeXBlIiwiY2xhc3NlcyIsImRhdGEiLCJzdHlsZSIsInByb3BzIiwiaWNvbiIsIlN0cmluZyIsInBsYWluIiwiQm9vbGVhbiIsImJsb2NrIiwicm91bmQiLCJzcXVhcmUiLCJsb2FkaW5nIiwiaGFpcmxpbmUiLCJkaXNhYmxlZCIsImxvYWRpbmdUZXh0IiwiY3VzdG9tU3R5bGUiLCJsb2FkaW5nVHlwZSIsInR5cGUiLCJ2YWx1ZSIsInNpemUiLCJsb2FkaW5nU2l6ZSIsImNvbG9yIiwib2JzZXJ2ZXIiLCJpbmRleE9mIiwic2V0RGF0YSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsWUFBUSxDQUFDQyxjQUFELEVBQVNDLGtCQUFULENBREU7QUFFVkMsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsZUFBaEIsQ0FGQztBQUdWQyxVQUFNO0FBQ0ZDLGVBQU87QUFETCxLQUhJO0FBTVZDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxlQUFPQyxPQUZKO0FBR0hDLGVBQU9ELE9BSEo7QUFJSEUsZUFBT0YsT0FKSjtBQUtIRyxnQkFBUUgsT0FMTDtBQU1ISSxpQkFBU0osT0FOTjtBQU9ISyxrQkFBVUwsT0FQUDtBQVFITSxrQkFBVU4sT0FSUDtBQVNITyxxQkFBYVQsTUFUVjtBQVVIVSxxQkFBYVYsTUFWVjtBQVdIVyxxQkFBYTtBQUNUQyxrQkFBTVosTUFERztBQUVUYSxtQkFBTztBQUZFLFNBWFY7QUFlSEQsY0FBTTtBQUNGQSxrQkFBTVosTUFESjtBQUVGYSxtQkFBTztBQUZMLFNBZkg7QUFtQkhDLGNBQU07QUFDRkYsa0JBQU1aLE1BREo7QUFFRmEsbUJBQU87QUFGTCxTQW5CSDtBQXVCSEUscUJBQWE7QUFDVEgsa0JBQU1aLE1BREc7QUFFVGEsbUJBQU87QUFGRSxTQXZCVjtBQTJCSEcsZUFBTztBQUNISixrQkFBTVosTUFESDtBQUVIaUIsb0JBRkcsb0JBRU1ELEtBRk4sRUFFYTtBQUNaLG9CQUFJbkIsUUFBUSxFQUFaO0FBQ0Esb0JBQUltQixLQUFKLEVBQVc7QUFDUG5CLDBDQUFtQixLQUFLRCxJQUFMLENBQVVLLEtBQVYsR0FBa0JlLEtBQWxCLEdBQTBCLE9BQTdDO0FBQ0Esd0JBQUksQ0FBQyxLQUFLcEIsSUFBTCxDQUFVSyxLQUFmLEVBQXNCO0FBQ2xCO0FBQ0FKLGtEQUF3Qm1CLEtBQXhCO0FBQ0g7QUFDRDtBQUNBLHdCQUFJQSxNQUFNRSxPQUFOLENBQWMsVUFBZCxNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQ2xDckIsaUNBQVMsWUFBVDtBQUNILHFCQUZELE1BR0s7QUFDREEsb0RBQTBCbUIsS0FBMUI7QUFDSDtBQUNKO0FBQ0Qsb0JBQUluQixVQUFVLEtBQUtELElBQUwsQ0FBVUMsS0FBeEIsRUFBK0I7QUFDM0IseUJBQUtzQixPQUFMLENBQWEsRUFBRXRCLFlBQUYsRUFBYjtBQUNIO0FBQ0o7QUFyQkU7QUEzQkosS0FORztBQXlEVnVCLGFBQVM7QUFDTEMsZUFESyxxQkFDSztBQUNOLGdCQUFJLENBQUMsS0FBS3pCLElBQUwsQ0FBVVksUUFBWCxJQUF1QixDQUFDLEtBQUtaLElBQUwsQ0FBVVUsT0FBdEMsRUFBK0M7QUFDM0MscUJBQUtnQixLQUFMLENBQVcsT0FBWDtBQUNIO0FBQ0o7QUFMSTtBQXpEQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi4vbWl4aW5zL2J1dHRvbic7XG5pbXBvcnQgeyBvcGVuVHlwZSB9IGZyb20gJy4uL21peGlucy9vcGVuLXR5cGUnO1xuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbYnV0dG9uLCBvcGVuVHlwZV0sXG4gICAgY2xhc3NlczogWydob3Zlci1jbGFzcycsICdsb2FkaW5nLWNsYXNzJ10sXG4gICAgZGF0YToge1xuICAgICAgICBzdHlsZTogJydcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgcGxhaW46IEJvb2xlYW4sXG4gICAgICAgIGJsb2NrOiBCb29sZWFuLFxuICAgICAgICByb3VuZDogQm9vbGVhbixcbiAgICAgICAgc3F1YXJlOiBCb29sZWFuLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBoYWlybGluZTogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmdUZXh0OiBTdHJpbmcsXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgIGxvYWRpbmdUeXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2NpcmN1bGFyJ1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2RlZmF1bHQnXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbm9ybWFsJ1xuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nU2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcyMHB4J1xuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgb2JzZXJ2ZXIoY29sb3IpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgKz0gYGNvbG9yOiAke3RoaXMuZGF0YS5wbGFpbiA/IGNvbG9yIDogJ3doaXRlJ307YDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEucGxhaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSBiYWNrZ3JvdW5kIGluc3RlYWQgb2YgYmFja2dyb3VuZENvbG9yIHRvIG1ha2UgbGluZWFyLWdyYWRpZW50IHdvcmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICs9IGBiYWNrZ3JvdW5kOiAke2NvbG9yfTtgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgYm9yZGVyIHdoZW4gY29sb3IgaXMgbGluZWFyLWdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvci5pbmRleE9mKCdncmFkaWVudCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgKz0gJ2JvcmRlcjogMDsnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgKz0gYGJvcmRlci1jb2xvcjogJHtjb2xvcn07YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3R5bGUgIT09IHRoaXMuZGF0YS5zdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBzdHlsZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljaygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==