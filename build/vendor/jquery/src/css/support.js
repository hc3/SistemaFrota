"use strict";

define(["../core", "../var/document", "../var/documentElement", "../var/support"], function (e, t, n, i) {
  "use strict";
  return function () {
    function o() {
      if (c) {
        c.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", c.innerHTML = "", n.appendChild(d);var e = window.getComputedStyle(c);r = "1%" !== e.top, a = "2px" === e.marginLeft, l = "4px" === e.width, c.style.marginRight = "50%", p = "4px" === e.marginRight, n.removeChild(d), c = null;
      }
    }var r,
        l,
        p,
        a,
        d = t.createElement("div"),
        c = t.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", i.clearCloneStyle = "content-box" === c.style.backgroundClip, d.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", d.appendChild(c), e.extend(i, { pixelPosition: function pixelPosition() {
        return o(), r;
      }, boxSizingReliable: function boxSizingReliable() {
        return o(), l;
      }, pixelMarginRight: function pixelMarginRight() {
        return o(), p;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return o(), a;
      } }));
  }(), i;
});