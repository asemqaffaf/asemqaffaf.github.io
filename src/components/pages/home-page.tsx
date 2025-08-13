/* eslint-disable tailwindcss/no-custom-classname */

"use client";

import { useTranslation } from "react-i18next";

import Particles from "../atoms/particles";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    // <div className="flex h-full w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <div className="flex h-full w-screen flex-col items-center justify-center overflow-hidden">
      <div className="animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />

      <h1 className="text-edge-outline z-10 animate-fade-in cursor-default bg-white bg-clip-text text-center text-3xl text-transparent duration-1000 md:animate-title md:text-4xl lg:whitespace-nowrap">
        {t("page.home.title")}
      </h1>

      <div className="animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block" />

      <div className="absolute inset-x-20 bottom-10 my-16 animate-fade-in text-center">
        <h2 className="text-sm text-zinc-100 ">
          {t("page.home.description")}
          {t("page.home.description-2")}
          {t("page.home.description-3")}
        </h2>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 animate-bounce px-4 opacity-100 transition-opacity delay-300 duration-1000">
        <div className="text-center">
          <p className="text-xs font-light tracking-widest text-white/50">
            SCROLL TO EXPLORE
          </p>
          <div className="mt-2 flex justify-center">
            <div className="h-6 w-px bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
