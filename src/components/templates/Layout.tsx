import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

export default Layout;
