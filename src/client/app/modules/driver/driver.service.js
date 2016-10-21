(function() {
    'use strict';

    angular
        .module('app')
        .service('DriverService', DriverService);

    DriverService.$inject = ['$http'];

    /* @ngInject */
    function DriverService($http) {

      var service = {
        insert: insert,
        listOne: listOne,
        listAll: listAll,
        listByCodigo: listByCodigo,
        update: update,
        remove: remove
      };

      return service;

      function insert(data) {
        return $http.post('/drivers',data)
      }

      function listOne(id) {
        return $http.get('/drivers/'+id,{params: {id:id}})
      }

      function listByCodigo(cod) {
        return $http.get('/driversByCodigo/'+cod,{params: {cod:cod}})
      }

      function listAll() {
        return $http.get('/drivers')
      }

      function update(data,id) {
        return $http.put('/drivers/'+id,data,{params: {id: id}})
      }

      function remove(id) {
        return $http.delete('/drivers/'+id,{params: {id:id}})
      }


    }
})();
