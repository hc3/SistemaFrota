"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["angular"], t) : e.hasOwnProperty("angular") ? t(e.angular) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && (module.exports = t(require("angular")));
}(undefined, function (e) {
  "use strict";
  function t(e, t) {
    var n;try {
      n = e[t];
    } catch (e) {
      n = !1;
    }if (n) {
      var r = "__" + Math.round(1e7 * Math.random());try {
        e[t].setItem(r, r), e[t].removeItem(r, r);
      } catch (e) {
        n = !1;
      }
    }return n;
  }function n(n) {
    var r = t(window, n);return function () {
      var o = "ngStorage-";this.setKeyPrefix = function (e) {
        if ("string" != typeof e) throw new TypeError("[ngStorage] - " + n + "Provider.setKeyPrefix() expects a String.");o = e;
      };var i = e.toJson,
          a = e.fromJson;this.setSerializer = function (e) {
        if ("function" != typeof e) throw new TypeError("[ngStorage] - " + n + "Provider.setSerializer expects a function.");i = e;
      }, this.setDeserializer = function (e) {
        if ("function" != typeof e) throw new TypeError("[ngStorage] - " + n + "Provider.setDeserializer expects a function.");a = e;
      }, this.supported = function () {
        return !!r;
      }, this.get = function (e) {
        return r && a(r.getItem(o + e));
      }, this.set = function (e, t) {
        return r && r.setItem(o + e, i(t));
      }, this.remove = function (e) {
        r && r.removeItem(o + e);
      }, this.$get = ["$rootScope", "$window", "$log", "$timeout", "$document", function (r, s, u, c, f) {
        var l,
            p,
            d = o.length,
            g = t(s, n),
            y = g || (u.warn("This browser does not support Web Storage!"), { setItem: e.noop, getItem: e.noop, removeItem: e.noop }),
            v = { $default: function $default(t) {
            for (var n in t) {
              e.isDefined(v[n]) || (v[n] = e.copy(t[n]));
            }return v.$sync(), v;
          }, $reset: function $reset(e) {
            for (var t in v) {
              "$" === t[0] || delete v[t] && y.removeItem(o + t);
            }return v.$default(e);
          }, $sync: function $sync() {
            for (var e, t = 0, n = y.length; t < n; t++) {
              (e = y.key(t)) && o === e.slice(0, d) && (v[e.slice(d)] = a(y.getItem(e)));
            }
          }, $apply: function $apply() {
            var t;if (p = null, !e.equals(v, l)) {
              t = e.copy(l), e.forEach(v, function (n, r) {
                e.isDefined(n) && "$" !== r[0] && (y.setItem(o + r, i(n)), delete t[r]);
              });for (var n in t) {
                y.removeItem(o + n);
              }l = e.copy(v);
            }
          }, $supported: function $supported() {
            return !!g;
          } };return v.$sync(), l = e.copy(v), r.$watch(function () {
          p || (p = c(v.$apply, 100, !1));
        }), s.addEventListener && s.addEventListener("storage", function (t) {
          if (t.key) {
            var n = f[0];n.hasFocus && n.hasFocus() || o !== t.key.slice(0, d) || (t.newValue ? v[t.key.slice(d)] = a(t.newValue) : delete v[t.key.slice(d)], l = e.copy(v), r.$apply());
          }
        }), s.addEventListener && s.addEventListener("beforeunload", function () {
          v.$apply();
        }), v;
      }];
    };
  }return e = e && e.module ? e : window.angular, e.module("ngStorage", []).provider("$localStorage", n("localStorage")).provider("$sessionStorage", n("sessionStorage"));
});