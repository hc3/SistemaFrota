"use strict";

define(function () {
  "use strict";
  function t(t, e) {
    return { get: function get() {
        return t() ? void delete this.get : (this.get = e).apply(this, arguments);
      } };
  }return t;
});