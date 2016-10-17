(function() {

  angular
    .module('app')
    .config(config);

    config.$inject = ['$stateProvider','$locationProvider'];

    /* @ngInject */
    function config($stateProvider, $locationProvider) {
      $stateProvider

        .state('listTire', {
            url:'/tires',
            templateUrl:'app/modules/tire/templates/tire_list.html',
            controller:'TireControllerList',
            controllerAs:'vm'
        })

        .state('newTire', {
          url:'/tires/new',
          templateUrl:'app/modules/tire/templates/tire_new.html',
          controller:'TireControllerNew',
          controllerAs:'vm'
        })

        .state('editTire', {
          url:'/tires/:id/edit',
          templateUrl:'app/modules/tire/templates/tire_update.html',
          controller:'TireControllerEdit',
          controllerAs:'vm'
        })

        .state('viewTire', {
          url:'/tires/:id/view',
          templateUrl:'app/modules/tire/templates/tire_view.html',
          controller:'TireControllerOne',
          controllerAs:'vm'
        });

        $locationProvider.html5Mode(true);
    }

})();
