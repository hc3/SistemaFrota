(function() {
  angular
    .module('app')
    .config(config)

    config.$inject = ['$stateProvider','$locationProvider', '$urlRouterProvider'];

    /* @ngInject */
    function config($stateProvider, $locationProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/login');

      $stateProvider

        .state('login', {
          url:'/login',
          templateUrl:'app/modules/account/login.html',
          controller:'LoginController',
          controllerAs:'vm'
        });

        $locationProvider.html5Mode(true);
    }

})();
