import Link from "next/link";
import React from "react";

import { useIsMounted } from "@/app/hooks/useIsMounted";
import { employeeList } from "@/constants";

import Card from "../molecules/card/card";

export default function Company({ currentPage }: { currentPage: number }) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { isMounted } = useIsMounted(currentPage, "Company");

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-zinc-800">
      <Link
        className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
        href="/company"
      >
        <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
          Company
        </span>
      </Link>

      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Card {...employeeList[0]} />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Amaru.tech technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2024 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap content-between  items-center">
        <div className="flex flex-wrap self-center">
          {[...employeeList.slice(1)].map((element) => (
            <div className="m-2" key={element.profilePic}>
              <Card {...element} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
