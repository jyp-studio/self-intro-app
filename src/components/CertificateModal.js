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
  VStack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function CertificateModeal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imgSize, setimgSize] = useState("300px");
  const [modalSize, setModalSize] = useState({ base: "md", lg: "lg" });

  useEffect(() => {
    if (props.dir === "h") {
      setimgSize("400px");
      setModalSize({ base: "lg", md: "xl", lg: "3xl" });
    } else {
      setimgSize("300px");
      setModalSize({ base: "md", lg: "lg" });
    }
  }, [props.dir]);
  return (
    <>
      <VStack spacing={5} maxW={imgSize} onClick={onOpen}>
        <Image src={props.image} shadow="lg" />
        <Text>{props.name}</Text>
      </VStack>

      <Modal size={modalSize} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody py={5}>
            <ModalHeader fontSize={"2xl"} textAlign={"center"}>
              {props.name}
            </ModalHeader>
            <Image src={props.image} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CertificateModeal;