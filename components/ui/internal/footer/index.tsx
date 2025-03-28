"use client";

import React, { useEffect, useState } from "react";
import { sections } from "./sections";
import {
  Stack,
  Heading,
  Box,
  SimpleGrid,
  Flex,
  Text,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import Logo from "@/components/ui/internal/logo";
import { LogoType } from "@/components/ui/internal/logo";
import { useWindowType } from "@/hooks/use-window-type";
import { SocialMediaLinks } from "../socialmedialinks";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Chapters } from "../header/chapters";
import { FooterChaptersAccordionAtom } from "@/atoms/atoms";
import { useColorMode } from "@/components/ui/color-mode";

export default function Footer() {
  const { isDesktop } = useWindowType();
  const [isOpen, setIsOpen] = useAtom(FooterChaptersAccordionAtom);

  function toggleChaptersAccordion() {
    setIsOpen((prev) => {
      const newValue = !prev;
      localStorage.setItem("FooterChaptersAccordionAtom", newValue.toString());
      return newValue;
    });
  }
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const textopacity = 0.8;
  return (
    <Flex px={"var(--global-spacing)"}>
      <Stack
        w="full"
        align={"center"}
        justify={"center"}
        bgColor={"card-bg-3"}
        color={"white"}
        border="1px solid"
        borderColor="card-border-3"
        padding="var(--card-padding)"
        borderRadius={20}
        gapY={10}
      >
        <Logo
          logoType={LogoType.White}
          width={isDesktop ? 180 : 110}
          height={isDesktop ? 110 : 65}
        />
        <SimpleGrid
          columns={isDesktop ? 4 : 2}
          justifyContent={"space-between"}
          w="full"
          gapX={3}
          gapY={10}
          paddingX={isDesktop ? 10 : 0}
        >
          {sections.map((section, i) => (
            <Stack key={section.title + i}>
              <Heading color={"white"} opacity={textopacity} marginBottom={1}>
                {section.title}
              </Heading>
              <Stack>
                {i == 0 && (
                  <>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      gap={2}
                      cursor="pointer"
                      width={"fit-content"}
                      onClick={toggleChaptersAccordion}
                    >
                      <span>Chapters</span>
                      <Box marginTop={1}>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon
                            icon="lucide:chevron-down"
                            width={20}
                            height={20}
                          />
                        </motion.div>
                      </Box>
                    </Flex>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Flex
                        flexDirection="column"
                        gap={2}
                        paddingLeft={4}
                        fontWeight="normal"
                        zIndex={-50}
                        visibility={isOpen ? "visible" : "hidden"}
                      >
                        {Chapters.map((chapter) => (
                          <Box
                            key={chapter.id}
                            transition="opacity 0.2s ease-in-out"
                            _hover={{ opacity: "0.7" }}
                          >
                            <Link href={chapter.href}>
                              <motion.div
                                style={{
                                  position: "relative",
                                  transition: "all 0.3s ease-in-out",
                                }}
                              >
                                {chapter.name}
                              </motion.div>
                            </Link>
                          </Box>
                        ))}
                      </Flex>
                    </motion.div>
                  </>
                )}
                {section.links.map((link, i) => (
                  <Box
                    key={i}
                    transition="opacity 0.2s ease-in-out"
                    _hover={{ opacity: "0.7" }}
                    width={"fit-content"}
                    marginTop={
                      !isOpen && link.href === "/committees" ? "-2" : "0"
                    }
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </Box>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        <Stack>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gapX={6}
            gapY={2}
            alignItems="center"
            marginBottom={2}
          >
            <Heading textAlign="center" opacity={textopacity}>
              Follow Us
            </Heading>
            <Heading textAlign="center" opacity={textopacity}>
              Contact Us
            </Heading>
            <Flex
              justifyContent="center"
              gap={5}
              marginY={4}
              gridRow={{ base: 2, md: "auto" }}
            >
              {SocialMediaLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MediaLinks path={link.path} />
                </Link>
              ))}
            </Flex>
            <Flex
              justifyContent="center"
              alignItems="center"
              gridRow={{ base: 4, md: "auto" }}
              transition="opacity 0.2s ease-in-out"
              _hover={{ opacity: "0.7" }}
            >
              <Link href="mailto:info@ieee-zsb.org">info@ieee-zsb.org</Link>
            </Flex>
          </Grid>

          <Text textAlign={"center"} opacity={textopacity}>
            Designed and developed by IEEE-ZSB CS chapter &copy;{" "}
            {new Date().getFullYear()}
          </Text>
          <Text textAlign={"center"} opacity={textopacity}>
            All rights reserved to IEEE-ZSB
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}

function MediaLinks({ path }: { path: string }) {
  const { colorMode } = useColorMode();
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      padding={1}
      borderRadius={10}
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.06)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width={30}
        height={30}
      >
        <path fill={colorMode === "light" ? "#006699" : "#002235"} d={path} />
      </svg>
    </Flex>
  );
}
