// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "41",

      macros: [
        { function: "__e" },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_useEcommerceDataLayer: true,
          vtp_doubleClick: true,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_enableEcommerce: true,
          vtp_trackingId: "UA-216152292-1",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_ecommerceIsEnabled: true,
          vtp_enableGA4Schema: true,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
      ],
      tags: [
        {
          function: "__ua",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 9, 0]],
          once_per_event: true,
          vtp_overrideGaSettings: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_gaSettings: ["macro", 1],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: true,
          tag_id: 4,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "LandingPage",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 1],
          vtp_eventAction: "Submit",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 6,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "389291172",
          vtp_conversionLabel: "HQRcCPbEh44DEKS50LkB",
          vtp_rdp: false,
          vtp_url: ["macro", 4],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 8,
        },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: false,
          vtp_enableUrlPassthrough: false,
          vtp_enableCookieOverrides: false,
          tag_id: 9,
        },
        {
          function: "__sp",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_enableDynamicRemarketing: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_conversionId: "11038109629",
          vtp_customParamsFormat: "NONE",
          vtp_rdp: false,
          vtp_enableOgtRmktParams: true,
          vtp_enableUserId: true,
          vtp_url: ["macro", 4],
          vtp_enableRdpCheckbox: true,
          vtp_enableConversionLinkingSettings: true,
          tag_id: 10,
        },
        {
          function: "__bzi",
          metadata: ["map"],
          once_per_event: true,
          vtp_id: "4331140",
          tag_id: 11,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "11038109629",
          vtp_conversionLabel: "Y-HdCM26yIQYEL3fsI8p",
          vtp_rdp: false,
          vtp_url: ["macro", 4],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 19,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "11038109629",
          vtp_conversionLabel: "hzuiCMq6yIQYEL3fsI8p",
          vtp_rdp: false,
          vtp_url: ["macro", 4],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 20,
        },
        {
          function: "__paused",
          vtp_originalTagType: "twitter_website_tag",
          tag_id: 22,
        },
        { function: "__paused", vtp_originalTagType: "opt", tag_id: 23 },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Hubspot calendar Clicks",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 1],
          vtp_eventAction: "Request a Demo Click",
          vtp_eventLabel: "Request a Demo Hubspot Click",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 27,
        },
        { function: "__paused", vtp_originalTagType: "baut", tag_id: 28 },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 30 },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "56889423_5",
          tag_id: 35,
        },
        { function: "__cl", tag_id: 36 },
        {
          function: "__html",
          metadata: ["map"],
          once_per_load: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","691776562467007");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=691776562467007\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 12,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(a,e,b,f,g,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);c.async=1;c.src="https://www.clarity.ms/tag/"+g+"?ref\\x3dgtm2";d=e.getElementsByTagName(f)[0];d.parentNode.insertBefore(c,d)})(window,document,"clarity","script","eunmrr98um");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 13,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript" id="hs-script-loader" async defer data-gtmsrc="//js.hs-scripts.com/21811999.js"\u003E\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 25,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cimg src="https://ct.capterra.com/capterra_tracker.gif?vid=2228243\u0026amp;vkey=9fa5cc12a95ae79189db92b57694a9ff"\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 32,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(){var a=window.reb2b=window.reb2b||[];if(!a.invoked){a.invoked=!0;a.methods=["identify","collect"];a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);b.unshift(c);a.push(b);return a}};for(var d=0;d\u003Ca.methods.length;d++){var e=a.methods[d];a[e]=a.factory(e)}a.load=function(c){var b=document.createElement("script");b.type="text/javascript";b.async=!0;b.src="https://s3-us-west-2.amazonaws.com/b2bjsstore/b/"+c+"/reb2b.js.gz";c=document.getElementsByTagName("script")[0];\nc.parentNode.insertBefore(b,c)};a.SNIPPET_VERSION="1.0.1";a.load("Y4O7Z0H34PNX")}}();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 33,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Efunction initApollo(){var b=Math.random().toString(36).substring(7),a=document.createElement("script");a.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache\\x3d"+b;a.async=!0;a.defer=!0;a.onload=function(){window.trackingFunctions.onLoad({appId:"66333fcccfea6e01c777d4a6"})};document.head.appendChild(a)}initApollo();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 34,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 2], arg1: "comp-kxk9ofca1" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.formSubmit" },
        {
          function: "_re",
          arg0: ["macro", 3],
          arg1: "(^$|((^|,)56889423_5($|,)))",
        },
        { function: "_cn", arg0: ["macro", 5], arg1: "/app/thanks" },
        { function: "_cn", arg0: ["macro", 5], arg1: "/thankyou" },
        { function: "_cn", arg0: ["macro", 6], arg1: "Request a Demo" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.click" },
        { function: "_cn", arg0: ["macro", 5], arg1: "app" },
        { function: "_cn", arg0: ["macro", 5], arg1: "webflow" },
        { function: "_cn", arg0: ["macro", 5], arg1: "test" },
        { function: "_cn", arg0: ["macro", 5], arg1: "stage" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0, 3, 4, 5, 8, 9, 11, 12, 15, 16, 17, 19, 20, 13, 14],
        ],
        [
          ["if", 1, 2, 3],
          ["add", 1, 2],
        ],
        [
          ["if", 0, 4],
          ["add", 6],
        ],
        [
          ["if", 0, 5],
          ["add", 7, 18],
          ["block", 12],
        ],
        [
          ["if", 6, 7],
          ["add", 10],
        ],
        [
          ["if", 0, 8],
          ["block", 12, 15, 19, 20],
        ],
        [
          ["if", 0, 9],
          ["block", 20],
        ],
        [
          ["if", 0, 10],
          ["block", 20],
        ],
        [
          ["if", 0, 11],
          ["block", 20],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__bzi",
        [46, "a"],
        [52, "b", ["require", "injectScript"]],
        [52, "c", ["require", "setInWindow"]],
        ["c", "_linkedin_data_partner_id", [17, [15, "a"], "id"]],
        [
          "b",
          "https://snap.licdn.com/li.lms-analytics/insight.min.js",
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [
        50,
        "__cl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnClick"]],
        ["b"],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__fsl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnFormSubmit"]],
        [
          52,
          "c",
          [
            8,
            "waitForTags",
            [17, [15, "a"], "waitForTags"],
            "checkValidation",
            [17, [15, "a"], "checkValidation"],
            "waitForTagsTimeout",
            [17, [15, "a"], "waitForTagsTimeout"],
          ],
        ],
        [52, "d", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
        ["b", [15, "c"], [15, "d"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [50, "__paused", [46, "a"], [2, [15, "a"], "gtmOnFailure", [7]]],
    ],
    entities: {
      __e: { 2: true, 4: true },
    },
    blob: { 1: "41" },
    permissions: {
      __bzi: {
        access_globals: {
          keys: [
            {
              key: "_linkedin_data_partner_id",
              read: true,
              write: true,
              execute: false,
            },
          ],
        },
        inject_script: {
          urls: ["https://snap.licdn.com/li.lms-analytics/insight.min.js"],
        },
      },
      __cl: { detect_click_events: {} },
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __fsl: { detect_form_submit_events: { allowWaitForTags: true } },
      __paused: {},
    },

    security_groups: {
      google: ["__cl", "__e"],
      nonGoogleScripts: ["__bzi"],
    },
  };

  var ca,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    fa = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ja = fa(this),
    la = function (a, b) {
      if (b)
        a: {
          for (var c = ja, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            h = c[g],
            m = b(h);
          m != h &&
            null != m &&
            ea(c, g, { configurable: !0, writable: !0, value: m });
        }
    },
    ma = function (a) {
      return (a.raw = a);
    },
    na = function (a, b) {
      a.raw = b;
      return a;
    },
    pa = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: da(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    qa = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ra = function (a) {
      return a instanceof Array ? a : qa(pa(a));
    },
    sa =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  la("Object.assign", function (a) {
    return a || sa;
  });
  var ta =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ua;
  if ("function" == typeof Object.setPrototypeOf) ua = Object.setPrototypeOf;
  else {
    var va;
    a: {
      var wa = { a: !0 },
        xa = {};
      try {
        xa.__proto__ = wa;
        va = xa.a;
        break a;
      } catch (a) {}
      va = !1;
    }
    ua = va
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ya = ua,
    za = function (a, b) {
      a.prototype = ta(b.prototype);
      a.prototype.constructor = a;
      if (ya) ya(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Zn = b.prototype;
    },
    Aa = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Ca = this || self,
    Da = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Ea = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    Fa = function (a, b, c) {
      Fa =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? Da
          : Ea;
      return Fa.apply(null, arguments);
    },
    Ga = function (a) {
      return a;
    };
  var Ha = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ia = function () {
    this.m = {};
    this.J = {};
  };
  ca = Ia.prototype;
  ca.get = function (a) {
    return this.m["dust." + a];
  };
  ca.set = function (a, b) {
    a = "dust." + a;
    this.J.hasOwnProperty(a) || (this.m[a] = b);
  };
  ca.Sh = function (a, b) {
    this.set(a, b);
    this.J["dust." + a] = !0;
  };
  ca.has = function (a) {
    return this.m.hasOwnProperty("dust." + a);
  };
  ca.xf = function (a) {
    a = "dust." + a;
    this.J.hasOwnProperty(a) || delete this.m[a];
  };
  var Ka = function () {};
  Ka.prototype.reset = function () {};
  var La = function (a, b) {
    this.T = a;
    this.parent = b;
    this.m = this.F = void 0;
    this.M = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ia();
  };
  La.prototype.add = function (a, b) {
    Ma(this, a, b, !1);
  };
  var Ma = function (a, b, c, d) {
    d ? a.values.Sh(b, c) : a.values.set(b, c);
  };
  La.prototype.set = function (a, b) {
    !this.values.has(a) && this.parent && this.parent.has(a)
      ? this.parent.set(a, b)
      : this.values.set(a, b);
  };
  La.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  La.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Na = function (a) {
    var b = new La(a.T, a);
    a.F && (b.F = a.F);
    b.M = a.M;
    b.m = a.m;
    return b;
  };
  La.prototype.J = function () {
    return this.T;
  };
  function Oa(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = Qa(a, b[d])), c instanceof Ha);
      d++
    );
    return c;
  }
  function Qa(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || "function" !== typeof c.invoke)
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.F;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var Sa = function () {
    this.M = new Ka();
    this.m = new La(this.M);
  };
  Sa.prototype.J = function () {
    return this.M;
  };
  Sa.prototype.execute = function (a) {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.F(b);
  };
  Sa.prototype.F = function () {
    for (var a, b = 0; b < arguments.length; b++) a = Qa(this.m, arguments[b]);
    return a;
  };
  Sa.prototype.T = function (a) {
    var b = Na(this.m);
    b.m = a;
    for (var c, d = 1; d < arguments.length; d++) c = Qa(b, arguments[d]);
    return c;
  };
  var Ta = function () {
    Ia.call(this);
    this.F = !1;
  };
  za(Ta, Ia);
  var Ua = function (a, b) {
    var c = [],
      d;
    for (d in a.m)
      if (a.m.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  Ta.prototype.set = function (a, b) {
    this.F || Ia.prototype.set.call(this, a, b);
  };
  Ta.prototype.Sh = function (a, b) {
    this.F || Ia.prototype.Sh.call(this, a, b);
  };
  Ta.prototype.xf = function (a) {
    this.F || Ia.prototype.xf.call(this, a);
  };
  Ta.prototype.Nb = function () {
    this.F = !0;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Va = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Wa = function (a) {
      if (null == a) return String(a);
      var b = Va.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Xa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Ya = function (a) {
      if (!a || "object" != Wa(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Xa(a, "constructor") &&
          !Xa(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Xa(a, b);
    },
    k = function (a, b) {
      var c = b || ("array" == Wa(a) ? [] : {}),
        d;
      for (d in a)
        if (Xa(a, d)) {
          var e = a[d];
          "array" == Wa(e)
            ? ("array" != Wa(c[d]) && (c[d] = []), (c[d] = k(e, c[d])))
            : Ya(e)
            ? (Ya(c[d]) || (c[d] = {}), (c[d] = k(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Za(a) {
    if (void 0 == a || Array.isArray(a) || Ya(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function $a(a) {
    return (
      ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
      ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a))
    );
  }
  var ab = function (a) {
    this.m = [];
    this.J = !1;
    this.F = new Ta();
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        ($a(b) ? (this.m[Number(b)] = a[Number(b)]) : this.F.set(b, a[b]));
  };
  ca = ab.prototype;
  ca.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.m.length; c++) {
      var d = this.m[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof ab
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  ca.set = function (a, b) {
    if (!this.J)
      if ("length" === a) {
        if (!$a(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.m.length = Number(b);
      } else $a(a) ? (this.m[Number(a)] = b) : this.F.set(a, b);
  };
  ca.get = function (a) {
    return "length" === a
      ? this.length()
      : $a(a)
      ? this.m[Number(a)]
      : this.F.get(a);
  };
  ca.length = function () {
    return this.m.length;
  };
  ca.fc = function () {
    for (var a = Ua(this.F, 1), b = 0; b < this.m.length; b++) a.push(b + "");
    return new ab(a);
  };
  var bb = function (a, b) {
    $a(b) ? delete a.m[Number(b)] : a.F.xf(b);
  };
  ca = ab.prototype;
  ca.pop = function () {
    return this.m.pop();
  };
  ca.push = function () {
    return this.m.push.apply(this.m, Array.prototype.slice.call(arguments));
  };
  ca.shift = function () {
    return this.m.shift();
  };
  ca.splice = function (a, b) {
    return new ab(this.m.splice.apply(this.m, arguments));
  };
  ca.unshift = function () {
    return this.m.unshift.apply(this.m, Array.prototype.slice.call(arguments));
  };
  ca.has = function (a) {
    return ($a(a) && this.m.hasOwnProperty(a)) || this.F.has(a);
  };
  ca.Nb = function () {
    this.J = !0;
    Object.freeze(this.m);
    this.F.Nb();
  };
  function cb(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var db = function () {
    Ta.call(this);
  };
  za(db, Ta);
  db.prototype.fc = function () {
    return new ab(Ua(this, 1));
  };
  var eb = function (a) {
    for (var b = Ua(a, 3), c = new ab(), d = 0; d < b.length; d++) {
      var e = new ab(b[d]);
      c.push(e);
    }
    return c;
  };
  function fb() {
    for (var a = gb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function hb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var gb, ib;
  function jb(a) {
    gb = gb || hb();
    ib = ib || fb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(gb[m], gb[n], gb[p], gb[q]);
    }
    return b.join("");
  }
  function kb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = ib[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    gb = gb || hb();
    ib = ib || fb();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 !== g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 !== h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var lb = {};
  function mb(a, b) {
    lb[a] = lb[a] || [];
    lb[a][b] = !0;
  }
  function nb(a) {
    var b = lb[a];
    if (!b || 0 === b.length) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    0 < d && c.push(String.fromCharCode(d));
    return jb(c.join("")).replace(/\.+$/, "");
  }
  function ob() {
    for (var a = [], b = lb.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return 0 < a.length ? a : void 0;
  }
  function pb() {}
  function qb(a) {
    return "function" === typeof a;
  }
  function l(a) {
    return "string" === typeof a;
  }
  function rb(a) {
    return "number" === typeof a && !isNaN(a);
  }
  function sb(a) {
    return Array.isArray(a) ? a : [a];
  }
  function tb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function ub(a, b) {
    if (!rb(a) || !rb(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function vb(a, b) {
    for (var c = new wb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function z(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function xb(a) {
    return (
      !!a &&
      ("[object Arguments]" === Object.prototype.toString.call(a) ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function yb(a) {
    return Math.round(Number(a)) || 0;
  }
  function zb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function Ab(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function Bb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function Cb() {
    return new Date(Date.now());
  }
  function Db() {
    return Cb().getTime();
  }
  var wb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  wb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  wb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  function Eb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function Fb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function Gb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function Hb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function Ib(a, b) {
    return a.substring(0, b.length) === b;
  }
  function Jb(a, b) {
    var c = G;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (0 <= b.indexOf(d)) return;
    }
    return d;
  }
  function Kb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var Lb = /^\w{1,9}$/;
  function Mb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    z(a, function (d, e) {
      Lb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function Nb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function Ob(a) {
    if (a) {
      var b = a.split(",");
      if (2 === b.length && b[0] === b[1]) return b[0];
    }
    return a;
  }
  var Pb,
    Qb = function () {
      if (void 0 === Pb) {
        var a = null,
          b = Ca.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Ga,
              createScript: Ga,
              createScriptURL: Ga,
            });
          } catch (c) {
            Ca.console && Ca.console.error(c.message);
          }
          Pb = a;
        } else Pb = a;
      }
      return Pb;
    };
  var Rb = function (a) {
    this.m = a;
  };
  Rb.prototype.toString = function () {
    return this.m + "";
  };
  var Sb = function (a) {
      return a instanceof Rb && a.constructor === Rb
        ? a.m
        : "type_error:TrustedResourceUrl";
    },
    Tb = {},
    Ub = function (a) {
      var b = a,
        c = Qb(),
        d = c ? c.createScriptURL(b) : b;
      return new Rb(d, Tb);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Vb = ma([""]),
    Wb = na(["\x00"], ["\\0"]),
    Xb = na(["\n"], ["\\n"]),
    Yb = na(["\x00"], ["\\u0000"]);
  function Zb(a) {
    return -1 === a.toString().indexOf("`");
  }
  Zb(function (a) {
    return a(Vb);
  }) ||
    Zb(function (a) {
      return a(Wb);
    }) ||
    Zb(function (a) {
      return a(Xb);
    }) ||
    Zb(function (a) {
      return a(Yb);
    });
  var $b = function (a) {
    this.m = a;
  };
  $b.prototype.toString = function () {
    return this.m;
  };
  var ac = new $b("about:invalid#zClosurez");
  var bc = function (a) {
    this.gm = a;
  };
  function cc(a) {
    return new bc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var dc = [
    cc("data"),
    cc("http"),
    cc("https"),
    cc("mailto"),
    cc("ftp"),
    new bc(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function ec(a, b) {
    b = void 0 === b ? dc : b;
    if (a instanceof $b) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof bc && d.gm(a)) return new $b(a);
    }
  }
  function fc(a) {
    var b;
    b = void 0 === b ? dc : b;
    return ec(a, b) || ac;
  }
  var gc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function hc(a) {
    var b;
    if (a instanceof $b)
      if (a instanceof $b) b = a.m;
      else throw Error("");
    else b = gc.test(a) ? a : void 0;
    return b;
  }
  var jc = function () {
    this.m = ic[0].toLowerCase();
  };
  jc.prototype.toString = function () {
    return this.m;
  };
  var kc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var lc = {},
    mc = function (a) {
      this.m = a;
    };
  mc.prototype.toString = function () {
    return this.m.toString();
  };
  function nc(a, b) {
    var c = [new jc()];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof jc) g = f.m;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function oc(a, b) {
    var c = hc(b);
    void 0 !== c && (a.action = c);
  }
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function pc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var G = window,
    H = document,
    qc = navigator,
    rc = function () {
      var a;
      try {
        a = qc.serviceWorker;
      } catch (b) {
        return;
      }
      return a;
    },
    sc = H.currentScript && H.currentScript.src,
    tc = function (a, b) {
      var c = G[a];
      G[a] = void 0 === c ? b : c;
      return G[a];
    },
    uc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    vc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    wc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function xc(a, b, c) {
    b &&
      z(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var yc = function (a, b, c, d, e) {
      var f = H.createElement("script");
      xc(f, d, vc);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var g;
      g = Ub(pc(a));
      f.src = Sb(g);
      var h,
        m,
        n,
        p =
          null ==
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(m, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      uc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = H.getElementsByTagName("script")[0] || H.body || H.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    zc = function () {
      if (sc) {
        var a = sc.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Ac = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = H.createElement("iframe")), (h = !0));
      xc(g, c, wc);
      d &&
        z(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      void 0 !== a && (g.src = a);
      if (h) {
        var m = (H.body && H.body.lastChild) || H.body || H.head;
        m.parentNode.insertBefore(g, m);
      }
      uc(g, b);
      return g;
    },
    Bc = function (a, b, c, d) {
      var e = new Image(1, 1);
      xc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
      return e;
    },
    Cc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Dc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      G.setTimeout(a, 0);
    },
    Ec = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Fc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Gc = function (a) {
      var b = H.createElement("div"),
        c = b,
        d,
        e = pc("A<div>" + a + "</div>"),
        f = Qb(),
        g = f ? f.createHTML(e) : e;
      d = new mc(g, lc);
      if (1 === c.nodeType) {
        var h = c.tagName;
        if ("SCRIPT" === h || "STYLE" === h) throw Error("");
      }
      c.innerHTML =
        d instanceof mc && d.constructor === mc ? d.m : "type_error:SafeHtml";
      b = b.lastChild;
      for (var m = []; b.firstChild; ) m.push(b.removeChild(b.firstChild));
      return m;
    },
    Hc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Ic = function (a) {
      var b;
      try {
        b = qc.sendBeacon && qc.sendBeacon(a);
      } catch (c) {
        mb("TAGGING", 15);
      }
      b || Bc(a);
    },
    Jc = function (a, b) {
      try {
        if (qc.sendBeacon) return qc.sendBeacon(a, b);
      } catch (c) {
        mb("TAGGING", 15);
      }
      return !1;
    },
    Kc = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
    },
    Lc = function (a, b, c) {
      if ("fetch" in G) {
        var d = Object.assign({}, Kc);
        b && (d.body = b);
        c &&
          (c.attributionReporting &&
            (d.attributionReporting = c.attributionReporting),
          c.browsingTopics && (d.browsingTopics = c.browsingTopics));
        try {
          return G.fetch(a, d), !0;
        } catch (e) {}
      }
      if (c && c.noFallback) return !1;
      if (b) return Jc(a, b);
      Ic(a);
      return !0;
    },
    Mc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Nc = function () {
      var a = G.performance;
      if (a && qb(a.now)) return a.now();
    },
    Oc = function () {
      return G.performance || void 0;
    };
  function Pc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Qc(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Rc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Sc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return -1 < String(a).indexOf(String(b));
  }
  function Tc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Uc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = G.location.href;
        b instanceof db &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  }
  var Vc = function (a, b) {
    Ta.call(this);
    this.M = a;
    this.T = b;
  };
  za(Vc, Ta);
  ca = Vc.prototype;
  ca.toString = function () {
    return this.M;
  };
  ca.getName = function () {
    return this.M;
  };
  ca.fc = function () {
    return new ab(Ua(this, 1));
  };
  ca.invoke = function (a) {
    return this.T.apply(
      new Wc(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  ca.hb = function (a) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (b) {}
  };
  var Wc = function (a, b) {
    this.m = a;
    this.H = b;
  };
  Wc.prototype.evaluate = function (a) {
    var b = this.H;
    return Array.isArray(a) ? Qa(b, a) : a;
  };
  Wc.prototype.getName = function () {
    return this.m.getName();
  };
  Wc.prototype.J = function () {
    return this.H.J();
  };
  var Xc = function () {
    this.map = new Map();
  };
  Xc.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  Xc.prototype.get = function (a) {
    return this.map.get(a);
  };
  var Yc = function () {
    this.keys = [];
    this.values = [];
  };
  Yc.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  Yc.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function Zc() {
    try {
      return Map ? new Xc() : new Yc();
    } catch (a) {
      return new Yc();
    }
  }
  var $c = function (a) {
    if (a instanceof $c) return a;
    if (Za(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  $c.prototype.getValue = function () {
    return this.value;
  };
  $c.prototype.toString = function () {
    return String(this.value);
  };
  var bd = function (a) {
    Ta.call(this);
    this.promise = a;
    this.set("then", ad(this));
    this.set("catch", ad(this, !0));
    this.set("finally", ad(this, !1, !0));
  };
  za(bd, db);
  var ad = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new Vc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Vc || (d = void 0);
      e instanceof Vc || (e = void 0);
      var f = Na(this.H),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        h = a.promise.then(d && g(d), e && g(e));
      return new bd(h);
    });
  };
  function J(a, b, c) {
    var d = Zc(),
      e = function (g, h) {
        for (var m = Ua(g, 1), n = 0; n < m.length; n++)
          h[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        var h = d.get(g);
        if (h) return h;
        if (g instanceof ab) {
          var m = [];
          d.set(g, m);
          for (var n = g.fc(), p = 0; p < n.length(); p++)
            m[n.get(p)] = f(g.get(n.get(p)));
          return m;
        }
        if (g instanceof bd) return g.promise;
        if (g instanceof db) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof Vc) {
          var r = function () {
            for (
              var u = Array.prototype.slice.call(arguments, 0), v = 0;
              v < u.length;
              v++
            )
              u[v] = cd(u[v], b, c);
            var w = new La(b ? b.J() : new Ka());
            b && (w.m = b.m);
            return f(g.invoke.apply(g, [w].concat(u)));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var t = !1;
        switch (c) {
          case 1:
            t = !0;
            break;
          case 2:
            t = !1;
            break;
          case 3:
            t = !1;
            break;
          default:
        }
        if (g instanceof $c && t) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (null === g) return null;
        }
      };
    return f(a);
  }
  function cd(a, b, c) {
    var d = Zc(),
      e = function (g, h) {
        for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]));
      },
      f = function (g) {
        var h = d.get(g);
        if (h) return h;
        if (Array.isArray(g) || xb(g)) {
          var m = new ab([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Ya(g)) {
          var p = new db();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if ("function" === typeof g) {
          var q = new Vc("", function () {
            for (
              var y = Array.prototype.slice.call(arguments, 0), x = 0;
              x < y.length;
              x++
            )
              y[x] = J(this.evaluate(y[x]), b, c);
            return f((0, this.H.M)(g, g, y));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var v = typeof g;
        if (null === g || "string" === v || "number" === v || "boolean" === v)
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (void 0 !== g && w) return new $c(g);
      };
    return f(a);
  }
  function dd() {
    var a = !1;
    return a;
  }
  var ed = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof ab)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new ab(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new ab(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new ab(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = cb(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : bb(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new ab(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = cb(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : bb(this, d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var fd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  za(fd, Error);
  var gd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    hd = new Ha("break"),
    id = new Ha("continue");
  function jd(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function kd(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function ld(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof ab))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (null === a || void 0 === a) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (dd()) throw new fd(d);
      throw Error(d);
    }
    var e = "number" === typeof a;
    if ("boolean" === typeof a || e) {
      if ("toString" === b) {
        if (e && c.length()) {
          var f = J(c.get(0));
          try {
            return a.toString(f);
          } catch (x) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (dd()) throw new fd(g);
      throw Error(g);
    }
    if ("string" === typeof a) {
      if (gd.hasOwnProperty(b)) {
        var h = 2;
        h = 1;
        var m = J(c, void 0, h);
        return cd(a[b].apply(a, m), this.H);
      }
      var n = "TypeError: " + b + " is not a function";
      if (dd()) throw new fd(n);
      throw Error(n);
    }
    if (a instanceof ab) {
      if (a.has(b)) {
        var p = a.get(b);
        if (p instanceof Vc) {
          var q = cb(c);
          q.unshift(this.H);
          return p.invoke.apply(p, q);
        }
        var r = "TypeError: " + b + " is not a function";
        if (dd()) throw new fd(r);
        throw Error(r);
      }
      if (0 <= ed.supportedMethods.indexOf(b)) {
        var t = cb(c);
        t.unshift(this.H);
        return ed[b].apply(a, t);
      }
    }
    if (a instanceof Vc || a instanceof db) {
      if (a.has(b)) {
        var u = a.get(b);
        if (u instanceof Vc) {
          var v = cb(c);
          v.unshift(this.H);
          return u.invoke.apply(u, v);
        }
        var w = "TypeError: " + b + " is not a function";
        if (dd()) throw new fd(w);
        throw Error(w);
      }
      if ("toString" === b) return a instanceof Vc ? a.getName() : a.toString();
      if ("hasOwnProperty" === b) return a.has.apply(a, cb(c));
    }
    if (a instanceof $c && "toString" === b) return a.toString();
    var y = "TypeError: Object has no '" + b + "' property.";
    if (dd()) throw new fd(y);
    throw Error(y);
  }
  function md(a, b) {
    a = this.evaluate(a);
    if ("string" !== typeof a)
      throw Error("Invalid key name given for assignment.");
    var c = this.H;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function od() {
    var a = Na(this.H),
      b = Oa(a, Array.prototype.slice.apply(arguments));
    if (b instanceof Ha) return b;
  }
  function pd() {
    return hd;
  }
  function qd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ha) return d;
    }
  }
  function rd() {
    for (var a = this.H, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if ("string" === typeof c) {
        var d = this.evaluate(arguments[b + 1]);
        Ma(a, c, d, !0);
      }
    }
  }
  function sd() {
    return id;
  }
  function td(a, b) {
    return new Ha(a, this.evaluate(b));
  }
  function ud(a, b) {
    var c = new ab();
    b = this.evaluate(b);
    for (var d = 0; d < b.length; d++) c.push(b[d]);
    var e = [51, a, c].concat(
      Array.prototype.splice.call(arguments, 2, arguments.length - 2)
    );
    this.H.add(a, this.evaluate(e));
  }
  function vd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function wd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof $c,
      d = b instanceof $c;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function xd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function yd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Oa(f, d);
      if (g instanceof Ha) {
        if ("break" === g.type) break;
        if ("return" === g.type) return g;
      }
    }
  }
  function zd(a, b, c) {
    if ("string" === typeof b)
      return yd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof db || b instanceof ab || b instanceof Vc) {
      var d = b.fc(),
        e = d.length();
      return yd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  function Ad(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return zd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Bd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return zd(
      function (e) {
        var f = Na(d);
        Ma(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Cd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return zd(
      function (e) {
        var f = Na(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Dd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return Ed(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Fd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return Ed(
      function (e) {
        var f = Na(d);
        Ma(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Gd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return Ed(
      function (e) {
        var f = Na(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Ed(a, b, c) {
    if ("string" === typeof b)
      return yd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof ab)
      return yd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (dd()) throw new fd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Hd(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var t = f.get(r);
        q.add(t, p.get(t));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof ab))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.H;
    d = this.evaluate(d);
    var h = Na(g);
    for (e(g, h); Qa(h, b); ) {
      var m = Oa(h, d);
      if (m instanceof Ha) {
        if ("break" === m.type) break;
        if ("return" === m.type) return m;
      }
      var n = Na(g);
      e(h, n);
      Qa(n, c);
      h = n;
    }
  }
  function Id(a, b) {
    var c = this.H,
      d = this.evaluate(b);
    if (!(d instanceof ab))
      throw Error("Error: non-List value given for Fn argument names.");
    var e = Array.prototype.slice.call(arguments, 2);
    return new Vc(
      a,
      (function () {
        return function (f) {
          var g = Na(c);
          void 0 === g.m && (g.m = this.H.m);
          for (
            var h = Array.prototype.slice.call(arguments, 0), m = 0;
            m < h.length;
            m++
          )
            if (((h[m] = this.evaluate(h[m])), h[m] instanceof Ha)) return h[m];
          for (var n = d.get("length"), p = 0; p < n; p++)
            p < h.length ? g.add(d.get(p), h[p]) : g.add(d.get(p), void 0);
          g.add("arguments", new ab(h));
          var q = Oa(g, e);
          if (q instanceof Ha) return "return" === q.type ? q.data : q;
        };
      })()
    );
  }
  function Jd(a) {
    a = this.evaluate(a);
    var b = this.H;
    if (Kd && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function Ld(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (void 0 === a || null === a) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (dd()) throw new fd(d);
      throw Error(d);
    }
    if (a instanceof db || a instanceof ab || a instanceof Vc) c = a.get(b);
    else if ("string" === typeof a)
      "length" === b ? (c = a.length) : $a(b) && (c = a[b]);
    else if (a instanceof $c) return;
    return c;
  }
  function Md(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Nd(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Od(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof $c && (a = a.getValue());
    b instanceof $c && (b = b.getValue());
    return a === b;
  }
  function Pd(a, b) {
    return !Od.call(this, a, b);
  }
  function Qd(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Oa(this.H, d);
    if (e instanceof Ha) return e;
  }
  var Kd = !1;
  function Rd(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Sd(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Td() {
    for (var a = new ab(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Ud() {
    for (var a = new db(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Vd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function Wd(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function Xd(a) {
    return -this.evaluate(a);
  }
  function Yd(a) {
    return !this.evaluate(a);
  }
  function Zd(a, b) {
    return !wd.call(this, a, b);
  }
  function $d() {
    return null;
  }
  function ae(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function be(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function ce(a) {
    return this.evaluate(a);
  }
  function de() {
    return Array.prototype.slice.apply(arguments);
  }
  function ee(a) {
    return new Ha("return", this.evaluate(a));
  }
  function fe(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (null === a || void 0 === a) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (dd()) throw new fd(d);
      throw Error(d);
    }
    (a instanceof Vc || a instanceof ab || a instanceof db) && a.set(b, c);
    return c;
  }
  function ge(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function he(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, h = 0; h < d.length; h++)
      if (g || a === this.evaluate(d[h]))
        if (((f = this.evaluate(e[h])), f instanceof Ha)) {
          var m = f.type;
          if ("break" === m) return;
          if ("return" === m || "continue" === m) return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof Ha && ("return" === f.type || "continue" === f.type))
    )
      return f;
  }
  function ie(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function je(a) {
    a = this.evaluate(a);
    return a instanceof Vc ? "function" : typeof a;
  }
  function ke() {
    for (var a = this.H, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      "string" !== typeof c || a.add(c, void 0);
    }
  }
  function le(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Oa(this.H, e);
      if (f instanceof Ha) {
        if ("break" === f.type) return;
        if ("return" === f.type) return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Oa(this.H, e);
      if (g instanceof Ha) {
        if ("break" === g.type) break;
        if ("return" === g.type) return g;
      }
      this.evaluate(b);
    }
  }
  function me(a) {
    return ~Number(this.evaluate(a));
  }
  function ne(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function oe(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function pe(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function qe(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function re(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function te() {}
  function ue(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Ha) return g;
    } catch (r) {
      if (!(r instanceof fd && a)) throw ((f = r instanceof fd), r);
      var h = Na(this.H),
        m = new $c(r);
      h.add(b, m);
      var n = this.evaluate(d),
        p = Oa(h, n);
      if (p instanceof Ha) return p;
    } finally {
      if (f && void 0 !== e) {
        var q = this.evaluate(e);
        if (q instanceof Ha) return q;
      }
    }
  }
  var we = function () {
    this.m = new Sa();
    ve(this);
  };
  we.prototype.execute = function (a) {
    return this.m.F(a);
  };
  var ve = function (a) {
    var b = function (c, d) {
      var e = new Vc(String(c), d);
      e.Nb();
      a.m.m.set(String(c), e);
    };
    b("map", Ud);
    b("and", Pc);
    b("contains", Sc);
    b("equals", Qc);
    b("or", Rc);
    b("startsWith", Tc);
    b("variable", Uc);
  };
  var ye = function () {
    this.F = !1;
    this.m = new Sa();
    xe(this);
    this.F = !0;
  };
  ye.prototype.execute = function (a) {
    return ze(this.m.F(a));
  };
  var Ae = function (a, b, c) {
      return ze(a.m.T(b, c));
    },
    xe = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new Vc(e, d);
        f.Nb();
        a.m.m.set(e, f);
      };
      b(0, jd);
      b(1, kd);
      b(2, ld);
      b(3, md);
      b(56, qe);
      b(57, ne);
      b(58, me);
      b(59, se);
      b(60, oe);
      b(61, pe);
      b(62, re);
      b(53, od);
      b(4, pd);
      b(5, qd);
      b(52, rd);
      b(6, sd);
      b(49, td);
      b(7, Td);
      b(8, Ud);
      b(9, qd);
      b(50, ud);
      b(10, vd);
      b(12, wd);
      b(13, xd);
      b(51, Id);
      b(47, Ad);
      b(54, Bd);
      b(55, Cd);
      b(63, Hd);
      b(64, Dd);
      b(65, Fd);
      b(66, Gd);
      b(15, Jd);
      b(16, Ld);
      b(17, Ld);
      b(18, Md);
      b(19, Nd);
      b(20, Od);
      b(21, Pd);
      b(22, Qd);
      b(23, Rd);
      b(24, Sd);
      b(25, Vd);
      b(26, Wd);
      b(27, Xd);
      b(28, Yd);
      b(29, Zd);
      b(45, $d);
      b(30, ae);
      b(32, be);
      b(33, be);
      b(34, ce);
      b(35, ce);
      b(46, de);
      b(36, ee);
      b(43, fe);
      b(37, ge);
      b(38, he);
      b(39, ie);
      b(67, ue);
      b(40, je);
      b(44, te);
      b(41, ke);
      b(42, le);
    };
  ye.prototype.J = function () {
    return this.m.J();
  };
  function ze(a) {
    if (
      a instanceof Ha ||
      a instanceof Vc ||
      a instanceof ab ||
      a instanceof db ||
      a instanceof $c ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var Be = function (a) {
    this.message = a;
  };
  function Ce(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return void 0 === b
      ? new Be(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function De(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Ee = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Fe(a, b) {
    for (var c = "", d = !0; 7 < a; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + Ce(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + Ce(a | b) + c);
  }
  var Ge = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      pk: a("consent"),
      di: a("convert_case_to"),
      ei: a("convert_false_to"),
      fi: a("convert_null_to"),
      gi: a("convert_true_to"),
      hi: a("convert_undefined_to"),
      on: a("debug_mode_metadata"),
      ra: a("function"),
      Ng: a("instance_name"),
      Pk: a("live_only"),
      Qk: a("malware_disabled"),
      Rk: a("metadata"),
      Uk: a("original_activity_id"),
      Bn: a("original_vendor_template_id"),
      An: a("once_on_load"),
      Tk: a("once_per_event"),
      nj: a("once_per_load"),
      Gn: a("priority_override"),
      Hn: a("respected_consent_types"),
      uj: a("setup_tags"),
      ne: a("tag_id"),
      Aj: a("teardown_tags"),
    };
  })();
  var cf;
  var df = [],
    ef = [],
    ff = [],
    gf = [],
    hf = [],
    jf = {},
    kf,
    lf;
  function mf(a) {
    lf = lf || a;
  }
  function nf(a) {}
  var of,
    pf = [],
    qf = [];
  function rf(a, b) {
    var c = {};
    c[Ge.ra] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function sf(a, b, c) {
    try {
      return kf(tf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function uf(a) {
    var b = a[Ge.ra];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!jf[b];
  }
  var tf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = vf(a[e], b, c));
      return d;
    },
    vf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(vf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = df[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var h = String(g[Ge.Ng]);
            try {
              var m = tf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = wf(m, { event: b, index: f, type: 2, name: h });
              of && (d = of.pl(d, m));
            } catch (x) {
              b.logMacroError && b.logMacroError(x, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[vf(a[n], b, c)] = vf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = vf(a[q], b, c);
              lf && (p = p || lf.am(r));
              d.push(r);
            }
            return lf && p ? lf.sl(d) : d.join("");
          case "escape":
            d = vf(a[1], b, c);
            if (lf && Array.isArray(a[1]) && "macro" === a[1][0] && lf.bm(a))
              return lf.Dm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) He[a[t]] && (d = He[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!gf[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return { Jj: a[2], index: u };
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[Ge.ra] = a[1];
            var w = sf(v, b, c),
              y = !!a[4];
            return y || 2 !== w ? y !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    wf = function (a, b) {
      var c = a[Ge.ra],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = jf[c],
        f =
          b &&
          2 === b.type &&
          (null == d ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          -1 !== pf.indexOf(c),
        g = {},
        h = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (h[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (null == q) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = df[q];
                  break;
                case 1:
                  r = gf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[Ge.Ng];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var u, v, w;
      if (f && -1 === qf.indexOf(c)) {
        qf.push(c);
        var y = Db();
        u = e(g);
        var x = Db() - y,
          B = Db();
        v = cf(c, h, b);
        w = x - (Db() - B);
      } else if ((e && (u = e(g)), !e || f)) v = cf(c, h, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Za(u)
          ? (Array.isArray(u)
              ? Array.isArray(v)
              : Ya(u)
              ? Ya(v)
              : "function" === typeof u
              ? "function" === typeof v
              : u === v) || d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c),
        void 0 !== w && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? u : v;
    };
  var xf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  za(xf, Error);
  function yf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) yf(a[c], b[c]);
    }
  }
  var zf = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.xm = a;
    this.F = b;
    this.m = [];
  };
  za(zf, Error);
  var Bf = function () {
    return function (a, b) {
      a instanceof zf || (a = new zf(a, Af));
      b && a.m.push(b);
      throw a;
    };
  };
  function Af(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) rb(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Ef = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Cf(a), f = 0; f < ef.length; f++) {
        var g = ef[f],
          h = Df(g, e);
        if (h) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < gf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Df = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Cf = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = sf(ff[c], a));
        return b[c];
      };
    };
  var Ff = {
    pl: function (a, b) {
      b[Ge.di] &&
        "string" === typeof a &&
        (a = 1 == b[Ge.di] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Ge.fi) && null === a && (a = b[Ge.fi]);
      b.hasOwnProperty(Ge.hi) && void 0 === a && (a = b[Ge.hi]);
      b.hasOwnProperty(Ge.gi) && !0 === a && (a = b[Ge.gi]);
      b.hasOwnProperty(Ge.ei) && !1 === a && (a = b[Ge.ei]);
      return a;
    },
  };
  var Gf = function () {
      this.m = {};
    },
    If = function (a, b) {
      var c = Hf.F,
        d;
      null != (d = c.m)[a] || (d[a] = []);
      c.m[a].push(function () {
        return b.apply(null, ra(Aa.apply(0, arguments)));
      });
    };
  function Jf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new xf(c, d, g);
      }
  }
  function Kf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.m[d],
          f = a.m.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Jf(e, b, d, g);
          Jf(f, b, d, g);
        }
      }
    };
  }
  var Qf = function () {
      var a = data.permissions || {},
        b = Lf.ctid,
        c = this;
      this.F = new Gf();
      this.m = {};
      var d = {},
        e = {},
        f = Kf(this.F, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      z(a, function (g, h) {
        var m = {};
        z(h, function (p, q) {
          var r = Mf(p, q);
          m[p] = r.assert;
          d[p] || (d[p] = r.O);
          r.Ej && !e[p] && (e[p] = r.Ej);
        });
        var n = function (p) {
          var q = Aa.apply(1, arguments);
          if (!m[p])
            throw Pf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(ra(q)));
        };
        c.m[g] = function (p, q) {
          var r = m[p];
          if (!r)
            throw Pf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var t = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, t);
          f.apply(void 0, t);
          var u = e[p];
          u && u.apply(null, [n].concat(ra(t.slice(1))));
        };
      });
    },
    Rf = function (a) {
      return Hf.m[a] || function () {};
    };
  function Mf(a, b) {
    var c = rf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Pf;
    try {
      return wf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new xf(e, {}, "Permission " + e + " is unknown.");
        },
        O: function () {
          throw new xf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Pf(a, b, c) {
    return new xf(a, b, c);
  }
  var Sf = !1;
  var Tf = {};
  Tf.gn = zb("");
  Tf.wl = zb("");
  var Uf = Sf,
    Vf = Tf.wl,
    Wf = Tf.gn;
  var dg = {},
    eg =
      ((dg.uaa = !0),
      (dg.uab = !0),
      (dg.uafvl = !0),
      (dg.uamb = !0),
      (dg.uam = !0),
      (dg.uap = !0),
      (dg.uapv = !0),
      (dg.uaw = !0),
      dg);
  var ig = /^[a-z$_][\w$]*$/i,
    jg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
    kg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!jg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = -1 !== f && f === e.length - 2,
          h = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (0 === d.length) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!ig.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || h.length > d.length || (!g && d.length != e.length)
            ? 0
            : g
            ? 0 === d.indexOf(h) && (d === h || "." == d.charAt(h.length))
            : d === h
        )
          return !0;
      }
      return !1;
    };
  var lg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function mg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var ng = new wb();
  function og(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = ng.get(e);
      f || ((f = new RegExp(b, d)), ng.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function pg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function qg(a, b) {
    return String(a) === String(b);
  }
  function rg(a, b) {
    return Number(a) >= Number(b);
  }
  function sg(a, b) {
    return Number(a) <= Number(b);
  }
  function tg(a, b) {
    return Number(a) > Number(b);
  }
  function ug(a, b) {
    return Number(a) < Number(b);
  }
  function vg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  var wg = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    xg = function (a, b) {
      var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
      wg(b, "/*") && (b = b.slice(0, -2));
      wg(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && 1 === d.length) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (-1 === e || (0 === f && 0 !== e)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var h = d[d.length - 1];
      return a.lastIndexOf(h) === a.length - h.length;
    },
    yg = /^[a-z0-9-]+$/i,
    zg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
    Bg = function (a, b) {
      var c;
      if (!(c = !Ag(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (2 > e.length) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!yg.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var h;
        var m = a,
          n = b[g];
        if (!zg.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var t = m.hostname,
          u = q;
        if (0 !== u.indexOf("*.")) r = t.toLowerCase() === u.toLowerCase();
        else {
          u = u.slice(2);
          var v = t.toLowerCase().indexOf(u.toLowerCase());
          r =
            -1 === v
              ? !1
              : t.length === u.length
              ? !0
              : t.length !== u.length + v
              ? !1
              : "." === t[v - 1];
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          h = xg(m.pathname + m.search, w) ? !0 : !1;
        } else h = !1;
        if (h) return !0;
      }
      return !1;
    },
    Ag = function (a) {
      return "https:" === a.protocol && (!a.port || "443" === a.port);
    };
  var Cg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Dg = { Fn: "function", PixieMap: "Object", List: "Array" },
    K = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Cg.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          m = c[d];
        if (null == m) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof m;
          m instanceof Vc
            ? (n = "Fn")
            : m instanceof ab
            ? (n = "List")
            : m instanceof db
            ? (n = "PixieMap")
            : m instanceof $c && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (Dg[n] || n) +
                ", which does not match required type " +
                (Dg[h] || h) +
                "."
            );
        }
      }
    };
  function Eg(a) {
    return "" + a;
  }
  function Fg(a, b) {
    var c = [];
    return c;
  }
  function Gg(a, b) {
    var c = new Vc(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (dd()) throw new fd(g.message);
        throw g;
      }
    });
    c.Nb();
    return c;
  }
  function Hg(a, b) {
    var c = new db(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        qb(e)
          ? c.set(d, Gg(a + "_" + d, e))
          : Ya(e)
          ? c.set(d, Hg(a + "_" + d, e))
          : (rb(e) || l(e) || "boolean" === typeof e) && c.set(d, e);
      }
    c.Nb();
    return c;
  }
  var Ig = function (a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new db();
    return (d = Hg("AssertApiSubject", c));
  };
  var Jg = function (a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof bd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new db();
    return (d = Hg("AssertThatSubject", c));
  };
  function Kg(a) {
    return function () {
      for (var b = [], c = this.H, d = 0; d < arguments.length; ++d)
        b.push(J(arguments[d], c));
      return cd(a.apply(null, b));
    };
  }
  var Mg = function () {
    for (var a = Math, b = Lg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Kg(a[e].bind(a)));
    }
    return c;
  };
  var Ng = function (a) {
    var b;
    return b;
  };
  var Og = function (a) {
    var b;
    return b;
  };
  var Pg = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var Qg = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function Rg(a, b) {
    var c = !1;
    return c;
  }
  Rg.K = "internal.evaluateBooleanExpression";
  var Wg = function (a) {
    K(this.getName(), ["message:?string"], arguments);
  };
  var Xg = function (a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return ub(a, b);
  };
  var Yg = function () {
    return new Date().getTime();
  };
  var Zg = function (a) {
    if (null === a) return "null";
    if (a instanceof ab) return "array";
    if (a instanceof Vc) return "function";
    if (a instanceof $c) {
      a = a.getValue();
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var $g = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Uf || Wf) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return cd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(J(c));
      }),
    };
  };
  var ah = function (a) {
    return yb(J(a, this.H));
  };
  var bh = function (a) {
    return Number(J(a, this.H));
  };
  var ch = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var dh = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Lg = "floor ceil round max min abs pow sqrt".split(" ");
  var eh = function () {
      var a = {};
      return {
        Gl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        ek: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    fh = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return Vc.prototype.invoke.apply(a, c);
      };
    },
    gh = function (a, b) {
      K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    },
    hh = function (a, b) {
      K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
    };
  var ih = {};
  ih.keys = function (a) {
    return new ab();
  };
  ih.values = function (a) {
    return new ab();
  };
  ih.entries = function (a) {
    return new ab();
  };
  ih.freeze = function (a) {
    return a;
  };
  ih.delete = function (a, b) {
    return !1;
  };
  var N = function (a, b, c) {
    var d = a.H.m;
    if (!d) throw Error("Missing program state.");
    if (d.Jm) {
      try {
        d.Fj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw (mb("TAGGING", 21), e);
      }
      return;
    }
    d.Fj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var kh = function () {
    this.m = {};
    this.F = {};
  };
  kh.prototype.get = function (a, b) {
    var c = this.m.hasOwnProperty(a) ? this.m[a] : void 0;
    return c;
  };
  kh.prototype.add = function (a, b, c) {
    if (this.m.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.F.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.m[a] = c ? void 0 : qb(b) ? Gg(a, b) : Hg(a, b);
  };
  function lh(a, b) {
    var c = void 0;
    return c;
  }
  function ph() {
    var a = {};
    return a;
  }
  function qh(a) {
    return rh ? H.querySelectorAll(a) : null;
  }
  function sh(a, b) {
    if (!rh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!H.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (null !== d && 1 === d.nodeType);
    return null;
  }
  var th = !1;
  if (H.querySelectorAll)
    try {
      var uh = H.querySelectorAll(":root");
      uh && 1 == uh.length && uh[0] == H.documentElement && (th = !0);
    } catch (a) {}
  var rh = th;
  var vh = /^[0-9A-Fa-f]{64}$/;
  function wh(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        128 > d
          ? b.push(d)
          : 2048 > d
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : 55296 > d || 57344 <= d
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function xh(a) {
    if ("" === a || "e0" === a) return Promise.resolve(a);
    var b;
    if (null == (b = G.crypto) ? 0 : b.subtle) {
      if (vh.test(a)) return Promise.resolve(a);
      try {
        var c = wh(a);
        return G.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return G.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function P(a) {
    mb("GTM", a);
  }
  var Bh = function (a) {
      var b = {},
        c = ["tv.1"],
        d = 0;
      for (var e = pa(a), f = e.next(); !f.done; f = e.next()) {
        var g = f.value;
        if ("" !== g.value) {
          var h,
            m = void 0,
            n = g.name,
            p = g.value,
            q = yh[n];
          if (q) {
            var r = null != (m = g.index) ? m : "",
              t = q + "__" + d;
            -1 === zh.indexOf(n) || /^e\d+$/.test(p) || Ah.test(p) || vh.test(p)
              ? (h = encodeURIComponent(encodeURIComponent(p)))
              : ((h = "${userData." + t + "|sha256}"), (b[t] = p), d++);
            c.push("" + q + r + "." + h);
          }
        }
      }
      var u = c.join("~");
      return { Th: { userData: b }, Wm: u, jn: d };
    },
    Dh = function (a) {
      if (G.Promise)
        try {
          return new Promise(function (b) {
            Ch(a, function (c, d) {
              b({ Qj: c, Kh: d });
            });
          });
        } catch (b) {}
    },
    Eh = function (a) {
      for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
        var e = a[d].name,
          f = a[d].value,
          g = a[d].index,
          h = yh[e];
        h &&
          f &&
          (-1 === zh.indexOf(e) ||
            /^e\d+$/.test(f) ||
            Ah.test(f) ||
            vh.test(f)) &&
          (void 0 !== g && (h += g), b.push(h + "." + f), c++);
      }
      1 === a.length && "error_code" === a[0].name && (c = 0);
      return { Rj: encodeURIComponent(b.join("~")), Kh: c };
    },
    Ch = function (a, b) {
      Fh(a, function (c) {
        var d = Eh(c);
        b(d.Rj, d.Kh);
      });
    },
    Nh = function (a) {
      function b(r, t, u, v) {
        var w = Gh(r);
        "" !== w &&
          (vh.test(w)
            ? h.push({ name: t, value: w, index: v })
            : h.push({ name: t, value: u(w), index: v }));
      }
      function c(r, t) {
        var u = r;
        if (l(u) || Array.isArray(u)) {
          u = sb(r);
          for (var v = 0; v < u.length; ++v) {
            var w = Gh(u[v]),
              y = vh.test(w);
            t && !y && P(89);
            !t && y && P(88);
          }
        }
      }
      function d(r, t) {
        var u = r[t];
        c(u, !1);
        var v = Hh[t];
        r[v] && (r[t] && P(90), (u = r[v]), c(u, !0));
        return u;
      }
      function e(r, t, u) {
        for (var v = sb(d(r, t)), w = 0; w < v.length; ++w) b(v[w], t, u);
      }
      function f(r, t, u, v) {
        var w = d(r, t);
        b(w, t, u, v);
      }
      function g(r) {
        return function (t) {
          P(64);
          return r(t);
        };
      }
      var h = [];
      if ("https:" !== G.location.protocol)
        return h.push({ name: "error_code", value: "e3", index: void 0 }), h;
      e(a, "email", Ih);
      e(a, "phone_number", Jh);
      e(a, "first_name", g(Kh));
      e(a, "last_name", g(Kh));
      var m = a.home_address || {};
      e(m, "street", g(Lh));
      e(m, "city", g(Lh));
      e(m, "postal_code", g(Mh));
      e(m, "region", g(Lh));
      e(m, "country", g(Mh));
      for (var n = sb(a.address || {}), p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", Kh, p);
        f(q, "last_name", Kh, p);
        f(q, "street", Lh, p);
        f(q, "city", Lh, p);
        f(q, "postal_code", Mh, p);
        f(q, "region", Lh, p);
        f(q, "country", Mh, p);
      }
      return h;
    },
    Fh = function (a, b) {
      var c = Nh(a);
      Oh(c, b);
    },
    Gh = function (a) {
      return null == a ? "" : l(a) ? Bb(String(a)) : "e0";
    },
    Mh = function (a) {
      return a.replace(Ph, "");
    },
    Kh = function (a) {
      return Lh(a.replace(/\s/g, ""));
    },
    Lh = function (a) {
      return Bb(a.replace(Qh, "").toLowerCase());
    },
    Jh = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return Rh.test(a) ? a : "e0";
    },
    Ih = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 === b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Sh.test(c)) return c;
      }
      return "e0";
    },
    Oh = function (a, b) {
      a.some(function (c) {
        c.value && zh.indexOf(c.name);
      })
        ? b(a)
        : G.Promise
        ? Promise.all(
            a.map(function (c) {
              return c.value && -1 !== zh.indexOf(c.name)
                ? xh(c.value).then(function (d) {
                    c.value = d;
                  })
                : Promise.resolve();
            })
          )
            .then(function () {
              b(a);
            })
            .catch(function () {
              b([]);
            })
        : b([]);
    },
    Qh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Sh = /^\S+@\S+\.\S+$/,
    Rh = /^\+\d{10,15}$/,
    Ph = /[.~]/g,
    Ah = /^[0-9A-Za-z_-]{43}$/,
    Th = {},
    yh =
      ((Th.email = "em"),
      (Th.phone_number = "pn"),
      (Th.first_name = "fn"),
      (Th.last_name = "ln"),
      (Th.street = "sa"),
      (Th.city = "ct"),
      (Th.region = "rg"),
      (Th.country = "co"),
      (Th.postal_code = "pc"),
      (Th.error_code = "ec"),
      Th),
    Uh = {},
    Hh =
      ((Uh.email = "sha256_email_address"),
      (Uh.phone_number = "sha256_phone_number"),
      (Uh.first_name = "sha256_first_name"),
      (Uh.last_name = "sha256_last_name"),
      (Uh.street = "sha256_street"),
      Uh),
    zh = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var Q = {
      g: {
        Aa: "ad_personalization",
        R: "ad_storage",
        P: "ad_user_data",
        W: "analytics_storage",
        mc: "region",
        Rb: "consent_updated",
        Re: "wait_for_update",
        ji: "app_remove",
        ki: "app_store_refund",
        li: "app_store_subscription_cancel",
        mi: "app_store_subscription_convert",
        ni: "app_store_subscription_renew",
        sk: "consent_update",
        Wf: "add_payment_info",
        Xf: "add_shipping_info",
        nc: "add_to_cart",
        oc: "remove_from_cart",
        Yf: "view_cart",
        Sb: "begin_checkout",
        qc: "select_item",
        ib: "view_item_list",
        Db: "select_promotion",
        jb: "view_promotion",
        Ja: "purchase",
        rc: "refund",
        Na: "view_item",
        Zf: "add_to_wishlist",
        tk: "exception",
        oi: "first_open",
        ri: "first_visit",
        da: "gtag.config",
        Sa: "gtag.get",
        si: "in_app_purchase",
        Tb: "page_view",
        uk: "screen_view",
        ui: "session_start",
        vk: "timing_complete",
        wk: "track_social",
        sc: "user_engagement",
        xk: "user_id_update",
        kb: "gclgb",
        Ta: "gclid",
        vi: "gclgs",
        wi: "gclst",
        ja: "ads_data_redaction",
        xi: "gad_source",
        Fd: "gclid_url",
        yi: "gclsrc",
        cg: "gbraid",
        Se: "wbraid",
        oa: "allow_ad_personalization_signals",
        Te: "allow_custom_scripts",
        Ue: "allow_display_features",
        Gd: "allow_enhanced_conversions",
        lb: "allow_google_signals",
        Ea: "allow_interest_groups",
        yk: "app_id",
        zk: "app_installer_id",
        Ak: "app_name",
        Bk: "app_version",
        Eb: "auid",
        zi: "auto_detection_enabled",
        Ub: "aw_remarketing",
        Ve: "aw_remarketing_only",
        Hd: "discount",
        Id: "aw_feed_country",
        Jd: "aw_feed_language",
        fa: "items",
        Kd: "aw_merchant_id",
        dg: "aw_basket_type",
        Oc: "campaign_content",
        Pc: "campaign_id",
        Qc: "campaign_medium",
        Rc: "campaign_name",
        Sc: "campaign",
        Tc: "campaign_source",
        Uc: "campaign_term",
        nb: "client_id",
        Ai: "rnd",
        eg: "consent_update_type",
        Bi: "content_group",
        Ci: "content_type",
        ab: "conversion_cookie_prefix",
        Vc: "conversion_id",
        wa: "conversion_linker",
        Di: "conversion_linker_disabled",
        Vb: "conversion_api",
        We: "cookie_deprecation",
        Ua: "cookie_domain",
        Va: "cookie_expires",
        cb: "cookie_flags",
        uc: "cookie_name",
        Fb: "cookie_path",
        Oa: "cookie_prefix",
        vc: "cookie_update",
        wc: "country",
        Ba: "currency",
        Ld: "customer_lifetime_value",
        Wc: "custom_map",
        fg: "gcldc",
        Md: "dclid",
        Ei: "debug_mode",
        la: "developer_id",
        Fi: "disable_merchant_reported_purchases",
        Xc: "dc_custom_params",
        Gi: "dc_natural_search",
        gg: "dynamic_event_settings",
        hg: "affiliation",
        Nd: "checkout_option",
        Xe: "checkout_step",
        ig: "coupon",
        Yc: "item_list_name",
        Ye: "list_name",
        Hi: "promotions",
        Zc: "shipping",
        Ze: "tax",
        Od: "engagement_time_msec",
        Pd: "enhanced_client_id",
        Qd: "enhanced_conversions",
        jg: "enhanced_conversions_automatic_settings",
        Rd: "estimated_delivery_date",
        af: "euid_logged_in_state",
        bd: "event_callback",
        Ck: "event_category",
        pb: "event_developer_id_string",
        Dk: "event_label",
        xc: "event",
        Sd: "event_settings",
        Td: "event_timeout",
        Ek: "description",
        Fk: "fatal",
        Ii: "experiments",
        bf: "firebase_id",
        yc: "first_party_collection",
        Ud: "_x_20",
        qb: "_x_19",
        Ji: "fledge_drop_reason",
        kg: "fledge",
        lg: "flight_error_code",
        mg: "flight_error_message",
        Ki: "fl_activity_category",
        Li: "fl_activity_group",
        ng: "fl_advertiser_id",
        Mi: "fl_ar_dedupe",
        og: "match_id",
        Ni: "fl_random_number",
        Oi: "tran",
        Pi: "u",
        Vd: "gac_gclid",
        zc: "gac_wbraid",
        pg: "gac_wbraid_multiple_conversions",
        qg: "ga_restrict_domain",
        cf: "ga_temp_client_id",
        Ac: "gdpr_applies",
        rg: "geo_granularity",
        Gb: "value_callback",
        rb: "value_key",
        Gk: "google_ng",
        Hk: "google_ono",
        Wb: "google_signals",
        sg: "google_tld",
        Wd: "groups",
        ug: "gsa_experiment_id",
        Qi: "gtm_up",
        Hb: "iframe_state",
        dd: "ignore_referrer",
        df: "internal_traffic_results",
        Xb: "is_legacy_converted",
        Ib: "is_legacy_loaded",
        Xd: "is_passthrough",
        ed: "_lps",
        Pa: "language",
        Yd: "legacy_developer_id_string",
        xa: "linker",
        Bc: "accept_incoming",
        tb: "decorate_forms",
        X: "domains",
        Jb: "url_position",
        vg: "method",
        Ik: "name",
        fd: "new_customer",
        wg: "non_interaction",
        Ri: "optimize_id",
        Si: "page_hostname",
        gd: "page_path",
        Fa: "page_referrer",
        Kb: "page_title",
        xg: "passengers",
        yg: "phone_conversion_callback",
        Ti: "phone_conversion_country_code",
        zg: "phone_conversion_css_class",
        Ui: "phone_conversion_ids",
        Ag: "phone_conversion_number",
        Bg: "phone_conversion_options",
        Cg: "_protected_audience_enabled",
        hd: "quantity",
        Zd: "redact_device_info",
        ef: "referral_exclusion_definition",
        Yb: "restricted_data_processing",
        Vi: "retoken",
        Jk: "sample_rate",
        ff: "screen_name",
        Lb: "screen_resolution",
        Wi: "search_term",
        Ka: "send_page_view",
        Zb: "send_to",
        jd: "server_container_url",
        kd: "session_duration",
        ae: "session_engaged",
        hf: "session_engaged_time",
        ub: "session_id",
        be: "session_number",
        jf: "_shared_user_id",
        ld: "delivery_postal_code",
        Kk: "temporary_client_id",
        kf: "topmost_url",
        Xi: "tracking_id",
        lf: "traffic_type",
        Ca: "transaction_id",
        Mb: "transport_url",
        Dg: "trip_type",
        ac: "update",
        Wa: "url_passthrough",
        nf: "_user_agent_architecture",
        pf: "_user_agent_bitness",
        qf: "_user_agent_full_version_list",
        rf: "_user_agent_mobile",
        tf: "_user_agent_model",
        uf: "_user_agent_platform",
        vf: "_user_agent_platform_version",
        wf: "_user_agent_wow64",
        Ga: "user_data",
        Eg: "user_data_auto_latency",
        Fg: "user_data_auto_meta",
        Gg: "user_data_auto_multi",
        Hg: "user_data_auto_selectors",
        Ig: "user_data_auto_status",
        md: "user_data_mode",
        ce: "user_data_settings",
        Da: "user_id",
        eb: "user_properties",
        Yi: "_user_region",
        de: "us_privacy_string",
        qa: "value",
        Jg: "wbraid_multiple_conversions",
        gj: "_host_name",
        ij: "_in_page_command",
        jj: "_is_passthrough_cid",
        Ob: "non_personalized_ads",
        ke: "_sst_parameters",
        ob: "conversion_label",
        ya: "page_location",
        sb: "global_developer_id_string",
        Cc: "tc_privacy_string",
      },
    },
    Vh = {},
    Wh = Object.freeze(
      ((Vh[Q.g.oa] = 1),
      (Vh[Q.g.Ue] = 1),
      (Vh[Q.g.Gd] = 1),
      (Vh[Q.g.lb] = 1),
      (Vh[Q.g.fa] = 1),
      (Vh[Q.g.Ua] = 1),
      (Vh[Q.g.Va] = 1),
      (Vh[Q.g.cb] = 1),
      (Vh[Q.g.uc] = 1),
      (Vh[Q.g.Fb] = 1),
      (Vh[Q.g.Oa] = 1),
      (Vh[Q.g.vc] = 1),
      (Vh[Q.g.Wc] = 1),
      (Vh[Q.g.la] = 1),
      (Vh[Q.g.gg] = 1),
      (Vh[Q.g.bd] = 1),
      (Vh[Q.g.Sd] = 1),
      (Vh[Q.g.Td] = 1),
      (Vh[Q.g.yc] = 1),
      (Vh[Q.g.qg] = 1),
      (Vh[Q.g.Wb] = 1),
      (Vh[Q.g.sg] = 1),
      (Vh[Q.g.Wd] = 1),
      (Vh[Q.g.df] = 1),
      (Vh[Q.g.Xb] = 1),
      (Vh[Q.g.Ib] = 1),
      (Vh[Q.g.xa] = 1),
      (Vh[Q.g.ef] = 1),
      (Vh[Q.g.Yb] = 1),
      (Vh[Q.g.Ka] = 1),
      (Vh[Q.g.Zb] = 1),
      (Vh[Q.g.jd] = 1),
      (Vh[Q.g.kd] = 1),
      (Vh[Q.g.hf] = 1),
      (Vh[Q.g.ld] = 1),
      (Vh[Q.g.Mb] = 1),
      (Vh[Q.g.ac] = 1),
      (Vh[Q.g.ce] = 1),
      (Vh[Q.g.eb] = 1),
      (Vh[Q.g.ke] = 1),
      Vh)
    );
  Object.freeze([
    Q.g.ya,
    Q.g.Fa,
    Q.g.Kb,
    Q.g.Pa,
    Q.g.ff,
    Q.g.Da,
    Q.g.bf,
    Q.g.Bi,
  ]);
  var Xh = {},
    Yh = Object.freeze(
      ((Xh[Q.g.ji] = 1),
      (Xh[Q.g.ki] = 1),
      (Xh[Q.g.li] = 1),
      (Xh[Q.g.mi] = 1),
      (Xh[Q.g.ni] = 1),
      (Xh[Q.g.oi] = 1),
      (Xh[Q.g.ri] = 1),
      (Xh[Q.g.si] = 1),
      (Xh[Q.g.ui] = 1),
      (Xh[Q.g.sc] = 1),
      Xh)
    ),
    Zh = {},
    $h = Object.freeze(
      ((Zh[Q.g.Wf] = 1),
      (Zh[Q.g.Xf] = 1),
      (Zh[Q.g.nc] = 1),
      (Zh[Q.g.oc] = 1),
      (Zh[Q.g.Yf] = 1),
      (Zh[Q.g.Sb] = 1),
      (Zh[Q.g.qc] = 1),
      (Zh[Q.g.ib] = 1),
      (Zh[Q.g.Db] = 1),
      (Zh[Q.g.jb] = 1),
      (Zh[Q.g.Ja] = 1),
      (Zh[Q.g.rc] = 1),
      (Zh[Q.g.Na] = 1),
      (Zh[Q.g.Zf] = 1),
      Zh)
    ),
    ai = Object.freeze([
      Q.g.oa,
      Q.g.lb,
      Q.g.vc,
      Q.g.yc,
      Q.g.dd,
      Q.g.Ka,
      Q.g.ac,
    ]),
    bi = Object.freeze([].concat(ra(ai))),
    ci = Object.freeze([Q.g.Va, Q.g.Td, Q.g.kd, Q.g.hf, Q.g.Od]),
    di = Object.freeze([].concat(ra(ci))),
    ei = {},
    fi =
      ((ei[Q.g.R] = "1"),
      (ei[Q.g.W] = "2"),
      (ei[Q.g.P] = "3"),
      (ei[Q.g.Aa] = "4"),
      ei),
    gi = {},
    hi = Object.freeze(
      ((gi[Q.g.oa] = 1),
      (gi[Q.g.Gd] = 1),
      (gi[Q.g.Ea] = 1),
      (gi[Q.g.Ub] = 1),
      (gi[Q.g.Ve] = 1),
      (gi[Q.g.Hd] = 1),
      (gi[Q.g.Id] = 1),
      (gi[Q.g.Jd] = 1),
      (gi[Q.g.fa] = 1),
      (gi[Q.g.Kd] = 1),
      (gi[Q.g.ab] = 1),
      (gi[Q.g.wa] = 1),
      (gi[Q.g.Ua] = 1),
      (gi[Q.g.Va] = 1),
      (gi[Q.g.cb] = 1),
      (gi[Q.g.Oa] = 1),
      (gi[Q.g.Ba] = 1),
      (gi[Q.g.Ld] = 1),
      (gi[Q.g.la] = 1),
      (gi[Q.g.Fi] = 1),
      (gi[Q.g.Qd] = 1),
      (gi[Q.g.Rd] = 1),
      (gi[Q.g.bf] = 1),
      (gi[Q.g.yc] = 1),
      (gi[Q.g.Xb] = 1),
      (gi[Q.g.Ib] = 1),
      (gi[Q.g.Pa] = 1),
      (gi[Q.g.fd] = 1),
      (gi[Q.g.ya] = 1),
      (gi[Q.g.Fa] = 1),
      (gi[Q.g.yg] = 1),
      (gi[Q.g.zg] = 1),
      (gi[Q.g.Ag] = 1),
      (gi[Q.g.Bg] = 1),
      (gi[Q.g.Yb] = 1),
      (gi[Q.g.Ka] = 1),
      (gi[Q.g.Zb] = 1),
      (gi[Q.g.jd] = 1),
      (gi[Q.g.ld] = 1),
      (gi[Q.g.Ca] = 1),
      (gi[Q.g.Mb] = 1),
      (gi[Q.g.ac] = 1),
      (gi[Q.g.Wa] = 1),
      (gi[Q.g.Ga] = 1),
      (gi[Q.g.Da] = 1),
      (gi[Q.g.qa] = 1),
      gi)
    ),
    ii = {},
    ji = Object.freeze(
      ((ii.search = "s"),
      (ii.youtube = "y"),
      (ii.playstore = "p"),
      (ii.shopping = "h"),
      (ii.ads = "a"),
      (ii.maps = "m"),
      ii)
    );
  Object.freeze(Q.g);
  var ki = {},
    li = (G.google_tag_manager = G.google_tag_manager || {});
  ki.Og = "4630";
  ki.je = Number("0") || 0;
  ki.Za = "dataLayer";
  ki.mn =
    "ChEI8JmAswYQpPTtg7Hl+7qvARIkAEhV4FwbiYXklYefWWXZcQgC2dsJoaPwXUIcj7s4+/uTvqtfGgK7sg\x3d\x3d";
  var mi = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    ni = { __paused: 1, __tg: 1 },
    oi;
  for (oi in mi) mi.hasOwnProperty(oi) && (ni[oi] = 1);
  var pi = zb(""),
    qi,
    ri = !1;
  qi = ri;
  var si,
    ti = !1;
  si = ti;
  var ui,
    vi = !1;
  ui = vi;
  ki.Ed = "www.googletagmanager.com";
  var wi = "" + ki.Ed + (qi ? "/gtag/js" : "/gtm.js"),
    xi = null,
    yi = null,
    zi = {},
    Ai = {};
  function Bi() {
    var a = li.sequence || 1;
    li.sequence = a + 1;
    return a;
  }
  ki.qk = "";
  var Ci = "";
  ki.Cf = Ci;
  var Di = new (function () {
    this.m = "";
    this.M = this.F = !1;
    this.Xa = this.T = this.ba = this.J = "";
  })();
  function Ei() {
    var a = Di.J.length;
    return "/" === Di.J[a - 1] ? Di.J.substring(0, a - 1) : Di.J;
  }
  function Fi(a) {
    for (var b = {}, c = pa(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Gi = new wb(),
    Hi = {},
    Ii = {},
    Li = {
      name: ki.Za,
      set: function (a, b) {
        k(Kb(a, b), Hi);
        Ji();
      },
      get: function (a) {
        return Ki(a, 2);
      },
      reset: function () {
        Gi = new wb();
        Hi = {};
        Ji();
      },
    };
  function Ki(a, b) {
    return 2 != b ? Gi.get(a) : Mi(a);
  }
  function Mi(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = Hi, e = 0; e < c.length; e++) {
      if (null === d) return !1;
      if (void 0 === d) break;
      d = d[c[e]];
      if (-1 !== b.indexOf(d)) return;
    }
    return d;
  }
  function Ni(a, b) {
    Ii.hasOwnProperty(a) || (Gi.set(a, b), k(Kb(a, b), Hi), Ji());
  }
  function Oi() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = Ki(c, 1);
      if (Array.isArray(d) || Ya(d)) d = k(d);
      Ii[c] = d;
    }
  }
  function Ji(a) {
    z(Ii, function (b, c) {
      Gi.set(b, c);
      k(Kb(b), Hi);
      k(Kb(b, c), Hi);
      a && delete Ii[b];
    });
  }
  function Pi(a, b) {
    var c,
      d = 1 !== (void 0 === b ? 2 : b) ? Mi(a) : Gi.get(a);
    "array" === Wa(d) || "object" === Wa(d) ? (c = k(d)) : (c = d);
    return c;
  }
  var Qi = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), h = 0; h < g.length; h++) {
          var m = g[h].trim();
          if (m) {
            if (0 === m.indexOf("dataLayer.")) f = Ki(m.substring(10));
            else {
              var n = m.split(".");
              f = G[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ("css_selector" === d && rh) {
        var q = qh(e);
        if (q && 0 < q.length) {
          f = [];
          for (
            var r = 0;
            r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1);
            r++
          )
            f.push(Fc(q[r]) || Bb(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? ((a[b] = f), !0) : !1;
    },
    Ri = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = Qi(b, "email", a.email) || c;
        c = Qi(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = Qi(f, "first_name", d[e].first_name) || c;
          c = Qi(f, "last_name", d[e].last_name) || c;
          c = Qi(f, "street", d[e].street) || c;
          c = Qi(f, "city", d[e].city) || c;
          c = Qi(f, "region", d[e].region) || c;
          c = Qi(f, "country", d[e].country) || c;
          c = Qi(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    Si = function (a) {
      return Ya(a) ? !!a.enable_code : !1;
    };
  function Ti(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Ui = [],
    Vi = {};
  function Wi(a) {
    return void 0 === Ui[a] ? !1 : Ui[a];
  }
  var Xi = [];
  function Yi(a) {
    switch (a) {
      case 0:
        return 0;
      case 29:
        return 7;
      case 37:
        return 1;
      case 38:
        return 2;
      case 47:
        return 3;
      case 56:
        return 6;
      case 67:
        return 4;
      case 75:
        return 5;
      case 80:
        return 8;
    }
  }
  function S(a) {
    Xi[a] = !0;
    var b = Yi(a);
    void 0 !== b && (Ui[b] = !0);
  }
  S(26);
  S(22);
  S(23);
  S(24);
  S(25);
  S(39);
  S(61);
  S(45);
  S(58);
  S(28);
  S(14);
  S(83);
  S(13);
  S(90);
  S(82);
  S(48);
  S(69);
  S(35);
  S(6);
  S(40);
  S(4);
  S(65);
  S(78);
  S(54);
  S(51);
  S(73);
  S(88);
  S(68);
  S(87);
  S(66);
  S(93);
  S(91);
  S(67);
  S(5);
  S(75);
  Vi[1] = Ti("1", 6e4);
  Vi[3] = Ti("10", 1);
  Vi[2] = Ti("", 50);
  S(11);
  S(44);
  S(74);
  S(86);
  S(79);
  S(29);
  S(55);

  function T(a) {
    return !!Xi[a];
  }
  var bj = /:[0-9]+$/,
    cj = /^\d+\.fls\.doubleclick\.net$/,
    dj = function (a, b, c, d) {
      for (
        var e = [], f = pa(a.split("&")), g = f.next();
        !g.done;
        g = f.next()
      ) {
        var h = pa(g.value.split("=")),
          m = h.next().value,
          n = qa(h);
        if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
          var p = n.join("=");
          if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
          e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
        }
      }
      return c ? e : void 0;
    },
    gj = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = ej(a.protocol) || ej(G.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : G.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || G.location.hostname)
            .replace(bj, "")
            .toLowerCase());
      return fj(a, b, c, d, e);
    },
    fj = function (a, b, c, d, e) {
      var f,
        g = ej(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = hj(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(bj, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || mb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = dj(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    ej = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    hj = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    ij = {},
    jj = 0,
    U = function (a) {
      var b = ij[a];
      if (!b) {
        var c = H.createElement("a");
        a && (c.href = a);
        var d = c.pathname;
        "/" !== d[0] && (a || mb("TAGGING", 1), (d = "/" + d));
        var e = c.hostname.replace(bj, "");
        b = {
          href: c.href,
          protocol: c.protocol,
          host: c.host,
          hostname: e,
          pathname: d,
          search: c.search,
          hash: c.hash,
          port: c.port,
        };
        5 > jj && ((ij[a] = b), jj++);
      }
      return b;
    },
    kj = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = U(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var m = "" + f + g + h;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    lj = function (a) {
      var b = U(G.location.href),
        c = gj(b, "host", !1);
      if (c && c.match(cj)) {
        var d = gj(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var mj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function nj(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return U("" + c + b).href;
    }
  }
  function oj() {
    return Di.F || si;
  }
  function pj() {
    return !!ki.Cf && "SGTM_TOKEN" !== ki.Cf.split("@@").join("");
  }
  function qj(a) {
    for (var b = pa([Q.g.jd, Q.g.Mb]), c = b.next(); !c.done; c = b.next()) {
      var d = W(a, c.value);
      if (d) return d;
    }
  }
  function rj(a, b) {
    return Di.F ? "" + Ei() + (b ? mj[a] || "" : "") : a;
  }
  function sj(a) {
    var b = String(a[Ge.ra] || "").replace(/_/g, "");
    0 === b.indexOf("cvt") && (b = "cvt");
    return b;
  }
  var tj =
    0 <= G.location.search.indexOf("?gtm_latency=") ||
    0 <= G.location.search.indexOf("&gtm_latency=");
  var uj = { sampleRate: "0.005000", lk: "", kn: "" };
  function vj() {
    var a = uj.sampleRate;
    return Number(a);
  }
  var wj = Math.random(),
    xj = tj || wj < vj(),
    yj = tj || (!T(42) && xj) || (T(42) && !xj && wj < vj() + Number(uj.kn));
  function zj(a, b) {
    var c = Aj();
    c.pending || (c.pending = []);
    tb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  var Bj = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
  };
  function Aj() {
    var a = tc("google_tag_data", {}),
      b = a.tidr;
    b || ((b = new Bj()), (a.tidr = b));
    return b;
  }
  var Cj = {},
    Dj = !1,
    Lf = {
      ctid: "GTM-TD7QNGH",
      canonicalContainerId: "56889423",
      Sj: "GTM-TD7QNGH",
      Tj: "GTM-TD7QNGH",
    };
  Cj.fe = zb("");
  function Ej() {
    var a = Fj();
    return Dj ? a.map(Gj) : a;
  }
  function Hj() {
    var a = Ij();
    return Dj ? a.map(Gj) : a;
  }
  function Jj() {
    return Kj(Lf.ctid);
  }
  function Lj() {
    return Kj(Lf.canonicalContainerId || "_" + Lf.ctid);
  }
  function Fj() {
    return Lf.Sj ? Lf.Sj.split("|") : [Lf.ctid];
  }
  function Ij() {
    return Lf.Tj ? Lf.Tj.split("|") : [];
  }
  function Mj() {
    var a = Nj(Oj()),
      b = a && a.parent;
    if (b) return Nj(b);
  }
  function Vj() {
    var a = Nj(Oj());
    if (a) {
      for (; a.parent; ) {
        var b = Nj(a.parent);
        if (!b) break;
        a = b;
      }
      return a;
    }
  }
  function Nj(a) {
    var b = Aj();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function Kj(a) {
    return Dj ? Gj(a) : a;
  }
  function Gj(a) {
    return "siloed_" + a;
  }
  function Wj(a) {
    return Dj ? Xj(a) : a;
  }
  function Xj(a) {
    a = String(a);
    return 0 === a.indexOf("siloed_") ? a.substring(7) : a;
  }
  function Yj() {
    var a = !1;
    if (a) {
      var b = Aj();
      if (b.siloed) {
        for (
          var c = [], d = Fj().map(Gj), e = Ij().map(Gj), f = {}, g = 0;
          g < b.siloed.length;
          f = { Gf: void 0 }, g++
        )
          (f.Gf = b.siloed[g]),
            !Dj &&
            tb(
              f.Gf.isDestination ? e : d,
              (function (h) {
                return function (m) {
                  return m === h.Gf.ctid;
                };
              })(f)
            )
              ? (Dj = !0)
              : c.push(f.Gf);
        b.siloed = c;
      }
    }
  }
  function Zj() {
    var a = Aj();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Ej(), f = Hj(), g = {}, h = 0;
        h < a.pending.length;
        g = { Le: void 0 }, h++
      )
        (g.Le = a.pending[h]),
          tb(
            g.Le.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Le.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Le.onLoad), (d = !0))
            : c.push(g.Le);
      a.pending = c;
      if (b)
        try {
          b(Lj());
        } catch (m) {}
    }
  }
  function ak() {
    for (
      var a = Lf.ctid,
        b = Ej(),
        c = Hj(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: Lf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          sc && (q.scriptSource = sc);
          var r = p ? e.destination : e.container,
            t = r[n];
          t ? (p && 0 === t.state && P(93), Object.assign(t, q)) : (r[n] = q);
        },
        e = Aj(),
        f = pa(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var h = pa(c), m = h.next(); !m.done; m = h.next()) d(m.value, !0);
    e.canonical[Lj()] = {};
    Zj();
  }
  function bk(a) {
    return !!Aj().container[a];
  }
  function ck(a) {
    var b = Aj().destination[a];
    return !!b && !!b.state;
  }
  function Oj() {
    return { ctid: Jj(), isDestination: Cj.fe };
  }
  function dk(a) {
    var b = Aj();
    (b.siloed = b.siloed || []).push(a);
  }
  function ek() {
    var a = Aj().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
    return !1;
  }
  function fk() {
    var a = {};
    z(Aj().destination, function (b, c) {
      0 === c.state && (a[Xj(b)] = c);
    });
    return a;
  }
  function gk(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      1 === a.context.source &&
      0 !== a.parent.ctid.indexOf("GTM-")
    );
  }
  var hk = { kk: Number("5"), ao: Number("") },
    ik = [],
    jk = [];
  function kk(a) {
    ik.push(a);
  }
  var lk = !1,
    mk = "?id=" + Lf.ctid,
    nk = void 0,
    ok = {},
    pk = void 0,
    qk = new (function () {
      var a = 5;
      0 < hk.kk && (a = hk.kk);
      this.F = a;
      this.m = 0;
      this.J = [];
    })(),
    rk = 1e3;
  function sk(a, b, c, d) {
    var e = nk;
    if (void 0 === e)
      if (a) e = 0;
      else if (c) e = Bi();
      else return "";
    for (
      var f = [rj("https://www.googletagmanager.com"), a ? "/td" : "/a", mk],
        g = pa(a ? jk : ik),
        h = g.next();
      !h.done;
      h = g.next()
    )
      for (
        var m = h.value,
          n = m({
            eventId: e,
            Ya: !!b,
            Ij: !!d,
            Lc: function () {
              lk = !0;
            },
          }),
          p = pa(n),
          q = p.next();
        !q.done;
        q = p.next()
      ) {
        var r = pa(q.value),
          t = r.next().value,
          u = r.next().value;
        f.push("&" + t + "=" + u);
      }
    f.push("&z=0");
    return f.join("");
  }
  function tk() {
    if (yj) {
      var a = sk(!0, !0);
      lk && (Bc(a), (lk = !1));
    }
  }
  function uk() {
    pk && (G.clearTimeout(pk), (pk = void 0));
    if (void 0 !== nk && vk) {
      T(43) || tk();
      var a;
      (a = ok[nk]) || (a = qk.m < qk.F ? !1 : 1e3 > Db() - qk.J[qk.m % qk.F]);
      if (a || 0 >= rk--) P(1), (ok[nk] = !0);
      else {
        var b = qk.m++ % qk.F;
        qk.J[b] = Db();
        var c = sk(!1, !0);
        Bc(c);
        vk = lk = !1;
      }
    }
  }
  var vk = !1;
  function wk(a) {
    ok[a] && !T(43)
      ? tk()
      : (a !== nk && (uk(), (nk = a)),
        (vk = !0),
        pk || (pk = G.setTimeout(uk, 500)),
        2022 <= sk(!1).length && uk());
  }
  var xk = ub();
  function yk() {
    xk = ub();
  }
  function zk() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(xk)],
    ];
  }
  var Ak = "https://www.googletagmanager.com/td?id=" + Lf.ctid,
    Bk = ["v", "t", "pid", "dl", "tdp"],
    Ck = {},
    Dk = {};
  function Ek(a, b) {
    Dk[a] = b;
    void 0 === Ck[a] && (Ck[a] = !0);
  }
  function Fk() {
    var a = Object.keys(Ck)
      .filter(function (b) {
        return !0 === Ck[b] && void 0 !== Dk[b];
      })
      .map(function (b) {
        var c = Dk[b];
        "function" === typeof c && (c = c());
        return c ? "&" + b + "=" + c : "";
      })
      .join("");
    return "" + Ak + a + "&z=0";
  }
  function Gk() {
    Object.keys(Ck).forEach(function (a) {
      0 > Bk.indexOf(a) && (Ck[a] = !1);
    });
  }
  function Hk() {
    yj && T(43) && (T(41) ? (Bc(Fk()), Gk()) : tk());
  }
  var Ik = ub();
  function Jk() {
    Ik = ub();
  }
  function Kk() {
    yj &&
      (T(41)
        ? (Ek("v", "3"),
          Ek("t", "t"),
          Ek("pid", function () {
            return String(Ik);
          }),
          G.setInterval(Jk, 864e5))
        : jk.push(zk));
  }
  var Lk = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Mk = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var Nk = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  var Ok, Pk;
  a: {
    for (var Qk = ["CLOSURE_FLAGS"], Rk = Ca, Sk = 0; Sk < Qk.length; Sk++)
      if (((Rk = Rk[Qk[Sk]]), null == Rk)) {
        Pk = null;
        break a;
      }
    Pk = Rk;
  }
  var Tk = Pk && Pk[610401301];
  Ok = null != Tk ? Tk : !1;
  function Uk() {
    var a = Ca.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Vk,
    Wk = Ca.navigator;
  Vk = Wk ? Wk.userAgentData || null : null;
  function Xk(a) {
    return Ok
      ? Vk
        ? Vk.brands.some(function (b) {
            var c;
            return (c = b.brand) && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function Yk(a) {
    return -1 != Uk().indexOf(a);
  }
  function Zk() {
    return Ok ? !!Vk && 0 < Vk.brands.length : !1;
  }
  function $k() {
    return Zk() ? !1 : Yk("Opera");
  }
  function al() {
    return Yk("Firefox") || Yk("FxiOS");
  }
  function bl() {
    return Zk()
      ? Xk("Chromium")
      : ((Yk("Chrome") || Yk("CriOS")) && !(Zk() ? 0 : Yk("Edge"))) ||
          Yk("Silk");
  }
  function cl() {
    return Ok ? !!Vk && !!Vk.platform : !1;
  }
  function dl() {
    return Yk("iPhone") && !Yk("iPod") && !Yk("iPad");
  }
  function el() {
    dl() || Yk("iPad") || Yk("iPod");
  }
  var fl = function (a) {
    fl[" "](a);
    return a;
  };
  fl[" "] = function () {};
  $k();
  Zk() || Yk("Trident") || Yk("MSIE");
  Yk("Edge");
  !Yk("Gecko") ||
    (-1 != Uk().toLowerCase().indexOf("webkit") && !Yk("Edge")) ||
    Yk("Trident") ||
    Yk("MSIE") ||
    Yk("Edge");
  -1 != Uk().toLowerCase().indexOf("webkit") && !Yk("Edge") && Yk("Mobile");
  cl() || Yk("Macintosh");
  cl() || Yk("Windows");
  (cl() ? "Linux" === Vk.platform : Yk("Linux")) || cl() || Yk("CrOS");
  cl() || Yk("Android");
  dl();
  Yk("iPad");
  Yk("iPod");
  el();
  Uk().toLowerCase().indexOf("kaios");
  var gl = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    hl = /#|$/,
    il = function (a, b) {
      var c = a.search(hl),
        d = gl(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    jl = /[?&]($|#)/,
    kl = function (a, b, c) {
      for (
        var d, e = a.search(hl), f = 0, g, h = [];
        0 <= (g = gl(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(jl, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var ll = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              fl(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    ml = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function nl(a) {
    if (!a || !H.head) return null;
    var b = ol("META");
    H.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var pl = function (a) {
      if (G.top == G) return 0;
      if (void 0 === a ? 0 : a) {
        var b = G.location.ancestorOrigins;
        if (b) return b[b.length - 1] == G.location.origin ? 1 : 2;
      }
      return ll(G.top) ? 1 : 2;
    },
    ol = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  var ql = "",
    rl,
    sl = [],
    tl = !1;
  function ul() {
    var a = U(G.location.href);
    return a.hostname + a.pathname;
  }
  function vl() {
    var a = [];
    ql && a.push(["dl", encodeURIComponent(ql)]);
    0 < sl.length && a.push(["tdp", sl.join(".")]);
    void 0 !== rl && a.push(["frm", String(rl)]);
    return a;
  }
  var wl = function (a) {
    var b = tl ? [] : vl();
    !tl && a.Ya && ((tl = !0), b.length && a.Lc());
    return b;
  };
  function xl() {
    if (T(41)) {
      var a = ul();
      a && Ek("dl", encodeURIComponent(a));
      Ek("tdp", function () {
        return 0 < sl.length ? sl.join(".") : void 0;
      });
      var b = pl(!0);
      void 0 !== b && Ek("frm", String(b));
    } else jk.push(wl);
  }
  var yl = [],
    zl = [];
  function Al(a) {
    -1 === zl.indexOf(a) && (yl.push(a), zl.push(a), Hk());
  }
  function Bl(a) {
    if (!yl.length) return [];
    for (var b = vl(), c = pa(yl), d = c.next(); !d.done; d = c.next())
      b.push([d.value, "1"]);
    a.Ya && (a.Lc(), (yl.length = 0));
    return b;
  }
  function Cl(a) {
    mb("HEALTH", a);
  }
  var Dl;
  try {
    Dl = JSON.parse(
      kb(
        "eyIwIjoiSU4iLCIxIjoiSU4tTUgiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    P(123), Cl(2), (Dl = {});
  }
  function El() {
    return Dl["0"] || "";
  }
  function Fl() {
    var a = !1;
    return a;
  }
  function Gl() {
    return !1 !== Dl["6"];
  }
  function Hl() {
    var a = "";
    return a;
  }
  function Il() {
    var a = !1;
    a = !!Dl["5"];
    return a;
  }
  function Jl() {
    var a = "";
    return a;
  }
  var Kl = new (function (a, b) {
    this.m = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  function Ll() {
    var a = tc("google_tag_data", {});
    return (a.ics = a.ics || new Ml());
  }
  var Ml = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.m = [];
  };
  Ml.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    mb("TAGGING", 19);
    null == b ? mb("TAGGING", 18) : Nl(this, a, "granted" === b, c, d, e, f, g);
  };
  Ml.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Nl(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Nl = function (a, b, c, d, e, f, g, h) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && l(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if ("" === e || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && 0 < g && void 0 === n.update),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: void 0 !== c ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if ("" !== e || !1 !== n.default) m[b] = t;
      r &&
        G.setTimeout(function () {
          m[b] === t &&
            t.quiet &&
            (mb("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, h),
            a.notifyListeners());
        }, g);
    }
  };
  ca = Ml.prototype;
  ca.clearTimeout = function (a, b, c) {
    var d = [a],
      e = (null == c ? void 0 : c.delegatedConsentTypes) || {},
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      h = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = pa(d), n = m.next(); !n.done; n = m.next())
        Ol(this, n.value);
    } else if (void 0 !== b && h !== b)
      for (var p = pa(d), q = p.next(); !q.done; q = p.next())
        Ol(this, q.value);
  };
  ca.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (null != b) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = "granted" === b;
      this.clearTimeout(a, d, c);
    }
  };
  ca.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      h = g.declare_region,
      m = c && l(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if ("" === d || m === e || (m === d ? h !== e : !m && !h)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if ("" !== d || !1 !== g.declare) f[a] = n;
    }
  };
  ca.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  ca.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.default;
    if (void 0 !== e) return e ? 1 : 2;
    if (null == b ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var f = c[b.delegatedConsentTypes[a]] || {};
      e = f.update;
      if (void 0 !== e) return e ? 1 : 2;
      e = f.default;
      if (void 0 !== e) return e ? 1 : 2;
    }
    e = d.declare;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.implicit;
    return void 0 !== e ? (e ? 3 : 4) : 0;
  };
  ca.addListener = function (a, b) {
    this.m.push({ consentTypes: a, Bl: b });
  };
  var Ol = function (a, b) {
    for (var c = 0; c < a.m.length; ++c) {
      var d = a.m[c];
      Array.isArray(d.consentTypes) &&
        -1 !== d.consentTypes.indexOf(b) &&
        (d.Uj = !0);
    }
  };
  Ml.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.m.length; ++c) {
      var d = this.m[c];
      if (d.Uj) {
        d.Uj = !1;
        try {
          d.Bl({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var Ql = function () {
    var a = Pl,
      b = "th";
    if (a.th && a.hasOwnProperty(b)) return a.th;
    var c = new a();
    return (a.th = c);
  };
  var Pl = function () {
    var a = {};
    this.m = function () {
      var b = Kl.m,
        c = Kl.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.F = function () {
      a[Kl.m] = !0;
    };
  };
  var Rl = !1,
    Sl = !1,
    Tl = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
    },
    Ul = function (a) {
      var b = Ll();
      b.accessedAny = !0;
      return (l(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c, Tl)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    Vl = function (a) {
      var b = Ll();
      b.accessedAny = !0;
      return b.getConsentState(a, Tl);
    },
    Wl = function (a) {
      for (var b = {}, c = pa(a), d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        b[e] = !1 !== Tl.corePlatformServices[e];
      }
      return b;
    },
    Xl = function (a) {
      var b = Ll();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Yl = function () {
      if (!Ql().m()) return !1;
      var a = Ll();
      a.accessedAny = !0;
      return a.active;
    },
    Zl = function (a, b) {
      Ll().addListener(a, b);
    },
    $l = function (a, b) {
      Ll().notifyListeners(a, b);
    },
    am = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Xl(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Zl(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    bm = function (a, b) {
      function c() {
        for (var h = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Ul(n) && !f[n] && h.push(n);
        }
        return h;
      }
      function d(h) {
        for (var m = 0; m < h.length; m++) f[h[m]] = !0;
      }
      var e = l(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        Zl(e, function (h) {
          function m(q) {
            0 !== q.length && (d(q), (h.consentTypes = q), a(h));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : G.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  var cm = [Q.g.R, Q.g.W, Q.g.P, Q.g.Aa],
    dm,
    em;
  function fm(a) {
    for (
      var b = a[Q.g.mc], c = Array.isArray(b) ? b : [b], d = { Be: 0 };
      d.Be < c.length;
      d = { Be: d.Be }, ++d.Be
    )
      z(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== Q.g.mc) {
              var h = c[e.Be],
                m = El(),
                n = Dl["1"] || "";
              Sl = !0;
              Rl && mb("TAGGING", 20);
              Ll().declare(f, g, h, m, n);
            }
          };
        })(d)
      );
  }
  function gm(a) {
    !em && dm && Al("crc");
    em = !0;
    var b = a[Q.g.mc];
    b && P(40);
    var c = a[Q.g.Re];
    c && P(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { Ce: 0 };
      e.Ce < d.length;
      e = { Ce: e.Ce }, ++e.Ce
    )
      z(
        a,
        (function (f) {
          return function (g, h) {
            if (g !== Q.g.mc && g !== Q.g.Re) {
              var m = d[f.Ce],
                n = Number(c),
                p = El(),
                q = Dl["1"] || "";
              n = void 0 === n ? 0 : n;
              Rl = !0;
              Sl && mb("TAGGING", 20);
              Ll().default(g, h, m, p, q, n, Tl);
            }
          };
        })(e)
      );
  }
  function hm(a, b) {
    dm = !0;
    z(a, function (c, d) {
      Rl = !0;
      Sl && mb("TAGGING", 20);
      Ll().update(c, d, Tl);
    });
    $l(b.eventId, b.priorityId);
  }
  function im(a) {
    a.hasOwnProperty("all") &&
      z(ji, function (b) {
        Tl.corePlatformServices[b] = "granted" === a.all;
        Tl.usedCorePlatformServices = !0;
      });
    z(a, function (b, c) {
      "all" !== b &&
        ((Tl.corePlatformServices[b] = "granted" === c),
        (Tl.usedCorePlatformServices = !0));
    });
  }
  function X(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return Ul(b);
    });
  }
  function jm(a, b) {
    Zl(a, b);
  }
  function km(a, b) {
    bm(a, b);
  }
  function lm(a, b) {
    am(a, b);
  }
  function mm() {
    var a = [Q.g.R, Q.g.Aa, Q.g.P];
    Ll().waitForUpdate(a, 500, Tl);
  }
  function nm(a) {
    for (var b = pa(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      Ll().clearTimeout(d, void 0, Tl);
    }
    $l();
  }
  var om = function () {
    if (void 0 === li.pscdl) {
      var a = function (b) {
        li.pscdl = b;
      };
      try {
        "cookieDeprecationLabel" in qc
          ? (a("pending"), qc.cookieDeprecationLabel.getValue().then(a))
          : a("noapi");
      } catch (b) {
        a("error");
      }
    }
  };
  var pm = /[A-Z]+/,
    qm = /\s/;
  function rm(a, b) {
    if (l(a)) {
      a = Bb(a);
      var c = a.indexOf("-");
      if (!(0 > c)) {
        var d = a.substring(0, c);
        if (pm.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if ("DC" === d && 2 === f.length) {
              var h = g(f[1]);
              2 === h.length && ((f[1] = h[0]), f.push(h[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (qm.test(f[m]) && ("AW" !== d || 1 !== m))) return;
          }
          return { id: a, prefix: d, ka: d + "-" + f[0], ma: f };
        }
      }
    }
  }
  function sm(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = rm(a[d], b);
      e && (c[e.id] = e);
    }
    tm(c);
    var f = [];
    z(c, function (g, h) {
      f.push(h);
    });
    return f;
  }
  function tm(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.ma[um[2]] && b.push(d.ka);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var vm = {},
    um =
      ((vm[0] = 0),
      (vm[1] = 0),
      (vm[2] = 1),
      (vm[3] = 0),
      (vm[4] = 1),
      (vm[5] = 2),
      (vm[6] = 0),
      (vm[7] = 0),
      (vm[8] = 0),
      vm);
  var wm = [],
    xm = { initialized: 11, complete: 12, interactive: 13 },
    ym = {},
    zm = Object.freeze(((ym[Q.g.Ka] = !0), ym)),
    Am =
      0 <= H.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= H.location.search.indexOf("&gtm_diagnostics=");
  function Bm(a, b, c) {
    if (yj && "config" === a) {
      var d,
        e = null == (d = rm(b)) ? void 0 : d.ma;
      if (!(e && 1 < e.length)) {
        var f,
          g = tc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var h = k(c.M);
        k(c.m, h);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = Cm(f[n], h);
            p.length && (Am && console.log(p), m.push(n));
          }
        m.length &&
          (m.length && yj && (wm.push(b + "*" + m.join(".")), Hk()),
          mb("TAGGING", xm[H.readyState] || 14));
        f[b] = h;
      }
    }
  }
  function Dm(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Cm(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (r, t) {
        var u;
        "object" === Wa(t) ? (u = t[r]) : "array" === Wa(t) && (u = t[r]);
        return void 0 === u ? zm[r] : u;
      },
      f = Dm(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var h = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = "object" === Wa(m) || "array" === Wa(m),
          q = "object" === Wa(n) || "array" === Wa(n);
        if (p && q) Cm(m, n, c, h);
        else if (p || q || m !== n) c[h] = !0;
      }
    return Object.keys(c);
  }
  function Em(a) {
    if (!wm.length) return [];
    var b = [["tdc", wm.join("!")]];
    a.Ya && (a.Lc(), (wm.length = 0));
    return b;
  }
  var Fm = function (a, b, c, d, e, f, g, h, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.m = c;
      this.T = d;
      this.J = e;
      this.M = f;
      this.F = g;
      this.eventMetadata = h;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    Gm = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.m);
          c.push(a.T);
          c.push(a.J);
          c.push(a.M);
          c.push(a.F);
          break;
        case 2:
          c.push(a.m);
          break;
        case 1:
          c.push(a.T);
          c.push(a.J);
          c.push(a.M);
          c.push(a.F);
          break;
        case 4:
          c.push(a.m), c.push(a.T), c.push(a.J), c.push(a.M);
      }
      return c;
    },
    W = function (a, b, c, d) {
      for (
        var e = pa(Gm(a, void 0 === d ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (void 0 !== g[b]) return g[b];
      }
      return c;
    },
    Hm = function (a) {
      for (
        var b = {}, c = Gm(a, 4), d = pa(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = pa(f), h = g.next();
          !h.done;
          h = g.next()
        )
          b[h.value] = 1;
      return Object.keys(b);
    },
    Im = function (a, b, c) {
      function d(n) {
        Ya(n) &&
          z(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = Gm(a, void 0 === c ? 3 : c);
      g.reverse();
      for (var h = pa(g), m = h.next(); !m.done; m = h.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    Jm = function (a) {
      for (
        var b = [Q.g.Sc, Q.g.Oc, Q.g.Pc, Q.g.Qc, Q.g.Rc, Q.g.Tc, Q.g.Uc],
          c = Gm(a, 3),
          d = pa(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, h = !1, m = pa(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          void 0 !== f[p] && ((g[p] = f[p]), (h = !0));
        }
        var q = h ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    Km = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.F = {};
      this.T = {};
      this.m = {};
      this.J = {};
      this.ba = {};
      this.M = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    Lm = function (a, b) {
      a.F = b;
      return a;
    },
    Mm = function (a, b) {
      a.T = b;
      return a;
    },
    Nm = function (a, b) {
      a.m = b;
      return a;
    },
    Om = function (a, b) {
      a.J = b;
      return a;
    },
    Pm = function (a, b) {
      a.ba = b;
      return a;
    },
    Qm = function (a, b) {
      a.M = b;
      return a;
    },
    Rm = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Sm = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Tm = function (a, b) {
      a.onFailure = b;
      return a;
    },
    Um = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    Vm = function (a) {
      return new Fm(
        a.eventId,
        a.priorityId,
        a.F,
        a.T,
        a.m,
        a.J,
        a.M,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var Wm = {};
  function Xm(a, b, c) {
    xj && void 0 !== a && ((Wm[a] = Wm[a] || []), Wm[a].push(c + b), wk(a));
  }
  function Ym(a) {
    var b = a.eventId,
      c = a.Ya,
      d = [],
      e = Wm[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete Wm[b];
    return d;
  }
  function Zm(a, b) {
    var c = rm(Kj(a), !0);
    c && $m.register(c, b);
  }
  function an(a, b, c, d) {
    var e = rm(c, d.isGtmEvent);
    e && $m.push("event", [b, a], e, d);
  }
  function bn(a, b, c, d) {
    var e = rm(c, d.isGtmEvent);
    e && $m.push("get", [a, b], e, d);
  }
  function cn(a) {
    var b = rm(Kj(a), !0),
      c;
    b ? (c = dn($m, b).m) : (c = {});
    return c;
  }
  function en(a, b) {
    var c = rm(Kj(a), !0);
    if (c) {
      var d = $m,
        e = k(b, null);
      k(dn(d, c).m, e);
      dn(d, c).m = e;
    }
  }
  var fn = function () {
      this.T = {};
      this.m = {};
      this.F = {};
      this.ba = null;
      this.M = {};
      this.J = !1;
      this.status = 1;
    },
    gn = function (a, b, c, d) {
      this.F = Db();
      this.m = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    hn = function () {
      this.destinations = {};
      this.F = {};
      this.m = [];
    },
    dn = function (a, b) {
      var c = b.ka;
      return (a.destinations[c] = a.destinations[c] || new fn());
    },
    jn = function (a, b, c, d) {
      if (d.m) {
        var e = dn(a, d.m),
          f = e.ba;
        if (f) {
          var g = k(c, null),
            h = k(e.T[d.m.id], null),
            m = k(e.M, null),
            n = k(e.m, null),
            p = k(a.F, null),
            q = {};
          if (xj)
            try {
              q = k(Hi);
            } catch (v) {
              P(72);
            }
          var r = d.m.prefix,
            t = function (v) {
              Xm(d.messageContext.eventId, r, v);
            },
            u = Vm(
              Um(
                Tm(
                  Sm(
                    Rm(
                      Pm(
                        Om(
                          Qm(
                            Nm(
                              Mm(
                                Lm(
                                  new Km(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            Xm(d.messageContext.eventId, r, "1"),
              Bm(d.type, d.m.id, u),
              f(d.m.id, b, d.F, u);
          } catch (v) {
            Xm(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  hn.prototype.register = function (a, b, c) {
    var d = dn(this, a);
    3 !== d.status &&
      ((d.ba = b), (d.status = 3), c && (k(d.m, c), (d.m = c)), this.flush());
  };
  hn.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === dn(this, c).status &&
        ((dn(this, c).status = 2), this.push("require", [{}], c, {})),
      dn(this, c).J && (d.deferrable = !1));
    this.m.push(new gn(a, c, b, d));
    d.deferrable || this.flush();
  };
  hn.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.m.length;
      e = { Ec: void 0, jh: void 0 }
    ) {
      var f = this.m[0],
        g = f.m;
      if (f.messageContext.deferrable)
        !g || dn(this, g).J
          ? ((f.messageContext.deferrable = !1), this.m.push(f))
          : c.push(f),
          this.m.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== dn(this, g).status && !a) {
              this.m.push.apply(this.m, c);
              return;
            }
            break;
          case "set":
            z(f.args[0], function (r, t) {
              k(Kb(r, t), b.F);
            });
            break;
          case "config":
            var h = dn(this, g);
            e.Ec = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  k(Kb(t, u), r.Ec);
                };
              })(e)
            );
            var m = !!e.Ec[Q.g.ac];
            delete e.Ec[Q.g.ac];
            var n = g.ka === g.id;
            m || (n ? (h.M = {}) : (h.T[g.id] = {}));
            (h.J && m) || jn(this, Q.g.da, e.Ec, f);
            h.J = !0;
            n ? k(e.Ec, h.M) : (k(e.Ec, h.T[g.id]), P(70));
            d = !0;
            break;
          case "event":
            e.jh = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  k(Kb(t, u), r.jh);
                };
              })(e)
            );
            jn(this, f.args[1], e.jh, f);
            break;
          case "get":
            var p = {},
              q = ((p[Q.g.rb] = f.args[0]), (p[Q.g.Gb] = f.args[1]), p);
            jn(this, Q.g.Sa, q, f);
        }
        this.m.shift();
        kn(this, f);
      }
    }
    this.m.push.apply(this.m, c);
    d && this.flush();
  };
  var kn = function (a, b) {
      if ("require" !== b.type)
        if (b.m)
          for (var c = dn(a, b.m).F[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.F)
                for (var g = f.F[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    $m = new hn();
  function ln(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = ol("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = kc(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      Nk(e, "load", f);
      Nk(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var nn = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      ml(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      mn(c, b);
    },
    mn = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else ln(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var on = function () {
    this.T = this.T;
    this.J = this.J;
  };
  on.prototype.T = !1;
  on.prototype.addOnDisposeCallback = function (a, b) {
    this.T
      ? void 0 !== b
        ? a.call(b)
        : a()
      : (this.J || (this.J = []), this.J.push(void 0 !== b ? Fa(a, b) : a));
  };
  var pn = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    qn = function (a, b) {
      b = void 0 === b ? {} : b;
      on.call(this);
      this.F = a;
      this.m = null;
      this.Xa = {};
      this.Dc = 0;
      var c;
      this.bc = null != (c = b.Zm) ? c : 500;
      var d;
      this.ba = null != (d = b.On) ? d : !1;
      this.M = null;
    };
  za(qn, on);
  var sn = function (a) {
    return "function" === typeof a.F.__tcfapi || null != rn(a);
  };
  qn.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.ba },
      d = Mk(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.bc &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.bc));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = pn(c)),
          (c.internalBlockOnErrors = b.ba),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      tn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  qn.prototype.removeEventListener = function (a) {
    a && a.listenerId && tn(this, "removeEventListener", null, a.listenerId);
  };
  var vn = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var m;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = un(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && un(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === h
            ? a.purpose && a.vendor
              ? un(a.purpose.legitimateInterests, b) &&
                un(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    un = function (a, b) {
      return !(!a || !a[b]);
    },
    tn = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.F.__tcfapi) {
        var e = a.F.__tcfapi;
        e(b, 2, c, d);
      } else if (rn(a)) {
        wn(a);
        var f = ++a.Dc;
        a.Xa[f] = c;
        if (a.m) {
          var g = {};
          a.m.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    rn = function (a) {
      if (a.m) return a.m;
      var b;
      a: {
        for (var c = a.F, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.m = b;
      return a.m;
    },
    wn = function (a) {
      a.M ||
        ((a.M = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.Xa[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Nk(a.F, "message", a.M));
    },
    xn = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = pn(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (nn({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var yn = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function zn() {
    var a = li.tcf || {};
    return (li.tcf = a);
  }
  var An = function () {
      return new qn(G, { Zm: -1 });
    },
    Gn = function () {
      var a = zn(),
        b = An();
      sn(b) && !Bn() && !Cn() && P(124);
      if (!a.active && sn(b)) {
        Bn() &&
          ((a.active = !0),
          (a.kc = {}),
          (a.cmpId = 0),
          (a.tcfPolicyVersion = 0),
          (Ll().active = !0),
          (a.tcString = "tcunavailable"));
        mm();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState)
              Dn(a), nm([Q.g.R, Q.g.Aa, Q.g.P]), (Ll().active = !0);
            else if (
              ((a.gdprApplies = c.gdprApplies),
              (a.cmpId = c.cmpId),
              (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
              Cn() && (a.active = !0),
              !En(c) || Bn() || Cn())
            ) {
              a.tcfPolicyVersion = c.tcfPolicyVersion;
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in yn) yn.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (En(c)) {
                var g = {},
                  h;
                for (h in yn)
                  if (yn.hasOwnProperty(h))
                    if ("1" === h) {
                      var m,
                        n = c,
                        p = { Fl: !0 };
                      p = void 0 === p ? {} : p;
                      m = xn(n)
                        ? !1 === n.gdprApplies
                          ? !0
                          : "tcunavailable" === n.tcString
                          ? !p.Mj
                          : (p.Mj || void 0 !== n.gdprApplies || p.Fl) &&
                            (p.Mj ||
                              ("string" === typeof n.tcString &&
                                n.tcString.length))
                          ? vn(n, "1", 0)
                          : !0
                        : !1;
                      g["1"] = m;
                    } else g[h] = vn(c, h, yn[h]);
                d = g;
              }
              if (d) {
                a.tcString = c.tcString || "tcempty";
                a.kc = d;
                var q = {},
                  r = ((q[Q.g.R] = a.kc["1"] ? "granted" : "denied"), q);
                !0 !== a.gdprApplies
                  ? (nm([Q.g.R, Q.g.Aa, Q.g.P]), (Ll().active = !0))
                  : ((r[Q.g.Aa] =
                      a.kc["3"] && a.kc["4"] ? "granted" : "denied"),
                    "number" === typeof a.tcfPolicyVersion &&
                    4 <= a.tcfPolicyVersion
                      ? (r[Q.g.P] =
                          a.kc["1"] && a.kc["7"] ? "granted" : "denied")
                      : nm([Q.g.P]),
                    hm(
                      r,
                      { eventId: 0 },
                      {
                        gdprApplies: a ? a.gdprApplies : void 0,
                        tcString: Fn() || "",
                      }
                    ));
              }
            } else nm([Q.g.R, Q.g.Aa, Q.g.P]);
          });
        } catch (c) {
          Dn(a), nm([Q.g.R, Q.g.Aa, Q.g.P]), (Ll().active = !0);
        }
      }
    };
  function Dn(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function En(a) {
    return (
      "tcloaded" === a.eventStatus ||
      "useractioncomplete" === a.eventStatus ||
      "cmpuishown" === a.eventStatus
    );
  }
  var Bn = function () {
    return !0 === G.gtag_enable_tcf_support;
  };
  function Cn() {
    return !0 === zn().enableAdvertiserConsentMode;
  }
  var Fn = function () {
      var a = zn();
      if (a.active) return a.tcString;
    },
    Hn = function () {
      var a = zn();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    },
    In = function (a) {
      if (!yn.hasOwnProperty(String(a))) return !0;
      var b = zn();
      return b.active && b.kc ? !!b.kc[String(a)] : !0;
    };
  var Jn = [Q.g.R, Q.g.W, Q.g.P, Q.g.Aa],
    Kn = {},
    Ln = ((Kn[Q.g.R] = 1), (Kn[Q.g.W] = 2), Kn);
  function Mn(a) {
    if (void 0 === a) return 0;
    switch (W(a, Q.g.oa)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var Xn = function (a) {
      var b = Mn(a);
      if (3 === b) return !1;
      switch (Vl(Q.g.Aa)) {
        case 1:
        case 3:
          return !0;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          return !0;
        default:
          return !1;
      }
    },
    Yn = function () {
      return Yl() || !Ul(Q.g.R) || !Ul(Q.g.W);
    },
    Zn = function () {
      var a = {},
        b;
      for (b in Ln) Ln.hasOwnProperty(b) && (a[Ln[b]] = Vl(b));
      return "G1" + De(a[1] || 0) + De(a[2] || 0);
    },
    $n = {},
    ao =
      (($n[Q.g.R] = 0), ($n[Q.g.W] = 1), ($n[Q.g.P] = 2), ($n[Q.g.Aa] = 3), $n);
  function bo(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var co = function (a) {
      for (var b = "1", c = 0; c < Jn.length; c++) {
        var d = b,
          e,
          f = Jn[c],
          g = Tl.delegatedConsentTypes[f];
        e = void 0 === g ? 0 : ao.hasOwnProperty(g) ? 12 | ao[g] : 8;
        var h = Ll();
        h.accessedAny = !0;
        var m = h.entries[f] || {};
        e = (e << 2) | bo(m.implicit);
        b =
          d +
          ("" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              e
            ] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (bo(m.declare) << 4) | (bo(m.default) << 2) | bo(m.update)
            ]);
      }
      var n = b,
        p;
      p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((Yl() ? 1 : 0) << 2) | Mn(a)
      ];
      return n + p;
    },
    eo = function () {
      if (!Ul(Q.g.P)) return "-";
      for (
        var a = Object.keys(ji), b = Wl(a), c = "", d = pa(a), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value;
        b[f] && (c += ji[f]);
      }
      return c || "-";
    },
    fo = function () {
      return Gl() || ((Bn() || Cn()) && "1" === Hn()) ? "1" : "0";
    },
    go = function () {
      return (Gl() ? !0 : !(!Bn() && !Cn()) && "1" === Hn()) || !Ul(Q.g.P);
    },
    ho = function () {
      var a = "0",
        b = "0",
        c;
      var d = zn();
      c = d.active ? d.cmpId : void 0;
      "number" === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var g = zn();
      f = g.active ? g.tcfPolicyVersion : void 0;
      "number" === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var h = 0;
      Gl() && (h |= 1);
      "1" === Hn() && (h |= 2);
      Bn() && (h |= 4);
      var m;
      var n = zn();
      m =
        void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      "1" === m && (h |= 8);
      Ll().waitPeriodTimedOut && (h |= 16);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]
      );
    };
  function io() {
    var a = !1;
    return a;
  }
  var jo = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function ko(a) {
    a = void 0 === a ? {} : a;
    var b = Lf.ctid.split("-")[0].toUpperCase(),
      c = {};
    c.ctid = Lf.ctid;
    c.Im = ki.je;
    c.Mm = ki.Og;
    c.im = Cj.fe ? 2 : 1;
    c.Tm = a.dk;
    c.se = Lf.canonicalContainerId;
    c.se !== a.za && (c.za = a.za);
    if (T(68)) {
      var d = Mj();
      c.ym = d ? d.canonicalContainerId : void 0;
    }
    qi ? ((c.Of = jo[b]), c.Of || (c.Of = 0)) : (c.Of = ui ? 13 : 10);
    Di.M
      ? ((c.Mf = 0), (c.kl = 2))
      : si
      ? (c.Mf = 1)
      : io()
      ? (c.Mf = 2)
      : (c.Mf = 3);
    var e = {};
    e[6] = Dj;
    c.ol = e;
    var f = a.Ff,
      g;
    var h = c.Of,
      m = c.Mf;
    void 0 === h
      ? (g = "")
      : (m || (m = 0), (g = "" + Fe(1, 1) + Ce((h << 2) | m)));
    var n = c.kl,
      p = "4" + g + (n ? "" + Fe(2, 1) + Ce(n) : ""),
      q,
      r = c.Mm;
    q = r && Ee.test(r) ? "" + Fe(3, 2) + r : "";
    var t,
      u = c.Im;
    t = u ? "" + Fe(4, 1) + Ce(u) : "";
    var v;
    var w = c.ctid;
    if (w && f) {
      var y = w.split("-"),
        x = y[0].toUpperCase();
      if ("GTM" !== x && "OPT" !== x) v = "";
      else {
        var B = y[1];
        v = "" + Fe(5, 3) + Ce(1 + B.length) + (c.im || 0) + B;
      }
    } else v = "";
    var A = c.Tm,
      D = c.se,
      E = c.za,
      C = c.Yn,
      F =
        p +
        q +
        t +
        v +
        (A ? "" + Fe(6, 1) + Ce(A) : "") +
        (D ? "" + Fe(7, 3) + Ce(D.length) + D : "") +
        (E ? "" + Fe(8, 3) + Ce(E.length) + E : "") +
        (C ? "" + Fe(9, 3) + Ce(C.length) + C : ""),
      M;
    var L = c.ol;
    L = void 0 === L ? {} : L;
    for (
      var O = [], V = pa(Object.keys(L)), ba = V.next();
      !ba.done;
      ba = V.next()
    ) {
      var aa = ba.value;
      O[Number(aa)] = L[aa];
    }
    if (O.length) {
      var R = Fe(10, 3),
        oa;
      if (0 === O.length) oa = Ce(0);
      else {
        for (var ka = [], ha = 0, ia = !1, Ja = 0; Ja < O.length; Ja++) {
          ia = !0;
          var Ba = Ja % 6;
          O[Ja] && (ha |= 1 << Ba);
          5 === Ba && (ka.push(Ce(ha)), (ha = 0), (ia = !1));
        }
        ia && ka.push(Ce(ha));
        oa = ka.join("");
      }
      var Pa = oa;
      M = "" + R + Ce(Pa.length) + Pa;
    } else M = "";
    var Ra = c.ym;
    return F + M + (Ra ? "" + Fe(11, 3) + Ce(Ra.length) + Ra : "");
  }
  var lo = {
      Pg: "service_worker_endpoint",
      Qg: "shared_user_id",
      Rg: "shared_user_id_requested",
      me: "shared_user_id_source",
    },
    mo;
  function no(a) {
    if (!mo) {
      mo = {};
      for (var b = pa(Object.keys(lo)), c = b.next(); !c.done; c = b.next())
        mo[lo[c.value]] = !0;
    }
    return !!mo[a];
  }
  function oo(a, b) {
    b = void 0 === b ? !1 : b;
    if (no(a)) {
      var c,
        d,
        e =
          null != (d = (c = tc("google_tag_data", {})).xcd) ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          h = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              h[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return h.hasOwnProperty(p) ? (delete h[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = pa(Object.keys(h)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  h[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function po(a, b) {
    var c = oo(a, !0);
    c && c.set(b);
  }
  function qo(a) {
    var b;
    return null == (b = oo(a)) ? void 0 : b.get();
  }
  function ro(a, b) {
    if ("function" === typeof b) {
      var c;
      return null == (c = oo(a, !0)) ? void 0 : c.subscribe(b);
    }
  }
  function so(a, b) {
    var c = oo(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function to(a) {
    return "null" !== a.origin;
  }
  function uo(a, b, c, d) {
    var e;
    if (vo(d)) {
      for (
        var f = [], g = String(b || wo()).split(";"), h = 0;
        h < g.length;
        h++
      ) {
        var m = g[h].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function xo(a, b, c, d, e) {
    if (vo(e)) {
      var f = yo(a, d, e);
      if (1 === f.length) return f[0].id;
      if (0 !== f.length) {
        f = zo(
          f,
          function (g) {
            return g.vl;
          },
          b
        );
        if (1 === f.length) return f[0].id;
        f = zo(
          f,
          function (g) {
            return g.Am;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function Ao(a, b, c, d) {
    var e = wo(),
      f = window;
    to(f) && (f.document.cookie = a);
    var g = wo();
    return e !== g || (void 0 !== c && 0 <= uo(b, g, !1, d).indexOf(c));
  }
  function Bo(a, b, c, d) {
    function e(w, y, x) {
      if (null == x) return delete h[y], w;
      h[y] = x;
      return w + "; " + y + "=" + x;
    }
    function f(w, y) {
      if (null == y) return w;
      h[y] = !0;
      return w + "; " + y;
    }
    if (!vo(c.Bb)) return 2;
    var g;
    null == b
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = Co(b)),
        (g = a + "=" + b));
    var h = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : null != c.expires && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.mm);
    g = e(g, "samesite", c.Nm);
    c.Om && (g = f(g, "secure"));
    var n = c.domain;
    if (n && "auto" === n.toLowerCase()) {
      for (var p = Do(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
        var u = "none" !== p[t] ? p[t] : void 0,
          v = e(g, "domain", u);
        v = f(v, c.flags);
        try {
          d && d(a, h);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!Eo(u, c.path) && Ao(v, a, b, c.Bb)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, h);
    return Eo(n, c.path) ? 1 : Ao(g, a, b, c.Bb) ? 0 : 1;
  }
  function Fo(a, b, c) {
    null == c.path && (c.path = "/");
    c.domain || (c.domain = "auto");
    return Bo(a, b, c);
  }
  function zo(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        m = b(h);
      m === c
        ? d.push(h)
        : void 0 === f || m < f
        ? ((e = [h]), (f = m))
        : m === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function yo(a, b, c) {
    for (var d = [], e = uo(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || !h || -1 !== b.indexOf(h)) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            vl: Number(n[0]) || 1,
            Am: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function Co(a) {
    a && 1200 < a.length && (a = a.substring(0, 1200));
    return a;
  }
  var Go = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ho = /(^|\.)doubleclick\.net$/i;
  function Eo(a, b) {
    return (
      void 0 !== a &&
      (Ho.test(window.document.location.hostname) || ("/" === b && Go.test(a)))
    );
  }
  function Io(a) {
    if (!a) return 1;
    a = 0 === a.indexOf(".") ? a.substring(1) : a;
    return a.split(".").length;
  }
  function Jo(a) {
    if (!a || "/" === a) return 1;
    "/" !== a[0] && (a = "/" + a);
    "/" !== a[a.length - 1] && (a += "/");
    return a.split("/").length - 1;
  }
  function Ko(a, b) {
    var c = "" + Io(a),
      d = Jo(b);
    1 < d && (c += "-" + d);
    return c;
  }
  var wo = function () {
      return to(window) ? window.document.cookie : "";
    },
    vo = function (a) {
      return a && Ql().m()
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return Xl(b) && Ul(b);
          })
        : !0;
    },
    Do = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Ho.test(e) || Go.test(e) || a.push("none");
      return a;
    };
  function Lo(a) {
    var b = Math.round(2147483647 * Math.random()),
      c;
    if (a) {
      var d = 1,
        e,
        f,
        g;
      if (a)
        for (d = 0, f = a.length - 1; 0 <= f; f--)
          (g = a.charCodeAt(f)),
            (d = ((d << 6) & 268435455) + g + (g << 14)),
            (e = d & 266338304),
            (d = 0 !== e ? d ^ (e >> 21) : d);
      c = String(b ^ (d & 2147483647));
    } else c = String(b);
    return c;
  }
  function Mo(a) {
    return [Lo(a), Math.round(Db() / 1e3)].join(".");
  }
  function No(a, b, c, d, e) {
    var f = Io(b);
    return xo(a, f, Jo(c), d, e);
  }
  function Oo(a, b, c, d) {
    return [b, Ko(c, d), a].join(".");
  }
  function Po(a, b, c, d) {
    var e,
      f = Number(null != a.Ab ? a.Ab : void 0);
    0 !== f && (e = new Date((b || Db()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Bb: d,
    };
  }
  var Qo;
  function Ro() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = So,
      d = To,
      e = Uo();
    if (!e.init) {
      Cc(H, "mousedown", a);
      Cc(H, "keyup", a);
      Cc(H, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function Vo(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: 2 === c,
      placement: c,
      forms: d,
      sameHost: e,
    };
    Uo().decorators.push(f);
  }
  function Wo(a, b, c) {
    for (var d = Uo().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        h;
      if ((h = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== H.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  h = !0;
                  break a;
                }
              } else if (0 <= n.indexOf(m[q]) || (p && 0 <= m[q].indexOf(n))) {
                h = !0;
                break a;
              }
          h = !1;
        }
      if (h) {
        var r = g.placement;
        void 0 === r && (r = g.fragment ? 2 : 1);
        r === b && Gb(e, g.callback());
      }
    }
    return e;
  }
  function Uo() {
    var a = tc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Xo = /(.*?)\*(.*?)\*(.*)/,
    Yo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Zo = /^(?:www\.|m\.|amp\.)+/,
    $o = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function ap(a) {
    var b = $o.exec(a);
    if (b) return { Hh: b[1], query: b[2], fragment: b[3] };
  }
  function bp(a, b) {
    var c = [
        qc.userAgent,
        new Date().getTimezoneOffset(),
        qc.userLanguage || qc.language,
        Math.floor(Db() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Qo)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Qo = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Qo[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function cp() {
    return function (a) {
      var b = U(G.location.href),
        c = b.search.replace("?", ""),
        d = dj(c, "_gl", !1, !0) || "";
      a.query = dp(d) || {};
      var e = gj(b, "fragment"),
        f;
      var g = -1;
      if (Ib(e, "_gl=")) g = 4;
      else {
        var h = e.indexOf("&_gl=");
        0 < h && (g = h + 3 + 2);
      }
      if (0 > g) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = 0 > m ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = dp(f || "") || {};
    };
  }
  function ep(a) {
    var b = cp(),
      c = Uo();
    c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
    var d = {},
      e = c.data;
    e && (Gb(d, e.query), a && Gb(d, e.fragment));
    return d;
  }
  var dp = function (a) {
    try {
      var b = fp(a, 3);
      if (void 0 !== b) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = kb(d[e + 1]);
          c[f] = g;
        }
        mb("TAGGING", 6);
        return c;
      }
    } catch (h) {
      mb("TAGGING", 8);
    }
  };
  function fp(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Xo.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === bp(h, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return h;
        mb("TAGGING", 7);
      }
    }
  }
  function gp(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && "&" !== w && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var g = ap(c);
    if (!g) return "";
    var h = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (0 !== m.substring(1).length && e) || (m = "#" + f(m.substring(1)))
      : (h = "?" + f(h.substring(1)));
    return "" + g.Hh + h + m;
  }
  function hp(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var y = n[w];
            void 0 !== y &&
              y === y &&
              null !== y &&
              "[object Object]" !== y.toString() &&
              (v.push(w), v.push(jb(String(y))));
          }
        var x = v.join("*");
        u = ["1", bp(x), x].join("*");
        d
          ? (Wi(3) || Wi(1) || !p) && ip("_gl", u, a, p, q)
          : jp("_gl", u, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = Wo(b, 1, d),
      f = Wo(b, 2, d),
      g = Wo(b, 4, d),
      h = Wo(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Wi(1) && c(g, !0, !0);
    for (var m in h) h.hasOwnProperty(m) && kp(m, h[m], a);
  }
  function kp(a, b, c) {
    "a" === c.tagName.toLowerCase()
      ? jp(a, b, c)
      : "form" === c.tagName.toLowerCase() && ip(a, b, c);
  }
  function jp(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !Wi(4) || d)) {
        var h = G.location.href,
          m = ap(c.href),
          n = ap(h);
        g = !(m && n && m.Hh === n.Hh && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = gp(a, b, c.href, d, e);
      gc.test(p) && (c.href = p);
    }
  }
  function ip(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var g = gp(a, b, c.action, d, e);
          gc.test(g) && (c.action = g);
        }
      } else {
        for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
          var p = h[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = H.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function So(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || hp(e, e.hostname);
      }
    } catch (g) {}
  }
  function To(a) {
    try {
      if (a.action) {
        var b = gj(U(a.action), "host");
        hp(a, b);
      }
    } catch (c) {}
  }
  function lp(a, b, c, d) {
    Ro();
    var e = "fragment" === c ? 2 : 1;
    d = !!d;
    Vo(a, b, e, d, !1);
    2 === e && mb("TAGGING", 23);
    d && mb("TAGGING", 24);
  }
  function mp(a, b) {
    Ro();
    Vo(a, [fj(G.location, "host", !0)], b, !0, !0);
  }
  function np() {
    var a = H.location.hostname,
      b = Yo.exec(H.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (0 === d.indexOf("xn--")) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var h = a.replace(Zo, ""),
      m = e.replace(Zo, ""),
      n;
    if (!(n = h === m)) {
      var p = "." + m;
      n = h.substring(h.length - p.length, h.length) === p;
    }
    return n;
  }
  function op(a, b) {
    return !1 === a ? !1 : a || b || np();
  }
  var pp = ["1"],
    qp = {},
    rp = {};
  function sp(a, b) {
    b = void 0 === b ? !0 : b;
    var c = tp(a.prefix);
    if (!qp[c])
      if (up(c, a.path, a.domain)) {
        var d = rp[tp(a.prefix)];
        vp(a, d ? d.id : void 0, d ? d.Bh : void 0);
      } else {
        var e = lj("auiddc");
        if (e) mb("TAGGING", 17), (qp[c] = e);
        else if (b) {
          var f = tp(a.prefix),
            g = Mo();
          wp(f, g, a);
          up(c, a.path, a.domain);
        }
      }
  }
  function vp(a, b, c) {
    var d = tp(a.prefix),
      e = qp[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + "." + b + "." + (c ? c : Math.floor(Db() / 1e3)));
          wp(d, h, a, 1e3 * g);
        }
      }
    }
  }
  function wp(a, b, c, d) {
    var e = Oo(b, "1", c.domain, c.path),
      f = Po(c, d);
    f.Bb = xp();
    Fo(a, e, f);
  }
  function up(a, b, c) {
    var d = No(a, b, c, pp, xp());
    if (!d) return !1;
    yp(a, d);
    return !0;
  }
  function yp(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((qp[a] = c.slice(0, 2).join(".")),
        (rp[a] = { id: c.slice(2, 4).join("."), Bh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (rp[a] = { id: c.slice(0, 2).join("."), Bh: Number(c[2]) || 0 })
      : (qp[a] = b);
  }
  function tp(a) {
    return (a || "_gcl") + "_au";
  }
  function zp(a) {
    function b() {
      Ul(c) && a();
    }
    var c = xp();
    am(function () {
      b();
      Ul(c) || bm(b, c);
    }, c);
  }
  function Ap(a) {
    var b = ep(!0),
      c = tp(a.prefix);
    zp(function () {
      var d = b[c];
      if (d) {
        yp(c, d);
        var e = 1e3 * Number(qp[c].split(".")[1]);
        if (e) {
          mb("TAGGING", 16);
          var f = Po(a, e);
          f.Bb = xp();
          var g = Oo(d, "1", a.domain, a.path);
          Fo(c, g, f);
        }
      }
    });
  }
  function Bp(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        h = No(a, e.path, e.domain, pp, xp());
      h && (g[a] = h);
      return g;
    };
    zp(function () {
      lp(f, b, c, d);
    });
  }
  function xp() {
    return ["ad_storage", "ad_user_data"];
  }
  function Cp(a) {
    for (
      var b = [],
        c = H.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Vh: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  }
  function Dp(a, b) {
    var c = Cp(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Vh] || (d[c[e].Vh] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), aa: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Vh].push(g);
      }
    }
    return d;
  }
  var Ep = {},
    Fp =
      ((Ep.k = { Ma: /^[\w-]+$/ }),
      (Ep.b = { Ma: /^[\w-]+$/, Ph: !0 }),
      (Ep.i = { Ma: /^[1-9]\d*$/ }),
      Ep);
  var Gp = {},
    Ip =
      ((Gp[5] = { version: "2", mk: ["2"], Yg: ["k", "i", "b"] }),
      (Gp[4] = {
        version: "2",
        mk: ["2", "GCL"],
        dm: !0,
        hm: Hp,
        Yg: ["k", "i", "b"],
      }),
      Gp);
  function Jp(a) {
    var b = Ip[5];
    if (b) {
      var c = a.split("."),
        d = c.shift();
      if (b.mk.includes(d)) {
        var e = d !== b.version;
        (!e || (e && !b.dm)) && c.shift();
        var f = c.join("."),
          g,
          h;
        if (e) h = null == (g = b.hm) ? void 0 : g.call(b, f, 5);
        else {
          var m = {},
            n = Ip[5];
          if (n) {
            for (
              var p = n.Yg, q = pa(f.split("$")), r = q.next();
              !r.done;
              r = q.next()
            ) {
              var t = r.value,
                u = t[0];
              if (-1 !== p.indexOf(u))
                try {
                  var v = decodeURIComponent(t.substring(1)),
                    w = Fp[u];
                  w &&
                    (w.Ph ? ((m[u] = m[u] || []), m[u].push(v)) : (m[u] = v));
                } catch (y) {}
            }
            h = m;
          } else h = void 0;
        }
        return h;
      }
    }
  }
  function Kp(a, b) {
    var c = Ip[5];
    if (c) {
      for (var d = [], e = pa(c.Yg), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          h = Fp[g];
        if (h) {
          var m = a[g];
          if (void 0 !== m)
            if (h.Ph && Array.isArray(m))
              for (var n = pa(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return [c.version, b || "1", d.join("$")].join(".");
    }
  }
  function Hp(a) {
    var b = a.split("."),
      c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var Lp = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function Mp(a) {
    if (Ip[5]) {
      for (
        var b = [],
          c = uo(a, void 0, void 0, Lp.get(5)),
          d = pa(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = Jp(e.value);
        f && (Np(f), b.push(f));
      }
      return b;
    }
  }
  function Op(a, b, c, d) {
    c = c || {};
    var e = Ko(c.domain, c.path),
      f = Kp(b, e);
    if (f) {
      var g = Po(c, d, void 0, Lp.get(5));
      Fo(a, f, g);
    }
  }
  function Pp(a, b) {
    var c = b.Ma;
    return "function" === typeof c ? c(a) : c.test(a);
  }
  function Np(a) {
    for (
      var b = pa(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { ue: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.ue = Fp[e];
      d.ue
        ? d.ue.Ph
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (h) {
                      return Pp(h, g.ue);
                    };
                  })(d)
                )
              : void 0)
          : ("string" === typeof f && Pp(f, d.ue)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  var Qp = /^\w+$/,
    Rp = /^[\w-]+$/,
    Sp = {},
    Tp =
      ((Sp.aw = "_aw"),
      (Sp.dc = "_dc"),
      (Sp.gf = "_gf"),
      (Sp.gp = "_gp"),
      (Sp.gs = "_gs"),
      (Sp.ha = "_ha"),
      (Sp.ag = "_ag"),
      (Sp.gb = "_gb"),
      Sp);
  function Up() {
    return ["ad_storage", "ad_user_data"];
  }
  function Vp(a) {
    return !Ql().m() || Ul(a);
  }
  function Wp(a, b) {
    function c() {
      var d = Vp(b);
      d && a();
      return d;
    }
    am(function () {
      c() || bm(c, b);
    }, b);
  }
  function Xp(a) {
    return Yp(a).map(function (b) {
      return b.aa;
    });
  }
  function Zp(a) {
    return $p(a)
      .filter(function (b) {
        return b.aa;
      })
      .map(function (b) {
        return b.aa;
      });
  }
  function $p(a) {
    var b = aq(a.prefix),
      c = bq("gb", b),
      d = bq("ag", b);
    if (!d || !c) return [];
    var e = function (h) {
        return function (m) {
          m.type = h;
          return m;
        };
      },
      f = Yp(c).map(e("gb")),
      g = (Wi(6) ? cq(d) : []).map(e("ag"));
    return f.concat(g).sort(function (h, m) {
      return m.timestamp - h.timestamp;
    });
  }
  function dq(a, b, c, d, e) {
    var f = tb(a, function (g) {
      return g.aa === c;
    });
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = eq(f.labels || [], e || [])))
      : a.push({ version: b, aa: c, timestamp: d, labels: e });
  }
  function cq(a) {
    for (
      var b = Mp(a) || [], c = [], d = pa(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        h = fq(f);
      h && dq(c, "2", g.k, h, g.b || []);
    }
    return c.sort(function (m, n) {
      return n.timestamp - m.timestamp;
    });
  }
  function Yp(a) {
    for (
      var b = [], c = uo(a, H.cookie, void 0, Up()), d = pa(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = gq(e.value);
      if (null != f) {
        var g = f;
        dq(b, g.version, g.aa, g.timestamp, g.labels);
      }
    }
    b.sort(function (h, m) {
      return m.timestamp - h.timestamp;
    });
    return hq(b);
  }
  function eq(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function aq(a) {
    return a && "string" === typeof a && a.match(Qp) ? a : "_gcl";
  }
  function iq(a, b) {
    var c = Wi(6),
      d = Wi(7),
      e = U(a),
      f = gj(e, "query", !1, void 0, "gclid"),
      g = gj(e, "query", !1, void 0, "gclsrc"),
      h = gj(e, "query", !1, void 0, "wbraid");
    Wi(8) && (h = Ob(h));
    var m;
    c && (m = gj(e, "query", !1, void 0, "gbraid"));
    var n;
    d && (n = gj(e, "query", !1, void 0, "gad_source"));
    var p = gj(e, "query", !1, void 0, "dclid");
    if (b && (!f || !g || !h || (c && !m))) {
      var q = e.hash.replace("#", "");
      f = f || dj(q, "gclid", !1);
      g = g || dj(q, "gclsrc", !1);
      h = h || dj(q, "wbraid", !1);
      c && (m = m || dj(q, "gbraid", !1));
      d && (n = n || dj(q, "gad_source", !1));
    }
    return jq(f, g, p, h, m, n);
  }
  function kq() {
    return iq(G.location.href, !0);
  }
  function jq(a, b, c, d, e, f) {
    var g = {},
      h = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (void 0 !== a && a.match(Rp))
      switch (b) {
        case void 0:
          h(a, "aw");
          break;
        case "aw.ds":
          h(a, "aw");
          h(a, "dc");
          break;
        case "ds":
          h(a, "dc");
          break;
        case "3p.ds":
          h(a, "dc");
          break;
        case "gf":
          h(a, "gf");
          break;
        case "ha":
          h(a, "ha");
      }
    c && h(c, "dc");
    void 0 !== d && Rp.test(d) && ((g.wbraid = d), h(d, "gb"));
    Wi(6) && void 0 !== e && Rp.test(e) && ((g.gbraid = e), h(e, "ag"));
    Wi(7) && void 0 !== f && Rp.test(f) && ((g.gad_source = f), h(f, "gs"));
    return g;
  }
  function lq(a) {
    var b = kq();
    if (Wi(5)) {
      for (
        var c = !0, d = pa(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (void 0 !== b[e.value]) {
          c = !1;
          break;
        }
      c && (b = iq(G.document.referrer, !1));
    }
    mq(b, !1, a);
  }
  function mq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = aq(c.prefix),
      g = d || Db(),
      h = Math.round(g / 1e3),
      m = Up(),
      n = !1,
      p = !1,
      q = function () {
        if (Vp(m)) {
          var r = Po(c, g, !0);
          r.Bb = m;
          for (
            var t = function (F, M) {
                var L = bq(F, f);
                L && (Fo(L, M, r), "gb" !== F && (n = !0));
              },
              u = function (F) {
                var M = ["GCL", h, F];
                0 < e.length && M.push(e.join("."));
                return M.join(".");
              },
              v = pa(["aw", "dc", "gf", "ha", "gp"]),
              w = v.next();
            !w.done;
            w = v.next()
          ) {
            var y = w.value;
            a[y] && t(y, u(a[y][0]));
          }
          if (!n && a.gb) {
            var x = a.gb[0],
              B = bq("gb", f);
            (!b &&
              Yp(B).some(function (F) {
                return F.aa === x && F.labels && 0 < F.labels.length;
              })) ||
              t("gb", u(x));
          }
        }
        if (!p && Wi(6) && a.gbraid && Vp("ad_storage") && ((p = !0), !n)) {
          var A = a.gbraid,
            D = bq("ag", f);
          if (
            b ||
            !(Wi(6) ? cq(D) : []).some(function (F) {
              return F.aa === A && F.labels && 0 < F.labels.length;
            })
          ) {
            var E = {},
              C = ((E.k = A), (E.i = "" + h), (E.b = e), E);
            Op(D, C, c, g);
          }
        }
        nq(a, f, g, c);
      };
    am(function () {
      q();
      Vp(m) || bm(q, m);
    }, m);
  }
  function nq(a, b, c, d) {
    if (Wi(7) && void 0 !== a.gad_source && Vp("ad_storage")) {
      var e = bq("gs", b);
      if (e) {
        var f = Math.round((Db() - (Nc() || 0)) / 1e3),
          g = {},
          h = ((g.k = a.gad_source), (g.i = "" + f), g);
        Op(e, h, d, c);
      }
    }
  }
  function oq(a, b) {
    var c = ep(!0);
    Wp(function () {
      for (var d = aq(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (void 0 !== Tp[f]) {
          var g = bq(f, d),
            h = c[g];
          if (h) {
            var m = Math.min(pq(h), Db()),
              n;
            b: {
              for (
                var p = m, q = uo(g, H.cookie, void 0, Up()), r = 0;
                r < q.length;
                ++r
              )
                if (pq(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var t = Po(b, m, !0);
              t.Bb = Up();
              Fo(g, h, t);
            }
          }
        }
      }
      mq(jq(c.gclid, c.gclsrc), !1, b);
    }, Up());
  }
  function qq(a) {
    var b = [];
    Wi(6) && b.push("ag");
    if (0 !== b.length) {
      var c = ep(!0),
        d = aq(a.prefix);
      Wp(
        function () {
          for (var e = 0; e < b.length; ++e) {
            var f = bq(b[e], d);
            if (f) {
              var g = c[f];
              if (g) {
                var h = Jp(g);
                if (h) {
                  var m = fq(h);
                  m || (m = Db());
                  var n;
                  a: {
                    for (var p = m, q = Mp(f), r = 0; r < q.length; ++r)
                      if (fq(q[r]) > p) {
                        n = !0;
                        break a;
                      }
                    n = !1;
                  }
                  if (n) break;
                  h.i = "" + Math.round(m / 1e3);
                  Op(f, h, a, m);
                }
              }
            }
          }
        },
        ["ad_storage"]
      );
    }
  }
  function bq(a, b) {
    var c = Tp[a];
    if (void 0 !== c) return b + c;
  }
  function pq(a) {
    return 0 !== rq(a.split(".")).length
      ? 1e3 * (Number(a.split(".")[1]) || 0)
      : 0;
  }
  function fq(a) {
    return a ? 1e3 * (Number(a.i) || 0) : 0;
  }
  function gq(a) {
    var b = rq(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          aa: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function rq(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Rp.test(a[2])
      ? []
      : a;
  }
  function sq(a, b, c, d, e) {
    if (Array.isArray(b) && to(G)) {
      var f = aq(e),
        g = function () {
          for (var h = {}, m = 0; m < a.length; ++m) {
            var n = bq(a[m], f);
            if (n) {
              var p = uo(n, H.cookie, void 0, Up());
              p.length && (h[n] = p.sort()[p.length - 1]);
            }
          }
          return h;
        };
      Wp(function () {
        lp(g, b, c, d);
      }, Up());
    }
  }
  function tq(a, b, c, d) {
    if (Array.isArray(a) && to(G)) {
      var e = [];
      Wi(6) && e.push("ag");
      if (0 !== e.length) {
        var f = aq(d),
          g = function () {
            for (var h = {}, m = 0; m < e.length; ++m) {
              var n = bq(e[m], f);
              if (!n) return {};
              var p = Mp(n);
              if (p.length) {
                var q = p.sort(function (r, t) {
                  return fq(t) - fq(r);
                })[0];
                h[n] = Kp(q);
              }
            }
            return h;
          };
        Wp(
          function () {
            lp(g, a, b, c);
          },
          ["ad_storage"]
        );
      }
    }
  }
  function hq(a) {
    return a.filter(function (b) {
      return Rp.test(b.aa);
    });
  }
  function uq(a, b) {
    if (to(G)) {
      for (var c = aq(b.prefix), d = {}, e = 0; e < a.length; e++)
        Tp[a[e]] && (d[a[e]] = Tp[a[e]]);
      Wp(function () {
        z(d, function (f, g) {
          var h = uo(c + g, H.cookie, void 0, Up());
          h.sort(function (t, u) {
            return pq(u) - pq(t);
          });
          if (h.length) {
            var m = h[0],
              n = pq(m),
              p = 0 !== rq(m.split(".")).length ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = 0 !== rq(m.split(".")).length ? m.split(".")[2] : void 0;
            q[f] = [r];
            mq(q, !0, b, n, p);
          }
        });
      }, Up());
    }
  }
  function vq(a) {
    var b = [],
      c = [];
    Wi(6) && (b.push("ag"), c.push("gbraid"));
    0 !== b.length &&
      Wp(
        function () {
          for (var d = aq(a.prefix), e = 0; e < b.length; ++e) {
            var f = bq(b[e], d);
            if (!f) break;
            var g = Mp(f);
            if (g.length) {
              var h = g.sort(function (q, r) {
                  return fq(r) - fq(q);
                })[0],
                m = fq(h),
                n = h.b,
                p = {};
              p[c[e]] = h.k;
              mq(p, !0, a, m, n);
            }
          }
        },
        ["ad_storage"]
      );
  }
  function wq(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function xq(a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (Yl()) {
      var c = kq();
      if (wq(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.wbraid);
        Wi(6) && b(d, "gbraid", c.gbraid);
        mp(function () {
          return d;
        }, 3);
        mp(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  }
  function yq(a) {
    if (!Wi(1)) return null;
    var b = ep(!0).gad_source;
    if (null != b) return (G.location.hash = ""), b;
    if (Wi(2)) {
      var c = U(G.location.href);
      b = gj(c, "query", !1, void 0, "gad_source");
      if (null != b) return b;
      var d = kq();
      if (wq(d, a)) return "0";
    }
    return null;
  }
  function zq(a) {
    var b = yq(a);
    null != b &&
      mp(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function Aq(a, b, c) {
    var d = [];
    if (0 === b.length) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        h = g.type ? g.type : "gcl";
      -1 === (g.labels || []).indexOf(c)
        ? (a.push(0), e[h] || d.push(g))
        : a.push(1);
      e[h] = !0;
    }
    return d;
  }
  function Bq(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Vp(Up())) return e;
    var f = Yp(a),
      g = Aq(e, f, b);
    if (g.length && !d)
      for (var h = pa(g), m = h.next(); !m.done; m = h.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.aa]
            .concat(n.labels || [], [b])
            .join("."),
          r = Po(c, p, !0);
        r.Bb = Up();
        Fo(a, q, r);
      }
    return e;
  }
  function Cq(a, b) {
    var c = [];
    b = b || {};
    var d = $p(b),
      e = Aq(c, d, a);
    if (e.length)
      for (var f = pa(e), g = f.next(); !g.done; g = f.next()) {
        var h = g.value,
          m = aq(b.prefix),
          n = bq(h.type, m);
        if (!n) break;
        var p = h,
          q = p.version,
          r = p.aa,
          t = p.labels,
          u = p.timestamp,
          v = Math.round(u / 1e3);
        if ("ag" === h.type) {
          var w = {},
            y = ((w.k = r), (w.i = "" + v), (w.b = (t || []).concat([a])), w);
          Op(n, y, b, u);
        } else if ("gb" === h.type) {
          var x = [q, v, r].concat(t || [], [a]).join("."),
            B = Po(b, u, !0);
          B.Bb = Up();
          Fo(n, x, B);
        }
      }
    return c;
  }
  function Dq(a, b) {
    var c = aq(b),
      d = bq(a, c);
    if (!d) return 0;
    var e;
    e = "ag" === a ? (Wi(6) ? cq(d) : []) : Yp(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Eq(a) {
    for (var b = 0, c = pa(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function Fq(a, b) {
    var c = Math.max(Dq("aw", a), Eq(Vp(Up()) ? Dp() : {})),
      d = Math.max(Dq("gb", a), Eq(Vp(Up()) ? Dp("_gac_gb", !0) : {}));
    Wi(6) && b && (d = Math.max(d, Dq("ag", a)));
    return d > c;
  }
  var Gq = function (a, b, c) {
      var d = (li.joined_auid = li.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    Hq = function () {
      var a = U(G.location.href),
        b = gj(a, "query", !1, void 0, "gad_source");
      if (void 0 === b) {
        var c = a.hash.replace("#", "");
        b = dj(c, "gad_source", !1);
      }
      return b;
    },
    Iq = function () {
      var a = U(G.location.href).search.replace("?", "");
      return "1" === dj(a, "gad", !1, !0);
    },
    Jq = function () {
      var a = 1 === pl(!0) ? G.top.location.href : G.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    Kq = function (a) {
      var b = [];
      z(a, function (c, d) {
        d = hq(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].aa);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    Mq = function (a, b, c) {
      if ("aw" === a || "dc" === a || "gb" === a) {
        var d = lj("gcl" + a);
        if (d) return d.split(".");
      }
      var e = aq(b);
      if ("_gcl" === e) {
        var f = !X(Lq()) && c,
          g;
        g = kq()[a] || [];
        if (0 < g.length) return f ? ["0"] : g;
      }
      var h = bq(a, e);
      return h ? Xp(h) : [];
    },
    Nq = function (a) {
      var b = Lq();
      lm(function () {
        a();
        X(b) || bm(a, b);
      }, b);
    },
    Lq = function () {
      return [Q.g.R, Q.g.P];
    },
    Oq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Pq = /^www.googleadservices.com$/,
    Qq = function (a, b) {
      return Mq("aw", a, b);
    },
    Rq = function (a, b) {
      return Mq("dc", a, b);
    },
    Sq = function (a, b, c, d, e) {
      var f = kq(),
        g = [],
        h = f.gclid,
        m = f.dclid,
        n = f.gclsrc || "aw",
        p = Iq(),
        q = Hq();
      !h ||
        ("aw.ds" !== n && "aw" !== n && "ds" !== n && "3p.ds" !== n) ||
        g.push({ aa: h, ze: n });
      m && g.push({ aa: m, ze: "ds" });
      2 === g.length && P(147);
      0 === g.length && f.wbraid && g.push({ aa: f.wbraid, ze: "gb" });
      0 === g.length && "aw.ds" === n && g.push({ aa: "", ze: "aw.ds" });
      Nq(function () {
        if (T(77) || X(Q.g.R)) {
          var r = X(Lq());
          sp(a);
          var t = [],
            u = r ? qp[tp(a.prefix)] : void 0;
          u && t.push("auid=" + u);
          if (X(Q.g.P)) {
            e && t.push("userId=" + e);
            var v = qo(lo.Qg);
            if (void 0 === v) po(lo.Rg, !0);
            else {
              var w = qo(lo.me);
              t.push("ga_uid=" + w + "." + v);
            }
          }
          var y = H.referrer ? gj(U(H.referrer), "host") : "",
            x = r || !d ? g : [];
          0 === x.length &&
            (Oq.test(y) || Pq.test(y)) &&
            x.push({ aa: "", ze: "" });
          if (0 !== x.length || p || void 0 !== q) {
            y && t.push("ref=" + encodeURIComponent(y));
            var B = Jq();
            t.push("url=" + encodeURIComponent(B));
            t.push("tft=" + Db());
            var A = Nc();
            void 0 !== A && t.push("tfd=" + Math.round(A));
            var D = pl(!0);
            t.push("frm=" + D);
            p && t.push("gad=1");
            void 0 !== q && t.push("gad_source=" + encodeURIComponent(q));
            var E = c;
            void 0 === E && (E = $m.F[Q.g.oa]);
            var C = {},
              F = Vm(Lm(new Km(0), ((C[Q.g.oa] = E), C)));
            t.push("gtm=" + ko({ za: b }));
            Yn() && t.push("gcs=" + Zn());
            t.push("gcd=" + co(F));
            go() && t.push("dma_cps=" + eo());
            t.push("dma=" + fo());
            Xn(F) ? t.push("npa=0") : t.push("npa=1");
            sn(An()) && t.push("tcfd=" + ho());
            var M = Hn();
            M && t.push("gdpr=" + M);
            var L = Fn();
            L && t.push("gdpr_consent=" + L);
            T(16) && t.push("apve=" + (T(17) ? 1 : 0));
            Di.m && t.push("tag_exp=" + Di.m);
            var O = r
              ? "https://adservice.google.com/pagead/regclk"
              : "https://adservice.googlesyndication.com/pagead/regclk";
            if (0 < x.length)
              for (var V = 0; V < x.length; V++) {
                var ba = x[V],
                  aa = ba.aa,
                  R = ba.ze;
                if (!Gq(a.prefix, R + "." + aa, void 0 !== u)) {
                  var oa = O + "?" + t.join("&");
                  "" !== aa
                    ? (oa =
                        "gb" === R
                          ? oa + "&wbraid=" + aa
                          : oa + "&gclid=" + aa + "&gclsrc=" + R)
                    : "aw.ds" === R && (oa += "&gclsrc=aw.ds");
                  Ic(oa);
                }
              }
            else if (
              (p || void 0 !== q) &&
              !Gq(a.prefix, "gad", void 0 !== u)
            ) {
              var ka = O + "?" + t.join("&");
              Ic(ka);
            }
          }
        }
      });
    };
  var Tq,
    Uq = !1;
  function Vq() {
    Uq = !0;
    Tq = Tq || {};
  }
  function Wq(a) {
    Uq || Vq();
    return Tq[a];
  }
  var Xq = function (a, b, c) {
    this.eventName = b;
    this.o = c;
    this.C = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = k(c.eventMetadata || {}, {});
  };
  Xq.prototype.copyToHitData = function (a, b, c) {
    var d = W(this.o, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && l(d) && T(51))
      try {
        d = c(d);
      } catch (e) {}
    void 0 !== d && (this.C[a] = d);
  };
  var Yq = function (a, b, c) {
    var d = Wq(a.target.ka);
    return d && void 0 !== d[b] ? d[b] : c;
  };
  function Zq() {
    li.dedupe_gclid || (li.dedupe_gclid = Mo());
    return li.dedupe_gclid;
  }
  var $q = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    ar = /^www.googleadservices.com$/;
  function br(a) {
    a || (a = cr());
    return a.hn
      ? !1
      : a.Ql || a.Rl || a.Tl || a.Sl || a.rh || a.lh || a.El || a.Il
      ? !0
      : !1;
  }
  function cr() {
    var a = {},
      b = ep(!0);
    a.hn = !!b._up;
    var c = kq();
    a.Ql = void 0 !== c.aw;
    a.Rl = void 0 !== c.dc;
    a.Tl = void 0 !== c.wbraid;
    a.Sl = void 0 !== c.gbraid;
    var d = U(G.location.href),
      e = gj(d, "query", !1, void 0, "gad");
    a.rh = void 0 !== e;
    if (!a.rh) {
      var f = d.hash.replace("#", ""),
        g = dj(f, "gad", !1);
      a.rh = void 0 !== g;
    }
    a.lh = gj(d, "query", !1, void 0, "gad_source");
    if (void 0 === a.lh) {
      var h = d.hash.replace("#", ""),
        m = dj(h, "gad_source", !1);
      a.lh = m;
    }
    var n = H.referrer ? gj(U(H.referrer), "host") : "";
    a.Il = $q.test(n);
    a.El = ar.test(n);
    return a;
  }
  var dr = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    er = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    fr = /^\d+\.fls\.doubleclick\.net$/,
    gr = /;gac=([^;?]+)/,
    hr = /;gacgb=([^;?]+)/;
  function ir(a, b) {
    if (fr.test(H.location.host)) {
      var c = H.location.href.match(b);
      return c && 2 === c.length && c[1].match(dr)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = pa(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, h = [], m = a[g], n = 0; n < m.length; n++)
        h.push(m[n].aa);
      d.push(g + ":" + h.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  function jr(a, b, c) {
    for (
      var d = Vp(Up()) ? Dp("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = pa(Object.keys(d)),
        h = g.next();
      !h.done;
      h = g.next()
    ) {
      var m = h.value,
        n = Bq("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (0 !== n.length &&
          n.some(function (p) {
            return 1 === p;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { Dl: f ? e.join(";") : "", Cl: ir(d, hr) };
  }
  function kr(a) {
    var b = H.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && 2 === b.length && b[1].match(er) ? b[1] : void 0;
  }
  function lr(a) {
    var b = { mh: void 0, nh: void 0 },
      c,
      d;
    fr.test(H.location.host) && ((c = kr("gclgs")), (d = kr("gclst")));
    if (c && d) (b.mh = c), (b.nh = d);
    else {
      var e = Db(),
        f = cq((a || "_gcl") + "_gs"),
        g = f.map(function (m) {
          return m.aa;
        }),
        h = f.map(function (m) {
          return e - m.timestamp;
        });
      0 < g.length &&
        0 < h.length &&
        ((b.mh = g.join(".")), (b.nh = h.join(".")));
    }
    return b;
  }
  function mr(a, b, c) {
    if (fr.test(H.location.host)) {
      var d = kr(c);
      if (d) return [{ aa: d }];
    } else {
      if ("gclid" === b) return Yp((a || "_gcl") + "_aw");
      if ("wbraid" === b) return Yp((a || "_gcl") + "_gb");
      if ("braids" === b) return $p({ prefix: a });
    }
    return [];
  }
  function nr(a) {
    return mr(a, "gclid", "gclaw")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function or(a) {
    return mr(a, "wbraid", "gclgb")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function pr(a) {
    return mr(a, "braids", "gclgb")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function qr(a, b) {
    return fr.test(H.location.host) ? !(kr("gclaw") || kr("gac")) : Fq(a, b);
  }
  function rr(a, b, c) {
    var d;
    d = c ? Cq(a, b) : Bq(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return 0 === d.length ||
      d.every(function (e) {
        return 0 === e;
      })
      ? ""
      : d.join(".");
  }
  var sr = function () {
    if (qb(G.__uspapi)) {
      var a = "";
      try {
        G.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var vr = function (a) {
      if (a.eventName === Q.g.da && "page_view" === a.metadata.hit_type)
        if (T(17)) {
          a.metadata.redact_click_ids =
            null != W(a.o, Q.g.ja) &&
            !1 !== W(a.o, Q.g.ja) &&
            !X([Q.g.R, Q.g.P]);
          var b = tr(a),
            c = !1 !== W(a.o, Q.g.wa);
          c || (a.C[Q.g.Di] = "1");
          var d = aq(b.prefix);
          if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
            var e = W(a.o, Q.g.Wa),
              f = W(a.o, Q.g.xa) || {};
            ur({ rd: c, wd: f, Cd: e, jc: b });
            var g;
            var h = (li.ads_pageview = li.ads_pageview || {});
            g = h[d] ? !1 : (h[d] = !0);
            if (!g) {
              a.isAborted = !0;
              return;
            }
          }
          a.C[Q.g.xc] = Q.g.Tb;
          if (a.metadata.consent_updated)
            (a.C[Q.g.xc] = Q.g.sk), (a.C[Q.g.Rb] = "1");
          else if (a.metadata.user_id_updated) a.C[Q.g.xc] = Q.g.xk;
          else {
            var m = kq();
            a.C[Q.g.Fd] = m.gclid;
            a.C[Q.g.Md] = m.dclid;
            a.C[Q.g.yi] = m.gclsrc;
            a.C[Q.g.Fd] ||
              a.C[Q.g.Md] ||
              ((a.C[Q.g.Se] = m.wbraid), (a.C[Q.g.cg] = m.gbraid));
            a.C[Q.g.Fa] = H.referrer ? gj(U(H.referrer), "host") : "";
            a.C[Q.g.ya] = Jq();
            a.C[Q.g.xi] = Hq();
            a.C[Q.g.Hb] = pl(!0);
            var n = cr();
            br(n) && (a.C[Q.g.ed] = "1");
            a.C[Q.g.Ai] = Zq();
            "1" === ep(!1)._up && (a.C[Q.g.Qi] = "1");
          }
          var p = X([Q.g.R, Q.g.P]);
          c && p && (sp(b), (a.C[Q.g.Eb] = qp[tp(b.prefix)]));
          a.C[Q.g.kb] = void 0;
          a.C[Q.g.Ta] = void 0;
          var q = T(56);
          if (!a.C[Q.g.Fd] && !a.C[Q.g.Md] && qr(d, q)) {
            var r = q ? Zp(b) : Xp(d + "_gb");
            0 < r.length && (a.C[Q.g.kb] = r.join("."));
          } else if (!a.C[Q.g.Se] && p) {
            var t = Xp(d + "_aw");
            0 < t.length && (a.C[Q.g.Ta] = t.join("."));
          }
          a.o.isGtmEvent && (a.o.m[Q.g.oa] = $m.F[Q.g.oa]);
          Xn(a.o) ? (a.C[Q.g.Ob] = !1) : (a.C[Q.g.Ob] = !0);
          a.metadata.add_tag_timing = !0;
          var u = sr();
          void 0 !== u && (a.C[Q.g.de] = u || "error");
          var v = Hn();
          v && (a.C[Q.g.Ac] = v);
          var w = Fn();
          w && (a.C[Q.g.Cc] = w);
          a.metadata.speculative = !1;
        } else a.isAborted = !0;
    },
    tr = function (a) {
      var b = {
        prefix: W(a.o, Q.g.ab) || W(a.o, Q.g.Oa),
        domain: W(a.o, Q.g.Ua),
        Ab: W(a.o, Q.g.Va),
        flags: W(a.o, Q.g.cb),
      };
      a.o.isGtmEvent && (b.path = W(a.o, Q.g.Fb));
      return b;
    },
    wr = function (a, b) {
      var c, d, e, f, g, h, m, n;
      c = a.rd;
      d = a.wd;
      e = a.Cd;
      f = a.za;
      g = a.allowAdPersonalizationSignals;
      h = a.xd;
      m = a.Qn;
      n = a.ik;
      ur({ rd: c, wd: d, Cd: e, jc: b });
      c &&
        !0 !== m &&
        (null != n ? (n = String(n)) : (n = void 0), Sq(b, f, g, h, n));
    },
    ur = function (a) {
      var b, c, d, e;
      b = a.rd;
      c = a.wd;
      d = a.Cd;
      e = a.jc;
      b &&
        (op(c[Q.g.Bc], !!c[Q.g.X]) && (oq(xr, e), qq(e), Ap(e)),
        lq(e),
        uq(xr, e),
        vq(e));
      c[Q.g.X] &&
        (sq(xr, c[Q.g.X], c[Q.g.Jb], !!c[Q.g.tb], e.prefix),
        tq(c[Q.g.X], c[Q.g.Jb], !!c[Q.g.tb], e.prefix),
        Bp(tp(e.prefix), c[Q.g.X], c[Q.g.Jb], !!c[Q.g.tb], e),
        Bp("FPAU", c[Q.g.X], c[Q.g.Jb], !!c[Q.g.tb], e));
      d && xq(yr);
      zq(yr);
    },
    zr = function (a, b, c, d) {
      var e, f, g;
      e = a.jk;
      f = a.callback;
      g = a.Pj;
      if ("function" === typeof f)
        if (e === Q.g.Ta && void 0 === g) {
          var h = d(b.prefix, c);
          0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h);
        } else e === Q.g.Eb ? (P(65), sp(b, !1), f(qp[tp(b.prefix)])) : f(g);
    },
    xr = ["aw", "dc", "gb"],
    yr = ["aw", "dc", "gb", "ag"];
  function Ar(a) {
    var b = W(a.o, Q.g.Ib),
      c = W(a.o, Q.g.Xb);
    b && !c
      ? (a.eventName !== Q.g.da && a.eventName !== Q.g.sc && P(131),
        (a.isAborted = !0))
      : !b && c && (P(132), (a.isAborted = !0));
  }
  function Br(a) {
    var b = X(Q.g.R) ? li.pscdl : "denied";
    null != b && (a.C[Q.g.We] = b);
  }
  function Cr(a) {
    var b = pl(!0);
    a.C[Q.g.Hb] = b;
  }
  var Dr = function (a) {
      if (a)
        switch (a._tag_mode) {
          case "CODE":
            return "c";
          case "AUTO":
            return "a";
          case "MANUAL":
            return "m";
          default:
            return "c";
        }
    },
    Er = function (a) {
      var b = a && a[Q.g.jg];
      return b && b[Q.g.zi];
    },
    Fr = function (a) {
      if (a && a.length) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d && d.estimated_delivery_date
            ? b.push("" + d.estimated_delivery_date)
            : b.push("");
        }
        return b.join(",");
      }
    };
  var Gr = function (a, b) {
      var c = a && !X([Q.g.R, Q.g.P]);
      return b && c ? "0" : b;
    },
    Ir = function (a) {
      lm(
        function () {
          function b(w) {
            var y = X([Q.g.R, Q.g.P]),
              x = h && y,
              B = g.prefix || "_gcl",
              A;
            li.reported_gclid || (li.reported_gclid = {});
            A = li.reported_gclid;
            var D =
              (x ? B : "") +
              "." +
              (X(Q.g.R) ? 1 : 0) +
              "." +
              (X(Q.g.P) ? 1 : 0);
            if (!A[D]) {
              A[D] = !0;
              var E = {},
                C = function (ba, aa) {
                  if (aa || "number" === typeof aa) E[ba] = aa.toString();
                },
                F = "https://www.google.com";
              Yn() && (C("gcs", Zn()), w && C("gcu", 1));
              C("gcd", co(f));
              Di.m && C("tag_exp", Di.m);
              if (Yl()) {
                C("rnd", Zq());
                if ((!n || (p && "aw.ds" !== p)) && y) {
                  var M = Xp(B + "_aw");
                  C("gclaw", M.join("."));
                }
                C("url", String(G.location).split(/[?#]/)[0]);
                C("dclid", Gr(d, q));
                y || (F = "https://pagead2.googlesyndication.com");
              }
              go() && C("dma_cps", eo());
              C("dma", fo());
              C("npa", Xn(f) ? 0 : 1);
              sn(An()) && C("tcfd", ho());
              C("gdpr_consent", Fn() || "");
              C("gdpr", Hn() || "");
              "1" === ep(!1)._up && C("gtm_up", 1);
              C("gclid", Gr(d, n));
              C("gclsrc", p);
              if (
                !(
                  E.hasOwnProperty("gclid") ||
                  E.hasOwnProperty("dclid") ||
                  E.hasOwnProperty("gclaw")
                ) &&
                (C("gbraid", Gr(d, r)),
                !E.hasOwnProperty("gbraid") && Yl() && y)
              ) {
                var L = Xp(B + "_gb");
                0 < L.length && C("gclgb", L.join("."));
              }
              C("gtm", ko({ za: f.eventMetadata.source_canonical_id, Ff: !e }));
              h &&
                X(Q.g.R) &&
                (sp(g || {}), x && C("auid", qp[tp(g.prefix)] || ""));
              Hr || (a.Hj && C("did", a.Hj));
              a.oh && C("gdid", a.oh);
              a.hh && C("edid", a.hh);
              void 0 !== a.sh && C("frm", a.sh);
              T(16) && C("apve", T(17) ? 1 : 0);
              var O = Object.keys(E).map(function (ba) {
                  return ba + "=" + encodeURIComponent(E[ba]);
                }),
                V = F + "/pagead/landing?" + O.join("&");
              Ic(V);
            }
          }
          var c = !!a.Zg,
            d = !!a.xd,
            e = a.targetId,
            f = a.o,
            g = void 0 === a.jc ? {} : a.jc,
            h = void 0 === a.Jf ? !0 : a.Jf,
            m = kq(),
            n = m.gclid || "",
            p = m.gclsrc,
            q = m.dclid || "",
            r = m.wbraid || "",
            t = !c && ((!n || (p && "aw.ds" !== p) ? !1 : !0) || r),
            u = Yl();
          if (t || u)
            if (u) {
              var v = [Q.g.R, Q.g.P, Q.g.Aa];
              b();
              (function () {
                X(v) ||
                  km(function (w) {
                    return b(!0, w.consentEventId, w.consentPriorityId);
                  }, v);
              })();
            } else b();
        },
        [Q.g.R, Q.g.P, Q.g.Aa]
      );
    },
    Hr = !1;
  function Jr(a, b, c, d) {
    var e = zc(),
      f;
    if (1 === e)
      a: {
        var g = wi;
        g = g.toLowerCase();
        for (
          var h = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = H.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(h) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != G.location.protocol ? a : b) + c;
  }
  var Kr = function (a, b) {
      T(5) &&
        ((a.dma = fo()),
        go() && (a.dmaCps = eo()),
        Xn(b) ? (a.npa = "0") : (a.npa = "1"));
    },
    Mr = function (a, b, c) {
      if (G[a.functionName]) return b.Gh && I(b.Gh), G[a.functionName];
      var d = Lr();
      G[a.functionName] = d;
      if (a.Ef)
        for (var e = 0; e < a.Ef.length; e++) G[a.Ef[e]] = G[a.Ef[e]] || Lr();
      a.If && void 0 === G[a.If] && (G[a.If] = c);
      yc(Jr("https://", "http://", a.Rh), b.Gh, b.wm);
      return d;
    },
    Lr = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Nr = {
      functionName: "_googWcmImpl",
      If: "_googWcmAk",
      Rh: "www.gstatic.com/wcm/loader.js",
    },
    Or = {
      functionName: "_gaPhoneImpl",
      If: "ga_wpid",
      Rh: "www.gstatic.com/gaphone/loader.js",
    },
    Pr = { nk: "9", Wk: "5" },
    Qr = {
      functionName: "_googCallTrackingImpl",
      Ef: [Or.functionName, Nr.functionName],
      Rh:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Pr.nk || Pr.Wk) +
        ".js",
    },
    Rr = {},
    Sr = function (a, b, c, d, e) {
      P(22);
      if (c) {
        e = e || {};
        var f = Mr(Nr, e, a),
          g = { ak: a, cl: b };
        void 0 === e.Pb && (g.autoreplace = c);
        Kr(g, d);
        f(2, e.Pb, g, c, 0, Cb(), e.options);
      }
    },
    Tr = function (a, b, c, d, e) {
      P(21);
      if (b && c) {
        e = e || {};
        for (
          var f = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Cb(),
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var h = a[g];
          Rr[h.id] ||
            (h && "AW" === h.prefix && !f.adData && 2 <= h.ma.length
              ? ((f.adData = { ak: h.ma[um[1]], cl: h.ma[um[2]] }),
                Kr(f.adData, d),
                (Rr[h.id] = !0))
              : h &&
                "UA" === h.prefix &&
                !f.gaData &&
                ((f.gaData = { gaWpid: h.ka }), (Rr[h.id] = !0)));
        }
        (f.gaData || f.adData) && Mr(Qr, e)(e.Pb, f, e.options);
      }
    },
    Ur = function () {
      var a = !1;
      return a;
    },
    Vr = function (a, b) {
      if (a)
        if (io()) {
        } else if ((a = l(a) ? rm(Wj(a)) : rm(Wj(a.id)))) {
          var c = void 0,
            d = !1,
            e = W(b, Q.g.Ui);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = rm(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id || (a.id === a.ka && a.ka === g.ka)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var h = W(b, Q.g.Ag),
              m;
            if (h) {
              Array.isArray(h) ? (m = h) : (m = [h]);
              var n = W(b, Q.g.yg),
                p = W(b, Q.g.zg),
                q = W(b, Q.g.Bg),
                r = W(b, Q.g.Ti),
                t = n || p,
                u = 1;
              "UA" !== a.prefix || c || (u = 5);
              for (var v = 0; v < m.length; v++)
                if (v < u)
                  if (c) Tr(c, m[v], r, b, { Pb: t, options: q });
                  else if ("AW" === a.prefix && a.ma[um[2]])
                    Ur()
                      ? Tr([a], m[v], r || "US", b, { Pb: t, options: q })
                      : Sr(a.ma[um[1]], a.ma[um[2]], m[v], b, {
                          Pb: t,
                          options: q,
                        });
                  else if ("UA" === a.prefix)
                    if (Ur()) Tr([a], m[v], r || "US", b, { Pb: t });
                    else {
                      var w = a.ka,
                        y = m[v],
                        x = { Pb: t };
                      P(23);
                      if (y) {
                        x = x || {};
                        var B = Mr(Or, x, w),
                          A = {};
                        void 0 !== x.Pb ? (A.receiver = x.Pb) : (A.replace = y);
                        A.ga_wpid = w;
                        A.destination = y;
                        B(2, Cb(), A);
                      }
                    }
            }
          }
        }
    };
  function Wr(a) {
    return {
      getDestinationId: function () {
        return a.target.ka;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.C[b];
      },
      setHitData: function (b, c) {
        a.C[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.C[b] && (a.C[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return W(a.o, b);
      },
      Kj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.C);
      },
    };
  }
  var Yr = function (a) {
      var b = Xr[a.target.ka];
      if (!a.isAborted && b)
        for (var c = Wr(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    Zr = function (a, b) {
      var c = Xr[a];
      c || (c = Xr[a] = []);
      c.push(b);
    },
    Xr = {};
  var as = function (a) {
      if (X($r)) {
        a = a || {};
        sp(a, !1);
        var b = rp[tp(aq(a.prefix))];
        if (b && !(18e5 < Db() - 1e3 * b.Bh)) {
          var c = b.id,
            d = c.split(".");
          if (2 === d.length && !(864e5 < Db() - 1e3 * (Number(d[1]) || 0)))
            return c;
        }
      }
    },
    $r = Q.g.R;
  var bs = function () {
    var a = (qc && qc.userAgent) || "";
    if (
      0 > a.indexOf("Safari") ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if ("" === b) return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (void 0 === c[e]) return !0;
      if (d[e] !== c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
  function cs() {
    var a = G.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function ds(a) {
    if (H.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !G.getComputedStyle)
      return !0;
    var c = G.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var h = g.indexOf("opacity(");
        0 <= h &&
          ((g = g.substring(h + 8, g.indexOf(")", h))),
          "%" === g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (void 0 !== f && 0 >= Number(f)) return !0;
      (d = d.parentElement) && (e = G.getComputedStyle(d, null));
    }
    return !1;
  }
  var ns = function (a, b, c) {
      var d = a.element,
        e = { Z: a.Z, type: a.sa, tagName: d.tagName };
      b && (e.querySelector = ms(d));
      c && (e.isVisible = !ds(d));
      return e;
    },
    os = function (a, b, c) {
      return ns({ element: a.element, Z: a.Z, sa: "1" }, b, c);
    },
    ps = function (a) {
      var b = !!a.ud + "." + !!a.vd;
      a && a.we && a.we.length && (b += "." + a.we.join("."));
      a &&
        a.wb &&
        (b += "." + a.wb.email + "." + a.wb.phone + "." + a.wb.address);
      return b;
    },
    ss = function (a) {
      if (0 != a.length) {
        var b;
        b = qs(a, function (c) {
          return !rs.test(c.Z);
        });
        b = qs(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = qs(b, function (c) {
          return !ds(c.element);
        });
        return b[0];
      }
    },
    ts = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && sh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    qs = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    ms = function (a) {
      var b;
      if (a === H.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = ms(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    vs = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(us);
          if (f) {
            var g = f[0],
              h;
            if (G.location) {
              var m = fj(G.location, "host", !0);
              h = 0 <= g.toLowerCase().indexOf(m);
            } else h = !1;
            h || b.push({ element: d, Z: g });
          }
        }
      }
      return b;
    },
    zs = function () {
      var a = [],
        b = H.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && 1e4 > d;
        d++
      ) {
        var e = c[d];
        if (
          !(0 <= ws.indexOf(e.tagName.toUpperCase())) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && 1e4 > g; g++)
            if (!(0 <= xs.indexOf(e.children[g].tagName.toUpperCase()))) {
              f = !0;
              break;
            }
          (!f || (T(21) && -1 !== ys.indexOf(e.tagName))) && a.push(e);
        }
      }
      return { elements: a, status: 1e4 < c.length ? "2" : "1" };
    },
    As = !1;
  var us = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    Bs = /@(gmail|googlemail)\./i,
    rs = /support|noreply/i,
    ws = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    xs = ["BR"],
    Cs = { qn: "1", Dn: "2", un: "3", xn: "4", nn: "5", En: "6", zn: "7" },
    Ds = {},
    ys = ["INPUT", "SELECT"];
  var Ws = function (a) {
      a = a || { ud: !0, vd: !0, Pf: void 0 };
      a.wb = a.wb || { email: !0, phone: !1, address: !1 };
      var b = ps(a),
        c = Ds[b];
      if (c && 200 > Db() - c.timestamp) return c.result;
      var d = zs(),
        e = d.status,
        f = [],
        g,
        h,
        m = [];
      if (!T(21)) {
        if (a.wb && a.wb.email) {
          var n = vs(d.elements);
          f = ts(n, a && a.we);
          g = ss(f);
          10 < n.length && (e = "3");
        }
        !a.Pf && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(os(f[p], a.ud, a.vd));
        m = m.slice(0, 10);
      } else if (a.wb) {
      }
      g && (h = os(g, a.ud, a.vd));
      var D = { elements: m, Lh: h, status: e };
      Ds[b] = { timestamp: Db(), result: D };
      return D;
    },
    Xs = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.Z.length + ":" + Bs.test(a.Z)
      );
    };
  var dt = Number("") || 5,
    et = Number("") || 50,
    ft = ub();
  var ht = function (a, b) {
      a &&
        (gt("sid", a.targetId, b),
        gt("cc", a.clientCount, b),
        gt("tl", a.totalLifeMs, b),
        gt("hc", a.heartbeatCount, b),
        gt("cl", a.clientLifeMs, b));
    },
    gt = function (a, b, c) {
      null != b && c.push(a + "=" + b);
    },
    it = function () {
      var a = H.referrer;
      if (a) {
        var b;
        return gj(U(a), "host") === (null == (b = G.location) ? void 0 : b.host)
          ? 1
          : 2;
      }
      return 0;
    },
    jt = function (a) {
      this.T = a;
      this.J = 0;
    };
  jt.prototype.F = function (a, b, c, d) {
    var e = it(),
      f,
      g = [];
    f =
      G === G.top && 0 !== e && b
        ? 1 < (null == b ? void 0 : b.clientCount)
          ? 2 === e
            ? 1
            : 2
          : 2 === e
          ? 0
          : 3
        : 4;
    a && gt("si", a.Kf, g);
    gt("m", 0, g);
    gt("iss", f, g);
    gt("if", c, g);
    ht(b, g);
    d && gt("fm", encodeURIComponent(d.substring(0, et)), g);
    this.M(g);
  };
  jt.prototype.m = function (a, b, c, d, e) {
    var f = [];
    gt("m", 1, f);
    gt("s", a, f);
    gt("po", it(), f);
    b && (gt("st", b.state, f), gt("si", b.Kf, f), gt("sm", b.Rf, f));
    ht(c, f);
    gt("c", d, f);
    e && gt("fm", encodeURIComponent(e.substring(0, et)), f);
    this.M(f);
  };
  jt.prototype.M = function (a) {
    a = void 0 === a ? [] : a;
    !xj ||
      this.J >= dt ||
      (gt("pid", ft, a),
      gt("bc", ++this.J, a),
      a.unshift("ctid=" + Lf.ctid + "&t=s"),
      this.T("https://www.googletagmanager.com/a?" + a.join("&")));
  };
  var kt = {
    Xk: Number("") || 500,
    Mk: Number("") || 5e3,
    kj: Number("20") || 10,
    rk: Number("") || 5e3,
  };
  function lt(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var mt = function (a, b) {
    var c;
    var d = function (e, f, g) {
      g = void 0 === g ? {} : g;
      this.al = e;
      this.J = g;
      this.m = f;
      this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
      this.ba = this.Xa = this.heartbeatCount = this.Zk = 0;
      this.mj = !1;
      this.F = {};
      this.state = 0;
      this.Kf = lt(this.m);
      this.Rf = lt(this.m);
      this.T = 10;
    };
    d.prototype.init = function () {
      this.M(1);
      this.bc();
    };
    d.prototype.getState = function () {
      return {
        state: this.state,
        Kf: Math.round(lt(this.m) - this.Kf),
        Rf: Math.round(lt(this.m) - this.Rf),
      };
    };
    d.prototype.M = function (e) {
      this.state !== e && ((this.state = e), (this.Rf = lt(this.m)));
    };
    d.prototype.qj = function () {
      return String(this.Zk++);
    };
    d.prototype.bc = function () {
      var e = this;
      this.heartbeatCount++;
      this.Dc(
        {
          type: 0,
          clientId: this.id,
          requestId: this.qj(),
          maxDelay: this.oj(),
        },
        function (f) {
          if (0 === f.type) {
            var g;
            if (null != (null == (g = f.failure) ? void 0 : g.failureType))
              if (
                (f.stats && (e.stats = f.stats),
                e.ba++,
                f.isDead || e.ba > kt.kj)
              ) {
                var h = f.isDead && f.failure.failureType;
                e.T = h || 10;
                e.M(4);
                e.Yk();
                var m, n;
                null == (n = (m = e.J).sm) ||
                  n.call(m, { failureType: h, data: f.failure.data });
              } else e.M(3), e.vj();
            else {
              if (e.heartbeatCount > f.stats.heartbeatCount + kt.kj) {
                e.heartbeatCount = f.stats.heartbeatCount;
                var p, q;
                null == (q = (p = e.J).onFailure) ||
                  q.call(p, { failureType: 13 });
              }
              e.stats = f.stats;
              var r = e.state;
              e.M(2);
              if (2 !== r)
                if (e.mj) {
                  var t, u;
                  null == (u = (t = e.J).Vn) || u.call(t);
                } else {
                  e.mj = !0;
                  var v, w;
                  null == (w = (v = e.J).vm) || w.call(v);
                }
              e.ba = 0;
              e.bl();
              e.vj();
            }
          }
        }
      );
    };
    d.prototype.oj = function () {
      return 2 === this.state ? kt.Mk : kt.Xk;
    };
    d.prototype.vj = function () {
      var e = this;
      this.m.setTimeout(function () {
        e.bc();
      }, Math.max(0, this.oj() - (lt(this.m) - this.Xa)));
    };
    d.prototype.jl = function (e, f, g) {
      var h = this;
      this.Dc(
        { type: 1, clientId: this.id, requestId: this.qj(), command: e },
        function (m) {
          if (1 === m.type)
            if (m.result) f(m.result);
            else {
              var n,
                p,
                q,
                r = {
                  failureType:
                    null !=
                    (q = null == (n = m.failure) ? void 0 : n.failureType)
                      ? q
                      : 12,
                  data: null == (p = m.failure) ? void 0 : p.data,
                },
                t,
                u;
              null == (u = (t = h.J).onFailure) || u.call(t, r);
              g(r);
            }
        }
      );
    };
    d.prototype.Dc = function (e, f) {
      var g = this;
      if (4 === this.state) (e.failure = { failureType: this.T }), f(e);
      else {
        var h = 2 !== this.state && 0 != e.type,
          m = e.requestId,
          n,
          p = this.m.setTimeout(
            function () {
              var r = g.F[m];
              r && g.lj(r, 7);
            },
            null != (n = e.maxDelay) ? n : kt.rk
          ),
          q = { request: e, bk: f, Wj: h, lm: p };
        this.F[m] = q;
        h || this.Bj(q);
      }
    };
    d.prototype.Bj = function (e) {
      this.Xa = lt(this.m);
      e.Wj = !1;
      this.al(e.request);
    };
    d.prototype.bl = function () {
      for (var e in this.F) {
        var f = this.F[e];
        f.Wj && this.Bj(f);
      }
    };
    d.prototype.Yk = function () {
      for (var e in this.F) this.lj(this.F[e], this.T);
    };
    d.prototype.lj = function (e, f) {
      this.yf(e);
      var g = e.request;
      g.failure = { failureType: f };
      e.bk(g);
    };
    d.prototype.yf = function (e) {
      delete this.F[e.request.requestId];
      this.m.clearTimeout(e.lm);
    };
    d.prototype.Ol = function (e) {
      this.Xa = lt(this.m);
      var f = this.F[e.requestId];
      if (f) this.yf(f), f.bk(e);
      else {
        var g, h;
        null == (h = (g = this.J).onFailure) || h.call(g, { failureType: 14 });
      }
    };
    c = new d(a, G, b);
    return c;
  };
  var nt = "https://" + ki.Ed + "/gtm/static/",
    ot;
  var pt = function () {
      ot ||
        (ot = new jt(function (a) {
          return void Bc(a);
        }));
      return ot;
    },
    qt = function (a) {
      if (!a) {
        var b = Di.Xa;
        a = b ? b : nt;
      }
      var c;
      try {
        c = new URL(a);
      } catch (d) {
        return null;
      }
      return "https:" !== c.protocol ? null : c;
    },
    rt = function (a) {
      var b = qo(lo.Pg);
      return b && b[a];
    },
    st = function (a, b, c) {
      var d = pt(),
        e = this;
      this.initTime = c;
      this.T = this.M = !1;
      this.ba = null;
      this.F = d;
      this.m = 15;
      this.J = this.rl(a);
      G.setTimeout(function () {
        return e.Oj();
      }, 1e3);
      I(function () {
        e.Wl(a, b);
      });
    };
  ca = st.prototype;
  ca.delegate = function (a, b, c) {
    2 !== this.getState()
      ? (this.F.m(this.m, void 0, void 0, a.commandType),
        c({ failureType: this.m }))
      : this.J.jl(a, b, c);
  };
  ca.getState = function () {
    return this.J.getState().state;
  };
  ca.Wl = function (a, b) {
    var c = G.location.origin,
      d = this,
      e = Ac();
    try {
      var f = e.contentDocument.createElement("iframe"),
        g = a.pathname,
        h = b ? "&1p=1" : "";
      Ac(
        ("/" === g[g.length - 1] ? a.toString() : a.toString() + "/") +
          "sw_iframe.html?origin=" +
          encodeURIComponent(c) +
          h,
        void 0,
        void 0,
        void 0,
        f
      );
      var m = function () {
        e.contentDocument.body.appendChild(f);
        f.addEventListener("load", function () {
          d.ba = f.contentWindow;
          e.contentWindow.addEventListener("message", function (n) {
            n.origin === a.origin && d.J.Ol(n.data);
          });
          d.Oj();
        });
      };
      "complete" === e.contentDocument.readyState
        ? m()
        : e.contentWindow.addEventListener("load", function () {
            m();
          });
    } catch (n) {
      e.parentElement.removeChild(e),
        (this.m = 11),
        this.F.F(void 0, void 0, this.m, n.toString());
    }
  };
  ca.rl = function (a) {
    var b = this,
      c = mt(
        function (d) {
          var e;
          null == (e = b.ba) || e.postMessage(d, a.origin);
        },
        {
          vm: function () {
            b.M = !0;
            b.F.F(c.getState(), c.stats);
          },
          sm: function (d) {
            b.M
              ? ((b.m = (null == d ? void 0 : d.failureType) || 10),
                b.F.m(
                  b.m,
                  c.getState(),
                  c.stats,
                  void 0,
                  null == d ? void 0 : d.data
                ))
              : ((b.m = (null == d ? void 0 : d.failureType) || 4),
                b.F.F(c.getState(), c.stats, b.m, null == d ? void 0 : d.data));
          },
          onFailure: function (d) {
            b.m = d.failureType;
            b.F.m(b.m, c.getState(), c.stats, d.command, d.data);
          },
        }
      );
    return c;
  };
  ca.Oj = function () {
    this.T || this.J.init();
    this.T = !0;
  };
  function tt(a, b) {
    var c = G.location.origin;
    if (!c) return;
    Di.F && (a = "" + c + Ei() + "/_");
    var d = qt(a);
    if (null === d || rt(d.origin)) return;
    if (!rc()) {
      pt().F(void 0, void 0, 6);
      return;
    }
    var e = new st(d, !!a, b || Math.round(Db())),
      f = qo(lo.Pg);
    f || ((f = {}), po(lo.Pg, f));
    f[d.origin] = e;
  }
  function ut(a, b, c, d) {
    var e;
    if (null == (e = rt(a)) || !e.delegate) {
      var f = rc() ? 16 : 6;
      pt().m(f, void 0, void 0, b.commandType);
      d({ failureType: f });
      return;
    }
    rt(a).delegate(b, c, d);
  }
  function vt(a, b, c, d) {
    var e = qt();
    if (null === e) {
      d(rc() ? 16 : 6);
      return;
    }
    var f,
      g = null == (f = rt(e.origin)) ? void 0 : f.initTime,
      h = Math.round(Db());
    ut(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: 0,
          templates: b,
          body: "",
          processResponse: !1,
          sinceInit: g ? h - g : void 0,
        },
      },
      function () {
        c();
      },
      function (m) {
        d(m.failureType);
      }
    );
  }
  function wt(a, b, c, d) {
    var e = qt(a);
    if (null === e) {
      d("_is_sw=f" + (rc() ? 16 : 6) + "te");
      return;
    }
    var f = b ? 1 : 0,
      g = Math.round(Db()),
      h,
      m = null == (h = rt(e.origin)) ? void 0 : h.initTime,
      n = m ? g - m : void 0;
    ut(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: f,
          templates: c,
          body: b || "",
          processResponse: !0,
          sinceInit: n,
          attributionReporting: !0,
        },
      },
      function () {},
      function (p) {
        var q = "_is_sw=f" + p.failureType,
          r,
          t = null == (r = rt(e.origin)) ? void 0 : r.getState();
        void 0 != t && (q += "s" + t);
        d(n ? q + ("t" + n) : q + "te");
      }
    );
  }
  var xt = void 0;
  function zt(a) {
    var b = [];
    return b;
  }
  var At = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  al();
  dl() || Yk("iPod");
  Yk("iPad");
  !Yk("Android") || bl() || al() || $k() || Yk("Silk");
  bl();
  !Yk("Safari") ||
    bl() ||
    (Zk() ? 0 : Yk("Coast")) ||
    $k() ||
    (Zk() ? 0 : Yk("Edge")) ||
    (Zk() ? Xk("Microsoft Edge") : Yk("Edg/")) ||
    (Zk() ? Xk("Opera") : Yk("OPR")) ||
    al() ||
    Yk("Silk") ||
    Yk("Android") ||
    el();
  var Bt = {},
    Ct = null,
    Dt = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!Ct) {
        Ct = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(h[m].split(""));
          Bt[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === Ct[q] && (Ct[q] = p);
          }
        }
      }
      for (
        var r = Bt[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var y = b[v],
          x = b[v + 1],
          B = b[v + 2],
          A = r[y >> 2],
          D = r[((y & 3) << 4) | (x >> 4)],
          E = r[((x & 15) << 2) | (B >> 6)],
          C = r[B & 63];
        t[w++] = "" + A + D + E + C;
      }
      var F = 0,
        M = u;
      switch (b.length - v) {
        case 2:
          (F = b[v + 1]), (M = r[(F & 15) << 2] || u);
        case 1:
          var L = b[v];
          t[w] = "" + r[L >> 2] + r[((L & 3) << 4) | (F >> 4)] + M + u;
      }
      return t.join("");
    };
  var Et = function () {};
  Object.freeze(new (function () {})());
  Object.freeze(new Et());
  Object.freeze(new Et());
  var Ft =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Gt(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function Ht() {
    var a = G.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function It() {
    var a, b;
    return null !=
      (b = null == (a = G.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function Jt(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function Kt() {
    var a = G;
    if (!Jt(a)) return null;
    var b = Gt(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(Ft)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var Lt,
    Mt = function () {
      if (Jt(G) && ((Lt = Db()), !It())) {
        var a = Kt();
        a &&
          (a.then(function () {
            P(95);
          }),
          a.catch(function () {
            P(96);
          }));
      }
    },
    Ot = function (a) {
      var b = Nt.fn,
        c = function (g, h) {
          try {
            a(g, h);
          } catch (m) {}
        },
        d = Ht();
      if (d) c(d);
      else {
        var e = It();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = G.setTimeout(function () {
            c.Fe || ((c.Fe = !0), P(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Fe || ((c.Fe = !0), P(104), G.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Fe || ((c.Fe = !0), P(105), G.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Pt = function (a, b) {
      a &&
        ((b.C[Q.g.nf] = a.architecture),
        (b.C[Q.g.pf] = a.bitness),
        a.fullVersionList &&
          (b.C[Q.g.qf] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.C[Q.g.rf] = a.mobile ? "1" : "0"),
        (b.C[Q.g.tf] = a.model),
        (b.C[Q.g.uf] = a.platform),
        (b.C[Q.g.vf] = a.platformVersion),
        (b.C[Q.g.wf] = a.wow64 ? "1" : "0"));
    };
  function Qt(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var Rt = !1;
  function St() {
    if (Qt("join-ad-interest-group") && qb(qc.joinAdInterestGroup)) return !0;
    Rt || (nl(""), (Rt = !0));
    return Qt("join-ad-interest-group") && qb(qc.joinAdInterestGroup);
  }
  function Tt(a, b) {
    var c = void 0 === Vi[3] ? 1 : Vi[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (1 === c) {
        var f = H.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(H.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = H.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var h = g,
      m =
        ((null == h ? void 0 : h.length) || 0) >=
        (void 0 === Vi[2] ? 50 : Vi[2]),
      n;
    if ((n = 1 <= e.length)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      void 0 !== p && Db() - p < (void 0 === Vi[1] ? 6e4 : Vi[1])
        ? (mb("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (1 === c)
        if (1 <= e.length) Ut(e[0]);
        else {
          if (m) {
            mb("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? Ut(e[0]) : m && Ut(h[0]);
      Ac(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: Db() }
      );
    }
  }
  function Ut(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Vt() {
    return "https://td.doubleclick.net";
  }
  var Wt = function () {
      return [Q.g.R, Q.g.P];
    },
    Xt = function (a) {
      if (null != a) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return -1 == c ? b : b.substring(0, c);
      }
      return "";
    },
    Yt = function () {
      var a = H.title;
      if (void 0 == a || "" == a) return "";
      var b = function (d) {
        try {
          return decodeURIComponent(d), !0;
        } catch (e) {
          return !1;
        }
      };
      a = encodeURIComponent(a);
      for (var c = 256; !b(a.substr(0, c)); ) c--;
      return decodeURIComponent(a.substr(0, c));
    },
    Zt = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    $t = function (a, b) {
      Array.isArray(b) || (b = [b]);
      return 0 <= b.indexOf(a.metadata.hit_type);
    },
    au = function (a) {
      var b = a.target.ma[um[1]];
      if (b) {
        a.C[Q.g.Vc] = b;
        var c = a.target.ma[um[2]];
        c && (a.C[Q.g.ob] = c);
      } else a.isAborted = !0;
    },
    bu = function (a) {
      if (
        $t(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.C[Q.g.ob],
          c = !0 === W(a.o, Q.g.Ve);
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && Zt(a);
            -1 !== qc.userAgent.toLowerCase().indexOf("firefox") &&
              (a.metadata.is_gcp_conversion = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c && b && (a.isAborted = !0);
            break;
          case "remarketing":
            (!c && b) || Zt(a);
        }
        $t(a, ["conversion", "remarketing"]) &&
          (a.C[Q.g.gj] = a.metadata.is_gcp_conversion
            ? "www.google.com"
            : "www.googleadservices.com");
      }
    },
    cu = function (a) {
      $t(a, ["conversion", "remarketing"]);
    },
    du = function (a) {
      if (!a.metadata.consent_updated && $t(a, ["conversion", "remarketing"])) {
        var b = pl(!1);
        a.C[Q.g.Hb] = b;
        var c = W(a.o, Q.g.ya);
        c || (c = 1 === b ? G.top.location.href : G.location.href);
        a.C[Q.g.ya] = Xt(c);
        a.copyToHitData(Q.g.Fa, H.referrer);
        a.C[Q.g.Kb] = Yt();
        a.copyToHitData(Q.g.Pa);
        var d = cs();
        a.C[Q.g.Lb] = d.width + "x" + d.height;
        for (var e, f = G, g = f; f && f != f.parent; )
          (f = f.parent), ll(f) && (g = f);
        e = g;
        var h;
        var m = e.location.href;
        if (e === e.top) h = { url: m, fm: !0 };
        else {
          var n = !1,
            p = e.document;
          p && p.referrer && ((m = p.referrer), e.parent === e.top && (n = !0));
          var q = e.location.ancestorOrigins;
          if (q) {
            var r = q[q.length - 1];
            r && -1 === m.indexOf(r) && ((n = !1), (m = r));
          }
          h = { url: m, fm: n };
        }
        var t = h;
        t.url && c !== t.url && (a.C[Q.g.kf] = Xt(t.url));
      }
    },
    eu = function (a) {
      $t(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(Q.g.Ca),
        a.copyToHitData(Q.g.qa),
        a.copyToHitData(Q.g.Ba));
    },
    fu = function (a) {
      var b = ["conversion", "remarketing"];
      b.push("page_view", "user_data_lead", "user_data_web");
      if ($t(a, b) && X(Q.g.P)) {
        a.copyToHitData(Q.g.Da);
        var c = qo(lo.Qg);
        if (void 0 === c) po(lo.Rg, !0);
        else {
          var d = qo(lo.me);
          a.C[Q.g.jf] = d + "." + c;
        }
      }
    },
    gu = function (a) {
      if (!Jt(G)) P(87);
      else if (void 0 !== Lt) {
        P(85);
        var b = Ht();
        b ? Pt(b, a) : P(86);
      }
    },
    ju = function (a) {
      $t(a, ["conversion"]) &&
        X(Q.g.P) &&
        (!0 === G._gtmpcm || bs()
          ? (a.C[Q.g.Vb] = "2")
          : T(26) &&
            (hu || Qt("attribution-reporting") || (nl(""), (hu = !0)),
            iu ||
              ((iu = !0),
              nl(
                "A4oIpR6f5aUXFRMbL6t6qaMk4lrHWxcV3DcrzORsA9sEsIk1FBRMFzzhfMNLuUpokZH40FV8s7iiXtt/729v8A4AAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcxNDUyMTU5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d"
              )),
            Qt("attribution-reporting") && (a.C[Q.g.Vb] = "1")));
    },
    ku = function (a) {
      if ($t(a, ["conversion", "remarketing"]) && T(22)) {
        var b = function (c) {
          return T(24) ? (mb("fdr", c), !0) : !1;
        };
        if (X(Q.g.R) || b(0))
          if (X(Q.g.P) || b(1))
            if (!1 !== W(a.o, Q.g.Ea) || b(2))
              if (Xn(a.o) || b(3))
                if (!1 !== W(a.o, Q.g.Ub) || b(4))
                  if (
                    !1 !==
                      (T(25)
                        ? a.eventName === Q.g.da
                          ? W(a.o, Q.g.Ka)
                          : void 0
                        : W(a.o, Q.g.Ka)) ||
                    b(5)
                  )
                    if (St() || b(6))
                      T(24) && ob()
                        ? ((a.C[Q.g.Ji] = nb("fdr")), delete lb.fdr)
                        : ((a.C[Q.g.kg] = "1"),
                          (a.metadata.send_fledge_experiment = !0));
      }
    },
    lu = function (a) {
      a.metadata.conversion_linker_enabled = !1 !== W(a.o, Q.g.wa);
      a.metadata.cookie_options = tr(a);
      a.metadata.redact_ads_data =
        null != W(a.o, Q.g.ja) && !1 !== W(a.o, Q.g.ja);
      a.metadata.allow_ad_personalization = Xn(a.o);
    },
    mu = function (a) {
      if (Yq(a, "ccd_add_1p_data", !1) && X(Wt())) {
        var b = a.o.F[Q.g.ce];
        if (Si(b)) {
          var c = W(a.o, Q.g.Ga);
          null === c
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && Ya(c) && (a.metadata.user_data_from_code = c),
              Ya(b.selectors) &&
                (a.metadata.user_data_from_manual = Ri(b.selectors)));
        }
      }
    },
    nu = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          $t(a, ["conversion", "user_data_web"]),
        c = !Yq(a, "ccd_add_1p_data", !1) && $t(a, "user_data_lead");
      if ((b || c) && X(Q.g.R)) {
        var d = "conversion" === a.metadata.hit_type,
          e = a.o,
          f = void 0,
          g = W(e, Q.g.Ga);
        if (d) {
          var h = (W(e, Q.g.Qd) || {})[String(a.C[Q.g.ob])];
          if (!0 === W(e, Q.g.Gd) || h) {
            var m;
            var n;
            if (h)
              b: {
                switch (h.enhanced_conversions_mode) {
                  case "manual":
                    if (g && Ya(g)) {
                      n = g;
                      break b;
                    }
                    var p = h.enhanced_conversions_manual_var;
                    n = void 0 !== p ? p : G.enhanced_conversion_data;
                    break b;
                  case "automatic":
                    n = Ri(h[Q.g.jg]);
                    break b;
                }
                n = void 0;
              }
            else n = G.enhanced_conversion_data;
            var q = n,
              r = (h || {}).enhanced_conversions_mode,
              t;
            if (q) {
              if ("manual" === r)
                switch (q._tag_mode) {
                  case "CODE":
                    t = "c";
                    break;
                  case "AUTO":
                    t = "a";
                    break;
                  case "MANUAL":
                    t = "m";
                    break;
                  default:
                    t = "c";
                }
              else t = "automatic" === r ? (Er(h) ? "a" : "m") : "c";
              m = { Z: q, hk: t };
            } else m = { Z: q, hk: void 0 };
            var u = m,
              v = u.hk;
            f = u.Z;
            a.C[Q.g.md] = v;
          }
        } else if (a.o.isGtmEvent) {
          Zt(a);
          a.metadata.user_data = g;
          a.C[Q.g.md] = Dr(g);
          return;
        }
        a.metadata.user_data = f;
      }
    },
    ou = function (a) {
      $t(a, ["conversion", "remarketing"]) &&
        (a.o.isGtmEvent
          ? "conversion" !== a.metadata.hit_type &&
            a.eventName &&
            (a.C[Q.g.xc] = a.eventName)
          : (a.C[Q.g.xc] = a.eventName),
        z(a.o.m, function (b, c) {
          hi[b.split(".")[0]] || (a.C[b] = c);
        }));
    },
    pu = function (a) {
      if (
        a.eventName === Q.g.da &&
        !a.metadata.consent_updated &&
        ((a.metadata.is_config_command = !0),
        $t(a, "conversion") && (a.metadata.speculative = !0),
        !$t(a, "remarketing") ||
          (!1 !== W(a.o, Q.g.Ub) && !1 !== W(a.o, Q.g.Ka)) ||
          (a.metadata.speculative = !0),
        $t(a, "landing_page"))
      ) {
        var b = W(a.o, Q.g.xa) || {},
          c = W(a.o, Q.g.Wa),
          d = a.metadata.conversion_linker_enabled,
          e = a.metadata.source_canonical_id,
          f = Xn(a.o),
          g = a.metadata.redact_ads_data,
          h = {
            rd: d,
            wd: b,
            Cd: c,
            za: e,
            allowAdPersonalizationSignals: f,
            xd: g,
            ik: W(a.o, Q.g.Da),
          },
          m = a.metadata.cookie_options;
        wr(h, m);
        Vr(a.target, a.o);
        Ir({
          Zg: !1,
          xd: g,
          targetId: a.target.id,
          o: a.o,
          jc: d ? m : void 0,
          Jf: d,
          Hj: a.C[Q.g.Yd],
          oh: a.C[Q.g.sb],
          hh: a.C[Q.g.pb],
          sh: a.C[Q.g.Hb],
        });
        a.isAborted = !0;
      }
    },
    qu = function (a) {
      if (
        !Yq(a, "hasPreAutoPiiCcdRule", !1) &&
        $t(a, "conversion") &&
        X(Q.g.R)
      ) {
        var b = (W(a.o, Q.g.Qd) || {})[String(a.C[Q.g.ob])],
          c = a.C[Q.g.Vc],
          d;
        if (!(d = Er(b)))
          if (Il())
            if (As) d = !0;
            else {
              var e = Wq("AW-" + c);
              d = !!e && !!e.preAutoPii;
            }
          else d = !1;
        if (d) {
          var f = Db(),
            g = Ws({ ud: !0, vd: !0, Pf: !0 });
          if (0 !== g.elements.length) {
            for (var h = [], m = 0; m < g.elements.length; ++m) {
              var n = g.elements[m];
              h.push(n.querySelector + "*" + Xs(n) + "*" + n.type);
            }
            a.C[Q.g.Gg] = h.join("~");
            var p = g.Lh;
            p && ((a.C[Q.g.Hg] = p.querySelector), (a.C[Q.g.Fg] = Xs(p)));
            a.C[Q.g.Eg] = String(Db() - f);
            a.C[Q.g.Ig] = g.status;
          }
        }
      }
    },
    ru = function (a) {
      if (a.eventName === Q.g.Sa && !a.o.isGtmEvent) {
        if (!a.metadata.consent_updated && $t(a, "conversion")) {
          var b = W(a.o, Q.g.Gb);
          if ("function" !== typeof b) return;
          var c = String(W(a.o, Q.g.rb)),
            d = a.C[c],
            e = W(a.o, c);
          c === Q.g.Ta || c === Q.g.Eb
            ? zr(
                { jk: c, callback: b, Pj: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                Qq
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    su = function (a) {
      if ($t(a, "conversion") && X(Q.g.R) && (a.C[Q.g.kb] || a.C[Q.g.zc])) {
        var b = a.C[Q.g.ob],
          c = k(a.metadata.cookie_options),
          d = aq(c.prefix);
        c.prefix = "_gcl" === d ? "" : d;
        if (a.C[Q.g.kb]) {
          var e = rr(b, c, T(56) && !a.metadata.gbraid_cookie_marked);
          a.metadata.gbraid_cookie_marked = !0;
          e && (a.C[Q.g.Jg] = e);
        }
        if (a.C[Q.g.zc]) {
          var f = jr(b, c).Dl;
          f && (a.C[Q.g.pg] = f);
        }
      }
    },
    tu = function (a) {
      var b = T(7),
        c = a.o,
        d,
        e,
        f;
      if (!b) {
        var g = Im(c, Q.g.la);
        d = Mb(Ya(g) ? g : {});
      }
      var h = Im(c, Q.g.la, 1),
        m = Im(c, Q.g.la, 2);
      e = Mb(Ya(h) ? h : {}, ".");
      f = Mb(Ya(m) ? m : {}, ".");
      b || (a.C[Q.g.Yd] = d);
      a.C[Q.g.sb] = e;
      a.C[Q.g.pb] = f;
    },
    uu = function (a) {
      if ($t(a, ["conversion", "remarketing"])) {
        var b = "conversion" === a.metadata.hit_type;
        (b && a.eventName !== Q.g.Ja) ||
          (a.copyToHitData(Q.g.fa),
          b &&
            (a.copyToHitData(Q.g.Kd),
            a.copyToHitData(Q.g.Id),
            a.copyToHitData(Q.g.Jd),
            a.copyToHitData(Q.g.Hd),
            (a.C[Q.g.dg] = a.eventName)));
      }
    },
    vu = function (a) {
      if (
        $t(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.o;
        if ($t(a, ["conversion", "remarketing"])) {
          var c = W(b, Q.g.Yb);
          if (!0 === c || !1 === c) a.C[Q.g.Yb] = c;
        }
        Xn(b)
          ? (a.C[Q.g.Ob] = !1)
          : ((a.C[Q.g.Ob] = !0), $t(a, "remarketing") && (a.isAborted = !0));
      }
    },
    wu = function (a) {
      $t(a, "conversion") &&
        (a.copyToHitData(Q.g.fd),
        a.copyToHitData(Q.g.Ld),
        a.copyToHitData(Q.g.ld),
        a.copyToHitData(Q.g.Rd),
        a.copyToHitData(Q.g.wc),
        a.copyToHitData(Q.g.Zc));
    },
    xu = function (a) {
      Yr(a);
    },
    yu = function (a) {
      if ($t(a, ["conversion", "remarketing"]) && G.__gsaExp && G.__gsaExp.id) {
        var b = G.__gsaExp.id;
        if (qb(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.C[Q.g.ug] = c);
          } catch (d) {}
      }
    },
    zu = function (a) {
      if ($t(a, ["conversion", "remarketing"])) {
        var b = sr();
        void 0 !== b && (a.C[Q.g.de] = b || "error");
        var c = Hn();
        c && (a.C[Q.g.Ac] = c);
        var d = Fn();
        d && (a.C[Q.g.Cc] = d);
      }
    },
    Au = function (a) {
      $t(a, ["conversion"]) && "1" === ep(!1)._up && (a.C[Q.g.Xd] = !0);
    },
    Bu = function (a) {
      $t(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !X(Wt()));
    },
    Cu = function (a) {
      if (
        $t(a, ["conversion", "user_data_lead", "user_data_web"]) &&
        X(Q.g.R) &&
        a.metadata.conversion_linker_enabled
      ) {
        var b = a.metadata.cookie_options,
          c = aq(b.prefix);
        "_gcl" === c && (c = "");
        if (T(29)) {
          var d = lr(c);
          a.C[Q.g.vi] = d.mh;
          a.C[Q.g.wi] = d.nh;
        }
        var e = T(56);
        if (qr(c, e)) {
          var f = e ? pr(c) : or(c);
          f && (a.C[Q.g.kb] = f);
          if (!c) {
            var g = a.C[Q.g.ob];
            b = k(b);
            b.prefix = c;
            var h = jr(g, b, !0).Cl;
            h && (a.C[Q.g.zc] = h);
          }
        } else {
          var m = nr(c);
          m && (a.C[Q.g.Ta] = m);
          if (!c) {
            var n = ir(Vp(Up()) ? Dp() : {}, gr);
            n && (a.C[Q.g.Vd] = n);
          }
        }
      }
    },
    Du = function (a) {
      if (
        $t(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        X(Q.g.R)
      ) {
        var b = !T(3);
        if ("remarketing" !== a.metadata.hit_type || b) {
          var c = a.metadata.cookie_options;
          sp(c, "conversion" === a.metadata.hit_type && a.eventName !== Q.g.Sa);
          X(Q.g.P) && (a.C[Q.g.Eb] = qp[tp(c.prefix)]);
        }
      }
    },
    Eu = function (a) {
      oj() || qj(a.o) || (T(71) && tt(void 0, Math.round(Db())));
    },
    Fu = function () {},
    Gu = function (a) {
      if ($t(a, ["conversion"])) {
        var b = as(a.metadata.cookie_options);
        if (b && !a.C[Q.g.Ca]) {
          var c = Mo(a.C[Q.g.ob]);
          a.C[Q.g.Ca] = c;
        }
        b && ((a.C[Q.g.ub] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    Hu = function (a) {
      var b = X(Wt());
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !b || !!a.metadata.consent_updated;
          break;
        case "remarketing":
          a.isAborted = !b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.C[Q.g.Rb] = !0);
      }
    },
    Iu = function (a) {
      $t(a, ["conversion"]) &&
        a.o.eventMetadata.is_external_event &&
        (a.C[Q.g.ij] = !0);
    },
    Ju = function (a) {
      if (!a.metadata.consent_updated && T(20) && $t(a, ["conversion"])) {
        var b = cr();
        br(b) && ((a.C[Q.g.ed] = "1"), (a.metadata.add_tag_timing = !0));
      }
    },
    Ku = function (a) {
      var b;
      if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            Zt(a);
            break;
          case "user_data_lead":
            b = 98;
            Zt(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && P(b);
      !0 === a.metadata.speculative && (a.isAborted = !0);
    },
    Lu = function (a) {
      T(17) &&
      a.eventName === Q.g.da &&
      $t(a, "page_view") &&
      !a.metadata.consent_updated &&
      !a.o.isGtmEvent
        ? Vr(a.target, a.o)
        : $t(a, "call_conversion") && (Vr(a.target, a.o), (a.isAborted = !0));
    },
    hu = !1,
    iu = !1;
  var Nu = function (a, b) {
      var c = {},
        d = function (f, g) {
          var h;
          h = !0 === g ? "1" : !1 === g ? "0" : encodeURIComponent(String(g));
          c[f] = h;
        };
      z(a.C, function (f, g) {
        var h = Mu[f];
        h &&
          void 0 !== g &&
          "" !== g &&
          (!a.metadata.redact_click_ids ||
            (f !== Q.g.Fd && f !== Q.g.Md && f !== Q.g.Se && f !== Q.g.cg) ||
            (g = "0"),
          d(h, g));
      });
      d("gtm", ko({ za: a.metadata.source_canonical_id }));
      Yn() && d("gcs", Zn());
      d("gcd", co(a.o));
      go() && d("dma_cps", eo());
      d("dma", fo());
      sn(An()) && d("tcfd", ho());
      Di.m && d("tag_exp", Di.m);
      if (a.metadata.add_tag_timing) {
        d("tft", Db());
        var e = Nc();
        void 0 !== e && d("tfd", Math.round(e));
      }
      T(16) && d("apve", T(17) ? "1" : "0");
      b(c);
    },
    Ou = function (a) {
      Nu(a, function (b) {
        var c = [];
        z(b, function (f, g) {
          c.push(f + "=" + g);
        });
        var d;
        d =
          "page_view" === a.metadata.hit_type
            ? rj(
                X([Q.g.R, Q.g.P])
                  ? "https://www.google.com"
                  : "https://pagead2.googlesyndication.com",
                !0
              ) + "/ccm/collect"
            : void 0;
        var e = d + "?" + c.join("&");
        Ic(e);
        if (qb(a.o.onSuccess)) a.o.onSuccess();
      });
    },
    Pu = {},
    Mu =
      ((Pu[Q.g.Rb] = "gcu"),
      (Pu[Q.g.kb] = "gclgb"),
      (Pu[Q.g.Ta] = "gclaw"),
      (Pu[Q.g.xi] = "gad_source"),
      (Pu[Q.g.Fd] = "gclid"),
      (Pu[Q.g.yi] = "gclsrc"),
      (Pu[Q.g.cg] = "gbraid"),
      (Pu[Q.g.Se] = "wbraid"),
      (Pu[Q.g.Eb] = "auid"),
      (Pu[Q.g.Ai] = "rnd"),
      (Pu[Q.g.Di] = "ncl"),
      (Pu[Q.g.fg] = "gcldc"),
      (Pu[Q.g.Md] = "dclid"),
      (Pu[Q.g.pb] = "edid"),
      (Pu[Q.g.xc] = "en"),
      (Pu[Q.g.Ac] = "gdpr"),
      (Pu[Q.g.sb] = "gdid"),
      (Pu[Q.g.Qi] = "gtm_up"),
      (Pu[Q.g.Hb] = "frm"),
      (Pu[Q.g.ed] = "lps"),
      (Pu[Q.g.Yd] = "did"),
      (Pu[Q.g.ya] = "dl"),
      (Pu[Q.g.Fa] = "dr"),
      (Pu[Q.g.jf] = "ga_uid"),
      (Pu[Q.g.Cc] = "gdpr_consent"),
      (Pu[Q.g.Da] = "uid"),
      (Pu[Q.g.de] = "us_privacy"),
      (Pu[Q.g.Ob] = "npa"),
      Pu);
  var Qu = {
    N: {
      Xh: "ads_conversion_hit",
      Dd: "container_execute_start",
      ai: "container_setup_end",
      Tf: "container_setup_start",
      Yh: "container_blocking_end",
      Zh: "container_execute_end",
      bi: "container_yield_end",
      Uf: "container_yield_start",
      aj: "event_execute_end",
      Zi: "event_evaluation_end",
      Kg: "event_evaluation_start",
      bj: "event_setup_end",
      ee: "event_setup_start",
      dj: "ga4_conversion_hit",
      he: "page_load",
      Cn: "pageview",
      hc: "snippet_load",
      wj: "tag_callback_error",
      xj: "tag_callback_failure",
      yj: "tag_callback_success",
      zj: "tag_execute_end",
      od: "tag_execute_start",
    },
  };
  function Ru() {
    function a(c, d) {
      var e = nb(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Su = !1;
  var Av = function (a, b) {},
    Bv = function (a, b) {},
    Cv = function (a, b) {},
    Dv = function (a, b) {},
    Ev = function () {
      var a = {};
      return a;
    },
    rv = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Fv = function () {},
    Gv = function (a, b) {},
    Hv = function (a, b, c) {},
    Iv = function () {};
  function Jv(a, b) {
    var c = G,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  var Kv = function (a, b, c) {
    var d = il(a, "fmt");
    if (b) {
      var e = il(a, "random"),
        f = il(a, "label") || "";
      if (!e) return !1;
      var g = Dt(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!Jv(g, b)) return !1;
    }
    d && 4 != d && (a = kl(a, "rfmt", d));
    var h = kl(a, "fmt", 4);
    yc(
      h,
      function () {
        G.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((G.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      H.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var Lv = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          h;
        for (h in d)
          "google_business_vertical" !== h &&
            (h in g || (g[h] = []), g[h].push(d[h]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    Nv = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = Mv(d)),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    Ov = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d &&
          b.push({
            item_id: Mv(d),
            quantity: d.quantity,
            value: d.price,
            start_date: d.start_date,
            end_date: d.end_date,
          });
      }
      return b;
    },
    Mv = function (a) {
      null != a.id && null != a.item_id && P(138);
      var b = a.id;
      T(15) &&
        (null != a.item_id ? (b = a.item_id) : null == b && (b = a.item_name));
      return b;
    },
    Qv = function (a) {
      if (!a) return "";
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = [];
        d &&
          (e.push(Pv(d.value)),
          e.push(Pv(d.quantity)),
          e.push(Pv(d.item_id)),
          e.push(Pv(d.start_date)),
          e.push(Pv(d.end_date)),
          b.push("(" + e.join("*") + ")"));
      }
      return 0 < b.length ? b.join("") : "";
    },
    Pv = function (a) {
      return "number" !== typeof a && "string" !== typeof a ? "" : a.toString();
    },
    Sv = function (a, b) {
      var c = Rv(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    Rv = function (a) {
      if (!a || "object" !== typeof a || "function" === typeof a.join)
        return "";
      var b = [];
      z(a, function (c, d) {
        var e, f;
        if (Array.isArray(d)) {
          for (var g = [], h = 0; h < d.length; ++h) {
            var m = Tv(d[h]);
            void 0 != m && g.push(m);
          }
          f = 0 !== g.length ? g.join(",") : void 0;
        } else f = Tv(d);
        e = f;
        var n = Tv(c);
        n && void 0 != e && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    Tv = function (a) {
      var b = typeof a;
      if (null != a && "object" !== b && "function" !== b)
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    Uv = function (a, b) {
      var c = [],
        d = function (f, g) {
          var h = !0 === eg[f];
          null == g ||
            (!h && "" === g) ||
            (!0 === g && (g = 1),
            !1 === g && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      ("conversion" !== e && "remarketing" !== e) ||
        d("random", a.metadata.event_start_timestamp_ms);
      z(b, d);
      return c.join("&");
    },
    Vv = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.C[Q.g.Vc],
        e = X([Q.g.R, Q.g.P]),
        f = [],
        g,
        h = a.o.onSuccess,
        m,
        n = io() ? 2 : 3,
        p = 0,
        q = function (x) {
          f.push(x);
          x.Ia && p++;
        },
        r = void 0;
      switch (c) {
        case "conversion":
          m = "/pagead/conversion";
          var t = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com"),
                (m = "/pagead/1p-conversion"),
                (r = 8))
              : ((g = "https://www.googleadservices.com"), (r = 5))
            : ((g = "https://pagead2.googlesyndication.com"), (r = 6));
          a.metadata.is_gcp_conversion &&
            (t = "&gcp=1&sscte=1&ct_cookie_present=1");
          var u = {
            La: "" + rj(g, !0) + m + "/" + d + "/?" + Uv(a, b) + t,
            format: n,
            Ia: !0,
            endpoint: r,
          };
          X(Q.g.P) && (u.attributes = { attributionsrc: "" });
          q(u);
          a.metadata.send_ccm_parallel_ping &&
            ((r = a.metadata.is_gcp_conversion ? 23 : 22),
            q({
              La: "" + rj(g, !0) + "/ccm/conversion/" + d + "/?" + Uv(a, b) + t,
              format: 2,
              Ia: !0,
              endpoint: r,
            }));
          a.metadata.is_gcp_conversion &&
            e &&
            ((t = "&gcp=1&ct_cookie_present=1"),
            q({
              La:
                "" +
                rj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Uv(a, b) +
                t,
              format: n,
              Ia: !0,
              endpoint: 9,
            }));
          break;
        case "remarketing":
          var v = b.data || "",
            w = Lv(Nv(a.C[Q.g.fa]));
          if (w.length) {
            for (var y = 0; y < w.length; y++)
              (b.data = Sv(v, w[y])),
                q({
                  La:
                    "" +
                    rj("https://googleads.g.doubleclick.net") +
                    "/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    Uv(a, b),
                  format: n,
                  Ia: !0,
                  endpoint: 9,
                }),
                a.metadata.send_fledge_experiment &&
                  q({
                    La: "" + Vt() + "/td/rul/" + d + "?" + Uv(a, b),
                    format: 4,
                    Ia: !1,
                    endpoint: 44,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            q({
              La:
                "" +
                rj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Uv(a, b),
              format: n,
              Ia: !0,
              endpoint: 9,
            });
          break;
        case "user_data_lead":
          q({
            La:
              "" +
              rj("https://google.com") +
              "/pagead/form-data/" +
              d +
              "?" +
              Uv(a, b),
            format: 1,
            Ia: !0,
            endpoint: 11,
          });
          break;
        case "user_data_web":
          q({
            La:
              "" +
              rj("https://google.com") +
              "/ccm/form-data/" +
              d +
              "?" +
              Uv(a, b),
            format: 1,
            Ia: !0,
            endpoint: 21,
          });
      }
      1 < f.length && qb(a.o.onSuccess) && (h = Nb(a.o.onSuccess, p));
      io() ||
        ("conversion" !== c && "remarketing" !== c) ||
        !a.metadata.send_fledge_experiment ||
        (T(23) && "conversion" === c && (b.ct_cookie_present = 0),
        q({
          La: "" + Vt() + "/td/rul/" + d + "?" + Uv(a, b),
          format: 4,
          Ia: !1,
          endpoint: 44,
        }));
      return { onSuccess: h, Ul: f };
    },
    Wv = function (a, b, c, d, e, f, g) {
      Bv(c.o.eventId, c.eventName);
      var h = function () {
        e && e();
      };
      switch (b) {
        case 1:
          Ic(a);
          e && e();
          break;
        case 2:
          Bc(a, h, void 0, f);
          break;
        case 3:
          var m = !1;
          try {
            m = Kv(a, h, f);
          } catch (q) {
            m = !1;
          }
          m || Wv(a, 2, c, d, h, f, g);
          break;
        case 4:
          var n = "AW-" + c.C[Q.g.Vc],
            p = c.C[Q.g.ob];
          p && (n = n + "/" + p);
          Tt(a, n);
      }
    },
    Xv = {},
    Yv =
      ((Xv[Q.g.Rb] = "gcu"),
      (Xv[Q.g.kb] = "gclgb"),
      (Xv[Q.g.Ta] = "gclaw"),
      (Xv[Q.g.vi] = "gclgs"),
      (Xv[Q.g.wi] = "gclst"),
      (Xv[Q.g.Eb] = "auid"),
      (Xv[Q.g.Hd] = "dscnt"),
      (Xv[Q.g.Id] = "fcntr"),
      (Xv[Q.g.Jd] = "flng"),
      (Xv[Q.g.Kd] = "mid"),
      (Xv[Q.g.dg] = "bttype"),
      (Xv[Q.g.ob] = "label"),
      (Xv[Q.g.Vb] = "capi"),
      (Xv[Q.g.We] = "pscdl"),
      (Xv[Q.g.Ba] = "currency_code"),
      (Xv[Q.g.Ld] = "vdltv"),
      (Xv[Q.g.Ei] = "_dbg"),
      (Xv[Q.g.Rd] = "oedeld"),
      (Xv[Q.g.pb] = "edid"),
      (Xv[Q.g.Ji] = "fdr"),
      (Xv[Q.g.kg] = "fledge"),
      (Xv[Q.g.Vd] = "gac"),
      (Xv[Q.g.zc] = "gacgb"),
      (Xv[Q.g.pg] = "gacmcov"),
      (Xv[Q.g.Ac] = "gdpr"),
      (Xv[Q.g.sb] = "gdid"),
      (Xv[Q.g.ug] = "gsaexp"),
      (Xv[Q.g.Hb] = "frm"),
      (Xv[Q.g.Xd] = "gtm_up"),
      (Xv[Q.g.ed] = "lps"),
      (Xv[Q.g.Yd] = "did"),
      (Xv[Q.g.fd] = void 0),
      (Xv[Q.g.Kb] = "tiba"),
      (Xv[Q.g.Yb] = "rdp"),
      (Xv[Q.g.ub] = "ecsid"),
      (Xv[Q.g.jf] = "ga_uid"),
      (Xv[Q.g.ld] = "delopc"),
      (Xv[Q.g.Cc] = "gdpr_consent"),
      (Xv[Q.g.Ca] = "oid"),
      (Xv[Q.g.nf] = "uaa"),
      (Xv[Q.g.pf] = "uab"),
      (Xv[Q.g.qf] = "uafvl"),
      (Xv[Q.g.rf] = "uamb"),
      (Xv[Q.g.tf] = "uam"),
      (Xv[Q.g.uf] = "uap"),
      (Xv[Q.g.vf] = "uapv"),
      (Xv[Q.g.wf] = "uaw"),
      (Xv[Q.g.Eg] = "ec_lat"),
      (Xv[Q.g.Fg] = "ec_meta"),
      (Xv[Q.g.Gg] = "ec_m"),
      (Xv[Q.g.Hg] = "ec_sel"),
      (Xv[Q.g.Ig] = "ec_s"),
      (Xv[Q.g.md] = "ec_mode"),
      (Xv[Q.g.Da] = "userId"),
      (Xv[Q.g.de] = "us_privacy"),
      (Xv[Q.g.qa] = "value"),
      (Xv[Q.g.Jg] = "mcov"),
      (Xv[Q.g.gj] = "hn"),
      (Xv[Q.g.ij] = "gtm_ee"),
      (Xv[Q.g.Ob] = "npa"),
      (Xv[Q.g.Vc] = null),
      (Xv[Q.g.Lb] = null),
      (Xv[Q.g.Pa] = null),
      (Xv[Q.g.fa] = null),
      (Xv[Q.g.ya] = null),
      (Xv[Q.g.Fa] = null),
      (Xv[Q.g.kf] = null),
      Xv),
    $v = function (a) {
      "page_view" === a.metadata.hit_type
        ? Ou(a)
        : Zv(a, function (b, c) {
            for (
              var d = Vv(a, b), e = d.onSuccess, f = d.Ul, g = {}, h = 0;
              h < f.length;
              g = {
                La: void 0,
                kh: void 0,
                Ia: void 0,
                Tg: void 0,
                gh: void 0,
              },
                h++
            ) {
              var m = f[h];
              g.La = m.La;
              g.kh = m.format;
              g.Ia = m.Ia;
              g.Tg = m.attributes;
              g.gh = m.endpoint;
              var n = void 0;
              if (null != (n = c) && n.Sm) {
                var p = (function (u) {
                    return function (v) {
                      Oh(c.qm, function (w) {
                        var y = Eh(w),
                          x = u.La;
                        if (v) {
                          var B = ko({
                            za: a.metadata.source_canonical_id,
                            dk: v,
                          });
                          x = x.replace(b.gtm, B);
                        }
                        Wv(
                          x + "&em=" + encodeURIComponent(y.Rj),
                          u.kh,
                          a,
                          b,
                          u.Ia ? e : void 0,
                          u.Tg,
                          u.gh
                        );
                      });
                    };
                  })(g),
                  q = c,
                  r = q.Th,
                  t = "" + g.La + q.Xm.join("");
                vt(t, r, g.Ia && e ? e : function () {}, p);
              } else Wv(g.La, g.kh, a, b, g.Ia ? e : void 0, g.Tg, g.gh);
            }
          });
    },
    Zv = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f,
        g = [],
        h = a.metadata.event_start_timestamp_ms;
      if ("conversion" === c || "remarketing" === c)
        (d.cv = "11"),
          (d.fst = h),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1");
      var m = yq(["aw", "dc"]);
      null != m && (d.gad_source = m);
      d.gtm = ko({ za: a.metadata.source_canonical_id });
      "remarketing" !== c && Yn() && (d.gcs = Zn());
      d.gcd = co(a.o);
      go() && (d.dma_cps = eo());
      d.dma = fo();
      sn(An()) && (d.tcfd = ho());
      Di.m && (d.tag_exp = Di.m);
      if (a.C[Q.g.Lb]) {
        var n = a.C[Q.g.Lb].split("x");
        2 === n.length && ((d.u_w = n[0]), (d.u_h = n[1]));
      }
      if (a.C[Q.g.Pa]) {
        var p = a.C[Q.g.Pa];
        2 === p.length
          ? (d.hl = p)
          : 5 === p.length &&
            ((d.hl = p.substring(0, 2)), (d.gl = p.substring(3, 5)));
      }
      var q = a.metadata.redact_click_ids,
        r = function (F, M) {
          var L = a.C[M];
          L && (d[F] = q ? kj(L) : L);
        };
      r("url", Q.g.ya);
      r("ref", Q.g.Fa);
      r("top", Q.g.kf);
      z(a.C, function (F, M) {
        if (Yv.hasOwnProperty(F)) {
          var L = Yv[F];
          L && (d[L] = M);
        } else e[F] = M;
      });
      var t = a.C[Q.g.fd];
      void 0 != t && "" !== t && (d.vdnc = String(t));
      var u = a.C[Q.g.Zc];
      void 0 !== u && (d.shf = u);
      var v = a.C[Q.g.wc];
      void 0 !== v && (d.delc = v);
      if (T(20) && a.metadata.add_tag_timing) {
        d.tft = Db();
        var w = Nc();
        void 0 !== w && (d.tfd = Math.round(w));
      }
      d.data = Rv(e);
      var y = a.C[Q.g.fa];
      y && "conversion" === c && ((d.iedeld = Fr(y)), (d.item = Qv(Ov(y))));
      if (
        ("conversion" === c ||
          "user_data_lead" === c ||
          "user_data_web" === c) &&
        a.metadata.user_data
      )
        if (!X(Q.g.P) || (T(14) && !X(Q.g.R))) d.ec_mode = void 0;
        else {
          var x = function () {
            if ("user_data_web" === c) {
              var F;
              var M = a.metadata.cookie_options;
              M = M || {};
              var L;
              if (X($r)) {
                (L = as(M)) || (L = Mo());
                var O = M,
                  V = tp(O.prefix);
                vp(O, L);
                delete qp[V];
                delete rp[V];
                up(V, O.path, O.domain);
                F = as(M);
              } else F = void 0;
              d.ecsid = F;
            }
          };
          if ("conversion" !== c && T(71)) {
            d.gtm = ko({ za: a.metadata.source_canonical_id, dk: 3 });
            var B = Nh(a.metadata.user_data),
              A = Bh(B),
              D = A.jn;
            f = { Sm: !0, Th: A.Th, Xm: ["&em=" + A.Wm], qm: B };
            0 < D && x();
          } else {
            var E = Dh(a.metadata.user_data);
            if (E) {
              var C = E.then(function (F) {
                d.em = F.Qj;
                0 < F.Kh && x();
                T(62) && ((d._is_ee = 0), (d._es = 0));
              });
              g.push(C);
            }
          }
        }
      if (g.length)
        try {
          Promise.all(g).then(function () {
            b(d);
          });
          return;
        } catch (F) {}
      b(d, f);
    };
  function aw(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function bw(a, b, c) {
    c = void 0 === c ? !1 : c;
    cw().addRestriction(0, a, b, c);
  }
  function dw(a, b, c) {
    c = void 0 === c ? !1 : c;
    cw().addRestriction(1, a, b, c);
  }
  function ew() {
    var a = Lj();
    return cw().getRestrictions(1, a);
  }
  var fw = function () {
      this.m = {};
      this.F = {};
    },
    gw = function (a, b) {
      var c = a.m[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.m[b] = c));
      return c;
    };
  fw.prototype.addRestriction = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    if (!d || !this.F[b]) {
      var e = gw(this, b);
      0 === a
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : 1 === a &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  fw.prototype.getRestrictions = function (a, b) {
    var c = gw(this, b);
    if (0 === a) {
      var d, e;
      return [].concat(
        ra(
          (null == c
            ? void 0
            : null == (d = c._entity)
            ? void 0
            : d.internal) || []
        ),
        ra(
          (null == c
            ? void 0
            : null == (e = c._entity)
            ? void 0
            : e.external) || []
        )
      );
    }
    if (1 === a) {
      var f, g;
      return [].concat(
        ra(
          (null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) ||
            []
        ),
        ra(
          (null == c ? void 0 : null == (g = c._event) ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  fw.prototype.getExternalRestrictions = function (a, b) {
    var c = gw(this, b),
      d,
      e;
    return 0 === a
      ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) ||
          []
      : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) ||
          [];
  };
  fw.prototype.removeExternalRestrictions = function (a) {
    var b = gw(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.F[a] = !0;
  };
  function cw() {
    var a = li.r;
    a || ((a = new fw()), (li.r = a));
    return a;
  }
  var hw = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    iw = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    jw = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    kw =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function lw() {
    var a = Ki("gtm.allowlist") || Ki("gtm.whitelist");
    a && P(9);
    qi && (a = ["google", "gtagfl", "lcl", "zone"]);
    hw.test(G.location && G.location.hostname) &&
      (qi
        ? P(116)
        : (P(117),
          mw &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && Hb(Ab(a), iw),
      c = Ki("gtm.blocklist") || Ki("gtm.blacklist");
    c || ((c = Ki("tagTypeBlacklist")) && P(3));
    c ? P(8) : (c = []);
    hw.test(G.location && G.location.hostname) &&
      ((c = Ab(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    0 <= Ab(c).indexOf("google") && P(2);
    var d = c && Hb(Ab(c), jw),
      e = {};
    return function (f) {
      var g = f && f[Ge.ra];
      if (!g || "string" !== typeof g) return !0;
      g = g.replace(/^_*/, "");
      if (void 0 !== e[g]) return e[g];
      var h = Ai[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (0 > b.indexOf(g))
              if (h && 0 < h.length)
                for (var p = 0; p < h.length; p++) {
                  if (0 > b.indexOf(h[p])) {
                    P(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = 0 <= d.indexOf(g);
        if (r) q = r;
        else {
          var t = vb(d, h || []);
          t && P(10);
          q = t;
        }
      }
      var u = !m || q;
      u ||
        !(0 <= h.indexOf("sandboxedScripts")) ||
        (b && -1 !== b.indexOf("sandboxedScripts")) ||
        (u = vb(d, kw));
      return (e[g] = u);
    };
  }
  var mw = !1;
  mw = !0;
  function nw() {
    Dj &&
      bw(Lj(), function (a) {
        var b = rf(a.entityId),
          c;
        if (uf(b)) {
          var d = b[Ge.ra];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = jf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!aw(b[Ge.ra], 4);
        return c;
      });
  }
  var pw = function (a, b, c, d, e) {
      if (!ow()) {
        var f = d.siloed ? Gj(a) : a;
        if (!bk(f)) {
          var g = "?id=" + encodeURIComponent(a) + "&l=" + ki.Za,
            h = 0 === a.indexOf("GTM-");
          h || (g += "&cx=c");
          T(59) && (g += "&gtm=" + ko());
          var m = pj();
          m && (g += "&sign=" + ki.Cf);
          var n = c ? "/gtag/js" : "/gtm.js",
            p = oj() ? nj(b, n + g) : void 0;
          if (!p) {
            var q = ki.Ed + n;
            m && sc && h
              ? ((q = sc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (p = Jr("https://", "http://", q + g)))
              : (p = Di.F ? Ei() + n + g : Jr("https://", "http://", q + g));
          }
          d.siloed && dk({ ctid: f, isDestination: !1 });
          var r = Oj();
          Aj().container[f] = { state: 1, context: d, parent: r };
          zj({ ctid: f, isDestination: !1 }, e);
          yc(p);
        }
      }
    },
    qw = function (a, b, c, d) {
      if (!ow()) {
        var e = c.siloed ? Gj(a) : a;
        if (!ck(e))
          if (!c.siloed && ek())
            (Aj().destination[e] = {
              state: 0,
              transportUrl: b,
              context: c,
              parent: Oj(),
            }),
              zj({ ctid: e, isDestination: !0 }, d),
              P(91);
          else {
            var f =
              "/gtag/destination?id=" +
              encodeURIComponent(a) +
              "&l=" +
              ki.Za +
              "&cx=c";
            T(59) && (f += "&gtm=" + ko());
            pj() && (f += "&sign=" + ki.Cf);
            var g = oj() ? nj(b, f) : void 0;
            g || (g = Di.F ? Ei() + f : Jr("https://", "http://", ki.Ed + f));
            c.siloed && dk({ ctid: e, isDestination: !0 });
            Aj().destination[e] = { state: 1, context: c, parent: Oj() };
            zj({ ctid: e, isDestination: !0 }, d);
            yc(g);
          }
      }
    };
  function ow() {
    if (io()) {
      return !0;
    }
    return !1;
  }
  var rw = !1,
    sw = 0,
    tw = [];
  function uw(a) {
    if (!rw) {
      var b = H.createEventObject,
        c = "complete" === H.readyState,
        d = "interactive" === H.readyState;
      if (!a || "readystatechange" !== a.type || c || (!b && d)) {
        rw = !0;
        for (var e = 0; e < tw.length; e++) I(tw[e]);
      }
      tw.push = function () {
        for (var f = Aa.apply(0, arguments), g = 0; g < f.length; g++) I(f[g]);
        return 0;
      };
    }
  }
  function vw() {
    if (!rw && 140 > sw) {
      sw++;
      try {
        var a, b;
        null == (b = (a = H.documentElement).doScroll) || b.call(a, "left");
        uw();
      } catch (c) {
        G.setTimeout(vw, 50);
      }
    }
  }
  function ww(a) {
    rw ? a() : tw.push(a);
  }
  function yw(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Jj(),
    };
  }
  var Aw = function (a, b) {
      this.m = !1;
      this.M = [];
      this.eventData = { tags: [] };
      this.T = !1;
      this.F = this.J = 0;
      zw(this, a, b);
    },
    Bw = function (a, b, c, d) {
      if (ni.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Ya(d) && (e = k(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    Cw = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Dw = function (a) {
      if (!a.m) {
        for (var b = a.M, c = 0; c < b.length; c++) b[c]();
        a.m = !0;
        a.M.length = 0;
      }
    },
    zw = function (a, b, c) {
      void 0 !== b && a.oe(b);
      c &&
        G.setTimeout(function () {
          Dw(a);
        }, Number(c));
    };
  Aw.prototype.oe = function (a) {
    var b = this,
      c = Fb(function () {
        I(function () {
          a(Jj(), b.eventData);
        });
      });
    this.m ? c() : this.M.push(c);
  };
  var Ew = function (a) {
      a.J++;
      return Fb(function () {
        a.F++;
        a.T && a.F >= a.J && Dw(a);
      });
    },
    cx = function (a) {
      a.T = !0;
      a.F >= a.J && Dw(a);
    };
  var ix = {},
    kx = function () {
      return G[jx()];
    };
  var lx = function (a) {
      G.GoogleAnalyticsObject || (G.GoogleAnalyticsObject = a || "ga");
      var b = G.GoogleAnalyticsObject;
      if (G[b]) G.hasOwnProperty(b);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Cb());
        G[b] = c;
      }
      return G[b];
    },
    mx = function (a) {
      if (Yl()) {
        var b = kx();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function jx() {
    return G.GoogleAnalyticsObject || "ga";
  }
  var nx = function () {
      var a = Jj();
    },
    ox = function (a, b) {
      return function () {
        var c = kx(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var tx = ["es", "1"],
    ux = {},
    vx = {};
  function wx(a, b) {
    if (xj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      ux[a] = [
        ["e", c],
        ["eid", a],
      ];
      wk(a);
    }
  }
  function xx(a) {
    var b = a.eventId,
      c = a.Ya;
    if (!ux[b]) return [];
    var d = [];
    vx[b] || d.push(tx);
    d.push.apply(d, ra(ux[b]));
    c && (vx[b] = !0);
    return d;
  }
  var yx = {},
    zx = {},
    Ax = {};
  function Bx(a, b, c, d) {
    xj &&
      T(69) &&
      ((void 0 === d ? 0 : d)
        ? ((Ax[b] = Ax[b] || 0), ++Ax[b])
        : void 0 !== c
        ? ((zx[a] = zx[a] || {}), (zx[a][b] = Math.round(c)))
        : ((yx[a] = yx[a] || {}), (yx[a][b] = (yx[a][b] || 0) + 1)));
  }
  function Cx(a) {
    var b = a.eventId,
      c = a.Ya,
      d = yx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete yx[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function Dx(a) {
    var b = a.eventId,
      c = a.Ya,
      d = zx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete zx[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function Ex() {
    for (
      var a = [], b = pa(Object.keys(Ax)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + Ax[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var Fx = {},
    Gx = {};
  function Hx(a, b, c) {
    if (xj && b) {
      var d = sj(b);
      Fx[a] = Fx[a] || [];
      Fx[a].push(c + d);
      var e = (uf(b) ? "1" : "2") + d;
      Gx[a] = Gx[a] || [];
      Gx[a].push(e);
      wk(a);
    }
  }
  function Ix(a) {
    var b = a.eventId,
      c = a.Ya,
      d = [],
      e = Fx[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = Gx[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete Fx[b], delete Gx[b]);
    return d;
  }
  function Jx(a, b, c, d) {
    var e = gf[a],
      f = Kx(a, b, c, d);
    if (!f) return null;
    var g = vf(e[Ge.uj], c, []);
    if (g && g.length) {
      var h = g[0];
      f = Jx(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.Jj ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function Kx(a, b, c, d) {
    function e() {
      if (f[Ge.Qk]) h();
      else {
        var w = tf(f, c, []),
          y = w[Ge.pk];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!X(y[x])) {
              h();
              return;
            }
        var B = Bw(c.ic, String(f[Ge.ra]), Number(f[Ge.ne]), w[Ge.Rk]),
          A = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var C = Db() - E;
            Hx(c.id, gf[a], "5");
            Cw(c.ic, B, "success", C);
            T(60) && Hv(c, f, Qu.N.yj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var C = Db() - E;
            Hx(c.id, gf[a], "6");
            Cw(c.ic, B, "failure", C);
            T(60) && Hv(c, f, Qu.N.xj);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Hx(c.id, f, "1");
        var D = function () {
          Cl(3);
          var C = Db() - E;
          Hx(c.id, f, "7");
          Cw(c.ic, B, "exception", C);
          T(60) && Hv(c, f, Qu.N.wj);
          A || ((A = !0), h());
        };
        T(60) && Gv(c, f);
        var E = Db();
        try {
          wf(w, { event: c, index: a, type: 1 });
        } catch (C) {
          D(C);
        }
        T(60) && Hv(c, f, Qu.N.zj);
      }
    }
    var f = gf[a],
      g = b.onSuccess,
      h = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = vf(f[Ge.Aj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Jx(p.index, { onSuccess: g, onFailure: h, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.Jj ? m : q;
    }
    if (f[Ge.nj] || f[Ge.Tk]) {
      var r = f[Ge.nj] ? hf : c.Um,
        t = g,
        u = h;
      if (!r[a]) {
        e = Fb(e);
        var v = Lx(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Lx(a, b, c) {
    var d = [],
      e = [];
    b[a] = Mx(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Nx;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Ox;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Mx(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Nx(a) {
    a();
  }
  function Ox(a, b) {
    b();
  }
  var Rx = function (a, b) {
    for (var c = [], d = 0; d < gf.length; d++)
      if (a[d]) {
        var e = gf[d];
        var f = Ew(b.ic);
        try {
          var g = Jx(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = e[Ge.ra];
            if (!h)
              throw Error("Error: No function name given for function call.");
            var m = jf[h];
            c.push({
              gk: d,
              Vj: (m ? m.priorityOverride || 0 : 0) || aw(e[Ge.ra], 1) || 0,
              execute: g,
            });
          } else Px(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(Qx);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Qx(a, b) {
    var c,
      d = b.Vj,
      e = a.Vj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.gk,
        h = b.gk;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function Px(a, b) {
    if (xj) {
      var c = function (d) {
        var e = b.isBlocked(gf[d]) ? "3" : "4",
          f = vf(gf[d][Ge.uj], b, []);
        f && f.length && c(f[0].index);
        Hx(b.id, gf[d], e);
        var g = vf(gf[d][Ge.Aj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Ux = !1,
    Sx;
  var $x = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (T(60)) {
    }
    if ("gtm.js" === d) {
      if (Ux) return !1;
      Ux = !0;
    }
    var e = !1,
      f = ew(),
      g = k(a);
    if (
      !f.every(function (t) {
        return t({ originalEventData: g });
      })
    ) {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      e = !0;
    }
    wx(b, d);
    var h = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Wx(g, e),
        Um: [],
        logMacroError: function () {
          P(6);
          Cl(0);
        },
        cachedModelValues: Xx(),
        ic: new Aw(function () {
          if (T(60)) {
          }
          h && h.apply(h, [].slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    T(69) && xj && (n.reportMacroDiscrepancy = Bx);
    T(60) && Cv(n.id, n.name);
    var p = Ef(n);
    T(60) && Dv(n.id, n.name);
    e && (p = Yx(p));
    if (T(60)) {
    }
    var q = Rx(p, n),
      r = !1;
    cx(n.ic);
    ("gtm.js" !== d && "gtm.sync" !== d) || nx();
    return Zx(p, q) || r;
  };
  function Xx() {
    var a = {};
    a.event = Pi("event", 1);
    a.ecommerce = Pi("ecommerce", 1);
    a.gtm = Pi("gtm");
    a.eventModel = Pi("eventModel");
    return a;
  }
  function Wx(a, b) {
    var c = lw();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[Ge.ra];
      if (!e || "string" != typeof e) return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = Lj();
      f = cw().getRestrictions(0, g);
      var h = a;
      b && ((h = k(a)), (h["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (
        var m = Ai[e] || [], n = pa(f), p = n.next();
        !p.done;
        p = n.next()
      ) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: h }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function Yx(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(gf[c][Ge.ra]);
        if (mi[d] || void 0 !== gf[c][Ge.Uk] || aw(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Zx(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && gf[c] && !ni[String(gf[c][Ge.ra])]) return !0;
    return !1;
  }
  var ay = 0;
  function by() {
    if (1 === ay && yj) {
      var a = sk(!0, !0, !0, !0);
      lk && (Lc(a), (lk = !1));
    }
  }
  var cy = function (a) {
    if (!a.Ij || 1 !== ay) return [];
    a.Lc();
    var b = vl();
    b.push(["mcc", "1"]);
    ay = 3;
    return b;
  };
  function dy(a, b) {
    return 1 === arguments.length ? ey("set", a) : ey("set", a, b);
  }
  function fy(a, b) {
    return 1 === arguments.length ? ey("config", a) : ey("config", a, b);
  }
  function gy(a, b, c) {
    c = c || {};
    c[Q.g.Zb] = a;
    return ey("event", b, c);
  }
  function ey() {
    return arguments;
  }
  var hy = function () {
    this.messages = [];
    this.m = [];
  };
  hy.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.m.length; g++)
      try {
        this.m[g](f);
      } catch (h) {}
  };
  hy.prototype.listen = function (a) {
    this.m.push(a);
  };
  hy.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  hy.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function iy(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Lf.canonicalContainerId;
    jy().enqueue(a, b, c);
  }
  function ky() {
    var a = ly;
    jy().listen(a);
  }
  function jy() {
    var a = li.mb;
    a || ((a = new hy()), (li.mb = a));
    return a;
  }
  var Hf;
  var my = {},
    ny = {};
  function oy(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { Jh: void 0, qh: void 0 }, f++
    ) {
      var g = a[f];
      if (0 <= g.indexOf("-")) {
        if (((e.Jh = rm(g, b)), e.Jh)) {
          var h = Hj();
          tb(
            h,
            (function (r) {
              return function (t) {
                return r.Jh.ka === t;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = my[g] || [];
        e.qh = {};
        m.forEach(
          (function (r) {
            return function (t) {
              r.qh[t] = !0;
            };
          })(e)
        );
        for (var n = Ej(), p = 0; p < n.length; p++)
          if (e.qh[n[p]]) {
            c = c.concat(Hj());
            break;
          }
        var q = ny[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { km: c, om: d };
  }
  function py(a) {
    z(my, function (b, c) {
      var d = c.indexOf(a);
      0 <= d && c.splice(d, 1);
    });
  }
  function qy(a) {
    z(ny, function (b, c) {
      var d = c.indexOf(a);
      0 <= d && c.splice(d, 1);
    });
  }
  var ry = "HA GF G UA AW DC MC".split(" "),
    sy = !1,
    ty = !1,
    uy = !1,
    vy = !1;
  function wy(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Bi() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var xy = void 0,
    yy = void 0;
  function zy(a, b, c) {
    var d = k(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && P(136);
    var e = k(b);
    k(c, e);
    iy(fy(Ej()[0], e), a.eventId, d);
  }
  function Ay(a) {
    for (var b = pa([Q.g.jd, Q.g.Mb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || $m.F[d];
      if (e) return e;
    }
  }
  var By = [
      Q.g.jd,
      Q.g.Mb,
      Q.g.yc,
      Q.g.nb,
      Q.g.ub,
      Q.g.Da,
      Q.g.xa,
      Q.g.Oa,
      Q.g.Ua,
      Q.g.Fb,
    ],
    Cy = {
      config: function (a, b) {
        var c = wy(a, b);
        if (!(2 > a.length) && l(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Ya(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = rm(a[1], b.isGtmEvent);
          if (e) {
            var f, g, h;
            a: {
              if (!Cj.fe) {
                var m = Nj(Oj());
                if (gk(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  h = { zm: Nj(n), jm: p };
                  break a;
                }
              }
              h = void 0;
            }
            var q = h;
            q && ((f = q.zm), (g = q.jm));
            wx(c.eventId, "gtag.config");
            var r = e.ka,
              t = e.id !== r;
            if (t ? -1 === Hj().indexOf(r) : -1 === Ej().indexOf(r)) {
              if (!b.inheritParentConfig && !d[Q.g.Ib]) {
                var u = Ay(d);
                if (t)
                  qw(r, u, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (void 0 !== f && -1 !== f.containers.indexOf(r)) {
                  var v = d;
                  xy ? zy(b, v, xy) : yy || (yy = k(v));
                } else
                  pw(r, u, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (P(128), g && P(130), b.inheritParentConfig)) {
                var w;
                var y = d;
                yy
                  ? (zy(b, yy, y), (w = !1))
                  : ((!y[Q.g.ac] && pi && xy) || (xy = k(y)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var x = d;
              if (!uy && ((uy = !0), ty))
                for (var B = pa(By), A = B.next(); !A.done; A = B.next())
                  if (x.hasOwnProperty(A.value)) {
                    Al("erc");
                    break;
                  }
              yj && !Dj && (1 === ay && Dc(G, "pagehide", by), (ay = 2));
              if (pi && !t && !d[Q.g.ac]) {
                var D = vy;
                vy = !0;
                if (D) return;
              }
              sy || P(43);
              if (!b.noTargetGroup)
                if (t) {
                  qy(e.id);
                  var E = e.id,
                    C = d[Q.g.Wd] || "default";
                  C = String(C).split(",");
                  for (var F = 0; F < C.length; F++) {
                    var M = ny[C[F]] || [];
                    ny[C[F]] = M;
                    0 > M.indexOf(E) && M.push(E);
                  }
                } else {
                  py(e.id);
                  var L = e.id,
                    O = d[Q.g.Wd] || "default";
                  O = O.toString().split(",");
                  for (var V = 0; V < O.length; V++) {
                    var ba = my[O[V]] || [];
                    my[O[V]] = ba;
                    0 > ba.indexOf(L) && ba.push(L);
                  }
                }
              delete d[Q.g.Wd];
              var aa = b.eventMetadata || {};
              aa.hasOwnProperty("is_external_event") ||
                (aa.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = aa;
              delete d[Q.g.bd];
              for (var R = t ? [e.id] : Hj(), oa = 0; oa < R.length; oa++) {
                var ka = d,
                  ha = R[oa],
                  ia = k(b),
                  Ja = rm(ha, ia.isGtmEvent);
                Ja && $m.push("config", [ka], Ja, ia);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          P(39);
          var c = wy(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[Q.g.P] && P(139), e[Q.g.Aa] && P(140));
          "default" === d
            ? gm(e)
            : "update" === d
            ? hm(e, c)
            : "declare" === d && b.fromContainerExecution && fm(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && l(c)) {
          var d;
          if (2 < a.length) {
            if ((!Ya(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = k(e)),
            e[Q.g.bd] && (g.eventCallback = e[Q.g.bd]),
            e[Q.g.Td] && (g.eventTimeout = e[Q.g.Td]));
          var h = wy(a, b),
            m = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[Q.g.Zb];
          void 0 === r &&
            ((r = Ki(Q.g.Zb, 2)), void 0 === r && (r = "default"));
          if (l(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent
              ? l(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var u = oy(t, b.isGtmEvent),
              v = u.km,
              w = u.om;
            if (w.length)
              for (var y = Ay(q), x = 0; x < w.length; x++) {
                var B = rm(w[x], b.isGtmEvent);
                B &&
                  qw(B.ka, y, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = sm(v, b.isGtmEvent);
          } else p = void 0;
          var A = p;
          if (A) {
            var D;
            !A.length ||
              (null == (D = b.eventMetadata) ? 0 : D.em_event) ||
              (ty = !0);
            wx(m, c);
            for (var E = [], C = 0; C < A.length; C++) {
              var F = A[C],
                M = k(b);
              if (-1 !== ry.indexOf(Wj(F.prefix))) {
                var L = k(d),
                  O = M.eventMetadata || {};
                O.hasOwnProperty("is_external_event") ||
                  (O.is_external_event = !M.fromContainerExecution);
                M.eventMetadata = O;
                delete L[Q.g.bd];
                an(c, L, F.id, M);
                yj && !Dj && 0 === ay && (Cc(G, "pagehide", by), (ay = 1));
              }
              E.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            0 < A.length
              ? (g.eventModel[Q.g.Zb] = E.join())
              : delete g.eventModel[Q.g.Zb];
            sy || P(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[Q.g.Xb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        P(53);
        if (4 === a.length && l(a[1]) && l(a[2]) && qb(a[3])) {
          var c = rm(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            sy || P(43);
            var f = Ay();
            if (
              !tb(Hj(), function (h) {
                return c.ka === h;
              })
            )
              qw(c.ka, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== ry.indexOf(Wj(c.prefix))) {
              wy(a, b);
              var g = {};
              k(((g[Q.g.rb] = d), (g[Q.g.Gb] = e), g));
              bn(
                d,
                function (h) {
                  I(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          sy = !0;
          var c = wy(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && l(a[1]) && qb(a[2])) {
          if ((If(a[1], a[2]), P(74), "all" === a[1])) {
            P(75);
            var b = !1;
            try {
              b = a[2](Jj(), "unknown", {});
            } catch (c) {}
            b || P(76);
          }
        } else P(73);
      },
      set: function (a, b) {
        var c;
        2 == a.length && Ya(a[1])
          ? (c = k(a[1]))
          : 3 == a.length &&
            l(a[1]) &&
            ((c = {}),
            Ya(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = k(a[2]))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = wy(a, b),
            e = d.eventId,
            f = d.priorityId;
          k(c);
          var g = k(c);
          $m.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Dy = { policy: !0 };
  var Fy = function (a) {
    if (Ey(a)) return a;
    this.value = a;
  };
  Fy.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var Ey = function (a) {
    return !a || "object" !== Wa(a) || Ya(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Fy.prototype.getUntrustedMessageValue = Fy.prototype.getUntrustedMessageValue;
  var Gy = !1,
    Hy = [];
  function Iy() {
    if (!Gy) {
      Gy = !0;
      for (var a = 0; a < Hy.length; a++) I(Hy[a]);
    }
  }
  function Jy(a) {
    Gy ? I(a) : Hy.push(a);
  }
  var Ky = 0,
    Ly = {},
    My = [],
    Ny = [],
    Oy = !1,
    Py = !1;
  function Qy(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Ry = function (a) {
      return G[ki.Za].push(a);
    },
    Sy = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Ry(a);
    },
    Ty = function (a, b) {
      if (!rb(b) || 0 > b) b = 0;
      var c = li[ki.Za],
        d = 0,
        e = !1,
        f = void 0;
      f = G.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (G.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function Uy(a, b) {
    var c = a._clear || b.overwriteModelFields;
    z(a, function (e, f) {
      "_clear" !== e && (c && Ni(e), Ni(e, f));
    });
    xi || (xi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Bi()), (a["gtm.uniqueEventId"] = d), Ni("gtm.uniqueEventId", d));
    return $x(a);
  }
  function Vy(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (xb(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Wy() {
    var a;
    if (Ny.length) a = Ny.shift();
    else if (My.length) a = My.shift();
    else return;
    var b;
    var c = a;
    if (Oy || !Vy(c.message)) b = c;
    else {
      Oy = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Bi());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      My.unshift(h, c);
      if (yj) {
        var m = Lf.ctid;
        if (m) {
          var n,
            p = Nj(Oj());
          n = p && p.context;
          var q = pl(!0),
            r = Lf.canonicalContainerId,
            t = ul(),
            u = n && n.fromContainerExecution,
            v = Cj.fe,
            w = n && n.source;
          ql || (ql = t);
          sl.push(
            m + ";" + r + ";" + (u ? 1 : 0) + ";" + (w || 0) + ";" + (v ? 1 : 0)
          );
          rl = q;
          Hk();
        }
      }
      b = f;
    }
    return b;
  }
  function Xy() {
    for (var a = !1, b; !Py && (b = Wy()); ) {
      Py = !0;
      delete Hi.eventModel;
      Ji();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Py = !1;
      else {
        e.fromContainerExecution && Oi();
        try {
          if (qb(d))
            try {
              d.call(Li);
            } catch (v) {}
          else if (Array.isArray(d)) {
            var f = d;
            if (l(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                m = f.slice(1),
                n = Ki(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, m);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (xb(d))
              a: {
                if (d.length && l(d[0])) {
                  var q = Cy[d[0]];
                  if (q && (!e.fromContainerExecution || !Dy[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = Uy(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && Ji(!0);
          var r = d["gtm.uniqueEventId"];
          if ("number" === typeof r) {
            for (var t = Ly[String(r)] || [], u = 0; u < t.length; u++)
              Ny.push(Yy(t[u]));
            t.length && Ny.sort(Qy);
            delete Ly[String(r)];
            r > Ky && (Ky = r);
          }
          Py = !1;
        }
      }
    }
    return !a;
  }
  function Zy() {
    if (T(60)) {
      var a = $y();
    }
    var b = Xy();
    if (T(60)) {
    }
    try {
      var c = Jj(),
        d = G[ki.Za].hide;
      if (d && void 0 !== d[c] && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && !0 === d[f]) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function ly(a) {
    if (Ky < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Ly[b] = Ly[b] || [];
      Ly[b].push(a);
    } else
      Ny.push(Yy(a)),
        Ny.sort(Qy),
        I(function () {
          Py || Xy();
        });
  }
  function Yy(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var az = function () {
      function a(f) {
        var g = {};
        if (Ey(f)) {
          var h = f;
          f = Ey(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = tc(ki.Za, []),
        c = (li[ki.Za] = li[ki.Za] || {});
      !0 === c.pruned && P(83);
      Ly = jy().get();
      ky();
      ww(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      Jy(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < li.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new Fy(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        My.push.apply(My, h);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (P(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return Xy() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      My.push.apply(My, e);
      if ($y()) {
        if (T(60)) {
        }
        I(Zy);
      }
    },
    $y = function () {
      var a = !0;
      return a;
    };
  function bz(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Db();
    return b < c + 3e5 && b > c - 9e5;
  }
  function cz(a) {
    return a && 0 === a.indexOf("pending:") ? bz(a.substr(8)) : !1;
  }
  var dz = !1;
  function ez() {
    var a = Mj();
    if (a) {
      var b;
      return (
        a.canonicalContainerId ||
        "_" +
          (a.scriptContainerId ||
            (null == (b = a.destinations) ? void 0 : b[0]))
      );
    }
  }
  var fz = function (a) {
    if (dz) return [];
    var b = [],
      c = ez();
    c && b.push(["pcid", c]);
    a.Ya && ((dz = !0), b.length && a.Lc());
    return b;
  };
  var gz = /gtag[.\/]js/,
    hz = /gtm[.\/]js/;
  function iz(a) {
    if (a.scriptSource) {
      var b;
      try {
        var c;
        b = null == (c = Oc()) ? void 0 : c.getEntriesByType("resource");
      } catch (h) {}
      if (b) {
        for (var d = {}, e = 0; e < b.length; ++e) {
          var f = b[e],
            g = f.initiatorType;
          if ("script" === g && f.name === a.scriptSource)
            return { Km: e, Lm: d };
          d[g] = 1 + (d[g] || 0);
        }
        P(146);
      } else P(145);
    }
  }
  function jz() {
    if (yj) {
      var a = Vj();
      if (!a) P(144);
      else if (a.canonicalContainerId) {
        var b = iz(a);
        if (b) {
          var c = !1;
          jk.push(function (d) {
            if (c) return [];
            d.Ya && (c = !0);
            d.Lc();
            var e = [
              ["rtg", String(a.canonicalContainerId)],
              ["rlo", String(b.Km)],
              ["slo", String(b.Lm.script || "0")],
            ];
            if (T(64)) {
              var f = e.push,
                g;
              a: {
                var h = a.scriptSource;
                if (h) {
                  if (gz.test(h)) {
                    g = "3";
                    break a;
                  }
                  if (hz.test(h)) {
                    g = "2";
                    break a;
                  }
                }
                g = "0";
              }
              f.call(e, ["lst", g]);
            }
            return e;
          });
        }
      }
    }
  }
  var Ez = function () {};
  var Fz = function () {};
  Fz.prototype.toString = function () {
    return "undefined";
  };
  var Gz = new Fz();
  var Iz = function () {
      (li.rm = li.rm || {})[Lj()] = function (a) {
        if (Hz.hasOwnProperty(a)) return Hz[a];
      };
    },
    Lz = function (a, b, c) {
      if (a instanceof Jz) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String(Bi());
        Kz[g] = [f, c];
        a = e.call(d, g);
        b = pb;
      }
      return { Lj: a, onSuccess: b };
    },
    Mz = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        P(a ? 134 : 135);
        var d = Kz[c];
        if (d && "function" === typeof d[b]) d[b]();
        Kz[c] = void 0;
      };
    },
    Jz = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === Gz ? b : a[d]);
        return c.join("");
      };
    };
  Jz.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var Hz = {},
    Kz = {};
  function Nz(a, b) {
    function c(g) {
      var h = U(g),
        m = gj(h, "protocol"),
        n = gj(h, "host", !0),
        p = gj(h, "port"),
        q = gj(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Oz(a) {
    return Pz(a) ? 1 : 0;
  }
  function Pz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = k(a, {});
        k({ arg1: c[d], any_of: void 0 }, e);
        if (Oz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return pg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < lg.length; g++) {
                var h = lg[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return mg(b, c);
      case "_eq":
        return qg(b, c);
      case "_ge":
        return rg(b, c);
      case "_gt":
        return tg(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return sg(b, c);
      case "_lt":
        return ug(b, c);
      case "_re":
        return og(b, c, a.ignore_case);
      case "_sw":
        return vg(b, c);
      case "_um":
        return Nz(b, c);
    }
    return !1;
  }
  function Qz() {
    var a;
    a = void 0 === a ? "" : a;
    var b, c;
    return (
      null == (b = data) ? 0 : null == (c = b.blob) ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function Rz() {
    var a = [
      ["cv", T(79) ? Qz() : "41"],
      ["rv", ki.Og],
      [
        "tc",
        gf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    ki.je && a.push(["x", ki.je]);
    Di.m && a.push(["tag_exp", Di.m]);
    return a;
  }
  function Sz() {
    var a = El();
    return a.length ? [["exp_geo", a]] : [];
  }
  var Tz;
  function Uz() {
    try {
      null != Tz || (Tz = new Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (b) {}
    var a;
    return (null == (a = Tz) ? 0 : a.length) ? [["exp_tz", Tz]] : [];
  }
  function Vz() {
    return !1;
  }
  function Wz() {
    var a = {};
    return function (b, c, d) {};
  }
  function Xz() {
    var a = Yz;
    return function (b, c, d) {
      var e = d && d.event;
      Zz(c);
      var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
        g = new db();
      z(c, function (r, t) {
        var u = cd(t, void 0, f);
        void 0 === u && void 0 !== t && P(44);
        g.set(r, u);
      });
      a.m.m.F = Bf();
      var h = {
        Fj: Rf(b),
        eventId: null == e ? void 0 : e.id,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        oe:
          void 0 !== e
            ? function (r) {
                e.ic.oe(r);
              }
            : void 0,
        xb: function () {
          return b;
        },
        log: function () {},
        Al: {
          index: null == d ? void 0 : d.index,
          type: null == d ? void 0 : d.type,
          name: null == d ? void 0 : d.name,
        },
        Jm: !!aw(b, 3),
        originalEventData: null == e ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (h.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (Vz()) {
        var m = Wz(),
          n,
          p;
        h.Ra = {
          Uh: [],
          pe: {},
          yb: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          Nf: eh(),
        };
        h.log = function (r) {
          var t = Aa.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: t });
        };
      }
      var q = Ae(a, h, [b, g]);
      a.m.m.F = void 0;
      q instanceof Ha && "return" === q.type && (q = q.data);
      return J(q, void 0, f);
    };
  }
  function Zz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    qb(b) &&
      (a.gtmOnSuccess = function () {
        I(b);
      });
    qb(c) &&
      (a.gtmOnFailure = function () {
        I(c);
      });
  }
  function $z(a, b) {
    var c = this;
  }
  $z.U = "addConsentListener";
  var aA = !1;
  function bA(a) {
    for (var b = 0; b < a.length; ++b)
      if (aA)
        try {
          a[b]();
        } catch (c) {
          P(77);
        }
      else a[b]();
  }
  function cA(a, b, c) {
    var d = this,
      e;
    return e;
  }
  cA.K = "internal.addDataLayerEventListener";
  function dA(a, b, c) {}
  dA.U = "addDocumentEventListener";
  function eA(a, b, c, d) {}
  eA.U = "addElementEventListener";
  function fA(a) {
    return a.H.m;
  }
  function gA(a) {}
  gA.U = "addEventCallback";
  var hA = function (a) {
      return "string" === typeof a ? a : String(Bi());
    },
    kA = function (a, b) {
      iA(a, "init", !1) || (jA(a, "init", !0), b());
    },
    iA = function (a, b, c) {
      var d = lA(a);
      return Eb(d, b, c);
    },
    mA = function (a, b, c, d) {
      var e = lA(a),
        f = Eb(e, b, d);
      e[b] = c(f);
    },
    jA = function (a, b, c) {
      lA(a)[b] = c;
    },
    lA = function (a) {
      li.hasOwnProperty("autoEventsSettings") || (li.autoEventsSettings = {});
      var b = li.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    nA = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Mc(a, "className"),
        "gtm.elementId": a["for"] || Ec(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Mc(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Mc(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    };
  var pA = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (oA(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    },
    qA = function (a) {
      if (a.form) {
        var b;
        return (null == (b = a.form) ? 0 : b.tagName)
          ? a.form
          : H.getElementById(a.form);
      }
      return Hc(a, ["form"], 100);
    },
    oA = function (a) {
      var b = a.tagName.toLowerCase();
      return 0 > rA.indexOf(b) ||
        ("input" === b && 0 <= sA.indexOf(a.type.toLowerCase()))
        ? !1
        : !0;
    },
    rA = ["input", "select", "textarea"],
    sA = ["button", "hidden", "image", "reset", "submit"];
  function wA(a) {}
  wA.K = "internal.addFormAbandonmentListener";
  function xA(a, b, c, d) {}
  xA.K = "internal.addFormData";
  var yA = {},
    zA = [],
    AA = {},
    BA = 0,
    CA = 0;
  function JA(a, b) {}
  JA.K = "internal.addFormInteractionListener";
  function QA(a, b) {}
  QA.K = "internal.addFormSubmitListener";
  function VA(a) {}
  VA.K = "internal.addGaSendListener";
  function WA(a) {
    if (!a) return {};
    var b = a.Al;
    return yw(b.type, b.index, b.name);
  }
  function XA(a) {
    return a ? { originatingEntity: WA(a) } : {};
  }
  function eB(a) {
    var b = li.zones;
    return b
      ? b.getIsAllowedFn(Ej(), a)
      : function () {
          return !0;
        };
  }
  function fB() {
    dw(Lj(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = li.zones;
      return c ? c.isActive(Ej(), b) : !0;
    });
    bw(Lj(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return eB(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var gB = function (a, b) {
    this.tagId = a;
    this.se = b;
  };
  function hB(a, b) {
    var c = this,
      d;
    return d;
  }
  hB.K = "internal.loadGoogleTag";
  function iB(a) {
    return new Vc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Vc)
        return new Vc("", function () {
          var d = Aa.apply(0, arguments),
            e = this,
            f = k(fA(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            h = Na(this.H);
          h.m = f;
          return c.hb.apply(c, [h].concat(ra(g)));
        });
    });
  }
  function jB(a, b, c) {
    var d = this;
  }
  jB.K = "internal.addGoogleTagRestriction";
  var kB = {},
    lB = [];
  function sB(a, b) {}
  sB.K = "internal.addHistoryChangeListener";
  function tB(a, b, c) {}
  tB.U = "addWindowEventListener";
  function uB(a, b) {
    return !0;
  }
  uB.U = "aliasInWindow";
  function vB(a, b, c) {}
  vB.K = "internal.appendRemoteConfigParameter";
  function wB(a) {
    var b;
    return b;
  }
  wB.U = "callInWindow";
  function xB(a) {}
  xB.U = "callLater";
  function yB(a) {}
  yB.K = "callOnDomReady";
  function zB(a) {}
  zB.K = "callOnWindowLoad";
  function AB(a, b) {
    var c;
    return c;
  }
  AB.K = "internal.computeGtmParameter";
  function BB(a) {
    var b;
    return b;
  }
  BB.K = "internal.copyFromCrossContainerData";
  function CB(a, b) {
    var c;
    var d = 0 === fA(this).xb().indexOf("__cvt_") ? 2 : 1,
      e = cd(c, this.H, d);
    void 0 === e && void 0 !== c && P(45);
    return e;
  }
  CB.U = "copyFromDataLayer";
  function DB(a) {
    var b = void 0;
    return b;
  }
  DB.K = "internal.copyFromDataLayerCache";
  function EB(a) {
    var b;
    return b;
  }
  EB.U = "copyFromWindow";
  function FB(a) {
    var b = void 0;
    return cd(b, this.H, 1);
  }
  FB.K = "internal.copyKeyFromWindow";
  function GB(a, b) {
    var c;
    return c;
  }
  GB.K = "internal.copyPreHit";
  function HB(a, b) {
    var c = null;
    return cd(c, this.H, 2);
  }
  HB.U = "createArgumentsQueue";
  function IB(a) {
    return cd(
      function (c) {
        var d = kx();
        if ("function" === typeof c)
          d(function () {
            c(function (f, g, h) {
              var m = kx(),
                n = m && m.getByName && m.getByName(f);
              return Lk(G.gaplugins.Linker, n).decorate(g, h);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[1 === e.length ? e[0] : e[1]] && d.apply(null, c);
        } else if ("isLoaded" === c) return !!d.loaded;
      },
      this.H,
      1
    );
  }
  IB.K = "internal.createGaCommandQueue";
  function JB(a) {
    var f = 0 === fA(this).xb().indexOf("__cvt_") ? 2 : 1;
    return cd(
      function () {
        if (!qb(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.H,
      f
    );
  }
  JB.U = "createQueue";
  function KB(a, b) {
    var c = null;
    return c;
  }
  KB.K = "internal.createRegex";
  function LB() {
    var a = {};
    return a;
  }
  function MB(a) {}
  MB.K = "internal.declareConsentState";
  function NB(a) {
    var b = "";
    return b;
  }
  NB.K = "internal.decodeUrlHtmlEntities";
  function OB(a, b, c) {
    var d;
    return d;
  }
  OB.K = "internal.decorateUrlWithGaCookies";
  function PB(a) {
    var b;
    return b;
  }
  PB.K = "internal.detectUserProvidedData";
  var RB = function (a) {
      var b = Hc(a, ["button", "input"], 50);
      if (!b) return null;
      var c = String(b.tagName).toLowerCase();
      if ("button" === c) return b;
      if ("input" === c) {
        var d = Ec(b, "type");
        if (
          "button" === d ||
          "submit" === d ||
          "image" === d ||
          "file" === d ||
          "reset" === d
        )
          return b;
      }
      return null;
    },
    SB = function (a, b, c) {
      var d = c.target;
      if (d) {
        var e = iA(a, "individualElementIds", []);
        if (0 < e.length) {
          var f = nA(d, b, e);
          Ry(f);
        }
        var g = !1,
          h = iA(a, "commonButtonIds", []);
        if (0 < h.length) {
          var m = RB(d);
          if (m) {
            var n = nA(m, b, h);
            Ry(n);
            g = !0;
          }
        }
        var p = iA(a, "selectorToTriggerIds", {}),
          q;
        for (q in p)
          if (p.hasOwnProperty(q)) {
            var r = g
              ? p[q].filter(function (v) {
                  return -1 === h.indexOf(v);
                })
              : p[q];
            if (0 !== r.length) {
              var t = sh(d, q);
              if (t) {
                var u = nA(t, b, r);
                Ry(u);
              }
            }
          }
      }
    };
  function TB(a, b) {
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    var c = a ? J(a) : {},
      d = zb(c.matchCommonButtons),
      e = !!c.cssSelector;
    b = hA(b);
    N(this, "detect_click_events", c.matchCommonButtons, c.cssSelector);
    var f = c.useV2EventName ? "gtm.click-v2" : "gtm.click",
      g = c.useV2EventName ? "ecl" : "cl",
      h = function (n) {
        n.push(b);
        return n;
      };
    if (e || d) {
      if ((d && mA(g, "commonButtonIds", h, []), e)) {
        var m = Bb(String(c.cssSelector));
        mA(
          g,
          "selectorToTriggerIds",
          function (n) {
            n.hasOwnProperty(m) || (n[m] = []);
            h(n[m]);
            return n;
          },
          {}
        );
      }
    } else mA(g, "individualElementIds", h, []);
    kA(g, function () {
      Cc(
        H,
        "click",
        function (n) {
          return SB(g, f, n);
        },
        !0
      );
    });
    return b;
  }
  TB.K = "internal.enableAutoEventOnClick";
  function bC(a, b) {
    return b;
  }
  bC.K = "internal.enableAutoEventOnElementVisibility";
  function cC() {}
  cC.K = "internal.enableAutoEventOnError";
  var dC = {},
    eC = [],
    fC = {},
    gC = 0,
    hC = 0;
  function nC(a, b) {
    var c = this;
    return b;
  }
  nC.K = "internal.enableAutoEventOnFormInteraction";
  var oC = function (a, b, c, d, e) {
      var f = iA("fsl", c ? "nv.mwt" : "mwt", 0),
        g;
      g = c ? iA("fsl", "nv.ids", []) : iA("fsl", "ids", []);
      if (!g.length) return !0;
      var h = nA(a, "gtm.formSubmit", g),
        m = a.action;
      m && m.tagName && (m = a.cloneNode(!1).action);
      P(121);
      if ("https://www.facebook.com/tr/" === m) return P(122), !0;
      h["gtm.elementUrl"] = m;
      h["gtm.formCanceled"] = c;
      null != a.getAttribute("name") &&
        (h["gtm.interactedFormName"] = a.getAttribute("name"));
      e &&
        ((h["gtm.formSubmitElement"] = e),
        (h["gtm.formSubmitElementText"] = e.value));
      if (d && f) {
        if (!Sy(h, Ty(b, f), f)) return !1;
      } else Sy(h, function () {}, f || 2e3);
      return !0;
    },
    pC = function () {
      var a = [],
        b = function (c) {
          return tb(a, function (d) {
            return d.form === c;
          });
        };
      return {
        store: function (c, d) {
          var e = b(c);
          e ? (e.button = d) : a.push({ form: c, button: d });
        },
        get: function (c) {
          var d = b(c);
          if (d) return d.button;
        },
      };
    },
    qC = function (a) {
      var b = a.target;
      return b && "_self" !== b && "_parent" !== b && "_top" !== b ? !1 : !0;
    },
    rC = function () {
      var a = pC(),
        b = HTMLFormElement.prototype.submit;
      Cc(
        H,
        "click",
        function (c) {
          var d = c.target;
          if (
            d &&
            (d = Hc(d, ["button", "input"], 100)) &&
            ("submit" == d.type || "image" == d.type) &&
            d.name &&
            Ec(d, "value")
          ) {
            var e = qA(d);
            e && a.store(e, d);
          }
        },
        !1
      );
      Cc(
        H,
        "submit",
        function (c) {
          var d = c.target;
          if (!d) return c.returnValue;
          var e = c.defaultPrevented || !1 === c.returnValue,
            f = qC(d) && !e,
            g = a.get(d),
            h = !0;
          if (
            oC(
              d,
              function () {
                if (h) {
                  var m,
                    n = {};
                  g &&
                    ((m = H.createElement("input")),
                    (m.type = "hidden"),
                    (m.name = g.name),
                    (m.value = g.value),
                    d.appendChild(m),
                    g.hasAttribute("formaction") &&
                      ((n.action = d.getAttribute("action")),
                      oc(d, fc(g.getAttribute("formaction")))),
                    g.hasAttribute("formenctype") &&
                      ((n.enctype = d.getAttribute("enctype")),
                      d.setAttribute("enctype", g.getAttribute("formenctype"))),
                    g.hasAttribute("formmethod") &&
                      ((n.method = d.getAttribute("method")),
                      d.setAttribute("method", g.getAttribute("formmethod"))),
                    g.hasAttribute("formvalidate") &&
                      ((n.validate = d.getAttribute("validate")),
                      d.setAttribute(
                        "validate",
                        g.getAttribute("formvalidate")
                      )),
                    g.hasAttribute("formtarget") &&
                      ((n.target = d.getAttribute("target")),
                      d.setAttribute("target", g.getAttribute("formtarget"))));
                  b.call(d);
                  m &&
                    (d.removeChild(m),
                    n.hasOwnProperty("action") && oc(d, n.action),
                    n.hasOwnProperty("enctype") &&
                      d.setAttribute("enctype", n.enctype),
                    n.hasOwnProperty("method") &&
                      d.setAttribute("method", n.method),
                    n.hasOwnProperty("validate") &&
                      d.setAttribute("validate", n.validate),
                    n.hasOwnProperty("target") &&
                      d.setAttribute("target", n.target));
                }
              },
              e,
              f,
              g
            )
          )
            h = !1;
          else
            return (
              e ||
                (c.preventDefault && c.preventDefault(), (c.returnValue = !1)),
              !1
            );
          return c.returnValue;
        },
        !1
      );
      HTMLFormElement.prototype.submit = function () {
        var c = this,
          d = !0;
        oC(
          c,
          function () {
            d && b.call(c);
          },
          !1,
          qC(c)
        ) && (b.call(c), (d = !1));
      };
    };
  function sC(a, b) {
    var c = this;
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    var d = a && a.get("waitForTags");
    bA([
      function () {
        return N(c, "detect_form_submit_events", { waitForTags: !!d });
      },
    ]);
    var e = a && a.get("checkValidation");
    b = hA(b);
    if (d) {
      var f = Number(a.get("waitForTagsTimeout"));
      (0 < f && isFinite(f)) || (f = 2e3);
      var g = function (m) {
        return Math.max(f, m);
      };
      mA("fsl", "mwt", g, 0);
      e || mA("fsl", "nv.mwt", g, 0);
    }
    var h = function (m) {
      m.push(b);
      return m;
    };
    mA("fsl", "ids", h, []);
    e || mA("fsl", "nv.ids", h, []);
    iA("fsl", "init", !1) || (rC(), jA("fsl", "init", !0));
    return b;
  }
  sC.K = "internal.enableAutoEventOnFormSubmit";
  function xC() {
    var a = this;
  }
  xC.K = "internal.enableAutoEventOnGaSend";
  var yC = {},
    zC = [];
  function GC(a, b) {
    var c = this;
    return b;
  }
  GC.K = "internal.enableAutoEventOnHistoryChange";
  var HC = ["http://", "https://", "javascript:", "file://"];
  function LC(a, b) {
    var c = this;
    return b;
  }
  LC.K = "internal.enableAutoEventOnLinkClick";
  var MC, NC;
  function YC(a, b) {
    var c = this;
    return b;
  }
  YC.K = "internal.enableAutoEventOnScroll";
  function ZC(a) {
    return function () {
      if (a.Ch && a.Eh >= a.Ch) a.Lf && G.clearInterval(a.Lf);
      else {
        a.Eh++;
        var b = Db();
        Ry({
          event: a.eventName,
          "gtm.timerId": a.Lf,
          "gtm.timerEventNumber": a.Eh,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.Ch,
          "gtm.timerStartTime": a.fk,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.fk,
          "gtm.triggers": a.dn,
        });
      }
    };
  }
  function $C(a, b) {
    return b;
  }
  $C.K = "internal.enableAutoEventOnTimer";
  var ic = ma(["data-gtm-yt-inspected-"]),
    bD = ["www.youtube.com", "www.youtube-nocookie.com"],
    cD,
    dD = !1;
  function nD(a, b) {
    var c = this;
    return b;
  }
  nD.K = "internal.enableAutoEventOnYouTubeActivity";
  var oD;
  function pD(a) {
    var b = !1;
    return b;
  }
  pD.K = "internal.evaluateMatchingRules";
  var qD = function (a) {
      switch (a) {
        case "page_view":
          return [vr, Lu, fu, tu, Eu, Fu, xu];
        case "call_conversion":
          return [Lu];
        case "conversion":
          return [
            Ar,
            lu,
            au,
            ou,
            bu,
            cu,
            du,
            eu,
            fu,
            tu,
            uu,
            wu,
            yu,
            Iu,
            Ju,
            vu,
            Eu,
            Fu,
            pu,
            zu,
            Au,
            Cu,
            mu,
            qu,
            Gu,
            Br,
            ru,
            Du,
            gu,
            xu,
            nu,
            Ku,
            su,
            Bu,
            ku,
            ju,
            Hu,
          ];
        case "landing_page":
          return [
            Ar,
            lu,
            au,
            tu,
            Cr,
            Eu,
            Fu,
            pu,
            mu,
            Br,
            ru,
            gu,
            xu,
            nu,
            Ku,
            Hu,
          ];
        case "remarketing":
          return [
            Ar,
            lu,
            au,
            ou,
            bu,
            cu,
            du,
            eu,
            fu,
            tu,
            uu,
            yu,
            vu,
            Eu,
            Fu,
            pu,
            zu,
            mu,
            Br,
            ru,
            Du,
            gu,
            xu,
            nu,
            Ku,
            ku,
            Hu,
          ];
        case "user_data_lead":
          return [
            Ar,
            lu,
            au,
            bu,
            fu,
            tu,
            vu,
            Eu,
            Fu,
            Cr,
            pu,
            Cu,
            mu,
            Br,
            ru,
            Du,
            gu,
            xu,
            nu,
            Ku,
            Hu,
          ];
        case "user_data_web":
          return [
            Ar,
            lu,
            au,
            bu,
            fu,
            tu,
            vu,
            Eu,
            Fu,
            Cr,
            pu,
            Cu,
            mu,
            Br,
            ru,
            Du,
            gu,
            xu,
            nu,
            Ku,
            Hu,
          ];
        default:
          return [
            Ar,
            lu,
            au,
            ou,
            bu,
            cu,
            du,
            eu,
            fu,
            tu,
            uu,
            wu,
            yu,
            Iu,
            Ju,
            vu,
            Eu,
            Fu,
            pu,
            zu,
            Au,
            Cu,
            mu,
            qu,
            Gu,
            Br,
            ru,
            Du,
            gu,
            xu,
            nu,
            Ku,
            su,
            Bu,
            ku,
            ju,
            Hu,
          ];
      }
    },
    rD = function (a) {
      for (
        var b = qD(a.metadata.hit_type), c = 0;
        c < b.length && (b[c](a), !a.isAborted);
        c++
      );
    },
    sD = function (a, b, c, d) {
      var e = new Xq(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = Db();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    tD = function (a, b, c, d) {
      function e(t, u) {
        for (var v = pa(h), w = v.next(); !w.done; w = v.next()) {
          var y = w.value;
          y.isAborted = !1;
          y.metadata.speculative = !0;
          y.metadata.consent_updated = !0;
          y.metadata.event_start_timestamp_ms = Db();
          y.metadata.consent_event_id = t;
          y.metadata.consent_priority_id = u;
        }
      }
      function f(t) {
        for (var u = {}, v = 0; v < h.length; u = { Qa: void 0 }, v++)
          if (((u.Qa = h[v]), !t || t(u.Qa.metadata.hit_type)))
            if (
              !u.Qa.metadata.consent_updated ||
              "page_view" === u.Qa.metadata.hit_type ||
              X(q)
            )
              rD(h[v]),
                u.Qa.metadata.speculative ||
                  u.Qa.isAborted ||
                  ($v(u.Qa),
                  "page_view" === u.Qa.metadata.hit_type &&
                    T(18) &&
                    void 0 === u.Qa.C[Q.g.jf] &&
                    void 0 === r &&
                    (r = ro(
                      lo.me,
                      (function (w) {
                        return function () {
                          X(Q.g.P) &&
                            ((w.Qa.metadata.user_id_updated = !0),
                            (w.Qa.metadata.consent_updated = !1),
                            (w.Qa.C[Q.g.Rb] = void 0),
                            f(function (y) {
                              return "page_view" === y;
                            }),
                            (w.Qa.metadata.user_id_updated = !1),
                            so(lo.me, r),
                            (r = void 0));
                        };
                      })(u)
                    )));
      }
      var g =
        d.isGtmEvent && "" === a
          ? { id: "", prefix: "", ka: "", ma: [] }
          : rm(a, d.isGtmEvent);
      if (g) {
        var h = [];
        if (d.eventMetadata.hit_type_override) {
          var m = d.eventMetadata.hit_type_override;
          Array.isArray(m) || (m = [m]);
          for (var n = 0; n < m.length; n++) {
            var p = sD(m[n], g, b, d);
            p.metadata.speculative = !1;
            h.push(p);
          }
        } else
          b === Q.g.da &&
            (T(17)
              ? h.push(sD("page_view", g, b, d))
              : h.push(sD("landing_page", g, b, d))),
            h.push(sD("conversion", g, b, d)),
            h.push(sD("user_data_lead", g, b, d)),
            h.push(sD("user_data_web", g, b, d)),
            h.push(sD("remarketing", g, b, d));
        var q = [Q.g.R, Q.g.P],
          r = void 0;
        lm(function () {
          f();
          T(19) &&
            (X([Q.g.Aa]) ||
              km(
                function (t) {
                  e(t.consentEventId, t.consentPriorityId);
                  f(function (u) {
                    return "remarketing" === u;
                  });
                },
                [Q.g.Aa]
              ));
          X(q) ||
            km(function (t) {
              e(t.consentEventId, t.consentPriorityId);
              f();
            }, q);
        }, q);
      }
    };
  var YD = function () {
    var a = !0;
    (In(7) && In(9) && In(10)) || (a = !1);
    return a;
  };
  var bE = function (a, b) {
      if (!b.isGtmEvent) {
        var c = W(b, Q.g.rb),
          d = W(b, Q.g.Gb),
          e = W(b, c);
        if (void 0 === e) {
          var f = void 0;
          ZD.hasOwnProperty(c)
            ? (f = ZD[c])
            : $D.hasOwnProperty(c) && (f = $D[c]);
          1 === f && (f = aE(c));
          l(f)
            ? kx()(function () {
                var g = kx().getByName(a).get(f);
                d(g);
              })
            : d(void 0);
        } else d(e);
      }
    },
    cE = function (a, b) {
      var c = a[Q.g.Jb],
        d = b + ".",
        e = a[Q.g.X] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[Q.g.tb];
      e = String(e).replace(/\s+/g, "").split(",");
      var h = kx();
      h(d + "require", "linker");
      h(d + "linker:autoLink", e, f, g);
    },
    gE = function (a, b, c) {
      if (!c.isGtmEvent || !dE[a]) {
        var d = !X(Q.g.W),
          e = function (f) {
            var g,
              h,
              m = kx(),
              n = eE(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || fE(b, n.createOnlyFields)) {
              c.isGtmEvent &&
                ((g = "gtm" + Bi()),
                (h = n.createOnlyFields),
                n.gtmTrackerName && (h.name = g));
              m(function () {
                var t = m.getByName(b);
                t && (p = t.get("clientId"));
                c.isGtmEvent || m.remove(b);
              });
              m("create", a, c.isGtmEvent ? h : n.createOnlyFields);
              d &&
                X(Q.g.W) &&
                ((d = !1),
                m(function () {
                  var t = kx().getByName(c.isGtmEvent ? g : b);
                  !t ||
                    (t.get("clientId") == p && q) ||
                    (c.isGtmEvent
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&sst.gcut"] = fi[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&sst.gcut"] = fi[f])),
                    t.set(n.fieldsToSet),
                    c.isGtmEvent
                      ? t.send("pageview")
                      : t.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                m(function () {
                  m.remove(g);
                });
            }
          };
        km(function () {
          return e(Q.g.W);
        }, Q.g.W);
        km(function () {
          return e(Q.g.R);
        }, Q.g.R);
        km(function () {
          return e(Q.g.P);
        }, Q.g.P);
        c.isGtmEvent && (dE[a] = !0);
      }
    },
    hE = function (a, b) {
      pj() && b && (a[Q.g.qb] = b);
    },
    qE = function (a, b, c) {
      function d() {
        var L = W(c, Q.g.Wc);
        h(function () {
          if (!c.isGtmEvent && Ya(L)) {
            var O = u.fieldsToSend,
              V = m().getByName(n),
              ba;
            for (ba in L)
              if (void 0 != L[ba] && /^(dimension|metric)\d+$/.test(ba)) {
                var aa = V.get(aE(L[ba]));
                iE(O, ba, aa);
              }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var L = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: L });
        }
      }
      var f = a,
        g,
        h = c.isGtmEvent ? lx(W(c, "gaFunctionName")) : lx();
      if (qb(h)) {
        var m = kx,
          n;
        c.isGtmEvent
          ? (n = W(c, "name") || W(c, "gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (L) {
            var O = [].slice.call(arguments, 0);
            O[0] = n ? n + "." + O[0] : "" + O[0];
            h.apply(window, O);
          },
          q = function (L) {
            var O = function (ka, ha) {
                for (var ia = 0; ha && ia < ha.length; ia++) p(ka, ha[ia]);
              },
              V = c.isGtmEvent,
              ba = V ? jE(u) : kE(b, c);
            if (ba) {
              var aa = {};
              hE(aa, L);
              p("require", "ec", "ec.js", aa);
              V && ba.ah && p("set", "&cu", ba.ah);
              var R = ba.action;
              if (V || "impressions" === R)
                if ((O("ec:addImpression", ba.Nj), !V)) return;
              if ("promo_click" === R || "promo_view" === R || (V && ba.Ne)) {
                var oa = ba.Ne;
                O("ec:addPromo", oa);
                if (oa && 0 < oa.length && "promo_click" === R) {
                  V ? p("ec:setAction", R, ba.vb) : p("ec:setAction", R);
                  return;
                }
                if (!V) return;
              }
              "promo_view" !== R &&
                "impressions" !== R &&
                (O("ec:addProduct", ba.Kc), p("ec:setAction", R, ba.vb));
            }
          },
          r = function (L) {
            if (L) {
              var O = {};
              if (Ya(L))
                for (var V in lE) lE.hasOwnProperty(V) && mE(lE[V], V, L[V], O);
              hE(O, x);
              p("require", "linkid", O);
            }
          },
          t = function () {
            if (io()) {
            } else {
              var L = W(c, Q.g.Ri);
              L &&
                (p("require", L, { dataLayer: ki.Za }), p("require", "render"));
            }
          },
          u = eE(n, b, c),
          v = function (L, O, V) {
            V && (O = "" + O);
            u.fieldsToSend[L] = O;
          };
        !c.isGtmEvent &&
          fE(n, u.createOnlyFields) &&
          (h(function () {
            m() && m().remove(n);
          }),
          (nE[n] = !1));
        h("create", f, u.createOnlyFields);
        var w = c.isGtmEvent && u.fieldsToSet[Q.g.qb];
        if ((!c.isGtmEvent && u.createOnlyFields[Q.g.qb]) || w) {
          var y = oj()
            ? nj(
                c.isGtmEvent
                  ? u.fieldsToSet[Q.g.qb]
                  : u.createOnlyFields[Q.g.qb],
                "/analytics.js"
              )
            : void 0;
          y && (g = y);
        }
        var x = c.isGtmEvent
          ? u.fieldsToSet[Q.g.qb]
          : u.createOnlyFields[Q.g.qb];
        if (x) {
          var B = c.isGtmEvent
            ? u.fieldsToSet[Q.g.Ud]
            : u.createOnlyFields[Q.g.Ud];
          B && !nE[n] && ((nE[n] = !0), h(ox(n, B)));
        }
        c.isGtmEvent
          ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(u.linkAttribution));
        var A = u[Q.g.xa];
        A && A[Q.g.X] && cE(A, n);
        p("set", u.fieldsToSet);
        if (c.isGtmEvent) {
          if (u.enableLinkId) {
            var D = {};
            hE(D, x);
            p("require", "linkid", "linkid.js", D);
          }
          gE(f, n, c);
        }
        if (b === Q.g.Tb)
          if (c.isGtmEvent) {
            e();
            if (u.remarketingLists) {
              var E = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: E });
            }
            q(x);
            p("send", "pageview");
            u.createOnlyFields._useUp && mx(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        else
          b === Q.g.da
            ? (t(),
              Vr(f, c),
              W(c, Q.g.Wa) && (xq(["aw", "dc"]), mx(n + ".")),
              zq(["aw", "dc"]),
              0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
              gE(f, n, c))
            : b === Q.g.Sa
            ? bE(n, c)
            : "screen_view" === b
            ? p("send", "screenview", u.fieldsToSend)
            : "timing_complete" === b
            ? ((u.fieldsToSend.hitType = "timing"),
              v("timingCategory", u.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", u.timingVar, !0)
                : v("timingVar", u.name, !0),
              v("timingValue", yb(u.value)),
              void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
              p("send", u.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", u.fieldsToSend)
            : ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((u.fieldsToSend.hitType = "social"),
                  v("socialNetwork", u.socialNetwork, !0),
                  v("socialAction", u.socialAction, !0),
                  v("socialTarget", u.socialTarget, !0))
                : ((c.isGtmEvent || oE[b]) && q(x),
                  c.isGtmEvent && e(),
                  (u.fieldsToSend.hitType = "event"),
                  v("eventCategory", u.eventCategory, !0),
                  v("eventAction", u.eventAction || b, !0),
                  void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                  void 0 !== u.value && v("eventValue", yb(u.value))),
              p("send", u.fieldsToSend));
        var C = g && !c.eventMetadata.suppress_script_load;
        if (!pE && (!c.isGtmEvent || C)) {
          g = g || "https://www.google-analytics.com/analytics.js";
          pE = !0;
          var F = function () {
              c.onFailure();
            },
            M = function () {
              m().loaded || F();
            };
          io() ? I(M) : yc(g, M, F);
        }
      } else I(c.onFailure);
    },
    rE = function (a, b, c, d) {
      lm(
        function () {
          qE(a, b, d);
        },
        [Q.g.W, Q.g.R]
      );
    },
    tE = function (a) {
      function b(e) {
        function f(h, m) {
          for (var n = 0; n < m.length; n++) {
            var p = m[n];
            if (e[p]) {
              g[h] = e[p];
              break;
            }
          }
        }
        var g = k(e);
        f("id", ["id", "item_id", "promotion_id"]);
        f("name", ["name", "item_name", "promotion_name"]);
        f("brand", ["brand", "item_brand"]);
        f("variant", ["variant", "item_variant"]);
        f("list", ["list_name", "item_list_name"]);
        f("position", ["list_position", "creative_slot", "index"]);
        (function () {
          if (e.category) g.category = e.category;
          else {
            for (var h = "", m = 0; m < sE.length; m++)
              void 0 !== e[sE[m]] && (h && (h += "/"), (h += e[sE[m]]));
            h && (g.category = h);
          }
        })();
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return g;
      }
      for (var c = [], d = 0; a && d < a.length; d++)
        a[d] && Ya(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    uE = function (a) {
      return X(a);
    },
    vE = !1;
  var pE,
    nE = {},
    dE = {},
    wE = {},
    xE = Object.freeze(
      ((wE.page_hostname = 1),
      (wE[Q.g.oa] = 1),
      (wE[Q.g.lb] = 1),
      (wE[Q.g.Ua] = 1),
      (wE[Q.g.Va] = 1),
      (wE[Q.g.cb] = 1),
      (wE[Q.g.uc] = 1),
      (wE[Q.g.Fb] = 1),
      (wE[Q.g.Oa] = 1),
      (wE[Q.g.vc] = 1),
      (wE[Q.g.ya] = 1),
      (wE[Q.g.gd] = 1),
      (wE[Q.g.Fa] = 1),
      (wE[Q.g.Kb] = 1),
      wE)
    ),
    yE = {},
    ZD = Object.freeze(
      ((yE.client_storage = "storage"),
      (yE.sample_rate = 1),
      (yE.site_speed_sample_rate = 1),
      (yE.store_gac = 1),
      (yE.use_amp_client_id = 1),
      (yE[Q.g.nb] = 1),
      (yE[Q.g.wa] = "storeGac"),
      (yE[Q.g.Ua] = 1),
      (yE[Q.g.Va] = 1),
      (yE[Q.g.cb] = 1),
      (yE[Q.g.uc] = 1),
      (yE[Q.g.Fb] = 1),
      (yE[Q.g.vc] = 1),
      yE)
    ),
    zE = {},
    AE = Object.freeze(
      ((zE._cs = 1),
      (zE._useUp = 1),
      (zE.allowAnchor = 1),
      (zE.allowLinker = 1),
      (zE.alwaysSendReferrer = 1),
      (zE.clientId = 1),
      (zE.cookieDomain = 1),
      (zE.cookieExpires = 1),
      (zE.cookieFlags = 1),
      (zE.cookieName = 1),
      (zE.cookiePath = 1),
      (zE.cookieUpdate = 1),
      (zE.legacyCookieDomain = 1),
      (zE.legacyHistoryImport = 1),
      (zE.name = 1),
      (zE.sampleRate = 1),
      (zE.siteSpeedSampleRate = 1),
      (zE.storage = 1),
      (zE.storeGac = 1),
      (zE.useAmpClientId = 1),
      (zE._cd2l = 1),
      zE)
    ),
    BE = Object.freeze({ anonymize_ip: 1 }),
    CE = {},
    $D = Object.freeze(
      ((CE.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (CE.app_id = 1),
      (CE.app_installer_id = 1),
      (CE.app_name = 1),
      (CE.app_version = 1),
      (CE.description = "exDescription"),
      (CE.fatal = "exFatal"),
      (CE.language = 1),
      (CE.page_hostname = "hostname"),
      (CE.transport_type = "transport"),
      (CE[Q.g.Ba] = "currencyCode"),
      (CE[Q.g.wg] = 1),
      (CE[Q.g.ya] = "location"),
      (CE[Q.g.gd] = "page"),
      (CE[Q.g.Fa] = "referrer"),
      (CE[Q.g.Kb] = "title"),
      (CE[Q.g.ff] = 1),
      (CE[Q.g.Da] = 1),
      CE)
    ),
    DE = {},
    EE = Object.freeze(
      ((DE.content_id = 1),
      (DE.event_action = 1),
      (DE.event_category = 1),
      (DE.event_label = 1),
      (DE.link_attribution = 1),
      (DE.name = 1),
      (DE[Q.g.xa] = 1),
      (DE[Q.g.vg] = 1),
      (DE[Q.g.Ka] = 1),
      (DE[Q.g.qa] = 1),
      DE)
    ),
    FE = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    sE = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    GE = {},
    lE = Object.freeze(
      ((GE.levels = 1), (GE[Q.g.Va] = "duration"), (GE[Q.g.uc] = 1), GE)
    ),
    HE = {},
    IE = Object.freeze(
      ((HE.anonymize_ip = 1),
      (HE.fatal = 1),
      (HE.send_page_view = 1),
      (HE.store_gac = 1),
      (HE.use_amp_client_id = 1),
      (HE[Q.g.wa] = 1),
      (HE[Q.g.wg] = 1),
      HE)
    ),
    mE = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (IE[b] && (c = zb(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[aE(b)] = c;
        else if (l(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    aE = function (a) {
      return a && l(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    JE = {},
    oE = Object.freeze(
      ((JE.checkout_progress = 1),
      (JE.select_content = 1),
      (JE.set_checkout_option = 1),
      (JE[Q.g.nc] = 1),
      (JE[Q.g.oc] = 1),
      (JE[Q.g.Sb] = 1),
      (JE[Q.g.qc] = 1),
      (JE[Q.g.ib] = 1),
      (JE[Q.g.Db] = 1),
      (JE[Q.g.jb] = 1),
      (JE[Q.g.Ja] = 1),
      (JE[Q.g.rc] = 1),
      (JE[Q.g.Na] = 1),
      JE)
    ),
    KE = {},
    LE = Object.freeze(
      ((KE.checkout_progress = 1),
      (KE.set_checkout_option = 1),
      (KE[Q.g.Wf] = 1),
      (KE[Q.g.Xf] = 1),
      (KE[Q.g.nc] = 1),
      (KE[Q.g.oc] = 1),
      (KE[Q.g.Yf] = 1),
      (KE[Q.g.Sb] = 1),
      (KE[Q.g.Ja] = 1),
      (KE[Q.g.rc] = 1),
      (KE[Q.g.Zf] = 1),
      KE)
    ),
    ME = {},
    NE = Object.freeze(
      ((ME.generate_lead = 1),
      (ME.login = 1),
      (ME.search = 1),
      (ME.select_content = 1),
      (ME.share = 1),
      (ME.sign_up = 1),
      (ME.view_search_results = 1),
      (ME[Q.g.qc] = 1),
      (ME[Q.g.ib] = 1),
      (ME[Q.g.Db] = 1),
      (ME[Q.g.jb] = 1),
      (ME[Q.g.Na] = 1),
      ME)
    ),
    OE = function (a) {
      var b = "general";
      LE[a]
        ? (b = "ecommerce")
        : NE[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    PE = {},
    QE = Object.freeze(
      ((PE.view_search_results = 1),
      (PE[Q.g.ib] = 1),
      (PE[Q.g.jb] = 1),
      (PE[Q.g.Na] = 1),
      PE)
    ),
    iE = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    RE = function (a) {
      if (Array.isArray(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    eE = function (a, b, c) {
      var d = function (L) {
          return W(c, L);
        },
        e = {},
        f = {},
        g = {},
        h = {},
        m = RE(d(Q.g.Ii));
      !c.isGtmEvent && m && iE(f, "exp", m);
      g["&gtm"] = ko({ za: c.eventMetadata.source_canonical_id, Ff: !0 });
      c.isGtmEvent || (g._no_slc = !0);
      Yl() && (h._cs = uE);
      var n = d(Q.g.Wc);
      if (!c.isGtmEvent && Ya(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && iE(f, p, q);
          }
      for (var r = !c.isGtmEvent, t = Hm(c), u = 0; u < t.length; ++u) {
        var v = t[u];
        if (c.isGtmEvent) {
          var w = d(v);
          FE.hasOwnProperty(v)
            ? (e[v] = w)
            : AE.hasOwnProperty(v)
            ? (h[v] = w)
            : (g[v] = w);
        } else {
          var y = void 0;
          y = v !== Q.g.la ? d(v) : Im(c, v);
          if (EE.hasOwnProperty(v)) mE(EE[v], v, y, e);
          else if (BE.hasOwnProperty(v)) mE(BE[v], v, y, g);
          else if ($D.hasOwnProperty(v)) mE($D[v], v, y, f);
          else if (ZD.hasOwnProperty(v)) mE(ZD[v], v, y, h);
          else if (/^(dimension|metric|content_group)\d+$/.test(v))
            mE(1, v, y, f);
          else if (v === Q.g.la) {
            if (!vE) {
              var x = Mb(y);
              x && (f["&did"] = x);
            }
            var B = void 0,
              A = void 0;
            b === Q.g.da
              ? (B = Mb(Im(c, v), "."))
              : ((B = Mb(Im(c, v, 1), ".")), (A = Mb(Im(c, v, 2), ".")));
            B && (f["&gdid"] = B);
            A && (f["&edid"] = A);
          } else
            v === Q.g.Oa && 0 > t.indexOf(Q.g.uc) && (h.cookieName = y + "_ga");
          T(90) &&
            xE[v] &&
            (c.J.hasOwnProperty(v) ||
              (b === Q.g.da && c.m.hasOwnProperty(v))) &&
            (r = !1);
        }
      }
      T(90) && r && (f["&jsscut"] = "1");
      (!1 !== d(Q.g.Ue) && !1 !== d(Q.g.lb) && YD()) ||
        (g.allowAdFeatures = !1);
      g.allowAdPersonalizationSignals = Xn(c);
      !c.isGtmEvent && d(Q.g.Wa) && (h._useUp = !0);
      if (c.isGtmEvent) {
        h.name = h.name || e.gtmTrackerName;
        var D = g.hitCallback;
        g.hitCallback = function () {
          qb(D) && D();
          c.onSuccess();
        };
      } else {
        iE(h, "cookieDomain", "auto");
        iE(g, "forceSSL", !0);
        iE(e, "eventCategory", OE(b));
        QE[b] && iE(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? iE(e, "eventLabel", d(Q.g.vg))
          : "search" === b || "view_search_results" === b
          ? iE(e, "eventLabel", d(Q.g.Wi))
          : "select_content" === b && iE(e, "eventLabel", d(Q.g.Ci));
        var E = e[Q.g.xa] || {},
          C = E[Q.g.Bc];
        C || (0 != C && E[Q.g.X])
          ? (h.allowLinker = !0)
          : !1 === C && iE(h, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        h.name = a;
      }
      Yn() && (g["&gcs"] = Zn());
      g["&gcd"] = co(c);
      Yl() &&
        (X(Q.g.W) || (h.storage = "none"),
        X([Q.g.R, Q.g.P]) || ((g.allowAdFeatures = !1), (h.storeGac = !1)));
      go() && (g["&dma_cps"] = eo());
      g["&dma"] = fo();
      sn(An()) && (g["&tcfd"] = ho());
      Di.m && (g["&tag_exp"] = Di.m);
      var F = qj(c) || d(Q.g.qb),
        M = d(Q.g.Ud);
      F && (c.isGtmEvent || (h[Q.g.qb] = F), (h._cd2l = !0));
      M && !c.isGtmEvent && (h[Q.g.Ud] = M);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = h;
      return e;
    },
    jE = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.ah = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.Nj = "impressions" === b.translateIfKeyEquals ? tE(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Ne = "promoView" === b.translateIfKeyEquals ? tE(e) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Ne = "promoClick" === b.translateIfKeyEquals ? tE(f) : f;
        c.vb = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          void 0 !== b[g] &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var h = b[g].products;
          c.Kc = "products" === b.translateIfKeyEquals ? tE(h) : h;
          c.vb = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    kE = function (a, b) {
      function c(u) {
        return {
          id: d(Q.g.Ca),
          affiliation: d(Q.g.hg),
          revenue: d(Q.g.qa),
          tax: d(Q.g.Ze),
          shipping: d(Q.g.Zc),
          coupon: d(Q.g.ig),
          list: d(Q.g.Ye) || d(Q.g.Yc) || u,
        };
      }
      for (
        var d = function (u) {
            return W(b, u);
          },
          e = d(Q.g.fa),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][Q.g.Ye] || e[g][Q.g.Yc]);
        g++
      );
      var h = d(Q.g.Wc);
      if (Ya(h))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            p;
          for (p in h)
            h.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != h[p] &&
              iE(n, p, n[h[p]]);
        }
      var q = null,
        r = d(Q.g.Hi);
      if (a === Q.g.Ja || a === Q.g.rc) q = { action: a, vb: c(), Kc: tE(e) };
      else if (a === Q.g.nc) q = { action: "add", vb: c(), Kc: tE(e) };
      else if (a === Q.g.oc) q = { action: "remove", vb: c(), Kc: tE(e) };
      else if (a === Q.g.Na) q = { action: "detail", vb: c(f), Kc: tE(e) };
      else if (a === Q.g.ib) q = { action: "impressions", Nj: tE(e) };
      else if (a === Q.g.jb) q = { action: "promo_view", Ne: tE(r) || tE(e) };
      else if (("select_content" === a && r && 0 < r.length) || a === Q.g.Db)
        q = { action: "promo_click", Ne: tE(r) || tE(e) };
      else if ("select_content" === a || a === Q.g.qc)
        q = {
          action: "click",
          vb: { list: d(Q.g.Ye) || d(Q.g.Yc) || f },
          Kc: tE(e),
        };
      else if (a === Q.g.Sb || "checkout_progress" === a) {
        var t = { step: a === Q.g.Sb ? 1 : d(Q.g.Xe), option: d(Q.g.Nd) };
        q = { action: "checkout", Kc: tE(e), vb: k(c(), t) };
      } else
        "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            vb: { step: d(Q.g.Xe), option: d(Q.g.Nd) },
          });
      q && (q.ah = d(Q.g.Ba));
      return q;
    },
    SE = {},
    fE = function (a, b) {
      var c = SE[a];
      SE[a] = k(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  function TE(a, b, c, d) {}
  TE.K = "internal.executeEventProcessor";
  function UE(a) {
    var b;
    return cd(b, this.H, 1);
  }
  UE.K = "internal.executeJavascriptString";
  function VE(a) {
    var b;
    return b;
  }
  var WE = null;
  function XE() {
    var a = new db();
    return a;
  }
  XE.U = "getContainerVersion";
  function YE(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  YE.U = "getCookieValues";
  function ZE() {
    return El();
  }
  ZE.K = "internal.getCountryCode";
  function $E() {
    var a = [];
    return cd(a);
  }
  $E.K = "internal.getDestinationIds";
  function aF(a, b) {
    var c = null;
    return c;
  }
  aF.K = "internal.getElementAttribute";
  function bF(a) {
    var b = null;
    return b;
  }
  bF.K = "internal.getElementById";
  function cF(a) {
    var b = "";
    return b;
  }
  cF.K = "internal.getElementInnerText";
  function dF(a, b) {
    var c = null;
    return c;
  }
  dF.K = "internal.getElementProperty";
  function eF(a) {
    var b;
    return b;
  }
  eF.K = "internal.getElementValue";
  function fF(a) {
    var b = 0;
    return b;
  }
  fF.K = "internal.getElementVisibilityRatio";
  function gF(a) {
    var b = null;
    return b;
  }
  gF.K = "internal.getElementsByCssSelector";
  function hF(a) {
    var b;
    K(this.getName(), ["keyPath:!string"], arguments);
    N(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = fA(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, h = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
            for (var u = r[t].split("."), v = 0; v < u.length; v++)
              n.push(u[v]), v !== u.length - 1 && n.push(m);
            t !== r.length - 1 && n.push(h);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], y = "", x = pa(n), B = x.next();
          !B.done;
          B = x.next()
        ) {
          var A = B.value;
          A === m
            ? (w.push(y), (y = ""))
            : (y = A === g ? y + "\\" : A === h ? y + "." : y + A);
        }
        y && w.push(y);
        for (var D = pa(w), E = D.next(); !E.done; E = D.next()) {
          if (null == f) {
            c = void 0;
            break a;
          }
          f = f[E.value];
        }
        c = f;
      } else c = void 0;
    }
    b = cd(c, this.H, 1);
    return b;
  }
  hF.K = "internal.getEventData";
  var iF = {};
  iF.enableAWFledge = T(22);
  iF.enableAdsConversionValidation = T(13);
  iF.enableAutoPiiOnPhoneAndAddress = T(21);
  iF.enableCachedEcommerceData = T(27);
  iF.enableCcdPreAutoPiiDetection = T(28);
  iF.enableCloudRecommentationsErrorLogging = T(30);
  iF.enableCloudRecommentationsSchemaIngestion = T(31);
  iF.enableCloudRetailInjectPurchaseMetadata = T(33);
  iF.enableCloudRetailLogging = T(32);
  iF.enableCloudRetailPageCategories = T(34);
  iF.enableConsentDisclosureActivity = T(35);
  iF.enableDCFledge = T(39);
  iF.enableDecodeUri = T(51);
  iF.enableDeferAllEnhancedMeasurement = T(40);
  iF.enableEuidAutoMode = T(45);
  iF.enableFormSkipValidation = T(48);
  iF.enableGaRegionActivityPerformanceFix = T(55);
  iF.enableSharedUserIdFromUserProperty = T(74);
  iF.enableUrlDecodeEventUsage = T(78);
  iF.enableZoneConfigInChildContainers = T(81);
  iF.ignoreServerMacroInGoogleSignal = T(84);
  iF.renameOnoToNonGaiaRemarketing = T(86);
  iF.useEnableAutoEventOnFormApis = T(92);
  iF.autoPiiEligible = Il();
  function jF() {
    return cd(iF);
  }
  jF.K = "internal.getFlags";
  function kF() {
    return new $c(Gz);
  }
  kF.K = "internal.getHtmlId";
  function lF(a, b) {
    var c;
    return c;
  }
  lF.K = "internal.getProductSettingsParameter";
  function mF(a, b) {
    var c;
    return c;
  }
  mF.U = "getQueryParameters";
  function nF(a, b) {
    var c;
    return c;
  }
  nF.U = "getReferrerQueryParameters";
  function oF(a) {
    var b = "";
    return b;
  }
  oF.U = "getReferrerUrl";
  function pF() {
    return Dl["1"] || "";
  }
  pF.K = "internal.getRegionCode";
  function qF(a, b) {
    var c;
    return c;
  }
  qF.K = "internal.getRemoteConfigParameter";
  function rF(a) {
    var b = "";
    return b;
  }
  rF.U = "getUrl";
  function sF() {
    N(this, "get_user_agent");
    return qc.userAgent;
  }
  sF.K = "internal.getUserAgent";
  function zF() {
    return (G.gaGlobal = G.gaGlobal || {});
  }
  var AF = function () {
      var a = zF();
      a.hid = a.hid || ub();
      return a.hid;
    },
    BF = function (a, b) {
      var c = zF();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var iG = function (a) {
      this.F = a;
      this.J = "";
      this.m = this.F;
    },
    jG = function (a, b) {
      a.m = b;
      return a;
    },
    kG = function (a, b) {
      a.M = b;
      return a;
    };
  function lG(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  function mG(a, b, c) {
    if (a) {
      var d = a || [];
      if (Array.isArray(d))
        for (
          var e = Ya(b) ? b : {}, f = pa(d), g = f.next();
          !g.done;
          g = f.next()
        )
          c(g.value, e);
    }
  }
  var CG = window,
    DG = document,
    EG = function (a) {
      var b = CG._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        DG.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === CG["ga-disable-" + a])
      )
        return !0;
      try {
        var c = CG.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (p) {}
      for (
        var d = [], e = String(DG.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          h = g[0].replace(/^\s*|\s*$/g, "");
        if (h && "AMP_TOKEN" == h) {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if ("$OPT_OUT" == d[n]) return !0;
      return DG.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function PG(a) {
    z(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[Q.g.eb] || {};
    z(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var XG = function (a, b) {};
  function WG(a, b) {
    var c = function () {};
    return c;
  }
  function YG(a, b, c) {}
  var ZG = WG;
  function aH(a, b, c) {
    var d = this;
  }
  aH.K = "internal.gtagConfig";
  function bH() {
    var a = {};
    return a;
  }
  function dH(a, b) {}
  dH.U = "gtagSet";
  function eH(a, b) {}
  eH.U = "injectHiddenIframe";
  function fH(a, b, c, d, e) {}
  fH.K = "internal.injectHtml";
  var jH = {};
  var kH = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          yc(
            a,
            function () {
              for (var g = e[f][0], h = 0; h < g.length; h++) I(g[h]);
              g.push = function (m) {
                I(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], h = 0; h < g.length; h++) I(g[h]);
              e[f] = null;
            },
            b
          ))
      : yc(a, c, d, b);
  };
  function lH(a, b, c, d) {
    if (!io()) {
      K(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      N(this, "inject_script", a);
      var e = this.H;
      kH(
        a,
        void 0,
        function () {
          b && b.hb(e);
        },
        function () {
          c && c.hb(e);
        },
        jH,
        d
      );
    }
  }
  var mH = { dl: 1, id: 1 },
    nH = {};
  function oH(a, b, c, d) {}
  lH.U = "injectScript";
  oH.K = "internal.injectScript";
  function pH(a) {
    var b = !0;
    return b;
  }
  pH.U = "isConsentGranted";
  function qH() {
    return Gl();
  }
  qH.K = "internal.isDmaRegion";
  function rH(a) {
    var b = !1;
    return b;
  }
  rH.K = "internal.isEntityInfrastructure";
  function sH() {
    var a = $g(function (b) {
      fA(this).log("error", b);
    });
    a.U = "JSON";
    return a;
  }
  function tH(a) {
    var b = void 0;
    return cd(b);
  }
  tH.K = "internal.legacyParseUrl";
  function uH() {
    return !1;
  }
  var vH = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function wH() {}
  wH.U = "logToConsole";
  function xH(a, b) {}
  xH.K = "internal.mergeRemoteConfig";
  function yH(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return cd(d);
  }
  yH.K = "internal.parseCookieValuesFromString";
  function zH(a) {
    var b = void 0;
    return b;
  }
  zH.U = "parseUrl";
  function AH(a) {}
  AH.K = "internal.processAsNewEvent";
  function BH(a, b, c) {
    var d;
    return d;
  }
  BH.K = "internal.pushToDataLayer";
  function CH(a) {
    var b = !1;
    return b;
  }
  CH.U = "queryPermission";
  function DH() {
    var a = "";
    return a;
  }
  DH.U = "readCharacterSet";
  function EH() {
    return ki.Za;
  }
  EH.K = "internal.readDataLayerName";
  function FH() {
    var a = "";
    return a;
  }
  FH.U = "readTitle";
  function GH(a, b) {
    var c = this;
  }
  GH.K = "internal.registerCcdCallback";
  function HH(a) {
    return !0;
  }
  HH.K = "internal.registerDestination";
  var IH = ["config", "event", "get", "set"];
  function JH(a, b, c) {}
  JH.K = "internal.registerGtagCommandListener";
  function KH(a, b) {
    var c = !1;
    return c;
  }
  KH.K = "internal.removeDataLayerEventListener";
  function LH(a, b) {}
  LH.K = "internal.removeFormData";
  function MH() {}
  MH.U = "resetDataLayer";
  function NH(a, b, c, d) {}
  NH.K = "internal.sendGtagEvent";
  function OH(a, b, c) {}
  OH.U = "sendPixel";
  function PH(a, b) {}
  PH.K = "internal.setAnchorHref";
  function QH(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  QH.U = "setCookie";
  function RH(a) {}
  RH.K = "internal.setCorePlatformServices";
  function SH(a, b) {}
  SH.K = "internal.setDataLayerValue";
  function TH(a) {}
  TH.U = "setDefaultConsentState";
  function UH(a, b) {}
  UH.K = "internal.setDelegatedConsentType";
  function VH(a, b) {}
  VH.K = "internal.setFormAction";
  function WH(a, b, c) {}
  WH.K = "internal.setInCrossContainerData";
  function XH(a, b, c) {
    K(
      this.getName(),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    N(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = Jb(d, [G, H]),
      f = d.pop();
    if (e && (void 0 === e[f] || c)) return (e[f] = J(b, this.H, 2)), !0;
    return !1;
  }
  XH.U = "setInWindow";
  function YH(a, b, c) {}
  YH.K = "internal.setProductSettingsParameter";
  function ZH(a, b, c) {}
  ZH.K = "internal.setRemoteConfigParameter";
  function $H(a, b, c, d) {
    var e = this;
  }
  $H.U = "sha256";
  function aI(a, b, c) {}
  aI.K = "internal.sortRemoteConfigParameters";
  function bI(a, b) {
    var c = void 0;
    return c;
  }
  bI.K = "internal.subscribeToCrossContainerData";
  var cI = {},
    dI = {};
  cI.getItem = function (a) {
    var b = null;
    return b;
  };
  cI.setItem = function (a, b) {};
  cI.removeItem = function (a) {};
  cI.clear = function () {};
  cI.U = "templateStorage";
  function eI(a, b) {
    var c = !1;
    return c;
  }
  eI.K = "internal.testRegex";
  function fI(a) {
    var b;
    return b;
  }
  function gI(a) {
    var b;
    return b;
  }
  gI.K = "internal.unsiloId";
  function hI(a, b) {
    var c;
    return c;
  }
  hI.K = "internal.unsubscribeFromCrossContainerData";
  function iI(a) {}
  iI.U = "updateConsentState";
  var jI;
  function kI(a, b, c) {
    jI = jI || new kh();
    jI.add(a, b, c);
  }
  function lI(a, b) {
    var c = (jI = jI || new kh());
    if (c.F.hasOwnProperty(a))
      throw (
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.m.hasOwnProperty(a))
      throw (
        "Attempting to add a private function with an existing API name: " +
        a +
        "."
      );
    c.F[a] = qb(b) ? Gg(a, b) : Hg(a, b);
  }
  function mI() {
    return function (a) {
      var b;
      var c = jI;
      if (c.m.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.F.hasOwnProperty(a))) {
          var e = !1,
            f = this.H.m;
          if (f) {
            var g = f.xb();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var h = c.F.hasOwnProperty(a) ? c.F[a] : void 0;
          b = h;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var nI = function () {
    var a = function (c) {
        return lI(c.K, c);
      },
      b = function (c) {
        return kI(c.U, c);
      };
    b($z);
    b(gA);
    b(uB);
    b(wB);
    b(xB);
    b(CB);
    b(EB);
    b(HB);
    b(JB);
    b(XE);
    b(YE);
    b(mF);
    b(nF);
    b(oF);
    b(rF);
    b(dH);
    b(eH);
    b(lH);
    b(pH);
    b(wH);
    b(zH);
    b(CH);
    b(DH);
    b(FH);
    b(OH);
    b(QH);
    b(TH);
    b(XH);
    b($H);
    b(cI);
    b(iI);
    b(sH());
    kI("Math", Mg());
    kI("Object", ih);
    kI("TestHelper", ph());
    kI("assertApi", Ig);
    kI("assertThat", Jg);
    kI("decodeUri", Ng);
    kI("decodeUriComponent", Og);
    kI("encodeUri", Pg);
    kI("encodeUriComponent", Qg);
    kI("fail", Wg);
    kI("generateRandom", Xg);
    kI("getTimestamp", Yg);
    kI("getTimestampMillis", Yg);
    kI("getType", Zg);
    kI("makeInteger", ah);
    kI("makeNumber", bh);
    kI("makeString", ch);
    kI("makeTableMap", dh);
    kI("mock", gh);
    kI("fromBase64", VE, !("atob" in G));
    kI("localStorage", vH, !uH());
    kI("toBase64", fI, !("btoa" in G));
    a(cA);
    a(xA);
    a(JA);
    a(QA);
    a(VA);
    a(jB);
    a(sB);
    a(vB);
    a(yB);
    a(zB);
    a(BB);
    a(DB);
    a(FB);
    a(GB);
    a(IB);
    a(KB);
    a(MB);
    a(NB);
    a(OB);
    a(PB);
    a(TB);
    a(bC);
    a(cC);
    a(nC);
    a(sC);
    a(xC);
    a(GC);
    a(LC);
    a(YC);
    a($C);
    a(nD);
    a(Rg);
    a(pD);
    a(TE);
    a(UE);
    a(ZE);
    a($E);
    a(aF);
    a(bF);
    a(cF);
    a(dF);
    a(eF);
    a(fF);
    a(gF);
    a(hF);
    a(jF);
    a(kF);
    a(lF);
    a(pF);
    a(qF);
    a(aH);
    a(fH);
    a(oH);
    a(qH);
    a(rH);
    a(tH);
    a(hB);
    a(xH);
    a(yH);
    a(AH);
    a(BH);
    a(EH);
    a(GH);
    a(HH);
    a(JH);
    a(KH);
    a(LH);
    a(NH);
    a(PH);
    a(RH);
    a(SH);
    a(UH);
    a(VH);
    a(WH);
    a(YH);
    a(ZH);
    a(aI);
    a(bI);
    a(eI);
    a(gI);
    a(hI);
    lI("internal.CrossContainerSchema", LB());
    lI("internal.GtagSchema", bH());
    kI("mockObject", hh);
    return mI();
  };
  var Yz;
  function oI() {
    Yz.m.m.M = function (a, b, c) {
      li.SANDBOXED_JS_SEMAPHORE = li.SANDBOXED_JS_SEMAPHORE || 0;
      li.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        li.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function pI(a) {
    a &&
      z(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Ai[e] = Ai[e] || [];
          Ai[e].push(b);
        }
      });
  }
  var qI = encodeURI,
    Y = encodeURIComponent,
    rI = Array.isArray,
    sI = function (a, b, c) {
      Bc(a, b, c);
    },
    tI = function (a, b) {
      if (!a) return !1;
      var c = gj(U(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    uI = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var SI = G.clearTimeout,
    TI = G.setTimeout,
    UI = function (a, b, c) {
      if (io()) {
        b && I(b);
      } else return yc(a, b, c);
    },
    VI = function () {
      return G.location.href;
    },
    WI = function (a) {
      return gj(U(a), "fragment");
    },
    XI = function (a, b) {
      return Ki(a, b || 2);
    },
    YI = function (a, b, c) {
      return b ? Sy(a, b, c) : Ry(a);
    },
    ZI = function (a, b) {
      G[a] = b;
    },
    $I = function (a, b, c) {
      b && (void 0 === G[a] || (c && !G[a])) && (G[a] = b);
      return G[a];
    },
    aJ = function (a, b) {
      if (io()) {
        b && I(b);
      } else Ac(a, b);
    },
    bJ = function (a) {
      return !!iA(a, "init", !1);
    },
    cJ = function (a) {
      jA(a, "init", !0);
    };

  var dJ = {};
  var Z = { securityGroups: {} };
  (Z.securityGroups.f = ["google"]),
    (Z.__f = function (a) {
      var b = XI("gtm.referrer", 1) || H.referrer;
      return b
        ? a.vtp_component && "URL" != a.vtp_component
          ? gj(
              U(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : hj(U(String(b)))
        : String(b);
    }),
    (Z.__f.D = "f"),
    (Z.__f.isVendorTemplate = !0),
    (Z.__f.priorityOverride = 0),
    (Z.__f.isInfrastructure = !0),
    (Z.__f.runInSiloedMode = !1);

  (Z.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.D = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            h = 0;
          h < c.length;
          h++
        ) {
          var m = c[h],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!l(r)) throw d(p, {}, "Key must be a string.");
            if ("read" === q) {
              if (-1 < e.indexOf(r)) return;
            } else if ("write" === q) {
              if (-1 < f.indexOf(r)) return;
            } else if ("readwrite" === q) {
              if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return;
            } else if ("execute" === q) {
              if (-1 < g.indexOf(r)) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          O: a,
        };
      });
    })();
  (Z.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.D = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : XI("gtm.url", 1)) || VI();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return hj(U(String(c)));
        var e = U(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              h = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(h)
                ? h
                : String(h).replace(/\s+/g, "").split(",")
              : [String(h)];
            for (var p = 0; p < n.length; p++) {
              var q = gj(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = gj(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Z.securityGroups.v = ["google"]),
    (Z.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = XI(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return void 0 !== c ? c : a.vtp_defaultValue;
    }),
    (Z.__v.D = "v"),
    (Z.__v.isVendorTemplate = !0),
    (Z.__v.priorityOverride = 0),
    (Z.__v.isInfrastructure = !0),
    (Z.__v.runInSiloedMode = !1);

  (Z.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_event_data = b;
        Z.__read_event_data.D = "read_event_data";
        Z.__read_event_data.isVendorTemplate = !0;
        Z.__read_event_data.priorityOverride = 0;
        Z.__read_event_data.isInfrastructure = !1;
        Z.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (null != g && !l(g))
              throw e(f, { key: g }, "Key must be a string.");
            if ("any" !== c) {
              try {
                if ("specific" === c && null != g && kg(g, d)) return;
              } catch (h) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          O: a,
        };
      });
    })();
  (Z.securityGroups.gclidw = ["google"]),
    (function () {
      var a = ["aw", "dc", "gf", "ha", "gb"];
      (function (b) {
        Z.__gclidw = b;
        Z.__gclidw.D = "gclidw";
        Z.__gclidw.isVendorTemplate = !0;
        Z.__gclidw.priorityOverride = 100;
        Z.__gclidw.isInfrastructure = !1;
        Z.__gclidw.runInSiloedMode = !1;
      })(function (b) {
        var c, d, e, f;
        b.vtp_enableCookieOverrides &&
          ((e = b.vtp_cookiePrefix),
          (c = b.vtp_path),
          (d = b.vtp_domain),
          (f = b.vtp_cookieFlags));
        var g = XI(Q.g.ja);
        g = void 0 != g && !1 !== g;
        if (T(17)) {
          var h = {},
            m =
              ((h[Q.g.Oa] = e),
              (h[Q.g.Fb] = c),
              (h[Q.g.Ua] = d),
              (h[Q.g.cb] = f),
              (h[Q.g.ja] = g),
              h);
          b.vtp_enableUrlPassthrough && (m[Q.g.Wa] = !0);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var n = {};
            m[Q.g.xa] =
              ((n[Q.g.Bc] = b.vtp_acceptIncoming),
              (n[Q.g.X] = b.vtp_linkerDomains
                .toString()
                .replace(/\s+/g, "")
                .split(",")),
              (n[Q.g.Jb] = b.vtp_urlPosition),
              (n[Q.g.tb] = b.vtp_formDecoration),
              n);
          }
          var p = Vm(
            Um(
              Tm(
                Sm(
                  Lm(new Km(b.vtp_gtmEventId, b.vtp_gtmPriorityId), m),
                  b.vtp_gtmOnSuccess
                ),
                b.vtp_gtmOnFailure
              ),
              !0
            )
          );
          p.eventMetadata.hit_type_override = "page_view";
          tD("", Q.g.da, Date.now(), p);
        } else {
          I(b.vtp_gtmOnSuccess);
          var q = { prefix: e, path: c, domain: d, flags: f };
          if (!b.vtp_enableCrossDomain || !1 !== b.vtp_acceptIncoming)
            if (b.vtp_enableCrossDomain || np()) oq(a, q), Ap(q);
          lq(q);
          uq(["aw", "dc"], q);
          Sq(q, void 0, void 0, g);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var r = b.vtp_linkerDomains
              .toString()
              .replace(/\s+/g, "")
              .split(",");
            sq(a, r, b.vtp_urlPosition, !!b.vtp_formDecoration, q.prefix);
            Bp(tp(q.prefix), r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
            Bp("FPAU", r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
          }
          !oj() && T(71) && tt(void 0, Math.round(Db()));
          Ir({
            o: Vm(new Km(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
            Zg: !1,
            xd: g,
            jc: q,
            Jf: !0,
          });
          b.vtp_enableUrlPassthrough && xq(["aw", "dc", "gb"]);
          zq(["aw", "dc", "gb"]);
        }
      });
    })();

  (Z.securityGroups.aev = ["google"]),
    (function () {
      function a(r, t, u, v, w) {
        w || (w = "element");
        var y = t + "." + u,
          x;
        if (n.hasOwnProperty(y)) x = n[y];
        else {
          var B = r[w];
          if (B && ((x = v(B)), (n[y] = x), p.push(y), 35 < p.length)) {
            var A = p.shift();
            delete n[A];
          }
        }
        return x;
      }
      function b(r, t, u) {
        var v = r[q[t]];
        return void 0 !== v ? v : u;
      }
      function c(r, t) {
        if (!r) return !1;
        var u = d(VI());
        Array.isArray(t) ||
          (t = String(t || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var v = [u], w = 0; w < t.length; w++) {
          var y = t[w];
          if (y.hasOwnProperty("is_regex"))
            if (y.is_regex)
              try {
                y = new RegExp(y.domain);
              } catch (A) {
                continue;
              }
            else y = y.domain;
          var x = d(r);
          if (y instanceof RegExp) {
            if (y.test(x)) return !1;
          } else {
            var B = y;
            if (0 != B.length) {
              if (0 <= x.indexOf(B)) return !1;
              v.push(d(B));
            }
          }
        }
        return !tI(r, v);
      }
      function d(r) {
        m.test(r) || (r = "http://" + r);
        return gj(U(r), "HOST", !0);
      }
      function e(r, t, u, v) {
        switch (r) {
          case "SUBMIT_TEXT":
            return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
          case "LENGTH":
            var w = a(t, u, "FORM." + r, g);
            return void 0 === w ? v : w;
          case "INTERACTED_FIELD_ID":
            return h(t, "id", v);
          case "INTERACTED_FIELD_NAME":
            return h(t, "name", v);
          case "INTERACTED_FIELD_TYPE":
            return h(t, "type", v);
          case "INTERACTED_FIELD_POSITION":
            var y = t.interactedFormFieldPosition;
            return void 0 === y ? v : y;
          case "INTERACT_SEQUENCE_NUMBER":
            var x = t.interactSequenceNumber;
            return void 0 === x ? v : x;
          default:
            return v;
        }
      }
      function f(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return Ec(r, "value");
          case "button":
            return Fc(r);
          default:
            return null;
        }
      }
      function g(r) {
        if ("form" === r.tagName.toLowerCase() && r.elements) {
          for (var t = 0, u = 0; u < r.elements.length; u++)
            oA(r.elements[u]) && t++;
          return t;
        }
      }
      function h(r, t, u) {
        var v = r.interactedFormField;
        return (v && Ec(v, t)) || u;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        Z.__aev = r;
        Z.__aev.D = "aev";
        Z.__aev.isVendorTemplate = !0;
        Z.__aev.priorityOverride = 0;
        Z.__aev.isInfrastructure = !0;
        Z.__aev.runInSiloedMode = !1;
      })(function (r) {
        var t = r.vtp_gtmEventId,
          u = r.vtp_defaultValue,
          v = r.vtp_varType,
          w = r.vtp_gtmCachedValues.gtm;
        switch (v) {
          case "TAG_NAME":
            var y = w.element;
            return (y && y.tagName) || u;
          case "TEXT":
            return a(w, t, v, Fc) || u;
          case "URL":
            var x;
            a: {
              var B = String(w.elementUrl || u || ""),
                A = U(B),
                D = String(r.vtp_component || "URL");
              switch (D) {
                case "URL":
                  x = B;
                  break a;
                case "IS_OUTBOUND":
                  x = c(B, r.vtp_affiliatedDomains);
                  break a;
                default:
                  x = gj(
                    A,
                    D,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return x;
          case "ATTRIBUTE":
            var E;
            if (void 0 === r.vtp_attribute) E = b(w, v, u);
            else {
              var C = w.element;
              E = (C && Ec(C, r.vtp_attribute)) || u || "";
            }
            return E;
          case "MD":
            var F = r.vtp_mdValue,
              M = a(w, t, "MD", NI);
            return F && M ? AI(M, F) || u : M || u;
          case "FORM":
            return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
          default:
            return b(w, v, u);
        }
      });
    })();

  (Z.securityGroups.detect_form_submit_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        Z.__detect_form_submit_events = b;
        Z.__detect_form_submit_events.D = "detect_form_submit_events";
        Z.__detect_form_submit_events.isVendorTemplate = !0;
        Z.__detect_form_submit_events.priorityOverride = 0;
        Z.__detect_form_submit_events.isInfrastructure = !1;
        Z.__detect_form_submit_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, "Prohibited option waitForTags.");
          },
          O: a,
        };
      });
    })();

  (Z.securityGroups.sp = ["google"]),
    (Z.__sp = function (a) {
      var b,
        c = {};
      "DATA_LAYER" == a.vtp_customParamsFormat && Ya(a.vtp_dataLayerVariable)
        ? (c = k(a.vtp_dataLayerVariable))
        : "USER_SPECIFIED" == a.vtp_customParamsFormat &&
          (c = uI(a.vtp_customParams, "key", "value"));
      b = c;
      b[Q.g.Ve] = !0;
      var d =
        !a.hasOwnProperty("vtp_enableConversionLinker") ||
        !!a.vtp_enableConversionLinker;
      b[Q.g.ab] = a.vtp_conversionCookiePrefix;
      b[Q.g.wa] = d;
      b[Q.g.ja] = XI(Q.g.ja);
      a.vtp_enableDynamicRemarketing &&
        (a.vtp_eventValue && (b[Q.g.qa] = a.vtp_eventValue),
        a.vtp_eventItems && (b[Q.g.fa] = a.vtp_eventItems));
      a.vtp_rdp && (b[Q.g.Yb] = !0);
      a.vtp_userId && (b[Q.g.Da] = a.vtp_userId);
      (b[Q.g.Ea] = XI(Q.g.Ea)),
        (b[Q.g.oa] = XI(Q.g.oa)),
        (b[Q.g.Ub] = XI(Q.g.Ub)),
        (b[Q.g.Ka] = XI(Q.g.Ka));
      var e = "AW-" + a.vtp_conversionId,
        f = e + (a.vtp_conversionLabel ? "/" + a.vtp_conversionLabel : "");
      qw(e, void 0, { source: 7, fromContainerExecution: !0, siloed: !0 });
      var g = {},
        h = {
          eventMetadata: ((g.hit_type_override = "remarketing"), g),
          noGtmEvent: !0,
          isGtmEvent: !0,
          onSuccess: a.vtp_gtmOnSuccess,
          onFailure: a.vtp_gtmOnFailure,
        };
      iy(gy(Gj(f), a.vtp_eventName || "", b), a.vtp_gtmEventId, h);
    }),
    (Z.__sp.D = "sp"),
    (Z.__sp.isVendorTemplate = !0),
    (Z.__sp.priorityOverride = 0),
    (Z.__sp.isInfrastructure = !1),
    (Z.__sp.runInSiloedMode = !1);

  (Z.securityGroups.ua = ["google"]),
    (function () {
      function a(n, p) {
        for (var q in n)
          if (!h[q] && n.hasOwnProperty(q)) {
            var r = g[q] ? zb(n[q]) : n[q];
            "anonymizeIp" != q || r || (r = void 0);
            p[q] = r;
          }
      }
      function b(n) {
        var p = {};
        n.vtp_gaSettings &&
          k(uI(n.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), p);
        k(uI(n.vtp_fieldsToSet, "fieldName", "value"), p);
        zb(p.urlPassthrough) && (p._useUp = !0);
        n.vtp_transportUrl && (p._x_19 = n.vtp_transportUrl);
        return p;
      }
      function c(n, p) {
        return void 0 === p ? p : n(p);
      }
      function d(n, p, q) {
        var r = function (L, O, V) {
            for (var ba in L)
              if (t.hasOwnProperty(ba)) {
                var aa = V[O] || {};
                aa.actionField = aa.actionField || {};
                aa.actionField[t[ba]] = L[ba];
                V[O] = aa;
              }
          },
          t = {
            transaction_id: "id",
            affiliation: "affiliation",
            value: "revenue",
            tax: "tax",
            shipping: "shipping",
            coupon: "coupon",
            item_list_name: "list",
          },
          u = {},
          v =
            ((u[Q.g.qc] = "click"),
            (u[Q.g.Na] = "detail"),
            (u[Q.g.nc] = "add"),
            (u[Q.g.oc] = "remove"),
            (u[Q.g.Sb] = "checkout"),
            (u[Q.g.Ja] = "purchase"),
            (u[Q.g.rc] = "refund"),
            u),
          w;
        if (n.vtp_useEcommerceDataLayer) {
          var y = !1;
          n.vtp_useGA4SchemaForEcommerce &&
            ((w = n.vtp_gtmCachedValues.eventModel), (y = !!w));
          y || (w = XI("ecommerce", 1));
        } else
          n.vtp_ecommerceMacroData &&
            ((w = n.vtp_ecommerceMacroData.ecommerce),
            !w &&
              n.vtp_useGA4SchemaForEcommerce &&
              (w = n.vtp_ecommerceMacroData));
        if (!Ya(w)) return;
        w = Object(w);
        var x = {},
          B = w.currencyCode;
        n.vtp_useGA4SchemaForEcommerce && (B = B || w.currency);
        var A = Eb(p, "currencyCode", B);
        A && (x.currencyCode = A);
        w.impressions && (x.impressions = w.impressions);
        w.promoView && (x.promoView = w.promoView);
        if (n.vtp_useGA4SchemaForEcommerce) {
          if (q === Q.g.ib && !w.impressions)
            w.items &&
              ((x.impressions = w.items),
              (x.translateIfKeyEquals = "impressions"));
          else if (q === Q.g.jb && !w.promoView)
            (w.promoView = {}),
              w.items &&
                ((x.promoView = {}),
                (x.promoView.promotions = w.items),
                (x.translateIfKeyEquals = "promoView"));
          else if (q === Q.g.Db && !w.promoClick)
            (w.promoClick = {}),
              w.items &&
                ((x.promoClick = {}),
                (x.promoClick.promotions = w.items),
                (x.translateIfKeyEquals = "promoClick"),
                r(w, "promoClick", x));
          else if (v.hasOwnProperty(q)) {
            var D = v[q];
            !w[D] &&
              w.items &&
              ((x[D] = {}),
              (x[D].products = w.items),
              (x.translateIfKeyEquals = "products"),
              r(w, D, x));
          }
          var E = x.translateIfKeyEquals;
          if ("promoClick" === E || "products" === E) return x;
        }
        if (w.promoClick) return (x.promoClick = w.promoClick), x;
        for (
          var C =
              "detail checkout checkout_option click add remove purchase refund".split(
                " "
              ),
            F = 0;
          F < C.length;
          F++
        ) {
          var M = w[C[F]];
          if (M) return (x[C[F]] = M), x;
        }
        n.vtp_useGA4SchemaForEcommerce && v.hasOwnProperty(q) && r(w, v[q], x);
        return x;
      }
      function e(n, p) {
        if (
          !f &&
          (!oj() ||
            !p._x_19 ||
            n.vtp_useDebugVersion ||
            n.vtp_useInternalVersion)
        ) {
          var q = n.vtp_useDebugVersion
            ? "u/analytics_debug.js"
            : "analytics.js";
          n.vtp_useInternalVersion &&
            !n.vtp_useDebugVersion &&
            (q = "internal/" + q);
          f = !0;
          var r = n.vtp_gtmOnFailure,
            t = oj() ? nj(p._x_19, "/analytics.js") : void 0,
            u = Jr(
              "https:",
              "http:",
              "//www.google-analytics.com/" + q,
              p && !!p.forceSSL
            );
          UI(
            "analytics.js" === q && t ? t : u,
            function () {
              var v = kx();
              (v && v.loaded) || r();
            },
            r
          );
        }
      }
      var f,
        g = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        h = { urlPassthrough: !0 },
        m = function (n) {
          function p() {
            if (
              n.vtp_doubleClick ||
              "DISPLAY_FEATURES" == n.vtp_advertisingFeaturesType
            )
              w.displayfeatures = !0;
          }
          var q = {},
            r = {},
            t = {};
          if (n.vtp_gaSettings) {
            var u = n.vtp_gaSettings;
            k(uI(u.vtp_contentGroup, "index", "group"), q);
            k(uI(u.vtp_dimension, "index", "dimension"), r);
            k(uI(u.vtp_metric, "index", "metric"), t);
            var v = k(u);
            v.vtp_fieldsToSet = void 0;
            v.vtp_contentGroup = void 0;
            v.vtp_dimension = void 0;
            v.vtp_metric = void 0;
            n = k(n, v);
          }
          k(uI(n.vtp_contentGroup, "index", "group"), q);
          k(uI(n.vtp_dimension, "index", "dimension"), r);
          k(uI(n.vtp_metric, "index", "metric"), t);
          var w = b(n),
            y = String(n.vtp_trackingId || ""),
            x = "",
            B = "",
            A = "";
          n.vtp_setTrackerName && "string" == typeof n.vtp_trackerName
            ? "" !== n.vtp_trackerName &&
              ((A = n.vtp_trackerName), (B = A + "."))
            : ((A = "gtm" + Bi()), (B = A + "."));
          var D = function (ka, ha) {
            for (var ia in ha) ha.hasOwnProperty(ia) && (w[ka + ia] = ha[ia]);
          };
          D("contentGroup", q);
          D("dimension", r);
          D("metric", t);
          n.vtp_enableEcommerce &&
            ((x = n.vtp_gtmCachedValues.event),
            (w.gtmEcommerceData = d(n, w, x)));
          if ("TRACK_EVENT" === n.vtp_trackType)
            (x = "track_event"),
              p(),
              (w.eventCategory = String(n.vtp_eventCategory)),
              (w.eventAction = String(n.vtp_eventAction)),
              (w.eventLabel = c(String, n.vtp_eventLabel)),
              (w.value = c(yb, n.vtp_eventValue));
          else if ("TRACK_PAGEVIEW" == n.vtp_trackType) {
            if (
              ((x = Q.g.Tb),
              p(),
              "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
                n.vtp_advertisingFeaturesType && (w.remarketingLists = !0),
              n.vtp_autoLinkDomains)
            ) {
              var E = {};
              E[Q.g.X] = n.vtp_autoLinkDomains;
              E.use_anchor = n.vtp_useHashAutoLink;
              E[Q.g.tb] = n.vtp_decorateFormsAutoLink;
              w[Q.g.xa] = E;
            }
          } else
            "TRACK_SOCIAL" === n.vtp_trackType
              ? ((x = "track_social"),
                (w.socialNetwork = String(n.vtp_socialNetwork)),
                (w.socialAction = String(n.vtp_socialAction)),
                (w.socialTarget = String(n.vtp_socialActionTarget)))
              : "TRACK_TIMING" == n.vtp_trackType &&
                ((x = "timing_complete"),
                (w.eventCategory = String(n.vtp_timingCategory)),
                (w.timingVar = String(n.vtp_timingVar)),
                (w.value = yb(n.vtp_timingValue)),
                (w.eventLabel = c(String, n.vtp_timingLabel)));
          n.vtp_enableRecaptcha && (w.enableRecaptcha = !0);
          n.vtp_enableLinkId && (w.enableLinkId = !0);
          var C = {};
          a(w, C);
          w.name || (C.gtmTrackerName = A);
          C.gaFunctionName = n.vtp_functionName;
          void 0 !== n.vtp_nonInteraction &&
            (C.nonInteraction = n.vtp_nonInteraction);
          var F = Vm(
            Um(
              Tm(
                Sm(
                  Lm(new Km(n.vtp_gtmEventId, n.vtp_gtmPriorityId), C),
                  n.vtp_gtmOnSuccess
                ),
                n.vtp_gtmOnFailure
              ),
              !0
            )
          );
          n.vtp_useDebugVersion &&
            n.vtp_useInternalVersion &&
            (F.eventMetadata.suppress_script_load = !0);
          rE(y, x, Date.now(), F);
          var M = lx(n.vtp_functionName);
          if (qb(M)) {
            var L = function (ka) {
              var ha = [].slice.call(arguments, 0);
              ha[0] = B + ha[0];
              M.apply(window, ha);
            };
            if ("TRACK_TRANSACTION" == n.vtp_trackType) {
            } else if ("DECORATE_LINK" == n.vtp_trackType) {
            } else if ("DECORATE_FORM" == n.vtp_trackType) {
            } else if ("TRACK_DATA" == n.vtp_trackType) {
            }
            e(n, w);
          } else I(n.vtp_gtmOnFailure);
        };
      Z.__ua = m;
      Z.__ua.D = "ua";
      Z.__ua.isVendorTemplate = !0;
      Z.__ua.priorityOverride = 0;
      Z.__ua.isInfrastructure = !1;
      Z.__ua.runInSiloedMode = !1;
    })();
  (Z.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__inject_script = b;
        Z.__inject_script.D = "inject_script";
        Z.__inject_script.isVendorTemplate = !0;
        Z.__inject_script.priorityOverride = 0;
        Z.__inject_script.isInfrastructure = !1;
        Z.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!l(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (Bg(U(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          O: a,
        };
      });
    })();

  (Z.securityGroups.gas = ["google"]),
    (Z.__gas = function (a) {
      var b = k(a),
        c = b;
      c[Ge.ra] = null;
      c[Ge.Ng] = null;
      var d = (b = c);
      d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
      var e = d.vtp_cookieDomain;
      void 0 !== e &&
        (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
        delete d.vtp_cookieDomain);
      return b;
    }),
    (Z.__gas.D = "gas"),
    (Z.__gas.isVendorTemplate = !0),
    (Z.__gas.priorityOverride = 0),
    (Z.__gas.isInfrastructure = !1),
    (Z.__gas.runInSiloedMode = !1);

  (Z.securityGroups.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g) {
          c[e] = "DATA_LAYER" === d ? XI(g) : b[f];
        };
      }
      (function (b) {
        Z.__awct = b;
        Z.__awct.D = "awct";
        Z.__awct.isVendorTemplate = !0;
        Z.__awct.priorityOverride = 0;
        Z.__awct.isInfrastructure = !1;
        Z.__awct.runInSiloedMode = !1;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = uI(b.vtp_customVariables, "varName", "value") || {},
          f = {},
          g =
            ((f[Q.g.qa] = b.vtp_conversionValue || 0),
            (f[Q.g.Ba] = b.vtp_currencyCode),
            (f[Q.g.Ca] = b.vtp_orderId),
            (f[Q.g.ab] = b.vtp_conversionCookiePrefix),
            (f[Q.g.wa] = c),
            (f[Q.g.Gd] = d),
            (f[Q.g.ja] = XI(Q.g.ja)),
            (f[Q.g.la] = XI("developer_id")),
            f);
        (g[Q.g.Ea] = XI(Q.g.Ea)),
          (g[Q.g.oa] = XI(Q.g.oa)),
          (g[Q.g.Ub] = XI(Q.g.Ub)),
          (g[Q.g.Ka] = XI(Q.g.Ka));
        b.vtp_rdp && (g[Q.g.Yb] = !0);
        if (b.vtp_enableCustomParams)
          for (var h in e) hi.hasOwnProperty(h) || (g[h] = e[h]);
        if (b.vtp_enableProductReporting) {
          var m = a(b, g, b.vtp_productReportingDataSource);
          m(Q.g.Kd, "vtp_awMerchantId", "aw_merchant_id");
          m(Q.g.Id, "vtp_awFeedCountry", "aw_feed_country");
          m(Q.g.Jd, "vtp_awFeedLanguage", "aw_feed_language");
          m(Q.g.Hd, "vtp_discount", "discount");
          m(Q.g.fa, "vtp_items", "items");
        }
        b.vtp_enableShippingData &&
          ((g[Q.g.ld] = b.vtp_deliveryPostalCode),
          (g[Q.g.Rd] = b.vtp_estimatedDeliveryDate),
          (g[Q.g.wc] = b.vtp_deliveryCountry),
          (g[Q.g.Zc] = b.vtp_shippingFee));
        b.vtp_transportUrl && (g[Q.g.Mb] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var n = a(b, g, b.vtp_newCustomerReportingDataSource);
          n(Q.g.fd, "vtp_awNewCustomer", "new_customer");
          n(Q.g.Ld, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var p;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var q =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (q) {
              p = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: q,
              };
              break a;
            }
          }
          p = void 0;
        }
        var r = p;
        if (r) {
          var t = {};
          g[Q.g.Qd] = ((t[b.vtp_conversionLabel] = r), t);
        }
        var u = "AW-" + b.vtp_conversionId,
          v = u + "/" + b.vtp_conversionLabel;
        qw(u, b.vtp_transportUrl, {
          source: 7,
          fromContainerExecution: !0,
          siloed: !0,
        });
        var w = {},
          y = {
            eventMetadata: ((w.hit_type_override = "conversion"), w),
            noGtmEvent: !0,
            isGtmEvent: !0,
            onSuccess: b.vtp_gtmOnSuccess,
            onFailure: b.vtp_gtmOnFailure,
          };
        iy(gy(Gj(v), Q.g.Ja, g), b.vtp_gtmEventId, y);
      });
    })();

  (Z.securityGroups.detect_click_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { matchCommonButtons: c, cssSelector: d };
      }
      (function (b) {
        Z.__detect_click_events = b;
        Z.__detect_click_events.D = "detect_click_events";
        Z.__detect_click_events.isVendorTemplate = !0;
        Z.__detect_click_events.priorityOverride = 0;
        Z.__detect_click_events.isInfrastructure = !1;
        Z.__detect_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e, f) {
            if (void 0 !== e && "boolean" !== typeof e)
              throw c(d, {}, "matchCommonButtons must be a boolean.");
            if (void 0 !== f && "string" !== typeof f)
              throw c(d, {}, "cssSelector must be a string.");
          },
          O: a,
        };
      });
    })();

  (Z.securityGroups.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (0 < e.length) {
              var h = e.shift(),
                m = a(d, e, f, g);
              if (
                "SCRIPT" == String(h.nodeName).toUpperCase() &&
                "text/gtmscript" == h.type
              ) {
                var n = H.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = h.id;
                n.text = h.text || h.textContent || h.innerHTML || "";
                h.charset && (n.charset = h.charset);
                var p = h.getAttribute("data-gtmsrc");
                p && ((n.src = p), uc(n, m));
                d.insertBefore(n, null);
                p || m();
              } else if (
                h.innerHTML &&
                0 <= h.innerHTML.toLowerCase().indexOf("<script")
              ) {
                for (var q = []; h.firstChild; )
                  q.push(h.removeChild(h.firstChild));
                d.insertBefore(h, null);
                a(h, q, m, g)();
              } else d.insertBefore(h, null), m();
            } else f();
          } catch (r) {
            I(g);
          }
        };
      }
      function b(d) {
        if (H.body) {
          var e = d.vtp_gtmOnFailure,
            f = Lz(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.Lj,
            h = f.onSuccess;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? c(g, h, e) : a(H.body, Gc(g), h, e)();
        } else
          TI(function () {
            b(d);
          }, 200);
      }
      Z.__html = b;
      Z.__html.D = "html";
      Z.__html.isVendorTemplate = !0;
      Z.__html.priorityOverride = 0;
      Z.__html.isInfrastructure = !1;
      Z.__html.runInSiloedMode = !1;
    })();

  var eJ = {};
  (eJ.onHtmlSuccess = Mz(!0)), (eJ.onHtmlFailure = Mz(!1));
  eJ.dataLayer = Li;
  eJ.callback = function (a) {
    zi.hasOwnProperty(a) && qb(zi[a]) && zi[a]();
    delete zi[a];
  };
  eJ.bootstrap = 0;
  eJ._spx = !1;
  function fJ() {
    li[Jj()] = li[Jj()] || eJ;
    ak();
    ek() ||
      z(fk(), function (d, e) {
        qw(d, e.transportUrl, e.context);
        P(92);
      });
    Gb(Ai, Z.securityGroups);
    var a = Nj(Oj()),
      b,
      c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
    (2 !== c && 4 !== c && 3 !== c) || P(142);
    Iz(),
      mf({
        am: function (d) {
          return d === Gz;
        },
        sl: function (d) {
          return new Jz(d);
        },
        bm: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || 8 === d[g]), (f = f || 16 === d[g]);
          return e && f;
        },
        Dm: function (d) {
          var e;
          if (d === Gz) e = d;
          else {
            var f = Bi();
            Hz[f] = d;
            e = 'google_tag_manager["rm"]["' + Lj() + '"](' + f + ")";
          }
          return e;
        },
      });
    of = Ff;
  }
  (function (a) {
    function b() {
      n = H.documentElement.getAttribute("data-tag-assistant-present");
      bz(n) && (m = h.cj);
    }
    function c() {
      m && sc ? g(m) : a();
    }
    if (!G["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (H.referrer) {
        var e = U(H.referrer);
        d = "cct.google" === fj(e, "host");
      }
      if (!d) {
        var f = uo("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((G["__TAGGY_INSTALLED"] = !0),
        yc("https://cct.google/taggy/agent.js"));
    }
    var g = function (u) {
        var v = "GTM",
          w = "GTM";
        qi && ((v = "OGT"), (w = "GTAG"));
        var y = G["google.tagmanager.debugui2.queue"];
        y ||
          ((y = []),
          (G["google.tagmanager.debugui2.queue"] = y),
          yc(
            "https://" +
              ki.Ed +
              "/debug/bootstrap?id=" +
              Lf.ctid +
              "&src=" +
              w +
              "&cond=" +
              u +
              "&gtm=" +
              ko()
          ));
        var x = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: sc,
            containerProduct: v,
            debug: !1,
            id: Lf.ctid,
            targetRef: { ctid: Lf.ctid, isDestination: Cj.fe },
            aliases: Fj(),
            destinations: Ij(),
          },
        };
        x.data.resume = function () {
          a();
        };
        ki.qk && (x.data.initialPublish = !0);
        y.push(x);
      },
      h = { Lk: 1, ej: 2, sj: 3, ii: 4, cj: 5 };
    h[h.Lk] = "GTM_DEBUG_LEGACY_PARAM";
    h[h.ej] = "GTM_DEBUG_PARAM";
    h[h.sj] = "REFERRER";
    h[h.ii] = "COOKIE";
    h[h.cj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = gj(G.location, "query", !1, void 0, "gtm_debug");
    bz(p) && (m = h.ej);
    if (!m && H.referrer) {
      var q = U(H.referrer);
      "tagassistant.google.com" === fj(q, "host") && (m = h.sj);
    }
    if (!m) {
      var r = uo("__TAG_ASSISTANT");
      r.length && r[0].length && (m = h.ii);
    }
    m || b();
    if (!m && cz(n)) {
      var t = !1;
      Cc(
        H,
        "TADebugSignal",
        function () {
          t || ((t = !0), b(), c());
        },
        !1
      );
      G.setTimeout(function () {
        t || ((t = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      Yj();
      if (T(60)) {
      }
      Ql().F();
      Gn();
      om();
      var a = Lj();
      if (Aj().canonical[a]) {
        var b = li.zones;
        b && b.unregisterChild(Ej());
        cw().removeExternalRestrictions(Lj());
      } else {
        Mt();
        a: {
        }
        Di.m = "0";
        Di.F = Di.M;
        Di.J = "";
        Di.ba = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        Di.T = "ad_storage|analytics_storage|ad_user_data";
        Di.Xa = "";
        nw();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          df.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) gf.push(f[g]);
        for (var h = c.predicates || [], m = 0; m < h.length; m++)
          ff.push(h[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            ("if" !== u && "unless" !== u) || nf(r[u]);
          }
          ef.push(r);
        }
        jf = Z;
        kf = Oz;
        Hf = new Qf();
        var v = data.sandboxed_scripts,
          w = data.security_groups;
        a: {
          var y = data.runtime || [],
            x = data.runtime_lines;
          Yz = new ye();
          oI();
          cf = Xz();
          var B = Yz,
            A = nI(),
            D = new Vc("require", A);
          D.Nb();
          B.m.m.set("require", D);
          for (var E = [], C = 0; C < y.length; C++) {
            var F = y[C];
            if (!Array.isArray(F) || 3 > F.length) {
              if (0 === F.length) continue;
              break a;
            }
            x && x[C] && x[C].length && yf(F, x[C]);
            try {
              Yz.execute(F), T(69) && xj && 50 === F[0] && E.push(F[1]);
            } catch (Ba) {}
          }
          T(69) && (pf = E);
        }
        if (v && v.length)
          for (var M = ["sandboxedScripts"], L = 0; L < v.length; L++) {
            var O = v[L].replace(/^_*/, "");
            Ai[O] = M;
          }
        pI(w);
        fJ();
        if (!ui)
          for (
            var V = Gl() ? Fi(Di.T) : Fi(Di.ba), ba = 0;
            ba < cm.length;
            ba++
          ) {
            var aa = cm[ba],
              R = aa,
              oa = V[aa] ? "granted" : "denied";
            Ll().implicit(R, oa);
          }
        az();
        rw = !1;
        sw = 0;
        if (
          ("interactive" === H.readyState && !H.createEventObject) ||
          "complete" === H.readyState
        )
          uw();
        else {
          Cc(H, "DOMContentLoaded", uw);
          Cc(H, "readystatechange", uw);
          if (H.createEventObject && H.documentElement.doScroll) {
            var ka = !0;
            try {
              ka = !G.frameElement;
            } catch (Ba) {}
            ka && vw();
          }
          Cc(G, "load", uw);
        }
        Gy = !1;
        "complete" === H.readyState ? Iy() : Cc(G, "load", Iy);
        xj && (kk(zk), G.setInterval(yk, 864e5));
        Kk();
        kk(Rz);
        kk(xx);
        kk(Ru);
        kk(Ym);
        kk(Ix);
        jk.push(Em);
        kk(zt);
        xl();
        T(69) && (kk(Cx), kk(Dx), kk(Ex));
        xj && T(57) && (kk(Sz), kk(Uz));
        jz();
        jk.push(Bl);
        jk.push(cy);
        if (T(68))
          if (T(41)) {
            var ia = ez();
            ia && Ek("pcid", ia);
          } else jk.push(fz);
        Ez();
        Cl(1);
        fB();
        yi = Db();
        eJ.bootstrap = yi;
        if (T(60)) {
        }
      }
    } catch (Ba) {
      if ((Cl(4), xj)) {
        var Ja = sk(!1, !0, !0);
        Bc(Ja);
      }
    }
  });
})();
