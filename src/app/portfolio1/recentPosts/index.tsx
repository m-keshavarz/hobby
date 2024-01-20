import { Box, Flex, Link, Text } from "@chakra-ui/react";
import SinglePost from "./components/singlePost";
import { data } from "./components/data";

const RecentPosts = () => {
  return (
    <Flex
      className="parentOfRecentPosts"
      direction="column"
      gap="1rem"
      py="7"
      px="9.25rem"
      background="#EDF7FA"
    >
      <Box className="boxForHeader" mt="4.5rem" w="full">
        <Flex className="flexForItems" justifyContent="space-between">
          <Text fontSize="1.4rem">Recent Posts</Text>
          <Link color="#00A8CC" href="#" fontSize="1rem">
            View All
          </Link>
        </Flex>
      </Box>
      <Flex className="flexForSinglePost" justifyContent="space-between">
        {data.recentPosts.map((post) => {
          return (
            <SinglePost
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
