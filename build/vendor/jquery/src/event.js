"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

define(["./core", "./var/document", "./var/documentElement", "./var/rnothtmlwhite", "./var/slice", "./data/var/dataPriv", "./core/init", "./selector"], function (e, t, n, i, r, a) {
  "use strict";
  function o() {
    return !0;
  }function s() {
    return !1;
  }function l() {
    try {
      return t.activeElement;
    } catch (e) {}
  }function d(t, n, i, r, a, o) {
    var l, u;if ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n))) {
      "string" != typeof i && (r = r || i, i = void 0);for (u in n) {
        d(t, u, i, r, n[u], o);
      }return t;
    }if (null == r && null == a ? (a = i, r = i = void 0) : null == a && ("string" == typeof i ? (a = r, r = void 0) : (a = r, r = i, i = void 0)), a === !1) a = s;else if (!a) return t;return 1 === o && (l = a, a = function a(t) {
      return e().off(t), l.apply(this, arguments);
    }, a.guid = l.guid || (l.guid = e.guid++)), t.each(function () {
      e.event.add(this, n, a, r, i);
    });
  }var u = /^key/,
      c = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      p = /^([^.]*)(?:\.(.+)|)/;return e.event = { global: {}, add: function add(t, r, o, s, l) {
      var d,
          u,
          c,
          h,
          f,
          g,
          v,
          m,
          y,
          b,
          E,
          T = a.get(t);if (T) for (o.handler && (d = o, o = d.handler, l = d.selector), l && e.find.matchesSelector(n, l), o.guid || (o.guid = e.guid++), (h = T.events) || (h = T.events = {}), (u = T.handle) || (u = T.handle = function (n) {
        return "undefined" != typeof e && e.event.triggered !== n.type ? e.event.dispatch.apply(t, arguments) : void 0;
      }), r = (r || "").match(i) || [""], f = r.length; f--;) {
        c = p.exec(r[f]) || [], y = E = c[1], b = (c[2] || "").split(".").sort(), y && (v = e.event.special[y] || {}, y = (l ? v.delegateType : v.bindType) || y, v = e.event.special[y] || {}, g = e.extend({ type: y, origType: E, data: s, handler: o, guid: o.guid, selector: l, needsContext: l && e.expr.match.needsContext.test(l), namespace: b.join(".") }, d), (m = h[y]) || (m = h[y] = [], m.delegateCount = 0, v.setup && v.setup.call(t, s, b, u) !== !1 || t.addEventListener && t.addEventListener(y, u)), v.add && (v.add.call(t, g), g.handler.guid || (g.handler.guid = o.guid)), l ? m.splice(m.delegateCount++, 0, g) : m.push(g), e.event.global[y] = !0);
      }
    }, remove: function remove(t, n, r, o, s) {
      var l,
          d,
          u,
          c,
          h,
          f,
          g,
          v,
          m,
          y,
          b,
          E = a.hasData(t) && a.get(t);if (E && (c = E.events)) {
        for (n = (n || "").match(i) || [""], h = n.length; h--;) {
          if (u = p.exec(n[h]) || [], m = b = u[1], y = (u[2] || "").split(".").sort(), m) {
            for (g = e.event.special[m] || {}, m = (o ? g.delegateType : g.bindType) || m, v = c[m] || [], u = u[2] && new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)"), d = l = v.length; l--;) {
              f = v[l], !s && b !== f.origType || r && r.guid !== f.guid || u && !u.test(f.namespace) || o && o !== f.selector && ("**" !== o || !f.selector) || (v.splice(l, 1), f.selector && v.delegateCount--, g.remove && g.remove.call(t, f));
            }d && !v.length && (g.teardown && g.teardown.call(t, y, E.handle) !== !1 || e.removeEvent(t, m, E.handle), delete c[m]);
          } else for (m in c) {
            e.event.remove(t, m + n[h], r, o, !0);
          }
        }e.isEmptyObject(c) && a.remove(t, "handle events");
      }
    }, dispatch: function dispatch(t) {
      var n,
          i,
          r,
          o,
          s,
          l,
          d = e.event.fix(t),
          u = new Array(arguments.length),
          c = (a.get(this, "events") || {})[d.type] || [],
          p = e.event.special[d.type] || {};for (u[0] = d, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }if (d.delegateTarget = this, !p.preDispatch || p.preDispatch.call(this, d) !== !1) {
        for (l = e.event.handlers.call(this, d, c), n = 0; (o = l[n++]) && !d.isPropagationStopped();) {
          for (d.currentTarget = o.elem, i = 0; (s = o.handlers[i++]) && !d.isImmediatePropagationStopped();) {
            d.rnamespace && !d.rnamespace.test(s.namespace) || (d.handleObj = s, d.data = s.data, r = ((e.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u), void 0 !== r && (d.result = r) === !1 && (d.preventDefault(), d.stopPropagation()));
          }
        }return p.postDispatch && p.postDispatch.call(this, d), d.result;
      }
    }, handlers: function handlers(t, n) {
      var i,
          r,
          a,
          o,
          s,
          l = [],
          d = n.delegateCount,
          u = t.target;if (d && u.nodeType && !("click" === t.type && t.button >= 1)) for (; u !== this; u = u.parentNode || this) {
        if (1 === u.nodeType && ("click" !== t.type || u.disabled !== !0)) {
          for (o = [], s = {}, i = 0; i < d; i++) {
            r = n[i], a = r.selector + " ", void 0 === s[a] && (s[a] = r.needsContext ? e(a, this).index(u) > -1 : e.find(a, this, null, [u]).length), s[a] && o.push(r);
          }o.length && l.push({ elem: u, handlers: o });
        }
      }return u = this, d < n.length && l.push({ elem: u, handlers: n.slice(d) }), l;
    }, addProp: function addProp(t, n) {
      Object.defineProperty(e.Event.prototype, t, { enumerable: !0, configurable: !0, get: e.isFunction(n) ? function () {
          if (this.originalEvent) return n(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        }, set: function set(e) {
          Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
        } });
    }, fix: function fix(t) {
      return t[e.expando] ? t : new e.Event(t);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== l() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === l() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && e.nodeName(this, "input")) return this.click(), !1;
        }, _default: function _default(t) {
          return e.nodeName(t.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, e.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, e.Event = function (t, n) {
    return this instanceof e.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? o : s, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, n && e.extend(this, n), this.timeStamp = t && t.timeStamp || e.now(), void (this[e.expando] = !0)) : new e.Event(t, n);
  }, e.Event.prototype = { constructor: e.Event, isDefaultPrevented: s, isPropagationStopped: s, isImmediatePropagationStopped: s, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = o, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = o, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = o, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, e.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && u.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && c.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, e.event.addProp), e.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, n) {
    e.event.special[t] = { delegateType: n, bindType: n, handle: function handle(t) {
        var i,
            r = this,
            a = t.relatedTarget,
            o = t.handleObj;return a && (a === r || e.contains(r, a)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = n), i;
      } };
  }), e.fn.extend({ on: function on(e, t, n, i) {
      return d(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return d(this, e, t, n, i, 1);
    }, off: function off(t, n, i) {
      var r, a;if (t && t.preventDefault && t.handleObj) return r = t.handleObj, e(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        for (a in t) {
          this.off(a, n, t[a]);
        }return this;
      }return n !== !1 && "function" != typeof n || (i = n, n = void 0), i === !1 && (i = s), this.each(function () {
        e.event.remove(this, t, i, n);
      });
    } }), e;
});