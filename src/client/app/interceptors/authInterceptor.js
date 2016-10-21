(function() {
    'use strict';

    angular
        .module('app')
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q','$location'];

    /* @ngInject */
    function authInterceptor($q, $location) {

        var service = {
            request: request,
            responseError: responseError
        };

        return service;

        function request(config) {
          //config.headers = config.headers || {};
          if(localStorage.getItem('token')) {
            config.headers.Authorization = localStorage.getItem('token');
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
