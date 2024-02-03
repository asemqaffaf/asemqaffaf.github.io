"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import useFetch from "@/hooks/useFetch";

// import useRssParser from "@/hooks/useRssParser";
import NewsSkeleton from "../molecules/newsSkeleton";

type FeedsType = {
  description: string;
  favicon: string;
  feed_url: string;
  home_page_url: string;
  language: string;
  title: string;
  version: string;

  items: [
    {
      author: { displayName: string };
      assetUrl: string;
      excerpt: string;
      addedOn: string | number | Date;
      body: string;
      id: string;
      title: string;
      image: string;
      date_published: string;
      tags: string[];
      fullUrl: string;
      seoData: { seoDescription: string };
    },
  ];
};

export default function News() {
  const {
    i18n: { language },
  } = useTranslation();
  const url = useMemo(() => {
    switch (language) {
      case "en":
        return process.env.NEXT_PUBLIC_WIRED_RSS_ENGLISH;
      case "jp":
        return process.env.NEXT_PUBLIC_WIRED_RSS_JAPANESE;
      case "ar":
        return process.env.NEXT_PUBLIC_WIRED_RSS_ARABIC;
      default:
        return process.env.NEXT_PUBLIC_WIRED_RSS_ENGLISH;
    }
  }, [language]);

  const { data, isLoading, error } = useFetch<FeedsType>(url as string);

  return isLoading || error ? (
    <div className="h-full w-screen py-24 px-5 border-white bg-white  dark:bg-gray-900">
      <NewsSkeleton />
      <NewsSkeleton />
      <NewsSkeleton />
    </div>
  ) : (
    <div className="flex h-full w-screen items-center justify-center  bg-zinc-100 pt-20  dark:bg-gray-900">
      <ol className="relative m-10 border-s border-gray-200 dark:border-gray-700">
        {data?.items.map((item) => {
          return (
            <li className="mb-10 ms-4" key={item.id}>
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {new Date(item.addedOn).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "UTC",
                })}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <Image
                width={500}
                height={500}
                className="h-auto rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                src={item.assetUrl}
                alt={item.title}
              />
              <p className="mb-4 w-3/4 text-base font-normal text-gray-500 lg:w-2/4 dark:text-gray-400">
                {item.seoData.seoDescription
                  .replaceAll(`"`, "")
                  .replaceAll(`“`, "")
                  .replaceAll(`”`, "")}
              </p>
              <p className="mb-2  text-sm font-normal text-gray-500 dark:text-gray-400">
                {item.tags.reduce((acc: string, tag: string, index: number) => {
                  // eslint-disable-next-line no-param-reassign
                  acc += `${tag}${index === item.tags.length - 1 ? " " : ", "}`;
                  return acc;
                }, "")}
              </p>
              <p
                className="mb-2  text-sm font-normal text-gray-500 dark:text-gray-400"
                key={item.author.displayName}
              >
                {item.author.displayName}
              </p>

              <a
                href={`https://www.ajplus.net${item.fullUrl}`}
                target="_blank"
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="ms-2 h-3 w-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
