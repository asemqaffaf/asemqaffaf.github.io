"use client";

import React, { useRef } from "react";

import LazyLoadSection from "@/components/atoms/lazy-load-section";
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
      offset: "translate-y-8 opacity-0",
      delay: 0,
      duration: "duration-1000",
      threshold: 0.05,
    },
    {
      ref: aboutRef,
      id: "about-main",
      component: <About />,
      offset: "translate-y-6 opacity-0",
      delay: 0,
      duration: "duration-1000",
      threshold: 0.05,
    },
    {
      ref: portfolioRef,
      id: "portfolio-main",
      component: <Portfolio />,
      offset: "translate-y-4 opacity-0",
      delay: 0,
      duration: "duration-800",
      threshold: 0.05,
    },
    {
      ref: contactRef,
      id: "contact-main",
      component: <Contact />,
      offset: "translate-y-6 opacity-0",
      delay: 0,
      duration: "duration-1000",
      threshold: 0.05,
    },
    {
      id: "footer-main",
      component: <Footer />,
      offset: "translate-y-4 opacity-0",
      delay: 0,
      duration: "duration-800",
      threshold: 0.1,
    },
  ];

  return (
    <>
      <Nav
        bannerRef={bannerRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />

      {/* Mobile-optimized layout */}
      <div
        className="flex w-screen flex-col lg:snap-y lg:snap-mandatory lg:overflow-y-auto"
        style={{
          scrollBehavior: "smooth",
          // Mobile performance optimizations
          WebkitOverflowScrolling: "touch",
          willChange: "scroll-position",
        }}
      >
        {sections.map(
          ({
            ref,
            id,
            component,
            fullScreen,
            offset,
            delay,
            duration,
            threshold,
          }) => (
            <section
              key={id}
              ref={ref as React.RefObject<HTMLElement>}
              id={id}
              className={`
                ${fullScreen ? "h-screen" : "min-h-screen"}
                ${fullScreen ? "lg:h-screen" : "lg:min-h-screen"}
                ${fullScreen ? "w-screen" : ""}
                relative
                lg:snap-start
              `}
              style={{
                // Mobile rendering optimizations
                contain: "layout style",
                // Prevent layout thrashing on mobile
                minHeight: fullScreen ? "100vh" : "100vh",
              }}
            >
              <LazyLoadSection
                offset={offset}
                delay={delay}
                duration={duration}
                threshold={threshold}
              >
                {component}
              </LazyLoadSection>
            </section>
          ),
        )}
      </div>
    </>
  );
}
