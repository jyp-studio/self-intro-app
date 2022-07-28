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
} from "@chakra-ui/react";
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

import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

import img_uml from "../assets/uml.png";
import img_bg from "../assets/bg_digi.jpg";

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
        <Title
          brightness={"50%"}
          image={img_bg}
          mainColor={"yellow.400"}
          mainTitle={"Digi+ Talent 實習"}
          subColor={"orange.100"}
          subTitle={"與企業和跨領域人才合作共同製作專題"}
        />
        <Container maxW={"8xl"} py="3" centerContent>
          <Box py="10">
            <Heading scrollMargin="100px" id="abstract">
              Abstract:
            </Heading>
          </Box>
          <Box>
            <Text fontSize="xl">
              &emsp;&emsp;2019年，Covid-19突然大流行造成許多人死亡。然而，部分大眾卻仍對其抱持懷疑與不信的態度。
              <Text as="strong" textDecoration="underline">
                為了讓民眾了解Covid-19的危險性
              </Text>
              。因此決定以
              <Text as="strong" color="teal.400">
                衛教的核心思想設計塔防遊戲。
              </Text>
              玩家所要守護的家園即代表個人、家人與朋友的健康，而受病毒所感染的變種人類則試圖感染正常人類。
              <Text as="strong" textDecoration="underline">
                每一波的病毒都會越發增強代表著病毒的變種性與流行性
              </Text>
              。 期許大眾在遊玩遊戲之後能了解並更加重視Covid-19的危害。
              <br />
              &emsp;&emsp;本遊戲使用
              <Text as="strong" color="teal.400">
                Python-pygame製作
              </Text>
              ，遊戲主要使用
              <Text as="strong" color="teal.400">
                MVC(Model-View-Controller)
              </Text>
              當做主架構， 玩家事件則是使用
              <Text as="strong" color="teal.400">
                observer pattern
              </Text>
              以方便增修觸發事件。
            </Text>
          </Box>
          <Flex
            flexWrap="wrap"
            py="10"
            display={{ base: "block", md: "block", lg: "flex" }}
          >
            {IconBoxItems.map((item) => (
              <WrapItem py="1">
                <IconBox
                  iconBoxSize={{ base: "3em", md: "3em", lg: "5vw" }}
                  textBoxSize={{ base: "50vw", md: "40vw", lg: "17vw" }}
                  textSize={{ base: "sm", md: "lg", lg: "lg" }}
                  textColor={"teal.400"}
                  {...item}
                />
              </WrapItem>
            ))}
          </Flex>

          <Box py="10">
            <Heading scrollMargin="100px" id="trailer">
              Trailer:
            </Heading>
          </Box>
          <AspectRatio
            w={{ base: "70vw", md: "60vw", lg: "50vw" }}
            ratio={4 / 3}
          >
            <iframe
              title="tower defense demo video"
              src="https://www.youtube.com/embed/gTNaXtLUB8s"
              allowFullScreen
            />
          </AspectRatio>

          <Box py="10">
            <Heading scrollMargin="100px" id="architecture">
              Architecture:
            </Heading>
          </Box>

          <Box
            bg="teal.50"
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
            <Text fontSize="xl">
              &emsp;&emsp;在數週的設計思維工作坊中，我擔任
              <Text as="font" color="red">
                組長
              </Text>
              的職位，引領兩位組員分工合作完成這個遊戲。
              原先的工作分配為我做Tower和Enemy相關的動畫、運作模式和錨點選單等；另一位則是做選單以及遊戲介面；
              最後一位則是做Map與Potion相關運作方式。
              <br />
              &emsp;&emsp;然而，正當一切運作妥當時，遇到整個開發中
              <Text as="font" color="red">
                最大的難題
              </Text>
              ：其中有一位組員在快截止日期時，突然說他沒有學過程式，甚麼都沒做。
              因此，身為組長的我只好臨時改變工作分配，將較不需要coding的遊戲平衡與圖片蒐集交給他，
              而他原先所需做的Map和Potion則平分給其他人。所幸最後仍順利完成，並且被
              <Text as="strong" textDecoration="underline">
                教授點評進入選單、 遊戲流程與動畫做的很完善與順暢
              </Text>
              。他稱讚我們是
              <Text as="strong" color="red">
                「遊戲整體最完整的。」
              </Text>
              <br />
              &emsp;&emsp;雖然過程曲折，卻也讓我收穫許多。在整個工作坊期間，由於時間非常緊迫，提升我的抗壓性外，
              也因為上述意外，使我python能力也跟著增強。除此之外，
              <Text as="font" color="red">
                我學到最重要的是畫UML的重要性。
              </Text>
              以往我們coding時，時常注意的是語法以及效率。然而
              <Text as="strong" textDecoration="underline">
                在大型企劃，數萬行的程式碼中，語法和效率只是基本，更重要的是架構
              </Text>
              。舉例來說，當開發一個鳥的class，可能很理所當然的新增名字、種類等屬性，並新增fly的method來描述飛行方式。
              然而這時卻很容易使得日後開發遇到窘境，因為企鵝和鴕鳥不會飛。這便是一個簡單的例子來闡述架構、格局的重要性。
              <br />
              &emsp;&emsp;同時，
              <Text as="strong" textDecoration="underline">
                學習使用一些design pattern也使架構更加明確，開發時也更加方便
              </Text>
              。如使用obsever pattern在user
              requests時，當要新增觸發事件時，只要新增一個class寫功能，
              再到controller中新增這個class就完成了。不必到每個程式碼中新增或修改變數，省去許多繁瑣步驟。
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

export default Digi;
