"use strict";

function config(r) {
  r.interceptors.push("authInterceptor");
}!function () {
  "use strict";
  angular.module("app", ["ui.router", "ngStorage", "app.driver", "app.tire", "app.vehicle", "app.login"]);
}(), function () {
  "use strict";
  function r(r, e) {
    function t(r) {
      return r.headers = r.headers || {}, localStorage.getItem("token") && (r.headers.Authorization = localStorage.getItem("token")), r;
    }function n(t) {
      return 401 !== t.status && 403 !== t.status || e.path("/error/nao-auth"), r.reject(t);
    }var i = { request: t, responseError: n };return i;
  }angular.module("app").factory("authInterceptor", r), r.$inject = ["$q", "$location"];
}(), angular.module("app").config(config), config.$inject = ["$httpProvider"], function () {
  "use strict";
  function r() {
    return { request: function request(r) {
        return console.log(r.url), r;
      } };
  }angular.module("app").factory("timestampInterceptor", r);
}(), function () {
  "use strict";
  function r() {
    function r(r, e, t, n) {}var t = { restrict: "EA", templateUrl: "app/layout/menu/basicMenu.html", scope: {}, link: r, controller: e, controllerAs: "vm", bindToController: !0 };return t;
  }function e() {
    function r() {}r();
  }angular.module("app").directive("menu", r);
}(), function () {
  "use strict";
  function r() {
    function r(r, e, t, n) {}var t = { restrict: "EA", templateUrl: "app/layout/navbar/navbar.html", scope: {}, link: r, controller: e, controllerAs: "vm", bindToController: !0 };return t;
  }function e() {
    function r() {}r();
  }angular.module("app").directive("navbar", r);
}(), function () {
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
}(), function () {
  "use strict";
  angular.module("app.driver", []);
}(), function () {
  function r(r, e) {
    r.state("listDriver", { url: "/drivers", templateUrl: "app/modules/driver/templates/driver_list.html", controller: "DriverControllerList", controllerAs: "vm" }).state("newDriver", { url: "/drivers/new", templateUrl: "app/modules/driver/templates/driver_new.html", controller: "DriverControllerNew", controllerAs: "vm" }).state("editDriver", { url: "/drivers/:id/edit", templateUrl: "app/modules/driver/templates/driver_update.html", controller: "DriverControllerEdit", controllerAs: "vm" }).state("viewDriver", { url: "/drivers/:id/view", templateUrl: "app/modules/driver/templates/driver_view.html", controller: "DriverControllerOne", controllerAs: "vm" }), e.html5Mode(!0);
  }angular.module("app").config(r), r.$inject = ["$stateProvider", "$locationProvider"];
}(), function () {
  "use strict";
  function r(r) {
    function e(e) {
      return r.post("/drivers", e);
    }function t(e) {
      return r.get("/drivers/" + e, { params: { id: e } });
    }function n() {
      return r.get("/drivers");
    }function i(e, t) {
      return r.put("/drivers/" + t, e, { params: { id: t } });
    }function o(e) {
      return r.delete("/drivers/" + e, { params: { id: e } });
    }var l = { insert: e, listOne: t, listAll: n, update: i, remove: o };return l;
  }angular.module("app").service("DriverService", r), r.$inject = ["$http"];
}(), function () {
  "use strict";
  function r(r) {
    function e() {}function t() {}function n() {}function i() {}function o() {}function l() {}var u = this;u.tire = {}, u.listTire = [], u.insert = e, u.listOne = t, u.listAll = n, u.update = i, u.remove = o, l();
  }angular.module("app").controller("TireController", r), r.$inject = ["dependencies"];
}(), function () {
  "use strict";
  angular.module("app.tire", []);
}(), function () {
  "use strict";
  function r() {
    function r() {}function e() {}function t() {}function n() {}function i() {}var o = { insert: r, listOne: e, listAll: t, update: n, remove: i };return o;
  }angular.module("app").service("TireService", r);
}(), function () {
  function r(r) {
    r.state("erro401", { url: "/error/nao-auth", templateUrl: "app/modules/erros/templates/401.html" });
  }angular.module("app").config(r), r.$inject = ["$stateProvider"];
}(), function () {
  "use strict";
  function r(r) {
    function e() {}function t() {}function n() {}function i() {}function o() {}function l() {}var u = this;u.vehicle = {}, u.listVehicle = [], u.insert = e, u.listOne = t, u.listAll = n, u.update = i, u.remove = o, l();
  }angular.module("app").controller("VehicleController", r), r.$inject = ["dependencies"];
}(), function () {
  "use strict";
  angular.module("app.vehicle", []);
}(), function () {
  "use strict";
  function r() {
    function r() {}function e() {}function t() {}function n() {}function i() {}var o = { insert: r, listOne: e, listAll: t, update: n, remove: i };return o;
  }angular.module("app").service("VehicleService", r);
}(), function () {
  "use strict";
  function r(r, e, t) {
    function n() {
      return r.logout();
    }function i() {
      o.loading = !0, r.login(o.user, function (r) {
        r === !0 ? e.path("/drivers") : (o.error = "Usuário ou senha incorretos", o.loading = !1);
      });
    }var o = this;o.login = i, n();
  }angular.module("app").controller("LoginController", r), r.$inject = ["LoginService", "$location", "$http"];
}(), function () {
  "use strict";
  angular.module("app.login", []);
}(), function () {
  function r(r, e, t) {
    t.otherwise("/login"), r.state("login", { url: "/login", templateUrl: "app/modules/account/login.html", controller: "LoginController", controllerAs: "vm" }), e.html5Mode(!0);
  }angular.module("app").config(r), r.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
}(), function () {
  "use strict";
  function r(r, e) {
    function t(t, n) {
      r.post("/token", { email: t.email, password: t.password }).success(function (i) {
        if (i.token) {
          var o = "JWT " + i.token;e.currentUser = { email: t.email, token: i.token }, r.defaults.headers.common.Authorization = i.token, localStorage.setItem("token", o), n(!0);
        } else n(!1);
      });
    }function n() {
      delete e.currentUser, r.defaults.headers.common.Authorization = "";
    }var i = { login: t, logout: n };return i;
  }angular.module("app").factory("LoginService", r), r.$inject = ["$http", "$localStorage"];
}();