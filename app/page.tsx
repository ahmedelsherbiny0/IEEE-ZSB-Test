"use client";
import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

export default function Home() {
  const text = "#we_OWN_it";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowCursor(false), 500);
    }
  }, [index]);

  useEffect(() => {
    if (index < text.length) {
      const cursorBlink = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 200);
      return () => clearInterval(cursorBlink);
    }
  }, [index]);
  return (
    <>
      <Text
        style={{ fontSize: "min(6vw, 50px)" }}
        fontSize={{ base: "5vw", md: "4vw", lg: "3vw" }}
        fontWeight="bold"
        borderRight={showCursor ? "2px solid white" : "2px solid transparent"}
        width="fit-content"
        margin="auto"
        marginBottom={5}
      >
        <Text
          style={{ fontSize: "min(5vw, 60px)" }}
          fontSize={{ base: "6vw", md: "4vw", lg: "3vw" }}
          color={"transparent"}
          display={"inline"}
        >
          f
        </Text>
        {displayText.split("").map((part, i) => (
          <Text
            as="span"
            key={i}
            color={
              part === "O" || part === "W" || part === "N"
                ? "#FFC900"
                : "inherit"
            }
          >
            {part}
          </Text>
        ))}
      </Text>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
        voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
        Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
        reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
        quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
        magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
        ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
        saepe!
      </div>
      <div className="h-[5200px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
        perferendis debitis voluptatibus quibusdam reprehenderit unde eum nemo!
        Officia temporibus laborum magnam.
      </div>
    </>
  );
}
