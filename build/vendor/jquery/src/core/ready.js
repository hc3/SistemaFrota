"use strict";

define(["../core", "../var/document", "../core/readyException", "../deferred"], function (e, t) {
  "use strict";
  function d() {
    t.removeEventListener("DOMContentLoaded", d), window.removeEventListener("load", d), e.ready();
  }var n = e.Deferred();e.fn.ready = function (t) {
    return n.then(t).catch(function (t) {
      e.readyException(t);
    }), this;
  }, e.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(t) {
      t ? e.readyWait++ : e.ready(!0);
    }, ready: function ready(d) {
      (d === !0 ? --e.readyWait : e.isReady) || (e.isReady = !0, d !== !0 && --e.readyWait > 0 || n.resolveWith(t, [e]));
    } }), e.ready.then = n.then, "complete" === t.readyState || "loading" !== t.readyState && !t.documentElement.doScroll ? window.setTimeout(e.ready) : (t.addEventListener("DOMContentLoaded", d), window.addEventListener("load", d));
});