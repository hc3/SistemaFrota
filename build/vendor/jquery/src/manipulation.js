"use strict";

define(["./core", "./var/concat", "./var/push", "./core/access", "./manipulation/var/rcheckableType", "./manipulation/var/rtagName", "./manipulation/var/rscriptType", "./manipulation/wrapMap", "./manipulation/getAll", "./manipulation/setGlobalEval", "./manipulation/buildFragment", "./manipulation/support", "./data/var/dataPriv", "./data/var/dataUser", "./data/var/acceptData", "./core/DOMEval", "./core/init", "./traversing", "./selector", "./event"], function (e, t, n, r, i, a, o, c, s, l, p, u, h, f, d, v) {
  "use strict";
  function m(t, n) {
    return e.nodeName(t, "table") && e.nodeName(11 !== n.nodeType ? n : n.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t;
  }function y(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function g(e) {
    var t = A.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }function T(t, n) {
    var r, i, a, o, c, s, l, p;if (1 === n.nodeType) {
      if (h.hasData(t) && (o = h.access(t), c = h.set(n, o), p = o.events)) {
        delete c.handle, c.events = {};for (a in p) {
          for (r = 0, i = p[a].length; r < i; r++) {
            e.event.add(n, a, p[a][r]);
          }
        }
      }f.hasData(t) && (s = f.access(t), l = e.extend({}, s), f.set(n, l));
    }
  }function x(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && i.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function C(n, r, i, a) {
    r = t.apply([], r);var c,
        l,
        f,
        d,
        m,
        T,
        x = 0,
        D = n.length,
        N = D - 1,
        b = r[0],
        A = e.isFunction(b);if (A || D > 1 && "string" == typeof b && !u.checkClone && k.test(b)) return n.each(function (e) {
      var t = n.eq(e);A && (r[0] = b.call(this, e, t.html())), C(t, r, i, a);
    });if (D && (c = p(r, n[0].ownerDocument, !1, n, a), l = c.firstChild, 1 === c.childNodes.length && (c = l), l || a)) {
      for (f = e.map(s(c, "script"), y), d = f.length; x < D; x++) {
        m = c, x !== N && (m = e.clone(m, !0, !0), d && e.merge(f, s(m, "script"))), i.call(n[x], m, x);
      }if (d) for (T = f[f.length - 1].ownerDocument, e.map(f, g), x = 0; x < d; x++) {
        m = f[x], o.test(m.type || "") && !h.access(m, "globalEval") && e.contains(T, m) && (m.src ? e._evalUrl && e._evalUrl(m.src) : v(m.textContent.replace(w, ""), T));
      }
    }return n;
  }function D(t, n, r) {
    for (var i, a = n ? e.filter(n, t) : t, o = 0; null != (i = a[o]); o++) {
      r || 1 !== i.nodeType || e.cleanData(s(i)), i.parentNode && (r && e.contains(i.ownerDocument, i) && l(s(i, "script")), i.parentNode.removeChild(i));
    }return t;
  }var N = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      b = /<script|<style|<link/i,
      k = /checked\s*(?:[^=]|=\s*.checked.)/i,
      A = /^true\/(.*)/,
      w = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;return e.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(N, "<$1></$2>");
    }, clone: function clone(t, n, r) {
      var i,
          a,
          o,
          c,
          p = t.cloneNode(!0),
          h = e.contains(t.ownerDocument, t);if (!(u.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || e.isXMLDoc(t))) for (c = s(p), o = s(t), i = 0, a = o.length; i < a; i++) {
        x(o[i], c[i]);
      }if (n) if (r) for (o = o || s(t), c = c || s(p), i = 0, a = o.length; i < a; i++) {
        T(o[i], c[i]);
      } else T(t, p);return c = s(p, "script"), c.length > 0 && l(c, !h && s(t, "script")), p;
    }, cleanData: function cleanData(t) {
      for (var n, r, i, a = e.event.special, o = 0; void 0 !== (r = t[o]); o++) {
        if (d(r)) {
          if (n = r[h.expando]) {
            if (n.events) for (i in n.events) {
              a[i] ? e.event.remove(r, i) : e.removeEvent(r, i, n.handle);
            }r[h.expando] = void 0;
          }r[f.expando] && (r[f.expando] = void 0);
        }
      }
    } }), e.fn.extend({ detach: function detach(e) {
      return D(this, e, !0);
    }, remove: function remove(e) {
      return D(this, e);
    }, text: function text(t) {
      return r(this, function (t) {
        return void 0 === t ? e.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
        });
      }, null, t, arguments.length);
    }, append: function append() {
      return C(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = m(this, e);t.appendChild(e);
        }
      });
    }, prepend: function prepend() {
      return C(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = m(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return C(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return C(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var t, n = 0; null != (t = this[n]); n++) {
        1 === t.nodeType && (e.cleanData(s(t, !1)), t.textContent = "");
      }return this;
    }, clone: function clone(t, n) {
      return t = null != t && t, n = null == n ? t : n, this.map(function () {
        return e.clone(this, t, n);
      });
    }, html: function html(t) {
      return r(this, function (t) {
        var n = this[0] || {},
            r = 0,
            i = this.length;if (void 0 === t && 1 === n.nodeType) return n.innerHTML;if ("string" == typeof t && !b.test(t) && !c[(a.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = e.htmlPrefilter(t);try {
            for (; r < i; r++) {
              n = this[r] || {}, 1 === n.nodeType && (e.cleanData(s(n, !1)), n.innerHTML = t);
            }n = 0;
          } catch (e) {}
        }n && this.empty().append(t);
      }, null, t, arguments.length);
    }, replaceWith: function replaceWith() {
      var t = [];return C(this, arguments, function (n) {
        var r = this.parentNode;e.inArray(this, t) < 0 && (e.cleanData(s(this)), r && r.replaceChild(n, this));
      }, t);
    } }), e.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, r) {
    e.fn[t] = function (t) {
      for (var i, a = [], o = e(t), c = o.length - 1, s = 0; s <= c; s++) {
        i = s === c ? this : this.clone(!0), e(o[s])[r](i), n.apply(a, i.get());
      }return this.pushStack(a);
    };
  }), e;
});