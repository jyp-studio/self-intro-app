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
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  FiGitBranch,
  FiTool,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useState } from "react";
import Slider from "react-slick";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Feature from "../components/Feature";

import img_bg from "../assets/bg_certificate.jpg";
import img_cped_teacher0 from "../assets/cped_teacher0.jpg";
import img_cped_teacher from "../assets/cped_teacher.jpg";
import img_php_course from "../assets/php_course.jpg";
import img_pygame_course from "../assets/pygame_course.jpg";
import img_gept from "../assets/gept.jpg";

// Settings for the carousel
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// cards of Carousel
const cards = [
  {
    id: "card_1",
    title: "LAiMM設計思考工作坊",
    text: "學習設計思考的方式來構思專案，解決問題",
    image: img_pygame_course,
  },
  {
    id: "card_2",
    title: "活動總召",
    text: "擔任成大中友會聖誕節晚會總召",
    image: img_cped_teacher,
  },
  {
    id: "card_3",
    title: "營隊講師與隊輔",
    text: "2度參加成大科系探索營，幫助莘莘學子",
    image: img_gept,
  },
];

function Main() {
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
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

      {/* activity block */}
      <Flex bg={useColorModeValue("gray.50", "gray.800")} px={20} py={"100px"}>
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
              <Text color={useColorModeValue("teal.600", "teal.700")}>
                看看我參與哪些課內外活動。
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
                  variant={"ghost"}
                  as={Link}
                  to="/activity"
                  onClick={() => window.scrollTo({ top: 0 })}
                  rounded={"full"}
                  px={5}
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
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
      <Box
        position={"relative"}
        height={"600px"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        {/* <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}
        {/* Left Icon */}
        <IconButton
          color={"whiteAlpha.800"}
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
          _hover={{ textDecoration: "none", color: "white" }}
        >
          <FiChevronLeft size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          color={"whiteAlpha.800"}
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
          _hover={{ textDecoration: "none", color: "white" }}
        >
          <FiChevronRight size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card) => (
            <Box
              key={card.id}
              height={"6xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={card.image}
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                  backdropFilter="auto"
                  backdropBlur="4px"
                  alignItems={"center"}
                >
                  <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    fontWeight={"bolder"}
                    color="white"
                  >
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="gray.300">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>

      <Footer />
    </>
  );
}

export default Main;
