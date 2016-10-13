"use strict";

function $StateProvider(e, r) {
  function t(e) {
    return 0 === e.indexOf(".") || 0 === e.indexOf("^");
  }function n(e, r) {
    if (e) {
      var a = isString(e),
          i = a ? e : e.name,
          o = t(i);if (o) {
        if (!r) throw new Error("No reference point given for path '" + i + "'");r = n(r);for (var l = i.split("."), s = 0, u = l.length, c = r; s < u; s++) {
          if ("" !== l[s] || 0 !== s) {
            if ("^" !== l[s]) break;if (!c.parent) throw new Error("Path '" + i + "' not valid for state '" + r.name + "'");c = c.parent;
          } else c = r;
        }l = l.slice(s).join("."), i = c.name + (c.name && l ? "." : "") + l;
      }var f = p[i];return !f || !a && (a || f !== e && f.self !== e) ? void 0 : f;
    }
  }function a(e, r) {
    h[e] || (h[e] = []), h[e].push(r);
  }function i(e) {
    for (var r = h[e] || []; r.length;) {
      o(r.shift());
    }
  }function o(r) {
    r = inherit(r, { self: r, resolve: r.resolve || {}, toString: function toString() {
        return this.name;
      } });var t = r.name;if (!isString(t) || t.indexOf("@") >= 0) throw new Error("State must have a valid name");if (p.hasOwnProperty(t)) throw new Error("State '" + t + "' is already defined");var n = t.indexOf(".") !== -1 ? t.substring(0, t.lastIndexOf(".")) : isString(r.parent) ? r.parent : isObject(r.parent) && isString(r.parent.name) ? r.parent.name : "";if (n && !p[n]) return a(n, r.self);for (var o in g) {
      isFunction(g[o]) && (r[o] = g[o](r, g.$delegates[o]));
    }return p[t] = r, !r[m] && r.url && e.when(r.url, ["$match", "$stateParams", function (e, t) {
      d.$current.navigable == r && equalForKeys(e, t) || d.transitionTo(r, e, { inherit: !0, location: !1 });
    }]), i(t), r;
  }function l(e) {
    return e.indexOf("*") > -1;
  }function s(e) {
    for (var r = e.split("."), t = d.$current.name.split("."), n = 0, a = r.length; n < a; n++) {
      "*" === r[n] && (t[n] = "*");
    }return "**" === r[0] && (t = t.slice(indexOf(t, r[1])), t.unshift("**")), "**" === r[r.length - 1] && (t.splice(indexOf(t, r[r.length - 2]) + 1, Number.MAX_VALUE), t.push("**")), r.length == t.length && t.join("") === r.join("");
  }function u(e, r) {
    return isString(e) && !isDefined(r) ? g[e] : isFunction(r) && isString(e) ? (g[e] && !g.$delegates[e] && (g.$delegates[e] = g[e]), g[e] = r, this) : this;
  }function c(e, r) {
    return isObject(e) ? r = e : r.name = e, o(r), this;
  }function f(e, r, t, a, i, o, u, c, f) {
    function h(t, n, a, i) {
      var o = e.$broadcast("$stateNotFound", t, n, a);if (o.defaultPrevented) return u.update(), y;if (!o.retry) return null;if (i.$retry) return u.update(), P;var l = d.transition = r.when(o.retry);return l.then(function () {
        return l !== d.transition ? b : (t.options.$retry = !0, d.transitionTo(t.to, t.toParams, t.options));
      }, function () {
        return y;
      }), u.update(), l;
    }function g(e, n, o, l, s, u) {
      function c() {
        var n = [];return forEach(e.views, function (r, o) {
          var l = r.resolve && r.resolve !== e.resolve ? r.resolve : {};l.$template = [function () {
            return t.load(o, { view: r, locals: s.globals, params: f, notify: u.notify }) || "";
          }], n.push(i.resolve(l, s.globals, s.resolve, e).then(function (t) {
            if (isFunction(r.controllerProvider) || isArray(r.controllerProvider)) {
              var n = angular.extend({}, l, s.globals);t.$$controller = a.invoke(r.controllerProvider, null, n);
            } else t.$$controller = r.controller;t.$$state = e, t.$$controllerAs = r.controllerAs, t.$$resolveAs = r.resolveAs, s[o] = t;
          }));
        }), r.all(n).then(function () {
          return s.globals;
        });
      }var f = o ? n : filterByKeys(e.params.$$keys(), n),
          v = { $stateParams: f };s.resolve = i.resolve(e.resolve, v, s.resolve, e);var $ = [s.resolve.then(function (e) {
        s.globals = e;
      })];return l && $.push(l), r.all($).then(c).then(function (e) {
        return s;
      });
    }var b = r.reject(new Error("transition superseded")),
        w = r.reject(new Error("transition prevented")),
        y = r.reject(new Error("transition aborted")),
        P = r.reject(new Error("transition failed"));return $.locals = { resolve: null, globals: { $stateParams: {} } }, d = { params: {}, current: $.self, $current: $, transition: null }, d.reload = function (e) {
      return d.transitionTo(d.current, o, { reload: e || !0, inherit: !1, notify: !0 });
    }, d.go = function (e, r, t) {
      return d.transitionTo(e, r, extend({ inherit: !0, relative: d.$current }, t));
    }, d.transitionTo = function (t, i, l) {
      i = i || {}, l = extend({ location: !0, inherit: !1, relative: null, notify: !0, reload: !1, $retry: !1 }, l || {});var s,
          c = d.$current,
          f = d.params,
          p = c.path,
          y = n(t, l.relative),
          E = i["#"];if (!isDefined(y)) {
        var S = { to: t, toParams: i, options: l },
            j = h(S, c.self, f, l);if (j) return j;if (t = S.to, i = S.toParams, l = S.options, y = n(t, l.relative), !isDefined(y)) {
          if (!l.relative) throw new Error("No such state '" + t + "'");throw new Error("Could not resolve '" + t + "' from state '" + l.relative + "'");
        }
      }if (y[m]) throw new Error("Cannot transition to abstract state '" + t + "'");if (l.inherit && (i = inheritParams(o, i || {}, d.$current, y)), !y.params.$$validates(i)) return P;i = y.params.$$values(i), t = y;var x = t.path,
          O = 0,
          F = x[O],
          k = $.locals,
          A = [];if (l.reload) {
        if (isString(l.reload) || isObject(l.reload)) {
          if (isObject(l.reload) && !l.reload.name) throw new Error("Invalid reload state object");var D = l.reload === !0 ? p[0] : n(l.reload);if (l.reload && !D) throw new Error("No such reload state '" + (isString(l.reload) ? l.reload : l.reload.name) + "'");for (; F && F === p[O] && F !== D;) {
            k = A[O] = F.locals, O++, F = x[O];
          }
        }
      } else for (; F && F === p[O] && F.ownParams.$$equals(i, f);) {
        k = A[O] = F.locals, O++, F = x[O];
      }if (v(t, i, c, f, k, l)) return E && (i["#"] = E), d.params = i, copy(d.params, o), copy(filterByKeys(t.params.$$keys(), o), t.locals.globals.$stateParams), l.location && t.navigable && t.navigable.url && (u.push(t.navigable.url, i, { $$avoidResync: !0, replace: "replace" === l.location }), u.update(!0)), d.transition = null, r.when(d.current);if (i = filterByKeys(t.params.$$keys(), i || {}), E && (i["#"] = E), l.notify && e.$broadcast("$stateChangeStart", t.self, i, c.self, f, l).defaultPrevented) return e.$broadcast("$stateChangeCancel", t.self, i, c.self, f), null == d.transition && u.update(), w;for (var K = r.when(k), M = O; M < x.length; M++, F = x[M]) {
        k = A[M] = inherit(k), K = g(F, i, F === t, K, k, l);
      }var C = d.transition = K.then(function () {
        var r, n, s;if (d.transition !== C) return b;for (r = p.length - 1; r >= O; r--) {
          s = p[r], s.self.onExit && a.invoke(s.self.onExit, s.self, s.locals.globals), s.locals = null;
        }for (r = O; r < x.length; r++) {
          n = x[r], n.locals = A[r], n.self.onEnter && a.invoke(n.self.onEnter, n.self, n.locals.globals);
        }return d.transition !== C ? b : (d.$current = t, d.current = t.self, d.params = i, copy(d.params, o), d.transition = null, l.location && t.navigable && u.push(t.navigable.url, t.navigable.locals.globals.$stateParams, { $$avoidResync: !0, replace: "replace" === l.location }), l.notify && e.$broadcast("$stateChangeSuccess", t.self, i, c.self, f), u.update(!0), d.current);
      }).then(null, function (n) {
        return d.transition !== C ? b : (d.transition = null, s = e.$broadcast("$stateChangeError", t.self, i, c.self, f, n), s.defaultPrevented || u.update(), r.reject(n));
      });return C;
    }, d.is = function (e, r, t) {
      t = extend({ relative: d.$current }, t || {});var a = n(e, t.relative);if (isDefined(a)) return d.$current === a && (!r || equalForKeys(a.params.$$values(r), o));
    }, d.includes = function (e, r, t) {
      if (t = extend({ relative: d.$current }, t || {}), isString(e) && l(e)) {
        if (!s(e)) return !1;e = d.$current.name;
      }var a = n(e, t.relative);if (isDefined(a)) return !!isDefined(d.$current.includes[a.name]) && (!r || equalForKeys(a.params.$$values(r), o, objectKeys(r)));
    }, d.href = function (e, r, t) {
      t = extend({ lossy: !0, inherit: !0, absolute: !1, relative: d.$current }, t || {});var a = n(e, t.relative);if (!isDefined(a)) return null;t.inherit && (r = inheritParams(o, r || {}, d.$current, a));var i = a && t.lossy ? a.navigable : a;return i && void 0 !== i.url && null !== i.url ? u.href(i.url, filterByKeys(a.params.$$keys().concat("#"), r || {}), { absolute: t.absolute }) : null;
    }, d.get = function (e, r) {
      if (0 === arguments.length) return map(objectKeys(p), function (e) {
        return p[e].self;
      });var t = n(e, r || d.$current);return t && t.self ? t.self : null;
    }, d;
  }function v(e, r, t, n, a, i) {
    function o(e, r, t) {
      function n(r) {
        return "search" != e.params[r].location;
      }var a = e.params.$$keys().filter(n),
          i = pick.apply({}, [e.params].concat(a)),
          o = new $$UMFP.ParamSet(i);return o.$$equals(r, t);
    }if (!i.reload && e === t && (a === t.locals || e.self.reloadOnSearch === !1 && o(t, n, r))) return !0;
  }var $,
      d,
      p = {},
      h = {},
      m = "abstract",
      g = { parent: function parent(e) {
      if (isDefined(e.parent) && e.parent) return n(e.parent);var r = /^(.+)\.[^.]+$/.exec(e.name);return r ? n(r[1]) : $;
    }, data: function data(e) {
      return e.parent && e.parent.data && (e.data = e.self.data = inherit(e.parent.data, e.data)), e.data;
    }, url: function url(e) {
      var t = e.url,
          n = { params: e.params || {} };if (isString(t)) return "^" == t.charAt(0) ? r.compile(t.substring(1), n) : (e.parent.navigable || $).url.concat(t, n);if (!t || r.isMatcher(t)) return t;throw new Error("Invalid url '" + t + "' in state '" + e + "'");
    }, navigable: function navigable(e) {
      return e.url ? e : e.parent ? e.parent.navigable : null;
    }, ownParams: function ownParams(e) {
      var r = e.url && e.url.params || new $$UMFP.ParamSet();return forEach(e.params || {}, function (e, t) {
        r[t] || (r[t] = new $$UMFP.Param(t, null, e, "config"));
      }), r;
    }, params: function params(e) {
      var r = pick(e.ownParams, e.ownParams.$$keys());return e.parent && e.parent.params ? extend(e.parent.params.$$new(), r) : new $$UMFP.ParamSet();
    }, views: function views(e) {
      var r = {};return forEach(isDefined(e.views) ? e.views : { "": e }, function (t, n) {
        n.indexOf("@") < 0 && (n += "@" + e.parent.name), t.resolveAs = t.resolveAs || e.resolveAs || "$resolve", r[n] = t;
      }), r;
    }, path: function path(e) {
      return e.parent ? e.parent.path.concat(e) : [];
    }, includes: function includes(e) {
      var r = e.parent ? extend({}, e.parent.includes) : {};return r[e.name] = !0, r;
    }, $delegates: {} };$ = o({ name: "", url: "^", views: null, abstract: !0 }), $.navigable = null, this.decorator = u, this.state = c, this.$get = f, f.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"];
}$StateProvider.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], angular.module("ui.router.state").factory("$stateParams", function () {
  return {};
}).constant("$state.runtime", { autoinject: !0 }).provider("$state", $StateProvider).run(["$injector", function (e) {
  e.get("$state.runtime").autoinject && e.get("$state");
}]);