(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductControllerList', ProductControllerList)
        .controller('ProductControllerNew', ProductControllerNew)
        .controller('ProductControllerEdit', ProductControllerEdit)
        .controller('ProductControllerOne', ProductControllerOne);

    ProductControllerOne.$inject = ['ProductService', '$state', '$stateParams'];
    ProductControllerList.$inject = ['ProductService', '$state'];
    ProductControllerNew.$inject = ['ProductService', '$state'];
    ProductControllerEdit.$inject = ['ProductService', '$state', '$stateParams'];

    /* @ngInject */
    function ProductControllerOne(ProductService, $state, $stateParams) {
        var vm = this;
        vm.productOne = listOne();
        vm.removeOne = removeOne;

        function listOne() {
          return ProductService.listOne($stateParams.id)
            .then(function(data) {
              vm.productOne = data.data;
              return vm.productOne;
            })
        };

        function removeOne() {
          return ProductService.remove($stateParams.id)
            .then(function(data) {
              $state.go('listProduct');
            })
        }
    };

    /* @ngInject */
    function ProductControllerList(ProductService, $state) {
      var vm = this;
      vm.listProduct = [];
      listAll();

      function listAll() {
        return ProductService.listAll()
          .then(function(data) {
            vm.listProduct = data.data;
            return vm.listProduct;
          })
      };

    };

    /* @ngInject */
    function ProductControllerNew(ProductService, $state) {
      var vm = this;
      vm.product = {};
      vm.insert = insert;
      vm.errorProduct = false;
      vm.buscaCodigoCadastrado = buscaCodigoCadastrado;
      listAll();

      function insert() {
        vm.product.trash = false;
          return ProductService.insert(vm.product)
            .then(function(data) {
              cleanForm(vm.productForm);
            })
            .catch(function(err) {
              console.log('Retorno do erro do insert: ',err);
            })
      };

      function cleanForm(productForm) {
        if(productForm) {
          vm.product = {};
          listAll();
          productForm.$setPristine();
          productForm.$setUntouched();
        }
      };

      function buscaCodigoCadastrado(codigo) {
        ProductService.listAllByCod(codigo)
          .then(function(data) {
            if(data.data.length > 0) {
              vm.errorProduct = true;
            } else {
              vm.errorProduct = false;
            }
          })
        };

    };

    /* @ngInject */
    function ProductControllerEdit(ProductService, $state, $stateParams) {
      var vm = this;
      vm.product = listOne();
      vm.edit = edit;
      vm.buscaCodigoCadastrado = buscaCodigoCadastrado;
      listAll();

      function listOne() {
        return ProductService.listOne($stateParams.id)
          .then(function(data) {
            vm.product = data.data;
            return vm.product;
          })
      };

      function buscaCodigoCadastrado(codigo) {
        ProductService.listAllByCod(codigo)
          .then(function(data) {
            if(data.data.length > 0) {
              vm.errorProduct = true;
            } else {
              vm.errorProduct = false;
            }
          })
        };

      function edit() {
        return ProductService.update(vm.product, $stateParams.id)
          .then(function(data) {
            $state.go('listProduct');
          })
      }
    };

})();
