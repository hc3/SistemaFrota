(function() {

  angular
    .module('app')
    .config(config);

    function config($stateProvider) {
      $stateProvider

        .state('erro401', {
          url:'/error/nao-auth',
          templateUrl:'app/modules/erros/templates/401.html'
        })
    }

})();
