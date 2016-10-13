"use strict";

define(["./core"], function (n) {
  "use strict";
  n.fn.extend({ bind: function bind(n, t, e) {
      return this.on(n, null, t, e);
    }, unbind: function unbind(n, t) {
      return this.off(n, null, t);
    }, delegate: function delegate(n, t, e, i) {
      return this.on(t, n, e, i);
    }, undelegate: function undelegate(n, t, e) {
      return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", e);
    } }), n.parseJSON = JSON.parse;
});