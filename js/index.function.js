!(function () {
  function t(t, e, r, i) {
    Object.defineProperty(t, e, {
      get: r,
      set: i,
      enumerable: !0,
      configurable: !0,
    });
  }
  var e,
    r,
    i,
    n =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    s = {},
    a = {},
    o = n.parcelRequire7566;
  null == o &&
    (((o = function (t) {
      if (t in s) return s[t].exports;
      if (t in a) {
        var e = a[t];
        delete a[t];
        var r = { id: t, exports: {} };
        return (s[t] = r), e.call(r.exports, r, r.exports), r.exports;
      }
      var i = Error("Cannot find module '" + t + "'");
      throw ((i.code = "MODULE_NOT_FOUND"), i);
    }).register = function (t, e) {
      a[t] = e;
    }),
    (n.parcelRequire7566 = o));
  var u = o.register;
  u("hobco", function (t, e) {
    var r, i;
    (r = "undefined" != typeof window ? window : t.exports),
      (i = function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.on = function (t, e) {
            if (t && e) {
              var r = (this._events = this._events || {}),
                i = (r[t] = r[t] || []);
              return -1 == i.indexOf(e) && i.push(e), this;
            }
          }),
          (e.once = function (t, e) {
            if (t && e) {
              this.on(t, e);
              var r = (this._onceEvents = this._onceEvents || {});
              return ((r[t] = r[t] || {})[e] = !0), this;
            }
          }),
          (e.off = function (t, e) {
            var r = this._events && this._events[t];
            if (r && r.length) {
              var i = r.indexOf(e);
              return -1 != i && r.splice(i, 1), this;
            }
          }),
          (e.emitEvent = function (t, e) {
            var r = this._events && this._events[t];
            if (r && r.length) {
              (r = r.slice(0)), (e = e || []);
              for (
                var i = this._onceEvents && this._onceEvents[t], n = 0;
                n < r.length;
                n++
              ) {
                var s = r[n];
                i && i[s] && (this.off(t, s), delete i[s]), s.apply(this, e);
              }
              return this;
            }
          }),
          (e.allOff = function () {
            delete this._events, delete this._onceEvents;
          }),
          t
        );
      }),
      "function" == typeof define && define.amd
        ? define(i)
        : t.exports
        ? (t.exports = i())
        : (r.EvEmitter = i());
  }),
    u("aiOHf", function (e, r) {
      function i(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function n(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      t(e.exports, "_config", function () {
        return P;
      }),
        t(e.exports, "_isString", function () {
          return V;
        }),
        t(e.exports, "_isUndefined", function () {
          return N;
        }),
        t(e.exports, "_numExp", function () {
          return Z;
        }),
        t(e.exports, "_numWithUnitExp", function () {
          return $;
        }),
        t(e.exports, "_relExp", function () {
          return K;
        }),
        t(e.exports, "gsap", function () {
          return rE;
        }),
        t(e.exports, "_missingPlugin", function () {
          return ts;
        }),
        t(e.exports, "_plugins", function () {
          return t_;
        }),
        t(e.exports, "GSCache", function () {
          return eU;
        }),
        t(e.exports, "_getCache", function () {
          return tw;
        }),
        t(e.exports, "_getProperty", function () {
          return tT;
        }),
        t(e.exports, "_forEachName", function () {
          return tb;
        }),
        t(e.exports, "_round", function () {
          return tk;
        }),
        t(e.exports, "_parseRelative", function () {
          return tM;
        }),
        t(e.exports, "_ticker", function () {
          return eM;
        }),
        t(e.exports, "getUnit", function () {
          return et;
        }),
        t(e.exports, "_replaceRandom", function () {
          return el;
        }),
        t(e.exports, "_getSetter", function () {
          return rr;
        }),
        t(e.exports, "PropTween", function () {
          return rl;
        }),
        t(e.exports, "_colorExp", function () {
          return eb;
        }),
        t(e.exports, "_colorStringFilter", function () {
          return eE;
        }),
        t(e.exports, "_renderComplexString", function () {
          return rs;
        }),
        t(e.exports, "_checkPlugin", function () {
          return eK;
        }),
        t(e.exports, "_sortPropTweensByPriority", function () {
          return rf;
        });
      /*!
       * GSAP 3.12.5
       * https://gsap.com
       *
       * @license Copyright 2008-2024, GreenSock. All rights reserved.
       * Subject to the terms at https://gsap.com/standard-license or for
       * Club GSAP members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var s,
        a,
        o,
        u,
        h,
        f,
        l,
        c,
        p,
        d,
        _,
        m,
        g,
        v,
        y,
        x,
        w,
        T,
        b,
        k,
        E,
        M,
        O,
        C,
        A,
        S,
        P = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        D = { duration: 0.5, overwrite: !1, delay: 0 },
        z = 2 * Math.PI,
        R = z / 4,
        L = 0,
        I = Math.sqrt,
        F = Math.cos,
        B = Math.sin,
        V = function (t) {
          return "string" == typeof t;
        },
        q = function (t) {
          return "function" == typeof t;
        },
        U = function (t) {
          return "number" == typeof t;
        },
        N = function (t) {
          return void 0 === t;
        },
        Q = function (t) {
          return "object" == typeof t;
        },
        j = function (t) {
          return !1 !== t;
        },
        Y = function () {
          return "undefined" != typeof window;
        },
        X = function (t) {
          return q(t) || V(t);
        },
        W =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        G = Array.isArray,
        H = /(?:-?\.?\d|\.)+/gi,
        Z = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        $ = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        J = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        K = /[+-]=-?[.\d]+/,
        tt = /[^,'"\[\]\s]+/gi,
        te = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        tr = {},
        ti = {},
        tn = function (t) {
          return (ti = tz(t, tr)) && rE;
        },
        ts = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        ta = function (t, e) {
          return !e && console.warn(t);
        },
        to = function (t, e) {
          return (t && (tr[t] = e) && ti && (ti[t] = e)) || tr;
        },
        tu = function () {
          return 0;
        },
        th = { suppressEvents: !0, isStart: !0, kill: !1 },
        tf = { suppressEvents: !0, kill: !1 },
        tl = { suppressEvents: !0 },
        tc = {},
        tp = [],
        td = {},
        t_ = {},
        tm = {},
        tg = 30,
        tv = [],
        ty = "",
        tx = function (t) {
          var e,
            r,
            i = t[0];
          if ((Q(i) || q(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
            for (r = tv.length; r-- && !tv[r].targetTest(i); );
            e = tv[r];
          }
          for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new eU(t[r], e)))) ||
              t.splice(r, 1);
          return t;
        },
        tw = function (t) {
          return t._gsap || tx(ei(t))[0]._gsap;
        },
        tT = function (t, e, r) {
          return (r = t[e]) && q(r)
            ? t[e]()
            : (N(r) && t.getAttribute && t.getAttribute(e)) || r;
        },
        tb = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        tk = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        tE = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        tM = function (t, e) {
          var r = e.charAt(0),
            i = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
          );
        },
        tO = function (t, e) {
          for (var r = e.length, i = 0; 0 > t.indexOf(e[i]) && ++i < r; );
          return i < r;
        },
        tC = function () {
          var t,
            e,
            r = tp.length,
            i = tp.slice(0);
          for (t = 0, td = {}, tp.length = 0; t < r; t++)
            (e = i[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        tA = function (t, e, r, i) {
          tp.length && !w && tC(),
            t.render(e, r, i || (w && e < 0 && (t._initted || t._startAt))),
            tp.length && !w && tC();
        },
        tS = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(tt).length < 2
            ? e
            : V(t)
            ? t.trim()
            : t;
        },
        tP = function (t) {
          return t;
        },
        tD = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        tz = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        tR = function t(e, r) {
          for (var i in r)
            "__proto__" !== i &&
              "constructor" !== i &&
              "prototype" !== i &&
              (e[i] = Q(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
          return e;
        },
        tL = function (t, e) {
          var r,
            i = {};
          for (r in t) r in e || (i[r] = t[r]);
          return i;
        },
        tI = function (t) {
          var e,
            r = t.parent || b,
            i = t.keyframes
              ? ((e = G(t.keyframes)),
                function (t, r) {
                  for (var i in r)
                    i in t ||
                      ("duration" === i && e) ||
                      "ease" === i ||
                      (t[i] = r[i]);
                })
              : tD;
          if (j(t.inherit))
            for (; r; ) i(t, r.vars.defaults), (r = r.parent || r._dp);
          return t;
        },
        tF = function (t, e) {
          for (
            var r = t.length, i = r === e.length;
            i && r-- && t[r] === e[r];

          );
          return r < 0;
        },
        tB = function (t, e, r, i, n) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var s,
            a = t[i];
          if (n) for (s = e[n]; a && a[n] > s; ) a = a._prev;
          return (
            a
              ? ((e._next = a._next), (a._next = e))
              : ((e._next = t[r]), (t[r] = e)),
            e._next ? (e._next._prev = e) : (t[i] = e),
            (e._prev = a),
            (e.parent = e._dp = t),
            e
          );
        },
        tV = function (t, e, r, i) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var n = e._prev,
            s = e._next;
          n ? (n._next = s) : t[r] === e && (t[r] = s),
            s ? (s._prev = n) : t[i] === e && (t[i] = n),
            (e._next = e._prev = e.parent = null);
        },
        tq = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0);
        },
        tU = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
          return t;
        },
        tN = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        tQ = function (t, e, r, i) {
          return (
            t._startAt &&
            (w
              ? t._startAt.revert(tf)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, i))
          );
        },
        tj = function (t) {
          return t._repeat
            ? tY(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        tY = function (t, e) {
          var r = Math.floor((t /= e));
          return t && r === t ? r - 1 : r;
        },
        tX = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        tW = function (t) {
          return (t._end = tE(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
          ));
        },
        tG = function (t, e) {
          var r = t._dp;
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = tE(
                r._time -
                  (t._ts > 0
                    ? e / t._ts
                    : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))
              )),
              tW(t),
              r._dirty || tU(r, t)),
            t
          );
        },
        tH = function (t, e) {
          var r;
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((r = tX(t.rawTime(), e)),
              (!e._dur || t7(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
                e.render(r, !0)),
            tU(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -0.00000001;
          }
        },
        tZ = function (t, e, r, i) {
          return (
            e.parent && tq(e),
            (e._start = tE(
              (U(r) ? r : r || t !== b ? t6(t, r, e) : t._time) + e._delay
            )),
            (e._end = tE(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            tB(t, e, "_first", "_last", t._sort ? "_start" : 0),
            t0(e) || (t._recent = e),
            i || tH(t, e),
            t._ts < 0 && tG(t, t._tTime),
            t
          );
        },
        t$ = function (t, e) {
          return (
            (tr.ScrollTrigger || ts("scrollTrigger", e)) &&
            tr.ScrollTrigger.create(e, t)
          );
        },
        tJ = function (t, e, r, i, n) {
          return (e0(t, e, n), t._initted)
            ? !r &&
              t._pt &&
              !w &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              C !== eM.frame
              ? (tp.push(t), (t._lazy = [n, i]), 1)
              : void 0
            : 1;
        },
        tK = function t(e) {
          var r = e.parent;
          return (
            r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
          );
        },
        t0 = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        t1 = function (t, e, r, i) {
          var n,
            s,
            a,
            o = t.ratio,
            u =
              e < 0 ||
              (!e &&
                ((!t._start && tK(t) && !(!t._initted && t0(t))) ||
                  ((t._ts < 0 || t._dp._ts < 0) && !t0(t))))
                ? 0
                : 1,
            h = t._rDelay,
            f = 0;
          if (
            (h &&
              t._repeat &&
              ((s = tY((f = t7(0, t._tDur, e)), h)),
              t._yoyo && 1 & s && (u = 1 - u),
              s !== tY(t._tTime, h) &&
                ((o = 1 - u),
                t.vars.repeatRefresh && t._initted && t.invalidate())),
            u !== o || w || i || 1e-8 === t._zTime || (!e && t._zTime))
          ) {
            if (!t._initted && tJ(t, e, i, r, f)) return;
            for (
              a = t._zTime,
                t._zTime = e || (r ? 1e-8 : 0),
                r || (r = e && !a),
                t.ratio = u,
                t._from && (u = 1 - u),
                t._time = 0,
                t._tTime = f,
                n = t._pt;
              n;

            )
              n.r(u, n.d), (n = n._next);
            e < 0 && tQ(t, e, r, !0),
              t._onUpdate && !r && ed(t, "onUpdate"),
              f && t._repeat && !r && t.parent && ed(t, "onRepeat"),
              (e >= t._tDur || e < 0) &&
                t.ratio === u &&
                (u && tq(t, 1),
                r ||
                  w ||
                  (ed(t, u ? "onComplete" : "onReverseComplete", !0),
                  t._prom && t._prom()));
          } else t._zTime || (t._zTime = e);
        },
        t5 = function (t, e, r) {
          var i;
          if (r > e)
            for (i = t._first; i && i._start <= r; ) {
              if ("isPause" === i.data && i._start > e) return i;
              i = i._next;
            }
          else
            for (i = t._last; i && i._start >= r; ) {
              if ("isPause" === i.data && i._start < e) return i;
              i = i._prev;
            }
        },
        t2 = function (t, e, r, i) {
          var n = t._repeat,
            s = tE(e) || 0,
            a = t._tTime / t._tDur;
          return (
            a && !i && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = n
              ? n < 0
                ? 1e10
                : tE(s * (n + 1) + t._rDelay * n)
              : s),
            a > 0 && !i && tG(t, (t._tTime = t._tDur * a)),
            t.parent && tW(t),
            r || tU(t.parent, t),
            t
          );
        },
        t3 = function (t) {
          return t instanceof eQ ? tU(t) : t2(t, t._dur);
        },
        t8 = { _start: 0, endTime: tu, totalDuration: tu },
        t6 = function t(e, r, i) {
          var n,
            s,
            a,
            o = e.labels,
            u = e._recent || t8,
            h = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
          return V(r) && (isNaN(r) || r in o)
            ? ((s = r.charAt(0)),
              (a = "%" === r.substr(-1)),
              (n = r.indexOf("=")),
              "<" === s || ">" === s)
              ? (n >= 0 && (r = r.replace(/=/, "")),
                ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                  (parseFloat(r.substr(1)) || 0) *
                    (a ? (n < 0 ? u : i).totalDuration() / 100 : 1))
              : n < 0
              ? (r in o || (o[r] = h), o[r])
              : ((s = parseFloat(r.charAt(n - 1) + r.substr(n + 1))),
                a && i && (s = (s / 100) * (G(i) ? i[0] : i).totalDuration()),
                n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s)
            : null == r
            ? h
            : +r;
        },
        t4 = function (t, e, r) {
          var i,
            n,
            s = U(e[1]),
            a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[a];
          if ((s && (o.duration = e[1]), (o.parent = r), t)) {
            for (i = o, n = r; n && !("immediateRender" in i); )
              (i = n.vars.defaults || {}), (n = j(n.vars.inherit) && n.parent);
            (o.immediateRender = j(i.immediateRender)),
              t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
          }
          return new e4(e[0], o, e[a + 1]);
        },
        t9 = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        t7 = function (t, e, r) {
          return r < t ? t : r > e ? e : r;
        },
        et = function (t, e) {
          return V(t) && (e = te.exec(t)) ? e[1] : "";
        },
        ee = [].slice,
        er = function (t, e) {
          return (
            t &&
            Q(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && Q(t[0]))) &&
            !t.nodeType &&
            t !== k
          );
        },
        ei = function (t, e, r) {
          var i;
          return T && !e && T.selector
            ? T.selector(t)
            : V(t) && !r && (E || !eO())
            ? ee.call((e || M).querySelectorAll(t), 0)
            : G(t)
            ? (void 0 === i && (i = []),
              t.forEach(function (t) {
                var e;
                return (V(t) && !r) || er(t, 1)
                  ? (e = i).push.apply(e, ei(t))
                  : i.push(t);
              }) || i)
            : er(t)
            ? ee.call(t, 0)
            : t
            ? [t]
            : [];
        },
        en = function (t) {
          return (
            (t = ei(t)[0] || ta("Invalid scope") || {}),
            function (e) {
              var r = t.current || t.nativeElement || t;
              return ei(
                e,
                r.querySelectorAll
                  ? r
                  : r === t
                  ? ta("Invalid scope") || M.createElement("div")
                  : t
              );
            }
          );
        },
        es = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        ea = function (t) {
          if (q(t)) return t;
          var e = Q(t) ? t : { each: t },
            r = eI(e.ease),
            i = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            a = i > 0 && i < 1,
            o = isNaN(i) || a,
            u = e.axis,
            h = i,
            f = i;
          return (
            V(i)
              ? (h = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
              : !a && o && ((h = i[0]), (f = i[1])),
            function (t, a, l) {
              var c,
                p,
                d,
                _,
                m,
                g,
                v,
                y,
                x,
                w = (l || e).length,
                T = s[w];
              if (!T) {
                if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                  for (
                    v = -1e8;
                    v < (v = l[x++].getBoundingClientRect().left) && x < w;

                  );
                  x < w && x--;
                }
                for (
                  g = 0,
                    T = s[w] = [],
                    c = o ? Math.min(x, w) * h - 0.5 : i % x,
                    p = 1e8 === x ? 0 : o ? (w * f) / x - 0.5 : (i / x) | 0,
                    v = 0,
                    y = 1e8;
                  g < w;
                  g++
                )
                  (d = (g % x) - c),
                    (_ = p - ((g / x) | 0)),
                    (T[g] = m =
                      u ? Math.abs("y" === u ? _ : d) : I(d * d + _ * _)),
                    m > v && (v = m),
                    m < y && (y = m);
                "random" === i && es(T),
                  (T.max = v - y),
                  (T.min = y),
                  (T.v = w =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (x > w
                          ? w - 1
                          : u
                          ? "y" === u
                            ? w / x
                            : x
                          : Math.max(x, w / x)) ||
                      0) * ("edges" === i ? -1 : 1)),
                  (T.b = w < 0 ? n - w : n),
                  (T.u = et(e.amount || e.each) || 0),
                  (r = r && w < 0 ? eR(r) : r);
              }
              return (
                (w = (T[t] - T.min) / T.max || 0),
                tE(T.b + (r ? r(w) : w) * T.v) + T.u
              );
            }
          );
        },
        eo = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (r) {
            var i = tE(Math.round(parseFloat(r) / t) * t * e);
            return (i - (i % 1)) / e + (U(r) ? 0 : et(r));
          };
        },
        eu = function (t, e) {
          var r,
            i,
            n = G(t);
          return (
            !n &&
              Q(t) &&
              ((r = n = t.radius || 1e8),
              t.values
                ? (i = !U((t = ei(t.values))[0])) && (r *= r)
                : (t = eo(t.increment))),
            t9(
              e,
              n
                ? q(t)
                  ? function (e) {
                      return Math.abs((i = t(e)) - e) <= r ? i : e;
                    }
                  : function (e) {
                      for (
                        var n,
                          s,
                          a = parseFloat(i ? e.x : e),
                          o = parseFloat(i ? e.y : 0),
                          u = 1e8,
                          h = 0,
                          f = t.length;
                        f--;

                      )
                        (n = i
                          ? (n = t[f].x - a) * n + (s = t[f].y - o) * s
                          : Math.abs(t[f] - a)) < u && ((u = n), (h = f));
                      return (
                        (h = !r || u <= r ? t[h] : e),
                        i || h === e || U(e) ? h : h + et(e)
                      );
                    }
                : eo(t)
            )
          );
        },
        eh = function (t, e, r, i) {
          return t9(G(t) ? !e : !0 === r ? ((r = 0), !1) : !i, function () {
            return G(t)
              ? t[~~(Math.random() * t.length)]
              : (i =
                  (r = r || 1e-5) < 1
                    ? Math.pow(10, (r + "").length - 2)
                    : 1) &&
                  Math.floor(
                    Math.round(
                      (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                    ) *
                      r *
                      i
                  ) / i;
          });
        },
        ef = function (t, e, r) {
          return t9(r, function (r) {
            return t[~~e(r)];
          });
        },
        el = function (t) {
          for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
            (i = t.indexOf(")", e)),
              (n = "[" === t.charAt(e + 7)),
              (r = t.substr(e + 7, i - e - 7).match(n ? tt : H)),
              (a +=
                t.substr(s, e - s) +
                eh(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
              (s = i + 1);
          return a + t.substr(s, t.length - s);
        },
        ec = function (t, e, r, i, n) {
          var s = e - t,
            a = i - r;
          return t9(n, function (e) {
            return r + (((e - t) / s) * a || 0);
          });
        },
        ep = function (t, e, r) {
          var i,
            n,
            s,
            a = t.labels,
            o = 1e8;
          for (i in a)
            (n = a[i] - e) < 0 == !!r &&
              n &&
              o > (n = Math.abs(n)) &&
              ((s = i), (o = n));
          return s;
        },
        ed = function (t, e, r) {
          var i,
            n,
            s,
            a = t.vars,
            o = a[e],
            u = T,
            h = t._ctx;
          if (o)
            return (
              (i = a[e + "Params"]),
              (n = a.callbackScope || t),
              r && tp.length && tC(),
              h && (T = h),
              (s = i ? o.apply(n, i) : o.call(n)),
              (T = u),
              s
            );
        },
        e_ = function (t) {
          return (
            tq(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!w),
            1 > t.progress() && ed(t, "onInterrupt"),
            t
          );
        },
        em = [],
        eg = function (t) {
          if (t) {
            if (((t = (!t.name && t.default) || t), Y() || t.headless)) {
              var e = t.name,
                r = q(t),
                i =
                  e && !r && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                n = {
                  init: tu,
                  render: ra,
                  add: e$,
                  kill: ru,
                  modifier: ro,
                  rawVars: 0,
                },
                s = {
                  targetTest: 0,
                  get: 0,
                  getSetter: rr,
                  aliases: {},
                  register: 0,
                };
              if ((eO(), t !== i)) {
                if (t_[e]) return;
                tD(i, tD(tL(t, n), s)),
                  tz(i.prototype, tz(n, tL(t, s))),
                  (t_[(i.prop = e)] = i),
                  t.targetTest && (tv.push(i), (tc[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              to(e, i), t.register && t.register(rE, i, rl);
            } else em.push(t);
          }
        },
        ev = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        ey = function (t, e, r) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (r - e) * t * 6
              : t < 0.5
              ? r
              : 3 * t < 2
              ? e + (r - e) * (2 / 3 - t) * 6
              : e) *
              255 +
              0.5) |
            0
          );
        },
        ex = function (t, e, r) {
          var i,
            n,
            s,
            a,
            o,
            u,
            h,
            f,
            l,
            c,
            p = t ? (U(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : ev.black;
          if (!p) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ev[t])
            )
              p = ev[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  (t =
                    "#" +
                    (i = t.charAt(1)) +
                    i +
                    (n = t.charAt(2)) +
                    n +
                    (s = t.charAt(3)) +
                    s +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & 255,
                  255 & p,
                  parseInt(t.substr(7), 16) / 255,
                ];
              p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & 255,
                255 & t,
              ];
            } else if ("hsl" === t.substr(0, 3)) {
              if (((p = c = t.match(H)), e)) {
                if (~t.indexOf("="))
                  return (p = t.match(Z)), r && p.length < 4 && (p[3] = 1), p;
              } else
                (a = (+p[0] % 360) / 360),
                  (o = +p[1] / 100),
                  (n = (u = +p[2] / 100) <= 0.5 ? u * (o + 1) : u + o - u * o),
                  (i = 2 * u - n),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = ey(a + 1 / 3, i, n)),
                  (p[1] = ey(a, i, n)),
                  (p[2] = ey(a - 1 / 3, i, n));
            } else p = t.match(H) || ev.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !c &&
              ((u =
                ((h = Math.max(
                  (i = p[0] / 255),
                  (n = p[1] / 255),
                  (s = p[2] / 255)
                )) +
                  (f = Math.min(i, n, s))) /
                2),
              h === f
                ? (a = o = 0)
                : ((l = h - f),
                  (o = u > 0.5 ? l / (2 - h - f) : l / (h + f)),
                  (a =
                    (h === i
                      ? (n - s) / l + (n < s ? 6 : 0)
                      : h === n
                      ? (s - i) / l + 2
                      : (i - n) / l + 4) * 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * o + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            r && p.length < 4 && (p[3] = 1),
            p
          );
        },
        ew = function (t) {
          var e = [],
            r = [],
            i = -1;
          return (
            t.split(eb).forEach(function (t) {
              var n = t.match($) || [];
              e.push.apply(e, n), r.push((i += n.length + 1));
            }),
            (e.c = r),
            e
          );
        },
        eT = function (t, e, r) {
          var i,
            n,
            s,
            a,
            o = "",
            u = (t + o).match(eb),
            h = e ? "hsla(" : "rgba(",
            f = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = ex(t, e, 1)) &&
                h +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            r && ((s = ew(t)), (i = r.c).join(o) !== s.c.join(o)))
          )
            for (a = (n = t.replace(eb, "1").split($)).length - 1; f < a; f++)
              o +=
                n[f] +
                (~i.indexOf(f)
                  ? u.shift() || h + "0,0,0,0)"
                  : (s.length ? s : u.length ? u : r).shift());
          if (!n)
            for (a = (n = t.split(eb)).length - 1; f < a; f++) o += n[f] + u[f];
          return o + n[a];
        },
        eb = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in ev) e += "|" + t + "\\b";
          return RegExp(e + ")", "gi");
        })(),
        ek = /hsl[a]?\(/,
        eE = function (t) {
          var e,
            r = t.join(" ");
          if (((eb.lastIndex = 0), eb.test(r)))
            return (
              (e = ek.test(r)),
              (t[1] = eT(t[1], e)),
              (t[0] = eT(t[0], e, ew(t[1]))),
              !0
            );
        },
        eM =
          ((l = Date.now),
          (c = 500),
          (p = 33),
          (_ = d = l()),
          (m = 1e3 / 240),
          (g = 1e3 / 240),
          (v = []),
          (y = function t(e) {
            var r,
              i,
              n,
              o,
              y = l() - _,
              x = !0 === e;
            if (
              ((y > c || y < 0) && (d += y - p),
              (_ += y),
              ((r = (n = _ - d) - g) > 0 || x) &&
                ((o = ++u.frame),
                (h = n - 1e3 * u.time),
                (u.time = n /= 1e3),
                (g += r + (r >= m ? 4 : m - r)),
                (i = 1)),
              x || (s = a(t)),
              i)
            )
              for (f = 0; f < v.length; f++) v[f](n, h, o, e);
          }),
          (u = {
            time: 0,
            frame: 0,
            tick: function () {
              y(!0);
            },
            deltaRatio: function (t) {
              return h / (1e3 / (t || 60));
            },
            wake: function () {
              O &&
                (!E &&
                  Y() &&
                  ((M = (k = E = window).document || {}),
                  (tr.gsap = rE),
                  (k.gsapVersions || (k.gsapVersions = [])).push(rE.version),
                  tn(ti || k.GreenSockGlobals || (!k.gsap && k) || {}),
                  em.forEach(eg)),
                (o =
                  "undefined" != typeof requestAnimationFrame &&
                  requestAnimationFrame),
                s && u.sleep(),
                (a =
                  o ||
                  function (t) {
                    return setTimeout(t, (g - 1e3 * u.time + 1) | 0);
                  }),
                (S = 1),
                y(2));
            },
            sleep: function () {
              (o ? cancelAnimationFrame : clearTimeout)(s), (S = 0), (a = tu);
            },
            lagSmoothing: function (t, e) {
              p = Math.min(e || 33, (c = t || 1 / 0));
            },
            fps: function (t) {
              (m = 1e3 / (t || 240)), (g = 1e3 * u.time + m);
            },
            add: function (t, e, r) {
              var i = e
                ? function (e, r, n, s) {
                    t(e, r, n, s), u.remove(i);
                  }
                : t;
              return u.remove(t), v[r ? "unshift" : "push"](i), eO(), i;
            },
            remove: function (t, e) {
              ~(e = v.indexOf(t)) && v.splice(e, 1) && f >= e && f--;
            },
            _listeners: v,
          })),
        eO = function () {
          return !S && eM.wake();
        },
        eC = {},
        eA = /^[\d.\-M][\d.\-,\s]/,
        eS = /["']/g,
        eP = function (t) {
          for (
            var e,
              r,
              i,
              n = {},
              s = t.substr(1, t.length - 3).split(":"),
              a = s[0],
              o = 1,
              u = s.length;
            o < u;
            o++
          )
            (r = s[o]),
              (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
              (i = r.substr(0, e)),
              (n[a] = isNaN(i) ? i.replace(eS, "").trim() : +i),
              (a = r.substr(e + 1).trim());
          return n;
        },
        eD = function (t) {
          var e = t.indexOf("(") + 1,
            r = t.indexOf(")"),
            i = t.indexOf("(", e);
          return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
        },
        ez = function (t) {
          var e = (t + "").split("("),
            r = eC[e[0]];
          return r && e.length > 1 && r.config
            ? r.config.apply(
                null,
                ~t.indexOf("{") ? [eP(e[1])] : eD(t).split(",").map(tS)
              )
            : eC._CE && eA.test(t)
            ? eC._CE("", t)
            : r;
        },
        eR = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        eL = function t(e, r) {
          for (var i, n = e._first; n; )
            n instanceof eQ
              ? t(n, r)
              : !n.vars.yoyoEase ||
                (n._yoyo && n._repeat) ||
                n._yoyo === r ||
                (n.timeline
                  ? t(n.timeline, r)
                  : ((i = n._ease),
                    (n._ease = n._yEase),
                    (n._yEase = i),
                    (n._yoyo = r))),
              (n = n._next);
        },
        eI = function (t, e) {
          return (t && (q(t) ? t : eC[t] || ez(t))) || e;
        },
        eF = function (t, e, r, i) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === i &&
              (i = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2;
              });
          var n,
            s = { easeIn: e, easeOut: r, easeInOut: i };
          return (
            tb(t, function (t) {
              for (var e in ((eC[t] = tr[t] = s),
              (eC[(n = t.toLowerCase())] = r),
              s))
                eC[
                  n +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = eC[t + "." + e] = s[e];
            }),
            s
          );
        },
        eB = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t((e - 0.5) * 2) / 2;
          };
        },
        eV = function t(e, r, i) {
          var n = r >= 1 ? r : 1,
            s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            a = (s / z) * (Math.asin(1 / n) || 0),
            o = function (t) {
              return 1 === t
                ? 1
                : n * Math.pow(2, -10 * t) * B((t - a) * s) + 1;
            },
            u =
              "out" === e
                ? o
                : "in" === e
                ? function (t) {
                    return 1 - o(1 - t);
                  }
                : eB(o);
          return (
            (s = z / s),
            (u.config = function (r, i) {
              return t(e, r, i);
            }),
            u
          );
        },
        eq = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var i = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
            },
            n =
              "out" === e
                ? i
                : "in" === e
                ? function (t) {
                    return 1 - i(1 - t);
                  }
                : eB(i);
          return (
            (n.config = function (r) {
              return t(e, r);
            }),
            n
          );
        };
      tb("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        eF(
          t + ",Power" + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, r);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow((1 - t) * 2, r) / 2;
          }
        );
      }),
        (eC.Linear.easeNone = eC.none = eC.Linear.easeIn),
        eF("Elastic", eV("in"), eV("out"), eV()),
        (eY = 2 * (ej = 1 / 2.75)),
        (eX = 2.5 * ej),
        eF(
          "Bounce",
          function (t) {
            return 1 - eW(1 - t);
          },
          (eW = function (t) {
            return t < ej
              ? 7.5625 * t * t
              : t < eY
              ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + 0.75
              : t < eX
              ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
              : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
          })
        ),
        eF("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        eF("Circ", function (t) {
          return -(I(1 - t * t) - 1);
        }),
        eF("Sine", function (t) {
          return 1 === t ? 1 : -F(t * R) + 1;
        }),
        eF("Back", eq("in"), eq("out"), eq()),
        (eC.SteppedEase =
          eC.steps =
          tr.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                  i = t + (e ? 0 : 1),
                  n = e ? 1 : 0;
                return function (t) {
                  return (((i * t7(0, 0.99999999, t)) | 0) + n) * r;
                };
              },
            }),
        (D.ease = eC["quad.out"]),
        tb(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (ty += t + "," + t + "Params,");
          }
        );
      var eU = function (t, e) {
          (this.id = L++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : tT),
            (this.set = e ? e.getSetter : rr);
        },
        eN = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              t2(this, +t.duration, 1, 1),
              (this.data = t.data),
              T && ((this._ctx = T), T.data.push(this)),
              S || eM.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  t2(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((eO(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (
                  tG(this, t), !r._dp || r.parent || tH(r, this);
                  r && r.parent;

                )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : -((r.totalDuration() - r._tTime) / r._ts)) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  tZ(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime === t &&
                  (this._dur || e) &&
                  (!this._initted || 1e-8 !== Math.abs(this._zTime)) &&
                  (t || this._initted || (!this.add && !this._ptLookup))) ||
                  (this._ts || (this._pTime = t), tA(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + tj(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() > 0
                ? 1
                : 0;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) +
                      tj(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.rawTime() > 0
                ? 1
                : 0;
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? tY(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t, e) {
              if (!arguments.length)
                return -0.00000001 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var r =
                this.parent && this._ts
                  ? tX(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -0.00000001 === t ? 0 : this._rts),
                this.totalTime(
                  t7(-Math.abs(this._delay), this._tDur, r),
                  !1 !== e
                ),
                tW(this),
                tN(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (eO(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            1e-8 !== Math.abs(this._zTime) &&
                            (this._tTime -= 1e-8)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    tZ(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (j(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && 1 > this.totalProgress()))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? tX(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = tl);
              var e = w;
              return (
                (w = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                (w = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp);
              return !this.parent && this._sat ? this._sat.globalTime(t) : r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), t3(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), t3(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(t6(this, t), j(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, j(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -0.00000001 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0),
                (this._zTime = -0.00000001),
                this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !!(
                !e ||
                (this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - 1e-8)
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var i = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((i[t] = e),
                      r && (i[t + "Params"] = r),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete i[t],
                  this)
                : i[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var i = q(t) ? t : tP,
                  n = function () {
                    var t = e.then;
                    (e.then = null),
                      q(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                      r(i),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? n()
                  : (e._prom = n);
              });
            }),
            (e.kill = function () {
              e_(this);
            }),
            t
          );
        })();
      tD(eN.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -0.00000001,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var eQ = (function (t) {
        function e(e, r) {
          var n;
          return (
            void 0 === e && (e = {}),
            ((n = t.call(this, e) || this).labels = {}),
            (n.smoothChildTiming = !!e.smoothChildTiming),
            (n.autoRemoveChildren = !!e.autoRemoveChildren),
            (n._sort = j(e.sortChildren)),
            b && tZ(e.parent || b, i(n), r),
            e.reversed && n.reverse(),
            e.paused && n.paused(!0),
            e.scrollTrigger && t$(i(n), e.scrollTrigger),
            n
          );
        }
        n(e, t);
        var r = e.prototype;
        return (
          (r.to = function (t, e, r) {
            return t4(0, arguments, this), this;
          }),
          (r.from = function (t, e, r) {
            return t4(1, arguments, this), this;
          }),
          (r.fromTo = function (t, e, r, i) {
            return t4(2, arguments, this), this;
          }),
          (r.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              tI(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new e4(t, e, t6(this, r), 1),
              this
            );
          }),
          (r.call = function (t, e, r) {
            return tZ(this, e4.delayedCall(0, t, e), r);
          }),
          (r.staggerTo = function (t, e, r, i, n, s, a) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || i),
              (r.onComplete = s),
              (r.onCompleteParams = a),
              (r.parent = this),
              new e4(t, r, t6(this, n)),
              this
            );
          }),
          (r.staggerFrom = function (t, e, r, i, n, s, a) {
            return (
              (r.runBackwards = 1),
              (tI(r).immediateRender = j(r.immediateRender)),
              this.staggerTo(t, e, r, i, n, s, a)
            );
          }),
          (r.staggerFromTo = function (t, e, r, i, n, s, a, o) {
            return (
              (i.startAt = r),
              (tI(i).immediateRender = j(i.immediateRender)),
              this.staggerTo(t, e, i, n, s, a, o)
            );
          }),
          (r.render = function (t, e, r) {
            var i,
              n,
              s,
              a,
              o,
              u,
              h,
              f,
              l,
              c,
              p,
              d,
              _ = this._time,
              m = this._dirty ? this.totalDuration() : this._tDur,
              g = this._dur,
              v = t <= 0 ? 0 : tE(t),
              y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (
              (this !== b && v > m && t >= 0 && (v = m),
              v !== this._tTime || r || y)
            ) {
              if (
                (_ !== this._time &&
                  g &&
                  ((v += this._time - _), (t += this._time - _)),
                (i = v),
                (l = this._start),
                (u = !(f = this._ts)),
                y && (g || (_ = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((p = this._yoyo),
                  (o = g + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * o + t, e, r);
                if (
                  ((i = tE(v % o)),
                  v === m
                    ? ((a = this._repeat), (i = g))
                    : ((a = ~~(v / o)) && a === v / o && ((i = g), a--),
                      i > g && (i = g)),
                  (c = tY(this._tTime, o)),
                  !_ &&
                    this._tTime &&
                    c !== a &&
                    this._tTime - c * o - this._dur <= 0 &&
                    (c = a),
                  p && 1 & a && ((i = g - i), (d = 1)),
                  a !== c && !this._lock)
                ) {
                  var x = p && 1 & c,
                    T = x === (p && 1 & a);
                  if (
                    (a < c && (x = !x),
                    (_ = x ? 0 : v % g ? g : v),
                    (this._lock = 1),
                    (this.render(_ || (d ? 0 : tE(a * o)), e, !g)._lock = 0),
                    (this._tTime = v),
                    !e && this.parent && ed(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !d &&
                      (this.invalidate()._lock = 1),
                    (_ && _ !== this._time) ||
                      !this._ts !== u ||
                      (this.vars.onRepeat && !this.parent && !this._act) ||
                      ((g = this._dur),
                      (m = this._tDur),
                      T &&
                        ((this._lock = 2),
                        (_ = x ? g : -0.0001),
                        this.render(_, !0),
                        this.vars.repeatRefresh && !d && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !u))
                  )
                    return this;
                  eL(this, d);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (h = t5(this, tE(_), tE(i))) &&
                  (v -= i - (i = h._start)),
                (this._tTime = v),
                (this._time = i),
                (this._act = !f),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (_ = 0)),
                !_ && i && !e && !a && (ed(this, "onStart"), this._tTime !== v))
              )
                return this;
              if (i >= _ && t >= 0)
                for (n = this._first; n; ) {
                  if (
                    ((s = n._next),
                    (n._act || i >= n._start) && n._ts && h !== n)
                  ) {
                    if (n.parent !== this) return this.render(t, e, r);
                    if (
                      (n.render(
                        n._ts > 0
                          ? (i - n._start) * n._ts
                          : (n._dirty ? n.totalDuration() : n._tDur) +
                              (i - n._start) * n._ts,
                        e,
                        r
                      ),
                      i !== this._time || (!this._ts && !u))
                    ) {
                      (h = 0), s && (v += this._zTime = -0.00000001);
                      break;
                    }
                  }
                  n = s;
                }
              else {
                n = this._last;
                for (var k = t < 0 ? t : i; n; ) {
                  if (
                    ((s = n._prev), (n._act || k <= n._end) && n._ts && h !== n)
                  ) {
                    if (n.parent !== this) return this.render(t, e, r);
                    if (
                      (n.render(
                        n._ts > 0
                          ? (k - n._start) * n._ts
                          : (n._dirty ? n.totalDuration() : n._tDur) +
                              (k - n._start) * n._ts,
                        e,
                        r || (w && (n._initted || n._startAt))
                      ),
                      i !== this._time || (!this._ts && !u))
                    ) {
                      (h = 0), s && (v += this._zTime = k ? -0.00000001 : 1e-8);
                      break;
                    }
                  }
                  n = s;
                }
              }
              if (
                h &&
                !e &&
                (this.pause(),
                (h.render(i >= _ ? 0 : -0.00000001)._zTime = i >= _ ? 1 : -1),
                this._ts)
              )
                return (this._start = l), tW(this), this.render(t, e, r);
              this._onUpdate && !e && ed(this, "onUpdate", !0),
                ((v === m && this._tTime >= this.totalDuration()) ||
                  (!v && _)) &&
                  (l === this._start || Math.abs(f) !== Math.abs(this._ts)) &&
                  !this._lock &&
                  ((t || !g) &&
                    ((v === m && this._ts > 0) || (!v && this._ts < 0)) &&
                    tq(this, 1),
                  e ||
                    (t < 0 && !_) ||
                    (!v && !_ && m) ||
                    (ed(
                      this,
                      v === m && t >= 0 ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    this._prom &&
                      !(v < m && this.timeScale() > 0) &&
                      this._prom()));
            }
            return this;
          }),
          (r.add = function (t, e) {
            var r = this;
            if ((U(e) || (e = t6(this, e, t)), !(t instanceof eN))) {
              if (G(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e);
                  }),
                  this
                );
              if (V(t)) return this.addLabel(t, e);
              if (!q(t)) return this;
              t = e4.delayedCall(0, t);
            }
            return this !== t ? tZ(this, t, e) : this;
          }),
          (r.getChildren = function (t, e, r, i) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === i && (i = -1e8);
            for (var n = [], s = this._first; s; )
              s._start >= i &&
                (s instanceof e4
                  ? e && n.push(s)
                  : (r && n.push(s),
                    t && n.push.apply(n, s.getChildren(!0, e, r)))),
                (s = s._next);
            return n;
          }),
          (r.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r];
          }),
          (r.remove = function (t) {
            return V(t)
              ? this.removeLabel(t)
              : q(t)
              ? this.killTweensOf(t)
              : (tV(this, t),
                t === this._recent && (this._recent = this._last),
                tU(this));
          }),
          (r.totalTime = function (e, r) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = tE(
                    eM.time -
                      (this._ts > 0
                        ? e / this._ts
                        : -((this.totalDuration() - e) / this._ts))
                  )),
                t.prototype.totalTime.call(this, e, r),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (r.addLabel = function (t, e) {
            return (this.labels[t] = t6(this, e)), this;
          }),
          (r.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (r.addPause = function (t, e, r) {
            var i = e4.delayedCall(0, e || tu, r);
            return (
              (i.data = "isPause"),
              (this._hasPause = 1),
              tZ(this, i, t6(this, t))
            );
          }),
          (r.removePause = function (t) {
            var e = this._first;
            for (t = t6(this, t); e; )
              e._start === t && "isPause" === e.data && tq(e), (e = e._next);
          }),
          (r.killTweensOf = function (t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
              eG !== i[n] && i[n].kill(t, e);
            return this;
          }),
          (r.getTweensOf = function (t, e) {
            for (var r, i = [], n = ei(t), s = this._first, a = U(e); s; )
              s instanceof e4
                ? tO(s._targets, n) &&
                  (a
                    ? (!eG || (s._initted && s._ts)) &&
                      s.globalTime(0) <= e &&
                      s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  i.push(s)
                : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                (s = s._next);
            return i;
          }),
          (r.tweenTo = function (t, e) {
            e = e || {};
            var r,
              i = this,
              n = t6(i, t),
              s = e,
              a = s.startAt,
              o = s.onStart,
              u = s.onStartParams,
              h = s.immediateRender,
              f = e4.to(
                i,
                tD(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (n - (a && "time" in a ? a.time : i._time)) /
                          i.timeScale()
                      ) ||
                      1e-8,
                    onStart: function () {
                      if ((i.pause(), !r)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (n - (a && "time" in a ? a.time : i._time)) /
                              i.timeScale()
                          );
                        f._dur !== t && t2(f, t, 0, 1).render(f._time, !0, !0),
                          (r = 1);
                      }
                      o && o.apply(f, u || []);
                    },
                  },
                  e
                )
              );
            return h ? f.render(0) : f;
          }),
          (r.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, tD({ startAt: { time: t6(this, t) } }, r));
          }),
          (r.recent = function () {
            return this._recent;
          }),
          (r.nextLabel = function (t) {
            return void 0 === t && (t = this._time), ep(this, t6(this, t));
          }),
          (r.previousLabel = function (t) {
            return void 0 === t && (t = this._time), ep(this, t6(this, t), 1);
          }),
          (r.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + 1e-8);
          }),
          (r.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, s = this.labels; n; )
              n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
            if (e) for (i in s) s[i] >= r && (s[i] += t);
            return tU(this);
          }),
          (r.invalidate = function (e) {
            var r = this._first;
            for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (r.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              tU(this)
            );
          }),
          (r.totalDuration = function (t) {
            var e,
              r,
              i,
              n = 0,
              s = this._last,
              a = 1e8;
            if (arguments.length)
              return this.timeScale(
                (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                  (this.reversed() ? -t : t)
              );
            if (this._dirty) {
              for (i = this.parent; s; )
                (e = s._prev),
                  s._dirty && s.totalDuration(),
                  (r = s._start) > a && this._sort && s._ts && !this._lock
                    ? ((this._lock = 1),
                      (tZ(this, s, r - s._delay, 1)._lock = 0))
                    : (a = r),
                  r < 0 &&
                    s._ts &&
                    ((n -= r),
                    ((!i && !this._dp) || (i && i.smoothChildTiming)) &&
                      ((this._start += r / this._ts),
                      (this._time -= r),
                      (this._tTime -= r)),
                    this.shiftChildren(-r, !1, -1 / 0),
                    (a = 0)),
                  s._end > n && s._ts && (n = s._end),
                  (s = e);
              t2(this, this === b && this._time > n ? this._time : n, 1, 1),
                (this._dirty = 0);
            }
            return this._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((b._ts && (tA(b, tX(t, b)), (C = eM.frame)), eM.frame >= tg)) {
              tg += P.autoSleep || 120;
              var e = b._first;
              if ((!e || !e._ts) && P.autoSleep && eM._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || eM.sleep();
              }
            }
          }),
          e
        );
      })(eN);
      tD(eQ.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var ej,
        eY,
        eX,
        eW,
        eG,
        eH,
        eZ = function (t, e, r, i, n, s, a) {
          var o,
            u,
            h,
            f,
            l,
            c,
            p,
            d,
            _ = new rl(this._pt, t, e, 0, 1, rs, null, n),
            m = 0,
            g = 0;
          for (
            _.b = r,
              _.e = i,
              r += "",
              i += "",
              (p = ~i.indexOf("random(")) && (i = el(i)),
              s && (s((d = [r, i]), t, e), (r = d[0]), (i = d[1])),
              u = r.match(J) || [];
            (o = J.exec(i));

          )
            (f = o[0]),
              (l = i.substring(m, o.index)),
              h ? (h = (h + 1) % 5) : "rgba(" === l.substr(-5) && (h = 1),
              f !== u[g++] &&
                ((c = parseFloat(u[g - 1]) || 0),
                (_._pt = {
                  _next: _._pt,
                  p: l || 1 === g ? l : ",",
                  s: c,
                  c: "=" === f.charAt(1) ? tM(c, f) - c : parseFloat(f) - c,
                  m: h && h < 4 ? Math.round : 0,
                }),
                (m = J.lastIndex));
          return (
            (_.c = m < i.length ? i.substring(m, i.length) : ""),
            (_.fp = a),
            (K.test(i) || p) && (_.e = 0),
            (this._pt = _),
            _
          );
        },
        e$ = function (t, e, r, i, n, s, a, o, u, h) {
          q(i) && (i = i(n || 0, t, s));
          var f,
            l = t[e],
            c =
              "get" !== r
                ? r
                : q(l)
                ? u
                  ? t[
                      e.indexOf("set") || !q(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : l,
            p = q(l) ? (u ? rt : e7) : e9;
          if (
            (V(i) &&
              (~i.indexOf("random(") && (i = el(i)),
              "=" === i.charAt(1) &&
                ((f = tM(c, i) + (et(c) || 0)) || 0 === f) &&
                (i = f)),
            !h || c !== i || eH)
          )
            return isNaN(c * i) || "" === i
              ? (l || e in t || ts(e, i),
                eZ.call(this, t, e, c, i, p, o || P.stringFilter, u))
              : ((f = new rl(
                  this._pt,
                  t,
                  e,
                  +c || 0,
                  i - (c || 0),
                  "boolean" == typeof l ? rn : ri,
                  0,
                  p
                )),
                u && (f.fp = u),
                a && f.modifier(a, this, t),
                (this._pt = f));
        },
        eJ = function (t, e, r, i, n) {
          if (
            (q(t) && (t = e3(t, n, e, r, i)),
            !Q(t) || (t.style && t.nodeType) || G(t) || W(t))
          )
            return V(t) ? e3(t, n, e, r, i) : t;
          var s,
            a = {};
          for (s in t) a[s] = e3(t[s], n, e, r, i);
          return a;
        },
        eK = function (t, e, r, i, n, s) {
          var a, o, u, h;
          if (
            t_[t] &&
            !1 !==
              (a = new t_[t]()).init(
                n,
                a.rawVars ? e[t] : eJ(e[t], i, n, s, r),
                r,
                i,
                s
              ) &&
            ((r._pt = o =
              new rl(r._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
            r !== A)
          )
            for (
              u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length;
              h--;

            )
              u[a._props[h]] = o;
          return a;
        },
        e0 = function t(e, r, i) {
          var n,
            s,
            a,
            o,
            u,
            h,
            f,
            l,
            c,
            p,
            d,
            _,
            m,
            g = e.vars,
            v = g.ease,
            y = g.startAt,
            T = g.immediateRender,
            k = g.lazy,
            E = g.onUpdate,
            M = g.runBackwards,
            O = g.yoyoEase,
            C = g.keyframes,
            A = g.autoRevert,
            S = e._dur,
            P = e._startAt,
            z = e._targets,
            R = e.parent,
            L = R && "nested" === R.data ? R.vars.targets : z,
            I = "auto" === e._overwrite && !x,
            F = e.timeline;
          if (
            (!F || (C && v) || (v = "none"),
            (e._ease = eI(v, D.ease)),
            (e._yEase = O ? eR(eI(!0 === O ? v : O, D.ease)) : 0),
            O &&
              e._yoyo &&
              !e._repeat &&
              ((O = e._yEase), (e._yEase = e._ease), (e._ease = O)),
            (e._from = !F && !!g.runBackwards),
            !F || (C && !g.stagger))
          ) {
            if (
              ((_ = (l = z[0] ? tw(z[0]).harness : 0) && g[l.prop]),
              (n = tL(g, tc)),
              P &&
                (P._zTime < 0 && P.progress(1),
                r < 0 && M && T && !A
                  ? P.render(-1, !0)
                  : P.revert(M && S ? tf : th),
                (P._lazy = 0)),
              y)
            ) {
              if (
                (tq(
                  (e._startAt = e4.set(
                    z,
                    tD(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: R,
                        immediateRender: !0,
                        lazy: !P && j(k),
                        startAt: null,
                        delay: 0,
                        onUpdate:
                          E &&
                          function () {
                            return ed(e, "onUpdate");
                          },
                        stagger: 0,
                      },
                      y
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 && (w || (!T && !A)) && e._startAt.revert(tf),
                T && S && r <= 0 && i <= 0)
              ) {
                r && (e._zTime = r);
                return;
              }
            } else if (M && S && !P) {
              if (
                (r && (T = !1),
                (a = tD(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: T && !P && j(k),
                    immediateRender: T,
                    stagger: 0,
                    parent: R,
                  },
                  n
                )),
                _ && (a[l.prop] = _),
                tq((e._startAt = e4.set(z, a))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 &&
                  (w ? e._startAt.revert(tf) : e._startAt.render(-1, !0)),
                (e._zTime = r),
                T)
              ) {
                if (!r) return;
              } else t(e._startAt, 1e-8, 1e-8);
            }
            for (
              s = 0, e._pt = e._ptCache = 0, k = (S && j(k)) || (k && !S);
              s < z.length;
              s++
            ) {
              if (
                ((f = (u = z[s])._gsap || tx(z)[s]._gsap),
                (e._ptLookup[s] = p = {}),
                td[f.id] && tp.length && tC(),
                (d = L === z ? s : L.indexOf(u)),
                l &&
                  !1 !== (c = new l()).init(u, _ || n, e, d, L) &&
                  ((e._pt = o =
                    new rl(e._pt, u, c.name, 0, 1, c.render, c, 0, c.priority)),
                  c._props.forEach(function (t) {
                    p[t] = o;
                  }),
                  c.priority && (h = 1)),
                !l || _)
              )
                for (a in n)
                  t_[a] && (c = eK(a, n, e, d, u, L))
                    ? c.priority && (h = 1)
                    : (p[a] = o =
                        e$.call(e, u, a, "get", n[a], d, L, 0, g.stringFilter));
              e._op && e._op[s] && e.kill(u, e._op[s]),
                I &&
                  e._pt &&
                  ((eG = e),
                  b.killTweensOf(u, p, e.globalTime(r)),
                  (m = !e.parent),
                  (eG = 0)),
                e._pt && k && (td[f.id] = 1);
            }
            h && rf(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = E),
            (e._initted = (!e._op || e._pt) && !m),
            C && r <= 0 && F.render(1e8, !0, !0);
        },
        e1 = function (t, e, r, i, n, s, a, o) {
          var u,
            h,
            f,
            l,
            c = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
          if (!c)
            for (
              c = t._ptCache[e] = [], f = t._ptLookup, l = t._targets.length;
              l--;

            ) {
              if ((u = f[l][e]) && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== e && u.fp !== e; ) u = u._next;
              if (!u)
                return (
                  (eH = 1),
                  (t.vars[e] = "+=0"),
                  e0(t, a),
                  (eH = 0),
                  o ? ta(e + " not eligible for reset") : 1
                );
              c.push(u);
            }
          for (l = c.length; l--; )
            ((u = (h = c[l])._pt || h).s =
              (i || 0 === i) && !n ? i : u.s + (i || 0) + s * u.c),
              (u.c = r - u.s),
              h.e && (h.e = tk(r) + et(h.e)),
              h.b && (h.b = u.s + et(h.b));
        },
        e5 = function (t, e) {
          var r,
            i,
            n,
            s,
            a = t[0] ? tw(t[0]).harness : 0,
            o = a && a.aliases;
          if (!o) return e;
          for (i in ((r = tz({}, e)), o))
            if (i in r)
              for (n = (s = o[i].split(",")).length; n--; ) r[s[n]] = r[i];
          return r;
        },
        e2 = function (t, e, r, i) {
          var n,
            s,
            a = e.ease || i || "power1.inOut";
          if (G(e))
            (s = r[t] || (r[t] = [])),
              e.forEach(function (t, r) {
                return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: a });
              });
          else
            for (n in e)
              (s = r[n] || (r[n] = [])),
                "ease" === n || s.push({ t: parseFloat(t), v: e[n], e: a });
        },
        e3 = function (t, e, r, i, n) {
          return q(t)
            ? t.call(e, r, i, n)
            : V(t) && ~t.indexOf("random(")
            ? el(t)
            : t;
        },
        e8 = ty + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        e6 = {};
      tb(e8 + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (e6[t] = 1);
      });
      var e4 = (function (t) {
        function e(e, r, n, s) {
          "number" == typeof r && ((n.duration = r), (r = n), (n = null));
          var a,
            o,
            u,
            h,
            f,
            l,
            c,
            p,
            d,
            _ = (a = t.call(this, s ? r : tI(r)) || this).vars,
            m = _.duration,
            g = _.delay,
            v = _.immediateRender,
            y = _.stagger,
            w = _.overwrite,
            T = _.keyframes,
            k = _.defaults,
            E = _.scrollTrigger,
            M = _.yoyoEase,
            O = r.parent || b,
            C = (G(e) || W(e) ? U(e[0]) : "length" in r) ? [e] : ei(e);
          if (
            ((a._targets = C.length
              ? tx(C)
              : ta(
                  "GSAP target " + e + " not found. https://gsap.com",
                  !P.nullTargetWarn
                ) || []),
            (a._ptLookup = []),
            (a._overwrite = w),
            T || y || X(m) || X(g))
          ) {
            if (
              ((r = a.vars),
              (o = a.timeline =
                new eQ({
                  data: "nested",
                  defaults: k || {},
                  targets: O && "nested" === O.data ? O.vars.targets : C,
                })).kill(),
              (o.parent = o._dp = i(a)),
              (o._start = 0),
              y || X(m) || X(g))
            ) {
              if (((f = C.length), (p = y && ea(y)), Q(y)))
                for (l in y) ~e8.indexOf(l) && (d || (d = {}), (d[l] = y[l]));
              for (u = 0; u < f; u++)
                ((h = tL(r, e6)).stagger = 0),
                  M && (h.yoyoEase = M),
                  d && tz(h, d),
                  (c = C[u]),
                  (h.duration = +e3(m, i(a), u, c, C)),
                  (h.delay = (+e3(g, i(a), u, c, C) || 0) - a._delay),
                  !y &&
                    1 === f &&
                    h.delay &&
                    ((a._delay = g = h.delay), (a._start += g), (h.delay = 0)),
                  o.to(c, h, p ? p(u, c, C) : 0),
                  (o._ease = eC.none);
              o.duration() ? (m = g = 0) : (a.timeline = 0);
            } else if (T) {
              tI(tD(o.vars.defaults, { ease: "none" })),
                (o._ease = eI(T.ease || r.ease || "none"));
              var A,
                S,
                D,
                z = 0;
              if (G(T))
                T.forEach(function (t) {
                  return o.to(C, t, ">");
                }),
                  o.duration();
              else {
                for (l in ((h = {}), T))
                  "ease" === l ||
                    "easeEach" === l ||
                    e2(l, T[l], h, T.easeEach);
                for (l in h)
                  for (
                    u = 0,
                      A = h[l].sort(function (t, e) {
                        return t.t - e.t;
                      }),
                      z = 0;
                    u < A.length;
                    u++
                  )
                    ((D = {
                      ease: (S = A[u]).e,
                      duration: ((S.t - (u ? A[u - 1].t : 0)) / 100) * m,
                    })[l] = S.v),
                      o.to(C, D, z),
                      (z += D.duration);
                o.duration() < m && o.to({}, { duration: m - o.duration() });
              }
            }
            m || a.duration((m = o.duration()));
          } else a.timeline = 0;
          return (
            !0 !== w || x || ((eG = i(a)), b.killTweensOf(C), (eG = 0)),
            tZ(O, i(a), n),
            r.reversed && a.reverse(),
            r.paused && a.paused(!0),
            (v ||
              (!m &&
                !T &&
                a._start === tE(O._time) &&
                j(v) &&
                (function t(e) {
                  return !e || (e._ts && t(e.parent));
                })(i(a)) &&
                "nested" !== O.data)) &&
              ((a._tTime = -0.00000001), a.render(Math.max(0, -g) || 0)),
            E && t$(i(a), E),
            a
          );
        }
        n(e, t);
        var r = e.prototype;
        return (
          (r.render = function (t, e, r) {
            var i,
              n,
              s,
              a,
              o,
              u,
              h,
              f,
              l,
              c = this._time,
              p = this._tDur,
              d = this._dur,
              _ = t < 0,
              m = t > p - 1e-8 && !_ ? p : t < 1e-8 ? 0 : t;
            if (d) {
              if (
                m !== this._tTime ||
                !t ||
                r ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== _)
              ) {
                if (((i = m), (f = this.timeline), this._repeat)) {
                  if (((a = d + this._rDelay), this._repeat < -1 && _))
                    return this.totalTime(100 * a + t, e, r);
                  if (
                    ((i = tE(m % a)),
                    m === p
                      ? ((s = this._repeat), (i = d))
                      : ((s = ~~(m / a)) && s === tE(m / a) && ((i = d), s--),
                        i > d && (i = d)),
                    (u = this._yoyo && 1 & s) &&
                      ((l = this._yEase), (i = d - i)),
                    (o = tY(this._tTime, a)),
                    i === c && !r && this._initted && s === o)
                  )
                    return (this._tTime = m), this;
                  s !== o &&
                    (f && this._yEase && eL(f, u),
                    this.vars.repeatRefresh &&
                      !u &&
                      !this._lock &&
                      this._time !== a &&
                      this._initted &&
                      ((this._lock = r = 1),
                      (this.render(tE(a * s), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (tJ(this, _ ? t : i, r, e, m))
                    return (this._tTime = 0), this;
                  if (
                    c !== this._time &&
                    !(r && this.vars.repeatRefresh && s !== o)
                  )
                    return this;
                  if (d !== this._dur) return this.render(t, e, r);
                }
                if (
                  ((this._tTime = m),
                  (this._time = i),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = h = (l || this._ease)(i / d)),
                  this._from && (this.ratio = h = 1 - h),
                  i &&
                    !c &&
                    !e &&
                    !s &&
                    (ed(this, "onStart"), this._tTime !== m))
                )
                  return this;
                for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
                (f &&
                  f.render(
                    t < 0 ? t : f._dur * f._ease(i / this._dur),
                    e,
                    r
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (_ && tQ(this, t, e, r), ed(this, "onUpdate")),
                  this._repeat &&
                    s !== o &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    ed(this, "onRepeat"),
                  (m === this._tDur || !m) &&
                    this._tTime === m &&
                    (_ && !this._onUpdate && tQ(this, t, !0, !0),
                    (t || !d) &&
                      ((m === this._tDur && this._ts > 0) ||
                        (!m && this._ts < 0)) &&
                      tq(this, 1),
                    !e &&
                      !(_ && !c) &&
                      (m || c || u) &&
                      (ed(
                        this,
                        m === p ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(m < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else t1(this, t, e, r);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function (e) {
            return (
              (e && this.vars.runBackwards) || (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (r.resetTo = function (t, e, r, i, n) {
            S || eM.wake(), this._ts || this.play();
            var s = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (this._initted || e0(this, s),
            e1(this, t, e, r, i, this._ease(s / this._dur), s, n))
              ? this.resetTo(t, e, r, i, 1)
              : (tG(this, 0),
                this.parent ||
                  tB(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0
                  ),
                this.render(0));
          }),
          (r.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !t && (!e || "all" === e)))
              return (this._lazy = this._pt = 0), this.parent ? e_(this) : this;
            if (this.timeline) {
              var r = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, eG && !0 !== eG.vars.overwrite)
                  ._first || e_(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  t2(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              );
            }
            var i,
              n,
              s,
              a,
              o,
              u,
              h,
              f = this._targets,
              l = t ? ei(t) : f,
              c = this._ptLookup,
              p = this._pt;
            if ((!e || "all" === e) && tF(f, l))
              return "all" === e && (this._pt = 0), e_(this);
            for (
              i = this._op = this._op || [],
                "all" !== e &&
                  (V(e) &&
                    ((o = {}),
                    tb(e, function (t) {
                      return (o[t] = 1);
                    }),
                    (e = o)),
                  (e = e5(f, e))),
                h = f.length;
              h--;

            )
              if (~l.indexOf(f[h]))
                for (o in ((n = c[h]),
                "all" === e
                  ? ((i[h] = e), (a = n), (s = {}))
                  : ((s = i[h] = i[h] || {}), (a = e)),
                a))
                  (u = n && n[o]) &&
                    (("kill" in u.d && !0 !== u.d.kill(o)) ||
                      tV(this, u, "_pt"),
                    delete n[o]),
                    "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && p && e_(this), this;
          }),
          (e.to = function (t, r) {
            return new e(t, r, arguments[2]);
          }),
          (e.from = function (t, e) {
            return t4(1, arguments);
          }),
          (e.delayedCall = function (t, r, i, n) {
            return new e(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: i,
              onReverseCompleteParams: i,
              callbackScope: n,
            });
          }),
          (e.fromTo = function (t, e, r) {
            return t4(2, arguments);
          }),
          (e.set = function (t, r) {
            return (
              (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
            );
          }),
          (e.killTweensOf = function (t, e, r) {
            return b.killTweensOf(t, e, r);
          }),
          e
        );
      })(eN);
      tD(e4.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        tb("staggerTo,staggerFrom,staggerFromTo", function (t) {
          e4[t] = function () {
            var e = new eQ(),
              r = ee.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            );
          };
        });
      var e9 = function (t, e, r) {
          return (t[e] = r);
        },
        e7 = function (t, e, r) {
          return t[e](r);
        },
        rt = function (t, e, r, i) {
          return t[e](i.fp, r);
        },
        re = function (t, e, r) {
          return t.setAttribute(e, r);
        },
        rr = function (t, e) {
          return q(t[e]) ? e7 : N(t[e]) && t.setAttribute ? re : e9;
        },
        ri = function (t, e) {
          return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
        },
        rn = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        rs = function (t, e) {
          var r = e._pt,
            i = "";
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
            for (; r; )
              (i =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round((r.s + r.c * t) * 1e4) / 1e4) +
                i),
                (r = r._next);
            i += e.c;
          }
          e.set(e.t, e.p, i, e);
        },
        ra = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        ro = function (t, e, r, i) {
          for (var n, s = this._pt; s; )
            (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
        },
        ru = function (t) {
          for (var e, r, i = this._pt; i; )
            (r = i._next),
              (i.p !== t || i.op) && i.op !== t
                ? i.dep || (e = 1)
                : tV(this, i, "_pt"),
              (i = r);
          return !e;
        },
        rh = function (t, e, r, i) {
          i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
        },
        rf = function (t) {
          for (var e, r, i, n, s = t._pt; s; ) {
            for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
            (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
              (s._next = r) ? (r._prev = s) : (n = s),
              (s = e);
          }
          t._pt = i;
        },
        rl = (function () {
          function t(t, e, r, i, n, s, a, o, u) {
            (this.t = e),
              (this.s = i),
              (this.c = n),
              (this.p = r),
              (this.r = s || ri),
              (this.d = a || this),
              (this.set = o || e9),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = rh),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
      tb(
        ty +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (tc[t] = 1);
        }
      ),
        (tr.TweenMax = tr.TweenLite = e4),
        (tr.TimelineLite = tr.TimelineMax = eQ),
        (b = new eQ({
          sortChildren: !1,
          defaults: D,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (P.stringFilter = eE);
      var rc = [],
        rp = {},
        rd = [],
        r_ = 0,
        rm = 0,
        rg = function (t) {
          return (rp[t] || rd).map(function (t) {
            return t();
          });
        },
        rv = function () {
          var t = Date.now(),
            e = [];
          t - r_ > 2 &&
            (rg("matchMediaInit"),
            rc.forEach(function (t) {
              var r,
                i,
                n,
                s,
                a = t.queries,
                o = t.conditions;
              for (i in a)
                (r = k.matchMedia(a[i]).matches) && (n = 1),
                  r !== o[i] && ((o[i] = r), (s = 1));
              s && (t.revert(), n && e.push(t));
            }),
            rg("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t, function (e) {
                return t.add(null, e);
              });
            }),
            (r_ = t),
            rg("matchMedia"));
        },
        ry = (function () {
          function t(t, e) {
            (this.selector = e && en(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = rm++),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              q(t) && ((r = e), (e = t), (t = q));
              var i = this,
                n = function () {
                  var t,
                    n = T,
                    s = i.selector;
                  return (
                    n && n !== i && n.data.push(i),
                    r && (i.selector = en(r)),
                    (T = i),
                    (t = e.apply(i, arguments)),
                    q(t) && i._r.push(t),
                    (T = n),
                    (i.selector = s),
                    (i.isReverted = !1),
                    t
                  );
                };
              return (
                (i.last = n),
                t === q
                  ? n(i, function (t) {
                      return i.add(null, t);
                    })
                  : t
                  ? (i[t] = n)
                  : n
              );
            }),
            (e.ignore = function (t) {
              var e = T;
              (T = null), t(this), (T = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (r) {
                  return r instanceof t
                    ? e.push.apply(e, r.getTweens())
                    : r instanceof e4 &&
                        !(r.parent && "nested" === r.parent.data) &&
                        e.push(r);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var r = this;
              if (
                (t
                  ? (function () {
                      for (var e, i = r.getTweens(), n = r.data.length; n--; )
                        "isFlip" === (e = r.data[n]).data &&
                          (e.revert(),
                          e.getChildren(!0, !0, !1).forEach(function (t) {
                            return i.splice(i.indexOf(t), 1);
                          }));
                      for (
                        i
                          .map(function (t) {
                            return {
                              g:
                                t._dur ||
                                t._delay ||
                                (t._sat && !t._sat.vars.immediateRender)
                                  ? t.globalTime(0)
                                  : -1 / 0,
                              t: t,
                            };
                          })
                          .sort(function (t, e) {
                            return e.g - t.g || -1 / 0;
                          })
                          .forEach(function (e) {
                            return e.t.revert(t);
                          }),
                          n = r.data.length;
                        n--;

                      )
                        (e = r.data[n]) instanceof eQ
                          ? "nested" !== e.data &&
                            (e.scrollTrigger && e.scrollTrigger.revert(),
                            e.kill())
                          : e instanceof e4 || !e.revert || e.revert(t);
                      r._r.forEach(function (e) {
                        return e(t, r);
                      }),
                        (r.isReverted = !0);
                    })()
                  : this.data.forEach(function (t) {
                      return t.kill && t.kill();
                    }),
                this.clear(),
                e)
              )
                for (var i = rc.length; i--; )
                  rc[i].id === this.id && rc.splice(i, 1);
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        rx = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t), T && T.data.push(this);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              Q(t) || (t = { matches: t });
              var i,
                n,
                s,
                a = new ry(0, r || this.scope),
                o = (a.conditions = {});
              for (n in (T && !a.selector && (a.selector = T.selector),
              this.contexts.push(a),
              (e = a.add("onMatch", e)),
              (a.queries = t),
              t))
                "all" === n
                  ? (s = 1)
                  : (i = k.matchMedia(t[n])) &&
                    (0 > rc.indexOf(a) && rc.push(a),
                    (o[n] = i.matches) && (s = 1),
                    i.addListener
                      ? i.addListener(rv)
                      : i.addEventListener("change", rv));
              return (
                s &&
                  e(a, function (t) {
                    return a.add(null, t);
                  }),
                this
              );
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        rw = {
          registerPlugin: function () {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            e.forEach(function (t) {
              return eg(t);
            });
          },
          timeline: function (t) {
            return new eQ(t);
          },
          getTweensOf: function (t, e) {
            return b.getTweensOf(t, e);
          },
          getProperty: function (t, e, r, i) {
            V(t) && (t = ei(t)[0]);
            var n = tw(t || {}).get,
              s = r ? tP : tS;
            return (
              "native" === r && (r = ""),
              t
                ? e
                  ? s(((t_[e] && t_[e].get) || n)(t, e, r, i))
                  : function (e, r, i) {
                      return s(((t_[e] && t_[e].get) || n)(t, e, r, i));
                    }
                : t
            );
          },
          quickSetter: function (t, e, r) {
            if ((t = ei(t)).length > 1) {
              var i = t.map(function (t) {
                  return rE.quickSetter(t, e, r);
                }),
                n = i.length;
              return function (t) {
                for (var e = n; e--; ) i[e](t);
              };
            }
            t = t[0] || {};
            var s = t_[e],
              a = tw(t),
              o = (a.harness && (a.harness.aliases || {})[e]) || e,
              u = s
                ? function (e) {
                    var i = new s();
                    (A._pt = 0),
                      i.init(t, r ? e + r : e, A, 0, [t]),
                      i.render(1, i),
                      A._pt && ra(1, A);
                  }
                : a.set(t, o);
            return s
              ? u
              : function (e) {
                  return u(t, o, r ? e + r : e, a, 1);
                };
          },
          quickTo: function (t, e, r) {
            var i,
              n = rE.to(
                t,
                tz((((i = {})[e] = "+=0.1"), (i.paused = !0), i), r || {})
              ),
              s = function (t, r, i) {
                return n.resetTo(e, t, r, i);
              };
            return (s.tween = n), s;
          },
          isTweening: function (t) {
            return b.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = eI(t.ease, D.ease)), tR(D, t || {});
          },
          config: function (t) {
            return tR(P, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              r = t.effect,
              i = t.plugins,
              n = t.defaults,
              s = t.extendTimeline;
            (i || "").split(",").forEach(function (t) {
              return (
                t &&
                !t_[t] &&
                !tr[t] &&
                ta(e + " effect requires " + t + " plugin.")
              );
            }),
              (tm[e] = function (t, e, i) {
                return r(ei(t), tD(e || {}, n), i);
              }),
              s &&
                (eQ.prototype[e] = function (t, r, i) {
                  return this.add(tm[e](t, Q(r) ? r : (i = r) && {}, this), i);
                });
          },
          registerEase: function (t, e) {
            eC[t] = eI(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? eI(t, e) : eC;
          },
          getById: function (t) {
            return b.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var r,
              i,
              n = new eQ(t);
            for (
              n.smoothChildTiming = j(t.smoothChildTiming),
                b.remove(n),
                n._dp = 0,
                n._time = n._tTime = b._time,
                r = b._first;
              r;

            )
              (i = r._next),
                (e ||
                  !(
                    !r._dur &&
                    r instanceof e4 &&
                    r.vars.onComplete === r._targets[0]
                  )) &&
                  tZ(n, r, r._start - r._delay),
                (r = i);
            return tZ(b, n, 0), n;
          },
          context: function (t, e) {
            return t ? new ry(t, e) : T;
          },
          matchMedia: function (t) {
            return new rx(t);
          },
          matchMediaRefresh: function () {
            return (
              rc.forEach(function (t) {
                var e,
                  r,
                  i = t.conditions;
                for (r in i) i[r] && ((i[r] = !1), (e = 1));
                e && t.revert();
              }) || rv()
            );
          },
          addEventListener: function (t, e) {
            var r = rp[t] || (rp[t] = []);
            ~r.indexOf(e) || r.push(e);
          },
          removeEventListener: function (t, e) {
            var r = rp[t],
              i = r && r.indexOf(e);
            i >= 0 && r.splice(i, 1);
          },
          utils: {
            wrap: function t(e, r, i) {
              var n = r - e;
              return G(e)
                ? ef(e, t(0, e.length), r)
                : t9(i, function (t) {
                    return ((n + ((t - e) % n)) % n) + e;
                  });
            },
            wrapYoyo: function t(e, r, i) {
              var n = r - e,
                s = 2 * n;
              return G(e)
                ? ef(e, t(0, e.length - 1), r)
                : t9(i, function (t) {
                    return (
                      (t = (s + ((t - e) % s)) % s || 0),
                      e + (t > n ? s - t : t)
                    );
                  });
            },
            distribute: ea,
            random: eh,
            snap: eu,
            normalize: function (t, e, r) {
              return ec(t, e, 0, 1, r);
            },
            getUnit: et,
            clamp: function (t, e, r) {
              return t9(r, function (r) {
                return t7(t, e, r);
              });
            },
            splitColor: ex,
            toArray: ei,
            selector: en,
            mapRange: ec,
            pipe: function () {
              for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (r) {
                return t(parseFloat(r)) + (e || et(r));
              };
            },
            interpolate: function t(e, r, i, n) {
              var s = isNaN(e + r)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * r;
                  };
              if (!s) {
                var a,
                  o,
                  u,
                  h,
                  f,
                  l = V(e),
                  c = {};
                if ((!0 === i && (n = 1) && (i = null), l))
                  (e = { p: e }), (r = { p: r });
                else if (G(e) && !G(r)) {
                  for (o = 1, u = [], f = (h = e.length) - 2; o < h; o++)
                    u.push(t(e[o - 1], e[o]));
                  h--,
                    (s = function (t) {
                      var e = Math.min(f, ~~(t *= h));
                      return u[e](t - e);
                    }),
                    (i = r);
                } else n || (e = tz(G(e) ? [] : {}, e));
                if (!u) {
                  for (a in r) e$.call(c, e, a, "get", r[a]);
                  s = function (t) {
                    return ra(t, c) || (l ? e.p : e);
                  };
                }
              }
              return t9(i, s);
            },
            shuffle: es,
          },
          install: tn,
          effects: tm,
          ticker: eM,
          updateRoot: eQ.updateRoot,
          plugins: t_,
          globalTimeline: b,
          core: {
            PropTween: rl,
            globals: to,
            Tween: e4,
            Timeline: eQ,
            Animation: eN,
            getCache: tw,
            _removeLinkedListItem: tV,
            reverting: function () {
              return w;
            },
            context: function (t) {
              return t && T && (T.data.push(t), (t._ctx = T)), T;
            },
            suppressOverwrites: function (t) {
              return (x = t);
            },
          },
        };
      tb("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (rw[t] = e4[t]);
      }),
        eM.add(eQ.updateRoot),
        (A = rw.to({}, { duration: 0 }));
      var rT = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
          return r;
        },
        rb = function (t, e) {
          var r,
            i,
            n,
            s = t._targets;
          for (r in e)
            for (i = s.length; i--; )
              (n = t._ptLookup[i][r]) &&
                (n = n.d) &&
                (n._pt && (n = rT(n, r)),
                n && n.modifier && n.modifier(e[r], t, s[i], r));
        },
        rk = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, i) {
              i._onInit = function (t) {
                var i, n;
                if (
                  (V(r) &&
                    ((i = {}),
                    tb(r, function (t) {
                      return (i[t] = 1);
                    }),
                    (r = i)),
                  e)
                ) {
                  for (n in ((i = {}), r)) i[n] = e(r[n]);
                  r = i;
                }
                rb(t, r);
              };
            },
          };
        },
        rE =
          rw.registerPlugin(
            {
              name: "attr",
              init: function (t, e, r, i, n) {
                var s, a, o;
                for (s in ((this.tween = r), e))
                  (o = t.getAttribute(s) || ""),
                    ((a = this.add(
                      t,
                      "setAttribute",
                      (o || 0) + "",
                      e[s],
                      i,
                      n,
                      0,
                      0,
                      s
                    )).op = s),
                    (a.b = o),
                    this._props.push(s);
              },
              render: function (t, e) {
                for (var r = e._pt; r; )
                  w ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var r = e.length; r--; )
                  this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
              },
            },
            rk("roundProps", eo),
            rk("modifiers"),
            rk("snap", eu)
          ) || rw;
      (e4.version = eQ.version = rE.version = "3.12.5"),
        (O = 1),
        Y() && eO(),
        eC.Power0,
        eC.Power1,
        eC.Power2,
        eC.Power3,
        eC.Power4,
        eC.Linear,
        eC.Quad,
        eC.Cubic,
        eC.Quart,
        eC.Quint,
        eC.Strong,
        eC.Elastic,
        eC.Back,
        eC.SteppedEase,
        eC.Bounce,
        eC.Sine,
        eC.Expo,
        eC.Circ;
    });
  var h = {};
  (f = "undefined" != typeof window ? window : h),
    (l = function (t, e) {
      var r = t.jQuery,
        i = t.console;
      function n(t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      }
      var s = Array.prototype.slice;
      function a(t, e, o) {
        if (!(this instanceof a)) return new a(t, e, o);
        var u,
          h = t;
        if (("string" == typeof t && (h = document.querySelectorAll(t)), !h)) {
          i.error("Bad element for imagesLoaded " + (h || t));
          return;
        }
        (this.elements = Array.isArray((u = h))
          ? u
          : "object" == typeof u && "number" == typeof u.length
          ? s.call(u)
          : [u]),
          (this.options = n({}, this.options)),
          "function" == typeof e ? (o = e) : n(this.options, e),
          o && this.on("always", o),
          this.getImages(),
          r && (this.jqDeferred = new r.Deferred()),
          setTimeout(this.check.bind(this));
      }
      (a.prototype = Object.create(e.prototype)),
        (a.prototype.options = {}),
        (a.prototype.getImages = function () {
          (this.images = []),
            this.elements.forEach(this.addElementImages, this);
        }),
        (a.prototype.addElementImages = function (t) {
          "IMG" == t.nodeName && this.addImage(t),
            !0 === this.options.background &&
              this.addElementBackgroundImages(t);
          var e = t.nodeType;
          if (e && o[e]) {
            for (var r = t.querySelectorAll("img"), i = 0; i < r.length; i++) {
              var n = r[i];
              this.addImage(n);
            }
            if ("string" == typeof this.options.background) {
              var s = t.querySelectorAll(this.options.background);
              for (i = 0; i < s.length; i++) {
                var a = s[i];
                this.addElementBackgroundImages(a);
              }
            }
          }
        });
      var o = { 1: !0, 9: !0, 11: !0 };
      function u(t) {
        this.img = t;
      }
      function h(t, e) {
        (this.url = t), (this.element = e), (this.img = new Image());
      }
      return (
        (a.prototype.addElementBackgroundImages = function (t) {
          var e = getComputedStyle(t);
          if (e)
            for (
              var r = /url\((['"])?(.*?)\1\)/gi, i = r.exec(e.backgroundImage);
              null !== i;

            ) {
              var n = i && i[2];
              n && this.addBackground(n, t), (i = r.exec(e.backgroundImage));
            }
        }),
        (a.prototype.addImage = function (t) {
          var e = new u(t);
          this.images.push(e);
        }),
        (a.prototype.addBackground = function (t, e) {
          var r = new h(t, e);
          this.images.push(r);
        }),
        (a.prototype.check = function () {
          var t = this;
          if (
            ((this.progressedCount = 0),
            (this.hasAnyBroken = !1),
            !this.images.length)
          ) {
            this.complete();
            return;
          }
          function e(e, r, i) {
            setTimeout(function () {
              t.progress(e, r, i);
            });
          }
          this.images.forEach(function (t) {
            t.once("progress", e), t.check();
          });
        }),
        (a.prototype.progress = function (t, e, r) {
          this.progressedCount++,
            (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
            this.emitEvent("progress", [this, t, e]),
            this.jqDeferred &&
              this.jqDeferred.notify &&
              this.jqDeferred.notify(this, t),
            this.progressedCount == this.images.length && this.complete(),
            this.options.debug && i && i.log("progress: " + r, t, e);
        }),
        (a.prototype.complete = function () {
          var t = this.hasAnyBroken ? "fail" : "done";
          if (
            ((this.isComplete = !0),
            this.emitEvent(t, [this]),
            this.emitEvent("always", [this]),
            this.jqDeferred)
          ) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this);
          }
        }),
        (u.prototype = Object.create(e.prototype)),
        (u.prototype.check = function () {
          if (this.getIsImageComplete()) {
            this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            return;
          }
          (this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.src);
        }),
        (u.prototype.getIsImageComplete = function () {
          return this.img.complete && this.img.naturalWidth;
        }),
        (u.prototype.confirm = function (t, e) {
          (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
        }),
        (u.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (u.prototype.onload = function () {
          this.confirm(!0, "onload"), this.unbindEvents();
        }),
        (u.prototype.onerror = function () {
          this.confirm(!1, "onerror"), this.unbindEvents();
        }),
        (u.prototype.unbindEvents = function () {
          this.proxyImage.removeEventListener("load", this),
            this.proxyImage.removeEventListener("error", this),
            this.img.removeEventListener("load", this),
            this.img.removeEventListener("error", this);
        }),
        (h.prototype = Object.create(u.prototype)),
        (h.prototype.check = function () {
          this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.img.src = this.url),
            this.getIsImageComplete() &&
              (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
              this.unbindEvents());
        }),
        (h.prototype.unbindEvents = function () {
          this.img.removeEventListener("load", this),
            this.img.removeEventListener("error", this);
        }),
        (h.prototype.confirm = function (t, e) {
          (this.isLoaded = t),
            this.emitEvent("progress", [this, this.element, e]);
        }),
        (a.makeJQueryPlugin = function (e) {
          (e = e || t.jQuery) &&
            ((r = e).fn.imagesLoaded = function (t, e) {
              return new a(this, t, e).jqDeferred.promise(r(this));
            });
        }),
        a.makeJQueryPlugin(),
        a
      );
    }),
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (t) {
          return l(f, t);
        })
      : h
      ? (h = l(f, o("hobco")))
      : (f.imagesLoaded = l(f, f.EvEmitter));
  /*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var f,
    l,
    c,
    p,
    d,
    _,
    m,
    g,
    v,
    y = (o("aiOHf"), o("aiOHf")),
    x = {},
    w = 180 / Math.PI,
    T = Math.PI / 180,
    b = Math.atan2,
    k = /([A-Z])/g,
    E = /(left|right|width|margin|padding|x)/i,
    M = /[\s,\(]\S/,
    O = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    C = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
    },
    A = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
        e
      );
    },
    S = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
        e
      );
    },
    P = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    D = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    z = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    R = function (t, e, r) {
      return (t.style[e] = r);
    },
    L = function (t, e, r) {
      return t.style.setProperty(e, r);
    },
    I = function (t, e, r) {
      return (t._gsap[e] = r);
    },
    F = function (t, e, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    B = function (t, e, r, i, n) {
      var s = t._gsap;
      (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
    },
    V = function (t, e, r, i, n) {
      var s = t._gsap;
      (s[e] = r), s.renderTransform(n, s);
    },
    q = "transform",
    U = q + "Origin",
    N = function t(e, r) {
      var i = this,
        n = this.target,
        s = n.style,
        a = n._gsap;
      if (e in x && s) {
        if (((this.tfm = this.tfm || {}), "transform" === e))
          return O.transform.split(",").forEach(function (e) {
            return t.call(i, e, r);
          });
        if (
          (~(e = O[e] || e).indexOf(",")
            ? e.split(",").forEach(function (t) {
                return (i.tfm[t] = ta(n, t));
              })
            : (this.tfm[e] = a.x ? a[e] : ta(n, e)),
          e === U && (this.tfm.zOrigin = a.zOrigin),
          this.props.indexOf(q) >= 0)
        )
          return;
        a.svg &&
          ((this.svgo = n.getAttribute("data-svg-origin")),
          this.props.push(U, r, "")),
          (e = q);
      }
      (s || r) && this.props.push(e, r, s[e]);
    },
    Q = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    j = function () {
      var t,
        e,
        r = this.props,
        i = this.target,
        n = i.style,
        s = i._gsap;
      for (t = 0; t < r.length; t += 3)
        r[t + 1]
          ? (i[r[t]] = r[t + 2])
          : r[t + 2]
          ? (n[r[t]] = r[t + 2])
          : n.removeProperty(
              "--" === r[t].substr(0, 2)
                ? r[t]
                : r[t].replace(k, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (e in this.tfm) s[e] = this.tfm[e];
        s.svg &&
          (s.renderTransform(),
          i.setAttribute("data-svg-origin", this.svgo || "")),
          ((t = g()) && t.isStart) ||
            n[q] ||
            (Q(n),
            s.zOrigin &&
              n[U] &&
              ((n[U] += " " + s.zOrigin + "px"),
              (s.zOrigin = 0),
              s.renderTransform()),
            (s.uncache = 1));
      }
    },
    Y = function (t, e) {
      var r = { target: t, props: [], revert: j, save: N };
      return (
        t._gsap || (0, y.gsap).core.getCache(t),
        e &&
          e.split(",").forEach(function (t) {
            return r.save(t);
          }),
        r
      );
    },
    X = function (t, e) {
      var r = c.createElementNS
        ? c.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : c.createElement(t);
      return r && r.style ? r : c.createElement(t);
    },
    W = function t(e, r, i) {
      var n = getComputedStyle(e);
      return (
        n[r] ||
        n.getPropertyValue(r.replace(k, "-$1").toLowerCase()) ||
        n.getPropertyValue(r) ||
        (!i && t(e, H(r) || r, 1)) ||
        ""
      );
    },
    G = "O,Moz,ms,Ms,Webkit".split(","),
    H = function (t, e, r) {
      var i = (e || _).style,
        n = 5;
      if (t in i && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(G[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? G[n] : "") + t;
    },
    Z = function () {
      "undefined" != typeof window &&
        window.document &&
        ((p = (c = window.document).documentElement),
        (_ = X("div") || { style: {} }),
        X("div"),
        (U = (q = H(q)) + "Origin"),
        (_.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (v = !!H("perspective")),
        (g = y.gsap.core.reverting),
        (d = 1));
    },
    $ = function t(e) {
      var r,
        i = X(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        n = this.parentNode,
        s = this.nextSibling,
        a = this.style.cssText;
      if (
        (p.appendChild(i),
        i.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (r = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (r = this._gsapBBox());
      return (
        n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
        p.removeChild(i),
        (this.style.cssText = a),
        r
      );
    },
    J = function (t, e) {
      for (var r = e.length; r--; )
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    K = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (r) {
        e = $.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) || t.getBBox === $ || (e = $.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +J(t, ["x", "cx", "x1"]) || 0,
              y: +J(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    tt = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && K(t));
    },
    te = function (t, e) {
      if (e) {
        var r,
          i = t.style;
        e in x && e !== U && (e = q),
          i.removeProperty
            ? (("ms" === (r = e.substr(0, 2)) || "webkit" === e.substr(0, 6)) &&
                (e = "-" + e),
              i.removeProperty(
                "--" === r ? e : e.replace(k, "-$1").toLowerCase()
              ))
            : i.removeAttribute(e);
      }
    },
    tr = function (t, e, r, i, n, s) {
      var a = new y.PropTween(t._pt, e, r, 0, 1, s ? z : D);
      return (t._pt = a), (a.b = i), (a.e = n), t._props.push(r), a;
    },
    ti = { deg: 1, rad: 1, turn: 1 },
    tn = { grid: 1, flex: 1 },
    ts = function t(e, r, i, n) {
      var s,
        a,
        o,
        u,
        h = parseFloat(i) || 0,
        f = (i + "").trim().substr((h + "").length) || "px",
        l = _.style,
        p = E.test(r),
        d = "svg" === e.tagName.toLowerCase(),
        m = (d ? "client" : "offset") + (p ? "Width" : "Height"),
        g = "px" === n,
        v = "%" === n;
      if (n === f || !h || ti[n] || ti[f]) return h;
      if (
        ("px" === f || g || (h = t(e, r, i, "px")),
        (u = e.getCTM && tt(e)),
        (v || "%" === f) && (x[r] || ~r.indexOf("adius")))
      )
        return (
          (s = u ? e.getBBox()[p ? "width" : "height"] : e[m]),
          (0, y._round)(v ? (h / s) * 100 : (h / 100) * s)
        );
      if (
        ((l[p ? "width" : "height"] = 100 + (g ? f : n)),
        (a =
          ~r.indexOf("adius") || ("em" === n && e.appendChild && !d)
            ? e
            : e.parentNode),
        u && (a = (e.ownerSVGElement || {}).parentNode),
        (a && a !== c && a.appendChild) || (a = c.body),
        (o = a._gsap) &&
          v &&
          o.width &&
          p &&
          o.time === y._ticker.time &&
          !o.uncache)
      )
        return (0, y._round)((h / o.width) * 100);
      if (v && ("height" === r || "width" === r)) {
        var w = e.style[r];
        (e.style[r] = 100 + n), (s = e[m]), w ? (e.style[r] = w) : te(e, r);
      } else
        (v || "%" === f) &&
          !tn[W(a, "display")] &&
          (l.position = W(e, "position")),
          a === e && (l.position = "static"),
          a.appendChild(_),
          (s = _[m]),
          a.removeChild(_),
          (l.position = "absolute");
      return (
        p &&
          v &&
          (((o = (0, y._getCache)(a)).time = y._ticker.time), (o.width = a[m])),
        (0, y._round)(g ? (s * h) / 100 : s && h ? (100 / s) * h : 0)
      );
    },
    ta = function (t, e, r, i) {
      var n;
      return (
        d || Z(),
        e in O &&
          "transform" !== e &&
          ~(e = O[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        x[e] && "transform" !== e
          ? ((n = tv(t, i)),
            (n =
              "transformOrigin" !== e
                ? n[e]
                : n.svg
                ? n.origin
                : ty(W(t, U)) + " " + n.zOrigin + "px"))
          : (!(n = t.style[e]) ||
              "auto" === n ||
              i ||
              ~(n + "").indexOf("calc(")) &&
            (n =
              (tl[e] && tl[e](t, e, r)) ||
              W(t, e) ||
              (0, y._getProperty)(t, e) ||
              ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? ts(t, e, n, r) + r : n
      );
    },
    to = function (t, e, r, i) {
      if (!r || "none" === r) {
        var n = H(e, t, 1),
          s = n && W(t, n, 1);
        s && s !== r
          ? ((e = n), (r = s))
          : "borderColor" === e && (r = W(t, "borderTopColor"));
      }
      var a,
        o,
        u,
        h,
        f,
        l,
        c,
        p,
        d,
        _,
        m,
        g = new y.PropTween(this._pt, t.style, e, 0, 1, y._renderComplexString),
        v = 0,
        x = 0;
      if (
        ((g.b = r),
        (g.e = i),
        (r += ""),
        "auto" == (i += "") &&
          ((l = t.style[e]),
          (t.style[e] = i),
          (i = W(t, e) || i),
          l ? (t.style[e] = l) : te(t, e)),
        (a = [r, i]),
        (0, y._colorStringFilter)(a),
        (r = a[0]),
        (i = a[1]),
        (u = r.match(y._numWithUnitExp) || []),
        (i.match(y._numWithUnitExp) || []).length)
      ) {
        for (; (o = (0, y._numWithUnitExp).exec(i)); )
          (c = o[0]),
            (d = i.substring(v, o.index)),
            f
              ? (f = (f + 1) % 5)
              : ("rgba(" === d.substr(-5) || "hsla(" === d.substr(-5)) &&
                (f = 1),
            c !== (l = u[x++] || "") &&
              ((h = parseFloat(l) || 0),
              (m = l.substr((h + "").length)),
              "=" === c.charAt(1) && (c = (0, y._parseRelative)(h, c) + m),
              (p = parseFloat(c)),
              (_ = c.substr((p + "").length)),
              (v = y._numWithUnitExp.lastIndex - _.length),
              _ ||
                ((_ = _ || y._config.units[e] || m),
                v !== i.length || ((i += _), (g.e += _))),
              m !== _ && (h = ts(t, e, l, _) || 0),
              (g._pt = {
                _next: g._pt,
                p: d || 1 === x ? d : ",",
                s: h,
                c: p - h,
                m: (f && f < 4) || "zIndex" === e ? Math.round : 0,
              }));
        g.c = v < i.length ? i.substring(v, i.length) : "";
      } else g.r = "display" === e && "none" === i ? z : D;
      return (0, y._relExp).test(i) && (g.e = 0), (this._pt = g), g;
    },
    tu = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    th = function (t) {
      var e = t.split(" "),
        r = e[0],
        i = e[1] || "50%";
      return (
        ("top" === r || "bottom" === r || "left" === i || "right" === i) &&
          ((t = r), (r = i), (i = t)),
        (e[0] = tu[r] || r),
        (e[1] = tu[i] || i),
        e.join(" ")
      );
    },
    tf = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r,
          i,
          n,
          s = e.t,
          a = s.style,
          o = e.u,
          u = s._gsap;
        if ("all" === o || !0 === o) (a.cssText = ""), (i = 1);
        else
          for (n = (o = o.split(",")).length; --n > -1; )
            x[(r = o[n])] && ((i = 1), (r = "transformOrigin" === r ? U : q)),
              te(s, r);
        i &&
          (te(s, q),
          u &&
            (u.svg && s.removeAttribute("transform"),
            tv(s, 1),
            (u.uncache = 1),
            Q(a)));
      }
    },
    tl = {
      clearProps: function (t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var s = (t._pt = new y.PropTween(t._pt, e, r, 0, 0, tf));
          return (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1;
        }
      },
    },
    tc = [1, 0, 0, 1, 0, 0],
    tp = {},
    td = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    t_ = function (t) {
      var e = W(t, q);
      return td(e) ? tc : e.substr(7).match(y._numExp).map(y._round);
    },
    tm = function (t, e) {
      var r,
        i,
        n,
        s,
        a = t._gsap || (0, y._getCache)(t),
        o = t.style,
        u = t_(t);
      return a.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (u = [
            (n = t.transform.baseVal.consolidate().matrix).a,
            n.b,
            n.c,
            n.d,
            n.e,
            n.f,
          ]).join(",")
          ? tc
          : u
        : (u !== tc ||
            t.offsetParent ||
            t === p ||
            a.svg ||
            ((n = o.display),
            (o.display = "block"),
            ((r = t.parentNode) && t.offsetParent) ||
              ((s = 1), (i = t.nextElementSibling), p.appendChild(t)),
            (u = t_(t)),
            n ? (o.display = n) : te(t, "display"),
            s &&
              (i
                ? r.insertBefore(t, i)
                : r
                ? r.appendChild(t)
                : p.removeChild(t))),
          e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    tg = function (t, e, r, i, n, s) {
      var a,
        o,
        u,
        h,
        f = t._gsap,
        l = n || tm(t, !0),
        c = f.xOrigin || 0,
        p = f.yOrigin || 0,
        d = f.xOffset || 0,
        _ = f.yOffset || 0,
        m = l[0],
        g = l[1],
        v = l[2],
        y = l[3],
        x = l[4],
        w = l[5],
        T = e.split(" "),
        b = parseFloat(T[0]) || 0,
        k = parseFloat(T[1]) || 0;
      r
        ? l !== tc &&
          (o = m * y - g * v) &&
          ((u = (y / o) * b + (-v / o) * k + (v * w - y * x) / o),
          (h = (-g / o) * b + (m / o) * k - (m * w - g * x) / o),
          (b = u),
          (k = h))
        : ((b = (a = K(t)).x + (~T[0].indexOf("%") ? (b / 100) * a.width : b)),
          (k =
            a.y + (~(T[1] || T[0]).indexOf("%") ? (k / 100) * a.height : k))),
        i || (!1 !== i && f.smooth)
          ? ((x = b - c),
            (w = k - p),
            (f.xOffset = d + (x * m + w * v) - x),
            (f.yOffset = _ + (x * g + w * y) - w))
          : (f.xOffset = f.yOffset = 0),
        (f.xOrigin = b),
        (f.yOrigin = k),
        (f.smooth = !!i),
        (f.origin = e),
        (f.originIsAbsolute = !!r),
        (t.style[U] = "0px 0px"),
        s &&
          (tr(s, f, "xOrigin", c, b),
          tr(s, f, "yOrigin", p, k),
          tr(s, f, "xOffset", d, f.xOffset),
          tr(s, f, "yOffset", _, f.yOffset)),
        t.setAttribute("data-svg-origin", b + " " + k);
    },
    tv = function (t, e) {
      var r = t._gsap || new y.GSCache(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        s,
        a,
        o,
        u,
        h,
        f,
        l,
        c,
        p,
        d,
        _,
        m,
        g,
        x,
        k,
        E,
        M,
        O,
        C,
        A,
        S,
        P,
        D,
        z,
        R,
        L,
        I,
        F,
        B,
        V,
        N = t.style,
        Q = r.scaleX < 0,
        j = getComputedStyle(t),
        Y = W(t, U) || "0";
      return (
        (i = n = s = u = h = f = l = c = p = 0),
        (a = o = 1),
        (r.svg = !!(t.getCTM && tt(t))),
        j.translate &&
          (("none" !== j.translate ||
            "none" !== j.scale ||
            "none" !== j.rotate) &&
            (N[q] =
              ("none" !== j.translate
                ? "translate3d(" +
                  (j.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== j.rotate ? "rotate(" + j.rotate + ") " : "") +
              ("none" !== j.scale
                ? "scale(" + j.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== j[q] ? j[q] : "")),
          (N.scale = N.rotate = N.translate = "none")),
        (m = tm(t, r.svg)),
        r.svg &&
          (r.uncache
            ? ((D = t.getBBox()),
              (Y = r.xOrigin - D.x + "px " + (r.yOrigin - D.y) + "px"),
              (P = ""))
            : (P = !e && t.getAttribute("data-svg-origin")),
          tg(t, P || Y, !!P || r.originIsAbsolute, !1 !== r.smooth, m)),
        (d = r.xOrigin || 0),
        (_ = r.yOrigin || 0),
        m !== tc &&
          ((E = m[0]),
          (M = m[1]),
          (O = m[2]),
          (C = m[3]),
          (i = A = m[4]),
          (n = S = m[5]),
          6 === m.length
            ? ((a = Math.sqrt(E * E + M * M)),
              (o = Math.sqrt(C * C + O * O)),
              (u = E || M ? b(M, E) * w : 0),
              (l = O || C ? b(O, C) * w + u : 0) &&
                (o *= Math.abs(Math.cos(l * T))),
              r.svg && ((i -= d - (d * E + _ * O)), (n -= _ - (d * M + _ * C))))
            : ((V = m[6]),
              (F = m[7]),
              (R = m[8]),
              (L = m[9]),
              (I = m[10]),
              (B = m[11]),
              (i = m[12]),
              (n = m[13]),
              (s = m[14]),
              (h = (g = b(V, I)) * w),
              g &&
                ((P = A * (x = Math.cos(-g)) + R * (k = Math.sin(-g))),
                (D = S * x + L * k),
                (z = V * x + I * k),
                (R = -(A * k) + R * x),
                (L = -(S * k) + L * x),
                (I = -(V * k) + I * x),
                (B = -(F * k) + B * x),
                (A = P),
                (S = D),
                (V = z)),
              (f = (g = b(-O, I)) * w),
              g &&
                ((P = E * (x = Math.cos(-g)) - R * (k = Math.sin(-g))),
                (D = M * x - L * k),
                (z = O * x - I * k),
                (B = C * k + B * x),
                (E = P),
                (M = D),
                (O = z)),
              (u = (g = b(M, E)) * w),
              g &&
                ((P = E * (x = Math.cos(g)) + M * (k = Math.sin(g))),
                (D = A * x + S * k),
                (M = M * x - E * k),
                (S = S * x - A * k),
                (E = P),
                (A = D)),
              h &&
                Math.abs(h) + Math.abs(u) > 359.9 &&
                ((h = u = 0), (f = 180 - f)),
              (a = (0, y._round)(Math.sqrt(E * E + M * M + O * O))),
              (o = (0, y._round)(Math.sqrt(S * S + V * V))),
              (l = Math.abs((g = b(A, S))) > 2e-4 ? g * w : 0),
              (p = B ? 1 / (B < 0 ? -B : B) : 0)),
          r.svg &&
            ((P = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !td(W(t, q))),
            P && t.setAttribute("transform", P))),
        Math.abs(l) > 90 &&
          270 > Math.abs(l) &&
          (Q
            ? ((a *= -1),
              (l += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (l += l <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          i -
          ((r.xPercent =
            i &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          "px"),
        (r.y =
          n -
          ((r.yPercent =
            n &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          "px"),
        (r.z = s + "px"),
        (r.scaleX = (0, y._round)(a)),
        (r.scaleY = (0, y._round)(o)),
        (r.rotation = (0, y._round)(u) + "deg"),
        (r.rotationX = (0, y._round)(h) + "deg"),
        (r.rotationY = (0, y._round)(f) + "deg"),
        (r.skewX = l + "deg"),
        (r.skewY = c + "deg"),
        (r.transformPerspective = p + "px"),
        (r.zOrigin = parseFloat(Y.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
          (N[U] = ty(Y)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = y._config.force3D),
        (r.renderTransform = r.svg ? tk : v ? tb : tw),
        (r.uncache = 0),
        r
      );
    },
    ty = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    tx = function (t, e, r) {
      var i = (0, y.getUnit)(e);
      return (
        (0, y._round)(parseFloat(e) + parseFloat(ts(t, "x", r + "px", i))) + i
      );
    },
    tw = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        tb(t, e);
    },
    tT = "0deg",
    tb = function (t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        s = r.x,
        a = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        f = r.rotationX,
        l = r.skewX,
        c = r.skewY,
        p = r.scaleX,
        d = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        x = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (f !== tT || h !== tT)) {
        var w,
          b = parseFloat(h) * T,
          k = Math.sin(b),
          E = Math.cos(b);
        (s = tx(g, s, -(k * (w = Math.cos((b = parseFloat(f) * T))) * v))),
          (a = tx(g, a, -(-Math.sin(b) * v))),
          (o = tx(g, o, -(E * w * v) + v));
      }
      "0px" !== _ && (y += "perspective(" + _ + ") "),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (x || "0px" !== s || "0px" !== a || "0px" !== o) &&
          (y +=
            "0px" !== o || x
              ? "translate3d(" + s + ", " + a + ", " + o + ") "
              : "translate(" + s + ", " + a + ") "),
        u !== tT && (y += "rotate(" + u + ") "),
        h !== tT && (y += "rotateY(" + h + ") "),
        f !== tT && (y += "rotateX(" + f + ") "),
        (l !== tT || c !== tT) && (y += "skew(" + l + ", " + c + ") "),
        (1 !== p || 1 !== d) && (y += "scale(" + p + ", " + d + ") "),
        (g.style[q] = y || "translate(0, 0)");
    },
    tk = function (t, e) {
      var r,
        i,
        n,
        s,
        a,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        f = o.x,
        l = o.y,
        c = o.rotation,
        p = o.skewX,
        d = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        x = o.yOrigin,
        w = o.xOffset,
        b = o.yOffset,
        k = o.forceCSS,
        E = parseFloat(f),
        M = parseFloat(l);
      (c = parseFloat(c)),
        (p = parseFloat(p)),
        (d = parseFloat(d)) && ((p += d = parseFloat(d)), (c += d)),
        c || p
          ? ((c *= T),
            (p *= T),
            (r = Math.cos(c) * _),
            (i = Math.sin(c) * _),
            (n = -(Math.sin(c - p) * m)),
            (s = Math.cos(c - p) * m),
            p &&
              ((d *= T),
              (n *= a = Math.sqrt(1 + (a = Math.tan(p - d)) * a)),
              (s *= a),
              d && ((r *= a = Math.sqrt(1 + (a = Math.tan(d)) * a)), (i *= a))),
            (r = (0, y._round)(r)),
            (i = (0, y._round)(i)),
            (n = (0, y._round)(n)),
            (s = (0, y._round)(s)))
          : ((r = _), (s = m), (i = n = 0)),
        ((E && !~(f + "").indexOf("px")) || (M && !~(l + "").indexOf("px"))) &&
          ((E = ts(g, "x", f, "px")), (M = ts(g, "y", l, "px"))),
        (v || x || w || b) &&
          ((E = (0, y._round)(E + v - (v * r + x * n) + w)),
          (M = (0, y._round)(M + x - (v * i + x * s) + b))),
        (u || h) &&
          ((a = g.getBBox()),
          (E = (0, y._round)(E + (u / 100) * a.width)),
          (M = (0, y._round)(M + (h / 100) * a.height))),
        (a =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          n +
          "," +
          s +
          "," +
          E +
          "," +
          M +
          ")"),
        g.setAttribute("transform", a),
        k && (g.style[q] = a);
    },
    tE = function (t, e, r, i, n) {
      var s,
        a,
        o = (0, y._isString)(n),
        u = parseFloat(n) * (o && ~n.indexOf("rad") ? w : 1) - i,
        h = i + u + "deg";
      return (
        o &&
          ("short" === (s = n.split("_")[1]) &&
            (u %= 360) != u % 180 &&
            (u += u < 0 ? 360 : -360),
          "cw" === s && u < 0
            ? (u = ((u + 36e9) % 360) - 360 * ~~(u / 360))
            : "ccw" === s &&
              u > 0 &&
              (u = ((u - 36e9) % 360) - 360 * ~~(u / 360))),
        (t._pt = a = new y.PropTween(t._pt, e, r, i, u, A)),
        (a.e = h),
        (a.u = "deg"),
        t._props.push(r),
        a
      );
    },
    tM = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    tO = function (t, e, r) {
      var i,
        n,
        s,
        a,
        o,
        u,
        h,
        f = tM({}, r._gsap),
        l = r.style;
      for (n in (f.svg
        ? ((s = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (l[q] = e),
          (i = tv(r, 1)),
          te(r, q),
          r.setAttribute("transform", s))
        : ((s = getComputedStyle(r)[q]),
          (l[q] = e),
          (i = tv(r, 1)),
          (l[q] = s)),
      x))
        (s = f[n]) !== (a = i[n]) &&
          0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) &&
          ((o =
            (0, y.getUnit)(s) !== (h = (0, y.getUnit)(a))
              ? ts(r, n, s, h)
              : parseFloat(s)),
          (u = parseFloat(a)),
          (t._pt = new y.PropTween(t._pt, i, n, o, u - o, C)),
          (t._pt.u = h || 0),
          t._props.push(n));
      tM(i, f);
    };
  (0, y._forEachName)("padding,margin,Width,Radius", function (t, e) {
    var r = "Right",
      i = "Bottom",
      n = "Left",
      s = (e < 3 ? ["Top", r, i, n] : ["Top" + n, "Top" + r, i + r, i + n]).map(
        function (r) {
          return e < 2 ? t + r : "border" + r + t;
        }
      );
    tl[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
      var a, o;
      if (arguments.length < 4)
        return 5 ===
          (o = (a = s.map(function (e) {
            return ta(t, e, r);
          })).join(" ")).split(a[0]).length
          ? a[0]
          : o;
      (a = (i + "").split(" ")),
        (o = {}),
        s.forEach(function (t, e) {
          return (o[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        t.init(e, o, n);
    };
  });
  var tC = {
    name: "css",
    register: Z,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, r, i, n) {
      var s,
        a,
        o,
        u,
        h,
        f,
        l,
        c,
        p,
        _,
        m,
        g,
        v,
        w,
        T,
        b,
        k = this._props,
        E = t.style,
        A = r.vars.startAt;
      for (l in (d || Z(),
      (this.styles = this.styles || Y(t)),
      (b = this.styles.props),
      (this.tween = r),
      e))
        if (
          "autoRound" !== l &&
          ((a = e[l]),
          !(y._plugins[l] && (0, y._checkPlugin)(l, e, r, i, t, n)))
        ) {
          if (
            ((h = typeof a),
            (f = tl[l]),
            "function" === h && (h = typeof (a = a.call(r, i, t, n))),
            "string" === h &&
              ~a.indexOf("random(") &&
              (a = (0, y._replaceRandom)(a)),
            f)
          )
            f(this, t, l, a, r) && (T = 1);
          else if ("--" === l.substr(0, 2))
            (s = (getComputedStyle(t).getPropertyValue(l) + "").trim()),
              (a += ""),
              (y._colorExp.lastIndex = 0),
              (0, y._colorExp).test(s) ||
                ((c = (0, y.getUnit)(s)), (p = (0, y.getUnit)(a))),
              p ? c !== p && (s = ts(t, l, s, p) + p) : c && (a += c),
              this.add(E, "setProperty", s, a, i, n, 0, 0, l),
              k.push(l),
              b.push(l, 0, E[l]);
          else if ("undefined" !== h) {
            if (
              (A && l in A
                ? ((s =
                    "function" == typeof A[l] ? A[l].call(r, i, t, n) : A[l]),
                  (0, y._isString)(s) &&
                    ~s.indexOf("random(") &&
                    (s = (0, y._replaceRandom)(s)),
                  (0, y.getUnit)(s + "") ||
                    "auto" === s ||
                    (s += y._config.units[l] || (0, y.getUnit)(ta(t, l)) || ""),
                  "=" === (s + "").charAt(1) && (s = ta(t, l)))
                : (s = ta(t, l)),
              (u = parseFloat(s)),
              (_ = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) &&
                (a = a.substr(2)),
              (o = parseFloat(a)),
              l in O &&
                ("autoAlpha" === l &&
                  (1 === u && "hidden" === ta(t, "visibility") && o && (u = 0),
                  b.push("visibility", 0, E.visibility),
                  tr(
                    this,
                    E,
                    "visibility",
                    u ? "inherit" : "hidden",
                    o ? "inherit" : "hidden",
                    !o
                  )),
                "scale" !== l &&
                  "transform" !== l &&
                  ~(l = O[l]).indexOf(",") &&
                  (l = l.split(",")[0])),
              (m = l in x))
            ) {
              if (
                (this.styles.save(l),
                g ||
                  (((v = t._gsap).renderTransform && !e.parseTransform) ||
                    tv(t, e.parseTransform),
                  (w = !1 !== e.smoothOrigin && v.smooth),
                  ((g = this._pt =
                    new y.PropTween(
                      this._pt,
                      E,
                      q,
                      0,
                      1,
                      v.renderTransform,
                      v,
                      0,
                      -1
                    )).dep = 1)),
                "scale" === l)
              )
                (this._pt = new y.PropTween(
                  this._pt,
                  v,
                  "scaleY",
                  v.scaleY,
                  (_ ? (0, y._parseRelative)(v.scaleY, _ + o) : o) - v.scaleY ||
                    0,
                  C
                )),
                  (this._pt.u = 0),
                  k.push("scaleY", l),
                  (l += "X");
              else if ("transformOrigin" === l) {
                b.push(U, 0, E[U]),
                  (a = th(a)),
                  v.svg
                    ? tg(t, a, 0, w, 0, this)
                    : ((p = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin &&
                        tr(this, v, "zOrigin", v.zOrigin, p),
                      tr(this, E, l, ty(s), ty(a)));
                continue;
              } else if ("svgOrigin" === l) {
                tg(t, a, 1, w, 0, this);
                continue;
              } else if (l in tp) {
                tE(this, v, l, u, _ ? (0, y._parseRelative)(u, _ + a) : a);
                continue;
              } else if ("smoothOrigin" === l) {
                tr(this, v, "smooth", v.smooth, a);
                continue;
              } else if ("force3D" === l) {
                v[l] = a;
                continue;
              } else if ("transform" === l) {
                tO(this, a, t);
                continue;
              }
            } else l in E || (l = H(l) || l);
            if (m || ((o || 0 === o) && (u || 0 === u) && !M.test(a) && l in E))
              (c = (s + "").substr((u + "").length)),
                o || (o = 0),
                (p =
                  (0, y.getUnit)(a) ||
                  (l in y._config.units ? y._config.units[l] : c)),
                c !== p && (u = ts(t, l, s, p)),
                (this._pt = new y.PropTween(
                  this._pt,
                  m ? v : E,
                  l,
                  u,
                  (_ ? (0, y._parseRelative)(u, _ + o) : o) - u,
                  m || ("px" !== p && "zIndex" !== l) || !1 === e.autoRound
                    ? C
                    : P
                )),
                (this._pt.u = p || 0),
                c !== p && "%" !== p && ((this._pt.b = s), (this._pt.r = S));
            else if (l in E) to.call(this, t, l, s, _ ? _ + a : a);
            else if (l in t) this.add(t, l, s || t[l], _ ? _ + a : a, i, n);
            else if ("parseTransform" !== l) {
              (0, y._missingPlugin)(l, a);
              continue;
            }
            m || (l in E ? b.push(l, 0, E[l]) : b.push(l, 1, s || t[l])),
              k.push(l);
          }
        }
      T && (0, y._sortPropTweensByPriority)(this);
    },
    render: function (t, e) {
      if (e.tween._time || !g())
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      else e.styles.revert();
    },
    get: ta,
    aliases: O,
    getSetter: function (t, e, r) {
      var i = O[e];
      return (
        i && 0 > i.indexOf(",") && (e = i),
        e in x && e !== U && (t._gsap.x || ta(t, "x"))
          ? r && m === r
            ? "scale" === e
              ? F
              : I
            : ((m = r || {}), "scale" === e ? B : V)
          : t.style && !(0, y._isUndefined)(t.style[e])
          ? R
          : ~e.indexOf("-")
          ? L
          : (0, y._getSetter)(t, e)
      );
    },
    core: { _removeProperty: te, _getMatrix: tm },
  };
  (y.gsap.utils.checkPrefix = H),
    (y.gsap.core.getStyleSaver = Y),
    (e = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
    (r = "rotation,rotationX,rotationY,skewX,skewY"),
    (i = (0, y._forEachName)(
      e +
        "," +
        r +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        x[t] = 1;
      }
    )),
    (0, y._forEachName)(r, function (t) {
      (y._config.units[t] = "deg"), (tp[t] = 1);
    }),
    (O[i[13]] = e + "," + r),
    (0, y._forEachName)(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        O[e[1]] = i[e[0]];
      }
    ),
    (0, y._forEachName)(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        y._config.units[t] = "px";
      }
    ),
    (0, y.gsap).registerPlugin(tC);
  var tA = (0, y.gsap).registerPlugin(tC) || y.gsap;
  tA.core.Tween,
    ((t = "img") =>
      new Promise((e) => {
        h(document.querySelectorAll(t), { background: !0 }, e);
      }))(".tiles__line-img").then(() =>
      document.body.classList.remove("loading")
    );
  let tS = document.querySelector(".frame"),
    tP = document.querySelector(".overlay__path"),
    tD = document.querySelector(".menu-wrap"),
    tz = tD.querySelectorAll(".menu__item"),
    tR = document.querySelector(".button-menu"),
    tL = document.querySelector(".button-enter"),
    tI = tD.querySelector(".button-close"),
    tF = {
      black: document.querySelector(".content__banner-black"),
      x: document.querySelector(".content__banner-x"),
    },
    tB = !1;
  tR.addEventListener("click", () => {
    tB ||
      ((tB = !0),
      tA
        .timeline({ onComplete: () => (tB = !1) })
        .set(tP, { attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" } })
        .to(
          tP,
          {
            duration: 0.8,
            ease: "power4.in",
            attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
          },
          0
        )
        .to(tP, {
          duration: 0.3,
          ease: "power2",
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
          onComplete: () => {
            tS.classList.add("frame--menu-open"),
              tD.classList.add("menu-wrap--open");
          },
        })
        .to(
          [tF.black, tF.x],
          { duration: 0.8, ease: "power3.in", y: -200, stagger: 0.05 },
          0.2
        )
        .set(tz, { opacity: 0 })
        .set(tP, { attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" } })
        .to(tP, {
          duration: 0.3,
          ease: "power2.in",
          attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" },
        })
        .to(tP, {
          duration: 0.8,
          ease: "power4",
          attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
        })
        .to(
          tz,
          {
            duration: 1.1,
            ease: "power4",
            startAt: { y: 150 },
            y: 0,
            opacity: 1,
            stagger: 0.05,
          },
          ">-=1.1"
        ));
  }),
    tL.addEventListener("click", () => {
      tB ||
        ((tB = !0),
        tA
          .timeline({ onComplete: () => (tB = !1) })
          .set(tP, { attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" } })
          .to(
            tP,
            {
              duration: 0.8,
              ease: "power4.in",
              attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
            },
            0
          )
          .to(tP, {
            duration: 0.3,
            ease: "power2",
            attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
            onComplete: () => {
              tS.classList.add("frame--menu-open"),
                tD.classList.add("menu-wrap--open");
            },
          })
          .to(
            [tF.black, tF.x],
            { duration: 0.8, ease: "power3.in", y: -200, stagger: 0.05 },
            0.2
          )
          .set(tz, { opacity: 0 })
          .set(tP, { attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" } })
          .to(tP, {
            duration: 0.3,
            ease: "power2.in",
            attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" },
          })
          .to(tP, {
            duration: 0.8,
            ease: "power4",
            attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
          })
          .to(
            tz,
            {
              duration: 1.1,
              ease: "power4",
              startAt: { y: 150 },
              y: 0,
              opacity: 1,
              stagger: 0.05,
            },
            ">-=1.1"
          ));
    }),
    tI.addEventListener("click", () => {
      tB ||
        ((tB = !0),
        tA
          .timeline({ onComplete: () => (tB = !1) })
          .set(tP, { attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" } })
          .to(
            tP,
            {
              duration: 0.8,
              ease: "power4.in",
              attr: { d: "M 0 0 V 50 Q 50 100 100 50 V 0 z" },
            },
            0
          )
          .to(tP, {
            duration: 0.3,
            ease: "power2",
            attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
            onComplete: () => {
              tS.classList.remove("frame--menu-open"),
                tD.classList.remove("menu-wrap--open");
            },
          })
          .set(tP, { attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" } })
          .to(tP, {
            duration: 0.3,
            ease: "power2.in",
            attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
          })
          .to(tP, {
            duration: 0.8,
            ease: "power4",
            attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
          })
          .to(
            [tF.black, tF.x],
            { duration: 1.1, ease: "power4", y: 0, stagger: -0.05 },
            ">-=1.1"
          )
          .to(
            tz,
            {
              duration: 0.8,
              ease: "power2.in",
              y: 100,
              opacity: 0,
              stagger: -0.05,
            },
            0
          ));
    });
})();
