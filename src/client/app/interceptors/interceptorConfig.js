angular
    .module('app')
    .config(config);

function config($httpProvider) {
  // console.log($httpProvider);
  $httpProvider.interceptors.push('timestampInterceptor');
}
