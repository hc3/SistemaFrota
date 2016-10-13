"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

define(["./var/arr", "./var/document", "./var/getProto", "./var/slice", "./var/concat", "./var/push", "./var/indexOf", "./var/class2type", "./var/toString", "./var/hasOwn", "./var/fnToString", "./var/ObjectFunctionString", "./var/support", "./core/DOMEval"], function (n, t, r, e, o, i, u, c, a, l, s, f, p, h) {
  "use strict";
  function y(n) {
    var t = !!n && "length" in n && n.length,
        r = v.type(n);return "function" !== r && !v.isWindow(n) && ("array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n);
  }var g = "3.1.1",
      v = function v(n, t) {
    return new v.fn.init(n, t);
  },
      b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      m = /^-ms-/,
      d = /-([a-z])/g,
      j = function j(n, t) {
    return t.toUpperCase();
  };return v.fn = v.prototype = { jquery: g, constructor: v, length: 0, toArray: function toArray() {
      return e.call(this);
    }, get: function get(n) {
      return null == n ? e.call(this) : n < 0 ? this[n + this.length] : this[n];
    }, pushStack: function pushStack(n) {
      var t = v.merge(this.constructor(), n);return t.prevObject = this, t;
    }, each: function each(n) {
      return v.each(this, n);
    }, map: function map(n) {
      return this.pushStack(v.map(this, function (t, r) {
        return n.call(t, r, t);
      }));
    }, slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(n) {
      var t = this.length,
          r = +n + (n < 0 ? t : 0);return this.pushStack(r >= 0 && r < t ? [this[r]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: i, sort: n.sort, splice: n.splice }, v.extend = v.fn.extend = function () {
    var n,
        t,
        r,
        e,
        o,
        i,
        u = arguments[0] || {},
        c = 1,
        a = arguments.length,
        l = !1;for ("boolean" == typeof u && (l = u, u = arguments[c] || {}, c++), "object" == (typeof u === "undefined" ? "undefined" : _typeof(u)) || v.isFunction(u) || (u = {}), c === a && (u = this, c--); c < a; c++) {
      if (null != (n = arguments[c])) for (t in n) {
        r = u[t], e = n[t], u !== e && (l && e && (v.isPlainObject(e) || (o = v.isArray(e))) ? (o ? (o = !1, i = r && v.isArray(r) ? r : []) : i = r && v.isPlainObject(r) ? r : {}, u[t] = v.extend(l, i, e)) : void 0 !== e && (u[t] = e));
      }
    }return u;
  }, v.extend({ expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(n) {
      throw new Error(n);
    }, noop: function noop() {}, isFunction: function isFunction(n) {
      return "function" === v.type(n);
    }, isArray: Array.isArray, isWindow: function isWindow(n) {
      return null != n && n === n.window;
    }, isNumeric: function isNumeric(n) {
      var t = v.type(n);return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n));
    }, isPlainObject: function isPlainObject(n) {
      var t, e;return !(!n || "[object Object]" !== a.call(n)) && (!(t = r(n)) || (e = l.call(t, "constructor") && t.constructor, "function" == typeof e && s.call(e) === f));
    }, isEmptyObject: function isEmptyObject(n) {
      var t;for (t in n) {
        return !1;
      }return !0;
    }, type: function type(n) {
      return null == n ? n + "" : "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || "function" == typeof n ? c[a.call(n)] || "object" : typeof n === "undefined" ? "undefined" : _typeof(n);
    }, globalEval: function globalEval(n) {
      h(n);
    }, camelCase: function camelCase(n) {
      return n.replace(m, "ms-").replace(d, j);
    }, nodeName: function nodeName(n, t) {
      return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
    }, each: function each(n, t) {
      var r,
          e = 0;if (y(n)) for (r = n.length; e < r && t.call(n[e], e, n[e]) !== !1; e++) {} else for (e in n) {
        if (t.call(n[e], e, n[e]) === !1) break;
      }return n;
    }, trim: function trim(n) {
      return null == n ? "" : (n + "").replace(b, "");
    }, makeArray: function makeArray(n, t) {
      var r = t || [];return null != n && (y(Object(n)) ? v.merge(r, "string" == typeof n ? [n] : n) : i.call(r, n)), r;
    }, inArray: function inArray(n, t, r) {
      return null == t ? -1 : u.call(t, n, r);
    }, merge: function merge(n, t) {
      for (var r = +t.length, e = 0, o = n.length; e < r; e++) {
        n[o++] = t[e];
      }return n.length = o, n;
    }, grep: function grep(n, t, r) {
      for (var e, o = [], i = 0, u = n.length, c = !r; i < u; i++) {
        e = !t(n[i], i), e !== c && o.push(n[i]);
      }return o;
    }, map: function map(n, t, r) {
      var e,
          i,
          u = 0,
          c = [];if (y(n)) for (e = n.length; u < e; u++) {
        i = t(n[u], u, r), null != i && c.push(i);
      } else for (u in n) {
        i = t(n[u], u, r), null != i && c.push(i);
      }return o.apply([], c);
    }, guid: 1, proxy: function proxy(n, t) {
      var r, o, i;if ("string" == typeof t && (r = n[t], t = n, n = r), v.isFunction(n)) return o = e.call(arguments, 2), i = function i() {
        return n.apply(t || this, o.concat(e.call(arguments)));
      }, i.guid = n.guid = n.guid || v.guid++, i;
    }, now: Date.now, support: p }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = n[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (n, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  }), v;
});