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

      function listAll() {
        return $http.get('/tires')
      };

      function update(data,id) {
        return $http.put('/tires/'+id, {params: {id:id}})
      };

      function remove(id) {
        return $http.delete('/tires/'+id, {params:{id:id}})
      };

    }
})();
