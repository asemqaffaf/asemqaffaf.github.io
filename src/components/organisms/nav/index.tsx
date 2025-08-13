/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { languagesList, navigationElements } from "@/util/nav-items";

import LanguageList from "./language";

interface NavProps {
  bannerRef?: React.RefObject<HTMLDivElement>;
  aboutRef?: React.RefObject<HTMLDivElement>;
  portfolioRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
}

const Nav = ({
  bannerRef,
  aboutRef,
  portfolioRef,
  contactRef,
}: NavProps): React.JSX.Element => {
  const { t, i18n } = useTranslation();

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Map navigation elements to their corresponding refs
  const sectionRefs = {
    0: bannerRef, // Home/Banner
    1: aboutRef, // About
    2: portfolioRef, // Portfolio
    3: contactRef, // Contact
  };

  const scrollToSection = (navNumber: number) => {
    const targetRef = sectionRefs[navNumber as keyof typeof sectionRefs];

    if (targetRef?.current) {
      // Check if we're on mobile or desktop to handle different layouts
      const isMobile = window.innerWidth < 1024; // lg breakpoint

      if (isMobile) {
        // For mobile: smooth scroll to the ref
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // For desktop: scroll to the section with snap behavior
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    setIsMobileMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-4 z-50 mx-8 h-fit w-[calc(100%-4rem)] animate-fade-in self-center rounded-xl border border-white/5 bg-white/5 shadow-2xl shadow-black/10 backdrop-blur-2xl duration-1000 dark:border-zinc-700/20 dark:bg-zinc-900/40 dark:shadow-black/50">
      <div className="h-50 mx-auto flex w-full flex-wrap items-center justify-between p-4">
        <button
          type="button"
          onClick={() => scrollToSection(0)}
          className="group flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/logo/logo-4.png"
            alt="Logo"
            width={60}
            height={60}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white">
            {/* Logo Title */}
          </span>
        </button>

        <div className="flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* Language Selector */}
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            onClick={toggleLanguageMenu}
            className="hidden w-36 cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-white/10 active:scale-95 md:flex dark:text-gray-200 dark:hover:bg-zinc-800/10"
          >
            <span className="mr-2 text-base">🌐</span>
            {languagesList.find((lang) => lang.value === i18n.language)?.name ||
              languagesList["0"].name}
            <svg
              className={`ml-2 h-4 w-4 transition-transform duration-200 ${isLanguageMenuOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Language Dropdown */}
          <div
            className={`${
              isLanguageMenuOpen
                ? "animate-in fade-in-0 zoom-in-95 block"
                : "hidden"
            } absolute top-24 z-50 my-6 list-none divide-y divide-gray-100 rounded-xl border border-white/10 bg-white/80 text-base shadow-2xl backdrop-blur-2xl md:right-auto md:top-10 dark:divide-zinc-700 dark:border-zinc-600/30 dark:bg-zinc-800/80`}
            id="language-dropdown-menu"
          >
            <LanguageList
              setIsLanguageMenuOpen={setIsLanguageMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-600 transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200 active:scale-95 md:hidden dark:text-gray-400 dark:hover:bg-zinc-800/10 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`h-5 w-5 transition-transform duration-200 ${isMobileMenuOpen ? "rotate-45" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              {isMobileMenuOpen ? (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l15 12M16 1L1 13"
                />
              ) : (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            isMobileMenuOpen
              ? "animate-in fade-in-0 slide-in-from-top-2 block"
              : "hidden"
          } w-full items-center justify-between self-center text-center md:order-1 md:flex md:w-auto`}
          id="navbar-language"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-white/5 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse dark:bg-zinc-800/5 md:dark:bg-transparent">
            {navigationElements.map((item, i) => {
              return (
                <li key={item.name}>
                  <button
                    className={`${
                      i < navigationElements.length - 1 && "mb-5"
                    } rounded-lg px-4 py-2 text-gray-700 transition-all duration-200 hover:bg-white/10 active:scale-95 md:mb-0 md:px-3 md:py-1 dark:text-gray-300 dark:hover:bg-zinc-800/10`}
                    type="button"
                    onClick={() => scrollToSection(item.index)}
                  >
                    {t(`nav.element.${item.name}`)}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile Language List */}
          <div className="mt-4 flex items-center justify-center rounded-lg border-t border-gray-200/20 pt-4 md:hidden dark:border-zinc-700/30">
            <LanguageList
              setIsLanguageMenuOpen={setIsLanguageMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
