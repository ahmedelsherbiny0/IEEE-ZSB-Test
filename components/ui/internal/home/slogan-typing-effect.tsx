"use client";
import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

export default function SloganTypingEffect() {
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
      fontSize={{ base: "7vw", md: "5vw", lg: "50px" }} // Font size limited to max 40px
      fontWeight="bold"
      borderRight={showCursor ? "2px solid white" : "2px solid transparent"}
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
            char === "O" || char === "W" || char === "N" ? "#FFC900" : "inherit"
          }
        >
          {char}
        </Text>
      ))}
    </Text>
  );
}
