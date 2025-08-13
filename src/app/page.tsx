"use client";

import React, { useRef } from "react";

import Nav from "@/components/organisms/nav";

import Footer from "../components/organisms/footer";
import About from "../components/pages/about";
import Contact from "../components/pages/contact";
import HomePage from "../components/pages/home-page";
import Portfolio from "../components/pages/portfolio";

export default function App(): React.JSX.Element {
  const bannerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Nav
        bannerRef={bannerRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <div className="flex w-screen flex-col lg:hidden">
        <div ref={bannerRef} className="h-screen w-screen">
          <HomePage />
        </div>
        <div
          ref={aboutRef}
          className="lg:min-w-screen lg:min-h-screen"
          id="#about-main"
        >
          <About />
        </div>

        <div ref={portfolioRef} id="portfolio-main" className="h-full w-screen">
          <Portfolio />
        </div>
        <div ref={contactRef} id="contact-main" className="h-full w-screen">
          <Contact />
        </div>

        <div
          id="footer-main"
          className="h-screen w-screen  bg-white sm:bg-transparent dark:bg-zinc-800"
        >
          <Footer />
        </div>
      </div>
      <div className="hidden w-screen snap-y snap-mandatory flex-col overflow-y-auto lg:flex">
        <section ref={bannerRef} className="h-screen snap-start">
          <HomePage />
        </section>
        <section ref={aboutRef} className="min-h-screen snap-start">
          <About />
        </section>
        <section ref={portfolioRef} className="min-h-screen snap-start">
          <Portfolio />
        </section>
        <section ref={contactRef} className="min-h-screen snap-start">
          <Contact />
        </section>
        <section className="min-h-screen snap-start">
          <Footer />
        </section>
      </div>
    </>
  );
}
