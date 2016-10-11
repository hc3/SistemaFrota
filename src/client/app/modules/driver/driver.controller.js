(function() {
    'use strict';

    angular
        .module('app')
        .controller('DriverControllerList', DriverControllerList)
        .controller('DriverControllerOne', DriverControllerOne)
        .controller('DriverControllerNew', DriverControllerNew);

    DriverControllerNew.$inject = ['DriverService','$state','$stateParams'];
    DriverControllerList.$inject = ['DriverService','$state','$stateParams'];
    DriverControllerOne.$inject = ['DriverService','$state','$stateParams'];

    function DriverControllerList(DriverService, $state, $stateParams) {
      var vm = this;
      vm.listDriver = [];
      listAll();

      function listAll() {
        return DriverService.listAll()
          .then(function(data) {
            console.log('retorno do listall: ',data);
            vm.listDriver = data.data;
            return vm.listDriver;
          })
      }
    }

    function DriverControllerOne(DriverService, $state, $stateParams) {
      var vm = this;
      vm.driverOne = listOne();

      function listOne() {
        return DriverService.listOne($stateParams.id)
          .then(function(data) {
            console.log('Retorno do listOne: ',data.data);
            console.log('StateParams: ',$stateParams);
            vm.driverOne = data.data;
            console.log('Driver one: ',vm.driverOne);
            return vm.driverOne;
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
              console.log('Retorno do insert: ',data);
              cleanForm(vm.form_new);
              listAll();
            })
            .catch(function(err) {
              console.log('Retorno do erro no insert: ', err);
              vm.errorDrivers.insertError = 'Erro ao cadastrar Motorista';
            })
        }

    }

    function cleanForm(form_new) {
      console.log('form new: ',form_new);
      if(form_new) {
        vm.driver = {};
        form_new.$setPristine();
        form_new.$setUntouched();
      }
    }


})();
