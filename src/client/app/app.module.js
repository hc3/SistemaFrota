(function() {
    'use strict';

    angular
        .module('app', [
          'ui.router',
          'ngStorage',
          'app.driver',
          'app.tire',
          'app.vehicle',
          'app.login'
        ])
        .run(run);


        function run($rootScope, $http, $location, $localStorage) {

          if($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
          }
          // redirect to login page if not logged in and trying to access a restricted page
          $rootScope.$on('$locationChangeStart', function (event, next, current) {
              var publicPages = ['/login'];
              var restrictedPage = publicPages.indexOf($location.path()) === -1;
              if (restrictedPage && !$localStorage.currentUser) {
                  $location.path('/login');
              }
          });
        }
})();
