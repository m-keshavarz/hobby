import { Badge, Flex, Image, Text } from "@chakra-ui/react";

export type SingleFeaturedWorkProps = {
  imgSrc: string;
  title: string;
  year: number;
  tag: string;
  description: string;
};

const SingleFeaturedWork = (props: SingleFeaturedWorkProps) => {
  const { imgSrc, title, year, tag, description } = props;

  return (
    <Flex
      gap="1.125rem"
      pb="2rem"
      borderBottom="1px solid"
      borderColor="#e0e0e0"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Image src={imgSrc} alt="featured work" objectFit="fill" />

      <Flex direction="column" gap="1rem">
        <Text fontSize={{ base: "1.5rem", md: "1.875rem" }} fontWeight="bold">
          {title}
        </Text>
        <Flex gap="1.5rem" alignItems="center">
          <Badge
            fontSize={{ base: "1rem", md: "1.125rem" }}
            color="white"
            fontWeight="black"
            rounded="1rem"
            bg="#142850"
            px="0.625rem"
          >
            {year}
          </Badge>
          <Text fontSize={{ base: "1rem", md: "1.25rem" }} color="#8695a4">
            {tag}
          </Text>
        </Flex>
        <Text fontSize="1rem" color="#21243d">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SingleFeaturedWork;
