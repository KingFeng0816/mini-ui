'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

var _color = require('./../common/color.js');

function format(rate) {
    return Math.min(Math.max(rate, 0), 100);
}
var PERIMETER = 2 * Math.PI;
var BEGIN_ANGLE = -Math.PI / 2;
var STEP = 1;
(0, _component.VantComponent)({
    props: {
        text: String,
        lineCap: {
            type: String,
            value: 'round'
        },
        value: {
            type: Number,
            value: 0,
            observer: 'reRender'
        },
        speed: {
            type: Number,
            value: 50
        },
        size: {
            type: Number,
            value: 100,
            observer: 'setStyle'
        },
        fill: String,
        layerColor: {
            type: String,
            value: _color.WHITE
        },
        color: {
            type: [String, Object],
            value: _color.BLUE,
            observer: 'setHoverColor'
        },
        strokeWidth: {
            type: Number,
            value: 4
        },
        clockwise: {
            type: Boolean,
            value: true
        }
    },
    data: {
        style: 'width: 100px; height: 100px;',
        hoverColor: _color.BLUE
    },
    methods: {
        getContext: function getContext() {
            if (!this.ctx) {
                this.ctx = wx.createCanvasContext('van-circle', this);
            }
            return this.ctx;
        },
        setHoverColor: function setHoverColor() {
            var context = this.getContext();
            var _data = this.data,
                color = _data.color,
                size = _data.size;

            var hoverColor = color;
            if ((0, _utils.isObj)(color)) {
                var LinearColor = context.createLinearGradient(size, 0, 0, 0);
                Object.keys(color).sort(function (a, b) {
                    return parseFloat(a) - parseFloat(b);
                }).map(function (key) {
                    return LinearColor.addColorStop(parseFloat(key) / 100, color[key]);
                });
                hoverColor = LinearColor;
            }
            this.setData({ hoverColor: hoverColor });
        },
        setStyle: function setStyle() {
            var size = this.data.size;

            var style = 'width: ' + size + 'px; height: ' + size + 'px;';
            this.setData({ style: style });
        },
        presetCanvas: function presetCanvas(context, strokeStyle, beginAngle, endAngle, fill) {
            var _data2 = this.data,
                strokeWidth = _data2.strokeWidth,
                lineCap = _data2.lineCap,
                clockwise = _data2.clockwise,
                size = _data2.size;

            var position = size / 2;
            var radius = position - strokeWidth / 2;
            context.setStrokeStyle(strokeStyle);
            context.setLineWidth(strokeWidth);
            context.setLineCap(lineCap);
            context.beginPath();
            context.arc(position, position, radius, beginAngle, endAngle, !clockwise);
            context.stroke();
            if (fill) {
                context.setFillStyle(fill);
                context.fill();
            }
        },
        renderLayerCircle: function renderLayerCircle(context) {
            var _data3 = this.data,
                layerColor = _data3.layerColor,
                fill = _data3.fill;

            this.presetCanvas(context, layerColor, 0, PERIMETER, fill);
        },
        renderHoverCircle: function renderHoverCircle(context, formatValue) {
            var _data4 = this.data,
                clockwise = _data4.clockwise,
                hoverColor = _data4.hoverColor;
            // 结束角度

            var progress = PERIMETER * (formatValue / 100);
            var endAngle = clockwise ? BEGIN_ANGLE + progress : 3 * Math.PI - (BEGIN_ANGLE + progress);
            this.presetCanvas(context, hoverColor, BEGIN_ANGLE, endAngle);
        },
        drawCircle: function drawCircle(currentValue) {
            var context = this.getContext();
            var size = this.data.size;

            context.clearRect(0, 0, size, size);
            this.renderLayerCircle(context);
            var formatValue = format(currentValue);
            if (formatValue !== 0) {
                this.renderHoverCircle(context, formatValue);
            }
            context.draw();
        },
        reRender: function reRender() {
            var _this = this;

            // tofector 动画暂时没有想到好的解决方案
            var _data5 = this.data,
                value = _data5.value,
                speed = _data5.speed;

            if (speed <= 0 || speed > 1000) {
                this.drawCircle(value);
                return;
            }
            this.clearInterval();
            this.currentValue = this.currentValue || 0;
            this.interval = setInterval(function () {
                if (_this.currentValue !== value) {
                    if (_this.currentValue < value) {
                        _this.currentValue += STEP;
                    } else {
                        _this.currentValue -= STEP;
                    }
                    _this.drawCircle(_this.currentValue);
                } else {
                    _this.clearInterval();
                }
            }, 1000 / speed);
        },
        clearInterval: function (_clearInterval) {
            function clearInterval() {
                return _clearInterval.apply(this, arguments);
            }

            clearInterval.toString = function () {
                return _clearInterval.toString();
            };

            return clearInterval;
        }(function () {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        })
    },
    created: function created() {
        var value = this.data.value;

        this.currentValue = value;
        this.drawCircle(value);
    },
    destroyed: function destroyed() {
        this.ctx = null;
        this.clearInterval();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZvcm1hdCIsInJhdGUiLCJNYXRoIiwibWluIiwibWF4IiwiUEVSSU1FVEVSIiwiUEkiLCJCRUdJTl9BTkdMRSIsIlNURVAiLCJwcm9wcyIsInRleHQiLCJTdHJpbmciLCJsaW5lQ2FwIiwidHlwZSIsInZhbHVlIiwiTnVtYmVyIiwib2JzZXJ2ZXIiLCJzcGVlZCIsInNpemUiLCJmaWxsIiwibGF5ZXJDb2xvciIsIldISVRFIiwiY29sb3IiLCJPYmplY3QiLCJCTFVFIiwic3Ryb2tlV2lkdGgiLCJjbG9ja3dpc2UiLCJCb29sZWFuIiwiZGF0YSIsInN0eWxlIiwiaG92ZXJDb2xvciIsIm1ldGhvZHMiLCJnZXRDb250ZXh0IiwiY3R4Iiwid3giLCJjcmVhdGVDYW52YXNDb250ZXh0Iiwic2V0SG92ZXJDb2xvciIsImNvbnRleHQiLCJMaW5lYXJDb2xvciIsImNyZWF0ZUxpbmVhckdyYWRpZW50Iiwia2V5cyIsInNvcnQiLCJhIiwiYiIsInBhcnNlRmxvYXQiLCJtYXAiLCJhZGRDb2xvclN0b3AiLCJrZXkiLCJzZXREYXRhIiwic2V0U3R5bGUiLCJwcmVzZXRDYW52YXMiLCJzdHJva2VTdHlsZSIsImJlZ2luQW5nbGUiLCJlbmRBbmdsZSIsInBvc2l0aW9uIiwicmFkaXVzIiwic2V0U3Ryb2tlU3R5bGUiLCJzZXRMaW5lV2lkdGgiLCJzZXRMaW5lQ2FwIiwiYmVnaW5QYXRoIiwiYXJjIiwic3Ryb2tlIiwic2V0RmlsbFN0eWxlIiwicmVuZGVyTGF5ZXJDaXJjbGUiLCJyZW5kZXJIb3ZlckNpcmNsZSIsImZvcm1hdFZhbHVlIiwicHJvZ3Jlc3MiLCJkcmF3Q2lyY2xlIiwiY3VycmVudFZhbHVlIiwiY2xlYXJSZWN0IiwiZHJhdyIsInJlUmVuZGVyIiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjcmVhdGVkIiwiZGVzdHJveWVkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztB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QixDQUF6QztBQUNBLGlCQUFLSyxRQUFMLEdBQWdCQyxZQUFZLFlBQU07QUFDOUIsb0JBQUksTUFBS04sWUFBTCxLQUFzQnRELEtBQTFCLEVBQWlDO0FBQzdCLHdCQUFJLE1BQUtzRCxZQUFMLEdBQW9CdEQsS0FBeEIsRUFBK0I7QUFDM0IsOEJBQUtzRCxZQUFMLElBQXFCNUQsSUFBckI7QUFDSCxxQkFGRCxNQUdLO0FBQ0QsOEJBQUs0RCxZQUFMLElBQXFCNUQsSUFBckI7QUFDSDtBQUNELDBCQUFLMkQsVUFBTCxDQUFnQixNQUFLQyxZQUFyQjtBQUNILGlCQVJELE1BU0s7QUFDRCwwQkFBS0ksYUFBTDtBQUNIO0FBQ0osYUFiZSxFQWFiLE9BQU92RCxLQWJNLENBQWhCO0FBY0gsU0F2Rkk7QUF3Rkx1RCxxQkF4Rks7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsc0JBd0ZXO0FBQ1osZ0JBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNmRCw4QkFBYyxLQUFLQyxRQUFuQjtBQUNBLHFCQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ0g7QUFDSixTQTdGSTtBQUFBLEtBNUNDO0FBMklWRSxXQTNJVSxxQkEySUE7QUFBQSxZQUNFN0QsS0FERixHQUNZLEtBQUtjLElBRGpCLENBQ0VkLEtBREY7O0FBRU4sYUFBS3NELFlBQUwsR0FBb0J0RCxLQUFwQjtBQUNBLGFBQUtxRCxVQUFMLENBQWdCckQsS0FBaEI7QUFDSCxLQS9JUztBQWdKVjhELGFBaEpVLHVCQWdKRTtBQUNSLGFBQUszQyxHQUFMLEdBQVcsSUFBWDtBQUNBLGFBQUt1QyxhQUFMO0FBQ0g7QUFuSlMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IEJMVUUsIFdISVRFIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yJztcbmZ1bmN0aW9uIGZvcm1hdChyYXRlKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHJhdGUsIDApLCAxMDApO1xufVxuY29uc3QgUEVSSU1FVEVSID0gMiAqIE1hdGguUEk7XG5jb25zdCBCRUdJTl9BTkdMRSA9IC1NYXRoLlBJIC8gMjtcbmNvbnN0IFNURVAgPSAxO1xuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGV4dDogU3RyaW5nLFxuICAgICAgICBsaW5lQ2FwOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3JvdW5kJ1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3JlUmVuZGVyJ1xuICAgICAgICB9LFxuICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDUwXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldFN0eWxlJ1xuICAgICAgICB9LFxuICAgICAgICBmaWxsOiBTdHJpbmcsXG4gICAgICAgIGxheWVyQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiBXSElURVxuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICAgICAgICAgIHZhbHVlOiBCTFVFLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRIb3ZlckNvbG9yJ1xuICAgICAgICB9LFxuICAgICAgICBzdHJva2VXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDRcbiAgICAgICAgfSxcbiAgICAgICAgY2xvY2t3aXNlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBzdHlsZTogJ3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAxMDBweDsnLFxuICAgICAgICBob3ZlckNvbG9yOiBCTFVFXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3R4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHggPSB3eC5jcmVhdGVDYW52YXNDb250ZXh0KCd2YW4tY2lyY2xlJywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdHg7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEhvdmVyQ29sb3IoKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yLCBzaXplIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBsZXQgaG92ZXJDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgaWYgKGlzT2JqKGNvbG9yKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IExpbmVhckNvbG9yID0gY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudChzaXplLCAwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb2xvcilcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYSkgLSBwYXJzZUZsb2F0KGIpKVxuICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBMaW5lYXJDb2xvci5hZGRDb2xvclN0b3AocGFyc2VGbG9hdChrZXkpIC8gMTAwLCBjb2xvcltrZXldKSk7XG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvciA9IExpbmVhckNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgaG92ZXJDb2xvciB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U3R5bGUoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHNpemUgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gYHdpZHRoOiAke3NpemV9cHg7IGhlaWdodDogJHtzaXplfXB4O2A7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBzdHlsZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlc2V0Q2FudmFzKGNvbnRleHQsIHN0cm9rZVN0eWxlLCBiZWdpbkFuZ2xlLCBlbmRBbmdsZSwgZmlsbCkge1xuICAgICAgICAgICAgY29uc3QgeyBzdHJva2VXaWR0aCwgbGluZUNhcCwgY2xvY2t3aXNlLCBzaXplIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHNpemUgLyAyO1xuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gcG9zaXRpb24gLSBzdHJva2VXaWR0aCAvIDI7XG4gICAgICAgICAgICBjb250ZXh0LnNldFN0cm9rZVN0eWxlKHN0cm9rZVN0eWxlKTtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZVdpZHRoKHN0cm9rZVdpZHRoKTtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZUNhcChsaW5lQ2FwKTtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LmFyYyhwb3NpdGlvbiwgcG9zaXRpb24sIHJhZGl1cywgYmVnaW5BbmdsZSwgZW5kQW5nbGUsICFjbG9ja3dpc2UpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRGaWxsU3R5bGUoZmlsbCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlckxheWVyQ2lyY2xlKGNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGF5ZXJDb2xvciwgZmlsbCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5wcmVzZXRDYW52YXMoY29udGV4dCwgbGF5ZXJDb2xvciwgMCwgUEVSSU1FVEVSLCBmaWxsKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVySG92ZXJDaXJjbGUoY29udGV4dCwgZm9ybWF0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2xvY2t3aXNlLCBob3ZlckNvbG9yIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICAvLyDnu5PmnZ/op5LluqZcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gUEVSSU1FVEVSICogKGZvcm1hdFZhbHVlIC8gMTAwKTtcbiAgICAgICAgICAgIGNvbnN0IGVuZEFuZ2xlID0gY2xvY2t3aXNlXG4gICAgICAgICAgICAgICAgPyBCRUdJTl9BTkdMRSArIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgOiAzICogTWF0aC5QSSAtIChCRUdJTl9BTkdMRSArIHByb2dyZXNzKTtcbiAgICAgICAgICAgIHRoaXMucHJlc2V0Q2FudmFzKGNvbnRleHQsIGhvdmVyQ29sb3IsIEJFR0lOX0FOR0xFLCBlbmRBbmdsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRyYXdDaXJjbGUoY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCB7IHNpemUgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNpemUsIHNpemUpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJMYXllckNpcmNsZShjb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdFZhbHVlID0gZm9ybWF0KGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoZm9ybWF0VmFsdWUgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvdmVyQ2lyY2xlKGNvbnRleHQsIGZvcm1hdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZHJhdygpO1xuICAgICAgICB9LFxuICAgICAgICByZVJlbmRlcigpIHtcbiAgICAgICAgICAgIC8vIHRvZmVjdG9yIOWKqOeUu+aaguaXtuayoeacieaDs+WIsOWlveeahOino+WGs+aWueahiFxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgc3BlZWQgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmIChzcGVlZCA8PSAwIHx8IHNwZWVkID4gMTAwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0NpcmNsZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGVhckludGVydmFsKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuY3VycmVudFZhbHVlIHx8IDA7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFZhbHVlIDwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlICs9IFNURVA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSAtPSBTVEVQO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0NpcmNsZSh0aGlzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwIC8gc3BlZWQpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhckludGVydmFsKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZHJhd0NpcmNsZSh2YWx1ZSk7XG4gICAgfSxcbiAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGVhckludGVydmFsKCk7XG4gICAgfVxufSk7XG4iXX0=