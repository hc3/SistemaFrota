(function() {
  angular
    .module('app')
    .config(config);

    function config($stateProvider) {

      $stateProvider

        .state('login', {
          url:'/login',
          templateUrl:'app/modules/account/login.html',
          controller:'loginController',
          controllerAs:'vm'
        })
    }
})()
