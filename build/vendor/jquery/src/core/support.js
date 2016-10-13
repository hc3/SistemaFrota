"use strict";

define(["../var/document", "../var/support"], function (e, r) {
  "use strict";
  return r.createHTMLDocument = function () {
    var r = e.implementation.createHTMLDocument("").body;return r.innerHTML = "<form></form><form></form>", 2 === r.childNodes.length;
  }(), r;
});