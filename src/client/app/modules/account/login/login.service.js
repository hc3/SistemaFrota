(function() {
    'use strict';

    angular
        .module('app')
        .factory('LoginService', LoginService);

    //LoginService.$inject = ['dependencies'];

    /* @ngInject */
    function LoginService($http, $localStorage) {

        var service = {
            login: login,
            logout: logout
        };

        return service;

        function login(email, password, callback) {
          $http.post('/token', {email: email, password: password})
            .success(function(response) {

              if(response.token) {

                $localStorage.currentUser = {email: email, token: response.token};

                $http.defaults.headers.common.Authorization = 'Baerer' + response.token;

                callback(true);
              } else {
                callback(false);
              }
            })
        }

        function logout() {
          delete $localStorage.currentUser;
          $http.defaults.headers.common.Authorization = '';
        }
        
    }
})();
