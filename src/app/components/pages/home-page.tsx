"use client";

import Link from "next/link";

import Particles from "../atoms/particles";

export default function HomePage() {
  return (
    <div className="flex h-full w-screen flex-col items-center justify-center overflow-hidden ">
      <div className="animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />

      <h1 className="text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text p-[2%] font-display text-4xl text-transparent duration-1000  sm:text-6xl md:text-9xl">
        {/* simpleかつeasyに、 */}
        しんぷりーじー
        {/* simpleasy */}
      </h1>

      <div className="animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block" />

      <div className="absolute inset-x-0 bottom-0 my-16 animate-fade-in text-center">
        <h2 className="text-sm text-zinc-500 ">
          {/* As a world-class{' '} */}
          Our world-class{" "}
          <Link
            href="/team"
            className="underline duration-500 hover:text-zinc-300"
          >
            team,
          </Link>{" "}
          {/* we will create value for the world by developing simple and easy systems. */}
          is committed to enriching the world through our innovations. We aim to
          deliver global value through the development of streamlined and
          efficient systems
        </h2>
      </div>
    </div>
  );
}
