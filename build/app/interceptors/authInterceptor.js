"use strict";

!function () {
  "use strict";
  function t(t, e) {
    function r(t) {
      return t.headers = t.headers || {}, localStorage.getItem("token") && (t.headers.Authorization = localStorage.getItem("token")), t;
    }function o(r) {
      return 401 !== r.status && 403 !== r.status || e.path("/error/nao-auth"), t.reject(r);
    }var a = { request: r, responseError: o };return a;
  }angular.module("app").factory("authInterceptor", t), t.$inject = ["$q", "$location"];
}();