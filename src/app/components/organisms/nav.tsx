/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

import { languages, navigation } from "@/util/nav-items";

function LanguageList() {
  return (
    <ul className="py-2 font-medium" role="none">
      {languages.map((lang) => (
        <li key={lang.value}>
          <Link
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div className="inline-flex items-center whitespace-nowrap">
              {lang.name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Nav = (): React.JSX.Element => {
  // const pathname = usePathname();

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchParams = useSearchParams();

  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

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
    },
    [createQueryString, router],
  );

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute z-50 h-fit w-screen animate-fade-in self-center bg-white duration-1000 dark:bg-zinc-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/logo/logo-4.png"
            alt="Logo"
            width={80}
            height={80}
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            {/* A.A.K */}
          </span>
        </Link>
        <div className="flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* selected Language */}
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            onClick={toggleLanguageMenu}
            className="flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 md:flex lg:flex dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            🇺🇲 | English (US)
          </button>
          {/* <!-- Dropdown --> */}
          <div
            className={`${isLanguageMenuOpen ? "hidden md:flex" : "hidden"}  show absolute top-10 z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:bg-zinc-800`}
            // className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            id="language-dropdown-menu"
          >
            <LanguageList />
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
            {navigation.map((item) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => handlePageChange(item.index)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center md:hidden">
            <LanguageList />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
