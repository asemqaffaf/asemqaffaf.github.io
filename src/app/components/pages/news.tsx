// import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function News() {
  return (
    <div className="flex h-full w-screen flex-col bg-zinc-200 pt-24">
      <div className="flex  my-10  w-full justify-center">
        <h1 className="z-10 animate-title bg-white bg-clip-text py-4 font-display text-2xl text-zinc-700 duration-1000  sm:text-2xl md:text-4xl">
          As a pivotal contributor to numerous significant projects
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={800}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/expedia-group.webp"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/ntt-docomo.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full   rounded-lg bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
              src="/images/companies/orange.svg.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/WCnTMIyj_400x400.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/benesse.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full   rounded-lg bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
              src="/images/companies/wired-jp.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/ww.jpg"
              alt=""
            />
          </div>

          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/stricktly-data.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/expedia.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full   rounded-lg bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
              src="/images/companies/open-garden.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/nrby.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/ripe.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/vtex.png"
              alt=""
            />
          </div>

          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/brick.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/wired-jp-share.jpg"
              alt=""
            />
          </div>

          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/ATG-Logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
