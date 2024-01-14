"use client";

import React from "react";
import Typewriter from "typewriter-effect";

import { FooterWithSitemap } from "@/app/components/molecules/card/footer-sitemap";
import { typeWriteList } from "@/constants";

const randomTypeWriteList = typeWriteList.sort(() => 0.5 - Math.random());
export default function Footer() {
  return (
    <div className="flex h-screen w-screen flex-col justify-center">
      <div className="hidden h-[70%] w-full items-center sm:flex md:flex">
        <div className="text-4xl font-extralight text-zinc-100 sm:text-5xl md:text-8xl">
          <Typewriter
            options={{
              strings: randomTypeWriteList,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <FooterWithSitemap />
    </div>
  );
}
