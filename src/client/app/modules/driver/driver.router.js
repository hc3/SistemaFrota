(function() {

  angular
    .module('app')
    .config(config);

    config.$inject = ['$stateProvider','$locationProvider'];

    /* @ngInject */
    function config($stateProvider, $locationProvider) {
      $stateProvider

        .state('listDriver', {
            url:'/drivers',
            templateUrl:'app/modules/driver/templates/driver_list.html',
            controller:'DriverControllerList',
            controllerAs:'vm'
        })

        .state('newDriver', {
          url:'/drivers/new',
          templateUrl:'app/modules/driver/templates/driver_new.html',
          controller:'DriverControllerNew',
          controllerAs:'vm'
        })

        .state('editDriver', {
          url:'/drivers/:id/edit',
          templateUrl:'app/modules/driver/templates/driver_update.html',
          controller:'DriverControllerEdit',
          controllerAs:'vm'
        })

        .state('viewDriver', {
          url:'/drivers/:id/view',
          templateUrl:'app/modules/driver/templates/driver_view.html',
          controller:'DriverControllerOne',
          controllerAs:'vm'
        });

        $locationProvider.html5Mode(true);
    }

})();
