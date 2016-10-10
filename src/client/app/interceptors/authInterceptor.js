(function() {
    'use strict';

    angular
        .module('app')
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q','$location','$localStorage'];

    /* @ngInject */
    function authInterceptor($q, $location, $localStorage) {

        var service = {
            request: request,
            responseError: responseError
        };

        return service;

        function request(config) {
          config.headers = config.headers || {};
          console.log("retorno do getItem: ",localStorage.getItem('token'));
          if(localStorage.getItem('token')) {
            config.headers.Authorization = 'Baerer' + localStorage.getItem('token');
          }
          return config;
        }

        function responseError(rejection) {
          if(rejection.status === 401 || rejection.status === 403) {
            $location.path('/error/nao-auth');
          }
          return $q.reject(rejection);
        }
    }
})();
