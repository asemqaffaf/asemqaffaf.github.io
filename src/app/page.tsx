"use client";

import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import Footer from "./components/organisms/footer";
import Nav from "./components/organisms/nav";
import Company from "./components/pages/company";
import Contact from "./components/pages/contact";
import HomePage from "./components/pages/home-page";
import News from "./components/pages/news";
import Services from "./components/pages/services";

export default function App(): React.JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <Nav
        setCurrentPage={setCurrentPage}
        color={currentPage <= 1 ? "zinc-500" : "white"}
      />
      <ReactPageScroller
        renderAllPagesOnFirstRender={false}
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <HomePage />
        <Company currentPage={currentPage} />
        <News currentPage={currentPage} />
        <Services currentPage={currentPage} />
        <Contact currentPage={currentPage} />
        <Footer />
      </ReactPageScroller>
    </>
  );
}
