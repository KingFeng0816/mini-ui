'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    props: {
        show: Boolean,
        customStyle: String,
        duration: {
            type: null,
            value: 300
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    methods: {
        onClick: function onClick() {
            this.$emit('click');
        },

        // for prevent touchmove
        noop: function noop() {}
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsImR1cmF0aW9uIiwidHlwZSIsInZhbHVlIiwiekluZGV4IiwiTnVtYmVyIiwibWV0aG9kcyIsIm9uQ2xpY2siLCIkZW1pdCIsIm5vb3AiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTztBQUNIQyxjQUFNQyxPQURIO0FBRUhDLHFCQUFhQyxNQUZWO0FBR0hDLGtCQUFVO0FBQ05DLGtCQUFNLElBREE7QUFFTkMsbUJBQU87QUFGRCxTQUhQO0FBT0hDLGdCQUFRO0FBQ0pGLGtCQUFNRyxNQURGO0FBRUpGLG1CQUFPO0FBRkg7QUFQTCxLQURHO0FBYVZHLGFBQVM7QUFDTEMsZUFESyxxQkFDSztBQUNOLGlCQUFLQyxLQUFMLENBQVcsT0FBWDtBQUNILFNBSEk7O0FBSUw7QUFDQUMsWUFMSyxrQkFLRSxDQUFHO0FBTEw7QUFiQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2hvdzogQm9vbGVhbixcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogMzAwXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZm9yIHByZXZlbnQgdG91Y2htb3ZlXG4gICAgICAgIG5vb3AoKSB7IH1cbiAgICB9XG59KTtcbiJdfQ==