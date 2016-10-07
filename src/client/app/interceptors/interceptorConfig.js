angular
    .module('app')
    .config(config);

function config($httpProvider) {
  $httpProvider.interceptors.push('timestampInterceptor');
  $httpProvider.interceptors.push('authInterceptor');

}
