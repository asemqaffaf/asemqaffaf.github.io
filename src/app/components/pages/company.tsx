import React from "react";

import { useIsMounted } from "@/app/hooks/useIsMounted";
import { employeeList } from "@/constants";

import Card from "../molecules/card/card";

export default function Company({ currentPage }: { currentPage: number }) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { isMounted } = useIsMounted(currentPage, "Company");

  return (
    <div className="flex h-full w-screen flex-col items-center justify-center overflow-hidden bg-[rgb(249,250,238)]">
      <div className="flex flex-col flex-wrap content-between  items-center">
        <div className="flex flex-wrap self-center">
          {employeeList.map((element) => (
            <div className="m-2" key={element.profilePic}>
              <Card {...element} />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap self-center">
          {employeeList.map((element) => (
            <div className="m-2" key={element.profilePic}>
              <Card {...element} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
