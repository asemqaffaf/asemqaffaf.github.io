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
      className="card-body"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card-container">
        <div className="card-card">
          <div
            className="flag"
            style={{
              backgroundImage: `url("${flagUrl}")`,
              clipPath: hover
                ? "circle(100% at 100%)"
                : "circle(150px at 80% 15%)",
            }}
          />
          <div className="card-imgBx">
            <Image
              width={150}
              height={150}
              className="rounded-full"
              src={`${profilePic}`}
              alt={name}
              priority
            />
          </div>
          <div className="card-contentBx ">
            <h2 className="my-10">{name}</h2>
            <div className="card-size">
              <p className="font-light text-zinc-100">{brief}</p>
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
