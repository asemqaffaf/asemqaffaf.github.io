import React from "react";
import { useTranslation } from "react-i18next";

import { aboutMe } from "@/constants";

import Card from "../molecules/card/card";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-6 py-8 md:flex-row md:px-8 md:py-16">
      {/* Left side Card */}
      <div className="flex h-[600px] min-h-[400px] w-full items-center justify-center md:h-[700px] md:min-h-[500px] md:w-2/5">
        <Card
          {...aboutMe}
          name={t("component.element.name")}
          brief={t("page.about.brief")}
        />
      </div>

      {/* Right side glass panel */}
      <div className="flex w-full justify-center md:w-3/5">
        <div className="flex w-full flex-col rounded-xl border border-white/30 bg-white/10 shadow-lg backdrop-blur-lg backdrop-saturate-150 dark:border-white/10 dark:bg-white/5">
          {/* Title */}
          <div className="flex justify-center p-3">
            <h2 className="bg-gradient-to-r from-blue-100 via-purple-100 to-gray-100 bg-clip-text p-4 text-center text-4xl leading-tight tracking-tight text-transparent md:text-5xl">
              {t("page.about.title")}
            </h2>
          </div>

          {/* Scrollable content */}
          <div className="flex flex-col overflow-y-auto p-8 pb-6">
            <p className="mb-8 text-justify leading-relaxed text-white">
              {t("page.about.paragraph")}
            </p>

            <dl className="grid grid-cols-2 gap-8 gap-y-12 text-center text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white">
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold text-white">
                  20K+
                </dt>
                <dd className="text-sm text-white md:text-base ">
                  {t("page.about.work-experience")}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold text-white">16+</dt>
                <dd className="text-sm text-white md:text-base ">
                  {t("page.about.projects-contributed")}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold text-white">30+</dt>
                <dd className="text-sm text-white md:text-base ">
                  {t("page.about.tech-frameworks")}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold text-white">7</dt>
                <dd className="text-sm text-white md:text-base ">
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
