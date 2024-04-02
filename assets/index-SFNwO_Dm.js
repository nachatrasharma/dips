function nc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const a = Object.getOwnPropertyDescriptor(r, l);
          a &&
            Object.defineProperty(
              e,
              l,
              a.get ? a : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList")
        for (const s of a.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const a = {};
    return (
      l.integrity && (a.integrity = l.integrity),
      l.referrerPolicy && (a.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const a = n(l);
    fetch(l.href, a);
  }
})();
function rc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var lc = { exports: {} },
  yi = {},
  ic = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ol = Symbol.for("react.element"),
  rh = Symbol.for("react.portal"),
  lh = Symbol.for("react.fragment"),
  ih = Symbol.for("react.strict_mode"),
  ah = Symbol.for("react.profiler"),
  sh = Symbol.for("react.provider"),
  oh = Symbol.for("react.context"),
  uh = Symbol.for("react.forward_ref"),
  ch = Symbol.for("react.suspense"),
  dh = Symbol.for("react.memo"),
  fh = Symbol.for("react.lazy"),
  bo = Symbol.iterator;
function hh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bo && e[bo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ac = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  sc = Object.assign,
  oc = {};
function sr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = oc),
    (this.updater = n || ac);
}
sr.prototype.isReactComponent = {};
sr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function uc() {}
uc.prototype = sr.prototype;
function ms(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = oc),
    (this.updater = n || ac);
}
var ps = (ms.prototype = new uc());
ps.constructor = ms;
sc(ps, sr.prototype);
ps.isPureReactComponent = !0;
var To = Array.isArray,
  cc = Object.prototype.hasOwnProperty,
  vs = { current: null },
  dc = { key: !0, ref: !0, __self: !0, __source: !0 };
