"use strict";

define(["../core", "../var/document", "./var/rsingleTag", "../traversing/findFilter"], function (t, e, i) {
  "use strict";
  var n,
      r = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      s = t.fn.init = function (s, h, o) {
    var u, f;if (!s) return this;if (o = o || n, "string" == typeof s) {
      if (u = "<" === s[0] && ">" === s[s.length - 1] && s.length >= 3 ? [null, s, null] : r.exec(s), !u || !u[1] && h) return !h || h.jquery ? (h || o).find(s) : this.constructor(h).find(s);if (u[1]) {
        if (h = h instanceof t ? h[0] : h, t.merge(this, t.parseHTML(u[1], h && h.nodeType ? h.ownerDocument || h : e, !0)), i.test(u[1]) && t.isPlainObject(h)) for (u in h) {
          t.isFunction(this[u]) ? this[u](h[u]) : this.attr(u, h[u]);
        }return this;
      }return f = e.getElementById(u[2]), f && (this[0] = f, this.length = 1), this;
    }return s.nodeType ? (this[0] = s, this.length = 1, this) : t.isFunction(s) ? void 0 !== o.ready ? o.ready(s) : s(t) : t.makeArray(s, this);
  };return s.prototype = t.fn, n = t(e), s;
});