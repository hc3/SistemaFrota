"use strict";

define(["./core", "./core/access", "./css"], function (e, n) {
  "use strict";
  return e.each({ Height: "height", Width: "width" }, function (t, o) {
    e.each({ padding: "inner" + t, content: o, "": "outer" + t }, function (i, c) {
      e.fn[c] = function (r, d) {
        var s = arguments.length && (i || "boolean" != typeof r),
            u = i || (r === !0 || d === !0 ? "margin" : "border");return n(this, function (n, o, i) {
          var r;return e.isWindow(n) ? 0 === c.indexOf("outer") ? n["inner" + t] : n.document.documentElement["client" + t] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + t], r["scroll" + t], n.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? e.css(n, o, u) : e.style(n, o, i, u);
        }, o, s ? r : void 0, s);
      };
    });
  }), e;
});