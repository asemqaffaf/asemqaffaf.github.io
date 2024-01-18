"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import ReactPageScroller from "react-page-scroller";

import Footer from "./components/organisms/footer";
// import Nav from "./components/organisms/nav";
import Company from "./components/pages/company";
import Contact from "./components/pages/contact";
import HomePage from "./components/pages/home-page";
import News from "./components/pages/news";
import Services from "./components/pages/services";

export default function App(): React.JSX.Element {
  const searchParams = useSearchParams();

  return (
    <>
      <div className="flex w-screen flex-col md:hidden">
        <div className="h-screen w-screen">
          <HomePage />
        </div>
        <div className="h-screen w-screen">
          <Company />
        </div>

        <div className="h-full w-screen">
          <News />
        </div>
        <div className="h-full w-screen">
          <Contact />
        </div>

        <div className="h-full w-screen">
          <Footer />
        </div>
      </div>
      <div className="hidden w-screen md:flex">
        <ReactPageScroller
          renderAllPagesOnFirstRender={false}
          customPageNumber={Number(searchParams?.get("nav")) || 0}
        >
          <HomePage />
          <Company />
          <News />
          <Services />
          <Contact />
          <Footer homeScreen />
        </ReactPageScroller>
      </div>
    </>
  );
}
