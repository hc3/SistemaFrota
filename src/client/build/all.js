"use strict";

function config(e) {
  e.interceptors.push("authInterceptor");
}!function () {
  "use strict";
  angular.module("app", ["ui.router", "ngStorage", "ui.bootstrap", "app.driver", "app.tire", "app.vehicle", "app.login"]);
}(), function () {
  "use strict";
  function e(e, t) {
    function r(e) {
      return e.headers = e.headers || {}, localStorage.getItem("token") && (e.headers.Authorization = localStorage.getItem("token")), e;
    }function n(r) {
      return 401 !== r.status && 403 !== r.status || t.path("/error/nao-auth"), e.reject(r);
    }var i = { request: r, responseError: n };return i;
  }angular.module("app").factory("authInterceptor", e), e.$inject = ["$q", "$location"];
}(), angular.module("app").config(config), config.$inject = ["$httpProvider"], function () {
  "use strict";
  function e() {
    return { request: function request(e) {
        return console.log(e.url), e;
      } };
  }angular.module("app").factory("timestampInterceptor", e);
}(), function () {
  "use strict";
  function e() {
    function e(e, t, r, n) {}var r = { restrict: "EA", templateUrl: "app/layout/menu/menu-ui.html", scope: {}, link: e, controller: t, controllerAs: "vm", bindToController: !0 };return r;
  }function t() {
    function e() {}var t = this;t.navCollapsed = !0, e();
  }angular.module("app").directive("menu", e);
}(), function () {
  "use strict";
  function e() {
    function e(e, t, r, n) {}var r = { restrict: "EA", templateUrl: "app/layout/navbar/navbar.html", scope: {}, link: e, controller: t, controllerAs: "vm", bindToController: !0 };return r;
  }function t() {
    function e() {}e();
  }angular.module("app").directive("navbar", e);
}(), function () {
  "use strict";
  function e(e, t, r) {
    function n() {
      return e.listAll().then(function (e) {
        return i.listDriver = e.data, i.listDriver;
      }).catch(function (e) {
        console.log("Erro ao buscar motoristas: ", e);
      });
    }var i = this;i.listDriver = [], n();
  }function t(e, t, r) {
    function n() {
      return e.insert(o.driver).then(function (e) {
        i(o.form_new);
      }).catch(function (e) {
        o.errorDrivers.insertError = "Erro ao cadastrar Motorista";
      });
    }function i(e) {
      e && (o.driver = {}, e.$setPristine(), e.$setUntouched());
    }var o = this;o.driver = {}, o.errorDrivers = {}, o.insert = n;
  }function r(e, t, r) {
    function n() {
      return e.listOne(r.id).then(function (e) {
        return o.driverOne = e.data, o.driverOne;
      }).catch(function (e) {
        console.log("erro ao buscar o motorista: ", e);
      });
    }function i() {
      return e.remove(r.id).then(function (e) {
        t.go("listDriver");
      }).catch(function (e) {
        console.log("erro ao remover motorista: ", e);
      });
    }var o = this;o.driverOne = n(), o.removeOne = i;
  }function n(e, t, r) {
    function n() {
      return e.listOne(r.id).then(function (e) {
        return o.driver = e.data, o.driver;
      }).catch(function (e) {
        console.log("erro ao buscar motorista: ", e);
      });
    }function i() {
      return e.update(o.driver, r.id).then(function (e) {
        t.go("listDriver");
      }).catch(function (e) {
        console.log("erro ao editar motorista: ", e);
      });
    }var o = this;o.driver = n(), o.edit = i;
  }angular.module("app").controller("DriverControllerList", e).controller("DriverControllerOne", r).controller("DriverControllerNew", t).controller("DriverControllerEdit", n), t.$inject = ["DriverService", "$state", "$stateParams"], e.$inject = ["DriverService", "$state", "$stateParams"], r.$inject = ["DriverService", "$state", "$stateParams"], n.$inject = ["DriverService", "$state", "$stateParams"];
}(), function () {
  "use strict";
  angular.module("app.driver", []);
}(), function () {
  function e(e, t) {
    e.state("listDriver", { url: "/drivers", templateUrl: "app/modules/driver/templates/driver_list.html", controller: "DriverControllerList", controllerAs: "vm" }).state("newDriver", { url: "/drivers/new", templateUrl: "app/modules/driver/templates/driver_new.html", controller: "DriverControllerNew", controllerAs: "vm" }).state("editDriver", { url: "/drivers/:id/edit", templateUrl: "app/modules/driver/templates/driver_update.html", controller: "DriverControllerEdit", controllerAs: "vm" }).state("viewDriver", { url: "/drivers/:id/view", templateUrl: "app/modules/driver/templates/driver_view.html", controller: "DriverControllerOne", controllerAs: "vm" }), t.html5Mode(!0);
  }angular.module("app").config(e), e.$inject = ["$stateProvider", "$locationProvider"];
}(), function () {
  "use strict";
  function e(e) {
    function t(t) {
      return e.post("/drivers", t);
    }function r(t) {
      return e.get("/drivers/" + t, { params: { id: t } });
    }function n() {
      return e.get("/drivers");
    }function i(t, r) {
      return e.put("/drivers/" + r, t, { params: { id: r } });
    }function o(t) {
      return e.delete("/drivers/" + t, { params: { id: t } });
    }var l = { insert: t, listOne: r, listAll: n, update: i, remove: o };return l;
  }angular.module("app").service("DriverService", e), e.$inject = ["$http"];
}(), function () {
  function e(e) {
    e.state("erro401", { url: "/error/nao-auth", templateUrl: "app/modules/erros/templates/401.html" });
  }angular.module("app").config(e), e.$inject = ["$stateProvider"];
}(), function () {
  "use strict";
  function e(e) {
    function t() {}function r() {}function n() {}function i() {}function o() {}function l() {}var c = this;c.tire = {}, c.listTire = [], c.insert = t, c.listOne = r, c.listAll = n, c.update = i, c.remove = o, l();
  }angular.module("app").controller("TireController", e), e.$inject = ["dependencies"];
}(), function () {
  "use strict";
  angular.module("app.tire", []);
}(), function () {
  "use strict";
  function e() {
    function e() {}function t() {}function r() {}function n() {}function i() {}var o = { insert: e, listOne: t, listAll: r, update: n, remove: i };return o;
  }angular.module("app").service("TireService", e);
}(), function () {
  "use strict";
  function e(e, t, r) {
    function n() {
      return e.listOne(r.id).then(function (e) {
        return o.vehicleOne = e.data, o.vehicleOne;
      });
    }function i() {
      return e.remove(r.id).then(function (e) {
        t.go("listVehicle");
      });
    }var o = this;o.vehicleOne = n(), o.removeOne = i;
  }function t(e, t, r) {
    function n() {
      return e.listAll().then(function (e) {
        return i.listVehicle = e.data, i.listVehicle;
      });
    }var i = this;i.listVehicle = [], i.listDriver = [], n();
  }function r(e, t, r, n) {
    function i() {
      return e.insert(a.vehicle).then(function (e) {
        c(a.form_new);
      }).catch(function (e) {
        console.log("Retorno do erro no insert: ", e), a.errorVehicles.insertError = "Erro ao cadastrar Veiculo";
      });
    }function o() {
      return t.listAll().then(function (e) {
        return console.log("retorno da busca de drivers: ", e.data), a.listDriver = e.data, u.forEach(function (e) {
          a.listDriver.forEach(function (t, r) {
            t.id === e.driver_id && a.listDriver.splice(r, 1);
          });
        }), a.listDriver;
      });
    }function l() {
      return e.listAll().then(function (e) {
        return u = e.data;
      });
    }function c(e) {
      e && (a.vehicle = {}, e.$setPristine(), e.$setUntouched());
    }var a = this,
        u = l();a.vehicle = {}, a.listDriver = [], a.errorVehicles = {}, a.insert = i, l(), o();
  }function n(e, t, r, n) {
    function i() {
      return e.listOne(n.id).then(function (e) {
        return c.vehicle = e.data, c.vehicle;
      });
    }function o() {
      return t.listAll().then(function (e) {
        return c.listDriver = e.data, c.listDriver;
      });
    }function l() {
      return e.update(c.vehicle, n.id).then(function (e) {
        r.go("listVehicle");
      });
    }var c = this;c.vehicle = i(), c.listDriver = [], c.edit = l, o();
  }angular.module("app").controller("VehicleControllerOne", e).controller("VehicleControllerList", t).controller("VehicleControllerNew", r).controller("VehicleControllerEdit", n), e.$inject = ["VehicleService", "$state", "$stateParams"], t.$inject = ["VehicleService", "$state", "$stateParams"], r.$inject = ["VehicleService", "DriverService", "$state", "$stateParams"], n.$inject = ["VehicleService", "DriverService", "$state", "$stateParams"];
}(), function () {
  "use strict";
  angular.module("app.vehicle", []);
}(), function () {
  function e(e, t) {
    e.state("listVehicle", { url: "/vehicles", templateUrl: "app/modules/vehicle/templates/vehicle_list.html", controller: "VehicleControllerList", controllerAs: "vm" }).state("newVehicle", { url: "/vehicles/new", templateUrl: "app/modules/vehicle/templates/vehicle_new.html", controller: "VehicleControllerNew", controllerAs: "vm" }).state("editVehicle", { url: "/vehicles/:id/edit", templateUrl: "app/modules/vehicle/templates/vehicle_update.html", controller: "VehicleControllerEdit", controllerAs: "vm" }).state("viewVehicle", { url: "/vehicles/:id/view", templateUrl: "app/modules/vehicle/templates/vehicle_view.html", controller: "VehicleControllerOne", controllerAs: "vm" }), t.html5Mode(!0);
  }angular.module("app").config(e), e.$inject = ["$stateProvider", "$locationProvider"];
}(), function () {
  "use strict";
  function e(e) {
    function t(t) {
      return e.post("/vehicles", t);
    }function r(t) {
      return e.get("/vehicles/" + t, { params: { id: t } });
    }function n() {
      return e.get("/vehicles");
    }function i(t, r) {
      return e.put("/vehicles/" + r, t, { params: { id: r } });
    }function o(t) {
      return e.delete("/vehicles/" + t, { params: { id: t } });
    }var l = { insert: t, listOne: r, listAll: n, update: i, remove: o };return l;
  }angular.module("app").service("VehicleService", e), e.$inject = ["$http"];
}(), function () {
  "use strict";
  function e(e, t, r) {
    function n() {
      return e.logout();
    }function i() {
      o.loading = !0, e.login(o.user, function (e) {
        e === !0 ? t.path("/drivers") : (o.error = "Usuário ou senha incorretos", o.loading = !1);
      });
    }var o = this;o.login = i, n();
  }angular.module("app").controller("LoginController", e), e.$inject = ["LoginService", "$location", "$http"];
}(), function () {
  "use strict";
  angular.module("app.login", []);
}(), function () {
  function e(e, t, r) {
    r.otherwise("/"), e.state("login", { url: "/", templateUrl: "app/modules/account/login.html", controller: "LoginController", controllerAs: "vm" }), t.html5Mode(!0);
  }angular.module("app").config(e), e.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
}(), function () {
  "use strict";
  function e(e, t) {
    function r(r, n) {
      e.post("/token", { email: r.email, password: r.password }).success(function (i) {
        if (i.token) {
          var o = "JWT " + i.token;t.currentUser = { email: r.email, token: i.token }, e.defaults.headers.common.Authorization = i.token, localStorage.setItem("token", o), n(!0);
        } else n(!1);
      });
    }function n() {
      delete t.currentUser, e.defaults.headers.common.Authorization = "";
    }var i = { login: r, logout: n };return i;
  }angular.module("app").factory("LoginService", e), e.$inject = ["$http", "$localStorage"];
}();