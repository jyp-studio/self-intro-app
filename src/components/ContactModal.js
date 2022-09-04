import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Text,
  Link,
  HStack,
  Stack,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FiMail, FiPhone } from "react-icons/fi";

function ContactModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text as={Link} onClick={onOpen}>
        Contact
      </Text>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={5} py={5}>
              <Text fontWeight={"bold"}>潘玠佑 JYP</Text>
              <HStack spacing={5}>
                <FiMail />
                <Text>jackie1129008@gmail.com</Text>
              </HStack>
              <HStack spacing={5}>
                <FiPhone />
                <Text>0900633755</Text>
              </HStack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ContactModal;
