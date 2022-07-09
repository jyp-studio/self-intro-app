import React, { useEffect, useState } from "react";
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
      position="fixed"
      zIndex="199"
      display={{ base: "none", md: "flex" }}
      marginTop={"85"}
    >
      {console.log(props.linkItems)}
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        linkItems={props.linkItems}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} linkItems={props.linkItems} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const SidebarContent = (props) => {
  return (
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
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = (props) => {
  return (
    <Link
      href={props.href}
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
        _hover={{
          bg: "teal.400",
          color: "white",
        }}
        {...props.rest}
      >
        {props.icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={props.icon}
          />
        )}
        {props.children}
      </Flex>
    </Link>
  );
};
