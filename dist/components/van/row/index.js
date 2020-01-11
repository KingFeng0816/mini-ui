'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        name: 'col',
        type: 'descendant',
        linked: function linked(target) {
            if (this.data.gutter) {
                target.setGutter(this.data.gutter);
            }
        }
    },
    props: {
        gutter: Number
    },
    watch: {
        gutter: 'setGutter'
    },
    mounted: function mounted() {
        if (this.data.gutter) {
            this.setGutter();
        }
    },

    methods: {
        setGutter: function setGutter() {
            var _this = this;

            var gutter = this.data.gutter;

            var margin = '-' + Number(gutter) / 2 + 'px';
            var style = gutter ? 'margin-right: ' + margin + '; margin-left: ' + margin + ';' : '';
            this.setData({ style: style });
            this.getRelationNodes('../col/index').forEach(function (col) {
                col.setGutter(_this.data.gutter);
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJkYXRhIiwiZ3V0dGVyIiwic2V0R3V0dGVyIiwicHJvcHMiLCJOdW1iZXIiLCJ3YXRjaCIsIm1vdW50ZWQiLCJtZXRob2RzIiwibWFyZ2luIiwic3R5bGUiLCJzZXREYXRhIiwiZ2V0UmVsYXRpb25Ob2RlcyIsImZvckVhY2giLCJjb2wiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsY0FBVTtBQUNOQyxjQUFNLEtBREE7QUFFTkMsY0FBTSxZQUZBO0FBR05DLGNBSE0sa0JBR0NDLE1BSEQsRUFHUztBQUNYLGdCQUFJLEtBQUtDLElBQUwsQ0FBVUMsTUFBZCxFQUFzQjtBQUNsQkYsdUJBQU9HLFNBQVAsQ0FBaUIsS0FBS0YsSUFBTCxDQUFVQyxNQUEzQjtBQUNIO0FBQ0o7QUFQSyxLQURBO0FBVVZFLFdBQU87QUFDSEYsZ0JBQVFHO0FBREwsS0FWRztBQWFWQyxXQUFPO0FBQ0hKLGdCQUFRO0FBREwsS0FiRztBQWdCVkssV0FoQlUscUJBZ0JBO0FBQ04sWUFBSSxLQUFLTixJQUFMLENBQVVDLE1BQWQsRUFBc0I7QUFDbEIsaUJBQUtDLFNBQUw7QUFDSDtBQUNKLEtBcEJTOztBQXFCVkssYUFBUztBQUNMTCxpQkFESyx1QkFDTztBQUFBOztBQUFBLGdCQUNBRCxNQURBLEdBQ1csS0FBS0QsSUFEaEIsQ0FDQUMsTUFEQTs7QUFFUixnQkFBTU8sZUFBYUosT0FBT0gsTUFBUCxJQUFpQixDQUE5QixPQUFOO0FBQ0EsZ0JBQU1RLFFBQVFSLDRCQUNTTyxNQURULHVCQUNpQ0EsTUFEakMsU0FFUixFQUZOO0FBR0EsaUJBQUtFLE9BQUwsQ0FBYSxFQUFFRCxZQUFGLEVBQWI7QUFDQSxpQkFBS0UsZ0JBQUwsQ0FBc0IsY0FBdEIsRUFBc0NDLE9BQXRDLENBQThDLGVBQU87QUFDakRDLG9CQUFJWCxTQUFKLENBQWMsTUFBS0YsSUFBTCxDQUFVQyxNQUF4QjtBQUNILGFBRkQ7QUFHSDtBQVhJO0FBckJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAnY29sJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmd1dHRlcikge1xuICAgICAgICAgICAgICAgIHRhcmdldC5zZXRHdXR0ZXIodGhpcy5kYXRhLmd1dHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGd1dHRlcjogTnVtYmVyXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBndXR0ZXI6ICdzZXRHdXR0ZXInXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmd1dHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRHdXR0ZXIoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRHdXR0ZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGd1dHRlciB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luID0gYC0ke051bWJlcihndXR0ZXIpIC8gMn1weGA7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGd1dHRlclxuICAgICAgICAgICAgICAgID8gYG1hcmdpbi1yaWdodDogJHttYXJnaW59OyBtYXJnaW4tbGVmdDogJHttYXJnaW59O2BcbiAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgc3R5bGUgfSk7XG4gICAgICAgICAgICB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2NvbC9pbmRleCcpLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgICAgICBjb2wuc2V0R3V0dGVyKHRoaXMuZGF0YS5ndXR0ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==