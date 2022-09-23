import {
  Box,
  Text,
  Container,
  VStack,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaUnity } from "react-icons/fa";
import { FiHome, FiLayout, FiMusic, FiSmartphone } from "react-icons/fi";

import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import SideProjectCard from "../components/SideprojectCard";

import img_ha_structure from "../assets/ha_structure.png";
import img_ha_structure_darkmode from "../assets/ha_structure_darkmode.png";
import img_react from "../assets/react_schedule.png";
import img_bg from "../assets/bg_sideproject.jpg";

function SideProject() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: <FiHome />, href: "#" },
    { name: "Unity Flappy Bird", icon: <FaUnity />, href: "#flappy-bird" },
    { name: "Home Assistant", icon: <FiSmartphone />, href: "#ha" },
    { name: "React App", icon: <FiLayout />, href: "#react" },
    { name: "Music Player", icon: <FiMusic />, href: "#mp" },
  ];

  // side projects
  const SideProject = [
    {
      id: "flappy-bird",
      name: "Unity Flappy Bird",
      badge: ["Unity bolt", "C#", "Flexibility"],
      text: <UnityText />,
      video: "https://www.youtube.com/embed/isXY8-sT2Xg",
    },
    {
      id: "ha",
      name: "Home Assistant",
      badge: ["Raspberry Pi 4", "Smart Home", "ZeroTier"],
      text: <HAText />,
      image: useColorModeValue(img_ha_structure, img_ha_structure_darkmode),
    },
    {
      id: "react",
      name: "React App",
      badge: ["JavaScript", "HTML/CSS", "PHP/Laravel"],
      text: <ReactText />,
      image: img_react,
    },
    {
      id: "mp",
      name: "Music Player",
      badge: ["Rasberry Pi 4", "Python-Pygame", "Spotify"],
      text: <MusicPlayerText />,
      video: "https://www.youtube.com/embed/dTfJ4TKFkAo",
    },
  ];
  return (
    <>
      <Navbar />

      <Sidebar linkItems={LinkItems} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        <Title
          image={img_bg}
          mainColor={"blackAlpha.800"}
          mainTitle={"Side Project"}
          subColor={"black"}
          subTitle={
            "我很喜歡學習各項新知識與技術，而這些是我學習各項技術時，嘗試動手做出的專案！"
          }
        />
        <Container maxW={"6xl"} py="3" mt={"100"} centerContent>
          <VStack spacing={"100px"}>
            {SideProject.map((item, index) => (
              <SideProjectCard key={index} {...item} />
            ))}
          </VStack>
        </Container>

        <Footer />
      </Box>
    </>
  );
}

export default SideProject;

function UnityText() {
  return (
    <Text fontSize={"xl"} textAlign={"justify"} py={5}>
      &emsp;&emsp;由於大三專題要製作教育方面的虛擬實境遊戲，因此我趁著大二升大三的暑假自學Unity和C#。
      一開始主要使用C#寫腳本，因為不知道函式名稱，時常要上網查找許多函式。所幸後來發現有Unity
      bolt，可以用圖形化的介面來顯示與串接函式，方便許多。
      <br />
      <br />
      &emsp;&emsp;雖然說後來製作虛擬實境使用的工具是哈瑪星科技的虛擬實境編輯器
      {"("}MagicVR{")"}， 然而這並不代表浪費學習Unity的時間。原因有二，
      第一是因為MagicVR的介面與Unity有幾分類似，讓我在開發時可以快速上手；
      第二則是學習Unity
      bolt，讓我可以更明確地設計程式的流程與架構，使我開發虛擬實境的內容時，能夠更加有彈性。
    </Text>
  );
}

function HAText() {
  return (
    <Text fontSize={"xl"} textAlign={"justify"} py={5}>
      &emsp;&emsp;時常在網路上看到有人利用樹莓派製作音樂播放器、Minecraft伺服器等。
      恰好大三製作專題時在學習樹莓派的應用便買了一個來玩，一開始是使用紅外線來開關連接在樹莓派GPIO上的燈泡。
      後來藉著這個遠端操控的想法，上網抓取資料，開始學著使用Home Assistant。
      由於Home Assistant上手需要一定的程式背景，因此國內並沒有許多資料可以參考。
      所幸一直都有在練習英文，在查找、閱讀英文文獻時並沒有遇到相當大的問題。
      <br />
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
      <br />
      &emsp;&emsp;我是在宿舍使用樹莓派當做智慧家庭的中控，因此樹莓派連接的是wifi，
      會呈現浮動IP的狀態，使得每次連進去伺服器時都要重新輸入新的IP。為了解決這個問題，
      我使用ZeroTier創建虛擬LAN，將我的電腦、手機以及樹莓派加入其中形成一個P2P的私有網路。
      如此一來，即使樹莓派的ip改變、或是在不同網路下，我也可以在手機、電腦上訪問樹莓派上的Home
      Assistant。
    </Text>
  );
}

function ReactText() {
  return (
    <Text fontSize={"xl"} textAlign={"justify"} py={5}>
      &emsp;&emsp;現今我們看到的一切幾乎都是JavaScript所寫成。無論是網頁，抑或購物程式如蝦皮購物，
      甚至是coding常用的VS
      code也是使用與相關TypeScript所寫成。因此，這促使我想學習JavaScript的動力，
      我想嘗試建立網頁與應用程式，不但可以滿足我學習的欲望、增加謀生的技能；同時，我也想幫父母建立一個購物網站，
      完成父親的願望。
      <br />
      <br />
      &emsp;&emsp;學習JS的過程中，我使用React建立經典的前端購物網站，包含選購商品，購物籃與結帳。
      成功架設一個購物網站後，我開始建立自己的「自我介紹網站」並使用chakra-ui來美化介面。
      行銷自己的同時也學習網頁排版與CSS語法。
      <br />
      <br />
      &emsp;&emsp;雖然目前沒有需求，但日後我也想學習後端的架設。先前曾參加資工系所開設的密集課程學習PHP和MySQL，
      學習基礎的資料庫建立。未來我想嘗試使用Laravel，一個開源的PHP框架，來實作後端的建設。
      希望可以幫助父親建立一個完整的互動式網頁包含著前後端。
    </Text>
  );
}

function MusicPlayerText() {
  return (
    <Text fontSize={"xl"} textAlign={"justify"} py={5}>
      &emsp;&emsp;我很喜歡聽音樂，為此當買到樹莓派的第一時間便是想讓他播放音樂，成為一個音樂播放器。
      我先嘗試使用raspotify來串接我的Spotify帳號，然而卻發現raspotify只是讓樹莓派變成可以被spotify辨識到的播放裝置而已，
      並不是我所期待的音樂播放器。因此，我決定運用先前所學的python-pygame建立一個音樂播放器，使我可以使用GUI畫面來切換音樂。
      <br />
      <br />
      &emsp;&emsp;使用pygame的音樂播放器非常成功，具備所有播放器所需的功能。然而由於播放器讀取的是檔案內的mp3檔案，
      缺點顯而易見的就是浪費掉我的spotify帳號。因此，未來我將串接Spotify的API來實現串流播放。
    </Text>
  );
}
