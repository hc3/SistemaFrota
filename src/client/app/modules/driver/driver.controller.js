(function() {
    'use strict';

    angular
        .module('app')
        .controller('DriverControllerList', DriverControllerList)
        .controller('DriverControllerOne', DriverControllerOne)
        .controller('DriverControllerNew', DriverControllerNew)
        .controller('DriverControllerEdit', DriverControllerEdit);


    DriverControllerNew.$inject = ['DriverService','$state','$stateParams'];
    DriverControllerList.$inject = ['DriverService','$state','$stateParams'];
    DriverControllerOne.$inject = ['DriverService','$state','$stateParams'];
    DriverControllerEdit.$inject = ['DriverService','$state','$stateParams'];

    /* @ngInject */
    function DriverControllerList(DriverService, $state, $stateParams) {
      var vm = this;
      vm.listDriver = [];
      listAll();
      
      function listAll() {
          return DriverService.listAll()
              .then(function(data) {
                  vm.listDriver = data.data;
                  return vm.listDriver;
              })
      }

    }

    /* @ngInject */
    function DriverControllerNew(DriverService, $state, $stateParams) {

        var vm = this;
        vm.driver = {};
        vm.errorDrivers = {};
        vm.insert = insert;

        function insert() {
          return DriverService.insert(vm.driver)
            .then(function(data) {
              cleanForm(vm.form_new);
            })
            .catch(function(err) {
              console.log('Retorno do erro no insert: ', err);
              vm.errorDrivers.insertError = 'Erro ao cadastrar Motorista';
            })
        }

        function cleanForm(form_new) {
            if(form_new) {
                vm.driver = {};
                form_new.$setPristine();
                form_new.$setUntouched();
            }
        }

    }

    /* @ngInject */
    function DriverControllerOne(DriverService, $state, $stateParams) {
        var vm = this;
        vm.driverOne = listOne();
        vm.removeOne = removeOne;

        function listOne() {
            return DriverService.listOne($stateParams.id)
                .then(function(data) {
                    vm.driverOne = data.data;
                    return vm.driverOne;
                })
        }

        function removeOne() {
            return DriverService.remove($stateParams.id)
                .then(function(data) {
                    $state.go('listDriver');
                })
        }

    }

    /* @ngInject */
    function DriverControllerEdit(DriverService, $state, $stateParams) {
        var vm = this;
        vm.driver = listOne();
        vm.edit = edit;

        function listOne() {
            return DriverService.listOne($stateParams.id)
                .then(function(data) {
                    vm.driver = data.data;
                    return vm.driver;
                })
        }

        function edit() {
            return DriverService.update(vm.driver, $stateParams.id)
                .then(function(data) {
                    $state.go('listDriver');
                })
        }

    }

})();
