/**
 * adminbag - Responsive Admin Theme
 *
 */
(function () {
    angular.module('myAngularApp', [
        'ui.router',                   // Routing
        'oc.lazyLoad',                // ocLazyLoad
        'ui.bootstrap'               // Ui Bootstrap      
      
    ])
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad