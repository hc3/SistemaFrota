"use strict";

define(["./core", "./data/var/dataPriv", "./deferred", "./callbacks"], function (e, u) {
  "use strict";
  return e.extend({ queue: function queue(t, r, n) {
      var i;if (t) return r = (r || "fx") + "queue", i = u.get(t, r), n && (!i || e.isArray(n) ? i = u.access(t, r, e.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(u, t) {
      t = t || "fx";var r = e.queue(u, t),
          n = r.length,
          i = r.shift(),
          s = e._queueHooks(u, t),
          o = function o() {
        e.dequeue(u, t);
      };"inprogress" === i && (i = r.shift(), n--), i && ("fx" === t && r.unshift("inprogress"), delete s.stop, i.call(u, o, s)), !n && s && s.empty.fire();
    }, _queueHooks: function _queueHooks(t, r) {
      var n = r + "queueHooks";return u.get(t, n) || u.access(t, n, { empty: e.Callbacks("once memory").add(function () {
          u.remove(t, [r + "queue", n]);
        }) });
    } }), e.fn.extend({ queue: function queue(u, t) {
      var r = 2;return "string" != typeof u && (t = u, u = "fx", r--), arguments.length < r ? e.queue(this[0], u) : void 0 === t ? this : this.each(function () {
        var r = e.queue(this, u, t);e._queueHooks(this, u), "fx" === u && "inprogress" !== r[0] && e.dequeue(this, u);
      });
    }, dequeue: function dequeue(u) {
      return this.each(function () {
        e.dequeue(this, u);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(t, r) {
      var n,
          i = 1,
          s = e.Deferred(),
          o = this,
          f = this.length,
          c = function c() {
        --i || s.resolveWith(o, [o]);
      };for ("string" != typeof t && (r = t, t = void 0), t = t || "fx"; f--;) {
        n = u.get(o[f], t + "queueHooks"), n && n.empty && (i++, n.empty.add(c));
      }return c(), s.promise(r);
    } }), e;
});