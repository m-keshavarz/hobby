import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      direction={{ base: "column-reverse", md: "row" }}
      justifyContent={{ base: "center", md: "space-between" }}
      mt={{ base: "5rem", md: "12.5rem" }}
      pl={{ base: "1.75rem", md: "9.25rem" }}
      pr={{ base: "1.75rem", md: "0" }}
    >
      <Box maxW={{ base: "full", md: "47%" }} mt={{ base: "2rem", md: "0" }}>
        <Box
          fontSize={{ base: "2rem", md: "2.75rem" }}
          fontWeight="700"
          textAlign={{ base: "center", md: "left" }}
        >
          <Text>Hi, I am John,</Text>
          <Text>Creative Technologist</Text>
        </Box>
        <Text mt={{ base: "1.25rem", md: "2.5rem" }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
        <Button
          display="block"
          mx={{ base: "auto", md: "0" }}
          mt={{ base: "1.5rem", md: "2.38rem" }}
          background="#FF6464"
          color="#FFF"
          w={{ base: "55%", md: "13rem" }}
          _hover={{ background: "#DD4242" }}
        >
          Download Resume
        </Button>
      </Box>
      <Box
        margin={{base: 'auto', md: '0 9.4rem 0 0'}}
        boxSize="fit-content"
        rounded="full"
        // mr={{ base: "0", md: "9.4rem" }}
        boxShadow="-8px 17px 5px #EDF7FA"
      >
        <Image src="/public/portrait.png" alt="portraint of John" />
      </Box>
    </Flex>
  );
};

export default Hero;
