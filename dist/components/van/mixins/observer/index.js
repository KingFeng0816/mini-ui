'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.observe = observe;

var _behavior = require('./behavior.js');

function observe(vantOptions, options) {
    var watch = vantOptions.watch;

    options.behaviors.push(_behavior.behavior);
    if (watch) {
        var props = options.properties || {};
        Object.keys(watch).forEach(function (key) {
            if (key in props) {
                var prop = props[key];
                if (prop === null || !('type' in prop)) {
                    prop = { type: prop };
                }
                prop.observer = watch[key];
                props[key] = prop;
            }
        });
        options.properties = props;
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm9ic2VydmUiLCJ2YW50T3B0aW9ucyIsIm9wdGlvbnMiLCJ3YXRjaCIsImJlaGF2aW9ycyIsInB1c2giLCJiZWhhdmlvciIsInByb3BzIiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHJvcCIsInR5cGUiLCJvYnNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFDZ0JBLE8sR0FBQUEsTzs7QUFEaEI7O0FBQ08sU0FBU0EsT0FBVCxDQUFpQkMsV0FBakIsRUFBOEJDLE9BQTlCLEVBQXVDO0FBQUEsUUFDbENDLEtBRGtDLEdBQ3hCRixXQUR3QixDQUNsQ0UsS0FEa0M7O0FBRTFDRCxZQUFRRSxTQUFSLENBQWtCQyxJQUFsQixDQUF1QkMsa0JBQXZCO0FBQ0EsUUFBSUgsS0FBSixFQUFXO0FBQ1AsWUFBTUksUUFBUUwsUUFBUU0sVUFBUixJQUFzQixFQUFwQztBQUNBQyxlQUFPQyxJQUFQLENBQVlQLEtBQVosRUFBbUJRLE9BQW5CLENBQTJCLGVBQU87QUFDOUIsZ0JBQUlDLE9BQU9MLEtBQVgsRUFBa0I7QUFDZCxvQkFBSU0sT0FBT04sTUFBTUssR0FBTixDQUFYO0FBQ0Esb0JBQUlDLFNBQVMsSUFBVCxJQUFpQixFQUFFLFVBQVVBLElBQVosQ0FBckIsRUFBd0M7QUFDcENBLDJCQUFPLEVBQUVDLE1BQU1ELElBQVIsRUFBUDtBQUNIO0FBQ0RBLHFCQUFLRSxRQUFMLEdBQWdCWixNQUFNUyxHQUFOLENBQWhCO0FBQ0FMLHNCQUFNSyxHQUFOLElBQWFDLElBQWI7QUFDSDtBQUNKLFNBVEQ7QUFVQVgsZ0JBQVFNLFVBQVIsR0FBcUJELEtBQXJCO0FBQ0g7QUFDSiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJlaGF2aW9yIH0gZnJvbSAnLi9iZWhhdmlvcic7XG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSh2YW50T3B0aW9ucywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgd2F0Y2ggfSA9IHZhbnRPcHRpb25zO1xuICAgIG9wdGlvbnMuYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IpO1xuICAgIGlmICh3YXRjaCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IG9wdGlvbnMucHJvcGVydGllcyB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMod2F0Y2gpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvcCA9IHByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IG51bGwgfHwgISgndHlwZScgaW4gcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcCA9IHsgdHlwZTogcHJvcCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wLm9ic2VydmVyID0gd2F0Y2hba2V5XTtcbiAgICAgICAgICAgICAgICBwcm9wc1trZXldID0gcHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG9wdGlvbnMucHJvcGVydGllcyA9IHByb3BzO1xuICAgIH1cbn1cbiJdfQ==