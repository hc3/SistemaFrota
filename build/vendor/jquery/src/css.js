"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

define(["./core", "./var/pnum", "./core/access", "./css/var/rmargin", "./var/document", "./var/rcssNum", "./css/var/rnumnonpx", "./css/var/cssExpand", "./css/var/getStyles", "./css/var/swap", "./css/curCSS", "./css/adjustCSS", "./css/addGetHookIf", "./css/support", "./core/init", "./core/ready", "./selector"], function (e, t, n, s, r, i, o, c, a, u, l, d, f, g) {
  "use strict";
  function p(e) {
    if (e in C) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = k.length; n--;) {
      if (e = k[n] + t, e in C) return e;
    }
  }function v(e, t, n) {
    var s = i.exec(t);return s ? Math.max(0, s[2] - (n || 0)) + (s[3] || "px") : t;
  }function b(t, n, s, r, i) {
    var o,
        a = 0;for (o = s === (r ? "border" : "content") ? 4 : "width" === n ? 1 : 0; o < 4; o += 2) {
      "margin" === s && (a += e.css(t, s + c[o], !0, i)), r ? ("content" === s && (a -= e.css(t, "padding" + c[o], !0, i)), "margin" !== s && (a -= e.css(t, "border" + c[o] + "Width", !0, i))) : (a += e.css(t, "padding" + c[o], !0, i), "padding" !== s && (a += e.css(t, "border" + c[o] + "Width", !0, i)));
    }return a;
  }function h(t, n, s) {
    var r,
        i = !0,
        c = a(t),
        u = "border-box" === e.css(t, "boxSizing", !1, c);if (t.getClientRects().length && (r = t.getBoundingClientRect()[n]), r <= 0 || null == r) {
      if (r = l(t, n, c), (r < 0 || null == r) && (r = t.style[n]), o.test(r)) return r;i = u && (g.boxSizingReliable() || r === t.style[n]), r = parseFloat(r) || 0;
    }return r + b(t, n, s || (u ? "border" : "content"), i, c) + "px";
  }var m = /^(none|table(?!-c[ea]).+)/,
      x = { position: "absolute", visibility: "hidden", display: "block" },
      y = { letterSpacing: "0", fontWeight: "400" },
      k = ["Webkit", "Moz", "ms"],
      C = r.createElement("div").style;return e.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = l(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function style(t, n, s, r) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
            c,
            a,
            u = e.camelCase(n),
            l = t.style;return n = e.cssProps[u] || (e.cssProps[u] = p(u) || u), a = e.cssHooks[n] || e.cssHooks[u], void 0 === s ? a && "get" in a && void 0 !== (o = a.get(t, !1, r)) ? o : l[n] : (c = typeof s === "undefined" ? "undefined" : _typeof(s), "string" === c && (o = i.exec(s)) && o[1] && (s = d(t, n, o), c = "number"), null != s && s === s && ("number" === c && (s += o && o[3] || (e.cssNumber[u] ? "" : "px")), g.clearCloneStyle || "" !== s || 0 !== n.indexOf("background") || (l[n] = "inherit"), a && "set" in a && void 0 === (s = a.set(t, s, r)) || (l[n] = s)), void 0);
      }
    }, css: function css(t, n, s, r) {
      var i,
          o,
          c,
          a = e.camelCase(n);return n = e.cssProps[a] || (e.cssProps[a] = p(a) || a), c = e.cssHooks[n] || e.cssHooks[a], c && "get" in c && (i = c.get(t, !0, s)), void 0 === i && (i = l(t, n, r)), "normal" === i && n in y && (i = y[n]), "" === s || s ? (o = parseFloat(i), s === !0 || isFinite(o) ? o || 0 : i) : i;
    } }), e.each(["height", "width"], function (t, n) {
    e.cssHooks[n] = { get: function get(t, s, r) {
        if (s) return !m.test(e.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? h(t, n, r) : u(t, x, function () {
          return h(t, n, r);
        });
      }, set: function set(t, s, r) {
        var o,
            c = r && a(t),
            u = r && b(t, n, r, "border-box" === e.css(t, "boxSizing", !1, c), c);return u && (o = i.exec(s)) && "px" !== (o[3] || "px") && (t.style[n] = s, s = e.css(t, n)), v(t, s, u);
      } };
  }), e.cssHooks.marginLeft = f(g.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(l(e, "marginLeft")) || e.getBoundingClientRect().left - u(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), e.each({ margin: "", padding: "", border: "Width" }, function (t, n) {
    e.cssHooks[t + n] = { expand: function expand(e) {
        for (var s = 0, r = {}, i = "string" == typeof e ? e.split(" ") : [e]; s < 4; s++) {
          r[t + c[s] + n] = i[s] || i[s - 2] || i[0];
        }return r;
      } }, s.test(t) || (e.cssHooks[t + n].set = v);
  }), e.fn.extend({ css: function css(t, s) {
      return n(this, function (t, n, s) {
        var r,
            i,
            o = {},
            c = 0;if (e.isArray(n)) {
          for (r = a(t), i = n.length; c < i; c++) {
            o[n[c]] = e.css(t, n[c], !1, r);
          }return o;
        }return void 0 !== s ? e.style(t, n, s) : e.css(t, n);
      }, t, s, arguments.length > 1);
    } }), e;
});