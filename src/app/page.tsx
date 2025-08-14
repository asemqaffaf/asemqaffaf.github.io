"use client";

import React, { useRef } from "react";

import Footer from "@/components/organisms/footer";
import Nav from "@/components/organisms/nav";
import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import HomePage from "@/components/pages/home-page";
import Portfolio from "@/components/pages/portfolio";

export default function App(): React.JSX.Element {
  const bannerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      ref: bannerRef,
      id: "home-main",
      component: <HomePage />,
      fullScreen: true,
    },
    { ref: aboutRef, id: "about-main", component: <About /> },
    { ref: portfolioRef, id: "portfolio-main", component: <Portfolio /> },
    { ref: contactRef, id: "contact-main", component: <Contact /> },
    { id: "footer-main", component: <Footer /> },
  ];

  return (
    <>
      <Nav
        bannerRef={bannerRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />

      {/* Unified layout */}
      <div className="w-screen flex flex-col lg:snap-y lg:snap-mandatory lg:overflow-y-auto">
        {sections.map(({ ref, id, component, fullScreen }) => (
          <section
            key={id}
            ref={ref as React.RefObject<HTMLElement>}
            id={id}
            className={`
              ${fullScreen ? "h-screen" : "min-h-screen"}
              ${fullScreen ? "lg:h-screen" : "lg:min-h-screen"}
              ${fullScreen ? "w-screen" : ""}
              lg:snap-start
            `}
          >
            {component}
          </section>
        ))}
      </div>
    </>
  );
}
