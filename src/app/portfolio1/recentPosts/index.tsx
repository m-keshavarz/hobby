import { Box, Flex, Link, Text } from "@chakra-ui/react";
import SinglePost from "./components/singlePost";
import { data } from "./components/data";

const RecentPosts = () => {
  return (
    <Flex
      direction="column"
      gap={{ base: "1rem", md: "1rem" }}
      py={{ base: "1rem", md: "7" }}
      px={{ base: "0.75rem", md: "9.25rem" }}
      background="#EDF7FA"
      mt={{ base: "3.625rem", md: "5rem" }}
    >
      <Box mt={{ base: "0", md: "4.5rem" }} w="full">
        <Flex justifyContent={{ base: "center", md: "space-between" }}>
          <Text fontSize={{ base: "1.125rem", md: "1.4rem" }}>
            Recent Posts
          </Text>
          <Link
            color="#00A8CC"
            href="#"
            fontSize="1rem"
            display={{ base: "none", md: "inline" }}
          >
            View All
          </Link>
        </Flex>
      </Box>
      <Flex
        gap="1rem"
        py={{ base: "2rem", md: "0" }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "normal", md: "space-between" }}
      >
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
