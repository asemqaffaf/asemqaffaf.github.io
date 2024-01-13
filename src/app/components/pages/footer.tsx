"use client";

import React from "react";
import Typewriter from "typewriter-effect";

import { FooterWithSitemap } from "../organisms/footer-sitemap";

const typeWriteList = [
  "Deliver Digital Transformations.",
  "Enabling our clients to accelerate.",
  "Innovating the future, one pixel at a time.",
  "Coding the path to digital excellence.",
  "Transforming challenges into digital solutions.",
  "Empowering success through technology.",
  "Where code meets creativity.",
  "Driving progress with every line of code.",
  "Shaping the digital world, together.",
  "Engineering dreams into digital realities.",
  "Technology as a catalyst for growth.",
  "Innovation at the speed of code.",
  "Digital excellence, our core mission.",
  "Coding today for a better tomorrow.",
  "Breaking barriers with digital innovation.",
  "Crafting the future with technology.",
  "Where technology meets purpose.",
  "Revolutionizing industries through digital expertise.",
  "Empowering visions with virtual solutions.",
  "Coding a smarter world.",
  "Accelerating success with digital agility.",
  "Bridging dreams and technology.",
  "Innovate, Integrate, Accelerate.",
  "Building digital bridges to success.",
  "Transforming ideas into digital masterpieces.",
  "Elevating businesses with tech solutions.",
  "Coding for a connected world.",
  "Turning visions into digital victories.",
  "Empowering innovation, empowering you.",
  "Design. Develop. Deliver. Dominate",
];
export default function Footer() {
  const randomTypeWriteList = typeWriteList.sort(() => 0.5 - Math.random());
  return (
    <div className="flex h-screen w-screen flex-col justify-center">
      <div className="hidden h-[70%] w-full items-center sm:flex md:flex">
        <div className="text-4xl font-extralight text-zinc-600 sm:text-5xl md:text-8xl">
          <Typewriter
            options={{
              strings: randomTypeWriteList,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <FooterWithSitemap />
    </div>
  );
}
