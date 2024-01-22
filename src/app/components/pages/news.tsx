"use client";

import Image from "next/image";

import useFetch from "@/hooks/useFetch";

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
      id: string;
      url: string;
      title: string;
      content_text: string;
      content_html: string;
      image: string;
      date_published: string;
      authors: [{ name: string }];
      attachments: string;
    },
  ];
};

export default function News() {
  const { data, isLoading, error } = useFetch<FeedsType>(
    "https://rss.app/feeds/v1.1/tcnSFGyTQkKaMhMq.json",
  );

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
                {new Date(item.date_published).toLocaleTimeString()}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <Image
                width={400}
                height={400}
                className="h-auto rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                src={item.image}
                alt={item.title}
              />
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {item.content_text}
              </p>
              {item.authors.map((author) => (
                <p
                  className="mb-2  text-sm font-normal text-gray-500 dark:text-gray-400"
                  key={author.name}
                >
                  {author.name}
                </p>
              ))}
              <a
                href={item.url}
                target="_blank"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
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
