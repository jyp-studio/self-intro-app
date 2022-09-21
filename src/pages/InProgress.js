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
  Stack,
} from "@chakra-ui/react";

import { FiHome, FiCommand, FiTv, FiActivity } from "react-icons/fi";
import { BsGearFill, BsLightbulbFill } from "react-icons/bs";

import "@fontsource/open-sans";
import "@fontsource/nunito-sans";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Banner from "../components/Banner";

import img_bg from "../assets/bg_programming.jpeg";
import img_ai from "../assets/ai.jpeg";
import img_labeling_people from "../assets/labeling_people.png";
import img_unity from "../assets/unity.jpeg";
import img_vision from "../assets/vision.jpeg";

function InProgress() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: FiHome, href: "#" },
    { name: "人工智慧導論", icon: FiActivity, href: "#ai" },
    {
      name: "影像處理、電腦視覺及深度學習概論",
      icon: FiCommand,
      href: "#vision",
    },
    { name: "視窗程式設計", icon: FiTv, href: "#windows" },
  ];
  // Icon box infomation
  const IconBoxItems = [
    {
      icon: BsGearFill,
      title: "Tool",
      text: "Verilog",
    },
    {
      icon: BsLightbulbFill,
      title: "設計理念",
      text: "將邏輯設計概念應用於探查汙染擴散",
    },
  ];

  // what I learn im class with name and rating.
  const Gain = [
    {
      name: "Verilog",
      rating: "5",
    },
    {
      name: "邏輯設計",
      rating: "5",
    },
  ];

  return (
    <>
      <Navbar />

      <Sidebar linkItems={LinkItems} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        {/* title banner */}
        <Title
          brightness={"50%"}
          image={img_bg}
          mainTitle={"專題ing"}
          mainColor={"purple.300"}
          subColor={"purple.400"}
          subTitle={
            "目前正在進行中的專題，包含步態預測、影像辨識和視窗程式設計。"
          }
        />
        <Container
          maxW={"6xl"}
          py="3"
          fontSize="xl"
          fontFamily={`"Open Sans", sans-serif`}
          centerContent
        >
          <Stack py={150} spacing={"100px"} px={{ base: 5, md: 10, lg: 100 }}>
            <Text textAlign={"justify"}>
              &emsp;&emsp;大四選修資工系人工智慧導論，{""}
              影像處理、電腦視覺及深度學習概論，和視窗程式設計課程。{""}
              分別要製作相關專題。
            </Text>
          </Stack>
        </Container>

        {/* ai course */}
        <Banner
          title={"人工智慧導論"}
          bgImage={img_ai}
          id="ai"
          scrollMargin="150px"
        />
        <Container
          maxW={"6xl"}
          py="150"
          fontSize="xl"
          fontFamily={`"Open Sans", sans-serif`}
          centerContent
        >
          <Stack spacing={"100px"} px={{ base: 5, md: 10, lg: 100 }}>
            <Text textAlign={"justify"}>
              &emsp;&emsp;對於人工智慧導論課程，我們這組三個人經過討論決定製作
              {""}
              「自動追蹤電子柵欄內人流走向。」原因是因為影像辨識人臉或服裝{""}
              容易受到喬裝易容而追丟目標人物，但每個人的走路方式大不相同，{""}
              因此，可以透過步態預測來分析特定人物的走向，{""}
              讓儀器自動追蹤其目的地，來幫助警察更快且更方便地找到犯人。{""}
              此外，也可以應用於路口監視器觀察行人走動，若發現行為異常或突然倒下的行人，
              {""}
              會立刻通報119來爭取搶救時間。主要流程如下：
              <br />
              <br />
              <Text as={"span"} fontWeight={"bold"}>
                1. 影像前處理
              </Text>
              <br />
              <br />
              &emsp;&emsp;拍攝好數個走路影片後，藉由opencv將影片切成數張照片。
              {""}
              接著，使用roboflow對照片中的行人貼上「人」的標籤並訓練模型來萃取出人的照片
              {""}
              以製作人像剪影來去除衣服、配件所造成的顏色雜訊。
            </Text>
            <Box
              bgImage={img_labeling_people}
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              h={{ base: "400px", lg: "500px" }}
              bgRepeat={"no-repeat"}
              bgPosition={"center"}
              bgSize={"cover"}
            />
            <Text textAlign={"justify"}>
              <Text as={"span"} fontWeight={"bold"}>
                2. 訓練步態預測模型
              </Text>
              <br />
              <br />
              &emsp;&emsp;接著開始利用剪影來訓練分辨角度的模型，
              並藉由RNN來得知目標人物的走向。例如，
            </Text>
          </Stack>
        </Container>

        {/* image detection */}
        <Banner
          brightness={"20%"}
          title={"影像處理、電腦視覺及深度學習概論"}
          bgImage={img_vision}
          id="vision"
          scrollMargin="150px"
        />
        <Container
          maxW={"6xl"}
          py="150"
          fontSize="xl"
          fontFamily={`"Open Sans", sans-serif`}
          centerContent
        >
          <Stack spacing={"100px"} px={{ base: 5, md: 10, lg: 100 }}>
            <Text textAlign={"justify"}>
              &emsp;&emsp;目前影像處理、電腦視覺及深度學習概論課程中，{""}
              已經找好組員，決定跟著教授教學的內容來決定專題做什麼。
            </Text>
          </Stack>
        </Container>

        {/* c# unity */}
        <Banner
          title={"視窗程式設計"}
          bgImage={img_unity}
          id="windows"
          scrollMargin="150px"
        />
        <Container
          maxW={"6xl"}
          py="150"
          fontSize="xl"
          fontFamily={`"Open Sans", sans-serif`}
          centerContent
        >
          <Stack spacing={"100px"} px={{ base: 5, md: 10, lg: 100 }}>
            <Text textAlign={"justify"}>
              &emsp;&emsp;目前視窗程式設計的課程中在學習C#和使用Visual
              Studio來建立.net的視窗程式。後續將繼續學習Windows
              Forms和Unity程式開發。{""}
              目前對於期末專題的想法是使用Unity開發遊戲。
            </Text>
          </Stack>
        </Container>

        <Footer />
      </Box>
    </>
  );
}

export default InProgress;
