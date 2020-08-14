/**
 * pageTitle - Directive for set Page title - mata title
 */

angular
    .module('myAngularApp')
    .directive('pageTitle', pageTitle);

function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'myAngularApp | Responsive Admin Theme';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'myAngularApp | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
};
