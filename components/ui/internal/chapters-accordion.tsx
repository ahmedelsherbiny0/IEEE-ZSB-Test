"use client";

import { useAtom, useSetAtom } from "jotai";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Chapters } from "./header/chapters";
import Link from "next/link";
import {
  SmallHeaderAtom,
  SmallHeaderChaptersAccordionAtom,
} from "@/atoms/atoms";
import { usePathname } from "next/navigation";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function ChaptersAccordion() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useAtom(SmallHeaderChaptersAccordionAtom);
  const setSmallHeaderAtom = useSetAtom(SmallHeaderAtom);
  const indicatorColor = useColorModeValue("black", "white");

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

  function handleLinkClick() {
    setSmallHeaderAtom((prev) => {
      const newValue = !prev;
      localStorage.setItem("SmallHeaderAtom", "false");
      return newValue;
    });
  }
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        gap={2}
        cursor="pointer"
        onClick={toggleChaptersAccordion}
        width={"fit-content"}
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
                      backgroundColor: indicatorColor,
                      borderRadius: "5px",
                    }}
                  />
                )}
                {chapter.name}
              </motion.div>
            </Link>
          ))}
        </Flex>
      </motion.div>
    </>
  );
}
