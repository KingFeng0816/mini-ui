'use strict';

var _component = require('./../common/component.js');

var _utils = require('./utils.js');

var _utils2 = require('./../common/utils.js');

(0, _component.VantComponent)({
    props: {
        disabled: Boolean,
        multiple: Boolean,
        uploadText: String,
        useSlot: Boolean,
        useBeforeRead: Boolean,
        previewSize: {
            type: null,
            value: 90,
            observer: 'setComputedPreviewSize'
        },
        name: {
            type: [Number, String],
            value: ''
        },
        accept: {
            type: String,
            value: 'image'
        },
        fileList: {
            type: Array,
            value: [],
            observer: 'formatFileList'
        },
        maxSize: {
            type: Number,
            value: Number.MAX_VALUE
        },
        maxCount: {
            type: Number,
            value: 100
        },
        deletable: {
            type: Boolean,
            value: true
        },
        previewImage: {
            type: Boolean,
            value: true
        },
        previewFullImage: {
            type: Boolean,
            value: true
        },
        imageFit: {
            type: String,
            value: 'scaleToFill'
        }
    },
    data: {
        lists: [],
        computedPreviewSize: '',
        isInCount: true
    },
    methods: {
        formatFileList: function formatFileList() {
            var _data = this.data,
                _data$fileList = _data.fileList,
                fileList = _data$fileList === undefined ? [] : _data$fileList,
                maxCount = _data.maxCount;

            var lists = fileList.map(function (item) {
                return Object.assign(Object.assign({}, item), { isImage: typeof item.isImage === 'undefined' ? (0, _utils.isImageFile)(item) : item.isImage });
            });
            this.setData({ lists: lists, isInCount: lists.length < maxCount });
        },
        setComputedPreviewSize: function setComputedPreviewSize(val) {
            this.setData({
                computedPreviewSize: (0, _utils2.addUnit)(val)
            });
        },
        startUpload: function startUpload() {
            var _this = this;

            if (this.data.disabled) return;
            var _data2 = this.data,
                _data2$name = _data2.name,
                name = _data2$name === undefined ? '' : _data2$name,
                _data2$capture = _data2.capture,
                capture = _data2$capture === undefined ? ['album', 'camera'] : _data2$capture,
                _data2$maxCount = _data2.maxCount,
                maxCount = _data2$maxCount === undefined ? 100 : _data2$maxCount,
                _data2$multiple = _data2.multiple,
                multiple = _data2$multiple === undefined ? false : _data2$multiple,
                maxSize = _data2.maxSize,
                accept = _data2.accept,
                lists = _data2.lists,
                _data2$useBeforeRead = _data2.useBeforeRead,
                useBeforeRead = _data2$useBeforeRead === undefined ? false : _data2$useBeforeRead;

            var chooseFile = null;
            var newMaxCount = maxCount - lists.length;
            // 设置为只选择图片的时候使用 chooseImage 来实现
            if (accept === 'image') {
                chooseFile = new Promise(function (resolve, reject) {
                    wx.chooseImage({
                        count: multiple ? newMaxCount > 9 ? 9 : newMaxCount : 1,
                        sourceType: capture,
                        success: resolve,
                        fail: reject
                    });
                });
            } else {
                chooseFile = new Promise(function (resolve, reject) {
                    wx.chooseMessageFile({
                        count: multiple ? newMaxCount : 1,
                        type: 'file',
                        success: resolve,
                        fail: reject
                    });
                });
            }
            chooseFile.then(function (res) {
                var file = multiple ? res.tempFiles : res.tempFiles[0];
                // 检查文件大小
                if (file instanceof Array) {
                    var sizeEnable = file.every(function (item) {
                        return item.size <= maxSize;
                    });
                    if (!sizeEnable) {
                        _this.$emit('oversize', { name: name });
                        return;
                    }
                } else if (file.size > maxSize) {
                    _this.$emit('oversize', { name: name });
                    return;
                }
                // 触发上传之前的钩子函数
                if (useBeforeRead) {
                    _this.$emit('before-read', {
                        file: file,
                        name: name,
                        callback: function callback(result) {
                            if (result) {
                                // 开始上传
                                _this.$emit('after-read', { file: file, name: name });
                            }
                        }
                    });
                } else {
                    _this.$emit('after-read', { file: file, name: name });
                }
            });
        },
        deleteItem: function deleteItem(event) {
            var index = event.currentTarget.dataset.index;

            this.$emit('delete', { index: index, name: this.data.name });
        },
        doPreviewImage: function doPreviewImage(event) {
            if (!this.data.previewFullImage) return;
            var curUrl = event.currentTarget.dataset.url;
            var images = this.data.lists.filter(function (item) {
                return item.isImage;
            }).map(function (item) {
                return item.url || item.path;
            });
            this.$emit('click-preview', { url: curUrl, name: this.data.name });
            wx.previewImage({
                urls: images,
                current: curUrl,
                fail: function fail() {
                    wx.showToast({ title: '预览图片失败', icon: 'none' });
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibXVsdGlwbGUiLCJ1cGxvYWRUZXh0IiwiU3RyaW5nIiwidXNlU2xvdCIsInVzZUJlZm9yZVJlYWQiLCJwcmV2aWV3U2l6ZSIsInR5cGUiLCJ2YWx1ZSIsIm9ic2VydmVyIiwibmFtZSIsIk51bWJlciIsImFjY2VwdCIsImZpbGVMaXN0IiwiQXJyYXkiLCJtYXhTaXplIiwiTUFYX1ZBTFVFIiwibWF4Q291bnQiLCJkZWxldGFibGUiLCJwcmV2aWV3SW1hZ2UiLCJwcmV2aWV3RnVsbEltYWdlIiwiaW1hZ2VGaXQiLCJkYXRhIiwibGlzdHMiLCJjb21wdXRlZFByZXZpZXdTaXplIiwiaXNJbkNvdW50IiwibWV0aG9kcyIsImZvcm1hdEZpbGVMaXN0IiwibWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiaXRlbSIsImlzSW1hZ2UiLCJzZXREYXRhIiwibGVuZ3RoIiwic2V0Q29tcHV0ZWRQcmV2aWV3U2l6ZSIsInZhbCIsInN0YXJ0VXBsb2FkIiwiY2FwdHVyZSIsImNob29zZUZpbGUiLCJuZXdNYXhDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJmYWlsIiwiY2hvb3NlTWVzc2FnZUZpbGUiLCJ0aGVuIiwicmVzIiwiZmlsZSIsInRlbXBGaWxlcyIsInNpemVFbmFibGUiLCJldmVyeSIsInNpemUiLCIkZW1pdCIsImNhbGxiYWNrIiwicmVzdWx0IiwiZGVsZXRlSXRlbSIsImV2ZW50IiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImRvUHJldmlld0ltYWdlIiwiY3VyVXJsIiwidXJsIiwiaW1hZ2VzIiwiZmlsdGVyIiwicGF0aCIsInVybHMiLCJjdXJyZW50Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNB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QSxpQkFBS2IsS0FBTCxDQUFXLGVBQVgsRUFBNEIsRUFBRVUsS0FBS0QsTUFBUCxFQUFlekQsTUFBTSxLQUFLWSxJQUFMLENBQVVaLElBQS9CLEVBQTVCO0FBQ0FrQyxlQUFHekIsWUFBSCxDQUFnQjtBQUNacUQsc0JBQU1ILE1BRE07QUFFWkkseUJBQVNOLE1BRkc7QUFHWmxCLG9CQUhZLGtCQUdMO0FBQ0hMLHVCQUFHOEIsU0FBSCxDQUFhLEVBQUVDLE9BQU8sUUFBVCxFQUFtQkMsTUFBTSxNQUF6QixFQUFiO0FBQ0g7QUFMVyxhQUFoQjtBQU9IO0FBMUZJO0FBdkRDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpc0ltYWdlRmlsZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgYWRkVW5pdCB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgbXVsdGlwbGU6IEJvb2xlYW4sXG4gICAgICAgIHVwbG9hZFRleHQ6IFN0cmluZyxcbiAgICAgICAgdXNlU2xvdDogQm9vbGVhbixcbiAgICAgICAgdXNlQmVmb3JlUmVhZDogQm9vbGVhbixcbiAgICAgICAgcHJldmlld1NpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogOTAsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldENvbXB1dGVkUHJldmlld1NpemUnXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZXB0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2ltYWdlJ1xuICAgICAgICB9LFxuICAgICAgICBmaWxlTGlzdDoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICBvYnNlcnZlcjogJ2Zvcm1hdEZpbGVMaXN0J1xuICAgICAgICB9LFxuICAgICAgICBtYXhTaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICB9LFxuICAgICAgICBtYXhDb3VudDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDEwMFxuICAgICAgICB9LFxuICAgICAgICBkZWxldGFibGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwcmV2aWV3SW1hZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwcmV2aWV3RnVsbEltYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2VGaXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnc2NhbGVUb0ZpbGwnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgbGlzdHM6IFtdLFxuICAgICAgICBjb21wdXRlZFByZXZpZXdTaXplOiAnJyxcbiAgICAgICAgaXNJbkNvdW50OiB0cnVlXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGZvcm1hdEZpbGVMaXN0KCkge1xuICAgICAgICAgICAgY29uc3QgeyBmaWxlTGlzdCA9IFtdLCBtYXhDb3VudCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgbGlzdHMgPSBmaWxlTGlzdC5tYXAoaXRlbSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpdGVtKSwgeyBpc0ltYWdlOiB0eXBlb2YgaXRlbS5pc0ltYWdlID09PSAndW5kZWZpbmVkJyA/IGlzSW1hZ2VGaWxlKGl0ZW0pIDogaXRlbS5pc0ltYWdlIH0pKSk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBsaXN0cywgaXNJbkNvdW50OiBsaXN0cy5sZW5ndGggPCBtYXhDb3VudCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0Q29tcHV0ZWRQcmV2aWV3U2l6ZSh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgY29tcHV0ZWRQcmV2aWV3U2l6ZTogYWRkVW5pdCh2YWwpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRVcGxvYWQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSA9ICcnLCBjYXB0dXJlID0gWydhbGJ1bScsICdjYW1lcmEnXSwgbWF4Q291bnQgPSAxMDAsIG11bHRpcGxlID0gZmFsc2UsIG1heFNpemUsIGFjY2VwdCwgbGlzdHMsIHVzZUJlZm9yZVJlYWQgPSBmYWxzZSAvLyDmmK/lkKblrprkuYnkuoYgYmVmb3JlUmVhZFxuICAgICAgICAgICAgIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBsZXQgY2hvb3NlRmlsZSA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCBuZXdNYXhDb3VudCA9IG1heENvdW50IC0gbGlzdHMubGVuZ3RoO1xuICAgICAgICAgICAgLy8g6K6+572u5Li65Y+q6YCJ5oup5Zu+54mH55qE5pe25YCZ5L2/55SoIGNob29zZUltYWdlIOadpeWunueOsFxuICAgICAgICAgICAgaWYgKGFjY2VwdCA9PT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgIGNob29zZUZpbGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBtdWx0aXBsZSA/IChuZXdNYXhDb3VudCA+IDkgPyA5IDogbmV3TWF4Q291bnQpIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IGNhcHR1cmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hvb3NlRmlsZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd3guY2hvb3NlTWVzc2FnZUZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IG11bHRpcGxlID8gbmV3TWF4Q291bnQgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNob29zZUZpbGUudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IG11bHRpcGxlID8gcmVzLnRlbXBGaWxlcyA6IHJlcy50ZW1wRmlsZXNbMF07XG4gICAgICAgICAgICAgICAgLy8g5qOA5p+l5paH5Lu25aSn5bCPXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplRW5hYmxlID0gZmlsZS5ldmVyeShpdGVtID0+IGl0ZW0uc2l6ZSA8PSBtYXhTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaXplRW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvdmVyc2l6ZScsIHsgbmFtZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ292ZXJzaXplJywgeyBuYW1lIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOinpuWPkeS4iuS8oOS5i+WJjeeahOmSqeWtkOWHveaVsFxuICAgICAgICAgICAgICAgIGlmICh1c2VCZWZvcmVSZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2JlZm9yZS1yZWFkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5byA5aeL5LiK5LygXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FmdGVyLXJlYWQnLCB7IGZpbGUsIG5hbWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FmdGVyLXJlYWQnLCB7IGZpbGUsIG5hbWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZUl0ZW0oZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2RlbGV0ZScsIHsgaW5kZXgsIG5hbWU6IHRoaXMuZGF0YS5uYW1lIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkb1ByZXZpZXdJbWFnZShldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEucHJldmlld0Z1bGxJbWFnZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBjdXJVcmwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXJsO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5kYXRhLmxpc3RzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uaXNJbWFnZSlcbiAgICAgICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS51cmwgfHwgaXRlbS5wYXRoKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLXByZXZpZXcnLCB7IHVybDogY3VyVXJsLCBuYW1lOiB0aGlzLmRhdGEubmFtZSB9KTtcbiAgICAgICAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgICAgICAgdXJsczogaW1hZ2VzLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGN1clVybCxcbiAgICAgICAgICAgICAgICBmYWlsKCkge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+mihOiniOWbvueJh+Wksei0pScsIGljb246ICdub25lJyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19