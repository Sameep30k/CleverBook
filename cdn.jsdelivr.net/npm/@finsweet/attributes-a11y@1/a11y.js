"use strict";
(() => {
  var qe = Object.create;
  var ie = Object.defineProperty;
  var Ge = Object.getOwnPropertyDescriptor;
  var Xe = Object.getOwnPropertyNames;
  var We = Object.getPrototypeOf,
    ze = Object.prototype.hasOwnProperty;
  var Ze = (r, e) => () => (
    e || r((e = { exports: {} }).exports, e), e.exports
  );
  var Qe = (r, e, t, n) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let o of Xe(e))
        !ze.call(r, o) &&
          o !== t &&
          ie(r, o, {
            get: () => e[o],
            enumerable: !(n = Ge(e, o)) || n.enumerable,
          });
    return r;
  };
  var Je = (r, e, t) => (
    (t = r != null ? qe(We(r)) : {}),
    Qe(
      e || !r || !r.__esModule
        ? ie(t, "default", { value: r, enumerable: !0 })
        : t,
      r
    )
  );
  var Ke = Ze((xr, Be) => {
    Be.exports = wt;
    function wt(r, e, t, n) {
      var o, a, i;
      return function () {
        if (
          ((i = this),
          (a = Array.prototype.slice.call(arguments)),
          o && (t || n))
        )
          return;
        if (!t) return d(), (o = setTimeout(f, e)), o;
        (o = setTimeout(d, e)), r.apply(i, a);
        function f() {
          d(), r.apply(i, a);
        }
        function d() {
          clearTimeout(o), (o = null);
        }
      };
    }
  });
  var I = "fs-attributes";
  var B = "a11y",
    ae = "accordion";
  var se = "cmsattribute";
  var ce = "inputcounter";
  var ue = "modal";
  var $ = "support";
  var le = async (...r) => {
    var t;
    let e = [];
    for (let n of r) {
      let o = await ((t = window.fsAttributes[n]) == null ? void 0 : t.loading);
      e.push(o);
    }
    return e;
  };
  var w = () => {};
  function V(r, e, t, n) {
    return r
      ? (r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n))
      : w;
  }
  var j = (r) => r instanceof Element;
  var q = (r) => r != null;
  var K = (r) => typeof r == "string";
  var G = (r, e) => (
    Array.isArray(e) || (e = [e]),
    e.map((n) => r.dispatchEvent(new Event(n, { bubbles: !0 }))).every((n) => n)
  );
  var X = (r) =>
    !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length);
  function fe(r, e, t) {
    var o;
    let n = window.fsAttributes[r];
    return (n.destroy = t || w), (o = n.resolve) == null || o.call(n, e), e;
  }
  var de = (r, e = "1", t = "iife") => {
    let o = `${r}${t === "esm" ? ".esm" : ""}.js`;
    return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-${r}@${e}/${o}`;
  };
  var et = `${I}-${$}`,
    be = async () => {
      var o;
      let { fsAttributes: r, location: e } = window,
        { host: t, searchParams: n } = new URL(e.href);
      return !t.includes("webflow.io") || !n.has(et)
        ? !1
        : (o = r.import) == null
        ? void 0
        : o.call(r, $, "1");
    };
  var pe = (r) => {
    let e = (o, a, i) => {
      let l = r[o],
        { key: f, values: d } = l,
        E;
      if (!a) return `[${f}]`;
      let A = d == null ? void 0 : d[a];
      K(A)
        ? (E = A)
        : (E = A(i && "instanceIndex" in i ? i.instanceIndex : void 0));
      let y = i && "caseInsensitive" in i && i.caseInsensitive ? "i" : "";
      if (!(i != null && i.operator)) return `[${f}="${E}"${y}]`;
      switch (i.operator) {
        case "prefixed":
          return `[${f}^="${E}"${y}]`;
        case "suffixed":
          return `[${f}$="${E}"${y}]`;
        case "contains":
          return `[${f}*="${E}"${y}]`;
      }
    };
    function t(o, a) {
      let i = e("element", o, a),
        l = (a == null ? void 0 : a.scope) || document;
      return a != null && a.all
        ? [...l.querySelectorAll(i)]
        : l.querySelector(i);
    }
    return [
      e,
      t,
      (o, a) => {
        let i = r[a];
        return i ? o.getAttribute(i.key) : null;
      },
    ];
  };
  var _ = {
      preventLoad: { key: `${I}-preventload` },
      debugMode: { key: `${I}-debug` },
      src: { key: "src", values: { finsweet: "@finsweet/attributes" } },
      dev: { key: `${I}-dev` },
    },
    [W, cr] = pe(_);
  var me = (r) => {
    let { currentScript: e } = document,
      t = {};
    if (!e) return { attributes: t, preventsLoad: !1 };
    let o = {
      preventsLoad: K(e.getAttribute(_.preventLoad.key)),
      attributes: t,
    };
    for (let a in r) {
      let i = e.getAttribute(r[a]);
      o.attributes[a] = i;
    }
    return o;
  };
  var Te = ({ scriptAttributes: r, attributeKey: e, version: t, init: n }) => {
      var l;
      tt(), (l = window.fsAttributes)[e] || (l[e] = {});
      let { preventsLoad: o, attributes: a } = me(r),
        i = window.fsAttributes[e];
      (i.version = t),
        (i.init = n),
        o ||
          (window.Webflow || (window.Webflow = []),
          window.Webflow.push(() => n(a)));
    },
    tt = () => {
      let r = nt();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        z(window.fsAttributes, r);
        return;
      }
      let e = rt(r);
      z(e, r),
        ot(e),
        (window.fsAttributes = e),
        (window.FsAttributes = window.fsAttributes),
        be();
    },
    rt = (r) => {
      let e = {
        cms: {},
        push(...t) {
          var n, o;
          for (let [a, i] of t)
            (o = (n = this[a]) == null ? void 0 : n.loading) == null ||
              o.then(i);
        },
        async import(t, n) {
          let o = e[t];
          return (
            o ||
            new Promise((a) => {
              let i = document.createElement("script");
              (i.src = de(t, n)),
                (i.async = !0),
                (i.onload = () => {
                  let [l] = z(e, [t]);
                  a(l);
                }),
                document.head.append(i);
            })
          );
        },
        destroy() {
          var t, n;
          for (let o of r)
            (n = (t = window.fsAttributes[o]) == null ? void 0 : t.destroy) ==
              null || n.call(t);
        },
      };
      return e;
    },
    nt = () => {
      let r = W("src", "finsweet", { operator: "contains" }),
        e = W("dev");
      return [...document.querySelectorAll(`script${r}, script${e}`)].reduce(
        (o, a) => {
          var l;
          let i =
            a.getAttribute(_.dev.key) ||
            ((l = a.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : l[0]);
          return i && !o.includes(i) && o.push(i), o;
        },
        []
      );
    },
    z = (r, e) =>
      e.map((n) => {
        let o = r[n];
        return (
          o ||
          ((r[n] = {}),
          (o = r[n]),
          (o.loading = new Promise((a) => {
            o.resolve = (i) => {
              a(i), delete o.resolve;
            };
          })),
          o)
        );
      }),
    ot = (r) => {
      let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      r.push(...e);
    };
  var Ee = "1.1.3";
  var Ae = [
      "input",
      "select",
      "textarea",
      "a[href]",
      "button",
      "[tabindex]:not(slot)",
      "audio[controls]",
      "video[controls]",
      '[contenteditable]:not([contenteditable="false"])',
      "details>summary:first-of-type",
      "details",
    ],
    L = Ae.join(","),
    ye = typeof Element == "undefined",
    h = ye
      ? function () {}
      : Element.prototype.matches ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector,
    U =
      !ye && Element.prototype.getRootNode
        ? function (r) {
            return r.getRootNode();
          }
        : function (r) {
            return r.ownerDocument;
          },
    xe = function (e, t, n) {
      var o = Array.prototype.slice.apply(e.querySelectorAll(L));
      return t && h.call(e, L) && o.unshift(e), (o = o.filter(n)), o;
    },
    ge = function r(e, t, n) {
      for (var o = [], a = Array.from(e); a.length; ) {
        var i = a.shift();
        if (i.tagName === "SLOT") {
          var l = i.assignedElements(),
            f = l.length ? l : i.children,
            d = r(f, !0, n);
          n.flatten
            ? o.push.apply(o, d)
            : o.push({ scopeParent: i, candidates: d });
        } else {
          var E = h.call(i, L);
          E && n.filter(i) && (t || !e.includes(i)) && o.push(i);
          var A =
              i.shadowRoot ||
              (typeof n.getShadowRoot == "function" && n.getShadowRoot(i)),
            y = !n.shadowRootFilter || n.shadowRootFilter(i);
          if (A && y) {
            var x = r(A === !0 ? i.children : A.children, !0, n);
            n.flatten
              ? o.push.apply(o, x)
              : o.push({ scopeParent: i, candidates: x });
          } else a.unshift.apply(a, i.children);
        }
      }
      return o;
    },
    he = function (e, t) {
      return e.tabIndex < 0 &&
        (t ||
          /^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) ||
          e.isContentEditable) &&
        isNaN(parseInt(e.getAttribute("tabindex"), 10))
        ? 0
        : e.tabIndex;
    },
    at = function (e, t) {
      return e.tabIndex === t.tabIndex
        ? e.documentOrder - t.documentOrder
        : e.tabIndex - t.tabIndex;
    },
    Ie = function (e) {
      return e.tagName === "INPUT";
    },
    st = function (e) {
      return Ie(e) && e.type === "hidden";
    },
    ct = function (e) {
      var t =
        e.tagName === "DETAILS" &&
        Array.prototype.slice.apply(e.children).some(function (n) {
          return n.tagName === "SUMMARY";
        });
      return t;
    },
    ut = function (e, t) {
      for (var n = 0; n < e.length; n++)
        if (e[n].checked && e[n].form === t) return e[n];
    },
    lt = function (e) {
      if (!e.name) return !0;
      var t = e.form || U(e),
        n = function (l) {
          return t.querySelectorAll('input[type="radio"][name="' + l + '"]');
        },
        o;
      if (
        typeof window != "undefined" &&
        typeof window.CSS != "undefined" &&
        typeof window.CSS.escape == "function"
      )
        o = n(window.CSS.escape(e.name));
      else
        try {
          o = n(e.name);
        } catch (i) {
          return (
            console.error(
              "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
              i.message
            ),
            !1
          );
        }
      var a = ut(o, e.form);
      return !a || a === e;
    },
    ft = function (e) {
      return Ie(e) && e.type === "radio";
    },
    dt = function (e) {
      return ft(e) && !lt(e);
    },
    bt = function (e) {
      for (
        var t,
          n = U(e).host,
          o = !!(
            ((t = n) !== null && t !== void 0 && t.ownerDocument.contains(n)) ||
            e.ownerDocument.contains(e)
          );
        !o && n;

      ) {
        var a;
        (n = U(n).host),
          (o = !!(
            (a = n) !== null &&
            a !== void 0 &&
            a.ownerDocument.contains(n)
          ));
      }
      return o;
    },
    ve = function (e) {
      var t = e.getBoundingClientRect(),
        n = t.width,
        o = t.height;
      return n === 0 && o === 0;
    },
    pt = function (e, t) {
      var n = t.displayCheck,
        o = t.getShadowRoot;
      if (getComputedStyle(e).visibility === "hidden") return !0;
      var a = h.call(e, "details>summary:first-of-type"),
        i = a ? e.parentElement : e;
      if (h.call(i, "details:not([open]) *")) return !0;
      if (!n || n === "full" || n === "legacy-full") {
        if (typeof o == "function") {
          for (var l = e; e; ) {
            var f = e.parentElement,
              d = U(e);
            if (f && !f.shadowRoot && o(f) === !0) return ve(e);
            e.assignedSlot
              ? (e = e.assignedSlot)
              : !f && d !== e.ownerDocument
              ? (e = d.host)
              : (e = f);
          }
          e = l;
        }
        if (bt(e)) return !e.getClientRects().length;
        if (n !== "legacy-full") return !0;
      } else if (n === "non-zero-area") return ve(e);
      return !1;
    },
    mt = function (e) {
      if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
        for (var t = e.parentElement; t; ) {
          if (t.tagName === "FIELDSET" && t.disabled) {
            for (var n = 0; n < t.children.length; n++) {
              var o = t.children.item(n);
              if (o.tagName === "LEGEND")
                return h.call(t, "fieldset[disabled] *") ? !0 : !o.contains(e);
            }
            return !0;
          }
          t = t.parentElement;
        }
      return !1;
    },
    F = function (e, t) {
      return !(t.disabled || st(t) || pt(t, e) || ct(t) || mt(t));
    },
    Z = function (e, t) {
      return !(dt(t) || he(t) < 0 || !F(e, t));
    },
    Tt = function (e) {
      var t = parseInt(e.getAttribute("tabindex"), 10);
      return !!(isNaN(t) || t >= 0);
    },
    Et = function r(e) {
      var t = [],
        n = [];
      return (
        e.forEach(function (o, a) {
          var i = !!o.scopeParent,
            l = i ? o.scopeParent : o,
            f = he(l, i),
            d = i ? r(o.candidates) : l;
          f === 0
            ? i
              ? t.push.apply(t, d)
              : t.push(l)
            : n.push({
                documentOrder: a,
                tabIndex: f,
                item: o,
                isScope: i,
                content: d,
              });
        }),
        n
          .sort(at)
          .reduce(function (o, a) {
            return (
              a.isScope ? o.push.apply(o, a.content) : o.push(a.content), o
            );
          }, [])
          .concat(t)
      );
    },
    Re = function (e, t) {
      t = t || {};
      var n;
      return (
        t.getShadowRoot
          ? (n = ge([e], t.includeContainer, {
              filter: Z.bind(null, t),
              flatten: !1,
              getShadowRoot: t.getShadowRoot,
              shadowRootFilter: Tt,
            }))
          : (n = xe(e, t.includeContainer, Z.bind(null, t))),
        Et(n)
      );
    },
    Se = function (e, t) {
      t = t || {};
      var n;
      return (
        t.getShadowRoot
          ? (n = ge([e], t.includeContainer, {
              filter: F.bind(null, t),
              flatten: !0,
              getShadowRoot: t.getShadowRoot,
            }))
          : (n = xe(e, t.includeContainer, F.bind(null, t))),
        n
      );
    },
    N = function (e, t) {
      if (((t = t || {}), !e)) throw new Error("No node provided");
      return h.call(e, L) === !1 ? !1 : Z(t, e);
    },
    vt = Ae.concat("iframe").join(","),
    P = function (e, t) {
      if (((t = t || {}), !e)) throw new Error("No node provided");
      return h.call(e, vt) === !1 ? !1 : F(t, e);
    };
  function we(r, e) {
    var t = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(r);
      e &&
        (n = n.filter(function (o) {
          return Object.getOwnPropertyDescriptor(r, o).enumerable;
        })),
        t.push.apply(t, n);
    }
    return t;
  }
  function _e(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? we(Object(t), !0).forEach(function (n) {
            At(r, n, t[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
        : we(Object(t)).forEach(function (n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return r;
  }
  function At(r, e, t) {
    return (
      (e = xt(e)),
      e in r
        ? Object.defineProperty(r, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (r[e] = t),
      r
    );
  }
  function yt(r, e) {
    if (typeof r != "object" || r === null) return r;
    var t = r[Symbol.toPrimitive];
    if (t !== void 0) {
      var n = t.call(r, e || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(r);
  }
  function xt(r) {
    var e = yt(r, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  var Ne = {
      activateTrap: function (e, t) {
        if (e.length > 0) {
          var n = e[e.length - 1];
          n !== t && n.pause();
        }
        var o = e.indexOf(t);
        o === -1 || e.splice(o, 1), e.push(t);
      },
      deactivateTrap: function (e, t) {
        var n = e.indexOf(t);
        n !== -1 && e.splice(n, 1), e.length > 0 && e[e.length - 1].unpause();
      },
    },
    gt = function (e) {
      return (
        e.tagName &&
        e.tagName.toLowerCase() === "input" &&
        typeof e.select == "function"
      );
    },
    ht = function (e) {
      return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
    },
    O = function (e) {
      return e.key === "Tab" || e.keyCode === 9;
    },
    It = function (e) {
      return O(e) && !e.shiftKey;
    },
    Rt = function (e) {
      return O(e) && e.shiftKey;
    },
    Ce = function (e) {
      return setTimeout(e, 0);
    },
    Oe = function (e, t) {
      var n = -1;
      return (
        e.every(function (o, a) {
          return t(o) ? ((n = a), !1) : !0;
        }),
        n
      );
    },
    C = function (e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      return typeof e == "function" ? e.apply(void 0, n) : e;
    },
    M = function (e) {
      return e.target.shadowRoot && typeof e.composedPath == "function"
        ? e.composedPath()[0]
        : e.target;
    },
    St = [],
    De = function (e, t) {
      var n = (t == null ? void 0 : t.document) || document,
        o = (t == null ? void 0 : t.trapStack) || St,
        a = _e(
          {
            returnFocusOnDeactivate: !0,
            escapeDeactivates: !0,
            delayInitialFocus: !0,
            isKeyForward: It,
            isKeyBackward: Rt,
          },
          t
        ),
        i = {
          containers: [],
          containerGroups: [],
          tabbableGroups: [],
          nodeFocusedBeforeActivation: null,
          mostRecentlyFocusedNode: null,
          active: !1,
          paused: !1,
          delayInitialFocusTimer: void 0,
        },
        l,
        f = function (s, c, u) {
          return s && s[c] !== void 0 ? s[c] : a[u || c];
        },
        d = function (s) {
          return i.containerGroups.findIndex(function (c) {
            var u = c.container,
              b = c.tabbableNodes;
            return (
              u.contains(s) ||
              b.find(function (p) {
                return p === s;
              })
            );
          });
        },
        E = function (s) {
          var c = a[s];
          if (typeof c == "function") {
            for (
              var u = arguments.length, b = new Array(u > 1 ? u - 1 : 0), p = 1;
              p < u;
              p++
            )
              b[p - 1] = arguments[p];
            c = c.apply(void 0, b);
          }
          if ((c === !0 && (c = void 0), !c)) {
            if (c === void 0 || c === !1) return c;
            throw new Error(
              "`".concat(
                s,
                "` was specified but was not a node, or did not return a node"
              )
            );
          }
          var T = c;
          if (typeof c == "string" && ((T = n.querySelector(c)), !T))
            throw new Error(
              "`".concat(s, "` as selector refers to no known node")
            );
          return T;
        },
        A = function () {
          var s = E("initialFocus");
          if (s === !1) return !1;
          if (s === void 0)
            if (d(n.activeElement) >= 0) s = n.activeElement;
            else {
              var c = i.tabbableGroups[0],
                u = c && c.firstTabbableNode;
              s = u || E("fallbackFocus");
            }
          if (!s)
            throw new Error(
              "Your focus-trap needs to have at least one focusable element"
            );
          return s;
        },
        y = function () {
          if (
            ((i.containerGroups = i.containers.map(function (s) {
              var c = Re(s, a.tabbableOptions),
                u = Se(s, a.tabbableOptions);
              return {
                container: s,
                tabbableNodes: c,
                focusableNodes: u,
                firstTabbableNode: c.length > 0 ? c[0] : null,
                lastTabbableNode: c.length > 0 ? c[c.length - 1] : null,
                nextTabbableNode: function (p) {
                  var T =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !0,
                    v = u.findIndex(function (g) {
                      return g === p;
                    });
                  if (!(v < 0))
                    return T
                      ? u.slice(v + 1).find(function (g) {
                          return N(g, a.tabbableOptions);
                        })
                      : u
                          .slice(0, v)
                          .reverse()
                          .find(function (g) {
                            return N(g, a.tabbableOptions);
                          });
                },
              };
            })),
            (i.tabbableGroups = i.containerGroups.filter(function (s) {
              return s.tabbableNodes.length > 0;
            })),
            i.tabbableGroups.length <= 0 && !E("fallbackFocus"))
          )
            throw new Error(
              "Your focus-trap must have at least one container with at least one tabbable node in it at all times"
            );
        },
        x = function m(s) {
          if (s !== !1 && s !== n.activeElement) {
            if (!s || !s.focus) {
              m(A());
              return;
            }
            s.focus({ preventScroll: !!a.preventScroll }),
              (i.mostRecentlyFocusedNode = s),
              gt(s) && s.select();
          }
        },
        J = function (s) {
          var c = E("setReturnFocus", s);
          return c || (c === !1 ? !1 : s);
        },
        D = function (s) {
          var c = M(s);
          if (!(d(c) >= 0)) {
            if (C(a.clickOutsideDeactivates, s)) {
              l.deactivate({
                returnFocus:
                  a.returnFocusOnDeactivate && !P(c, a.tabbableOptions),
              });
              return;
            }
            C(a.allowOutsideClick, s) || s.preventDefault();
          }
        },
        ee = function (s) {
          var c = M(s),
            u = d(c) >= 0;
          u || c instanceof Document
            ? u && (i.mostRecentlyFocusedNode = c)
            : (s.stopImmediatePropagation(),
              x(i.mostRecentlyFocusedNode || A()));
        },
        He = function (s) {
          var c =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            u = M(s);
          y();
          var b = null;
          if (i.tabbableGroups.length > 0) {
            var p = d(u),
              T = p >= 0 ? i.containerGroups[p] : void 0;
            if (p < 0)
              c
                ? (b =
                    i.tabbableGroups[i.tabbableGroups.length - 1]
                      .lastTabbableNode)
                : (b = i.tabbableGroups[0].firstTabbableNode);
            else if (c) {
              var v = Oe(i.tabbableGroups, function (Y) {
                var H = Y.firstTabbableNode;
                return u === H;
              });
              if (
                (v < 0 &&
                  (T.container === u ||
                    (P(u, a.tabbableOptions) &&
                      !N(u, a.tabbableOptions) &&
                      !T.nextTabbableNode(u, !1))) &&
                  (v = p),
                v >= 0)
              ) {
                var g = v === 0 ? i.tabbableGroups.length - 1 : v - 1,
                  $e = i.tabbableGroups[g];
                b = $e.lastTabbableNode;
              } else O(s) || (b = T.nextTabbableNode(u, !1));
            } else {
              var S = Oe(i.tabbableGroups, function (Y) {
                var H = Y.lastTabbableNode;
                return u === H;
              });
              if (
                (S < 0 &&
                  (T.container === u ||
                    (P(u, a.tabbableOptions) &&
                      !N(u, a.tabbableOptions) &&
                      !T.nextTabbableNode(u))) &&
                  (S = p),
                S >= 0)
              ) {
                var Ve = S === i.tabbableGroups.length - 1 ? 0 : S + 1,
                  je = i.tabbableGroups[Ve];
                b = je.firstTabbableNode;
              } else O(s) || (b = T.nextTabbableNode(u));
            }
          } else b = E("fallbackFocus");
          b && (O(s) && s.preventDefault(), x(b));
        },
        te = function (s) {
          if (ht(s) && C(a.escapeDeactivates, s) !== !1) {
            s.preventDefault(), l.deactivate();
            return;
          }
          (a.isKeyForward(s) || a.isKeyBackward(s)) &&
            He(s, a.isKeyBackward(s));
        },
        re = function (s) {
          var c = M(s);
          d(c) >= 0 ||
            C(a.clickOutsideDeactivates, s) ||
            C(a.allowOutsideClick, s) ||
            (s.preventDefault(), s.stopImmediatePropagation());
        },
        ne = function () {
          if (i.active)
            return (
              Ne.activateTrap(o, l),
              (i.delayInitialFocusTimer = a.delayInitialFocus
                ? Ce(function () {
                    x(A());
                  })
                : x(A())),
              n.addEventListener("focusin", ee, !0),
              n.addEventListener("mousedown", D, { capture: !0, passive: !1 }),
              n.addEventListener("touchstart", D, { capture: !0, passive: !1 }),
              n.addEventListener("click", re, { capture: !0, passive: !1 }),
              n.addEventListener("keydown", te, { capture: !0, passive: !1 }),
              l
            );
        },
        oe = function () {
          if (i.active)
            return (
              n.removeEventListener("focusin", ee, !0),
              n.removeEventListener("mousedown", D, !0),
              n.removeEventListener("touchstart", D, !0),
              n.removeEventListener("click", re, !0),
              n.removeEventListener("keydown", te, !0),
              l
            );
        };
      return (
        (l = {
          get active() {
            return i.active;
          },
          get paused() {
            return i.paused;
          },
          activate: function (s) {
            if (i.active) return this;
            var c = f(s, "onActivate"),
              u = f(s, "onPostActivate"),
              b = f(s, "checkCanFocusTrap");
            b || y(),
              (i.active = !0),
              (i.paused = !1),
              (i.nodeFocusedBeforeActivation = n.activeElement),
              c && c();
            var p = function () {
              b && y(), ne(), u && u();
            };
            return b
              ? (b(i.containers.concat()).then(p, p), this)
              : (p(), this);
          },
          deactivate: function (s) {
            if (!i.active) return this;
            var c = _e(
              {
                onDeactivate: a.onDeactivate,
                onPostDeactivate: a.onPostDeactivate,
                checkCanReturnFocus: a.checkCanReturnFocus,
              },
              s
            );
            clearTimeout(i.delayInitialFocusTimer),
              (i.delayInitialFocusTimer = void 0),
              oe(),
              (i.active = !1),
              (i.paused = !1),
              Ne.deactivateTrap(o, l);
            var u = f(c, "onDeactivate"),
              b = f(c, "onPostDeactivate"),
              p = f(c, "checkCanReturnFocus"),
              T = f(c, "returnFocus", "returnFocusOnDeactivate");
            u && u();
            var v = function () {
              Ce(function () {
                T && x(J(i.nodeFocusedBeforeActivation)), b && b();
              });
            };
            return T && p
              ? (p(J(i.nodeFocusedBeforeActivation)).then(v, v), this)
              : (v(), this);
          },
          pause: function () {
            return i.paused || !i.active ? this : ((i.paused = !0), oe(), this);
          },
          unpause: function () {
            return !i.paused || !i.active
              ? this
              : ((i.paused = !1), y(), ne(), this);
          },
          updateContainerElements: function (s) {
            var c = [].concat(s).filter(Boolean);
            return (
              (i.containers = c.map(function (u) {
                return typeof u == "string" ? n.querySelector(u) : u;
              })),
              i.active && y(),
              this
            );
          },
        }),
        l.updateContainerElements(e),
        l
      );
    };
  var Pe = Je(Ke(), 1);
  var k = "role";
  var Le = "tabindex";
  var Q = "aria-expanded";
  var R = "aria-controls";
  var Ue = "contenteditable";
  var Me = () => {
      let e = [...document.querySelectorAll(`[${R}]`)].map(Nt).filter(q);
      return () => {
        for (let t of e) t();
      };
    },
    Nt = (r) => {
      let e = r.getAttribute(R);
      if (!e) return;
      let t = document.getElementById(e);
      if (!t) {
        r.removeAttribute(R);
        return;
      }
      let n = r.hasAttribute(Q),
        o = t.getAttribute(k) === "dialog",
        a = o ? De(t, { returnFocusOnDeactivate: !0 }) : null;
      if (!n && !o) return;
      Fe(r, t);
      let l = (0, Pe.default)(() => {
          Fe(r, t) ? a == null || a.activate() : a == null || a.deactivate();
        }, 100),
        f = new MutationObserver(l);
      return (
        f.observe(t, { attributes: !0, attributeFilter: ["style", "class"] }),
        () => {
          f.disconnect(), a == null || a.deactivate();
        }
      );
    },
    Fe = (r, e) => {
      let t = X(e);
      return r.setAttribute(Q, String(t)), t;
    };
  var Ct = [
      HTMLAnchorElement,
      HTMLButtonElement,
      HTMLInputElement,
      HTMLTextAreaElement,
      HTMLSelectElement,
      HTMLVideoElement,
      HTMLAudioElement,
    ],
    ke = () => {
      let r = V(window, "keydown", (e) => {
        let { key: t } = e;
        if (t === "Escape") return Dt(e);
        if (t === "Enter" || t === " ") return Ot(e);
      });
      return () => {
        r();
      };
    },
    Ot = (r) => {
      let { target: e } = r;
      j(e) &&
        e.getAttribute(Le) &&
        (Ct.some((t) => e instanceof t) ||
          e.closest(`[${Ue}]`) ||
          (r.preventDefault(), G(e, "click")));
    },
    Dt = (r) => {
      let { target: e } = r;
      if (!j(e)) return;
      let t = e.closest(`[${k}="${"dialog"}"]`);
      if (!t || !t.id) return;
      let n = `[${R}="${t.id}"]`,
        o = t.querySelector(n) || document.querySelector(n);
      o && (r.preventDefault(), o.click());
    };
  var Ye = async () => {
    await le(se, ue, ce, ae);
    let r = ke(),
      e = Me();
    return fe(B, void 0, () => {
      r(), e();
    });
  };
  Te({ init: Ye, version: Ee, attributeKey: B });
})();
/*! Bundled license information:

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.0.1
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

focus-trap/dist/focus-trap.esm.js:
  (*!
  * focus-trap 7.2.0
  * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
  *)
*/
