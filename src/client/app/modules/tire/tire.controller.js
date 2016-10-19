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
    TireControllerEdit.$inject = ['TireService', '$state', '$stateParams'];

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
      listAll();

      function insert() {
        vm.tire.trash = false;
          return TireService.insert(vm.tire)
            .then(function(data) {
              cleanForm(vm.form_new);
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

      function cleanForm(form_new) {
        if(form_new) {
          vm.tire = {};
          listAll();
          form_new.$setPristine();
          form_new.$setUntouched();
        }
      };

    };

    /* @ngInject */
    function TireControllerEdit(TireService, $state, $stateParams) {
      var vm = this;
      vm.tire = listOne();
      vm.edit = edit;

      function listOne() {
        return TireService.listOne($stateParams.id)
          .then(function(data) {
            vm.tire = data.data;
            return vm.tire;
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
