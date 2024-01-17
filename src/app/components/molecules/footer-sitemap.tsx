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

export function FooterWithSitemap() {
  return (
    <footer className="flex h-full overflow-scroll bg-white lg:items-center dark:bg-zinc-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8  ">
        <div className="items-center md:flex md:justify-between">
          <div className="mb-6 flex flex-col md:mb-0">
            <Link href="/">
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-500 duration-1000 hover:text-gray-900 dark:hover:text-white">
                Asem Qaffaf
              </span>
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.google.com/maps/place/Akasaka,+Minato+City,+Tokyo+107-0052/data=!4m2!3m1!1s0x60188b811f57f195:0x11a6a34cc5074741?sa=X&ved=2ahUKEwjL9rKQ1OSDAxXsaPUHHYarDuQQ8gF6BAgiEAA"
            >
              <div className="my-5 mb-1 flex flex-col font-light text-gray-500 duration-700  hover:text-black dark:text-gray-400   dark:hover:text-white">
                {/* <span className="mb-1">Asem Qaffaf</span> */}
                <span className=" mb-1">Akasaka</span>
                <span className=" md:flex">Minato City, Tokyo Japan</span>
              </div>
            </Link>
            {/* <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.google.com/maps/uv?pb=!1s0x60188b33999b76f9%3A0x13a8022d028edcd!3m1!7e115!4s%2Fmaps%2Fplace%2F306%2BCentral-Haitsu%2C%2B13-4%2BNanpeidaicho%2C%2F%4035.6548176%2C139.6964807%2C3a%2C75y%2C288.36h%2C90t%2Fdata%3D*213m4*211e1*213m2*211s7FEQ5W-PM7g5cnoKMs_PWQ*212e0*214m2*213m1*211s0x60188b33999b76f9%3A0x13a8022d028edcd%3Fsa%3DX%26ved%3D2ahUKEwi_9_Dn8tWDAxUhZ_UHHWGEBS4Qpx96BAhAEAA!5s306%20Central-Haitsu%2C%2013-4%20Nanpeidaicho%2C%20-%20Google%20%E6%A4%9C%E7%B4%A2!15sCgIgAQ&imagekey=!1e2!2s7FEQ5W-PM7g5cnoKMs_PWQ&hl=ja&sa=X&ved=2ahUKEwi_9_Dn8tWDAxUhZ_UHHWGEBS4Qpx96BAhREA0"
            >
              <div className="my-5 mb-1 flex flex-col font-light text-gray-500 duration-700  hover:text-black dark:text-gray-400   dark:hover:text-white">
                <span className="mb-1">Shibuya Office</span>
                <span className=" mb-1">Shinjuku Station</span>
                <span className="md:flex">Shibuya-ku, Tokyo, Japan</span>
              </div>
            </Link> */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="m-[-1px] mb-5 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resources
              </h2>
              <ul className="font-light text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/company"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    News
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/company"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/company"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    Company
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/company"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    Tech Newsletter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/company"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    Influencer & Endorsement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="m-[-1px] mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-light text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="https://github.com/asemqaffaf"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    Github
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://linkedin.com/in/asem-qaffaf-🍉-75b541199/"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/asemqaffaf"
                    className="text-zinc-400 duration-700 hover:text-black   dark:hover:text-white"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="m-[-1px] mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-light text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="flex flex-col-reverse items-center  sm:flex sm:items-center sm:justify-between md:flex md:flex-row md:items-start">
          <span className="mb-5 text-sm text-gray-500 sm:text-center md:mb-0 dark:text-gray-400">
            © {new Date().getFullYear()} asemqaffaf, inc. All Rights Reserved.
          </span>
          <div className="mt-4 flex flex-col items-center sm:mt-0 sm:flex-row sm:items-start sm:justify-center ">
            <Link
              href="https://facebook.com/asemqaffaf"
              className="text-gray-500 duration-700 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-16 md:mb-0 md:size-5"
                icon={faFacebookF}
              />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/asem-qaffaf-🍉-75b541199/"
              className="ms-5 text-gray-500 duration-700 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-16 md:mb-0 md:size-5"
                icon={faLinkedinIn}
              />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com/asemqaffaf"
              className="ms-5 text-gray-500 duration-700 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-16 md:mb-0 md:size-5"
                icon={faXTwitter}
              />
              <span className="sr-only">X Twitter</span>
            </Link>
            <Link
              href="https://github.com/asemqaffaf"
              className="ms-5 text-gray-500 duration-700 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-16 md:mb-0 md:size-5"
                icon={faGithub}
              />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
