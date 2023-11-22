import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <Text>Hello World!</Text>
      <Text>Good night</Text>
    </Box>
  );
}
