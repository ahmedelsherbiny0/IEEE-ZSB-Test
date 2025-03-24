"use client";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useColorMode } from "@/components/ui/color-mode";
interface LogoOptions {
  logoType: LogoType;
  width: number;
  height: number;
}
export enum LogoType {
  Blue = "blue",
  White = "white",
}

export default function Logo({ logoType, width, height }: LogoOptions) {
  const { colorMode } = useColorMode();
  const __logoType =
    logoType || (colorMode === "light" ? LogoType.Blue : LogoType.White);

  return (
    <Link href="/" passHref>
      <Image
        src={`/Images/IEEE/ieee-logo-${__logoType}.svg`}
        alt="IEEE-ZSB Logo"
        width={width}
        height={height}
        transition="all 0.2s ease-in-out"
        _hover={{ opacity: 0.9 }}
      />
    </Link>
  );
}
