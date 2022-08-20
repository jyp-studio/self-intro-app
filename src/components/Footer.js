import {
  chakra,
  Link as ChakraLink,
  Box,
  Text,
  Container,
  Stack,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import AboutModal from "./AboutModal";
import ContactModal from "./ContactModal";

// social button component in fotter
const SocialButton = (props) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={ChakraLink}
      href={props.href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      isExternal
    >
      <VisuallyHidden>{props.label}</VisuallyHidden>
      {props.children}
    </chakra.button>
  );
};

function Footer() {
  return (
    <>
      <Box
        marginTop={"10"}
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Text as={"span"} fontWeight="bold">
            JYP - STUDIO
          </Text>
          <Stack direction={"row"} spacing={6}>
            <ChakraLink
              as={Link}
              to={"/"}
              onClick={() => window.scrollTo({ top: 0 })}
            >
              Home
            </ChakraLink>
            <AboutModal />
            <ContactModal />
          </Stack>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>This self-intro-app is created with Chakra-UI.</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Github"}
                href={"https://github.com/jyp-studio"}
              >
                <FaGithub />
              </SocialButton>
              <SocialButton
                label={"Facebook"}
                href={"https://www.facebook.com/profile.php?id=100003450323622"}
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com/jyp.1129/"}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
