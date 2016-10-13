#!/usr/bin/env node

"use strict";
function walkAsync(e, s, r, n) {
  s.has(path.parse(e).base) || fs.readdir(e, function (o, t) {
    return o ? void n(o) : void t.forEach(function (o) {
      var t = path.join(e, o);fs.lstat(t, function (e, o) {
        return e ? void process.nextTick(n, e) : void (o.isSymbolicLink() || (o.isDirectory() ? process.nextTick(walkAsync, t, s, r, n) : o.isFile() && process.nextTick(r, t)));
      });
    });
  });
}function replaceRecursively(e, s, r, n, o) {
  n = new RegExp(RegExp.quote(n), "g"), o = RegExp.quoteReplacement(o);var t = DRY_RUN ? function (e) {
    r.has(path.parse(e).ext) ? console.log("FILE: " + e) : console.log("EXCLUDED:" + e);
  } : function (e) {
    r.has(path.parse(e).ext) && sed("-i", n, o, e);
  };walkAsync(e, s, t, function (e) {
    console.error("ERROR while traversing directory!:"), console.error(e), process.exit(1);
  });
}function main(e) {
  2 !== e.length && (console.error("USAGE: change-version old_version new_version"), console.error("Got arguments:", e), process.exit(1));var s = e[0],
      r = e[1],
      n = new Set([".git", "node_modules", "vendor"]),
      o = new Set(["", ".css", ".html", ".js", ".json", ".less", ".md", ".nuspec", ".ps1", ".scss", ".txt", ".yml"]);replaceRecursively(".", n, o, s, r);
}var fs = require("fs"),
    path = require("path"),
    sh = require("shelljs");sh.config.fatal = !0;var sed = sh.sed;RegExp.quote = function (e) {
  return e.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
}, RegExp.quoteReplacement = function (e) {
  return e.replace(/[$]/g, "$$");
};var DRY_RUN = !1;main(process.argv.slice(2));