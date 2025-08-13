/* eslint-disable react/button-has-type */
/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const companiesList = [
  {
    src: "/images/companies/Rakuten-logo.png",
    alt: "Rakuten",
    width: 500,
    height: 800,
    url: "https://rakuten.co.jp",
  },
  {
    src: "/images/companies/expedia-group.webp",
    alt: "expedia group",
    width: 500,
    height: 800,
    url: "https://expediagroup.com",
  },
  {
    src: "/images/companies/ntt-docomo.jpg",
    alt: "ntt-docomo",
    width: 500,
    height: 500,
    url: "https://www.docomo.ne.jp",
  },
  {
    src: "/images/companies/orange.svg.png",
    alt: "orange",
    width: 500,
    height: 500,
    url: "https://orange.com",
  },
  {
    src: "/images/companies/WCnTMIyj_400x400.jpg",
    alt: "simpleasy inc.",
    width: 500,
    height: 500,
    url: "https://simpleasy.jp",
  },
  {
    src: "/images/companies/benesse.jpg",
    alt: "benesse",
    width: 500,
    height: 500,
    url: "https://benesse.co.jp",
  },
  {
    src: "/images/companies/wired-jp.jpg",
    alt: "wired japan",
    width: 500,
    height: 500,
    url: "https://wired.jp",
  },
  {
    src: "/images/companies/ww.jpg",
    alt: "ww",
    width: 500,
    height: 500,
    url: "https://ww.com",
  },
  {
    src: "/images/companies/stricktly-data.png",
    alt: "stricktly-data",
    width: 500,
    height: 500,
    url: "https://www.linkedin.com/company/strictly-data",
  },
  {
    src: "/images/companies/Expedia-Logo.jpg",
    alt: "expedia",
    width: 500,
    height: 500,
    url: "https://expedia.com",
  },
  {
    src: "/images/companies/open-garden.png",
    alt: "open-garden",
    width: 500,
    height: 500,
    url: "https://en.wikipedia.org/wiki/Open_Garden",
  },
  {
    src: "/images/companies/nrby.png",
    alt: "nrby",
    width: 500,
    height: 500,
    url: "https://nrby.com",
  },
  {
    src: "/images/companies/ripe.png",
    alt: "ripe",
    width: 500,
    height: 500,
    url: "https://getripe.com",
  },
  {
    src: "/images/companies/vtex.png",
    alt: "vtex",
    width: 500,
    height: 500,
    url: "https://vtex.com",
  },
  {
    src: "/images/companies/brick.jpeg",
    alt: "brick",
    width: 500,
    height: 500,
    url: "https://www.brick.tech/en-us",
  },
  {
    src: "/images/companies/wired-jp-share.jpg",
    alt: "wired-jp",
    width: 500,
    height: 500,
    url: "https://wired.jp",
  },
];

const randomCompaniesList = companiesList.sort(() => Math.random() - 0.5);

// Card component with clickable icon
function Card({
  children,
  delay,
  isVisible,
  onClick,
  alt,
}: {
  children: React.ReactNode;
  delay?: number;
  isVisible: boolean;
  onClick: () => void;
  alt: string;
}) {
  const [isIconClicked, setIsIconClicked] = useState(false);

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsIconClicked(true);

    // Add a slight delay for the animation to be visible
    setTimeout(() => {
      onClick();
      setIsIconClicked(false);
    }, 200);
  };

  const handleIconKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      handleIconClick(e as any);
    }
  };

  return (
    <div
      style={{
        transitionDelay: `${delay || 0}ms`,
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      className={`
        group mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md 
        transition-all duration-700 ease-out 
        will-change-transform
        hover:rotate-1 hover:scale-105 hover:shadow-xl hover:brightness-110
        ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-90 opacity-0"
        }
      `}
    >
      {/* Subtle overlay that appears on hover */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Clickable external link icon */}
      <button
        onClick={handleIconClick}
        onKeyDown={handleIconKeyDown}
        aria-label={`Visit ${alt} website`}
        className={`
          absolute right-2 top-2 z-20 rounded-full border  
          bg-gray-200 p-2 opacity-0
          shadow-sm
          shadow-slate-500 ring-blue-500/50 transition-all 
          duration-300 hover:scale-125
          hover:bg-white hover:shadow-lg hover:shadow-slate-500 focus:outline-none
          focus:ring-2
          focus:ring-blue-500/50
          active:scale-95 active:bg-gray-100 group-hover:scale-110 group-hover:opacity-100
          ${isIconClicked ? "scale-150 bg-blue-100 shadow-xl" : ""}
        `}
      >
        <svg
          className={`h-4 w-4 transition-colors duration-200 ${
            isIconClicked
              ? "text-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </button>

      {children}
    </div>
  );
}

export default function Portfolio() {
  const { t } = useTranslation();
  const [cardsVisible, setCardsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  // Handle icon click with smooth animation
  const handleIconClick = (url: string) => {
    // Navigate immediately since the button handles its own animation
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const currentRef = ref.current;
    const currentTitleRef = titleRef.current;

    if (!currentRef || !currentTitleRef) return;

    // Title animation observer
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          titleObserver.disconnect();
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -20% 0px" },
    );

    // Cards animation observer
    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setCardsVisible(true);
          }, 200);
          cardsObserver.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    titleObserver.observe(currentTitleRef);
    cardsObserver.observe(currentRef);

    // eslint-disable-next-line consistent-return
    return () => {
      titleObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b pt-24">
      <div className="container mx-auto px-4">
        {/* Enhanced title with smooth entrance */}
        <div className="flex w-full justify-center">
          <h1
            ref={titleRef}
            className={`
              bg-clip-text px-4 pb-10 text-center text-4xl font-light text-white 
              transition-all duration-1000
              ease-out md:text-5xl lg:text-6xl
              ${
                titleVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-4 scale-95 opacity-0"
              }
            `}
            style={{
              transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {t("page.Portfolio.title")}
          </h1>
        </div>

        {/* Enhanced grid with staggered animations and click functionality */}
        <div
          ref={ref}
          className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4"
          style={{
            columnFill: "balance",
          }}
        >
          {randomCompaniesList.map((img, index) => (
            <Card
              key={img.src}
              delay={index * 50}
              isVisible={cardsVisible}
              onClick={() => handleIconClick(img.url)}
              alt={img.alt}
            >
              <Image
                width={img.width}
                height={img.height}
                className="h-auto w-full object-cover transition-all duration-700 group-hover:rotate-1 group-hover:brightness-110"
                src={img.src}
                alt={img.alt}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
export { Card };
