(function() {
    'use strict';

    angular
        .module('app')
        .service('VehicleService', VehicleService);

    VehicleService.$inject = ['$http'];

    /* @ngInject */
    function VehicleService($http) {

      var service = {
        insert: insert,
        listOne: listOne,
        listAll: listAll,
        listAllWithJoin: listAllWithJoin,
        listAllByPlaca: listAllByPlaca,
        update: update,
        remove: remove
      };

      return service;

      function insert(data) {
        return $http.post('/vehicles',data)
      }

      function listOne(id) {
        return $http.get('/vehicles/'+id, {params: {id:id}})
      }

      function listAll() {
        return $http.get('/vehicles')
      }

      function listAllWithJoin() {
        return $http.get('/vehiclesJoin')
      }

      function listOneWithJoin(id) {
        return $http.get('/vehicleOneJoin/'+id, {params: {id:id}})
      }

      function listAllByPlaca(placa) {
        return $http.get('/vehicleByPlaca/'+placa, {params: {placa:placa}})
      }

      function update(data,id) {
        return $http.put('/vehicles/'+id,data,{params:{id:id}})
      }

      function remove(id) {
        return $http.delete('/vehicles/'+id,{params:{id:id}})
      }
    }
})();
