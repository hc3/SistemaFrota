"use strict";

function config(n) {
  n.interceptors.push("authInterceptor");
}angular.module("app").config(config);