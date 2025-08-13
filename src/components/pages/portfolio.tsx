/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const images = [
  {
    src: "/images/companies/Rakuten-logo.png",
    alt: "Rakuten",
    width: 500,
    height: 800,
  },
  {
    src: "/images/companies/expedia-group.webp",
    alt: "expedia group",
    width: 500,
    height: 800,
  },
  {
    src: "/images/companies/ntt-docomo.jpg",
    alt: "ntt-docomo",
    width: 500,
    height: 500,
  },
  {
    src: "/images/companies/orange.svg.png",
    alt: "orange",
    width: 500,
    height: 500,
  },
  {
    src: "/images/companies/WCnTMIyj_400x400.jpg",
    alt: "simpleasy inc.",
    width: 500,
    height: 500,
  },
  {
    src: "/images/companies/benesse.jpg",
    alt: "benesse",
    width: 500,
    height: 500,
  },
  {
    src: "/images/companies/wired-jp.jpg",
    alt: "wired japan",
    width: 500,
    height: 500,
  },
  { src: "/images/companies/ww.jpg", alt: "ww", width: 500, height: 500 },
  {
    src: "/images/companies/stricktly-data.png",
    alt: "stricktly-data",
    width: 500,
    height: 500,
  },
  {
    src: "/images/companies/Expedia-Logo.jpg",
    alt: "expedia",
    width: 500,
    height: 500,
  },
  {
    src: "/images/companies/open-garden.png",
    alt: "open-garden",
    width: 500,
    height: 500,
  },
  { src: "/images/companies/nrby.png", alt: "nrby", width: 500, height: 500 },
  { src: "/images/companies/ripe.png", alt: "ripe", width: 500, height: 500 },
  { src: "/images/companies/vtex.png", alt: "vtex", width: 500, height: 500 },
  {
    src: "/images/companies/brick.jpeg",
    alt: "brick",
    width: 500,
    height: 500,
  },
  {
    src: "/images/companies/wired-jp-share.jpg",
    alt: "wired-jp",
    width: 500,
    height: 500,
  },
  // {
  //   src: "/images/companies/ATG-Logo.png",
  //   alt: "ATG",
  //   width: 500,
  //   height: 500,
  // },
];

function AnimatedCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay || 0}ms` }}
      className={`mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md  transition-all duration-500 ease-out hover:rotate-1 hover:scale-105 hover:shadow-xl hover:brightness-110 ${
        visible ? "animate-fadeInUp" : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b pt-24">
      <div className="container mx-auto px-4">
        <div className="flex w-full justify-center">
          <h1 className="bg-clip-text px-4 pb-10 text-center text-4xl font-light text-white  md:text-5xl lg:text-6xl">
            {t("page.Portfolio.title")}
          </h1>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {images.map((img) => (
            <AnimatedCard key={img.src} delay={images.indexOf(img) * 100}>
              <Image
                width={img.width}
                height={img.height}
                className="h-auto w-full object-cover transition-all duration-500 ease-out hover:rotate-1 hover:brightness-110"
                src={img.src}
                alt={img.alt}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
