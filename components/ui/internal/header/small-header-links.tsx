"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Chapters } from "./chapters";
import { Links } from "./links";
import { useSetAtom, useAtom } from "jotai";
import {
  SmallHeaderAtom,
  SmallHeaderChaptersAccordionAtom,
} from "@/atoms/atoms";
import { Box, Flex } from "@chakra-ui/react";

export default function SmallHeaderLinks() {
  const pathname = usePathname();
  const [isOpen] = useAtom(SmallHeaderChaptersAccordionAtom);
  const setSmallHeaderAtom = useSetAtom(SmallHeaderAtom);

  function handleLinkClick() {
    setSmallHeaderAtom((prev) => {
      const newValue = !prev;
      localStorage.setItem("SmallHeaderAtom", "false");
      return newValue;
    });
  }

  return (
    <Flex
      flexDirection="column"
      alignSelf={"flex-start"}
      gap={3}
      marginTop={3}
      fontWeight="bold"
    >
      <ChaptersAccordion />

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Flex
          flexDirection="column"
          gap={2}
          paddingLeft={4}
          fontWeight="normal"
          zIndex={-50}
        >
          {Chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={chapter.href}
              onClick={handleLinkClick}
            >
              <motion.div
                style={{
                  position: "relative",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {pathname === chapter.href && (
                  <motion.div
                    layoutId="activeLinkBorder"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                      position: "absolute",
                      left: -10,
                      top: 0,
                      bottom: 0,
                      width: "3px",
                      borderRadius: "5px",
                      backgroundColor: "white",
                    }}
                  />
                )}
                {chapter.name}
              </motion.div>
            </Link>
          ))}
        </Flex>
      </motion.div>

      {Links.map((link) => (
        <Box
          key={link.path}
          marginTop={!isOpen && link.path === "/committees" ? "-3" : "0"}
        >
          <Link href={link.path} onClick={handleLinkClick}>
            <motion.div
              style={{
                position: "relative",
                transition: "all 0.3s ease-in-out",
              }}
            >
              {pathname === link.path && (
                <motion.div
                  layoutId="activeLinkBorder"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    position: "absolute",
                    left: -10,
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
              )}
              {link.name}
            </motion.div>
          </Link>
        </Box>
      ))}
    </Flex>
  );
}

function ChaptersAccordion() {
  const [isOpen, setIsOpen] = useAtom(SmallHeaderChaptersAccordionAtom);

  function toggleChaptersAccordion() {
    setIsOpen((prev) => {
      const newValue = !prev;
      localStorage.setItem(
        "SmallHeaderChaptersAccordionAtom",
        newValue.toString()
      );
      return newValue;
    });
  }
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={2}
      cursor="pointer"
      onClick={toggleChaptersAccordion}
    >
      <span>Chapters</span>
      <Box marginTop={1}>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon icon="lucide:chevron-down" width={20} height={20} />
        </motion.div>
      </Box>
    </Flex>
  );
}
