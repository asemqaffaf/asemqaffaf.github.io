"use client";

import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export function FooterWithSitemap() {
  const { t } = useTranslation();
  return (
    <footer className="flex h-full w-full overflow-scroll bg-white lg:items-center dark:bg-zinc-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8  ">
        <div className="items-center md:flex md:justify-between">
          <div className="mb-6 flex flex-col md:mb-0">
            <Link href="/?nav=0">
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-500 duration-1000 hover:text-gray-900 dark:hover:text-white">
                {t("footer.element.title")}
              </span>
            </Link>

            <a href="tel:+817092831954">
              <div className="mt-4 mb-1 flex flex-col font-light text-gray-500 duration-700  hover:text-black dark:text-gray-400   dark:hover:text-white">
                <span className=" mb-1">Tel: +81 70 9283 1954</span>
              </div>
            </a>
            <a href="mailto:asem@qaffaf.com?subject=Mail from My Site">
              <div className="mb-2 flex flex-col font-light text-gray-500 duration-700  hover:text-black dark:text-gray-400   dark:hover:text-white">
                <span className=" mb-1">Email: asem@qaffaf.com</span>
              </div>
            </a>

            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.google.com/maps?sca_esv=600053872&rlz=1C5CHFA_enJP1080JP1081&output=search&q=roppongi&source=lnms&entry=mc"
            >
              <div className="my-5 mb-1 flex flex-col font-light text-gray-500 duration-700  hover:text-black dark:text-gray-400   dark:hover:text-white">
                {/* <span className="mb-1">Asem Qaffaf</span> */}
                <span className=" mb-1">{t("footer.element.address")}</span>
                <span className=" md:flex">
                  {t("footer.element.address-2")}
                </span>
              </div>
            </Link>
            {/* <Link
              rel="noopener noreferrer"
              target="_blank"
              href=""
            >
              <div className="my-5 mb-1 flex flex-col font-light text-gray-500 duration-700  hover:text-black dark:text-gray-400   dark:hover:text-white">
                <span className="mb-1">Shibuya</span>
                <span className=" mb-1">Shinjuku Station</span>
                <span className="md:flex">Shibuya-ku, Tokyo, Japan</span>
              </div>
            </Link> */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="m-[-1px] mb-5 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t("footer.element.col-1-title")}
              </h2>
              <ul className="font-light text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/?nav=1"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    {t("footer.element.col-1-1")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/?nav=2"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    {t("footer.element.col-1-2")}
                  </Link>
                </li>
                {/* <li className="mb-4">
                  <Link
                    href="/?nav=4"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    {t("footer.element.col-1-3")}
                  </Link>
                </li> */}
                {/* <li className="mb-4">
                  <Link
                    href="/?nav=4"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    {t("footer.element.col-1-4")}
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/?nav=4"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    {t("footer.element.col-1-5")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="m-[-1px] mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t("footer.element.col-2-title")}
              </h2>
              <ul className="font-light text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/asemqaffaf"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    {t("footer.element.col-2-1")}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://linkedin.com/in/asem-qaffaf-75b541199/"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    {t("footer.element.col-2-2")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/asemqaffaf"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    {t("footer.element.col-2-3")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="m-[-1px] mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t("footer.element.col-3-title")}
              </h2>
              <ul className="font-light text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t("footer.element.col-3-1")}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://react.dev/learn"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t("footer.element.col-3-2")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://nextjs.org/blog/next-14"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t("footer.element.col-3-3")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="flex flex-col-reverse items-center  sm:flex sm:items-center sm:justify-between md:flex md:flex-row md:items-start">
          <span className="mb-5 text-sm text-gray-500 sm:text-center md:mb-0 dark:text-gray-400">
            © {new Date().getFullYear()} {t("footer.element.copyrights")}
          </span>
          <div className="mt-8 flex flex-row items-center sm:mt-0 sm:flex-row sm:items-start sm:justify-center ">
            <a
              href="https://facebook.com/asemqaffaf"
              target="_blank"
              className="text-gray-500 duration-700 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-12 md:mb-0 md:size-5"
                icon={faFacebookF}
              />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.linkedin.com/in/asem-qaffaf-75b541199/"
              target="_blank"
              className="ms-5 text-gray-500 duration-700 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-12 md:mb-0 md:size-5"
                icon={faLinkedinIn}
              />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/asemqaffaf"
              target="_blank"
              className="ms-5 text-gray-500 duration-700 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-12 md:mb-0 md:size-5"
                icon={faXTwitter}
              />
              <span className="sr-only">X Twitter</span>
            </a>
            <a
              href="https://github.com/asemqaffaf"
              target="_blank"
              className="ms-5 text-gray-500 duration-700 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-12 md:mb-0 md:size-5"
                icon={faGithub}
              />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
