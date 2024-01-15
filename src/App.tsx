import { Box, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function App() {
  return (
    <Box>
      <Center flexDirection='column'>
        <Box>
          <Text fontSize="xx-large">Welcome Home</Text>
        </Box>
        <br />
        <Text fontSize="larger" color="blue.500">
          <Link to="/newbie">Newbie Challenges</Link>
        </Text>
      </Center>
    </Box>
  );
}

export default App;
