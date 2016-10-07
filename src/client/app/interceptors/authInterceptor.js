(function() {
    'use strict';

    angular
        .module('app')
        .factory('authInterceptor', authInterceptor);

    //authInterceptor.$inject = ['dependencies'];

    /* @ngInject */
    function authInterceptor() {
        var service = {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError
        };

        return service;

        function request(config) {
          config.headers = config.headers || {};
          if($cookies.get('token')) {
            config.headers.Authorization = 'Baerer' + $cookies.get('token');
          }
          return config;
        }

        function requestError() {

        }

        function response() {

        }

        function responseError() {

        }
    }
})();
