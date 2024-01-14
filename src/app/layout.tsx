import "./globals.css";

import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import type { Metadata } from "next";

import Footer from "./components/organisms/footer";
// import Footer from './components/pages/footer';

export const metadata: Metadata = {
  metadataBase: new URL("https://asemqaffaf.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ja-JA": "/ja-JA",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

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
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>{/* <Analytics /> */}</head>

      <body
        // className={`bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
        className="bg-white lg:items-center dark:bg-zinc-800"
      >
        <div className="flex flex-col ">
          {children}
          <Footer />
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