function fc(e, t, n) {
  var r,
    l = {},
    a = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      cc.call(t, r) && !dc.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) l[r] === void 0 && (l[r] = o[r]);
  return {
    $$typeof: ol,
    type: e,
    key: a,
    ref: s,
    props: l,
    _owner: vs.current,
  };
}
function mh(e, t) {
  return {
    $$typeof: ol,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ol;
}
function ph(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Lo = /\/+/g;
function Hi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ph("" + e.key)
    : t.toString(36);
}
function Ml(e, t, n, r, l) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (a) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ol:
          case rh:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (l = l(s)),
      (e = r === "" ? "." + Hi(s, 0) : r),
      To(l)
        ? ((n = ""),
          e != null && (n = e.replace(Lo, "$&/") + "/"),
          Ml(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (gs(l) &&
            (l = mh(
              l,
              n +
                (!l.key || (s && s.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Lo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), To(e)))
    for (var o = 0; o < e.length; o++) {
      a = e[o];
      var u = r + Hi(a, o);
      s += Ml(a, t, n, u, l);
    }
  else if (((u = hh(e)), typeof u == "function"))
    for (e = u.call(e), o = 0; !(a = e.next()).done; )
      (a = a.value), (u = r + Hi(a, o++)), (s += Ml(a, t, n, u, l));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function yl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ml(e, r, "", "", function (a) {
      return t.call(n, a, l++);
    }),
    r
  );
}
function vh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Ol = { transition: null },
  gh = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Ol,
    ReactCurrentOwner: vs,
  };
Q.Children = {
  map: yl,
  forEach: function (e, t, n) {
    yl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = sr;
Q.Fragment = lh;
Q.Profiler = ah;
Q.PureComponent = ms;
Q.StrictMode = ih;
Q.Suspense = ch;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gh;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = sc({}, e.props),
    l = e.key,
    a = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (s = vs.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (u in t)
      cc.call(t, u) &&
        !dc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: ol, type: e.type, key: l, ref: a, props: r, _owner: s };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: oh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sh, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = fc;
Q.createFactory = function (e) {
  var t = fc.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: uh, render: e };
};
Q.isValidElement = gs;
Q.lazy = function (e) {
  return { $$typeof: fh, _payload: { _status: -1, _result: e }, _init: vh };
};
Q.memo = function (e, t) {
  return { $$typeof: dh, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Ol.transition;
  Ol.transition = {};
  try {
    e();
  } finally {
    Ol.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Oe.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
Q.useId = function () {
  return Oe.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Oe.current.useRef(e);
};
Q.useState = function (e) {
  return Oe.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Oe.current.useTransition();
};
Q.version = "18.2.0";
ic.exports = Q;
var P = ic.exports;
const yh = rc(P),
  xh = nc({ __proto__: null, default: yh }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wh = P,
  jh = Symbol.for("react.element"),
  Nh = Symbol.for("react.fragment"),
  Sh = Object.prototype.hasOwnProperty,
  kh = wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Eh = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r,
    l = {},
    a = null,
    s = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Sh.call(t, r) && !Eh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: jh,
    type: e,
    key: a,
    ref: s,
    props: l,
    _owner: kh.current,
  };
}
yi.Fragment = Nh;
yi.jsx = hc;
yi.jsxs = hc;
lc.exports = yi;
var i = lc.exports,
  ga = {},
  mc = { exports: {} },
  Ze = {},
  pc = { exports: {} },
  vc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, A) {
    var B = D.length;
    D.push(A);
    e: for (; 0 < B; ) {
      var J = (B - 1) >>> 1,
        ne = D[J];
      if (0 < l(ne, A)) (D[J] = A), (D[B] = ne), (B = J);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var A = D[0],
      B = D.pop();
    if (B !== A) {
      D[0] = B;
      e: for (var J = 0, ne = D.length, vt = ne >>> 1; J < vt; ) {
        var ke = 2 * (J + 1) - 1,
          st = D[ke],
          Re = ke + 1,
          Mt = D[Re];
        if (0 > l(st, B))
          Re < ne && 0 > l(Mt, st)
            ? ((D[J] = Mt), (D[Re] = B), (J = Re))
            : ((D[J] = st), (D[ke] = B), (J = ke));
        else if (Re < ne && 0 > l(Mt, B)) (D[J] = Mt), (D[Re] = B), (J = Re);
        else break e;
      }
    }
    return A;
  }
  function l(D, A) {
    var B = D.sortIndex - A.sortIndex;
    return B !== 0 ? B : D.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var s = Date,
      o = s.now();
    e.unstable_now = function () {
      return s.now() - o;
    };
  }
  var u = [],
    c = [],
    d = 1,
    m = null,
    v = 3,
    N = !1,
    j = !1,
    w = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(D) {
    for (var A = n(c); A !== null; ) {
      if (A.callback === null) r(c);
      else if (A.startTime <= D)
        r(c), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(c);
    }
  }
  function k(D) {
    if (((w = !1), p(D), !j))
      if (n(u) !== null) (j = !0), zt(L);
      else {
        var A = n(c);
        A !== null && ie(k, A.startTime - D);
      }
  }
  function L(D, A) {
    (j = !1), w && ((w = !1), h(I), (I = -1)), (N = !0);
    var B = v;
    try {
      for (
        p(A), m = n(u);
        m !== null && (!(m.expirationTime > A) || (D && !K()));

      ) {
        var J = m.callback;
        if (typeof J == "function") {
          (m.callback = null), (v = m.priorityLevel);
          var ne = J(m.expirationTime <= A);
          (A = e.unstable_now()),
            typeof ne == "function" ? (m.callback = ne) : m === n(u) && r(u),
            p(A);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var vt = !0;
      else {
        var ke = n(c);
        ke !== null && ie(k, ke.startTime - A), (vt = !1);
      }
      return vt;
    } finally {
      (m = null), (v = B), (N = !1);
    }
  }
  var g = !1,
    C = null,
    I = -1,
    M = 5,
    F = -1;
  function K() {
    return !(e.unstable_now() - F < M);
  }
  function ge() {
    if (C !== null) {
      var D = e.unstable_now();
      F = D;
      var A = !0;
      try {
        A = C(!0, D);
      } finally {
        A ? pe() : ((g = !1), (C = null));
      }
    } else g = !1;
  }
  var pe;
  if (typeof f == "function")
    pe = function () {
      f(ge);
    };
  else if (typeof MessageChannel < "u") {
    var $e = new MessageChannel(),
      bn = $e.port2;
    ($e.port1.onmessage = ge),
      (pe = function () {
        bn.postMessage(null);
      });
  } else
    pe = function () {
      E(ge, 0);
    };
  function zt(D) {
    (C = D), g || ((g = !0), pe());
  }
  function ie(D, A) {
    I = E(function () {
      D(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      j || N || ((j = !0), zt(L));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = v;
      }
      var B = v;
      v = A;
      try {
        return D();
      } finally {
        v = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, A) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var B = v;
      v = D;
      try {
        return A();
      } finally {
        v = B;
      }
    }),
    (e.unstable_scheduleCallback = function (D, A, B) {
      var J = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? J + B : J))
          : (B = J),
        D)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = B + ne),
        (D = {
          id: d++,
          callback: A,
          priorityLevel: D,
          startTime: B,
          expirationTime: ne,
          sortIndex: -1,
        }),
        B > J
          ? ((D.sortIndex = B),
            t(c, D),
            n(u) === null &&
              D === n(c) &&
              (w ? (h(I), (I = -1)) : (w = !0), ie(k, B - J)))
          : ((D.sortIndex = ne), t(u, D), j || N || ((j = !0), zt(L))),
        D
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (D) {
      var A = v;
      return function () {
        var B = v;
        v = A;
        try {
          return D.apply(this, arguments);
        } finally {
          v = B;
        }
      };
    });
})(vc);
pc.exports = vc;
var Ch = pc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gc = P,
  Xe = Ch;
function b(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var yc = new Set(),
  Hr = {};
function En(e, t) {
  $n(e, t), $n(e + "Capture", t);
}
function $n(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++) yc.add(t[e]);
}
var bt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ya = Object.prototype.hasOwnProperty,
  Ph =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Io = {},
  Do = {};
function bh(e) {
  return ya.call(Do, e)
    ? !0
    : ya.call(Io, e)
    ? !1
    : Ph.test(e)
    ? (Do[e] = !0)
    : ((Io[e] = !0), !1);
}
function Th(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lh(e, t, n, r) {
  if (t === null || typeof t > "u" || Th(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, l, a, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = s);
}
var be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    be[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  be[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  be[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  be[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    be[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  be[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  be[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  be[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  be[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ys = /[\-:]([a-z])/g;
function xs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ys, xs);
    be[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ys, xs);
    be[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ys, xs);
  be[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  be[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
be.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  be[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ws(e, t, n, r) {
  var l = be.hasOwnProperty(t) ? be[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Lh(t, n, l, r) && (n = null),
    r || l === null
      ? bh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xl = Symbol.for("react.element"),
  Rn = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  js = Symbol.for("react.strict_mode"),
  xa = Symbol.for("react.profiler"),
  xc = Symbol.for("react.provider"),
  wc = Symbol.for("react.context"),
  Ns = Symbol.for("react.forward_ref"),
  wa = Symbol.for("react.suspense"),
  ja = Symbol.for("react.suspense_list"),
  Ss = Symbol.for("react.memo"),
  Bt = Symbol.for("react.lazy"),
  jc = Symbol.for("react.offscreen"),
  Ro = Symbol.iterator;
function pr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ro && e[Ro]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  Vi;
function br(e) {
  if (Vi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Vi = (t && t[1]) || "";
    }
  return (
    `
` +
    Vi +
    e
  );
}
var Wi = !1;
function Qi(e, t) {
  if (!e || Wi) return "";
  Wi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          a = r.stack.split(`
`),
          s = l.length - 1,
          o = a.length - 1;
        1 <= s && 0 <= o && l[s] !== a[o];

      )
        o--;
      for (; 1 <= s && 0 <= o; s--, o--)
        if (l[s] !== a[o]) {
          if (s !== 1 || o !== 1)
            do
              if ((s--, o--, 0 > o || l[s] !== a[o])) {
                var u =
                  `
` + l[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= o);
          break;
        }
    }
  } finally {
    (Wi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? br(e) : "";
}
function Ih(e) {
  switch (e.tag) {
    case 5:
      return br(e.type);
    case 16:
      return br("Lazy");
    case 13:
      return br("Suspense");
    case 19:
      return br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qi(e.type, !1)), e;
    case 11:
      return (e = Qi(e.type.render, !1)), e;
    case 1:
      return (e = Qi(e.type, !0)), e;
    default:
      return "";
  }
}
function Na(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case Rn:
      return "Portal";
    case xa:
      return "Profiler";
    case js:
      return "StrictMode";
    case wa:
      return "Suspense";
    case ja:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case wc:
        return (e.displayName || "Context") + ".Consumer";
      case xc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ns:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ss:
        return (
          (t = e.displayName || null), t !== null ? t : Na(e.type) || "Memo"
        );
      case Bt:
        (t = e._payload), (e = e._init);
        try {
          return Na(e(t));
        } catch {}
    }
  return null;
}
function Dh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Na(t);
    case 8:
      return t === js ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function tn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Nc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rh(e) {
  var t = Nc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (s) {
          (r = "" + s), a.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wl(e) {
  e._valueTracker || (e._valueTracker = Rh(e));
}
function Sc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Nc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Sa(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = tn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function kc(e, t) {
  (t = t.checked), t != null && ws(e, "checked", t, !1);
}
function ka(e, t) {
  kc(e, t);
  var n = tn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ea(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ea(e, t.type, tn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Mo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ea(e, t, n) {
  (t !== "number" || Gl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Tr = Array.isArray;
function Gn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + tn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ca(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Oo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(b(92));
      if (Tr(n)) {
        if (1 < n.length) throw Error(b(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: tn(n) };
}
function Ec(e, t) {
  var n = tn(t.value),
    r = tn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Fo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Cc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var jl,
  Pc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        jl = jl || document.createElement("div"),
          jl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = jl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  zh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function (e) {
  zh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dr[t] = Dr[e]);
  });
});
function bc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Dr.hasOwnProperty(e) && Dr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Tc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = bc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Mh = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ba(e, t) {
  if (t) {
    if (Mh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(b(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(b(62));
  }
}
function Ta(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var La = null;
function ks(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ia = null,
  Kn = null,
  Jn = null;
function Uo(e) {
  if ((e = dl(e))) {
    if (typeof Ia != "function") throw Error(b(280));
    var t = e.stateNode;
    t && ((t = Si(t)), Ia(e.stateNode, e.type, t));
  }
}
function Lc(e) {
  Kn ? (Jn ? Jn.push(e) : (Jn = [e])) : (Kn = e);
}
function Ic() {
  if (Kn) {
    var e = Kn,
      t = Jn;
    if (((Jn = Kn = null), Uo(e), t)) for (e = 0; e < t.length; e++) Uo(t[e]);
  }
}
function Dc(e, t) {
  return e(t);
}
function Rc() {}
var Yi = !1;
function zc(e, t, n) {
  if (Yi) return e(t, n);
  Yi = !0;
  try {
    return Dc(e, t, n);
  } finally {
    (Yi = !1), (Kn !== null || Jn !== null) && (Rc(), Ic());
  }
}
function Wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Si(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(b(231, t, typeof n));
  return n;
}
var Da = !1;
if (bt)
  try {
    var vr = {};
    Object.defineProperty(vr, "passive", {
      get: function () {
        Da = !0;
      },
    }),
      window.addEventListener("test", vr, vr),
      window.removeEventListener("test", vr, vr);
  } catch {
    Da = !1;
  }
function Oh(e, t, n, r, l, a, s, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Rr = !1,
  Kl = null,
  Jl = !1,
  Ra = null,
  Fh = {
    onError: function (e) {
      (Rr = !0), (Kl = e);
    },
  };
function Uh(e, t, n, r, l, a, s, o, u) {
  (Rr = !1), (Kl = null), Oh.apply(Fh, arguments);
}
function Ah(e, t, n, r, l, a, s, o, u) {
  if ((Uh.apply(this, arguments), Rr)) {
    if (Rr) {
      var c = Kl;
      (Rr = !1), (Kl = null);
    } else throw Error(b(198));
    Jl || ((Jl = !0), (Ra = c));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Mc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ao(e) {
  if (Cn(e) !== e) throw Error(b(188));
}
function _h(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(b(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var a = l.alternate;
    if (a === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === a.child) {
      for (a = l.child; a; ) {
        if (a === n) return Ao(l), e;
        if (a === r) return Ao(l), t;
        a = a.sibling;
      }
      throw Error(b(188));
    }
    if (n.return !== r.return) (n = l), (r = a);
    else {
      for (var s = !1, o = l.child; o; ) {
        if (o === n) {
          (s = !0), (n = l), (r = a);
          break;
        }
        if (o === r) {
          (s = !0), (r = l), (n = a);
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = a.child; o; ) {
          if (o === n) {
            (s = !0), (n = a), (r = l);
            break;
          }
          if (o === r) {
            (s = !0), (r = a), (n = l);
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(b(189));
      }
    }
    if (n.alternate !== r) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? e : t;
}
function Oc(e) {
  return (e = _h(e)), e !== null ? Fc(e) : null;
}
function Fc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uc = Xe.unstable_scheduleCallback,
  _o = Xe.unstable_cancelCallback,
  Bh = Xe.unstable_shouldYield,
  Hh = Xe.unstable_requestPaint,
  me = Xe.unstable_now,
  Vh = Xe.unstable_getCurrentPriorityLevel,
  Es = Xe.unstable_ImmediatePriority,
  Ac = Xe.unstable_UserBlockingPriority,
  Xl = Xe.unstable_NormalPriority,
  Wh = Xe.unstable_LowPriority,
  _c = Xe.unstable_IdlePriority,
  xi = null,
  wt = null;
function Qh(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function")
    try {
      wt.onCommitFiberRoot(xi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ht = Math.clz32 ? Math.clz32 : Kh,
  Yh = Math.log,
  Gh = Math.LN2;
function Kh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yh(e) / Gh) | 0)) | 0;
}
var Nl = 64,
  Sl = 4194304;
function Lr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    a = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var o = s & ~l;
    o !== 0 ? (r = Lr(o)) : ((a &= s), a !== 0 && (r = Lr(a)));
  } else (s = n & ~l), s !== 0 ? (r = Lr(s)) : a !== 0 && (r = Lr(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (a = t & -t), l >= a || (l === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ht(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Jh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var s = 31 - ht(a),
      o = 1 << s,
      u = l[s];
    u === -1
      ? (!(o & n) || o & r) && (l[s] = Jh(o, t))
      : u <= t && (e.expiredLanes |= o),
      (a &= ~o);
  }
}
function za(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Bc() {
  var e = Nl;
  return (Nl <<= 1), !(Nl & 4194240) && (Nl = 64), e;
}
function Gi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ul(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ht(t)),
    (e[t] = n);
}
function Zh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ht(n),
      a = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~a);
  }
}
function Cs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ht(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Z = 0;
function Hc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vc,
  Ps,
  Wc,
  Qc,
  Yc,
  Ma = !1,
  kl = [],
  Gt = null,
  Kt = null,
  Jt = null,
  Qr = new Map(),
  Yr = new Map(),
  Vt = [],
  qh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Bo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      Kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function gr(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [l],
      }),
      t !== null && ((t = dl(t)), t !== null && Ps(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function $h(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Gt = gr(Gt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Kt = gr(Kt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Jt = gr(Jt, e, t, n, r, l)), !0;
    case "pointerover":
      var a = l.pointerId;
      return Qr.set(a, gr(Qr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (a = l.pointerId), Yr.set(a, gr(Yr.get(a) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Gc(e) {
  var t = fn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Mc(n)), t !== null)) {
          (e.blockedOn = t),
            Yc(e.priority, function () {
              Wc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (La = r), n.target.dispatchEvent(r), (La = null);
    } else return (t = dl(n)), t !== null && Ps(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ho(e, t, n) {
  Fl(e) && n.delete(t);
}
function em() {
  (Ma = !1),
    Gt !== null && Fl(Gt) && (Gt = null),
    Kt !== null && Fl(Kt) && (Kt = null),
    Jt !== null && Fl(Jt) && (Jt = null),
    Qr.forEach(Ho),
    Yr.forEach(Ho);
}
function yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ma ||
      ((Ma = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, em)));
}
function Gr(e) {
  function t(l) {
    return yr(l, e);
  }
  if (0 < kl.length) {
    yr(kl[0], e);
    for (var n = 1; n < kl.length; n++) {
      var r = kl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Gt !== null && yr(Gt, e),
      Kt !== null && yr(Kt, e),
      Jt !== null && yr(Jt, e),
      Qr.forEach(t),
      Yr.forEach(t),
      n = 0;
    n < Vt.length;
    n++
  )
    (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
    Gc(n), n.blockedOn === null && Vt.shift();
}
var Xn = Dt.ReactCurrentBatchConfig,
  ql = !0;
function tm(e, t, n, r) {
  var l = Z,
    a = Xn.transition;
  Xn.transition = null;
  try {
    (Z = 1), bs(e, t, n, r);
  } finally {
    (Z = l), (Xn.transition = a);
  }
}
function nm(e, t, n, r) {
  var l = Z,
    a = Xn.transition;
  Xn.transition = null;
  try {
    (Z = 4), bs(e, t, n, r);
  } finally {
    (Z = l), (Xn.transition = a);
  }
}
function bs(e, t, n, r) {
  if (ql) {
    var l = Oa(e, t, n, r);
    if (l === null) ra(e, t, r, $l, n), Bo(e, r);
    else if ($h(l, e, t, n, r)) r.stopPropagation();
    else if ((Bo(e, r), t & 4 && -1 < qh.indexOf(e))) {
      for (; l !== null; ) {
        var a = dl(l);
        if (
          (a !== null && Vc(a),
          (a = Oa(e, t, n, r)),
          a === null && ra(e, t, r, $l, n),
          a === l)
        )
          break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else ra(e, t, r, null, n);
  }
}
var $l = null;
function Oa(e, t, n, r) {
  if ((($l = null), (e = ks(r)), (e = fn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Mc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ($l = e), null;
}
function Kc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vh()) {
        case Es:
          return 1;
        case Ac:
          return 4;
        case Xl:
        case Wh:
          return 16;
        case _c:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qt = null,
  Ts = null,
  Ul = null;
function Jc() {
  if (Ul) return Ul;
  var e,
    t = Ts,
    n = t.length,
    r,
    l = "value" in Qt ? Qt.value : Qt.textContent,
    a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[a - r]; r++);
  return (Ul = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Al(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function El() {
  return !0;
}
function Vo() {
  return !1;
}
function qe(e) {
  function t(n, r, l, a, s) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = s),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(a) : a[o]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? El
        : Vo),
      (this.isPropagationStopped = Vo),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = El));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = El));
      },
      persist: function () {},
      isPersistent: El,
    }),
    t
  );
}
var or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ls = qe(or),
  cl = ue({}, or, { view: 0, detail: 0 }),
  rm = qe(cl),
  Ki,
  Ji,
  xr,
  wi = ue({}, cl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Is,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xr &&
            (xr && e.type === "mousemove"
              ? ((Ki = e.screenX - xr.screenX), (Ji = e.screenY - xr.screenY))
              : (Ji = Ki = 0),
            (xr = e)),
          Ki);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ji;
    },
  }),
  Wo = qe(wi),
  lm = ue({}, wi, { dataTransfer: 0 }),
  im = qe(lm),
  am = ue({}, cl, { relatedTarget: 0 }),
  Xi = qe(am),
  sm = ue({}, or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  om = qe(sm),
  um = ue({}, or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cm = qe(um),
  dm = ue({}, or, { data: 0 }),
  Qo = qe(dm),
  fm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  hm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  mm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mm[e]) ? !!t[e] : !1;
}
function Is() {
  return pm;
}
var vm = ue({}, cl, {
    key: function (e) {
      if (e.key) {
        var t = fm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Al(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? hm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Is,
    charCode: function (e) {
      return e.type === "keypress" ? Al(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Al(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  gm = qe(vm),
  ym = ue({}, wi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Yo = qe(ym),
  xm = ue({}, cl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Is,
  }),
  wm = qe(xm),
  jm = ue({}, or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nm = qe(jm),
  Sm = ue({}, wi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  km = qe(Sm),
  Em = [9, 13, 27, 32],
  Ds = bt && "CompositionEvent" in window,
  zr = null;
bt && "documentMode" in document && (zr = document.documentMode);
var Cm = bt && "TextEvent" in window && !zr,
  Xc = bt && (!Ds || (zr && 8 < zr && 11 >= zr)),
  Go = " ",
  Ko = !1;
function Zc(e, t) {
  switch (e) {
    case "keyup":
      return Em.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mn = !1;
function Pm(e, t) {
  switch (e) {
    case "compositionend":
      return qc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ko = !0), Go);
    case "textInput":
      return (e = t.data), e === Go && Ko ? null : e;
    default:
      return null;
  }
}
function bm(e, t) {
  if (Mn)
    return e === "compositionend" || (!Ds && Zc(e, t))
      ? ((e = Jc()), (Ul = Ts = Qt = null), (Mn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Xc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Tm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Jo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Tm[e.type] : t === "textarea";
}
function $c(e, t, n, r) {
  Lc(r),
    (t = ei(t, "onChange")),
    0 < t.length &&
      ((n = new Ls("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Mr = null,
  Kr = null;
function Lm(e) {
  cd(e, 0);
}
function ji(e) {
  var t = Un(e);
  if (Sc(t)) return e;
}
function Im(e, t) {
  if (e === "change") return t;
}
var ed = !1;
if (bt) {
  var Zi;
  if (bt) {
    var qi = "oninput" in document;
    if (!qi) {
      var Xo = document.createElement("div");
      Xo.setAttribute("oninput", "return;"),
        (qi = typeof Xo.oninput == "function");
    }
    Zi = qi;
  } else Zi = !1;
  ed = Zi && (!document.documentMode || 9 < document.documentMode);
}
function Zo() {
  Mr && (Mr.detachEvent("onpropertychange", td), (Kr = Mr = null));
}
function td(e) {
  if (e.propertyName === "value" && ji(Kr)) {
    var t = [];
    $c(t, Kr, e, ks(e)), zc(Lm, t);
  }
}
function Dm(e, t, n) {
  e === "focusin"
    ? (Zo(), (Mr = t), (Kr = n), Mr.attachEvent("onpropertychange", td))
    : e === "focusout" && Zo();
}
function Rm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ji(Kr);
}
function zm(e, t) {
  if (e === "click") return ji(t);
}
function Mm(e, t) {
  if (e === "input" || e === "change") return ji(t);
}
function Om(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == "function" ? Object.is : Om;
function Jr(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ya.call(t, l) || !pt(e[l], t[l])) return !1;
  }
  return !0;
}
function qo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $o(e, t) {
  var n = qo(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qo(n);
  }
}
function nd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? nd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function rd() {
  for (var e = window, t = Gl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gl(e.document);
  }
  return t;
}
function Rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Fm(e) {
  var t = rd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    nd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Rs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          a = Math.min(r.start, l);
        (r = r.end === void 0 ? a : Math.min(r.end, l)),
          !e.extend && a > r && ((l = r), (r = a), (a = l)),
          (l = $o(n, a));
        var s = $o(n, r);
        l &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Um = bt && "documentMode" in document && 11 >= document.documentMode,
  On = null,
  Fa = null,
  Or = null,
  Ua = !1;
function eu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ua ||
    On == null ||
    On !== Gl(r) ||
    ((r = On),
    "selectionStart" in r && Rs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Or && Jr(Or, r)) ||
      ((Or = r),
      (r = ei(Fa, "onSelect")),
      0 < r.length &&
        ((t = new Ls("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = On))));
}
function Cl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Fn = {
    animationend: Cl("Animation", "AnimationEnd"),
    animationiteration: Cl("Animation", "AnimationIteration"),
    animationstart: Cl("Animation", "AnimationStart"),
    transitionend: Cl("Transition", "TransitionEnd"),
  },
  $i = {},
  ld = {};
bt &&
  ((ld = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function Ni(e) {
  if ($i[e]) return $i[e];
  if (!Fn[e]) return e;
  var t = Fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ld) return ($i[e] = t[n]);
  return e;
}
var id = Ni("animationend"),
  ad = Ni("animationiteration"),
  sd = Ni("animationstart"),
  od = Ni("transitionend"),
  ud = new Map(),
  tu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function rn(e, t) {
  ud.set(e, t), En(t, [e]);
}
for (var ea = 0; ea < tu.length; ea++) {
  var ta = tu[ea],
    Am = ta.toLowerCase(),
    _m = ta[0].toUpperCase() + ta.slice(1);
  rn(Am, "on" + _m);
}
rn(id, "onAnimationEnd");
rn(ad, "onAnimationIteration");
rn(sd, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(od, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ir =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));
function nu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ah(r, t, void 0, e), (e.currentTarget = null);
}
function cd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var o = r[s],
            u = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), u !== a && l.isPropagationStopped())) break e;
          nu(l, o, c), (a = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((o = r[s]),
            (u = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            u !== a && l.isPropagationStopped())
          )
            break e;
          nu(l, o, c), (a = u);
        }
    }
  }
  if (Jl) throw ((e = Ra), (Jl = !1), (Ra = null), e);
}
function re(e, t) {
  var n = t[Va];
  n === void 0 && (n = t[Va] = new Set());
  var r = e + "__bubble";
  n.has(r) || (dd(t, e, 2, !1), n.add(r));
}
function na(e, t, n) {
  var r = 0;
  t && (r |= 4), dd(n, e, r, t);
}
var Pl = "_reactListening" + Math.random().toString(36).slice(2);
function Xr(e) {
  if (!e[Pl]) {
    (e[Pl] = !0),
      yc.forEach(function (n) {
        n !== "selectionchange" && (Bm.has(n) || na(n, !1, e), na(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pl] || ((t[Pl] = !0), na("selectionchange", !1, t));
  }
}
function dd(e, t, n, r) {
  switch (Kc(t)) {
    case 1:
      var l = tm;
      break;
    case 4:
      l = nm;
      break;
    default:
      l = bs;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Da ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ra(e, t, n, r, l) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            s = s.return;
          }
        for (; o !== null; ) {
          if (((s = fn(o)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = a = s;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  zc(function () {
    var c = a,
      d = ks(n),
      m = [];
    e: {
      var v = ud.get(e);
      if (v !== void 0) {
        var N = Ls,
          j = e;
        switch (e) {
          case "keypress":
            if (Al(n) === 0) break e;
          case "keydown":
          case "keyup":
            N = gm;
            break;
          case "focusin":
            (j = "focus"), (N = Xi);
            break;
          case "focusout":
            (j = "blur"), (N = Xi);
            break;
          case "beforeblur":
          case "afterblur":
            N = Xi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            N = Wo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = im;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = wm;
            break;
          case id:
          case ad:
          case sd:
            N = om;
            break;
          case od:
            N = Nm;
            break;
          case "scroll":
            N = rm;
            break;
          case "wheel":
            N = km;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = cm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = Yo;
        }
        var w = (t & 4) !== 0,
          E = !w && e === "scroll",
          h = w ? (v !== null ? v + "Capture" : null) : v;
        w = [];
        for (var f = c, p; f !== null; ) {
          p = f;
          var k = p.stateNode;
          if (
            (p.tag === 5 &&
              k !== null &&
              ((p = k),
              h !== null && ((k = Wr(f, h)), k != null && w.push(Zr(f, k, p)))),
            E)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((v = new N(v, j, null, n, d)), m.push({ event: v, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (N = e === "mouseout" || e === "pointerout"),
          v &&
            n !== La &&
            (j = n.relatedTarget || n.fromElement) &&
            (fn(j) || j[Tt]))
        )
          break e;
        if (
          (N || v) &&
          ((v =
            d.window === d
              ? d
              : (v = d.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          N
            ? ((j = n.relatedTarget || n.toElement),
              (N = c),
              (j = j ? fn(j) : null),
              j !== null &&
                ((E = Cn(j)), j !== E || (j.tag !== 5 && j.tag !== 6)) &&
                (j = null))
            : ((N = null), (j = c)),
          N !== j)
        ) {
          if (
            ((w = Wo),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Yo),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (E = N == null ? v : Un(N)),
            (p = j == null ? v : Un(j)),
            (v = new w(k, f + "leave", N, n, d)),
            (v.target = E),
            (v.relatedTarget = p),
            (k = null),
            fn(d) === c &&
              ((w = new w(h, f + "enter", j, n, d)),
              (w.target = p),
              (w.relatedTarget = E),
              (k = w)),
            (E = k),
            N && j)
          )
            t: {
              for (w = N, h = j, f = 0, p = w; p; p = Dn(p)) f++;
              for (p = 0, k = h; k; k = Dn(k)) p++;
              for (; 0 < f - p; ) (w = Dn(w)), f--;
              for (; 0 < p - f; ) (h = Dn(h)), p--;
              for (; f--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t;
                (w = Dn(w)), (h = Dn(h));
              }
              w = null;
            }
          else w = null;
          N !== null && ru(m, v, N, w, !1),
            j !== null && E !== null && ru(m, E, j, w, !0);
        }
      }
      e: {
        if (
          ((v = c ? Un(c) : window),
          (N = v.nodeName && v.nodeName.toLowerCase()),
          N === "select" || (N === "input" && v.type === "file"))
        )
          var L = Im;
        else if (Jo(v))
          if (ed) L = Mm;
          else {
            L = Rm;
            var g = Dm;
          }
        else
          (N = v.nodeName) &&
            N.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (L = zm);
        if (L && (L = L(e, c))) {
          $c(m, L, n, d);
          break e;
        }
        g && g(e, v, c),
          e === "focusout" &&
            (g = v._wrapperState) &&
            g.controlled &&
            v.type === "number" &&
            Ea(v, "number", v.value);
      }
      switch (((g = c ? Un(c) : window), e)) {
        case "focusin":
          (Jo(g) || g.contentEditable === "true") &&
            ((On = g), (Fa = c), (Or = null));
          break;
        case "focusout":
          Or = Fa = On = null;
          break;
        case "mousedown":
          Ua = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ua = !1), eu(m, n, d);
          break;
        case "selectionchange":
          if (Um) break;
        case "keydown":
        case "keyup":
          eu(m, n, d);
      }
      var C;
      if (Ds)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        Mn
          ? Zc(e, n) && (I = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (Xc &&
          n.locale !== "ko" &&
          (Mn || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && Mn && (C = Jc())
            : ((Qt = d),
              (Ts = "value" in Qt ? Qt.value : Qt.textContent),
              (Mn = !0))),
        (g = ei(c, I)),
        0 < g.length &&
          ((I = new Qo(I, e, null, n, d)),
          m.push({ event: I, listeners: g }),
          C ? (I.data = C) : ((C = qc(n)), C !== null && (I.data = C)))),
        (C = Cm ? Pm(e, n) : bm(e, n)) &&
          ((c = ei(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Qo("onBeforeInput", "beforeinput", null, n, d)),
            m.push({ event: d, listeners: c }),
            (d.data = C)));
    }
    cd(m, t);
  });
}
function Zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ei(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      a = l.stateNode;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      (a = Wr(e, n)),
      a != null && r.unshift(Zr(e, a, l)),
      (a = Wr(e, t)),
      a != null && r.push(Zr(e, a, l))),
      (e = e.return);
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ru(e, t, n, r, l) {
  for (var a = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n,
      u = o.alternate,
      c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      l
        ? ((u = Wr(n, a)), u != null && s.unshift(Zr(n, u, o)))
        : l || ((u = Wr(n, a)), u != null && s.push(Zr(n, u, o)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Hm = /\r\n?/g,
  Vm = /\u0000|\uFFFD/g;
function lu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Hm,
      `
`
    )
    .replace(Vm, "");
}
function bl(e, t, n) {
  if (((t = lu(t)), lu(e) !== t && n)) throw Error(b(425));
}
function ti() {}
var Aa = null,
  _a = null;
function Ba(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ha = typeof setTimeout == "function" ? setTimeout : void 0,
  Wm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  iu = typeof Promise == "function" ? Promise : void 0,
  Qm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof iu < "u"
      ? function (e) {
          return iu.resolve(null).then(e).catch(Ym);
        }
      : Ha;
function Ym(e) {
  setTimeout(function () {
    throw e;
  });
}
function la(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Gr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Gr(t);
}
function Xt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function au(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ur = Math.random().toString(36).slice(2),
  xt = "__reactFiber$" + ur,
  qr = "__reactProps$" + ur,
  Tt = "__reactContainer$" + ur,
  Va = "__reactEvents$" + ur,
  Gm = "__reactListeners$" + ur,
  Km = "__reactHandles$" + ur;
function fn(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = au(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = au(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function dl(e) {
  return (
    (e = e[xt] || e[Tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function Si(e) {
  return e[qr] || null;
}
var Wa = [],
  An = -1;
function ln(e) {
  return { current: e };
}
function le(e) {
  0 > An || ((e.current = Wa[An]), (Wa[An] = null), An--);
}
function te(e, t) {
  An++, (Wa[An] = e.current), (e.current = t);
}
var nn = {},
  De = ln(nn),
  Be = ln(!1),
  xn = nn;
function er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return nn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    a;
  for (a in n) l[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function ni() {
  le(Be), le(De);
}
function su(e, t, n) {
  if (De.current !== nn) throw Error(b(168));
  te(De, t), te(Be, n);
}
function fd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(b(108, Dh(e) || "Unknown", l));
  return ue({}, n, r);
}
function ri(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
    (xn = De.current),
    te(De, e),
    te(Be, Be.current),
    !0
  );
}
function ou(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(b(169));
  n
    ? ((e = fd(e, t, xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      le(Be),
      le(De),
      te(De, e))
    : le(Be),
    te(Be, n);
}
var St = null,
  ki = !1,
  ia = !1;
function hd(e) {
  St === null ? (St = [e]) : St.push(e);
}
function Jm(e) {
  (ki = !0), hd(e);
}
function an() {
  if (!ia && St !== null) {
    ia = !0;
    var e = 0,
      t = Z;
    try {
      var n = St;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (St = null), (ki = !1);
    } catch (l) {
      throw (St !== null && (St = St.slice(e + 1)), Uc(Es, an), l);
    } finally {
      (Z = t), (ia = !1);
    }
  }
  return null;
}
var _n = [],
  Bn = 0,
  li = null,
  ii = 0,
  tt = [],
  nt = 0,
  wn = null,
  kt = 1,
  Et = "";
function cn(e, t) {
  (_n[Bn++] = ii), (_n[Bn++] = li), (li = e), (ii = t);
}
function md(e, t, n) {
  (tt[nt++] = kt), (tt[nt++] = Et), (tt[nt++] = wn), (wn = e);
  var r = kt;
  e = Et;
  var l = 32 - ht(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var a = 32 - ht(t) + l;
  if (30 < a) {
    var s = l - (l % 5);
    (a = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (l -= s),
      (kt = (1 << (32 - ht(t) + l)) | (n << l) | r),
      (Et = a + e);
  } else (kt = (1 << a) | (n << l) | r), (Et = e);
}
function zs(e) {
  e.return !== null && (cn(e, 1), md(e, 1, 0));
}
function Ms(e) {
  for (; e === li; )
    (li = _n[--Bn]), (_n[Bn] = null), (ii = _n[--Bn]), (_n[Bn] = null);
  for (; e === wn; )
    (wn = tt[--nt]),
      (tt[nt] = null),
      (Et = tt[--nt]),
      (tt[nt] = null),
      (kt = tt[--nt]),
      (tt[nt] = null);
}
var Je = null,
  Ke = null,
  ae = !1,
  ft = null;
function pd(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function uu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (Ke = Xt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: kt, overflow: Et } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ya(e) {
  if (ae) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!uu(e, t)) {
        if (Qa(e)) throw Error(b(418));
        t = Xt(n.nextSibling);
        var r = Je;
        t && uu(e, t)
          ? pd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (Je = e));
      }
    } else {
      if (Qa(e)) throw Error(b(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (Je = e);
    }
  }
}
function cu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function Tl(e) {
  if (e !== Je) return !1;
  if (!ae) return cu(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ba(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Qa(e)) throw (vd(), Error(b(418)));
    for (; t; ) pd(e, t), (t = Xt(t.nextSibling));
  }
  if ((cu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Xt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Je ? Xt(e.stateNode.nextSibling) : null;
  return !0;
}
function vd() {
  for (var e = Ke; e; ) e = Xt(e.nextSibling);
}
function tr() {
  (Ke = Je = null), (ae = !1);
}
function Os(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var Xm = Dt.ReactCurrentBatchConfig;
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ai = ln(null),
  si = null,
  Hn = null,
  Fs = null;
function Us() {
  Fs = Hn = si = null;
}
function As(e) {
  var t = ai.current;
  le(ai), (e._currentValue = t);
}
function Ga(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zn(e, t) {
  (si = e),
    (Fs = Hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_e = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if (Fs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (si === null) throw Error(b(308));
      (Hn = e), (si.dependencies = { lanes: 0, firstContext: e });
    } else Hn = Hn.next = e;
  return t;
}
var hn = null;
function _s(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
function gd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), _s(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Lt(e, r)
  );
}
function Lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function Bs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function yd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Lt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), _s(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Lt(e, n)
  );
}
function _l(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cs(e, n);
  }
}
function du(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (l = a = s) : (a = a.next = s), (n = n.next);
      } while (n !== null);
      a === null ? (l = a = t) : (a = a.next = t);
    } else l = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function oi(e, t, n, r) {
  var l = e.updateQueue;
  Ht = !1;
  var a = l.firstBaseUpdate,
    s = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o,
      c = u.next;
    (u.next = null), s === null ? (a = c) : (s.next = c), (s = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (o = d.lastBaseUpdate),
      o !== s &&
        (o === null ? (d.firstBaseUpdate = c) : (o.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (a !== null) {
    var m = l.baseState;
    (s = 0), (d = c = u = null), (o = a);
    do {
      var v = o.lane,
        N = o.eventTime;
      if ((r & v) === v) {
        d !== null &&
          (d = d.next =
            {
              eventTime: N,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var j = e,
            w = o;
          switch (((v = t), (N = n), w.tag)) {
            case 1:
              if (((j = w.payload), typeof j == "function")) {
                m = j.call(N, m, v);
                break e;
              }
              m = j;
              break e;
            case 3:
              j.flags = (j.flags & -65537) | 128;
            case 0:
              if (
                ((j = w.payload),
                (v = typeof j == "function" ? j.call(N, m, v) : j),
                v == null)
              )
                break e;
              m = ue({}, m, v);
              break e;
            case 2:
              Ht = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [o]) : v.push(o));
      } else
        (N = {
          eventTime: N,
          lane: v,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          d === null ? ((c = d = N), (u = m)) : (d = d.next = N),
          (s |= v);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (v = o),
          (o = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = m),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (s |= l.lane), (l = l.next);
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    (Nn |= s), (e.lanes = s), (e.memoizedState = m);
  }
}
function fu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(b(191, l));
        l.call(r);
      }
    }
}
var xd = new gc.Component().refs;
function Ka(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ei = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = $t(e),
      a = Ct(r, l);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = Zt(e, a, l)),
      t !== null && (mt(t, e, l, r), _l(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = $t(e),
      a = Ct(r, l);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Zt(e, a, l)),
      t !== null && (mt(t, e, l, r), _l(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = $t(e),
      l = Ct(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Zt(e, l, r)),
      t !== null && (mt(t, e, r, n), _l(t, e, r));
  },
};
function hu(e, t, n, r, l, a, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jr(n, r) || !Jr(l, a)
      : !0
  );
}
function wd(e, t, n) {
  var r = !1,
    l = nn,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = it(a))
      : ((l = He(t) ? xn : De.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? er(e, l) : nn)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ei),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function mu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ei.enqueueReplaceState(t, t.state, null);
}
function Ja(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = xd), Bs(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (l.context = it(a))
    : ((a = He(t) ? xn : De.current), (l.context = er(e, a))),
    (l.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (Ka(e, t, a, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ei.enqueueReplaceState(l, l.state, null),
      oi(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(b(147, e));
      var l = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (s) {
            var o = l.refs;
            o === xd && (o = l.refs = {}),
              s === null ? delete o[a] : (o[a] = s);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(b(284));
    if (!n._owner) throw Error(b(290, e));
  }
  return e;
}
function Ll(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      b(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function pu(e) {
  var t = e._init;
  return t(e._payload);
}
function jd(e) {
  function t(h, f) {
    if (e) {
      var p = h.deletions;
      p === null ? ((h.deletions = [f]), (h.flags |= 16)) : p.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function l(h, f) {
    return (h = en(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function a(h, f, p) {
    return (
      (h.index = p),
      e
        ? ((p = h.alternate),
          p !== null
            ? ((p = p.index), p < f ? ((h.flags |= 2), f) : p)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function o(h, f, p, k) {
    return f === null || f.tag !== 6
      ? ((f = fa(p, h.mode, k)), (f.return = h), f)
      : ((f = l(f, p)), (f.return = h), f);
  }
  function u(h, f, p, k) {
    var L = p.type;
    return L === zn
      ? d(h, f, p.props.children, k, p.key)
      : f !== null &&
        (f.elementType === L ||
          (typeof L == "object" &&
            L !== null &&
            L.$$typeof === Bt &&
            pu(L) === f.type))
      ? ((k = l(f, p.props)), (k.ref = wr(h, f, p)), (k.return = h), k)
      : ((k = Yl(p.type, p.key, p.props, null, h.mode, k)),
        (k.ref = wr(h, f, p)),
        (k.return = h),
        k);
  }
  function c(h, f, p, k) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== p.containerInfo ||
      f.stateNode.implementation !== p.implementation
      ? ((f = ha(p, h.mode, k)), (f.return = h), f)
      : ((f = l(f, p.children || [])), (f.return = h), f);
  }
  function d(h, f, p, k, L) {
    return f === null || f.tag !== 7
      ? ((f = yn(p, h.mode, k, L)), (f.return = h), f)
      : ((f = l(f, p)), (f.return = h), f);
  }
  function m(h, f, p) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = fa("" + f, h.mode, p)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case xl:
          return (
            (p = Yl(f.type, f.key, f.props, null, h.mode, p)),
            (p.ref = wr(h, null, f)),
            (p.return = h),
            p
          );
        case Rn:
          return (f = ha(f, h.mode, p)), (f.return = h), f;
        case Bt:
          var k = f._init;
          return m(h, k(f._payload), p);
      }
      if (Tr(f) || pr(f))
        return (f = yn(f, h.mode, p, null)), (f.return = h), f;
      Ll(h, f);
    }
    return null;
  }
  function v(h, f, p, k) {
    var L = f !== null ? f.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return L !== null ? null : o(h, f, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case xl:
          return p.key === L ? u(h, f, p, k) : null;
        case Rn:
          return p.key === L ? c(h, f, p, k) : null;
        case Bt:
          return (L = p._init), v(h, f, L(p._payload), k);
      }
      if (Tr(p) || pr(p)) return L !== null ? null : d(h, f, p, k, null);
      Ll(h, p);
    }
    return null;
  }
  function N(h, f, p, k, L) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(p) || null), o(f, h, "" + k, L);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case xl:
          return (h = h.get(k.key === null ? p : k.key) || null), u(f, h, k, L);
        case Rn:
          return (h = h.get(k.key === null ? p : k.key) || null), c(f, h, k, L);
        case Bt:
          var g = k._init;
          return N(h, f, p, g(k._payload), L);
      }
      if (Tr(k) || pr(k)) return (h = h.get(p) || null), d(f, h, k, L, null);
      Ll(f, k);
    }
    return null;
  }
  function j(h, f, p, k) {
    for (
      var L = null, g = null, C = f, I = (f = 0), M = null;
      C !== null && I < p.length;
      I++
    ) {
      C.index > I ? ((M = C), (C = null)) : (M = C.sibling);
      var F = v(h, C, p[I], k);
      if (F === null) {
        C === null && (C = M);
        break;
      }
      e && C && F.alternate === null && t(h, C),
        (f = a(F, f, I)),
        g === null ? (L = F) : (g.sibling = F),
        (g = F),
        (C = M);
    }
    if (I === p.length) return n(h, C), ae && cn(h, I), L;
    if (C === null) {
      for (; I < p.length; I++)
        (C = m(h, p[I], k)),
          C !== null &&
            ((f = a(C, f, I)), g === null ? (L = C) : (g.sibling = C), (g = C));
      return ae && cn(h, I), L;
    }
    for (C = r(h, C); I < p.length; I++)
      (M = N(C, h, I, p[I], k)),
        M !== null &&
          (e && M.alternate !== null && C.delete(M.key === null ? I : M.key),
          (f = a(M, f, I)),
          g === null ? (L = M) : (g.sibling = M),
          (g = M));
    return (
      e &&
        C.forEach(function (K) {
          return t(h, K);
        }),
      ae && cn(h, I),
      L
    );
  }
  function w(h, f, p, k) {
    var L = pr(p);
    if (typeof L != "function") throw Error(b(150));
    if (((p = L.call(p)), p == null)) throw Error(b(151));
    for (
      var g = (L = null), C = f, I = (f = 0), M = null, F = p.next();
      C !== null && !F.done;
      I++, F = p.next()
    ) {
      C.index > I ? ((M = C), (C = null)) : (M = C.sibling);
      var K = v(h, C, F.value, k);
      if (K === null) {
        C === null && (C = M);
        break;
      }
      e && C && K.alternate === null && t(h, C),
        (f = a(K, f, I)),
        g === null ? (L = K) : (g.sibling = K),
        (g = K),
        (C = M);
    }
    if (F.done) return n(h, C), ae && cn(h, I), L;
    if (C === null) {
      for (; !F.done; I++, F = p.next())
        (F = m(h, F.value, k)),
          F !== null &&
            ((f = a(F, f, I)), g === null ? (L = F) : (g.sibling = F), (g = F));
      return ae && cn(h, I), L;
    }
    for (C = r(h, C); !F.done; I++, F = p.next())
      (F = N(C, h, I, F.value, k)),
        F !== null &&
          (e && F.alternate !== null && C.delete(F.key === null ? I : F.key),
          (f = a(F, f, I)),
          g === null ? (L = F) : (g.sibling = F),
          (g = F));
    return (
      e &&
        C.forEach(function (ge) {
          return t(h, ge);
        }),
      ae && cn(h, I),
      L
    );
  }
  function E(h, f, p, k) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === zn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case xl:
          e: {
            for (var L = p.key, g = f; g !== null; ) {
              if (g.key === L) {
                if (((L = p.type), L === zn)) {
                  if (g.tag === 7) {
                    n(h, g.sibling),
                      (f = l(g, p.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  g.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === Bt &&
                    pu(L) === g.type)
                ) {
                  n(h, g.sibling),
                    (f = l(g, p.props)),
                    (f.ref = wr(h, g, p)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, g);
                break;
              } else t(h, g);
              g = g.sibling;
            }
            p.type === zn
              ? ((f = yn(p.props.children, h.mode, k, p.key)),
                (f.return = h),
                (h = f))
              : ((k = Yl(p.type, p.key, p.props, null, h.mode, k)),
                (k.ref = wr(h, f, p)),
                (k.return = h),
                (h = k));
          }
          return s(h);
        case Rn:
          e: {
            for (g = p.key; f !== null; ) {
              if (f.key === g)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === p.containerInfo &&
                  f.stateNode.implementation === p.implementation
                ) {
                  n(h, f.sibling),
                    (f = l(f, p.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = ha(p, h.mode, k)), (f.return = h), (h = f);
          }
          return s(h);
        case Bt:
          return (g = p._init), E(h, f, g(p._payload), k);
      }
      if (Tr(p)) return j(h, f, p, k);
      if (pr(p)) return w(h, f, p, k);
      Ll(h, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = l(f, p)), (f.return = h), (h = f))
          : (n(h, f), (f = fa(p, h.mode, k)), (f.return = h), (h = f)),
        s(h))
      : n(h, f);
  }
  return E;
}
var nr = jd(!0),
  Nd = jd(!1),
  fl = {},
  jt = ln(fl),
  $r = ln(fl),
  el = ln(fl);
function mn(e) {
  if (e === fl) throw Error(b(174));
  return e;
}
function Hs(e, t) {
  switch ((te(el, t), te($r, e), te(jt, fl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pa(t, e));
  }
  le(jt), te(jt, t);
}
function rr() {
  le(jt), le($r), le(el);
}
function Sd(e) {
  mn(el.current);
  var t = mn(jt.current),
    n = Pa(t, e.type);
  t !== n && (te($r, e), te(jt, n));
}
function Vs(e) {
  $r.current === e && (le(jt), le($r));
}
var se = ln(0);
function ui(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var aa = [];
function Ws() {
  for (var e = 0; e < aa.length; e++)
    aa[e]._workInProgressVersionPrimary = null;
  aa.length = 0;
}
var Bl = Dt.ReactCurrentDispatcher,
  sa = Dt.ReactCurrentBatchConfig,
  jn = 0,
  oe = null,
  ye = null,
  Ne = null,
  ci = !1,
  Fr = !1,
  tl = 0,
  Zm = 0;
function Te() {
  throw Error(b(321));
}
function Qs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pt(e[n], t[n])) return !1;
  return !0;
}
function Ys(e, t, n, r, l, a) {
  if (
    ((jn = a),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bl.current = e === null || e.memoizedState === null ? tp : np),
    (e = n(r, l)),
    Fr)
  ) {
    a = 0;
    do {
      if (((Fr = !1), (tl = 0), 25 <= a)) throw Error(b(301));
      (a += 1),
        (Ne = ye = null),
        (t.updateQueue = null),
        (Bl.current = rp),
        (e = n(r, l));
    } while (Fr);
  }
  if (
    ((Bl.current = di),
    (t = ye !== null && ye.next !== null),
    (jn = 0),
    (Ne = ye = oe = null),
    (ci = !1),
    t)
  )
    throw Error(b(300));
  return e;
}
function Gs() {
  var e = tl !== 0;
  return (tl = 0), e;
}
function yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ne === null ? (oe.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function at() {
  if (ye === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = Ne === null ? oe.memoizedState : Ne.next;
  if (t !== null) (Ne = t), (ye = e);
  else {
    if (e === null) throw Error(b(310));
    (ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      Ne === null ? (oe.memoizedState = Ne = e) : (Ne = Ne.next = e);
  }
  return Ne;
}
function nl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oa(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = ye,
    l = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var s = l.next;
      (l.next = a.next), (a.next = s);
    }
    (r.baseQueue = l = a), (n.pending = null);
  }
  if (l !== null) {
    (a = l.next), (r = r.baseState);
    var o = (s = null),
      u = null,
      c = a;
    do {
      var d = c.lane;
      if ((jn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((o = u = m), (s = r)) : (u = u.next = m),
          (oe.lanes |= d),
          (Nn |= d);
      }
      c = c.next;
    } while (c !== null && c !== a);
    u === null ? (s = r) : (u.next = o),
      pt(r, t.memoizedState) || (_e = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (a = l.lane), (oe.lanes |= a), (Nn |= a), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ua(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = (l = l.next);
    do (a = e(a, s.action)), (s = s.next);
    while (s !== l);
    pt(a, t.memoizedState) || (_e = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function kd() {}
function Ed(e, t) {
  var n = oe,
    r = at(),
    l = t(),
    a = !pt(r.memoizedState, l);
  if (
    (a && ((r.memoizedState = l), (_e = !0)),
    (r = r.queue),
    Ks(bd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (Ne !== null && Ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rl(9, Pd.bind(null, n, r, l, t), void 0, null),
      Se === null)
    )
      throw Error(b(349));
    jn & 30 || Cd(n, t, l);
  }
  return l;
}
function Cd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Pd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Td(t) && Ld(e);
}
function bd(e, t, n) {
  return n(function () {
    Td(t) && Ld(e);
  });
}
function Td(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function Ld(e) {
  var t = Lt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function vu(e) {
  var t = yt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ep.bind(null, oe, e)),
    [t.memoizedState, e]
  );
}
function rl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Id() {
  return at().memoizedState;
}
function Hl(e, t, n, r) {
  var l = yt();
  (oe.flags |= e),
    (l.memoizedState = rl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ci(e, t, n, r) {
  var l = at();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (ye !== null) {
    var s = ye.memoizedState;
    if (((a = s.destroy), r !== null && Qs(r, s.deps))) {
      l.memoizedState = rl(t, n, a, r);
      return;
    }
  }
  (oe.flags |= e), (l.memoizedState = rl(1 | t, n, a, r));
}
function gu(e, t) {
  return Hl(8390656, 8, e, t);
}
function Ks(e, t) {
  return Ci(2048, 8, e, t);
}
function Dd(e, t) {
  return Ci(4, 2, e, t);
}
function Rd(e, t) {
  return Ci(4, 4, e, t);
}
function zd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Md(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ci(4, 4, zd.bind(null, t, e), n)
  );
}
function Js() {}
function Od(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Fd(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ud(e, t, n) {
  return jn & 21
    ? (pt(n, t) || ((n = Bc()), (oe.lanes |= n), (Nn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_e = !0)), (e.memoizedState = n));
}
function qm(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = sa.transition;
  sa.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (sa.transition = r);
  }
}
function Ad() {
  return at().memoizedState;
}
function $m(e, t, n) {
  var r = $t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _d(e))
  )
    Bd(t, n);
  else if (((n = gd(e, t, n, r)), n !== null)) {
    var l = Me();
    mt(n, e, r, l), Hd(n, t, r);
  }
}
function ep(e, t, n) {
  var r = $t(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_d(e)) Bd(t, l);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var s = t.lastRenderedState,
          o = a(s, n);
        if (((l.hasEagerState = !0), (l.eagerState = o), pt(o, s))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), _s(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = gd(e, t, l, r)),
      n !== null && ((l = Me()), mt(n, e, r, l), Hd(n, t, r));
  }
}
function _d(e) {
  var t = e.alternate;
  return e === oe || (t !== null && t === oe);
}
function Bd(e, t) {
  Fr = ci = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Hd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cs(e, n);
  }
}
var di = {
    readContext: it,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  tp = {
    readContext: it,
    useCallback: function (e, t) {
      return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: gu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hl(4194308, 4, zd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = yt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = $m.bind(null, oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: vu,
    useDebugValue: Js,
    useDeferredValue: function (e) {
      return (yt().memoizedState = e);
    },
    useTransition: function () {
      var e = vu(!1),
        t = e[0];
      return (e = qm.bind(null, e[1])), (yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = oe,
        l = yt();
      if (ae) {
        if (n === void 0) throw Error(b(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(b(349));
        jn & 30 || Cd(r, t, n);
      }
      l.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (l.queue = a),
        gu(bd.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        rl(9, Pd.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = yt(),
        t = Se.identifierPrefix;
      if (ae) {
        var n = Et,
          r = kt;
        (n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = tl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  np = {
    readContext: it,
    useCallback: Od,
    useContext: it,
    useEffect: Ks,
    useImperativeHandle: Md,
    useInsertionEffect: Dd,
    useLayoutEffect: Rd,
    useMemo: Fd,
    useReducer: oa,
    useRef: Id,
    useState: function () {
      return oa(nl);
    },
    useDebugValue: Js,
    useDeferredValue: function (e) {
      var t = at();
      return Ud(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = oa(nl)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: kd,
    useSyncExternalStore: Ed,
    useId: Ad,
    unstable_isNewReconciler: !1,
  },
  rp = {
    readContext: it,
    useCallback: Od,
    useContext: it,
    useEffect: Ks,
    useImperativeHandle: Md,
    useInsertionEffect: Dd,
    useLayoutEffect: Rd,
    useMemo: Fd,
    useReducer: ua,
    useRef: Id,
    useState: function () {
      return ua(nl);
    },
    useDebugValue: Js,
    useDeferredValue: function (e) {
      var t = at();
      return ye === null ? (t.memoizedState = e) : Ud(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = ua(nl)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: kd,
    useSyncExternalStore: Ed,
    useId: Ad,
    unstable_isNewReconciler: !1,
  };
function lr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ih(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (a) {
    l =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ca(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lp = typeof WeakMap == "function" ? WeakMap : Map;
function Vd(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      hi || ((hi = !0), (as = r)), Xa(e, t);
    }),
    n
  );
}
function Wd(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Xa(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        Xa(e, t),
          typeof r != "function" &&
            (qt === null ? (qt = new Set([this])) : qt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function yu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = yp.bind(null, e, t, n)), t.then(e, e));
}
function xu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ip = Dt.ReactCurrentOwner,
  _e = !1;
function ze(e, t, n, r) {
  t.child = e === null ? Nd(t, null, n, r) : nr(t, e.child, n, r);
}
function ju(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return (
    Zn(t, l),
    (r = Ys(e, t, n, r, a, l)),
    (n = Gs()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        It(e, t, l))
      : (ae && n && zs(t), (t.flags |= 1), ze(e, t, r, l), t.child)
  );
}
function Nu(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !ro(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Qd(e, t, a, r, l))
      : ((e = Yl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & l))) {
    var s = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jr), n(s, r) && e.ref === t.ref)
    )
      return It(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = en(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Qd(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Jr(a, r) && e.ref === t.ref)
      if (((_e = !1), (t.pendingProps = r = a), (e.lanes & l) !== 0))
        e.flags & 131072 && (_e = !0);
      else return (t.lanes = e.lanes), It(e, t, l);
  }
  return Za(e, t, n, r, l);
}
function Yd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Wn, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(Wn, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        te(Wn, Ge),
        (Ge |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Wn, Ge),
      (Ge |= r);
  return ze(e, t, l, n), t.child;
}
function Gd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Za(e, t, n, r, l) {
  var a = He(n) ? xn : De.current;
  return (
    (a = er(t, a)),
    Zn(t, l),
    (n = Ys(e, t, n, r, a, l)),
    (r = Gs()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        It(e, t, l))
      : (ae && r && zs(t), (t.flags |= 1), ze(e, t, n, l), t.child)
  );
}
function Su(e, t, n, r, l) {
  if (He(n)) {
    var a = !0;
    ri(t);
  } else a = !1;
  if ((Zn(t, l), t.stateNode === null))
    Vl(e, t), wd(t, n, r), Ja(t, n, r, l), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      o = t.memoizedProps;
    s.props = o;
    var u = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = it(c))
      : ((c = He(n) ? xn : De.current), (c = er(t, c)));
    var d = n.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== r || u !== c) && mu(t, s, r, c)),
      (Ht = !1);
    var v = t.memoizedState;
    (s.state = v),
      oi(t, r, s, l),
      (u = t.memoizedState),
      o !== r || v !== u || Be.current || Ht
        ? (typeof d == "function" && (Ka(t, n, d, r), (u = t.memoizedState)),
          (o = Ht || hu(t, n, o, r, v, u, c))
            ? (m ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = c),
          (r = o))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      yd(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : ut(t.type, o)),
      (s.props = c),
      (m = t.pendingProps),
      (v = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = it(u))
        : ((u = He(n) ? xn : De.current), (u = er(t, u)));
    var N = n.getDerivedStateFromProps;
    (d =
      typeof N == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== m || v !== u) && mu(t, s, r, u)),
      (Ht = !1),
      (v = t.memoizedState),
      (s.state = v),
      oi(t, r, s, l);
    var j = t.memoizedState;
    o !== m || v !== j || Be.current || Ht
      ? (typeof N == "function" && (Ka(t, n, N, r), (j = t.memoizedState)),
        (c = Ht || hu(t, n, c, r, v, j, u) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, j, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, j, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (o === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = j)),
        (s.props = r),
        (s.state = j),
        (s.context = u),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (o === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return qa(e, t, n, r, a, l);
}
function qa(e, t, n, r, l, a) {
  Gd(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && ou(t, n, !1), It(e, t, a);
  (r = t.stateNode), (ip.current = t);
  var o =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = nr(t, e.child, null, a)), (t.child = nr(t, null, o, a)))
      : ze(e, t, o, a),
    (t.memoizedState = r.state),
    l && ou(t, n, !0),
    t.child
  );
}
function Kd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? su(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && su(e, t.context, !1),
    Hs(e, t.containerInfo);
}
function ku(e, t, n, r, l) {
  return tr(), Os(l), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var $a = { dehydrated: null, treeContext: null, retryLane: 0 };
function es(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jd(e, t, n) {
  var r = t.pendingProps,
    l = se.current,
    a = !1,
    s = (t.flags & 128) !== 0,
    o;
  if (
    ((o = s) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    te(se, l & 1),
    e === null)
  )
    return (
      Ya(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = s))
                : (a = Ti(s, r, 0, null)),
              (e = yn(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = es(n)),
              (t.memoizedState = $a),
              e)
            : Xs(t, s))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return ap(e, t, s, r, o, l, n);
  if (a) {
    (a = r.fallback), (s = t.mode), (l = e.child), (o = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = en(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (a = en(o, a)) : ((a = yn(a, s, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? es(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (a.memoizedState = s),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = $a),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = en(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Xs(e, t) {
  return (
    (t = Ti({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Il(e, t, n, r) {
  return (
    r !== null && Os(r),
    nr(t, e.child, null, n),
    (e = Xs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ap(e, t, n, r, l, a, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ca(Error(b(422)))), Il(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (l = t.mode),
        (r = Ti({ mode: "visible", children: r.children }, l, 0, null)),
        (a = yn(a, l, s, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && nr(t, e.child, null, s),
        (t.child.memoizedState = es(s)),
        (t.memoizedState = $a),
        a);
  if (!(t.mode & 1)) return Il(e, t, s, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (a = Error(b(419))), (r = ca(a, r, void 0)), Il(e, t, s, r);
  }
  if (((o = (s & e.childLanes) !== 0), _e || o)) {
    if (((r = Se), r !== null)) {
      switch (s & -s) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | s) ? 0 : l),
        l !== 0 &&
          l !== a.retryLane &&
          ((a.retryLane = l), Lt(e, l), mt(r, e, l, -1));
    }
    return no(), (r = ca(Error(b(421)))), Il(e, t, s, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Ke = Xt(l.nextSibling)),
      (Je = t),
      (ae = !0),
      (ft = null),
      e !== null &&
        ((tt[nt++] = kt),
        (tt[nt++] = Et),
        (tt[nt++] = wn),
        (kt = e.id),
        (Et = e.overflow),
        (wn = t)),
      (t = Xs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Eu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ga(e.return, t, n);
}
function da(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = l));
}
function Xd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    a = r.tail;
  if ((ze(e, t, r.children, n), (r = se.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Eu(e, n, t);
        else if (e.tag === 19) Eu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((te(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ui(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          da(t, !1, l, n, a);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ui(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        da(t, !0, n, null, a);
        break;
      case "together":
        da(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function It(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Nn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
  if (t.child !== null) {
    for (
      e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function sp(e, t, n) {
  switch (t.tag) {
    case 3:
      Kd(t), tr();
      break;
    case 5:
      Sd(t);
      break;
    case 1:
      He(t.type) && ri(t);
      break;
    case 4:
      Hs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      te(ai, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Jd(e, t, n)
          : (te(se, se.current & 1),
            (e = It(e, t, n)),
            e !== null ? e.sibling : null);
      te(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        te(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yd(e, t, n);
  }
  return It(e, t, n);
}
var Zd, ts, qd, $d;
Zd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ts = function () {};
qd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), mn(jt.current);
    var a = null;
    switch (n) {
      case "input":
        (l = Sa(e, l)), (r = Sa(e, r)), (a = []);
        break;
      case "select":
        (l = ue({}, l, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (l = Ca(e, l)), (r = Ca(e, r)), (a = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ti);
    }
    ba(n, r);
    var s;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var o = l[c];
          for (s in o) o.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Hr.hasOwnProperty(c)
              ? a || (a = [])
              : (a = a || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((o = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== o && (u != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (s in o)
              !o.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in u)
              u.hasOwnProperty(s) &&
                o[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else n || (a || (a = []), a.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (o = o ? o.__html : void 0),
              u != null && o !== u && (a = a || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (a = a || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Hr.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && re("scroll", e),
                  a || o === u || (a = []))
                : (a = a || []).push(c, u));
    }
    n && (a = a || []).push("style", n);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
$d = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jr(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function op(e, t, n) {
  var r = t.pendingProps;
  switch ((Ms(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return He(t.type) && ni(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rr(),
        le(Be),
        le(De),
        Ws(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (us(ft), (ft = null)))),
        ts(e, t),
        Le(t),
        null
      );
    case 5:
      Vs(t);
      var l = mn(el.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        qd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(b(166));
          return Le(t), null;
        }
        if (((e = mn(jt.current)), Tl(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[xt] = t), (r[qr] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ir.length; l++) re(Ir[l], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re("error", r), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              zo(r, a), re("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                re("invalid", r);
              break;
            case "textarea":
              Oo(r, a), re("invalid", r);
          }
          ba(n, a), (l = null);
          for (var s in a)
            if (a.hasOwnProperty(s)) {
              var o = a[s];
              s === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (a.suppressHydrationWarning !== !0 &&
                      bl(r.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (a.suppressHydrationWarning !== !0 &&
                      bl(r.textContent, o, e),
                    (l = ["children", "" + o]))
                : Hr.hasOwnProperty(s) &&
                  o != null &&
                  s === "onScroll" &&
                  re("scroll", r);
            }
          switch (n) {
            case "input":
              wl(r), Mo(r, a, !0);
              break;
            case "textarea":
              wl(r), Fo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = ti);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Cc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[xt] = t),
            (e[qr] = r),
            Zd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ta(n, r)), n)) {
              case "dialog":
                re("cancel", e), re("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ir.length; l++) re(Ir[l], e);
                l = r;
                break;
              case "source":
                re("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                re("error", e), re("load", e), (l = r);
                break;
              case "details":
                re("toggle", e), (l = r);
                break;
              case "input":
                zo(e, r), (l = Sa(e, r)), re("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ue({}, r, { value: void 0 })),
                  re("invalid", e);
                break;
              case "textarea":
                Oo(e, r), (l = Ca(e, r)), re("invalid", e);
                break;
              default:
                l = r;
            }
            ba(n, l), (o = l);
            for (a in o)
              if (o.hasOwnProperty(a)) {
                var u = o[a];
                a === "style"
                  ? Tc(e, u)
                  : a === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Pc(e, u))
                  : a === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Vr(e, u)
                    : typeof u == "number" && Vr(e, "" + u)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (Hr.hasOwnProperty(a)
                      ? u != null && a === "onScroll" && re("scroll", e)
                      : u != null && ws(e, a, u, s));
              }
            switch (n) {
              case "input":
                wl(e), Mo(e, r, !1);
                break;
              case "textarea":
                wl(e), Fo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + tn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? Gn(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      Gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ti);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) $d(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(b(166));
        if (((n = mn(el.current)), mn(jt.current), Tl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (a = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                bl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  bl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (le(se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && Ke !== null && t.mode & 1 && !(t.flags & 128))
          vd(), tr(), (t.flags |= 98560), (a = !1);
        else if (((a = Tl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(b(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(b(317));
            a[xt] = t;
          } else
            tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (a = !1);
        } else ft !== null && (us(ft), (ft = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || se.current & 1 ? xe === 0 && (xe = 3) : no())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        rr(), ts(e, t), e === null && Xr(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return As(t.type._context), Le(t), null;
    case 17:
      return He(t.type) && ni(), Le(t), null;
    case 19:
      if ((le(se), (a = t.memoizedState), a === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (s = a.rendering), s === null))
        if (r) jr(a, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ui(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    jr(a, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (s = a.alternate),
                    s === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = s.childLanes),
                        (a.lanes = s.lanes),
                        (a.child = s.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = s.memoizedProps),
                        (a.memoizedState = s.memoizedState),
                        (a.updateQueue = s.updateQueue),
                        (a.type = s.type),
                        (e = s.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(se, (se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            me() > ir &&
            ((t.flags |= 128), (r = !0), jr(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ui(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jr(a, !0),
              a.tail === null && a.tailMode === "hidden" && !s.alternate && !ae)
            )
              return Le(t), null;
          } else
            2 * me() - a.renderingStartTime > ir &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jr(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = a.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (a.last = s));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = me()),
          (t.sibling = null),
          (n = se.current),
          te(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        to(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function up(e, t) {
  switch ((Ms(t), t.tag)) {
    case 1:
      return (
        He(t.type) && ni(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rr(),
        le(Be),
        le(De),
        Ws(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vs(t), null;
    case 13:
      if (
        (le(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(b(340));
        tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return le(se), null;
    case 4:
      return rr(), null;
    case 10:
      return As(t.type._context), null;
    case 22:
    case 23:
      return to(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dl = !1,
  Ie = !1,
  cp = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else n.current = null;
}
function ns(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Cu = !1;
function dp(e, t) {
  if (((Aa = ql), (e = rd()), Rs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            o = -1,
            u = -1,
            c = 0,
            d = 0,
            m = e,
            v = null;
          t: for (;;) {
            for (
              var N;
              m !== n || (l !== 0 && m.nodeType !== 3) || (o = s + l),
                m !== a || (r !== 0 && m.nodeType !== 3) || (u = s + r),
                m.nodeType === 3 && (s += m.nodeValue.length),
                (N = m.firstChild) !== null;

            )
              (v = m), (m = N);
            for (;;) {
              if (m === e) break t;
              if (
                (v === n && ++c === l && (o = s),
                v === a && ++d === r && (u = s),
                (N = m.nextSibling) !== null)
              )
                break;
              (m = v), (v = m.parentNode);
            }
            m = N;
          }
          n = o === -1 || u === -1 ? null : { start: o, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_a = { focusedElem: e, selectionRange: n }, ql = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var j = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (j !== null) {
                  var w = j.memoizedProps,
                    E = j.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ut(t.type, w),
                      E
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(b(163));
            }
        } catch (k) {
          de(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (j = Cu), (Cu = !1), j;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        (l.destroy = void 0), a !== void 0 && ns(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Pi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function rs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ef(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ef(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[qr], delete t[Va], delete t[Gm], delete t[Km])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function tf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || tf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ti));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), (e = e.sibling);
}
function is(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (is(e, t, n), e = e.sibling; e !== null; ) is(e, t, n), (e = e.sibling);
}
var Ce = null,
  ct = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) nf(e, t, n), (n = n.sibling);
}
function nf(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function")
    try {
      wt.onCommitFiberUnmount(xi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || Vn(n, t);
    case 6:
      var r = Ce,
        l = ct;
      (Ce = null),
        At(e, t, n),
        (Ce = r),
        (ct = l),
        Ce !== null &&
          (ct
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (ct
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? la(e.parentNode, n)
              : e.nodeType === 1 && la(e, n),
            Gr(e))
          : la(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (l = ct),
        (Ce = n.stateNode.containerInfo),
        (ct = !0),
        At(e, t, n),
        (Ce = r),
        (ct = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var a = l,
            s = a.destroy;
          (a = a.tag),
            s !== void 0 && (a & 2 || a & 4) && ns(n, t, s),
            (l = l.next);
        } while (l !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (Vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          de(n, t, o);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), At(e, t, n), (Ie = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new cp()),
      t.forEach(function (r) {
        var l = wp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var a = e,
          s = t,
          o = s;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (Ce = o.stateNode), (ct = !1);
              break e;
            case 3:
              (Ce = o.stateNode.containerInfo), (ct = !0);
              break e;
            case 4:
              (Ce = o.stateNode.containerInfo), (ct = !0);
              break e;
          }
          o = o.return;
        }
        if (Ce === null) throw Error(b(160));
        nf(a, s, l), (Ce = null), (ct = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        de(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rf(t, e), (t = t.sibling);
}
function rf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), gt(e), r & 4)) {
        try {
          Ur(3, e, e.return), Pi(3, e);
        } catch (w) {
          de(e, e.return, w);
        }
        try {
          Ur(5, e, e.return);
        } catch (w) {
          de(e, e.return, w);
        }
      }
      break;
    case 1:
      ot(t, e), gt(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        gt(e),
        r & 512 && n !== null && Vn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Vr(l, "");
        } catch (w) {
          de(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var a = e.memoizedProps,
          s = n !== null ? n.memoizedProps : a,
          o = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            o === "input" && a.type === "radio" && a.name != null && kc(l, a),
              Ta(o, s);
            var c = Ta(o, a);
            for (s = 0; s < u.length; s += 2) {
              var d = u[s],
                m = u[s + 1];
              d === "style"
                ? Tc(l, m)
                : d === "dangerouslySetInnerHTML"
                ? Pc(l, m)
                : d === "children"
                ? Vr(l, m)
                : ws(l, d, m, c);
            }
            switch (o) {
              case "input":
                ka(l, a);
                break;
              case "textarea":
                Ec(l, a);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var N = a.value;
                N != null
                  ? Gn(l, !!a.multiple, N, !1)
                  : v !== !!a.multiple &&
                    (a.defaultValue != null
                      ? Gn(l, !!a.multiple, a.defaultValue, !0)
                      : Gn(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[qr] = a;
          } catch (w) {
            de(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ot(t, e), gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(b(162));
        (l = e.stateNode), (a = e.memoizedProps);
        try {
          l.nodeValue = a;
        } catch (w) {
          de(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gr(t.containerInfo);
        } catch (w) {
          de(e, e.return, w);
        }
      break;
    case 4:
      ot(t, e), gt(e);
      break;
    case 13:
      ot(t, e),
        gt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((a = l.memoizedState !== null),
          (l.stateNode.isHidden = a),
          !a ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            ($s = me())),
        r & 4 && bu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (c = Ie) || d), ot(t, e), (Ie = c)) : ot(t, e),
        gt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (R = e, d = e.child; d !== null; ) {
            for (m = R = d; R !== null; ) {
              switch (((v = R), (N = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ur(4, v, v.return);
                  break;
                case 1:
                  Vn(v, v.return);
                  var j = v.stateNode;
                  if (typeof j.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (j.props = t.memoizedProps),
                        (j.state = t.memoizedState),
                        j.componentWillUnmount();
                    } catch (w) {
                      de(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Vn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Lu(m);
                    continue;
                  }
              }
              N !== null ? ((N.return = v), (R = N)) : Lu(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((a = l.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((o = m.stateNode),
                      (u = m.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (o.style.display = bc("display", s)));
              } catch (w) {
                de(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (w) {
                de(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            d === m && (d = null), (m = m.return);
          }
          d === m && (d = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), gt(e), r & 4 && bu(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), gt(e);
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (tf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(b(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Vr(l, ""), (r.flags &= -33));
          var a = Pu(e);
          is(e, a, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            o = Pu(e);
          ls(e, o, s);
          break;
        default:
          throw Error(b(161));
      }
    } catch (u) {
      de(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fp(e, t, n) {
  (R = e), lf(e);
}
function lf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var l = R,
      a = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || Dl;
      if (!s) {
        var o = l.alternate,
          u = (o !== null && o.memoizedState !== null) || Ie;
        o = Dl;
        var c = Ie;
        if (((Dl = s), (Ie = u) && !c))
          for (R = l; R !== null; )
            (s = R),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Iu(l)
                : u !== null
                ? ((u.return = s), (R = u))
                : Iu(l);
        for (; a !== null; ) (R = a), lf(a), (a = a.sibling);
        (R = l), (Dl = o), (Ie = c);
      }
      Tu(e);
    } else
      l.subtreeFlags & 8772 && a !== null ? ((a.return = l), (R = a)) : Tu(e);
  }
}
function Tu(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || Pi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && fu(t, a, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                fu(t, s, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var m = d.dehydrated;
                    m !== null && Gr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(b(163));
          }
        Ie || (t.flags & 512 && rs(t));
      } catch (v) {
        de(t, t.return, v);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Lu(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Iu(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pi(4, t);
          } catch (u) {
            de(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              de(t, l, u);
            }
          }
          var a = t.return;
          try {
            rs(t);
          } catch (u) {
            de(t, a, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            rs(t);
          } catch (u) {
            de(t, s, u);
          }
      }
    } catch (u) {
      de(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (R = o);
      break;
    }
    R = t.return;
  }
}
var hp = Math.ceil,
  fi = Dt.ReactCurrentDispatcher,
  Zs = Dt.ReactCurrentOwner,
  lt = Dt.ReactCurrentBatchConfig,
  G = 0,
  Se = null,
  ve = null,
  Pe = 0,
  Ge = 0,
  Wn = ln(0),
  xe = 0,
  ll = null,
  Nn = 0,
  bi = 0,
  qs = 0,
  Ar = null,
  Ae = null,
  $s = 0,
  ir = 1 / 0,
  Nt = null,
  hi = !1,
  as = null,
  qt = null,
  Rl = !1,
  Yt = null,
  mi = 0,
  _r = 0,
  ss = null,
  Wl = -1,
  Ql = 0;
function Me() {
  return G & 6 ? me() : Wl !== -1 ? Wl : (Wl = me());
}
function $t(e) {
  return e.mode & 1
    ? G & 2 && Pe !== 0
      ? Pe & -Pe
      : Xm.transition !== null
      ? (Ql === 0 && (Ql = Bc()), Ql)
      : ((e = Z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Kc(e.type))),
        e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < _r) throw ((_r = 0), (ss = null), Error(b(185)));
  ul(e, n, r),
    (!(G & 2) || e !== Se) &&
      (e === Se && (!(G & 2) && (bi |= n), xe === 4 && Wt(e, Pe)),
      Ve(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((ir = me() + 500), ki && an()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Xh(e, t);
  var r = Zl(e, e === Se ? Pe : 0);
  if (r === 0)
    n !== null && _o(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _o(n), t === 1))
      e.tag === 0 ? Jm(Du.bind(null, e)) : hd(Du.bind(null, e)),
        Qm(function () {
          !(G & 6) && an();
        }),
        (n = null);
    else {
      switch (Hc(r)) {
        case 1:
          n = Es;
          break;
        case 4:
          n = Ac;
          break;
        case 16:
          n = Xl;
          break;
        case 536870912:
          n = _c;
          break;
        default:
          n = Xl;
      }
      n = hf(n, af.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function af(e, t) {
  if (((Wl = -1), (Ql = 0), G & 6)) throw Error(b(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = Zl(e, e === Se ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pi(e, r);
  else {
    t = r;
    var l = G;
    G |= 2;
    var a = of();
    (Se !== e || Pe !== t) && ((Nt = null), (ir = me() + 500), gn(e, t));
    do
      try {
        vp();
        break;
      } catch (o) {
        sf(e, o);
      }
    while (!0);
    Us(),
      (fi.current = a),
      (G = l),
      ve !== null ? (t = 0) : ((Se = null), (Pe = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = za(e)), l !== 0 && ((r = l), (t = os(e, l)))), t === 1)
    )
      throw ((n = ll), gn(e, 0), Wt(e, r), Ve(e, me()), n);
    if (t === 6) Wt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !mp(l) &&
          ((t = pi(e, r)),
          t === 2 && ((a = za(e)), a !== 0 && ((r = a), (t = os(e, a)))),
          t === 1))
      )
        throw ((n = ll), gn(e, 0), Wt(e, r), Ve(e, me()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          dn(e, Ae, Nt);
          break;
        case 3:
          if (
            (Wt(e, r), (r & 130023424) === r && ((t = $s + 500 - me()), 10 < t))
          ) {
            if (Zl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Me(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ha(dn.bind(null, e, Ae, Nt), t);
            break;
          }
          dn(e, Ae, Nt);
          break;
        case 4:
          if ((Wt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - ht(r);
            (a = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~a);
          }
          if (
            ((r = l),
            (r = me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * hp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ha(dn.bind(null, e, Ae, Nt), r);
            break;
          }
          dn(e, Ae, Nt);
          break;
        case 5:
          dn(e, Ae, Nt);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return Ve(e, me()), e.callbackNode === n ? af.bind(null, e) : null;
}
function os(e, t) {
  var n = Ar;
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = pi(e, t)),
    e !== 2 && ((t = Ae), (Ae = n), t !== null && us(t)),
    e
  );
}
function us(e) {
  Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
}
function mp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            a = l.getSnapshot;
          l = l.value;
          try {
            if (!pt(a(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Wt(e, t) {
  for (
    t &= ~qs,
      t &= ~bi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ht(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Du(e) {
  if (G & 6) throw Error(b(327));
  qn();
  var t = Zl(e, 0);
  if (!(t & 1)) return Ve(e, me()), null;
  var n = pi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = za(e);
    r !== 0 && ((t = r), (n = os(e, r)));
  }
  if (n === 1) throw ((n = ll), gn(e, 0), Wt(e, t), Ve(e, me()), n);
  if (n === 6) throw Error(b(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    dn(e, Ae, Nt),
    Ve(e, me()),
    null
  );
}
function eo(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((ir = me() + 500), ki && an());
  }
}
function Sn(e) {
  Yt !== null && Yt.tag === 0 && !(G & 6) && qn();
  var t = G;
  G |= 1;
  var n = lt.transition,
    r = Z;
  try {
    if (((lt.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (lt.transition = n), (G = t), !(G & 6) && an();
  }
}
function to() {
  (Ge = Wn.current), le(Wn);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wm(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Ms(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ni();
          break;
        case 3:
          rr(), le(Be), le(De), Ws();
          break;
        case 5:
          Vs(r);
          break;
        case 4:
          rr();
          break;
        case 13:
          le(se);
          break;
        case 19:
          le(se);
          break;
        case 10:
          As(r.type._context);
          break;
        case 22:
        case 23:
          to();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (ve = e = en(e.current, null)),
    (Pe = Ge = t),
    (xe = 0),
    (ll = null),
    (qs = bi = Nn = 0),
    (Ae = Ar = null),
    hn !== null)
  ) {
    for (t = 0; t < hn.length; t++)
      if (((n = hn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          a = n.pending;
        if (a !== null) {
          var s = a.next;
          (a.next = l), (r.next = s);
        }
        n.pending = r;
      }
    hn = null;
  }
  return e;
}
function sf(e, t) {
  do {
    var n = ve;
    try {
      if ((Us(), (Bl.current = di), ci)) {
        for (var r = oe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ci = !1;
      }
      if (
        ((jn = 0),
        (Ne = ye = oe = null),
        (Fr = !1),
        (tl = 0),
        (Zs.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (ll = t), (ve = null);
        break;
      }
      e: {
        var a = e,
          s = n.return,
          o = n,
          u = t;
        if (
          ((t = Pe),
          (o.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = o,
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = d.alternate;
            v
              ? ((d.updateQueue = v.updateQueue),
                (d.memoizedState = v.memoizedState),
                (d.lanes = v.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var N = xu(s);
          if (N !== null) {
            (N.flags &= -257),
              wu(N, s, o, a, t),
              N.mode & 1 && yu(a, c, t),
              (t = N),
              (u = c);
            var j = t.updateQueue;
            if (j === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else j.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              yu(a, c, t), no();
              break e;
            }
            u = Error(b(426));
          }
        } else if (ae && o.mode & 1) {
          var E = xu(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              wu(E, s, o, a, t),
              Os(lr(u, o));
            break e;
          }
        }
        (a = u = lr(u, o)),
          xe !== 4 && (xe = 2),
          Ar === null ? (Ar = [a]) : Ar.push(a),
          (a = s);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var h = Vd(a, u, t);
              du(a, h);
              break e;
            case 1:
              o = u;
              var f = a.type,
                p = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (qt === null || !qt.has(p))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var k = Wd(a, o, t);
                du(a, k);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      cf(n);
    } catch (L) {
      (t = L), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function of() {
  var e = fi.current;
  return (fi.current = di), e === null ? di : e;
}
function no() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Se === null || (!(Nn & 268435455) && !(bi & 268435455)) || Wt(Se, Pe);
}
function pi(e, t) {
  var n = G;
  G |= 2;
  var r = of();
  (Se !== e || Pe !== t) && ((Nt = null), gn(e, t));
  do
    try {
      pp();
      break;
    } catch (l) {
      sf(e, l);
    }
  while (!0);
  if ((Us(), (G = n), (fi.current = r), ve !== null)) throw Error(b(261));
  return (Se = null), (Pe = 0), xe;
}
function pp() {
  for (; ve !== null; ) uf(ve);
}
function vp() {
  for (; ve !== null && !Bh(); ) uf(ve);
}
function uf(e) {
  var t = ff(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? cf(e) : (ve = t),
    (Zs.current = null);
}
function cf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = up(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ve = null);
        return;
      }
    } else if (((n = op(n, t, Ge)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function dn(e, t, n) {
  var r = Z,
    l = lt.transition;
  try {
    (lt.transition = null), (Z = 1), gp(e, t, n, r);
  } finally {
    (lt.transition = l), (Z = r);
  }
  return null;
}
function gp(e, t, n, r) {
  do qn();
  while (Yt !== null);
  if (G & 6) throw Error(b(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(b(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (Zh(e, a),
    e === Se && ((ve = Se = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Rl ||
      ((Rl = !0),
      hf(Xl, function () {
        return qn(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = lt.transition), (lt.transition = null);
    var s = Z;
    Z = 1;
    var o = G;
    (G |= 4),
      (Zs.current = null),
      dp(e, n),
      rf(n, e),
      Fm(_a),
      (ql = !!Aa),
      (_a = Aa = null),
      (e.current = n),
      fp(n),
      Hh(),
      (G = o),
      (Z = s),
      (lt.transition = a);
  } else e.current = n;
  if (
    (Rl && ((Rl = !1), (Yt = e), (mi = l)),
    (a = e.pendingLanes),
    a === 0 && (qt = null),
    Qh(n.stateNode),
    Ve(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (hi) throw ((hi = !1), (e = as), (as = null), e);
  return (
    mi & 1 && e.tag !== 0 && qn(),
    (a = e.pendingLanes),
    a & 1 ? (e === ss ? _r++ : ((_r = 0), (ss = e))) : (_r = 0),
    an(),
    null
  );
}
function qn() {
  if (Yt !== null) {
    var e = Hc(mi),
      t = lt.transition,
      n = Z;
    try {
      if (((lt.transition = null), (Z = 16 > e ? 16 : e), Yt === null))
        var r = !1;
      else {
        if (((e = Yt), (Yt = null), (mi = 0), G & 6)) throw Error(b(331));
        var l = G;
        for (G |= 4, R = e.current; R !== null; ) {
          var a = R,
            s = a.child;
          if (R.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (R = c; R !== null; ) {
                  var d = R;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(8, d, a);
                  }
                  var m = d.child;
                  if (m !== null) (m.return = d), (R = m);
                  else
                    for (; R !== null; ) {
                      d = R;
                      var v = d.sibling,
                        N = d.return;
                      if ((ef(d), d === c)) {
                        R = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = N), (R = v);
                        break;
                      }
                      R = N;
                    }
                }
              }
              var j = a.alternate;
              if (j !== null) {
                var w = j.child;
                if (w !== null) {
                  j.child = null;
                  do {
                    var E = w.sibling;
                    (w.sibling = null), (w = E);
                  } while (w !== null);
                }
              }
              R = a;
            }
          }
          if (a.subtreeFlags & 2064 && s !== null) (s.return = a), (R = s);
          else
            e: for (; R !== null; ) {
              if (((a = R), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ur(9, a, a.return);
                }
              var h = a.sibling;
              if (h !== null) {
                (h.return = a.return), (R = h);
                break e;
              }
              R = a.return;
            }
        }
        var f = e.current;
        for (R = f; R !== null; ) {
          s = R;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (R = p);
          else
            e: for (s = f; R !== null; ) {
              if (((o = R), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pi(9, o);
                  }
                } catch (L) {
                  de(o, o.return, L);
                }
              if (o === s) {
                R = null;
                break e;
              }
              var k = o.sibling;
              if (k !== null) {
                (k.return = o.return), (R = k);
                break e;
              }
              R = o.return;
            }
        }
        if (
          ((G = l), an(), wt && typeof wt.onPostCommitFiberRoot == "function")
        )
          try {
            wt.onPostCommitFiberRoot(xi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (lt.transition = t);
    }
  }
  return !1;
}
function Ru(e, t, n) {
  (t = lr(n, t)),
    (t = Vd(e, t, 1)),
    (e = Zt(e, t, 1)),
    (t = Me()),
    e !== null && (ul(e, 1, t), Ve(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) Ru(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ru(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (qt === null || !qt.has(r)))
        ) {
          (e = lr(n, e)),
            (e = Wd(t, e, 1)),
            (t = Zt(t, e, 1)),
            (e = Me()),
            t !== null && (ul(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function yp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (Pe & n) === n &&
      (xe === 4 || (xe === 3 && (Pe & 130023424) === Pe && 500 > me() - $s)
        ? gn(e, 0)
        : (qs |= n)),
    Ve(e, t);
}
function df(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Sl), (Sl <<= 1), !(Sl & 130023424) && (Sl = 4194304))
      : (t = 1));
  var n = Me();
  (e = Lt(e, t)), e !== null && (ul(e, t, n), Ve(e, n));
}
function xp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), df(e, n);
}
function wp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(b(314));
  }
  r !== null && r.delete(t), df(e, n);
}
var ff;
ff = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (_e = !1), sp(e, t, n);
      _e = !!(e.flags & 131072);
    }
  else (_e = !1), ae && t.flags & 1048576 && md(t, ii, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vl(e, t), (e = t.pendingProps);
      var l = er(t, De.current);
      Zn(t, n), (l = Ys(null, t, r, e, l, n));
      var a = Gs();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((a = !0), ri(t)) : (a = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Bs(t),
            (l.updater = Ei),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ja(t, r, e, n),
            (t = qa(null, t, r, !0, a, n)))
          : ((t.tag = 0), ae && a && zs(t), ze(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Np(r)),
          (e = ut(r, e)),
          l)
        ) {
          case 0:
            t = Za(null, t, r, e, n);
            break e;
          case 1:
            t = Su(null, t, r, e, n);
            break e;
          case 11:
            t = ju(null, t, r, e, n);
            break e;
          case 14:
            t = Nu(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(b(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        Za(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        Su(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Kd(t), e === null)) throw Error(b(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (l = a.element),
          yd(e, t),
          oi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (l = lr(Error(b(423)), t)), (t = ku(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = lr(Error(b(424)), t)), (t = ku(e, t, r, n, l));
            break e;
          } else
            for (
              Ke = Xt(t.stateNode.containerInfo.firstChild),
                Je = t,
                ae = !0,
                ft = null,
                n = Nd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tr(), r === l)) {
            t = It(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sd(t),
        e === null && Ya(t),
        (r = t.type),
        (l = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (s = l.children),
        Ba(r, l) ? (s = null) : a !== null && Ba(r, a) && (t.flags |= 32),
        Gd(e, t),
        ze(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ya(t), null;
    case 13:
      return Jd(e, t, n);
    case 4:
      return (
        Hs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nr(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        ju(e, t, r, l, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (a = t.memoizedProps),
          (s = l.value),
          te(ai, r._currentValue),
          (r._currentValue = s),
          a !== null)
        )
          if (pt(a.value, s)) {
            if (a.children === l.children && !Be.current) {
              t = It(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var o = a.dependencies;
              if (o !== null) {
                s = a.child;
                for (var u = o.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (a.tag === 1) {
                      (u = Ct(-1, n & -n)), (u.tag = 2);
                      var c = a.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (a.lanes |= n),
                      (u = a.alternate),
                      u !== null && (u.lanes |= n),
                      Ga(a.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10) s = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((s = a.return), s === null)) throw Error(b(341));
                (s.lanes |= n),
                  (o = s.alternate),
                  o !== null && (o.lanes |= n),
                  Ga(s, n, t),
                  (s = a.sibling);
              } else s = a.child;
              if (s !== null) s.return = a;
              else
                for (s = a; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((a = s.sibling), a !== null)) {
                    (a.return = s.return), (s = a);
                    break;
                  }
                  s = s.return;
                }
              a = s;
            }
        ze(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (l = it(l)),
        (r = r(l)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ut(r, t.pendingProps)),
        (l = ut(r.type, l)),
        Nu(e, t, r, l, n)
      );
    case 15:
      return Qd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        Vl(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), ri(t)) : (e = !1),
        Zn(t, n),
        wd(t, r, l),
        Ja(t, r, l, n),
        qa(null, t, r, !0, e, n)
      );
    case 19:
      return Xd(e, t, n);
    case 22:
      return Yd(e, t, n);
  }
  throw Error(b(156, t.tag));
};
function hf(e, t) {
  return Uc(e, t);
}
function jp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rt(e, t, n, r) {
  return new jp(e, t, n, r);
}
function ro(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Np(e) {
  if (typeof e == "function") return ro(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ns)) return 11;
    if (e === Ss) return 14;
  }
  return 2;
}
function en(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yl(e, t, n, r, l, a) {
  var s = 2;
  if (((r = e), typeof e == "function")) ro(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case zn:
        return yn(n.children, l, a, t);
      case js:
        (s = 8), (l |= 8);
        break;
      case xa:
        return (
          (e = rt(12, n, t, l | 2)), (e.elementType = xa), (e.lanes = a), e
        );
      case wa:
        return (e = rt(13, n, t, l)), (e.elementType = wa), (e.lanes = a), e;
      case ja:
        return (e = rt(19, n, t, l)), (e.elementType = ja), (e.lanes = a), e;
      case jc:
        return Ti(n, l, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case xc:
              s = 10;
              break e;
            case wc:
              s = 9;
              break e;
            case Ns:
              s = 11;
              break e;
            case Ss:
              s = 14;
              break e;
            case Bt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(s, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function yn(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function Ti(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = jc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fa(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function ha(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Sp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gi(0)),
    (this.expirationTimes = Gi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function lo(e, t, n, r, l, a, s, o, u) {
  return (
    (e = new Sp(e, t, n, o, u)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = rt(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bs(a),
    e
  );
}
function kp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function mf(e) {
  if (!e) return nn;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(b(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return fd(e, n, t);
  }
  return t;
}
function pf(e, t, n, r, l, a, s, o, u) {
  return (
    (e = lo(n, r, !0, e, l, a, s, o, u)),
    (e.context = mf(null)),
    (n = e.current),
    (r = Me()),
    (l = $t(n)),
    (a = Ct(r, l)),
    (a.callback = t ?? null),
    Zt(n, a, l),
    (e.current.lanes = l),
    ul(e, l, r),
    Ve(e, r),
    e
  );
}
function Li(e, t, n, r) {
  var l = t.current,
    a = Me(),
    s = $t(l);
  return (
    (n = mf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(a, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(l, t, s)),
    e !== null && (mt(e, l, s, a), _l(e, l, s)),
    s
  );
}
function vi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function io(e, t) {
  zu(e, t), (e = e.alternate) && zu(e, t);
}
function Ep() {
  return null;
}
var vf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ao(e) {
  this._internalRoot = e;
}
Ii.prototype.render = ao.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  Li(e, t, null, null);
};
Ii.prototype.unmount = ao.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sn(function () {
      Li(null, e, null, null);
    }),
      (t[Tt] = null);
  }
};
function Ii(e) {
  this._internalRoot = e;
}
Ii.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    Vt.splice(n, 0, e), n === 0 && Gc(e);
  }
};
function so(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Di(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mu() {}
function Cp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var c = vi(s);
        a.call(c);
      };
    }
    var s = pf(t, r, e, 0, null, !1, !1, "", Mu);
    return (
      (e._reactRootContainer = s),
      (e[Tt] = s.current),
      Xr(e.nodeType === 8 ? e.parentNode : e),
      Sn(),
      s
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var c = vi(u);
      o.call(c);
    };
  }
  var u = lo(e, 0, !1, null, null, !1, !1, "", Mu);
  return (
    (e._reactRootContainer = u),
    (e[Tt] = u.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    Sn(function () {
      Li(t, u, n, r);
    }),
    u
  );
}
function Ri(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var s = a;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var u = vi(s);
        o.call(u);
      };
    }
    Li(t, s, e, l);
  } else s = Cp(n, t, e, l, r);
  return vi(s);
}
Vc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes);
        n !== 0 &&
          (Cs(t, n | 1), Ve(t, me()), !(G & 6) && ((ir = me() + 500), an()));
      }
      break;
    case 13:
      Sn(function () {
        var r = Lt(e, 1);
        if (r !== null) {
          var l = Me();
          mt(r, e, 1, l);
        }
      }),
        io(e, 1);
  }
};
Ps = function (e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = Me();
      mt(t, e, 134217728, n);
    }
    io(e, 134217728);
  }
};
Wc = function (e) {
  if (e.tag === 13) {
    var t = $t(e),
      n = Lt(e, t);
    if (n !== null) {
      var r = Me();
      mt(n, e, t, r);
    }
    io(e, t);
  }
};
Qc = function () {
  return Z;
};
Yc = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
Ia = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ka(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Si(r);
            if (!l) throw Error(b(90));
            Sc(r), ka(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ec(e, n);
      break;
    case "select":
      (t = n.value), t != null && Gn(e, !!n.multiple, t, !1);
  }
};
Dc = eo;
Rc = Sn;
var Pp = { usingClientEntryPoint: !1, Events: [dl, Un, Si, Lc, Ic, eo] },
  Nr = {
    findFiberByHostInstance: fn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  bp = {
    bundleType: Nr.bundleType,
    version: Nr.version,
    rendererPackageName: Nr.rendererPackageName,
    rendererConfig: Nr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Oc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Nr.findFiberByHostInstance || Ep,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zl.isDisabled && zl.supportsFiber)
    try {
      (xi = zl.inject(bp)), (wt = zl);
    } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pp;
Ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!so(t)) throw Error(b(200));
  return kp(e, t, null, n);
};
Ze.createRoot = function (e, t) {
  if (!so(e)) throw Error(b(299));
  var n = !1,
    r = "",
    l = vf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = lo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Tt] = t.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    new ao(t)
  );
};
Ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(b(188))
      : ((e = Object.keys(e).join(",")), Error(b(268, e)));
  return (e = Oc(t)), (e = e === null ? null : e.stateNode), e;
};
Ze.flushSync = function (e) {
  return Sn(e);
};
Ze.hydrate = function (e, t, n) {
  if (!Di(t)) throw Error(b(200));
  return Ri(null, e, t, !0, n);
};
Ze.hydrateRoot = function (e, t, n) {
  if (!so(e)) throw Error(b(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    a = "",
    s = vf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = pf(t, null, e, 1, n ?? null, l, !1, a, s)),
    (e[Tt] = t.current),
    Xr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ii(t);
};
Ze.render = function (e, t, n) {
  if (!Di(t)) throw Error(b(200));
  return Ri(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function (e) {
  if (!Di(e)) throw Error(b(40));
  return e._reactRootContainer
    ? (Sn(function () {
        Ri(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tt] = null);
        });
      }),
      !0)
    : !1;
};
Ze.unstable_batchedUpdates = eo;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Di(n)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return Ri(e, t, n, !1, r);
};
Ze.version = "18.2.0-next-9e3b772b8-20220608";
function gf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gf);
    } catch (e) {
      console.error(e);
    }
}
gf(), (mc.exports = Ze);
var oo = mc.exports;
const Tp = rc(oo),
  Lp = nc({ __proto__: null, default: Tp }, [oo]);
var Ou = oo;
(ga.createRoot = Ou.createRoot), (ga.hydrateRoot = Ou.hydrateRoot);
const Ip = () =>
    i.jsx(i.Fragment, {
      children: i.jsx("div", {
        id: "spinner",
        className:
          "show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center",
        children: i.jsx("div", {
          className: "spinner-border spinner-status text-primary",
          role: "status",
          children: i.jsx("span", {
            className: "sr-only",
            children: "Loading...",
          }),
        }),
      }),
    }),
  yf = "/assets/logo-DsNi6uYz.png",
  Dp = "/assets/logo-CiUt0F2U.jpg";
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fe() {
  return (
    (fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fe.apply(this, arguments)
  );
}
var he;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(he || (he = {}));
const Fu = "popstate";
function Rp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: a, search: s, hash: o } = r.location;
    return il(
      "",
      { pathname: a, search: s, hash: o },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : kn(l);
  }
  return Mp(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ar(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zp() {
  return Math.random().toString(36).substr(2, 8);
}
function Uu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function il(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    fe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Rt(t) : t,
      { state: n, key: (t && t.key) || r || zp() }
    )
  );
}
function kn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Rt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Mp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: a = !1 } = r,
    s = l.history,
    o = he.Pop,
    u = null,
    c = d();
  c == null && ((c = 0), s.replaceState(fe({}, s.state, { idx: c }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function m() {
    o = he.Pop;
    let E = d(),
      h = E == null ? null : E - c;
    (c = E), u && u({ action: o, location: w.location, delta: h });
  }
  function v(E, h) {
    o = he.Push;
    let f = il(w.location, E, h);
    n && n(f, E), (c = d() + 1);
    let p = Uu(f, c),
      k = w.createHref(f);
    try {
      s.pushState(p, "", k);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      l.location.assign(k);
    }
    a && u && u({ action: o, location: w.location, delta: 1 });
  }
  function N(E, h) {
    o = he.Replace;
    let f = il(w.location, E, h);
    n && n(f, E), (c = d());
    let p = Uu(f, c),
      k = w.createHref(f);
    s.replaceState(p, "", k),
      a && u && u({ action: o, location: w.location, delta: 0 });
  }
  function j(E) {
    let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof E == "string" ? E : kn(E);
    return (
      (f = f.replace(/ $/, "%20")),
      W(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, h)
    );
  }
  let w = {
    get action() {
      return o;
    },
    get location() {
      return e(l, s);
    },
    listen(E) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Fu, m),
        (u = E),
        () => {
          l.removeEventListener(Fu, m), (u = null);
        }
      );
    },
    createHref(E) {
      return t(l, E);
    },
    createURL: j,
    encodeLocation(E) {
      let h = j(E);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: v,
    replace: N,
    go(E) {
      return s.go(E);
    },
  };
  return w;
}
var ce;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ce || (ce = {}));
const Op = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Fp(e) {
  return e.index === !0;
}
function cs(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, a) => {
      let s = [...n, a],
        o = typeof l.id == "string" ? l.id : s.join("-");
      if (
        (W(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        W(
          !r[o],
          'Found a route id collision on id "' +
            o +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Fp(l))
      ) {
        let u = fe({}, l, t(l), { id: o });
        return (r[o] = u), u;
      } else {
        let u = fe({}, l, t(l), { id: o, children: void 0 });
        return (
          (r[o] = u), l.children && (u.children = cs(l.children, t, s, r)), u
        );
      }
    })
  );
}
function Qn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Rt(t) : t,
    l = cr(r.pathname || "/", n);
  if (l == null) return null;
  let a = xf(e);
  Ap(a);
  let s = null;
  for (let o = 0; s == null && o < a.length; ++o) {
    let u = Zp(l);
    s = Kp(a[o], u);
  }
  return s;
}
function Up(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function xf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (a, s, o) => {
    let u = {
      relativePath: o === void 0 ? a.path || "" : o,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: s,
      route: a,
    };
    u.relativePath.startsWith("/") &&
      (W(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = Pt([r, u.relativePath]),
      d = n.concat(u);
    a.children &&
      a.children.length > 0 &&
      (W(
        a.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      xf(a.children, t, d, c)),
      !(a.path == null && !a.index) &&
        t.push({ path: c, score: Yp(c, a.index), routesMeta: d });
  };
  return (
    e.forEach((a, s) => {
      var o;
      if (a.path === "" || !((o = a.path) != null && o.includes("?"))) l(a, s);
      else for (let u of wf(a.path)) l(a, s, u);
    }),
    t
  );
}
function wf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [a, ""] : [a];
  let s = wf(r.join("/")),
    o = [];
  return (
    o.push(...s.map((u) => (u === "" ? a : [a, u].join("/")))),
    l && o.push(...s),
    o.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Ap(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Gp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const _p = /^:[\w-]+$/,
  Bp = 3,
  Hp = 2,
  Vp = 1,
  Wp = 10,
  Qp = -2,
  Au = (e) => e === "*";
function Yp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Au) && (r += Qp),
    t && (r += Hp),
    n
      .filter((l) => !Au(l))
      .reduce((l, a) => l + (_p.test(a) ? Bp : a === "" ? Vp : Wp), r)
  );
}
function Gp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Kp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    a = [];
  for (let s = 0; s < n.length; ++s) {
    let o = n[s],
      u = s === n.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      d = Jp(
        { path: o.relativePath, caseSensitive: o.caseSensitive, end: u },
        c
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let m = o.route;
    a.push({
      params: r,
      pathname: Pt([l, d.pathname]),
      pathnameBase: ev(Pt([l, d.pathnameBase])),
      route: m,
    }),
      d.pathnameBase !== "/" && (l = Pt([l, d.pathnameBase]));
  }
  return a;
}
function Jp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Xp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let a = l[0],
    s = a.replace(/(.)\/+$/, "$1"),
    o = l.slice(1);
  return {
    params: r.reduce((c, d, m) => {
      let { paramName: v, isOptional: N } = d;
      if (v === "*") {
        let w = o[m] || "";
        s = a.slice(0, a.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const j = o[m];
      return (
        N && !j ? (c[v] = void 0) : (c[v] = (j || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: a,
    pathnameBase: s,
    pattern: e,
  };
}
function Xp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ar(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, o, u) => (
            r.push({ paramName: o, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Zp(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ar(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function cr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function qp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Rt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : $p(n, t)) : t,
    search: tv(r),
    hash: nv(l),
  };
}
function $p(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ma(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function jf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function uo(e, t) {
  let n = jf(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function co(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Rt(e))
    : ((l = fe({}, e)),
      W(
        !l.pathname || !l.pathname.includes("?"),
        ma("?", "pathname", "search", l)
      ),
      W(
        !l.pathname || !l.pathname.includes("#"),
        ma("#", "pathname", "hash", l)
      ),
      W(!l.search || !l.search.includes("#"), ma("#", "search", "hash", l)));
  let a = e === "" || l.pathname === "",
    s = a ? "/" : l.pathname,
    o;
  if (s == null) o = n;
  else {
    let m = t.length - 1;
    if (!r && s.startsWith("..")) {
      let v = s.split("/");
      for (; v[0] === ".."; ) v.shift(), (m -= 1);
      l.pathname = v.join("/");
    }
    o = m >= 0 ? t[m] : "/";
  }
  let u = qp(l, o),
    c = s && s !== "/" && s.endsWith("/"),
    d = (a || s === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u;
}
const Pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  ev = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  tv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  nv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class fo {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Nf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Sf = ["post", "put", "patch", "delete"],
  rv = new Set(Sf),
  lv = ["get", ...Sf],
  iv = new Set(lv),
  av = new Set([301, 302, 303, 307, 308]),
  sv = new Set([307, 308]),
  pa = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ov = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Sr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  kf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  uv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Ef = "remix-router-transitions";
function cv(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  W(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    l = (x) => ({ hasErrorBoundary: y(x) });
  } else l = uv;
  let a = {},
    s = cs(e.routes, l, void 0, a),
    o,
    u = e.basename || "/",
    c = fe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    d = null,
    m = new Set(),
    v = null,
    N = null,
    j = null,
    w = e.hydrationData != null,
    E = Qn(s, e.history.location, u),
    h = null;
  if (E == null) {
    let y = et(404, { pathname: e.history.location.pathname }),
      { matches: x, route: S } = Gu(s);
    (E = x), (h = { [S.id]: y });
  }
  let f,
    p = E.some((y) => y.route.lazy),
    k = E.some((y) => y.route.loader);
  if (p) f = !1;
  else if (!k) f = !0;
  else if (c.v7_partialHydration) {
    let y = e.hydrationData ? e.hydrationData.loaderData : null,
      x = e.hydrationData ? e.hydrationData.errors : null,
      S = (T) =>
        T.route.loader
          ? T.route.loader.hydrate === !0
            ? !1
            : (y && y[T.route.id] !== void 0) || (x && x[T.route.id] !== void 0)
          : !0;
    if (x) {
      let T = E.findIndex((z) => x[z.route.id] !== void 0);
      f = E.slice(0, T + 1).every(S);
    } else f = E.every(S);
  } else f = e.hydrationData != null;
  let L,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: E,
      initialized: f,
      navigation: pa,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = he.Pop,
    I = !1,
    M,
    F = !1,
    K = new Map(),
    ge = null,
    pe = !1,
    $e = !1,
    bn = [],
    zt = [],
    ie = new Map(),
    D = 0,
    A = -1,
    B = new Map(),
    J = new Set(),
    ne = new Map(),
    vt = new Map(),
    ke = new Set(),
    st = new Map(),
    Re = new Map(),
    Mt = !1;
  function Hf() {
    if (
      ((d = e.history.listen((y) => {
        let { action: x, location: S, delta: T } = y;
        if (Mt) {
          Mt = !1;
          return;
        }
        ar(
          Re.size === 0 || T != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let z = Eo({
          currentLocation: g.location,
          nextLocation: S,
          historyAction: x,
        });
        if (z && T != null) {
          (Mt = !0),
            e.history.go(T * -1),
            pl(z, {
              state: "blocked",
              location: S,
              proceed() {
                pl(z, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: S,
                }),
                  e.history.go(T);
              },
              reset() {
                let V = new Map(g.blockers);
                V.set(z, Sr), We({ blockers: V });
              },
            });
          return;
        }
        return on(x, S);
      })),
      n)
    ) {
      jv(t, K);
      let y = () => Nv(t, K);
      t.addEventListener("pagehide", y),
        (ge = () => t.removeEventListener("pagehide", y));
    }
    return g.initialized || on(he.Pop, g.location, { initialHydration: !0 }), L;
  }
  function Vf() {
    d && d(),
      ge && ge(),
      m.clear(),
      M && M.abort(),
      g.fetchers.forEach((y, x) => ml(x)),
      g.blockers.forEach((y, x) => ko(x));
  }
  function Wf(y) {
    return m.add(y), () => m.delete(y);
  }
  function We(y, x) {
    x === void 0 && (x = {}), (g = fe({}, g, y));
    let S = [],
      T = [];
    c.v7_fetcherPersist &&
      g.fetchers.forEach((z, V) => {
        z.state === "idle" && (ke.has(V) ? T.push(V) : S.push(V));
      }),
      [...m].forEach((z) =>
        z(g, {
          deletedFetchers: T,
          unstable_viewTransitionOpts: x.viewTransitionOpts,
          unstable_flushSync: x.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist &&
        (S.forEach((z) => g.fetchers.delete(z)), T.forEach((z) => ml(z)));
  }
  function dr(y, x, S) {
    var T, z;
    let { flushSync: V } = S === void 0 ? {} : S,
      _ =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        dt(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((T = y.state) == null ? void 0 : T._isRedirect) !== !0,
      U;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (U = x.actionData)
        : (U = null)
      : _
      ? (U = g.actionData)
      : (U = null);
    let O = x.loaderData
        ? Yu(g.loaderData, x.loaderData, x.matches || [], x.errors)
        : g.loaderData,
      Y = g.blockers;
    Y.size > 0 && ((Y = new Map(Y)), Y.forEach((ee, Ee) => Y.set(Ee, Sr)));
    let we =
      I === !0 ||
      (g.navigation.formMethod != null &&
        dt(g.navigation.formMethod) &&
        ((z = y.state) == null ? void 0 : z._isRedirect) !== !0);
    o && ((s = o), (o = void 0)),
      pe ||
        C === he.Pop ||
        (C === he.Push
          ? e.history.push(y, y.state)
          : C === he.Replace && e.history.replace(y, y.state));
    let H;
    if (C === he.Pop) {
      let ee = K.get(g.location.pathname);
      ee && ee.has(y.pathname)
        ? (H = { currentLocation: g.location, nextLocation: y })
        : K.has(y.pathname) &&
          (H = { currentLocation: y, nextLocation: g.location });
    } else if (F) {
      let ee = K.get(g.location.pathname);
      ee
        ? ee.add(y.pathname)
        : ((ee = new Set([y.pathname])), K.set(g.location.pathname, ee)),
        (H = { currentLocation: g.location, nextLocation: y });
    }
    We(
      fe({}, x, {
        actionData: U,
        loaderData: O,
        historyAction: C,
        location: y,
        initialized: !0,
        navigation: pa,
        revalidation: "idle",
        restoreScrollPosition: Po(y, x.matches || g.matches),
        preventScrollReset: we,
        blockers: Y,
      }),
      { viewTransitionOpts: H, flushSync: V === !0 }
    ),
      (C = he.Pop),
      (I = !1),
      (F = !1),
      (pe = !1),
      ($e = !1),
      (bn = []),
      (zt = []);
  }
  async function yo(y, x) {
    if (typeof y == "number") {
      e.history.go(y);
      return;
    }
    let S = ds(
        g.location,
        g.matches,
        u,
        c.v7_prependBasename,
        y,
        c.v7_relativeSplatPath,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative
      ),
      {
        path: T,
        submission: z,
        error: V,
      } = _u(c.v7_normalizeFormMethod, !1, S, x),
      _ = g.location,
      U = il(g.location, T, x && x.state);
    U = fe({}, U, e.history.encodeLocation(U));
    let O = x && x.replace != null ? x.replace : void 0,
      Y = he.Push;
    O === !0
      ? (Y = he.Replace)
      : O === !1 ||
        (z != null &&
          dt(z.formMethod) &&
          z.formAction === g.location.pathname + g.location.search &&
          (Y = he.Replace));
    let we =
        x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
      H = (x && x.unstable_flushSync) === !0,
      ee = Eo({ currentLocation: _, nextLocation: U, historyAction: Y });
    if (ee) {
      pl(ee, {
        state: "blocked",
        location: U,
        proceed() {
          pl(ee, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            yo(y, x);
        },
        reset() {
          let Ee = new Map(g.blockers);
          Ee.set(ee, Sr), We({ blockers: Ee });
        },
      });
      return;
    }
    return await on(Y, U, {
      submission: z,
      pendingError: V,
      preventScrollReset: we,
      replace: x && x.replace,
      enableViewTransition: x && x.unstable_viewTransition,
      flushSync: H,
    });
  }
  function Qf() {
    if (
      (Fi(),
      We({ revalidation: "loading" }),
      g.navigation.state !== "submitting")
    ) {
      if (g.navigation.state === "idle") {
        on(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      on(C || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
      });
    }
  }
  async function on(y, x, S) {
    M && M.abort(),
      (M = null),
      (C = y),
      (pe = (S && S.startUninterruptedRevalidation) === !0),
      eh(g.location, g.matches),
      (I = (S && S.preventScrollReset) === !0),
      (F = (S && S.enableViewTransition) === !0);
    let T = o || s,
      z = S && S.overrideNavigation,
      V = Qn(T, x, u),
      _ = (S && S.flushSync) === !0;
    if (!V) {
      let Ee = et(404, { pathname: x.pathname }),
        { matches: Qe, route: je } = Gu(T);
      Ui(),
        dr(
          x,
          { matches: Qe, loaderData: {}, errors: { [je.id]: Ee } },
          { flushSync: _ }
        );
      return;
    }
    if (
      g.initialized &&
      !$e &&
      pv(g.location, x) &&
      !(S && S.submission && dt(S.submission.formMethod))
    ) {
      dr(x, { matches: V }, { flushSync: _ });
      return;
    }
    M = new AbortController();
    let U = Er(e.history, x, M.signal, S && S.submission),
      O,
      Y;
    if (S && S.pendingError) Y = { [Br(V).route.id]: S.pendingError };
    else if (S && S.submission && dt(S.submission.formMethod)) {
      let Ee = await Yf(U, x, S.submission, V, {
        replace: S.replace,
        flushSync: _,
      });
      if (Ee.shortCircuited) return;
      (O = Ee.pendingActionData),
        (Y = Ee.pendingActionError),
        (z = va(x, S.submission)),
        (_ = !1),
        (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: we,
      loaderData: H,
      errors: ee,
    } = await Gf(
      U,
      x,
      V,
      z,
      S && S.submission,
      S && S.fetcherSubmission,
      S && S.replace,
      S && S.initialHydration === !0,
      _,
      O,
      Y
    );
    we ||
      ((M = null),
      dr(
        x,
        fe({ matches: V }, O ? { actionData: O } : {}, {
          loaderData: H,
          errors: ee,
        })
      ));
  }
  async function Yf(y, x, S, T, z) {
    z === void 0 && (z = {}), Fi();
    let V = xv(x, S);
    We({ navigation: V }, { flushSync: z.flushSync === !0 });
    let _,
      U = hs(T, x);
    if (!U.route.action && !U.route.lazy)
      _ = {
        type: ce.error,
        error: et(405, {
          method: y.method,
          pathname: x.pathname,
          routeId: U.route.id,
        }),
      };
    else if (
      ((_ = await kr("action", y, U, T, a, l, u, c.v7_relativeSplatPath)),
      y.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (vn(_)) {
      let O;
      return (
        z && z.replace != null
          ? (O = z.replace)
          : (O = _.location === g.location.pathname + g.location.search),
        await fr(g, _, { submission: S, replace: O }),
        { shortCircuited: !0 }
      );
    }
    if (Yn(_)) {
      let O = Br(T, U.route.id);
      return (
        (z && z.replace) !== !0 && (C = he.Push),
        { pendingActionData: {}, pendingActionError: { [O.route.id]: _.error } }
      );
    }
    if (pn(_)) throw et(400, { type: "defer-action" });
    return { pendingActionData: { [U.route.id]: _.data } };
  }
  async function Gf(y, x, S, T, z, V, _, U, O, Y, we) {
    let H = T || va(x, z),
      ee = z || V || Xu(H),
      Ee = o || s,
      [Qe, je] = Bu(
        e.history,
        g,
        S,
        ee,
        x,
        c.v7_partialHydration && U === !0,
        $e,
        bn,
        zt,
        ke,
        ne,
        J,
        Ee,
        u,
        Y,
        we
      );
    if (
      (Ui(
        (X) =>
          !(S && S.some((q) => q.route.id === X)) ||
          (Qe && Qe.some((q) => q.route.id === X))
      ),
      (A = ++D),
      Qe.length === 0 && je.length === 0)
    ) {
      let X = No();
      return (
        dr(
          x,
          fe(
            { matches: S, loaderData: {}, errors: we || null },
            Y ? { actionData: Y } : {},
            X ? { fetchers: new Map(g.fetchers) } : {}
          ),
          { flushSync: O }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!pe && (!c.v7_partialHydration || !U)) {
      je.forEach((q) => {
        let Ue = g.fetchers.get(q.key),
          gl = Cr(void 0, Ue ? Ue.data : void 0);
        g.fetchers.set(q.key, gl);
      });
      let X = Y || g.actionData;
      We(
        fe(
          { navigation: H },
          X
            ? Object.keys(X).length === 0
              ? { actionData: null }
              : { actionData: X }
            : {},
          je.length > 0 ? { fetchers: new Map(g.fetchers) } : {}
        ),
        { flushSync: O }
      );
    }
    je.forEach((X) => {
      ie.has(X.key) && Ft(X.key), X.controller && ie.set(X.key, X.controller);
    });
    let Tn = () => je.forEach((X) => Ft(X.key));
    M && M.signal.addEventListener("abort", Tn);
    let {
      results: Ai,
      loaderResults: Ln,
      fetcherResults: Ut,
    } = await xo(g.matches, S, Qe, je, y);
    if (y.signal.aborted) return { shortCircuited: !0 };
    M && M.signal.removeEventListener("abort", Tn),
      je.forEach((X) => ie.delete(X.key));
    let un = Ku(Ai);
    if (un) {
      if (un.idx >= Qe.length) {
        let X = je[un.idx - Qe.length].key;
        J.add(X);
      }
      return await fr(g, un.result, { replace: _ }), { shortCircuited: !0 };
    }
    let { loaderData: _i, errors: mr } = Qu(g, S, Qe, Ln, we, je, Ut, st);
    st.forEach((X, q) => {
      X.subscribe((Ue) => {
        (Ue || X.done) && st.delete(q);
      });
    }),
      c.v7_partialHydration &&
        U &&
        g.errors &&
        Object.entries(g.errors)
          .filter((X) => {
            let [q] = X;
            return !Qe.some((Ue) => Ue.route.id === q);
          })
          .forEach((X) => {
            let [q, Ue] = X;
            mr = Object.assign(mr || {}, { [q]: Ue });
          });
    let Bi = No(),
      In = So(A),
      vl = Bi || In || je.length > 0;
    return fe(
      { loaderData: _i, errors: mr },
      vl ? { fetchers: new Map(g.fetchers) } : {}
    );
  }
  function Kf(y, x, S, T) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ie.has(y) && Ft(y);
    let z = (T && T.unstable_flushSync) === !0,
      V = o || s,
      _ = ds(
        g.location,
        g.matches,
        u,
        c.v7_prependBasename,
        S,
        c.v7_relativeSplatPath,
        x,
        T == null ? void 0 : T.relative
      ),
      U = Qn(V, _, u);
    if (!U) {
      hr(y, x, et(404, { pathname: _ }), { flushSync: z });
      return;
    }
    let {
      path: O,
      submission: Y,
      error: we,
    } = _u(c.v7_normalizeFormMethod, !0, _, T);
    if (we) {
      hr(y, x, we, { flushSync: z });
      return;
    }
    let H = hs(U, O);
    if (((I = (T && T.preventScrollReset) === !0), Y && dt(Y.formMethod))) {
      Jf(y, x, O, H, U, z, Y);
      return;
    }
    ne.set(y, { routeId: x, path: O }), Xf(y, x, O, H, U, z, Y);
  }
  async function Jf(y, x, S, T, z, V, _) {
    if ((Fi(), ne.delete(y), !T.route.action && !T.route.lazy)) {
      let q = et(405, { method: _.formMethod, pathname: S, routeId: x });
      hr(y, x, q, { flushSync: V });
      return;
    }
    let U = g.fetchers.get(y);
    Ot(y, wv(_, U), { flushSync: V });
    let O = new AbortController(),
      Y = Er(e.history, S, O.signal, _);
    ie.set(y, O);
    let we = D,
      H = await kr("action", Y, T, z, a, l, u, c.v7_relativeSplatPath);
    if (Y.signal.aborted) {
      ie.get(y) === O && ie.delete(y);
      return;
    }
    if (c.v7_fetcherPersist && ke.has(y)) {
      if (vn(H) || Yn(H)) {
        Ot(y, _t(void 0));
        return;
      }
    } else {
      if (vn(H))
        if ((ie.delete(y), A > we)) {
          Ot(y, _t(void 0));
          return;
        } else
          return J.add(y), Ot(y, Cr(_)), fr(g, H, { fetcherSubmission: _ });
      if (Yn(H)) {
        hr(y, x, H.error);
        return;
      }
    }
    if (pn(H)) throw et(400, { type: "defer-action" });
    let ee = g.navigation.location || g.location,
      Ee = Er(e.history, ee, O.signal),
      Qe = o || s,
      je =
        g.navigation.state !== "idle"
          ? Qn(Qe, g.navigation.location, u)
          : g.matches;
    W(je, "Didn't find any matches after fetcher action");
    let Tn = ++D;
    B.set(y, Tn);
    let Ai = Cr(_, H.data);
    g.fetchers.set(y, Ai);
    let [Ln, Ut] = Bu(
      e.history,
      g,
      je,
      _,
      ee,
      !1,
      $e,
      bn,
      zt,
      ke,
      ne,
      J,
      Qe,
      u,
      { [T.route.id]: H.data },
      void 0
    );
    Ut.filter((q) => q.key !== y).forEach((q) => {
      let Ue = q.key,
        gl = g.fetchers.get(Ue),
        nh = Cr(void 0, gl ? gl.data : void 0);
      g.fetchers.set(Ue, nh),
        ie.has(Ue) && Ft(Ue),
        q.controller && ie.set(Ue, q.controller);
    }),
      We({ fetchers: new Map(g.fetchers) });
    let un = () => Ut.forEach((q) => Ft(q.key));
    O.signal.addEventListener("abort", un);
    let {
      results: _i,
      loaderResults: mr,
      fetcherResults: Bi,
    } = await xo(g.matches, je, Ln, Ut, Ee);
    if (O.signal.aborted) return;
    O.signal.removeEventListener("abort", un),
      B.delete(y),
      ie.delete(y),
      Ut.forEach((q) => ie.delete(q.key));
    let In = Ku(_i);
    if (In) {
      if (In.idx >= Ln.length) {
        let q = Ut[In.idx - Ln.length].key;
        J.add(q);
      }
      return fr(g, In.result);
    }
    let { loaderData: vl, errors: X } = Qu(
      g,
      g.matches,
      Ln,
      mr,
      void 0,
      Ut,
      Bi,
      st
    );
    if (g.fetchers.has(y)) {
      let q = _t(H.data);
      g.fetchers.set(y, q);
    }
    So(Tn),
      g.navigation.state === "loading" && Tn > A
        ? (W(C, "Expected pending action"),
          M && M.abort(),
          dr(g.navigation.location, {
            matches: je,
            loaderData: vl,
            errors: X,
            fetchers: new Map(g.fetchers),
          }))
        : (We({
            errors: X,
            loaderData: Yu(g.loaderData, vl, je, X),
            fetchers: new Map(g.fetchers),
          }),
          ($e = !1));
  }
  async function Xf(y, x, S, T, z, V, _) {
    let U = g.fetchers.get(y);
    Ot(y, Cr(_, U ? U.data : void 0), { flushSync: V });
    let O = new AbortController(),
      Y = Er(e.history, S, O.signal);
    ie.set(y, O);
    let we = D,
      H = await kr("loader", Y, T, z, a, l, u, c.v7_relativeSplatPath);
    if (
      (pn(H) && (H = (await bf(H, Y.signal, !0)) || H),
      ie.get(y) === O && ie.delete(y),
      !Y.signal.aborted)
    ) {
      if (ke.has(y)) {
        Ot(y, _t(void 0));
        return;
      }
      if (vn(H))
        if (A > we) {
          Ot(y, _t(void 0));
          return;
        } else {
          J.add(y), await fr(g, H);
          return;
        }
      if (Yn(H)) {
        hr(y, x, H.error);
        return;
      }
      W(!pn(H), "Unhandled fetcher deferred data"), Ot(y, _t(H.data));
    }
  }
  async function fr(y, x, S) {
    let {
      submission: T,
      fetcherSubmission: z,
      replace: V,
    } = S === void 0 ? {} : S;
    x.revalidate && ($e = !0);
    let _ = il(y.location, x.location, { _isRedirect: !0 });
    if ((W(_, "Expected a location on the redirect navigation"), n)) {
      let ee = !1;
      if (x.reloadDocument) ee = !0;
      else if (kf.test(x.location)) {
        const Ee = e.history.createURL(x.location);
        ee = Ee.origin !== t.location.origin || cr(Ee.pathname, u) == null;
      }
      if (ee) {
        V ? t.location.replace(x.location) : t.location.assign(x.location);
        return;
      }
    }
    M = null;
    let U = V === !0 ? he.Replace : he.Push,
      { formMethod: O, formAction: Y, formEncType: we } = y.navigation;
    !T && !z && O && Y && we && (T = Xu(y.navigation));
    let H = T || z;
    if (sv.has(x.status) && H && dt(H.formMethod))
      await on(U, _, {
        submission: fe({}, H, { formAction: x.location }),
        preventScrollReset: I,
      });
    else {
      let ee = va(_, T);
      await on(U, _, {
        overrideNavigation: ee,
        fetcherSubmission: z,
        preventScrollReset: I,
      });
    }
  }
  async function xo(y, x, S, T, z) {
    let V = await Promise.all([
        ...S.map((O) => kr("loader", z, O, x, a, l, u, c.v7_relativeSplatPath)),
        ...T.map((O) =>
          O.matches && O.match && O.controller
            ? kr(
                "loader",
                Er(e.history, O.path, O.controller.signal),
                O.match,
                O.matches,
                a,
                l,
                u,
                c.v7_relativeSplatPath
              )
            : { type: ce.error, error: et(404, { pathname: O.path }) }
        ),
      ]),
      _ = V.slice(0, S.length),
      U = V.slice(S.length);
    return (
      await Promise.all([
        Ju(
          y,
          S,
          _,
          _.map(() => z.signal),
          !1,
          g.loaderData
        ),
        Ju(
          y,
          T.map((O) => O.match),
          U,
          T.map((O) => (O.controller ? O.controller.signal : null)),
          !0
        ),
      ]),
      { results: V, loaderResults: _, fetcherResults: U }
    );
  }
  function Fi() {
    ($e = !0),
      bn.push(...Ui()),
      ne.forEach((y, x) => {
        ie.has(x) && (zt.push(x), Ft(x));
      });
  }
  function Ot(y, x, S) {
    S === void 0 && (S = {}),
      g.fetchers.set(y, x),
      We(
        { fetchers: new Map(g.fetchers) },
        { flushSync: (S && S.flushSync) === !0 }
      );
  }
  function hr(y, x, S, T) {
    T === void 0 && (T = {});
    let z = Br(g.matches, x);
    ml(y),
      We(
        { errors: { [z.route.id]: S }, fetchers: new Map(g.fetchers) },
        { flushSync: (T && T.flushSync) === !0 }
      );
  }
  function wo(y) {
    return (
      c.v7_fetcherPersist &&
        (vt.set(y, (vt.get(y) || 0) + 1), ke.has(y) && ke.delete(y)),
      g.fetchers.get(y) || ov
    );
  }
  function ml(y) {
    let x = g.fetchers.get(y);
    ie.has(y) && !(x && x.state === "loading" && B.has(y)) && Ft(y),
      ne.delete(y),
      B.delete(y),
      J.delete(y),
      ke.delete(y),
      g.fetchers.delete(y);
  }
  function Zf(y) {
    if (c.v7_fetcherPersist) {
      let x = (vt.get(y) || 0) - 1;
      x <= 0 ? (vt.delete(y), ke.add(y)) : vt.set(y, x);
    } else ml(y);
    We({ fetchers: new Map(g.fetchers) });
  }
  function Ft(y) {
    let x = ie.get(y);
    W(x, "Expected fetch controller: " + y), x.abort(), ie.delete(y);
  }
  function jo(y) {
    for (let x of y) {
      let S = wo(x),
        T = _t(S.data);
      g.fetchers.set(x, T);
    }
  }
  function No() {
    let y = [],
      x = !1;
    for (let S of J) {
      let T = g.fetchers.get(S);
      W(T, "Expected fetcher: " + S),
        T.state === "loading" && (J.delete(S), y.push(S), (x = !0));
    }
    return jo(y), x;
  }
  function So(y) {
    let x = [];
    for (let [S, T] of B)
      if (T < y) {
        let z = g.fetchers.get(S);
        W(z, "Expected fetcher: " + S),
          z.state === "loading" && (Ft(S), B.delete(S), x.push(S));
      }
    return jo(x), x.length > 0;
  }
  function qf(y, x) {
    let S = g.blockers.get(y) || Sr;
    return Re.get(y) !== x && Re.set(y, x), S;
  }
  function ko(y) {
    g.blockers.delete(y), Re.delete(y);
  }
  function pl(y, x) {
    let S = g.blockers.get(y) || Sr;
    W(
      (S.state === "unblocked" && x.state === "blocked") ||
        (S.state === "blocked" && x.state === "blocked") ||
        (S.state === "blocked" && x.state === "proceeding") ||
        (S.state === "blocked" && x.state === "unblocked") ||
        (S.state === "proceeding" && x.state === "unblocked"),
      "Invalid blocker state transition: " + S.state + " -> " + x.state
    );
    let T = new Map(g.blockers);
    T.set(y, x), We({ blockers: T });
  }
  function Eo(y) {
    let { currentLocation: x, nextLocation: S, historyAction: T } = y;
    if (Re.size === 0) return;
    Re.size > 1 && ar(!1, "A router only supports one blocker at a time");
    let z = Array.from(Re.entries()),
      [V, _] = z[z.length - 1],
      U = g.blockers.get(V);
    if (
      !(U && U.state === "proceeding") &&
      _({ currentLocation: x, nextLocation: S, historyAction: T })
    )
      return V;
  }
  function Ui(y) {
    let x = [];
    return (
      st.forEach((S, T) => {
        (!y || y(T)) && (S.cancel(), x.push(T), st.delete(T));
      }),
      x
    );
  }
  function $f(y, x, S) {
    if (((v = y), (j = x), (N = S || null), !w && g.navigation === pa)) {
      w = !0;
      let T = Po(g.location, g.matches);
      T != null && We({ restoreScrollPosition: T });
    }
    return () => {
      (v = null), (j = null), (N = null);
    };
  }
  function Co(y, x) {
    return (
      (N &&
        N(
          y,
          x.map((T) => Up(T, g.loaderData))
        )) ||
      y.key
    );
  }
  function eh(y, x) {
    if (v && j) {
      let S = Co(y, x);
      v[S] = j();
    }
  }
  function Po(y, x) {
    if (v) {
      let S = Co(y, x),
        T = v[S];
      if (typeof T == "number") return T;
    }
    return null;
  }
  function th(y) {
    (a = {}), (o = cs(y, l, void 0, a));
  }
  return (
    (L = {
      get basename() {
        return u;
      },
      get future() {
        return c;
      },
      get state() {
        return g;
      },
      get routes() {
        return s;
      },
      get window() {
        return t;
      },
      initialize: Hf,
      subscribe: Wf,
      enableScrollRestoration: $f,
      navigate: yo,
      fetch: Kf,
      revalidate: Qf,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: wo,
      deleteFetcher: Zf,
      dispose: Vf,
      getBlocker: qf,
      deleteBlocker: ko,
      _internalFetchControllers: ie,
      _internalActiveDeferreds: st,
      _internalSetRoutes: th,
    }),
    L
  );
}
function dv(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function ds(e, t, n, r, l, a, s, o) {
  let u, c;
  if (s) {
    u = [];
    for (let m of t)
      if ((u.push(m), m.route.id === s)) {
        c = m;
        break;
      }
  } else (u = t), (c = t[t.length - 1]);
  let d = co(l || ".", uo(u, a), cr(e.pathname, n) || e.pathname, o === "path");
  return (
    l == null && ((d.search = e.search), (d.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      c &&
      c.route.index &&
      !ho(d.search) &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (d.pathname = d.pathname === "/" ? n : Pt([n, d.pathname])),
    kn(d)
  );
}
function _u(e, t, n, r) {
  if (!r || !dv(r)) return { path: n };
  if (r.formMethod && !yv(r.formMethod))
    return { path: n, error: et(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: et(400, { type: "invalid-body" }) }),
    a = r.formMethod || "get",
    s = e ? a.toUpperCase() : a.toLowerCase(),
    o = Pf(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!dt(s)) return l();
      let v =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((N, j) => {
              let [w, E] = j;
              return (
                "" +
                N +
                w +
                "=" +
                E +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: s,
          formAction: o,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: v,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!dt(s)) return l();
      try {
        let v = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: s,
            formAction: o,
            formEncType: r.formEncType,
            formData: void 0,
            json: v,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  W(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, c;
  if (r.formData) (u = fs(r.formData)), (c = r.formData);
  else if (r.body instanceof FormData) (u = fs(r.body)), (c = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (c = Wu(u));
  else if (r.body == null) (u = new URLSearchParams()), (c = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (c = Wu(u));
    } catch {
      return l();
    }
  let d = {
    formMethod: s,
    formAction: o,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (dt(d.formMethod)) return { path: n, submission: d };
  let m = Rt(n);
  return (
    t && m.search && ho(m.search) && u.append("index", ""),
    (m.search = "?" + u),
    { path: kn(m), submission: d }
  );
}
function fv(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Bu(e, t, n, r, l, a, s, o, u, c, d, m, v, N, j, w) {
  let E = w ? Object.values(w)[0] : j ? Object.values(j)[0] : void 0,
    h = e.createURL(t.location),
    f = e.createURL(l),
    p = w ? Object.keys(w)[0] : void 0,
    L = fv(n, p).filter((C, I) => {
      let { route: M } = C;
      if (M.lazy) return !0;
      if (M.loader == null) return !1;
      if (a)
        return M.loader.hydrate
          ? !0
          : t.loaderData[M.id] === void 0 &&
              (!t.errors || t.errors[M.id] === void 0);
      if (
        hv(t.loaderData, t.matches[I], C) ||
        o.some((ge) => ge === C.route.id)
      )
        return !0;
      let F = t.matches[I],
        K = C;
      return Hu(
        C,
        fe(
          {
            currentUrl: h,
            currentParams: F.params,
            nextUrl: f,
            nextParams: K.params,
          },
          r,
          {
            actionResult: E,
            defaultShouldRevalidate:
              s ||
              h.pathname + h.search === f.pathname + f.search ||
              h.search !== f.search ||
              Cf(F, K),
          }
        )
      );
    }),
    g = [];
  return (
    d.forEach((C, I) => {
      if (a || !n.some((pe) => pe.route.id === C.routeId) || c.has(I)) return;
      let M = Qn(v, C.path, N);
      if (!M) {
        g.push({
          key: I,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let F = t.fetchers.get(I),
        K = hs(M, C.path),
        ge = !1;
      m.has(I)
        ? (ge = !1)
        : u.includes(I)
        ? (ge = !0)
        : F && F.state !== "idle" && F.data === void 0
        ? (ge = s)
        : (ge = Hu(
            K,
            fe(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: f,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: E, defaultShouldRevalidate: s }
            )
          )),
        ge &&
          g.push({
            key: I,
            routeId: C.routeId,
            path: C.path,
            matches: M,
            match: K,
            controller: new AbortController(),
          });
    }),
    [L, g]
  );
}
function hv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Cf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Hu(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Vu(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  W(l, "No route found in manifest");
  let a = {};
  for (let s in r) {
    let u = l[s] !== void 0 && s !== "hasErrorBoundary";
    ar(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.')
    ),
      !u && !Op.has(s) && (a[s] = r[s]);
  }
  Object.assign(l, a), Object.assign(l, fe({}, t(l), { lazy: void 0 }));
}
async function kr(e, t, n, r, l, a, s, o, u) {
  u === void 0 && (u = {});
  let c,
    d,
    m,
    v = (w) => {
      let E,
        h = new Promise((f, p) => (E = p));
      return (
        (m = () => E()),
        t.signal.addEventListener("abort", m),
        Promise.race([
          w({ request: t, params: n.params, context: u.requestContext }),
          h,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) {
        let E,
          h = await Promise.all([
            v(w).catch((f) => {
              E = f;
            }),
            Vu(n.route, a, l),
          ]);
        if (E) throw E;
        d = h[0];
      } else if ((await Vu(n.route, a, l), (w = n.route[e]), w)) d = await v(w);
      else if (e === "action") {
        let E = new URL(t.url),
          h = E.pathname + E.search;
        throw et(405, { method: t.method, pathname: h, routeId: n.route.id });
      } else return { type: ce.data, data: void 0 };
    else if (w) d = await v(w);
    else {
      let E = new URL(t.url),
        h = E.pathname + E.search;
      throw et(404, { pathname: h });
    }
    W(
      d !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (w) {
    (c = ce.error), (d = w);
  } finally {
    m && t.signal.removeEventListener("abort", m);
  }
  if (gv(d)) {
    let w = d.status;
    if (av.has(w)) {
      let h = d.headers.get("Location");
      if (
        (W(
          h,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !kf.test(h))
      )
        h = ds(new URL(t.url), r.slice(0, r.indexOf(n) + 1), s, !0, h, o);
      else if (!u.isStaticRequest) {
        let f = new URL(t.url),
          p = h.startsWith("//") ? new URL(f.protocol + h) : new URL(h),
          k = cr(p.pathname, s) != null;
        p.origin === f.origin && k && (h = p.pathname + p.search + p.hash);
      }
      if (u.isStaticRequest) throw (d.headers.set("Location", h), d);
      return {
        type: ce.redirect,
        status: w,
        location: h,
        revalidate: d.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: d.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: c === ce.error ? ce.error : ce.data, response: d };
    let E;
    try {
      let h = d.headers.get("Content-Type");
      h && /\bapplication\/json\b/.test(h)
        ? d.body == null
          ? (E = null)
          : (E = await d.json())
        : (E = await d.text());
    } catch (h) {
      return { type: ce.error, error: h };
    }
    return c === ce.error
      ? { type: c, error: new fo(w, d.statusText, E), headers: d.headers }
      : { type: ce.data, data: E, statusCode: d.status, headers: d.headers };
  }
  if (c === ce.error) return { type: c, error: d };
  if (vv(d)) {
    var N, j;
    return {
      type: ce.deferred,
      deferredData: d,
      statusCode: (N = d.init) == null ? void 0 : N.status,
      headers:
        ((j = d.init) == null ? void 0 : j.headers) &&
        new Headers(d.init.headers),
    };
  }
  return { type: ce.data, data: d };
}
function Er(e, t, n, r) {
  let l = e.createURL(Pf(t)).toString(),
    a = { signal: n };
  if (r && dt(r.formMethod)) {
    let { formMethod: s, formEncType: o } = r;
    (a.method = s.toUpperCase()),
      o === "application/json"
        ? ((a.headers = new Headers({ "Content-Type": o })),
          (a.body = JSON.stringify(r.json)))
        : o === "text/plain"
        ? (a.body = r.text)
        : o === "application/x-www-form-urlencoded" && r.formData
        ? (a.body = fs(r.formData))
        : (a.body = r.formData);
  }
  return new Request(l, a);
}
function fs(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Wu(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function mv(e, t, n, r, l) {
  let a = {},
    s = null,
    o,
    u = !1,
    c = {};
  return (
    n.forEach((d, m) => {
      let v = t[m].route.id;
      if (
        (W(!vn(d), "Cannot handle redirect results in processLoaderData"),
        Yn(d))
      ) {
        let N = Br(e, v),
          j = d.error;
        r && ((j = Object.values(r)[0]), (r = void 0)),
          (s = s || {}),
          s[N.route.id] == null && (s[N.route.id] = j),
          (a[v] = void 0),
          u || ((u = !0), (o = Nf(d.error) ? d.error.status : 500)),
          d.headers && (c[v] = d.headers);
      } else
        pn(d)
          ? (l.set(v, d.deferredData), (a[v] = d.deferredData.data))
          : (a[v] = d.data),
          d.statusCode != null &&
            d.statusCode !== 200 &&
            !u &&
            (o = d.statusCode),
          d.headers && (c[v] = d.headers);
    }),
    r && ((s = r), (a[Object.keys(r)[0]] = void 0)),
    { loaderData: a, errors: s, statusCode: o || 200, loaderHeaders: c }
  );
}
function Qu(e, t, n, r, l, a, s, o) {
  let { loaderData: u, errors: c } = mv(t, n, r, l, o);
  for (let d = 0; d < a.length; d++) {
    let { key: m, match: v, controller: N } = a[d];
    W(
      s !== void 0 && s[d] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let j = s[d];
    if (!(N && N.signal.aborted))
      if (Yn(j)) {
        let w = Br(e.matches, v == null ? void 0 : v.route.id);
        (c && c[w.route.id]) || (c = fe({}, c, { [w.route.id]: j.error })),
          e.fetchers.delete(m);
      } else if (vn(j)) W(!1, "Unhandled fetcher revalidation redirect");
      else if (pn(j)) W(!1, "Unhandled fetcher deferred data");
      else {
        let w = _t(j.data);
        e.fetchers.set(m, w);
      }
  }
  return { loaderData: u, errors: c };
}
function Yu(e, t, n, r) {
  let l = fe({}, t);
  for (let a of n) {
    let s = a.route.id;
    if (
      (t.hasOwnProperty(s)
        ? t[s] !== void 0 && (l[s] = t[s])
        : e[s] !== void 0 && a.route.loader && (l[s] = e[s]),
      r && r.hasOwnProperty(s))
    )
      break;
  }
  return l;
}
function Br(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Gu(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function et(e, t) {
  let { pathname: n, routeId: r, method: l, type: a } = t === void 0 ? {} : t,
    s = "Unknown Server Error",
    o = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((s = "Bad Request"),
        l && n && r
          ? (o =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : a === "defer-action"
          ? (o = "defer() is not supported in actions")
          : a === "invalid-body" && (o = "Unable to encode submission body"))
      : e === 403
      ? ((s = "Forbidden"),
        (o = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((s = "Not Found"), (o = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((s = "Method Not Allowed"),
        l && n && r
          ? (o =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (o = 'Invalid request method "' + l.toUpperCase() + '"')),
    new fo(e || 500, s, new Error(o), !0)
  );
}
function Ku(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (vn(n)) return { result: n, idx: t };
  }
}
function Pf(e) {
  let t = typeof e == "string" ? Rt(e) : e;
  return kn(fe({}, t, { hash: "" }));
}
function pv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function pn(e) {
  return e.type === ce.deferred;
}
function Yn(e) {
  return e.type === ce.error;
}
function vn(e) {
  return (e && e.type) === ce.redirect;
}
function vv(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function gv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function yv(e) {
  return iv.has(e.toLowerCase());
}
function dt(e) {
  return rv.has(e.toLowerCase());
}
async function Ju(e, t, n, r, l, a) {
  for (let s = 0; s < n.length; s++) {
    let o = n[s],
      u = t[s];
    if (!u) continue;
    let c = e.find((m) => m.route.id === u.route.id),
      d = c != null && !Cf(c, u) && (a && a[u.route.id]) !== void 0;
    if (pn(o) && (l || d)) {
      let m = r[s];
      W(m, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await bf(o, m, l).then((v) => {
          v && (n[s] = v || n[s]);
        });
    }
  }
}
async function bf(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ce.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: ce.error, error: l };
      }
    return { type: ce.data, data: e.deferredData.data };
  }
}
function ho(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function hs(e, t) {
  let n = typeof t == "string" ? Rt(t).search : t.search;
  if (e[e.length - 1].route.index && ho(n || "")) return e[e.length - 1];
  let r = jf(e);
  return r[r.length - 1];
}
function Xu(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: a,
    json: s,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (a != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: a,
        json: void 0,
        text: void 0,
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: s,
        text: void 0,
      };
  }
}
function va(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function xv(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Cr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function wv(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function _t(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function jv(e, t) {
  try {
    let n = e.sessionStorage.getItem(Ef);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, a] of Object.entries(r || {}))
        a && Array.isArray(a) && t.set(l, new Set(a || []));
    }
  } catch {}
}
function Nv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Ef, JSON.stringify(n));
    } catch (r) {
      ar(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function al() {
  return (
    (al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    al.apply(this, arguments)
  );
}
const zi = P.createContext(null),
  Tf = P.createContext(null),
  Pn = P.createContext(null),
  Mi = P.createContext(null),
  sn = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Lf = P.createContext(null);
function Sv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  hl() || W(!1);
  let { basename: r, navigator: l } = P.useContext(Pn),
    { hash: a, pathname: s, search: o } = Df(e, { relative: n }),
    u = s;
  return (
    r !== "/" && (u = s === "/" ? r : Pt([r, s])),
    l.createHref({ pathname: u, search: o, hash: a })
  );
}
function hl() {
  return P.useContext(Mi) != null;
}
function Oi() {
  return hl() || W(!1), P.useContext(Mi).location;
}
function If(e) {
  P.useContext(Pn).static || P.useLayoutEffect(e);
}
function kv() {
  let { isDataRoute: e } = P.useContext(sn);
  return e ? Uv() : Ev();
}
function Ev() {
  hl() || W(!1);
  let e = P.useContext(zi),
    { basename: t, future: n, navigator: r } = P.useContext(Pn),
    { matches: l } = P.useContext(sn),
    { pathname: a } = Oi(),
    s = JSON.stringify(uo(l, n.v7_relativeSplatPath)),
    o = P.useRef(!1);
  return (
    If(() => {
      o.current = !0;
    }),
    P.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !o.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let m = co(c, JSON.parse(s), a, d.relative === "path");
        e == null &&
          t !== "/" &&
          (m.pathname = m.pathname === "/" ? t : Pt([t, m.pathname])),
          (d.replace ? r.replace : r.push)(m, d.state, d);
      },
      [t, r, s, a, e]
    )
  );
}
const Cv = P.createContext(null);
function Pv(e) {
  let t = P.useContext(sn).outlet;
  return t && P.createElement(Cv.Provider, { value: e }, t);
}
function Df(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = P.useContext(Pn),
    { matches: l } = P.useContext(sn),
    { pathname: a } = Oi(),
    s = JSON.stringify(uo(l, r.v7_relativeSplatPath));
  return P.useMemo(() => co(e, JSON.parse(s), a, n === "path"), [e, s, a, n]);
}
function bv(e, t, n, r) {
  hl() || W(!1);
  let { navigator: l } = P.useContext(Pn),
    { matches: a } = P.useContext(sn),
    s = a[a.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let u = s ? s.pathnameBase : "/";
  s && s.route;
  let c = Oi(),
    d;
  if (t) {
    var m;
    let E = typeof t == "string" ? Rt(t) : t;
    u === "/" || ((m = E.pathname) != null && m.startsWith(u)) || W(!1),
      (d = E);
  } else d = c;
  let v = d.pathname || "/",
    N = v;
  if (u !== "/") {
    let E = u.replace(/^\//, "").split("/");
    N = "/" + v.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let j = Qn(e, { pathname: N }),
    w = Rv(
      j &&
        j.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, o, E.params),
            pathname: Pt([
              u,
              l.encodeLocation
                ? l.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? u
                : Pt([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      a,
      n,
      r
    );
  return t && w
    ? P.createElement(
        Mi.Provider,
        {
          value: {
            location: al(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: he.Pop,
          },
        },
        w
      )
    : w;
}
function Tv() {
  let e = Fv(),
    t = Nf(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: l }, n) : null,
    null
  );
}
const Lv = P.createElement(Tv, null);
class Iv extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          sn.Provider,
          { value: this.props.routeContext },
          P.createElement(Lf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Dv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = P.useContext(zi);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(sn.Provider, { value: t }, r)
  );
}
function Rv(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var a;
    if ((a = n) != null && a.errors) e = n.matches;
    else return null;
  }
  let s = e,
    o = (l = n) == null ? void 0 : l.errors;
  if (o != null) {
    let d = s.findIndex(
      (m) => m.route.id && (o == null ? void 0 : o[m.route.id])
    );
    d >= 0 || W(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let m = s[d];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (c = d),
        m.route.id)
      ) {
        let { loaderData: v, errors: N } = n,
          j =
            m.route.loader &&
            v[m.route.id] === void 0 &&
            (!N || N[m.route.id] === void 0);
        if (m.route.lazy || j) {
          (u = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, m, v) => {
    let N,
      j = !1,
      w = null,
      E = null;
    n &&
      ((N = o && m.route.id ? o[m.route.id] : void 0),
      (w = m.route.errorElement || Lv),
      u &&
        (c < 0 && v === 0
          ? (Av("route-fallback", !1), (j = !0), (E = null))
          : c === v &&
            ((j = !0), (E = m.route.hydrateFallbackElement || null))));
    let h = t.concat(s.slice(0, v + 1)),
      f = () => {
        let p;
        return (
          N
            ? (p = w)
            : j
            ? (p = E)
            : m.route.Component
            ? (p = P.createElement(m.route.Component, null))
            : m.route.element
            ? (p = m.route.element)
            : (p = d),
          P.createElement(Dv, {
            match: m,
            routeContext: { outlet: d, matches: h, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || v === 0)
      ? P.createElement(Iv, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: N,
          children: f(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Rf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Rf || {}),
  gi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(gi || {});
function zv(e) {
  let t = P.useContext(zi);
  return t || W(!1), t;
}
function Mv(e) {
  let t = P.useContext(Tf);
  return t || W(!1), t;
}
function Ov(e) {
  let t = P.useContext(sn);
  return t || W(!1), t;
}
function zf(e) {
  let t = Ov(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function Fv() {
  var e;
  let t = P.useContext(Lf),
    n = Mv(gi.UseRouteError),
    r = zf(gi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Uv() {
  let { router: e } = zv(Rf.UseNavigateStable),
    t = zf(gi.UseNavigateStable),
    n = P.useRef(!1);
  return (
    If(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (l, a) {
        a === void 0 && (a = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, al({ fromRouteId: t }, a)));
      },
      [e, t]
    )
  );
}
const Zu = {};
function Av(e, t, n) {
  !t && !Zu[e] && (Zu[e] = !0);
}
function _v(e) {
  return Pv(e.context);
}
function Bv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = he.Pop,
    navigator: a,
    static: s = !1,
    future: o,
  } = e;
  hl() && W(!1);
  let u = t.replace(/^\/*/, "/"),
    c = P.useMemo(
      () => ({
        basename: u,
        navigator: a,
        static: s,
        future: al({ v7_relativeSplatPath: !1 }, o),
      }),
      [u, o, a, s]
    );
  typeof r == "string" && (r = Rt(r));
  let {
      pathname: d = "/",
      search: m = "",
      hash: v = "",
      state: N = null,
      key: j = "default",
    } = r,
    w = P.useMemo(() => {
      let E = cr(d, u);
      return E == null
        ? null
        : {
            location: { pathname: E, search: m, hash: v, state: N, key: j },
            navigationType: l,
          };
    }, [u, d, m, v, N, j, l]);
  return w == null
    ? null
    : P.createElement(
        Pn.Provider,
        { value: c },
        P.createElement(Mi.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function Hv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sl() {
  return (
    (sl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sl.apply(this, arguments)
  );
}
function Vv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    a;
  for (a = 0; a < r.length; a++)
    (l = r[a]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Wv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Qv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Wv(e);
}
const Yv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Gv = "6";
try {
  window.__reactRouterVersion = Gv;
} catch {}
function Kv(e, t) {
  return cv({
    basename: t == null ? void 0 : t.basename,
    future: sl({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Rp({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Jv(),
    routes: e,
    mapRouteProperties: Hv,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Jv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = sl({}, t, { errors: Xv(t.errors) })), t;
}
function Xv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new fo(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let a = window[l.__subType];
        if (typeof a == "function")
          try {
            let s = new a(l.message);
            (s.stack = ""), (n[r] = s);
          } catch {}
      }
      if (n[r] == null) {
        let a = new Error(l.message);
        (a.stack = ""), (n[r] = a);
      }
    } else n[r] = l;
  return n;
}
const Zv = P.createContext({ isTransitioning: !1 }),
  qv = P.createContext(new Map()),
  $v = "startTransition",
  qu = xh[$v],
  eg = "flushSync",
  $u = Lp[eg];
function tg(e) {
  qu ? qu(e) : e();
}
function Pr(e) {
  $u ? $u(e) : e();
}
class ng {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function rg(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, a] = P.useState(n.state),
    [s, o] = P.useState(),
    [u, c] = P.useState({ isTransitioning: !1 }),
    [d, m] = P.useState(),
    [v, N] = P.useState(),
    [j, w] = P.useState(),
    E = P.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    f = P.useCallback(
      (C) => {
        h ? tg(C) : C();
      },
      [h]
    ),
    p = P.useCallback(
      (C, I) => {
        let {
          deletedFetchers: M,
          unstable_flushSync: F,
          unstable_viewTransitionOpts: K,
        } = I;
        M.forEach((pe) => E.current.delete(pe)),
          C.fetchers.forEach((pe, $e) => {
            pe.data !== void 0 && E.current.set($e, pe.data);
          });
        let ge =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!K || ge) {
          F ? Pr(() => a(C)) : f(() => a(C));
          return;
        }
        if (F) {
          Pr(() => {
            v && (d && d.resolve(), v.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: K.currentLocation,
                nextLocation: K.nextLocation,
              });
          });
          let pe = n.window.document.startViewTransition(() => {
            Pr(() => a(C));
          });
          pe.finished.finally(() => {
            Pr(() => {
              m(void 0), N(void 0), o(void 0), c({ isTransitioning: !1 });
            });
          }),
            Pr(() => N(pe));
          return;
        }
        v
          ? (d && d.resolve(),
            v.skipTransition(),
            w({
              state: C,
              currentLocation: K.currentLocation,
              nextLocation: K.nextLocation,
            }))
          : (o(C),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: K.currentLocation,
              nextLocation: K.nextLocation,
            }));
      },
      [n.window, v, d, E, f]
    );
  P.useLayoutEffect(() => n.subscribe(p), [n, p]),
    P.useEffect(() => {
      u.isTransitioning && !u.flushSync && m(new ng());
    }, [u]),
    P.useEffect(() => {
      if (d && s && n.window) {
        let C = s,
          I = d.promise,
          M = n.window.document.startViewTransition(async () => {
            f(() => a(C)), await I;
          });
        M.finished.finally(() => {
          m(void 0), N(void 0), o(void 0), c({ isTransitioning: !1 });
        }),
          N(M);
      }
    }, [f, s, d, n.window]),
    P.useEffect(() => {
      d && s && l.location.key === s.location.key && d.resolve();
    }, [d, v, l.location, s]),
    P.useEffect(() => {
      !u.isTransitioning &&
        j &&
        (o(j.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: j.currentLocation,
          nextLocation: j.nextLocation,
        }),
        w(void 0));
    }, [u.isTransitioning, j]),
    P.useEffect(() => {}, []);
  let k = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (C) => n.navigate(C),
        push: (C, I, M) =>
          n.navigate(C, {
            state: I,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
        replace: (C, I, M) =>
          n.navigate(C, {
            replace: !0,
            state: I,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
      }),
      [n]
    ),
    L = n.basename || "/",
    g = P.useMemo(
      () => ({ router: n, navigator: k, static: !1, basename: L }),
      [n, k, L]
    );
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      zi.Provider,
      { value: g },
      P.createElement(
        Tf.Provider,
        { value: l },
        P.createElement(
          qv.Provider,
          { value: E.current },
          P.createElement(
            Zv.Provider,
            { value: u },
            P.createElement(
              Bv,
              {
                basename: L,
                location: l.location,
                navigationType: l.historyAction,
                navigator: k,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? P.createElement(lg, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function lg(e) {
  let { routes: t, future: n, state: r } = e;
  return bv(t, void 0, r, n);
}
const ig =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ag = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ye = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: a,
        replace: s,
        state: o,
        target: u,
        to: c,
        preventScrollReset: d,
        unstable_viewTransition: m,
      } = t,
      v = Vv(t, Yv),
      { basename: N } = P.useContext(Pn),
      j,
      w = !1;
    if (typeof c == "string" && ag.test(c) && ((j = c), ig))
      try {
        let p = new URL(window.location.href),
          k = c.startsWith("//") ? new URL(p.protocol + c) : new URL(c),
          L = cr(k.pathname, N);
        k.origin === p.origin && L != null
          ? (c = L + k.search + k.hash)
          : (w = !0);
      } catch {}
    let E = Sv(c, { relative: l }),
      h = sg(c, {
        replace: s,
        state: o,
        target: u,
        preventScrollReset: d,
        relative: l,
        unstable_viewTransition: m,
      });
    function f(p) {
      r && r(p), p.defaultPrevented || h(p);
    }
    return P.createElement(
      "a",
      sl({}, v, { href: j || E, onClick: w || a ? r : f, ref: n, target: u })
    );
  });
var ec;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ec || (ec = {}));
var tc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(tc || (tc = {}));
function sg(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: a,
      relative: s,
      unstable_viewTransition: o,
    } = t === void 0 ? {} : t,
    u = kv(),
    c = Oi(),
    d = Df(e, { relative: s });
  return P.useCallback(
    (m) => {
      if (Qv(m, n)) {
        m.preventDefault();
        let v = r !== void 0 ? r : kn(c) === kn(d);
        u(e, {
          replace: v,
          state: l,
          preventScrollReset: a,
          relative: s,
          unstable_viewTransition: o,
        });
      }
    },
    [c, u, d, r, l, n, e, a, s, o]
  );
}
const og = () =>
    i.jsxs("nav", {
      className:
        "navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0",
      children: [
        i.jsx(Ye, {
          to: "index.html",
          className: "navbar-brand",
          children: i.jsx("img", { src: yf, alt: "", width: "100px" }),
        }),
        i.jsx("button", {
          type: "button",
          className: "navbar-toggler",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarCollapse",
          children: i.jsx("span", { className: "navbar-toggler-icon" }),
        }),
        i.jsx("div", {
          className: "collapse navbar-collapse",
          id: "navbarCollapse",
          children: i.jsxs("div", {
            className: "navbar-nav mx-auto",
            children: [
              i.jsx(Ye, {
                to: "index.html",
                className: "nav-item nav-link active",
                children: "Home",
              }),
              i.jsx(Ye, {
                to: "about.html",
                className: "nav-item nav-link",
                children: "About Us",
              }),
              i.jsx(Ye, {
                to: "faq.html",
                className: "nav-item nav-link",
                children: "FAQ",
              }),
              i.jsx(Ye, {
                to: "admission.html",
                className: "nav-item nav-link",
                children: "Admission",
              }),
              i.jsx(Ye, {
                to: "location.html",
                className: "nav-item nav-link",
                children: "School's Partner",
              }),
              i.jsx(Ye, {
                to: "event.html",
                className: "nav-item nav-link",
                children: "Events",
              }),
              i.jsx(Ye, {
                to: "blog.html",
                className: "nav-item nav-link",
                children: "Blog",
              }),
              i.jsx(Ye, {
                to: "contact.html",
                className: "nav-item nav-link",
                children: "Contact Us",
              }),
              i.jsx(Ye, {
                to: "student.html",
                className: "nav-item nav-link",
                children: "Parent / Student Login",
              }),
              i.jsx(Ye, {
                to: "schoollogin.html",
                className: "nav-item nav-link",
                children: "School Login",
              }),
              i.jsx(Ye, {
                to: "paynow.html",
                className: "nav-item nav-link",
                children: "Paynow",
              }),
            ],
          }),
        }),
        i.jsx(Ye, {
          to: "index.html",
          className: "navbar-brand",
          children: i.jsx("img", { src: Dp, alt: "", width: "100px" }),
        }),
      ],
    }),
  ug = () =>
    i.jsxs("div", {
      className:
        "container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn",
      "data-wow-delay": "0.1s",
      children: [
        i.jsx("div", {
          className: "container py-5",
          children: i.jsxs("div", {
            className: "row g-5 footer-container",
            children: [
              i.jsxs("div", {
                className: "col-lg-3 col-md-6",
                children: [
                  i.jsx("a", {
                    href: "index.html",
                    className: "navbar-brand",
                    children: i.jsx("img", {
                      src: yf,
                      alt: "",
                      width: "150px",
                    }),
                  }),
                  i.jsx("p", {
                    className: "footer-text",
                    children:
                      "DPIS is one of the most established brands in schools.",
                  }),
                  i.jsxs("div", {
                    className: "d-flex pt-2",
                    children: [
                      i.jsx("a", {
                        className: "btn btn-outline-light btn-social",
                        href: "",
                        children: i.jsx("i", { className: "fab fa-twitter" }),
                      }),
                      i.jsx("a", {
                        className: "btn btn-outline-light btn-social",
                        href: "",
                        children: i.jsx("i", {
                          className: "fab fa-facebook-f",
                        }),
                      }),
                      i.jsx("a", {
                        className: "btn btn-outline-light btn-social",
                        href: "",
                        children: i.jsx("i", { className: "fab fa-youtube" }),
                      }),
                      i.jsx("a", {
                        className: "btn btn-outline-light btn-social",
                        href: "",
                        children: i.jsx("i", {
                          className: "fab fa-linkedin-in",
                        }),
                      }),
                      i.jsx("a", {
                        className: "btn btn-outline-light btn-social",
                        href: "",
                        children: i.jsx("i", { className: "fab fa-instagram" }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "col-lg-4 col-md-6",
                children: [
                  i.jsx("h3", {
                    className: "text-white mb-4",
                    children: "Quick Links",
                  }),
                  i.jsx("a", {
                    className: "btn btn-link text-white-50 footer-links",
                    href: "",
                    children: "About Us",
                  }),
                  i.jsx("a", {
                    className: "btn btn-link text-white-50 footer-links",
                    href: "",
                    children: "Faq",
                  }),
                  i.jsx("a", {
                    className: "btn btn-link text-white-50 footer-links",
                    href: "",
                    children: "Event",
                  }),
                  i.jsx("a", {
                    className: "btn btn-link text-white-50 footer-links",
                    href: "",
                    children: "Blog",
                  }),
                  i.jsx("a", {
                    className: "btn btn-link text-white-50 footer-links",
                    href: "",
                    children: "Franchisee",
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "col-lg-4 col-md-6 footer-contact",
                children: [
                  i.jsx("h3", {
                    className: "text-white mb-4",
                    children: "Get In Touch",
                  }),
                  i.jsxs("p", {
                    className: "mb-2 footer-info",
                    children: [
                      i.jsx("i", { className: "fa fa-map-marker-alt me-3" }),
                      "Registered Delhi Address: B- 23, Somdutt Chamber - 2, Bhikaji Cama Palace, New Delhi - 110066",
                    ],
                  }),
                  i.jsxs("p", {
                    className: "mb-2 footer-info",
                    children: [
                      i.jsx("i", { className: "fa fa-map-marker-alt me-3" }),
                      "Corporate Office Address:215, Suncity Success Tower, Golf Course Ext. Road, Sector 50, Gurugram, Haryana 122102",
                    ],
                  }),
                  i.jsxs("p", {
                    className: "mb-2 footer-info",
                    children: [
                      i.jsx("i", { className: "fa fa-phone-alt me-3" }),
                      "Phone: +91 7709 092 781",
                    ],
                  }),
                  i.jsxs("p", {
                    className: "mb-2 footer-info",
                    children: [
                      i.jsx("i", { className: "fa fa-phone-alt me-3" }),
                      "Phone 2: +91 9999 955 847",
                    ],
                  }),
                  i.jsxs("p", {
                    className: "mb-2 footer-info",
                    children: [
                      i.jsx("i", { className: "fa fa-envelope me-3" }),
                      "Email: info@dpissociety.com",
                    ],
                  }),
                  i.jsxs("div", {
                    className: "d-flex pt-2",
                    children: [
                      i.jsx("a", {
                        className: "btn btn-outline-light btn-social",
                        href: "",
                        children: i.jsx("i", { className: "fab fa-twitter" }),
                      }),
                      i.jsx("a", {
                        className: "btn btn-outline-light btn-social",
                        href: "",
                        children: i.jsx("i", {
                          className: "fab fa-facebook-f",
                        }),
                      }),
                      i.jsx("a", {
                        className: "btn btn-outline-light btn-social",
                        href: "",
                        children: i.jsx("i", { className: "fab fa-youtube" }),
                      }),
                      i.jsx("a", {
                        className: "btn btn-outline-light btn-social",
                        href: "",
                        children: i.jsx("i", {
                          className: "fab fa-linkedin-in",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        i.jsx("div", {
          className: "container",
          children: i.jsx("div", {
            className: "copyright",
            children: i.jsxs("div", {
              className: "row",
              children: [
                i.jsxs("div", {
                  className: "col-md-6 text-center text-md-start mb-3 mb-md-0",
                  children: [
                    "©",
                    i.jsx("a", {
                      className: "border-bottom",
                      href: "#",
                      children: "Your Site Name",
                    }),
                    ", All Right Reserved. Designed By",
                  ],
                }),
                i.jsx("div", {
                  className: "col-md-6 text-center text-md-end",
                  children: i.jsx("div", {
                    className: "footer-menu",
                    children: i.jsx("a", {
                      href: "",
                      children: "Privacy Policy",
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  cg = () => {
    let [e, t] = P.useState(!1);
    return (
      setTimeout(() => {
        t(!0);
      }, 3e3),
      i.jsxs("div", {
        className: "container-xxl bg-white p-0",
        children: [
          e ? i.jsx(i.Fragment, {}) : i.jsx(Ip, {}),
          i.jsx(og, {}),
          i.jsx(_v, {}),
          i.jsx(ug, {}),
        ],
      })
    );
  },
  dg = () =>
    i.jsx("div", {
      className: "modal fade",
      id: "exampleModal",
      tabIndex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      children: i.jsx("div", {
        className: "modal-dialog",
        children: i.jsxs("div", {
          className: "modal-content",
          children: [
            i.jsxs("div", {
              className: "modal-header",
              children: [
                i.jsx("h1", {
                  className: "modal-title fs-5",
                  id: "exampleModalLabel",
                  children: "Disclaimer",
                }),
                i.jsx("button", {
                  type: "button",
                  className: "btn-close",
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                }),
              ],
            }),
            i.jsx("div", {
              className: "modal-body",
              children: i.jsx("p", {
                children:
                  '"DELHI PUBLIC INTERNATIONAL SCHOOL" holds a trademark that is distinct from "DELHI PUBLIC SCHOOL" and "DELHI WORLD PUBLIC SCHOOL." It emphasises that the use of "DELHI PUBLIC INTERNATIONAL SCHOOL" does not infringe upon or imply any affiliation with "DELHI PUBLIC SCHOOL" or "DELHI WORLD PUBLIC SCHOOL." It also mentions that all trademarks, logos, and brands referred to on the website of DELHI PUBLIC INTERNATIONAL SCHOOL are the property of DELHI PUBLIC INTERNATIONAL SCHOOL and its trademark holders. It clarifies that DELHI PUBLIC INTERNATIONAL SCHOOL is a separate educational institution with no connection to "DELHI PUBLIC SCHOOL," "DELHI WORLD PUBLIC SCHOOL," or any other institution with similar names. This disclaimer is intended to prevent confusion and protect the distinct identity and intellectual property of DELHI PUBLIC INTERNATIONAL SCHOOL.',
              }),
            }),
            i.jsx("div", {
              className: "modal-footer",
              children: i.jsx("button", {
                type: "button",
                className: "btn btn-primary",
                "data-bs-dismiss": "modal",
                children: "Close",
              }),
            }),
          ],
        }),
      }),
    }),
  fg = "/assets/banner-video-YNLWGJlp.mp4",
  Mf = "/assets/banner-1-CijQrb9G.webp",
  Of = "/assets/banner-2-Gc60ZuRV.webp",
  Ff = "/assets/banner-3-XXauFJ-I.webp",
  hg = () => (
    P.useEffect(() => {
      $(".header-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1500,
        items: 1,
        dots: !0,
        loop: !0,
        nav: !0,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>',
        ],
      });
    }, []),
    i.jsxs("div", {
      children: [
        i.jsx("div", {
          className: "video",
          children: i.jsx("video", {
            width: "100%",
            autoPlay: !0,
            loop: !0,
            children: i.jsx("source", { src: fg, type: "video/mp4" }),
          }),
        }),
        i.jsx("div", {
          className: "container-fluid p-0 mb-5 banner-container",
          children: i.jsxs("div", {
            className: "owl-carousel header-carousel position-relative",
            children: [
              i.jsxs("div", {
                className: "owl-carousel-item position-relative",
                children: [
                  i.jsx("img", { className: "img-fluid", src: Mf, alt: "" }),
                  i.jsx("div", {
                    className:
                      "position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center banner-text",
                    children: i.jsx("div", {
                      className: "container",
                      children: i.jsx("div", {
                        className: "row justify-content-start",
                        children: i.jsxs("div", {
                          className: "col-10 col-lg-8",
                          children: [
                            i.jsx("h1", {
                              className:
                                "display-2 text-white animated slideInDown mb-4",
                              children: "Welcome To DPIS",
                            }),
                            i.jsx("p", {
                              className: "fs-5 fw-medium text-white mb-4 pb-2",
                              children:
                                "Delhi Public Intrenational School we Encourage Children to Develop Their Potential as Lifelong Learners",
                            }),
                            i.jsx("a", {
                              href: "",
                              className:
                                "btn rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft banner-btn",
                              children: "Learn More",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "owl-carousel-item position-relative",
                children: [
                  i.jsx("img", { className: "img-fluid", src: Of, alt: "" }),
                  i.jsx("div", {
                    className:
                      "position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center banner-text",
                    children: i.jsx("div", {
                      className: "container",
                      children: i.jsx("div", {
                        className: "row justify-content-start",
                        children: i.jsxs("div", {
                          className: "col-10 col-lg-8",
                          children: [
                            i.jsx("h1", {
                              className:
                                "display-2 text-white animated slideInDown mb-4",
                              children: "DPIS: Shaping Bright Minds",
                            }),
                            i.jsx("p", {
                              className: "fs-5 fw-medium text-white mb-4 pb-2",
                              children:
                                "Established in 1949 as Naveen Bharat, Delhi Public International School (DPIS) has grown into a diverse family of 200+ schools.",
                            }),
                            i.jsx("a", {
                              href: "",
                              className:
                                "btn rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft banner-btn",
                              children: "Learn More",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "owl-carousel-item position-relative",
                children: [
                  i.jsx("img", { className: "img-fluid", src: Ff, alt: "" }),
                  i.jsx("div", {
                    className:
                      "position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center banner-text",
                    children: i.jsx("div", {
                      className: "container",
                      children: i.jsx("div", {
                        className: "row justify-content-start",
                        children: i.jsxs("div", {
                          className: "col-10 col-lg-8",
                          children: [
                            i.jsx("h1", {
                              className:
                                "display-2 text-white animated slideInDown mb-4",
                              children: "DPIS: Inspire. Shape. Excel.",
                            }),
                            i.jsx("p", {
                              className: "fs-5 fw-medium text-white mb-4 pb-2",
                              children:
                                "Delhi Public International School (DPIS) - where inspiration meets education, shaping a future of excellence. Join us on this inspiring journey.",
                            }),
                            i.jsx("a", {
                              href: "",
                              className:
                                "btn rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft banner-btn",
                              children: "Learn More",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  ),
  mg = "/assets/logo-CiUt0F2U.jpg",
  pg = "/assets/about2-XXQFLJWH.webp",
  vg = "/assets/logo-CiUt0F2U.jpg",
  gg = () =>
    i.jsx("div", {
      className: "container-xxl py-5",
      children: i.jsx("div", {
        className: "container",
        children: i.jsxs("div", {
          className: "row g-5 align-items-center",
          children: [
            i.jsx("marquee", {
              behavior: "",
              direction: "",
              scrollamount: "10",
              children: i.jsx("p", {
                className: "about-section-para",
                children:
                  'Disclaimer: It highlights that "DELHI PUBLIC INTERNATIONAL SCHOOL" has its own distinct trademark, separate from the other institutions mentioned. This indicates that they have registered and legally own their school name, which is an important point to prevent any potential trademark infringement. Disclaimer: The disclaimer makes it clear that the use of "DELHI PUBLIC INTERNATIONAL SCHOOL" does not imply any affiliation with or infringement upon the names "DELHI PUBLIC SCHOOL" or "DELHI WORLD PUBLIC SCHOOL." This helps to avoid any confusion among the public or stakeholders about the relationships between these institutions. The disclaimer mentions that all trademarks, logos, and brands on the website of DELHI PUBLIC INTERNATIONAL SCHOOL are the property of DELHI PUBLIC INTERNATIONAL SCHOOL and its trademark holders. This underscores their ownership of their intellectual property, including logos and brand-related materials.',
              }),
            }),
            i.jsxs("div", {
              className: "col-lg-6 wow fadeInUp",
              "data-wow-delay": "0.1s",
              children: [
                i.jsx("h1", { className: "mb-4", children: "Who We Are" }),
                i.jsx("p", {
                  className: "who-we-are-para",
                  children:
                    "The foundation stone of education was laid in 1956 by Dr. S. Radhakrishnan, who was the Vice President of India at that time.",
                }),
                i.jsx("p", {
                  className: "mb-4 who-we-are-para",
                  children:
                    "In 1976, the first branch of DPIS was established in India, This marked the beginning of the school's expansion. The passage mentions that the growth of DPIS is a testament to the strength of the brand and the management behind it. This suggests that DPIS has a strong reputation in the field of education.",
                }),
                i.jsx("p", {
                  className: "who-we-are-para",
                  children: `The passage emphasizes the school's commitment to excellence, and it describes the "zest and spirit of excellence" that has remained unchanged throughout the years. The passage concludes by likening the DPIS family to the traditional joint family system in India, perhaps highlighting the sense of unity and shared values among its members. The passage concludes by likening the DPIS family to the traditional joint family system in India, perhaps highlighting the sense of unity and shared values among its members.`,
                }),
                i.jsx("div", {
                  className: "row g-4 align-items-center",
                  children: i.jsx("div", {
                    className: "col-sm-6",
                    children: i.jsx("a", {
                      className: "btn rounded-pill py-3 px-5 about-section-btn",
                      href: "",
                      children: "Read More",
                    }),
                  }),
                }),
              ],
            }),
            i.jsx("div", {
              className: "col-lg-6 about-img wow fadeInUp",
              "data-wow-delay": "0.5s",
              children: i.jsxs("div", {
                className: "row",
                children: [
                  i.jsx("div", {
                    className: "col-12 text-center",
                    children: i.jsx("img", {
                      className: "img-fluid w-75 rounded-circle bg-light p-3",
                      src: mg,
                      alt: "",
                    }),
                  }),
                  i.jsx("div", {
                    className: "col-6 text-start about-sec-img-box",
                    children: i.jsx("img", {
                      className: "img-fluid w-100 rounded-circle bg-light p-3",
                      src: pg,
                      alt: "",
                    }),
                  }),
                  i.jsx("div", {
                    className: "col-6 text-end about-sec-img-box",
                    children: i.jsx("img", {
                      className:
                        "img-fluid w-100 rounded-circle bg-light p-3 about-sec-image",
                      src: vg,
                      alt: "",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  yg = () =>
    i.jsx("div", {
      className: "container-xxl py-5",
      children: i.jsx("div", {
        className: "container",
        children: i.jsx("div", {
          className: "bg-light rounded callToActionContainer",
          children: i.jsxs("div", {
            className: "row g-0 callToActionBox",
            children: [
              i.jsx("div", {
                className: "col-lg-6 wow fadeIn callToActionInnerBox",
                "data-wow-delay": "0.1s",
                children: i.jsx("div", {
                  className: "position-relative h-100",
                  children: i.jsx("iframe", {
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/sjH_-p-Ijys?si=NVUtbwiGJYUwIt6x",
                    title: "YouTube video player",
                    frameBorder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: !0,
                  }),
                }),
              }),
              i.jsx("div", {
                className: "col-lg-6 wow fadeIn callToActionInnerBox",
                "data-wow-delay": "0.1s",
                children: i.jsx("div", {
                  className: "position-relative h-100",
                  children: i.jsx("iframe", {
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/Ff6yCdpXYDc?si=WYDgA3_57E_J7vs8",
                    title: "YouTube video player",
                    frameBorder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: !0,
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  xg = "/assets/news-6-D-p9OHUd.jpg",
  wg = "/assets/news-4-CbvoGX6_.jpg",
  jg = "/assets/news-2-Cdts0WYu.jpg",
  Ng = "/assets/news-5-CFkrOChq.jpg",
  Uf = "/assets/news-1-BohvHtcB.png",
  Sg = "/assets/news-3-sf09_2aZ.jpg",
  kg = () =>
    i.jsx("div", {
      className: "container-xxl py-5",
      children: i.jsxs("div", {
        className: "container",
        children: [
          i.jsx("div", {
            className: "text-center mx-auto mb-5 wow fadeInUp news-box",
            "data-wow-delay": "0.1s",
            children: i.jsx("h1", {
              className: "mb-3",
              children: "Latest News",
            }),
          }),
          i.jsxs("div", {
            className: "row g-4",
            children: [
              i.jsx("div", {
                className: "col-lg-4 col-md-6 wow fadeInUp",
                "data-wow-delay": "0.5s",
                children: i.jsxs("div", {
                  className: "classes-item",
                  children: [
                    i.jsx("div", {
                      className: "bg-light w-75 mx-auto p-3",
                      children: i.jsx("img", {
                        className: "img-fluid",
                        src: xg,
                        alt: "",
                      }),
                    }),
                    i.jsxs("div", {
                      className: "bg-light rounded p-4 pt-5 mt-n5",
                      children: [
                        i.jsx("div", {
                          className:
                            "d-flex align-items-center justify-content-between mb-4",
                          children: i.jsx("div", {
                            className: "d-flex align-items-center",
                            children: i.jsx("h4", {
                              children:
                                "EdTech Trends , Education , Education Technology",
                            }),
                          }),
                        }),
                        i.jsx("div", {
                          className: "row g-1",
                          children: i.jsx("div", {
                            className: "col-12",
                            children: i.jsxs("div", {
                              className:
                                "border-top border-3 border-primary pt-2",
                              children: [
                                i.jsx("h6", {
                                  className: "news-header text-primary mb-1",
                                  children:
                                    "National Entrepreneur's Day – November 21, 2023",
                                }),
                                i.jsx("small", {
                                  children: "21 November, 2023 - by Admin",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className: "col-lg-4 col-md-6 wow fadeInUp",
                "data-wow-delay": "0.1s",
                children: i.jsxs("div", {
                  className: "classNamees-item",
                  children: [
                    i.jsx("div", {
                      className: "bg-light w-75 mx-auto p-3",
                      children: i.jsx("img", {
                        className: "img-fluid",
                        src: wg,
                        alt: "",
                      }),
                    }),
                    i.jsxs("div", {
                      className: "bg-light rounded p-4 pt-5 mt-n5",
                      children: [
                        i.jsx("div", {
                          className:
                            "d-flex align-items-center justify-content-between mb-4",
                          children: i.jsx("div", {
                            className: "d-flex align-items-center",
                            children: i.jsx("h4", {
                              children:
                                "EdTech Trends , Education , Education Technology",
                            }),
                          }),
                        }),
                        i.jsx("div", {
                          className: "row g-1",
                          children: i.jsx("div", {
                            className: "col-12",
                            children: i.jsxs("div", {
                              className:
                                "border-top border-3 border-primary pt-2",
                              children: [
                                i.jsx("h6", {
                                  className: "news-header text-primary mb-1",
                                  children:
                                    "HISTORY OF ABOLITION OF SLAVERY DAY February 1, 2024",
                                }),
                                i.jsx("small", {
                                  children: "01 February, 2024 - by Admin",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className: "col-lg-4 col-md-6 wow fadeInUp",
                "data-wow-delay": "0.3s",
                children: i.jsxs("div", {
                  className: "classes-item",
                  children: [
                    i.jsx("div", {
                      className: "bg-light w-75 mx-auto p-3",
                      children: i.jsx("img", {
                        className: "img-fluid",
                        src: jg,
                        alt: "",
                      }),
                    }),
                    i.jsxs("div", {
                      className: "bg-light rounded p-4 pt-5 mt-n5",
                      children: [
                        i.jsx("div", {
                          className:
                            "d-flex align-items-center justify-content-between mb-4",
                          children: i.jsx("div", {
                            className: "d-flex align-items-center",
                            children: i.jsx("h4", {
                              children:
                                "EdTech Trends , Education , Education Technology",
                            }),
                          }),
                        }),
                        i.jsx("div", {
                          className: "row g-1",
                          children: i.jsx("div", {
                            className: "col-12",
                            children: i.jsxs("div", {
                              className:
                                "border-top border-3 border-primary pt-2",
                              children: [
                                i.jsx("h6", {
                                  className: "news-header text-primary mb-1",
                                  children:
                                    "International Day of Zero Tolerance to Female Genital Mutilation – February 6, 2024",
                                }),
                                i.jsx("small", {
                                  children: "06 February, 2024 - by Admin",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className: "col-lg-4 col-md-6 wow fadeInUp",
                "data-wow-delay": "0.3s",
                children: i.jsxs("div", {
                  className: "classes-item",
                  children: [
                    i.jsx("div", {
                      className: "bg-light w-75 mx-auto p-3",
                      children: i.jsx("img", {
                        className: "img-fluid",
                        src: Ng,
                        alt: "",
                      }),
                    }),
                    i.jsxs("div", {
                      className: "bg-light rounded p-4 pt-5 mt-n5",
                      children: [
                        i.jsx("div", {
                          className:
                            "d-flex align-items-center justify-content-between mb-4",
                          children: i.jsx("div", {
                            className: "d-flex align-items-center",
                            children: i.jsx("h4", {
                              children:
                                "EdTech Trends , Education , Education Technology",
                            }),
                          }),
                        }),
                        i.jsx("div", {
                          className: "row g-1",
                          children: i.jsx("div", {
                            className: "col-12",
                            children: i.jsxs("div", {
                              className:
                                "border-top border-3 border-primary pt-2",
                              children: [
                                i.jsx("h6", {
                                  className: "news-header text-primary mb-1",
                                  children:
                                    "World Television Day – November 21, 2023",
                                }),
                                i.jsx("small", {
                                  children: "21 November, 2023 - by Admin",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className: "col-lg-4 col-md-6 wow fadeInUp",
                "data-wow-delay": "0.1s",
                children: i.jsxs("div", {
                  className: "classes-item",
                  children: [
                    i.jsx("div", {
                      className: "bg-light w-75 mx-auto p-3",
                      children: i.jsx("img", {
                        className: "img-fluid",
                        src: Uf,
                        alt: "",
                      }),
                    }),
                    i.jsxs("div", {
                      className: "bg-light rounded p-4 pt-5 mt-n5",
                      children: [
                        i.jsx("div", {
                          className:
                            "d-flex align-items-center justify-content-between mb-4",
                          children: i.jsx("div", {
                            className: "d-flex align-items-center",
                            children: i.jsx("h4", {
                              children:
                                "Academic Success , EdTech Trends , Education , Education Technology",
                            }),
                          }),
                        }),
                        i.jsx("div", {
                          className: "row g-1",
                          children: i.jsx("div", {
                            className: "col-12",
                            children: i.jsxs("div", {
                              className:
                                "border-top border-3 border-primary pt-2",
                              children: [
                                i.jsx("h6", {
                                  className: "news-header text-primary mb-1",
                                  children:
                                    "Time to Talk Day – February 6, 2024",
                                }),
                                i.jsx("small", {
                                  children: "06 February, 2024 - by Admin",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className: "col-lg-4 col-md-6 wow fadeInUp",
                "data-wow-delay": "0.5s",
                children: i.jsxs("div", {
                  className: "classes-item",
                  children: [
                    i.jsx("div", {
                      className: "bg-light w-75 mx-auto p-3",
                      children: i.jsx("img", {
                        className: "img-fluid",
                        src: Sg,
                        alt: "",
                      }),
                    }),
                    i.jsxs("div", {
                      className: "bg-light rounded p-4 pt-5 mt-n5",
                      children: [
                        i.jsx("div", {
                          className:
                            "d-flex align-items-center justify-content-between mb-4",
                          children: i.jsx("div", {
                            className: "d-flex align-items-center",
                            children: i.jsx("h4", {
                              children:
                                "EdTech Trends , Education , Education Technology",
                            }),
                          }),
                        }),
                        i.jsx("div", {
                          className: "row g-1",
                          children: i.jsx("div", {
                            className: "col-12",
                            children: i.jsxs("div", {
                              className:
                                "border-top border-3 border-primary pt-2",
                              children: [
                                i.jsx("h6", {
                                  className: "news-header text-primary mb-1",
                                  children:
                                    "Conservatorship and Guardianship Abuse Awareness Day – February 1, 2024",
                                }),
                                i.jsx("small", {
                                  children: "01 February, 2024 - by Admin",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          i.jsx("div", {
            className: "text-center view-all-news-btn",
            children: i.jsx("a", {
              className: "butn",
              href: "",
              children: "View All News",
            }),
          }),
        ],
      }),
    }),
  Af = "/assets/1-ClaLx677.jpg",
  mo = "/assets/2-Cu5ZZBV2.webp",
  _f = "/assets/3-DwSv4Ab_.webp",
  Eg = () =>
    i.jsx("div", {
      className: "container-xxl py-5",
      children: i.jsxs("div", {
        className: "container",
        children: [
          i.jsx("div", {
            className:
              "text-center mx-auto mb-5 wow fadeInUp event-section-container",
            "data-wow-delay": "0.1s",
            children: i.jsx("h1", { className: "mb-3", children: "Event" }),
          }),
          i.jsxs("div", {
            className: "row g-4",
            children: [
              i.jsx("div", {
                className: "col-lg-4 col-md-6 wow fadeInUp",
                "data-wow-delay": "0.3s",
                children: i.jsxs("div", {
                  className: "classNamees-item",
                  children: [
                    i.jsx("div", {
                      className: "bg-light w-75 mx-auto p-3",
                      children: i.jsx("img", {
                        className: "img-fluid",
                        src: Af,
                        alt: "",
                      }),
                    }),
                    i.jsxs("div", {
                      className: "bg-light rounded p-4 pt-5 mt-n5",
                      children: [
                        i.jsx("div", {
                          className:
                            "d-flex align-items-center justify-content-between mb-4",
                          children: i.jsxs("div", {
                            className: "d-flex align-items-center flex-column",
                            children: [
                              i.jsx("h4", {
                                children: "Charity Fundraising Gala",
                              }),
                              i.jsx("p", {
                                children:
                                  "Host a glamorous evening to raise funds for a charitable cause. Include silent auctions, live entert...",
                              }),
                              i.jsx("div", {
                                className: "mt-3 text-center w-100",
                                children: i.jsx("a", {
                                  className: "butn",
                                  href: "",
                                  children: "Read More",
                                }),
                              }),
                            ],
                          }),
                        }),
                        i.jsx("div", {
                          className: "row g-1",
                          children: i.jsx("div", {
                            className: "col-12",
                            children: i.jsx("div", {
                              className:
                                "border-top border-3 border-primary pt-2",
                              children: i.jsx("small", {
                                children: "21 November, 2023 - by Admin",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className: "col-lg-4 col-md-6 wow fadeInUp",
                "data-wow-delay": "0.3s",
                children: i.jsxs("div", {
                  className: "classNamees-item",
                  children: [
                    i.jsx("div", {
                      className: "bg-light w-75 mx-auto p-3",
                      children: i.jsx("img", {
                        className: "img-fluid",
                        src: mo,
                        alt: "",
                      }),
                    }),
                    i.jsxs("div", {
                      className: "bg-light rounded p-4 pt-5 mt-n5",
                      children: [
                        i.jsx("div", {
                          className:
                            "d-flex align-items-center justify-content-between mb-4",
                          children: i.jsxs("div", {
                            className: "d-flex align-items-center flex-column",
                            children: [
                              i.jsx("h4", { children: "Tech Conference" }),
                              i.jsx("p", {
                                children:
                                  "Bring together experts and enthusiasts to discuss the latest trends in technology, showcase innovati...",
                              }),
                              i.jsx("div", {
                                className: "mt-3 text-center w-100",
                                children: i.jsx("a", {
                                  className: "butn",
                                  href: "",
                                  children: "Read More",
                                }),
                              }),
                            ],
                          }),
                        }),
                        i.jsx("div", {
                          className: "row g-1",
                          children: i.jsx("div", {
                            className: "col-12",
                            children: i.jsx("div", {
                              className:
                                "border-top border-3 border-primary pt-2",
                              children: i.jsx("small", {
                                children: "21 November, 2023 - by Admin",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className: "col-lg-4 col-md-6 wow fadeInUp",
                "data-wow-delay": "0.3s",
                children: i.jsxs("div", {
                  className: "classNamees-item",
                  children: [
                    i.jsx("div", {
                      className: "bg-light w-75 mx-auto p-3",
                      children: i.jsx("img", {
                        className: "img-fluid",
                        src: _f,
                        alt: "",
                      }),
                    }),
                    i.jsxs("div", {
                      className: "bg-light rounded p-4 pt-5 mt-n5",
                      children: [
                        i.jsx("div", {
                          className:
                            "d-flex align-items-center justify-content-between mb-4",
                          children: i.jsxs("div", {
                            className: "d-flex align-items-center flex-column",
                            children: [
                              i.jsx("h4", { children: "Art Exhibition" }),
                              i.jsx("p", {
                                children:
                                  "Celebrate local artists by organizing an art exhibition where they can display their work. Consider...",
                              }),
                              i.jsx("div", {
                                className: "mt-3 text-center w-100",
                                children: i.jsx("a", {
                                  className: "butn",
                                  href: "",
                                  children: "Read More",
                                }),
                              }),
                            ],
                          }),
                        }),
                        i.jsx("div", {
                          className: "row g-1",
                          children: i.jsx("div", {
                            className: "col-12",
                            children: i.jsx("div", {
                              className:
                                "border-top border-3 border-primary pt-2",
                              children: i.jsx("small", {
                                children: "21 November, 2023 - by Admin",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className: "text-center event-section-btn",
                children: i.jsx("a", {
                  className: "butn",
                  href: "",
                  children: "View All Events",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  Cg = () =>
    i.jsx("div", {
      className: "container-xxl py-5",
      children: i.jsx("div", {
        className: "container",
        children: i.jsx("div", {
          className: "bg-light rounded",
          children: i.jsx("div", {
            className: "row g-0",
            children: i.jsx("div", {
              className: "col-lg-12 wow fadeIn",
              "data-wow-delay": "0.1s",
              children: i.jsxs("div", {
                className:
                  "h-100 d-flex flex-column justify-content-center p-5",
                children: [
                  i.jsx("h1", {
                    className: "mb-4",
                    children: "Didn't Find The Answer",
                  }),
                  i.jsx("form", {
                    children: i.jsxs("div", {
                      className: "row g-3",
                      children: [
                        i.jsx("div", {
                          className: "col-sm-6",
                          children: i.jsxs("div", {
                            className: "form-floating",
                            children: [
                              i.jsx("input", {
                                type: "text",
                                className: "form-control border-0",
                                id: "gname",
                                placeholder: "Gurdian Name",
                              }),
                              i.jsx("label", {
                                for: "gname",
                                children: "Your Name",
                              }),
                            ],
                          }),
                        }),
                        i.jsx("div", {
                          className: "col-sm-6",
                          children: i.jsxs("div", {
                            className: "form-floating",
                            children: [
                              i.jsx("input", {
                                type: "email",
                                className: "form-control border-0",
                                id: "gmail",
                                placeholder: "Gurdian Email",
                              }),
                              i.jsx("label", {
                                for: "gmail",
                                children: "Your Email",
                              }),
                            ],
                          }),
                        }),
                        i.jsx("div", {
                          className: "col-sm-12",
                          children: i.jsxs("div", {
                            className: "form-floating",
                            children: [
                              i.jsx("input", {
                                type: "text",
                                className: "form-control border-0",
                                id: "cname",
                                placeholder: "Your Phone Number",
                              }),
                              i.jsx("label", {
                                for: "cname",
                                children: "Your Phone Number",
                              }),
                            ],
                          }),
                        }),
                        i.jsx("div", {
                          className: "col-12",
                          children: i.jsxs("div", {
                            className: "form-floating",
                            children: [
                              i.jsx("textarea", {
                                className:
                                  "form-control border-0 appoinment-textarea",
                                placeholder: "Leave a message here",
                                id: "message",
                              }),
                              i.jsx("label", {
                                for: "message",
                                children: "Message",
                              }),
                            ],
                          }),
                        }),
                        i.jsx("div", {
                          className: "col-12",
                          children: i.jsx("button", {
                            className: "btn w-100 py-3 appoinment-btn",
                            type: "submit",
                            children: "Submit",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    }),
  po = "/assets/testimonial-2-JFJzO7ez.webp",
  vo =
    "data:image/webp;base64,UklGRvAMAABXRUJQVlA4IOQMAACwUgCdASrhAM8APpFAmkklpCKkKpVLCLASCWVuMd5Pppq7N4hUTa1Z1S4EZdPEIPG+FmIc61rCiAu/4tUBw3VbKxoPSMrJ1iUmIqMhG6Wbb1yP37Jnyy/iQUgNN5f5ZqGQeCT4R/jGr1MwBYT69Cqk0K2gaFNFZ34is28yLg94+KOVsT9vyOUjjlBXiNsNlXJXB/e6bWLsmkx8NtsXx4lJHhHhptBiTcdXcrXoutJ0ukQUlO/ORweQgxTCq2jjyzE76sf/REdFQ05XXyxWBIUsp2vD2zTP6/K5seWONye5ml4dkO8zGNytSAN3WwonvnNDQtgSw5g6BAP9amLZmMhyYpPKZsLN02njKv3FZ04crHdKE8a8jIbJT/+lY3R0Y71aqfxUqPvucF04Zk9g/lRX++2+GYRszrzzffBcns9cGvCPYV3BJ74ZKOA19KRx1Gt2VWdqn4c9mUved8xhrK5NYWr3f2zOwWqG1sdTwz+pD5q1tbFLOqyM7jilqoWJqpDv74J7UbMUEem1+44c5JHrVKkolMLb2xyxxgJ862VPwviUnwBvrSPQYiyqVuwez48Qrl8rEyXX0K/frNO9KrGF1E8XR63WgCHdan+DxYInFrSZoJ5q0/MSWV6j6kfP7Dxir26AhrvuIeHhTtx06hwejEXnYT726a9gMZZR50kSukpxG/CY71KKEnyWDzlHkubpKz/62w3Bkr8n8mNximCO3v4hiY9+GzuLjOIADn1a4bwu9o8iVgKM/Qlh+5hMyJddAFf90C+Y8GJM6sUHzc4hu9dVj8ZLxWrz/1wRAik/hEPaZk0/0tucynEerKFgOriGnRDtlRbj3JY9hY/jbtPLqt4MvT50hGYYlTmLcF0KrFDAPyDgsItUs/4uyDkAAP7Zb7yZ/WUjra8Y4PXbw1Uy7lAJfyzLzrN6l54tWI98NANnEGW3rW3nYw6VJePNEMxqFfJE3ZW+X/vKrkgpiEleSI4+ZnvNosa/iHew83ZEtFpzkU5+GqwdYubiLUKCGvwzwWg4MSEiP8WVb2QfN/+dmcVvSRM2V6d1yn6W1odTIAsBVT9hCxQj63gYvEW7bBmv0YtEHXJUT0LTmy+elsxxTXCr8yO5RXvQBD4QfQPiN5DYTWukDt9mkOHhn/yG2rT9avbr/pzhgz3gGqG5C5vsfe+QG5rJvQyvP1kvGeY8YxvnBGf2KJIbHpRxGMvemTzeob/NxbVA1azlRszuNoReIMv3XfZLVz55tr//7xtx3Qkvr6spM6832EqfK4yFnby4BB2NouYtxbPglLa2MmItvTm5YLn3Ds1SH6P9W9bE6nAbRfYudQIcr7EAq5GAVuvpDyBzzpcUk86DL11Sswuw3peynHZF3Nfmq/2GcqD0cCrz2YJwHqlYbEVFG6U4PUgJQHTe969zeCbbJD0/96aVGfI82TpqSZAJVte2DEx74y5yvjmhW48PMnJ8NGKIM8+tdbvLQq0oWC0K8cYijl8rZHr4gac+iUTz5tB2XmhyUk8NajlMu25NQQwz//6MWdVqqc/25uYTmeInCtdSbp6mXffABO7HQbUMmEVdQFw9zOESC/r2olvLNcGA6sYvpPVlHr3QgewelSquyVuJB0woQEz57XoLg6W4DO4bhV2OOIFtthkZRuuLrszARlk3u0/2GNttDYZi2em4c/xG+rY6mbumSEpZr1B9wHl/pt1ESMhtS91maLZJUohE6GQyZnAWsgIra0DIrJtK7DdJNxOLL+PHExrLmvskY6agZfuJ4dWQf0ukDTKhxSxz3YsTIhcMsTzMrJMGqrGI5cHbxxzqJ9xjspwYRxdet4IAGaqijsInyEoaMTKzk3LPxa3H/Try2A2dCmEpxNuX7zWKIIexr61RWeOPufaBOzXFUTeTMtwofAIwCwtYv0nqbZhaAtygXhrQ5IfkEIPeqV1CN76VtMF/M1KhxfCfb+0UX38sBlu4fXOlBkj2EIROgG8VTQ8FHSr/D8xwhuYTcU5XauQnLZZZ+2L6/isTDmv1zyB0DcMWWkfU0tfjefw5wHR6jtJwhdjjWnDBPVrBQ2+Vu7/upX3UQDFJlN72YsoC09iA5/OsbfdG8xkhK+d2U2aG/DZs/+f2M4XMamsVoQ5MQGwkQCVZU9JAqIka3QyFwCpf5W3xmGNVXN/1Ve4x398HPJmb+hMcFWIPfnQEcE1XIslNR3AaHiaFpGz1QAg5vRGHx9URru0gnMZcIfZpFraZXEc6NekvNux+BWpxLLC+pLDEAezPHD6omOZl4VkO2BPKlM/YxQUZTHn5wT9+Obg9kDIZKQV3spi6wa9jcolf7/yt2SrRVs0uelVhkmXzhvgNZMHlsp0jq+oql+7KPvq2Z5EcQjRJYEkgcf2RvwrTv4KlpZ62TK4zrjrMKOeRccxeJ/P3aKr6zJ/xRYVGcozLACUvfww0jLTjgjqcH1HRsB/IYV6mxOPG8iAWw2P6zkCaNpwEm9b/IS86DJeSv3kZBL5/Zjt2gVJ/d9/lQjJXDXFJJ46BGo8eHEyXd/Yf4qEQY+3VzEvF+9vu7mX6fDnBnZ97ktalQ+3jZHpzfzvMHi4Z2reTGCDWf00RzsY/w5J9+Bm1+lErk32m2IEae6NEuPtChAdLWyCDJvPfi/T87/ur94G8QZ3xHr72QNlW72ulm9+YVQMJhy9ki6AMmRfPh4K6jew4PhjCuVP1qy/ZJ6gJXVtjxE37HPfrDXLP+brXDspl551NEetKHEE76VbdbsQlVsrMLIQ0r6T9898EGwSQPZEOpYhwSTirU2U67MEtDfIk0o50beX9uMa9m9NFk4WaM7f9fQPS1nCbkxXIrBowMkbsKOjphnhv1OO/clMIXefeaUSFb6FmdtKrLxvMBZSPGDH68BvGpClCyt6n8Ei6ZRoTwLk7Cu7znPpT3iIryI/1S2P8OPEp+jLvsKwDHMQSJPhNA+9eoqqiQ5z+ZS32e+GKAfN5oaeFJcpCBGqQeyGLrYA1Gm5mWyuHS1OSLoCxmspdsJNJdfxj3mmWj0SEnM+etVQQitv3pXYBC0zwHQ6lDaAELQXFyimIA+JP3gylN4PYVUDHD/JqrSoO4MIAa7kxq6UqnTv3vQR9GiIU7ZTH+pI4PeJiMj2NArhe2dsc5JchlfWWXbx0vOMbWCK1yTJ+3xxtTEpctAuRQCuHOtdk5e6z8MjVUt9yl8DbuJjA7CXJ8zdItN4TILsnpbnmHRUhmVf2WCETH3kXcmr6aqXHoQ9bAEABfKVpUHOFqsWYKl9DcIVdVQBKSXY5T7V5IfR7IJGZg3fOr6Wu/INQ233U8GzCjb1kgMGTgvBRGBn7xbYlhyXe5X+adWfh/hIlZ8HKBbmAfudDSVcyfisl7xjEGGii6QlTYakSSmlFa2CfIjHOfk/Ve7QJAir8+gH7CUD3JClp13o8tqrh2OrR46rOHZzrdI4nwKvPlCKLIulw00KsGJiWXU5UnHOF2Ou8xjh7eyAmGXqZslcm3yVo+twpt3UaFeqsyrnUXggUrOP52WlIMlTOT8cDkg1cFSK5+GSm3ATLk/RwMb1begUkZCEIfzp44FBg19Y+glRHtiW5wyhIKfcANEyyBXUX5CG0Qv06fWBiRFPfzKVBmUMmgpYhZeTS7F+/ywuuuW0BHsBC8+W+gnvd1MKEWshzrHV8i0WJOfP6Hp0qUQGVxut7Lw8iObEJAXGnsFVmwiQ8m5NVlPVwnD4k5AfBQLAx2l78oT+3CMsazis3bDG9C/tfOjHEFG8NMZU75y17DFHdG5c3qcA+z2fyzzkjiDPLlvnWrPnKPC3XzPH7qrUhLan0bpxBn4ilHBR1FlN4tTWh2YBf+Wr9N+13UCOwrLobampwGSnC2rK9jceIgD4uXKwZBfueAvGgpkYWaQVF2bVstgTzqCNX4aZM93yWbcAx1bsKTnVFzGK48i73761Tupdv5Gw3x3kT/EPSOR2fCkxev4YaH4z08WQtcambvMfJFaL8wP6pN+EX/UkGSmFP10ymdScNxc5RvQRrRmsAAYmSNBYGLRLyAh+P+jZt1l7Bdmg767Q79GlZcxGzl7wNpJVZTk1GAnqPixsAmBGkhgYjZghU1xSMAdZhbR380jWa5JGi4EfXeTnSJoBlCGsLfAa5XxSACL3cW7BOyDBdXvWJZu4pexX+4jV/nT9o7MY99NPEge7GhRx38FGsMO+rz0Ilbz2Geq8WfYCJmtCCi6uQ1SI1FCJcRmpbMKSuTp55ujjpLSfPTDJjFLWak7BGXL8nYSPZjNVEUlDK8Qs9MT90wEoyvz24fGumMJSU1/7XEMw5k41a63tvJDqroqvFrQn8IKGMWPVvKAdkzcKnxpDrzzkAlmdi1EOLEcn8OS/ynBQbx1yxewoFULE5sjuAUdu6M1bcAAA=",
  go =
    "data:image/webp;base64,UklGRpoPAABXRUJQVlA4II4PAAAwVwCdASrhAOEAPpFCnEqlo6KkpTFbKLASCWduvUhOCeF3TXmQr0AVy33IzUYY78A11/DmvcUCv5n/m/WS8Cf7aTBoa72xXVIh9On/7noqzi6KCVginR5+uS8BR7JLqjn/6nDeSdJwobYdgUgxBsFeqOxIRCD2Us5SdW5hmZCqLXZE9TeSft7Mr5aL/g32H7QQ2nAnWbqHagaJXzqXD3W3dQ7VzCm+F4I+wiE4Jgh0+zSyY8xwP42cq8LHFuqQLRn/1ssTIM9a5Ljn0MtK0A/h8A+5m2/ev7+hIFID+WZJTV020ZQMhA6/nxk6t7nYhYj0YThJzccLAb24YTqRv/DnlLc9b5BOKhtqk648cMJVq5D/+a8ZcxI9a3sbN1e/GkEo9I6yN7ZSuRC5HqsgBwSv1kwhx9WiqxBk9i9d8kVLMzlSHKa/Bx2ESridkv+f+6BbbssQWx+oLTzmGmCrm96oQkcuajIXcgDJYnPhbnJY5cxR6iAAPfde6ltp68mv6u1OFyXkgOGRmcTOlFGZKDcYfLjAssbv5nGENzvxCeg4NiNdN6pJmaRUmTcrtrPRU9z81FuEdGZN+Z1Xekfk/m3bLMEh9/0XU0X2Yaar6UOoIItoePtd89lXY/TJFwTF1yc2Gf87zPY1EeWCZVgL3LJaBahRiBM8v7wUBkASWWpWUH8lsZUnp/oGZgbXo2K5smp4vyBmsina6jMNly7Is8IvwxtxbKY8WohKR3HC9FE/75itpRlRS0kyWaLxFb1+w41NTGFqt0VvOp1ZpZ5AUuXcaF0J0QB63Lm6HA41XBgYWAb6Fd6yE3y7mfBehoOXZozoCaBrYaEz9I7KG0rYxFWbFMRzgsQv9gBzoEE3zm8GrFO1gtG55ZaqZ6z2xc9NR7IO0BVVptyBCYvnio/b0R4zEBhdGVppXZiKOhUI6ykSt/4AAP70rgfe3SiZNT0Z2uEOl/Uy9ghOqzaE3ADgvg99iMj2OwEzlx2GNkghVX7Ynruy7bmiP/bwPCKU+7zHltQ8W3MhSAF9VaAtQp6Yqr5Htex+1i4eI/9bzpkPBAh2hkl+InUwLzpEvTetasStz4Z5sPcdj6/OH7KMmibyZLDH1qYBwraLdhJiPsCg52vgEX44ZslcfStpQSnNWD3TYKUEaQbsNNLsKRuad2w1FQ39qWYUaLo/NlxAeTnEltBfx07xvD8Sd53zPhkFUdcXlEQZCFzy3KCeQNp8ECiDQrQrqwYbRAMwT0JP31/O6UruB4De4UzVRb6RgI1rX6bJ+xHYHoWuUnaCS5r2AT3x4q1DKRbg3xsZ29dy8FXuCkyA3QvF5tBy1I/HeSRmBmspC7c6oM1hjEuKbhj7+7a9XYhhKKcj2tiFmCo5bglR2rPOHZYpIxaPWKFChNgjYxOeL7gpyWTVvP+ixnfs5OCLCc4rerkZZOYGMQoK2fgkPwbmokNEfp7F6hyfQA7t2El2bZVAS83x48gpDMmAEzm5TI0wtaeVHMVic8hJWA+RHMHgOVqZNHPkVA77kd0qVoyhpg5tj6ulmplLGYJcsjH7TRsGpr5+9iTzqpYLyIpl1zSrHvzHVyqbCY7KqdDvDdnOusZkQmrBTQahgCNxglSpi02ibvpUQUQZK+SazT7fxjqVnNqx+q28nsKihy2kaeczAKT3/8U6LqKXDdJqxXg6Qzke81N09LqiGgCADTzHeyK5AZ1Dg3HrKT0qJJ0SzNAX4l7N7AQ5/IZh8HO3dPirQWZcQeW2OIBpq9yK4h9b8KuoShJP5B570zFuLMpAa9DwTjG3w4AkZSb4XVQhtBRJtn5Kx2nlQtiI6tXxwUgiMWiVqfTn0nr2wVZxAwYBLzALqfyUH3LPUvVRDGAnxasRaqt836UknpeUGFghpui2+WkI6H/d5zjkr70tGADk5mqN077W0/X1z/0aZz+sOONSeUcldEBDWIj2sxjt82Bzz4FGsGwUYrPn1e8rLLJ8FAielxGtLXBn3uBLHORF1n+DzlGEXxcKOZfXGeIWssNvmRT5rdXVx0rbjDbnNtYXRLyj0aoLL8wn384xPE3EkbrrzDiBr8aOWbGzFxUp3frNwCQSuxmJA7qyw+Hs8loYHIlwvBpygiWpTrTrtxGK5k70qhI7HifAkOarCXSbIyOVDfO6/J0vjQ4HRbmUcu6Mdii7WqxxIul4lRVPNYy/honnXeqdZEZ7F20XzwvA/aTNWqsHputAxQsVSMHb7gZsNTLdCvMdo3OrWPJgIyhxMGcw0rJetUfI4wNQFvXHwExzmyFmH9/wSq4cMpVwyenY5JVZmXywWHj4lXj24T/ZWnvHZbpd6gSAJqZs2Jp7UFx8F+APBrlNFWq4ZQYfEEWJ5LFhF/AUHuVBAQwjaiFbCekWVQa9fp9ZZUbkP7iWgY74/6XsV7165cx06QvMVrnbxrSZwB5ux3ufi29BF7S4qWf8YYa9RoL/n4ifzdyXIQYBbAyhw7SZkDxwysat+vbVPjSiykespniGHO5mCmkLOPZsBHsbxr50ssw+fy9CvBVFizgnGI+kTB8mHimRXxlYPK0jQhlFKW/1WvOukRY0+NJM17CsPYA1wgcgOOdzbd1KgCk0RL6mOUo7LkiBYkf/w4V/ZboBDCr0gH9/t1QiyfMdJ4Abu7iJhkElsVlPhnO/Ra4Xz4ownnSyYzq8Nxz863I2P67Ofz4T50BdYAEiSSp5lfLksOTOWv1MYYLyWwaPkURLGYmDnsq1nXvzzanUXgVqxCO5gSwGo2uqoDLvgF2AaZjI3GTqD/IXcty2+NjPoipxJVeWXIhQdEPe1vvW3lwUL+tJ9uJ6K52lmNQySfgZwXvaRlJjNGbitAxMXEClDRChqbYsGjJTKDuoSjvLTPUz0ZSHh8oPn+cTnI2qPgJbK8ZbwSAdaoQKOoxllCQsI9m9wlthH3CPGp6vCgHvRhHjz/O4WvMY+370rn3tArhiFESKg8UWhgqzvUj8u8DTmaHWp3LbR5wqwGqvbf12jqG09RdZazQtUDz18VVvK60pQgLo3F3U0t8CaTsxptf+skE19ZAjaDDbKYTg4oa2gl83vsMUUbd0Bx+k2ukTzNCrYbXJGg2d3yj3X6GoNhrTJfbcfBfCIQ4ej6tvb3+9ql/w+sOVIwqUFLEMk9AfihO9tN8rMK2K7qmuScR79R7jHasJQp/u0k1ClXSXbmk4fXEhgJnb9BuGmevxCO2mktLPJXvMVje3z+o++ukehuF9lrspO85t8SynQdMLMOW8Jj5ezaCE0deVbx0pwHslNJ4APjPtIxkT6FqgA7xE5IgMd8ECkhzcFjqL6kxMcMuLv2U4QG3I69DqwYc2aujziJmtzEcKOueU31zMkymi4bh00CR0zu92T1ZYxMGpyS/6AP7cPxgQZ2gOGv7JV2hSwOfogMEt1pwIN3IpjQxT+hS11Yu2QUbCQS9uC7R1TJhy/O8GXeWYnKe9rez3mFwOEIuPMiHx4a0N1cosbMM+wzwnzCxdkCXlETwDyvNCHK7t5uKaU12gxYa3P5IjWSguoWe4CdhOCiBt12t5W+y4sgsrkhXzy8oQ/dZN/o3gX8Y/4NOpc4gFqoiOrte6f34qCIunRaqogrghCAGSOTiZQSvaQITBjMOPa1bt8EbQ3hB/xGjxcxSVKKocHNQXY1Woq0ezQHPfSn34AwdOnM5FW5RrCf/r2KsfsHxUZ5uvJfvACV2+emnvmhYOId5zcsnUs90auBBK2K36Hc/JQfM8Jc+4zKkGw0VFzUjVw/ymMutwVN8fJktRoQMTax/c7Uy5ytsxcRr1iGyifipjgA4i/Ld+62xdIrYh8foUFsqJ0j7C1pNEhbaSTstt1j/DG2+/ek4GQjdcRUiJKHTcU5/agneW1JCfZvenxaJ32u6x9I1TYi50P+W8i2mI0b89l4i3jaVIb9Mm0lkZNuxZ/VJDb6HHr8ORz1iKosrqYJEapSO5V0SlFD45S4+U54bLZfkeqQsmPgzorlKQ6yWJ0r8UNs8mVIaruYm8BDX7G91mY8UrEWYRWfMS3SDMbiXhZPkyNCQd5YJrBJUP6owe3fX1hmWVe5tCVbGxw/hF34KzRHeDD8n597pYmxuY8irJ4S5ohOOqmxpMGM4uWpRxDcj3HaR2k/jZgigl/D399pJF5+jsgFS2yxJ7JQDXTZD5MSreBxPKESznyvPNfQBWWApqt3IyjrbvbTSWbyy7QJ+LVyyPJnwy2/OhddSZmJRQz2ExN0DvxM7aG1Wzo6Jt4G10Ce8l/y4bfgnYqEarqtLDSVV2D9/obnFoPb0Ne2RG+OSrswqL1AIK6xxlk/xIKa4EZ7WEx3cEM44JuyRcYudNAG5CsMiTvy6iOeHImMsLKJphoJLr3qaKWECcca5rQBMyu1ypCCe+/9O4j4BV0yiSgbsqnHDhVJvMkeGNFpBBiS5506yS8BdcMLsN+FznxLhk46HE+6HPHMzdIgOw1Wgx5Li3NuijDKgxb50S7kZaY5lfkG4tRN6oyZoo0JKRjS5vZYvV2mV6Jk+FfO5a4QJpY3NkqbkY8Wlegcxyf3nGSz3MsA69MpjrzUucaXK4QQn4UeFVdEhLXNgLex2H99yV1YpKbor6DNuFP1/8Vwwu3EFSy053UILvHv2biNtE4Mp4jXGJLShF6cgev8LwFUMY35wSBJ/uNkdwNMeSiuwxRQL45IzNCqK3ympyiDSrWxnfuf0WmJZyzEchJJi1zmT62lVrfwX71KDdhKQRdNX6BDLUe38y3E5DLyv7k52Ryv3LUK/z+bYnCt6Z94CsYt8Dq1RfJMM2ef6vEVvrLVzHSYHTHy3W3W7Mc1SNKOgCVn6bDLFhwXYbVo/Mjir4DFi2t+ZQ6HvsyjGFOB6/ygu89JB+Qg+s5K3Q+9a+o1qUODDdNqbnSIdHCWr//4nMNDqv7xsy2qjx2mzmWgYdon7u8RG4vZZoT7JRCuv3LFZR4Su5riyLClRVeoPYJIo6mV85SCCzymXc9TnlFAd0BnfjkeBIgVUy59cU7+196cx5PkJ+M+rY2EBcWeh7LNHQms16LQsY0KDN8rWcWiCj2SYXF9wMZ/mS7T96pyOPQPkYHEdLDDtKPKJEkmkHkR8l607YKi/c3PI7lFJdT5NXjn4WlJEgASe/xTYX02LyPsn/dxSCLXxvate1p56SSApJ+fnr/DsPLCXkE5wWZRHguFAw7VHaGev1XEnnAtB+kIQo01nNqQ4ty3LutuFjWIzMacm2IPt5voiZ65JMpczwb1qUGGkQgIcfxpIkF+DSg2g5+5IwmqclAhwGxUfe0hqfd10kzEYoAAAA",
  Pg = () => (
    P.useEffect(() => {
      $(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1e3,
        margin: 24,
        dots: !1,
        loop: !0,
        nav: !0,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
        responsive: { 0: { items: 1 }, 992: { items: 2 } },
      });
    }, []),
    i.jsx("div", {
      className: "container-xxl py-5",
      children: i.jsxs("div", {
        className: "container",
        children: [
          i.jsx("div", {
            className:
              "text-center mx-auto mb-5 wow fadeInUp testimonial-container",
            "data-wow-delay": "0.1s",
            children: i.jsx("h1", {
              className: "mb-3",
              children: "What Parents Say",
            }),
          }),
          i.jsxs("div", {
            className: "owl-carousel testimonial-carousel wow fadeInUp",
            "data-wow-delay": "0.1s",
            children: [
              i.jsxs("div", {
                className: "testimonial-item bg-light rounded p-5",
                children: [
                  i.jsx("p", {
                    className: "fs-5 testimonial-para",
                    children:
                      "Attending DPIS has been an enriching experience. The diverse range of courses and extracurricular activities have allowed me to explore my interests and develop valuable skills for the future.",
                  }),
                  i.jsxs("div", {
                    className:
                      "d-flex align-items-center bg-white me-n5 testimonial-image-box",
                    children: [
                      i.jsx("img", {
                        className:
                          "img-fluid flex-shrink-0 rounded-circle testimonial-image",
                        src: po,
                      }),
                      i.jsxs("div", {
                        className: "ps-3",
                        children: [
                          i.jsx("h3", {
                            className: "mb-1",
                            children: "Riya Sharma",
                          }),
                          i.jsx("span", { children: "Delhi" }),
                        ],
                      }),
                      i.jsx("i", {
                        className:
                          "fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "testimonial-item bg-light rounded p-5",
                children: [
                  i.jsx("p", {
                    className: "fs-5 testimonial-para",
                    children:
                      "I am incredibly impressed with the quality of education and support my child receives at DPIS . The dedicated teachers and nurturing environment have made a positive impact on my child's academic and personal growth.",
                  }),
                  i.jsxs("div", {
                    className:
                      "d-flex align-items-center bg-white me-n5 testimonial-image-box",
                    children: [
                      i.jsx("img", {
                        className:
                          "img-fluid flex-shrink-0 rounded-circle testimonial-image",
                        src: vo,
                      }),
                      i.jsxs("div", {
                        className: "ps-3",
                        children: [
                          i.jsx("h3", { className: "mb-1", children: "Vinod" }),
                          i.jsx("span", { children: "Delhi" }),
                        ],
                      }),
                      i.jsx("i", {
                        className:
                          "fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "testimonial-item bg-light rounded p-5",
                children: [
                  i.jsx("p", {
                    className: "fs-5 testimonial-para",
                    children:
                      "Teaching at DPIS has been a rewarding journey. The school's commitment to fostering a culture of learning and excellence has made it a joy to work with such motivated and talented students.",
                  }),
                  i.jsxs("div", {
                    className:
                      "d-flex align-items-center bg-white me-n5 testimonial-image-box",
                    children: [
                      i.jsx("img", {
                        className:
                          "img-fluid flex-shrink-0 rounded-circle testimonial-image",
                        src: go,
                      }),
                      i.jsxs("div", {
                        className: "ps-3",
                        children: [
                          i.jsx("h3", {
                            className: "mb-1",
                            children: "Ranjan Sinha",
                          }),
                          i.jsx("span", { children: " Faridabad" }),
                        ],
                      }),
                      i.jsx("i", {
                        className:
                          "fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  ),
  bg = () =>
    i.jsxs(i.Fragment, {
      children: [
        i.jsx(dg, {}),
        i.jsx(hg, {}),
        i.jsx(gg, {}),
        i.jsx(yg, {}),
        i.jsx(kg, {}),
        i.jsx(Eg, {}),
        i.jsx(Cg, {}),
        i.jsx(Pg, {}),
      ],
    }),
  Tg = () =>
    i.jsxs(i.Fragment, {
      children: [
        i.jsx("div", {
          className: "container-xxl py-5 page-header position-relative mb-5",
          children: i.jsx("div", {
            className: "container py-5",
            children: i.jsx("h1", {
              className: "display-2 text-white animated slideInDown mb-4",
              children: "FAQ",
            }),
          }),
        }),
        i.jsx("div", {
          className: "container-xxl py-5",
          children: i.jsxs("div", {
            className: "container",
            children: [
              i.jsx("div", {
                className:
                  "text-center faq-container mx-auto mb-5 wow fadeInUp",
                "data-wow-delay": "0.1s",
                children: i.jsx("h1", { className: "mb-3", children: "FAQ" }),
              }),
              i.jsx("div", {
                className: "row g-4",
                children: i.jsxs("div", {
                  className: "accordion",
                  id: "accordionExample",
                  children: [
                    i.jsxs("div", {
                      className: "accordion-item",
                      children: [
                        i.jsx("h2", {
                          className: "accordion-header",
                          id: "headingOne",
                          children: i.jsx("button", {
                            className: "accordion-button",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#collapseOne",
                            "aria-expanded": "true",
                            "aria-controls": "collapseOne",
                            children:
                              "How are teachers selected and trained at DPIS?",
                          }),
                        }),
                        i.jsx("div", {
                          id: "collapseOne",
                          className: "accordion-collapse collapse show",
                          "aria-labelledby": "headingOne",
                          "data-bs-parent": "#accordionExample",
                          children: i.jsx("div", {
                            className: "accordion-body",
                            children: i.jsx("p", {
                              children:
                                "Our teaching staff undergoes a rigorous selection process based on qualifications, experience, and a commitment to our educational philosophy. Continuous professional development is provided to ensure our educators stay current with best practices in teaching.",
                            }),
                          }),
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "accordion-item",
                      children: [
                        i.jsx("h2", {
                          className: "accordion-header",
                          id: "headingTwo",
                          children: i.jsx("button", {
                            className: "accordion-button collapsed",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#collapseTwo",
                            "aria-expanded": "false",
                            "aria-controls": "collapseTwo",
                            children:
                              "What extracurricular activities are offered at DPIS?",
                          }),
                        }),
                        i.jsx("div", {
                          id: "collapseTwo",
                          className: "accordion-collapse collapse",
                          "aria-labelledby": "headingTwo",
                          "data-bs-parent": "#accordionExample",
                          children: i.jsx("div", {
                            className: "accordion-body",
                            children: i.jsx("p", {
                              children:
                                "DPIS offers a wide range of extracurricular activities, including sports, arts, clubs, and community service opportunities. Students can explore their interests and talents beyond the classNameroom.",
                            }),
                          }),
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "accordion-item",
                      children: [
                        i.jsx("h2", {
                          className: "accordion-header",
                          id: "headingThree",
                          children: i.jsx("button", {
                            className: "accordion-button collapsed",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#collapseThree",
                            "aria-expanded": "false",
                            "aria-controls": "collapseThree",
                            children:
                              "Are there any admission requirements or criteria for enrolling at DPIS?",
                          }),
                        }),
                        i.jsx("div", {
                          id: "collapseThree",
                          className: "accordion-collapse collapse",
                          "aria-labelledby": "headingThree",
                          "data-bs-parent": "#accordionExample",
                          children: i.jsx("div", {
                            className: "accordion-body",
                            children: i.jsx("p", {
                              children:
                                "DPIS follows a comprehensive curriculum that aligns with national and international educational standards. We emphasize a well-rounded education that includes academics, extracurricular activities, and character development.",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  Lg = () =>
    i.jsxs(i.Fragment, {
      children: [
        i.jsx("div", {
          className: "container-xxl py-5 page-header position-relative mb-5",
          children: i.jsx("div", {
            className: "container py-5",
            children: i.jsx("h1", {
              className: "display-2 text-white animated slideInDown mb-4",
              children: "Contact Us",
            }),
          }),
        }),
        i.jsx("div", {
          className: "container-xxl py-5",
          children: i.jsxs("div", {
            className: "container",
            children: [
              i.jsxs("div", {
                className: "row g-4 mb-5",
                children: [
                  i.jsxs("div", {
                    className: "col-md-6 col-lg-4 text-center wow fadeInUp",
                    "data-wow-delay": "0.1s",
                    children: [
                      i.jsx("div", {
                        className:
                          "bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4 contact-icons",
                        children: i.jsx("i", {
                          className: "fa fa-map-marker-alt fa-2x text-primary",
                        }),
                      }),
                      i.jsx("h6", { children: "Visit Our Office" }),
                      i.jsxs("p", {
                        className: "contact-para",
                        children: [
                          "B- 23, Somdutt Chamber - 2, Bhikaji ",
                          i.jsx("br", {}),
                          "Cama Palace, New Delhi - 110066",
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "col-md-6 col-lg-4 text-center wow fadeInUp",
                    "data-wow-delay": "0.3s",
                    children: [
                      i.jsx("div", {
                        className:
                          "bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4 contact-icons",
                        children: i.jsx("i", {
                          className: "fa fa-envelope-open fa-2x text-primary",
                        }),
                      }),
                      i.jsx("h6", { children: "E-mail Us" }),
                      i.jsx("p", {
                        children: i.jsx("a", {
                          className: "contact-details",
                          href: "mailto:info@dpissociety.com",
                          children: "info@dpissociety.com",
                        }),
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "col-md-6 col-lg-4 text-center wow fadeInUp",
                    "data-wow-delay": "0.5s",
                    children: [
                      i.jsx("div", {
                        className:
                          "bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4 contact-icons",
                        children: i.jsx("i", {
                          className: "fa fa-phone-alt fa-2x text-primary",
                        }),
                      }),
                      i.jsx("h6", { children: "Let's Talk" }),
                      i.jsxs("p", {
                        children: [
                          "Phone:",
                          i.jsx("a", {
                            className: "contact-details",
                            href: "tel:+917709092781",
                            children: "+91 7709092781",
                          }),
                          i.jsx("br", {}),
                          "Phone:",
                          i.jsx("a", {
                            className: "contact-details",
                            href: "tel:+917709092781",
                            children: "+91 9999955847",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx("div", {
                className: "bg-light rounded",
                children: i.jsxs("div", {
                  className: "row g-0",
                  children: [
                    i.jsx("div", {
                      className: "col-lg-6 wow fadeIn",
                      "data-wow-delay": "0.1s",
                      children: i.jsx("div", {
                        className:
                          "h-100 d-flex flex-column justify-content-center p-5",
                        children: i.jsx("form", {
                          children: i.jsxs("div", {
                            className: "row g-3",
                            children: [
                              i.jsx("div", {
                                className: "col-sm-6",
                                children: i.jsxs("div", {
                                  className: "form-floating",
                                  children: [
                                    i.jsx("input", {
                                      type: "text",
                                      className: "form-control border-0",
                                      id: "name",
                                      placeholder: "Your Name",
                                    }),
                                    i.jsx("label", {
                                      htmlFor: "name",
                                      children: "Your Name",
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("div", {
                                className: "col-sm-6",
                                children: i.jsxs("div", {
                                  className: "form-floating",
                                  children: [
                                    i.jsx("input", {
                                      type: "email",
                                      className: "form-control border-0",
                                      id: "email",
                                      placeholder: "Your Email",
                                    }),
                                    i.jsx("label", {
                                      htmlFor: "email",
                                      children: "Your Email",
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("div", {
                                className: "col-sm-12",
                                children: i.jsxs("div", {
                                  className: "form-floating",
                                  children: [
                                    i.jsx("input", {
                                      type: "text",
                                      className: "form-control border-0",
                                      id: "phonenumber",
                                      placeholder: "Your Phone Number",
                                    }),
                                    i.jsx("label", {
                                      htmlFor: "phonenumber",
                                      children: "Your Email",
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("div", {
                                className: "col-12",
                                children: i.jsxs("div", {
                                  className: "form-floating",
                                  children: [
                                    i.jsx("textarea", {
                                      className:
                                        "form-control border-0 contact-textarea",
                                      placeholder: "Leave a message here",
                                      id: "message",
                                    }),
                                    i.jsx("label", {
                                      htmlFor: "message",
                                      children: "Message",
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("div", {
                                className: "col-12",
                                children: i.jsx("button", {
                                  className: "btn w-100 py-3 contact-btn",
                                  type: "submit",
                                  children: "Send Message",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    i.jsx("div", {
                      className: "col-lg-6 wow fadeIn contact-map",
                      "data-wow-delay": "0.5s",
                      children: i.jsx("div", {
                        className: "position-relative h-100",
                        children: i.jsx("iframe", {
                          className: "contact-map-iframe",
                          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56061.860328184666!2d76.96715394324572!3d28.573778157484536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b003867fd3d%3A0x878433e93e687c0c!2sDelhi%20International%20School%20Sector%2023%20Dwarka!5e0!3m2!1sen!2sin!4v1694421671210!5m2!1sen!2sin",
                          width: "100%",
                          height: "450",
                          allowFullScreen: "",
                          loading: "lazy",
                          referrerPolicy: "no-referrer-when-downgrade",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  Ig = () =>
    i.jsxs(i.Fragment, {
      children: [
        i.jsx("div", {
          className: "container-xxl py-5 page-header position-relative mb-5",
          children: i.jsx("div", {
            className: "container py-5",
            children: i.jsx("h1", {
              className: "display-2 text-white animated slideInDown mb-4",
              children: "ADMISSION",
            }),
          }),
        }),
        i.jsx("div", {
          className: "container-xxl py-5",
          children: i.jsx("div", {
            className: "container",
            children: i.jsx("div", {
              className: "bg-light rounded",
              children: i.jsx("div", {
                className: "row g-0",
                children: i.jsx("div", {
                  className: "col-lg-12 wow fadeIn",
                  "data-wow-delay": "0.1s",
                  children: i.jsxs("div", {
                    className:
                      "h-100 d-flex flex-column justify-content-center p-5",
                    children: [
                      i.jsx("h1", {
                        className: "mb-4",
                        children: "Enquiry Form",
                      }),
                      i.jsx("form", {
                        children: i.jsxs("div", {
                          className: "row g-3",
                          children: [
                            i.jsx("div", {
                              className: "col-sm-6",
                              children: i.jsxs("div", {
                                className: "form-floating",
                                children: [
                                  i.jsx("input", {
                                    type: "text",
                                    className: "form-control border-0",
                                    id: "gname",
                                    placeholder: "Gurdian Name",
                                  }),
                                  i.jsx("label", {
                                    htmlFor: "gname",
                                    children: "Parent Name",
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("div", {
                              className: "col-sm-6",
                              children: i.jsxs("div", {
                                className: "form-floating",
                                children: [
                                  i.jsx("input", {
                                    type: "text",
                                    className: "form-control border-0",
                                    id: "gname",
                                    placeholder: "Gurdian Name",
                                  }),
                                  i.jsx("label", {
                                    htmlFor: "gname",
                                    children: "Child Name",
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("div", {
                              className: "col-sm-6",
                              children: i.jsxs("div", {
                                className: "form-floating",
                                children: [
                                  i.jsx("input", {
                                    type: "text",
                                    className: "form-control border-0",
                                    id: "gname",
                                    placeholder: "Gurdian Name",
                                  }),
                                  i.jsx("label", {
                                    htmlFor: "gname",
                                    children: "Phone Number",
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("div", {
                              className: "col-sm-6",
                              children: i.jsxs("div", {
                                className: "form-floating",
                                children: [
                                  i.jsx("input", {
                                    type: "email",
                                    className: "form-control border-0",
                                    id: "gmail",
                                    placeholder: "Gurdian Email",
                                  }),
                                  i.jsx("label", {
                                    htmlFor: "gmail",
                                    children: "Email",
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("div", {
                              className: "col-sm-6",
                              children: i.jsxs("div", {
                                className: "form-floating",
                                children: [
                                  i.jsx("input", {
                                    type: "text",
                                    className: "form-control border-0",
                                    id: "gname",
                                    placeholder: "Gurdian Name",
                                  }),
                                  i.jsx("label", {
                                    htmlFor: "gname",
                                    children: "Address",
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("div", {
                              className: "col-sm-6",
                              children: i.jsxs("div", {
                                className: "form-floating",
                                children: [
                                  i.jsx("input", {
                                    type: "text",
                                    className: "form-control border-0",
                                    id: "gname",
                                    placeholder: "Gurdian Name",
                                  }),
                                  i.jsx("label", {
                                    htmlFor: "gname",
                                    children: "City",
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("div", {
                              className: "col-12",
                              children: i.jsxs("div", {
                                className: "form-floating",
                                children: [
                                  i.jsx("textarea", {
                                    className:
                                      "form-control border-0 admission-textarea",
                                    placeholder: "Leave a message here",
                                    id: "message",
                                  }),
                                  i.jsx("label", {
                                    htmlFor: "message",
                                    children: "Message (Optional)",
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("div", {
                              className: "col-12",
                              children: i.jsx("button", {
                                className: "btn w-100 py-3 admission-btn",
                                type: "submit",
                                children: "Submit",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        }),
      ],
    }),
  Dg = () =>
    i.jsxs(i.Fragment, {
      children: [
        i.jsx("div", {
          className: "container-xxl py-5 page-header position-relative mb-5",
          children: i.jsx("div", {
            className: "container py-5",
            children: i.jsx("h1", {
              className: "display-2 text-white animated slideInDown mb-4",
              children: "Paynow",
            }),
          }),
        }),
        i.jsx("div", {
          className: "row",
          style: { width: "90%", margin: "auto" },
          children: i.jsxs("div", {
            className: "donate-container",
            children: [
              i.jsx("p", {
                style: { textAlign: "justify" },
                children:
                  "We are working on a mission to change the perspective for Home and Homemakers. The deep-seated disrespect mothers, wives, housewives, househusbands, stay-at-home moms or dads, also known as Homemakers, face is demoralizing, which slowly seeps away their self-confidence and self-respect, leading to mental health issues. The reason behind the same is the wrong policy we follow which accepts only paid work as work. This declares anything we do in a Home as worthless as that is not done for money.",
              }),
              i.jsx("p", {
                style: { textAlign: "justify" },
                children:
                  "We are working to create awareness and gain back respect for our mothers back in society. We did our first ‘Familymaker Awards – Honoring the work of Homemakers’ on 8th October 2023 and plan to take it across India and the World. We would also be doing training programs to educate people on making happier families in Homes.",
              }),
              i.jsx("p", {
                style: { textAlign: "justify" },
                children:
                  "Your donation would help us reach out to a larger audience and make happier families and homes worldwide.",
              }),
              i.jsxs("div", {
                className: "payment-info",
                children: [
                  i.jsx("p", { children: "Paytm: +91-9XXXXXXXXX" }),
                  i.jsx("p", { children: "Vision Search" }),
                  i.jsx("p", { children: "Current A/C No: 0148002100426558" }),
                  i.jsx("p", { children: "IFSC Code: PUNB0014800" }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  Rg = () => {
    const e = [
      {
        title: "Time to Talk Day – February 6, 2024",
        content:
          "Time to Talk Day is on February 6, 2024. It's a global initiative that encourages people to be open and honest about mental health. The day aims to break the stigma around mental health and encourage people to speak up, seek help, and support one another.",
        link: "https://example.com",
        date: "06 February, 2024",
        author: "Admin",
      },
      {
        title: "Time to Talk Day – February 6, 2024",
        content:
          "Time to Talk Day is on February 6, 2024. It's a global initiative that encourages people to be open and honest about mental health. The day aims to break the stigma around mental health and encourage people to speak up, seek help, and support one another.",
        link: "https://example.com",
        date: "06 February, 2024",
        author: "Admin",
      },
      {
        title: "Time to Talk Day – February 6, 2024",
        content:
          "Time to Talk Day is on February 6, 2024. It's a global initiative that encourages people to be open and honest about mental health. The day aims to break the stigma around mental health and encourage people to speak up, seek help, and support one another.",
        link: "https://example.com",
        date: "06 February, 2024",
        author: "Admin",
      },
      {
        title: "Time to Talk Day – February 6, 2024",
        content:
          "Time to Talk Day is on February 6, 2024. It's a global initiative that encourages people to be open and honest about mental health. The day aims to break the stigma around mental health and encourage people to speak up, seek help, and support one another.",
        link: "https://example.com",
        date: "06 February, 2024",
        author: "Admin",
      },
      {
        title: "Time to Talk Day – February 6, 2024",
        content:
          "Time to Talk Day is on February 6, 2024. It's a global initiative that encourages people to be open and honest about mental health. The day aims to break the stigma around mental health and encourage people to speak up, seek help, and support one another.",
        link: "https://example.com",
        date: "06 February, 2024",
        author: "Admin",
      },
      {
        title: "Time to Talk Day – February 6, 2024",
        content:
          "Time to Talk Day is on February 6, 2024. It's a global initiative that encourages people to be open and honest about mental health. The day aims to break the stigma around mental health and encourage people to speak up, seek help, and support one another.",
        link: "https://example.com",
        date: "06 February, 2024",
        author: "Admin",
      },
    ];
    return i.jsxs("div", {
      children: [
        i.jsx("div", {
          className: "container-xxl py-5 page-header position-relative mb-5",
          children: i.jsx("div", {
            className: "container py-5",
            children: i.jsx("h1", {
              className: "display-2 text-white animated slideInDown mb-4",
              children: "Blog",
            }),
          }),
        }),
        i.jsx("div", {
          className: "container-xxl py-5",
          children: i.jsxs("div", {
            className: "container",
            children: [
              i.jsx("div", {
                className: "text-center mx-auto mb-5 wow fadeInUp",
                "data-wow-delay": "0.1s",
                style: { maxWidth: "600px" },
                children: i.jsx("h1", { className: "mb-3", children: "Blog" }),
              }),
              i.jsx("div", {
                className: "row g-4",
                children: e.map((t, n) =>
                  i.jsx(
                    "div",
                    {
                      className: "col-lg-4 col-md-6 wow fadeInUp",
                      "data-wow-delay": "0.1s",
                      children: i.jsxs("div", {
                        className: "classes-item",
                        children: [
                          i.jsx("div", {
                            className:
                              "bg-light rounded-circle w-100 mx-auto p-0",
                            children: i.jsx("img", {
                              className: "img-fluid",
                              src: Uf,
                              alt: "",
                            }),
                          }),
                          i.jsxs("div", {
                            className:
                              "bg-light rounded p-4 mt-n5 news-blog-box",
                            children: [
                              i.jsx("div", {
                                className:
                                  "d-flex align-items-center justify-content-between",
                                children: i.jsx("div", {
                                  className: "d-flex align-items-center",
                                  children: i.jsx("h4", { children: t.title }),
                                }),
                              }),
                              i.jsx("p", {
                                style: {
                                  fontSize: "0.9rem",
                                  textAlign: "justify",
                                  lineHeight: "1.5rem",
                                },
                                children: t.content,
                              }),
                              i.jsx("div", {
                                className: "row g-1",
                                children: i.jsx("div", {
                                  className: "col-12",
                                  children: i.jsxs("div", {
                                    className:
                                      "blog-page-list border-top border-3 border-primary pt-2",
                                    children: [
                                      i.jsx("div", {
                                        className: "col-sm-4",
                                        children: i.jsx("a", {
                                          className: "btn py-2 px-3",
                                          style: {
                                            backgroundColor: "#005e33",
                                            color: "white",
                                            borderRadius: "0px",
                                          },
                                          href: t.link,
                                          children: "Read More",
                                        }),
                                      }),
                                      i.jsx("div", {
                                        className: "col-sm-8",
                                        children: i.jsxs("small", {
                                          children: [
                                            t.date,
                                            " - by ",
                                            t.author,
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    n
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  zg = () =>
    i.jsxs(i.Fragment, {
      children: [
        i.jsx("div", {
          className: "container-xxl py-5 page-header position-relative mb-5",
          children: i.jsx("div", {
            className: "container py-5",
            children: i.jsx("h1", {
              className: "display-2 text-white animated slideInDown mb-4",
              children: "Event",
            }),
          }),
        }),
        i.jsx("div", {
          className: "container-xxl py-5",
          children: i.jsxs("div", {
            className: "container",
            children: [
              i.jsx("div", {
                className: "text-center mx-auto mb-5 wow fadeInUp",
                "data-wow-delay": "0.1s",
                style: { maxWidth: "600px" },
                children: i.jsx("h1", { className: "mb-3", children: "Event" }),
              }),
              i.jsxs("div", {
                className: "row g-4",
                children: [
                  i.jsx("div", {
                    className: "col-lg-4 col-md-6 wow fadeInUp",
                    "data-wow-delay": "0.3s",
                    children: i.jsxs("div", {
                      className: "classes-item",
                      children: [
                        i.jsx("div", {
                          className: "bg-light w-75 mx-auto p-3",
                          children: i.jsx("img", {
                            className: "img-fluid",
                            src: Af,
                            alt: "",
                          }),
                        }),
                        i.jsxs("div", {
                          className: "bg-light rounded p-4 pt-5 mt-n5",
                          children: [
                            i.jsx("div", {
                              className:
                                "d-flex align-items-center justify-content-between mb-4",
                              children: i.jsxs("div", {
                                className:
                                  "d-flex align-items-center flex-column",
                                children: [
                                  i.jsx("h4", {
                                    children: "Charity Fundraising Gala",
                                  }),
                                  i.jsx("p", {
                                    children:
                                      "Host a glamorous evening to raise funds for a charitable cause. Include silent auctions, live entert...",
                                  }),
                                  i.jsx("div", {
                                    className: "mt-3 text-center w-100",
                                    children: i.jsx("a", {
                                      className: "butn",
                                      href: "",
                                      children: "Read More",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("div", {
                              className: "row g-1",
                              children: i.jsx("div", {
                                className: "col-12",
                                children: i.jsx("div", {
                                  className:
                                    "border-top border-3 border-primary pt-2",
                                  children: i.jsx("small", {
                                    children: "21 November, 2023 - by Admin",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  i.jsx("div", {
                    className: "col-lg-4 col-md-6 wow fadeInUp",
                    "data-wow-delay": "0.3s",
                    children: i.jsxs("div", {
                      className: "classes-item",
                      children: [
                        i.jsx("div", {
                          className: "bg-light w-75 mx-auto p-3",
                          children: i.jsx("img", {
                            className: "img-fluid",
                            src: mo,
                            alt: "",
                          }),
                        }),
                        i.jsxs("div", {
                          className: "bg-light rounded p-4 pt-5 mt-n5",
                          children: [
                            i.jsx("div", {
                              className:
                                "d-flex align-items-center justify-content-between mb-4",
                              children: i.jsxs("div", {
                                className:
                                  "d-flex align-items-center flex-column",
                                children: [
                                  i.jsx("h4", { children: "Tech Conference" }),
                                  i.jsx("p", {
                                    children:
                                      "Bring together experts and enthusiasts to discuss the latest trends in technology, showcase innovati...",
                                  }),
                                  i.jsx("div", {
                                    className: "mt-3 text-center w-100",
                                    children: i.jsx("a", {
                                      className: "butn",
                                      href: "",
                                      children: "Read More",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("div", {
                              className: "row g-1",
                              children: i.jsx("div", {
                                className: "col-12",
                                children: i.jsx("div", {
                                  className:
                                    "border-top border-3 border-primary pt-2",
                                  children: i.jsx("small", {
                                    children: "21 November, 2023 - by Admin",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  i.jsx("div", {
                    className: "col-lg-4 col-md-6 wow fadeInUp",
                    "data-wow-delay": "0.3s",
                    children: i.jsxs("div", {
                      className: "classes-item",
                      children: [
                        i.jsx("div", {
                          className: "bg-light w-75 mx-auto p-3",
                          children: i.jsx("img", {
                            className: "img-fluid",
                            src: _f,
                            alt: "",
                          }),
                        }),
                        i.jsxs("div", {
                          className: "bg-light rounded p-4 pt-5 mt-n5",
                          children: [
                            i.jsx("div", {
                              className:
                                "d-flex align-items-center justify-content-between mb-4",
                              children: i.jsxs("div", {
                                className:
                                  "d-flex align-items-center flex-column",
                                children: [
                                  i.jsx("h4", { children: "Art Exhibition" }),
                                  i.jsx("p", {
                                    children:
                                      "Celebrate local artists by organizing an art exhibition where they can display their work. Consider...",
                                  }),
                                  i.jsx("div", {
                                    className: "mt-3 text-center w-100",
                                    children: i.jsx("a", {
                                      className: "butn",
                                      href: "",
                                      children: "Read More",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("div", {
                              className: "row g-1",
                              children: i.jsx("div", {
                                className: "col-12",
                                children: i.jsx("div", {
                                  className:
                                    "border-top border-3 border-primary pt-2",
                                  children: i.jsx("small", {
                                    children: "21 November, 2023 - by Admin",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  Bf = "/assets/location-1-D4--Bv5m.jpg",
  Mg = "/assets/appointment-zh3U3tb1.jpg",
  Og = "/assets/gallery1-DLHVvmP6.jpg",
  Fg = "/assets/gallery-2-ChhXZSuI.jpg",
  Ug = "/assets/gallery-3-8KfzDYAJ.jpg",
  Ag = "/assets/gallery-4-vTi0xbn_.jpg",
  _g = "/assets/gallery-5-Dx_kOjh5.jpg",
  Bg = "/assets/gallery-6-CvmJX6Nw.jpg",
  Hg = () => (
    P.useEffect(() => {
      $(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1e3,
        margin: 24,
        dots: !1,
        loop: !0,
        nav: !0,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
        responsive: { 0: { items: 1 }, 992: { items: 2 } },
      });
    }, []),
    P.useEffect(() => {
      $(".header-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1500,
        items: 1,
        dots: !0,
        loop: !0,
        nav: !0,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>',
        ],
      });
    }, []),
    i.jsxs(i.Fragment, {
      children: [
        i.jsx("div", {
          className: "container-fluid p-0 mb-5 banner-container",
          children: i.jsxs("div", {
            className: "owl-carousel header-carousel position-relative",
            children: [
              i.jsxs("div", {
                className: "owl-carousel-item position-relative",
                children: [
                  i.jsx("img", { className: "img-fluid", src: Mf, alt: "" }),
                  i.jsx("div", {
                    className:
                      "position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center banner-text",
                    children: i.jsx("div", {
                      className: "container",
                      children: i.jsx("div", {
                        className: "row justify-content-start",
                        children: i.jsxs("div", {
                          className: "col-10 col-lg-8",
                          children: [
                            i.jsx("h1", {
                              className:
                                "display-2 text-white animated slideInDown mb-4",
                              children: "Welcome To DPIS",
                            }),
                            i.jsx("p", {
                              className: "fs-5 fw-medium text-white mb-4 pb-2",
                              children:
                                "Delhi Public Intrenational School we Encourage Children to Develop Their Potential as Lifelong Learners",
                            }),
                            i.jsx("a", {
                              href: "",
                              className:
                                "btn rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft banner-btn",
                              children: "Learn More",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "owl-carousel-item position-relative",
                children: [
                  i.jsx("img", { className: "img-fluid", src: Of, alt: "" }),
                  i.jsx("div", {
                    className:
                      "position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center banner-text",
                    children: i.jsx("div", {
                      className: "container",
                      children: i.jsx("div", {
                        className: "row justify-content-start",
                        children: i.jsxs("div", {
                          className: "col-10 col-lg-8",
                          children: [
                            i.jsx("h1", {
                              className:
                                "display-2 text-white animated slideInDown mb-4",
                              children: "DPIS: Shaping Bright Minds",
                            }),
                            i.jsx("p", {
                              className: "fs-5 fw-medium text-white mb-4 pb-2",
                              children:
                                "Established in 1949 as Naveen Bharat, Delhi Public International School (DPIS) has grown into a diverse family of 200+ schools.",
                            }),
                            i.jsx("a", {
                              href: "",
                              className:
                                "btn rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft banner-btn",
                              children: "Learn More",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "owl-carousel-item position-relative",
                children: [
                  i.jsx("img", { className: "img-fluid", src: Ff, alt: "" }),
                  i.jsx("div", {
                    className:
                      "position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center banner-text",
                    children: i.jsx("div", {
                      className: "container",
                      children: i.jsx("div", {
                        className: "row justify-content-start",
                        children: i.jsxs("div", {
                          className: "col-10 col-lg-8",
                          children: [
                            i.jsx("h1", {
                              className:
                                "display-2 text-white animated slideInDown mb-4",
                              children: "DPIS: Inspire. Shape. Excel.",
                            }),
                            i.jsx("p", {
                              className: "fs-5 fw-medium text-white mb-4 pb-2",
                              children:
                                "Delhi Public International School (DPIS) - where inspiration meets education, shaping a future of excellence. Join us on this inspiring journey.",
                            }),
                            i.jsx("a", {
                              href: "",
                              className:
                                "btn rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft banner-btn",
                              children: "Learn More",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        i.jsx("div", {
          className: "container-xxl py-5",
          children: i.jsx("div", {
            className: "container",
            children: i.jsxs("div", {
              className: "row g-5 align-items-center",
              children: [
                i.jsxs("div", {
                  className: "col-lg-6 wow fadeInUp",
                  "data-wow-delay": "0.1s",
                  children: [
                    i.jsx("h1", { className: "mb-4", children: "Who We Are" }),
                    i.jsx("p", {
                      className: "mb-4",
                      style: {
                        lineHeight: "1.5rem",
                        textAlign: "justify",
                        letterSpacing: "0.3px",
                      },
                      children:
                        "The foundation stone of education was laid in 1956 by Dr. S. Radhakrishnan, who was the Vice President of India at that time.",
                    }),
                    i.jsx("p", {
                      className: "mb-4",
                      style: {
                        lineHeight: "1.5rem",
                        textAlign: "justify",
                        letterSpacing: "0.3px",
                      },
                      children:
                        "In 1976, the first branch of DPIS was established in India, This marked the beginning of the school's expansion. The passage mentions that the growth of DPIS is a testament to the strength of the brand and the management behind it. This suggests that DPIS has a strong reputation in the field of education.",
                    }),
                    i.jsx("p", {
                      className: "mb-4",
                      style: {
                        lineHeight: "1.5rem",
                        textAlign: "justify",
                        letterSpacing: "0.3px",
                      },
                      children: `The passage emphasizes the school's commitment to excellence, and it describes the "zest and spirit of excellence" that has remained unchanged throughout the years. The passage concludes by likening the DPIS family to the traditional joint family system in India, perhaps highlighting the sense of unity and shared values among its members.`,
                    }),
                    i.jsx("div", {
                      className: "row g-4 align-items-center",
                      children: i.jsx("div", {
                        className: "col-sm-6",
                        children: i.jsx("a", {
                          className: "btn rounded-pill py-3 px-5",
                          style: { backgroundColor: "#005e33", color: "white" },
                          href: "",
                          children: "Read More",
                        }),
                      }),
                    }),
                  ],
                }),
                i.jsx("div", {
                  className: "col-lg-6 about-img wow fadeInUp",
                  "data-wow-delay": "0.5s",
                  children: i.jsx("div", {
                    className: "row",
                    children: i.jsx("div", {
                      className: "col-12 text-center",
                      children: i.jsx("img", {
                        className: "img-fluid w-75 bg-light p-3",
                        src: Bf,
                        alt: "",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
        i.jsx("div", {
          class: "container-xxl py-5",
          children: i.jsxs("div", {
            class: "container",
            children: [
              i.jsx("div", {
                class: "text-center mx-auto mb-5 wow fadeInUp",
                "data-wow-delay": "0.1s",
                style: { maxWidth: "600px" },
                children: i.jsx("h1", { class: "mb-3", children: "Gallery" }),
              }),
              i.jsx("div", {
                class: "wow fadeInUp",
                "data-wow-delay": "0.1s",
                children: i.jsxs("div", {
                  class: "gallery-container",
                  children: [
                    i.jsx("div", {
                      class: "gallery-box",
                      children: i.jsx("img", { src: Og, alt: "" }),
                    }),
                    i.jsx("div", {
                      class: "gallery-box",
                      children: i.jsx("img", { src: Fg, alt: "" }),
                    }),
                    i.jsx("div", {
                      class: "gallery-box",
                      children: i.jsx("img", { src: Ug, alt: "" }),
                    }),
                    i.jsx("div", {
                      class: "gallery-box",
                      children: i.jsx("img", { src: Ag, alt: "" }),
                    }),
                    i.jsx("div", {
                      class: "gallery-box",
                      children: i.jsx("img", { src: _g, alt: "" }),
                    }),
                    i.jsx("div", {
                      class: "gallery-box",
                      children: i.jsx("img", { src: Bg, alt: "" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        i.jsx("div", {
          className: "container-xxl py-5",
          children: i.jsxs("div", {
            className: "container",
            children: [
              i.jsx("div", {
                className:
                  "text-center mx-auto mb-5 wow fadeInUp testimonial-container",
                "data-wow-delay": "0.1s",
                children: i.jsx("h1", {
                  className: "mb-3",
                  children: "What Parents Say",
                }),
              }),
              i.jsxs("div", {
                className: "owl-carousel testimonial-carousel wow fadeInUp",
                "data-wow-delay": "0.1s",
                children: [
                  i.jsxs("div", {
                    className: "testimonial-item bg-light rounded p-5",
                    children: [
                      i.jsx("p", {
                        className: "fs-5 testimonial-para",
                        children:
                          "Attending DPIS has been an enriching experience. The diverse range of courses and extracurricular activities have allowed me to explore my interests and develop valuable skills for the future.",
                      }),
                      i.jsxs("div", {
                        className:
                          "d-flex align-items-center bg-white me-n5 testimonial-image-box",
                        children: [
                          i.jsx("img", {
                            className:
                              "img-fluid flex-shrink-0 rounded-circle testimonial-image",
                            src: po,
                          }),
                          i.jsxs("div", {
                            className: "ps-3",
                            children: [
                              i.jsx("h3", {
                                className: "mb-1",
                                children: "Riya Sharma",
                              }),
                              i.jsx("span", { children: "Delhi" }),
                            ],
                          }),
                          i.jsx("i", {
                            className:
                              "fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "testimonial-item bg-light rounded p-5",
                    children: [
                      i.jsx("p", {
                        className: "fs-5 testimonial-para",
                        children:
                          "I am incredibly impressed with the quality of education and support my child receives at DPIS . The dedicated teachers and nurturing environment have made a positive impact on my child's academic and personal growth.",
                      }),
                      i.jsxs("div", {
                        className:
                          "d-flex align-items-center bg-white me-n5 testimonial-image-box",
                        children: [
                          i.jsx("img", {
                            className:
                              "img-fluid flex-shrink-0 rounded-circle testimonial-image",
                            src: vo,
                          }),
                          i.jsxs("div", {
                            className: "ps-3",
                            children: [
                              i.jsx("h3", {
                                className: "mb-1",
                                children: "Vinod",
                              }),
                              i.jsx("span", { children: "Delhi" }),
                            ],
                          }),
                          i.jsx("i", {
                            className:
                              "fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "testimonial-item bg-light rounded p-5",
                    children: [
                      i.jsx("p", {
                        className: "fs-5 testimonial-para",
                        children:
                          "Teaching at DPIS has been a rewarding journey. The school's commitment to fostering a culture of learning and excellence has made it a joy to work with such motivated and talented students.",
                      }),
                      i.jsxs("div", {
                        className:
                          "d-flex align-items-center bg-white me-n5 testimonial-image-box",
                        children: [
                          i.jsx("img", {
                            className:
                              "img-fluid flex-shrink-0 rounded-circle testimonial-image",
                            src: go,
                          }),
                          i.jsxs("div", {
                            className: "ps-3",
                            children: [
                              i.jsx("h3", {
                                className: "mb-1",
                                children: "Ranjan Sinha",
                              }),
                              i.jsx("span", { children: " Faridabad" }),
                            ],
                          }),
                          i.jsx("i", {
                            className:
                              "fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        i.jsx("div", {
          className: "container-xxl py-5",
          children: i.jsx("div", {
            className: "container",
            children: i.jsx("div", {
              className: "bg-light rounded",
              children: i.jsxs("div", {
                className: "row g-0",
                children: [
                  i.jsx("div", {
                    className: "col-lg-6 wow fadeIn",
                    "data-wow-delay": "0.1s",
                    children: i.jsxs("div", {
                      className:
                        "h-100 d-flex flex-column justify-content-center p-5",
                      children: [
                        i.jsx("h1", {
                          className: "mb-4",
                          children: "Inquiry Form",
                        }),
                        i.jsx("form", {
                          children: i.jsxs("div", {
                            className: "row g-3",
                            children: [
                              i.jsx("div", {
                                className: "col-sm-6",
                                children: i.jsxs("div", {
                                  className: "form-floating",
                                  children: [
                                    i.jsx("input", {
                                      type: "text",
                                      className: "form-control border-0",
                                      id: "gname",
                                      placeholder: "Gurdian Name",
                                    }),
                                    i.jsx("label", {
                                      htmlFor: "gname",
                                      children: "Your Name",
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("div", {
                                className: "col-sm-6",
                                children: i.jsxs("div", {
                                  className: "form-floating",
                                  children: [
                                    i.jsx("input", {
                                      type: "email",
                                      className: "form-control border-0",
                                      id: "gmail",
                                      placeholder: "Gurdian Email",
                                    }),
                                    i.jsx("label", {
                                      htmlFor: "gmail",
                                      children: "Your Email",
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("div", {
                                className: "col-sm-12",
                                children: i.jsxs("div", {
                                  className: "form-floating",
                                  children: [
                                    i.jsx("input", {
                                      type: "text",
                                      className: "form-control border-0",
                                      id: "cname",
                                      placeholder: "Your Phone Number",
                                    }),
                                    i.jsx("label", {
                                      htmlFor: "cname",
                                      children: "Your Phone Number",
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("div", {
                                className: "col-12",
                                children: i.jsxs("div", {
                                  className: "form-floating",
                                  children: [
                                    i.jsx("textarea", {
                                      className: "form-control border-0",
                                      placeholder: "Leave a message here",
                                      id: "message",
                                      style: { height: "100px" },
                                    }),
                                    i.jsx("label", {
                                      htmlFor: "message",
                                      children: "Message",
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("div", {
                                className: "col-12",
                                children: i.jsx("button", {
                                  className: "btn w-100 py-3",
                                  style: {
                                    backgroundColor: "#005e33",
                                    color: "white",
                                  },
                                  type: "submit",
                                  children: "Submit",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  i.jsx("div", {
                    className: "col-lg-6 wow fadeIn",
                    "data-wow-delay": "0.5s",
                    style: { minHeight: "400px" },
                    children: i.jsx("div", {
                      className: "position-relative h-100",
                      children: i.jsx("img", {
                        className: "position-absolute w-100 h-100 rounded",
                        src: Mg,
                        style: { objectFit: "cover" },
                        alt: "Appointment",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
        i.jsx("div", {
          className: "container-xxl py-5",
          children: i.jsx("div", {
            className: "container",
            children: i.jsxs("div", {
              className: "row g-4 mb-5",
              children: [
                i.jsxs("div", {
                  className: "col-md-6 col-lg-4 text-center wow fadeInUp",
                  "data-wow-delay": "0.1s",
                  children: [
                    i.jsx("div", {
                      className:
                        "bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4",
                      style: { width: "75px", height: "75px" },
                      children: i.jsx("i", {
                        className: "fa fa-map-marker-alt fa-2x text-primary",
                      }),
                    }),
                    i.jsx("h6", { children: "Visit Our Office" }),
                    i.jsxs("p", {
                      style: { fontSize: "0.9rem" },
                      children: [
                        "B- 23, Somdutt Chamber - 2, Bhikaji ",
                        i.jsx("br", {}),
                        "Cama Palace, New Delhi - 110066",
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "col-md-6 col-lg-4 text-center wow fadeInUp",
                  "data-wow-delay": "0.3s",
                  children: [
                    i.jsx("div", {
                      className:
                        "bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4",
                      style: { width: "75px", height: "75px" },
                      children: i.jsx("i", {
                        className: "fa fa-envelope-open fa-2x text-primary",
                      }),
                    }),
                    i.jsx("h6", { children: "E-mail Us" }),
                    i.jsx("p", {
                      children: i.jsx("a", {
                        href: "mailto:info@dpissociety.com",
                        style: { color: "#74787c" },
                        children: "info@dpissociety.com",
                      }),
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "col-md-6 col-lg-4 text-center wow fadeInUp",
                  "data-wow-delay": "0.5s",
                  children: [
                    i.jsx("div", {
                      className:
                        "bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4",
                      style: { width: "75px", height: "75px" },
                      children: i.jsx("i", {
                        className: "fa fa-phone-alt fa-2x text-primary",
                      }),
                    }),
                    i.jsx("h6", { children: "Let's Talk" }),
                    i.jsxs("p", {
                      children: [
                        "Phone:",
                        i.jsx("a", {
                          style: { color: "#74787c" },
                          href: "tel:+917709092781",
                          children: "+91 7709092781",
                        }),
                        i.jsx("br", {}),
                        "Phone:",
                        i.jsx("a", {
                          style: { color: "#74787c" },
                          href: "tel:+917709092781",
                          children: "+91 9999955847",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    })
  ),
  Vg = () => {
    const e = [
      { name: "Bihar School", link: "https://google.com" },
      { name: "Delhi School", link: "https://google.com" },
      { name: "Jaipur School", link: "https://google.com" },
    ];
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx("div", {
          className: "container-xxl py-5 page-header position-relative mb-5",
          children: i.jsx("div", {
            className: "container py-5",
            children: i.jsx("h1", {
              className: "display-2 text-white animated slideInDown mb-4",
              children: "School Login",
            }),
          }),
        }),
        i.jsx("div", {
          className: "container-xxl py-5",
          children: i.jsxs("div", {
            className: "container",
            children: [
              i.jsx("div", {
                className: "text-center mx-auto mb-5 wow fadeInUp",
                "data-wow-delay": "0.1s",
                style: { maxWidth: "600px" },
                children: i.jsx("h1", {
                  className: "mb-3",
                  children: "School Login",
                }),
              }),
              i.jsx("div", {
                className: "row g-4",
                children: e.map((t, n) =>
                  i.jsx(
                    "div",
                    {
                      className: "col-lg-4 col-md-6 wow fadeInUp",
                      "data-wow-delay": "0.3s",
                      children: i.jsxs("div", {
                        className: "classes-item",
                        children: [
                          i.jsx("div", {
                            className: "bg-light w-75 mx-auto p-3",
                            children: i.jsx("img", {
                              className: "img-fluid",
                              src: mo,
                              alt: "",
                            }),
                          }),
                          i.jsxs("div", {
                            className: "bg-light rounded p-4 pt-5 mt-n5",
                            children: [
                              i.jsx("div", {
                                className:
                                  "d-flex align-items-center justify-content-between mb-4",
                                children: i.jsxs("div", {
                                  className:
                                    "d-flex align-items-center w-100 flex-column",
                                  children: [
                                    i.jsx("h4", {
                                      style: { textAlign: "center" },
                                      children: t.name,
                                    }),
                                    i.jsx("div", {
                                      className: "mt-3 text-center w-100",
                                      children: i.jsx("a", {
                                        className: "butn",
                                        href: t.link,
                                        children: "View School",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("div", {
                                className: "row g-1",
                                children: i.jsx("div", {
                                  className: "col-12",
                                  children: i.jsx("div", {
                                    className:
                                      "border-top border-3 border-primary pt-2",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    n
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Wg = "/assets/1-qi4Lw4hU.webp",
  Qg = "/assets/2-CTI3NeDi.webp",
  Yg = "/assets/3-BsHx0d81.webp",
  Gg = () => (
    P.useEffect(() => {
      $(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1e3,
        margin: 24,
        dots: !1,
        loop: !0,
        nav: !0,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
        responsive: { 0: { items: 1 }, 992: { items: 2 } },
      });
    }, []),
    i.jsxs(i.Fragment, {
      children: [
        i.jsx("div", {
          class: "container-xxl py-5 page-header position-relative mb-5",
          children: i.jsx("div", {
            class: "container py-5",
            children: i.jsx("h1", {
              class: "display-2 text-white animated slideInDown mb-4",
              children: "About Us",
            }),
          }),
        }),
        i.jsx("div", {
          class: "container-xxl py-5",
          children: i.jsx("div", {
            class: "container",
            children: i.jsxs("div", {
              class: "row g-5 align-items-center",
              children: [
                i.jsxs("div", {
                  class: "col-lg-6 wow fadeInUp",
                  "data-wow-delay": "0.1s",
                  children: [
                    i.jsx("h1", { class: "mb-4", children: "Who We Are" }),
                    i.jsx("p", {
                      class: "mb-4",
                      style: {
                        lineHeight: "1.5rem",
                        textAlign: "justify",
                        letterSpacing: " 0.3px",
                      },
                      children:
                        "The foundation stone of education was laid in 1956 by Dr. S. Radhakrishnan, who was the Vice President of India at that time.",
                    }),
                    i.jsx("p", {
                      class: "mb-4",
                      style: {
                        lineHeight: "1.5rem",
                        textAlign: "justify",
                        letterSpacing: " 0.3px",
                      },
                      children:
                        "In 1976, the first branch of DPIS was established in India, This marked the beginning of the school's expansion. The passage mentions that the growth of DPIS is a testament to the strength of the brand and the management behind it. This suggests that DPIS has a strong reputation in the field of education.",
                    }),
                    i.jsx("p", {
                      class: "mb-4",
                      style: {
                        lineHeight: "1.5rem",
                        textAlign: "justify",
                        letterSpacing: " 0.3px",
                      },
                      children: `The passage emphasizes the school's commitment to excellence, and it describes the "zest and spirit of excellence" that has remained unchanged throughout the years. The passage concludes by likening the DPIS family to the traditional joint family system in India, perhaps highlighting the sense of unity and shared values among its members. The passage concludes by likening the DPIS family to the traditional joint family system in India, perhaps highlighting the sense of unity and shared values among its members.`,
                    }),
                    i.jsx("div", {
                      class: "row g-4 align-items-center",
                      children: i.jsx("div", {
                        class: "col-sm-6",
                        children: i.jsx("a", {
                          class: "btn rounded-pill py-3 px-5",
                          style: {
                            backgroundColor: " #005e33",
                            color: "white",
                          },
                          href: "",
                          children: "Read More",
                        }),
                      }),
                    }),
                  ],
                }),
                i.jsx("div", {
                  class: "col-lg-6 about-img wow fadeInUp",
                  "data-wow-delay": "0.5s",
                  children: i.jsx("div", {
                    class: "row",
                    children: i.jsx("div", {
                      class: "col-12 text-center",
                      children: i.jsx("img", {
                        class: "img-fluid w-75 bg-light p-3",
                        src: Bf,
                        alt: "",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
        i.jsx("div", {
          class: "container-xxl py-5",
          children: i.jsx("div", {
            class: "container",
            children: i.jsx("div", {
              class: "bg-light rounded",
              children: i.jsxs("div", {
                class: "row g-0",
                children: [
                  i.jsx("div", {
                    class: "col-lg-6 wow fadeIn",
                    "data-wow-delay": "0.1s",
                    children: i.jsxs("div", {
                      class:
                        "h-100 d-flex flex-column justify-content-center p-5",
                      children: [
                        i.jsx("h1", { class: "mb-4", children: "Our Vision" }),
                        i.jsx("p", {
                          class: "mb-4",
                          style: { lineHeight: "1.7rem", textAlign: "justify" },
                          children:
                            "DPIS envisions pioneering a new paradigm of excellence in school education. This paradigm is focused on nurturing and awakening the unique individuality of every child. The vision aims to inspire children to grow and develop by fostering innovation and passionate pursuit of scholarly interests and intellectual awareness.",
                        }),
                      ],
                    }),
                  }),
                  i.jsx("div", {
                    class: "col-lg-6 wow fadeIn",
                    "data-wow-delay": "0.5s",
                    children: i.jsxs("div", {
                      class:
                        "h-100 d-flex flex-column justify-content-center p-5",
                      children: [
                        i.jsx("h1", { class: "mb-4", children: "Our Mission" }),
                        i.jsx("p", {
                          class: "mb-4",
                          style: { lineHeight: "1.7rem", textAlign: "justify" },
                          children:
                            "DPIS is dedicated to creating an educational environment where each child is recognized as a unique, exceptional, and powerful individual. The mission emphasizes the goal of helping children achieve the highest level of academic excellence. This is to be achieved through rigorous learning experiences that promote inquiry, innovation, and creativity. Additionally, DPIS aims to cultivate an awareness in children about their environment and the world around them, making them sensitive and responsible global citizens.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
        i.jsx("div", {
          class: "container-xxl py-5",
          children: i.jsxs("div", {
            class: "container",
            children: [
              i.jsx("div", {
                class: "text-center mx-auto mb-5 wow fadeInUp",
                "data-wow-delay": "0.1s",
                style: { maxWidth: "600px" },
                children: i.jsx("h1", {
                  class: "mb-3",
                  children: "Our Core Team Members",
                }),
              }),
              i.jsxs("div", {
                class: "row g-4",
                children: [
                  i.jsx("div", {
                    class: "col-lg-4 col-md-6 wow fadeInUp",
                    "data-wow-delay": "0.1s",
                    children: i.jsxs("div", {
                      class: "team-item position-relative",
                      children: [
                        i.jsx("img", {
                          class: "img-fluid rounded-circle w-75",
                          src: Wg,
                          alt: "",
                        }),
                        i.jsxs("div", {
                          class: "team-text",
                          children: [
                            i.jsx("h3", {
                              style: { fontSize: "1.15rem" },
                              children: "Dr. Vijay Pawar",
                            }),
                            i.jsx("p", { children: "Chairman" }),
                            i.jsxs("div", {
                              class: "d-flex align-items-center",
                              children: [
                                i.jsx("a", {
                                  class: "btn btn-square btn-primary mx-1",
                                  href: "",
                                  children: i.jsx("i", {
                                    class: "fab fa-facebook-f",
                                  }),
                                }),
                                i.jsx("a", {
                                  class: "btn btn-square btn-primary mx-1",
                                  href: "",
                                  children: i.jsx("i", {
                                    class: "fab fa-twitter",
                                  }),
                                }),
                                i.jsx("a", {
                                  class: "btn btn-square btn-primary mx-1",
                                  href: "",
                                  children: i.jsx("i", {
                                    class: "fab fa-instagram",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  i.jsx("div", {
                    class: "col-lg-4 col-md-6 wow fadeInUp",
                    "data-wow-delay": "0.3s",
                    children: i.jsxs("div", {
                      class: "team-item position-relative",
                      children: [
                        i.jsx("img", {
                          class: "img-fluid rounded-circle w-75",
                          src: Qg,
                          alt: "",
                        }),
                        i.jsxs("div", {
                          class: "team-text",
                          children: [
                            i.jsx("h3", {
                              style: { fontSize: "1.15rem" },
                              children: "Mr. Nilesh Vyas",
                            }),
                            i.jsx("p", { children: "Secretory" }),
                            i.jsxs("div", {
                              class: "d-flex align-items-center",
                              children: [
                                i.jsx("a", {
                                  class: "btn btn-square btn-primary mx-1",
                                  href: "",
                                  children: i.jsx("i", {
                                    class: "fab fa-facebook-f",
                                  }),
                                }),
                                i.jsx("a", {
                                  class: "btn btn-square btn-primary mx-1",
                                  href: "",
                                  children: i.jsx("i", {
                                    class: "fab fa-twitter",
                                  }),
                                }),
                                i.jsx("a", {
                                  class: "btn btn-square btn-primary mx-1",
                                  href: "",
                                  children: i.jsx("i", {
                                    class: "fab fa-instagram",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  i.jsx("div", {
                    class: "col-lg-4 col-md-6 wow fadeInUp",
                    "data-wow-delay": "0.5s",
                    children: i.jsxs("div", {
                      class: "team-item position-relative",
                      children: [
                        i.jsx("img", {
                          class: "img-fluid rounded-circle w-75",
                          src: Yg,
                          alt: "",
                        }),
                        i.jsxs("div", {
                          class: "team-text",
                          children: [
                            i.jsx("h3", {
                              style: { fontSize: "1.15rem" },
                              children: "Mr. Sridhar Duleri",
                            }),
                            i.jsx("p", { children: "Joint Secretary" }),
                            i.jsxs("div", {
                              class: "d-flex align-items-center",
                              children: [
                                i.jsx("a", {
                                  class: "btn btn-square btn-primary mx-1",
                                  href: "",
                                  children: i.jsx("i", {
                                    class: "fab fa-facebook-f",
                                  }),
                                }),
                                i.jsx("a", {
                                  class: "btn btn-square btn-primary mx-1",
                                  href: "",
                                  children: i.jsx("i", {
                                    class: "fab fa-twitter",
                                  }),
                                }),
                                i.jsx("a", {
                                  class: "btn btn-square btn-primary mx-1",
                                  href: "",
                                  children: i.jsx("i", {
                                    class: "fab fa-instagram",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        i.jsx("div", {
          className: "container-xxl py-5",
          children: i.jsxs("div", {
            className: "container",
            children: [
              i.jsx("div", {
                className:
                  "text-center mx-auto mb-5 wow fadeInUp testimonial-container",
                "data-wow-delay": "0.1s",
                children: i.jsx("h1", {
                  className: "mb-3",
                  children: "What Parents Say",
                }),
              }),
              i.jsxs("div", {
                className: "owl-carousel testimonial-carousel wow fadeInUp",
                "data-wow-delay": "0.1s",
                children: [
                  i.jsxs("div", {
                    className: "testimonial-item bg-light rounded p-5",
                    children: [
                      i.jsx("p", {
                        className: "fs-5 testimonial-para",
                        children:
                          "Attending DPIS has been an enriching experience. The diverse range of courses and extracurricular activities have allowed me to explore my interests and develop valuable skills for the future.",
                      }),
                      i.jsxs("div", {
                        className:
                          "d-flex align-items-center bg-white me-n5 testimonial-image-box",
                        children: [
                          i.jsx("img", {
                            className:
                              "img-fluid flex-shrink-0 rounded-circle testimonial-image",
                            src: po,
                          }),
                          i.jsxs("div", {
                            className: "ps-3",
                            children: [
                              i.jsx("h3", {
                                className: "mb-1",
                                children: "Riya Sharma",
                              }),
                              i.jsx("span", { children: "Delhi" }),
                            ],
                          }),
                          i.jsx("i", {
                            className:
                              "fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "testimonial-item bg-light rounded p-5",
                    children: [
                      i.jsx("p", {
                        className: "fs-5 testimonial-para",
                        children:
                          "I am incredibly impressed with the quality of education and support my child receives at DPIS . The dedicated teachers and nurturing environment have made a positive impact on my child's academic and personal growth.",
                      }),
                      i.jsxs("div", {
                        className:
                          "d-flex align-items-center bg-white me-n5 testimonial-image-box",
                        children: [
                          i.jsx("img", {
                            className:
                              "img-fluid flex-shrink-0 rounded-circle testimonial-image",
                            src: vo,
                          }),
                          i.jsxs("div", {
                            className: "ps-3",
                            children: [
                              i.jsx("h3", {
                                className: "mb-1",
                                children: "Vinod",
                              }),
                              i.jsx("span", { children: "Delhi" }),
                            ],
                          }),
                          i.jsx("i", {
                            className:
                              "fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "testimonial-item bg-light rounded p-5",
                    children: [
                      i.jsx("p", {
                        className: "fs-5 testimonial-para",
                        children:
                          "Teaching at DPIS has been a rewarding journey. The school's commitment to fostering a culture of learning and excellence has made it a joy to work with such motivated and talented students.",
                      }),
                      i.jsxs("div", {
                        className:
                          "d-flex align-items-center bg-white me-n5 testimonial-image-box",
                        children: [
                          i.jsx("img", {
                            className:
                              "img-fluid flex-shrink-0 rounded-circle testimonial-image",
                            src: go,
                          }),
                          i.jsxs("div", {
                            className: "ps-3",
                            children: [
                              i.jsx("h3", {
                                className: "mb-1",
                                children: "Ranjan Sinha",
                              }),
                              i.jsx("span", { children: " Faridabad" }),
                            ],
                          }),
                          i.jsx("i", {
                            className:
                              "fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  ),
  Kg = Kv([
    {
      path: "/",
      element: i.jsx(cg, {}),
      children: [
        { path: "/index.html", element: i.jsx(bg, {}) },
        { path: "/faq.html", element: i.jsx(Tg, {}) },
        { path: "/contact.html", element: i.jsx(Lg, {}) },
        { path: "/admission.html", element: i.jsx(Ig, {}) },
        { path: "/paynow.html", element: i.jsx(Dg, {}) },
        { path: "/schoollogin.html", element: i.jsx(Vg, {}) },
        { path: "/blog.html", element: i.jsx(Rg, {}) },
        { path: "/event.html", element: i.jsx(zg, {}) },
        { path: "/location.html", element: i.jsx(Hg, {}) },
        { path: "/about.html", element: i.jsx(Gg, {}) },
      ],
    },
  ]),
  Jg = ga.createRoot(document.getElementById("root"));
Jg.render(i.jsx(rg, { router: Kg }));
