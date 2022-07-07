import NavDrawer from "./NavDrawer";
import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  // change color mode between light and dark
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="nav"
      boxShadow="base"
      position="fixed"
      w="100%"
      zIndex="200"
      bg={colorMode === "light" ? "white" : "black"}
    >
      <Flex>
        <Center>
          <Box p="2">
            <Heading size="lg">
              <Link to="/" className="site-title">
                JYP
              </Link>
            </Heading>
          </Box>
        </Center>
        <Spacer />
        <Box p="2">
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Box>
        <Box p="2">
          <NavDrawer />
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
