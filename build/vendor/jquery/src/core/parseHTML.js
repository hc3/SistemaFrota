"use strict";

define(["../core", "../var/document", "./var/rsingleTag", "../manipulation/buildFragment", "./support"], function (e, t, r, n, a) {
  "use strict";
  return e.parseHTML = function (o, i, c) {
    if ("string" != typeof o) return [];"boolean" == typeof i && (c = i, i = !1);var u, l, m;return i || (a.createHTMLDocument ? (i = t.implementation.createHTMLDocument(""), u = i.createElement("base"), u.href = t.location.href, i.head.appendChild(u)) : i = t), l = r.exec(o), m = !c && [], l ? [i.createElement(l[1])] : (l = n([o], i, m), m && m.length && e(m).remove(), e.merge([], l.childNodes));
  }, e.parseHTML;
});