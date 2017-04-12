(function() {
    'use strict';

    angular
        .module('app')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$http'];

    /* @ngInject */
    function LoginService($http) {

        var service = {
            login: login,
            logout: logout
        };

        return service;

        function login(user, callback) {
          $http.post('/token', {email: user.email, password: user.password})
            .then(function(response) {

              if(response.data.token) {
                var token = 'JWT ' + response.data.token;
                localStorage.currentUser = {email: user.email, token: response.data.token};
                $http.defaults.headers.common.Authorization =  response.data.token;
                localStorage.setItem('token',token);

                callback(true);
              } else {
                callback(false);
              }
            })
        }

        function logout() {
          delete localStorage.currentUser;
          $http.defaults.headers.common.Authorization = '';
        }

    }
})();
