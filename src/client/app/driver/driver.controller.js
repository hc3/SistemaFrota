(function() {
    'use strict';

    angular
        .module('app')
        .controller('DriverController', DriverController);

    //DriverController.$inject = ['dependencies'];

    /* @ngInject */
    function DriverController(DriverService) {

        var vm = this;
        vm.driver = {};
        vm.listDriver = [];

        vm.insert = insert;
        vm.listOne = listOne;
        vm.listAll = listAll;
        vm.update = update;
        vm.remove = remove;

        vm.cleanForm = cleanForm;

        function insert() {

        }

        function listOne() {

        }

        function listAll() {
          return DriverService.listAll()
            .then(function(data) {
              console.log('retorno do listall: ',data);
              vm.listDriver = data;
              return vm.listDriver;
            })
        }

        function update() {

        }

        function remove() {

        }

        function cleanForm() {

        }

        listAll();
    }
})();
