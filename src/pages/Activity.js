import { useState } from "react";
import {
  Box,
  IconButton,
  Image,
  Heading,
  Text,
  Flex,
  Center,
  Container,
  useBreakpointValue,
  Stack,
  useColorModeValue,
  WrapItem,
  VStack,
  Icon,
  Tag,
  TagLabel,
  TagRightIcon,
  Spacer,
  HStack,
  Divider,
} from "@chakra-ui/react";
import Slider from "react-slick";
import {
  FiHome,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
  FiFeather,
  FiBookOpen,
  FiUserCheck,
  FiSun,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

import img_thanksgivening from "../assets/thanks_giving.jpg";
import img_guitarist from "../assets/guitarist1.png";
import img_mc_all_spotlight from "../assets/mc_all_spotlight.jpg";
import img_mc_all from "../assets/mc_all.jpg";
import img_speech from "../assets/speech.jpg";
import img_coding_bg from "../assets/coding_bg1.png";
import img_creativity from "../assets/creativity_bg.jpg";
import img_mobile_creativity from "../assets/mobile_creativity_bg.jpg";
import img_learn from "../assets/learn_bg.png";
import img_mobile_learn from "../assets/mobile_learn_bg.png";
import img_confidence from "../assets/confidence_bg.png";
import img_mobile_confidence from "../assets/mobile_confidence_bg.jpg";
import img_workshop from "../assets/workshop.jpg";
import img_activity from "../assets/activity.JPG";
import img_led from "../assets/led.jpg";
import img_dt_workshop from "../assets/dt_workshop.png";
// Sidebar link items
const LinkItems = [
  { name: "Home", icon: FiHome, href: "#" },
  { name: "Personality", icon: FiUser, href: "#personality" },
  { name: "Workshop", icon: FiBookOpen, href: "#workshop" },
  {
    name: "Extracurricular Activity",
    icon: FiSun,
    href: "#extracurricular",
  },
];

// Settings for the slider
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
    image: img_coding_bg,
  },
  {
    id: "card_2",
    title: "活動總召",
    text: "擔任成大中友會聖誕節晚會總召",
    image: img_thanksgivening,
  },
  {
    id: "card_3",
    title: "營隊講師與隊輔",
    text: "2度參加成大科系探索營，幫助莘莘學子",
    image: img_mc_all,
  },
];

