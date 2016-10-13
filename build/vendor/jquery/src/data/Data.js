"use strict";

define(["../core", "../var/rnothtmlwhite", "./var/acceptData"], function (e, t, i) {
  "use strict";
  function n() {
    this.expando = e.expando + n.uid++;
  }return n.uid = 1, n.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, i(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(t, i, n) {
      var a,
          o = this.cache(t);if ("string" == typeof i) o[e.camelCase(i)] = n;else for (a in i) {
        o[e.camelCase(a)] = i[a];
      }return o;
    }, get: function get(t, i) {
      return void 0 === i ? this.cache(t) : t[this.expando] && t[this.expando][e.camelCase(i)];
    }, access: function access(e, t, i) {
      return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t);
    }, remove: function remove(i, n) {
      var a,
          o = i[this.expando];if (void 0 !== o) {
        if (void 0 !== n) {
          e.isArray(n) ? n = n.map(e.camelCase) : (n = e.camelCase(n), n = n in o ? [n] : n.match(t) || []), a = n.length;for (; a--;) {
            delete o[n[a]];
          }
        }(void 0 === n || e.isEmptyObject(o)) && (i.nodeType ? i[this.expando] = void 0 : delete i[this.expando]);
      }
    }, hasData: function hasData(t) {
      var i = t[this.expando];return void 0 !== i && !e.isEmptyObject(i);
    } }, n;
});