import { Box, Flex, Link, Text } from "@chakra-ui/react";
import SinglePost from "./components/singlePost";
import { data } from "./components/data";

const RecentPosts = () => {
  return (
    <Flex
      direction="column"
      gap="1rem"
      py="7"
      px="9.25rem"
      background="#EDF7FA"
      mt="5rem"
    >
      <Box mt="4.5rem" w="full">
        <Flex justifyContent="space-between">
          <Text fontSize="1.4rem">Recent Posts</Text>
          <Link color="#00A8CC" href="#" fontSize="1rem">
            View All
          </Link>
        </Flex>
      </Box>
      <Flex gap="1rem" justifyContent="space-between">
        {data.recentPosts.map((post, index) => {
          return (
            <SinglePost
              key={index}
              title={post.title}
              date={post.date}
              tags={post.tags}
              summary={post.summary}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default RecentPosts;
