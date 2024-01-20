import { Flex, Text } from "@chakra-ui/react";

export type SinglePostPropType = {
  title: string;
  date: Date;
  tags: Array<string>;
  summary: string;
};

const SinglePost = ({ title, date, tags, summary }: SinglePostPropType) => {
  return (
    <Flex direction="column" px="1.25rem" py="1.5rem">
      <Text as="h3" fontSize="1.5rem" fontWeight="700">
        {title}
      </Text>
      <Text mt="1rem" fontSize="1.125rem">
        {date.toString()} | {tags.map((item) => item)}
      </Text>
      <Text mt="0.75rem">{summary}</Text>
    </Flex>
  );
};

export default SinglePost;
