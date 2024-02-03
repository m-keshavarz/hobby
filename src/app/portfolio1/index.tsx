import { Box } from "@chakra-ui/react";
import Hero from "./hero";
import RecentPosts from "./recentPosts";
import FeaturedWork from "./featuredWork";

const Portfolio1 = () => {
  return (
    <Box>
      <Hero />
      <RecentPosts />
      <FeaturedWork />
    </Box>
  );
};

export default Portfolio1;
