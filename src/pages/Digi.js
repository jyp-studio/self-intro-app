import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  AspectRatio,
  WrapItem,
  Container,
  VStack,
  Divider,
  useColorModeValue,
  HStack,
  Stack,
  Button,
  Center,
  Icon,
  Link as ChakraLink,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";
import {
  FiHome,
  FiCompass,
  FiYoutube,
  FiCommand,
  FiMessageCircle,
  FiBox,
} from "react-icons/fi";
import {
  BsGearFill,
  BsLightbulbFill,
  BsPinAngleFill,
  BsPenFill,
} from "react-icons/bs";

import "@fontsource/open-sans";
import "@fontsource/nunito-sans";

import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Banner from "../components/Banner";
import Rating from "../components/Rating";

import img_bg from "../assets/bg_digi.jpg";
import img_abstract from "../assets/digi_abstract.jpg";
import img_miro from "../assets/miro.png";
import img_miro1 from "../assets/miro1.png";
import img_anime from "../assets/attack_anime.png";
import img_anime1 from "../assets/attack_anime1.png";
import img_distribution_chart from "../assets/work_distribution_chart.png";
import img_bg_sticky from "../assets/bg_sticky_note.jpg";
import img_problem from "../assets/problem.jpg";
import img_reward from "../assets/reward.jpg";
import img_bg_reward from "../assets/bg_reward.jpg";
import img_bg_problem from "../assets/bg_problem.jpg";
import img_class from "../assets/digi_class.jpg";
import img_debate from "../assets/digi_debate.jpg";
import img_dm_class from "../assets/data_mining_class.jpg";
import img_dm_class1 from "../assets/data_mining_class1.jpg";
import img_ai_class from "../assets/ai_class.jpg";
import img_ai_class1 from "../assets/ai_class1.jpg";
import img_online_class from "../assets/online_class.png";
import img_online_class1 from "../assets/online_class1.png";
import img_digi_certificate from "../assets/digi_certificate.png";
import img_digi_certificate1 from "../assets/digi_certificate1.png";
import img_digi_certificate2 from "../assets/digi_certificate2.png";

import pdf_heart from "../assets/heart_dm.pdf";
import pdf_self_checkout from "../assets/self_checkout.pdf";

