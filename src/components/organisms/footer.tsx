"use client";

import React from "react";
import Typewriter from "typewriter-effect";

import { FooterWithSitemap } from "@/components/molecules/footer-sitemap";
import { typeWriteList } from "@/constants";

const randomTypeWriteList = typeWriteList.sort(() => 0.5 - Math.random());

export default function Footer() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Spacer to push footer to bottom */}
      <div className="grow" />
      {/* Typewriter Section - Now visible on mobile */}
      <div className="flex h-48 w-full items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-8 sm:h-64 md:h-96 lg:h-80 dark:from-gray-900 dark:to-gray-800">
        <div className="flex items-center justify-center text-center text-2xl font-extralight text-gray-400 sm:text-4xl md:text-5xl lg:text-8xl">
          <Typewriter
            options={{
              strings: randomTypeWriteList,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-auto w-full">
        <FooterWithSitemap />
      </div>
    </div>
  );
}
