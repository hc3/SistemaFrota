(function() {
    'use strict';

    angular
        .module('app')
        .controller('VehicleController', VehicleController);

    VehicleController.$inject = ['dependencies'];

    /* @ngInject */
    function VehicleController(dependencies) {
        var vm = this;
        vm.vehicle = {};
        vm.listVehicle = [];

        vm.insert = insert;
        vm.listOne = listOne;
        vm.listAll = listAll;
        vm.update = update;
        vm.remove = remove;

        function insert() {

        }

        function listOne() {

        }

        function listAll() {

        }

        function update() {

        }

        function remove() {


        }

        activate();

        function activate() {

        }
    }
})();