function Digi() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: FiHome, href: "#" },
    { name: "Abstract", icon: FiCompass, href: "#abstract" },
    { name: "Trailer", icon: FiYoutube, href: "#trailer" },
    { name: "Architecture", icon: FiCommand, href: "#architecture" },
    { name: "Thoughts", icon: FiMessageCircle, href: "#thoughts" },
    { name: "Demo", icon: FiBox, href: "#demo" },
  ];
  // Icon box infomation
  const IconBoxItems = [
    {
      icon: BsGearFill,
      title: "課堂學習",
      text: "學習python、資料探勘、APP開發、UI/UX等",
    },
    {
      icon: BsLightbulbFill,
      title: "實務專題",
      text: "與中傑鞋業合作開發財務報表辨識系統",
    },
  ];

  // what I learn im class with name and rating.
  const Gain = [
    {
      name: "Python",
      rating: "5",
    },
    {
      name: "抗壓性",
      rating: "5",
    },
    {
      name: "UML",
      rating: "4",
    },
    {
      name: "Design pattern",
      rating: "4",
    },
  ];

  // show lesson cards detail or not
  const [section, setSection] = useState(0);
  // cards color mode
  const cardBg = useColorModeValue("white", "gray.800");
  const containerBg = useColorModeValue("gray.50", "gray.700");
  const textBg = useColorModeValue("gray.50", "gray.900");
  const cardSize = { base: "70vw", md: "50vw", lg: "350px" };

  return (
    <>
      <Navbar />

      <Sidebar linkItems={LinkItems} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        {/* title banner */}
        <Title
          brightness={"50%"}
          image={img_bg}
          mainColor={"yellow.400"}
          mainTitle={"Digi+ Talent 實習"}
          subColor={"orange.100"}
          subTitle={"與企業和跨領域人才合作共同製作專題"}
        />

        {/* icon box */}
        <Flex
          px={{ base: "0", md: "8vw" }}
          flexWrap={"wrap"}
          justify={"center"}
          justifyContent={"space-around"}
          marginTop={"100px"}
        >
          {IconBoxItems.map((item, index) => (
            <WrapItem key={index} py={{ base: "3", md: "3", lg: "5" }}>
              <IconBox
                bgColor={"orange.200"}
                iconColor={"orange.900"}
                iconBoxSize={{ base: "3em", md: "3em", lg: "5vw" }}
                textBoxSize={{ base: "60vw", md: "40vw", lg: "17vw" }}
                textSize={{ base: "sm", md: "lg", lg: "lg" }}
                {...item}
              />
            </WrapItem>
          ))}
        </Flex>

        <Box marginTop={"100px"} px={"50"}>
          <Divider />
        </Box>

        <Container maxW={"6xl"} marginTop={"120"} centerContent>
          <Box
            w={"full"}
            border={"1px"}
            borderColor={useColorModeValue("gray.100", "gray.700")}
            rounded={"2xl"}
          >
            <Heading
              py={"4"}
              px={"5"}
              scrollMargin="100px"
              id={"abstract"}
              w={{ base: "auto", lg: "full" }}
              textAlign={{ base: "center", lg: "left" }}
              fontFamily={`"Open Sans", sans-serif`}
            >
              參加動機{" "}
              <Text as={"span"} fontWeight={"thin"}>
                |
              </Text>{" "}
              Motivation
            </Heading>
            <Image src={img_abstract} w={"full"} h={"400px"} fit={"cover"} />
            <Flex flexWrap={"wrap"} py="10" justify={"center"}>
              <Text
                fontFamily={`"Open Sans", sans-serif`}
                fontSize="xl"
                w={"full"}
                px={{ base: "5", md: "5", lg: "10" }}
                textAlign={"justify"}
              >
                &emsp;&emsp;有鑑於未來工作型態是與不同領域的人才共同合作，開發產品。
                為此，我決定參加工研院舉辦的Digi+
                Talent計畫來提早了解與不同領域的人才、企業，
                合作的形式，藉此學習團隊溝通、合作、與相關技術。
              </Text>
            </Flex>
          </Box>
        </Container>

        {/* 1. lesson */}
        <Banner marginTop={"150"} title={"課堂學習"} bgImage={img_class} />
        {/* anchor */}
        <Container id="cards" maxW={"10xl"} scrollMargin={"100px"}>
          {/* show all cards without details */}
          {section === 0 && (
            <Flex flexWrap={"wrap"} justify={"space-around"} mt={"150"} px={10}>
              {/* 1. card about class */}
              <Center py={6} id={"lessonCard1"}>
                <Box
                  w={cardSize}
                  bg={cardBg}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <Box
                    w={"full"}
                    h={"200px"}
                    bgImage={img_dm_class}
                    roundedTop={"md"}
                    bgPosition={"center"}
                    bgSize={"cover"}
                    position={"relative"}
                  >
                    <Center>
                      <Heading
                        fontSize={"3xl"}
                        position={"absolute"}
                        top={"50%"}
                        transform={"translate(0,-50%)"}
                        color={"whiteAlpha.800"}
                        backdropFilter={"auto"}
                        backdropBlur={"8px"}
                      >
                        課堂專案與討論
                      </Heading>
                    </Center>
                  </Box>
                  <Box bg={textBg} px={10} py={10}>
                    <List spacing={3} px={10}>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="teal.400" />
                        人工智慧與物聯網導論
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="teal.400" />
                        APP開發導論
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="teal.400" />
                        大數據分析導論
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="teal.400" />
                        專案管理
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="teal.400" />
                        視覺化設計規劃
                      </ListItem>
                    </List>

                    <Button
                      mt={10}
                      w={"full"}
                      bg={"teal.400"}
                      color={"white"}
                      rounded={"xl"}
                      boxShadow={"0 5px 20px 0px rgb(49 151 149 / 43%)"}
                      _hover={{
                        bg: "teal.500",
                      }}
                      _focus={{
                        bg: "teal.500",
                      }}
                      onClick={() => {
                        setSection(1);
                        const element = document.getElementById("cards");
                        element.scrollIntoView({ behavior: "smooth" }, false);
                      }}
                    >
                      更多細節
                    </Button>
                  </Box>
                </Box>
              </Center>

              {/* 2. card about AI class*/}
              <Center py={6} id={"lessonCard2"}>
                <Box
                  w={cardSize}
                  bg={cardBg}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <Box
                    w={"full"}
                    h={"200px"}
                    bgImage={img_ai_class}
                    brightness={"20%"}
                    roundedTop={"md"}
                    bgPosition={"center"}
                    bgSize={"cover"}
                    position={"relative"}
                  >
                    <Center>
                      <Heading
                        fontSize={"3xl"}
                        position={"absolute"}
                        top={"50%"}
                        transform={"translate(0,-50%)"}
                        color={"whiteAlpha.800"}
                        backdropFilter={"auto"}
                        backdropBlur={"8px"}
                      >
                        AI必修課程
                      </Heading>
                    </Center>
                  </Box>
                  <Box bg={textBg} px={10} py={10}>
                    <List spacing={3} px={10}>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="yellow.400" />
                        專題開發
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="yellow.400" />
                        機器學習、深度學習
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="yellow.400" />
                        語意機器人
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="yellow.400" />
                        影像辨識
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="yellow.400" />
                        IFTTT API串接
                      </ListItem>
                    </List>

                    <Button
                      mt={10}
                      w={"full"}
                      bg={"yellow.400"}
                      color={"white"}
                      rounded={"xl"}
                      boxShadow={"0 5px 20px 0px rgb(255 255 59 / 43%)"}
                      _hover={{
                        bg: "yellow.500",
                      }}
                      _focus={{
                        bg: "yellow.500",
                      }}
                      onClick={() => {
                        setSection(2);
                        const element = document.getElementById("cards");
                        element.scrollIntoView({ behavior: "smooth" }, false);
                      }}
                    >
                      更多細節
                    </Button>
                  </Box>
                </Box>
              </Center>

              {/* 3. card about online class */}
              <Center py={6} id={"lessonCard3"}>
                <Box
                  w={cardSize}
                  bg={cardBg}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <Box
                    w={"full"}
                    h={"200px"}
                    bgImage={img_online_class}
                    roundedTop={"md"}
                    bgPosition={"center"}
                    bgSize={"cover"}
                    position={"relative"}
                  >
                    <Center>
                      <Heading
                        fontSize={"3xl"}
                        position={"absolute"}
                        top={"50%"}
                        transform={"translate(0,-50%)"}
                        color={"whiteAlpha.800"}
                        backdropFilter={"auto"}
                        backdropBlur={"8px"}
                      >
                        線上課程與講座
                      </Heading>
                    </Center>
                  </Box>
                  <Box bg={textBg} px={10} py={10}>
                    <List spacing={3} px={10}>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.500" />
                        人工智慧
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.500" />
                        區塊鏈技術
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.500" />
                        數位轉型
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.500" />
                        設計思考
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.500" />
                        元宇宙
                      </ListItem>
                    </List>

                    <Button
                      mt={10}
                      w={"full"}
                      bg={"blue.500"}
                      color={"white"}
                      rounded={"xl"}
                      boxShadow={"0 5px 20px 0px rgb(43 108 176 / 43%)"}
                      _hover={{
                        bg: "blue.600",
                      }}
                      _focus={{
                        bg: "blue.600",
                      }}
                      onClick={() => {
                        setSection(3);
                        const element = document.getElementById("cards");
                        element.scrollIntoView({ behavior: "smooth" }, false);
                      }}
                    >
                      更多細節
                    </Button>
                  </Box>
                </Box>
              </Center>
            </Flex>
          )}

          {/* show first card detail */}
          {/* 1. card detail */}
          {section === 1 && (
            <Container
              maxW={"6xl"}
              rounded={"2xl"}
              bg={containerBg}
              bgImage={img_dm_class1}
              bgPosition={"center"}
              bgSize={"cover"}
              mt={"150"}
              p={10}
              centerContent
            >
              <Stack spacing={10} backdropFilter={"auto"} backdropBlur={"8px"}>
                <Box>
                  <Heading fontSize={"5xl"} color={"white"}>
                    課堂專案與討論
                  </Heading>
                  <Text mt={5} textAlign={"justify"} color={"gray.400"}>
                    為與企業進行合作專案，因此有安排相關課程，包含專案管理、APP開發、UI/UX等。
                    {""}
                    其中有一次是關於資料探勘的課堂，講師分享他為公司進行資料探勘與分析的經驗，
                    {""}
                    並要求我們分組討論，擬定主題並進行資料分析。
                  </Text>
                </Box>
                <Divider />

                {/* project name and detail */}
                <Flex flexWrap={"wrap"}>
                  <Stack spacing={5}>
                    <Heading fontSize={"4xl"} color={"gray.100"}>
                      心臟病成因分析
                    </Heading>
                    <Text textAlign={"justify"} color={"gray.400"}>
                      藉由weka資料探勘，分析kaggle上的心臟病成因。
                    </Text>
                    <Text textAlign={"justify"}>
                      <Text as={"span"} fontWeight={"bold"} color={"white"}>
                        資料來源：
                      </Text>
                      <ChakraLink
                        color={"gray.100"}
                        href="https://www.kaggle.com/datasets/johnsmith88/heart-disease-dataset"
                        isExternal
                      >
                        Kaggle Heart Disease Dataset
                      </ChakraLink>
                    </Text>
                    <Text textAlign={"justify"} color={"gray.100"}>
                      <Text as={"span"} fontWeight={"bold"} color={"white"}>
                        研究成員：
                      </Text>
                      <br />
                      潘玠佑(我)：組長，教學組員三種演算法與分派工作。並負責資料預處理、關聯規則的報告與簡報白板。
                      <br />
                      黃晰婕：負責資料預處理、分群法的報告與簡報白板。
                      <br />
                      黃晟旺：負責分類法的報告與簡報白板。
                      <br />
                      王安琪：負責製作與美化簡報，以及主持演講。
                    </Text>
                  </Stack>
                </Flex>
                <Divider />

                {/* project report */}
                <Center>
                  <AspectRatio w={{ base: "auto", lg: "50vw" }} ratio={16 / 9}>
                    <iframe
                      title={"heart disease data mining report pdf"}
                      src={pdf_heart}
                      position="absolute"
                      width={"100%"}
                      height={"100%"}
                      allow="autoplay"
                    />
                  </AspectRatio>
                </Center>

                {/* back button */}
                <Button
                  colorScheme={"whiteAlpha"}
                  color={"whiteAlpha.600"}
                  variant={"ghost"}
                  onClick={() => {
                    setSection(0);
                    const element = document.getElementById("cards");
                    element.scrollIntoView({ behavior: "smooth" }, false);
                  }}
                >
                  返回
                </Button>
              </Stack>
            </Container>
          )}

          {/* 2. card detail */}
          {section === 2 && (
            <Container
              maxW={"6xl"}
              rounded={"2xl"}
              bg={containerBg}
              bgImage={img_ai_class1}
              bgPosition={"center"}
              bgSize={"cover"}
              mt={"150"}
              p={10}
              centerContent
            >
              <Stack spacing={10} backdropFilter={"auto"} backdropBlur={"8px"}>
                <Box>
                  <Heading fontSize={"5xl"} color={"white"}>
                    AI必修課程
                  </Heading>
                  <Text mt={5} textAlign={"justify"} color={"gray.400"}>
                    為期兩個禮拜的人工智慧課程，教授影像辨識、遠端連線攝影機、
                    {""}
                    語意機器人、以及利用IFTTT抓取雲端資料和傳送訊息等。
                  </Text>
                </Box>
                <Divider />

                {/* project name and detail */}
                <Flex flexWrap={"wrap"}>
                  <Stack spacing={5}>
                    <Heading fontSize={"4xl"} color={"gray.100"}>
                      基於影像辨識的自助結帳系統
                    </Heading>
                    <Text textAlign={"justify"} color={"gray.400"}>
                      利用影像辨識的方式加速結帳流程，有別於自助條碼和重量感應式的自助結帳系統，
                      {""}
                      基於影像辨識的系統能更加精確與準確地辨識商品並藉由API抓取後台資料，回傳並加總金額。
                    </Text>
                    <Text textAlign={"justify"}>
                      <Text as={"span"} fontWeight={"bold"} color={"white"}>
                        Github：
                      </Text>
                      <ChakraLink
                        color={"gray.100"}
                        href="https://github.com/jyp-studio/self-checkout"
                        isExternal
                      >
                        Self-Checkout
                      </ChakraLink>
                    </Text>
                    <Text textAlign={"justify"} color={"gray.100"}>
                      <Text as={"span"} fontWeight={"bold"} color={"white"}>
                        研究成員：
                      </Text>
                      <br />
                      潘玠佑(我)：組長，帶領討論、統整程式、製作簡報、與上台報告。
                      <br />
                      邱沛慈：影像辨識。
                      <br />
                      巫鎔輿：GUI設計。
                      <br />
                      陳宣仁：統整程式。
                      <br />
                      林宇哲：製作簡報、語意機器人。
                      <br />
                      陳玠宏：串接資料表。
                    </Text>
                  </Stack>
                </Flex>
                <Divider />

                {/* project report */}
                <Center>
                  <AspectRatio w={{ base: "auto", lg: "50vw" }} ratio={16 / 9}>
                    <iframe
                      title={"self-checkout report pdf"}
                      src={pdf_self_checkout}
                      position="absolute"
                      width={"100%"}
                      height={"100%"}
                      allow="autoplay"
                    />
                  </AspectRatio>
                </Center>

                {/* back button */}
                <Button
                  colorScheme={"whiteAlpha"}
                  color={"whiteAlpha.600"}
                  variant={"ghost"}
                  onClick={() => {
                    setSection(0);
                    const element = document.getElementById("cards");
                    element.scrollIntoView({ behavior: "smooth" }, false);
                  }}
                >
                  返回
                </Button>
              </Stack>
            </Container>
          )}

          {/* 3. card detail */}
          {section === 3 && (
            <Container
              maxW={"6xl"}
              rounded={"2xl"}
              bg={containerBg}
              bgImage={img_online_class1}
              bgPosition={"center"}
              bgSize={"cover"}
              mt={"150"}
              p={10}
              centerContent
            >
              <Stack spacing={10} backdropFilter={"auto"} backdropBlur={"8px"}>
                <Box>
                  <Heading fontSize={"5xl"} color={"white"}>
                    線上課程與講座
                  </Heading>
                  <Text mt={5} textAlign={"justify"} color={"gray.400"}>
                    在Digi+ Talent網路學習中心對感興趣的課程進行自主學習與評量：
                    {""}
                    內容主要包含人工智慧、區塊鏈技術、Docker、智慧聯網等。
                    同時，也參與許多政府舉辦講座關於設計思考、數位轉型、ESG等，以此豐富自我知識與視野。
                  </Text>
                </Box>
                <Divider />

                {/* digi certificates */}
                <Heading fontSize={"4xl"} color={"gray.100"}>
                  部分課程證書
                </Heading>
                <VStack spacing={10}>
                  <Image src={img_digi_certificate} w={"50vw"} />
                  <Image src={img_digi_certificate1} w={"50vw"} />
                  <Image src={img_digi_certificate2} w={"50vw"} />
                </VStack>

                {/* back button */}
                <Button
                  colorScheme={"whiteAlpha"}
                  color={"whiteAlpha.600"}
                  variant={"ghost"}
                  onClick={() => {
                    setSection(0);
                    const element = document.getElementById("cards");
                    element.scrollIntoView({ behavior: "smooth" }, false);
                  }}
                >
                  返回
                </Button>
              </Stack>
            </Container>
          )}
        </Container>

        <Container maxW={"6xl"} py="3" marginTop={"150"} centerContent>
          <Heading
            fontFamily={`"Open Sans", sans-serif`}
            scrollMargin="100px"
            py={"4"}
            px={"5"}
            id={"thoughts"}
            w={{ base: "auto", lg: "full" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            心得{" "}
            <Text as={"span"} fontWeight={"thin"}>
              |
            </Text>{" "}
            Thoughts
          </Heading>
        </Container>

        {/* 1. design thinking */}
        <Banner
          title={"設計思考 ｜ Design thinking"}
          bgImage={img_bg_sticky}
          marginTop={"150"}
        />
        <VStack
          py={"200"}
          spacing={"150"}
          w={"full"}
          bgColor={"blackAlpha.800"}
          justify={"center"}
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            src={img_miro}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
          <HStack
            py={"50"}
            marginTop={"50"}
            flexWrap={"wrap"}
            w={"65vw"}
            justify={"center"}
            justifyContent={"space-around"}
          >
            <Image src={img_distribution_chart} w={"400px"} />
            <Text
              w={{ base: "80vw", lg: "30vw" }}
              px={{ base: "5", md: "30" }}
              py={{ base: "20" }}
              fontSize={"xl"}
              color={"gray.200"}
              fontFamily={`"Open Sans", sans-serif`}
              textAlign={"justify"}
            >
              &emsp;&emsp;在數週的設計思維工作坊中，我擔任
              <Text as={"span"} fontWeight={"bold"}>
                組長
              </Text>
              的職位，引領兩位組員藉由Miro便利貼的功能對新冠肺炎進行聯想與解構，並將其與塔防遊戲做結合。
            </Text>
          </HStack>
          <Image
            src={img_miro1}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
        </VStack>

        {/* 2. facing problem */}
        <Banner
          title={"遇到困難"}
          bgImage={img_bg_problem}
          brightness={"80%"}
        />
        <Box
          bg={useColorModeValue("gray.50", "blackAlpha.500")}
          w={"full"}
          py={"200"}
        >
          <Container maxW={"8xl"} py="3" centerContent>
            <Flex
              flexWrap={"wrap"}
              w={"full"}
              justify={"center"}
              justifyContent={"space-around"}
            >
              {/* image of facing problem */}
              <Box
                bgImage={img_problem}
                w={{ base: "80vw", md: "60vw", lg: "30vw" }}
                h={"400px"}
                bgRepeat={"no-repeat"}
                bgPosition={"center"}
                bgSize={"cover"}
              />
              <Text
                mt={{ base: "100", lg: "0" }}
                w={{ base: "80vw", md: "60vw", lg: "30vw" }}
                fontSize="xl"
                textAlign={"justify"}
                fontFamily={`"Open Sans", sans-serif`}
              >
                &emsp;&emsp;開發過程中，遇到最大的問題是塔攻擊的動畫與造成實際傷害的時間不同，相信這是普遍遊戲都會遇到的困難之處。
                {""}
                原先我們採取的是動畫出現時即造成傷害，如此是最簡單做法，卻不是最美觀的做法。
                {""}
                因此，我們嘗試讓傷害出現在動畫之後，然而這衍生的問題是在動畫的過程中，若敵人跑出攻擊範圍或死亡的話，那該如何？
                {""}
                經過一晚的討論，我們最後決定使用兩個counter，分別計算動畫和攻擊冷卻時間來達成效果，而效果也如預期般的好。
              </Text>
            </Flex>
            <Flex
              w={"full"}
              flexWrap={"wrap"}
              justify={"center"}
              marginTop={"200"}
              justifyContent={"space-around"}
            >
              {/* 1. Box of explaining animation and damage */}
              {/* background */}
              <Box
                w={{ base: "80vw", md: "60vw", lg: "550px" }}
                h={{ base: "60vw", md: "45vw", lg: "400px" }}
                bgColor={"gray.100"}
                rounded={"2xl"}
                shadow={"lg"}
                justify={"center"}
              >
                {/* heading banner */}
                <Box
                  bgColor={"black"}
                  w={"full"}
                  h={"80px"}
                  textAlign={"center"}
                  roundedTop={"2xl"}
                >
                  {/* heading */}
                  <HStack
                    h={"full"}
                    spacing={"5"}
                    justify={"center"}
                    alignItems={"center"}
                  >
                    <Heading
                      color={"white"}
                      fontSize={{ base: "2xl", md: "auto", lg: "4xl" }}
                    >
                      動畫和傷害同時發生
                    </Heading>
                    <CloseIcon boxSize={"30px"} color={"red"} />
                  </HStack>
                </Box>
                {/* image */}
                <Image src={img_anime} px={"10"} py={"5"} />
              </Box>

              {/* 2. Box of explaining animation and damage */}
              {/* background */}
              <Box
                mt={{ base: "20", md: "20", lg: "0" }}
                w={{ base: "80vw", md: "60vw", lg: "550px" }}
                h={{ base: "60vw", md: "45vw", lg: "400px" }}
                bgColor={"gray.100"}
                rounded={"2xl"}
                shadow={"lg"}
                justify={"center"}
              >
                {/* heading banner */}
                <Box
                  bgColor={"black"}
                  w={"full"}
                  h={"80px"}
                  textAlign={"center"}
                  roundedTop={"2xl"}
                >
                  {/* heading */}
                  <HStack
                    h={"full"}
                    spacing={"5"}
                    justify={"center"}
                    alignItems={"center"}
                  >
                    <Heading
                      color={"white"}
                      py={"4"}
                      fontSize={{ base: "2xl", md: "auto", lg: "4xl" }}
                    >
                      動畫後才讓傷害出現
                    </Heading>
                    <CheckIcon boxSize={"40px"} color={"green.300"} />
                  </HStack>
                </Box>
                {/* image */}
                <Image src={img_anime1} px={"10"} py={"5"} />
              </Box>
            </Flex>
          </Container>
        </Box>

        {/* 3. gain */}
        <Banner title={"獲得收穫"} bgImage={img_bg_reward} brightness={"25%"} />
        <Box
          bg={useColorModeValue("gray.900", "blackAlpha.500")}
          w={"full"}
          py={"200"}
        >
          <Container maxW={"7xl"} py="3" centerContent>
            {/* box of gain */}
            <Stack
              direction={{ base: "column", lg: "row" }}
              bgColor={"gray.800"}
              border={"1px"}
              borderRadius={"lg"}
              overflow={"hidden"}
              borderColor={"gray.700"}
              spacing={{ base: "50", lg: "0" }}
              alignItems={"center"}
            >
              <Box
                bgImage={img_reward}
                w={{ base: "80vw", md: "60vw", lg: "400px" }}
                h={"500px"}
                bgPosition={"center"}
                bgSize={"cover"}
              />
              {/* words */}
              <VStack
                py={"10"}
                textAlign={"left"}
                px={"10"}
                spacing={"10"}
                color={"white"}
              >
                <Heading>收穫</Heading>
                {/* Rating of gain */}
                <Rating Gain={Gain} />
              </VStack>
            </Stack>
            <Text
              fontFamily={`"Open Sans", sans-serif`}
              fontSize={"xl"}
              textAlign={"justify"}
              color={"gray.200"}
              mt={"150"}
              px={{ base: "5", md: "10" }}
            >
              &emsp;&emsp;雖然過程曲折，卻也讓我收穫許多。在整個工作坊期間，由於時間非常緊迫，
              <Text as={"span"} fontWeight={"bold"}>
                提升我的抗壓性
              </Text>
              外， 也我
              <Text as={"span"} fontWeight={"bold"}>
                python能力也跟著增強
              </Text>
              。除此之外， 我學到最重要的是
              <Text as={"span"} fontWeight={"bold"}>
                畫UML的重要性
              </Text>
              。
              以往我們coding時，時常注意的是語法以及效率。然而在大型企劃，數萬行的程式碼中，
              {""}
              語法和效率只是基本，更重要的是架構。舉例來說，當開發一個鳥的class，
              {""}
              可能很理所當然的新增名字、種類等屬性，並新增fly的method來描述飛行方式。
              {""}
              然而這時卻很容易使得日後開發遇到窘境，因為企鵝和鴕鳥不會飛。{""}
              這便是一個簡單的例子來闡述架構、格局的重要性。
              <br />
              &emsp;&emsp;同時， 學習使用一些
              <Text as={"span"} fontWeight={"bold"}>
                design pattern
              </Text>
              也使架構更加明確，開發時也更加方便。如使用obsever pattern在user{" "}
              requests時，當要新增觸發事件時，只要新增一個class寫功能，{""}
              再到controller中新增這個class就完成了。不必到每個程式碼中新增或修改變數，省去許多繁瑣步驟。
            </Text>
          </Container>
        </Box>

        <Container maxW={"8xl"} py="3" mt={"100"} centerContent>
          <Box marginTop={"10"}>
            <Heading
              fontFamily={`"Open Sans", sans-serif`}
              scrollMargin="100px"
              py={"4"}
              px={"5"}
              id={"demo"}
              w={{ base: "auto", lg: "full" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              成果展示{" "}
              <Text as={"span"} fontWeight={"thin"}>
                |
              </Text>{" "}
              Demo
            </Heading>

            <AspectRatio
              w={{ base: "70vw", md: "60vw", lg: "67vw" }}
              ratio={16 / 9}
            >
              <iframe
                title="tower defense demo video"
                src="https://www.youtube.com/embed/mkjUvo7B_K8"
                allowFullScreen
              />
            </AspectRatio>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default Digi;
