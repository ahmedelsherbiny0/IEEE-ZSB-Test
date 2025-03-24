"use client"

import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

export enum WindowTypes {
  Desktop = "desktop",
  Mobile = "mobile",
}

interface WindowTypeReturn {
  isDesktop: boolean;
  isMobile: boolean;
  windowType: WindowTypes;
}

export function useWindowType(): WindowTypeReturn {
  const [isMounted, setIsMounted] = useState(false);
  const [isLargerThan1280] = useMediaQuery(["(min-width: 1280px)"], {
    fallback: [false],
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const windowType =
    isMounted && isLargerThan1280 ? WindowTypes.Desktop : WindowTypes.Mobile;

  return {
    windowType,
    isDesktop: windowType === WindowTypes.Desktop,
    isMobile: windowType === WindowTypes.Mobile,
  };
}
