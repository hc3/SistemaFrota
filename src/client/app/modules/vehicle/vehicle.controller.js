(function() {
    'use strict';

    angular
        .module('app')
        .controller('VehicleControllerOne', VehicleControllerOne)
        .controller('VehicleControllerList', VehicleControllerList)
        .controller('VehicleControllerNew', VehicleControllerNew)
        .controller('VehicleControllerEdit', VehicleControllerEdit);

    VehicleControllerOne.$inject = ['VehicleService','$state','$stateParams'];
    VehicleControllerList.$inject = ['VehicleService','$state','$stateParams'];
    VehicleControllerNew.$inject = ['VehicleService','$state','$stateParams'];
    VehicleControllerEdit.$inject = ['VehicleService','$state','$stateParams'];

    /* @ngInject */
    function VehicleControllerOne(VehicleService, $state, $stateParams) {
        var vm = this;
        vm.vehicleOne = listOne();
        vm.removeOne = removeOne;

        function listOne() {
          return VehicleService.listOne($stateParams.id)
            .then(function(data) {
              vm.vehicleOne = data.data;
              return vm.vehicleOne;
            })
        }

        function removeOne() {
          return VehicleService.remove($stateParams.id)
            .then(function(data) {
              //$state.go('');
              console.log('removido com sucesso! ',data);
            })
        }
    }

    /* @ngInject */
    function VehicleControllerList(VehicleService, $state, $stateParams) {
        var vm = this;
        vm.listVehicle = [];
        listAll();

        function listAll() {
          return VehicleService.listAll()
            .then(function(data) {
              vm.listVehicle = data.data;
              return vm.listVehicle;
            })
        }
    }

    /* @ngInject */
    function VehicleControllerNew(VehicleService, $state, $stateParams) {
        var vm = this;
        vm.vehicle = {};
        vm.errorVehicles = {};
        vm.insert = insert;

        function insert() {
          return VehicleService.insert(vm.vehicle)
            .then(function(data) {
              cleanForm(vm.form_new);
            })
            .catch(function(err) {
              console.log('Retorno do erro no insert: ', err);
              vm.errorVehicles.insertError = 'Erro ao cadastrar Veiculo';
            })
        }

        function cleanForm(form_new) {
          if(form_new) {
            vm.vehicle = {};
            form_new.$setPristine();
            form_new.$setUntouched();
          }
        }
    }

    /* @ngInject */
    function VehicleControllerEdit(VehicleService, $state, $stateParams) {
        var vm = this;
        vm.vehicle = listOne();
        vm.edit = edit;

        function listOne() {
          return VehicleService.listOne($stateParams.id)
            .then(function(data) {
              vm.vehicle = data.data;
              return vm.vehicle;
            })
        }

        function edit() {
          return VehicleService.update(vm.vehicle, $stateParams.id)
            .then(function(data) {
              //$state.go('');
              console.log('Editado com sucesso! ',data);
            })
        }
    }


})();
