"use client";

import "./globals.css";

import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
// import type { Metadata } from "next";
import { usePathname } from "next/navigation";

import { AppState, navState } from "@/hooks/signalsContext";

import Footer from "./components/organisms/footer";
import Nav from "./components/organisms/nav";
// import Footer from './components/pages/footer';

// export const metadata: Metadata = {
//   metadataBase: new URL("https://asemqaffaf.com"),
//   alternates: {
//     canonical: "/",
//     languages: {
//       "en-US": "/en-US",
//       "ja-JA": "/ja-JA",
//     },
//   },
//   openGraph: {
//     images: "/og-image.png",
//   },
//   icons: {
//     shortcut: "/favicon.png",
//   },
// };

// export const metadata: Metadata = {
//   title: {
//     default: 'asemqaffaf.com',
//     template: '%s | asemqaffaf.com',
//   },
//   openGraph: {
//     title: 'asemqaffaf.com',
//     url: 'https://asemqaffaf.com',
//     siteName: 'asemqaffaf.com',
//     // images: [
//     //   {
//     //     url: 'https://asemqaffaf.com/og.png',
//     //     width: 1920,
//     //     height: 1080,
//     //   },
//     // ],
//     locale: 'en-US',
//     type: 'website',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   icons: {
//     shortcut: '/favicon.png',
//   },
// };
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // const navStateValue = useSignalValue(navState);
  // console.log("navStateValue :>> ", navStateValue);
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>{/* <Analytics /> */}</head>

      <body className="bg-custom-gradient">
        <AppState.Provider value={navState}>
          <Nav />
          <div className="flex flex-col ">
            {children}
            {pathname === "/" ? <div /> : <Footer />}
          </div>
        </AppState.Provider>
      </body>
    </html>
  );
}
