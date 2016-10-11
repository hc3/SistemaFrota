(function() {
    'use strict';

    angular
        .module('app')
        .controller('DriverController', DriverController);

    DriverController.$inject = ['DriverService','$state'];

    /* @ngInject */
    function DriverController(DriverService, $state) {

        var vm = this;
        vm.driver = {};
        vm.listDriver = [];
        vm.driverOne = {};
        vm.errorDrivers = {};
        vm.insert = insert;
        vm.listOne = listOne;
        vm.listAll = listAll;
        vm.update = update;
        vm.remove = remove;

        function insert() {
          return DriverService.insert(vm.driver)
            .then(function(data) {
              console.log('Retorno do insert: ',data);
              cleanForm(vm.form_new);
              listAll();
            })
            .catch(function(err) {
              console.log('Retorno do erro no insert: ', err);
              vm.errorDrivers.insertError = 'Erro ao cadastrar Motorista';
            })
        }

        function listOne(driver) {
          return DriverService.listOne(driver)
            .then(function(data) {
              console.log('Retorno do listOne: ',data.data);
              vm.driverOne = data.data;
              $state.go('viewDriver',{id: data.data.id})
              console.log('Driver one: ',vm.driverOne);
              return vm.driverOne;
            })
        }

        function listAll() {
          return DriverService.listAll()
            .then(function(data) {
              console.log('retorno do listall: ',data);
              vm.listDriver = data.data;
              return vm.listDriver;
            })
        }

        function update() {

        }

        function remove() {

        }

        function cleanForm(form_new) {
          console.log('form new: ',form_new);
          if(form_new) {
            vm.driver = {};
            form_new.$setPristine();
            form_new.$setUntouched();
          }
        }

        listAll();
    }
})();
