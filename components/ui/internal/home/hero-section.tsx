"use client";

import { useColorMode } from "../../color-mode";
import Image from "next/image";
import { useWindowType } from "@/hooks/use-window-type";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { colorMode } = useColorMode();
  const { isDesktop } = useWindowType();
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    setImageSrc(
      `/Images/IEEE/ieee-logo-${colorMode === "light" ? "blue" : "white"}.svg`
    );
  }, [colorMode]);

  return (
    <Box
      style={{
        width: isDesktop ? "40vw" : "60vw",
        maxWidth: "1200px",
        position: "relative",
      }}
    >
      {imageSrc && (
        <Image
          alt="IEEE-ZSB Logo"
          src={imageSrc}
          layout="responsive"
          width={700}
          height={450}
        />
      )}
    </Box>
  );
}
