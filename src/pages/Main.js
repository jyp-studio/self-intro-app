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
  Tag,
  TagLabel,
  TagRightIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiGitBranch, FiTool, FiUser } from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// feature component
const Feature = (props) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Tag size={"lg"} colorScheme={props.color} variant="subtle">
        <TagLabel>{props.name}</TagLabel>
        <TagRightIcon as={props.icon} />
      </Tag>
      <Text fontWeight={600}>{props.text}</Text>
    </Stack>
  );
};

function Main() {
  return (
    <>
      <Navbar />

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 60, md: 60 }}
          h={"100vh"}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "8xl" }}
            lineHeight={"110%"}
          >
            All about{" "}
            <Text as={"span"} color={"teal.300"}>
              me
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Great works are performed not by strength but by perseverance.
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
              <Link to="/project" onClick={() => window.scrollTo({ top: 0 })}>
                Get Started
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Flex bg={useColorModeValue("teal.300", "teal.400")} p={20}>
        <Container maxW={"8xl"} py={12}>
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
                My Story
              </Text>
              <Heading>關於我</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                簡單概括我的興趣、技能和特質，可以在其他分頁從專案和活動中了解更多。
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
                  name="興趣"
                  icon={FiGitBranch}
                  color={"green"}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"多媒體、深度學習、電腦視覺、影像辨識、資料探勘"}
                />
                <Feature
                  name="技能"
                  icon={FiTool}
                  color={"cyan"}
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"Python, JavaScript, C/C++/C#, React, Yolov5, Roboflow"}
                />
                <Feature
                  name="特質"
                  icon={FiUser}
                  color={"pink"}
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"活潑開朗、台風穩健、創新創意"}
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
    </>
  );
}

export default Main;
