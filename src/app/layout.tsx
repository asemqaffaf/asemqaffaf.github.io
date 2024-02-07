"use client";

/* eslint-disable import/no-extraneous-dependencies */

import "./globals.css";
import "../config/i18next";

import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { usePathname } from "next/navigation";
import { appWithTranslation, useTranslation } from "next-i18next";
import { Client, HydrationProvider } from "react-hydration-provider";

import Footer from "../components/organisms/footer";
import Nav from "../components/organisms/nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const DynamicHeader = dynamic(() => import("../components/organisms/header"));

function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { i18n } = useTranslation();

  if (typeof window !== "undefined") {
    document.body.dir = i18n.dir();
  }

  return (
    <html
      lang={i18n.language || "en"}
      className={[inter.variable, calSans.variable].join(" ")}
    >
      <head>
        <DynamicHeader />
      </head>

      <body className="bg-custom-gradient">
        <h1 className="hidden">Asem Qaffaf</h1>
        <h1 className="hidden">Full stack software engineer</h1>
        <HydrationProvider>
          <Client>
            <Nav />
            <div className="flex flex-col ">
              {children}
              {pathname === "/" ? <div /> : <Footer />}
            </div>
          </Client>
        </HydrationProvider>
      </body>
    </html>
  );
}

export default appWithTranslation<never>(RootLayout);
