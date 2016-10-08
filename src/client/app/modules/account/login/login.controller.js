(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];

    /* @ngInject */
    function LoginController(LoginService) {
        var vm = this;
        vm.isAuthenticated;
        vm.login = login;

        function login() {
          return LoginService.login(user)
            .success(function(data) {
              console.log('Sucesso', data);
            })
            .error(function(err) {
              console.log('Deu zica :O',err);
            })
        }

        activate();

        function activate() {

        }
    }
})();
