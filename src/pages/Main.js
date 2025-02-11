import {
  Box,
  Heading,
  Text,
  Container,
  Image,
  Flex,
  Button,
  Stack,
  StackDivider,
  useColorModeValue,
  Center,
  HStack,
  useBreakpointValue,
  Icon,
  Skeleton,
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
import Carousel from "react-grid-carousel";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Feature from "../components/Feature";
import Title from "../components/Title";

import img_cped_teacher0 from "../assets/cped_teacher0.jpg";
import img_cped_teacher from "../assets/cped_teacher.jpg";
import img_php_course from "../assets/php_course.jpg";
import img_pygame_course from "../assets/pygame_course.jpg";
import img_numerical_method from "../assets/numerical_method_course.jpg";
import img_gept from "../assets/gept.jpg";
import img_bg_opt from "../assets/bg_opt.jpeg";
import img_bg_digi from "../assets/bg_digi.jpg";
import img_bg_in_progress from "../assets/bg_programming.jpeg";
import img_bg_sideproject from "../assets/bg_sideproject.jpg";
import img_bg_tower from "../assets/bg_tower.jpg";
import img_bg_vr from "../assets/bg_vr.jpg";
import img_thanksgivening from "../assets/thanks_giving.jpg";
import img_mc_all from "../assets/mc_all.jpg";
import img_coding_bg from "../assets/coding_bg1.png";
import img_led from "../assets/led.jpg";

// carousel items
const carouselItems = [
  { src: img_numerical_method },
  { src: img_cped_teacher },
  { src: img_php_course },
  { src: img_pygame_course },
  { src: img_cped_teacher0 },
  { src: img_gept, w: "500px", h: "auto", transform: "translate(-50%, 25%)" },
];

//project carousel items
const projectItems = [
  {
    brightness: "50%",
    image: img_bg_vr,
    mainTitle: "VR專題",
    mainColor: "cyan.300",
    subColor: "cyan.100",
    subTitle: "探討情境學習融入虛擬實境對學生學習表現與參與度之影響",
  },
  {
    brightness: "50%",
    image: img_bg_digi,
    mainColor: "yellow.400",
    mainTitle: "Digi+ Talent 實習",
    subColor: "orange.100",
    subTitle: "與企業和跨領域人才合作共同製作專題",
  },
  {
    image: img_bg_opt,
    mainTitle: "數值最佳化投資",
    mainColor: "orange.200",
    subColor: "orange.300",
    subTitle: "運用數值方法於python中來進行股票回測",
  },
  {
    image: img_bg_tower,
    mainTitle: "Tower Defense",
    mainColor: "whiteAlpha.900",
    subColor: "whiteAlpha.700",
    subTitle: "用python從0打造自己的塔防遊戲",
  },
  {
    brightness: "50%",
    image: img_bg_in_progress,
    mainTitle: "專題ing",
    mainColor: "purple.300",
    subColor: "purple.400",
    subTitle: "目前正在進行中的專題，包含步態預測、影像辨識和視窗程式設計。",
  },
  {
    image: img_bg_sideproject,
    mainColor: "blackAlpha.800",
    mainTitle: "Side Project",
    subColor: "black",
    subTitle:
      "我很喜歡學習各項新知識與技術，而這些是我學習各項技術時，嘗試動手做出的專案！",
  },
];

// activity carousel items
const activityItems = [
  {
    mainTitle: "設計思考工作坊",
    subTitle: "學習設計思考的方式來構思專案，解決問題",
    image: img_coding_bg,
  },
  {
    mainTitle: "活動總召",
    subTitle: "擔任成大中友會聖誕節晚會總召",
    image: img_thanksgivening,
  },
  {
    mainTitle: "LED光蛇",
    subTitle: "參與創客計畫，學習焊接與撰寫光蛇",
    image: img_led,
  },
  {
    mainTitle: "營隊講師與隊輔",
    subTitle: "2度參加成大科系探索營，幫助莘莘學子",
    image: img_mc_all,
  },
];

const LeftArrow = (
  <Icon
    as={FiChevronLeft}
    w={10}
    h={10}
    color={"whiteAlpha.300"}
    aria-label="left-arrow"
    variant="ghost"
    position="absolute"
    left={"30px"}
    top={"50%"}
    transform={"translate(0%, -50%)"}
    zIndex={2}
    _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}
  />
);

const RightArrow = (
  <Icon
    as={FiChevronRight}
    w={10}
    h={10}
    color={"whiteAlpha.300"}
    aria-label="right-arrow"
    variant="ghost"
    position="absolute"
    right={"30px"}
    top={"50%"}
    transform={"translate(0%, -50%)"}
    alignSelf={"flex-end"}
    alignItems={"flex-end"}
    zIndex={2}
    _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}
  />
);

