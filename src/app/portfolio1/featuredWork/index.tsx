import { Box, Flex, Text } from "@chakra-ui/react";
import SingleFeaturedWork from "./components/singleFeaturedWork";
import fakeData from "./components/fakeDate";

const FeaturedWork = () => {
  return (
    <Box px={{ base: "1.125rem", md: "9.25rem" }} pt="1rem">
      <Text
        fontSize={{ base: "1.125rem", md: "1.375rem" }}
        textAlign={{ base: "center", md: "inherit" }}
        color="#21243d"
      >
        Featured works
      </Text>
      <Flex
        direction="column"
        gap={{ base: "1.5rem", md: "2.875rem" }}
        mt="1.375rem"
      >
        {fakeData.map((item, index) => {
          return (
            <SingleFeaturedWork
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              year={item.year}
              tag={item.tag}
              description={item.description}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default FeaturedWork;
