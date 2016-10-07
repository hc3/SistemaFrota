(function() {
    'use strict';

    angular
        .module('app')
        .factory('timestampInterceptor', timestampInterceptor);

    //timestampInterceptor.$inject = ['dependencies'];

    /* @ngInject */
    function timestampInterceptor() {
      return {
        request: function(config) {
          console.log(config.url);
          return config;
        }
      }
    }
})();
