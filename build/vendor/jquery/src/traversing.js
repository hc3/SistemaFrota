"use strict";

define(["./core", "./var/indexOf", "./traversing/var/dir", "./traversing/var/siblings", "./traversing/var/rneedsContext", "./core/init", "./traversing/findFilter", "./selector"], function (n, t, e, r, i) {
  "use strict";
  function u(n, t) {
    for (; (n = n[t]) && 1 !== n.nodeType;) {}return n;
  }var s = /^(?:parents|prev(?:Until|All))/,
      o = { children: !0, contents: !0, next: !0, prev: !0 };return n.fn.extend({ has: function has(t) {
      var e = n(t, this),
          r = e.length;return this.filter(function () {
        for (var t = 0; t < r; t++) {
          if (n.contains(this, e[t])) return !0;
        }
      });
    }, closest: function closest(t, e) {
      var r,
          u = 0,
          s = this.length,
          o = [],
          c = "string" != typeof t && n(t);if (!i.test(t)) for (; u < s; u++) {
        for (r = this[u]; r && r !== e; r = r.parentNode) {
          if (r.nodeType < 11 && (c ? c.index(r) > -1 : 1 === r.nodeType && n.find.matchesSelector(r, t))) {
            o.push(r);break;
          }
        }
      }return this.pushStack(o.length > 1 ? n.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? t.call(n(e), this[0]) : t.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(t, e) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(t, e))));
    }, addBack: function addBack(n) {
      return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
    } }), n.each({ parent: function parent(n) {
      var t = n.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(n) {
      return e(n, "parentNode");
    }, parentsUntil: function parentsUntil(n, t, r) {
      return e(n, "parentNode", r);
    }, next: function next(n) {
      return u(n, "nextSibling");
    }, prev: function prev(n) {
      return u(n, "previousSibling");
    }, nextAll: function nextAll(n) {
      return e(n, "nextSibling");
    }, prevAll: function prevAll(n) {
      return e(n, "previousSibling");
    }, nextUntil: function nextUntil(n, t, r) {
      return e(n, "nextSibling", r);
    }, prevUntil: function prevUntil(n, t, r) {
      return e(n, "previousSibling", r);
    }, siblings: function siblings(n) {
      return r((n.parentNode || {}).firstChild, n);
    }, children: function children(n) {
      return r(n.firstChild);
    }, contents: function contents(t) {
      return t.contentDocument || n.merge([], t.childNodes);
    } }, function (t, e) {
    n.fn[t] = function (r, i) {
      var u = n.map(this, e, r);return "Until" !== t.slice(-5) && (i = r), i && "string" == typeof i && (u = n.filter(i, u)), this.length > 1 && (o[t] || n.uniqueSort(u), s.test(t) && u.reverse()), this.pushStack(u);
    };
  }), n;
});