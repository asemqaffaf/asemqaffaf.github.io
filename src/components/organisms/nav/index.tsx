/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { languagesList, navigationElements } from "@/util/nav-items";

import LanguageList from "./language";

const Nav = (): React.JSX.Element => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      setIsMobileMenuOpen(false);
      return params.toString();
    },
    [searchParams],
  );

  const handlePageChange = useCallback(
    (navNumber: number) => {
      const pathname = "/";
      router.push(
        `${pathname}?${createQueryString("nav", navNumber.toString())}`,
      );
      setIsMobileMenuOpen(false);
    },
    [createQueryString, router],
  );

  const toggleLanguageMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute z-50 h-fit w-screen animate-fade-in self-center bg-white duration-1000 dark:bg-zinc-800">
      <div className="h-50 fixed mx-auto flex w-full flex-wrap items-center justify-between bg-white p-4 duration-1000 dark:bg-zinc-800">
        <Link
          href="/?nav=0"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/logo/logo-4.png"
            alt="Logo"
            width={80}
            height={80}
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            {/* Logo Title */}
          </span>
        </Link>
        <div className="flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* selected Language */}
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            onClick={toggleLanguageMenu}
            className="flex w-36 cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 md:flex lg:flex dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            {languagesList.find((lang) => lang.value === i18n.language)?.name ||
              languagesList["0"].name}
          </button>
          {/* <!-- Dropdown --> */}
          <div
            className={`${isLanguageMenuOpen ? "hidden md:flex" : "hidden"}  show absolute top-10 z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:bg-zinc-800`}
            id="language-dropdown-menu"
          >
            <LanguageList
              setIsLanguageMenuOpen={setIsLanguageMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* Drawer here! */}
        <div
          className={`${isMobileMenuOpen ? "show" : "hidden"} w-full items-center justify-between self-center text-center md:order-1 md:flex md:w-auto`}
          id="navbar-language"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:bg-zinc-800 md:dark:bg-zinc-800">
            {navigationElements.map((item, i) => {
              return (
                <li key={item.name}>
                  <button
                    className={`${i < navigationElements.length - 1 && "mb-5"} md:mb-0`}
                    type="button"
                    onClick={() => handlePageChange(item.index)}
                  >
                    {t(`nav.element.${item.name}`)}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-center md:hidden">
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
