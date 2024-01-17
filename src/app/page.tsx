"use client";

import React, { useCallback, useContext } from "react";
import ReactPageScroller from "react-page-scroller";
import { useSignalValue } from "signals-react-safe";

import { AppState } from "@/hooks/signalsContext";

import Footer from "./components/organisms/footer";
// import Nav from "./components/organisms/nav";
import Company from "./components/pages/company";
import Contact from "./components/pages/contact";
import HomePage from "./components/pages/home-page";
import News from "./components/pages/news";
import Services from "./components/pages/services";

export default function App(): React.JSX.Element {
  const appState = useContext(AppState);
  const navStateValue = useSignalValue(appState);

  const handlePageChange = useCallback(
    (navNumber: number) => {
      appState.value = { currentNav: appState.value.currentNav, navNumber };
    },
    [appState],
  );

  return (
    <ReactPageScroller
      renderAllPagesOnFirstRender={false}
      pageOnChange={handlePageChange}
      customPageNumber={navStateValue.navNumber}
    >
      <HomePage />
      <Company />
      <News />
      <Services shouldMount={navStateValue.navNumber === 3} />
      <Contact />
      <Footer homeScreen />
    </ReactPageScroller>
  );
}
