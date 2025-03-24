"use client";

import { useColorMode } from "../../color-mode";
import Image from "next/image";
import { useWindowType } from "@/hooks/use-window-type";
import { Box } from "@chakra-ui/react";

export default function HeroSection() {
  const { colorMode } = useColorMode();
  const { isDesktop } = useWindowType();

  return (
    <Box
      style={{
        width: isDesktop ? "40vw" : "60vw",
        maxWidth: "1200px",
        position: "relative",
      }}
    >
      <Image
        alt="IEEE-ZSB Logo"
        src={`/Images/IEEE/ieee-logo-${
          colorMode === "light" ? "blue" : "white"
        }.svg`}
        layout="responsive"
        width={700}
        height={450}
      />
    </Box>
  );
}
