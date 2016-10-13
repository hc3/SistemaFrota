"use strict";

define(["../core", "./var/nonce", "./var/rquery", "../ajax"], function (n, a, o) {
  "use strict";
  var t = [],
      r = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var o = t.pop() || n.expando + "_" + a++;return this[o] = !0, o;
    } }), n.ajaxPrefilter("json jsonp", function (a, s, e) {
    var c,
        p,
        i,
        l = a.jsonp !== !1 && (r.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && r.test(a.data) && "data");if (l || "jsonp" === a.dataTypes[0]) return c = a.jsonpCallback = n.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, l ? a[l] = a[l].replace(r, "$1" + c) : a.jsonp !== !1 && (a.url += (o.test(a.url) ? "&" : "?") + a.jsonp + "=" + c), a.converters["script json"] = function () {
      return i || n.error(c + " was not called"), i[0];
    }, a.dataTypes[0] = "json", p = window[c], window[c] = function () {
      i = arguments;
    }, e.always(function () {
      void 0 === p ? n(window).removeProp(c) : window[c] = p, a[c] && (a.jsonpCallback = s.jsonpCallback, t.push(c)), i && n.isFunction(p) && p(i[0]), i = p = void 0;
    }), "script";
  });
});