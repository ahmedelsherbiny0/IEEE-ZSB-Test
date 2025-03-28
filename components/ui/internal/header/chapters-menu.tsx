"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Chapters } from "./chapters";
import {
  Box,
  Text,
  Menu,
  Button,
  Portal,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ChaptersMenu() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Flex
          justifyContent={"cneter"}
          alignItems={"center"}
          cursor={"pointer"}
          gap={2}
        >
          <Button
            color={"white"}
            size="sm"
            variant="ghost"
            fontWeight="bold"
            fontSize={16}
            padding={0}
            rounded="2xl"
            outline={0}
            backgroundColor={"transparent"}
            _hover={{
              transition: "all 0.2s ease-in-out",
            }}
            _active={{
              backgroundColor: "transparent",
            }}
          >
            Chapters
          </Button>
          <Box marginTop={1}>
            <Icon icon="lucide:chevron-down" width={20} height={20} />
          </Box>
        </Flex>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content
            as={motion.div}
            spaceY={2}
            padding={2}
            rounded="2xl"
            boxShadow="lg"
            bg={"#002235"}
            _dark={{ bg: "#002235", border: "1px solid #003A5A" }}
            marginTop={8}
            border={"1px solid #003A5A"}
          >
            {Chapters.map((chapter) => {
              const isSelected = pathname === chapter.href;

              return (
                <Menu.Item
                  cursor="pointer"
                  borderRadius="lg"
                  value={chapter.href}
                  key={chapter.id}
                  bg={"#00669C"}
                  padding={2}
                  height={16}
                  margin={0}
                  position="relative"
                  border={"1px solid #0076B8"}
                >
                  {isSelected && (
                    <Box
                      position="absolute"
                      left={-1.5}
                      top={0}
                      bottom={0}
                      width="3px"
                      bg={"#00669C"}
                      borderRadius="full"
                    />
                  )}

                  <Flex
                    onClick={() => router.push(chapter.href)}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    gap={2}
                    w={"full"}
                  >
                    <Flex gap={2}>
                      <Flex justifyContent={"center"} alignItems={"center"}>
                        <Image
                          src={chapter.secondaryPath}
                          alt={chapter.alt}
                          width={45}
                          height={45}
                        />
                      </Flex>
                      <VStack
                        justifyContent={"center"}
                        alignItems={"flex-start"}
                        gap={0}
                      >
                        <Text fontSize="md" fontWeight="bold" color={"white"}>
                          {chapter.name}
                        </Text>

                        <Text
                          alignSelf="flex-start"
                          color={"white"}
                          mt="1"
                          opacity={0.9}
                        >
                          {chapter.description}
                        </Text>
                      </VStack>
                    </Flex>
                    <Icon icon="lucide:chevron-right" width={20} height={20} />
                  </Flex>
                </Menu.Item>
              );
            })}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
