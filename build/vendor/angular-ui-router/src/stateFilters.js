"use strict";

function $IsStateFilter(t) {
  var e = function e(_e, r) {
    return t.is(_e, r);
  };return e.$stateful = !0, e;
}function $IncludedByStateFilter(t) {
  var e = function e(_e2, r, n) {
    return t.includes(_e2, r, n);
  };return e.$stateful = !0, e;
}$IsStateFilter.$inject = ["$state"], $IncludedByStateFilter.$inject = ["$state"], angular.module("ui.router.state").filter("isState", $IsStateFilter).filter("includedByState", $IncludedByStateFilter);