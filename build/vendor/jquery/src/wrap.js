"use strict";

define(["./core", "./core/init", "./manipulation", "./traversing"], function (n) {
  "use strict";
  return n.fn.extend({ wrapAll: function wrapAll(t) {
      var i;return this[0] && (n.isFunction(t) && (t = t.call(this[0])), i = n(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && i.insertBefore(this[0]), i.map(function () {
        for (var n = this; n.firstElementChild;) {
          n = n.firstElementChild;
        }return n;
      }).append(this)), this;
    }, wrapInner: function wrapInner(t) {
      return n.isFunction(t) ? this.each(function (i) {
        n(this).wrapInner(t.call(this, i));
      }) : this.each(function () {
        var i = n(this),
            e = i.contents();e.length ? e.wrapAll(t) : i.append(t);
      });
    }, wrap: function wrap(t) {
      var i = n.isFunction(t);return this.each(function (e) {
        n(this).wrapAll(i ? t.call(this, e) : t);
      });
    }, unwrap: function unwrap(t) {
      return this.parent(t).not("body").each(function () {
        n(this).replaceWith(this.childNodes);
      }), this;
    } }), n;
});