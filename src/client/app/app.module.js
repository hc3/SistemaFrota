(function() {
    'use strict';

    angular
        .module('app', [
          'ui.router',
          'ngStorage',
          'ngMask',
          'ui.bootstrap',
          'app.driver',
          'app.product',
          'app.vehicle',
          'app.login'
        ])
      //   .run(run);
      //
      //   run.$inject = ['$rootScope', '$location', '$localStorage'];
      //
      //   function run($rootScope, config, $location, $localStorage) {
      //     // keep user logged in after page refresh
      //     config.headers = config.headers || {};
      //     if (localStorage.currentUser) {
      //         config.headers.Authorization = localStorage.getItem('token');
      //     }
      //
      //     // redirect to login page if not logged in and trying to access a restricted page
      //     $rootScope.$on('$locationChangeStart', function (event, next, current) {
      //         var publicPages = ['/login'];
      //         var restrictedPage = publicPages.indexOf($location.path()) === -1;
      //         if (restrictedPage && !localStorage.currentUser) {
      //             $location.path('/login');
      //         }
      //     });
      //     console.log('header do http: ',config.headers.Authorization);
      // }
})();
