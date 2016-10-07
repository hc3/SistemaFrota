(function() {

  angular
    .module('app')
    .config(config);

    function config($stateProvider) {
      $stateProvider

        .state('listDriver', {
            url:'/drivers',
            templateUrl:'app/modules/driver/templates/driver_list.html',
            controller:'DriverController',
            controllerAs:'DriverController'
        })

        .state('newDriver', {
          url:'/drivers/new',
          templateUrl:'app/modules/driver/templates/driver_new.html',
          controller:'DriverController',
          controllerAs:'DriverController'
        })

        .state('editDriver', {
          url:'/drivers/:id/edit',
          templateUrl:'app/modules/driver/templates/driver_update.html',
          controller:'DriverController',
          controllerAs:'DriverController'
        })

        .state('viewDriver', {
          url:'/drivers/:id/view',
          templateUrl:'app/modules/driver/templates/driver_view.html',
          controller:'DriverController',
          controllerAs:'DriverController'
        })
    }

})();
