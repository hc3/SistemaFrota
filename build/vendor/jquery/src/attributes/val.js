"use strict";

define(["../core", "../core/stripAndCollapse", "./support", "../core/init"], function (e, t, n) {
  "use strict";
  var o = /\r/g;e.fn.extend({ val: function val(t) {
      var n,
          r,
          i,
          a = this[0];{
        if (arguments.length) return i = e.isFunction(t), this.each(function (o) {
          var r;1 === this.nodeType && (r = i ? t.call(this, o, e(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : e.isArray(r) && (r = e.map(r, function (e) {
            return null == e ? "" : e + "";
          })), n = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], n && "set" in n && void 0 !== n.set(this, r, "value") || (this.value = r));
        });if (a) return n = e.valHooks[a.type] || e.valHooks[a.nodeName.toLowerCase()], n && "get" in n && void 0 !== (r = n.get(a, "value")) ? r : (r = a.value, "string" == typeof r ? r.replace(o, "") : null == r ? "" : r);
      }
    } }), e.extend({ valHooks: { option: { get: function get(n) {
          var o = e.find.attr(n, "value");return null != o ? o : t(e.text(n));
        } }, select: { get: function get(t) {
          var n,
              o,
              r,
              i = t.options,
              a = t.selectedIndex,
              l = "select-one" === t.type,
              s = l ? null : [],
              u = l ? a + 1 : i.length;for (r = a < 0 ? u : l ? a : 0; r < u; r++) {
            if (o = i[r], (o.selected || r === a) && !o.disabled && (!o.parentNode.disabled || !e.nodeName(o.parentNode, "optgroup"))) {
              if (n = e(o).val(), l) return n;s.push(n);
            }
          }return s;
        }, set: function set(t, n) {
          for (var o, r, i = t.options, a = e.makeArray(n), l = i.length; l--;) {
            r = i[l], (r.selected = e.inArray(e.valHooks.option.get(r), a) > -1) && (o = !0);
          }return o || (t.selectedIndex = -1), a;
        } } } }), e.each(["radio", "checkbox"], function () {
    e.valHooks[this] = { set: function set(t, n) {
        if (e.isArray(n)) return t.checked = e.inArray(e(t).val(), n) > -1;
      } }, n.checkOn || (e.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
});