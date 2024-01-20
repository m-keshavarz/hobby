import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box pt="1.7rem" pb="3.4rem">
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
