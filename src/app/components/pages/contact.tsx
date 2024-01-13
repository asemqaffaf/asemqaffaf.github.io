import React from "react";

import { useIsMounted } from "@/app/hooks/useIsMounted";

export default function Contact({ currentPage }: { currentPage: number }) {
  const { isMounted } = useIsMounted(currentPage, "Contact");

  return (
    <div className="flex h-full w-screen flex-col items-center justify-center overflow-hidden bg-red-500">
      {isMounted ? (
        <>
          <div className="animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block" />

          <h1 className="text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text p-[2%] font-display text-4xl text-transparent duration-1000  sm:text-6xl md:text-9xl">
            Contact
          </h1>

          <div className="animate-glow hidden h-1 w-screen animate-fade-right bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block" />
        </>
      ) : (
        <div />
      )}
    </div>
  );
}
