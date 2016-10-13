"use strict";

!function () {
  function o(o, l, r) {
    r.otherwise("/login"), o.state("login", { url: "/login", templateUrl: "app/modules/account/login.html", controller: "LoginController", controllerAs: "vm" }), l.html5Mode(!0);
  }angular.module("app").config(o), o.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
}();