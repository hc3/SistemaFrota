"use strict";

define(["../core", "../core/access", "./support", "../var/rnothtmlwhite", "../selector"], function (t, e, r, n) {
  "use strict";
  var o,
      i = t.expr.attrHandle;t.fn.extend({ attr: function attr(r, n) {
      return e(this, t.attr, r, n, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        t.removeAttr(this, e);
      });
    } }), t.extend({ attr: function attr(e, r, n) {
      var i,
          u,
          a = e.nodeType;if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? t.prop(e, r, n) : (1 === a && t.isXMLDoc(e) || (u = t.attrHooks[r.toLowerCase()] || (t.expr.match.bool.test(r) ? o : void 0)), void 0 !== n ? null === n ? void t.removeAttr(e, r) : u && "set" in u && void 0 !== (i = u.set(e, n, r)) ? i : (e.setAttribute(r, n + ""), n) : u && "get" in u && null !== (i = u.get(e, r)) ? i : (i = t.find.attr(e, r), null == i ? void 0 : i));
    }, attrHooks: { type: { set: function set(e, n) {
          if (!r.radioValue && "radio" === n && t.nodeName(e, "input")) {
            var o = e.value;return e.setAttribute("type", n), o && (e.value = o), n;
          }
        } } }, removeAttr: function removeAttr(t, e) {
      var r,
          o = 0,
          i = e && e.match(n);if (i && 1 === t.nodeType) for (; r = i[o++];) {
        t.removeAttribute(r);
      }
    } }), o = { set: function set(e, r, n) {
      return r === !1 ? t.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, t.each(t.expr.match.bool.source.match(/\w+/g), function (e, r) {
    var n = i[r] || t.find.attr;i[r] = function (t, e, r) {
      var o,
          u,
          a = e.toLowerCase();return r || (u = i[a], i[a] = o, o = null != n(t, e, r) ? a : null, i[a] = u), o;
    };
  });
});