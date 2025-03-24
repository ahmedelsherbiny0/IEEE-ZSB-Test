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
  const [isLargerThan1280] = useMediaQuery(["(min-width: 1280px)"], {
    fallback: [false],
  });

  const windowType = isLargerThan1280
    ? WindowTypes.Desktop
    : WindowTypes.Mobile;

  const isDesktop = windowType === WindowTypes.Desktop;
  const isMobile = windowType === WindowTypes.Mobile;

  return {
    windowType,
    isDesktop,
    isMobile,
  };
}
