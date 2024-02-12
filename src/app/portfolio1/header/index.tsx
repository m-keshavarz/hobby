import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "../../components/icons";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent="flex-end"
        pr="1rem"
      >
        <HamburgerIcon color="#000" boxSize="30" onClick={onOpen} />
      </Box>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="flex-end"
              fontSize="1.25rem"
              gap="7"
              mt="5rem"
            >
              <Link href="#">Works</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact</Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box
        display={{ base: "none", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="flex-end"
        fontSize="1.25rem"
        gap="7"
        pr="3.75rem"
      >
        <Link href="#">Works</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Contact</Link>
      </Box>
    </Box>
  );
};

export default Header;
