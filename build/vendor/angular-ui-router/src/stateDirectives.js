"use strict";

function parseStateRef(t, e) {
  var r,
      a = t.match(/^\s*({[^}]*})\s*$/);if (a && (t = e + "(" + a[1] + ")"), r = t.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !r || 4 !== r.length) throw new Error("Invalid state ref '" + t + "'");return { state: r[1], paramExpr: r[3] || null };
}function stateContext(t) {
  var e = t.parent().inheritedData("$uiView");if (e && e.state && e.state.name) return e.state;
}function getTypeInfo(t) {
  var e = "[object SVGAnimatedString]" === Object.prototype.toString.call(t.prop("href")),
      r = "FORM" === t[0].nodeName;return { attr: r ? "action" : e ? "xlink:href" : "href", isAnchor: "A" === t.prop("tagName").toUpperCase(), clickable: !r };
}function clickHook(t, e, r, a, n) {
  return function (i) {
    var c = i.which || i.button,
        u = n();if (!(c > 1 || i.ctrlKey || i.metaKey || i.shiftKey || t.attr("target"))) {
      var o = r(function () {
        e.go(u.state, u.params, u.options);
      });i.preventDefault();var s = a.isAnchor && !u.href ? 1 : 0;i.preventDefault = function () {
        s-- <= 0 && r.cancel(o);
      };
    }
  };
}function defaultOpts(t, e) {
  return { relative: stateContext(t) || e.$current, inherit: !0 };
}function $StateRefDirective(t, e) {
  return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(r, a, n, i) {
      var c,
          u = parseStateRef(n.uiSref, t.current.name),
          o = { state: u.state, href: null, params: null },
          s = getTypeInfo(a),
          f = i[1] || i[0],
          l = null;o.options = extend(defaultOpts(a, t), n.uiSrefOpts ? r.$eval(n.uiSrefOpts) : {});var p = function p(e) {
        e && (o.params = angular.copy(e)), o.href = t.href(u.state, o.params, o.options), l && l(), f && (l = f.$$addStateInfo(u.state, o.params)), null !== o.href && n.$set(s.attr, o.href);
      };u.paramExpr && (r.$watch(u.paramExpr, function (t) {
        t !== o.params && p(t);
      }, !0), o.params = angular.copy(r.$eval(u.paramExpr))), p(), s.clickable && (c = clickHook(a, t, e, s, function () {
        return o;
      }), a.bind("click", c), r.$on("$destroy", function () {
        a.unbind("click", c);
      }));
    } };
}function $StateRefDynamicDirective(t, e) {
  return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(r, a, n, i) {
      function c(e) {
        p.state = e[0], p.params = e[1], p.options = e[2], p.href = t.href(p.state, p.params, p.options), v && v(), s && (v = s.$$addStateInfo(p.state, p.params)), p.href && n.$set(o.attr, p.href);
      }var u,
          o = getTypeInfo(a),
          s = i[1] || i[0],
          f = [n.uiState, n.uiStateParams || null, n.uiStateOpts || null],
          l = "[" + f.map(function (t) {
        return t || "null";
      }).join(", ") + "]",
          p = { state: null, params: null, options: null, href: null },
          v = null;r.$watch(l, c, !0), c(r.$eval(l)), o.clickable && (u = clickHook(a, t, e, o, function () {
        return p;
      }), a.bind("click", u), r.$on("$destroy", function () {
        a.unbind("click", u);
      }));
    } };
}function $StateRefActiveDirective(t, e, r) {
  return { restrict: "A", controller: ["$scope", "$element", "$attrs", "$timeout", function (e, a, n, i) {
      function c(e, r, n) {
        var i = t.get(e, stateContext(a)),
            c = u(e, r),
            o = { state: i || { name: e }, params: r, hash: c };return m.push(o), h[c] = n, function () {
          var t = m.indexOf(o);t !== -1 && m.splice(t, 1);
        };
      }function u(t, r) {
        if (!isString(t)) throw new Error("state should be a string");return isObject(r) ? t + toJson(r) : (r = e.$eval(r), isObject(r) ? t + toJson(r) : t);
      }function o() {
        for (var t = 0; t < m.length; t++) {
          l(m[t].state, m[t].params) ? s(a, h[m[t].hash]) : f(a, h[m[t].hash]), p(m[t].state, m[t].params) ? s(a, v) : f(a, v);
        }
      }function s(t, e) {
        i(function () {
          t.addClass(e);
        });
      }function f(t, e) {
        t.removeClass(e);
      }function l(e, r) {
        return t.includes(e.name, r);
      }function p(e, r) {
        return t.is(e.name, r);
      }var v,
          $,
          m = [],
          h = {};v = r(n.uiSrefActiveEq || "", !1)(e);try {
        $ = e.$eval(n.uiSrefActive);
      } catch (t) {}$ = $ || r(n.uiSrefActive || "", !1)(e), isObject($) && forEach($, function (r, a) {
        if (isString(r)) {
          var n = parseStateRef(r, t.current.name);c(n.state, e.$eval(n.paramExpr), a);
        }
      }), this.$$addStateInfo = function (t, e) {
        if (!(isObject($) && m.length > 0)) {
          var r = c(t, e, $);return o(), r;
        }
      }, e.$on("$stateChangeSuccess", o), o();
    }] };
}$StateRefDirective.$inject = ["$state", "$timeout"], $StateRefDynamicDirective.$inject = ["$state", "$timeout"], $StateRefActiveDirective.$inject = ["$state", "$stateParams", "$interpolate"], angular.module("ui.router.state").directive("uiSref", $StateRefDirective).directive("uiSrefActive", $StateRefActiveDirective).directive("uiSrefActiveEq", $StateRefActiveDirective).directive("uiState", $StateRefDynamicDirective);