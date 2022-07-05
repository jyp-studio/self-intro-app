import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useDisclosure, IconButton } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        boxShadow="base"
        colorScheme="blackAlpha.100"
        onClick={onOpen}
        icon={<HamburgerIcon />}
        variant="outline"
      >
        Open
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>About Me</DrawerHeader>

          <DrawerBody>
            <VStack align="stretch">
              <Button>
                <Link to="/">Main</Link>
              </Button>
              <Button>
                <Link to="/project">Project</Link>
              </Button>
              <Button>
                <Link to="/activity">Activity</Link>
              </Button>
              <Button>
                <Link to="/certificate">Certificates</Link>
              </Button>
              <Button>
                <ChakraLink href="https://github.com/jyp-studio" isExternal>
                  Github
                </ChakraLink>
              </Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavDrawer;
