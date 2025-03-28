import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function page() {
  return (
    <PageWrapper>
      <Flex flexDirection={"column"} padding={"var(--global-spacing)"}>
        <Flex fontWeight={"bold"} fontSize={44} justifyContent={"center"}>
          RAS
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