const XlLeftArrow = (
  <Icon
    as={FiChevronLeft}
    w={50}
    h={50}
    color={"blackAlpha.400"}
    aria-label="left-arrow"
    variant="ghost"
    position="absolute"
    left={"30px"}
    top={"50%"}
    transform={"translate(0%, -50%)"}
    zIndex={2}
    _hover={{ textDecoration: "none", color: "blackAlpha.800" }}
  />
);

const XlRightArrow = (
  <Icon
    as={FiChevronRight}
    w={50}
    h={50}
    color={"blackAlpha.400"}
    aria-label="right-arrow"
    variant="ghost"
    position="absolute"
    right={"30px"}
    top={"50%"}
    transform={"translate(0%, -50%)"}
    alignSelf={"flex-end"}
    alignItems={"flex-end"}
    zIndex={2}
    _hover={{ textDecoration: "none", color: "blackAlpha.800" }}
  />
);

function Main() {
  // define element render or not
  let breakPoint = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

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
      <Box bg={useColorModeValue("teal.300", "teal.400")} py={"100px"}>
        <Container maxW={"8xl"} py={12}>
          <Flex
            flexWrap={"wrap"}
            justify={"space-around"}
            alignContent="space-between"
            rowGap={10}
          >
            <Stack
              spacing={4}
              color={"black"}
              justify={"center"}
              px={{ base: 5, md: 20 }}
            >
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
              {breakPoint === "sm" || (
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
                  >
                    <HStack spacing={2}>
                      <Text>Project</Text>
                      <ArrowForwardIcon w={5} h={5} />
                    </HStack>
                  </Button>
                </Center>
              )}
            </Stack>
            <Box
              w={{ base: "100vw", lg: "650px" }}
              h={{ base: "250px", md: "400px" }}
            >
              <Carousel
                cols={1}
                rows={1}
                gap={20}
                loop
                arrowLeft={LeftArrow}
                arrowRight={RightArrow}
                autoplay={useBreakpointValue({ md: 4000 })}
              >
                {projectItems.map((card, index) => (
                  <Carousel.Item key={index}>
                    <Title
                      h={{ base: "250px", md: "400px" }}
                      mainFontSize={"5xl"}
                      subFontSize={"md"}
                      {...card}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Box>

            {breakPoint === "sm" && (
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
                >
                  <HStack spacing={2}>
                    <Text>Project</Text>
                    <ArrowForwardIcon w={5} h={5} />
                  </HStack>
                </Button>
              </Center>
            )}
          </Flex>
        </Container>
      </Box>

      {/* activity block */}
      <Box bg={useColorModeValue("gray.50", "gray.900")} py={"100px"}>
        <Container maxW={"8xl"} py={12}>
          <Flex
            flexWrap={"wrap"}
            flexDir={"row-reverse"}
            justify={"space-around"}
            alignContent="space-between"
            rowGap={10}
          >
            <Stack
              px={{ base: 5, md: 20 }}
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
              {breakPoint === "sm" || (
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
                  >
                    <HStack spacing={2}>
                      <Text>Activity</Text>
                      <ArrowForwardIcon w={5} h={5} />
                    </HStack>
                  </Button>
                </Center>
              )}
            </Stack>
            <Box
              w={{ base: "100vw", lg: "650px" }}
              h={{ base: "250px", md: "400px" }}
              // mt={{ base: 20, lg: 0 }}
            >
              <Carousel
                cols={1}
                rows={1}
                gap={20}
                loop
                arrowLeft={LeftArrow}
                arrowRight={RightArrow}
                autoplay={useBreakpointValue({ md: 4000 })}
              >
                {activityItems.map((card, index) => (
                  <Carousel.Item key={index}>
                    <Title
                      mainColor={"white"}
                      subColor={"gray.200"}
                      h={{ base: "250px", md: "400px" }}
                      mainFontSize={"5xl"}
                      subFontSize={"md"}
                      {...card}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Box>
            {breakPoint === "sm" && (
              <Center>
                <Button
                  mt={8}
                  as={Link}
                  to="/project"
                  onClick={() => window.scrollTo({ top: 0 })}
                  rounded={"full"}
                  px={5}
                  colorScheme={"teal"}
                  bg={"teal.400"}
                  _hover={{
                    bg: "teal.500",
                  }}
                >
                  <HStack spacing={2}>
                    <Text>Project</Text>
                    <ArrowForwardIcon w={5} h={5} />
                  </HStack>
                </Button>
              </Center>
            )}
          </Flex>
        </Container>
      </Box>

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
          arrowLeft={XlLeftArrow}
          arrowRight={XlRightArrow}
          loop
          autoplay={useBreakpointValue({ md: 4000 })}
        >
          {carouselItems.map((card, index) => (
            <Carousel.Item key={index}>
              <Skeleton isLoaded>
                <Box
                  w={card.w ?? "380px"}
                  h={card.h ?? "550px"}
                  pos={"relative"}
                >
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
              </Skeleton>
            </Carousel.Item>
          ))}
        </Carousel>
      </Stack>
      <Footer marginTop="0" />
    </>
  );
}

export default Main;
