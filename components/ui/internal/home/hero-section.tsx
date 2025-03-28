"use client";

import { useColorMode } from "../../color-mode";
import Image from "next/image";
import { useWindowType } from "@/hooks/use-window-type";
import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import SloganTypingEffect from "./slogan-typing-effect";

export default function HeroSection() {
  const { colorMode } = useColorMode();
  const { isDesktop } = useWindowType();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const gradientRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setImageSrc(
        `/Images/IEEE/ieee-logo-${colorMode === "light" ? "blue" : "white"}.svg`
      );
    }
  }, [colorMode, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !gradientRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;

      const isInside =
        e.clientX >= containerRect.left &&
        e.clientX <= containerRect.right &&
        e.clientY >= containerRect.top &&
        e.clientY <= containerRect.bottom;

      if (isInside) {
        gradientRef.current.style.opacity = "1";
        gradientRef.current.style.left = `${mouseX}px`;
        gradientRef.current.style.top = `${mouseY}px`;
      } else {
        gradientRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <Flex
      ref={containerRef}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={isDesktop ? 30 : 5}
      marginX="auto"
      zIndex={-10}
      position="relative"
      rounded="2xl"
      color="natural-2"
      width="full"
      height={isDesktop ? `calc(100vh - 120px)` : "auto"}
    >
      {colorMode === "dark" && (
        <>
          <Box
            marginTop={`calc(-100px - var(--global-spacing))`}
            position="absolute"
            borderRadius="full"
            pointerEvents="none"
            right={0}
            top={0}
            transform="translate(50%, -50%)"
            zIndex={-1}
            opacity={0.8}
            boxShadow="0 0 30vw 15vw #79D2FA99"
          />
          <Box
            position="absolute"
            borderRadius="full"
            pointerEvents="none"
            left={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex={-1}
            opacity={0.8}
            boxShadow="0 0 30vw 10vw #79D2FA99"
          />
          <Box
            ref={gradientRef}
            position="absolute"
            boxShadow="0 0 20vw 5vw #79D2FA99"
            borderRadius="full"
            pointerEvents="none"
            left={0}
            top={0}
            zIndex={-1}
            willChange="transform"
            opacity={0}
            transition="opacity 0.1s ease-out"
          />
        </>
      )}
      <Box
        width={isDesktop ? "40vw" : "60vw"}
        maxWidth="1200px"
        position="relative"
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
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
      <Box>
        <SloganTypingEffect />
      </Box>
    </Flex>
  );
}
