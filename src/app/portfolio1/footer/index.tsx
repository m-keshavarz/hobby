import { Flex, Link, Text } from "@chakra-ui/react";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../components/icons";

const Footer = () => {
  return (
    <Flex
      direction="column"
      gap="1.625rem"
      justifyContent="center"
      alignItems="center"
      mt="5.125rem"
    >
      <Flex gap="2rem">
        <Link href="#">
          <FaceBookIcon color="#21243d" w="1.875rem" h="1.875rem" />
        </Link>
        <Link href="#">
          <InstagramIcon color="#21243d" w="1.875rem" h="1.875rem" />
        </Link>
        <Link href="#">
          <TwitterIcon color="#21243d" w="1.875rem" h="1.875rem" />
        </Link>
        <Link href="#">
          <LinkedinIcon color="#21243d" w="1.875rem" h="1.875rem" />
        </Link>
      </Flex>
      <Text fontSize="0.875rem" color="#21243d">
        Copyright ©2020 All rights reserved
      </Text>
    </Flex>
  );
};

export default Footer;
