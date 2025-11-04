/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { languagesList, navigationElements } from "@/util/nav-items";

import LanguageList from "./language";

interface NavProps {
  bannerRef?: React.RefObject<HTMLDivElement>;
  aboutRef?: React.RefObject<HTMLDivElement>;
  portfolioRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
}

const NAVBAR_OFFSET = 80; // Adjust if your navbar height changes

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
  const sectionRefs = useMemo(() => {
    return {
      0: bannerRef, // Home/Banner
      1: aboutRef, // About
      2: portfolioRef, // Portfolio
      3: contactRef, // Contact
    };
  }, [bannerRef, aboutRef, portfolioRef, contactRef]);

  // Function to scroll to a specific section
  // Uses the sectionRefs to get the correct ref based on the index
  const scrollToSection = useCallback(
    (navNumber: number) => {
      const targetRef = sectionRefs[navNumber as keyof typeof sectionRefs];
      if (targetRef?.current) {
        const elementTop =
          targetRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop - NAVBAR_OFFSET,
          behavior: "smooth",
        });
      }
      setIsMobileMenuOpen(false);
    },
    [sectionRefs],
  );

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (!isMobileMenuOpen) setIsLanguageMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav className="fixed top-4 z-50 mx-8 h-fit w-[calc(100%-4rem)] animate-fade-in self-center rounded-xl border border-white/5 bg-white/5 shadow-2xl shadow-black/10 backdrop-blur-2xl duration-1000 dark:border-zinc-700/20 dark:bg-zinc-900/40 dark:shadow-black/50">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between p-4">
          {/* Logo */}
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
          </button>

          <div className="flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
            {/* Desktop Language Selector */}
            <button
              type="button"
              onClick={toggleLanguageMenu}
              className="hidden w-36 cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-white/10 active:scale-95 md:flex dark:text-gray-200 dark:hover:bg-zinc-800/10"
            >
              <span className="mr-2 text-base">🌐</span>
              {languagesList.find((lang) => lang.value === i18n.language)
                ?.name || languagesList[0].name}
              <svg
                className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  isLanguageMenuOpen ? "rotate-180" : ""
                }`}
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

            {/* Desktop Language Dropdown */}
            {isLanguageMenuOpen && (
              <div className="absolute end-0 top-16 z-50 hidden list-none divide-y divide-gray-100 rounded-xl border border-white/10 bg-white/80 text-base shadow-2xl backdrop-blur-2xl md:block dark:divide-zinc-700 dark:border-zinc-600/30 dark:bg-zinc-800/80">
                <LanguageList
                  setIsLanguageMenuOpen={setIsLanguageMenuOpen}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-600 transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200 active:scale-95 md:hidden dark:text-gray-400 dark:hover:bg-zinc-800/10 dark:focus:ring-gray-600"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden w-full items-center justify-between self-center text-center md:order-1 md:flex md:w-auto">
            <ul className="flex flex-row space-x-8 font-medium rtl:space-x-reverse">
              {navigationElements.map((item) => (
                <li key={item.name}>
                  <button
                    className="rounded-lg px-3 py-1 text-gray-700 transition-all duration-200 hover:bg-white/10 active:scale-95 dark:text-gray-300 dark:hover:bg-zinc-800/10"
                    type="button"
                    onClick={() => scrollToSection(item.index)}
                  >
                    {t(`nav.element.${item.name}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
        >
          <div className="border-t border-white/10 bg-white/5 backdrop-blur-xl dark:border-zinc-700/20 dark:bg-zinc-800/5">
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col space-y-2 p-4">
              {navigationElements.map((item) => (
                <li key={item.name}>
                  <button
                    className="w-full touch-manipulation rounded-lg px-4 py-3 text-left text-gray-700 transition-all duration-200 hover:bg-white/10 active:scale-95 dark:text-gray-300 dark:hover:bg-zinc-800/10"
                    type="button"
                    onClick={() => scrollToSection(item.index)}
                  >
                    {t(`nav.element.${item.name}`)}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Language Selector */}
            <div className="border-t border-white/10 p-4 dark:border-zinc-700/20">
              <div className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Language
              </div>
              <LanguageList
                setIsLanguageMenuOpen={setIsLanguageMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
