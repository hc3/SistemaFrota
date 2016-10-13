"use strict";

!function () {
  function e(e) {
    e.state("erro401", { url: "/error/nao-auth", templateUrl: "app/modules/erros/templates/401.html" });
  }angular.module("app").config(e);
}();