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
      return localStorage.getItem("token") && (e.headers.Authorization = localStorage.getItem("token")), e;
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
      return e.insert(l.driver).then(function (e) {
        l.messageDriver.error = !1, o(l.driverForm);
      }).catch(function (e) {
        l.messageDriver.insertError = "Erro ao cadastrar Motorista";
      });
    }function n(t) {
      if (t > 2) return e.listByCodigo(t).then(function (e) {
        e.data.length > 0 ? l.errorDriver = !0 : l.errorDriver = !1;
      });
    }function o(e) {
      e && (l.driver = {}, e.$setPristine(), e.$setUntouched());
    }var l = this;l.driver = {}, l.messageDriver = {}, l.messageDriver.error = !1, l.errorDriver = !1, l.insert = i, l.buscaCodigoCadastrado = n;
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
    }function i(t) {
      return e.get("/driversByCodigo/" + t, { params: { cod: t } });
    }function n() {
      return e.get("/drivers");
    }function o(t, r) {
      return e.put("/drivers/" + r, t, { params: { id: r } });
    }function l(t) {
      return e.delete("/drivers/" + t, { params: { id: t } });
    }var c = { insert: t, listOne: r, listAll: n, listByCodigo: i, update: o, remove: l };return c;
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
        return i.listTire = e.data, i.listTire;
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
      return e.insert(a.vehicle).then(function (e) {
        c(a.vehicleForm);
      }).catch(function (e) {
        console.log("Retorno do erro no insert: ", e), a.errorVehicles.insertError = "Erro ao cadastrar Veiculo";
      });
    }function n() {
      return t.listAll().then(function (e) {
        return a.listDriver = e.data, u.forEach(function (e) {
          a.listDriver.forEach(function (t, r) {
            t.id === e.driver_id && a.listDriver.splice(r, 1);
          });
        }), a.listDriver;
      });
    }function o() {
      return e.listAll().then(function (e) {
        return u = e.data;
      });
    }function l(t) {
      return 8 == t.length ? e.listAllByPlaca(t).then(function (e) {
        e.data.length > 0 ? a.errorVehicle = !0 : a.errorVehicle = !1;
      }) : void 0;
    }function c(e) {
      e && (a.vehicle = {}, o(), n(), e.$setPristine(), e.$setUntouched());
    }var a = this,
        u = o();a.vehicle = {}, a.listDriver = [], a.errorVehicles = {}, a.insert = i, a.errorVehicle = !1, a.buscaPlacaCadastrada = l, o(), n();
  }function i(e, t, r, i) {
    function n() {
      return e.listOne(i.id).then(function (e) {
        return a.vehicle = e.data, a.vehicle;
      });
    }function o() {
      return t.listAll().then(function (e) {
        return a.listDriver = e.data, u.forEach(function (e) {
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
    }function l(t) {
      return e.get("/vehicleByPlaca/" + t, { params: { placa: t } });
    }function c(t, r) {
      return e.put("/vehicles/" + r, t, { params: { id: r } });
    }function a(t) {
      return e.delete("/vehicles/" + t, { params: { id: t } });
    }var u = { insert: t, listOne: r, listAll: i, listAllWithJoin: n, listAllByPlaca: l, listOneWithJoin: o, update: c, remove: a };return u;
  }angular.module("app").service("VehicleService", e), e.$inject = ["$http"];
}(), function () {
  "use strict";
  function e(e, t, r) {
    function i() {
      n.loading = !0, e.login(n.user, function (e) {
        e === !0 ? t.path("/drivers") : (n.error = "Usuário ou senha incorretos", n.loading = !1);
      });
    }var n = this;n.login = i;
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
  function e(e) {
    function t(t, r) {
      e.post("/token", { email: t.email, password: t.password }).success(function (i) {
        if (i.token) {
          var n = "JWT " + i.token;localStorage.currentUser = { email: t.email, token: i.token }, e.defaults.headers.common.Authorization = i.token, localStorage.setItem("token", n), r(!0);
        } else r(!1);
      });
    }function r() {
      delete localStorage.currentUser, e.defaults.headers.common.Authorization = "";
    }var i = { login: t, logout: r };return i;
  }angular.module("app").factory("LoginService", e), e.$inject = ["$http"];
}();