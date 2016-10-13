"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

define(["./core", "./var/document", "./var/rnothtmlwhite", "./ajax/var/location", "./ajax/var/nonce", "./ajax/var/rquery", "./core/init", "./ajax/parseXML", "./event/trigger", "./deferred", "./serialize"], function (e, t, a, r, n, o) {
  "use strict";
  function s(t) {
    return function (r, n) {
      "string" != typeof r && (n = r, r = "*");var o,
          s = 0,
          i = r.toLowerCase().match(a) || [];if (e.isFunction(n)) for (; o = i[s++];) {
        "+" === o[0] ? (o = o.slice(1) || "*", (t[o] = t[o] || []).unshift(n)) : (t[o] = t[o] || []).push(n);
      }
    };
  }function i(t, a, r, n) {
    function o(c) {
      var d;return s[c] = !0, e.each(t[c] || [], function (e, t) {
        var c = t(a, r, n);return "string" != typeof c || i || s[c] ? i ? !(d = c) : void 0 : (a.dataTypes.unshift(c), o(c), !1);
      }), d;
    }var s = {},
        i = t === v;return o(a.dataTypes[0]) || !s["*"] && o("*");
  }function c(t, a) {
    var r,
        n,
        o = e.ajaxSettings.flatOptions || {};for (r in a) {
      void 0 !== a[r] && ((o[r] ? t : n || (n = {}))[r] = a[r]);
    }return n && e.extend(!0, t, n), t;
  }function d(e, t, a) {
    for (var r, n, o, s, i = e.contents, c = e.dataTypes; "*" === c[0];) {
      c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (r) for (n in i) {
      if (i[n] && i[n].test(r)) {
        c.unshift(n);break;
      }
    }if (c[0] in a) o = c[0];else {
      for (n in a) {
        if (!c[0] || e.converters[n + " " + c[0]]) {
          o = n;break;
        }s || (s = n);
      }o = o || s;
    }if (o) return o !== c[0] && c.unshift(o), a[o];
  }function f(e, t, a, r) {
    var n,
        o,
        s,
        i,
        c,
        d = {},
        f = e.dataTypes.slice();if (f[1]) for (s in e.converters) {
      d[s.toLowerCase()] = e.converters[s];
    }for (o = f.shift(); o;) {
      if (e.responseFields[o] && (a[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = f.shift()) if ("*" === o) o = c;else if ("*" !== c && c !== o) {
        if (s = d[c + " " + o] || d["* " + o], !s) for (n in d) {
          if (i = n.split(" "), i[1] === o && (s = d[c + " " + i[0]] || d["* " + i[0]])) {
            s === !0 ? s = d[n] : d[n] !== !0 && (o = i[0], f.unshift(i[1]));break;
          }
        }if (s !== !0) if (s && e.throws) t = s(t);else try {
          t = s(t);
        } catch (e) {
          return { state: "parsererror", error: s ? e : "No conversion from " + c + " to " + o };
        }
      }
    }return { state: "success", data: t };
  }var p = /%20/g,
      u = /#.*$/,
      l = /([?&])_=[^&]*/,
      h = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      x = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      y = /^(?:GET|HEAD)$/,
      m = /^\/\//,
      g = {},
      v = {},
      j = "*/".concat("*"),
      T = t.createElement("a");return T.href = r.href, e.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: r.href, type: "GET", isLocal: x.test(r.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": j, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": e.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(t, a) {
      return a ? c(c(t, e.ajaxSettings), a) : c(e.ajaxSettings, t);
    }, ajaxPrefilter: s(g), ajaxTransport: s(v), ajax: function ajax(s, c) {
      function x(t, a, r, n) {
        var o,
            s,
            i,
            c,
            p,
            u = a;L || (L = !0, H && window.clearTimeout(H), w = void 0, S = n || "", X.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, r && (c = d(F, X, r)), c = f(F, c, X, o), o ? (F.ifModified && (p = X.getResponseHeader("Last-Modified"), p && (e.lastModified[b] = p), p = X.getResponseHeader("etag"), p && (e.etag[b] = p)), 204 === t || "HEAD" === F.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = c.state, s = c.data, i = c.error, o = !i)) : (i = u, !t && u || (u = "error", t < 0 && (t = 0))), X.status = t, X.statusText = (a || u) + "", o ? N.resolveWith(E, [s, u, X]) : N.rejectWith(E, [X, u, i]), X.statusCode(k), k = void 0, R && O.trigger(o ? "ajaxSuccess" : "ajaxError", [X, F, o ? s : i]), $.fireWith(E, [X, u]), R && (O.trigger("ajaxComplete", [X, F]), --e.active || e.event.trigger("ajaxStop")));
      }"object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) && (c = s, s = void 0), c = c || {};var w,
          b,
          S,
          C,
          H,
          M,
          L,
          R,
          q,
          D,
          F = e.ajaxSetup({}, c),
          E = F.context || F,
          O = F.context && (E.nodeType || E.jquery) ? e(E) : e.event,
          N = e.Deferred(),
          $ = e.Callbacks("once memory"),
          k = F.statusCode || {},
          A = {},
          J = {},
          W = "canceled",
          X = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (L) {
            if (!C) for (C = {}; t = h.exec(S);) {
              C[t[1].toLowerCase()] = t[2];
            }t = C[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return L ? S : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == L && (e = J[e.toLowerCase()] = J[e.toLowerCase()] || e, A[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == L && (F.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (L) X.always(e[X.status]);else for (t in e) {
            k[t] = [k[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || W;return w && w.abort(t), x(0, t), this;
        } };if (N.promise(X), F.url = ((s || F.url || r.href) + "").replace(m, r.protocol + "//"), F.type = c.method || c.type || F.method || F.type, F.dataTypes = (F.dataType || "*").toLowerCase().match(a) || [""], null == F.crossDomain) {
        M = t.createElement("a");try {
          M.href = F.url, M.href = M.href, F.crossDomain = T.protocol + "//" + T.host != M.protocol + "//" + M.host;
        } catch (e) {
          F.crossDomain = !0;
        }
      }if (F.data && F.processData && "string" != typeof F.data && (F.data = e.param(F.data, F.traditional)), i(g, F, c, X), L) return X;R = e.event && F.global, R && 0 === e.active++ && e.event.trigger("ajaxStart"), F.type = F.type.toUpperCase(), F.hasContent = !y.test(F.type), b = F.url.replace(u, ""), F.hasContent ? F.data && F.processData && 0 === (F.contentType || "").indexOf("application/x-www-form-urlencoded") && (F.data = F.data.replace(p, "+")) : (D = F.url.slice(b.length), F.data && (b += (o.test(b) ? "&" : "?") + F.data, delete F.data), F.cache === !1 && (b = b.replace(l, "$1"), D = (o.test(b) ? "&" : "?") + "_=" + n++ + D), F.url = b + D), F.ifModified && (e.lastModified[b] && X.setRequestHeader("If-Modified-Since", e.lastModified[b]), e.etag[b] && X.setRequestHeader("If-None-Match", e.etag[b])), (F.data && F.hasContent && F.contentType !== !1 || c.contentType) && X.setRequestHeader("Content-Type", F.contentType), X.setRequestHeader("Accept", F.dataTypes[0] && F.accepts[F.dataTypes[0]] ? F.accepts[F.dataTypes[0]] + ("*" !== F.dataTypes[0] ? ", " + j + "; q=0.01" : "") : F.accepts["*"]);for (q in F.headers) {
        X.setRequestHeader(q, F.headers[q]);
      }if (F.beforeSend && (F.beforeSend.call(E, X, F) === !1 || L)) return X.abort();if (W = "abort", $.add(F.complete), X.done(F.success), X.fail(F.error), w = i(v, F, c, X)) {
        if (X.readyState = 1, R && O.trigger("ajaxSend", [X, F]), L) return X;F.async && F.timeout > 0 && (H = window.setTimeout(function () {
          X.abort("timeout");
        }, F.timeout));try {
          L = !1, w.send(A, x);
        } catch (e) {
          if (L) throw e;x(-1, e);
        }
      } else x(-1, "No Transport");return X;
    }, getJSON: function getJSON(t, a, r) {
      return e.get(t, a, r, "json");
    }, getScript: function getScript(t, a) {
      return e.get(t, void 0, a, "script");
    } }), e.each(["get", "post"], function (t, a) {
    e[a] = function (t, r, n, o) {
      return e.isFunction(r) && (o = o || n, n = r, r = void 0), e.ajax(e.extend({ url: t, type: a, dataType: o, data: r, success: n }, e.isPlainObject(t) && t));
    };
  }), e;
});