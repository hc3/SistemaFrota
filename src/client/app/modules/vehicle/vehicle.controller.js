  (function() {
    'use strict';

    angular
        .module('app')
        .controller('VehicleControllerOne', VehicleControllerOne)
        .controller('VehicleControllerList', VehicleControllerList)
        .controller('VehicleControllerNew', VehicleControllerNew)
        .controller('VehicleControllerEdit', VehicleControllerEdit);

    VehicleControllerOne.$inject = ['VehicleService','$state','$stateParams'];
    VehicleControllerList.$inject = ['VehicleService', '$state'];
    VehicleControllerNew.$inject = ['VehicleService', 'DriverService', '$state'];
    VehicleControllerEdit.$inject = ['VehicleService', 'DriverService', '$state','$stateParams'];

    /* @ngInject */
    function VehicleControllerOne(VehicleService, $state, $stateParams) {
        var vm = this;
        vm.vehicleOne = listOne();
        vm.removeOne = removeOne;

        function listOne() {
          return VehicleService.listOneWithJoin($stateParams.id)
            .then(function(data) {
              vm.vehicleOne = data.data;
              return vm.vehicleOne;
            })
        }

        function removeOne() {
          return VehicleService.remove($stateParams.id)
            .then(function(data) {
              $state.go('listVehicle');
            })
        }
    };

    /* @ngInject */
    function VehicleControllerList(VehicleService, $state) {
        var vm = this;
        vm.listVehicle = [];
        listAll();

        function listAll() {
          return VehicleService.listAllWithJoin()
            .then(function(data) {
              vm.listVehicle = data.data;
              return vm.listVehicle;
            })
        };


    };

    /* @ngInject */
    function VehicleControllerNew(VehicleService, DriverService, $state) {
        var vm = this;
        var allVehicles = listAllVehicles();
        vm.vehicle = {};
        vm.listDriver = [];
        vm.errorVehicles = {};
        vm.insert = insert;
        vm.errorVehicle = false;
        vm.buscaPlacaCadastrada = buscaPlacaCadastrada;
        listAllVehicles();
        listAllDrivers();

        function insert() {
          return VehicleService.insert(vm.vehicle)
            .then(function(data) {
              cleanForm(vm.vehicleForm);
            })
            .catch(function(err) {
              console.log('Retorno do erro no insert: ', err);
              vm.errorVehicles.insertError = 'Erro ao cadastrar Veiculo';
            })
        };

        function listAllDrivers() {
          return DriverService.listAll()
            .then(function(data) {
              vm.listDriver = data.data;
              allVehicles.forEach(function(veiculo) {
                vm.listDriver.forEach(function(driver,index) {
                  if(driver.id === veiculo.driver_id) {
                    vm.listDriver.splice(index,1);
                  }
                })
              })
              return vm.listDriver;
            })
        };

        function listAllVehicles() {
          return VehicleService.listAll()
            .then(function(data) {
              allVehicles = data.data;
              return allVehicles;
            })
        };

        function buscaPlacaCadastrada(placa) {
          if(placa.length == 8) {
            return VehicleService.listAllByPlaca(placa)
              .then(function(data) {
                if(data.data.length > 0) {
                  vm.errorVehicle = true;
                } else {
                  vm.errorVehicle = false;
                }
              })
          } else {
            return
          }
        };

        function cleanForm(vehicleForm) {
          if(vehicleForm) {
            vm.vehicle = {};
            listAllVehicles();
            listAllDrivers();
            vehicleForm.$setPristine();
            vehicleForm.$setUntouched();
          }
        };
    };

    /* @ngInject */
    function VehicleControllerEdit(VehicleService, DriverService, $state, $stateParams) {
        var vm = this;
        var allVehicles = listAllVehicles();
        vm.vehicle = listOne();
        vm.listDriver = [];
        vm.edit = edit;

        listAllVehicles();
        listAllDrivers();

        function listOne() {
          return VehicleService.listOne($stateParams.id)
            .then(function(data) {
              vm.vehicle = data.data;
              return vm.vehicle;
            })
        };

        function listAllDrivers() {
          return DriverService.listAll()
            .then(function(data) {
              vm.listDriver = data.data;
              allVehicles.forEach(function(veiculo) {
                vm.listDriver.forEach(function(driver,index) {
                  if(driver.id === veiculo.driver_id) {
                    vm.listDriver.splice(index,1);
                  }
                })
              })
              return vm.listDriver;
            })
        };

        function listAllVehicles() {
          return VehicleService.listAll()
            .then(function(data) {
              allVehicles = data.data;
              return allVehicles;
            })
        };

        function edit() {
          return VehicleService.update(vm.vehicle, $stateParams.id)
            .then(function(data) {
              $state.go('listVehicle');
            })
        };
    };


})();
