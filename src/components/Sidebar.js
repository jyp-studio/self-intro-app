import React from "react";
import { Box, Flex, Icon, useColorModeValue, Link } from "@chakra-ui/react";

function Sidebar(props) {
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      display={{ base: "none", md: "flex" }}
      paddingTop="59"
      position={"fixed"}
    >
      <Box
        overflowY="auto"
        py="2"
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ md: 60 }}
        pos="fixed"
        h="full"
        {...props.rest}
      >
        {props.linkItems.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <Flex
              align="center"
              p="4"
              mx="4"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{ bg: "teal.400", color: "white" }}
              {...link}
            >
              {link.icon && (
                <Icon
                  // as={link.icon}
                  mr="4"
                  mt="1"
                  fontSize="18"
                  _groupHover={{ color: "white" }}
                >
                  {link.icon}
                </Icon>
              )}
              {link.name}
            </Flex>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Sidebar;
