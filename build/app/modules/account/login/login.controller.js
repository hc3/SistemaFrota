"use strict";

!function () {
  "use strict";
  function o(o, n, i) {
    function r() {
      return o.logout();
    }function t() {
      e.loading = !0, o.login(e.user, function (o) {
        o === !0 ? n.path("/drivers") : (e.error = "Usuário ou senha incorretos", e.loading = !1);
      });
    }var e = this;e.login = t, r();
  }angular.module("app").controller("LoginController", o), o.$inject = ["LoginService", "$location", "$http"];
}();