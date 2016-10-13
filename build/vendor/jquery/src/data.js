"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

define(["./core", "./core/access", "./data/var/dataPriv", "./data/var/dataUser"], function (t, e, a, n) {
  "use strict";
  function r(t) {
    return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : s.test(t) ? JSON.parse(t) : t);
  }function i(t, e, a) {
    var i;if (void 0 === a && 1 === t.nodeType) if (i = "data-" + e.replace(o, "-$&").toLowerCase(), a = t.getAttribute(i), "string" == typeof a) {
      try {
        a = r(a);
      } catch (t) {}n.set(t, e, a);
    } else a = void 0;return a;
  }var s = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      o = /[A-Z]/g;return t.extend({ hasData: function hasData(t) {
      return n.hasData(t) || a.hasData(t);
    }, data: function data(t, e, a) {
      return n.access(t, e, a);
    }, removeData: function removeData(t, e) {
      n.remove(t, e);
    }, _data: function _data(t, e, n) {
      return a.access(t, e, n);
    }, _removeData: function _removeData(t, e) {
      a.remove(t, e);
    } }), t.fn.extend({ data: function data(r, s) {
      var o,
          u,
          c,
          f = this[0],
          d = f && f.attributes;if (void 0 === r) {
        if (this.length && (c = n.get(f), 1 === f.nodeType && !a.get(f, "hasDataAttrs"))) {
          for (o = d.length; o--;) {
            d[o] && (u = d[o].name, 0 === u.indexOf("data-") && (u = t.camelCase(u.slice(5)), i(f, u, c[u])));
          }a.set(f, "hasDataAttrs", !0);
        }return c;
      }return "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? this.each(function () {
        n.set(this, r);
      }) : e(this, function (t) {
        var e;if (f && void 0 === t) {
          if (e = n.get(f, r), void 0 !== e) return e;if (e = i(f, r), void 0 !== e) return e;
        } else this.each(function () {
          n.set(this, r, t);
        });
      }, null, s, arguments.length > 1, null, !0);
    }, removeData: function removeData(t) {
      return this.each(function () {
        n.remove(this, t);
      });
    } }), t;
});