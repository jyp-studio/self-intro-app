import {
  Link as ChakraLink,
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
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  FiHome,
  FiCompass,
  FiCommand,
  FiMessageCircle,
  FiBox,
} from "react-icons/fi";
import {
  BsGearFill,
  BsLightbulbFill,
  BsAwardFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

import "@fontsource/open-sans";
import "@fontsource/nunito-sans";

import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Banner from "../components/Banner";
import Rating from "../components/Rating";

import img_uml from "../assets/vr_uml.png";
import img_bg from "../assets/bg_vr.jpg";
import img_abstract from "../assets/raspberry_pi.jpg";
import img_bg_sticky from "../assets/bg_sticky_note.jpg";
import img_reward from "../assets/reward.jpg";
import img_bg_reward from "../assets/sunrise.jpg";
import img_numerical_poster1 from "../assets/numerical_poster1.png";
import img_numerical_poster2 from "../assets/numerical_poster2.png";
import img_numerical_poster3 from "../assets/numerical_poster3.png";
import img_numerical_poster4 from "../assets/numerical_poster4.png";
import img_Albert_Einstein from "../assets/Albert_Einstein.jpg";

function VR() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: FiHome, href: "#" },
    { name: "Abstract", icon: FiCompass, href: "#abstract" },
    { name: "Architecture", icon: FiCommand, href: "#architecture" },
    { name: "Thoughts", icon: FiMessageCircle, href: "#thoughts" },
    { name: "Demo", icon: FiBox, href: "#demo" },
  ];
  // Icon box infomation
  const IconBoxItems = [
    {
      icon: BsFillPersonFill,
      title: "導師/實驗室",
      text: "黃悅民教授/多媒體網路實驗室",
    },
    {
      icon: BsLightbulbFill,
      title: "設計理念",
      text: "將VR的應用範圍拓展到教育上",
    },
    {
      icon: BsGearFill,
      title: "Tool",
      text: "Magic VR, Python, Linux, Blender, Cinema 4D",
    },
    {
      icon: BsAwardFill,
      title: "獲得補助",
      text: "科技部大專生計畫(MOST) & 成大工學院補助",
    },
  ];

  // what I learn im class with name and rating.
  const Gain = [
    {
      name: "Numerical method",
      rating: "5",
    },
    {
      name: "python-tkinter",
      rating: "5",
    },
    {
      name: "python-pandas",
      rating: "4",
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
          mainTitle={"VR專題"}
          mainColor={"cyan.300"}
          subColor={"cyan.100"}
          subTitle={"探討情境學習融入虛擬實境對學生學習表現與參與度之影響"}
        />

        {/* icon box */}
        <Container maxW={"6xl"} centerContent>
          <Flex
            flexWrap={"wrap"}
            justify={"center"}
            justifyContent={"space-around"}
            marginTop={"100px"}
          >
            {IconBoxItems.map((item, index) => (
              <WrapItem key={index} py={{ base: "3", md: "3", lg: "5" }}>
                <IconBox
                  bgColor={"cyan.100"}
                  iconColor={"cyan.800"}
                  iconBoxSize={{ base: "3em", md: "3em", lg: "5vw" }}
                  textBoxSize={{ base: "60vw", md: "40vw", lg: "17vw" }}
                  textSize={{ base: "sm", md: "lg", lg: "lg" }}
                  {...item}
                />
              </WrapItem>
            ))}
          </Flex>
        </Container>

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
              摘要{" "}
              <Text as={"span"} fontWeight={"thin"}>
                |
              </Text>{" "}
              Abstract
            </Heading>
            <Image src={img_abstract} w={"full"} h={"400px"} fit={"cover"} />

            <Text
              py={"10"}
              fontFamily={`"Open Sans", sans-serif`}
              fontSize="xl"
              w={"full"}
              px={{ base: "5", md: "5", lg: "10" }}
              textAlign={"justify"}
            >
              &emsp;&emsp;本研究探討虛擬實境（Virtual
              Reality，簡稱VR。）結合情境模擬學習（Simulation based
              learning）應用於教育上是否能增進學生學習效果並提升參與度。{""}
              透過虛擬實境編輯器建立適合學習
              <Text as={"span"} fontWeight={"bold"}>
                樹莓派
              </Text>
              的情境，並利用虛擬環境的無限性增添劇情、任務等要素，
              {""}
              使學習者對樹莓派的基本連接方式、功能、和應用，有更加深入的認識與了解。
              {""}
              接著，利用前、後測的調查問卷來數據化實驗組與對照組的資料，{""}
              即虛擬實境學習方式與一般課堂簡報學習方式的測量結果。{""}
              最後，藉由數據分析兩者之間的差異，以此知悉將情境模擬學習融入虛擬實境之中，
              {""}
              對於學生學習表現和參與度，是否有所提升與影響。
            </Text>
          </Box>
        </Container>

        <Box
          bg={useColorModeValue("gray.50", "blackAlpha.500")}
          w={"full"}
          mt={"120"}
          py={"10"}
        >
          <Container maxW={"8xl"} marginTop={"100"} centerContent>
            <Box>
              <Heading
                fontFamily={`"Open Sans", sans-serif`}
                scrollMargin="100px"
                py={"4"}
                px={"5"}
                id={"trailer"}
                w={{ base: "auto", lg: "full" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                前導片{" "}
                <Text as={"span"} fontWeight={"thin"}>
                  |
                </Text>{" "}
                Trailer
              </Heading>

              <AspectRatio
                w={{ base: "70vw", md: "60vw", lg: "67vw" }}
                ratio={16 / 9}
              >
                <iframe
                  title="vr project trailer video"
                  src="https://www.youtube.com/embed/rW8oSm2Rcqc"
                  frameborder="0"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
            <Box marginTop={"200"} marginBottom={"150"}>
              <Heading
                fontFamily={`"Open Sans", sans-serif`}
                scrollMargin="100px"
                py={"4"}
                px={"5"}
                id={"architecture"}
                w={{ base: "auto", lg: "full" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                研究方法{" "}
                <Text as={"span"} fontWeight={"thin"}>
                  |
                </Text>{" "}
                Research Method
              </Heading>

              <Box
                bg="cyan.100"
                boxShadow="lg"
                w={{ base: "90vw", md: "70vw", lg: "67vw" }}
              >
                <Image src={img_uml} p={{ base: "2", md: "5", lg: "8" }} />
              </Box>
            </Box>
          </Container>
        </Box>

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
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={"10"}
            justify={"space-around"}
            textAlign={"justify"}
            alignItems={"center"}
          >
            <Box
              bgImage={img_Albert_Einstein}
              w={{ base: "80vw", md: "60vw", lg: "30vw" }}
              h={"600px"}
              bgPosition={"center"}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
            />
            <Text
              w={{ base: "80vw", md: "60vw", lg: "30vw" }}
              px={{ base: "5", md: "30" }}
              fontSize={"3xl"}
              fontWeight={"extrabold"}
              color={"gray.100"}
              fontFamily={`"Open Sans", sans-serif`}
              textAlign={"justify"}
            >
              如果我有一小時拯救世界，我會花55分鐘去確認問題為何，只以5分鐘尋找解決方案。
              <Text textAlign={"right"}>— Albert Einstein</Text>
            </Text>
          </Stack>
          <Text
            w={{ base: "80vw", md: "60vw" }}
            px={{ base: "5", md: "30" }}
            fontSize={"xl"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
            textAlign={"justify"}
          >
            &emsp;&emsp;
            <ChakraLink
              href="https://www.laimm.net/about"
              textDecoration="underline"
              fontWeight="bolder"
              isExternal
            >
              游濟華
              <ExternalLinkIcon mx="2px" />
            </ChakraLink>
            教授曾對我們說：「
            <Text as={"span"} fontWeight={"bold"} color={"cyan.300"}>
              最好的學習方式便是將所學應用於生活中。
            </Text>
            」因此，為了理解學生是否有的理解數值方法這堂課的知識，教授要求我們將所學的工具應用於生活之中。
            {""}
            老實說這個問題讓我思索了好幾週，腦中都是工程應用，一點日常應用的影子都沒有。
            {""}
            然而所幸，在經過數週不眠不休地思索，以及參與設計思考工作坊，將思維發散並收束後，終於想出應用領域—「股票市場」。
          </Text>
          <Image
            src={img_numerical_poster1}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
          <Text
            px={{ base: "5", md: "10", lg: "30" }}
            fontSize={"3xl"}
            fontWeight={"bold"}
            textAlign={"justify"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
          >
            工作坊中，藉由小組討論的方式來發散想法與構想可行性。
          </Text>
          <Image
            src={img_numerical_poster2}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
          <Text
            px={{ base: "5", md: "10", lg: "30" }}
            fontSize={"3xl"}
            fontWeight={"bold"}
            textAlign={"justify"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
          >
            完成後，設計流程與GUI介面。
          </Text>
          <Image
            src={img_numerical_poster3}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
          <Text
            px={{ base: "5", md: "10", lg: "30" }}
            fontSize={"3xl"}
            fontWeight={"bold"}
            textAlign={"justify"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
          >
            最後，撰寫摘要來向他人報告。
          </Text>
          <Image
            src={img_numerical_poster4}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
          <Text
            px={{ base: "5", md: "10", lg: "30" }}
            fontSize={"3xl"}
            fontWeight={"bold"}
            textAlign={"justify"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
          >
            &emsp;&emsp;小組結束後，再各自以同樣的方式，發想自己的主題，也因此我後來決定製作股市回測。
          </Text>
        </VStack>

        {/* 2. gain */}
        <Banner title={"獲得收穫"} bgImage={img_bg_reward} brightness={"90%"} />
        <Box
          bg={useColorModeValue("gray.50", "blackAlpha.500")}
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
              mt={"150"}
              px={{ base: "5", md: "10" }}
            >
              &emsp;&emsp;這次的專題研究，我主要
              <Text as={"span"} fontWeight={"bold"}>
                複習pandas和學習tkinter套件
              </Text>
              。同時，在整學期的數值方法中，我從游濟華教授學到最重要的道理是：「
              <Text as={"span"} fontWeight={"bold"}>
                將所學結合電腦科學來解決生活問題。
              </Text>
              」原因是，現在科技突飛猛進，許多問題電腦都可以幫我們解決，甚至比我們手算的還精確。因此，
              {""}
              我們需要的已經不是使用老舊的工具，自己手算，而是將我們的工具，藉由coding的方式，讓電腦來幫我們計算。
            </Text>
          </Container>
        </Box>

        <Container maxW={"8xl"} py="3" mt={"100"} centerContent>
          <Box marginTop={"10"} justify={"center"}>
            <Heading
              fontFamily={`"Open Sans", sans-serif`}
              scrollMargin="100px"
              py={"4"}
              px={"5"}
              id={"written-report"}
              w={{ base: "auto", lg: "full" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              專題報告書{" "}
              <Text as={"span"} fontWeight={"thin"}>
                |
              </Text>{" "}
              Written Report
            </Heading>

            <AspectRatio w={{ base: "auto", lg: "50vw" }} ratio={3 / 4}>
              <iframe
                title="numerical opt pdf"
                src="https://drive.google.com/file/d/15MRtr8mL9XtxG7JyL70cNwWiCeweTAIf/preview"
                position="absolute"
                width={"100%"}
                height={"100%"}
                allow="autoplay"
              />
            </AspectRatio>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default VR;

const ThoughtsText = () => {
  return (
    <>
      &emsp;&emsp;原本我以為會使用Unity來製作VR專題，因此在大二暑假時有先自學製作
      <ChakraLink as={Link} to={"/project/side-project"} color={"cyan"}>
        Flappy Bird
      </ChakraLink>
      的遊戲，然而最後是使用哈瑪星科技所開發的虛擬實境編輯器Magic VR。
      所幸有學習Unity的基礎，在與其相似的Magic VR上，仍快速地熟悉並熟練運用。
      <br />
      &emsp;&emsp;開發的路上非常艱辛，我也因此學會幾個重要的觀念：
      一、要有好的事件傳遞。在開發初期，由於把很多事件都綁死，導致後期開發都要把過去開發的事件重寫。
      這讓我學會寫code前審視邏輯與架構，確立事件的傳遞必須具有彈性。
      二、問題要自己解決。基於MagicVR是新的軟體，實驗室的學長姊其實也不會操作，因此發生的許多問題，
      無論是程式問題或是跑不出來的問題，都要由我們自己解決。我相信日後做研究也同樣需要自己探查論文，解決問題，
      因此，我很慶幸及早學會不依賴他人，而獨立解決問題。
      三、千萬要記得備份。我還記得大三下開學時檔案突然之間就打不開了，裡面辛辛苦苦建立的場景、事件全部都損毀。
      後來花好多時間才重新建立先前大三上所開發的場景與事件。這慘痛的代價讓我知道，做完一件事情後，千萬記得要備份。
      <br />
      &emsp;&emsp;除此之外，在期望學生可以更融入VR之中並提升興趣與參與度，我設計一套劇情、任務與對戰系統於虛擬實境之中。
      如同Samuel
      Johnson(1709)曾說：「偉大的作品並非靠力量，而是靠堅持所完成的。」我相信我對專案的堅持，
      可以提升學生的學習成效，並讓VR的技術步入教育之中，使更多人受益。
    </>
  );
};
