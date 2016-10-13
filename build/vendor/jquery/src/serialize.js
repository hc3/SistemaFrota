"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

define(["./core", "./manipulation/var/rcheckableType", "./core/init", "./traversing", "./attributes/prop"], function (e, n) {
  "use strict";
  function t(n, i, a, s) {
    var u;if (e.isArray(i)) e.each(i, function (e, i) {
      a || r.test(n) ? s(n, i) : t(n + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? e : "") + "]", i, a, s);
    });else if (a || "object" !== e.type(i)) s(n, i);else for (u in i) {
      t(n + "[" + u + "]", i[u], a, s);
    }
  }var r = /\[\]$/,
      i = /\r?\n/g,
      a = /^(?:submit|button|image|reset|file)$/i,
      s = /^(?:input|select|textarea|keygen)/i;return e.param = function (n, r) {
    var i,
        a = [],
        s = function s(n, t) {
      var r = e.isFunction(t) ? t() : t;a[a.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == r ? "" : r);
    };if (e.isArray(n) || n.jquery && !e.isPlainObject(n)) e.each(n, function () {
      s(this.name, this.value);
    });else for (i in n) {
      t(i, n[i], r, s);
    }return a.join("&");
  }, e.fn.extend({ serialize: function serialize() {
      return e.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var n = e.prop(this, "elements");return n ? e.makeArray(n) : this;
      }).filter(function () {
        var t = this.type;return this.name && !e(this).is(":disabled") && s.test(this.nodeName) && !a.test(t) && (this.checked || !n.test(t));
      }).map(function (n, t) {
        var r = e(this).val();return null == r ? null : e.isArray(r) ? e.map(r, function (e) {
          return { name: t.name, value: e.replace(i, "\r\n") };
        }) : { name: t.name, value: r.replace(i, "\r\n") };
      }).get();
    } }), e;
});