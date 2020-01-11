'use strict';

var _component = require('./../common/component.js');

var ROOT_ELEMENT = '.van-sticky';
(0, _component.VantComponent)({
    props: {
        zIndex: {
            type: Number,
            value: 99
        },
        offsetTop: {
            type: Number,
            value: 0,
            observer: 'observeContent'
        },
        disabled: {
            type: Boolean,
            observer: function observer(value) {
                if (!this.mounted) {
                    return;
                }
                value ? this.disconnectObserver() : this.initObserver();
            }
        },
        container: {
            type: null,
            observer: function observer(target) {
                if (typeof target !== 'function' || !this.data.height) {
                    return;
                }
                this.observeContainer();
            }
        }
    },
    data: {
        wrapStyle: '',
        containerStyle: ''
    },
    methods: {
        setStyle: function setStyle() {
            var _data = this.data,
                offsetTop = _data.offsetTop,
                height = _data.height,
                fixed = _data.fixed,
                zIndex = _data.zIndex;

            if (fixed) {
                this.setData({
                    wrapStyle: 'top: ' + offsetTop + 'px;',
                    containerStyle: 'height: ' + height + 'px; z-index: ' + zIndex + ';'
                });
            } else {
                this.setData({
                    wrapStyle: '',
                    containerStyle: ''
                });
            }
        },
        getContainerRect: function getContainerRect() {
            var nodesRef = this.data.container();
            return new Promise(function (resolve) {
                return nodesRef.boundingClientRect(resolve).exec();
            });
        },
        initObserver: function initObserver() {
            var _this = this;

            this.disconnectObserver();
            this.getRect(ROOT_ELEMENT).then(function (rect) {
                _this.setData({ height: rect.height });
                wx.nextTick(function () {
                    _this.observeContent();
                    _this.observeContainer();
                });
            });
        },
        disconnectObserver: function disconnectObserver(observerName) {
            if (observerName) {
                var observer = this[observerName];
                observer && observer.disconnect();
            } else {
                this.contentObserver && this.contentObserver.disconnect();
                this.containerObserver && this.containerObserver.disconnect();
            }
        },
        observeContent: function observeContent() {
            var _this2 = this;

            var offsetTop = this.data.offsetTop;

            this.disconnectObserver('contentObserver');
            var contentObserver = this.createIntersectionObserver({
                thresholds: [0, 1]
            });
            this.contentObserver = contentObserver;
            contentObserver.relativeToViewport({ top: -offsetTop });
            contentObserver.observe(ROOT_ELEMENT, function (res) {
                if (_this2.data.disabled) {
                    return;
                }
                _this2.setFixed(res.boundingClientRect.top);
            });
        },
        observeContainer: function observeContainer() {
            var _this3 = this;

            if (typeof this.data.container !== 'function') {
                return;
            }
            var height = this.data.height;

            this.getContainerRect().then(function (rect) {
                _this3.containerHeight = rect.height;
                _this3.disconnectObserver('containerObserver');
                var containerObserver = _this3.createIntersectionObserver({
                    thresholds: [0, 1]
                });
                _this3.containerObserver = containerObserver;
                containerObserver.relativeToViewport({
                    top: _this3.containerHeight - height
                });
                containerObserver.observe(ROOT_ELEMENT, function (res) {
                    if (_this3.data.disabled) {
                        return;
                    }
                    _this3.setFixed(res.boundingClientRect.top);
                });
            });
        },
        setFixed: function setFixed(top) {
            var _this4 = this;

            var _data2 = this.data,
                offsetTop = _data2.offsetTop,
                height = _data2.height;
            var containerHeight = this.containerHeight;

            var fixed = containerHeight && height ? top > height - containerHeight && top < offsetTop : top < offsetTop;
            this.$emit('scroll', {
                scrollTop: top,
                isFixed: fixed
            });
            this.setData({ fixed: fixed });
            wx.nextTick(function () {
                _this4.setStyle();
            });
        }
    },
    mounted: function mounted() {
        this.mounted = true;
        if (!this.data.disabled) {
            this.initObserver();
        }
    },
    destroyed: function destroyed() {
        this.disconnectObserver();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJPT1RfRUxFTUVOVCIsInByb3BzIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwib2Zmc2V0VG9wIiwib2JzZXJ2ZXIiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJtb3VudGVkIiwiZGlzY29ubmVjdE9ic2VydmVyIiwiaW5pdE9ic2VydmVyIiwiY29udGFpbmVyIiwidGFyZ2V0IiwiZGF0YSIsImhlaWdodCIsIm9ic2VydmVDb250YWluZXIiLCJ3cmFwU3R5bGUiLCJjb250YWluZXJTdHlsZSIsIm1ldGhvZHMiLCJzZXRTdHlsZSIsImZpeGVkIiwic2V0RGF0YSIsImdldENvbnRhaW5lclJlY3QiLCJub2Rlc1JlZiIsIlByb21pc2UiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZXNvbHZlIiwiZXhlYyIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsInd4IiwibmV4dFRpY2siLCJvYnNlcnZlQ29udGVudCIsIm9ic2VydmVyTmFtZSIsImRpc2Nvbm5lY3QiLCJjb250ZW50T2JzZXJ2ZXIiLCJjb250YWluZXJPYnNlcnZlciIsImNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyIiwidGhyZXNob2xkcyIsInJlbGF0aXZlVG9WaWV3cG9ydCIsInRvcCIsIm9ic2VydmUiLCJzZXRGaXhlZCIsInJlcyIsImNvbnRhaW5lckhlaWdodCIsIiRlbWl0Iiwic2Nyb2xsVG9wIiwiaXNGaXhlZCIsImRlc3Ryb3llZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSxJQUFNQSxlQUFlLGFBQXJCO0FBQ0EsOEJBQWM7QUFDVkMsV0FBTztBQUNIQyxnQkFBUTtBQUNKQyxrQkFBTUMsTUFERjtBQUVKQyxtQkFBTztBQUZILFNBREw7QUFLSEMsbUJBQVc7QUFDUEgsa0JBQU1DLE1BREM7QUFFUEMsbUJBQU8sQ0FGQTtBQUdQRSxzQkFBVTtBQUhILFNBTFI7QUFVSEMsa0JBQVU7QUFDTkwsa0JBQU1NLE9BREE7QUFFTkYsb0JBRk0sb0JBRUdGLEtBRkgsRUFFVTtBQUNaLG9CQUFJLENBQUMsS0FBS0ssT0FBVixFQUFtQjtBQUNmO0FBQ0g7QUFDREwsd0JBQVEsS0FBS00sa0JBQUwsRUFBUixHQUFvQyxLQUFLQyxZQUFMLEVBQXBDO0FBQ0g7QUFQSyxTQVZQO0FBbUJIQyxtQkFBVztBQUNQVixrQkFBTSxJQURDO0FBRVBJLG9CQUZPLG9CQUVFTyxNQUZGLEVBRVU7QUFDYixvQkFBSSxPQUFPQSxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLENBQUMsS0FBS0MsSUFBTCxDQUFVQyxNQUEvQyxFQUF1RDtBQUNuRDtBQUNIO0FBQ0QscUJBQUtDLGdCQUFMO0FBQ0g7QUFQTTtBQW5CUixLQURHO0FBOEJWRixVQUFNO0FBQ0ZHLG1CQUFXLEVBRFQ7QUFFRkMsd0JBQWdCO0FBRmQsS0E5Qkk7QUFrQ1ZDLGFBQVM7QUFDTEMsZ0JBREssc0JBQ007QUFBQSx3QkFDc0MsS0FBS04sSUFEM0M7QUFBQSxnQkFDQ1QsU0FERCxTQUNDQSxTQUREO0FBQUEsZ0JBQ1lVLE1BRFosU0FDWUEsTUFEWjtBQUFBLGdCQUNvQk0sS0FEcEIsU0FDb0JBLEtBRHBCO0FBQUEsZ0JBQzJCcEIsTUFEM0IsU0FDMkJBLE1BRDNCOztBQUVQLGdCQUFJb0IsS0FBSixFQUFXO0FBQ1AscUJBQUtDLE9BQUwsQ0FBYTtBQUNUTCx5Q0FBbUJaLFNBQW5CLFFBRFM7QUFFVGEsaURBQTJCSCxNQUEzQixxQkFBaURkLE1BQWpEO0FBRlMsaUJBQWI7QUFJSCxhQUxELE1BTUs7QUFDRCxxQkFBS3FCLE9BQUwsQ0FBYTtBQUNUTCwrQkFBVyxFQURGO0FBRVRDLG9DQUFnQjtBQUZQLGlCQUFiO0FBSUg7QUFDSixTQWZJO0FBZ0JMSyx3QkFoQkssOEJBZ0JjO0FBQ2YsZ0JBQU1DLFdBQVcsS0FBS1YsSUFBTCxDQUFVRixTQUFWLEVBQWpCO0FBQ0EsbUJBQU8sSUFBSWEsT0FBSixDQUFZO0FBQUEsdUJBQVdELFNBQVNFLGtCQUFULENBQTRCQyxPQUE1QixFQUFxQ0MsSUFBckMsRUFBWDtBQUFBLGFBQVosQ0FBUDtBQUNILFNBbkJJO0FBb0JMakIsb0JBcEJLLDBCQW9CVTtBQUFBOztBQUNYLGlCQUFLRCxrQkFBTDtBQUNBLGlCQUFLbUIsT0FBTCxDQUFhOUIsWUFBYixFQUEyQitCLElBQTNCLENBQWdDLFVBQUNDLElBQUQsRUFBVTtBQUN0QyxzQkFBS1QsT0FBTCxDQUFhLEVBQUVQLFFBQVFnQixLQUFLaEIsTUFBZixFQUFiO0FBQ0FpQixtQkFBR0MsUUFBSCxDQUFZLFlBQU07QUFDZCwwQkFBS0MsY0FBTDtBQUNBLDBCQUFLbEIsZ0JBQUw7QUFDSCxpQkFIRDtBQUlILGFBTkQ7QUFPSCxTQTdCSTtBQThCTE4sMEJBOUJLLDhCQThCY3lCLFlBOUJkLEVBOEI0QjtBQUM3QixnQkFBSUEsWUFBSixFQUFrQjtBQUNkLG9CQUFNN0IsV0FBVyxLQUFLNkIsWUFBTCxDQUFqQjtBQUNBN0IsNEJBQVlBLFNBQVM4QixVQUFULEVBQVo7QUFDSCxhQUhELE1BSUs7QUFDRCxxQkFBS0MsZUFBTCxJQUF3QixLQUFLQSxlQUFMLENBQXFCRCxVQUFyQixFQUF4QjtBQUNBLHFCQUFLRSxpQkFBTCxJQUEwQixLQUFLQSxpQkFBTCxDQUF1QkYsVUFBdkIsRUFBMUI7QUFDSDtBQUNKLFNBdkNJO0FBd0NMRixzQkF4Q0ssNEJBd0NZO0FBQUE7O0FBQUEsZ0JBQ0w3QixTQURLLEdBQ1MsS0FBS1MsSUFEZCxDQUNMVCxTQURLOztBQUViLGlCQUFLSyxrQkFBTCxDQUF3QixpQkFBeEI7QUFDQSxnQkFBTTJCLGtCQUFrQixLQUFLRSwwQkFBTCxDQUFnQztBQUNwREMsNEJBQVksQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUR3QyxhQUFoQyxDQUF4QjtBQUdBLGlCQUFLSCxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBQSw0QkFBZ0JJLGtCQUFoQixDQUFtQyxFQUFFQyxLQUFLLENBQUNyQyxTQUFSLEVBQW5DO0FBQ0FnQyw0QkFBZ0JNLE9BQWhCLENBQXdCNUMsWUFBeEIsRUFBc0MsZUFBTztBQUN6QyxvQkFBSSxPQUFLZSxJQUFMLENBQVVQLFFBQWQsRUFBd0I7QUFDcEI7QUFDSDtBQUNELHVCQUFLcUMsUUFBTCxDQUFjQyxJQUFJbkIsa0JBQUosQ0FBdUJnQixHQUFyQztBQUNILGFBTEQ7QUFNSCxTQXRESTtBQXVETDFCLHdCQXZESyw4QkF1RGM7QUFBQTs7QUFDZixnQkFBSSxPQUFPLEtBQUtGLElBQUwsQ0FBVUYsU0FBakIsS0FBK0IsVUFBbkMsRUFBK0M7QUFDM0M7QUFDSDtBQUhjLGdCQUlQRyxNQUpPLEdBSUksS0FBS0QsSUFKVCxDQUlQQyxNQUpPOztBQUtmLGlCQUFLUSxnQkFBTCxHQUF3Qk8sSUFBeEIsQ0FBNkIsVUFBQ0MsSUFBRCxFQUFVO0FBQ25DLHVCQUFLZSxlQUFMLEdBQXVCZixLQUFLaEIsTUFBNUI7QUFDQSx1QkFBS0wsa0JBQUwsQ0FBd0IsbUJBQXhCO0FBQ0Esb0JBQU00QixvQkFBb0IsT0FBS0MsMEJBQUwsQ0FBZ0M7QUFDdERDLGdDQUFZLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFEMEMsaUJBQWhDLENBQTFCO0FBR0EsdUJBQUtGLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDQUEsa0NBQWtCRyxrQkFBbEIsQ0FBcUM7QUFDakNDLHlCQUFLLE9BQUtJLGVBQUwsR0FBdUIvQjtBQURLLGlCQUFyQztBQUdBdUIsa0NBQWtCSyxPQUFsQixDQUEwQjVDLFlBQTFCLEVBQXdDLGVBQU87QUFDM0Msd0JBQUksT0FBS2UsSUFBTCxDQUFVUCxRQUFkLEVBQXdCO0FBQ3BCO0FBQ0g7QUFDRCwyQkFBS3FDLFFBQUwsQ0FBY0MsSUFBSW5CLGtCQUFKLENBQXVCZ0IsR0FBckM7QUFDSCxpQkFMRDtBQU1ILGFBaEJEO0FBaUJILFNBN0VJO0FBOEVMRSxnQkE5RUssb0JBOEVJRixHQTlFSixFQThFUztBQUFBOztBQUFBLHlCQUNvQixLQUFLNUIsSUFEekI7QUFBQSxnQkFDRlQsU0FERSxVQUNGQSxTQURFO0FBQUEsZ0JBQ1NVLE1BRFQsVUFDU0EsTUFEVDtBQUFBLGdCQUVGK0IsZUFGRSxHQUVrQixJQUZsQixDQUVGQSxlQUZFOztBQUdWLGdCQUFNekIsUUFBUXlCLG1CQUFtQi9CLE1BQW5CLEdBQ1IyQixNQUFNM0IsU0FBUytCLGVBQWYsSUFBa0NKLE1BQU1yQyxTQURoQyxHQUVScUMsTUFBTXJDLFNBRlo7QUFHQSxpQkFBSzBDLEtBQUwsQ0FBVyxRQUFYLEVBQXFCO0FBQ2pCQywyQkFBV04sR0FETTtBQUVqQk8seUJBQVM1QjtBQUZRLGFBQXJCO0FBSUEsaUJBQUtDLE9BQUwsQ0FBYSxFQUFFRCxZQUFGLEVBQWI7QUFDQVcsZUFBR0MsUUFBSCxDQUFZLFlBQU07QUFDZCx1QkFBS2IsUUFBTDtBQUNILGFBRkQ7QUFHSDtBQTVGSSxLQWxDQztBQWdJVlgsV0FoSVUscUJBZ0lBO0FBQ04sYUFBS0EsT0FBTCxHQUFlLElBQWY7QUFDQSxZQUFJLENBQUMsS0FBS0ssSUFBTCxDQUFVUCxRQUFmLEVBQXlCO0FBQ3JCLGlCQUFLSSxZQUFMO0FBQ0g7QUFDSixLQXJJUztBQXNJVnVDLGFBdElVLHVCQXNJRTtBQUNSLGFBQUt4QyxrQkFBTDtBQUNIO0FBeElTLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5jb25zdCBST09UX0VMRU1FTlQgPSAnLnZhbi1zdGlja3knO1xuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogOTlcbiAgICAgICAgfSxcbiAgICAgICAgb2Zmc2V0VG9wOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnb2JzZXJ2ZUNvbnRlbnQnXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgb2JzZXJ2ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubW91bnRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID8gdGhpcy5kaXNjb25uZWN0T2JzZXJ2ZXIoKSA6IHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nIHx8ICF0aGlzLmRhdGEuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlQ29udGFpbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgd3JhcFN0eWxlOiAnJyxcbiAgICAgICAgY29udGFpbmVyU3R5bGU6ICcnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldFN0eWxlKCkge1xuICAgICAgICAgICAgY29uc3QgeyBvZmZzZXRUb3AsIGhlaWdodCwgZml4ZWQsIHpJbmRleCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKGZpeGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcFN0eWxlOiBgdG9wOiAke29mZnNldFRvcH1weDtgLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTdHlsZTogYGhlaWdodDogJHtoZWlnaHR9cHg7IHotaW5kZXg6ICR7ekluZGV4fTtgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICB3cmFwU3R5bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTdHlsZTogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q29udGFpbmVyUmVjdCgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzUmVmID0gdGhpcy5kYXRhLmNvbnRhaW5lcigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gbm9kZXNSZWYuYm91bmRpbmdDbGllbnRSZWN0KHJlc29sdmUpLmV4ZWMoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRPYnNlcnZlcigpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdE9ic2VydmVyKCk7XG4gICAgICAgICAgICB0aGlzLmdldFJlY3QoUk9PVF9FTEVNRU5UKS50aGVuKChyZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgaGVpZ2h0OiByZWN0LmhlaWdodCB9KTtcbiAgICAgICAgICAgICAgICB3eC5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzY29ubmVjdE9ic2VydmVyKG9ic2VydmVyTmFtZSkge1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyTmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpc1tvYnNlcnZlck5hbWVdO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyICYmIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudE9ic2VydmVyICYmIHRoaXMuY29udGVudE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lck9ic2VydmVyICYmIHRoaXMuY29udGFpbmVyT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvYnNlcnZlQ29udGVudCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb2Zmc2V0VG9wIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RPYnNlcnZlcignY29udGVudE9ic2VydmVyJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50T2JzZXJ2ZXIgPSB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKHtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGRzOiBbMCwgMV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50T2JzZXJ2ZXIgPSBjb250ZW50T2JzZXJ2ZXI7XG4gICAgICAgICAgICBjb250ZW50T2JzZXJ2ZXIucmVsYXRpdmVUb1ZpZXdwb3J0KHsgdG9wOiAtb2Zmc2V0VG9wIH0pO1xuICAgICAgICAgICAgY29udGVudE9ic2VydmVyLm9ic2VydmUoUk9PVF9FTEVNRU5ULCByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldEZpeGVkKHJlcy5ib3VuZGluZ0NsaWVudFJlY3QudG9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvYnNlcnZlQ29udGFpbmVyKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRhdGEuY29udGFpbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBoZWlnaHQgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyUmVjdCgpLnRoZW4oKHJlY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdE9ic2VydmVyKCdjb250YWluZXJPYnNlcnZlcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lck9ic2VydmVyID0gdGhpcy5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcih7XG4gICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZHM6IFswLCAxXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyT2JzZXJ2ZXIgPSBjb250YWluZXJPYnNlcnZlcjtcbiAgICAgICAgICAgICAgICBjb250YWluZXJPYnNlcnZlci5yZWxhdGl2ZVRvVmlld3BvcnQoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRoaXMuY29udGFpbmVySGVpZ2h0IC0gaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyT2JzZXJ2ZXIub2JzZXJ2ZShST09UX0VMRU1FTlQsIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZpeGVkKHJlcy5ib3VuZGluZ0NsaWVudFJlY3QudG9wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRGaXhlZCh0b3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb2Zmc2V0VG9wLCBoZWlnaHQgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGFpbmVySGVpZ2h0IH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgZml4ZWQgPSBjb250YWluZXJIZWlnaHQgJiYgaGVpZ2h0XG4gICAgICAgICAgICAgICAgPyB0b3AgPiBoZWlnaHQgLSBjb250YWluZXJIZWlnaHQgJiYgdG9wIDwgb2Zmc2V0VG9wXG4gICAgICAgICAgICAgICAgOiB0b3AgPCBvZmZzZXRUb3A7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGwnLCB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0b3AsXG4gICAgICAgICAgICAgICAgaXNGaXhlZDogZml4ZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZml4ZWQgfSk7XG4gICAgICAgICAgICB3eC5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdHlsZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdE9ic2VydmVyKCk7XG4gICAgfVxufSk7XG4iXX0=