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
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
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
import img_bg_design from "../assets/bg_design.jpg";
import img_unity_to_magicVR from "../assets/unity_to_magicVR.png";
import img_unity_to_magicVR1 from "../assets/unity_to_magicVR1.png";
import img_reward from "../assets/reward.jpg";
import img_bg_reward from "../assets/sunrise.jpg";

import pdf_proposal from "../assets/vr_proposal.pdf";

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
      name: "Magic VR",
      rating: "5",
    },
    {
      name: "樹莓派用法",
      rating: "5",
    },
    {
      name: "Linux",
      rating: "4",
    },
    {
      name: "RPI.GPIO",
      rating: "4",
    },
  ];

  // varable to justify the direction of img_unity_to_magicVR
  const imageDir = useBreakpointValue({ base: "row", lg: "column" });

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

        <Box
          mt={"150"}
          w={"full"}
          bgColor={"blackAlpha.800"}
          py={"200"}
          justify={"center"}
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack
            w={"full"}
            direction={{ base: "column", lg: "row" }}
            spacing={"15vw"}
            justify={"center"}
            textAlign={"justify"}
            alignItems={"center"}
          >
            {/* display in mobile */}
            {imageDir === "row" && (
              <Image
                src={img_unity_to_magicVR1}
                w={{ base: "80vw", md: "50vw" }}
                display={{ base: "inline", lg: "none" }}
              />
            )}
            {/* display in pc */}
            {imageDir === "row" || (
              <Image
                src={img_unity_to_magicVR}
                w={{ lg: "10vw" }}
                display={{ base: "none", lg: "inline-block" }}
              />
            )}
            <Text
              w={{ base: "80vw", md: "60vw", lg: "30vw" }}
              fontSize={"xl"}
              color={"gray.100"}
              fontFamily={`"Open Sans", sans-serif`}
              textAlign={"justify"}
            >
              &emsp;&emsp;原本我以為會使用Unity來製作VR專題，因此在大二暑假時有先自學製作
              <ChakraLink as={Link} to={"/project/side-project"} color={"cyan"}>
                Flappy Bird
              </ChakraLink>
              的遊戲，然而最後是使用哈瑪星科技所開發的虛擬實境編輯器Magic VR。
              所幸有學習Unity的基礎，在與其相似的Magic
              VR上，仍快速地熟悉並熟練運用。
            </Text>
          </Stack>
        </Box>
        <Center
          w={"full"}
          py={"150"}
          px={{ base: "5", md: "30" }}
          textAlign={"justify"}
          alignItems={"center"}
          justify={"center"}
        >
          <Text
            fontSize={"3xl"}
            fontWeight={"extrabold"}
            fontFamily={`"Open Sans", sans-serif`}
          >
            開發的路上非常艱辛，我也因此學會幾個重要的觀念：
          </Text>
        </Center>
        {/* 1. have a good design */}
        <Banner title={"1. 要有好的事件傳遞。"} bgImage={img_bg_design} />
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
          <Text
            w={{ base: "80vw", md: "60vw" }}
            px={{ base: "5", md: "30" }}
            fontSize={"xl"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
            textAlign={"justify"}
          >
            &emsp;&emsp;在開發初期，由於把很多事件都綁死，導致後期開發都要把過去開發的事件重寫。
            這讓我學會寫code前審視邏輯與架構，確立事件的傳遞必須具有彈性。
          </Text>
        </VStack>

        {/* 2. solve the problem by oneself */}
        <Banner title={"2. 問題要自己解決。"} bgImage={img_bg_design} />

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
          <Text
            w={{ base: "80vw", md: "60vw" }}
            px={{ base: "5", md: "30" }}
            fontSize={"xl"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
            textAlign={"justify"}
          >
            &emsp;&emsp;基於MagicVR是新的軟體，實驗室的學長姊其實也不會操作，因此發生的許多問題，
            無論是程式問題或是跑不出來的問題，都要由我們自己解決。我相信日後做研究也同樣需要自己探查論文，解決問題，
            因此，我很慶幸及早學會不依賴他人，而獨立解決問題。
          </Text>
        </VStack>

        {/* 2. solve the problem by oneself */}
        <Banner title={"3. 千萬要記得備份。"} bgImage={img_bg_design} />

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
          <Text
            w={{ base: "80vw", md: "60vw" }}
            px={{ base: "5", md: "30" }}
            fontSize={"xl"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
            textAlign={"justify"}
          >
            &emsp;&emsp;我還記得大三下開學時檔案突然之間就打不開了，裡面辛辛苦苦建立的場景、事件全部都損毀。
            後來花好多時間才重新建立先前大三上所開發的場景與事件。這慘痛的代價讓我知道，做完一件事情後，千萬記得要備份。
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
              &emsp;&emsp;為了製作完善的樹莓派虛擬場景，為此，請教實驗室學長姐來學習樹莓派和Linux。
              同時自己也購買一台樹莓派與教學指南，來學習基本指令和嘗試做音樂播放器和智慧家庭。
              從中我感覺受益良多，並且發現Linux真的好好用，只要打指令就可以完成許多事項，令我愛不釋手。
              此外，樹莓派除了當做音樂播放器和智慧家庭的中控外，我認為還有許多用途，例如結合opencv來做影像辨識應用等，
              等著我去發掘。因此，我很高興可以學習到這些以往不知的知識。
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
              研究企劃書{" "}
              <Text as={"span"} fontWeight={"thin"}>
                |
              </Text>{" "}
              Reasearch Proposal
            </Heading>
            <Text mt={"5"}>
              申請科技部大專生專題計畫計劃書，已刪除首頁個人資料表。
            </Text>
            <AspectRatio w={{ base: "auto", lg: "50vw" }} ratio={3 / 4}>
              <iframe
                title="numerical opt pdf"
                src={pdf_proposal}
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
