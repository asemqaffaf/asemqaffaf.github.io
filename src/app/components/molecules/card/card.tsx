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
    <div
      className="card-body  h-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card-container w-[95svw] md:w-96 h-3/4">
        <div className="card-card bg-zinc-100 dark:bg-gray-800 dark:border-gray-700 flex justify-center  items-center self-center ">
          <div
            className="flag"
            style={{
              backgroundImage: `url("${flagUrl}")`,
              clipPath: hover
                ? "circle(100% at 80%)"
                : "circle(150px at 80% 15%)",
            }}
          />
          <div className="card-imgBx h-3/4 w-3/4 lg:left-0 lg:right-0 lg:h-full  lg:w-full ">
            <Image
              width={50}
              height={50}
              // objectFit="contains"
              // fill
              // objectFit=""
              // content=""
              className="rounded-full"
              src={`${profilePic}`}
              alt={name}
              priority
            />
          </div>
          <div className="card-contentBx">
            {/*   <h2 className={`my-2 text-2xl ${hover ? "text-gray-800" : ""}`}> */}
            <h2 className={`my-2 text-2xl ${hover ? "text-zinc-200" : ""}`}>
              {name}
            </h2>
            <div className="card-size">
              {/*   <p className="font-light text-zinc-100 text-sm">{brief}</p> */}
              <p className="font-medium text-gray-800 text-sm">{brief}</p>
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
