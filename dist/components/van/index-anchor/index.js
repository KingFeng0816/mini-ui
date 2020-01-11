'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        name: 'index-bar',
        type: 'ancestor',
        linked: function linked(target) {
            this.parent = target;
        },
        unlinked: function unlinked() {
            this.parent = null;
        }
    },
    props: {
        useSlot: Boolean,
        index: null
    },
    data: {
        active: false,
        wrapperStyle: '',
        anchorStyle: ''
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJwYXJlbnQiLCJ1bmxpbmtlZCIsInByb3BzIiwidXNlU2xvdCIsIkJvb2xlYW4iLCJpbmRleCIsImRhdGEiLCJhY3RpdmUiLCJ3cmFwcGVyU3R5bGUiLCJhbmNob3JTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxjQUFVO0FBQ05DLGNBQU0sV0FEQTtBQUVOQyxjQUFNLFVBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1gsaUJBQUtDLE1BQUwsR0FBY0QsTUFBZDtBQUNILFNBTEs7QUFNTkUsZ0JBTk0sc0JBTUs7QUFDUCxpQkFBS0QsTUFBTCxHQUFjLElBQWQ7QUFDSDtBQVJLLEtBREE7QUFXVkUsV0FBTztBQUNIQyxpQkFBU0MsT0FETjtBQUVIQyxlQUFPO0FBRkosS0FYRztBQWVWQyxVQUFNO0FBQ0ZDLGdCQUFRLEtBRE47QUFFRkMsc0JBQWMsRUFGWjtBQUdGQyxxQkFBYTtBQUhYO0FBZkksQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdpbmRleC1iYXInLFxuICAgICAgICB0eXBlOiAnYW5jZXN0b3InLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHRhcmdldDtcbiAgICAgICAgfSxcbiAgICAgICAgdW5saW5rZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHVzZVNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIGluZGV4OiBudWxsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHdyYXBwZXJTdHlsZTogJycsXG4gICAgICAgIGFuY2hvclN0eWxlOiAnJ1xuICAgIH1cbn0pO1xuIl19