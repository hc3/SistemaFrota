"use strict";

!function () {
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
    }function u(e) {
      return r.delete("/drivers/" + e, { params: { id: e } });
    }var s = { insert: e, listOne: t, listAll: n, update: i, remove: u };return s;
  }angular.module("app").service("DriverService", r), r.$inject = ["$http"];
}();