import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function page() {
  return (
    <PageWrapper>
      <Flex
        marginTop={20}
        fontWeight={"bold"}
        fontSize={44}
        justifyContent={"center"}
      >
        WIE
      </Flex>
    </PageWrapper>
  );
}
