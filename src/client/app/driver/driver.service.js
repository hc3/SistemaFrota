(function() {
    'use strict';

    angular
        .module('app')
        .service('DriverService', DriverService);

    //DriverService.$inject = ['dependencies'];

    /* @ngInject */
    function DriverService() {

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
