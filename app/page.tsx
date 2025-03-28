"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Text, Flex, Button } from "@chakra-ui/react";
import HeroSection from "@/components/ui/internal/home/hero-section";
import { useWindowType } from "@/hooks/use-window-type";
import { useRouter } from "next/navigation";

// import data from "../fakedata.json";
// import Image from "next/image";

export default function Home() {
  const { isDesktop } = useWindowType();
  const router = useRouter();

  return (
    <PageWrapper>
      <HeroSection />
      <Flex flexDirection={"column"} padding={"var(--global-spacing)"}>
        <Flex
          flexDirection={"column"}
          alignItems={isDesktop ? "" : "center"}
          gap={"calc(1.5 * var(--global-spacing))"}
          bgColor={"card-bg-1"}
          border={"1px solid"}
          borderColor={"card-border-1"}
          p={"var(--card-padding)"}
          rounded={"2xl"}
        >
          <Text color={"text-2"}>
            A legacy of over 26 years positions IEEE Zagazig University Student
            Branch (ZSB) as one of the first and most impactful in Egypt. We
            extend our reach beyond Zagazig University, serving students
            nationwide through workshops, events, and initiatives that explore
            technology&apos;s influence on all aspects of life, from its latest
            applications to its intersection with business in our signature
            &quot;MUTEX&quot; event, the Delta region&apos;s largest gathering
            focused on technology and entrepreneurship. Our commitment goes
            beyond technical expertise, fostering well-rounded graduates through
            six managerial committees and three technical chapters, alongside
            the Women In Engineering (WIE) Affinity Group. This comprehensive
            approach creates a professional environment where students can
            cultivate essential skills like leadership, teamwork, and
            management, ensuring they&apos;re prepared for the demands of the
            modern workforce.
          </Text>
          <Button
            backgroundColor="btn-bg-1"
            color="btn-text-1"
            borderRadius="5px"
            width="fit-content"
            paddingX={isDesktop ? "5" : "7"}
            paddingY={isDesktop ? "5" : "3"}
            _hover={{ opacity: "0.8" }}
            onClick={() => router.push("/about")}
          >
            More about us
          </Button>
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
