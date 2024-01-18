/* eslint-disable tailwindcss/no-custom-classname */

"use client";

import Link from "next/link";
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

      <h1 className="text-edge-outline z-10 animate-title cursor-default text-center bg-white bg-clip-text text-transparent duration-1000 text-3xl md:text-4xl lg:whitespace-nowrap">
        {t("page.home.title")}
      </h1>

      <div className="animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block" />

      <div className="absolute inset-x-0 bottom-0 my-16 animate-fade-in text-center">
        <h2 className="animate-bounce text-sm text-zinc-100 ">
          {t("page.home.description")}{" "}
          <Link
            href="/?nav=1"
            className="underline duration-500 hover:text-zinc-300"
          >
            {t("page.home.description-2")}
          </Link>{" "}
          {t("page.home.description-3")}
        </h2>
      </div>
    </div>
  );
}
