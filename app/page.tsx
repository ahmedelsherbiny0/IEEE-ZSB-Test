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
  return (
    <PageWrapper>
      <HeroSection />
      <Flex flexDirection={"column"} padding={"var(--global-spacing)"}>
        <Flex bgColor={"bg"} p={100}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          maiores. Consectetur enim fugiat reiciendis dicta facilis, ipsa quis
          perferendis debitis voluptatibus quibusdam reprehenderit unde eum
          nemo! Officia temporibus laborum magnam.
        </Flex>
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
