import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Dispatch, MouseEvent, SetStateAction } from "react";
import React, { useState } from "react";

import { navigation } from "@/util/navigation";

export default function Nav({
  setCurrentPage,
  color,
}: {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  color: string;
}) {
  const [lang, setLang] = useState<"eng" | "jap">("eng");

  const handleOnChangeNavigation = (
    event: MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    const target = event.target as HTMLInputElement;
    setCurrentPage(+target.value);
  };

  return (
    <nav className="absolute z-50 my-10 h-fit w-screen animate-fade-in self-center ">
      <ul className="flex items-center justify-center gap-4">
        <span
          aria-hidden="true"
          onClick={() => setCurrentPage(0)}
          className={`text-sm duration-500${color} w-auto cursor-pointer hover:text-zinc-300`}
        >
          <FontAwesomeIcon icon={faHouse} />
        </span>
        {navigation.map((item) => (
          <button
            type="button"
            key={item.href}
            value={item.index}
            onClick={handleOnChangeNavigation}
            className={`text-sm duration-500${color} cursor-pointer hover:text-zinc-300`}
          >
            {item.name}
          </button>
        ))}
        <div className="absolute right-10">
          {lang === "jap" ? (
            <button
              type="button"
              className={`text-${color} text-lg`}
              onClick={() => setLang("eng")}
            >
              文日
            </button>
          ) : (
            <div />
          )}
          {lang === "eng" ? (
            <button
              type="button"
              className={`text-${color} text-lg`}
              onClick={() => setLang("jap")}
            >
              A
            </button>
          ) : (
            <div />
          )}
          {/* <button>日</button> */}
        </div>
      </ul>
    </nav>
  );
}
