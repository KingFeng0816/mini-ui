'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isImageUrl = isImageUrl;
exports.isImageFile = isImageFile;
var IMAGE_EXT = ['jpeg', 'jpg', 'gif', 'png', 'svg'];
function isImageUrl(url) {
    return IMAGE_EXT.some(function (ext) {
        return url.indexOf('.' + ext) !== -1;
    });
}
function isImageFile(item) {
    if (item.type) {
        return item.type.indexOf('image') === 0;
    }
    if (item.path) {
        return isImageUrl(item.path);
    }
    if (item.url) {
        return isImageUrl(item.url);
    }
    return false;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImlzSW1hZ2VVcmwiLCJpc0ltYWdlRmlsZSIsIklNQUdFX0VYVCIsInVybCIsInNvbWUiLCJpbmRleE9mIiwiZXh0IiwiaXRlbSIsInR5cGUiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7OztRQUNnQkEsVSxHQUFBQSxVO1FBR0FDLFcsR0FBQUEsVztBQUpoQixJQUFNQyxZQUFZLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsRUFBOEIsS0FBOUIsQ0FBbEI7QUFDTyxTQUFTRixVQUFULENBQW9CRyxHQUFwQixFQUF5QjtBQUM1QixXQUFPRCxVQUFVRSxJQUFWLENBQWU7QUFBQSxlQUFPRCxJQUFJRSxPQUFKLE9BQWdCQyxHQUFoQixNQUEyQixDQUFDLENBQW5DO0FBQUEsS0FBZixDQUFQO0FBQ0g7QUFDTSxTQUFTTCxXQUFULENBQXFCTSxJQUFyQixFQUEyQjtBQUM5QixRQUFJQSxLQUFLQyxJQUFULEVBQWU7QUFDWCxlQUFPRCxLQUFLQyxJQUFMLENBQVVILE9BQVYsQ0FBa0IsT0FBbEIsTUFBK0IsQ0FBdEM7QUFDSDtBQUNELFFBQUlFLEtBQUtFLElBQVQsRUFBZTtBQUNYLGVBQU9ULFdBQVdPLEtBQUtFLElBQWhCLENBQVA7QUFDSDtBQUNELFFBQUlGLEtBQUtKLEdBQVQsRUFBYztBQUNWLGVBQU9ILFdBQVdPLEtBQUtKLEdBQWhCLENBQVA7QUFDSDtBQUNELFdBQU8sS0FBUDtBQUNIIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSU1BR0VfRVhUID0gWydqcGVnJywgJ2pwZycsICdnaWYnLCAncG5nJywgJ3N2ZyddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW1hZ2VVcmwodXJsKSB7XG4gICAgcmV0dXJuIElNQUdFX0VYVC5zb21lKGV4dCA9PiB1cmwuaW5kZXhPZihgLiR7ZXh0fWApICE9PSAtMSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNJbWFnZUZpbGUoaXRlbSkge1xuICAgIGlmIChpdGVtLnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpID09PSAwO1xuICAgIH1cbiAgICBpZiAoaXRlbS5wYXRoKSB7XG4gICAgICAgIHJldHVybiBpc0ltYWdlVXJsKGl0ZW0ucGF0aCk7XG4gICAgfVxuICAgIGlmIChpdGVtLnVybCkge1xuICAgICAgICByZXR1cm4gaXNJbWFnZVVybChpdGVtLnVybCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbiJdfQ==