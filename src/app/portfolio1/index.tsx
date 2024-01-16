import { Box, Button, Text } from "@chakra-ui/react";

const Portfolio1 = () => {
  return (
    <Box>
      <Box>
        <Box mt="12.5rem" fontSize="2.75rem" fontWeight="700">
          <Text>Hi, I am John,</Text>
          <Text>Creative Technologist</Text>
        </Box>
        <Text mt="2.5rem" w="45%">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
        <Button  mt="2.38rem">
          Download Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Portfolio1;
