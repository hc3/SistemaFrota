"use strict";

define(["../core"], function (r) {
  "use strict";
  return r.parseXML = function (e) {
    var t;if (!e || "string" != typeof e) return null;try {
      t = new window.DOMParser().parseFromString(e, "text/xml");
    } catch (r) {
      t = void 0;
    }return t && !t.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + e), t;
  }, r.parseXML;
});