import "./globals.css";

import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import type { Metadata } from "next";
// import Footer from './components/pages/footer';

export const metadata: Metadata = {
  metadataBase: new URL("https://simpleasy.com"),
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
//     default: 'simpleasy.com',
//     template: '%s | simpleasy.com',
//   },
//   openGraph: {
//     title: 'simpleasy.com',
//     url: 'https://simpleasy.com',
//     siteName: 'simpleasy.com',
//     // images: [
//     //   {
//     //     url: 'https://simpleasy.com/og.png',
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
        className={`bg-[#cdd968] ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
      >
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
