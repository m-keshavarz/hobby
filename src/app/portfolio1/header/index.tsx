import { Box, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box display="flex" justifyContent="flex-end" fontSize="1.25rem" gap="7">
      <Link href="#">Works</Link>
      <Link href="#">Blog</Link>
      <Link href="#">Contact</Link>
    </Box>
  );
};

export default Header;
