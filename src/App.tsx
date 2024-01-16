import { Box, Center, chakra, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function App() {
  return (
    <Box>
      <Center flexDirection="column">
        <Box>
          <Text fontSize="xx-large">Welcome Home</Text>
        </Box>
        <br />
        <Text fontSize="larger" color="blue.500">
          <Link to="/portfolio1">First Portfolio</Link>
        </Text>
        <chakra.a href="https://www.figma.com/file/AZQzYsoYuVEjJBUc6MjLmC/Portfolio-UI---Web-%26-Mobile-(Community)?node-id=139%3A12&mode=dev">
          Link to the designer
        </chakra.a>
      </Center>
    </Box>
  );
}

export default App;
