"use strict";

define(["./core", "./core/access", "./var/document", "./var/documentElement", "./css/var/rnumnonpx", "./css/curCSS", "./css/addGetHookIf", "./css/support", "./core/init", "./css", "./selector"], function (t, e, o, s, n, f, i, c) {
  "use strict";
  function r(e) {
    return t.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }return t.offset = { setOffset: function setOffset(e, o, s) {
      var n,
          f,
          i,
          c,
          r,
          l,
          p,
          a = t.css(e, "position"),
          u = t(e),
          d = {};"static" === a && (e.style.position = "relative"), r = u.offset(), i = t.css(e, "top"), l = t.css(e, "left"), p = ("absolute" === a || "fixed" === a) && (i + l).indexOf("auto") > -1, p ? (n = u.position(), c = n.top, f = n.left) : (c = parseFloat(i) || 0, f = parseFloat(l) || 0), t.isFunction(o) && (o = o.call(e, s, t.extend({}, r))), null != o.top && (d.top = o.top - r.top + c), null != o.left && (d.left = o.left - r.left + f), "using" in o ? o.using.call(e, d) : u.css(d);
    } }, t.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (o) {
        t.offset.setOffset(this, e, o);
      });var o,
          s,
          n,
          f,
          i = this[0];if (i) return i.getClientRects().length ? (n = i.getBoundingClientRect(), n.width || n.height ? (f = i.ownerDocument, s = r(f), o = f.documentElement, { top: n.top + s.pageYOffset - o.clientTop, left: n.left + s.pageXOffset - o.clientLeft }) : n) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var e,
            o,
            s = this[0],
            n = { top: 0, left: 0 };return "fixed" === t.css(s, "position") ? o = s.getBoundingClientRect() : (e = this.offsetParent(), o = this.offset(), t.nodeName(e[0], "html") || (n = e.offset()), n = { top: n.top + t.css(e[0], "borderTopWidth", !0), left: n.left + t.css(e[0], "borderLeftWidth", !0) }), { top: o.top - n.top - t.css(s, "marginTop", !0), left: o.left - n.left - t.css(s, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === t.css(e, "position");) {
          e = e.offsetParent;
        }return e || s;
      });
    } }), t.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (o, s) {
    var n = "pageYOffset" === s;t.fn[o] = function (t) {
      return e(this, function (t, e, o) {
        var f = r(t);return void 0 === o ? f ? f[s] : t[e] : void (f ? f.scrollTo(n ? f.pageXOffset : o, n ? o : f.pageYOffset) : t[e] = o);
      }, o, t, arguments.length);
    };
  }), t.each(["top", "left"], function (e, o) {
    t.cssHooks[o] = i(c.pixelPosition, function (e, s) {
      if (s) return s = f(e, o), n.test(s) ? t(e).position()[o] + "px" : s;
    });
  }), t;
});