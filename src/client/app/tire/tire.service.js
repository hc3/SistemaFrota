(function() {
    'use strict';

    angular
        .module('app')
        .service('TireService', TireService);

    //TireService.$inject = ['dependencies'];

    /* @ngInject */
    function TireService() {

      var service = {
        insert: insert,
        listOne: listOne,
        listAll: listAll,
        update: update,
        remove: remove
      };

      return service;

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
    }
})();
