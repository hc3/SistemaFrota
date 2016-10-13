"use strict";
var fs = require("fs");module.exports = function (e) {
  for (var s = fs.readFileSync("less/glyphicons.less", "utf8"), t = s.split("\n"), i = /^\.(glyphicon-[a-zA-Z0-9-]+)/, n = "# This file is generated via Grunt task. **Do not edit directly.**\n# See the 'build-glyphicons-data' task in Gruntfile.js.\n\n", a = "docs/_data/glyphicons.yml", l = 0, c = t.length; l < c; l++) {
    var r = t[l].match(i);null !== r && (n += "- " + r[1] + "\n");
  }fs.existsSync("docs/_data") || fs.mkdirSync("docs/_data");try {
    fs.writeFileSync(a, n);
  } catch (s) {
    e.fail.warn(s);
  }e.log.writeln("File " + a.cyan + " created.");
};