import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Newbie = () => {
  return (
    <Box>
      <Text fontSize='larger'>All Newbie Challenges</Text>
      <Text fontSize="larger" color="blue.500">
        <Link to="/newbie/blog-preview-card">Blog Preview Card</Link>
      </Text>
    </Box>
  );
};

export default Newbie;
