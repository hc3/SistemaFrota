(function() {
    'use strict';

    angular
        .module('app')
        .controller('DriverController', DriverController);

    DriverController.$inject = ['dependencies'];

    /* @ngInject */
    function DriverController(dependencies) {
        var vm = this;
        vm.driver = {};
        vm.listDriver = [];

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
