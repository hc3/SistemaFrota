(function() {

  angular
    .module('app')
    .config(config);

    config.$inject = ['$stateProvider','$locationProvider'];

    /* @ngInject */
    function config($stateProvider, $locationProvider) {

      $stateProvider

        .state('listVehicle', {
            url:'/vehicles',
            templateUrl:'app/modules/vehicle/templates/vehicle_list.html',
            controller:'VehicleControllerList',
            controllerAs:'vm'
        })

        .state('newVehicle', {
          url:'/vehicles/new',
          templateUrl:'app/modules/vehicle/templates/vehicle_new.html',
          controller:'VehicleControllerNew',
          controllerAs:'vm'
        })

        .state('editVehicle', {
          url:'/vehicles/:id/edit',
          templateUrl:'app/modules/vehicle/templates/vehicle_update.html',
          controller:'VehicleControllerEdit',
          controllerAs:'vm'
        })

        .state('viewVehicle', {
          url:'/vehicles/:id/view',
          templateUrl:'app/modules/vehicle/templates/vehicle_view.html',
          controller:'VehicleControllerOne',
          controllerAs:'vm'
        });

        $locationProvider.html5Mode(true);
    }

})();
