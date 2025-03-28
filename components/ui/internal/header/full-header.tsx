import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import ChaptersMenu from "./chapters-menu";
import { ColorModeButton } from "@/components/ui/color-mode";
import Logo from "@/components/ui/internal/logo";
import { LogoType } from "@/components/ui/internal/logo";
import { Links } from "./links";
import { motion } from "framer-motion";

function FullHeader() {
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
        height="20"
        maxWidth="min(3000px, calc(100% - 40px))"
        width="full"
        minWidth="200px"
        boxShadow="lg"
        bgColor={"card-bg-3"}
        color={"white"}
        border="1px solid"
        borderColor="card-border-3"
        borderRadius="2xl"
        backdropFilter="blur(16px)"
        top={"var(--global-spacing)"}
        zIndex={5}
      >
        <HStack justifyContent="space-between" alignItems="center" width="full">
          <Logo logoType={LogoType.White} width={85} height={50} />
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
          color={"white"}
          size="sm"
          variant="ghost"
          fontWeight="bold"
          outline={0}
          fontSize={16}
          onClick={() => router.push(link.path)}
          _hover={{
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
                backgroundColor: "white",
              }}
            />
          )}
        </Box>
      )}
    </HStack>
  );
}

export default FullHeader;
