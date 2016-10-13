"use strict";

define(["../core", "../var/document", "../ajax"], function (t, r) {
  "use strict";
  t.ajaxPrefilter(function (t) {
    t.crossDomain && (t.contents.script = !1);
  }), t.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(r) {
        return t.globalEval(r), r;
      } } }), t.ajaxPrefilter("script", function (t) {
    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
  }), t.ajaxTransport("script", function (c) {
    if (c.crossDomain) {
      var a, _i;return { send: function send(e, n) {
          a = t("<script>").prop({ charset: c.scriptCharset, src: c.url }).on("load error", _i = function i(t) {
            a.remove(), _i = null, t && n("error" === t.type ? 404 : 200, t.type);
          }), r.head.appendChild(a[0]);
        }, abort: function abort() {
          _i && _i();
        } };
    }
  });
});