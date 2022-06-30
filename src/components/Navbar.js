import NavDrawer from "./NavDrawer";
import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box
      as="nav"
      boxShadow="base"
      position="fixed"
      w="100%"
      zIndex="200"
      bg="white"
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
          <NavDrawer />
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
