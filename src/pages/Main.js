import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Button,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import WithSubnavigation from "../components/Nav";

// feature component
const Feature = (props) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={props.iconBg}
      >
        {props.icon}
      </Flex>
      <Text fontWeight={600}>{props.text}</Text>
    </Stack>
  );
};

function Main() {
  return (
    <>
      <WithSubnavigation />

      <Sidebar />
      <Box marginLeft={{ base: "auto", md: "350px", lg: "350px" }}>
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Make money from <br />
              <Text as={"span"} color={"teal.300"}>
                your audience
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Monetize your content by charging your most loyal readers and
              reward them loyalty points. Give back to your loyal readers by
              granting them access to your pre-releases and sneak-peaks.
            </Text>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                colorScheme={"green"}
                bg={"teal.300"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "teal.400",
                }}
              >
                <Link to="/project">Get Started</Link>
              </Button>
            </Stack>
          </Stack>
        </Container>
        <Flex bg={useColorModeValue("teal.300", "teal.400")} p={20}>
          <Container maxW={"5xl"} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <Text
                  textTransform={"uppercase"}
                  color={"blue.400"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={useColorModeValue("blue.50", "blue.900")}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  Our Story
                </Text>
                <Heading>A digital Product design agency</Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                    />
                  }
                >
                  <Feature
                    icon={<PhoneIcon color={"yellow.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("yellow.100", "yellow.900")}
                    text={"Business Planning"}
                  />
                  <Feature
                    icon={<AddIcon color={"green.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("green.100", "green.900")}
                    text={"Financial Planning"}
                  />
                  <Feature
                    icon={<WarningIcon color={"purple.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("purple.100", "purple.900")}
                    text={"Market Analysis"}
                  />
                </Stack>
              </Stack>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={
                    "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  }
                  objectFit={"cover"}
                />
              </Flex>
            </SimpleGrid>
          </Container>
        </Flex>

        <Footer />
      </Box>
    </>
  );
}

export default Main;
