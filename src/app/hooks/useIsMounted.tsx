import { useEffect, useState } from "react";

import { navigation } from "@/util/nav-items";

const nameList = navigation.map((item) => item.name);

export const useIsMounted = (
  currentPage: number,
  name: (typeof nameList)[number],
) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const mountedNav = navigation.find(
      (item) => item.index === currentPage && item.name === name,
    );
    if (mountedNav) {
      setIsMounted(true);
    } else {
      setIsMounted(false);
    }
  }, [currentPage, name]);

  return { isMounted };
};
