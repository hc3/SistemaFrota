"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

define(["../core", "../core/stripAndCollapse", "../var/rnothtmlwhite", "../data/var/dataPriv", "../core/init"], function (t, s, i, e) {
  "use strict";
  function r(t) {
    return t.getAttribute && t.getAttribute("class") || "";
  }t.fn.extend({ addClass: function addClass(e) {
      var n,
          a,
          o,
          h,
          c,
          f,
          l,
          u = 0;if (t.isFunction(e)) return this.each(function (s) {
        t(this).addClass(e.call(this, s, r(this)));
      });if ("string" == typeof e && e) for (n = e.match(i) || []; a = this[u++];) {
        if (h = r(a), o = 1 === a.nodeType && " " + s(h) + " ") {
          for (f = 0; c = n[f++];) {
            o.indexOf(" " + c + " ") < 0 && (o += c + " ");
          }l = s(o), h !== l && a.setAttribute("class", l);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var n,
          a,
          o,
          h,
          c,
          f,
          l,
          u = 0;if (t.isFunction(e)) return this.each(function (s) {
        t(this).removeClass(e.call(this, s, r(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof e && e) for (n = e.match(i) || []; a = this[u++];) {
        if (h = r(a), o = 1 === a.nodeType && " " + s(h) + " ") {
          for (f = 0; c = n[f++];) {
            for (; o.indexOf(" " + c + " ") > -1;) {
              o = o.replace(" " + c + " ", " ");
            }
          }l = s(o), h !== l && a.setAttribute("class", l);
        }
      }return this;
    }, toggleClass: function toggleClass(s, n) {
      var a = typeof s === "undefined" ? "undefined" : _typeof(s);return "boolean" == typeof n && "string" === a ? n ? this.addClass(s) : this.removeClass(s) : t.isFunction(s) ? this.each(function (i) {
        t(this).toggleClass(s.call(this, i, r(this), n), n);
      }) : this.each(function () {
        var n, o, h, c;if ("string" === a) for (o = 0, h = t(this), c = s.match(i) || []; n = c[o++];) {
          h.hasClass(n) ? h.removeClass(n) : h.addClass(n);
        } else void 0 !== s && "boolean" !== a || (n = r(this), n && e.set(this, "__className__", n), this.setAttribute && this.setAttribute("class", n || s === !1 ? "" : e.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(t) {
      var i,
          e,
          n = 0;for (i = " " + t + " "; e = this[n++];) {
        if (1 === e.nodeType && (" " + s(r(e)) + " ").indexOf(i) > -1) return !0;
      }return !1;
    } });
});