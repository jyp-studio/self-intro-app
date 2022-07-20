import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  AspectRatio,
  WrapItem,
  Container,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img_uml from "../assets/vr_uml.png";
import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
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
  BsAwardFill,
} from "react-icons/bs";

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
      icon: BsAwardFill,
      title: "導師/實驗室",
      text: "黃悅民教授/多媒體網路及數位學習實驗室",
      bg: "teal.200",
    },
    {
      icon: BsLightbulbFill,
      title: "設計理念",
      text: "將VR的應用範圍拓展到教育上",
      bg: "teal.200",
    },
    {
      icon: BsGearFill,
      title: "Tool",
      text: "Magic VR, Python, Linux, Blender, Cinema 4D",
      bg: "teal.200",
    },
    {
      icon: BsAwardFill,
      title: "獲得補助",
      text: "科技部大專生計畫(MOST) & 成大工學院補助",
      bg: "teal.200",
    },
  ];

  return (
    <>
      <Navbar />

      <Sidebar linkItems={LinkItems} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        <Container maxW={"8xl"} py="3" centerContent>
          <Heading
            marginTop={"85"}
            fontSize={"5vw"}
            color="teal.300"
            py="5"
            textAlign={"center"}
          >
            探討情境模擬學習融入
            <Text as={"span"} color={"yellow.500"}>
              虛擬實境
            </Text>
            對學生學習表現與參與度之影響
          </Heading>

          <Box py="10">
            <Heading scrollMargin="100px" id="abstract">
              Abstract:
            </Heading>
          </Box>
          <Box>
            <Text fontSize="2xl">
              <AbstractText />
            </Text>
          </Box>
          <Flex
            flexWrap="wrap"
            py="10"
            display={{ base: "block", md: "block", lg: "flex" }}
            justify={"center"}
          >
            {IconBoxItems.map((item) => (
              <WrapItem py="1">
                <IconBox
                  iconBoxSize={{ base: "3em", md: "3em", lg: "5vw" }}
                  textBoxSize={{ base: "50vw", md: "50vw", lg: "25vw" }}
                  textSize={{ base: "md", md: "xl", lg: "xl" }}
                  textColor={"teal.400"}
                  {...item}
                />
              </WrapItem>
            ))}
          </Flex>

          <Box py="10">
            <Heading scrollMargin="100px" id="architecture">
              Architecture:
            </Heading>
          </Box>
          <Box
            bg="teal.300"
            boxShadow="dark-lg"
            borderRadius="2xl"
            w={{ base: "90vw", md: "70vw", lg: "70vw" }}
          >
            <Image src={img_uml} p={{ base: "2", md: "5", lg: "8" }} />
          </Box>

          <Box py="10">
            <Heading scrollMargin="100px" id="thoughts">
              Thoughts:
            </Heading>
          </Box>
          <Box>
            <Text fontSize="2xl">
              <ThoughtsText />
            </Text>
          </Box>

          <Box px="10vw" py="10">
            <Heading scrollMargin="100px" id="demo">
              Demo:
            </Heading>
          </Box>

          <AspectRatio
            w={{ base: "70vw", md: "60vw", lg: "50vw" }}
            ratio={4 / 3}
          >
            <iframe
              title="tower defense demo video"
              src="https://www.youtube.com/embed/mkjUvo7B_K8"
              allowFullScreen
            />
          </AspectRatio>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default VR;

const AbstractText = () => {
  return (
    <>
      &emsp;&emsp;虛擬實境，英文名為Virtual
      Reality，簡稱VR，為現代帶來許多創造性與便利性。
      VR的應用相當廣泛，如在娛樂方面有VR電影與遊戲，讓使用者可以體驗身歷其境的冒險；在培訓方面有醫療、防災與機台模擬等，
      使學習者能有效學習技能。然而，對於在教育方面的應用卻是少之又少。因此，本研究決定將VR應用在教育上，探討虛擬實境對學生參與度的影響。
      <br />
      &emsp;&emsp;本研究在黃悅民導師所帶領的多媒體網路及數位學習實驗室下，使用哈瑪星科技的虛擬實境編輯器(Magic
      VR)輔以Python、Linux、Blender與Cinema
      4D來設計樹莓派應用於虛擬實境中，並將實驗對象分成實驗組與對照組，
      分別使用虛擬環境和實體簡報學習，並以前後測來取得實驗成效。
      <br />
      &emsp;&emsp;目前本研究已獲得科技部大專生計畫(MOST)與成大工學院補助。
    </>
  );
};

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
