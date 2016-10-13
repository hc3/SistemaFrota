"use strict";

!function () {
  "use strict";
  function r(r, e, t) {
    function n() {
      return r.listAll().then(function (r) {
        return i.listDriver = r.data, i.listDriver;
      });
    }var i = this;i.listDriver = [], n();
  }function e(r, e, t) {
    function n() {
      return r.insert(o.driver).then(function (r) {
        i(o.form_new);
      }).catch(function (r) {
        console.log("Retorno do erro no insert: ", r), o.errorDrivers.insertError = "Erro ao cadastrar Motorista";
      });
    }function i(r) {
      r && (o.driver = {}, r.$setPristine(), r.$setUntouched());
    }var o = this;o.driver = {}, o.errorDrivers = {}, o.insert = n;
  }function t(r, e, t) {
    function n() {
      return r.listOne(t.id).then(function (r) {
        return o.driverOne = r.data, o.driverOne;
      });
    }function i() {
      return r.remove(t.id).then(function (r) {
        e.go("listDriver");
      });
    }var o = this;o.driverOne = n(), o.removeOne = i;
  }function n(r, e, t) {
    function n() {
      return r.listOne(t.id).then(function (r) {
        return o.driver = r.data, o.driver;
      });
    }function i() {
      return r.update(o.driver, t.id).then(function (r) {
        e.go("listDriver");
      });
    }var o = this;o.driver = n(), o.edit = i;
  }angular.module("app").controller("DriverControllerList", r).controller("DriverControllerOne", t).controller("DriverControllerNew", e).controller("DriverControllerEdit", n), e.$inject = ["DriverService", "$state", "$stateParams"], r.$inject = ["DriverService", "$state", "$stateParams"], t.$inject = ["DriverService", "$state", "$stateParams"], n.$inject = ["DriverService", "$state", "$stateParams"];
}();