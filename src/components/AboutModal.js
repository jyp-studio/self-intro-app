import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Heading,
  Flex,
  Text,
  Link,
  Stack,
  Divider,
} from "@chakra-ui/react";

function AboutModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text as={Link} onClick={onOpen}>
        About
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About</ModalHeader>
          <ModalBody>
            <Stack spacing={5}>
              <Text>
                <Text as={"span"} fontWeight="bold">
                  開發：
                </Text>
                潘玠佑
              </Text>
              <Divider />
              <Flex>
                <Text as={"span"} fontWeight="bold">
                  版本：
                </Text>
                <Stack spacing={5}>
                  <Text>react v18.2.0</Text>
                  <Text>react-router-dom v6.3.0</Text>
                  <Text>node v18.7.0</Text>
                </Stack>
              </Flex>
              <Divider />
              <Text>使用Chakra UI美化頁面</Text>
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

export default AboutModal;
