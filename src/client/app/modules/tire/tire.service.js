(function() {
    'use strict';

    angular
        .module('app')
        .service('TireService', TireService);

    TireService.$inject = ['$http'];

    /* @ngInject */
    function TireService($http) {

      var service = {
        insert: insert,
        listOne: listOne,
        listAll: listAll,
        listAllWithJoin: listAllWithJoin,
        listOneWithJoin: listOneWithJoin,
        listAllByCod: listAllByCod,
        update: update,
        remove: remove
      };

      return service;

      function insert(data) {
        return $http.post('/tires',data)
      };

      function listOne(id) {
        return $http.get('/tires/'+id, {params: {id:id}})
      };

      function listOneWithJoin(id) {
        return $http.get('/tiresWithJoin/'+id, {params: {id:id}})
      };

      function listAll() {
        return $http.get('/tires')
      };

      function listAllByCod(cod) {
        return $http.get('/tiresByCodigo/'+cod,{params: {cod:cod}})
      }

      function listAllWithJoin() {
        return $http.get('/tiresWithJoin')
      };

      function update(data,id) {
        return $http.put('/tires/'+id, {params: {id:id}})
      };

      function remove(id) {
        return $http.delete('/tires/'+id, {params:{id:id}})
      };

    }
})();
