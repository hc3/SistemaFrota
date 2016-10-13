"use strict";
function getFiles(e) {
  var r = {},
      t = "less" === e,
      s = t ? "/**/*" : "/*";return glob.sync(e + s).filter(function (r) {
    return "fonts" === e || new RegExp("\\." + e + "$").test(r);
  }).forEach(function (t) {
    var s = t.replace(/^[^\/]+\//, "");r[s] = "fonts" === e ? btoa(fs.readFileSync(t)) : fs.readFileSync(t, "utf8");
  }), "var __" + e + " = " + JSON.stringify(r) + "\n";
}var fs = require("fs"),
    btoa = require("btoa"),
    glob = require("glob");module.exports = function (e, r) {
  r || (r = "");var t = ["js", "less", "fonts"],
      s = r + t.map(getFiles).reduce(function (e, r) {
    return e + r;
  }, ""),
      n = "docs/assets/js/raw-files.min.js";try {
    fs.writeFileSync(n, s);
  } catch (r) {
    e.fail.warn(r);
  }e.log.writeln("File " + n.cyan + " created.");
};