var u = (l, h, s) =>
  new Promise((e, r) => {
    var g = (a) => {
        try {
          d(s.next(a));
        } catch (n) {
          r(n);
        }
      },
      p = (a) => {
        try {
          d(s.throw(a));
        } catch (n) {
          r(n);
        }
      },
      d = (a) => (a.done ? e(a.value) : Promise.resolve(a.value).then(g, p));
    d((s = s.apply(l, h)).next());
  });
(function () {
  "use strict";
  let l;
  const h = new Uint8Array(16);
  function s() {
    if (
      !l &&
      ((l =
        typeof crypto != "undefined" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)),
      !l)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    return l(h);
  }
  const e = [];
  for (let n = 0; n < 256; ++n) e.push((n + 256).toString(16).slice(1));
  function r(n, t = 0) {
    return (
      e[n[t + 0]] +
      e[n[t + 1]] +
      e[n[t + 2]] +
      e[n[t + 3]] +
      "-" +
      e[n[t + 4]] +
      e[n[t + 5]] +
      "-" +
      e[n[t + 6]] +
      e[n[t + 7]] +
      "-" +
      e[n[t + 8]] +
      e[n[t + 9]] +
      "-" +
      e[n[t + 10]] +
      e[n[t + 11]] +
      e[n[t + 12]] +
      e[n[t + 13]] +
      e[n[t + 14]] +
      e[n[t + 15]]
    );
  }
  const p = {
    randomUUID:
      typeof crypto != "undefined" &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
  };
  function d(n, t, i) {
    if (p.randomUUID && !t && !n) return p.randomUUID();
    n = n || {};
    const o = n.random || (n.rng || s)();
    if (((o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), t)) {
      i = i || 0;
      for (let c = 0; c < 16; ++c) t[i + c] = o[c];
      return t;
    }
    return r(o);
  }
  const a = {
    appId: null,
    apolloAnonId: null,
    onLoad: function (t) {
      return u(this, arguments, function* ({ appId: n }) {
        (this.appId = n),
          (this.host =
            "https://aplo-evnt.com/api/v1/intent_pixel/track_request"),
          (this.apolloAnonId = localStorage.getItem("apolloAnonId")),
          this.apolloAnonId ||
            ((this.apolloAnonId = this.generateApolloAnonId()),
            localStorage.setItem("apolloAnonId", this.apolloAnonId));
        let i = location.href;
        yield this.sendPageVisitEvent(window.location.href);
        let o = this;
        document.body.addEventListener(
          "click",
          () => {
            requestAnimationFrame(() => {
              i !== location.href &&
                ((i = location.href), o.sendPageVisitEvent(i));
            });
          },
          !0
        );
      });
    },
    sendPageVisitEvent: function (n) {
      return u(this, null, function* () {
        const t = {
            apollo_anon_id: this.apolloAnonId,
            event_type: "page_visit",
            page: n,
          },
          i = JSON.parse(localStorage.getItem("eventQueue")) || [];
        i.push(t),
          localStorage.setItem("eventQueue", JSON.stringify(i)),
          this.batchProcessEvents();
      });
    },
    batchProcessEvents: function () {
      return u(this, null, function* () {
        const n = JSON.parse(localStorage.getItem("eventQueue")) || [],
          t = 1,
          i = 100;
        let o = [];
        for (; n.length >= t && o.length < i; ) {
          const c = n.shift();
          o.push(c);
        }
        if (o.length > 0)
          try {
            yield this.sendEvents(o),
              localStorage.setItem(
                "eventQueue",
                JSON.stringify(n.slice(o.length))
              );
          } catch (c) {
            console.log("ERROR", c);
          }
      });
    },
    sendEvents: function (n) {
      return u(this, null, function* () {
        yield fetch(`${this.host}?app_id=${this.appId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      });
    },
    generateApolloAnonId: function () {
      return d();
    },
  };
  window.trackingFunctions = a;
})();
