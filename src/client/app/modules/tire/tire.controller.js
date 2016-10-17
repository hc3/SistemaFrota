(function() {
    'use strict';

    angular
        .module('app')
        .controller('TireControllerList', TireControllerList)
        .controller('TireControllerNew', TireControllerNew)
        .controller('TireControllerEdit', TireControllerEdit)
        .controller('TireControllerOne', TireControllerOne);

    TireControllerOne.$inject = ['TireService', '$state', 'stateParams'];
    TireControllerList.$inject = ['TireService', '$state'];
    TireControllerNew.$inject = ['TireService', '$state'];
    TireControllerEdit.$inject = ['TireService', '$state', 'stateParams'];

    /* @ngInject */
    function TireControllerOne(TireService, $state, stateParams) {
        var vm = this;
        vm.tireOne = listOne();
        vm.removeOne = removeOne;

        function listone() {
          return TireService.listOne($stateParams.id)
            .then(function(data) {
              vm.tireOne = data.data;
              return vm.tireOne;
            })
        };
    };

    /* @ngInject */
    function TireControllerList(TireService, $state) {
      var vm = this;
      vm.listTire = [];
      listAll();

      function listAll() {
        return TireService.listAll()
          .then(function(data) {
            vm.listTire = data.data;
            return vm.listTire;
          })
      };

    };

    /* @ngInject */
    function TireControllerNew(TireService, $state) {
      var vm = this;
      vm.tire = {};
      vm.listVehicle = [];
      vm.insertt = insert;

      function insert() {
          return TireService.insert(vm.tire)
            .then(function(data) {
              cleanForm(vm.form_new);
            })
            .catch(function(err) {
              console.log('Retorno do erro do insert: ',err);
            })
      };

      function cleanForm(form_new) {
        if(form_new) {
          vm.tire = {};
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
    }

})();
