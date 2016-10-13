"use strict";

!function () {
  "use strict";
  function t() {
    return { request: function request(t) {
        return console.log(t.url), t;
      } };
  }angular.module("app").factory("timestampInterceptor", t);
}();