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
        <div className="card-card flex items-center justify-center self-center bg-white/5 ">
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
            <div className="card-size">
              <p className="flex bg-white/10 text-sm font-bold text-gray-800">
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