function Activity() {
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // data of widget
  const data = [
    {
      id: "data_1",
      name: "Creativity",
      image: img_creativity,
      color: useColorModeValue("red.500", "red.400"),
      mobileImage: img_mobile_creativity,
      detail: "有價值的差異化，是我的創新",
      icon: FiFeather,
    },
    {
      id: "data_2",
      name: "Fast-learner",
      image: img_learn,
      color: useColorModeValue("teal.400", "teal.300"),
      mobileImage: img_mobile_learn,
      detail: "快速學習，應用知識",
      icon: FiBookOpen,
    },
    {
      id: "data_3",
      name: "Self-confidence",
      image: img_confidence,
      color: "cyan.400",
      mobileImage: img_mobile_confidence,
      detail: "我相信我做得到，而我也總是做得到",
      icon: FiUserCheck,
    },
  ];

  return (
    <>
      <Navbar />
      <Sidebar linkItems={LinkItems} key={LinkItems.id} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        {/* title */}
        <Box
          position={"relative"}
          height={"600px"}
          width={"full"}
          overflow={"hidden"}
        >
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
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
                <Container
                  size="container.lg"
                  height="600px"
                  position="relative"
                >
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

        {/* personality */}
        <Box bg={useColorModeValue("gray.50", "black")} py={100}>
          {/* here is widget */}
          <Heading
            fontSize={"6xl"}
            textAlign={"center"}
            id="personality"
            scrollMargin={150}
          >
            人格特質
          </Heading>

          {/* desktop widgets */}
          <Flex
            flexWrap={"wrap"}
            justify={"center"}
            py={"10"}
            display={{ base: "none", lg: "flex" }}
          >
            {data.map((item) => (
              <WrapItem px={"2"} key={item.key}>
                <DesktopWidget {...item} />
              </WrapItem>
            ))}
          </Flex>
          {/* mobile widgets */}
          <Flex
            flexWrap={"wrap"}
            justify={"center"}
            py={"10"}
            display={{ base: "flex", lg: "none" }}
          >
            {data.map((item) => (
              <WrapItem p={"2"} key={item.key}>
                <MobileWidget {...item} />
              </WrapItem>
            ))}
          </Flex>
        </Box>

        {/* class */}
        <Banner
          title={"工作坊｜Workshop"}
          bgImage={img_workshop}
          id="workshop"
          scrollMargin="150px"
        />
        <Container maxW={"8xl"} py="3" centerContent>
          <Stack spacing={2} mt={150} maxW={{ base: "sm", lg: "xl" }}>
            <Heading fontSize={{ base: "3xl", md: "5xl" }}>LED光蛇</Heading>
            <Text
              textAlign="justify"
              color={useColorModeValue("gray.400", "gray.500")}
            >
              參加工科系創客計畫，將傳統光棒導入程式控制使其展項更多花樣。
            </Text>
            <Divider />
            <Text
              textAlign={"justify"}
              lineHeight={2}
              color={useColorModeValue("gray.800", "gray.200")}
            >
              在學長姐的帶領下，學習使用Arduino板來撰寫程式，以及焊接電路板。
              {""}
              當時是第一次接觸這些，覺得很新奇也很有成就感，{""}
              使我日後喜歡上撰寫程式，並將其實際應用。
            </Text>
            <HStack spacing={"2"}>
              <CreativityTags />
              <LearnerTags />
            </HStack>
          </Stack>
          <Box
            mt={5}
            rounded={"lg"}
            shadow={"xl"}
            h={{ base: "300px", lg: "400px" }}
            bgImage={img_led}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            width={{ base: "90vw", md: "md", lg: "50vw" }}
            justify="center"
          />

          <Stack spacing={2} mt={150} maxW={{ base: "sm", lg: "xl" }}>
            <Heading fontSize={{ base: "3xl", md: "5xl" }}>
              設計思考工作坊
            </Heading>
            <Text
              textAlign="justify"
              color={useColorModeValue("gray.400", "gray.500")}
            >
              數次參加游濟華老師與李孟學老師所舉辦的設計思考工作坊。
            </Text>
            <Divider />
            <Text
              textAlign={"justify"}
              lineHeight={2}
              color={useColorModeValue("gray.800", "gray.200")}
            >
              學會運用設計思考的方式來發想題目，製作專題。{""}
              像是在Digi+
              Talent實習計畫的AI必修課程中，帶領同儕從生活中發想問題，{""}
              並利用AI來解決問題——「基於影像辨識的自助結帳系統。」
            </Text>
            <HStack spacing={"2"}>
              <CreativityTags />
              <LearnerTags />
            </HStack>
          </Stack>
          <Box
            mt={5}
            rounded={"lg"}
            shadow={"xl"}
            h={{ base: "300px", lg: "400px" }}
            bgImage={img_dt_workshop}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            width={{ base: "90vw", md: "md", lg: "50vw" }}
            justify="center"
          />
        </Container>

        {/* extracurricular */}
        <Banner
          marginTop={150}
          title={"課外活動｜Extracurricular Activity"}
          bgImage={img_activity}
          id="extracurricular"
          scrollMargin="150px"
        />
        <Container maxW={"9xl"} py="3" centerContent>
          <Flex flexWrap={"wrap"} justify="center" marginTop={"150"}>
            <Center>
              <Stack spacing={2} p="2" maxW="sm">
                <Heading fontSize={{ base: "3xl", md: "5xl" }}>
                  活動總召
                </Heading>
                <Text
                  textAlign="justify"
                  color={useColorModeValue("gray.400", "gray.500")}
                >
                  感恩節活動時，擔任中友扒雞會總召
                </Text>
                <Divider />
                <Text
                  lineHeight={2}
                  color={useColorModeValue("gray.800", "gray.200")}
                >
                  在過程中，我學習到以下幾點：
                  <br />
                  1. 專案管理，統籌所有工作、流程與內容。
                  <br />
                  2. 妥善指派工作與溝通來達成良善的團隊合作。
                  <br />
                  3. 課業和活動的時間分配和取捨。
                </Text>
                <HStack spacing={"2"}>
                  <CreativityTags />
                  <ConfidenceTags />
                </HStack>
              </Stack>
            </Center>
            <Box
              p="2"
              width={{ base: "90vw", md: "md", lg: "40vw" }}
              justify={{ base: "left" }}
            >
              <Image
                borderRadius="lg"
                src={img_thanksgivening}
                alt="感恩節活動照片"
                boxShadow="xl"
              />
            </Box>
          </Flex>

          <Flex
            flexWrap="wrap"
            flexDirection="row-reverse"
            justify="center"
            marginTop={"150"}
          >
            <Center px={{ base: "0", lg: "5" }}>
              <Stack spacing={2} p="2" maxW="sm">
                <Heading fontSize={{ base: "3xl", md: "5xl" }}>
                  營隊講者
                </Heading>
                <Text
                  textAlign="justify"
                  color={useColorModeValue("gray.400", "gray.500")}
                >
                  擔任兩次中友科系探索營的科系講者，負責介紹系所、準備歷程與讀書計畫等。
                </Text>
                <Divider />
                <Text
                  textAlign="justify"
                  color={useColorModeValue("gray.800", "gray.200")}
                >
                  以往國高中時便經常擔任主持人、上台表演與演講，{""}
                  甚至現在大學也經常上台報告，擔任營隊講師等。{""}
                  因此，有訓練好的口條與邏輯思維來應對演講與報告。
                </Text>
                <HStack spacing={"2"}>
                  <ConfidenceTags />
                  <LearnerTags />
                </HStack>
              </Stack>
            </Center>
            <Box
              p="2"
              width={{ base: "90vw", md: "md", lg: "40vw" }}
              justify={{ base: "center", lg: "left" }}
            >
              <Image
                borderRadius="lg"
                src={img_speech}
                alt="演講狀況照片"
                boxShadow="xl"
              />
            </Box>
          </Flex>

          <Flex
            flexWrap={"wrap"}
            justify="center"
            marginTop={"150"}
            px={{ base: "0", lg: "20" }}
          >
            <Center>
              <Stack spacing={2} p="2" maxW={{ base: "sm", lg: "5xl" }}>
                <Heading
                  fontSize={{ base: "3xl", md: "5xl" }}
                  textAlign={{ lg: "center" }}
                >
                  隊輔x表演
                </Heading>
                <Text
                  textAlign={"justify"}
                  color={useColorModeValue("gray.400", "gray.500")}
                >
                  在兩次中友科系探索營中除了擔任講者外，同時也有擔任過隊輔，領導小隊員；
                  擔任MC、樂團吉他手等。
                </Text>
                <Divider />
                <Text
                  textAlign="justify"
                  color={useColorModeValue("gray.800", "gray.200")}
                >
                  從中不但讓我更加熟練於上台表演與報告、台風更加穩健外，{""}
                  更讓我學習和他人交流、溝通，學習待人處事的方式和人情世故。
                </Text>
                <HStack spacing={"2"} justify={{ base: "center", lg: "left" }}>
                  <CreativityTags />
                  <ConfidenceTags />
                </HStack>
              </Stack>
            </Center>
          </Flex>
          <Flex flexWrap={"wrap"} justify="center">
            <Box
              p="2"
              width={{ base: "90vw", md: "md", lg: "2xl" }}
              justify={{ base: "center", lg: "left" }}
            >
              <Image
                borderRadius="lg"
                src={img_guitarist}
                alt="感恩節活動照片"
                boxShadow="xl"
              />
            </Box>
            <VStack>
              <Box
                p="2"
                width={{ base: "90vw", md: "md", lg: "lg" }}
                justify={{ base: "center", lg: "left" }}
              >
                <Image
                  borderRadius="lg"
                  src={img_mc_all}
                  alt="MC表演大合照1"
                  boxShadow="xl"
                />
              </Box>
              <Heading
                fontSize={{ lg: "5xl" }}
                display={{ base: "none", lg: "inline" }}
              >
                <Text as={"span"} color={"red"}>
                  M
                </Text>
                icphone{" "}
                <Text as={"span"} color={"red"}>
                  C
                </Text>
                ontroller
              </Heading>
            </VStack>
            <Box
              p="2"
              width={{ base: "90vw", md: "md", lg: "64vw" }}
              justify={{ base: "center", lg: "left" }}
            >
              <Image
                borderRadius="lg"
                src={img_mc_all_spotlight}
                alt="MC表演大合照2"
                boxShadow="xl"
              />
            </Box>
          </Flex>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default Activity;

// widget component
const DesktopWidget = (props) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      w={"20vw"}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      <Image
        src={props.image}
        alt={`Widget of ${props.name}`}
        roundedTop="lg"
      />
      <VStack
        h={"13vw"}
        justify={"center"}
        bg={useColorModeValue("white", "gray.800")}
      >
        <Icon as={props.icon} w={"5"} h={"5"} color={props.color} />
        <Heading
          fontWeight={"light"}
          px={"5"}
          fontSize={"2vw"}
          color={props.color}
        >
          {props.name}
        </Heading>
        <Text
          color={useColorModeValue("gray.800", "gray.400")}
          px={"10"}
          fontSize={"0.8vw"}
        >
          {props.detail}
        </Text>
      </VStack>
    </Box>
  );
};

