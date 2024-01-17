import React from "react";

export default function Services({ shouldMount }: { shouldMount: boolean }) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-end overflow-hidden bg-zinc-100 py-6">
      {shouldMount ? (
        <>
          <div className=" animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block" />

          <h1 className="text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text font-display text-4xl text-zinc-700 duration-1000  sm:text-6xl md:text-6xl">
            As a pivotal contributor to numerous significant projects
          </h1>

          <div className="animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block" />
        </>
      ) : (
        <div />
      )}
    </div>
  );
}
