"use strict";

define(["../core", "../var/rcssNum"], function (r, e) {
  "use strict";
  function n(n, s, t, u) {
    var c,
        i = 1,
        f = 20,
        o = u ? function () {
      return u.cur();
    } : function () {
      return r.css(n, s, "");
    },
        a = o(),
        d = t && t[3] || (r.cssNumber[s] ? "" : "px"),
        m = (r.cssNumber[s] || "px" !== d && +a) && e.exec(r.css(n, s));if (m && m[3] !== d) {
      d = d || m[3], t = t || [], m = +a || 1;do {
        i = i || ".5", m /= i, r.style(n, s, m + d);
      } while (i !== (i = o() / a) && 1 !== i && --f);
    }return t && (m = +m || +a || 0, c = t[1] ? m + (t[1] + 1) * t[2] : +t[2], u && (u.unit = d, u.start = m, u.end = c)), c;
  }return n;
});