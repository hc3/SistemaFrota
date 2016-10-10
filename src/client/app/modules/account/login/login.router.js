(function() {
  angular
    .module('app')
    .config(config);

    config.$inject = ['$stateProvider','$locationProvider']

    function config($stateProvider, $locationProvider) {

      $stateProvider

        .state('login', {
          url:'/login',
          templateUrl:'app/modules/account/login.html',
          controller:'LoginController',
          controllerAs:'vm'
        })

        $locationProvider.html5Mode(true);
    }
})()
