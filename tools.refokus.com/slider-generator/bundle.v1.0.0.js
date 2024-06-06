!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.WebflowTools = t())
    : (e.WebflowTools = t());
})(self, function () {
  return (function () {
    "use strict";
    var e = {
        578: function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.SLICK_CSS_CDN =
              t.SLICK_JS_CDN =
              t.MOBILE_VARIABLE_WIDTH_ATTR =
              t.TABLET_VARIABLE_WIDTH_ATTR =
              t.MOBILE_SLIDES_TO_SCROLL_ATTR =
              t.MOBILE_SLIDES_TO_SHOW_ATTR =
              t.TABLET_SLIDES_TO_SCROLL_ATTR =
              t.TABLET_SLIDES_TO_SHOW_ATTR =
              t.NEXT_ARROW_ATTR =
              t.PREV_ARROW_ATTR =
              t.CSS_EASE_ATTR =
              t.VARIABLE_WIDTH_ATTR =
              t.INFINITE_ATTR =
              t.SLIDES_TO_SCROLL_ATTR =
              t.AUTOPLAY_SPEED_ATTR =
              t.AUTOPLAY_ATTR =
              t.SLIDER_SPEED_ATTR =
              t.SLIDES_TO_SHOW_ATTR =
              t.MIN_WIDTH_ATTR =
              t.SLIDER_ATTR =
                void 0),
            (t.SLIDER_ATTR = "r-slider"),
            (t.MIN_WIDTH_ATTR = "min-width"),
            (t.SLIDES_TO_SHOW_ATTR = "slides-to-show"),
            (t.SLIDER_SPEED_ATTR = "speed"),
            (t.AUTOPLAY_ATTR = "slider-autoplay"),
            (t.AUTOPLAY_SPEED_ATTR = "autoplay-speed"),
            (t.SLIDES_TO_SCROLL_ATTR = "slides-to-scroll"),
            (t.INFINITE_ATTR = "infinite"),
            (t.VARIABLE_WIDTH_ATTR = "variable-width"),
            (t.CSS_EASE_ATTR = "css-ease"),
            (t.PREV_ARROW_ATTR = "prev-arrow"),
            (t.NEXT_ARROW_ATTR = "next-arrow"),
            (t.TABLET_SLIDES_TO_SHOW_ATTR = "tablet-slides-to-show"),
            (t.TABLET_SLIDES_TO_SCROLL_ATTR = "tablet-slides-to-scroll"),
            (t.MOBILE_SLIDES_TO_SHOW_ATTR = "mobile-slides-to-show"),
            (t.MOBILE_SLIDES_TO_SCROLL_ATTR = "mobile-slides-to-scroll"),
            (t.TABLET_VARIABLE_WIDTH_ATTR = "tablet-variable-width"),
            (t.MOBILE_VARIABLE_WIDTH_ATTR = "mobile-variable-width"),
            (t.SLICK_JS_CDN =
              "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"),
            (t.SLICK_CSS_CDN =
              "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css");
        },
        170: function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.createLink = t.createScript = void 0),
            (t.createScript = function (e) {
              var t = document.createElement("script");
              return (t.type = "text/javascript"), t.setAttribute("src", e), t;
            }),
            (t.createLink = function (e) {
              var t = document.createElement("link");
              return (t.rel = "stylesheet"), t.setAttribute("href", e), t;
            });
        },
      },
      t = {};
    function T(r) {
      var o = t[r];
      if (void 0 !== o) return o.exports;
      var i = (t[r] = { exports: {} });
      return e[r](i, i.exports, T), i.exports;
    }
    var r = {};
    return (
      (function () {
        var e = r;
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = T(578),
          o = T(170);
        if (!window.slick) {
          var i = o.createLink(t.SLICK_CSS_CDN),
            _ = o.createScript(t.SLICK_JS_CDN),
            l = document.getElementsByTagName("head")[0];
          l.appendChild(i),
            l.appendChild(_),
            _.addEventListener("load", function () {
              document
                .querySelectorAll("[" + t.SLIDER_ATTR + "]")
                .forEach(function (e) {
                  var T,
                    r,
                    o,
                    i,
                    _,
                    l,
                    S = {
                      arrows:
                        ((l = {
                          minWidth: Number(e.getAttribute(t.MIN_WIDTH_ATTR)),
                          slidesToShow: Number(
                            e.getAttribute(t.SLIDES_TO_SHOW_ATTR)
                          ),
                          slidesToScroll: Number(
                            e.getAttribute(t.SLIDES_TO_SCROLL_ATTR)
                          ),
                          tabletSlidesToShow: Number(
                            e.getAttribute(t.TABLET_SLIDES_TO_SHOW_ATTR)
                          ),
                          tabletSlidesToScroll: Number(
                            e.getAttribute(t.TABLET_SLIDES_TO_SCROLL_ATTR)
                          ),
                          mobileSlidesToShow: Number(
                            e.getAttribute(t.MOBILE_SLIDES_TO_SHOW_ATTR)
                          ),
                          mobileSlidesToScroll: Number(
                            e.getAttribute(t.MOBILE_SLIDES_TO_SCROLL_ATTR)
                          ),
                          variableWidth:
                            "true" ===
                            (null ===
                              (T = e.getAttribute(t.VARIABLE_WIDTH_ATTR)) ||
                            void 0 === T
                              ? void 0
                              : T.toLowerCase()),
                          tabletVariableWidth:
                            "true" ===
                            (null ===
                              (r = e.getAttribute(
                                t.TABLET_VARIABLE_WIDTH_ATTR
                              )) || void 0 === r
                              ? void 0
                              : r.toLowerCase()),
                          mobileVariableWidth:
                            "true" ===
                            (null ===
                              (o = e.getAttribute(
                                t.MOBILE_VARIABLE_WIDTH_ATTR
                              )) || void 0 === o
                              ? void 0
                              : o.toLowerCase()),
                          sliderSpeed: Number(
                            e.getAttribute(t.SLIDER_SPEED_ATTR)
                          ),
                          autoplay:
                            "true" ===
                            (null === (i = e.getAttribute(t.AUTOPLAY_ATTR)) ||
                            void 0 === i
                              ? void 0
                              : i.toLowerCase()),
                          autoplaySpeed: Number(
                            e.getAttribute(t.AUTOPLAY_SPEED_ATTR)
                          ),
                          infinite:
                            null === e.getAttribute(t.INFINITE_ATTR) ||
                            "true" ===
                              (null === (_ = e.getAttribute(t.INFINITE_ATTR)) ||
                              void 0 === _
                                ? void 0
                                : _.toLowerCase()),
                          cssEase: e.getAttribute(t.CSS_EASE_ATTR),
                          prevArrowSelector: e.getAttribute(t.PREV_ARROW_ATTR),
                          nextArrowSelector: e.getAttribute(t.NEXT_ARROW_ATTR),
                        }).prevArrowSelector ||
                          l.nextArrowSelector) &&
                        !0,
                      prevArrow: document.querySelector(l.prevArrowSelector),
                      nextArrow: document.querySelector(l.nextArrowSelector),
                      slidesToShow: l.slidesToShow || 4,
                      slidesToScroll: l.slidesToScroll || 4,
                      speed: l.sliderSpeed || 300,
                      autoplay: l.autoplaySpeed || !1,
                      autoplaySpeed: l.autoplaySpeed || 3e3,
                      dots: !1,
                      infinite: l.infinite,
                      variableWidth: l.variableWidth || !1,
                      cssEase: l.cssEase || "linear",
                      responsive: [
                        { breakpoint: l.minWidth, settings: "unslick" },
                        {
                          breakpoint: 991,
                          settings: {
                            slidesToShow: l.tabletSlidesToShow || 1,
                            slidesToScroll: l.tabletSlidesToScroll || 1,
                            variableWidth: l.tabletVariableWidth,
                          },
                        },
                        {
                          breakpoint: 767,
                          settings: {
                            slidesToShow: l.mobileSlidesToShow || 1,
                            slidesToScroll: l.mobileSlidesToScroll || 1,
                            variableWidth: l.mobileVariableWidth,
                          },
                        },
                      ],
                    };
                  window.$(e).slick(S);
                });
            });
        }
      })(),
      r
    );
  })();
});
