"use strict";

define(["./core", "./var/document", "./var/documentElement", "./var/hasOwn", "./var/indexOf"], function (e, t, n, o, r) {
  "use strict";
  function c(n, o) {
    if (n === o) return a = !0, 0;var c = !n.compareDocumentPosition - !o.compareDocumentPosition;return c ? c : (c = (n.ownerDocument || n) === (o.ownerDocument || o) ? n.compareDocumentPosition(o) : 1, 1 & c ? n === t || n.ownerDocument === t && e.contains(t, n) ? -1 : o === t || o.ownerDocument === t && e.contains(t, o) ? 1 : l ? r.call(l, n) - r.call(l, o) : 0 : 4 & c ? -1 : 1);
  }function u(e) {
    var t,
        n = [],
        o = 0,
        r = 0;if (a = !1, l = !s && e.slice(0), e.sort(c), a) {
      for (; t = e[r++];) {
        t === e[r] && (o = n.push(r));
      }for (; o--;) {
        e.splice(n[o], 1);
      }
    }return l = null, e;
  }function i(e) {
    return (e + "").replace(f, m);
  }var a,
      l,
      s = e.expando.split("").sort(c).join("") === e.expando,
      d = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector,
      f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
      m = function m(e, t) {
    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
  };e.extend({ uniqueSort: u, unique: u, escapeSelector: i, find: function find(n, o, r, c) {
      var u,
          i,
          a = 0;if (r = r || [], o = o || t, !n || "string" != typeof n) return r;if (1 !== (i = o.nodeType) && 9 !== i) return [];if (c) for (; u = c[a++];) {
        e.find.matchesSelector(u, n) && r.push(u);
      } else e.merge(r, o.querySelectorAll(n));return r;
    }, text: function text(t) {
      var n,
          o = "",
          r = 0,
          c = t.nodeType;if (c) {
        if (1 === c || 9 === c || 11 === c) return t.textContent;if (3 === c || 4 === c) return t.nodeValue;
      } else for (; n = t[r++];) {
        o += e.text(n);
      }return o;
    }, contains: function contains(e, t) {
      var n = 9 === e.nodeType ? e.documentElement : e,
          o = t && t.parentNode;return e === o || !(!o || 1 !== o.nodeType || !n.contains(o));
    }, isXMLDoc: function isXMLDoc(e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, expr: { attrHandle: {}, match: { bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext: /^[\x20\t\r\n\f]*[>+~]/ } } }), e.extend(e.find, { matches: function matches(t, n) {
      return e.find(t, null, null, n);
    }, matchesSelector: function matchesSelector(e, t) {
      return d.call(e, t);
    }, attr: function attr(t, n) {
      var r = e.expr.attrHandle[n.toLowerCase()],
          c = r && o.call(e.expr.attrHandle, n.toLowerCase()) ? r(t, n, e.isXMLDoc(t)) : void 0;return void 0 !== c ? c : t.getAttribute(n);
    } });
});