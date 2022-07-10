import React from "react";
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

export default function Sidebar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      display={{ base: "none", md: "flex" }}
      paddingTop="59"
      position={"fixed"}
    >
      {/* <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        linkItems={props.linkItems}
      /> */}

      <Box
        py="2"
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...props.rest}
      >
        {props.linkItems.map((link) => (
          <Link
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
              {...link.rest}
            >
              {link.icon && (
                <Icon
                  mr="4"
                  fontSize="16"
                  _groupHover={{ color: "white" }}
                  as={link.icon}
                />
              )}
              {link.name}
            </Flex>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
