import React from "react";
import { useTranslation } from "react-i18next";

import { aboutMe } from "@/constants";

import Card from "../molecules/card/card";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen w-screen flex-row">
      <div className="mt-5 flex h-full w-full flex-col items-center justify-center self-center md:w-2/4 h-full">
        <Card
          {...aboutMe}
          name={t("component.element.name")}
          brief={t("page.about.brief")}
        />
      </div>
      <div className="hidden w-full flex-col items-center justify-center md:flex  ">
        <div className="w-[95%] rounded-lg border border-gray-200 bg-zinc-100 shadow dark:border-gray-700 dark:bg-gray-800">
          <div
            className="flex h-[62vh] flex-col overflow-scroll rounded-lg bg-zinc-100 p-4 md:p-8 dark:bg-gray-800"
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-10">
              {t("page.about.title")}
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400 mt-10 text-ellipsis">
              {t("page.about.paragraph")}
            </p>
            <dl className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 p-2 text-gray-900 sm:grid-cols-3 sm:p-8 xl:grid-cols-6 dark:text-white">
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">20K+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  {t("page.about.work-experience")}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">16+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  {t("page.about.projects-contributed")}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">30+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  {t("page.about.tech-frameworks")}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">7</dt>
                <dd className="text-gray-500 dark:text-gray-400">
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
