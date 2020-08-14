/**
 * ionRangeSlider - Directive for Ion Range Slider
 */

angular
    .module('myAngularApp')
    .directive('ionRangeSlider', ionRangeSlider);

function ionRangeSlider() {
    return {
        restrict: 'A',
        scope: {
            rangeOptions: '='
        },
        link: function (scope, elem, attrs) {
            elem.ionRangeSlider(scope.rangeOptions);
        }
    }
}