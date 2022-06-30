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
} from "@chakra-ui/react";
import { useDisclosure, IconButton } from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // link to github
  const handleClick = () => {
    const w = window.open("about:blank");
    w.location.href = "https://github.com/jyp-studio";
  };

  return (
    <>
      <IconButton
        ref={btnRef}
        boxShadow="base"
        colorScheme="blackAlpha.100"
        onClick={onOpen}
        icon={<GiHamburgerMenu />}
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
                <Link to="/side-project">Side Project</Link>
              </Button>
              <Button>
                <Link to="/activity">Activity</Link>
              </Button>
              <Button>
                <Link to="/certificate">Certificates</Link>
              </Button>
              <Button onClick={handleClick}>Github</Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavDrawer;
