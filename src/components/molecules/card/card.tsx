import "./card.css";

import Image from "next/image";
import React, { useState } from "react";

interface ICardProps {
  name: string;
  brief: string;
  profilePic: string;
  flagUrl: string;
  lastWord: string;
}

export default function Card({
  name,
  brief,
  profilePic,
  flagUrl,
  lastWord,
}: ICardProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className="card-body h-full ">
      <div
        className="card-container h-full w-[95svw] sm:w-80 md:w-96"
        onTouchCancel={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="card-card flex items-center justify-center self-center border border-white/5 bg-white/5 shadow-2xl shadow-black/10 backdrop-blur-2xl duration-1000 dark:border-zinc-700/20 dark:bg-zinc-900/40 dark:shadow-black/50 ">
          <div
            className="flag"
            style={{
              backgroundImage: `url("${flagUrl}")`,
              clipPath: hover
                ? "circle(100% at 80%)"
                : "circle(150px at 80% 15%)",
            }}
          />
          <div className="card-imgBx h-3/4 w-3/4 lg:inset-x-0 lg:h-full lg:w-full">
            <Image
              width={50}
              height={50}
              className="rounded-full"
              src={`${profilePic}`}
              alt={name}
              priority
            />
          </div>
          <div className="card-contentBx">
            <h2 className="my-2 text-2xl text-white">{name}</h2>
            <div className="card-size mx-2 rounded-xl bg-transparent backdrop-blur-md">
              <p className="mt-2 flex text-sm font-medium text-slate-800">
                {brief}
              </p>
            </div>
            <div className="card-color">
              <p className="text-zinc-100">{lastWord}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
