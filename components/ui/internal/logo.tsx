import { Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Image
        src="/Images/IEEE/IEEE Blue.svg"
        alt="IEEE ZSB Logo"
        width={85}
        height={50}
        transition="all 0.2s ease-in-out"
        _hover={{ opacity: 0.9 }}
      />
    </Link>
  );
}
