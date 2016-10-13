"use strict";

define(["../core", "../var/document"], function (e, n) {
  "use strict";
  function t() {
    n.removeEventListener("DOMContentLoaded", t), window.removeEventListener("load", t), e.ready();
  }var d = [],
      a = function a(e) {
    d.push(e);
  },
      i = function i(t) {
    window.setTimeout(function () {
      t.call(n, e);
    });
  };e.fn.ready = function (e) {
    return a(e), this;
  }, e.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(n) {
      n ? e.readyWait++ : e.ready(!0);
    }, ready: function ready(n) {
      (n === !0 ? --e.readyWait : e.isReady) || (e.isReady = !0, n !== !0 && --e.readyWait > 0 || (a = function a(n) {
        for (d.push(n); d.length;) {
          n = d.shift(), e.isFunction(n) && i(n);
        }
      })());
    } }), e.ready.then = e.fn.ready, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? window.setTimeout(e.ready) : (n.addEventListener("DOMContentLoaded", t), window.addEventListener("load", t));
});