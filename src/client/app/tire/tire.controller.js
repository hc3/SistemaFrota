(function() {
    'use strict';

    angular
        .module('app')
        .controller('TireController', TireController);

    TireController.$inject = ['dependencies'];

    /* @ngInject */
    function TireController(dependencies) {
        var vm = this;
        vm.tire = {};
        vm.listTire = [];

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
