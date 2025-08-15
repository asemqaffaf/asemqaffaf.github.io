import React from "react";
import { useTranslation } from "react-i18next";

import { aboutMe } from "@/constants";

import Card from "../molecules/card/card";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-2 py-8 md:flex-row md:px-8 md:py-16">
      {/* Left side Card */}
      <div className="flex h-[600px] min-h-[400px] w-full items-center justify-center lg:h-[700px] lg:min-h-[500px] lg:w-2/5">
        <Card
          {...aboutMe}
          name={t("component.element.name")}
          brief={t("page.about.brief")}
        />
      </div>

      {/* Right side glass panel */}
      <div className="flex w-full justify-center lg:w-2/5 ">
        <div className="flex w-full flex-col rounded-xl border border-white/5 bg-white/5 shadow-2xl shadow-black/10 backdrop-blur-2xl duration-1000 dark:border-zinc-700/20 dark:bg-zinc-900/40 dark:shadow-black/50">
          {/* Title */}
          <div className="flex justify-center p-3">
            <h2 className="bg-gradient-to-r bg-clip-text p-4 text-center text-4xl leading-tight tracking-tight text-slate-800 md:text-5xl dark:text-white">
              {t("page.about.title")}
            </h2>
          </div>

          <div className="flex flex-col overflow-y-auto p-8 pb-6">
            <p className="mb-8 text-justify leading-relaxed text-slate-800 dark:text-white">
              {t("page.about.paragraph")}
            </p>

            <dl className="grid grid-cols-2 gap-8 gap-y-12 text-center text-gray-800 sm:grid-cols-3 xl:grid-cols-6 dark:text-white">
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">20K+</dt>
                <dd className="text-sm  md:text-base">
                  {t("page.about.work-experience")}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">16+</dt>
                <dd className="ml-4  text-sm md:text-base">
                  {t("page.about.projects-contributed")}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 ml-4 text-3xl font-extrabold">30+</dt>
                <dd className="ml-4  text-sm md:text-base">
                  {t("page.about.tech-frameworks")}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">7</dt>
                <dd className="ml-4  text-sm md:text-base">
                  {t("page.about.countries")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
