"use strict";

define(["./core", "./var/rnothtmlwhite"], function (n, t) {
  "use strict";
  function r(r) {
    var e = {};return n.each(r.match(t) || [], function (n, t) {
      e[t] = !0;
    }), e;
  }return n.Callbacks = function (t) {
    t = "string" == typeof t ? r(t) : n.extend({}, t);var e,
        i,
        u,
        c,
        o = [],
        f = [],
        h = -1,
        s = function s() {
      for (c = t.once, u = e = !0; f.length; h = -1) {
        for (i = f.shift(); ++h < o.length;) {
          o[h].apply(i[0], i[1]) === !1 && t.stopOnFalse && (h = o.length, i = !1);
        }
      }t.memory || (i = !1), e = !1, c && (o = i ? [] : "");
    },
        a = { add: function add() {
        return o && (i && !e && (h = o.length - 1, f.push(i)), function r(e) {
          n.each(e, function (e, i) {
            n.isFunction(i) ? t.unique && a.has(i) || o.push(i) : i && i.length && "string" !== n.type(i) && r(i);
          });
        }(arguments), i && !e && s()), this;
      }, remove: function remove() {
        return n.each(arguments, function (t, r) {
          for (var e; (e = n.inArray(r, o, e)) > -1;) {
            o.splice(e, 1), e <= h && h--;
          }
        }), this;
      }, has: function has(t) {
        return t ? n.inArray(t, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return c = f = [], o = i = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return c = f = [], i || e || (o = i = ""), this;
      }, locked: function locked() {
        return !!c;
      }, fireWith: function fireWith(n, t) {
        return c || (t = t || [], t = [n, t.slice ? t.slice() : t], f.push(t), e || s()), this;
      }, fire: function fire() {
        return a.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!u;
      } };return a;
  }, n;
});