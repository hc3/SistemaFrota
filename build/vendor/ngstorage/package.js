"use strict";

Package.describe({ name: "gsklee:ngstorage", version: "0.3.11", summary: "ngStorage package for Meteor", git: "https://github.com/gsklee/ngStorage", documentation: "README.md" }), Package.onUse(function (e) {
  e.versionsFrom("METEOR@0.9.0.1"), e.use("urigo:angular@0.8.4", "client"), e.addFiles("ngStorage.js", "client");
});