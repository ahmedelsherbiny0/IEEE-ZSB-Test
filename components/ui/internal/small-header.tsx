"use client";

import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { SmallHeaderAtom } from "../../../app/atoms/atoms";
import { Flex } from "@chakra-ui/react";
import HamburgerIcon from "./hamburger-icon";
import Logo from "./logo";
import { useColorModeValue } from "@/components/ui/color-mode";
import { ColorModeButton } from "@/components/ui/color-mode";
import SmallHeaderLinks from "./small-header-links";

const MotionFlex = motion.create(Flex);

export default function SmallHeader() {
  const [isOpen, setIsOpen] = useAtom(SmallHeaderAtom);
  const [isMounted, setIsMounted] = React.useState(false);
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const storedValue = localStorage.getItem("SmallHeaderAtom");
    if (storedValue !== null) {
      setIsOpen(storedValue === "true");
    }
  }, [setIsOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newValue = !prev;
      if (isMounted) {
        localStorage.setItem("SmallHeaderAtom", newValue.toString());
      }
      return newValue;
    });
  };

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("SmallHeaderAtom", isOpen.toString());
    }
  }, [isOpen, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen, isMounted]);

  const glassBackground = useColorModeValue(
    "rgba(255, 255, 255, 0.3)",
    "rgba(0, 0, 0, 0.3)"
  );
  const borderColor = useColorModeValue(
    "rgba(255, 255, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );

  return (
    <Flex justify="center" align="center" marginY={16}>
      <MotionFlex
        ref={headerRef}
        align="center"
        flexDirection="column"
        p={4}
        maxWidth="min(3000px, calc(100% - 30px))"
        width="full"
        minWidth="200px"
        rounded="2xl"
        position="fixed"
        shadow="lg"
        backdropBlur="xl"
        boxShadow="lg"
        border="1px"
        borderColor={borderColor}
        backdropFilter="blur(16px)"
        bgColor={glassBackground}
        left="50%"
        transform="translateX(-50%)"
        top={4}
        initial={{ maxHeight: "80px" }}
        animate={{ maxHeight: isOpen ? "500px" : "80px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        overflow="hidden"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          alignSelf="self-start"
          w="full"
          h="50px"
        >
          <Logo />
          <div ref={toggleRef}>
            <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </Flex>
        <AnimatePresence>
          {isOpen && (
            <MotionFlex
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              opacity="0.9"
              display="flex"
              justifyContent="space-between"
              paddingTop={"2"}
              paddingLeft={"3"}
              width={"full"}
            >
              <SmallHeaderLinks />
              <Flex
                _hover={{ opacity: 0.9 }}
                transition="all 0.2s ease-in-out"
                alignSelf={"flex-end"}
                justifyContent={"flex-end"}
              >
                <ColorModeButton />
              </Flex>
            </MotionFlex>
          )}
        </AnimatePresence>
      </MotionFlex>
    </Flex>
  );
}
