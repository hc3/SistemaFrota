(function() {
    'use strict';

    angular
        .module('app', [
          'ui.router',
          'ngStorage',
          'ngMask',
          'ui.bootstrap',
          'app.driver',
          'app.tire',
          'app.vehicle',
          'app.login'
        ])
})();
