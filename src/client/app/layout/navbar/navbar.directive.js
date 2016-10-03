(function() {
    'use strict';

    angular
        .module('app')
        .directive('navbar', navbar);

    /* @ngInject */
    function navbar() {
        var navbar = {
            restrict: 'EA',
            templateUrl: 'app/layout/navbar/navbar.html',
            scope: {
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return navbar;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    //Controller.$inject = ['dependencies'];

    /* @ngInject */
    function Controller() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
