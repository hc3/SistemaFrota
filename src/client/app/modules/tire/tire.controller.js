(function() {
    'use strict';

    angular
        .module('app')
        .controller('TireControllerList', TireControllerList)
        .controller('TireControllerNew', TireControllerNew)
        .controller('TireControllerEdit', TireControllerEdit)
        .controller('TireControllerOne', TireControllerOne);

    TireControllerOne.$inject = ['TireService', '$state', '$stateParams'];
    TireControllerList.$inject = ['TireService', '$state'];
    TireControllerNew.$inject = ['TireService', 'VehicleService', '$state'];
    TireControllerEdit.$inject = ['TireService', 'VehicleService', '$state', '$stateParams'];

    /* @ngInject */
    function TireControllerOne(TireService, $state, $stateParams) {
        var vm = this;
        vm.tireOne = listOne();
        vm.removeOne = removeOne;

        function listOne() {
          return TireService.listOneWithJoin($stateParams.id)
            .then(function(data) {
              vm.tireOne = data.data;
              return vm.tireOne;
            })
        };

        function removeOne() {
          return TireService.remove($stateParams.id)
            .then(function(data) {
              $state.go('listTire');
            })
        }
    };

    /* @ngInject */
    function TireControllerList(TireService, $state) {
      var vm = this;
      vm.listTire = [];
      listAll();

      function listAll() {
        return TireService.listAllWithJoin()
          .then(function(data) {
            console.log('retorno da busca de pneu: ',data.data);
            vm.listTire = data.data;
            return vm.listTire;
          })
      };

    };

    /* @ngInject */
    function TireControllerNew(TireService, VehicleService, $state) {
      var vm = this;
      vm.tire = {};
      vm.listVehicle = listAll();
      vm.insert = insert;
      vm.errorTire = false;
      vm.buscaCodigoCadastrado = buscaCodigoCadastrado;
      listAll();

      function insert() {
        vm.tire.trash = false;
          return TireService.insert(vm.tire)
            .then(function(data) {
              cleanForm(vm.tireForm);
            })
            .catch(function(err) {
              console.log('Retorno do erro do insert: ',err);
            })
      };

      function listAll() {
        return VehicleService.listAllWithJoin()
          .then(function(data) {
            vm.listVehicle = data.data;
            return vm.listVehicle;
          })
      };

      function cleanForm(tireForm) {
        if(tireForm) {
          vm.tire = {};
          listAll();
          tireForm.$setPristine();
          tireForm.$setUntouched();
        }
      };

      function buscaCodigoCadastrado(codigo) {
        TireService.listAllByCod(codigo)
          .then(function(data) {
            if(data.data.length > 0) {
              vm.errorTire = true;
            } else {
              vm.errorTire = false;
            }
          })
        };

    };

    /* @ngInject */
    function TireControllerEdit(TireService, VehicleService, $state, $stateParams) {
      var vm = this;
      vm.tire = listOne();
      vm.edit = edit;
      vm.buscaCodigoCadastrado = buscaCodigoCadastrado;
      listAll();

      function listOne() {
        return TireService.listOne($stateParams.id)
          .then(function(data) {
            vm.tire = data.data;
            return vm.tire;
          })
      };

      function listAll() {
        return VehicleService.listAllWithJoin()
          .then(function(data) {
            vm.listVehicle = data.data;
            return vm.listVehicle;
          })
      };

      function buscaCodigoCadastrado(codigo) {
        TireService.listAllByCod(codigo)
          .then(function(data) {
            if(data.data.length > 0) {
              vm.errorTire = true;
            } else {
              vm.errorTire = false;
            }
          })
        };

      function edit() {
        return TireService.update(vm.tire, $stateParams.id)
          .then(function(data) {
            $state.go('listTire');
          })
      }
    };

})();
