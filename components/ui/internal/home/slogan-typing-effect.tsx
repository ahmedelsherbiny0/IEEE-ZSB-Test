"use client";
import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { useColorMode } from "../../color-mode";
export default function SloganTypingEffect() {
  const { colorMode } = useColorMode();

  const slogan = "#we_OWN_it";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (index < slogan.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + slogan[index]);
        setIndex(index + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowCursor(false), 1000);
    }
  }, [index]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Text
      fontSize={{ base: "7vw", md: "7vw", lg: "50px" }}
      // fontSize={{ base: "3rem", md: "5rem", lg: "5rem" }}
      fontWeight="bold"
      borderRight="2px solid"
      borderColor={showCursor ? "secondary" : "transparent"}
      textAlign="center"
      margin="auto"
      marginBottom={5}
      whiteSpace="nowrap"
    >
      &nbsp;
      {displayText.split("").map((char, i) => (
        <Text
          as="span"
          key={i}
          color={
            char === "O" || char === "W" || char === "N"
              ? "#FFC900"
              : colorMode === "light"
                ? "primary"
                : "white"
          }
        >
          {char}
        </Text>
      ))}
    </Text>
  );
}
