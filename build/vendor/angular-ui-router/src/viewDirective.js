"use strict";

function $ViewDirective(e, n, t, i, r) {
  function a() {
    return n.has ? function (e) {
      return n.has(e) ? n.get(e) : null;
    } : function (e) {
      try {
        return n.get(e);
      } catch (e) {
        return null;
      }
    };
  }function l(e, n) {
    var t = function t() {
      return { enter: function enter(e, n, t) {
          n.after(e), t();
        }, leave: function leave(e, n) {
          e.remove(), n();
        } };
    };if ($) return { enter: function enter(e, n, t) {
        angular.version.minor > 2 ? $.enter(e, null, n).then(t) : $.enter(e, null, n, t);
      }, leave: function leave(e, n) {
        angular.version.minor > 2 ? $.leave(e).then(n) : $.leave(e, n);
      } };if (u) {
      var i = u && u(n, e);return { enter: function enter(e, n, t) {
          i.enter(e, null, n), t();
        }, leave: function leave(e, n) {
          i.leave(e), n();
        } };
    }return t();
  }var o = a(),
      u = o("$animator"),
      $ = o("$animate"),
      c = { restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function compile(n, a, o) {
      return function (n, a, u) {
        function $() {
          if (v && (v.remove(), v = null), m && (m.$destroy(), m = null), s) {
            var e = s.data("$uiViewAnim");V.leave(s, function () {
              e.$$animLeave.resolve(), v = null;
            }), v = s, s = null;
          }
        }function c(l) {
          var c,
              v = getUiViewName(n, u, a, i),
              g = v && e.$current && e.$current.locals[v];if (l || g !== f) {
            c = n.$new(), f = e.$current.locals[v], c.$emit("$viewContentLoading", v);var p = o(c, function (e) {
              var i = r.defer(),
                  l = r.defer(),
                  o = { $animEnter: i.promise, $animLeave: l.promise, $$animLeave: l };e.data("$uiViewAnim", o), V.enter(e, a, function () {
                i.resolve(), m && m.$emit("$viewContentAnimationEnded"), (angular.isDefined(w) && !w || n.$eval(w)) && t(e);
              }), $();
            });s = p, m = c, m.$emit("$viewContentLoaded", v), m.$eval(d);
          }
        }var v,
            s,
            m,
            f,
            d = u.onload || "",
            w = u.autoscroll,
            V = l(u, n);a.inheritedData("$uiView");n.$on("$stateChangeSuccess", function () {
          c(!1);
        }), c(!0);
      };
    } };return c;
}function $ViewDirectiveFill(e, n, t, i) {
  return { restrict: "ECA", priority: -400, compile: function compile(r) {
      var a = r.html();return function (r, l, o) {
        var u = t.$current,
            $ = getUiViewName(r, o, l, i),
            c = u && u.locals[$];if (c) {
          l.data("$uiView", { name: $, state: c.$$state }), l.html(c.$template ? c.$template : a);var v = angular.extend({}, c);r[c.$$resolveAs] = v;var s = e(l.contents());if (c.$$controller) {
            c.$scope = r, c.$element = l;var m = n(c.$$controller, c);c.$$controllerAs && (r[c.$$controllerAs] = m, r[c.$$controllerAs][c.$$resolveAs] = v), isFunction(m.$onInit) && m.$onInit(), l.data("$ngControllerController", m), l.children().data("$ngControllerController", m);
          }s(r);
        }
      };
    } };
}function getUiViewName(e, n, t, i) {
  var r = i(n.uiView || n.name || "")(e),
      a = t.inheritedData("$uiView");return r.indexOf("@") >= 0 ? r : r + "@" + (a ? a.state.name : "");
}$ViewDirective.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate", "$q"], $ViewDirectiveFill.$inject = ["$compile", "$controller", "$state", "$interpolate"], angular.module("ui.router.state").directive("uiView", $ViewDirective), angular.module("ui.router.state").directive("uiView", $ViewDirectiveFill);