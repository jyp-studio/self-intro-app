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
  Center,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FiGitBranch, FiTool, FiUser } from "react-icons/fi";
import Carousel from "react-grid-carousel";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Feature from "../components/Feature";

import img_cped_teacher0 from "../assets/cped_teacher0.jpg";
import img_cped_teacher from "../assets/cped_teacher.jpg";
import img_php_course from "../assets/php_course.jpg";
import img_pygame_course from "../assets/pygame_course.jpg";
import img_numerical_method from "../assets/numerical_method_course.jpg";
import img_gept from "../assets/gept.jpg";

// carousel items
const carouselItems = [
  { src: img_numerical_method },
  { src: img_cped_teacher },
  { src: img_php_course },
  { src: img_pygame_course },
  { src: img_cped_teacher0 },
  { src: img_gept, w: "500px", h: "auto", transform: "translate(-50%, 25%)" },
];

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
              as={Link}
              to="/autobiography"
              onClick={() => window.scrollTo({ top: 0 })}
              colorScheme={"green"}
              bg={"teal.300"}
              rounded={"full"}
              px={5}
              _hover={{
                bg: "teal.400",
              }}
            >
              <HStack spacing={2}>
                <Text>Autobiography</Text>
                <ArrowForwardIcon w={5} h={5} />
              </HStack>
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* project block */}
      <Flex bg={useColorModeValue("teal.300", "teal.400")} px={20} py={"100px"}>
        <Container maxW={"8xl"} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4} color={"black"} justify={"center"}>
              <Heading fontSize={"5xl"} color={"gray.800"}>
                專題｜Project
              </Heading>
              <Text color={useColorModeValue("teal.600", "teal.700")}>
                大學時製作的課堂專題、實習專題、與個人興趣的專案。
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("teal.500", "teal.600")}
                  />
                }
              >
                <Feature
                  name="大學專題"
                  icon={FiGitBranch}
                  bgColor={"teal.50"}
                  color={"teal.500"}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"虛擬實境、Digi實習AI、塔防遊戲、股票最佳化"}
                />
                <Feature
                  name="個人專案"
                  icon={FiTool}
                  bgColor={"cyan.50"}
                  color={"cyan.600"}
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"個人網頁、智慧家庭、Unity Flappy Bird、音樂播放器"}
                />
                <Feature
                  name="正在進行"
                  icon={FiUser}
                  bgColor={"blue.50"}
                  color={"blue.400"}
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"企業財報辨識、步態預測、影像處理專題"}
                />
              </Stack>
              <Center>
                <Button
                  mt={8}
                  as={Link}
                  to="/project"
                  onClick={() => window.scrollTo({ top: 0 })}
                  rounded={"full"}
                  px={5}
                  color={"gray.800"}
                  bg={"gray.100"}
                  _hover={{
                    bg: "gray.200",
                  }}
                  display={{ base: "none", md: "flex" }}
                >
                  <HStack spacing={2}>
                    <Text>Project</Text>
                    <ArrowForwardIcon w={5} h={5} />
                  </HStack>
                </Button>
              </Center>
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
            <Center>
              <Button
                mt={8}
                variant={"ghost"}
                as={Link}
                to="/project"
                onClick={() => window.scrollTo({ top: 0 })}
                rounded={"full"}
                px={5}
                color={"gray.800"}
                bg={"gray.100"}
                _hover={{
                  bg: "gray.200",
                }}
                display={{ base: "flex", md: "none" }}
              >
                <HStack spacing={2}>
                  <Text>Project</Text>
                  <ArrowForwardIcon w={5} h={5} />
                </HStack>
              </Button>
            </Center>
          </SimpleGrid>
        </Container>
      </Flex>

      {/* activity block */}
      <Flex bg={useColorModeValue("gray.50", "gray.900")} px={20} py={"100px"}>
        <Container maxW={"8xl"} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Flex display={{ base: "none", md: "flex" }}>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={
                  "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
                objectFit={"cover"}
              />
            </Flex>
            <Stack
              spacing={4}
              justify={"center"}
              color={useColorModeValue("gray.800", "gray.100")}
            >
              <Heading
                fontSize={"5xl"}
                color={useColorModeValue("gray.900", "gray.50")}
              >
                活動｜Activity
              </Heading>
              <Text color={useColorModeValue("gray.400", "gray.500")}>
                看看我參與哪些課內外活動。
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                  />
                }
              >
                <Feature
                  name="課內活動"
                  icon={FiGitBranch}
                  bgColor={"teal.50"}
                  color={"teal.500"}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"設計思考工作坊、數值方法工作坊、創客計畫"}
                />
                <Feature
                  name="課外活動"
                  icon={FiTool}
                  bgColor={"cyan.50"}
                  color={"cyan.600"}
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"中友科系探索營、總召、講師、隊輔"}
                />
                <Feature
                  name="人格特質"
                  icon={FiUser}
                  bgColor={"blue.50"}
                  color={"blue.400"}
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"開朗活潑、創新創意、快速學習、充滿自信"}
                />
              </Stack>
              <Center>
                <Button
                  mt={8}
                  as={Link}
                  to="/activity"
                  onClick={() => window.scrollTo({ top: 0 })}
                  rounded={"full"}
                  px={5}
                  colorScheme={"teal"}
                  bg={"teal.400"}
                  _hover={{
                    bg: "teal.500",
                  }}
                  display={{ base: "none", md: "flex" }}
                >
                  <HStack spacing={2}>
                    <Text>Activity</Text>
                    <ArrowForwardIcon w={5} h={5} />
                  </HStack>
                </Button>
              </Center>
            </Stack>
            <Flex>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={
                  "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
                objectFit={"cover"}
                display={{ base: "flex", md: "none" }}
              />
            </Flex>
            <Center>
              <Button
                mt={8}
                variant={"ghost"}
                as={Link}
                to="/project"
                onClick={() => window.scrollTo({ top: 0 })}
                rounded={"full"}
                px={5}
                color={"gray.100"}
                _hover={{
                  bg: "whiteAlpha.300",
                }}
                display={{ base: "flex", md: "none" }}
              >
                <HStack spacing={2}>
                  <Text>Project</Text>
                  <ArrowForwardIcon w={5} h={5} />
                </HStack>
              </Button>
            </Center>
          </SimpleGrid>
        </Container>
      </Flex>

      {/* certificate block */}
      <Stack py={150} spacing={20} bg={useColorModeValue("white", "gray.800")}>
        <Heading textAlign={"center"} color={"teal.400"} fontSize={"5xl"}>
          證書｜Certificates
        </Heading>
        <Center>
          <Button
            as={Link}
            to="/certificate"
            onClick={() => window.scrollTo({ top: 0 })}
            colorScheme={"green"}
            bg={"teal.300"}
            rounded={"full"}
            px={5}
            _hover={{
              bg: "teal.400",
            }}
          >
            <HStack spacing={2}>
              <Text>Certificates</Text>
              <ArrowForwardIcon w={5} h={5} />
            </HStack>
          </Button>
        </Center>

        <Carousel
          cols={useBreakpointValue({ base: 1, md: 2, lg: 3 })}
          rows={1}
          gap={10}
          hideArrow
          loop
          autoplay={useBreakpointValue({ md: 4000 })}
        >
          {carouselItems.map((card) => (
            <Carousel.Item>
              <Box w={card.w ?? "380px"} h={card.h ?? "550px"} pos={"relative"}>
                <Image
                  shadow={"xl"}
                  rounded={"xl"}
                  src={card.src}
                  pos={"absolute"}
                  top={"50%"}
                  left={"50%"}
                  transform={card.transform ?? "translate(-50%, -50%)"}
                />
              </Box>
            </Carousel.Item>
          ))}
        </Carousel>
      </Stack>
      <Footer marginTop="0" />
    </>
  );
}

export default Main;
