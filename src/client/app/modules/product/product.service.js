(function() {
    'use strict';

    angular
        .module('app')
        .service('ProductService', ProductService);

    ProductService.$inject = ['$http'];

    /* @ngInject */
    function ProductService($http) {

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
        return $http.post('/products',data)
      };

      function listOne(id) {
        return $http.get('/products/'+id, {params: {id:id}})
      };

      function listAll() {
        return $http.get('/products')
      };

      function listAllByCod(cod) {
        return $http.get('/productsByCodigo/'+cod,{params: {cod:cod}})
      }

      function update(data,id) {
        return $http.put('/products/'+id, {params: {id:id}})
      };

      function remove(id) {
        return $http.delete('/products/'+id, {params:{id:id}})
      };

    }
})();
