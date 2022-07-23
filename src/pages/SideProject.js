import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  AspectRatio,
  WrapItem,
  Container,
  Button,
  VStack,
  Badge,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import video from "../assets/flappy_bird.mp4";
import img_ha_structure from "../assets/ha_structure.png";
import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { FaUnity } from "react-icons/fa";
import { FiHome, FiLayout, FiMusic, FiSmartphone } from "react-icons/fi";
import {
  BsGearFill,
  BsLightbulbFill,
  BsPinAngleFill,
  BsPenFill,
} from "react-icons/bs";

function SideProject() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: FiHome, href: "#" },
    { name: "Unity Flappy Bird", icon: FaUnity, href: "#flappy-bird" },
    { name: "Home Assistant", icon: FiSmartphone, href: "#ha" },
    { name: "React App", icon: FiLayout, href: "#react" },
    { name: "Music Player", icon: FiMusic, href: "#mp" },
  ];
  // Icon box infomation
  const IconBoxItems = [
    {
      icon: BsGearFill,
      title: "Tool",
      text: "Python, pygame module, git",
      bg: "teal.200",
    },
    {
      icon: BsPenFill,
      title: "Design Pattern",
      text: "MVC & Observer pattern",
      bg: "teal.200",
    },
    {
      icon: BsLightbulbFill,
      title: "設計理念",
      text: "用遊戲的方式來告訴大眾Covid-19的危險性",
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
            fontSize={"6xl"}
            color="teal.300"
            py="5"
            w={"full"}
          >
            Side Project
          </Heading>

          <Text fontSize="2xl">
            &emsp;&emsp;我很喜歡學習各項新知識與技術，而這些是我學習各項技術時，嘗試動手做出的專案！
          </Text>

          {/* Unity Flappy Bird */}
          <Heading scrollMargin="100px" py="10" w={"full"} id={"flappy-bird"}>
            Unity Flappy Bird
          </Heading>
          <Flex flexWrap={"wrap"} w={"full"} justify={"center"}>
            <AspectRatio
              w={{ base: "70vw", md: "60vw", lg: "40vw" }}
              ratio={4 / 3}
            >
              <iframe
                title="flappy bird video"
                src={video}
                allowFullScreen
                controls="0"
                autoplay="0" // disable video from auto playing; however, not working:(
                volume="0"
              />
            </AspectRatio>

            <VStack w={"30vw"} px={"8"}>
              <Text fontSize={"2xl"} textAlign={"justify"}>
                &emsp;&emsp;由於大三專題要製作教育方面的虛擬實境遊戲，因此我趁著大二升大三的暑假自學Unity和C#。
                一開始主要使用C#寫腳本，因為不知道函式名稱，時常要上網查找許多函式。所幸後來發現有Unity
                bolt，可以用圖形化的介面來顯示與串接函式，方便許多。
                <br />
                &emsp;&emsp;雖然說後來製作虛擬實境使用的工具是哈瑪星科技的虛擬實境編輯器
                {"("}MagicVR{")"}，
                然而這並不代表浪費學習Unity的時間。原因有二，
                第一是因為MagicVR的介面與Unity有幾分類似，讓我在開發時可以快速上手；
                第二則是學習Unity
                bolt，讓我可以更明確地設計程式的流程與架構，使我開發虛擬實境的內容時，能夠更加有彈性。
              </Text>
              <HStack>
                <Badge
                  colorScheme={"teal"}
                  fontSize={"xl"}
                  borderRadius="full"
                  px={"2"}
                >
                  Unity bolt
                </Badge>
                <Badge
                  colorScheme={"blue"}
                  fontSize={"xl"}
                  borderRadius="full"
                  px={"2"}
                >
                  C#
                </Badge>
                <Badge
                  colorScheme={"red"}
                  fontSize={"xl"}
                  borderRadius="full"
                  px={"2"}
                >
                  Flexibility
                </Badge>
              </HStack>
            </VStack>
          </Flex>

          {/* Home Assistant */}
          <Heading scrollMargin="100px" py="10" w={"full"} id={"ha"}>
            Home Assistant
          </Heading>
          <HStack>
            <Badge
              colorScheme={"teal"}
              fontSize={"xl"}
              borderRadius="full"
              px={"2"}
            >
              Raspberry Pi 4
            </Badge>
            <Badge
              colorScheme={"blue"}
              fontSize={"xl"}
              borderRadius="full"
              px={"2"}
            >
              Home Assistant
            </Badge>
            <Badge
              colorScheme={"red"}
              fontSize={"xl"}
              borderRadius="full"
              px={"2"}
            >
              ZeroTier
            </Badge>
          </HStack>
          <Flex flexWrap={"wrap"} w={"full"} justify={"center"}>
            <Text fontSize={"2xl"} textAlign={"justify"}>
              &emsp;&emsp;時常在網路上看到有人利用樹莓派製作音樂播放器、Minecraft伺服器等。
              恰好大三製作專題時在學習樹莓派的應用便買了一個來玩，一開始是使用紅外線來開關連接在樹莓派GPIO上的燈泡。
              後來藉著這個遠端操控的想法，上網抓取資料，開始學著使用Home
              Assistant。 由於Home
              Assistant上手需要一定的程式背景，因此國內並沒有許多資料可以參考。
              所幸一直都有在練習英文，在查找、閱讀英文文獻時並沒有遇到相當大的問題。
              <br />
              &emsp;&emsp;由於我想要Home Assistant的所有功能，但是不想安裝Home
              Assistant的OS在樹莓派上(這樣會使得樹莓派只能用來使用Home
              Assistant)，因此我在樹莓派上安裝Home Assistant的Supervisor版本。
              Supervisor版本的安裝步驟可說是所有版本中最麻煩的，也因此我有將我整個安裝過程寫在
              <ChakraLink
                href="https://hackmd.io/@JYPcompany/install_ha_supervised"
                color={"teal.400"}
                isExternal
              >
                HackMD
                <ExternalLinkIcon mx="2px" />
              </ChakraLink>
              ，希望可以幫助到需要的人，不用再花很多時間查找資料。
              <br />
              &emsp;&emsp;由於我是在宿舍使用樹莓派當做智慧家庭的中控，因此樹莓派連接的是wifi，
              會呈現浮動ip的狀態，使得每次連進去伺服器時都要重新輸入新的IP。為了解決這個問題，
              我使用ZeroTier創建虛擬LAN，將我的電腦、手機以及樹莓派加入其中形成一個P2P的私有網路。
              如此一來，即使樹莓派的ip改變、或是在不同網路下，我也可以在手機、電腦上訪問樹莓派上的Home
              Assistant。
            </Text>
            <Box w={{ base: "90vw", md: "70vw", lg: "70vw" }}>
              <Image src={img_ha_structure} />
            </Box>
          </Flex>

          {/* React app */}
          <Heading scrollMargin="100px" py="10" w={"full"} id={"react"}>
            React app
          </Heading>

          {/* Music Player */}
          <Heading scrollMargin="100px" py="10" w={"full"} id={"mp"}>
            Music Player
          </Heading>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default SideProject;
