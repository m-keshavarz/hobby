import { Box } from "@chakra-ui/react";
import Hero from "./hero";
import RecentPosts from "./recentPosts";
import FeaturedWork from "./featuredWork";
import Footer from "./footer";

const Portfolio1 = () => {
  return (
    <Box>
      <Hero />
      <RecentPosts />
      <FeaturedWork />
      <Footer />
    </Box>
  );
};

export default Portfolio1;
