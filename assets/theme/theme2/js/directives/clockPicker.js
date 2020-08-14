/**
 * clockPicker - Directive for clock picker plugin
 */

angular
    .module('myAngularApp')
    .directive('slimScroll', slimScroll);

function clockPicker() {
    return {
        restrict: 'A',
        link: function(scope, element) {
                element.clockpicker();
        }
    };
};