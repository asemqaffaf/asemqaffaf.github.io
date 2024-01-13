import "./card.css";

import Image from "next/image";
import React, { useState } from "react";

interface ICardProps {
  name: string;
  postion: string;
  // profilePic: string;
  flagUrl: string;
  country: string;
}

export default function Card({
  name,
  postion,
  // profilePic,
  flagUrl,
  country,
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
                : "circle(150px at 80% 20%)",
            }}
          />
          <div className="card-imgBx">
            <Image
              width={150}
              height={150}
              className="text-zinc-500"
              // src={`${profilePic}`}
              src="/nextjs-github-pages/vercel.svg"
              alt={name}
              priority
            />
          </div>
          <div className="card-contentBx">
            <h2>{name}</h2>
            <div className="card-size">
              <h3>{postion}</h3>
            </div>
            <div className="card-color">
              <h3>{country}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
