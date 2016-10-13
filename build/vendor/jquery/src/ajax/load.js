"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

define(["../core", "../core/stripAndCollapse", "../core/parseHTML", "../ajax", "../traversing", "../manipulation", "../selector"], function (e, n) {
  "use strict";
  e.fn.load = function (t, i, a) {
    var o,
        s,
        c,
        r = this,
        l = t.indexOf(" ");return l > -1 && (o = n(t.slice(l)), t = t.slice(0, l)), e.isFunction(i) ? (a = i, i = void 0) : i && "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (s = "POST"), r.length > 0 && e.ajax({ url: t, type: s || "GET", dataType: "html", data: i }).done(function (n) {
      c = arguments, r.html(o ? e("<div>").append(e.parseHTML(n)).find(o) : n);
    }).always(a && function (e, n) {
      r.each(function () {
        a.apply(this, c || [e.responseText, n, e]);
      });
    }), this;
  };
});