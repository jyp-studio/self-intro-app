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
} from "@chakra-ui/react";
import { FiMail, FiPhone } from "react-icons/fi";

function ContactModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text as={Link} onClick={onOpen}>
        Contact
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact</ModalHeader>
          <ModalBody>
            <Stack spacing={5}>
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

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ContactModal;
