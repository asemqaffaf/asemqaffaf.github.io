"use client";

import React from "react";
import Typewriter from "typewriter-effect";

import { FooterWithSitemap } from "@/components/molecules/footer-sitemap";
import { typeWriteList } from "@/constants";

const randomTypeWriteList = typeWriteList.sort(() => 0.5 - Math.random());
export default function Footer() {
  return (
    <div className="flex h-auto flex-col justify-center md:h-screen">
      <div className="hidden h-2/6 w-full items-center sm:flex md:flex md:h-2/4 lg:h-2/4 ">
        <div className="flex h-80 items-center justify-center text-4xl font-extralight text-zinc-100 sm:text-5xl md:text-4xl lg:text-8xl">
          <Typewriter
            options={{
              strings: randomTypeWriteList,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="h-3/6 w-full md:h-3/4 lg:h-2/4 self-end">
        <FooterWithSitemap />
      </div>
    </div>
  );
}
