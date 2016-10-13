"use strict";

define(["../var/document", "../var/support"], function (e, t) {
  "use strict";
  return function () {
    var n = e.createElement("input"),
        c = e.createElement("select"),
        a = c.appendChild(e.createElement("option"));n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, n = e.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value;
  }(), t;
});