// widget component
const MobileWidget = (props) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="lg"
      h={"100px"}
      borderWidth="1px"
      rounded="lg"
      shadow="xl"
      position="relative"
    >
      <Image
        w="lg"
        h={"100px"}
        src={props.mobileImage}
        alt={`Widget of ${props.name}`}
        rounded="lg"
      />
      <HStack
        w={"full"}
        color={"white"}
        position={"absolute"}
        top="50%"
        transform="translate(0, -50%)"
        justify={"flex-end"}
        px={"10"}
      >
        <Heading
          fontWeight={"thin"}
          backdropFilter="auto"
          backdropBlur={"1px"}
          color={props.color}
        >
          {props.name}
        </Heading>
        <Spacer />
        <Icon
          color={props.color}
          backdropFilter="auto"
          backdropBlur={"1px"}
          as={props.icon}
          w={"5"}
          h={"5"}
        />
      </HStack>
    </Box>
  );
};

// tag component
const CreativityTags = () => {
  return (
    <Tag size={"lg"} borderRadius="full" variant="solid" bg="red.500">
      <TagLabel>Creativity</TagLabel>
      <TagRightIcon as={FiFeather} />
    </Tag>
  );
};

const LearnerTags = () => {
  return (
    <Tag size={"lg"} borderRadius="full" variant="solid" bg="teal.400">
      <TagLabel>Fast-learner</TagLabel>
      <TagRightIcon as={FiBookOpen} />
    </Tag>
  );
};

const ConfidenceTags = () => {
  return (
    <Tag size={"lg"} borderRadius="full" variant="solid" bg="cyan.500">
      <TagLabel>Self-confidence</TagLabel>
      <TagRightIcon as={FiUserCheck} />
    </Tag>
  );
};
