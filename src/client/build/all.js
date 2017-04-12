"use strict";

function config(t) {
  t.interceptors.push("authInterceptor");
}!function () {
  "use strict";
  angular.module("app", ["angularUtils.directives.dirPagination", "ui.router", "ngStorage", "ngMask", "ui.bootstrap", "app.driver", "app.product", "app.vehicle", "app.login"]);
}(), function () {
  "use strict";
  function t(t, e) {
    function r(t) {
      return localStorage.getItem("token") && (t.headers.Authorization = localStorage.getItem("token")), t;
    }function n(r) {
      return 401 !== r.status && 403 !== r.status || e.path("/error/nao-auth"), t.reject(r);
    }return { request: r, responseError: n };
  }angular.module("app").factory("authInterceptor", t), t.$inject = ["$q", "$location"];
}(), angular.module("app").config(config), config.$inject = ["$httpProvider"], function () {
  "use strict";
  function t() {
    return { request: function request(t) {
        return console.log(t.url), t;
      } };
  }angular.module("app").factory("timestampInterceptor", t);
}(), function () {
  "use strict";
  function t() {
    function t(t, e, r, n) {}return { restrict: "EA", templateUrl: "app/layout/menu/menu-final.html", scope: {}, link: t, controller: e, controllerAs: "vm", bindToController: !0 };
  }function e() {
    this.navCollapsed = !0;
  }angular.module("app").directive("menu", t);
}(), function () {
  "use strict";
  function t() {
    function t(t, e, r, n) {}return { restrict: "EA", templateUrl: "app/layout/navbar/navbar.html", scope: {}, link: t, controller: e, controllerAs: "vm", bindToController: !0 };
  }function e() {}angular.module("app").directive("navbar", t);
}(), $(function () {
  $("#side-menu").metisMenu();
}), $(function () {
  $(window).bind("load resize", function () {
    var t = 50;(this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width) < 768 ? ($("div.navbar-collapse").addClass("collapse"), t = 100) : $("div.navbar-collapse").removeClass("collapse");var e = (this.window.innerHeight > 0 ? this.window.innerHeight : this.screen.height) - 1;e -= t, e < 1 && (e = 1), e > t && $("#page-wrapper").css("min-height", e + "px");
  });for (var t = window.location, e = $("ul.nav a").filter(function () {
    return this.href == t;
  }).addClass("active").parent();;) {
    if (!e.is("li")) break;e = e.parent().addClass("in").parent();
  }
}), function () {
  function t(t) {
    t.state("erro401", { url: "/error/nao-auth", templateUrl: "app/modules/erros/templates/401.html" });
  }angular.module("app").config(t), t.$inject = ["$stateProvider"];
}(), function () {
  "use strict";
  function t(t, e, r) {
    var n = this;n.listDriver = [], function () {
      t.listAll().then(function (t) {
        return n.listDriver = t.data, n.listDriver;
      }).catch(function (t) {
        console.log("Erro ao buscar motoristas: ", t);
      });
    }();
  }function e(t, e, r) {
    function n() {
      return t.insert(l.driver).then(function (t) {
        l.messageDriver.error = !1, i(l.driverForm);
      }).catch(function (t) {
        l.messageDriver.insertError = "Erro ao cadastrar Motorista";
      });
    }function o(e) {
      if (e > 2) return t.listByCodigo(e).then(function (t) {
        t.data.length > 0 ? l.errorDriver = !0 : l.errorDriver = !1;
      });
    }function i(t) {
      t && (l.driver = {}, t.$setPristine(), t.$setUntouched());
    }var l = this;l.driver = {}, l.messageDriver = {}, l.messageDriver.error = !1, l.errorDriver = !1, l.insert = n, l.buscaCodigoCadastrado = o;
  }function r(t, e, r) {
    function n() {
      return t.remove(r.id).then(function (t) {
        e.go("listDriver");
      }).catch(function (t) {
        console.log("erro ao remover motorista: ", t);
      });
    }var o = this;o.driverOne = function () {
      return t.listOne(r.id).then(function (t) {
        return o.driverOne = t.data, o.driverOne;
      }).catch(function (t) {
        console.log("erro ao buscar o motorista: ", t);
      });
    }(), o.removeOne = n;
  }function n(t, e, r) {
    function n() {
      return t.update(o.driver, r.id).then(function (t) {
        e.go("listDriver");
      }).catch(function (t) {
        console.log("erro ao editar motorista: ", t);
      });
    }var o = this;o.driver = function () {
      return t.listOne(r.id).then(function (t) {
        return o.driver = t.data, o.driver;
      }).catch(function (t) {
        console.log("erro ao buscar motorista: ", t);
      });
    }(), o.edit = n;
  }angular.module("app").controller("DriverControllerList", t).controller("DriverControllerOne", r).controller("DriverControllerNew", e).controller("DriverControllerEdit", n), e.$inject = ["DriverService", "$state", "$stateParams"], t.$inject = ["DriverService", "$state", "$stateParams"], r.$inject = ["DriverService", "$state", "$stateParams"], n.$inject = ["DriverService", "$state", "$stateParams"];
}(), function () {
  "use strict";
  angular.module("app.driver", []);
}(), function () {
  function t(t, e, r) {
    t.state("listDriver", { url: "/drivers", templateUrl: "app/modules/driver/templates/driver_list.html", controller: "DriverControllerList", controllerAs: "vm" }).state("newDriver", { url: "/drivers/new", templateUrl: "app/modules/driver/templates/driver_new.html", controller: "DriverControllerNew", controllerAs: "vm" }).state("editDriver", { url: "/drivers/:id/edit", templateUrl: "app/modules/driver/templates/driver_update.html", controller: "DriverControllerEdit", controllerAs: "vm" }).state("viewDriver", { url: "/drivers/:id/view", templateUrl: "app/modules/driver/templates/driver_view.html", controller: "DriverControllerOne", controllerAs: "vm" }), e.html5Mode(!0);
  }angular.module("app").config(t), t.$inject = ["$stateProvider", "$locationProvider"];
}(), function () {
  "use strict";
  function t(t) {
    function e(e) {
      return t.post("/drivers", e);
    }function r(e) {
      return t.get("/drivers/" + e, { params: { id: e } });
    }function n(e) {
      return t.get("/driversByCodigo/" + e, { params: { cod: e } });
    }function o() {
      return t.get("/drivers");
    }function i(e, r) {
      return t.put("/drivers/" + r, e, { params: { id: r } });
    }function l(e) {
      return t.delete("/drivers/" + e, { params: { id: e } });
    }return { insert: e, listOne: r, listAll: o, listByCodigo: n, update: i, remove: l };
  }angular.module("app").service("DriverService", t), t.$inject = ["$http"];
}(), function () {
  "use strict";
  function t(t, e, r) {
    function n() {
      return t.remove(r.id).then(function (t) {
        e.go("listProduct");
      });
    }var o = this;o.productOne = function () {
      return t.listOne(r.id).then(function (t) {
        return o.productOne = t.data, o.productOne;
      });
    }(), o.removeOne = n;
  }function e(t, e) {
    var r = this;r.listProduct = [], function () {
      t.listAll().then(function (t) {
        return r.listProduct = t.data, r.listProduct;
      });
    }();
  }function r(t, e) {
    function r() {
      return i.product.trash = !1, t.insert(i.product).then(function (t) {
        n(i.productForm);
      }).catch(function (t) {
        console.log("Retorno do erro do insert: ", t);
      });
    }function n(t) {
      t && (i.product = {}, listAll(), t.$setPristine(), t.$setUntouched());
    }function o(e) {
      t.listAllByCod(e).then(function (t) {
        t.data.length > 0 ? i.errorProduct = !0 : i.errorProduct = !1;
      });
    }var i = this;i.product = {}, i.insert = r, i.errorProduct = !1, i.buscaCodigoCadastrado = o, listAll();
  }function n(t, e, r) {
    function n(e) {
      t.listAllByCod(e).then(function (t) {
        t.data.length > 0 ? i.errorProduct = !0 : i.errorProduct = !1;
      });
    }function o() {
      return t.update(i.product, r.id).then(function (t) {
        e.go("listProduct");
      });
    }var i = this;i.product = function () {
      return t.listOne(r.id).then(function (t) {
        return i.product = t.data, i.product;
      });
    }(), i.edit = o, i.buscaCodigoCadastrado = n, listAll();
  }angular.module("app").controller("ProductControllerList", e).controller("ProductControllerNew", r).controller("ProductControllerEdit", n).controller("ProductControllerOne", t), t.$inject = ["ProductService", "$state", "$stateParams"], e.$inject = ["ProductService", "$state"], r.$inject = ["ProductService", "$state"], n.$inject = ["ProductService", "$state", "$stateParams"];
}(), function () {
  "use strict";
  angular.module("app.product", []);
}(), function () {
  function t(t, e, r) {
    t.state("listProduct", { url: "/products", templateUrl: "app/modules/product/templates/product_list.html", controller: "ProductControllerList", controllerAs: "vm" }).state("newProduct", { url: "/products/new", templateUrl: "app/modules/product/templates/product_new.html", controller: "ProductControllerNew", controllerAs: "vm" }).state("editProduct", { url: "/products/:id/edit", templateUrl: "app/modules/product/templates/product_update.html", controller: "ProductControllerEdit", controllerAs: "vm" }).state("viewProduct", { url: "/products/:id/view", templateUrl: "app/modules/product/templates/product_view.html", controller: "ProductControllerOne", controllerAs: "vm" }), e.html5Mode(!0);
  }angular.module("app").config(t), t.$inject = ["$stateProvider", "$locationProvider"];
}(), function () {
  "use strict";
  function t(t) {
    function e(e) {
      return t.post("/products", e);
    }function r(e) {
      return t.get("/products/" + e, { params: { id: e } });
    }function n() {
      return t.get("/products");
    }function o(e) {
      return t.get("/productsByCodigo/" + e, { params: { cod: e } });
    }function i(e, r) {
      return t.put("/products/" + r, { params: { id: r } });
    }function l(e) {
      return t.delete("/products/" + e, { params: { id: e } });
    }return { insert: e, listOne: r, listAll: n, listAllWithJoin: listAllWithJoin, listOneWithJoin: listOneWithJoin, listAllByCod: o, update: i, remove: l };
  }angular.module("app").service("ProductService", t), t.$inject = ["$http"];
}(), function () {
  "use strict";
  function t(t, e, r) {
    function n() {
      return t.remove(r.id).then(function (t) {
        e.go("listVehicle");
      });
    }var o = this;o.vehicleOne = function () {
      return t.listOneWithJoin(r.id).then(function (t) {
        return o.vehicleOne = t.data, o.vehicleOne;
      });
    }(), o.removeOne = n;
  }function e(t, e) {
    var r = this;r.listVehicle = [], function () {
      t.listAllWithJoin().then(function (t) {
        return r.listVehicle = t.data, r.listVehicle;
      });
    }();
  }function r(t, e, r) {
    function n() {
      return t.insert(a.vehicle).then(function (t) {
        c(a.vehicleForm);
      }).catch(function (t) {
        console.log("Retorno do erro no insert: ", t), a.errorVehicles.insertError = "Erro ao cadastrar Veiculo";
      });
    }function o() {
      return e.listAll().then(function (t) {
        return a.listDriver = t.data, a.listDriver;
      });
    }function i() {
      return t.listAll().then(function (t) {
        return u = t.data;
      });
    }function l(e) {
      return 8 == e.length ? t.listAllByPlaca(e).then(function (t) {
        t.data.length > 0 ? a.errorVehicle = !0 : a.errorVehicle = !1;
      }) : void 0;
    }function c(t) {
      t && (a.vehicle = {}, i(), o(), t.$setPristine(), t.$setUntouched());
    }var a = this,
        u = i();a.vehicle = {}, a.listDriver = [], a.errorVehicles = {}, a.insert = n, a.errorVehicle = !1, a.buscaPlacaCadastrada = l, i(), o();
  }function n(t, e, r, n) {
    function o() {
      return t.listAll().then(function (t) {
        return c = t.data;
      });
    }function i() {
      return t.update(l.vehicle, n.id).then(function (t) {
        r.go("listVehicle");
      });
    }var l = this,
        c = o();l.vehicle = function () {
      return t.listOne(n.id).then(function (t) {
        return l.vehicle = t.data, l.vehicle;
      });
    }(), l.listDriver = [], l.edit = i, o(), function () {
      e.listAll().then(function (t) {
        return l.listDriver = t.data, l.listDriver;
      });
    }();
  }angular.module("app").controller("VehicleControllerOne", t).controller("VehicleControllerList", e).controller("VehicleControllerNew", r).controller("VehicleControllerEdit", n), t.$inject = ["VehicleService", "$state", "$stateParams"], e.$inject = ["VehicleService", "$state"], r.$inject = ["VehicleService", "DriverService", "$state"], n.$inject = ["VehicleService", "DriverService", "$state", "$stateParams"];
}(), function () {
  "use strict";
  angular.module("app.vehicle", []);
}(), function () {
  function t(t, e) {
    t.state("listVehicle", { url: "/vehicles", templateUrl: "app/modules/vehicle/templates/vehicle_list.html", controller: "VehicleControllerList", controllerAs: "vm" }).state("newVehicle", { url: "/vehicles/new", templateUrl: "app/modules/vehicle/templates/vehicle_new.html", controller: "VehicleControllerNew", controllerAs: "vm" }).state("editVehicle", { url: "/vehicles/:id/edit", templateUrl: "app/modules/vehicle/templates/vehicle_update.html", controller: "VehicleControllerEdit", controllerAs: "vm" }).state("viewVehicle", { url: "/vehicles/:id/view", templateUrl: "app/modules/vehicle/templates/vehicle_view.html", controller: "VehicleControllerOne", controllerAs: "vm" }), e.html5Mode(!0);
  }angular.module("app").config(t), t.$inject = ["$stateProvider", "$locationProvider"];
}(), function () {
  "use strict";
  function t(t) {
    function e(e) {
      return t.post("/vehicles", e);
    }function r(e) {
      return t.get("/vehicles/" + e, { params: { id: e } });
    }function n() {
      return t.get("/vehicles");
    }function o() {
      return t.get("/vehiclesJoin");
    }function i(e) {
      return t.get("/vehicleOneJoin/" + e, { params: { id: e } });
    }function l(e) {
      return t.get("/vehicleByPlaca/" + e, { params: { placa: e } });
    }function c(e, r) {
      return t.put("/vehicles/" + r, e, { params: { id: r } });
    }function a(e) {
      return t.delete("/vehicles/" + e, { params: { id: e } });
    }return { insert: e, listOne: r, listAll: n, listAllWithJoin: o, listAllByPlaca: l, listOneWithJoin: i, update: c, remove: a };
  }angular.module("app").service("VehicleService", t), t.$inject = ["$http"];
}(), function () {
  "use strict";
  function t(t, e, r) {
    function n() {
      o.loading = !0, t.login(o.user, function (t) {
        !0 === t ? e.path("/drivers") : (o.error = "Usuário ou senha incorretos", o.loading = !1);
      });
    }var o = this;o.login = n;
  }angular.module("app").controller("LoginController", t), t.$inject = ["LoginService", "$location", "$http"];
}(), function () {
  "use strict";
  angular.module("app.login", []);
}(), function () {
  function t(t, e, r) {
    r.otherwise("/"), t.state("login", { url: "/", templateUrl: "app/modules/account/login.html", controller: "LoginController", controllerAs: "vm" }), e.html5Mode(!0);
  }angular.module("app").config(t), t.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
}(), function () {
  "use strict";
  function t(t) {
    function e(e, r) {
      t.post("/token", { email: e.email, password: e.password }).then(function (n) {
        if (n.data.token) {
          var o = "JWT " + n.data.token;localStorage.currentUser = { email: e.email, token: n.data.token }, t.defaults.headers.common.Authorization = n.data.token, localStorage.setItem("token", o), r(!0);
        } else r(!1);
      });
    }function r() {
      delete localStorage.currentUser, t.defaults.headers.common.Authorization = "";
    }return { login: e, logout: r };
  }angular.module("app").factory("LoginService", t), t.$inject = ["$http"];
}();