"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

define(["./core", "./var/document", "./var/rcssNum", "./var/rnothtmlwhite", "./css/var/cssExpand", "./css/var/isHiddenWithinTree", "./css/var/swap", "./css/adjustCSS", "./data/var/dataPriv", "./css/showHide", "./core/init", "./queue", "./deferred", "./traversing", "./manipulation", "./css", "./effects/Tween"], function (e, t, n, i, o, s, r, u, a, f) {
  "use strict";
  function l() {
    g && (window.requestAnimationFrame(l), e.fx.tick());
  }function c() {
    return window.setTimeout(function () {
      v = void 0;
    }), v = e.now();
  }function d(e, t) {
    var n,
        i = 0,
        s = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      n = o[i], s["margin" + n] = s["padding" + n] = e;
    }return t && (s.opacity = s.width = e), s;
  }function p(e, t, n) {
    for (var i, o = (m.tweeners[t] || []).concat(m.tweeners["*"]), s = 0, r = o.length; s < r; s++) {
      if (i = o[s].call(n, t, e)) return i;
    }
  }function h(t, n, i) {
    var o,
        r,
        u,
        l,
        c,
        d,
        h,
        w,
        m = "width" in n || "height" in n,
        v = this,
        g = {},
        x = t.style,
        q = t.nodeType && s(t),
        T = a.get(t, "fxshow");i.queue || (l = e._queueHooks(t, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
      l.unqueued || c();
    }), l.unqueued++, v.always(function () {
      v.always(function () {
        l.unqueued--, e.queue(t, "fx").length || l.empty.fire();
      });
    }));for (o in n) {
      if (r = n[o], y.test(r)) {
        if (delete n[o], u = u || "toggle" === r, r === (q ? "hide" : "show")) {
          if ("show" !== r || !T || void 0 === T[o]) continue;q = !0;
        }g[o] = T && T[o] || e.style(t, o);
      }
    }if (d = !e.isEmptyObject(n), d || !e.isEmptyObject(g)) {
      m && 1 === t.nodeType && (i.overflow = [x.overflow, x.overflowX, x.overflowY], h = T && T.display, null == h && (h = a.get(t, "display")), w = e.css(t, "display"), "none" === w && (h ? w = h : (f([t], !0), h = t.style.display || h, w = e.css(t, "display"), f([t]))), ("inline" === w || "inline-block" === w && null != h) && "none" === e.css(t, "float") && (d || (v.done(function () {
        x.display = h;
      }), null == h && (w = x.display, h = "none" === w ? "" : w)), x.display = "inline-block")), i.overflow && (x.overflow = "hidden", v.always(function () {
        x.overflow = i.overflow[0], x.overflowX = i.overflow[1], x.overflowY = i.overflow[2];
      })), d = !1;for (o in g) {
        d || (T ? "hidden" in T && (q = T.hidden) : T = a.access(t, "fxshow", { display: h }), u && (T.hidden = !q), q && f([t], !0), v.done(function () {
          q || f([t]), a.remove(t, "fxshow");for (o in g) {
            e.style(t, o, g[o]);
          }
        })), d = p(q ? T[o] : 0, o, v), o in T || (T[o] = d.start, q && (d.end = d.start, d.start = 0));
      }
    }
  }function w(t, n) {
    var i, o, s, r, u;for (i in t) {
      if (o = e.camelCase(i), s = n[o], r = t[i], e.isArray(r) && (s = r[1], r = t[i] = r[0]), i !== o && (t[o] = r, delete t[i]), u = e.cssHooks[o], u && "expand" in u) {
        r = u.expand(r), delete t[o];for (i in r) {
          i in t || (t[i] = r[i], n[i] = s);
        }
      } else n[o] = s;
    }
  }function m(t, n, i) {
    var o,
        s,
        r = 0,
        u = m.prefilters.length,
        a = e.Deferred().always(function () {
      delete f.elem;
    }),
        f = function f() {
      if (s) return !1;for (var e = v || c(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, o = 1 - i, r = 0, u = l.tweens.length; r < u; r++) {
        l.tweens[r].run(o);
      }return a.notifyWith(t, [l, o, n]), o < 1 && u ? n : (a.resolveWith(t, [l]), !1);
    },
        l = a.promise({ elem: t, props: e.extend({}, n), opts: e.extend(!0, { specialEasing: {}, easing: e.easing._default }, i), originalProperties: n, originalOptions: i, startTime: v || c(), duration: i.duration, tweens: [], createTween: function createTween(n, i) {
        var o = e.Tween(t, l.opts, n, i, l.opts.specialEasing[n] || l.opts.easing);return l.tweens.push(o), o;
      }, stop: function stop(e) {
        var n = 0,
            i = e ? l.tweens.length : 0;if (s) return this;for (s = !0; n < i; n++) {
          l.tweens[n].run(1);
        }return e ? (a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l, e])) : a.rejectWith(t, [l, e]), this;
      } }),
        d = l.props;for (w(d, l.opts.specialEasing); r < u; r++) {
      if (o = m.prefilters[r].call(l, t, d, l.opts)) return e.isFunction(o.stop) && (e._queueHooks(l.elem, l.opts.queue).stop = e.proxy(o.stop, o)), o;
    }return e.map(d, p, l), e.isFunction(l.opts.start) && l.opts.start.call(t, l), e.fx.timer(e.extend(f, { elem: t, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }var v,
      g,
      y = /^(?:toggle|show|hide)$/,
      x = /queueHooks$/;return e.Animation = e.extend(m, { tweeners: { "*": [function (e, t) {
        var i = this.createTween(e, t);return u(i.elem, e, n.exec(t), i), i;
      }] }, tweener: function tweener(t, n) {
      e.isFunction(t) ? (n = t, t = ["*"]) : t = t.match(i);for (var o, s = 0, r = t.length; s < r; s++) {
        o = t[s], m.tweeners[o] = m.tweeners[o] || [], m.tweeners[o].unshift(n);
      }
    }, prefilters: [h], prefilter: function prefilter(e, t) {
      t ? m.prefilters.unshift(e) : m.prefilters.push(e);
    } }), e.speed = function (n, i, o) {
    var s = n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? e.extend({}, n) : { complete: o || !o && i || e.isFunction(n) && n, duration: n, easing: o && i || i && !e.isFunction(i) && i };return e.fx.off || t.hidden ? s.duration = 0 : "number" != typeof s.duration && (s.duration in e.fx.speeds ? s.duration = e.fx.speeds[s.duration] : s.duration = e.fx.speeds._default), null != s.queue && s.queue !== !0 || (s.queue = "fx"), s.old = s.complete, s.complete = function () {
      e.isFunction(s.old) && s.old.call(this), s.queue && e.dequeue(this, s.queue);
    }, s;
  }, e.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(s).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(t, n, i, o) {
      var s = e.isEmptyObject(t),
          r = e.speed(n, i, o),
          u = function u() {
        var n = m(this, e.extend({}, t), r);(s || a.get(this, "finish")) && n.stop(!0);
      };return u.finish = u, s || r.queue === !1 ? this.each(u) : this.queue(r.queue, u);
    }, stop: function stop(t, n, i) {
      var o = function o(e) {
        var t = e.stop;delete e.stop, t(i);
      };return "string" != typeof t && (i = n, n = t, t = void 0), n && t !== !1 && this.queue(t || "fx", []), this.each(function () {
        var n = !0,
            s = null != t && t + "queueHooks",
            r = e.timers,
            u = a.get(this);if (s) u[s] && u[s].stop && o(u[s]);else for (s in u) {
          u[s] && u[s].stop && x.test(s) && o(u[s]);
        }for (s = r.length; s--;) {
          r[s].elem !== this || null != t && r[s].queue !== t || (r[s].anim.stop(i), n = !1, r.splice(s, 1));
        }!n && i || e.dequeue(this, t);
      });
    }, finish: function finish(t) {
      return t !== !1 && (t = t || "fx"), this.each(function () {
        var n,
            i = a.get(this),
            o = i[t + "queue"],
            s = i[t + "queueHooks"],
            r = e.timers,
            u = o ? o.length : 0;for (i.finish = !0, e.queue(this, t, []), s && s.stop && s.stop.call(this, !0), n = r.length; n--;) {
          r[n].elem === this && r[n].queue === t && (r[n].anim.stop(!0), r.splice(n, 1));
        }for (n = 0; n < u; n++) {
          o[n] && o[n].finish && o[n].finish.call(this);
        }delete i.finish;
      });
    } }), e.each(["toggle", "show", "hide"], function (t, n) {
    var i = e.fn[n];e.fn[n] = function (e, t, o) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(d(n, !0), e, t, o);
    };
  }), e.each({ slideDown: d("show"), slideUp: d("hide"), slideToggle: d("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, n) {
    e.fn[t] = function (e, t, i) {
      return this.animate(n, e, t, i);
    };
  }), e.timers = [], e.fx.tick = function () {
    var t,
        n = 0,
        i = e.timers;for (v = e.now(); n < i.length; n++) {
      t = i[n], t() || i[n] !== t || i.splice(n--, 1);
    }i.length || e.fx.stop(), v = void 0;
  }, e.fx.timer = function (t) {
    e.timers.push(t), t() ? e.fx.start() : e.timers.pop();
  }, e.fx.interval = 13, e.fx.start = function () {
    g || (g = window.requestAnimationFrame ? window.requestAnimationFrame(l) : window.setInterval(e.fx.tick, e.fx.interval));
  }, e.fx.stop = function () {
    window.cancelAnimationFrame ? window.cancelAnimationFrame(g) : window.clearInterval(g), g = null;
  }, e.fx.speeds = { slow: 600, fast: 200, _default: 400 }, e;
});