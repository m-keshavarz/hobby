import { Box, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box mt="20">
      <Center>
        <Text fontSize='x-large' as="h1">404 Not Found</Text>
      </Center>
      <Center mt="8">
        <Text color="blue.500">
          <Link to="/">Get Back Home</Link>
        </Text>
      </Center>
    </Box>
  );
}
