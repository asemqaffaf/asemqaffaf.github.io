(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    72043: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 6869));
    },
    95394: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = r(37445),
        a = r(91320),
        i = r(95431);
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
      var l = r(61737),
        c = r.n(l);
      function o(e) {
        let { name: t, postion: r, flagUrl: i, country: s } = e,
          [l, o] = (0, a.useState)(!1);
        return (0, n.jsx)("div", {
          className: "card-body",
          onMouseEnter: () => o(!0),
          onMouseLeave: () => o(!1),
          children: (0, n.jsx)("div", {
            className: "card-container",
            children: (0, n.jsxs)("div", {
              className: "card-card",
              children: [
                (0, n.jsx)("div", {
                  className: "flag",
                  style: {
                    backgroundImage: 'url("'.concat(i, '")'),
                    clipPath: l
                      ? "circle(100% at 100%)"
                      : "circle(150px at 80% 20%)",
                  },
                }),
                (0, n.jsx)("div", {
                  className: "card-imgBx",
                  children: (0, n.jsx)(c(), {
                    width: 150,
                    height: 150,
                    className: "text-zinc-500",
                    src: "/nextjs-github-pages/vercel.svg",
                    alt: t,
                    priority: !0,
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "card-contentBx",
                  children: [
                    (0, n.jsx)("h2", { children: t }),
                    (0, n.jsx)("div", {
                      className: "card-size",
                      children: (0, n.jsx)("h3", { children: r }),
                    }),
                    (0, n.jsx)("div", {
                      className: "card-color",
                      children: (0, n.jsx)("h3", { children: s }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function d(e) {
        let { currentPage: t } = e,
          { isMounted: r } = (0, i.t)(t, "Company");
        return (0, n.jsx)("div", {
          className:
            "flex h-full w-screen flex-col items-center justify-center overflow-hidden bg-[rgb(249,250,238)]",
          children: (0, n.jsxs)("div", {
            className: "flex flex-col flex-wrap content-between  items-center",
            children: [
              (0, n.jsx)("div", {
                className: "flex flex-wrap self-center",
                children: s.map((e) =>
                  (0, n.jsx)(
                    "div",
                    { className: "m-2", children: (0, n.jsx)(o, { ...e }) },
                    e.profilePic,
                  ),
                ),
              }),
              (0, n.jsx)("div", {
                className: "flex flex-wrap self-center",
                children: s.map((e) =>
                  (0, n.jsx)(
                    "div",
                    { className: "m-2", children: (0, n.jsx)(o, { ...e }) },
                    e.profilePic,
                  ),
                ),
              }),
            ],
          }),
        });
      }
    },
    95431: function (e, t, r) {
      "use strict";
      r.d(t, {
        t: function () {
          return i;
        },
      });
      var n = r(91320);
      let a = [
        { name: "Company", href: "/company", index: 1 },
        { name: "News", href: "/news", index: 2 },
        { name: "Services", href: "/services", index: 3 },
        { name: "Contact", href: "/contact", index: 4 },
      ];
      a.map((e) => e.name);
      let i = (e, t) => {
        let [r, i] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            a.find((r) => r.index === e && r.name === t) ? i(!0) : i(!1);
          }, [e, t]),
          { isMounted: r }
        );
      };
    },
    6869: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return g;
          },
        });
      var n = r(37445),
        a = r(91320),
        i = r(39962),
        s = r(95394),
        l = r(95431);
      function c(e) {
        let { currentPage: t } = e,
          { isMounted: r } = (0, l.t)(t, "Contact");
        return (0, n.jsx)("div", {
          className:
            "flex h-full w-screen flex-col items-center justify-center overflow-hidden bg-red-500",
          children: r
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block",
                  }),
                  (0, n.jsx)("h1", {
                    className:
                      "text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text p-[2%] font-display text-4xl text-transparent duration-1000  sm:text-6xl md:text-9xl",
                    children: "Contact",
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block",
                  }),
                ],
              })
            : (0, n.jsx)("div", {}),
        });
      }
      var o = r(60268),
        d = r(41399),
        u = r.n(d);
      function h(e) {
        let {
            className: t = "",
            quantity: r = 30,
            staticity: i = 50,
            ease: s = 50,
            refresh: l = !1,
          } = e,
          c = (0, a.useRef)(null),
          o = (0, a.useRef)(null),
          d = (0, a.useRef)(null),
          u = (0, a.useRef)([]),
          h = (function () {
            let [e, t] = (0, a.useState)({ x: 0, y: 0 });
            return (
              (0, a.useEffect)(() => {
                let e = (e) => {
                  t({ x: e.clientX, y: e.clientY });
                };
                return (
                  window.addEventListener("mousemove", e),
                  () => {
                    window.removeEventListener("mousemove", e);
                  }
                );
              }, []),
              e
            );
          })(),
          m = (0, a.useRef)({ x: 0, y: 0 }),
          f = (0, a.useRef)({ w: 0, h: 0 }),
          x = window.devicePixelRatio;
        (0, a.useEffect)(
          () => (
            c.current && (d.current = c.current.getContext("2d")),
            g(),
            z(),
            window.addEventListener("resize", g),
            () => {
              window.removeEventListener("resize", g);
            }
          ),
          [],
        ),
          (0, a.useEffect)(() => {
            w();
          }, [h.x, h.y]),
          (0, a.useEffect)(() => {
            g();
          }, [l]);
        let g = () => {
            p(), N();
          },
          w = () => {
            if (c.current) {
              let e = c.current.getBoundingClientRect(),
                { w: t, h: r } = f.current,
                n = h.x - e.left - t / 2,
                a = h.y - e.top - r / 2;
              n < t / 2 &&
                n > -t / 2 &&
                a < r / 2 &&
                a > -r / 2 &&
                ((m.current.x = n), (m.current.y = a));
            }
          },
          p = () => {
            o.current &&
              c.current &&
              d.current &&
              ((u.current.length = 0),
              (f.current.w = o.current.offsetWidth),
              (f.current.h = o.current.offsetHeight),
              (c.current.width = f.current.w * x),
              (c.current.height = f.current.h * x),
              (c.current.style.width = "".concat(f.current.w, "px")),
              (c.current.style.height = "".concat(f.current.h, "px")),
              d.current.scale(x, x));
          },
          v = () => {
            let e = Math.floor(Math.random() * f.current.w);
            return {
              x: e,
              y: Math.floor(Math.random() * f.current.h),
              translateX: 0,
              translateY: 0,
              size: Math.floor(2 * Math.random()) + 2,
              alpha: 0,
              targetAlpha: parseFloat((0.6 * Math.random() + 0.1).toFixed(1)),
              dx: (Math.random() - 0.5) * 0.2,
              dy: (Math.random() - 0.5) * 0.2,
              magnetism: 0.1 + 4 * Math.random(),
            };
          },
          j = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (d.current) {
              let {
                x: r,
                y: n,
                translateX: a,
                translateY: i,
                size: s,
                alpha: l,
              } = e;
              d.current.translate(a, i),
                d.current.beginPath(),
                d.current.arc(r, n, s, 0, 2 * Math.PI),
                (d.current.fillStyle = "white"),
                d.current.fill(),
                d.current.setTransform(x, 0, 0, x, 0, 0),
                t || u.current.push(e);
            }
          },
          y = () => {
            d.current && d.current.clearRect(0, 0, f.current.w, f.current.h);
          },
          N = () => {
            y();
            for (let e = 0; e < r; e++) j(v());
          },
          b = (e, t, r, n, a) => {
            let i = ((e - t) * (a - n)) / (r - t) + n;
            return i > 0 ? i : 0;
          },
          z = () => {
            y(),
              u.current.forEach((e, t) => {
                let r = parseFloat(
                  b(
                    [
                      e.x + e.translateX - e.size,
                      f.current.w - e.x - e.translateX - e.size,
                      e.y + e.translateY - e.size,
                      f.current.h - e.y - e.translateY - e.size,
                    ].reduce((e, t) => Math.min(e, t)),
                    0,
                    20,
                    0,
                    1,
                  ).toFixed(2),
                );
                r > 1
                  ? ((e.alpha += 0.02),
                    e.alpha > e.targetAlpha && (e.alpha = e.targetAlpha))
                  : (e.alpha = e.targetAlpha * r),
                  (e.x += e.dx),
                  (e.y += e.dy),
                  (e.translateX +=
                    (m.current.x / (i / e.magnetism) - e.translateX) / s),
                  (e.translateY +=
                    (m.current.y / (i / e.magnetism) - e.translateY) / s),
                  e.x < -e.size ||
                  e.x > f.current.w + e.size ||
                  e.y < -e.size ||
                  e.y > f.current.h + e.size
                    ? (u.current.splice(t, 1), j(v()))
                    : j(
                        {
                          ...e,
                          x: e.x,
                          y: e.y,
                          translateX: e.translateX,
                          translateY: e.translateY,
                          alpha: e.alpha,
                        },
                        !0,
                      );
              }),
              window.requestAnimationFrame(z);
          };
        return (0, n.jsx)("div", {
          className: t,
          ref: o,
          "aria-hidden": "true",
          children: (0, n.jsx)("canvas", { ref: c }),
        });
      }
      function m() {
        return (0, n.jsxs)("div", {
          className:
            "flex h-full w-screen flex-col items-center justify-center overflow-hidden ",
          children: [
            (0, n.jsx)("div", {
              className:
                "animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block",
            }),
            (0, n.jsx)(h, {
              className: "absolute inset-0 -z-10 animate-fade-in",
              quantity: 200,
            }),
            (0, n.jsx)("h1", {
              className:
                "text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text p-[2%] font-display text-4xl text-transparent duration-1000  sm:text-6xl md:text-9xl",
              children: "しんぷりーじー",
            }),
            (0, n.jsx)("div", {
              className:
                "animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block",
            }),
            (0, n.jsx)("div", {
              className:
                "absolute inset-x-0 bottom-0 my-16 animate-fade-in text-center",
              children: (0, n.jsxs)("h2", {
                className: "text-sm text-zinc-500 ",
                children: [
                  "Our world-class",
                  " ",
                  (0, n.jsx)(u(), {
                    href: "/team",
                    className: "underline duration-500 hover:text-zinc-300",
                    children: "team,",
                  }),
                  " ",
                  "is committed to enriching the world through our innovations. We aim to deliver global value through the development of streamlined and efficient systems",
                ],
              }),
            }),
          ],
        });
      }
      function f(e) {
        let { currentPage: t } = e,
          { isMounted: r } = (0, l.t)(t, "News");
        return (0, n.jsx)("div", {
          className:
            "flex h-full w-screen flex-col items-center justify-center overflow-hidden bg-blue-500",
          children: r
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block",
                  }),
                  (0, n.jsx)("h1", {
                    className:
                      "text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text p-[2%] font-display text-4xl text-transparent duration-1000  sm:text-6xl md:text-9xl",
                    children: "News",
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block",
                  }),
                ],
              })
            : (0, n.jsx)("div", {}),
        });
      }
      function x(e) {
        let { currentPage: t } = e,
          { isMounted: r } = (0, l.t)(t, "Services");
        return (0, n.jsx)("div", {
          className:
            "flex h-full w-screen flex-col items-center justify-center overflow-hidden bg-gray-500",
          children: r
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block",
                  }),
                  (0, n.jsx)("h1", {
                    className:
                      "text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text p-[2%] font-display text-4xl text-transparent duration-1000  sm:text-6xl md:text-9xl",
                    children: "Services",
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block",
                  }),
                ],
              })
            : (0, n.jsx)("div", {}),
        });
      }
      function g() {
        let [e, t] = (0, a.useState)(0);
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)(i.Z, {
            renderAllPagesOnFirstRender: !1,
            pageOnChange: (e) => {
              t(e);
            },
            customPageNumber: e,
            children: [
              (0, n.jsx)(m, {}),
              (0, n.jsx)(s.Z, { currentPage: e }),
              (0, n.jsx)(f, { currentPage: e }),
              (0, n.jsx)(x, { currentPage: e }),
              (0, n.jsx)(c, { currentPage: e }),
              (0, n.jsx)(o.Z, {}),
            ],
          }),
        });
      }
    },
    53957: function () {},
  },
  function (e) {
    e.O(0, [266, 572, 737, 962, 268, 239, 963, 744], function () {
      return e((e.s = 72043));
    }),
      (_N_E = e.O());
  },
]);
