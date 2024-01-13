(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [20],
  {
    31963: function (e, n, r) {
      Promise.resolve().then(r.bind(r, 98272));
    },
    29887: function (e, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.defineProperty(n, "RouterContext", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = r(97295)._(r(91320)).default.createContext(null);
    },
    98272: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          default: function () {
            return t;
          },
        });
      var a = r(37445);
      r(91320);
      var i = r(95394);
      function t() {
        return (0, a.jsx)("div", {
          className: "h-screen w-screen",
          children: (0, a.jsx)(i.Z, { currentPage: 1 }),
        });
      }
    },
    95394: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = r(37445),
        i = r(91320),
        t = r(95431);
      let s = [
        {
          name: "Asem Qaffaf",
          postion: "Software Engineer",
          profilePic: "/images/asem.png",
          flagUrl: "/images/jordan-flag.png",
          country: "Jordan",
        },
        {
          name: "Diego Bittencourt Mendes",
          postion: "Software Engineer",
          profilePic: "/images/diego.png",
          flagUrl: "/images/brazil.png",
          country: "Brazil",
        },
        {
          name: "Adil Amjad",
          postion: "Software Engineer",
          profilePic: "/images/adil.png",
          flagUrl: "/images/pakistan.png",
          country: "Pakistan",
        },
        {
          name: "Shuntaro Tashiro",
          postion: "Tech Lead / PM",
          profilePic: "/images/shun.png",
          flagUrl: "/images/japan.png",
          country: "Japan",
        },
        {
          name: "Chigoziem Nwaiwu",
          postion: "Software Engineer",
          profilePic: "/images/prince.png",
          flagUrl: "/images/nigeria.png",
          country: "Nigeria",
        },
      ];
      r(53957);
      var c = r(61737),
        l = r.n(c);
      function o(e) {
        let { name: n, postion: r, flagUrl: t, country: s } = e,
          [c, o] = (0, i.useState)(!1);
        return (0, a.jsx)("div", {
          className: "card-body",
          onMouseEnter: () => o(!0),
          onMouseLeave: () => o(!1),
          children: (0, a.jsx)("div", {
            className: "card-container",
            children: (0, a.jsxs)("div", {
              className: "card-card",
              children: [
                (0, a.jsx)("div", {
                  className: "flag",
                  style: {
                    backgroundImage: 'url("'.concat(t, '")'),
                    clipPath: c
                      ? "circle(100% at 100%)"
                      : "circle(150px at 80% 20%)",
                  },
                }),
                (0, a.jsx)("div", {
                  className: "card-imgBx",
                  children: (0, a.jsx)(l(), {
                    width: 150,
                    height: 150,
                    className: "text-zinc-500",
                    src: "/nextjs-github-pages/vercel.svg",
                    alt: n,
                    priority: !0,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "card-contentBx",
                  children: [
                    (0, a.jsx)("h2", { children: n }),
                    (0, a.jsx)("div", {
                      className: "card-size",
                      children: (0, a.jsx)("h3", { children: r }),
                    }),
                    (0, a.jsx)("div", {
                      className: "card-color",
                      children: (0, a.jsx)("h3", { children: s }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function f(e) {
        let { currentPage: n } = e,
          { isMounted: r } = (0, t.t)(n, "Company");
        return (0, a.jsx)("div", {
          className:
            "flex h-full w-screen flex-col items-center justify-center overflow-hidden bg-[rgb(249,250,238)]",
          children: (0, a.jsxs)("div", {
            className: "flex flex-col flex-wrap content-between  items-center",
            children: [
              (0, a.jsx)("div", {
                className: "flex flex-wrap self-center",
                children: s.map((e) =>
                  (0, a.jsx)(
                    "div",
                    { className: "m-2", children: (0, a.jsx)(o, { ...e }) },
                    e.profilePic,
                  ),
                ),
              }),
              (0, a.jsx)("div", {
                className: "flex flex-wrap self-center",
                children: s.map((e) =>
                  (0, a.jsx)(
                    "div",
                    { className: "m-2", children: (0, a.jsx)(o, { ...e }) },
                    e.profilePic,
                  ),
                ),
              }),
            ],
          }),
        });
      }
    },
    95431: function (e, n, r) {
      "use strict";
      r.d(n, {
        t: function () {
          return t;
        },
      });
      var a = r(91320);
      let i = [
        { name: "Company", href: "/company", index: 1 },
        { name: "News", href: "/news", index: 2 },
        { name: "Services", href: "/services", index: 3 },
        { name: "Contact", href: "/contact", index: 4 },
      ];
      i.map((e) => e.name);
      let t = (e, n) => {
        let [r, t] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            i.find((r) => r.index === e && r.name === n) ? t(!0) : t(!1);
          }, [e, n]),
          { isMounted: r }
        );
      };
    },
    53957: function () {},
    17772: function (e, n, r) {
      "use strict";
      var a = r(91320),
        i = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c =
          a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function o(e, n, r) {
        var a,
          t = {},
          o = null,
          f = null;
        for (a in (void 0 !== r && (o = "" + r),
        void 0 !== n.key && (o = "" + n.key),
        void 0 !== n.ref && (f = n.ref),
        n))
          s.call(n, a) && !l.hasOwnProperty(a) && (t[a] = n[a]);
        if (e && e.defaultProps)
          for (a in (n = e.defaultProps)) void 0 === t[a] && (t[a] = n[a]);
        return {
          $$typeof: i,
          type: e,
          key: o,
          ref: f,
          props: t,
          _owner: c.current,
        };
      }
      (n.Fragment = t), (n.jsx = o), (n.jsxs = o);
    },
    37445: function (e, n, r) {
      "use strict";
      e.exports = r(17772);
    },
  },
  function (e) {
    e.O(0, [737, 239, 963, 744], function () {
      return e((e.s = 31963));
    }),
      (_N_E = e.O());
  },
]);
