"use strict";

define(["../core", "../css"], function (t) {
  "use strict";
  function o(t, e, s, p, i) {
    return new o.prototype.init(t, e, s, p, i);
  }t.Tween = o, o.prototype = { constructor: o, init: function init(o, e, s, p, i, n) {
      this.elem = o, this.prop = s, this.easing = i || t.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = p, this.unit = n || (t.cssNumber[s] ? "" : "px");
    }, cur: function cur() {
      var t = o.propHooks[this.prop];return t && t.get ? t.get(this) : o.propHooks._default.get(this);
    }, run: function run(e) {
      var s,
          p = o.propHooks[this.prop];return this.options.duration ? this.pos = s = t.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = s = e, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), p && p.set ? p.set(this) : o.propHooks._default.set(this), this;
    } }, o.prototype.init.prototype = o.prototype, o.propHooks = { _default: { get: function get(o) {
        var e;return 1 !== o.elem.nodeType || null != o.elem[o.prop] && null == o.elem.style[o.prop] ? o.elem[o.prop] : (e = t.css(o.elem, o.prop, ""), e && "auto" !== e ? e : 0);
      }, set: function set(o) {
        t.fx.step[o.prop] ? t.fx.step[o.prop](o) : 1 !== o.elem.nodeType || null == o.elem.style[t.cssProps[o.prop]] && !t.cssHooks[o.prop] ? o.elem[o.prop] = o.now : t.style(o.elem, o.prop, o.now + o.unit);
      } } }, o.propHooks.scrollTop = o.propHooks.scrollLeft = { set: function set(t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
    } }, t.easing = { linear: function linear(t) {
      return t;
    }, swing: function swing(t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    }, _default: "swing" }, t.fx = o.prototype.init, t.fx.step = {};
});