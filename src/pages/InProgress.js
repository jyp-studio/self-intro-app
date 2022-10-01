import {
  Box,
  Text,
  Container,
  Stack,
  Skeleton,
  Image,
  Center,
} from "@chakra-ui/react";

import { FiHome, FiCommand, FiTv, FiActivity } from "react-icons/fi";

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
    { name: "Home", icon: <FiHome />, href: "#" },
    { name: "人工智慧導論", icon: <FiActivity />, href: "#ai" },
    {
      name: "影像處理、電腦視覺及深度學習概論",
      icon: <FiCommand />,
      href: "#vision",
    },
    { name: "視窗程式設計", icon: <FiTv />, href: "#windows" },
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
              &emsp;&emsp;為了更深入了解深度學習、電腦視覺等AI相關的知識，{""}
              因此，大四選修資工系人工智慧導論，{""}
              影像處理、電腦視覺及深度學習概論，和視窗程式設計課程。{""}
              分別都要製作相關專題。
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
              {""}「
              <Text as={"span"} fontWeight={"bold"}>
                自動定位監視器內行人步態走向預測
              </Text>
              。」原因是因為影像辨識人臉或服裝時，{""}
              容易受到喬裝易容而追丟目標人物。但每個人的走路方式大不相同，因此，可以
              {""}
              <Text as={"span"} fontWeight={"bold"}>
                透過步態預測來分析特定人物的走向，讓儀器自動追蹤其目的地
              </Text>
              ，來幫助警察更快且更方便地找到犯人。{""}
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
            <Skeleton isLoaded>
              <Center>
                <Image
                  src={img_labeling_people}
                  w={{ base: "80vw", md: "60vw", lg: "60vw" }}
                />
              </Center>
            </Skeleton>
            <Text textAlign={"justify"}>
              <Text as={"span"} fontWeight={"bold"}>
                2. 訓練步態預測模型
              </Text>
              <br />
              <br />
              &emsp;&emsp;接著開始利用剪影來訓練分辨角度的模型，
              完成後可以藉由擷取影片中特定人物在每幀的行進角度來得知他的走向。
              <br />
              <br />
              <Text as={"span"} fontWeight={"bold"}>
                3. 建立GUI介面
              </Text>
              <br />
              <br />
              &emsp;&emsp;為了讓沒有程式背景的人也可以輕易使用，GUI是必備的設計。
              {""}
              我們預計設計載入影片的按鈕，播放、暫停、與快進的控制桿，{""}
              以及選取特定人物進行追蹤的按鈕。{""}
              此外，我們也將製作html網頁並藉由POST和GET抓取製作好的python程式API。
              {""}
              已達成跨平台的應用。
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
              &emsp;&emsp;影像處理、電腦視覺及深度學習概論課程中，{""}
              教授說要做期末專題，要求我們找好組員。目前已找好組員，等待教授公佈專題方向和題目。
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
