import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
  import { useDisclosure, IconButton } from '@chakra-ui/react';
  import React from "react";
  import { GiHamburgerMenu } from "react-icons/gi";

  function NavDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <IconButton
          ref={btnRef}
          colorScheme='blackAlpha.100'
          onClick={onOpen}
          icon={<GiHamburgerMenu />}
          variant='outline'
        >
          Open
        </IconButton>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>

            </DrawerBody>
  
            <DrawerFooter>
              
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default NavDrawer;
  