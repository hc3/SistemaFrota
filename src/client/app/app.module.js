(function() {
    'use strict';

    angular
        .module('app', [
          'ui.router',
          'ngStorage',
          'ui.bootstrap',
          'app.driver',
          'app.tire',
          'app.vehicle',
          'app.login'
        ])
})();
