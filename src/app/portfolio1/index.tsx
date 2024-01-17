import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const Portfolio1 = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" mt="12.5rem">
        <Box w="47%">
          <Box fontSize="2.75rem" fontWeight="700">
            <Text>Hi, I am John,</Text>
            <Text>Creative Technologist</Text>
          </Box>
          <Text mt="2.5rem">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
          <Button
            mt="2.38rem"
            background="#FF6464"
            color="#FFF"
            w="13rem"
            _hover={{ background: "#DD4242" }}
          >
            Download Resume
          </Button>
        </Box>
        <Box
          boxSize="fit-content"
          rounded="full"
          mr="9.4rem"
          boxShadow="-8px 17px 5px #EDF7FA"
        >
          <Image src="/public/portrait.png" alt="portraint of John" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Portfolio1;
