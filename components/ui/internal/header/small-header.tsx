"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { SmallHeaderAtom } from "@/atoms/atoms";
import { Flex } from "@chakra-ui/react";
import HamburgerIcon from "@/components/ui/internal/hamburger-icon";
import Logo from "@/components/ui/internal/logo";
import { LogoType } from "@/components/ui/internal/logo";
import { ColorModeButton } from "@/components/ui/color-mode";
import SmallHeaderLinks from "./small-header-links";

const MotionFlex = motion.create(Flex);

export default function SmallHeader() {
  const [isOpen, setIsOpen] = useAtom(SmallHeaderAtom);
  const [isMounted, setIsMounted] = useState(false);
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setIsMounted(true);
    const storedValue = localStorage.getItem("SmallHeaderAtom");
    if (storedValue !== null) {
      setIsOpen(storedValue === "true");
    }
  }, [setIsOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
        localStorage.setItem("SmallHeaderAtom", "false");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newValue = !prev;
      localStorage.setItem("SmallHeaderAtom", newValue.toString());
      return newValue;
    });
  };

  if (!isMounted) return <></>;

  return (
    <Flex justify="center" align="center" marginY={16}>
      <MotionFlex
        ref={headerRef}
        align="center"
        flexDirection="column"
        p={4}
        maxWidth="min(3000px, calc(100% - 20px))"
        width="full"
        minWidth="200px"
        rounded="2xl"
        position="fixed"
        shadow="lg"
        boxShadow="lg"
        bgColor={"card-bg-3"}
        color={"white"}
        border="1px solid"
        borderColor="card-border-1"
        backdropFilter="blur(16px)"
        backdropBlur="xl"
        left="50%"
        transform="translateX(-50%)"
        initial={{ maxHeight: "70px" }}
        animate={{ maxHeight: isOpen ? "500px" : "70px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        overflow="hidden"
        top={"var(--global-spacing)"}
        zIndex={5}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          alignSelf="self-start"
          w="full"
          h="35px"
        >
          <Logo logoType={LogoType.White} width={75} height={38} />
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
