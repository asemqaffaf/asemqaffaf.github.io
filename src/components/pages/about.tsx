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
      <div className="flex w-full justify-center px-4 md:w-3/5 md:px-0">
        <div className="flex w-full flex-col rounded-xl border border-white/5 bg-white/5 shadow-2xl shadow-black/10 backdrop-blur-2xl duration-1000 dark:border-zinc-700/20 dark:bg-zinc-900/40 dark:shadow-black/50">
          {/* Title */}
          <div className="flex justify-center p-4 md:p-6">
            <h2 className="bg-gradient-to-r bg-clip-text p-2 text-center text-3xl leading-tight tracking-tight text-white md:p-4 md:text-4xl lg:text-5xl">
              {t("page.about.title")}
            </h2>
          </div>
          <div className="flex flex-col p-4 md:p-8">
            <p className="mb-6 text-justify text-sm leading-relaxed text-white md:mb-8 md:text-base">
              {t("page.about.paragraph")}
            </p>

            <div className="flex flex-col items-center gap-6">
              <div className="flex w-full flex-wrap justify-center gap-4 md:gap-6">
                {[
                  {
                    value: "20K+",
                    label: t("page.about.work-experience"),
                    color: "bg-green-500",
                  },
                  {
                    value: "16+",
                    label: t("page.about.projects-contributed"),
                    color: "bg-green-400",
                  },
                  {
                    value: "30+",
                    label: t("page.about.tech-frameworks"),
                    color: "bg-cyan-500",
                  },
                  {
                    value: "7",
                    label: t("page.about.countries"),
                    color: "bg-cyan-500",
                  },
                ].map((item) => (
                  <div
                    key={`${item.label}`}
                    className="w-full animate-fade-in  rounded-xl bg-black/10 p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-48 md:w-56"
                  >
                    <div className="text-2xl font-extrabold text-white md:text-3xl">
                      {item.value}
                    </div>
                    <div className="mt-2 text-xs leading-snug text-white md:text-sm">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
