(function() {

  angular
    .module('app')
    .config(config);

    config.$inject = ['$stateProvider','$locationProvider'];

    /* @ngInject */
    function config($stateProvider, $locationProvider, $urlRouterProvider) {

      $stateProvider

        .state('listProduct', {
            url:'/products',
            templateUrl:'app/modules/product/templates/product_list.html',
            controller:'ProductControllerList',
            controllerAs:'vm'
        })

        .state('newProduct', {
          url:'/products/new',
          templateUrl:'app/modules/product/templates/product_new.html',
          controller:'ProductControllerNew',
          controllerAs:'vm'
        })

        .state('editProduct', {
          url:'/products/:id/edit',
          templateUrl:'app/modules/product/templates/product_update.html',
          controller:'ProductControllerEdit',
          controllerAs:'vm'
        })

        .state('viewProduct', {
          url:'/products/:id/view',
          templateUrl:'app/modules/product/templates/product_view.html',
          controller:'ProductControllerOne',
          controllerAs:'vm'
        });

        $locationProvider.html5Mode(true);
    }

})();
