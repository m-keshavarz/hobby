import { Box, Flex, Link, Text } from "@chakra-ui/react";

const RecentPosts = () => {
  return (
    <Box position='relative' w='100' top='0' left='0'>
      <Box
        mt="4.5rem"
        py="7"
        px="9.25rem"
        background="#EDF7FA"
        w="full"
        position="absolute"
        left="0"
        top="0"
      >
        <Flex justifyContent="space-between">
          <Text fontSize="1.4rem">Recent Posts</Text>
          <Link color="#00A8CC" href="#" fontSize="1rem">
            View All
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default RecentPosts;
