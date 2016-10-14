(function() {
    'use strict';

    angular
        .module('app')
        .directive('menu', menu);

    /* @ngInject */
    function menu() {
        var menu = {
            restrict: 'EA',
            templateUrl: 'app/layout/menu/menu-ui.html',
            scope: {
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return menu;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    //Controller.$inject = ['dependencies'];

    /* @ngInject */
    function Controller() {
        var vm = this;
        vm.navCollapsed = true;

        activate();

        function activate() {
          
        }
    }
})();
