"use client";

import React from "react";
import Typewriter from "typewriter-effect";

import { FooterWithSitemap } from "@/app/components/molecules/footer-sitemap";
import { typeWriteList } from "@/constants";

const randomTypeWriteList = typeWriteList.sort(() => 0.5 - Math.random());
export default function Footer({
  homeScreen = false,
}: {
  homeScreen?: boolen;
}) {
  return (
    <div
      className={`flex flex-col ${homeScreen ? "h-screen" : undefined}  justify-center`}
    >
      <div className="hidden h-[70%] w-full items-center sm:flex md:flex">
        <div className="text-4xl h-80 font-extralight flex justify-center items-center text-zinc-100 sm:text-5xl md:text-8xl">
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
