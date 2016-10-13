"use strict";

!function () {
  "use strict";
  function e(e, t) {
    function o(o, n) {
      e.post("/token", { email: o.email, password: o.password }).success(function (a) {
        if (a.token) {
          var r = "JWT " + a.token;t.currentUser = { email: o.email, token: a.token }, e.defaults.headers.common.Authorization = a.token, localStorage.setItem("token", r), n(!0);
        } else n(!1);
      });
    }function n() {
      delete t.currentUser, e.defaults.headers.common.Authorization = "";
    }var a = { login: o, logout: n };return a;
  }angular.module("app").factory("LoginService", e), e.$inject = ["$http", "$localStorage"];
}();