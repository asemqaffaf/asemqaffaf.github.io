"use client";

/* eslint-disable import/no-extraneous-dependencies */

import "./globals.css";
import "../config/i18next";

import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { usePathname } from "next/navigation";
import { appWithTranslation } from "next-i18next";
import { Client, HydrationProvider } from "react-hydration-provider";

import Footer from "./components/organisms/footer";
import Nav from "./components/organisms/nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>{/* <Analytics /> */}</head>

      <body className="bg-custom-gradient">
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
