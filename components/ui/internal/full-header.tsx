import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import ChaptersMenu from "./chapters-menu";
import { useColorModeValue } from "@/components/ui/color-mode";
import { ColorModeButton } from "@/components/ui/color-mode";
import Logo from "@/components/ui/internal/logo";
import { LogoType } from "@/components/ui/internal/logo";
import { Links } from "./links";
import { motion } from "framer-motion";
import { useColorMode } from "@/components/ui/color-mode";

function FullHeader() {
  const glassBackground = useColorModeValue(
    "rgba(255, 255, 255, 0.3)",
    "rgba(0, 0, 0, 0.3)"
  );
  const borderColor = useColorModeValue(
    "rgba(255, 255, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );
  const { colorMode } = useColorMode();

  return (
    <Flex justify="center" align="center" margin={16}>
      <Box
        p={5}
        mx="15px"
        as="nav"
        position="fixed"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="2xl"
        bgColor={glassBackground}
        height="20"
        maxWidth="min(3000px, calc(100% - 30px))"
        width="full"
        minWidth="200px"
        boxShadow="lg"
        border="1px"
        borderColor={borderColor}
        backdropFilter="blur(16px)"
        top={4}
      >
        <HStack justifyContent="space-between" alignItems="center" width="full">
          <Logo
            logoType={colorMode === "light" ? LogoType.Blue : LogoType.White}
            width={85}
            height={50}
          />
          <HStack>
            <ChaptersMenu />
            <LinksNavigator />
          </HStack>
          <ColorModeButton />
        </HStack>
      </Box>
    </Flex>
  );
}

function LinksNavigator() {
  const router = useRouter();
  const pathname = usePathname();
  const indicatorColor = useColorModeValue("black", "white");

  const [activeRect, setActiveRect] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = Links.findIndex((link) => link.path === pathname);
    if (activeIndex !== -1 && buttonRefs.current[activeIndex]) {
      const btn = buttonRefs.current[activeIndex]!;
      setActiveRect({ left: btn.offsetLeft, width: btn.offsetWidth });
    } else {
      setActiveRect(null);
    }
  }, [pathname]);

  return (
    <HStack ref={containerRef} position="relative">
      {Links.map((link, index) => (
        <Button
          key={link.id}
          ref={(el) => {
            if (el) buttonRefs.current[index] = el;
          }}
          colorPalette="black"
          size="sm"
          variant="ghost"
          fontWeight="bold"
          outline={0}
          fontSize={16}
          onClick={() => router.push(link.path)}
          _hover={{
            color: "gray.700",
            backgroundColor: "transparent",
            transition: "all 0.2s ease-in-out",
          }}
        >
          {link.name}
        </Button>
      ))}

      {activeRect && (
        <Box colorPalette="black">
          {activeRect && (
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "absolute",
                bottom: 0,
                left: activeRect.left + 16,
                width: activeRect.width - 32,
                height: "3px",
                borderRadius: "8px",
                backgroundColor: indicatorColor,
              }}
            />
          )}
        </Box>
      )}
    </HStack>
  );
}

export default FullHeader;
