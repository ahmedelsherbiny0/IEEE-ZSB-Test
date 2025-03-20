import type { Metadata } from "next";
import Header from "@/components/ui/internal/header";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "IEEE ZSB",
  description: "IEEE Zagazig Student Branch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Box margin={"auto"} maxWidth={"3000px"} padding={"15px"}>
            <Header />
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  );
}
