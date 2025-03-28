"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex } from "@chakra-ui/react";
import HeroSection from "@/components/ui/internal/home/hero-section";
import SloganTypingEffect from "@/components/ui/internal/home/slogan-typing-effect";
import { useWindowType } from "@/hooks/use-window-type";
import { useEffect, useRef } from "react";
// import data from "../fakedata.json";
// import Image from "next/image";

export default function Home() {
  const { isDesktop } = useWindowType();
  const gradientRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientSize = isDesktop ? 300 : 150;
  const requestRef = useRef<number>(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current || !gradientRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    const isInside =
      e.clientX >= containerRect.left &&
      e.clientX <= containerRect.right &&
      e.clientY >= containerRect.top &&
      e.clientY <= containerRect.bottom;

    if (isInside) {
      gradientRef.current.style.opacity = "1";
      gradientRef.current.style.left = `${mouseX}px`;
      gradientRef.current.style.top = `${mouseY}px`;
    } else {
      gradientRef.current.style.opacity = "0";
    }
  };

  useEffect(() => {
    const currentRequestRef = requestRef;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (currentRequestRef.current) {
        cancelAnimationFrame(currentRequestRef.current);
      }
    };
  }, []);

  return (
    <PageWrapper>
      <Flex
        ref={containerRef}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={isDesktop ? 10 : 5}
        marginX="auto"
        zIndex={-10}
        height={isDesktop ? "80vh" : "auto"}
        maxHeight={isDesktop ? 1000 : 700}
        position="relative"
        overflow="hidden"
        rounded={"2xl"}
        color={"natural-2"}
        width={"full"}
      >
        <div
          style={{
            position: "absolute",
            width: isDesktop ? 600 : 200,
            height: isDesktop ? 600 : 200,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            right: 0,
            top: 0,
            transform: "translate(50%, -50%)",
            zIndex: -1,
            opacity: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: isDesktop ? 600 : 200,
            height: isDesktop ? 600 : 200,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            left: 0,
            bottom: 0,
            transform: "translate(-50%, 50%)",
            zIndex: -1,
            opacity: 1,
          }}
        />
        <div
          ref={gradientRef}
          style={{
            position: "absolute",
            width: gradientSize,
            height: gradientSize,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            left: 0,
            top: 0,
            transform: `translate(-${gradientSize / 2}px, -${
              gradientSize / 2
            }px)`,
            zIndex: -1,
            willChange: "transform",
            opacity: 0,
            transition: "opacity 0.1s ease-out",
          }}
        />
        <HeroSection />
        <SloganTypingEffect />
      </Flex>
      <Flex flexDirection={"column"} padding={"var(--global-spacing)"}>
        {/* <Flex
        bgColor={"card-bg-1"}
        w={"full"}
        padding={"var(--card-padding)"}
        rounded={"2xl"}
        fontSize={"2rem"}
        flexDirection={"column"}
      >
        {data.data.map((item, i) => {
          return (
            <Flex
              key={item.id}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
              height={"fit-content"}
            >
              {i}:<p>{item.title}</p>
              <p>{item.description}</p>
              <Image
                src={item.photo}
                alt={item.title}
                width={160}
                height={80}
                layout="responsive"
              />
            </Flex>
          );
        })}
      </Flex> */}
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
          voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
          Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
          reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
          quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
          magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
          ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
          saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, maiores. Consectetur enim fugiat reiciendis dicta facilis,
          ipsa quis perferendis debitis voluptatibus quibusdam reprehenderit
          unde eum nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Fuga totam ducimus est
          molestiae tempore voluptas, iusto ut aliquam porro ipsum, aliquid quos
          aut commodi nemo? Hic cum nesciunt repellendus saepe! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae, maiores.
          Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
          voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
          Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
          reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
          quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
          magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
          ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
          saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, maiores. Consectetur enim fugiat reiciendis dicta facilis,
          ipsa quis perferendis debitis voluptatibus quibusdam reprehenderit
          unde eum nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Fuga totam ducimus est
          molestiae tempore voluptas, iusto ut aliquam porro ipsum, aliquid quos
          aut commodi nemo? Hic cum nesciunt repellendus saepe! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae, maiores.
          Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
          voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
          Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
          reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
          quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
          magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
          ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
          saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, maiores. Consectetur enim fugiat reiciendis dicta facilis,
          ipsa quis perferendis debitis voluptatibus quibusdam reprehenderit
          unde eum nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Fuga totam ducimus est
          molestiae tempore voluptas, iusto ut aliquam porro ipsum, aliquid quos
          aut commodi nemo? Hic cum nesciunt repellendus saepe! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae, maiores.
          Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
          voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
          Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
          reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
          quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
          magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
          ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
          saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, maiores. Consectetur enim fugiat reiciendis dicta facilis,
          ipsa quis perferendis debitis voluptatibus quibusdam reprehenderit
          unde eum nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Fuga totam ducimus est
          molestiae tempore voluptas, iusto ut aliquam porro ipsum, aliquid quos
          aut commodi nemo? Hic cum nesciunt repellendus saepe! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae, maiores.
          Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
          voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
          Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
          reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
          quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
          magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
          ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
          saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, maiores. Consectetur enim fugiat reiciendis dicta facilis,
          ipsa quis perferendis debitis voluptatibus quibusdam reprehenderit
          unde eum nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Fuga totam ducimus est
          molestiae tempore voluptas, iusto ut aliquam porro ipsum, aliquid quos
          aut commodi nemo? Hic cum nesciunt repellendus saepe! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae, maiores.
          Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
          voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
          Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
          reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
          quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
          magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
          ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
          saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, maiores. Consectetur enim fugiat reiciendis dicta facilis,
          ipsa quis perferendis debitis voluptatibus quibusdam reprehenderit
          unde eum nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Fuga totam ducimus est
          molestiae tempore voluptas, iusto ut aliquam porro ipsum, aliquid quos
          aut commodi nemo? Hic cum nesciunt repellendus saepe! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae, maiores.
          Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
          voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
          Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
          reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
          quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
          magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
          ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
          saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, maiores. Consectetur enim fugiat reiciendis dicta facilis,
          ipsa quis perferendis debitis voluptatibus quibusdam reprehenderit
          unde eum nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Fuga totam ducimus est
          molestiae tempore voluptas, iusto ut aliquam porro ipsum, aliquid quos
          aut commodi nemo? Hic cum nesciunt repellendus saepe! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae, maiores.
          Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
          voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
          Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
          reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
          quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
          magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
          ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
          saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, maiores. Consectetur enim fugiat reiciendis dicta facilis,
          ipsa quis perferendis debitis voluptatibus quibusdam reprehenderit
          unde eum nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Fuga totam ducimus est
          molestiae tempore voluptas, iusto ut aliquam porro ipsum, aliquid quos
          aut commodi nemo? Hic cum nesciunt repellendus saepe! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae, maiores.
          Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
          voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
          Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
          reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
          quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
          magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
          ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
          saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, maiores. Consectetur enim fugiat reiciendis dicta facilis,
          ipsa quis perferendis debitis voluptatibus quibusdam reprehenderit
          unde eum nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Fuga totam ducimus est
          molestiae tempore voluptas, iusto ut aliquam porro ipsum, aliquid quos
          aut commodi nemo? Hic cum nesciunt repellendus saepe! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae, maiores.
          Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fuga totam ducimus est molestiae tempore
          voluptas, iusto ut aliquam porro ipsum, aliquid quos aut commodi nemo?
          Hic cum nesciunt repellendus saepe! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Beatae, maiores. Consectetur enim fugiat
          reiciendis dicta facilis, ipsa quis perferendis debitis voluptatibus
          quibusdam reprehenderit unde eum nemo! Officia temporibus laborum
          magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          totam ducimus est molestiae tempore voluptas, iusto ut aliquam porro
          ipsum, aliquid quos aut commodi nemo? Hic cum nesciunt repellendus
          saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, maiores. Consectetur enim fugiat reiciendis dicta facilis,
          ipsa quis perferendis debitis voluptatibus quibusdam reprehenderit
          unde eum nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Fuga totam ducimus est
          molestiae tempore voluptas, iusto ut aliquam porro ipsum, aliquid quos
          aut commodi nemo? Hic cum nesciunt repellendus saepe! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae, maiores.
          Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam. Lorem, ipsum dolor sit amet
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
      </Flex>
    </PageWrapper>
  );
}
