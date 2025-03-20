"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "../color-mode";

interface HamburgerIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerIcon({
  isOpen,
  toggleMenu,
}: HamburgerIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  // console.log(isHovered);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"end"}
      flexDirection={"column"}
      gap={"5px"}
      cursor={"pointer"}
      onClick={toggleMenu}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={isOpen ? { y: 6, rotate: -45 } : { y: 0, rotate: 0 }}
      >
        <Bar width={7} />
      </motion.div>
      <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }}>
        <Bar width={isHovered ? 4 : 5} />
      </motion.div>
      <motion.div
        animate={isOpen ? { y: -10, rotate: 45 } : { y: 0, rotate: 0 }}
      >
        <Bar width={isOpen ? 7 : isHovered ? 7 : 6} />
      </motion.div>
    </Flex>
  );
}

function Bar({ width }: { width: number }) {
  const indicatorColor = useColorModeValue("black", "white");

  return (
    <Box
      w={width}
      h={"3px"}
      rounded={"2xl"}
      bgColor={indicatorColor}
      transition="all 0.2s ease-in-out"
    />
  );
}
