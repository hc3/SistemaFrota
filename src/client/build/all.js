"use strict";

function config(e) {
  e.interceptors.push("authInterceptor");
}!function () {
  "use strict";
  angular.module("app", ["ui.router", "ngStorage", "ngMask", "ui.bootstrap", "app.driver", "app.tire", "app.vehicle", "app.login"]);
}(), function () {
  "use strict";
  function e(e, t) {
    function r(e) {
      return e.headers = e.headers || {}, localStorage.getItem("token") && (e.headers.Authorization = localStorage.getItem("token")), e;
    }function i(r) {
      return 401 !== r.status && 403 !== r.status || t.path("/error/nao-auth"), e.reject(r);
    }var n = { request: r, responseError: i };return n;
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
    function e(e, t, r, i) {}var r = { restrict: "EA", templateUrl: "app/layout/menu/menu-ui.html", scope: {}, link: e, controller: t, controllerAs: "vm", bindToController: !0 };return r;
  }function t() {
    function e() {}var t = this;t.navCollapsed = !0, e();
  }angular.module("app").directive("menu", e);
}(), function () {
  "use strict";
  function e() {
    function e(e, t, r, i) {}var r = { restrict: "EA", templateUrl: "app/layout/navbar/navbar.html", scope: {}, link: e, controller: t, controllerAs: "vm", bindToController: !0 };return r;
  }function t() {
    function e() {}e();
  }angular.module("app").directive("navbar", e);
}(), function () {
  "use strict";
  function e(e, t, r) {
    function i() {
      return e.listAll().then(function (e) {
        return n.listDriver = e.data, n.listDriver;
      }).catch(function (e) {
        console.log("Erro ao buscar motoristas: ", e);
      });
    }var n = this;n.listDriver = [], i();
  }function t(e, t, r) {
    function i() {
      return e.insert(o.driver).then(function (e) {
        o.messageDriver.error = !1, n(o.driverForm);
      }).catch(function (e) {
        o.messageDriver.insertError = "Erro ao cadastrar Motorista";
      });
    }function n(e) {
      e && (o.driver = {}, e.$setPristine(), e.$setUntouched());
    }var o = this;o.driver = {}, o.messageDriver = {}, o.messageDriver.error = !1, o.insert = i;
  }function r(e, t, r) {
    function i() {
      return e.listOne(r.id).then(function (e) {
        return o.driverOne = e.data, o.driverOne;
      }).catch(function (e) {
        console.log("erro ao buscar o motorista: ", e);
      });
    }function n() {
      return e.remove(r.id).then(function (e) {
        t.go("listDriver");
      }).catch(function (e) {
        console.log("erro ao remover motorista: ", e);
      });
    }var o = this;o.driverOne = i(), o.removeOne = n;
  }function i(e, t, r) {
    function i() {
      return e.listOne(r.id).then(function (e) {
        return o.driver = e.data, o.driver;
      }).catch(function (e) {
        console.log("erro ao buscar motorista: ", e);
      });
    }function n() {
      return e.update(o.driver, r.id).then(function (e) {
        t.go("listDriver");
      }).catch(function (e) {
        console.log("erro ao editar motorista: ", e);
      });
    }var o = this;o.driver = i(), o.edit = n;
  }angular.module("app").controller("DriverControllerList", e).controller("DriverControllerOne", r).controller("DriverControllerNew", t).controller("DriverControllerEdit", i), t.$inject = ["DriverService", "$state", "$stateParams"], e.$inject = ["DriverService", "$state", "$stateParams"], r.$inject = ["DriverService", "$state", "$stateParams"], i.$inject = ["DriverService", "$state", "$stateParams"];
}(), function () {
  "use strict";
  angular.module("app.driver", []);
}(), function () {
  function e(e, t, r) {
    e.state("listDriver", { url: "/drivers", templateUrl: "app/modules/driver/templates/driver_list.html", controller: "DriverControllerList", controllerAs: "vm" }).state("newDriver", { url: "/drivers/new", templateUrl: "app/modules/driver/templates/driver_new.html", controller: "DriverControllerNew", controllerAs: "vm" }).state("editDriver", { url: "/drivers/:id/edit", templateUrl: "app/modules/driver/templates/driver_update.html", controller: "DriverControllerEdit", controllerAs: "vm" }).state("viewDriver", { url: "/drivers/:id/view", templateUrl: "app/modules/driver/templates/driver_view.html", controller: "DriverControllerOne", controllerAs: "vm" }), t.html5Mode(!0);
  }angular.module("app").config(e), e.$inject = ["$stateProvider", "$locationProvider"];
}(), function () {
  "use strict";
  function e(e) {
    function t(t) {
      return e.post("/drivers", t);
    }function r(t) {
      return e.get("/drivers/" + t, { params: { id: t } });
    }function i() {
      return e.get("/drivers");
    }function n(t, r) {
      return e.put("/drivers/" + r, t, { params: { id: r } });
    }function o(t) {
      return e.delete("/drivers/" + t, { params: { id: t } });
    }var l = { insert: t, listOne: r, listAll: i, update: n, remove: o };return l;
  }angular.module("app").service("DriverService", e), e.$inject = ["$http"];
}(), function () {
  function e(e) {
    e.state("erro401", { url: "/error/nao-auth", templateUrl: "app/modules/erros/templates/401.html" });
  }angular.module("app").config(e), e.$inject = ["$stateProvider"];
}(), function () {
  "use strict";
  function e(e, t, r) {
    function i() {
      return e.listOneWithJoin(r.id).then(function (e) {
        return o.tireOne = e.data, o.tireOne;
      });
    }function n() {
      return e.remove(r.id).then(function (e) {
        t.go("listTire");
      });
    }var o = this;o.tireOne = i(), o.removeOne = n;
  }function t(e, t) {
    function r() {
      return e.listAllWithJoin().then(function (e) {
        return console.log("retorno da busca de pneu: ", e.data), i.listTire = e.data, i.listTire;
      });
    }var i = this;i.listTire = [], r();
  }function r(e, t, r) {
    function i() {
      return c.tire.trash = !1, e.insert(c.tire).then(function (e) {
        o(c.tireForm);
      }).catch(function (e) {
        console.log("Retorno do erro do insert: ", e);
      });
    }function n() {
      return t.listAllWithJoin().then(function (e) {
        return c.listVehicle = e.data, c.listVehicle;
      });
    }function o(e) {
      e && (c.tire = {}, n(), e.$setPristine(), e.$setUntouched());
    }function l(t) {
      e.listAllByCod(t).then(function (e) {
        e.data.length > 0 ? c.errorTire = !0 : c.errorTire = !1;
      });
    }var c = this;c.tire = {}, c.listVehicle = n(), c.insert = i, c.errorTire = !1, c.buscaCodigoCadastrado = l, n();
  }function i(e, t, r, i) {
    function n() {
      return e.listOne(i.id).then(function (e) {
        return a.tire = e.data, a.tire;
      });
    }function o() {
      return t.listAllWithJoin().then(function (e) {
        return a.listVehicle = e.data, a.listVehicle;
      });
    }function l(t) {
      e.listAllByCod(t).then(function (e) {
        e.data.length > 0 ? a.errorTire = !0 : a.errorTire = !1;
      });
    }function c() {
      return e.update(a.tire, i.id).then(function (e) {
        r.go("listTire");
      });
    }var a = this;a.tire = n(), a.edit = c, a.buscaCodigoCadastrado = l, o();
  }angular.module("app").controller("TireControllerList", t).controller("TireControllerNew", r).controller("TireControllerEdit", i).controller("TireControllerOne", e), e.$inject = ["TireService", "$state", "$stateParams"], t.$inject = ["TireService", "$state"], r.$inject = ["TireService", "VehicleService", "$state"], i.$inject = ["TireService", "VehicleService", "$state", "$stateParams"];
}(), function () {
  "use strict";
  angular.module("app.tire", []);
}(), function () {
  function e(e, t, r) {
    e.state("listTire", { url: "/tires", templateUrl: "app/modules/tire/templates/tire_list.html", controller: "TireControllerList", controllerAs: "vm" }).state("newTire", { url: "/tires/new", templateUrl: "app/modules/tire/templates/tire_new.html", controller: "TireControllerNew", controllerAs: "vm" }).state("editTire", { url: "/tires/:id/edit", templateUrl: "app/modules/tire/templates/tire_update.html", controller: "TireControllerEdit", controllerAs: "vm" }).state("viewTire", { url: "/tires/:id/view", templateUrl: "app/modules/tire/templates/tire_view.html", controller: "TireControllerOne", controllerAs: "vm" }), t.html5Mode(!0);
  }angular.module("app").config(e), e.$inject = ["$stateProvider", "$locationProvider"];
}(), function () {
  "use strict";
  function e(e) {
    function t(t) {
      return e.post("/tires", t);
    }function r(t) {
      return e.get("/tires/" + t, { params: { id: t } });
    }function i(t) {
      return e.get("/tiresWithJoin/" + t, { params: { id: t } });
    }function n() {
      return e.get("/tires");
    }function o(t) {
      return e.get("/tiresByCodigo/" + t, { params: { cod: t } });
    }function l() {
      return e.get("/tiresWithJoin");
    }function c(t, r) {
      return e.put("/tires/" + r, { params: { id: r } });
    }function a(t) {
      return e.delete("/tires/" + t, { params: { id: t } });
    }var u = { insert: t, listOne: r, listAll: n, listAllWithJoin: l, listOneWithJoin: i, listAllByCod: o, update: c, remove: a };return u;
  }angular.module("app").service("TireService", e), e.$inject = ["$http"];
}(), function () {
  "use strict";
  function e(e, t, r) {
    function i() {
      return e.listOneWithJoin(r.id).then(function (e) {
        return o.vehicleOne = e.data, o.vehicleOne;
      });
    }function n() {
      return e.remove(r.id).then(function (e) {
        t.go("listVehicle");
      });
    }var o = this;o.vehicleOne = i(), o.removeOne = n;
  }function t(e, t) {
    function r() {
      return e.listAllWithJoin().then(function (e) {
        return i.listVehicle = e.data, i.listVehicle;
      });
    }var i = this;i.listVehicle = [], r();
  }function r(e, t, r) {
    function i() {
      return e.insert(c.vehicle).then(function (e) {
        l(c.vehicleForm);
      }).catch(function (e) {
        console.log("Retorno do erro no insert: ", e), c.errorVehicles.insertError = "Erro ao cadastrar Veiculo";
      });
    }function n() {
      return t.listAll().then(function (e) {
        return console.log("retorno da busca de drivers: ", e.data), c.listDriver = e.data, a.forEach(function (e) {
          c.listDriver.forEach(function (t, r) {
            t.id === e.driver_id && c.listDriver.splice(r, 1);
          });
        }), c.listDriver;
      });
    }function o() {
      return e.listAll().then(function (e) {
        return a = e.data;
      });
    }function l(e) {
      e && (c.vehicle = {}, o(), n(), e.$setPristine(), e.$setUntouched());
    }var c = this,
        a = o();c.vehicle = {}, c.listDriver = [], c.errorVehicles = {}, c.insert = i, o(), n();
  }function i(e, t, r, i) {
    function n() {
      return e.listOne(i.id).then(function (e) {
        return a.vehicle = e.data, a.vehicle;
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
    }function c() {
      return e.update(a.vehicle, i.id).then(function (e) {
        r.go("listVehicle");
      });
    }var a = this,
        u = l();a.vehicle = n(), a.listDriver = [], a.edit = c, l(), o();
  }angular.module("app").controller("VehicleControllerOne", e).controller("VehicleControllerList", t).controller("VehicleControllerNew", r).controller("VehicleControllerEdit", i), e.$inject = ["VehicleService", "$state", "$stateParams"], t.$inject = ["VehicleService", "$state"], r.$inject = ["VehicleService", "DriverService", "$state"], i.$inject = ["VehicleService", "DriverService", "$state", "$stateParams"];
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
    }function i() {
      return e.get("/vehicles");
    }function n() {
      return e.get("/vehiclesJoin");
    }function o(t) {
      return e.get("/vehicleOneJoin/" + t, { params: { id: t } });
    }function l(t, r) {
      return e.put("/vehicles/" + r, t, { params: { id: r } });
    }function c(t) {
      return e.delete("/vehicles/" + t, { params: { id: t } });
    }var a = { insert: t, listOne: r, listAll: i, listAllWithJoin: n, listOneWithJoin: o, update: l, remove: c };return a;
  }angular.module("app").service("VehicleService", e), e.$inject = ["$http"];
}(), function () {
  "use strict";
  function e(e, t, r) {
    function i() {
      return e.logout();
    }function n() {
      o.loading = !0, e.login(o.user, function (e) {
        e === !0 ? t.path("/drivers") : (o.error = "Usuário ou senha incorretos", o.loading = !1);
      });
    }var o = this;o.login = n, i();
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
    function r(r, i) {
      e.post("/token", { email: r.email, password: r.password }).success(function (n) {
        if (n.token) {
          var o = "JWT " + n.token;t.currentUser = { email: r.email, token: n.token }, e.defaults.headers.common.Authorization = n.token, localStorage.setItem("token", o), i(!0);
        } else i(!1);
      });
    }function i() {
      delete t.currentUser, e.defaults.headers.common.Authorization = "";
    }var n = { login: r, logout: i };return n;
  }angular.module("app").factory("LoginService", e), e.$inject = ["$http", "$localStorage"];
}();