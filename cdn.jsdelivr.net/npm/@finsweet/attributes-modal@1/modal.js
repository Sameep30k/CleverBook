"use strict";
(() => {
  var gt = Object.defineProperty;
  var St = (t, e, o) =>
    e in t
      ? gt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o);
  var X = (t, e, o) => (St(t, typeof e != "symbol" ? e + "" : e, o), o);
  var d = "fs-attributes";
  var W = "a11y";
  var z = "animation";
  var Q = "cmsattribute";
  var T = "modal";
  var D = "support";
  var J = async (...t) => {
    var o;
    let e = [];
    for (let i of t) {
      let r = await ((o = window.fsAttributes[i]) == null ? void 0 : o.loading);
      e.push(r);
    }
    return e;
  };
  var E = class {
    static activateAlerts() {
      this.alertsActivated = !0;
    }
    static alert(e, o) {
      if ((this.alertsActivated && window.alert(e), o === "error"))
        throw new Error(e);
    }
  };
  X(E, "alertsActivated", !1);
  var b = () => {};
  function g(t, e, o, i) {
    return t
      ? (t.addEventListener(e, o, i), () => t.removeEventListener(e, o, i))
      : b;
  }
  var x = (t, e) => !!t && e.includes(t);
  var M = (t) => t != null;
  var S = (t) => typeof t == "string";
  var L = (t) => {
    let e = t.split("-"),
      o = parseInt(e[e.length - 1]);
    if (!isNaN(o)) return o;
  };
  var Y = (t) => Object.keys(t);
  var $ = (t) =>
    !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  function k(t, e, o) {
    var r;
    let i = window.fsAttributes[t];
    return (i.destroy = o || b), (r = i.resolve) == null || r.call(i, e), e;
  }
  var U = (t, e = "1", o = "iife") => {
    let r = `${t}${o === "esm" ? ".esm" : ""}.js`;
    return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-${t}@${e}/${r}`;
  };
  var Ut = U(z, "1", "esm"),
    w = async () => {
      let { fsAttributes: t } = window;
      t.animation || (t.animation = {});
      let { animation: e } = t;
      if (e.import) return e.import;
      try {
        return (e.import = import(Ut)), e.import;
      } catch (o) {
        E.alert(`${o}`, "error");
        return;
      }
    };
  var wt = `${d}-${D}`,
    Z = async () => {
      var r;
      let { fsAttributes: t, location: e } = window,
        { host: o, searchParams: i } = new URL(e.href);
      return !o.includes("webflow.io") || !i.has(wt)
        ? !1
        : (r = t.import) == null
        ? void 0
        : r.call(t, D, "1");
    };
  var N = (t) => (e) => `${t}${e ? `-${e}` : ""}`,
    B = (t) => {
      let e = (r, n, s) => {
        let a = t[r],
          { key: c, values: p } = a,
          l;
        if (!n) return `[${c}]`;
        let m = p == null ? void 0 : p[n];
        S(m)
          ? (l = m)
          : (l = m(s && "instanceIndex" in s ? s.instanceIndex : void 0));
        let u = s && "caseInsensitive" in s && s.caseInsensitive ? "i" : "";
        if (!(s != null && s.operator)) return `[${c}="${l}"${u}]`;
        switch (s.operator) {
          case "prefixed":
            return `[${c}^="${l}"${u}]`;
          case "suffixed":
            return `[${c}$="${l}"${u}]`;
          case "contains":
            return `[${c}*="${l}"${u}]`;
        }
      };
      function o(r, n) {
        let s = e("element", r, n),
          a = (n == null ? void 0 : n.scope) || document;
        return n != null && n.all
          ? [...a.querySelectorAll(s)]
          : a.querySelector(s);
      }
      return [
        e,
        o,
        (r, n) => {
          let s = t[n];
          return s ? r.getAttribute(s.key) : null;
        },
      ];
    };
  var I = {
      preventLoad: { key: `${d}-preventload` },
      debugMode: { key: `${d}-debug` },
      src: { key: "src", values: { finsweet: "@finsweet/attributes" } },
      dev: { key: `${d}-dev` },
    },
    [V, we] = B(I);
  var tt = (t) => {
    let { currentScript: e } = document,
      o = {};
    if (!e) return { attributes: o, preventsLoad: !1 };
    let r = {
      preventsLoad: S(e.getAttribute(I.preventLoad.key)),
      attributes: o,
    };
    for (let n in t) {
      let s = e.getAttribute(t[n]);
      r.attributes[n] = s;
    }
    return r;
  };
  var et = ({ scriptAttributes: t, attributeKey: e, version: o, init: i }) => {
      var a;
      Nt(), (a = window.fsAttributes)[e] || (a[e] = {});
      let { preventsLoad: r, attributes: n } = tt(t),
        s = window.fsAttributes[e];
      (s.version = o),
        (s.init = i),
        r ||
          (window.Webflow || (window.Webflow = []),
          window.Webflow.push(() => i(n)));
    },
    Nt = () => {
      let t = Ct();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        F(window.fsAttributes, t);
        return;
      }
      let e = Bt(t);
      F(e, t),
        Kt(e),
        (window.fsAttributes = e),
        (window.FsAttributes = window.fsAttributes),
        Z();
    },
    Bt = (t) => {
      let e = {
        cms: {},
        push(...o) {
          var i, r;
          for (let [n, s] of o)
            (r = (i = this[n]) == null ? void 0 : i.loading) == null ||
              r.then(s);
        },
        async import(o, i) {
          let r = e[o];
          return (
            r ||
            new Promise((n) => {
              let s = document.createElement("script");
              (s.src = U(o, i)),
                (s.async = !0),
                (s.onload = () => {
                  let [a] = F(e, [o]);
                  n(a);
                }),
                document.head.append(s);
            })
          );
        },
        destroy() {
          var o, i;
          for (let r of t)
            (i = (o = window.fsAttributes[r]) == null ? void 0 : o.destroy) ==
              null || i.call(o);
        },
      };
      return e;
    },
    Ct = () => {
      let t = V("src", "finsweet", { operator: "contains" }),
        e = V("dev");
      return [...document.querySelectorAll(`script${t}, script${e}`)].reduce(
        (r, n) => {
          var a;
          let s =
            n.getAttribute(I.dev.key) ||
            ((a = n.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : a[0]);
          return s && !r.includes(s) && r.push(s), r;
        },
        []
      );
    },
    F = (t, e) =>
      e.map((i) => {
        let r = t[i];
        return (
          r ||
          ((t[i] = {}),
          (r = t[i]),
          (r.loading = new Promise((n) => {
            r.resolve = (s) => {
              n(s), delete r.resolve;
            };
          })),
          r)
        );
      }),
    Kt = (t) => {
      let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      t.push(...e);
    };
  var ot = "1.1.3";
  var rt = () => {
    var t, e;
    return (e = (t = window.fsAttributes).import) == null
      ? void 0
      : e.call(t, W, "1");
  };
  var nt = (t = 21) =>
    crypto
      .getRandomValues(new Uint8Array(t))
      .reduce(
        (e, o) => (
          (o &= 63),
          o < 36
            ? (e += o.toString(36))
            : o < 62
            ? (e += (o - 26).toString(36).toUpperCase())
            : o > 62
            ? (e += "-")
            : (e += "_"),
          e
        ),
        ""
      );
  var H = (t) => {
    if (!t.id || document.getElementById(t.id) !== t) {
      let e = nt();
      return (t.id = e), e;
    }
    return t.id;
  };
  var st = (t, e) => {
    let o = t.getAttribute(e);
    return o ? L(o) : void 0;
  };
  var j = "role";
  var it = "tabindex";
  var at = "aria-haspopup";
  var ct = "aria-expanded";
  var lt = "aria-controls",
    q = "aria-roledescription";
  var ut = "aria-hidden",
    pt = "aria-modal";
  var mt = (t, e, o) => {
    let i = H(t),
      r = $(t);
    t.setAttribute(j, "dialog"), t.setAttribute(pt, "true");
    for (let n of [...e, ...o]) {
      if (n.hasAttribute(ut)) continue;
      H(n);
      let s = e.includes(n) ? "open" : "close";
      n.setAttribute(it, "0"),
        n.setAttribute(j, "button"),
        n.setAttribute(lt, i),
        n.setAttribute(at, "dialog"),
        n.setAttribute(ct, String(r)),
        n.hasAttribute(q) || n.setAttribute(q, `${s}-modal-trigger`);
    }
  };
  var f = `fs-${T}`,
    ht = "modal",
    Pt = "open",
    vt = "close",
    Dt = "animation",
    Mt = "easing",
    Lt = "duration",
    Yt = "display",
    G = {
      element: {
        key: `${f}-element`,
        values: { modal: N(ht), open: N(Pt), close: N(vt) },
      },
      animation: { key: `${f}-${Dt}` },
      easing: { key: `${f}-${Mt}` },
      duration: { key: `${f}-${Lt}` },
      display: { key: `${f}-${Yt}` },
    },
    [At, _, y] = B(G),
    Tt = `${f}-anchor`,
    dt = [
      "block",
      "inline",
      "inline-block",
      "flex",
      "inline-flex",
      "grid",
      "inline-grid",
      "none",
      "contents",
    ],
    Et = "flex";
  var C = (t, { animations: e, easings: o }) => {
    let i = y(t, "animation"),
      r = x(i, Y(e)) ? e[i] : e.fade,
      n = y(t, "duration"),
      s = y(t, "easing"),
      a = y(t, "display"),
      c = x(s, o) ? s : void 0,
      p = n ? parseFloat(n) / 1e3 : void 0,
      l = x(a, dt) ? a : void 0;
    return { actions: r, duration: p, easing: c, display: l };
  };
  var ft = (t, e, o, i, r) => {
      let { parentElement: n } = t;
      if (!n) return;
      let { actions: s, duration: a, easing: c, display: p } = i,
        l = $t(t, r),
        m = new Comment(Tt);
      n.insertBefore(m, t);
      let u = !1,
        R,
        It = e.map((A) =>
          g(A, "click", async (K) => {
            K.preventDefault(),
              !(u || R) &&
                ((u = !0),
                await Promise.all([
                  s.animateIn(t, {
                    duration: a,
                    easing: c,
                    display: p || Et,
                    target: document.body,
                  }),
                  Promise.all(
                    l.map(
                      ([
                        O,
                        { actions: h, duration: P, easing: v, display: Rt },
                      ]) =>
                        h.animateIn(O, {
                          display: Rt,
                          duration: P || a,
                          easing: v || c,
                        })
                    )
                  ),
                ]),
                (u = !1),
                (R = !0));
          })
        ),
        _t = o.map((A) =>
          g(A, "click", async (K) => {
            K.preventDefault(),
              !(u || R === !1) &&
                ((u = !0),
                await Promise.all([
                  s.animateOut(t, {
                    duration: a,
                    easing: c,
                    target: n,
                    insertAfter: m,
                  }),
                  Promise.all(
                    l.map(([O, { actions: h, duration: P, easing: v }]) =>
                      h.animateOut(O, { duration: P || a, easing: v || c })
                    )
                  ),
                ]),
                n.insertBefore(t, m),
                (u = !1),
                (R = !1));
          })
        );
      return () => {
        for (let A of It) A();
        for (let A of _t) A();
      };
    },
    $t = (t, e) => {
      let i = ["animation", "duration", "easing", "display"]
        .map((s) => At(s))
        .join(",");
      return [...t.querySelectorAll(i)].map((s) => {
        let a = C(s, e);
        return [s, a];
      });
    };
  var bt = (t, e) => {
    let { parentElement: o } = t;
    if (!o) return;
    let i = st(t, G.element.key),
      r = _("open", { instanceIndex: i, all: !0 }),
      n = _("close", { instanceIndex: i, all: !0 });
    if (!r.length && !n.length) return;
    let s = C(t, e);
    return mt(t, r, n), ft(t, r, n, s, e);
  };
  var xt = async () => {
    await J(Q);
    let t = _("modal", { operator: "prefixed", all: !0 }),
      e = await w();
    if (!e) return k(T, t);
    let o = t.map((i) => bt(i, e)).filter(M);
    return (
      rt(),
      k(T, t, () => {
        for (let i of o) i();
      })
    );
  };
  et({ init: xt, version: ot, attributeKey: T });
  w();
})();
